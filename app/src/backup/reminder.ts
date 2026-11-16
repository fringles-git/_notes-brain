// Backup reminder, pure. Due when 14 days passed since the latest of: the last backup (or, never backed up, the oldest note:
// a new user is not nagged on day one) and the last "Plus tard". No note: never due. A date in the future (clock set back)
// is ignored, never clamped to now: clamping would mute the reminder until that date.
export const REMINDER_DAYS = 14;
const SPAN = REMINDER_DAYS * 86_400_000;

export type ReminderInput = { now: number; lastBackup?: number; snoozedAt?: number; oldestNote?: number };

/** The time the reminder becomes due, or null when it never will with these facts. */
export function reminderDueAt({ now, lastBackup, snoozedAt, oldestNote }: ReminderInput): number | null {
  if (oldestNote === undefined) return null;
  const past = (t: number | undefined) => (t !== undefined && t <= now ? t : undefined);
  const from = Math.max(past(lastBackup) ?? past(oldestNote) ?? now, past(snoozedAt) ?? 0);
  return from + SPAN;
}
export const reminderDue = (input: ReminderInput): boolean => {
  const at = reminderDueAt(input);
  return at !== null && input.now >= at;
};
