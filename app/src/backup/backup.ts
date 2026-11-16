// The encrypted backup: one `.enc` file (NOTESENC) around a JSON list of notes, each as its Yjs state.
// Because a note travels as its document, restoring is a MERGE: same note unchanged = nothing, same note edited on both sides =
// both edits kept, unknown note = added. No "(restored)" copies, nothing overwritten, restoring twice changes nothing.
// A Yjs state holds no deleted text (Yjs garbage-collects it; tests/store.test.ts checks the bytes).
//
// Also read: the backups of mindspace-core (`mindspace-core-backup` v1, text as ProseMirror JSON). Those carry no document
// identity to merge with, so a note whose id is already here is skipped, never duplicated. This is the migration path.
import * as Y from 'yjs';
import { CryptError, decrypt, encrypt, keyOf } from '../crypto/notesenc.ts';
import { db } from '../data/db.ts';
import { compare, mergeNote, newDoc } from '../data/notes.ts';
import { META, compact, flushAll, readDoc } from '../data/store.ts';
import { invalid } from '../doc/schema.ts';
import { readTree, type Node } from '../doc/tree.ts';

export const FORMAT = 'notes-app-backup';
export const VERSION = 1;
export const LEGACY_FORMAT = 'mindspace-core-backup';
export const MAX_BYTES = 64 * 2 ** 20;
export const MAX_NOTES = 10_000;

export type BackupFile = { format: typeof FORMAT; version: number; exportedAt: number; notes: { id: string; state: string }[] };

export class BackupError extends Error {
  /** format: not a backup this app reads. version: written by a newer app. size: too big. content: a note holds something the editor cannot show. */
  why: 'format' | 'version' | 'size' | 'content';
  constructor(why: BackupError['why']) {
    super(why);
    this.why = why;
  }
}

export function toBase64(bytes: Uint8Array): string {
  let s = '';
  for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(s);
}
export function fromBase64(text: string): Uint8Array {
  const s = atob(text);
  const out = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) out[i] = s.charCodeAt(i);
  return out;
}

/** Every note of the device (trash included), as stored. */
export async function buildBackup(now: number = Date.now()): Promise<BackupFile> {
  await flushAll();
  const notes: BackupFile['notes'] = [];
  for (const id of await db.docs.toCollection().primaryKeys()) {
    await compact(id);
    const doc = await readDoc(id);
    if (!doc) continue;
    notes.push({ id, state: toBase64(Y.encodeStateAsUpdate(doc)) });
    doc.destroy();
  }
  return { format: FORMAT, version: VERSION, exportedAt: now, notes };
}

export async function encryptBackup(backup: BackupFile, phrase: string): Promise<Blob> {
  const key = await keyOf(phrase);
  if (!key) throw new CryptError('key');
  return encrypt(new Blob([JSON.stringify(backup)]), key);
}

const isObject = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);
const isTime = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v) && v >= 0;
const isId = (v: unknown): v is string => typeof v === 'string' && /^[0-9a-zA-Z-]{1,64}$/.test(v);

/** One note ready to be written: its id and the Yjs update to merge. `legacy` notes have no shared history with a local note. */
export type Incoming = { id: string; update: Uint8Array; legacy: boolean };

/** Checks a decrypted backup entirely, before anything is written anywhere. One bad note refuses the whole file. */
export function parseBackup(data: unknown): Incoming[] {
  if (!isObject(data) || typeof data.version !== 'number' || !Array.isArray(data.notes)) throw new BackupError('format');
  if (data.format !== FORMAT && data.format !== LEGACY_FORMAT) throw new BackupError('format');
  if (data.version > VERSION) throw new BackupError('version');
  if (data.version !== VERSION) throw new BackupError('format');
  if (data.notes.length > MAX_NOTES) throw new BackupError('size');
  const seen = new Set<string>();
  const out: Incoming[] = [];
  for (const note of data.notes as unknown[]) {
    if (!isObject(note) || !isId(note.id) || seen.has(note.id)) throw new BackupError('format');
    seen.add(note.id);
    let doc: Y.Doc;
    if (data.format === FORMAT) {
      if (typeof note.state !== 'string') throw new BackupError('format');
      doc = new Y.Doc({ guid: note.id });
      try {
        Y.applyUpdate(doc, fromBase64(note.state));
      } catch {
        throw new BackupError('format');
      }
    } else {
      if (typeof note.title !== 'string' || !isTime(note.createdAt) || !isTime(note.updatedAt) || !isObject(note.content) || note.content.type !== 'doc') throw new BackupError('format');
      const tree = note.content as unknown as Node;
      if (invalid(tree)) throw new BackupError('content');
      // There the title was a separate field; here it is the first line of the note.
      const title = note.title.trim();
      const content = title ? [{ type: 'heading', attrs: { level: 1 }, content: [{ type: 'text', text: title }] }, ...(tree.content ?? [])] : (tree.content ?? []);
      doc = newDoc(note.id, note.createdAt, { type: 'doc', content });
      doc.getMap(META).set('updatedAt', note.updatedAt);
    }
    if (invalid(readTree(doc))) throw new BackupError('content');
    out.push({ id: note.id, update: Y.encodeStateAsUpdate(doc), legacy: data.format === LEGACY_FORMAT });
    doc.destroy();
  }
  return out;
}

/** Opens a `.enc` backup. Throws CryptError (wrong phrase, damaged or cut file) or BackupError. */
export async function readBackup(file: Blob, phrase: string): Promise<Incoming[]> {
  if (file.size > MAX_BYTES) throw new BackupError('size');
  const key = await keyOf(phrase);
  if (!key) throw new CryptError('key');
  const text = await (await decrypt(file, key)).text();
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    throw new BackupError('format');
  }
  return parseBackup(data);
}

export type Plan = { notes: Incoming[]; add: string[]; merge: string[]; same: string[] };

/** What restoring would do. Writes nothing. */
export async function planRestore(notes: Incoming[]): Promise<Plan> {
  const plan: Plan = { notes, add: [], merge: [], same: [] };
  for (const note of notes) {
    const what = await compare(note.id, note.update);
    if (what === 'new') plan.add.push(note.id);
    // A legacy note has no common history with the local one: merging would paste its text a second time.
    else if (what === 'same' || note.legacy) plan.same.push(note.id);
    else plan.merge.push(note.id);
  }
  return plan;
}

/** Applies a plan. Each note is one merge; a note changed since the plan is simply merged with what it is now. */
export async function applyRestore(plan: Plan): Promise<{ added: number; merged: number }> {
  const todo = new Set([...plan.add, ...plan.merge]);
  let added = 0;
  let merged = 0;
  for (const note of plan.notes) {
    if (!todo.has(note.id)) continue;
    if (note.legacy && (await readDoc(note.id))) continue;
    const result = await mergeNote(note.id, note.update);
    if (result === 'added') added++;
    else if (result === 'merged') merged++;
  }
  return { added, merged };
}
