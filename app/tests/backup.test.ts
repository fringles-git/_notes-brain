import 'fake-indexeddb/auto';
import assert from 'node:assert/strict';
import { beforeEach, describe, test } from 'node:test';
import { applyRestore, BackupError, buildBackup, encryptBackup, FORMAT, LEGACY_FORMAT, parseBackup, planRestore, readBackup } from '../src/backup/backup.ts';
import { adoptPhrase, getOrCreatePhrase } from '../src/backup/phrase.ts';
import { reminderDue, reminderDueAt, REMINDER_DAYS } from '../src/backup/reminder.ts';
import { CryptError, newKey, phraseOf } from '../src/crypto/notesenc.ts';
import { db } from '../src/data/db.ts';
import { createNote, trashNote } from '../src/data/notes.ts';
import { getPref } from '../src/data/prefs.ts';
import { readDoc, withDoc } from '../src/data/store.ts';
import { appendTree, readTree, type Node } from '../src/doc/tree.ts';

const p = (text: string): Node => ({ type: 'paragraph', content: [{ type: 'text', text }] });
const doc = (...content: Node[]): Node => ({ type: 'doc', content });
const clear = () => Promise.all(db.tables.map(t => t.clear()));
const texts = async (id: string) => readTree((await readDoc(id))!).content!.map(n => n.content?.[0].text);
beforeEach(clear);

describe('encrypted backup', () => {
  test('round trip on a blank device: notes, dates, trash state, nothing in clear', async () => {
    const a = await createNote(doc(p('Café « œuf » 😀'), p('corps')), 1000);
    const b = await createNote(doc(p('à la corbeille')), 2000);
    await trashNote(b, 3000);
    const { phrase } = await getOrCreatePhrase();
    const file = await encryptBackup(await buildBackup(), phrase);
    assert.ok(!new TextDecoder().decode(await file.arrayBuffer()).includes('corps'));
    await clear();
    const plan = await planRestore(await readBackup(file, phrase));
    assert.deepEqual([plan.add.length, plan.merge.length, plan.same.length], [2, 0, 0]);
    assert.equal(await db.notes.count(), 0, 'a plan writes nothing');
    assert.deepEqual(await applyRestore(plan), { added: 2, merged: 0 });
    assert.deepEqual(await texts(a), ['Café « œuf » 😀', 'corps']);
    assert.deepEqual([(await db.notes.get(a))?.createdAt, (await db.notes.get(b))?.deletedAt], [1000, 3000]);
  });

  test('restoring is a merge: unchanged = nothing, edited on both sides = both kept, twice = nothing', async () => {
    const same = await createNote(doc(p('inchangée')));
    const both = await createNote(doc(p('base')));
    const { phrase } = await getOrCreatePhrase();
    await withDoc(both, d => appendTree(d, doc(p('dans la sauvegarde'))));
    const file = await encryptBackup(await buildBackup(), phrase);
    // After the backup: the device goes back in time for this note, then edits it differently.
    await clear();
    const first = await planRestore(await readBackup(file, phrase));
    await applyRestore(first);
    await withDoc(both, d => appendTree(d, doc(p('écrit après'))));
    const plan = await planRestore(await readBackup(file, phrase));
    assert.deepEqual([plan.add, plan.merge, plan.same], [[], [], [same, both].sort()].map(l => l.sort()), 'the backup holds nothing the device lacks');
    assert.deepEqual(await applyRestore(plan), { added: 0, merged: 0 });
    assert.deepEqual(await texts(both), ['base', 'dans la sauvegarde', 'écrit après']);
    assert.equal(await db.notes.count(), 2, 'no "(restored)" copy');
  });

  test('wrong phrase, typo, foreign file, newer version: distinct errors, nothing written', async () => {
    await createNote(doc(p('x')));
    const { phrase } = await getOrCreatePhrase();
    const file = await encryptBackup(await buildBackup(), phrase);
    await assert.rejects(() => readBackup(file, 'pas une phrase'), (e: unknown) => e instanceof CryptError && e.why === 'key');
    const other = await phraseOf(newKey());
    await assert.rejects(() => readBackup(file, other), (e: unknown) => e instanceof CryptError && e.why === 'key');
    await assert.rejects(() => readBackup(new Blob(['bonjour']), phrase), (e: unknown) => e instanceof CryptError && e.why === 'format');
    assert.throws(() => parseBackup({ format: FORMAT, version: 2, exportedAt: 1, notes: [] }), (e: unknown) => e instanceof BackupError && e.why === 'version');
    assert.throws(() => parseBackup({ format: 'autre', version: 1, notes: [] }), (e: unknown) => e instanceof BackupError && e.why === 'format');
    assert.throws(() => parseBackup({ format: FORMAT, version: 1, notes: [{ id: 'a', state: '!!!' }] }), BackupError);
    assert.throws(() => parseBackup({ format: FORMAT, version: 1, notes: [{ id: 'a', state: '' }, { id: 'a', state: '' }] }), BackupError);
  });

  test('a mindspace-core backup is read: title becomes the first line, an existing id is skipped, bad content refuses the file', async () => {
    const legacy = (content: Node) => ({ format: LEGACY_FORMAT, version: 1, exportedAt: 5, notes: [{ id: 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa', title: 'Mon titre', createdAt: 100, updatedAt: 200, content }] });
    const notes = parseBackup(legacy(doc(p('corps'))));
    await applyRestore(await planRestore(notes));
    const row = await db.notes.get(notes[0].id);
    assert.deepEqual([row?.title, row?.preview, row?.createdAt, row?.updatedAt], ['Mon titre', 'corps', 100, 200]);
    const again = await planRestore(parseBackup(legacy(doc(p('corps')))));
    assert.deepEqual([again.add.length, again.merge.length, again.same.length], [0, 0, 1]);
    await applyRestore(again);
    assert.deepEqual(await texts(notes[0].id), ['Mon titre', 'corps'], 'not pasted twice');
    assert.throws(() => parseBackup(legacy(doc({ type: 'iframe' }))), (e: unknown) => e instanceof BackupError && e.why === 'content');
    assert.throws(() => parseBackup(legacy(doc({ type: 'paragraph', content: [{ type: 'text', text: 'x', marks: [{ type: 'link', attrs: { href: 'javascript:alert(1)' } }] }] }))), BackupError);
  });
});

describe('recovery phrase on the device', () => {
  test('created once, reused, never replaced by adoption', async () => {
    const first = await getOrCreatePhrase();
    const second = await getOrCreatePhrase();
    assert.deepEqual([first.created, second.created, second.phrase], [true, false, first.phrase]);
    assert.equal(await adoptPhrase(await phraseOf(newKey())), 'kept');
    assert.equal(await getPref('phrase'), first.phrase);
  });
  test('a blank device adopts the phrase of its own backup, in canonical form', async () => {
    const phrase = await phraseOf(newKey());
    assert.equal(await adoptPhrase(phrase.toLowerCase().replaceAll('-', ' ')), 'adopted');
    assert.equal(await getPref('phrase'), phrase);
    await assert.rejects(() => adoptPhrase('nope'));
  });
});

describe('backup reminder', () => {
  const DAY = 86_400_000, now = 1000 * DAY;
  test('14 days after the last backup, or after the oldest note when never backed up', () => {
    assert.equal(reminderDue({ now, oldestNote: now - 13 * DAY }), false);
    assert.equal(reminderDue({ now, oldestNote: now - 14 * DAY }), true);
    assert.equal(reminderDue({ now, oldestNote: now - 400 * DAY, lastBackup: now - 13 * DAY }), false);
    assert.equal(reminderDue({ now, oldestNote: now - 400 * DAY, lastBackup: now - 15 * DAY }), true);
    assert.equal(reminderDue({ now }), false, 'no note: never');
  });
  test('"Plus tard" postpones by 14 days, a backup after it counts from the backup, future dates are ignored', () => {
    assert.equal(reminderDue({ now, oldestNote: 1, lastBackup: now - 30 * DAY, snoozedAt: now - DAY }), false);
    assert.equal(reminderDueAt({ now, oldestNote: 1, lastBackup: now - 30 * DAY, snoozedAt: now - DAY }), now + (REMINDER_DAYS - 1) * DAY);
    assert.equal(reminderDue({ now, oldestNote: 1, lastBackup: now - 30 * DAY, snoozedAt: now - 15 * DAY }), true);
    assert.equal(reminderDue({ now, oldestNote: now - 20 * DAY, lastBackup: now + 5 * DAY }), true, 'a backup dated in the future does not mute the reminder');
    assert.equal(reminderDue({ now, oldestNote: now - 20 * DAY, snoozedAt: now + 5 * DAY }), true);
  });
});
