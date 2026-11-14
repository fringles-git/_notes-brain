Source : notes-svelte, commits lus : 4, plage : 2026-10-22 à 2026-10-22

Références : S1 = notes-svelte@2923c47d 2026-10-22, S2 = notes-svelte@112ae9d8 2026-10-22, S3 = notes-svelte@96889f8d 2026-10-22 (HEAD).

Un seul "look" (papier crème + ambre) en deux modes ; aucun thème nommé (pas de Verre, Acrylique ni Papier).

| thème | différences de jetons | introduit | retrait | réf |
|---|---|---|---|---|
| clair | voir colors.md (--bg #F7F3EE, --accent #D9A35A) | notes-svelte@2923c47d 2026-10-22 | HEAD (actif) | colors.md |
| sombre | --bg #141413, --accent #E3B36C, --highlight #3A2D1B | notes-svelte@2923c47d 2026-10-22 | HEAD (actif) | colors.md |
| système (mode, non un thème) | suit prefers-color-scheme ; attribut data-theme posé par theme.ts et media query de repli dans tokens.css | notes-svelte@2923c47d 2026-10-22 | HEAD | theme.ts |
| effet verre | uniquement la barre d'onglets : rgba blanc 0.46 (clair) / rgba(25,25,25,0.64) (sombre) + blur(16px) | notes-svelte@2923c47d 2026-10-22 (QuickActionMenu.svelte) puis 96889f8d | HEAD | |
