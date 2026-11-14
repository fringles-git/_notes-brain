Source : notepad-pwa, commits lus : 7, plage : 2026-10-20 à 2026-11-10

Précaution de lecture : dans ce dépôt les contenus de fichiers sont permutés (a488cc67 en corrige une partie). Le CSS vit dans `src/style.css` (3c6f6152 seulement), puis dans `public/manifest.webmanifest` (576a8c9d, 76dfefe5), puis il n'existe plus à HEAD (supprimé en a488cc67). Le HTML vit dans `index.html` (3c6f6152, inchangé jusqu'à HEAD) et en parallèle dans `src/main.js` (576a8c9d à HEAD). Le JS vit dans `public/manifest.webmanifest` (3c6f6152) puis `src/style.css` (576a8c9d à HEAD). Références : A = notepad-pwa@3c6f6152 2026-10-20, B = notepad-pwa@576a8c9d 2026-10-20, C = notepad-pwa@76dfefe5 2026-10-20, D = notepad-pwa@a488cc67 2026-10-20 (tous le même jour : 15:44, 16:09, 16:15, 16:17).

Fingerprint : sha1 (8 premiers caractères) du SVG décodé (data-URI décodée, espaces normalisés, guillemets d'origine conservés). Aucune bibliothèque d'icônes (ni lucide, ni autre) : package.json ne contient que `docx`, `jspdf`, `vite`.

| icône | source | empreinte | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| favicon (carré arrondi sombre + bloc de lignes), rx=12 | SVG en ligne (data-URI) dans `index.html` ligne `<link rel="icon">` | fe6df6bd | A (`index.html`) | HEAD (`index.html` n'a jamais été modifié) | viewBox 0 0 64 64, rect fill #0f172a, bloc #f8fafc opacité .08, trois barres #e2e8f0. Fichier : svg/favicon-rx12-fe6df6bd.svg |
| favicon, rx=14 | SVG en ligne (data-URI) dans le HTML de `src/main.js` | 3262e41b | B | HEAD (`src/main.js` à HEAD contient le HTML) | même tracé, seul rx passe de 12 à 14. Fichier : svg/favicon-rx14-3262e41b.svg. Deux favicons coexistent à HEAD (`index.html` rx 12, `src/main.js` rx 14) à cause de la permutation de fichiers |
| icône d'application du manifest, rx=16 | SVG en ligne (data-URI) dans `public/sw.js` (A, B, C : le manifest JSON est dans `sw.js`), puis `public/manifest.webmanifest` (D à HEAD) | 20c49c83 | A | HEAD | icons[0] : sizes "64x64", type image/svg+xml, purpose "any". Aucun PNG, aucune icône 192/512, aucune maskable, aucun apple-touch-icon. Fichier : svg/manifest-icon-rx16-20c49c83.svg |
| ◐ (U+25D0) bouton thème | caractère Unicode dans le HTML (`#theme-toggle`, aria-label "Toggle theme") | - | A | HEAD | glyphe texte, pas de SVG |
| ▣ (U+25A3) bouton plein écran | caractère Unicode (`#fullscreen-btn`, aria-label "Fullscreen") | - | A | HEAD | glyphe texte |
| ⬚ (U+2B1A) bouton fenêtre flottante | caractère Unicode (`#float-window-btn`, aria-label "Floating window") | - | A | HEAD | glyphe texte |
| N (monogramme) | texte dans `.brand-mark` (`<div class="brand-mark">N</div>`) | - | A | HEAD | carré dégradé `linear-gradient(135deg, var(--primary), #38bdf8)`, 2.5rem (A) puis 2.7rem (B), lettre 1.3rem puis 1.4rem, weight 700 |

Icônes d'application (PWA) : une seule entrée, la data-URI SVG 64x64 ci-dessus. Pas de favicon.ico ni de PNG dans l'historique (`git ls-tree -r` de chaque commit ne montre aucun fichier image).
Sources de vérité : `git show 3c6f6152:public/sw.js` (manifest d'origine), `git show 3c6f6152:index.html`, `git show 576a8c9d:src/main.js`, `git show a488cc67:public/manifest.webmanifest`.
