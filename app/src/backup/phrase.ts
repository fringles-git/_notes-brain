import { keyOf, newKey, phraseOf } from '../crypto/notesenc.ts';
import { db } from '../data/db.ts';
import { getPref, setPref } from '../data/prefs.ts';

/** The stored phrase is not a valid phrase: never replaced silently, earlier backups would become unreadable. */
export class PhraseError extends Error {
  constructor() { super('invalid stored recovery phrase'); }
}

/** The device's recovery phrase. Made on first need and stored BEFORE any file leaves: a file is never without its key.
    Kept in clear next to the notes it protects: it protects the files that leave the device, not the device. */
export async function getOrCreatePhrase(): Promise<{ phrase: string; created: boolean }> {
  const candidate = await phraseOf(newKey()); // WebCrypto outside the transaction: awaiting it inside would close it
  const result = await db.transaction('rw', db.prefs, async () => {
    const stored = await getPref('phrase');
    if (stored !== undefined) return { phrase: stored, created: false };
    await setPref('phrase', candidate);
    return { phrase: candidate, created: true };
  });
  if (!(await keyOf(result.phrase))) throw new PhraseError();
  return result;
}

/** Keeps the phrase that opened a backup as this device's own, when the user says the backup is theirs and the device has none.
    An existing phrase is never replaced. Never called for someone else's backup: they could read every later backup. */
export async function adoptPhrase(phrase: string): Promise<'adopted' | 'kept'> {
  const key = await keyOf(phrase);
  if (!key) throw new PhraseError();
  const canonical = await phraseOf(key);
  return db.transaction('rw', db.prefs, async () => {
    if ((await getPref('phrase')) !== undefined) return 'kept';
    await setPref('phrase', canonical);
    return 'adopted';
  });
}
