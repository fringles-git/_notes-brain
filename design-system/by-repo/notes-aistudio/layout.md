Source : notes-aistudio, commits lus : 7 (hors fusion 20ad6c90), plage : 2026-10-31 à 2026-11-06

Références : A0 = notes-aistudio@9021b9bc 2026-10-31 (premier commit avec contenu : appli importée, le commit cce6e01b ne contient qu'un README), A1 = @d2819fcc 2026-11-02, A2 = @6dbe9114 2026-11-05, A3 = @6fc4b9d7 2026-11-05 (CSS identique à @5a430a7b et @407c8f6d, qui ne touchent pas aux styles). HEAD = @407c8f6d 2026-11-06. Les tableaux générés listent une ligne par couple (propriété, valeur) ; « règle(s) » = nombre de déclarations CSS portant cette valeur ; « dernier état » donne le commit qui retire la valeur.

Navigation (états par période) :
- A0 : dock bas « navigation island next to + » : île de 4 destinations (Notes, Tâches, Bibliothèque, Réglages ; Recherche = mode dans l'île du haut), bouton + (FAB 52px) du côté de la main (`data-hand` gauche/droite, supprimé en A2).
- A1 (`@d2819fcc`) : « Bi-island navigation » : îlot Contenu (Notes, Tâches, Bibliothèque ; icône + libellé dessous, `--n: 3`) + îlot Outils (Recherche, Réglages : icônes seules) + FAB +. Top bar avec avatar-chip (profil / apparence rapide), bascule cartes / liste, tri et filtre. Réglages : liste de sections à gauche + détail à droite dès 64em.
- A2 (`@6dbe9114`) : « Unified navigation » : une seule île à 5 destinations (Notes, Tâches, Bibliothèque, Recherche, Paramètres, `--n: 5`) + FAB +. L'îlot Outils est retiré. `body[data-hand]` ne positionne plus le dock (règles `.bottom-nav-container`).
- A3 / HEAD : inchangé. Hauteurs : `--control-h` 52px, `--nav-h` 60px, `--nav-height` 58px (jeton défini ; nav-padding 4px), `--dock-bottom` = zone sûre + 8px + clavier, `--dock-space` = dock-bottom + nav-h + 24px.
Géométrie : `--layout-max` 1180px, `--layer-w` 380px, `--split-list` clamp(22rem, 34vw, 30rem), `--drawer-w` min(26rem, 45vw), `--edge` 12px, `--gutter` 16px, zones sûres `--safe-*` (`--safe-bottom` = max(env(safe-area-inset-bottom), 8px)), `--kb` clavier (interactive-widget=resizes-content). Éditeur : largeur narrow 600px / normal 760px / full 100% (A1).
Points de rupture réels : voir tableau ci-dessous (`wideMedia` `(min-width:40em) and (min-height:30em)`, `splitMedia` `(min-width:64em)`). Réglages : A1 ajoute `(max-width: 63.99em)` (feuilles) et `min-width: 64em` (maître-détail, colonne 280-340px).
Spécification d'origine (A1, `docs/design-reference/aistudio/Spécifications UX…md`, « Source de Vérité ») : cibles de 46 px, îlot gauche 210 px (~70 px par section) + 14 px de respiration + îlot droit 150 px sur écran de 390 px, marge de garde tactile 12 px entre réglages et +.

## Media queries dans app.css / tokens.css / looks.css
| propriété | valeur | première apparition | dernier état | notes |
|---|---|---|---|---|
| @media (forced-colors: active) |  | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 6 règle(s) à l'origine, 6 à HEAD; ex. `.tbl :is(th, td)[data-sel]`, `.tbl-tool[aria-pressed='true']` |
| @media (hover: hover) and (pointer: fine) |  | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 36 règle(s) à l'origine, 36 à HEAD; ex. `.card-actions`, `.card:is(:hover, :focus-within) .card-ac` |
| @media (max-height: 30em) |  | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `:root` |
| @media (max-width: 26em) |  | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 9 règle(s) à l'origine, 7 à HEAD; ex. `.main-dock`, `.main-dock #nav-island` |
| @media (max-width: 40em) |  | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.today-secondary-items`, `.today-action-detail` |
| @media (max-width: 440px) |  | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 3 règle(s) à l'origine, 3 à HEAD; ex. `body[data-hand] .bottom-nav-container` |
| @media (max-width: 63.99em) |  | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 25 règle(s) à l'origine, 25 à HEAD; ex. `.settings-backdrop`, `.settings-sheet` |
| @media (min-width: 40em) |  | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@d2819fcc 2026-11-02 | 2 règle(s) à l'origine; ex. `.first-actions`, `.starters` |
| @media (min-width: 40em) and (min-height: 30em) |  | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 93 règle(s) à l'origine, 70 à HEAD; ex. `.main-dock`, `.main-dock #nav-island` |
| @media (min-width: 64em) |  | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 42 règle(s) à l'origine, 61 à HEAD; ex. `body.is-editing .page`, `body.is-editing .recap-row` |
| @media (prefers-contrast: more) |  | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 16 règle(s) à l'origine, 16 à HEAD; ex. `:is(.dock, .editor-dock) .island.glass, `, `.card, .widget, .lib-tile, .first-use` |
| @media (prefers-reduced-motion: reduce) |  | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 4 règle(s) à l'origine, 4 à HEAD; ex. `.ambient, .icon-btn.is-recording, .rec-d`, `:root` |
| @media (prefers-reduced-transparency: reduce) |  | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 13 règle(s) à l'origine, 13 à HEAD; ex. `:root`, `:is(.dock, .editor-dock) .island.glass, ` |
| @media print |  | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 9 règle(s) à l'origine, 9 à HEAD; ex. `body > *:not(#print-area)`, `#print-area` |
