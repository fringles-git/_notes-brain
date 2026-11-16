import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import { invalid } from '../src/doc/schema.ts';
import { plain, type Node } from '../src/doc/tree.ts';
import { fromMarkdown, MAX_LINES, toMarkdown } from '../src/io/markdown.ts';

const types = (n: Node): unknown => (n.content ? [n.type, ...n.content.map(types)] : n.type);
const SAMPLE = `# Réunion du lundi

Un **gras**, un *italique*, un ~~barré~~, du \`code\` et un [lien](https://exemple.fr/a?b=1).
Suite de la même ligne.

## Liste

- pain
- lait
  - demi-écrémé
  - entier
- œufs

1. un
2. deux

- [ ] appeler
- [x] payer

> citation
> sur deux lignes

\`\`\`js
const a = 1; // **pas du gras**
\`\`\`

---

| Nom | Prix |
| --- | :-: |
| Thé | 3 \\| 4 |
`;

describe('markdown import', () => {
  const tree = fromMarkdown(SAMPLE);
  test('every block is recognised and the result is a valid note', () => {
    assert.equal(invalid(tree), null);
    assert.deepEqual(tree.content!.map(n => n.type), ['heading', 'paragraph', 'heading', 'bulletList', 'orderedList', 'taskList', 'blockquote', 'codeBlock', 'horizontalRule', 'table']);
  });
  test('marks', () => {
    const marks = tree.content![1].content!.flatMap(n => (n.marks ?? []).map(m => m.type));
    assert.deepEqual(marks, ['bold', 'italic', 'strike', 'code', 'link']);
    assert.equal(tree.content![1].content!.find(n => n.marks?.[0].type === 'link')?.marks?.[0].attrs?.href, 'https://exemple.fr/a?b=1');
  });
  test('nested list, task state, code language, table cells', () => {
    assert.deepEqual(types(tree.content![3].content![1]), ['listItem', ['paragraph', 'text'], ['bulletList', ['listItem', ['paragraph', 'text']], ['listItem', ['paragraph', 'text']]]]);
    assert.deepEqual(tree.content![5].content!.map(i => i.attrs?.checked), [false, true]);
    assert.equal(tree.content![7].attrs?.language, 'js');
    assert.equal(plain(tree.content![7]), 'const a = 1; // **pas du gras**');
    assert.equal(plain(tree.content![9].content![1].content![1]), '3 | 4');
    assert.equal(tree.content![9].content![0].content![0].type, 'tableHeader');
  });
  test('unsafe links stay text, HTML is never interpreted', () => {
    const t = fromMarkdown('[x](javascript:alert(1)) <img src=x onerror=alert(1)> [y](data:text/html,z)');
    assert.equal(invalid(t), null);
    assert.ok(t.content![0].content!.every(n => !n.marks));
    assert.match(plain(t), /<img src=x onerror=alert\(1\)>/);
  });
  test('underscore emphasis, not inside a word', () => {
    const t = fromMarkdown('_oui_ mais snake_case_reste et __fort__');
    assert.deepEqual(t.content![0].content!.map(n => [n.text, n.marks?.[0].type]), [['oui', 'italic'], [' mais snake_case_reste et ', undefined], ['fort', 'bold']]);
  });
  test('limits are checked before parsing', () => {
    assert.throws(() => fromMarkdown('a\n'.repeat(MAX_LINES + 1)), RangeError);
    assert.throws(() => fromMarkdown('a'.repeat(2 * 2 ** 20 + 1)), RangeError);
  });
  test('plain text and odd input never throw and stay valid', () => {
    for (const s of ['', '\n\n', 'juste du texte', '- ', '> ', '```', '| a |\n|---|', '#', '1. \n   - [ ] x', '**', '`', '[a](', '- [ ] a\n- b']) assert.equal(invalid(fromMarkdown(s)), null, JSON.stringify(s));
  });
});

describe('markdown export', () => {
  test('round trip keeps structure and text', () => {
    const tree = fromMarkdown(SAMPLE);
    const again = fromMarkdown(toMarkdown(tree));
    assert.deepEqual(types(again), types(tree));
    assert.equal(plain(again), plain(tree));
    assert.deepEqual(again.content![5], tree.content![5]);
  });
  test('characters that would become markup are escaped', () => {
    const tree: Node = { type: 'doc', content: [{ type: 'paragraph', content: [{ type: 'text', text: '# pas un titre, *pas* de _mise en forme_ [ni lien]' }] }] };
    const again = fromMarkdown(toMarkdown(tree));
    assert.deepEqual(again, tree);
  });
});
