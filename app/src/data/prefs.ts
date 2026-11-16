import { db } from './db.ts';

export type Theme = 'system' | 'light' | 'dark';
/** Every device setting and its type. Adding a setting = adding a key here. Never in a backup, never synced. */
export type Prefs = {
  theme: Theme;
  /** Recovery phrase of the encrypted backups and of the sync folder. Kept next to the notes it protects. */
  phrase: string;
  lastBackup: number;
  backupSnoozedAt: number;
  /** Note that receives tasks typed in the Tasks tab. */
  inbox: string;
  /** Random id of this device (sync). */
  device: string;
  lastSync: number;
  installSnoozedAt: number;
};

export const getPref = async <K extends keyof Prefs>(key: K): Promise<Prefs[K] | undefined> =>
  (await db.prefs.get(key))?.value as Prefs[K] | undefined;
export const setPref = <K extends keyof Prefs>(key: K, value: Prefs[K]) => db.prefs.put({ key, value });
export const delPref = (key: keyof Prefs) => db.prefs.delete(key);
