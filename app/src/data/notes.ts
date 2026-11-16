// What the app does to notes. Every function here writes the document (the source) and lets store.ts refresh the caches.
import * as Y from 'yjs';
import { INDEX_VERSION } from '../doc/indexer.ts';
import { FRAGMENT, appendTree, toY, type Node } from '../doc/tree.ts';
import { db } from './db.ts';
import { getPref, setPref } from './prefs.ts';
import { META, MERGE, compact, putIndex, readDoc, rowsOf, withDoc } from './store.ts';

export const TRASH_DAYS = 30;
export const TOMBSTONE_DAYS = 90;
const DAY = 86_400_000;

/** A new document with its metadata, not stored yet. */
export function newDoc(id: string, at: number, tree?: Node): Y.Doc {
  const doc = new Y.Doc({ guid: id });
  doc.transact(() => {
    const meta = doc.getMap(META);
    meta.set('createdAt', at);
    meta.set('updatedAt', at);
  });
  if (tree) appendTree(doc, tree);
  return doc;
}

/** Stores a document that is not on this device yet, with its caches, in one transaction. */
export async function addDoc(id: string, doc: Y.Doc): Promise<void> {
  const { row, tokens, tasks } = rowsOf(id, doc);
  await db.transaction('rw', [db.docs, db.updates, db.notes, db.words, db.tasks, db.tombstones], async () => {
    await db.docs.put({ id, state: Y.encodeStateAsUpdate(doc) });
    await db.notes.put(row);
    await db.words.put({ id, tokens });
    await db.tasks.bulkAdd(tasks.map(t => ({ id, n: t.n, text: t.text, done: t.done ? (1 as const) : (0 as const) })));
    await db.tombstones.delete(id);
  });
}

export async function createNote(tree?: Node, at: number = Date.now()): Promise<string> {
  const id = crypto.randomUUID();
  const doc = newDoc(id, at, tree);
  await addDoc(id, doc);
  doc.destroy();
  return id;
}

const setMeta = (id: string, key: string, value: unknown) => withDoc(id, doc => void doc.getMap(META).set(key, value));
export const setPinned = (id: string, pinned: boolean) => setMeta(id, 'pinned', pinned);
/** To the trash: the note stays on the device for TRASH_DAYS, out of lists, search and tasks. */
export const trashNote = (id: string, at: number = Date.now()) => setMeta(id, 'deletedAt', at);
export const restoreNote = (id: string) => setMeta(id, 'deletedAt', 0);
export const trashNotes = async (ids: string[], at: number = Date.now()) => { for (const id of ids) await trashNote(id, at); };

/** Deleted for good: document and caches leave in one transaction, and a tombstone keeps a sync from bringing the note back. */
export async function purgeNotes(ids: string[], at: number = Date.now()): Promise<void> {
  await db.transaction('rw', [db.docs, db.updates, db.notes, db.words, db.tasks, db.tombstones], async () => {
    await db.docs.bulkDelete(ids);
    await db.notes.bulkDelete(ids);
    await db.words.bulkDelete(ids);
    for (const id of ids) {
      await db.updates.where('id').equals(id).delete();
      await db.tasks.where('id').equals(id).delete();
    }
    await db.tombstones.bulkPut(ids.map(id => ({ id, at })));
  });
}

export const trashedIds = () => db.notes.where('deletedAt').above(0).primaryKeys();
export const emptyTrash = async () => purgeNotes(await trashedIds());

/** Start-up housekeeping: notes in the trash for more than TRASH_DAYS go for good, old tombstones are forgotten. */
export async function purgeExpired(now: number = Date.now()): Promise<number> {
  const due = await db.notes.where('deletedAt').between(1, now - TRASH_DAYS * DAY, true, true).primaryKeys();
  if (due.length) await purgeNotes(due, now);
  await db.tombstones.where('at').below(now - TOMBSTONE_DAYS * DAY).delete();
  return due.length;
}

/** Brings a note's caches back in line with its document: rows left dirty by a crash, rows of an older index version, documents without a row. */
export async function reindex(): Promise<number> {
  const [dirty, old, docs, rows] = await Promise.all([
    db.notes.where('dirty').equals(1).primaryKeys(),
    db.notes.filter(n => n.v !== INDEX_VERSION).primaryKeys(),
    db.docs.toCollection().primaryKeys(),
    db.notes.toCollection().primaryKeys(),
  ]);
  const have = new Set(rows);
  const todo = new Set([...dirty, ...old, ...docs.filter(id => !have.has(id))]);
  for (const id of todo) {
    const doc = await readDoc(id);
    if (doc) {
      doc.destroy();
      await putIndex(id);
    } else await db.transaction('rw', db.notes, db.words, db.tasks, async () => {
      await db.notes.delete(id);
      await db.words.delete(id);
      await db.tasks.where('id').equals(id).delete();
    });
  }
  return todo.size;
}

const equal = (a: Uint8Array, b: Uint8Array) => a.length === b.length && a.every((v, i) => v === b[i]);

/** What merging `update` into the note `id` would do, without writing: add a note, change it, or nothing. */
export async function compare(id: string, update: Uint8Array): Promise<'new' | 'changed' | 'same'> {
  const local = await readDoc(id);
  if (!local) return 'new';
  const before = Y.encodeStateAsUpdate(local);
  Y.applyUpdate(local, update);
  const same = equal(before, Y.encodeStateAsUpdate(local));
  local.destroy();
  return same ? 'same' : 'changed';
}

/** Merges a document that came from outside (backup, import, sync) with the note of the same id, or adds it. Never overwrites: Yjs merges. */
export async function mergeNote(id: string, update: Uint8Array): Promise<'added' | 'merged' | 'same'> {
  const what = await compare(id, update);
  if (what === 'same') return 'same';
  if (what === 'new') {
    const doc = new Y.Doc({ guid: id });
    Y.applyUpdate(doc, update);
    await addDoc(id, doc);
    doc.destroy();
    return 'added';
  }
  await withDoc(id, doc => Y.applyUpdate(doc, update, MERGE), MERGE);
  await compact(id);
  return 'merged';
}

/* ---------- Tasks: checklist items of the notes ---------- */

function* elements(parent: Y.XmlFragment | Y.XmlElement): Generator<Y.XmlElement> {
  for (const child of parent.toArray()) {
    if (child instanceof Y.XmlElement) {
      yield child;
      yield* elements(child);
    }
  }
}

/** Ticks the n-th checklist item of a note (document order), from outside the editor. False when the note changed and has no such item. */
export const toggleTask = (id: string, n: number, done: boolean) =>
  withDoc(id, doc => {
    let i = 0;
    for (const el of elements(doc.getXmlFragment(FRAGMENT))) {
      if (el.nodeName !== 'taskItem') continue;
      if (i++ === n) {
        el.setAttribute('checked', done as unknown as string);
        return true;
      }
    }
    return false;
  });

export const INBOX_TITLE = 'Tâches';
const item = (text: string): Node => ({ type: 'taskItem', attrs: { checked: false }, content: [{ type: 'paragraph', content: [{ type: 'text', text }] }] });

/** Adds a task typed in the Tasks tab. It goes to the task note (created on first use): a task always lives in a note. */
export async function addTask(text: string): Promise<string> {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (!clean) throw new RangeError('empty task');
  const inbox = await getPref('inbox');
  const row = inbox ? await db.notes.get(inbox) : undefined;
  if (!inbox || !row || row.deletedAt) {
    const id = await createNote({ type: 'doc', content: [{ type: 'heading', attrs: { level: 1 }, content: [{ type: 'text', text: INBOX_TITLE }] }, { type: 'taskList', content: [item(clean)] }] });
    await setPref('inbox', id);
    return id;
  }
  await withDoc(inbox, doc => {
    const fragment = doc.getXmlFragment(FRAGMENT);
    const last = fragment.length ? fragment.get(fragment.length - 1) : null;
    if (last instanceof Y.XmlElement && last.nodeName === 'taskList') last.insert(last.length, toY([item(clean)]));
    else fragment.insert(fragment.length, toY([{ type: 'taskList', content: [item(clean)] }]));
  });
  return inbox;
}
