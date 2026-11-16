// Persistence of the notes. A note is one Y.Doc: its text in the fragment FRAGMENT, its own metadata in the map META.
// The document lives in the app database (tables `docs` + `updates`), NOT in one IndexedDB database per note:
//   - a failed read is a rejected promise the screen can show (y-indexeddb never reports one);
//   - deleting a note is one transaction with its caches: no orphan text database, no purge queue, no start-up sweep;
//   - two tabs on the same note converge live (BroadcastChannel), and whatever writes a note (editor, Tasks tab, restore,
//     import, sync) goes through the same Y merge.
import * as Y from 'yjs';
import { INDEX_VERSION, indexTree, type Task } from '../doc/indexer.ts';
import { FRAGMENT, readTree } from '../doc/tree.ts';
import { db, type NoteRow } from './db.ts';

export const META = 'meta';
export type Meta = { createdAt: number; updatedAt: number; pinned: boolean; deletedAt: number };

/** Transaction origins. LOAD and PEER are already stored (by this tab's read, by the other tab): everything else is persisted. */
const LOAD = 'load';
const PEER = 'peer';
const STAMP = 'stamp';
/** A change made by the app outside the editor: pin, trash, a task ticked from the Tasks tab. */
export const APP = 'app';
/** Content merged from a backup, an import or a sync. Stored, but it is not an edit made now: `updatedAt` is not touched. */
export const MERGE = 'merge';

const time = (v: unknown): number => (typeof v === 'number' && Number.isFinite(v) && v > 0 ? v : 0);
export function metaOf(doc: Y.Doc): Meta {
  const m = doc.getMap(META);
  return { createdAt: time(m.get('createdAt')), updatedAt: time(m.get('updatedAt')), pinned: m.get('pinned') === true, deletedAt: time(m.get('deletedAt')) };
}

/** The cache rows of a note, computed from its document alone. */
export function rowsOf(id: string, doc: Y.Doc): { row: NoteRow; tokens: string[]; tasks: Task[] } {
  const meta = metaOf(doc);
  const index = indexTree(readTree(doc));
  const done = index.tasks.filter(t => t.done).length;
  const row: NoteRow = {
    id, title: index.title, preview: index.preview, createdAt: meta.createdAt, updatedAt: meta.updatedAt || meta.createdAt,
    pinned: meta.pinned ? 1 : 0, deletedAt: meta.deletedAt, tags: index.tags, open: index.tasks.length - done, done,
    words: index.words, dirty: 0, v: INDEX_VERSION,
  };
  return { row, tokens: index.tokens, tasks: index.tasks };
}

/** Writes the cache rows of a note. Skipped when the document is gone (deleted for good meanwhile): a cache never revives a note. */
export async function putIndex(id: string, doc: Y.Doc): Promise<void> {
  const { row, tokens, tasks } = rowsOf(id, doc);
  await db.transaction('rw', [db.docs, db.updates, db.notes, db.words, db.tasks, db.tombstones], async () => {
    if (await db.tombstones.get(id)) return;
    if (!(await db.docs.get(id)) && !(await db.updates.where('id').equals(id).count())) return;
    await db.notes.put(row);
    await db.words.put({ id, tokens });
    await db.tasks.where('id').equals(id).delete();
    await db.tasks.bulkAdd(tasks.map(t => ({ id, n: t.n, text: t.text, done: t.done ? (1 as const) : (0 as const) })));
  });
}

export class NoteMissing extends Error {
  constructor() { super('note missing'); }
}

/** Reads a note's document from storage, or null when there is none. Not a session: changes made to it are not saved. */
export async function readDoc(id: string): Promise<Y.Doc | null> {
  const [state, updates] = await db.transaction('r', db.docs, db.updates, async () => [
    await db.docs.get(id),
    await db.updates.where('id').equals(id).sortBy('seq'),
  ] as const);
  if (!state && !updates.length) return null;
  const doc = new Y.Doc({ guid: id });
  doc.transact(() => {
    if (state) Y.applyUpdate(doc, state.state);
    for (const u of updates) Y.applyUpdate(doc, u.update);
  }, LOAD);
  return doc;
}

/** Folds the pending updates of a note into its stored state. Reads storage only, so an update written by another tab is never dropped. */
export async function compact(id: string): Promise<void> {
  await db.transaction('rw', db.docs, db.updates, async () => {
    const updates = await db.updates.where('id').equals(id).sortBy('seq');
    if (!updates.length) return;
    const state = await db.docs.get(id);
    const doc = new Y.Doc();
    if (state) Y.applyUpdate(doc, state.state);
    for (const u of updates) Y.applyUpdate(doc, u.update);
    await db.docs.put({ id, state: Y.encodeStateAsUpdate(doc) });
    await db.updates.bulkDelete(updates.map(u => u.seq!));
    doc.destroy();
  });
}

/* ---------- Live sessions ---------- */

type Message = { id: string; update: Uint8Array };
const channel = typeof BroadcastChannel === 'undefined' ? null : new BroadcastChannel('notes-app-docs');
// Node (tests) keeps a process alive for an open channel; a browser has no `unref`.
(channel as { unref?: () => void } | null)?.unref?.();

/** A storage write failed (quota, private mode, disk): the screen must say so, typed text is only in memory. */
let onWriteError: (error: unknown) => void = () => {};
export const setWriteErrorHandler = (fn: (error: unknown) => void) => { onWriteError = fn; };

export const INDEX_DELAY_MS = 400;
const COMPACT_AFTER = 40;

export class Session {
  readonly id: string;
  readonly doc: Y.Doc;
  readonly ready: Promise<void>;
  refs = 0;
  private queue: Uint8Array[] = [];
  private writing: Promise<void> = Promise.resolve();
  private timer: ReturnType<typeof setTimeout> | undefined;
  private stamped = false;
  private dirty = false;
  private stale = false;
  private written = 0;
  private closed = false;

  constructor(id: string, after: Promise<void> | undefined) {
    this.id = id;
    this.doc = new Y.Doc({ guid: id });
    this.ready = (after ?? Promise.resolve()).then(() => this.load());
  }

  private async load() {
    const stored = await readDoc(this.id);
    if (!stored) throw new NoteMissing();
    Y.applyUpdate(this.doc, Y.encodeStateAsUpdate(stored), LOAD);
    stored.destroy();
    this.doc.on('update', this.onUpdate);
    this.doc.getXmlFragment(FRAGMENT).observeDeep(this.onText);
  }

  private onText = (_events: unknown, tr: Y.Transaction) => {
    if (tr.origin === LOAD || tr.origin === PEER || tr.origin === MERGE || this.stamped) return;
    // First edit of a burst: the note's own "last edited" moves now, in the document, so it travels with it.
    this.stamped = true;
    queueMicrotask(() => { if (!this.closed) this.doc.transact(() => this.doc.getMap(META).set('updatedAt', Date.now()), STAMP); });
  };

  private onUpdate = (update: Uint8Array, origin: unknown) => {
    if (origin === LOAD || origin === PEER) return;
    this.queue.push(update);
    channel?.postMessage({ id: this.id, update } satisfies Message);
    this.write();
    this.stale = true;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => void this.flush(), INDEX_DELAY_MS);
  };

  /** Every update is written at once, in order of arrival; updates that pile up behind a write go out as one. */
  private write() {
    this.writing = this.writing
      .then(async () => {
        if (!this.queue.length) return;
        const batch = this.queue.splice(0);
        const update = batch.length === 1 ? batch[0] : Y.mergeUpdates(batch);
        await db.transaction('rw', db.updates, db.notes, db.tombstones, async () => {
          // Deleted for good while this write was waiting (another tab, the trash emptied): nothing is written back.
          if (await db.tombstones.get(this.id)) return;
          await db.updates.add({ id: this.id, update });
          if (!this.dirty) await db.notes.update(this.id, { dirty: 1 });
        });
        this.dirty = true;
        this.written++;
      })
      .catch(error => onWriteError(error));
  }

  applyPeer(update: Uint8Array) {
    if (!this.closed) Y.applyUpdate(this.doc, update, PEER);
  }

  /** Everything typed is in storage and the list, search and task caches match it. */
  async flush(): Promise<void> {
    clearTimeout(this.timer);
    await this.writing;
    if (!this.stale) return;
    this.stale = false;
    try {
      await putIndex(this.id, this.doc);
      this.dirty = false;
      this.stamped = false;
      if (this.written >= COMPACT_AFTER) {
        this.written = 0;
        await compact(this.id);
      }
    } catch (error) {
      this.stale = true;
      onWriteError(error);
    }
  }

  async close(): Promise<void> {
    await this.flush();
    this.closed = true;
    if (this.written) await compact(this.id).catch(onWriteError);
    this.doc.destroy();
  }
}

const sessions = new Map<string, Session>();
const closing = new Map<string, Promise<void>>();
channel?.addEventListener('message', (event: MessageEvent<Message>) => sessions.get(event.data.id)?.applyPeer(event.data.update));

/** Opens a note for reading and writing. Several users of the same note in this tab share one document. Pair with `release`. */
export async function acquire(id: string): Promise<Session> {
  let session = sessions.get(id);
  if (!session) sessions.set(id, (session = new Session(id, closing.get(id))));
  session.refs++;
  try {
    await session.ready;
  } catch (error) {
    if (--session.refs === 0 && sessions.get(id) === session) sessions.delete(id);
    throw error;
  }
  return session;
}

export async function release(id: string): Promise<void> {
  const session = sessions.get(id);
  if (!session || --session.refs > 0) return;
  sessions.delete(id);
  // A session opened while this one is still writing waits for it: it must read what the first one wrote.
  const done = session.close().finally(() => { if (closing.get(id) === done) closing.delete(id); });
  closing.set(id, done);
  await done;
}

/** Changes a note outside the editor, saved before the promise resolves. */
export async function withDoc<T>(id: string, change: (doc: Y.Doc) => T, origin: string = APP): Promise<T> {
  const session = await acquire(id);
  try {
    let result!: T;
    session.doc.transact(() => { result = change(session.doc); }, origin);
    await session.flush();
    return result;
  } finally {
    await release(id);
  }
}

/** Saves every open note now (page hidden, app closing). */
export const flushAll = () => Promise.all([...sessions.values()].map(s => s.flush()));
/** Ids of the notes open in this tab. */
export const openIds = () => [...sessions.keys()];
