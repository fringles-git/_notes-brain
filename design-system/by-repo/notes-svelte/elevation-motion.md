Source : notes-svelte, commits lus : 4, plage : 2026-10-22 à 2026-10-22

Références : S1 = notes-svelte@2923c47d 2026-10-22, S2 = notes-svelte@112ae9d8 2026-10-22, S3 = notes-svelte@96889f8d 2026-10-22 (HEAD). Le commit cac60e91 (Initial commit) n'a aucun contenu graphique. Les quatre commits sont du même jour (10:22, 12:48, 13:18, 13:26) : aucune valeur de design ne change entre commits ; chaque ligne vaut donc "S1 à HEAD" sauf mention.

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| --shadow-soft clair | 0 10px 24px rgba(26,26,26,0.08) | tokens.css | S1 | HEAD | |
| --shadow-soft sombre | 0 12px 28px rgba(0,0,0,0.26) | tokens.css | S1 | HEAD | |
| --shadow-strong clair | 0 18px 34px rgba(26,26,26,0.12) | tokens.css | S1 | HEAD | menu rapide |
| --shadow-strong sombre | 0 18px 38px rgba(0,0,0,0.3) | tokens.css | S1 | HEAD | |
| ombre du bouton + | 0 14px 26px rgba(217,163,90,0.24) | BottomNavigation.svelte | S3 | HEAD | |
| flou (verre) | backdrop-filter: blur(16px) (+ -webkit-) sur la barre d'onglets | BottomNavigation.svelte | S3 (QuickActionMenu.svelte dès S1) | HEAD | aucune saturation |
| z-index | 30 (barre d'onglets, position sticky bottom 0) | BottomNavigation.svelte | S3 | HEAD | seule valeur ; pas d'échelle |
| --duration-fast | 160ms | tokens.css | S1 | HEAD | |
| --duration-base | 240ms | tokens.css | S1 | HEAD | non utilisé dans les composants lus |
| --duration-slow | 340ms | tokens.css | S1 | HEAD | non utilisé |
| courbe | `ease` (aucune cubic-bezier) | composants | S1 | HEAD | |
| transitions onglet | background, color, transform 160ms ease | BottomNavigation.svelte | S3 | HEAD | |
| transitions NoteCard | transform, border-color 160ms ease ; survol translateY(-1px) | NoteCard.svelte | S1 | HEAD | |
| .add-button:active | transform: scale(0.96) | BottomNavigation.svelte | S3 | HEAD | |
| appui long du + | 450 ms ouvre le menu rapide | BottomNavigation.svelte | S3 | HEAD | |
| @keyframes | aucun | | | | |
| prefers-reduced-motion | animation-duration et transition-duration 0.01ms !important, scroll-behavior auto | tokens.css | S1 | HEAD | |
| prefers-color-scheme | dark : jeu sombre si thème non forcé clair | tokens.css | S1 | HEAD | |
| focus | :focus-visible outline 2px solid var(--accent), offset 2px | tokens.css | S1 | HEAD | |
