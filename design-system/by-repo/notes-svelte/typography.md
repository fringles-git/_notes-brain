Source : notes-svelte, commits lus : 4, plage : 2026-10-22 à 2026-10-22

Références : S1 = notes-svelte@2923c47d 2026-10-22, S2 = notes-svelte@112ae9d8 2026-10-22, S3 = notes-svelte@96889f8d 2026-10-22 (HEAD). Le commit cac60e91 (Initial commit) n'a aucun contenu graphique. Les quatre commits sont du même jour (10:22, 12:48, 13:18, 13:26) : aucune valeur de design ne change entre commits ; chaque ligne vaut donc "S1 à HEAD" sauf mention.

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| famille | `--font-family: 'Manrope', sans-serif` | `src/lib/styles/tokens.css` | S1 | HEAD | source : paquet fontsource |
| paquet | `@fontsource/manrope` ^5.0.0 (S1) puis ^5.3.0 (S2) | package.json | S1 | HEAD | |
| graisses chargées | 400, 500, 700, 800 (`@import '@fontsource/manrope/<w>.css'`) | tokens.css | S1 | HEAD | 500 jamais utilisé dans les composants lus (400 défaut, 700 et 800 utilisés) |
| --text-h1 / --line-h1 | 28px / 34px | tokens.css | S1 | HEAD | h1 weight 800 |
| --text-h2 / --line-h2 | 22px / 28px | tokens.css | S1 | HEAD | jeton défini, aucun h2 dans les écrans |
| --text-body / --line-body | 16px / 24px | tokens.css | S1 | HEAD | |
| --text-caption / --line-caption | 12px / 16px | tokens.css | S1 | HEAD | .eyebrow : majuscules, letter-spacing 0.06em, weight 700 |
| .note-title | 1.25rem, weight 800, line-height 1.3 | +layout.svelte | S1 | HEAD | |
| .note-body | 1.05rem, line-height 1.7 | +layout.svelte | S1 | HEAD | |
| .search-field input | 0.96rem | +layout.svelte | S1 | HEAD | |
| .tag-chip | 0.76rem, weight 700 | +layout.svelte | S1 | HEAD | |
| .editor-footer | 0.78rem, weight 700 | +layout.svelte | S1 | HEAD | |
| .label (Réglages) | 0.76rem, letter-spacing 0.04em, majuscules | +layout.svelte | S1 | HEAD | |
| strong | 0.96rem | +layout.svelte | S1 | HEAD | |
| .tab span (barre d'onglets) | 0.82rem, line-height 1.1, weight 700 ; 0.74rem sous 440px | BottomNavigation.svelte | S3 (aussi dans QuickActionMenu.svelte dès S1) | HEAD | |
| NoteCard h3 | 1.05rem, line-height 1.3, weight 700 | NoteCard.svelte | S1 | HEAD | |
| NoteCard copy | 0.95rem, line-height 1.6 | NoteCard.svelte | S1 | HEAD | |
| NoteCard pin-badge | 0.7rem, weight 700, letter-spacing 0.04em, majuscules | NoteCard.svelte | S1 | HEAD | |
| NoteCard tag-pill | 0.7rem, weight 700 | NoteCard.svelte | S1 | HEAD | |
| NoteCard footer | 0.74rem, weight 700 | NoteCard.svelte | S1 | HEAD | |
| polices supprimées | aucune | | | | |
| balise lang | fr | app.html | S1 | HEAD | |
