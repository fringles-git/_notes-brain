// What a note may contain. One table, read by: the validation of everything that comes from outside (restore, import, sync),
// and a test that compares it with the editor's real schema (tests/schema.test.ts), so the two cannot drift apart.
import type { Node } from './tree.ts';

type Rule = { attrs?: Record<string, (v: unknown) => boolean>; text?: boolean };
const int = (min: number, max: number) => (v: unknown) => Number.isInteger(v) && (v as number) >= min && (v as number) <= max;
const bool = (v: unknown) => typeof v === 'boolean';
const optStr = (max: number) => (v: unknown) => v === null || v === undefined || (typeof v === 'string' && v.length <= max);

/** Links: http(s) and mailto only, no control character, bounded (rule kept from MindSpace #43). */
export const safeHref = (v: unknown): v is string =>
  typeof v === 'string' && v.length <= 2048 && /^(https?:\/\/|mailto:)[^\s<>"'\u0000-\u001f]+$/i.test(v);

const cell: Rule = { attrs: { colspan: int(1, 100), rowspan: int(1, 100), colwidth: v => v === null || v === undefined || (Array.isArray(v) && v.every(int(1, 10000))) } };

export const NODES: Record<string, Rule> = {
  paragraph: {},
  heading: { attrs: { level: int(1, 3) } },
  bulletList: {},
  orderedList: { attrs: { start: int(0, 1e9), type: optStr(8) } },
  listItem: {},
  taskList: {},
  taskItem: { attrs: { checked: bool } },
  blockquote: {},
  codeBlock: { attrs: { language: optStr(40) } },
  horizontalRule: {},
  hardBreak: {},
  table: {},
  tableRow: {},
  tableHeader: cell,
  tableCell: cell,
};

export const MARKS: Record<string, Rule> = {
  bold: {},
  italic: {},
  strike: {},
  underline: {},
  code: {},
  link: { attrs: { href: safeHref, target: optStr(16), rel: optStr(64), class: optStr(64), title: optStr(256) } },
};

export const MAX_DEPTH = 30;
export const MAX_NODES = 50_000;

const attrsOk = (rule: Rule, attrs: Record<string, unknown> | undefined) =>
  Object.entries(attrs ?? {}).every(([key, value]) => rule.attrs?.[key]?.(value) === true);

/** Why a tree cannot be a note, or null when it can. Unknown node, unknown mark, unknown attribute, unsafe link: all refused. */
export function invalid(tree: Node): string | null {
  if (tree.type !== 'doc') return 'root';
  let count = 0;
  const walk = (node: Node, depth: number): string | null => {
    if (++count > MAX_NODES) return 'size';
    if (depth > MAX_DEPTH) return 'depth';
    if (node.type === 'text') {
      if (typeof node.text !== 'string' || node.content) return 'text';
      for (const mark of node.marks ?? []) {
        const rule = MARKS[mark.type];
        if (!rule || !attrsOk(rule, mark.attrs)) return `mark:${mark.type}`;
        if (mark.type === 'link' && !safeHref(mark.attrs?.href)) return 'link';
      }
      return null;
    }
    const rule = NODES[node.type];
    if (!rule || node.text !== undefined || node.marks || !attrsOk(rule, node.attrs)) return `node:${node.type}`;
    if (node.content !== undefined && !Array.isArray(node.content)) return `node:${node.type}`;
    for (const child of node.content ?? []) {
      const why = walk(child, depth + 1);
      if (why) return why;
    }
    return null;
  };
  if (!Array.isArray(tree.content ?? [])) return 'root';
  for (const child of tree.content ?? []) {
    const why = walk(child, 1);
    if (why) return why;
  }
  return null;
}
