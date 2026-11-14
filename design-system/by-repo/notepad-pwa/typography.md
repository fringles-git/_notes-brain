Source : notepad-pwa, commits lus : 7, plage : 2026-10-20 à 2026-11-10

Précaution de lecture : dans ce dépôt les contenus de fichiers sont permutés (a488cc67 en corrige une partie). Le CSS vit dans `src/style.css` (3c6f6152 seulement), puis dans `public/manifest.webmanifest` (576a8c9d, 76dfefe5), puis il n'existe plus à HEAD (supprimé en a488cc67). Le HTML vit dans `index.html` (3c6f6152, inchangé jusqu'à HEAD) et en parallèle dans `src/main.js` (576a8c9d à HEAD). Le JS vit dans `public/manifest.webmanifest` (3c6f6152) puis `src/style.css` (576a8c9d à HEAD). Références : A = notepad-pwa@3c6f6152 2026-10-20, B = notepad-pwa@576a8c9d 2026-10-20, C = notepad-pwa@76dfefe5 2026-10-20, D = notepad-pwa@a488cc67 2026-10-20 (tous le même jour : 15:44, 16:09, 16:15, 16:17).

Aucune police n'est chargée (ni `@font-face`, ni `<link>` Google, ni paquet fontsource dans package.json) : "Inter" n'est qu'un nom dans la pile et dépend de l'installation locale.

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| pile de base (html, body) | `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` | CSS (`src/style.css`) | A | REMPLACÉE en B | source : système |
| pile de base | `Inter, "Segoe UI", sans-serif` | CSS (`public/manifest.webmanifest`) | B | dernier CSS connu C ; CSS supprimé en D (absent à HEAD) | Inter non chargée ; `-apple-system` et `BlinkMacSystemFont` retirés |
| pile de la fenêtre flottante (document.write) | `system-ui,sans-serif` | JS (`public/manifest.webmanifest` en A, `src/style.css` en B, C, HEAD) | A | HEAD | seul texte hors pile de base |
| boutons, input, textarea | `font: inherit` | CSS | A | C (CSS absent à HEAD) | |
| titre de marque h1 et titres de panneau h2 | 1rem, marges 0 | CSS | A | C | |
| timer-display | 1.8rem, weight 700, letter-spacing 0.1em | CSS | A | REMPLACÉE en B | |
| timer-display | clamp(1.6rem, 2vw, 2.2rem), weight 700, letter-spacing 0.14em | CSS | B | C | |
| .brand-mark lettre | 1.3rem, weight 700 | CSS | A | REMPLACÉE en B | |
| .brand-mark lettre | 1.4rem, weight 700 | CSS | B | C | |
| .snapshot-item strong | 0.78rem, display block | CSS | A | C | |
| .ambient-item | 0.84rem | CSS | A | REMPLACÉE en B | |
| .ambient-item | 0.86rem | CSS | B | C | |
| kbd | 0.8rem | CSS | A | C | |
| #editor | font-size 1.04rem, line-height 1.7 | CSS | A | REMPLACÉE en C | |
| #editor | font-size 1.08rem, line-height 1.8 | CSS | C | C (dernier CSS) | |
| #note-title | 1.05rem, weight 700 | CSS | C | C | champ titre de la note |
| .note-item strong | 0.82rem | CSS | C | C | |
| .note-item small, .note-item span | 0.72rem | CSS | C | C | word-break: break-word |
| échelle d'interlignes | 1.7 (éditeur, fenêtre flottante), 1.8 (éditeur C) | CSS | A | C | |
| polices supprimées | `-apple-system`, `BlinkMacSystemFont` | | A | SUPPRIMÉES notepad-pwa@576a8c9d 2026-10-20 | |
