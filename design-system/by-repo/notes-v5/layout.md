Source : notes-v5, commits lus : 132, plage : 2026-10-21 à 2026-11-11

Points de rupture, grilles, modèle de navigation, géométrie. Les blocs @media sont listés avec le nombre de règles qu'ils portent (pas le détail).

## 1. Modèle de navigation par période

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| Dock 4 entrées : Notes, Bibliothèque, Recherche, Réglages | île `#nav-island` (`--n: 4`), onglets de largeur égale au départ (« equal widths cut Bibliothèque », design-teardown), puis largeurs par libellé --w1..--w4 depuis notes-v5@ad232dfb ; Recherche est un mode, jamais un lieu | src/notes/ui/Dock.tsx, app.css | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@32e9bd9e 2026-11-08 (→ 5 entrées) | « Une seule barre en bas : Notes, Bibliothèque, Recherche, Réglages, avec + du côté de la main dominante » (historique de versions hérité) ; ad232dfb : « Bibliothèque fits from 360px, the thumb follows » |
| Dock 5 entrées : Accueil, Notes, Tâches, Listes, Calendrier | `--n: 5`, pouce `calc((100% - 2*pad - 4*gap)/5)`, onglets `flex: 1 1 0` ; Recherche et Réglages passent dans l'en-tête | Dock.tsx, app.css | notes-v5@32e9bd9e 2026-11-08 | REMPLACÉ notes-v5@f1b51602 2026-11-08 (→ 4 entrées) | « Bas persistant : Accueil, Notes, Tâches, Listes, Calendrier ; icône puis libellé » (docs/navigation-editor.md) ; Réglages en pleine page |
| Dock 4 entrées : Aujourd'hui, Notes, Agenda, Bibliothèque | `--n: 4` ; Tâches rattaché à Aujourd'hui, Listes à Bibliothèque ; + centré au-dessus de la barre mobile | Dock.tsx, app.css | notes-v5@f1b51602 2026-11-08 | HEAD | « Quatre destinations : Aujourd'hui · Notes · Agenda · Bibliothèque. Navigation en bas sur mobile ; barre latérale à partir de 48em » (docs/contextual-navigation.md) |
| Barre latérale (rail) | à partir de `(min-width: 48em) and (min-height: 30em)` : pouce masqué, île sans verre, `--nav-rail` pour décaler l'éditeur ; 176px (« the 176px navigation rail », commentaire de 2bd9ec0b) ; 52px par bouton en rail (« navigation 48 px sur mobile et 52 px en barre latérale ») | app.css, tokens.css `--nav-rail` | notes-v5@f1b51602 2026-11-08 | HEAD | |
| Main dock mobile | `left/right: var(--space-2)` sous 47.99em, `var(--space-1)` sous 22em | app.css | notes-v5@f1b51602 2026-11-08 | HEAD | |
| Mode gaucher | `body[data-hand='left']` inverse barres et menus ; + à gauche | app.css, pref `hand` | notes-v5@b1f17318 2026-10-21 | HEAD | « Le mode gaucher inverse à nouveau toutes les barres et tous les menus » (historique hérité) |
| Création | panneau bas sur mobile (`.layer[data-mode='create']`, radius-lg haut), menu ancré sur tablette | app.css | notes-v5@f1b51602 2026-11-08 | HEAD | |
| Éditeur | barre d'outils fixe au bas de l'éditeur (`.editor .editor-dock`, bordure haute, sans verre) | app.css | notes-v5@f1b51602 2026-11-08 | HEAD | avant : île flottante `bottom: calc(var(--dock-bottom) + 64px)` (notes-v5@32e9bd9e) |
| Inspecteurs (Plan, Historique) | tiroir non modal à droite sur ≥48em, largeur `min(380px, 100vw - rail - space-4)` | app.css `.layer[data-inspector]` | notes-v5@b1f17318 2026-10-21 (tiroir) ; largeur fixée notes-v5@f1b51602 | HEAD | |
| Éditeur pleine largeur | `body.note-wide.is-editing .editor { left: var(--nav-rail) }` à `(min-width: 64em) and (min-height: 30em)` | app.css | notes-v5@1c1fb148 2026-11-11 | HEAD | réglage « Éditeur pleine largeur sur ordinateur » |
| Réglages | feuille du bas (`.sheet`) puis pleine page (32e9bd9e) ; deux colonnes `.cols.settings-layout`, une colonne sous 64em | Sheets.tsx, app.css | notes-v5@b1f17318 / notes-v5@32e9bd9e / notes-v5@2bd9ec0b 2026-11-11 | HEAD | « Réglages en pleine page » (changelog 5.11.8.14) ; « une colonne au lieu de deux colonnes trop étroites » (5.11.11.19) |
| Largeur d'écriture | narrow `(100% - 40rem)/2`, normal `55rem`, full `gutter` | app.css `:root[data-editor-width]` | notes-v5@1c1fb148 2026-11-11 | HEAD | |

## 2. Points de rupture (blocs @media / @supports)

| bloc | contenu | première apparition | dernier état |
|---|---|---|---|
| @media (hover: hover) and (pointer: fine) | app.css (42 règles : .card-actions .ctl::after {content}; .card-actions button {--h}) | notes-v5@b1f17318 2026-10-21 | HEAD |
| @media (max-height: 30em) | tokens.css (1 règles : :root {--text-title}) | notes-v5@b1f17318 2026-10-21 | HEAD |
| @media (max-height: 30em) | looks.css (1 règles : :root[data-look='paper'] {--text-title}) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| @media (max-width: 22em) | app.css (7 règles : .capture-actions .ctl:not(:first-ch {flex-direction}; .capture-actions .ctl:not(:first-ch {font-size}) | notes-v5@f1b51602 2026-11-08 | HEAD |
| @media (max-width: 24em) | app.css (3 règles : .calendar-grid {margin-inline}; .calendar-grid {width}) | notes-v5@32e9bd9e 2026-11-08 | HEAD |
| @media (max-width: 25em) | app.css (6 règles : .editor-head .ctl {flex}; .editor-head .ctl {min-width}) | notes-v5@32e9bd9e 2026-11-08 | HEAD |
| @media (max-width: 40em) | app.css (3 règles : :root[data-look='minimal'] {--list-icon-size}; :root[data-look='minimal'] {--list-padding}) | notes-v5@bb3fa23d 2026-11-10 | HEAD |
| @media (max-width: 47.99em) | app.css (2 règles : .main-dock {left}; .main-dock {right}) | notes-v5@f1b51602 2026-11-08 | HEAD |
| @media (max-width: 47.99em), (max-height: 29.99em) | app.css (9 règles : .layer[data-mode='create'] {border-radius}; .layer[data-mode='create'] {bottom}) | notes-v5@f1b51602 2026-11-08 | HEAD |
| @media (max-width: 63.99em) | app.css (4 règles : .capture-actions .ctl:not(:first-ch {flex-direction}; .capture-actions .ctl:not(:first-ch {font-size}) | notes-v5@d9bdac08 2026-11-11 | HEAD |
| @media (min-width: 40em) | app.css (2 règles : .first-actions {grid-template-columns}; .starters {grid-template-columns}) | notes-v5@b1f17318 2026-10-21 | HEAD |
| @media (min-width: 40em) and (min-height: 30em) | app.css (99 règles : .card {gap}; .card {padding}) | notes-v5@b1f17318 2026-10-21 | HEAD |
| @media (min-width: 40em) and (min-height: 30em) @media (max-width: 63.99em) | app.css (1 règles : .settings-layout {grid-template-columns}) | notes-v5@2bd9ec0b 2026-11-11 | HEAD |
| @media (min-width: 48em) and (min-height: 30em) | app.css (46 règles : #nav-island .seg-thumb {display}; .destination {padding-bottom}) | notes-v5@f1b51602 2026-11-08 | HEAD |
| @media (min-width: 64em) | app.css (41 règles : .editor {border-inline-start}; .editor {left}) | notes-v5@b1f17318 2026-10-21 | HEAD |
| @media (min-width: 64em) and (min-height: 30em) | app.css (6 règles : body.note-wide.is-editing .editor {left}; body.note-wide.is-editing .page {visibility}) | notes-v5@1c1fb148 2026-11-11 | HEAD |
| @media print | app.css (9 règles : #print-area article {break-inside}; #print-area article {margin-bottom}) | notes-v5@b1f17318 2026-10-21 | HEAD |

Points de rupture dans le code TypeScript : `src/notes/config.ts` CONFIG `splitMedia: '(min-width:64em)'` (liste + note côte à côte) et `wideMedia: '(min-width:40em) and (min-height:30em)'` (« same as the tablet rules in app.css »), présents depuis notes-v5@b1f17318 2026-10-21. Largeurs de contrôle vérifiées par docs/shots/verify.mjs : 390 / 768 / 1280 (notes-v5@190af4b5), puis 320 et 820 (notes-v5@f1b51602) ; « Bibliothèque fits, 360–820px ».

## 3. Géométrie (jetons)

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| --dock-bottom | calc(var(--safe-bottom) + var(--space-2) + var(--dock-lift) + var(--kb)) | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --dock-bottom | calc(var(--safe-bottom) + var(--space-2) + var(--kb)) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ calc(var(--safe-bottom) + var(--space-2) + var(--dock-lift) ) |  |
| --dock-btn | 48px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --dock-inset-l | max(var(--edge-l), (100vw - var(--dock-max)) / 2) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --dock-inset-r | max(var(--edge-r), (100vw - var(--dock-max)) / 2) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --dock-lift | 4px | looks.css :root, :root[data-look='glass'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --dock-lift | 4px | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --dock-lift | 0px | looks.css :root[data-look='paper'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --dock-lift | 0px | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --dock-max | calc(var(--layout-max) - 2 * var(--gutter) + 2 * var(--edge)) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --dock-space | calc(var(--dock-bottom) + var(--fab) + var(--space-4)) | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --dock-space | calc(var(--dock-bottom) + var(--fab) + var(--space-6)) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ calc(var(--dock-bottom) + var(--fab) + var(--space-4))) |  |
| --drawer-w | min(26rem, 45vw) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --edge | var(--space-3) | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --edge | 12px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--space-3)) |  |
| --edge-l | calc(var(--edge) + var(--safe-l)) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --edge-r | calc(var(--edge) + var(--safe-r)) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --gutter | var(--space-4) | looks.css :root[data-look='paper'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --gutter | 20px | looks.css :root[data-look='paper'] | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ var(--space-4)) |  |
| --gutter | 16px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --kb | 0px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --layer-bottom | calc(var(--dock-bottom) + var(--fab) + var(--space-3)) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --layer-w | 380px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --layout-max | 1180px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --nav-rail | 0px | tokens.css :root | notes-v5@f1b51602 2026-11-08 | HEAD |  |
| --safe-bottom | max(env(safe-area-inset-bottom, 0px), var(--space-2)) | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --safe-bottom | max(env(safe-area-inset-bottom, 0px), 8px) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ max(env(safe-area-inset-bottom, 0px), var(--space-2))) |  |
| --safe-l | env(safe-area-inset-left, 0px) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --safe-r | env(safe-area-inset-right, 0px) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --safe-top | env(safe-area-inset-top, 0px) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --split-list | clamp(22rem, 34vw, 30rem) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --workspace-gap | clamp(var(--space-3), 2vw, var(--space-5)) | tokens.css :root | notes-v5@1c1fb148 2026-11-11 | HEAD |  |

## 4. Grilles et flex structurants (app.css)

### grid-template-columns, columns, grid-template-rows

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| grid-auto-flow | column | app.css .segmented; .sel-count | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| grid-auto-flow | row dense | app.css @media (min-width: 40em) and (min-height: 30em) .recap-row | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| grid-column | 1 | app.css .note-list.is-compact .card-title | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| grid-column | 1 / -1 | app.css .capture-actions .ctl:first-child; .lib-tile > span:last-child; .metadata-fields label:last-child (+4) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| grid-column | 1 / 3 | app.css .note-list.is-compact .card-body | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| grid-column | 2 | app.css .note-list.is-compact .card-meta | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| grid-column | 3 | app.css .lib-tiles.is-small .lib-tile b; .note-list.is-compact .card-more | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| grid-column | auto | app.css .lib-tiles.is-small .lib-tile > span:last-child; @media (min-width: 64em) and (min-height: 30em) body:not(.is-editing)  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| grid-template-columns | 1fr | app.css @media (min-width: 40em) and (min-height: 30em) [data-drawer] .cols; @media (min-width: 64em) body.is-editing :is(.note-list.cards, .note-l | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| grid-template-columns | 1fr 1fr | app.css @media (min-width: 40em) and (min-height: 30em) .cols | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| grid-template-columns | 1fr auto | app.css .lib-tile | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| grid-template-columns | auto 1fr | app.css .card-pdf | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| grid-template-columns | auto 1fr auto | app.css .lib-tiles.is-small .lib-tile; .player | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| grid-template-columns | minmax(0, 1fr) auto auto | app.css .note-list.is-compact .card | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| grid-template-columns | repeat(2, 1fr) | app.css .first-actions; .starters; @media (min-width: 64em) body.is-editing .recap-row | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| grid-template-columns | repeat(3, 1fr) | app.css @media (min-width: 40em) .starters | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| grid-template-columns | repeat(4, 1fr) | app.css @media (min-width: 40em) .first-actions; @media (min-width: 40em) and (min-height: 30em) .recap-row | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| grid-template-columns | repeat(auto-fill, minmax(104px, 1fr)) | app.css .lib-tiles | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| grid-template-columns | repeat(auto-fill, minmax(150px, 1fr)) | app.css .atts.is-multi; .lib-folders | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| grid-template-columns | repeat(auto-fill, minmax(15rem, 1fr)) | app.css @media (min-width: 40em) and (min-height: 30em) .note-list.cards | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| grid-template-columns | repeat(auto-fill, minmax(22rem, 1fr)) | app.css @media (min-width: 40em) and (min-height: 30em) .note-list:not(.cards) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| grid-template-columns | repeat(auto-fill, minmax(84px, 1fr)) | app.css .photos | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| grid-template-columns | repeat(auto-fill, minmax(min(17.5rem, 100%), 1fr)) | app.css .note-list.cards | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| grid-template-columns | repeat(7, minmax(0, 1fr)) | app.css .calendar-grid | notes-v5@32e9bd9e 2026-11-08 | HEAD |  |
| grid-template-columns | minmax(0, 1fr) | app.css .today-grid; @media (min-width: 40em) and (min-height: 30em) @media (max-width: 63. | notes-v5@2bd9ec0b 2026-11-11 | HEAD |  |
| grid-template-columns | 2fr 1fr 1fr 1fr | app.css @media (min-width: 64em) and (min-height: 30em) body:not(.is-editing)  | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| grid-template-columns | minmax(0, 1.15fr) minmax(0, 1fr) | app.css @media (min-width: 64em) and (min-height: 30em) body:not(.is-editing)  | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| grid-template-columns | repeat(2, minmax(0, 1fr)) | app.css .metadata-fields | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| grid-template-columns | repeat(3, minmax(0, 1fr)) | app.css .capture-actions | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| grid-template-rows | auto 1fr | app.css .lib-tile | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| grid-template-rows | none | app.css .lib-tiles.is-small .lib-tile | notes-v5@b1f17318 2026-10-21 | HEAD |  |

### position et inset des barres fixes (.dock, .main-dock, .editor, .editor-dock, .sheet, .layer, .toast)

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| bottom | 0 | app.css .sheet; @media (max-width: 47.99em), (max-height: 29.99em) .layer[data-mode='c | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| bottom | calc(var(--dock-bottom) + var(--fab) + var(--space-3)) | app.css .rec-bar | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| bottom | var(--dock-bottom) | app.css .dock; .editor-dock | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| bottom | var(--layer-bottom) | app.css .layer, .sheet | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| bottom | calc(100% + var(--space-3)) | app.css .main-dock > .fab | notes-v5@32e9bd9e 2026-11-08 | SUPPRIMÉ notes-v5@f1b51602 2026-11-08 |  |
| bottom | calc(var(--dock-bottom) + 64px) | app.css .editor-dock | notes-v5@32e9bd9e 2026-11-08 | REMPLACÉ notes-v5@f1b51602 2026-11-08 (→ var(--dock-bottom)) |  |
| bottom | calc(100% + var(--space-3)) | app.css .main-dock > .fab, body[data-hand='left'] .main-dock > .fab | notes-v5@f1b51602 2026-11-08 | HEAD |  |
| inset | 0 | app.css .editor; .sheet:is([data-mode='study'], [data-mode='map']) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| inset | 0 0 var(--layer-bottom) | app.css @media (min-width: 40em) and (min-height: 30em) .sheet | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| inset | auto 0 0 | app.css .editor::after | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| inset | auto | app.css .editor .editor-dock | notes-v5@f1b51602 2026-11-08 | HEAD |  |
| inset | calc(var(--safe-top) + var(--space-2)) var(--edge-r) calc(var(--safe-bottom) + var(--space-2)) auto | app.css @media (min-width: 48em) and (min-height: 30em) .layer[data-inspector] | notes-v5@f1b51602 2026-11-08 | HEAD |  |
| inset | calc(var(--safe-top) + var(--space-4)) auto calc(var(--safe-bottom) + var(--space-4)) var(--edge-l) | app.css @media (min-width: 48em) and (min-height: 30em) .main-dock, body.is-ed | notes-v5@f1b51602 2026-11-08 | HEAD |  |
| inset | auto auto var(--space-3) 50% | app.css .layer[data-mode='sketch'] | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| left | 0 | app.css .sheet; @media (max-width: 47.99em), (max-height: 29.99em) .layer[data-mode='c; @media (min-width: 40em) and (min-height: 30em) .layer:not([data-ancho | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| left | 50% | app.css .main-dock > .fab, body[data-hand='left'] .main-dock > .fab; .rec-bar; .toast | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| left | auto | app.css @media (min-width: 40em) and (min-height: 30em) .rec-bar; @media (min-width: 64em) .editor-dock | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| left | var(--edge-l) | app.css .dock; .editor-dock; .layer, .sheet | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| left | var(--split-list) | app.css @media (min-width: 64em) .editor | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| left | var(--nav-rail) | app.css @media (min-width: 48em) and (min-height: 30em) .editor | notes-v5@f1b51602 2026-11-08 | HEAD |  |
| left | var(--space-1) | app.css @media (max-width: 22em) .main-dock | notes-v5@f1b51602 2026-11-08 | HEAD |  |
| left | var(--space-2) | app.css @media (max-width: 47.99em) .main-dock | notes-v5@f1b51602 2026-11-08 | HEAD |  |
| max-height | calc(100dvh - var(--safe-top) - var(--layer-bottom) - var(--space-6)) | app.css .layer, .sheet; @media (min-width: 40em) and (min-height: 30em) .sheet | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ calc(100dvh - var(--safe-top) - var(--layer-bottom) |  |
| max-height | calc(100dvh - var(--safe-top) - var(--space-6)) | app.css .sheet | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ calc(100dvh - var(--safe-top) - var(--space-4))) |  |
| max-height | none | app.css .sheet:is([data-mode='study'], [data-mode='map']); .sheet[data-mode='map'] .map-canvas | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| max-height | calc(100dvh - var(--safe-top) - var(--layer-bottom) - var(--space-4)) | app.css .layer, .sheet; @media (min-width: 40em) and (min-height: 30em) .sheet | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| max-height | calc(100dvh - var(--safe-top) - var(--space-4)) | app.css .sheet; @media (max-width: 47.99em), (max-height: 29.99em) .layer[data-mode='c | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| max-height | calc(100dvh - var(--space-4)) | app.css .layer[data-mode='sketch'] | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| max-width | 100% | app.css .main-dock .tab-btn span | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| max-width | 40rem | app.css .sheet[data-mode='study'] :is(.sheet-body, .sheet-foot) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| max-width | 760px | app.css .editor-dock | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| max-width | calc(100vw - var(--edge-l) - var(--edge-r)) | app.css .toast | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| max-width | var(--dock-max) | app.css .dock | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| max-width | var(--layout-max) | app.css .page | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| max-width | 540px | app.css .main-dock | notes-v5@32e9bd9e 2026-11-08 | HEAD |  |
| max-width | none | app.css .editor .editor-dock; @media (min-width: 48em) and (min-height: 30em) .main-dock, body.is-ed | notes-v5@f1b51602 2026-11-08 | HEAD |  |
| position | absolute | app.css .editor-dock; .editor::after; .main-dock > .fab (+1) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| position | fixed | app.css .dock; .editor; .layer, .sheet (+2) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| position | relative | app.css .editor .editor-dock | notes-v5@f1b51602 2026-11-08 | HEAD |  |
| position | static | app.css @media (min-width: 48em) and (min-height: 30em) .main-dock > .fab, bod | notes-v5@f1b51602 2026-11-08 | HEAD |  |
| right | 0 | app.css .main-dock > .fab; .sheet; @media (max-width: 47.99em), (max-height: 29.99em) .layer[data-mode='c (+1) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| right | var(--dock-inset-r) | app.css @media (min-width: 40em) and (min-height: 30em) .rec-bar | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| right | var(--edge-r) | app.css .dock; .editor-dock; .layer, .sheet (+1) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| right | auto | app.css .main-dock > .fab, body[data-hand='left'] .main-dock > .fab | notes-v5@f1b51602 2026-11-08 | HEAD |  |
| right | var(--space-1) | app.css @media (max-width: 22em) .main-dock | notes-v5@f1b51602 2026-11-08 | HEAD |  |
| right | var(--space-2) | app.css @media (max-width: 47.99em) .main-dock | notes-v5@f1b51602 2026-11-08 | HEAD |  |
| top | calc(var(--safe-top) + var(--space-3)) | app.css .toast | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| translate | -50% 0 | app.css .layer[data-mode='sketch']; .main-dock > .fab, body[data-hand='left'] .main-dock > .fab; .rec-bar (+1) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| translate | none | app.css @media (min-width: 40em) and (min-height: 30em) .rec-bar; @media (min-width: 48em) and (min-height: 30em) .main-dock > .fab, bod | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| width | 100% | app.css .editor .editor-dock; .main-dock #nav-island; .sheet[data-mode='study'] :is(.sheet-body, .sheet-foot) (+1) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| width | auto | app.css .sheet:is([data-mode='study'], [data-mode='map']); @media (max-width: 47.99em), (max-height: 29.99em) .layer[data-mode='c | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| width | max-content | app.css .toast | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| width | min(600px, calc(100vw - 2 * var(--edge))) | app.css @media (min-width: 40em) and (min-height: 30em) .sheet | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| width | min(760px, 100% - var(--edge) - var(--edge-r)) | app.css @media (min-width: 64em) .editor-dock | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| width | var(--layer-w) | app.css @media (min-width: 40em) and (min-height: 30em) .layer:not([data-ancho | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| width | 152px | app.css @media (min-width: 48em) and (min-height: 30em) .main-dock, body.is-ed | notes-v5@f1b51602 2026-11-08 | HEAD |  |
| width | calc(100% - var(--nav-rail)) | app.css @media (min-width: 48em) and (min-height: 30em) .page | notes-v5@f1b51602 2026-11-08 | HEAD |  |
| width | min(380px, calc(100vw - var(--nav-rail) - var(--space-4))) | app.css @media (min-width: 48em) and (min-height: 30em) .layer[data-inspector] | notes-v5@f1b51602 2026-11-08 | HEAD |  |
| width | min(48rem, calc(100vw - 2 * var(--space-3))) | app.css .layer[data-mode='sketch'] | notes-v5@1c1fb148 2026-11-11 | HEAD |  |

## 5. Viewport et zones sûres

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| meta viewport | `width=device-width, initial-scale=1, viewport-fit=cover, interactive-widget=resizes-content` | src/routes/__root.tsx puis index.html | notes-v5@b1f17318 2026-10-21 | HEAD | déplacée avec le reste en notes-v5@19c7ee4b 2026-11-07 |
| zones sûres | `--safe-top/-l/-r: env(safe-area-inset-*)`, `--safe-bottom: max(env(safe-area-inset-bottom), 8px → var(--space-2))` | tokens.css | notes-v5@b1f17318 2026-10-21 | HEAD | |
| clavier | `--kb` (hauteur du clavier virtuel), ajoutée au bas du dock | tokens.css | notes-v5@b1f17318 2026-10-21 | HEAD | |
| fenêtre basse | `@media (max-height: 30em)` : `--text-title` réduit | tokens.css | notes-v5@b1f17318 2026-10-21 | HEAD | téléphone en paysage |
