Source : notes-v3, commits lus : 135 (9 lignée notes-site, 83 lignée source main, 43 builds notes-v3-site), plage : 2026-10-09 à 2026-10-31

# Ombres, verre, flou, opacités, z-index, durées, courbes, animations

Ombres (`box-shadow`, `--shadow-*`), verre (`--glass-*`, `backdrop-filter`), opacités, échelle de z-index, durées, courbes, transitions, `@keyframes` (chaque pas de keyframe est une ligne), préférences de mouvement.


## Lignée bundle notes-site (index.html mono-fichier, 2026-10-09 à 2026-10-15)

174 valeurs distinctes (une ligne par valeur et par période).

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| 0% opacity | `0` | index.html (bundle) ·  @keyframes popover-in | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| 0% transform | `translateY(var(--space-2)) scale(var(--scale-press))` | index.html (bundle) ·  @keyframes popover-in | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| to opacity | `0` | index.html (bundle) ·  @keyframes popover-out | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| to transform | `translateY(var(--space-2)) scale(var(--scale-press))` | index.html (bundle) ·  @keyframes popover-out | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| 0% transform | `translateY(100%)` | index.html (bundle) ·  @keyframes sheet-in | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| to transform | `translateY(100%)` | index.html (bundle) ·  @keyframes sheet-out | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .card:hover box-shadow | `var(--shadow-lg)` | index.html (bundle) · @media (hover:hover) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .popover[data-state],.sheet[data-state] animation | `none` | index.html (bundle) · @media (prefers-reduced-motion:reduce) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .sheet,.sheet.open,.editor,.editor.open,.popover,.popover.open,.create-island,.search-field,.card,.card.swipe-release,.card-check,.card-corner,.progress-fill,.icon-btn,.action-btn transition | `none` | index.html (bundle) · @media (prefers-reduced-motion:reduce) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .island,.popover,.menu,.float-bar,.search-chip:not([aria-pressed=true]) backdrop-filter | `none` | index.html (bundle) · @media (prefers-reduced-transparency:reduce) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| 0% transform | `translate(100%)` | index.html (bundle) · @media (width>=48em) @keyframes sheet-in | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| to transform | `translate(100%)` | index.html (bundle) · @media (width>=48em) @keyframes sheet-out | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .sheet box-shadow | `var(--shadow-lg)` | index.html (bundle) · @media (width>=48em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .card.is-open box-shadow | `var(--shadow-sm),0 0 0 var(--border-thick) var(--color-accent-ring)` | index.html (bundle) · @media (width>=64em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .island,.popover,.menu,.float-bar,.search-chip:not([aria-pressed=true]) backdrop-filter | `var(--blur-glass)` | index.html (bundle) · @supports (backdrop-filter:blur(1px)) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .action-btn transition | `background var(--duration-fast) var(--ease-standard)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .action-chip:active opacity | `var(--opacity-press)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .action-chip box-shadow | `var(--shadow-sm)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .app-header.is-scrolled backdrop-filter | `var(--blur-bar)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .app-header transition | `background var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .app-header z-index | `var(--z-dock)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .backdrop z-index | `var(--z-backdrop)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .blur filter | `var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) v…` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .card-check svg opacity | `0` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .card-check opacity | `0` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .card-check transition | `opacity var(--duration-base),background var(--duration-base),border-color var(--duration-base)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .card-corner transition | `opacity var(--duration-base)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .card-grip z-index | `1` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .card.dragging box-shadow | `var(--shadow-lg)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .card.dragging transition | `none` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .card.dragging z-index | `2` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .card.swipe-release transition | `transform var(--duration-base) var(--ease-out)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .card.swiping box-shadow | `var(--shadow-lg)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .card.swiping transition | `none` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .card.swiping z-index | `1` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .card box-shadow | `var(--shadow-sm)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .card transition | `transform var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),background var(--duration-fast) var(--ease-s…` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | REMPLACÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .card transition | `transform var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),background var(--duration-fast) var(--ease-s…` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .check-hit,.wave-play z-index | `1` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .create-island transition | `max-width var(--duration-slow) var(--ease-out),padding var(--duration-slow) var(--ease-out),opacity var(--duration-fast) var(--ease-standard)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .dock z-index | `var(--z-dock)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .editor.dragging transition | `none` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .editor.open transition | `transform var(--duration-slow) var(--ease-out)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .editor transition | `transform var(--duration-slow) var(--ease-out),visibility 0s var(--duration-slow)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .editor z-index | `var(--z-editor)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .filter filter | `var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) v…` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .flashcard box-shadow | `var(--shadow-sm)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .float-bar box-shadow | `var(--shadow-lg)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .float-bar z-index | `var(--z-float)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .format-bar z-index | `var(--z-format-bar)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .icon-btn.has-dot:after box-shadow | `var(--shadow-dot-cutout)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .icon-btn.primary box-shadow | `var(--shadow-accent)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .icon-btn:active,.action-btn:active,.info-pill:active,.row:active,.menu-option:active,.float-bar button:active,.inline-form button:active,.toast button:active,.att-remove:active opacity | `var(--opacity-press)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .icon-btn transition | `background var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-press)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .info-pill.danger box-shadow | `none` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .is-searching .create-island opacity | `0` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .is-searching .search-field opacity | `1` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .is-searching .search-field transition | `max-width var(--duration-slow) var(--ease-out),opacity var(--duration-fast) var(--ease-standard)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .is-selecting .card-check opacity | `1` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .is-selecting .card-corner opacity | `0` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .is-selecting .card.selected .card-check svg opacity | `1` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .is-selecting .card.selected box-shadow | `var(--shadow-ring-select)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .island .icon-btn:active opacity | `1` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .island.toolbar box-shadow | `var(--shadow-sm)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .island box-shadow | `var(--shadow-lg)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .media-count z-index | `1` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .menu-open .app-header z-index | `var(--z-popover)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .menu-option:disabled opacity | `1` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .player-play:active,.player-btn:active opacity | `var(--opacity-press)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .popover,.menu box-shadow | `var(--shadow-lg)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .popover,.menu z-index | `var(--z-popover)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .popover.open opacity | `1` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .popover.open transition | `opacity var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .popover[data-state=closed] animation | `popover-out var(--duration-fast) var(--ease-standard)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .popover[data-state=open] animation | `popover-in var(--duration-fast) var(--ease-standard)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .popover opacity | `0` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .popover transition | `opacity var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard),visibility 0s var(--duration-fast)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .progress-fill transition | `width var(--duration-base) var(--ease-standard)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .pull-hint box-shadow | `var(--shadow-lg)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .pull-hint opacity | `var(--pull-progress)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .pull-hint z-index | `var(--z-float)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .search-chip:active opacity | `var(--opacity-press)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .search-chips z-index | `var(--z-float)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .search-chip box-shadow | `var(--shadow-sm)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .search-field opacity | `0` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .search-field transition | `max-width var(--duration-slow) var(--ease-out),opacity var(--duration-fast) var(--ease-standard),visibility 0s var(--duration-slow)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .seek-thumb box-shadow | `var(--shadow-control)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .segmented button[aria-pressed=true] box-shadow | `var(--shadow-control)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .segmented button[data-state=on] box-shadow | `var(--shadow-control)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .sheet.open transition | `transform var(--duration-slow) var(--ease-out)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .sheet[data-state=closed] animation | `sheet-out var(--duration-slow) var(--ease-out)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .sheet[data-state=open] animation | `sheet-in var(--duration-slow) var(--ease-out)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .sheet transition | `transform var(--duration-slow) var(--ease-out),visibility 0s var(--duration-slow)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .sheet z-index | `var(--z-sheet)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .study-btn.primary box-shadow | `var(--shadow-accent)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .swatch svg opacity | `0` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .swatch[aria-pressed=true] svg opacity | `1` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .swipe-icon transition | `transform var(--duration-fast) var(--ease-standard)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .toast box-shadow | `var(--shadow-lg)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .toast z-index | `var(--z-toast)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .wave i transition | `opacity var(--duration-fast) var(--ease-standard)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .wave.is-playing i:not(.played) opacity | `var(--opacity-unplayed)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --blur-bar | `blur(12px) saturate(180%)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --blur-glass | `blur(24px) saturate(180%)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --duration-base | `.2s` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --duration-fast | `.15s` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --duration-slow | `.28s` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --ease-out | `cubic-bezier(.16,1,.3,1)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --ease-press | `cubic-bezier(.2,0,0,1)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --ease-standard | `ease` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --opacity-disabled | `.4` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --opacity-press | `.6` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --opacity-unplayed | `.3` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --pull-progress | `0` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| :root --scale-emphasis | `1.12` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --scale-press | `.98` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | REMPLACÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| :root --scale-press | `.97` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| :root --scale-press-btn | `.92` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --shadow-accent | `0 6px 16px light-dark(#f4c54261,#f4c54238)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --shadow-control | `0 1px 2px light-dark(#00000014,#00000059),0 0 0 .5px light-dark(#0000000a,#0000)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --shadow-dot-cutout | `0 0 0 var(--border-thick) var(--color-surface)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --shadow-edge | `inset 0 1px 0 light-dark(#ffffffb3,#ffffff14)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --shadow-lg | `var(--shadow-edge),0 1px 2px light-dark(#0000000f,#0009),0 8px 24px light-dark(#0000001a,#00000073),0 24px 48px light-dark(#0000000f,#00000040)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --shadow-ring-select | `0 0 0 1px var(--color-select)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --shadow-sm | `var(--shadow-edge),0 1px 2px light-dark(#0000000d,#00000080),0 4px 12px light-dark(#0000000a,#0000004d)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --z-backdrop | `20` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --z-dock | `5` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --z-editor | `10` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --z-float | `6` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --z-format-bar | `11` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --z-popover | `21` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --z-sheet | `22` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --z-toast | `25` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| button:disabled opacity | `var(--opacity-disabled)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| 0% opacity | `0` | index.html (bundle) ·  @keyframes welcome-in | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| 0% scale | `.96` | index.html (bundle) ·  @keyframes welcome-in | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| to opacity | `0` | index.html (bundle) ·  @keyframes welcome-out | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| to scale | `.96` | index.html (bundle) ·  @keyframes welcome-out | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .sheet.welcome[data-state=closed] animation | `welcome-out var(--duration-base) var(--ease-out)` | index.html (bundle) · @media (width>=48em) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .sheet.welcome[data-state=open] animation | `welcome-in var(--duration-base) var(--ease-out)` | index.html (bundle) · @media (width>=48em) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .sheet.welcome box-shadow | `var(--shadow-lg),0 0 0 100vmax var(--color-scrim)` | index.html (bundle) · @media (width>=48em) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .about-icon box-shadow | `var(--shadow-sm)` | index.html (bundle) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .art-card i.art-wave opacity | `1` | index.html (bundle) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .art-card i opacity | `.5` | index.html (bundle) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .art-plus box-shadow | `var(--shadow-accent)` | index.html (bundle) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .changelog summary:after transition | `rotate var(--duration-base) var(--ease-standard)` | index.html (bundle) | notes-v3@637a0265 2026-10-09 | SUPPRIMÉ notes-v3@b99f70fc 2026-10-09 | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .format-strip .island box-shadow | `var(--shadow-sm)` | index.html (bundle) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .tour-bubble box-shadow | `var(--shadow-lg)` | index.html (bundle) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .tour-spot box-shadow | `0 0 0 var(--focus-ring) var(--color-accent-ring),0 0 0 100vmax var(--color-scrim)` | index.html (bundle) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .tour-spot transition | `left var(--duration-slow) var(--ease-out),top var(--duration-slow) var(--ease-out),width var(--duration-slow) var(--ease-out),height var(--duration-s…` | index.html (bundle) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .tour z-index | `var(--z-tour)` | index.html (bundle) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .welcome-dots i transition | `width var(--duration-base) var(--ease-out),background var(--duration-base) var(--ease-standard)` | index.html (bundle) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| :root --z-tour | `26` | index.html (bundle) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .release summary:after transition | `rotate var(--duration-base) var(--ease-standard)` | index.html (bundle) | notes-v3@b99f70fc 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.2.0: Quoi de neuf, journal des modifications en fri… |
| 0% opacity | `0` | index.html (bundle) ·  @keyframes card-in | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| 0% transform | `translateY(var(--space-2))` | index.html (bundle) ·  @keyframes card-in | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .card animation | `none` | index.html (bundle) · @media (prefers-reduced-motion:reduce) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .sheet,.sheet.open,.editor,.editor.open,.popover,.popover.open,.card,.card.swipe-release,.card-check,.progress-fill,.icon-btn,.action-btn,.nav-tab,.fab,.fab svg,.create-tile,.card-more transition | `none` | index.html (bundle) · @media (prefers-reduced-motion:reduce) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .layer-open .dock z-index | `calc(var(--z-backdrop) + 1)` | index.html (bundle) · @media (width>=64em) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .app-header.is-search backdrop-filter | `var(--blur-bar)` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .card-more transition | `background var(--duration-fast) var(--ease-standard)` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .card-more z-index | `1` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .card.is-leaving opacity | `0` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .card animation | `card-in var(--duration-base) var(--ease-out) backwards` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .create-tile transition | `transform var(--duration-fast) var(--ease-press)` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .fab svg transition | `transform var(--duration-base) var(--ease-out)` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .fab.is-recording box-shadow | `var(--shadow-sm)` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .fab box-shadow | `var(--shadow-accent),var(--shadow-sm)` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .fab transition | `transform var(--duration-fast) var(--ease-press),background var(--duration-fast) var(--ease-standard)` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .icon-btn.ghost:active opacity | `1` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .layer-open:not(.is-editing) .dock z-index | `calc(var(--z-backdrop) + 1)` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .nav-tab transition | `color var(--duration-fast) var(--ease-standard),background var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-press)` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .search-field:focus-within box-shadow | `inset 0 0 0 var(--border-thick) var(--color-select)` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .settings-open .dock z-index | `calc(var(--z-sheet) + 1)` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |

## Lignée source Vite (src/styles/tokens.css, looks.css, app.css, 2026-10-18 à 2026-10-31)

345 valeurs distinctes (une ligne par valeur et par période).

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| 50% opacity | `.25` | app.css ·  @keyframes blink | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| from opacity | `0` | app.css ·  @keyframes card-in | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| from transform | `translateY(6px) scale(.985)` | app.css ·  @keyframes card-in | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| to transform | `translate3d(2vmax, -3vmax, 0) rotate(6deg)` | app.css ·  @keyframes drift | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| from opacity | `0` | app.css ·  @keyframes fade | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| from opacity | `0` | app.css ·  @keyframes grow | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| from transform | `scaleX(.3)` | app.css ·  @keyframes grow | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| 50% box-shadow | `0 0 0 8px light-dark(#d7001520, #ff696126)` | app.css ·  @keyframes pulse | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@15678aae 2026-10-29 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| 50% box-shadow | `0 0 0 8px var(--recording-ring)` | app.css ·  @keyframes pulse | notes-v3@15678aae 2026-10-29 | HEAD | move every colour into tokens and fail the smoke on a stray… |
| from opacity | `0` | app.css ·  @keyframes rise | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| from transform | `translateY(14px) scale(.98)` | app.css ·  @keyframes rise | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| from opacity | `0` | app.css ·  @keyframes sheet-in | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| from transform | `translateY(24px) scale(.94)` | app.css ·  @keyframes sheet-in | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| to opacity | `0` | app.css ·  @keyframes sheet-out | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| to transform | `translateY(18px) scale(.96)` | app.css ·  @keyframes sheet-out | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@0d6f0834 2026-10-31 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| to transform | `translate(var(--to-x, 0px), var(--to-y, 18px)) scale(var(--to-s, .96))` | app.css ·  @keyframes sheet-out | notes-v3@0d6f0834 2026-10-31 | HEAD | Panels leave without jumping and shrink toward their button… |
| .about-icon box-shadow | `0 4px 14px #0002` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@15678aae 2026-10-29 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .about-icon box-shadow | `var(--shadow-icon)` | app.css | notes-v3@15678aae 2026-10-29 | HEAD | move every colour into tokens and fail the smoke on a stray… |
| .ambient animation | `drift 40s ease-in-out infinite alternate` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .ambient z-index | `-1` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .ambient z-index | `var(--z-under)` | app.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| .art-card i.art-wave mask-image | `linear-gradient(180deg, transparent 20%, #000 20% 80%, transparent 80%)` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@15678aae 2026-10-29 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .art-card i.art-wave mask-image | `linear-gradient(180deg, transparent 20%, black 20% 80%, transparent 80%)` | app.css | notes-v3@15678aae 2026-10-29 | HEAD | move every colour into tokens and fail the smoke on a stray… |
| .art-card i.art-wave opacity | `.8` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .art-card:nth-child(2) z-index | `1` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .art-card:nth-child(2) z-index | `var(--z-over)` | app.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| .art-plus box-shadow | `var(--color-accent-glow)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .art-plus z-index | `2` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .art-plus z-index | `var(--z-over-2)` | app.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| .att-remove -webkit-backdrop-filter | `blur(8px)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .att-remove backdrop-filter | `blur(8px)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .btn.primary box-shadow | `var(--color-accent-glow)` | app.css | notes-v3@4da62555 2026-10-18 | SUPPRIMÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .card-body .check, .card-body .check-hit z-index | `1` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .card-body .check, .card-body .check-hit z-index | `var(--z-over)` | app.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| .card-check svg opacity | `0` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .card-check z-index | `1` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .card-check z-index | `var(--z-over)` | app.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| .card-more z-index | `1` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .card-more z-index | `var(--z-over)` | app.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| .card-wave z-index | `1` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .card-wave z-index | `var(--z-over)` | app.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| .card.dragging box-shadow | `var(--glass-shadow)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .card.dragging transition | `none` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .card.dragging z-index | `5` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .card.dragging z-index | `var(--z-lifted)` | app.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| .card.drop-target box-shadow | `0 0 0 2px var(--color-accent)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .card.is-leaving opacity | `0` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .card.is-leaving transition | `opacity 180ms, transform 180ms var(--ease)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .card.is-open box-shadow | `0 0 0 2px var(--color-accent)` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .card.is-open box-shadow | `0 0 0 2px var(--color-select)` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .card.selected .card-check svg opacity | `1` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .card.selected box-shadow | `0 0 0 2px var(--color-select)` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@ba6e7b28 2026-10-19 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .card.selected box-shadow | `inset 0 0 0 2px var(--color-select)` | app.css | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .card.swipe-release transition | `transform 180ms var(--ease)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .card.swiping transition | `none` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .card.swiping z-index | `2` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .card.swiping z-index | `var(--z-over-2)` | app.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| .card animation | `card-in var(--base) var(--ease-out) both` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .card box-shadow | `0 1px 2px light-dark(#1218300a, #0000003d), inset 0 1px 0 light-dark(#ffffffcc, #ffffff0d)` | app.css | notes-v3@4da62555 2026-10-18 | SUPPRIMÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .check-hit input transition | `background-color var(--fast), border-color var(--fast)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .dock, .editor-dock transition | `opacity var(--base) var(--ease), translate var(--base) var(--ease)` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .dock, .editor-dock transition | `opacity var(--base) var(--ease), translate var(--base) var(--ease), visibility 0s` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .dock animation | `rise var(--base) var(--ease) both` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .dock z-index | `20` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .dock z-index | `var(--z-dock)` | app.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| .dots i transition | `width var(--base) var(--ease)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .editor.dragging transition | `none` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .editor.open transition | `transform var(--slow) var(--ease), visibility 0s` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@ef23bea4 2026-10-19 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .editor.open transition | `transform var(--slow) var(--ease), visibility 0s, padding var(--base) var(--ease)` | app.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| .editor -webkit-backdrop-filter | `blur(30px) saturate(160%)` | app.css | notes-v3@4da62555 2026-10-18 | SUPPRIMÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .editor backdrop-filter | `blur(30px) saturate(160%)` | app.css | notes-v3@4da62555 2026-10-18 | SUPPRIMÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .editor transition | `transform var(--slow) var(--ease), visibility 0s linear var(--slow)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .editor z-index | `30` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .editor z-index | `var(--z-editor)` | app.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| .fab svg transition | `rotate var(--base) var(--ease)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .fab.is-quiet -webkit-backdrop-filter | `var(--glass-blur)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .fab.is-quiet backdrop-filter | `var(--glass-blur)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .fab.is-quiet box-shadow | `var(--glass-shadow)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .fab box-shadow | `inset 0 1px 0 #fff9, inset 0 -2px 6px #c8950a55, var(--color-accent-glow), 0 2px 6px #0002` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@15678aae 2026-10-29 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .fab box-shadow | `var(--fab-shadow)` | app.css | notes-v3@15678aae 2026-10-29 | HEAD | move every colour into tokens and fail the smoke on a stray… |
| .flashcard-a animation | `fade var(--base) both` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .format-strip animation | `rise var(--base) var(--ease) both` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .format-strip animation | `grow var(--base) var(--ease) both` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .glass::before z-index | `-1` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .glass::before z-index | `var(--z-under)` | app.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| .glass -webkit-backdrop-filter | `var(--glass-blur)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .glass backdrop-filter | `var(--glass-blur)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .glass box-shadow | `var(--glass-shadow)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .icon-btn, .tab-btn, .action-btn, .fab, .chip, .tile, .btn, .row, .option, .card-open, .back-chip transition | `transform var(--fast) var(--ease), background-color var(--fast), box-shadow var(--fast)` | app.css | notes-v3@4da62555 2026-10-18 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .icon-btn.has-dot::after box-shadow | `0 0 0 2px var(--glass-strong)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .icon-btn.is-recording animation | `pulse 1.4s ease-in-out infinite` | app.css | notes-v3@4da62555 2026-10-18 | SUPPRIMÉ notes-v3@801d11fb 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .icon-btn.is-recording animation | `pulse 1.4s ease-in-out infinite` | app.css | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .inline-form input:focus box-shadow | `0 0 0 3px light-dark(#f4c54255, #f4c54233)` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .inline-form input:focus box-shadow | `0 0 0 3px var(--color-fill-strong)` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .layer, .sheet animation | `sheet-in var(--slow) var(--ease) both` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .layer, .sheet z-index | `41` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .layer, .sheet z-index | `var(--z-sheet)` | app.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| .layer[data-closing], .sheet[data-closing] animation | `sheet-out var(--base) var(--ease) both` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .map-edges line opacity | `.5` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .progress-fill transition | `width var(--base) var(--ease)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .pull-hint box-shadow | `var(--glass-shadow)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .pull-hint opacity | `var(--pull, 0)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .pull-hint z-index | `1` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .pull-hint z-index | `var(--z-over)` | app.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| .rec-bar animation | `rise var(--base) var(--ease) both` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .rec-bar z-index | `21` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .rec-bar z-index | `var(--z-rec)` | app.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| .rec-dot animation | `blink 1s steps(2) infinite` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .scrim[data-closing] animation | `fade var(--base) reverse both` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .scrim animation | `fade var(--base) both` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .scrim z-index | `40` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .scrim z-index | `var(--z-scrim)` | app.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| .search-field animation | `grow var(--base) var(--ease) both` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .seek::-moz-range-thumb box-shadow | `0 1px 4px #0005` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@15678aae 2026-10-29 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .seek::-moz-range-thumb box-shadow | `var(--shadow-seek)` | app.css | notes-v3@15678aae 2026-10-29 | HEAD | move every colour into tokens and fail the smoke on a stray… |
| .seek::-webkit-slider-thumb box-shadow | `0 1px 4px #0005` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@15678aae 2026-10-29 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .seek::-webkit-slider-thumb box-shadow | `var(--shadow-seek)` | app.css | notes-v3@15678aae 2026-10-29 | HEAD | move every colour into tokens and fail the smoke on a stray… |
| .segmented button[aria-checked='true'] box-shadow | `0 1px 3px #0002, inset 0 1px 0 #fff5` | app.css | notes-v3@4da62555 2026-10-18 | SUPPRIMÉ notes-v3@801d11fb 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .segmented button transition | `background-color var(--fast), color var(--fast)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .swatch svg opacity | `0` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .swatch[aria-pressed='true'] svg opacity | `1` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .swatch[aria-pressed='true'] box-shadow | `0 0 0 2px var(--color-card-solid), 0 0 0 4px var(--folder-dot)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .swipe-icon transition | `transform var(--fast) var(--ease)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .toast animation | `rise var(--base) var(--ease) both` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .toast animation | `drop var(--base) var(--ease) both` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .toast z-index | `60` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .toast z-index | `var(--z-toast)` | app.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| .tour-bubble animation | `sheet-in var(--base) var(--ease) both` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .tour-spot box-shadow | `0 0 0 200vmax var(--color-scrim)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .tour-spot transition | `all var(--base) var(--ease)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .tour z-index | `70` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .tour z-index | `var(--z-tour)` | app.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| .wave i.played opacity | `1` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .wave i opacity | `.55` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| body.layer-open :is(.dock, .editor-dock) opacity | `0` | app.css | notes-v3@4da62555 2026-10-18 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| button:disabled opacity | `.4` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@e30d2cdc 2026-10-29 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| button:disabled opacity | `var(--opacity-disabled)` | app.css | notes-v3@e30d2cdc 2026-10-29 | HEAD | polish editing, tables, cards and the 52px dock |
| html:not(.is-pulling) .page transition | `transform var(--base) var(--ease)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --base | `1ms` | tokens.css · @media (prefers-reduced-motion: reduce) | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --fast | `1ms` | tokens.css · @media (prefers-reduced-motion: reduce) | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --slow | `1ms` | tokens.css · @media (prefers-reduced-motion: reduce) | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --glass | `var(--glass-strong)` | tokens.css · @media (prefers-reduced-transparency: reduce) | notes-v3@4da62555 2026-10-18 | SUPPRIMÉ notes-v3@ba6e7b28 2026-10-19 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --glass-blur | `none` | tokens.css · @media (prefers-reduced-transparency: reduce) | notes-v3@4da62555 2026-10-18 | SUPPRIMÉ notes-v3@ba6e7b28 2026-10-19 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --base | `240ms` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --ease | `cubic-bezier(.32, .72, 0, 1)` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --ease-out | `cubic-bezier(.2, .8, .2, 1)` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --fast | `140ms` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --glass | `light-dark(#ffffff8c, #26272e80)` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --glass-blur | `blur(22px) saturate(190%)` | tokens.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --glass-blur | `blur(24px) saturate(180%)` | tokens.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| :root --glass-edge | `light-dark(#ffffffb3, #ffffff26)` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --glass-press | `light-dark(#ffffffa6, #ffffff1f)` | tokens.css | notes-v3@4da62555 2026-10-18 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --glass-shadow | `inset 0 1px 0 light-dark(#ffffffe6, #ffffff33), inset 0 -1px 0 light-dark(#ffffff59, #ffffff0d), 0 1px 2px light-dark(#1218300f, #0000004d), 0 10px 3…` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --glass-shine | `linear-gradient(180deg, light-dark(#ffffffb3, #ffffff2e) 0%, #fff0 42%, #fff0 72%, light-dark(#ffffff40, #ffffff0f) 100%)` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --glass-strong | `light-dark(#ffffffc4, #1e1f25c9)` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --slow | `380ms` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| from opacity | `0` | app.css ·  @keyframes pop-in | notes-v3@801d11fb 2026-10-18 | HEAD | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| from transform | `scale(.9)` | app.css ·  @keyframes pop-in | notes-v3@801d11fb 2026-10-18 | HEAD | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| 60% transform | `scale(1.15)` | app.css ·  @keyframes pop | notes-v3@801d11fb 2026-10-18 | HEAD | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| from opacity | `0` | app.css ·  @keyframes pop | notes-v3@801d11fb 2026-10-18 | HEAD | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| from transform | `scale(.3)` | app.css ·  @keyframes pop | notes-v3@801d11fb 2026-10-18 | HEAD | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .check-hit input:checked animation | `pop var(--base) var(--ease)` | app.css | notes-v3@801d11fb 2026-10-18 | HEAD | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .chip[aria-pressed='true'] animation | `pop var(--base) var(--ease)` | app.css | notes-v3@801d11fb 2026-10-18 | HEAD | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .icon-btn.is-recording, #mic.is-recording animation | `pulse 1.4s ease-in-out infinite` | app.css | notes-v3@801d11fb 2026-10-18 | SUPPRIMÉ notes-v3@ba6e7b28 2026-10-19 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .layer.lib-page animation | `sheet-in var(--slow) var(--ease) both` | app.css | notes-v3@801d11fb 2026-10-18 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .lib-folder.is-new box-shadow | `none` | app.css | notes-v3@801d11fb 2026-10-18 | SUPPRIMÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .lib-folder[aria-pressed='true'] box-shadow | `0 0 0 2px var(--folder-dot, var(--tone-gray))` | app.css | notes-v3@801d11fb 2026-10-18 | HEAD | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .lib-folder box-shadow | `inset 0 1px 0 light-dark(#fff, #ffffff1a), 0 1px 2px #0001` | app.css | notes-v3@801d11fb 2026-10-18 | SUPPRIMÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .lib-folder transition | `transform var(--fast) var(--ease)` | app.css | notes-v3@801d11fb 2026-10-18 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .lib-tag transition | `transform var(--fast) var(--ease)` | app.css | notes-v3@801d11fb 2026-10-18 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .lib-tile[aria-pressed='true'] box-shadow | `0 0 0 2px var(--tone)` | app.css | notes-v3@801d11fb 2026-10-18 | REMPLACÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .lib-tile[aria-pressed='true'] box-shadow | `inset 0 0 0 1.5px var(--tone-ink)` | app.css | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| .lib-tile transition | `transform var(--fast) var(--ease), box-shadow var(--base)` | app.css | notes-v3@801d11fb 2026-10-18 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .option[aria-pressed='true']::after animation | `pop var(--base) var(--ease) both` | app.css | notes-v3@801d11fb 2026-10-18 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .seg-thumb box-shadow | `0 1px 3px #0002, inset 0 1px 0 #fff5` | app.css | notes-v3@801d11fb 2026-10-18 | REMPLACÉ notes-v3@15678aae 2026-10-29 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .seg-thumb box-shadow | `var(--shadow-thumb)` | app.css | notes-v3@15678aae 2026-10-29 | HEAD | move every colour into tokens and fail the smoke on a stray… |
| .seg-thumb transition | `transform var(--slow) var(--ease)` | app.css | notes-v3@801d11fb 2026-10-18 | REMPLACÉ notes-v3@ef23bea4 2026-10-19 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .seg-thumb transition | `transform var(--slow) var(--ease), opacity var(--base) var(--ease)` | app.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| .segmented button z-index | `1` | app.css | notes-v3@801d11fb 2026-10-18 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .segmented button z-index | `var(--z-over)` | app.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| .switch i box-shadow | `0 2px 6px #0003` | app.css | notes-v3@801d11fb 2026-10-18 | REMPLACÉ notes-v3@15678aae 2026-10-29 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .switch i box-shadow | `var(--shadow-knob)` | app.css | notes-v3@15678aae 2026-10-29 | HEAD | move every colour into tokens and fail the smoke on a stray… |
| .switch i transition | `transform var(--slow) var(--ease), width var(--fast) var(--ease)` | app.css | notes-v3@801d11fb 2026-10-18 | REMPLACÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .switch i transition | `transform var(--slow) var(--ease), width var(--fast) var(--ease), color var(--base)` | app.css | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| .switch transition | `background-color var(--base) var(--ease)` | app.css | notes-v3@801d11fb 2026-10-18 | HEAD | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .widget img z-index | `-2` | app.css | notes-v3@801d11fb 2026-10-18 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .widget img z-index | `var(--z-under-2)` | app.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| .widget:nth-child(2) animation-delay | `40ms` | app.css | notes-v3@801d11fb 2026-10-18 | HEAD | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .widget:nth-child(3) animation-delay | `80ms` | app.css | notes-v3@801d11fb 2026-10-18 | HEAD | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .widget:nth-child(4) animation-delay | `120ms` | app.css | notes-v3@801d11fb 2026-10-18 | HEAD | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .widget:nth-child(5) animation-delay | `160ms` | app.css | notes-v3@801d11fb 2026-10-18 | HEAD | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .widget animation | `card-in var(--slow) var(--ease-out) both` | app.css | notes-v3@801d11fb 2026-10-18 | HEAD | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .widget box-shadow | `inset 0 1px 0 light-dark(#fff, #ffffff12), 0 1px 2px #0001` | app.css | notes-v3@801d11fb 2026-10-18 | SUPPRIMÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .widget transition | `transform var(--fast) var(--ease)` | app.css | notes-v3@801d11fb 2026-10-18 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .layer.lib-page -webkit-backdrop-filter | `blur(40px) saturate(180%)` | app.css | notes-v3@4a4da608 2026-10-18 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.18.3 : barre unique + au pouce, créer en 3 choi… |
| .layer.lib-page backdrop-filter | `blur(40px) saturate(180%)` | app.css | notes-v3@4a4da608 2026-10-18 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.18.3 : barre unique + au pouce, créer en 3 choi… |
| .scrim -webkit-backdrop-filter | `blur(14px) saturate(140%)` | app.css | notes-v3@4a4da608 2026-10-18 | HEAD | Notes 26.10.18.3 : barre unique + au pouce, créer en 3 choi… |
| .scrim backdrop-filter | `blur(14px) saturate(140%)` | app.css | notes-v3@4a4da608 2026-10-18 | HEAD | Notes 26.10.18.3 : barre unique + au pouce, créer en 3 choi… |
| .starters .chip -webkit-backdrop-filter | `var(--glass-blur)` | app.css | notes-v3@4a4da608 2026-10-18 | SUPPRIMÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.18.3 : barre unique + au pouce, créer en 3 choi… |
| .starters .chip backdrop-filter | `var(--glass-blur)` | app.css | notes-v3@4a4da608 2026-10-18 | SUPPRIMÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.18.3 : barre unique + au pouce, créer en 3 choi… |
| .starters .chip box-shadow | `var(--glass-shadow)` | app.css | notes-v3@4a4da608 2026-10-18 | SUPPRIMÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.18.3 : barre unique + au pouce, créer en 3 choi… |
| .starters animation | `rise var(--base) var(--ease) both` | app.css | notes-v3@4a4da608 2026-10-18 | REMPLACÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.18.3 : barre unique + au pouce, créer en 3 choi… |
| .starters animation | `card-in var(--base) var(--ease-out) both` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .dock .island.glass, .editor-dock .island.glass, .header-tools.glass -webkit-backdrop-filter | `blur(28px) saturate(200%) brightness(1.1)` | app.css | notes-v3@1224a586 2026-10-18 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.18.4 : Trier en menu déroulant, verre clair en … |
| .dock .island.glass, .editor-dock .island.glass, .header-tools.glass backdrop-filter | `blur(28px) saturate(200%) brightness(1.1)` | app.css | notes-v3@1224a586 2026-10-18 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.18.4 : Trier en menu déroulant, verre clair en … |
| .layer[data-anchored] animation-duration | `var(--base)` | app.css | notes-v3@1224a586 2026-10-18 | HEAD | Notes 26.10.18.4 : Trier en menu déroulant, verre clair en … |
| .scrim[data-light] -webkit-backdrop-filter | `none` | app.css | notes-v3@1224a586 2026-10-18 | HEAD | Notes 26.10.18.4 : Trier en menu déroulant, verre clair en … |
| .scrim[data-light] backdrop-filter | `none` | app.css | notes-v3@1224a586 2026-10-18 | HEAD | Notes 26.10.18.4 : Trier en menu déroulant, verre clair en … |
| from opacity | `0` | app.css ·  @keyframes drawer-in | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| from transform | `translateX(var(--drawer-from, 24px))` | app.css ·  @keyframes drawer-in | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| body[data-hand='left'] :is(.layer, .sheet)[data-drawer][data-mode] --drawer-from | `-24px` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .ambient, .icon-btn.is-recording, .rec-dot animation | `none` | app.css · @media (prefers-reduced-motion: reduce) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .editor, .layer.lib-page -webkit-backdrop-filter | `none` | app.css · @media (prefers-reduced-transparency: reduce) | notes-v3@ba6e7b28 2026-10-19 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .editor, .layer.lib-page backdrop-filter | `none` | app.css · @media (prefers-reduced-transparency: reduce) | notes-v3@ba6e7b28 2026-10-19 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .scrim -webkit-backdrop-filter | `none` | app.css · @media (prefers-reduced-transparency: reduce) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .scrim backdrop-filter | `none` | app.css · @media (prefers-reduced-transparency: reduce) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| :is(.dock, .editor-dock) .island.glass, .header-tools.glass, .starters .chip, .search-chips .chip.glass, .sheet.glass -webkit-backdrop-filter | `none` | app.css · @media (prefers-reduced-transparency: reduce) | notes-v3@ba6e7b28 2026-10-19 | SUPPRIMÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| :is(.dock, .editor-dock) .island.glass, .header-tools.glass, .starters .chip, .search-chips .chip.glass, .sheet.glass backdrop-filter | `none` | app.css · @media (prefers-reduced-transparency: reduce) | notes-v3@ba6e7b28 2026-10-19 | SUPPRIMÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| :root --glass | `var(--glass-strong)` | app.css · @media (prefers-reduced-transparency: reduce) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| :root --glass-blur | `none` | app.css · @media (prefers-reduced-transparency: reduce) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .editor-dock z-index | `1` | app.css | notes-v3@ba6e7b28 2026-10-19 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .editor-dock z-index | `var(--z-over)` | app.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| .editor::after --fade | `40px` | app.css | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .editor::after --veil | `linear-gradient(to bottom, transparent, var(--color-editor) var(--fade))` | app.css | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| body.layer-open:has(.layer[data-anchored]) :is(.dock, .editor-dock) opacity | `1` | app.css | notes-v3@ba6e7b28 2026-10-19 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| 40% transform | `scale(1.14)` | app.css ·  @keyframes nudge | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| :where(.fab, .btn.primary, .player-play, .wave-play):hover filter | `brightness(1.06)` | app.css · @media (hover: hover) and (pointer: fine) | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| :where(.tile, .lib-tile, .lib-folder, .widget, .card):hover box-shadow | `0 8px 20px light-dark(#1218301a, #00000059)` | app.css · @media (hover: hover) and (pointer: fine) | notes-v3@d6af8790 2026-10-19 | SUPPRIMÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| .editor -webkit-backdrop-filter | `none` | app.css · @media (prefers-reduced-transparency: reduce) | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| .editor backdrop-filter | `none` | app.css · @media (prefers-reduced-transparency: reduce) | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| .chip[aria-pressed='true'] box-shadow | `inset 0 0 0 1.5px var(--color-select)` | app.css | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| .chip[data-tone][aria-pressed='true'] box-shadow | `inset 0 0 0 1.5px var(--tone-ink)` | app.css | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| .lib-tag[aria-pressed='true'] box-shadow | `inset 0 0 0 1.5px var(--color-select)` | app.css | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| .sheet:is([data-mode='study'], [data-mode='map']) z-index | `43` | app.css | notes-v3@d6af8790 2026-10-19 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| .sheet:is([data-mode='study'], [data-mode='map']) z-index | `var(--z-over-scrim)` | app.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| .tab-btn:is([aria-pressed='true'], [aria-current='page']) svg animation | `nudge var(--slow) var(--ease)` | app.css | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| :is(.option, .row)[aria-pressed='true']::after animation | `pop var(--base) var(--ease) both` | app.css | notes-v3@d6af8790 2026-10-19 | SUPPRIMÉ notes-v3@c3ec060f 2026-10-21 | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| :where(.icon-btn, .tab-btn, .action-btn, .fab, .chip, .pill, .tile, .lib-tile, .lib-folder, .lib-tag, .widget, .card, .btn, .text-btn, .row, .option, .back-chip, .folder-chip, .swatch, .card-more, .search-clear, .player-btn, .player-play, .wave-play) transition | `background-color var(--fast) var(--ease), color var(--fast) var(--ease), box-shadow var(--base) var(--ease), transform var(--fast) var(--ease), trans…` | app.css | notes-v3@d6af8790 2026-10-19 | SUPPRIMÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| body.layer-open .dock z-index | `42` | app.css | notes-v3@d6af8790 2026-10-19 | REMPLACÉ notes-v3@c3ec060f 2026-10-21 | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| body.layer-open .dock z-index | `43` | app.css | notes-v3@c3ec060f 2026-10-21 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.21.2 : corrections de l'audit interactif (AUDIT… |
| body.layer-open .dock z-index | `var(--z-over-scrim)` | app.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| body.layer-open:not(:has(.layer[data-anchored])) .editor-dock opacity | `0` | app.css | notes-v3@d6af8790 2026-10-19 | SUPPRIMÉ notes-v3@ef23bea4 2026-10-19 | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| #nav-island .tab-btn z-index | `1` | app.css | notes-v3@ef23bea4 2026-10-19 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| #nav-island .tab-btn z-index | `var(--z-over)` | app.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| .panel-close z-index | `1` | app.css | notes-v3@ef23bea4 2026-10-19 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| .panel-close z-index | `var(--z-over)` | app.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| .seg-thumb[data-off] opacity | `0` | app.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| body.layer-open:not(:has(.layer[data-anchored], .layer[data-inspector])) .editor-dock opacity | `0` | app.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| .att-live:disabled opacity | `.7` | app.css | notes-v3@e15376fa 2026-10-19 | SUPPRIMÉ notes-v3@e30d2cdc 2026-10-29 | Notes 26.10.19.7 : glisser depuis +, ajouter le texte, repr… |
| .layer[data-mode='create'] .tile.is-armed box-shadow | `inset 0 0 0 2px var(--tone-ink)` | app.css | notes-v3@e15376fa 2026-10-19 | HEAD | Notes 26.10.19.7 : glisser depuis +, ajouter le texte, repr… |
| from opacity | `0` | app.css ·  @keyframes drop | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| from transform | `translateY(-14px) scale(.98)` | app.css ·  @keyframes drop | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .card-actions opacity | `0` | app.css · @media (hover: hover) and (pointer: fine) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .card-actions transition | `opacity var(--fast) var(--ease), translate var(--fast) var(--ease)` | app.css · @media (hover: hover) and (pointer: fine) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .card-actions z-index | `2` | app.css · @media (hover: hover) and (pointer: fine) | notes-v3@35c0380c 2026-10-21 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .card-actions z-index | `var(--z-over-2)` | app.css · @media (hover: hover) and (pointer: fine) | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| .card:is(:hover, :focus-within) .card-actions opacity | `1` | app.css · @media (hover: hover) and (pointer: fine) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| :where(.tile, .lib-tile, .lib-folder, .widget, .card, .first-action, .starter):hover box-shadow | `inset 0 0 0 1px var(--color-line-strong)` | app.css · @media (hover: hover) and (pointer: fine) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .dock transition | `opacity var(--base) var(--ease), translate var(--base) var(--ease), right var(--slow) var(--ease), left var(--slow) var(--ease)` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| body.sheet-open .dock opacity | `1` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| body.sheet-open .dock transition | `right var(--slow) var(--ease), left var(--slow) var(--ease)` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| :is(.dock, .editor-dock) .island.glass, .header-tools.glass, .search-chips .chip.glass, .sheet.glass, .layer.glass, .toast.glass -webkit-backdrop-filter | `none` | app.css · @media (prefers-contrast: more) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| :is(.dock, .editor-dock) .island.glass, .header-tools.glass, .search-chips .chip.glass, .sheet.glass, .layer.glass, .toast.glass backdrop-filter | `none` | app.css · @media (prefers-contrast: more) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| :is(.dock, .editor-dock) .island.glass, .header-tools.glass, .search-chips .chip.glass, .sheet.glass -webkit-backdrop-filter | `none` | app.css · @media (prefers-reduced-transparency: reduce) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| :is(.dock, .editor-dock) .island.glass, .header-tools.glass, .search-chips .chip.glass, .sheet.glass backdrop-filter | `none` | app.css · @media (prefers-reduced-transparency: reduce) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .card-body.is-clamped -webkit-mask-image | `linear-gradient(#000 calc(100% - 2.6em), transparent)` | app.css | notes-v3@35c0380c 2026-10-21 | REMPLACÉ notes-v3@15678aae 2026-10-29 | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .card-body.is-clamped -webkit-mask-image | `linear-gradient(black calc(100% - 2.6em), transparent)` | app.css | notes-v3@15678aae 2026-10-29 | HEAD | move every colour into tokens and fail the smoke on a stray… |
| .card-body.is-clamped mask-image | `linear-gradient(#000 calc(100% - 2.6em), transparent)` | app.css | notes-v3@35c0380c 2026-10-21 | REMPLACÉ notes-v3@15678aae 2026-10-29 | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .card-body.is-clamped mask-image | `linear-gradient(black calc(100% - 2.6em), transparent)` | app.css | notes-v3@15678aae 2026-10-29 | HEAD | move every colour into tokens and fail the smoke on a stray… |
| .list-heading.is-toggle .chevron transition | `rotate var(--base) var(--ease)` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .save-status:not([data-status='saved']) transition | `none` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .save-status[data-status='saved'] opacity | `0` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .save-status transition | `opacity var(--slow) var(--ease) 1.4s` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .sheet.drag-release transition | `translate var(--base) var(--ease)` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .sheet.dragging transition | `none` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .tour-bubble box-shadow | `var(--glass-shadow)` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| :where(.icon-btn, .tab-btn, .action-btn, .fab, .chip, .pill, .tile, .lib-tile, .lib-folder, .lib-tag, .widget, .card, .btn, .text-btn, .row, .option, .back-chip, .folder-chip, .swatch, .card-more, .search-clear, .player-btn, .player-play, .wave-play, .first-action, .starter) transition | `background-color var(--fast) var(--ease), color var(--fast) var(--ease), box-shadow var(--base) var(--ease), transform var(--fast) var(--ease), trans…` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| body.sheet-open .dock opacity | `0` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| body.sheet-open .dock transition | `opacity var(--fast) var(--ease), translate var(--base) var(--ease), visibility 0s linear var(--base)` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| html.kb-open body.is-editing .main-dock opacity | `0` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| :root --glass | `var(--glass-strong)` | tokens.css · @media (prefers-contrast: more) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .layer z-index | `44` | app.css | notes-v3@c3ec060f 2026-10-21 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.21.2 : corrections de l'audit interactif (AUDIT… |
| .layer z-index | `var(--z-layer)` | app.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| .scrim:has(+ .layer) z-index | `42` | app.css | notes-v3@c3ec060f 2026-10-21 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | Notes 26.10.21.2 : corrections de l'audit interactif (AUDIT… |
| .scrim:has(+ .layer) z-index | `var(--z-layer-scrim)` | app.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| :is(.option, .row)[aria-pressed='true']::after, .option[role='radio'][aria-checked='true']::after animation | `pop var(--base) var(--ease) both` | app.css | notes-v3@c3ec060f 2026-10-21 | HEAD | Notes 26.10.21.2 : corrections de l'audit interactif (AUDIT… |
| :root, :root[data-look] --glass | `var(--glass-strong)` | looks.css · @media (prefers-reduced-transparency: reduce) | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root, :root[data-look] --glass-blur | `none` | looks.css · @media (prefers-reduced-transparency: reduce) | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| .accent-dot box-shadow | `inset 0 0 0 1px var(--color-line-strong)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --glass | `var(--color-card)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --glass-blur | `none` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --glass-edge | `var(--color-line)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --glass-shadow | `0 0 0 1px var(--color-line)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --glass-shine | `none` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --glass-strong | `var(--color-card)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root --z-dock | `20` | tokens.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| :root --z-editor | `30` | tokens.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| :root --z-layer | `calc(var(--z-over-scrim) + 1)` | tokens.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| :root --z-layer-scrim | `calc(var(--z-sheet) + 1)` | tokens.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| :root --z-lifted | `5` | tokens.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| :root --z-over | `1` | tokens.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| :root --z-over-2 | `2` | tokens.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| :root --z-over-scrim | `calc(var(--z-layer-scrim) + 1)` | tokens.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| :root --z-rec | `calc(var(--z-dock) + 1)` | tokens.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| :root --z-scrim | `40` | tokens.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| :root --z-sheet | `calc(var(--z-scrim) + 1)` | tokens.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| :root --z-toast | `60` | tokens.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| :root --z-tour | `70` | tokens.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| :root --z-under | `-1` | tokens.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| :root --z-under-2 | `-2` | tokens.css | notes-v3@602f0c6b 2026-10-28 | HEAD | move every z-index onto a --z-* scale in tokens.css |
| .tbl :is(th, td)[data-sel] box-shadow | `inset 0 0 0 2.5px var(--color-accent)` | app.css | notes-v3@9e7d5dd7 2026-10-29 | SUPPRIMÉ notes-v3@e30d2cdc 2026-10-29 | add table editor, tools panel and Tableau button |
| .tbl-tool:disabled opacity | `.55` | app.css | notes-v3@9e7d5dd7 2026-10-29 | SUPPRIMÉ notes-v3@e30d2cdc 2026-10-29 | add table editor, tools panel and Tableau button |
| .tbl-wrap box-shadow | `inset 0 0 0 1px var(--color-line-strong)` | app.css | notes-v3@9e7d5dd7 2026-10-29 | HEAD | add table editor, tools panel and Tableau button |
| :root --fab-shadow | `inset 0 1px 0 #fff9, inset 0 -2px 6px #c8950a55, var(--color-accent-glow), 0 2px 6px #0002` | tokens.css | notes-v3@15678aae 2026-10-29 | HEAD | move every colour into tokens and fail the smoke on a stray… |
| :root --glass-dock | `light-dark(#ffffffd6, #25262cd9)` | tokens.css | notes-v3@15678aae 2026-10-29 | HEAD | move every colour into tokens and fail the smoke on a stray… |
| :root --glass-sheet | `light-dark(#f7f8fbf2, #17181df2)` | tokens.css | notes-v3@15678aae 2026-10-29 | HEAD | move every colour into tokens and fail the smoke on a stray… |
| :root --media-shade | `linear-gradient(180deg, #0005, #000b)` | tokens.css | notes-v3@15678aae 2026-10-29 | HEAD | move every colour into tokens and fail the smoke on a stray… |
| :root --media-veil | `#0007` | tokens.css | notes-v3@15678aae 2026-10-29 | HEAD | move every colour into tokens and fail the smoke on a stray… |
| :root --scrim-frost | `light-dark(#eef0f633, #08090c4d)` | tokens.css | notes-v3@15678aae 2026-10-29 | HEAD | move every colour into tokens and fail the smoke on a stray… |
| :root --shadow-icon | `0 4px 14px #0002` | tokens.css | notes-v3@15678aae 2026-10-29 | HEAD | move every colour into tokens and fail the smoke on a stray… |
| :root --shadow-knob | `0 2px 6px #0003` | tokens.css | notes-v3@15678aae 2026-10-29 | HEAD | move every colour into tokens and fail the smoke on a stray… |
| :root --shadow-seek | `0 1px 4px #0005` | tokens.css | notes-v3@15678aae 2026-10-29 | HEAD | move every colour into tokens and fail the smoke on a stray… |
| :root --shadow-thumb | `0 1px 3px #0002, inset 0 1px 0 #fff5` | tokens.css | notes-v3@15678aae 2026-10-29 | HEAD | move every colour into tokens and fail the smoke on a stray… |
| :root --surface-knob | `#fff` | tokens.css | notes-v3@15678aae 2026-10-29 | HEAD | move every colour into tokens and fail the smoke on a stray… |
| :root --surface-thumb | `light-dark(#fff, #3a3b43)` | tokens.css | notes-v3@15678aae 2026-10-29 | HEAD | move every colour into tokens and fail the smoke on a stray… |
| :root --alpha-faint | `5%` | tokens.css | notes-v3@fe7ee2da 2026-10-29 | HEAD | measure contrast from tokens; theme-aware ink on fills and … |
| :root --alpha-medium | `12%` | tokens.css | notes-v3@fe7ee2da 2026-10-29 | HEAD | measure contrast from tokens; theme-aware ink on fills and … |
| :root --alpha-soft | `8%` | tokens.css | notes-v3@fe7ee2da 2026-10-29 | HEAD | measure contrast from tokens; theme-aware ink on fills and … |
| :root --alpha-strong | `18%` | tokens.css | notes-v3@fe7ee2da 2026-10-29 | HEAD | measure contrast from tokens; theme-aware ink on fills and … |
| :root --opacity-disabled | `.4` | tokens.css | notes-v3@fe7ee2da 2026-10-29 | HEAD | measure contrast from tokens; theme-aware ink on fills and … |
| #note-view .tbl :is(th, td):first-child z-index | `var(--z-over)` | app.css | notes-v3@e30d2cdc 2026-10-29 | HEAD | polish editing, tables, cards and the 52px dock |
| .tbl :is(th, td)[data-sel], #note-view .tbl :is(th, td)[data-sel] box-shadow | `inset 0 0 0 2px var(--color-select)` | app.css | notes-v3@e30d2cdc 2026-10-29 | HEAD | polish editing, tables, cards and the 52px dock |
| .tbl :is(th, td)[data-sel], #note-view .tbl :is(th, td)[data-sel] z-index | `var(--z-over-2)` | app.css | notes-v3@e30d2cdc 2026-10-29 | HEAD | polish editing, tables, cards and the 52px dock |
| .tbl-tool[aria-pressed='true'] box-shadow | `inset 0 0 0 1.5px var(--color-select)` | app.css | notes-v3@e30d2cdc 2026-10-29 | HEAD | polish editing, tables, cards and the 52px dock |
| 55% opacity | `.9` | app.css ·  @keyframes sheet-out | notes-v3@0d6f0834 2026-10-31 | HEAD | Panels leave without jumping and shrink toward their button… |
| :is(.layer, .sheet)[data-closing][data-closing] animation | `sheet-out var(--base) var(--ease) both` | app.css | notes-v3@0d6f0834 2026-10-31 | HEAD | Panels leave without jumping and shrink toward their button… |
| .settings-row + .settings-row box-shadow | `inset 0 .5px 0 var(--color-separator, var(--color-fill-strong))` | app.css | notes-v3@47c570df 2026-10-31 | HEAD | Réglages as a page with a route per section (list on phone,… |
| :root[data-look='acrylic'] --glass | `light-dark(#f6f7f9b8, #2a2b30b8)` | looks.css | notes-v3@3687c668 2026-10-31 | HEAD | Acrylique look: flat frosted surface, no bevel |
| :root[data-look='acrylic'] --glass-blur | `blur(32px) saturate(120%)` | looks.css | notes-v3@3687c668 2026-10-31 | HEAD | Acrylique look: flat frosted surface, no bevel |
| :root[data-look='acrylic'] --glass-dock | `light-dark(#f4f5f8eb, #2a2b30eb)` | looks.css | notes-v3@3687c668 2026-10-31 | HEAD | Acrylique look: flat frosted surface, no bevel |
| :root[data-look='acrylic'] --glass-edge | `light-dark(#0000001a, #ffffff1f)` | looks.css | notes-v3@3687c668 2026-10-31 | HEAD | Acrylique look: flat frosted surface, no bevel |
| :root[data-look='acrylic'] --glass-shadow | `0 1px 0 light-dark(#0000000a, #0000001f), 0 8px 28px light-dark(#12183024, #00000080)` | looks.css | notes-v3@3687c668 2026-10-31 | HEAD | Acrylique look: flat frosted surface, no bevel |
| :root[data-look='acrylic'] --glass-sheet | `light-dark(#f8f9fbf5, #1d1e22f5)` | looks.css | notes-v3@3687c668 2026-10-31 | HEAD | Acrylique look: flat frosted surface, no bevel |
| :root[data-look='acrylic'] --glass-shine | `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n' x='0' y='0' width='100%25' height='100%…` | looks.css | notes-v3@3687c668 2026-10-31 | HEAD | Acrylique look: flat frosted surface, no bevel |
| :root[data-look='acrylic'] --glass-strong | `light-dark(#f8f9fbe0, #26272cdc)` | looks.css | notes-v3@3687c668 2026-10-31 | HEAD | Acrylique look: flat frosted surface, no bevel |

## Préférences d'accessibilité et blocs de médias

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| `prefers-reduced-transparency: reduce` | `--glass:var(--glass-strong); --glass-blur:none` | bundle puis tokens.css | notes-v3@b6647a04 2026-10-09 | HEAD (déplacé dans looks.css : `:root,:root[data-look]`) | notes-v3@fbf13b31 2026-10-24 |
| `prefers-reduced-motion: reduce` | durées à 1ms (`--fast/--base/--slow`) | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | bundle : bloc présent dès notes-v3@b6647a04 2026-10-09 |
| `forced-colors: active` | bordure et sélection par couleurs système | app.css | notes-v3@ba6e7b28 2026-10-19 | HEAD | repris dans 35c0380 |
| `prefers-contrast: more` | `--color-line`, `--color-text-muted/-faint`, `--glass` renforcés | tokens.css | notes-v3@35c0380c 2026-10-21 | HEAD | |
| Ombres décoratives | « Fond uni, cartes pleines, sans ombres : le texte se détache » : `--color-card` et `--color-editor` deviennent opaques ; verre conservé pour barre, îlots, feuilles | tokens.css | notes-v3@35c0380c 2026-10-21 | HEAD | |
| Échelle z-index | `--z-under` … `--z-toast:60` dérivées l'une de l'autre | tokens.css | notes-v3@602f0c6b 2026-10-28 | HEAD | bundle : `--z-dock:5 … --z-toast:25` ; commit 28 valeurs numériques |
| Ordre des calques | voile 40 · feuille 41 · voile du menu 42 · barre 43 · menu 44 | app.css | notes-v3@c3ec060f 2026-10-21 | REMPLACÉ notes-v3@602f0c6b 2026-10-28 | |

