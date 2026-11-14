Source : notepad-pwa, commits lus : 7, plage : 2026-10-20 à 2026-11-10

Références : A = notepad-pwa@3c6f6152 2026-10-20, B = 576a8c9d, C = 76dfefe5, D = a488cc67.

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| modèle de navigation | aucune navigation : une seule page, trois colonnes (sidebar, éditeur, tools-panel) ; pas de dock, pas de barre latérale rétractable | HTML | A | HEAD | |
| .app-shell grille desktop | grid-template-columns: 290px minmax(0, 1fr) 280px | CSS | A | REMPLACÉ en B | |
| .app-shell grille desktop | 295px minmax(0, 1fr) 290px | CSS | B | C | |
| point de rupture 1100px | 1 colonne ; .sidebar et .tools-panel order: 2, .editor-area order: 1 | CSS @media (max-width: 1100px) | A | C | |
| point de rupture 560px | .app-shell padding 0.75rem ; .topbar flex-wrap: wrap gap 0.5rem ; .ambient-list 1 colonne | CSS @media (max-width: 560px) | B | C | |
| .ambient-list | grille 2 colonnes (repeat(2, minmax(0,1fr))) | CSS | A | C | 1 colonne sous 560px |
| mode focus | body.focus-mode masque .sidebar, .tools-panel, .topbar ; .editor-area grid-column 1 / -1 ; #editor min-height calc(100vh - 2rem) | CSS | A | C | |
| hauteur éditeur | min-height 72vh | CSS | A | C | |
| .toast | position fixed, right 1rem, bottom 1rem | CSS | A | C | |
| zones sûres | aucune (pas de env(safe-area-inset-*), pas de viewport-fit) | | | | |
| meta viewport | width=device-width, initial-scale=1.0 | HTML | A | HEAD | |
| orientation manifest | absente (A) ; portrait-primary (B) | manifest | B | HEAD | |
| display manifest | standalone | manifest | A | HEAD | |
| start_url / scope | "/" (A, B, C) ; "./" (D, HEAD) | manifest | A | HEAD | changé en D pour GitHub Pages |
| base Vite | "./" | vite.config.js | D | HEAD | |
