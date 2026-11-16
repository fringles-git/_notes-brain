// The one database of the app. A note is ONE Yjs document (text + its own metadata); every other table is either
// a cache computed from the documents (notes, words, tasks) or device state that is not a note (prefs, tombstones).
//
//   docs       the documents: one compacted Yjs state per note                                   SOURCE
//   updates    Yjs updates written since the last compaction (append-only, merged into docs)     SOURCE
//   notes      one row per note for lists: title, preview, dates, pin, trash, tags, counts       cache (indexer)
//   words      search words per note                                                             cache (indexer)
//   tasks      checklist items per note                                                          cache (indexer)
//   prefs      device settings: theme, recovery phrase, last backup…                             device
//   tombstones ids of notes deleted for good, so a sync never brings them back                   device, synced
import Dexie, { type EntityTable, type Table } from 'dexie';

export type DocRow = { id: string; state: Uint8Array };
export type UpdateRow = { seq?: number; id: string; update: Uint8Array };
export type NoteRow = {
  id: string;
  title: string;
  preview: string;
  createdAt: number;
  updatedAt: number;
  /** 1 or 0: IndexedDB cannot index a boolean. */
  pinned: 0 | 1;
  /** 0 while the note is alive, else the time it went to the trash. */
  deletedAt: number;
  tags: string[];
  /** Checklist items still open / done. */
  open: number;
  done: number;
  words: number;
  /** 1 between the first write of a burst and the write of this row: the row is behind the document. */
  dirty: 0 | 1;
  /** INDEX_VERSION that computed the row. */
  v: number;
};
export type WordsRow = { id: string; tokens: string[] };
export type TaskRow = { id: string; n: number; text: string; done: 0 | 1 };
export type PrefRow = { key: string; value: unknown };
export type Tombstone = { id: string; at: number };

export type NotesDB = Dexie & {
  docs: EntityTable<DocRow, 'id'>;
  updates: EntityTable<UpdateRow, 'seq'>;
  notes: EntityTable<NoteRow, 'id'>;
  words: EntityTable<WordsRow, 'id'>;
  tasks: Table<TaskRow, [string, number]>;
  prefs: EntityTable<PrefRow, 'key'>;
  tombstones: EntityTable<Tombstone, 'id'>;
};

export const DB_NAME = 'notes-app';

export const db = new Dexie(DB_NAME) as NotesDB;
db.version(1).stores({
  docs: 'id',
  updates: '++seq, id',
  notes: 'id, updatedAt, deletedAt, dirty, *tags',
  words: 'id, *tokens',
  tasks: '[id+n], id',
  prefs: 'key',
  tombstones: 'id, at',
});

/** Tables that describe notes: one transaction over all of them keeps a document and its caches together. */
export const NOTE_TABLES = [db.docs, db.updates, db.notes, db.words, db.tasks] as const;
