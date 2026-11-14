Source : notepad-pwa, commits lus : 7, plage : 2026-10-20 à 2026-11-10

Références : A = notepad-pwa@3c6f6152 2026-10-20, B = notepad-pwa@576a8c9d 2026-10-20, C = notepad-pwa@76dfefe5 2026-10-20, D = notepad-pwa@a488cc67 2026-10-20. Le CSS existe seulement en A, B, C (dans des fichiers permutés) et est supprimé en D : à HEAD "dernier état" désigne donc le dernier CSS connu (C).

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| --radius (panneaux, brand-row, editor-area) | 18px | CSS :root | A | C | jeton unique de rayon ; pas de règle de calcul |
| rayon boutons | 10px | CSS button | A | REMPLACÉ en B | |
| rayon boutons | 12px | CSS button | B | C | |
| rayon .brand-mark | 12px | CSS | A | C | |
| rayon .snapshot-item | 10px | CSS | A | REMPLACÉ en B | |
| rayon .snapshot-item | 12px | CSS | B | C | |
| rayon .icon-button | 10px | CSS | A | C | |
| rayon #editor | 14px | CSS | A | REMPLACÉ en B | |
| rayon #editor | 16px | CSS | B | REMPLACÉ en C | |
| rayon #editor | 18px | CSS | C | C | |
| rayon .ambient-item, .toast | 10px | CSS | A | C | |
| rayon kbd | 6px | CSS | A | C | |
| rayon .search-box input, .note-item | 10px | CSS | C | C | |
| rayon #note-title | 12px | CSS | C | C | |
| rayon icône d'app et favicon | rx 12 (favicon index.html) / 14 (favicon src/main.js) / 16 (manifest) sur 64 | SVG | A / B / A | HEAD | voir icons.md |
| largeur de bordure | 1px solid var(--surface-border) partout ; kbd border-bottom-width 2px ; bouton `1px solid transparent` (A) puis `1px solid var(--surface-border)` (B) | CSS | A | C | |
| padding bouton | 0.7rem 1rem | CSS | A | REMPLACÉ en B | |
| padding bouton | 0.72rem 1rem | CSS | B | C | |
| padding panneau | 1rem | CSS .panel | A | C | brand-row 1rem (A) puis 1rem 1.1rem (B) |
| padding .app-shell | 1rem ; 0.75rem sous 560px | CSS | A (1rem) / B (0.75rem) | C | |
| gap .app-shell | 1rem | CSS | A | C | gaps internes 0.5rem, 0.7rem, 0.9rem, 1rem selon blocs |
| gap colonne sidebar, tools-panel | 1rem | CSS | A | C | |
| taille .icon-button | 2.5rem x 2.5rem | CSS | A | REMPLACÉE en B | |
| taille .icon-button | 2.55rem x 2.55rem | CSS | B | C | aucune cible 44px imposée ; 2.55rem = 40,8px à 16px |
| taille .brand-mark | 2.5rem x 2.5rem | CSS | A | REMPLACÉE en B | |
| taille .brand-mark | 2.7rem x 2.7rem | CSS | B | C | |
| .ambient-item hauteur | min-height 2.5rem | CSS | B | C | A : aucun min-height |
| .setting-row input (case) | 1.1rem x 1.1rem | CSS | B | C | |
| max-height .snapshot-list | 170px | CSS | A | REMPLACÉ en B | |
| max-height .snapshot-list | 220px | CSS | B | C | |
| max-height .note-list | 210px | CSS | C | C | |
| #editor padding | 1rem | CSS | A | REMPLACÉ en C | |
| #editor padding | 1.2rem 1.1rem | CSS | C | C | |
| #editor min-height | 72vh ; focus-mode calc(100vh - 2rem) | CSS | A | C | |
| tailles d'icônes | aucune icône à taille propre ; glyphes Unicode dans .icon-button | HTML | A | HEAD | voir icons.md |
