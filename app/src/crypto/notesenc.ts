// Encrypted file container NOTESENC v1 and the recovery phrase. Independent implementation of the wire format used by notes-v3
// and mindspace-core: their `.enc` files open here and the other way round. Never change the layout: a new need is a new version.
//
//   file   = "NOTESENC" | version (1) | log2 of the chunk size | salt (16) | chunk 0 | chunk 1 | … | last chunk
//   key    = HKDF-SHA256(master key, salt, info "notes/backup/v1") -> AES-GCM key, one per file
//   chunk  = AES-GCM(key, nonce = 8 zero bytes + chunk number (u32, big endian), aad = header + 1 byte "is last") + 16 byte tag
//   The last chunk always exists (it may be empty) and is the only one flagged: a cut, extended or reordered file fails.
//
// The master key is 128 random bits shown as a 28 sign phrase. Nobody chooses it, so there is no password stretching.
// Public wording: "chiffrement AES-GCM". The strength is 128 bits: never write "AES-256".

export type CryptFailure = 'format' | 'version' | 'key' | 'corrupt';
export class CryptError extends Error {
  why: CryptFailure;
  constructor(why: CryptFailure) {
    super(why); // a fixed word: a key or a phrase never goes in an error message
    this.why = why;
  }
}

type Bytes = Uint8Array<ArrayBuffer>;
const bytes = (n: number): Bytes => new Uint8Array(new ArrayBuffer(n));
const utf8 = (s: string) => new TextEncoder().encode(s);

const MAGIC = utf8('NOTESENC');
const VERSION = 1;
const SALT_BYTES = 16;
const HEADER_BYTES = MAGIC.length + 2 + SALT_BYTES;
const TAG_BYTES = 16;
const LOG2_MIN = 12;
const LOG2_MAX = 24;
export const CHUNK_LOG2 = 20;
export const KEY_BYTES = 16;

/** getRandomValues refuses more than 64 KiB per call. */
export function randomBytes(n: number): Bytes {
  const out = bytes(n);
  for (let at = 0; at < n; at += 65536) crypto.getRandomValues(out.subarray(at, Math.min(n, at + 65536)));
  return out;
}
export const newKey = (): Bytes => randomBytes(KEY_BYTES);

/* ---------- Phrase: 26 signs for the 128 bits, 2 check signs, groups of four ---------- */
const SIGNS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no 0/O, no 1/I
const DATA_SIGNS = 26;

async function checkSigns(key: Bytes): Promise<string> {
  const digest = new Uint8Array(await crypto.subtle.digest('SHA-256', new Uint8Array([...utf8('notes-phrase'), ...key])));
  const ten = (digest[0] << 2) | (digest[1] >> 6); // first ten bits
  return SIGNS[ten >> 5] + SIGNS[ten & 31];
}

export async function phraseOf(key: Bytes): Promise<string> {
  if (key.length !== KEY_BYTES) throw new CryptError('key');
  let value = 0n;
  for (const b of key) value = (value << 8n) | BigInt(b);
  value <<= 2n; // 128 bits padded to 130 = 26 signs of 5 bits
  let signs = '';
  for (let i = DATA_SIGNS - 1; i >= 0; i--) signs += SIGNS[Number((value >> BigInt(i * 5)) & 31n)];
  return (signs + (await checkSigns(key))).replace(/(.{4})(?=.)/g, '$1-');
}

/** The key behind a phrase, or null when it is not one (length, unknown sign, failed check). Case and separators do not matter. */
export async function keyOf(phrase: string): Promise<Bytes | null> {
  const signs = phrase.toUpperCase().replace(/[\s-]/g, '');
  if (signs.length !== DATA_SIGNS + 2) return null;
  let value = 0n;
  for (const sign of signs.slice(0, DATA_SIGNS)) {
    const v = SIGNS.indexOf(sign);
    if (v < 0) return null;
    value = (value << 5n) | BigInt(v);
  }
  if (value & 3n) return null; // the two padding bits
  value >>= 2n;
  const key = bytes(KEY_BYTES);
  for (let i = KEY_BYTES - 1; i >= 0; i--, value >>= 8n) key[i] = Number(value & 255n);
  return signs.slice(DATA_SIGNS) === (await checkSigns(key)) ? key : null;
}

/* ---------- Container ---------- */
async function fileKey(master: Bytes, salt: Bytes, info = 'notes/backup/v1'): Promise<CryptoKey> {
  if (master.length !== KEY_BYTES) throw new CryptError('key');
  const base = await crypto.subtle.importKey('raw', master, 'HKDF', false, ['deriveKey']);
  return crypto.subtle.deriveKey({ name: 'HKDF', hash: 'SHA-256', salt, info: utf8(info) }, base, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
}
const nonce = (chunk: number): Bytes => {
  const n = bytes(12);
  new DataView(n.buffer).setUint32(8, chunk);
  return n;
};
const aad = (header: Uint8Array, last: boolean): Bytes => {
  const a = bytes(header.length + 1);
  a.set(header);
  a[header.length] = last ? 1 : 0;
  return a;
};

export async function isEncrypted(file: Blob): Promise<boolean> {
  const head = new Uint8Array(await file.slice(0, MAGIC.length).arrayBuffer());
  return head.length === MAGIC.length && MAGIC.every((b, i) => head[i] === b);
}

export async function encrypt(plain: Blob, master: Bytes, chunkLog2 = CHUNK_LOG2): Promise<Blob> {
  if (!Number.isInteger(chunkLog2) || chunkLog2 < LOG2_MIN || chunkLog2 > LOG2_MAX) throw new RangeError('chunk size');
  const size = 2 ** chunkLog2;
  const count = Math.floor(plain.size / size) + 1;
  if (count > 2 ** 32) throw new RangeError('file too large'); // the counter would wrap and reuse a nonce
  const header = bytes(HEADER_BYTES);
  const salt = randomBytes(SALT_BYTES);
  header.set(MAGIC);
  header[MAGIC.length] = VERSION;
  header[MAGIC.length + 1] = chunkLog2;
  header.set(salt, MAGIC.length + 2);
  const key = await fileKey(master, salt);
  const parts: BlobPart[] = [header];
  for (let i = 0; i < count; i++) {
    const data = await plain.slice(i * size, (i + 1) * size).arrayBuffer();
    parts.push(await crypto.subtle.encrypt({ name: 'AES-GCM', iv: nonce(i), additionalData: aad(header, i === count - 1) }, key, data));
  }
  return new Blob(parts, { type: 'application/octet-stream' });
}

export async function decrypt(file: Blob, master: Bytes): Promise<Blob> {
  if (!(await isEncrypted(file))) throw new CryptError('format');
  const header = new Uint8Array(await file.slice(0, HEADER_BYTES).arrayBuffer());
  if (header.length < HEADER_BYTES) throw new CryptError('format');
  const version = header[MAGIC.length];
  if (version !== VERSION) throw new CryptError(version > VERSION ? 'version' : 'format');
  const log2 = header[MAGIC.length + 1];
  if (log2 < LOG2_MIN || log2 > LOG2_MAX) throw new CryptError('format');
  const size = 2 ** log2 + TAG_BYTES;
  const body = file.size - HEADER_BYTES;
  if (body < TAG_BYTES) throw new CryptError('corrupt');
  const key = await fileKey(master, header.slice(MAGIC.length + 2));
  const count = Math.ceil(body / size);
  const parts: BlobPart[] = [];
  for (let i = 0; i < count; i++) {
    const cipher = await file.slice(HEADER_BYTES + i * size, HEADER_BYTES + (i + 1) * size).arrayBuffer();
    try {
      parts.push(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: nonce(i), additionalData: aad(header, i === count - 1) }, key, cipher));
    } catch {
      // The first chunk does not open: wrong phrase (or a damaged start). A later one: the file was changed or cut.
      throw new CryptError(i === 0 ? 'key' : 'corrupt');
    }
  }
  return new Blob(parts);
}

/** Opaque file name for the sync folder: nothing about a note (not even its id) can be read from the folder listing. */
export async function opaqueName(master: Bytes, label: string): Promise<string> {
  const key = await crypto.subtle.importKey('raw', master, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const mac = new Uint8Array(await crypto.subtle.sign('HMAC', key, utf8('notes/sync/name/v1:' + label)));
  return [...mac.subarray(0, 16)].map(b => b.toString(16).padStart(2, '0')).join('');
}
