// Markdown in and out. Pure (trees only). The import picks up where MindSpace #43 stopped (reverted by #44, brain 02 § M1):
// same safety rules (links http(s)/mailto only, HTML never interpreted, 2 MiB and 20 000 lines), plus what it lacked:
// nested lists, task items, `_emphasis_`, code block language.
import { safeHref } from '../doc/schema.ts';
import { plain, type Mark, type Node } from '../doc/tree.ts';

export const MAX_MARKDOWN = 2 * 2 ** 20;
export const MAX_LINES = 20_000;

/* ---------- Export ---------- */
const escapeText = (s: string) => s.replace(/([\\`*_[\]~])/g, '\\$1');
const ORDER = ['link', 'bold', 'italic', 'strike', 'code'];
const WRAP: Record<string, string> = { bold: '**', italic: '*', strike: '~~' };

function inline(nodes: Node[] = []): string {
  let out = '';
  for (const node of nodes) {
    if (node.type === 'hardBreak') { out += '  \n'; continue; }
    if (node.type !== 'text') { out += inline(node.content); continue; }
    const marks = [...(node.marks ?? [])].sort((a, b) => ORDER.indexOf(a.type) - ORDER.indexOf(b.type));
    const code = marks.some(m => m.type === 'code');
    let text = code ? '`' + (node.text ?? '').replace(/`/g, "'") + '`' : escapeText(node.text ?? '');
    // Emphasis markers must touch the text: spaces move outside.
    const lead = /^\s*/.exec(text)![0];
    const trail = /\s*$/.exec(text.slice(lead.length))![0];
    text = text.slice(lead.length, text.length - trail.length);
    if (text) {
      for (const mark of [...marks].reverse()) {
        if (WRAP[mark.type]) text = WRAP[mark.type] + text + WRAP[mark.type];
        else if (mark.type === 'link' && safeHref(mark.attrs?.href)) text = `[${text}](${mark.attrs.href})`;
      }
    }
    out += lead + text + trail;
  }
  return out;
}

const indent = (text: string, pad: string) => text.split('\n').map((l, i) => (i ? (l ? pad + l : l) : l)).join('\n');

function block(node: Node): string {
  switch (node.type) {
    case 'paragraph': return inline(node.content).replace(/^(\s*)(#{1,6} |[-+>] |\d+[.)] )/, '$1\\$2');
    case 'heading': return '#'.repeat(Number(node.attrs?.level) || 1) + ' ' + inline(node.content);
    case 'blockquote': return blocks(node.content).split('\n').map(l => (l ? '> ' + l : '>')).join('\n');
    case 'codeBlock': {
      const text = plain(node);
      const fence = '`'.repeat(Math.max(3, ...[...text.matchAll(/`+/g)].map(m => m[0].length + 1)));
      return `${fence}${typeof node.attrs?.language === 'string' ? node.attrs.language : ''}\n${text}\n${fence}`;
    }
    case 'horizontalRule': return '---';
    case 'bulletList': return (node.content ?? []).map(item => '- ' + indent(blocks(item.content, true), '  ')).join('\n');
    case 'taskList': return (node.content ?? []).map(item => `- [${item.attrs?.checked === true ? 'x' : ' '}] ` + indent(blocks(item.content, true), '  ')).join('\n');
    case 'orderedList': {
      const start = Number.isInteger(node.attrs?.start) ? (node.attrs!.start as number) : 1;
      return (node.content ?? []).map((item, i) => { const mark = `${start + i}. `; return mark + indent(blocks(item.content, true), ' '.repeat(mark.length)); }).join('\n');
    }
    case 'table': {
      const rows = (node.content ?? []).map(row => (row.content ?? []).map(cell => (cell.content ?? []).map(b => inline(b.content)).join(' ').replace(/\|/g, '\\|').replace(/\n/g, ' ')));
      if (!rows.length) return '';
      const width = Math.max(...rows.map(r => r.length));
      const line = (cells: string[]) => '| ' + Array.from({ length: width }, (_, i) => cells[i] ?? '').join(' | ') + ' |';
      return [line(rows[0]), line(Array(width).fill('---')), ...rows.slice(1).map(line)].join('\n');
    }
    default: return inline(node.content);
  }
}
const blocks = (nodes: Node[] = [], tight = false) => nodes.map(block).join(tight ? '\n' : '\n\n');

export const toMarkdown = (tree: Node): string => blocks(tree.content).trim() + '\n';

/* ---------- Import ---------- */
const text = (value: string, marks: Mark[]): Node => (marks.length ? { type: 'text', text: value, marks } : { type: 'text', text: value });
const INLINE = /\\([\\`*_[\]~#>+\-.!|()])|(`+)([^`]|[^`][\s\S]*?[^`])\2(?!`)|\[([^\]\n]+)\]\(([^)\s]+)\)|(\*\*|__)(?=\S)([\s\S]+?\S)\6|~~(?=\S)([\s\S]+?\S)~~|(\*)(?=\S)([\s\S]+?\S)\*|(?<![\p{L}\p{N}])_(?=\S)([\s\S]+?\S)_(?![\p{L}\p{N}])/gu;

function parseInline(source: string, marks: Mark[] = []): Node[] {
  const out: Node[] = [];
  const push = (value: string, m: Mark[]) => { if (value) out.push(text(value, m)); };
  const add = (type: string, attrs?: Mark['attrs']) => (marks.some(m => m.type === type) ? marks : [...marks, attrs ? { type, attrs } : { type }]);
  let at = 0;
  for (const m of source.matchAll(INLINE)) {
    push(source.slice(at, m.index), marks);
    at = m.index + m[0].length;
    if (m[1] !== undefined) push(m[1], marks);
    else if (m[2] !== undefined) push(m[3].trim() || m[3], add('code'));
    else if (m[4] !== undefined) {
      if (safeHref(m[5]) && m[4].length <= 256) out.push(...parseInline(m[4], add('link', { href: m[5] })));
      else push(m[0], marks); // not a link this app accepts: it stays text, as typed
    } else if (m[6] !== undefined) out.push(...parseInline(m[7], add('bold')));
    else if (m[8] !== undefined) out.push(...parseInline(m[8], add('strike')));
    else if (m[9] !== undefined) out.push(...parseInline(m[10], add('italic')));
    else if (m[11] !== undefined) out.push(...parseInline(m[11], add('italic')));
  }
  push(source.slice(at), marks);
  // Adjacent pieces with the same marks are one text node (an escaped character must not cut a sentence in three).
  const merged: Node[] = [];
  for (const node of out) {
    const last = merged.at(-1);
    if (last && last.type === 'text' && node.type === 'text' && JSON.stringify(last.marks ?? []) === JSON.stringify(node.marks ?? [])) last.text = (last.text ?? '') + (node.text ?? '');
    else merged.push(node);
  }
  return merged;
}

function paragraphInline(lines: string[]): Node[] {
  const out: Node[] = [];
  lines.forEach((line, i) => {
    const hard = /( {2,}|\\)$/.test(line);
    out.push(...parseInline(line.replace(/( {2,}|\\)$/, '').trim()));
    if (i < lines.length - 1) out.push(hard ? { type: 'hardBreak' } : text(' ', []));
  });
  for (let i = out.length - 1; i > 0; i--) {
    const a = out[i - 1], b = out[i];
    if (a.type === 'text' && b.type === 'text' && !a.marks && !b.marks) out.splice(i - 1, 2, text((a.text ?? '') + (b.text ?? ''), []));
  }
  return out;
}

const FENCE = /^ {0,3}(`{3,}|~{3,})\s*([^\s`]*)/;
const HEADING = /^ {0,3}(#{1,6})\s+(.*?)\s*#*\s*$/;
const RULE = /^ {0,3}([-*_])( *\1){2,}\s*$/;
const ITEM = /^(\s*)([-*+]|\d{1,9}[.)])\s+(.*)$/;
const TABLE_SEP = /^\s*\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)*\|?\s*$/;
const cells = (line: string) => line.trim().replace(/^\|/, '').replace(/\|$/, '').split(/(?<!\\)\|/).map(c => c.trim().replace(/\\\|/g, '|'));
const para = (content: Node[]): Node => (content.length ? { type: 'paragraph', content } : { type: 'paragraph' });

function parseBlocks(lines: string[], depth = 0): Node[] {
  const out: Node[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    let m: RegExpExecArray | null;
    if ((m = FENCE.exec(line))) {
      const body: string[] = [];
      i++;
      while (i < lines.length && !new RegExp(`^ {0,3}${m[1][0]}{${m[1].length},}\\s*$`).test(lines[i])) body.push(lines[i++]);
      i++;
      const node: Node = { type: 'codeBlock', attrs: { language: m[2] ? m[2].slice(0, 40) : null } };
      if (body.length && body.join('\n')) node.content = [text(body.join('\n'), [])];
      out.push(node);
    } else if ((m = HEADING.exec(line))) {
      const content = parseInline(m[2]);
      out.push({ type: 'heading', attrs: { level: Math.min(3, m[1].length) }, ...(content.length ? { content } : {}) });
      i++;
    } else if (RULE.test(line)) {
      out.push({ type: 'horizontalRule' });
      i++;
    } else if (/^ {0,3}>/.test(line)) {
      const body: string[] = [];
      while (i < lines.length && /^ {0,3}>/.test(lines[i])) body.push(lines[i++].replace(/^ {0,3}> ?/, ''));
      const inner = depth < 12 ? parseBlocks(body, depth + 1) : [para(parseInline(body.join(' ')))];
      out.push({ type: 'blockquote', content: inner.length ? inner : [para([])] });
    } else if (line.includes('|') && i + 1 < lines.length && TABLE_SEP.test(lines[i + 1]) && lines[i + 1].includes('-')) {
      const head = cells(line);
      const rows: string[][] = [];
      i += 2;
      while (i < lines.length && lines[i].trim() && lines[i].includes('|')) rows.push(cells(lines[i++]));
      const row = (values: string[], type: string): Node => ({
        type: 'tableRow',
        content: head.map((_, c) => ({ type, attrs: { colspan: 1, rowspan: 1 }, content: [para(parseInline(values[c] ?? ''))] })),
      });
      out.push({ type: 'table', content: [row(head, 'tableHeader'), ...rows.map(r => row(r, 'tableCell'))] });
    } else if ((m = ITEM.exec(line))) {
      const base = m[1].length;
      const ordered = /\d/.test(m[2]);
      const items: { lines: string[] }[] = [];
      while (i < lines.length) {
        const im = ITEM.exec(lines[i]);
        if (im && im[1].length <= base + 1 && /\d/.test(im[2]) === ordered) {
          items.push({ lines: [im[3]] });
          i++;
        } else if (items.length && (!lines[i].trim() ? i + 1 < lines.length && /^\s+\S/.test(lines[i + 1]) && lines[i + 1].search(/\S/) > base : lines[i].search(/\S/) > base)) {
          items.at(-1)!.lines.push(lines[i].slice(Math.min(lines[i].search(/\S/) < 0 ? 0 : lines[i].search(/\S/), base + 2)));
          i++;
        } else break;
      }
      const task = !ordered && items.every(it => /^\[[ xX]\]\s/.test(it.lines[0] + ' '));
      const children = items.map(it => {
        const checked = task && /^\[[xX]\]/.test(it.lines[0]);
        if (task) it.lines[0] = it.lines[0].replace(/^\[[ xX]\]\s?/, '');
        const inner = depth < 12 ? parseBlocks(it.lines, depth + 1) : [para(parseInline(it.lines.join(' ')))];
        const content = inner.length && inner[0].type === 'paragraph' ? inner : [para([]), ...inner];
        return task ? { type: 'taskItem', attrs: { checked }, content } : { type: 'listItem', content };
      });
      if (task) out.push({ type: 'taskList', content: children });
      else if (ordered) out.push({ type: 'orderedList', attrs: { start: Math.min(1e9, parseInt(m[2], 10)) }, content: children });
      else out.push({ type: 'bulletList', content: children });
    } else {
      const body: string[] = [];
      while (i < lines.length && lines[i].trim() && !FENCE.test(lines[i]) && !HEADING.test(lines[i]) && !RULE.test(lines[i]) && !/^ {0,3}>/.test(lines[i]) && !(body.length && ITEM.test(lines[i]))) body.push(lines[i++]);
      out.push(para(paragraphInline(body)));
    }
  }
  return out;
}

/** Markdown (or plain text) as a note tree. Throws RangeError beyond the limits, before any parsing. */
export function fromMarkdown(source: string): Node {
  if (source.length > MAX_MARKDOWN) throw new RangeError('markdown too large');
  const lines = source.replace(/\r\n?/g, '\n').replace(/^﻿/, '').split('\n');
  if (lines.length > MAX_LINES) throw new RangeError('too many lines');
  return { type: 'doc', content: parseBlocks(lines) };
}
