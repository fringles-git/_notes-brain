// Everything the app shows or searches without opening a note is computed here from the note's text. Pure: no storage, no Yjs.
// The result is a cache: it can always be thrown away and rebuilt from the documents (data/store.ts, `reindex`).
import { plain, type Node } from './tree.ts';

/** Raise on any change to what this module computes: every stored row of an older version is rebuilt at the next start. */
export const INDEX_VERSION = 1;

export const TITLE_MAX = 80;
export const PREVIEW_MAX = 160;
export const TOKENS_MAX = 2000;
export const TAGS_MAX = 50;

/** Search form of a text: no accents, lower case, ligatures spelled out. The query goes through the same function. */
export const fold = (text: string): string =>
  text
    .normalize('NFD')
    .replace(/\p{M}+/gu, '')
    .toLowerCase()
    .replace(/œ/g, 'oe')
    .replace(/æ/g, 'ae')
    .replace(/ß/g, 'ss');

/** Distinct words of a text, folded, two characters at least. */
export function tokenize(text: string, max = TOKENS_MAX): string[] {
  const seen = new Set<string>();
  for (const word of fold(text).split(/[^\p{L}\p{N}]+/u)) {
    if (word.length < 2) continue;
    seen.add(word);
    if (seen.size >= max) break;
  }
  return [...seen];
}

const cut = (text: string, max: number): string => {
  const signs = [...new Intl.Segmenter(undefined, { granularity: 'grapheme' }).segment(text)];
  return signs.length <= max ? text : signs.slice(0, max).map(s => s.segment).join('').trimEnd() + '…';
};

export type Task = { n: number; text: string; done: boolean };
export type Index = { title: string; preview: string; tags: string[]; tasks: Task[]; words: number; tokens: string[] };

const TAG = /(?:^|[\s(])#([\p{L}\p{N}_-]{1,40})/gu;
const LEAVES = new Set(['paragraph', 'heading', 'codeBlock']);

export function indexTree(tree: Node): Index {
  const blocks: string[] = [];
  const tags = new Set<string>();
  const tasks: Task[] = [];

  const scanTags = (node: Node) => {
    // A tag is typed in the text. Code is quoted material: "#include" is not a tag.
    const text = (node.content ?? []).map(n => (n.type === 'text' && !n.marks?.some(m => m.type === 'code') ? (n.text ?? '') : ' ')).join('');
    for (const match of text.matchAll(TAG)) {
      const tag = fold(match[1]);
      if (/\p{L}/u.test(tag) && tags.size < TAGS_MAX) tags.add(tag); // "#12" is a number, not a tag
    }
  };

  const walk = (node: Node) => {
    if (node.type === 'taskItem') {
      const first = node.content?.[0];
      tasks.push({ n: tasks.length, text: cut((first ? plain(first) : '').replace(/\s+/g, ' ').trim(), 200), done: node.attrs?.checked === true });
    }
    if (LEAVES.has(node.type)) {
      const text = plain(node);
      if (text.trim()) blocks.push(text);
      if (node.type !== 'codeBlock') scanTags(node);
      return;
    }
    for (const child of node.content ?? []) walk(child);
  };
  walk(tree);

  const all = blocks.join('\n');
  const [first = '', ...rest] = blocks;
  const firstLines = first.split('\n').map(l => l.trim()).filter(Boolean);
  const title = cut(firstLines[0] ?? '', TITLE_MAX);
  const preview = cut([...firstLines.slice(1), ...rest].join(' ').replace(/\s+/g, ' ').trim(), PREVIEW_MAX);
  const words = all.split(/[^\p{L}\p{N}]+/u).filter(Boolean).length;
  return { title, preview, tags: [...tags], tasks, words, tokens: tokenize(all) };
}
