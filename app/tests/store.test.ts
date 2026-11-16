import 'fake-indexeddb/auto';
import assert from 'node:assert/strict';
import { beforeEach, describe, test } from 'node:test';
import * as Y from 'yjs';
import { db } from '../src/data/db.ts';
import { addTask, createNote, emptyTrash, mergeNote, newDoc, purgeExpired, purgeNotes, reindex, restoreNote, setPinned, toggleTask, trashNote, TRASH_DAYS } from '../src/data/notes.ts';
import { getPref } from '../src/data/prefs.ts';
import { META, acquire, compact, metaOf, putIndex, readDoc, release, setWriteErrorHandler, withDoc } from '../src/data/store.ts';
import { appendTree, FRAGMENT, readTree, type Node } from '../src/doc/tree.ts';

const p = (text: string): Node => ({ type: 'paragraph', content: [{ type: 'text', text }] });
const doc = (...content: Node[]): Node => ({ type: 'doc', content });
const type = (d: Y.Doc, text: string, origin: unknown = 'editor') => appendTree(d, doc(p(text)), origin);
const clear = () => Promise.all(db.tables.map(t => t.clear()));
const DAY = 86_400_000;

beforeEach(clear);

describe('a note is one document stored in the app database', () => {
  test('create writes the document and its caches together', async () => {
    const id = await createNote(doc(p('Courses du samedi'), p('pain, #marché café')), 1000);
    const row = await db.notes.get(id);
    assert.equal(row?.title, 'Courses du samedi');
    assert.equal(row?.preview, 'pain, #marché café');
    assert.deepEqual(row?.tags, ['marche']);
    assert.equal(row?.createdAt, 1000);
    assert.equal(row?.deletedAt, 0);
    assert.ok((await db.words.get(id))?.tokens.includes('samedi'));
    assert.equal((await indexedDB.databases()).length, 1, 'one database, whatever the number of notes');
  });

  test('typed text survives closing and reopening, and the list row follows', async () => {
    const id = await createNote(undefined, 1000);
    const s = await acquire(id);
    type(s.doc, 'Première ligne');
    type(s.doc, 'suite');
    await release(id);
    const again = await readDoc(id);
    assert.deepEqual(readTree(again!).content?.map(n => n.content?.[0].text), ['Première ligne', 'suite']);
    const row = await db.notes.get(id);
    assert.equal(row?.title, 'Première ligne');
    assert.equal(row?.dirty, 0);
    assert.ok(row!.updatedAt > 1000, 'editing moves updatedAt, inside the document');
    assert.equal(metaOf(again!).updatedAt, row!.updatedAt, 'the row is computed from the document');
  });

  test('every update is stored before the index is: a crash loses nothing typed', async () => {
    const id = await createNote();
    const s = await acquire(id);
    type(s.doc, 'tapé juste avant la coupure');
    await new Promise(r => setTimeout(r, 50)); // less than the index delay: only the update write happened
    const row = await db.notes.get(id);
    assert.equal(row?.dirty, 1, 'the row is flagged behind its document');
    assert.equal(row?.title, '');
    // Crash: nothing is flushed. A new start reads storage only.
    const stored = await readDoc(id);
    assert.equal(readTree(stored!).content?.[0].content?.[0].text, 'tapé juste avant la coupure');
    assert.equal(await reindex(), 1);
    assert.equal((await db.notes.get(id))?.title, 'tapé juste avant la coupure');
    await release(id);
  });

  test('opening a note is not an edit', async () => {
    const id = await createNote(doc(p('x')), 1000);
    const s = await acquire(id);
    await release(id);
    assert.equal(s.doc.getMap(META).get('updatedAt'), 1000);
    assert.equal(await db.updates.count(), 0);
  });

  test('a missing note is an error the screen can show, not an endless wait', async () => {
    await assert.rejects(() => acquire('nope'), /note missing/);
    const id = await createNote();
    const s = await acquire(id);
    assert.ok(s);
    await release(id);
  });

  test('a session opened while the previous one is closing reads what it wrote', async () => {
    const id = await createNote();
    const a = await acquire(id);
    type(a.doc, 'un');
    const closing = release(id); // not awaited: React StrictMode unmounts and remounts at once
    const b = await acquire(id);
    assert.equal(readTree(b.doc).content?.[0].content?.[0].text, 'un');
    await closing;
    await release(id);
  });

  test('two users of a note in one tab share the document', async () => {
    const id = await createNote();
    const a = await acquire(id);
    const b = await acquire(id);
    assert.equal(a, b);
    await release(id);
    type(b.doc, 'encore ouvert');
    await release(id);
    assert.equal((await db.notes.get(id))?.title, 'encore ouvert');
  });

  test('compaction keeps the text and empties the update log', async () => {
    const id = await createNote();
    const s = await acquire(id);
    for (let i = 0; i < 60; i++) {
      type(s.doc, `ligne ${i}`);
      await new Promise(r => setImmediate(r));
    }
    await release(id);
    assert.equal(await db.updates.count(), 0);
    assert.equal(readTree((await readDoc(id))!).content?.length, 60);
    await compact(id); // nothing to do: no error
  });

  test('deleted text is not kept in the stored document', async () => {
    const id = await createNote();
    await withDoc(id, d => appendTree(d, doc(p('SECRETSUPPRIME'))));
    await withDoc(id, d => {
      const f = d.getXmlFragment(FRAGMENT);
      f.delete(0, f.length);
    });
    await compact(id);
    const bytes = new TextDecoder('latin1').decode((await db.docs.get(id))!.state);
    assert.ok(!bytes.includes('SECRETSUPPRIME'), 'Yjs garbage-collects deleted content: a backup of the state does not leak it');
  });
});

describe('review findings', () => {
  test('a failed write keeps its batch: flush does not mark the note clean, a later write stores everything', async () => {
    const id = await createNote();
    const s = await acquire(id);
    const errors: unknown[] = [];
    setWriteErrorHandler(e => errors.push(e));
    const add = db.updates.add.bind(db.updates);
    db.updates.add = (() => Promise.reject(new Error('QuotaExceededError'))) as never;
    type(s.doc, 'jamais écrit ?');
    await s.flush();
    assert.ok(errors.length >= 1 && s.unsaved);
    assert.equal((await db.notes.get(id))?.title, '', 'the index was not written from memory alone');
    db.updates.add = add;
    type(s.doc, 'seconde ligne');
    await release(id);
    setWriteErrorHandler(() => {});
    assert.deepEqual(readTree((await readDoc(id))!).content?.map(n => n.content?.[0].text), ['jamais écrit ?', 'seconde ligne']);
    assert.equal((await db.notes.get(id))?.title, 'jamais écrit ?');
  });

  test('the index is computed from storage: a tab behind another tab never writes an older row', async () => {
    const id = await createNote(doc(p('base')));
    const a = await acquire(id); // this tab
    // Another tab stored an edit; its broadcast has not reached this tab yet.
    const other = (await readDoc(id))!;
    const before = Y.encodeStateVector(other);
    appendTree(other, doc({ type: 'taskList', content: [{ type: 'taskItem', attrs: { checked: false }, content: [p('tâche de l’autre onglet')] }] }));
    await db.updates.add({ id, update: Y.encodeStateAsUpdate(other, before) });
    await putIndex(id);
    type(a.doc, 'édition locale');
    await a.flush();
    assert.equal((await db.notes.get(id))?.open, 1, 'the other tab\'s task is still in the index');
    assert.equal(await db.tasks.where('id').equals(id).count(), 1);
    await release(id);
  });
});

describe('pin, trash, purge', () => {
  test('pin and trash live in the document and do not count as an edit', async () => {
    const id = await createNote(doc(p('a')), 1000);
    await setPinned(id, true);
    await trashNote(id, 5000);
    const row = await db.notes.get(id);
    assert.deepEqual([row?.pinned, row?.deletedAt, row?.updatedAt], [1, 5000, 1000]);
    await restoreNote(id);
    assert.equal((await db.notes.get(id))?.deletedAt, 0);
    assert.equal(metaOf((await readDoc(id))!).pinned, true);
  });

  test('purge removes document and caches in one go and leaves a tombstone', async () => {
    const a = await createNote(doc(p('a'), { type: 'taskList', content: [{ type: 'taskItem', attrs: { checked: false }, content: [p('t')] }] }));
    const b = await createNote(doc(p('b')));
    await withDoc(a, d => appendTree(d, doc(p('plus')))); // leaves rows in `updates` until compaction
    await purgeNotes([a], 42);
    for (const table of [db.docs, db.notes, db.words]) assert.equal(await table.get(a as never), undefined);
    assert.equal(await db.updates.where('id').equals(a).count(), 0);
    assert.equal(await db.tasks.where('id').equals(a).count(), 0);
    assert.deepEqual(await db.tombstones.get(a), { id: a, at: 42 });
    assert.ok(await db.notes.get(b));
  });

  test('a late index write never revives a purged note', async () => {
    const id = await createNote();
    const s = await acquire(id);
    type(s.doc, 'x');
    await purgeNotes([id]);
    await release(id);
    assert.equal(await db.notes.get(id), undefined);
  });

  test('the trash empties itself after 30 days, not before', async () => {
    const old = await createNote(doc(p('old')));
    const recent = await createNote(doc(p('recent')));
    const now = 100 * DAY;
    await trashNote(old, now - (TRASH_DAYS + 1) * DAY);
    await trashNote(recent, now - (TRASH_DAYS - 1) * DAY);
    assert.equal(await purgeExpired(now), 1);
    assert.equal(await db.notes.get(old), undefined);
    assert.ok(await db.notes.get(recent));
    await emptyTrash();
    assert.equal(await db.notes.count(), 0);
  });
});

describe('tasks are checklist items of the notes', () => {
  const list = (...items: [string, boolean][]): Node => ({
    type: 'taskList',
    content: items.map(([text, checked]) => ({ type: 'taskItem', attrs: { checked }, content: [p(text)] })),
  });

  test('items are indexed with their state and ticked from outside the editor', async () => {
    const id = await createNote(doc(p('Liste'), list(['lait', false], ['œufs', true]), p('fin'), list(['sel', false])));
    assert.deepEqual((await db.tasks.where('id').equals(id).sortBy('n')).map(t => [t.text, t.done]), [['lait', 0], ['œufs', 1], ['sel', 0]]);
    assert.deepEqual([(await db.notes.get(id))?.open, (await db.notes.get(id))?.done], [2, 1]);
    assert.equal(await toggleTask(id, 2, true), true);
    assert.equal(await toggleTask(id, 9, true), false);
    const tree = readTree((await readDoc(id))!);
    assert.equal(tree.content?.[3].content?.[0].attrs?.checked, true);
    assert.deepEqual([(await db.notes.get(id))?.open, (await db.notes.get(id))?.done], [1, 2]);
  });

  test('a task typed in the Tasks tab goes to the task note, created once', async () => {
    const id = await addTask('  appeler   le garage ');
    assert.equal(await getPref('inbox'), id);
    assert.equal(await addTask('second'), id);
    assert.deepEqual((await db.tasks.where('id').equals(id).sortBy('n')).map(t => t.text), ['appeler le garage', 'second']);
    assert.equal((await db.notes.get(id))?.title, 'Tâches');
    await trashNote(id);
    assert.notEqual(await addTask('après corbeille'), id, 'a trashed task note is not written to');
    await assert.rejects(() => addTask('   '));
  });
});

describe('merge: restore, import and sync share one mechanism', () => {
  test('a note edited on two devices merges without a copy and without loss', async () => {
    const id = await createNote(doc(p('base')), 1000);
    const remote = (await readDoc(id))!;
    type(remote, 'écrit ailleurs');
    await withDoc(id, d => type(d, 'écrit ici'));
    assert.equal(await mergeNote(id, Y.encodeStateAsUpdate(remote)), 'merged');
    const texts = readTree((await readDoc(id))!).content!.map(n => n.content?.[0].text).sort();
    assert.deepEqual(texts, ['base', 'écrit ailleurs', 'écrit ici']);
    assert.equal(await db.notes.count(), 1);
    assert.equal(await mergeNote(id, Y.encodeStateAsUpdate(remote)), 'same', 'merging twice changes nothing');
  });

  test('an unknown note is added with its dates, and lifts its tombstone', async () => {
    const d = newDoc('11111111-1111-4111-8111-111111111111', 777, doc(p('venue de loin')));
    await db.tombstones.put({ id: d.guid, at: 1 });
    assert.equal(await mergeNote(d.guid, Y.encodeStateAsUpdate(d)), 'added');
    const row = await db.notes.get(d.guid);
    assert.deepEqual([row?.title, row?.createdAt], ['venue de loin', 777]);
    assert.equal(await db.tombstones.count(), 0);
  });
});
