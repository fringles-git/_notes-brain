// A note's text as a plain tree (the ProseMirror JSON shape), and its two-way conversion with the Y.XmlFragment the editor binds to.
// Pure Yjs: no ProseMirror, no DOM. Import, restore, export, indexing and tests all go through here without loading the editor.
// The encoding is the one of y-prosemirror (@tiptap/y-tiptap): one Y.XmlElement per node, attributes as node attrs,
// runs of text as one Y.XmlText whose formatting attributes are the marks.
import * as Y from 'yjs';

export type Mark = { type: string; attrs?: Record<string, unknown> };
export type Node = { type: string; attrs?: Record<string, unknown>; content?: Node[]; text?: string; marks?: Mark[] };

/** Name of the fragment that holds the text. Same field as mindspace-core and the older MindSpace: their documents open here. */
export const FRAGMENT = 'default';

// y-prosemirror suffixes overlapping marks with a hash ("link--Ab3d…"): the mark name is what precedes it.
const markName = (attr: string) => /^(.*)--[a-zA-Z0-9+/=]{8}$/.exec(attr)?.[1] ?? attr;

function textNodes(text: Y.XmlText): Node[] {
  const out: Node[] = [];
  for (const op of text.toDelta() as { insert: unknown; attributes?: Record<string, Record<string, unknown> | null> }[]) {
    if (typeof op.insert !== 'string' || op.insert === '') continue;
    const marks: Mark[] = Object.entries(op.attributes ?? {})
      .filter(([, attrs]) => attrs !== null)
      .map(([name, attrs]) => (attrs && Object.keys(attrs).length ? { type: markName(name), attrs } : { type: markName(name) }));
    out.push(marks.length ? { type: 'text', text: op.insert, marks } : { type: 'text', text: op.insert });
  }
  return out;
}

function childrenOf(parent: Y.XmlFragment | Y.XmlElement): Node[] {
  const out: Node[] = [];
  for (const child of parent.toArray()) {
    if (child instanceof Y.XmlText) out.push(...textNodes(child));
    else if (child instanceof Y.XmlElement) {
      const node: Node = { type: child.nodeName };
      const attrs = child.getAttributes() as Record<string, unknown>;
      if (Object.keys(attrs).length) node.attrs = attrs;
      const content = childrenOf(child);
      if (content.length) node.content = content;
      out.push(node);
    }
  }
  return out;
}

/** The current text of a note as a tree. */
export const readTree = (doc: Y.Doc): Node => ({ type: 'doc', content: childrenOf(doc.getXmlFragment(FRAGMENT)) });

export function toY(nodes: Node[]): (Y.XmlElement | Y.XmlText)[] {
  const out: (Y.XmlElement | Y.XmlText)[] = [];
  let run: Node[] = [];
  const flush = () => {
    if (!run.length) return;
    const text = new Y.XmlText();
    text.applyDelta(
      run.map(n => ({ insert: n.text ?? '', attributes: Object.fromEntries((n.marks ?? []).map(m => [m.type, m.attrs ?? {}])) })),
    );
    out.push(text);
    run = [];
  };
  for (const node of nodes) {
    if (node.type === 'text') {
      if (node.text) run.push(node);
      continue;
    }
    flush();
    const el = new Y.XmlElement(node.type);
    for (const [key, value] of Object.entries(node.attrs ?? {})) if (value !== null && value !== undefined) el.setAttribute(key, value as string);
    el.insert(0, toY(node.content ?? []));
    out.push(el);
  }
  flush();
  return out;
}

/** Appends a tree to a note's text. On an empty document this is "set the text". */
export function appendTree(doc: Y.Doc, tree: Node, origin?: unknown): void {
  const fragment = doc.getXmlFragment(FRAGMENT);
  doc.transact(() => fragment.insert(fragment.length, toY(tree.content ?? [])), origin);
}

/** Plain text of a node: its text leaves joined, a hard break as a newline. */
export function plain(node: Node): string {
  if (node.type === 'text') return node.text ?? '';
  if (node.type === 'hardBreak') return '\n';
  return (node.content ?? []).map(plain).join('');
}
