import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { describe, test } from 'node:test';
import { CryptError, decrypt, encrypt, isEncrypted, keyOf, newKey, opaqueName, phraseOf } from '../src/crypto/notesenc.ts';

const raw = async (b: Blob) => new Uint8Array(await b.arrayBuffer());
const fails = (fn: () => Promise<unknown>, why: string) => assert.rejects(fn, (e: unknown) => e instanceof CryptError && e.why === why);
const LOG2 = 12, CH = 2 ** LOG2, HEAD = 26, TAG = 16;
const key = newKey();

describe('recovery phrase', () => {
  test('28 signs in 7 groups, gives the key back, case and separators ignored', async () => {
    const phrase = await phraseOf(key);
    assert.match(phrase, /^([A-HJ-NP-Z2-9]{4}-){6}[A-HJ-NP-Z2-9]{4}$/);
    assert.deepEqual(await keyOf(phrase), key);
    assert.deepEqual(await keyOf(phrase.toLowerCase().replaceAll('-', ' ')), key);
  });
  test('known vector shared with notes-v3 and mindspace-core', async () => {
    const k = Uint8Array.from({ length: 16 }, (_, i) => i);
    assert.equal(await phraseOf(k), 'AAAS-EA2E-AWDA-QCAK-BJFS-2DJQ-B63Z');
    assert.deepEqual(await keyOf('AAAS-EA2E-AWDA-QCAK-BJFS-2DJQ-B63Z'), k);
  });
  test('a typo, a wrong length, a foreign sign are refused', async () => {
    const phrase = await phraseOf(key);
    assert.equal(await keyOf(phrase.replace(/[A-Z2-9]/, c => (c === 'A' ? 'B' : 'A'))), null);
    assert.equal(await keyOf(phrase.slice(0, -1)), null);
    assert.equal(await keyOf('0000-0000-0000-0000-0000-0000-0000'), null);
    await fails(() => phraseOf(new Uint8Array(15)), 'key');
  });
});

describe('container', () => {
  for (const n of [0, 1, CH - 1, CH, CH + 1, CH * 3 + 17]) {
    test(`${n} bytes round trip`, async () => {
      const plain = crypto.getRandomValues(new Uint8Array(n));
      const enc = await encrypt(new Blob([plain]), key, LOG2);
      assert.ok(await isEncrypted(enc));
      assert.equal(enc.size, HEAD + n + TAG * (Math.floor(n / CH) + 1));
      assert.deepEqual(await raw(await decrypt(enc, key)), plain);
    });
  }
  test('nothing readable, one salt per file', async () => {
    const text = 'Café « œuf » secret';
    const a = await raw(await encrypt(new Blob([text]), key, LOG2));
    const b = await raw(await encrypt(new Blob([text]), key, LOG2));
    assert.ok(!new TextDecoder().decode(a).includes('secret'));
    assert.notDeepEqual(a.slice(10, 26), b.slice(10, 26));
    assert.notDeepEqual(a.slice(26), b.slice(26));
  });
  test('wrong key, altered, cut, extended, reordered, foreign and newer files are refused', async () => {
    const file = await raw(await encrypt(new Blob([new Uint8Array(CH * 2 + 5)]), key, LOG2));
    const edit = (fn: (c: Uint8Array) => Uint8Array | void) => { const c = file.slice(); return new Blob([(fn(c) ?? c) as Uint8Array<ArrayBuffer>]); };
    await fails(() => decrypt(new Blob([file]), newKey()), 'key');
    await fails(() => decrypt(edit(c => { c[HEAD + CH + TAG + 3] ^= 1; }), key), 'corrupt');
    await fails(() => decrypt(edit(c => c.slice(0, HEAD + (CH + TAG) * 2)), key), 'corrupt'); // last chunk removed on a boundary
    await fails(() => decrypt(edit(c => new Uint8Array([...c, ...c.slice(-TAG)])), key), 'corrupt');
    await fails(() => decrypt(edit(c => { const one = c.slice(HEAD, HEAD + CH + TAG); c.copyWithin(HEAD, HEAD + CH + TAG, HEAD + 2 * (CH + TAG)); c.set(one, HEAD + CH + TAG); }), key), 'key');
    await fails(() => decrypt(edit(c => { c[12] ^= 1; }), key), 'key'); // salt changed
    await fails(() => decrypt(edit(c => { c[8] = 2; }), key), 'version');
    await fails(() => decrypt(new Blob(['{"notes":[]}']), key), 'format');
  });
  test('default chunk size crosses a boundary', async () => {
    const plain = Uint8Array.from({ length: 2 ** 20 + 5 }, (_, i) => (i * 7) & 255);
    assert.deepEqual(await raw(await decrypt(await encrypt(new Blob([plain]), key), key)), plain);
  });
  // The v3 test vector lives in the private repository mindspace-core: checked when that checkout is next to this one.
  const vector = new URL('../../../mindspace-core/tests/fixtures/v3-notesenc-v1.enc', import.meta.url);
  test('opens a file written by notes-v3', { skip: !existsSync(vector) && 'mindspace-core checkout not present' }, async () => {
    const k = await keyOf('AAAS-EA2E-AWDA-QCAK-BJFS-2DJQ-B63Z');
    assert.deepEqual(await raw(await decrypt(new Blob([readFileSync(vector)]), k!)), Uint8Array.from({ length: 4100 }, (_, i) => i % 251));
  });
  test('opaque names: stable for a key, different across keys, nothing of the label', async () => {
    const a = await opaqueName(key, 'note-id-1');
    assert.equal(a, await opaqueName(key, 'note-id-1'));
    assert.notEqual(a, await opaqueName(key, 'note-id-2'));
    assert.notEqual(a, await opaqueName(newKey(), 'note-id-1'));
    assert.match(a, /^[0-9a-f]{32}$/);
  });
});
