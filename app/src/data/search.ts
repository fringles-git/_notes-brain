// Search reads the caches only: no note is opened, nothing is written.
// Strict match (rule kept from mindspace-core): every word of the query is the START of a word of the note, accents and case
// ignored, any order. "#mot" matches the tags. No fuzzy match, no match in the middle of a word.
import { fold } from '../doc/indexer.ts';
import { db, type NoteRow } from './db.ts';

export const QUERY_WORDS_MAX = 8;
export type Query = { words: string[]; tags: string[] };

export function parseQuery(text: string): Query {
  const words: string[] = [];
  const tags: string[] = [];
  for (const part of fold(text).split(/\s+/)) {
    const bits = part.split(/[^\p{L}\p{N}#_-]+/u).filter(Boolean);
    for (const bit of bits) {
      if (bit.startsWith('#') && bit.length > 1) tags.push(bit.slice(1));
      else words.push(...bit.split(/[^\p{L}\p{N}]+/u).filter(Boolean));
    }
  }
  return { words: [...new Set(words)].slice(0, QUERY_WORDS_MAX), tags: [...new Set(tags)].slice(0, QUERY_WORDS_MAX) };
}
export const isEmpty = (q: Query) => !q.words.length && !q.tags.length;

/** Notes that match, most recent first. The trash is never searched. */
export async function search(query: Query): Promise<NoteRow[]> {
  if (isEmpty(query)) return [];
  return db.transaction('r', db.notes, db.words, async () => {
    const sets = await Promise.all([
      ...query.words.map(w => db.words.where('tokens').startsWith(w).primaryKeys()),
      ...query.tags.map(t => db.notes.where('tags').startsWith(t).primaryKeys()),
    ]);
    let ids = new Set(sets[0]);
    for (const set of sets.slice(1)) {
      const other = new Set(set);
      ids = new Set([...ids].filter(id => other.has(id)));
    }
    const rows = (await db.notes.bulkGet([...ids])).filter((r): r is NoteRow => !!r && r.deletedAt === 0);
    return rows.sort((a, b) => b.updatedAt - a.updatedAt);
  });
}

export type Part = { text: string; hit: boolean };
/** Cuts the ORIGINAL text in parts, the matched word starts marked. The parts always add up to the text. */
export function highlight(text: string, words: string[]): Part[] {
  const parts: Part[] = [];
  let at = 0;
  const push = (end: number, hit: boolean) => {
    if (end > at) parts.push({ text: text.slice(at, end), hit });
    at = end;
  };
  if (words.length) {
    for (const match of text.matchAll(/[\p{L}\p{N}\p{M}]+/gu)) {
      const word = match[0];
      const folded = fold(word);
      const need = Math.max(0, ...words.filter(w => folded.startsWith(w)).map(w => w.length));
      if (!need) continue;
      // Length of the original prefix whose folded form covers the query word; an accent is never cut from its letter.
      const signs = [...new Intl.Segmenter(undefined, { granularity: 'grapheme' }).segment(word)];
      let length = 0;
      let covered = 0;
      for (const sign of signs) {
        if (covered >= need) break;
        covered += fold(sign.segment).length;
        length += sign.segment.length;
      }
      push(match.index, false);
      push(match.index + length, true);
    }
  }
  push(text.length, false);
  return parts;
}
