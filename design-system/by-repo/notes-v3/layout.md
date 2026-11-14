Source : notes-v3, commits lus : 135 (9 lignée notes-site, 83 lignée source main, 43 builds notes-v3-site), plage : 2026-10-09 à 2026-10-31

# Mise en page

Points de rupture et requêtes de conteneur (chaque contexte `@media`/`@container`/`@supports` avec sa période d'existence), jetons de géométrie, déclarations de disposition dans les requêtes de largeur/hauteur, modèles de navigation.

## Points de rupture

| contexte (point de rupture, requête) | lignée | première apparition | dernier état | notes |
|---|---|---|---|---|
| `@media (hover:hover) and (pointer:fine)` | lignée notes-site | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | 3 déclarations |
| `@media (hover:hover)` | lignée notes-site | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | 13 déclarations |
| `@media (prefers-reduced-motion:reduce)` | lignée notes-site | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | 3 déclarations |
| `@media (prefers-reduced-transparency:reduce)` | lignée notes-site | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | 2 déclarations |
| `@media (width<=21.25em)` | lignée notes-site | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | 8 déclarations |
| `@media (width>=25em)` | lignée notes-site | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | 2 déclarations |
| `@media (width>=48em) @keyframes sheet-in` | lignée notes-site | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | 1 déclarations |
| `@media (width>=48em) @keyframes sheet-out` | lignée notes-site | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | 1 déclarations |
| `@media (width>=48em)` | lignée notes-site | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | 26 déclarations |
| `@media (width>=64em) and (hover:hover) and (pointer:fine)` | lignée notes-site | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | 3 déclarations |
| `@media (width>=64em)` | lignée notes-site | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | 16 déclarations |
| `@media print` | lignée notes-site | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | 15 déclarations |
| `@supports (backdrop-filter:blur(1px))` | lignée notes-site | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | 3 déclarations |
| `@media (min-width: 40em)` | lignée source | notes-v3@4da62555 2026-10-18 | SUPPRIMÉ notes-v3@ba6e7b28 2026-10-19 | 0 déclarations |
| `@media (min-width: 40em)` | lignée source | notes-v3@35c0380c 2026-10-21 | HEAD | 2 déclarations |
| `@media (min-width: 64em)` | lignée source | notes-v3@4da62555 2026-10-18 | HEAD | 42 déclarations |
| `@media print` | lignée source | notes-v3@4da62555 2026-10-18 | HEAD | 9 déclarations |
| `@media (prefers-reduced-motion: reduce)` | lignée source | notes-v3@4da62555 2026-10-18 | HEAD | 4 déclarations |
| `@media (prefers-reduced-transparency: reduce)` | lignée source | notes-v3@4da62555 2026-10-18 | HEAD | 13 déclarations |
| `@media (min-width: 90em)` | lignée source | notes-v3@4a4da608 2026-10-18 | SUPPRIMÉ notes-v3@ba6e7b28 2026-10-19 | 0 déclarations |
| `@media (min-width: 90em)` | lignée source | notes-v3@ba6e7b28 2026-10-19 | SUPPRIMÉ notes-v3@35c0380c 2026-10-21 | 0 déclarations |
| `@container list (min-width: 36em)` | lignée source | notes-v3@ba6e7b28 2026-10-19 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | 0 déclarations |
| `@media (forced-colors: active)` | lignée source | notes-v3@ba6e7b28 2026-10-19 | HEAD | 6 déclarations |
| `@media (max-height: 30em)` | lignée source | notes-v3@ba6e7b28 2026-10-19 | HEAD | 1 déclarations |
| `@media (min-width: 40em) and (min-height: 30em)` | lignée source | notes-v3@ba6e7b28 2026-10-19 | HEAD | 93 déclarations |
| `@media (hover: hover) and (pointer: fine)` | lignée source | notes-v3@d6af8790 2026-10-19 | HEAD | 36 déclarations |
| `@media (prefers-contrast: more)` | lignée source | notes-v3@35c0380c 2026-10-21 | HEAD | 16 déclarations |
| `@media (max-width: 24em)` | lignée source | notes-v3@78e2a8a6 2026-10-29 | SUPPRIMÉ notes-v3@e30d2cdc 2026-10-29 | 0 déclarations |
| `@media (max-width: 26em)` | lignée source | notes-v3@e30d2cdc 2026-10-29 | HEAD | 9 déclarations |

## Modèles de navigation et dispositions par période

| période | modèle (lu dans le code) | réf | état |
|---|---|---|---|
| bundle v2.0.0 à 26.10.9.5 | barre d'outils en haut (`.island.toolbar`), dock bas avec îlot de création (`.create-island`) et champ de recherche `#main-dock [role=search]`, popovers/menus (`.menu`, `.popover`), colonnes 2 / 3 (≥48em) / 4 (≥64em, hover fin), `--layout-max:1280px` | notes-v3@b6647a04 2026-10-09 | remplacé notes-v3@ea104c22 2026-10-15 |
| bundle 26.10.15.1 | barre de navigation `.nav-bar` en bas : 4 `.nav-tab` (Notes, Recherche, Bibliothèque, Réglages, `--size-nav-tab:52px`) + `.fab` 60px, menu Créer en tuiles, recherche en page (`.app-header.is-search`) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site |
| source 26.10.18.1 | dock bas « thumb-first » : îlot de navigation (Bibliothèque, Réglages) + groupe pouce (îlot recherche/micro + FAB 58px), inversé pour gaucher (`body[data-hand=left]`), feuilles du bas ; ≥40em calques latéraux 380px ; ≥64em liste et éditeur côte à côte (50 %) | notes-v3@4da62555 2026-10-18 | remplacé notes-v3@4a4da608 2026-10-18 |
| source 26.10.18.2 | Bibliothèque en page pleine (tuiles, dossiers), récap en bande défilante, tablette : menus ancrés au bouton, feuilles centrées 600px | notes-v3@801d11fb 2026-10-18 | HEAD (ajusté) |
| source 26.10.18.3 | une seule barre : Notes · Bibliothèque · Recherche · Réglages, + du côté du pouce (`is-compact` en sélection) | notes-v3@4a4da608 2026-10-18 | REMPLACÉ notes-v3@2c7478e4 2026-10-31 |
| source 26.10.19.1 | tablette : volets en coins, panneaux latéraux `--drawer-w:min(26rem,45vw)`, plein écran, `max-height:30em` pour téléphone horizontal, `--safe-l/--safe-r` | notes-v3@ba6e7b28 2026-10-19 | HEAD |
| source 26.10.19.2 | `@container list` remplacé par des requêtes média viewport ; Bibliothèque est une page, la barre ne disparaît plus | notes-v3@d6af8790 2026-10-19 | HEAD |
| source 26.10.21.1 | téléphone : une colonne pleine largeur ; tablette : grille fluide 15rem ; liste à côté d'une note `clamp(22rem,34vw,30rem)` ; feuilles du bas avec poignée, messages en haut | notes-v3@35c0380c 2026-10-21 | HEAD |
| source 26.10.29.5 | barre 52px, boutons 44px, libellés 12px ; `@media (max-width:26em)` resserre la barre (360px) | notes-v3@fe7ee2da 2026-10-29 | HEAD |
| source 26.10.31.4 | barre : Notes · Tâches · Bibliothèque · Réglages ; recherche, filtre/tri, apparence dans l'îlot du haut (`HeaderTools`) | notes-v3@2c7478e4 2026-10-31 | HEAD |
| source 26.10.31.5 | Réglages en page : liste groupée sur téléphone, vue scindée (liste + section) dès 64em, route `#/reglages/<section>` | notes-v3@47c570df 2026-10-31 | HEAD |

Zones sûres : `--safe-top/--safe-bottom:max(env(safe-area-inset-bottom),8px)` et `--safe-l/--safe-r` (ba6e7b2) ; `viewport-fit=cover` dans index.html depuis le bundle ; `--kb` (clavier) n'est appliqué qu'en saisie (35c0380).


## Jetons et déclarations de géométrie : bundle notes-site

63 valeurs.

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| .sel-bar .action-btn:not(#sel-close) span height | `1px` | index.html (bundle) · @media (width<=21.25em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .sel-bar .action-btn:not(#sel-close) span position | `absolute` | index.html (bundle) · @media (width<=21.25em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .sel-bar .action-btn:not(#sel-close) span width | `1px` | index.html (bundle) · @media (width<=21.25em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-dock-btn | `var(--size-tap)` | index.html (bundle) · @media (width<=21.25em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --space-edge | `var(--space-1)` | index.html (bundle) · @media (width<=21.25em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .menu-cols display | `grid` | index.html (bundle) · @media (width>=48em) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .menu-cols grid-template-columns | `1fr 1fr` | index.html (bundle) · @media (width>=48em) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .menu[data-mode=settings] width | `min(var(--layout-settings-w),calc(100vw - 2 * var(--space-edge)))` | index.html (bundle) · @media (width>=48em) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .popover[data-mode=drawer] display | `flex` | index.html (bundle) · @media (width>=48em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .popover[data-mode=drawer] flex-direction | `column` | index.html (bundle) · @media (width>=48em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .popover[data-mode=drawer] top | `calc(env(safe-area-inset-top,0px) + var(--space-screen))` | index.html (bundle) · @media (width>=48em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .sheet[data-mode=map] width | `min(var(--layout-map-w),100vw)` | index.html (bundle) · @media (width>=48em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .sheet left | `auto` | index.html (bundle) · @media (width>=48em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .sheet width | `min(var(--layout-sheet-w),100vw)` | index.html (bundle) · @media (width>=48em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --layout-columns | `3` | index.html (bundle) · @media (width>=48em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --space-screen | `var(--space-6)` | index.html (bundle) · @media (width>=48em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .dock justify-content | `center` | index.html (bundle) · @media (width>=64em) and (hover:hover) and (pointer:fine) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --layout-columns | `4` | index.html (bundle) · @media (width>=64em) and (hover:hover) and (pointer:fine) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .editor .format-bar justify-content | `center` | index.html (bundle) · @media (width>=64em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .editor .format-bar left | `var(--layout-split-list)` | index.html (bundle) · @media (width>=64em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .editor-grabber,.split-hidden display | `none` | index.html (bundle) · @media (width>=64em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .editor left | `var(--layout-split-list)` | index.html (bundle) · @media (width>=64em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .is-editing .dock right | `auto` | index.html (bundle) · @media (width>=64em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .is-editing .dock width | `var(--layout-split-list)` | index.html (bundle) · @media (width>=64em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .is-editing .header-bar,.is-editing .info-bar,.is-editing .note-list max-width | `var(--layout-split-list)` | index.html (bundle) · @media (width>=64em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .is-editing --edge-inset | `var(--space-screen)` | index.html (bundle) · @media (width>=64em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .is-editing --layout-columns | `1` | index.html (bundle) · @media (width>=64em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .split-only display | `grid` | index.html (bundle) · @media (width>=64em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root.has-float-bar --float-offset | `var(--size-float-bar)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --edge-inset | `max(var(--space-screen), calc((100vw - var(--layout-max)) / 2 + var(--space-screen)))` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --float-offset | `0px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --kb | `0px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --layout-columns | `2` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --layout-editor-max | `680px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --layout-float-max | `616px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --layout-list-max | `720px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --layout-map-w | `64rem` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --layout-max | `1280px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --layout-popover-w | `340px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --layout-settings-w | `620px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| :root --layout-sheet-w | `36rem` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --layout-split-list | `max(33.333vw,22rem)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --layout-toast-max | `608px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --menu-top | `calc(env(safe-area-inset-top,0px) + var(--space-3))` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --offset-checkbox | `.2em` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --offset-icon-baseline | `-.125em` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --search-field-w | `min(var(--layout-float-max), calc(min(100vw, var(--layout-max)) - 2 * var(--space-screen) - 2 * var(--size-dock-btn) - 4 * var(--space-island) - 2px))` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| :root --size-dock-btn | `var(--size-tap-md)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-dock-clearance | `84px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-float-bar | `64px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-list-bottom | `184px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-masonry-row | `1px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-popover-max-h | `calc(100dvh - var(--size-dock-clearance) - var(--space-6) - env(safe-area-inset-top,0px) - env(safe-area-inset-bottom,0px))` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-sel-clearance | `92px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-sel-popover-max-h | `calc(100dvh - var(--size-sel-clearance) - var(--space-6) - env(safe-area-inset-top,0px) - env(safe-area-inset-bottom,0px))` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --space-edge | `var(--space-3)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --space-screen | `var(--space-4)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .sheet.welcome height | `min(42rem,calc(100dvh - 2 * var(--space-6)))` | index.html (bundle) · @media (width>=48em) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .sheet.welcome inset | `50% auto auto 50%` | index.html (bundle) · @media (width>=48em) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .sheet.welcome width | `min(28rem,calc(100vw - 2 * var(--space-6)))` | index.html (bundle) · @media (width>=48em) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .format-strip justify-content | `center` | index.html (bundle) · @media (width>=64em) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| :root --popover-right | `var(--space-edge)` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| :root --popover-top | `var(--menu-top)` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |

## Jetons et déclarations de géométrie : source

145 valeurs.

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| .cols grid-template-columns | `1fr 1fr` | app.css · @media (min-width: 40em) | notes-v3@4da62555 2026-10-18 | SUPPRIMÉ notes-v3@ba6e7b28 2026-10-19 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .layer, .sheet left | `auto` | app.css · @media (min-width: 40em) | notes-v3@4da62555 2026-10-18 | SUPPRIMÉ notes-v3@801d11fb 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .layer, .sheet width | `var(--layer-w)` | app.css · @media (min-width: 40em) | notes-v3@4da62555 2026-10-18 | SUPPRIMÉ notes-v3@801d11fb 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .sheet width | `min(560px, calc(100vw - 2 * var(--edge)))` | app.css · @media (min-width: 40em) | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@801d11fb 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .sheet width | `min(600px, calc(100vw - 2 * var(--edge)))` | app.css · @media (min-width: 40em) | notes-v3@801d11fb 2026-10-18 | SUPPRIMÉ notes-v3@ba6e7b28 2026-10-19 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| body[data-hand='left'] :is(.layer, .sheet) left | `var(--edge)` | app.css · @media (min-width: 40em) | notes-v3@4da62555 2026-10-18 | SUPPRIMÉ notes-v3@801d11fb 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| body[data-hand='left'] :is(.layer, .sheet) right | `auto` | app.css · @media (min-width: 40em) | notes-v3@4da62555 2026-10-18 | SUPPRIMÉ notes-v3@801d11fb 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .editor left | `50%` | app.css · @media (min-width: 64em) | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@ba6e7b28 2026-10-19 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .editor left | `var(--split-list)` | app.css · @media (min-width: 64em) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .split-hidden display | `none !important` | app.css · @media (min-width: 64em) | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .split-only display | `grid !important` | app.css · @media (min-width: 64em) | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| body.is-editing .dock right | `calc(50% + var(--edge))` | app.css · @media (min-width: 64em) | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@ba6e7b28 2026-10-19 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| body.is-editing .dock right | `auto` | app.css · @media (min-width: 64em) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| body.is-editing .page margin-inline-end | `50%` | app.css · @media (min-width: 64em) | notes-v3@4da62555 2026-10-18 | SUPPRIMÉ notes-v3@ba6e7b28 2026-10-19 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| body.is-editing .page margin-inline-start | `0` | app.css · @media (min-width: 64em) | notes-v3@4da62555 2026-10-18 | SUPPRIMÉ notes-v3@ba6e7b28 2026-10-19 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --dock-bottom | `calc(var(--safe-bottom) + var(--space-2) + var(--kb))` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --dock-space | `calc(var(--fab) + var(--safe-bottom) + var(--space-8))` | tokens.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --dock-space | `calc(var(--dock-bottom) + var(--fab) + var(--space-6))` | tokens.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| :root --edge | `12px` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --gutter | `16px` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --kb | `0px` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --layer-w | `380px` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --layout-max | `1180px` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --safe-bottom | `max(env(safe-area-inset-bottom, 0px), 8px)` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --safe-top | `env(safe-area-inset-top, 0px)` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .layer:not([data-anchored]):not(.lib-page) left | `0` | app.css · @media (min-width: 40em) | notes-v3@801d11fb 2026-10-18 | SUPPRIMÉ notes-v3@ba6e7b28 2026-10-19 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .layer:not([data-anchored]):not(.lib-page) margin-inline | `auto` | app.css · @media (min-width: 40em) | notes-v3@801d11fb 2026-10-18 | SUPPRIMÉ notes-v3@ba6e7b28 2026-10-19 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .layer:not([data-anchored]):not(.lib-page) right | `0` | app.css · @media (min-width: 40em) | notes-v3@801d11fb 2026-10-18 | SUPPRIMÉ notes-v3@ba6e7b28 2026-10-19 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .layer:not([data-anchored]):not(.lib-page) width | `var(--layer-w)` | app.css · @media (min-width: 40em) | notes-v3@801d11fb 2026-10-18 | SUPPRIMÉ notes-v3@ba6e7b28 2026-10-19 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .note-list.cards grid-template-columns | `repeat(auto-fill, minmax(250px, 1fr))` | app.css · @media (min-width: 40em) | notes-v3@801d11fb 2026-10-18 | REMPLACÉ notes-v3@4a4da608 2026-10-18 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .note-list.cards grid-template-columns | `repeat(3, 1fr)` | app.css · @media (min-width: 40em) | notes-v3@4a4da608 2026-10-18 | SUPPRIMÉ notes-v3@ba6e7b28 2026-10-19 | Notes 26.10.18.3 : barre unique + au pouce, créer en 3 choi… |
| .note-list:not(.cards) display | `grid` | app.css · @media (min-width: 40em) | notes-v3@801d11fb 2026-10-18 | SUPPRIMÉ notes-v3@ba6e7b28 2026-10-19 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .note-list:not(.cards) grid-template-columns | `1fr 1fr` | app.css · @media (min-width: 40em) | notes-v3@801d11fb 2026-10-18 | SUPPRIMÉ notes-v3@ba6e7b28 2026-10-19 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .sel-bar .action-btn > span display | `block` | app.css · @media (min-width: 40em) | notes-v3@801d11fb 2026-10-18 | SUPPRIMÉ notes-v3@ba6e7b28 2026-10-19 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .sel-bar .action-btn width | `72px` | app.css · @media (min-width: 40em) | notes-v3@801d11fb 2026-10-18 | SUPPRIMÉ notes-v3@ba6e7b28 2026-10-19 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .sheet height | `fit-content` | app.css · @media (min-width: 40em) | notes-v3@801d11fb 2026-10-18 | SUPPRIMÉ notes-v3@ba6e7b28 2026-10-19 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .sheet inset | `0` | app.css · @media (min-width: 40em) | notes-v3@801d11fb 2026-10-18 | SUPPRIMÉ notes-v3@ba6e7b28 2026-10-19 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .widget width | `220px` | app.css · @media (min-width: 40em) | notes-v3@801d11fb 2026-10-18 | SUPPRIMÉ notes-v3@4a4da608 2026-10-18 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .main-dock justify-content | `flex-end` | app.css · @media (min-width: 40em) | notes-v3@4a4da608 2026-10-18 | SUPPRIMÉ notes-v3@ba6e7b28 2026-10-19 | Notes 26.10.18.3 : barre unique + au pouce, créer en 3 choi… |
| .recap-row grid-template-columns | `repeat(4, 1fr)` | app.css · @media (min-width: 40em) | notes-v3@4a4da608 2026-10-18 | SUPPRIMÉ notes-v3@ba6e7b28 2026-10-19 | Notes 26.10.18.3 : barre unique + au pouce, créer en 3 choi… |
| .note-list.cards grid-template-columns | `repeat(4, 1fr)` | app.css · @media (min-width: 90em) | notes-v3@4a4da608 2026-10-18 | SUPPRIMÉ notes-v3@ba6e7b28 2026-10-19 | Notes 26.10.18.3 : barre unique + au pouce, créer en 3 choi… |
| .note-list.cards grid-template-columns | `repeat(3, 1fr)` | app.css · @container list (min-width: 36em) | notes-v3@ba6e7b28 2026-10-19 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .note-list:not(.cards) display | `grid` | app.css · @container list (min-width: 36em) | notes-v3@ba6e7b28 2026-10-19 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .note-list:not(.cards) grid-template-columns | `1fr 1fr` | app.css · @container list (min-width: 36em) | notes-v3@ba6e7b28 2026-10-19 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .recap-row grid-template-columns | `repeat(4, 1fr)` | app.css · @container list (min-width: 36em) | notes-v3@ba6e7b28 2026-10-19 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .editor-dock flex-direction | `row` | app.css · @media (max-height: 30em) | notes-v3@ba6e7b28 2026-10-19 | SUPPRIMÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .editor.is-formatting::after height | `calc(var(--dock-bottom) + var(--fab) + var(--fade))` | app.css · @media (max-height: 30em) | notes-v3@ba6e7b28 2026-10-19 | SUPPRIMÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .cols grid-template-columns | `1fr 1fr` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .layer:not([data-anchored]):not(.lib-page) left | `0` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@ba6e7b28 2026-10-19 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .layer:not([data-anchored]):not(.lib-page) margin-inline | `auto` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@ba6e7b28 2026-10-19 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .layer:not([data-anchored]):not(.lib-page) right | `0` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@ba6e7b28 2026-10-19 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .layer:not([data-anchored]):not(.lib-page) width | `var(--layer-w)` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@ba6e7b28 2026-10-19 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .main-dock justify-content | `flex-end` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .search-dock > * width | `min(34rem, 100%)` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .sel-bar .action-btn > span display | `block` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .sel-bar .action-btn width | `72px` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .sheet height | `fit-content` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .sheet inset | `0` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@ba6e7b28 2026-10-19 | REMPLACÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .sheet inset | `0 0 var(--layer-bottom)` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| .sheet width | `min(600px, calc(100vw - 2 * var(--edge)))` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| :is(.layer, .sheet)[data-drawer][data-mode] height | `auto` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| :is(.layer, .sheet)[data-drawer][data-mode] inset | `calc(var(--safe-top) + var(--edge)) var(--edge-r) var(--dock-bottom) auto` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@ba6e7b28 2026-10-19 | REMPLACÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| :is(.layer, .sheet)[data-drawer][data-mode] inset | `calc(var(--safe-top) + var(--edge)) var(--edge-r) var(--layer-bottom) auto` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@d6af8790 2026-10-19 | REMPLACÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| :is(.layer, .sheet)[data-drawer][data-mode] inset | `calc(var(--safe-top) + var(--edge)) var(--edge-r) var(--dock-bottom) auto` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| :is(.layer, .sheet)[data-drawer][data-mode] width | `min(26rem, 45vw)` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@ba6e7b28 2026-10-19 | REMPLACÉ notes-v3@ef23bea4 2026-10-19 | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| :is(.layer, .sheet)[data-drawer][data-mode] width | `var(--drawer-w)` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| :is(.toast, .rec-bar) left | `auto` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@ba6e7b28 2026-10-19 | SUPPRIMÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| :is(.toast, .rec-bar) right | `var(--dock-inset-r)` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@ba6e7b28 2026-10-19 | SUPPRIMÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| body[data-hand='left'] :is(.layer, .sheet)[data-drawer][data-mode] --drawer-from | `-24px` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| body[data-hand='left'] :is(.toast, .rec-bar) left | `var(--dock-inset-l)` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@ba6e7b28 2026-10-19 | SUPPRIMÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| body[data-hand='left'] :is(.toast, .rec-bar) right | `auto` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@ba6e7b28 2026-10-19 | SUPPRIMÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .editor-dock left | `auto` | app.css · @media (min-width: 64em) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .editor-dock right | `var(--edge-r)` | app.css · @media (min-width: 64em) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .editor-dock width | `min(760px, 100% - var(--edge) - var(--edge-r))` | app.css · @media (min-width: 64em) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| body.is-editing .dock left | `var(--edge-l)` | app.css · @media (min-width: 64em) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| body.is-editing .dock max-width | `none` | app.css · @media (min-width: 64em) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| body.is-editing .dock width | `calc(var(--split-list) - var(--edge-l) - var(--edge))` | app.css · @media (min-width: 64em) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| body.is-editing .editor-dock :is(.thumb-row, .thumb-group) flex-direction | `row` | app.css · @media (min-width: 64em) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| body.is-editing .editor-dock :is(.thumb-row, .thumb-group) justify-content | `flex-end` | app.css · @media (min-width: 64em) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| body.is-editing .page max-width | `var(--split-list)` | app.css · @media (min-width: 64em) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| body.is-editing .search-dock > * width | `auto` | app.css · @media (min-width: 64em) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| body.is-editing :is(.dock.thumb-row, .dock .thumb-row) flex-direction | `row-reverse` | app.css · @media (min-width: 64em) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| body.is-editing :is(.toast, .rec-bar) left | `calc(var(--split-list) / 2)` | app.css · @media (min-width: 64em) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| body.is-editing :is(.toast, .rec-bar) right | `auto` | app.css · @media (min-width: 64em) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| body:not(.is-editing) .note-list.cards grid-template-columns | `repeat(4, 1fr)` | app.css · @media (min-width: 90em) | notes-v3@ba6e7b28 2026-10-19 | SUPPRIMÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| :root --dock-inset-l | `max(var(--edge-l), (100vw - var(--dock-max)) / 2)` | tokens.css | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| :root --dock-inset-r | `max(var(--edge-r), (100vw - var(--dock-max)) / 2)` | tokens.css | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| :root --dock-max | `calc(var(--layout-max) - 2 * var(--gutter) + 2 * var(--edge))` | tokens.css | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| :root --edge-l | `calc(var(--edge) + var(--safe-l))` | tokens.css | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| :root --edge-r | `calc(var(--edge) + var(--safe-r))` | tokens.css | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| :root --safe-l | `env(safe-area-inset-left, 0px)` | tokens.css | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| :root --safe-r | `env(safe-area-inset-right, 0px)` | tokens.css | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| :root --split-list | `max(36vw, 22rem)` | tokens.css | notes-v3@ba6e7b28 2026-10-19 | REMPLACÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| :root --split-list | `clamp(22rem, 34vw, 30rem)` | tokens.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .layer:not([data-anchored]) left | `0` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| .layer:not([data-anchored]) margin-inline | `auto` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| .layer:not([data-anchored]) right | `0` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| .layer:not([data-anchored]) width | `var(--layer-w)` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| .note-list.cards grid-template-columns | `repeat(3, 1fr)` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@d6af8790 2026-10-19 | REMPLACÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| .note-list.cards grid-template-columns | `repeat(auto-fill, minmax(15rem, 1fr))` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .note-list:not(.cards) display | `grid` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| .note-list:not(.cards) grid-template-columns | `1fr 1fr` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@d6af8790 2026-10-19 | REMPLACÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| .note-list:not(.cards) grid-template-columns | `repeat(auto-fill, minmax(22rem, 1fr))` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .recap-row grid-template-columns | `repeat(4, 1fr)` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| [data-drawer] .cols grid-template-columns | `1fr` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| body.is-editing .note-list:not(.cards) grid-template-columns | `1fr` | app.css · @media (min-width: 64em) | notes-v3@d6af8790 2026-10-19 | SUPPRIMÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| body.is-editing :is(.note-list.cards, .recap-row) grid-template-columns | `repeat(2, 1fr)` | app.css · @media (min-width: 64em) | notes-v3@d6af8790 2026-10-19 | SUPPRIMÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| .sheet.welcome --layer-bottom | `var(--dock-bottom)` | app.css | notes-v3@d6af8790 2026-10-19 | SUPPRIMÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| :root --layer-bottom | `calc(var(--dock-bottom) + var(--fab) + var(--space-3))` | tokens.css | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| body:has(.layer[data-inspector]) .editor-dock right | `calc(var(--drawer-w) + var(--edge-r) + var(--edge))` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| body[data-hand='left']:has(.layer[data-inspector]) .editor-dock right | `var(--edge-r)` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| body[data-hand='left']:has(.layer[data-inspector]) .editor padding-inline | `calc(var(--drawer-w) + var(--edge-l)) 0` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| :root --drawer-w | `min(26rem, 45vw)` | tokens.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| .rec-bar left | `auto` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .rec-bar right | `var(--dock-inset-r)` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .recap-row display | `grid` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .sheet-grabber display | `none` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .widget-detail display | `block` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .widget-label left | `14px` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .widget-label position | `absolute` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .widget-label top | `10px` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .widget-title display | `-webkit-box` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .widget justify-content | `flex-end` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .widget max-width | `none` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| body:has(.sheet[data-drawer]) .toast left | `calc((100vw - var(--drawer-w) - var(--edge-r)) / 2)` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| body:has(.sheet[data-drawer]:not([data-closing])) .dock right | `calc(var(--drawer-w) + var(--edge-r) + var(--edge))` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| body[data-hand='left'] .rec-bar left | `var(--dock-inset-l)` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| body[data-hand='left'] .rec-bar right | `auto` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| body[data-hand='left']:has(.sheet[data-drawer]) .toast left | `calc(50vw + (var(--drawer-w) + var(--edge-l)) / 2)` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| body[data-hand='left']:has(.sheet[data-drawer]:not([data-closing])) .dock left | `calc(var(--drawer-w) + var(--edge-l) + var(--edge))` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| body[data-hand='left']:has(.sheet[data-drawer]:not([data-closing])) .dock right | `var(--edge-r)` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .first-actions grid-template-columns | `repeat(4, 1fr)` | app.css · @media (min-width: 40em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .starters grid-template-columns | `repeat(3, 1fr)` | app.css · @media (min-width: 40em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| body.is-editing .recap-row grid-template-columns | `repeat(2, 1fr)` | app.css · @media (min-width: 64em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| body.is-editing :is(.note-list.cards, .note-list:not(.cards)) grid-template-columns | `1fr` | app.css · @media (min-width: 64em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| body.is-editing.note-wide .editor-dock left | `0` | app.css · @media (min-width: 64em) | notes-v3@c218aba2 2026-10-29 | HEAD | keep the note in context: list chip, tag peek on phones, fu… |
| body.is-editing.note-wide .editor-dock margin-inline | `auto` | app.css · @media (min-width: 64em) | notes-v3@c218aba2 2026-10-29 | HEAD | keep the note in context: list chip, tag peek on phones, fu… |
| body.is-editing.note-wide .editor-dock right | `0` | app.css · @media (min-width: 64em) | notes-v3@c218aba2 2026-10-29 | HEAD | keep the note in context: list chip, tag peek on phones, fu… |
| body.is-editing.note-wide .editor left | `0` | app.css · @media (min-width: 64em) | notes-v3@c218aba2 2026-10-29 | HEAD | keep the note in context: list chip, tag peek on phones, fu… |
| .main-dock #nav-island padding-inline | `2px` | app.css · @media (max-width: 26em) | notes-v3@e30d2cdc 2026-10-29 | HEAD | polish editing, tables, cards and the 52px dock |
| .main-dock --edge-l | `calc(10px + var(--safe-l))` | app.css · @media (max-width: 26em) | notes-v3@e30d2cdc 2026-10-29 | HEAD | polish editing, tables, cards and the 52px dock |
| .main-dock --edge-r | `calc(10px + var(--safe-r))` | app.css · @media (max-width: 26em) | notes-v3@e30d2cdc 2026-10-29 | HEAD | polish editing, tables, cards and the 52px dock |
| .settings-body grid-template-columns | `minmax(260px, 320px) minmax(0, 560px)` | app.css · @media (min-width: 64em) | notes-v3@47c570df 2026-10-31 | HEAD | Réglages as a page with a route per section (list on phone,… |
| .settings-list position | `sticky` | app.css · @media (min-width: 64em) | notes-v3@47c570df 2026-10-31 | HEAD | Réglages as a page with a route per section (list on phone,… |
| .settings-list top | `var(--space-4)` | app.css · @media (min-width: 64em) | notes-v3@47c570df 2026-10-31 | HEAD | Réglages as a page with a route per section (list on phone,… |
