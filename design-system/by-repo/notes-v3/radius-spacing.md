Source : notes-v3, commits lus : 135 (9 lignée notes-site, 83 lignée source main, 43 builds notes-v3-site), plage : 2026-10-09 à 2026-10-31

# Rayons, espacements, bordures, tailles de contrôles

Rayons (valeurs et règle de calcul), échelle d'espacement, largeurs de bordure, hauteurs `--h` des contrôles, tailles de contrôles et d'icônes sous forme de jetons ou de déclarations `border-radius`.


## Lignée bundle notes-site (index.html mono-fichier, 2026-10-09 à 2026-10-15)

180 valeurs distinctes (une ligne par valeur et par période).

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| :root --size-dock-btn | `var(--size-tap)` | index.html (bundle) · @media (width<=21.25em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --space-edge | `var(--space-1)` | index.html (bundle) · @media (width<=21.25em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --space-island | `var(--space-0-5)` | index.html (bundle) · @media (width<=21.25em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --line-clamp-card | `10` | index.html (bundle) · @media (width>=48em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --space-card | `var(--space-5)` | index.html (bundle) · @media (width>=48em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --space-screen | `var(--space-6)` | index.html (bundle) · @media (width>=48em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .is-editing --edge-inset | `var(--space-screen)` | index.html (bundle) · @media (width>=64em) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .action-btn border-radius | `var(--radius-control)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .action-chip border-radius | `var(--radius-tap-sm)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | REMPLACÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .action-chip border-radius | `var(--radius-tap)` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .att-box border-radius | `var(--radius-lg)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .att-remove border-radius | `var(--radius-tap)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .badge border-radius | `var(--radius-card-inner)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .card-check border-radius | `var(--radius-card-inner)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .card-grip border-radius | `var(--radius-card-inner)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .card-media border-radius | `calc(var(--radius-card) - 1px) calc(var(--radius-card) - 1px) 0 0` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .card-meta .meta-folder border-radius | `var(--radius-chip)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .card-open:after border-radius | `var(--radius-card)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .card.drop-target outline-offset | `var(--focus-offset)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .card:has(.card-open:focus-visible) outline-offset | `var(--focus-offset)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .card border-radius | `var(--radius-card)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .editor-grabber:before border-radius | `var(--radius-full)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .empty-state border-radius | `var(--radius-lg)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .flashcard border-radius | `var(--radius-lg)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .float-bar button border-radius | `var(--radius-control)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .float-bar border-radius | `var(--radius-island)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .folder-dot border-radius | `var(--radius-round)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .icon-btn.has-dot:after border-radius | `var(--radius-round)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .icon-btn border-radius | `var(--radius-control)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .info-pill border-radius | `var(--radius-tap)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .inline-form button border-radius | `var(--radius-tap-lg)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .inline-form input border-radius | `var(--radius-tap-lg)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .is-searching .create-island border-width | `0` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .island.toolbar border-radius | `calc(var(--radius-toolbar-btn) + var(--space-island))` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .island border-radius | `var(--radius-island)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .media-count border-radius | `var(--radius-chip)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .menu-option border-radius | `var(--radius-row)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .meta-chip border-radius | `var(--radius-chip)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .note-list:not(.cards) .card --space-card-y | `var(--space-3)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .note-list:not(.cards) .card border-radius | `calc(var(--space-card-y) + var(--radius-card-inner) + 1px)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .notice border-radius | `var(--radius-md)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .overview-photo border-radius | `var(--radius-md)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .player-btn border-radius | `var(--radius-tap-sm)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .player-play border-radius | `var(--radius-tap)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .popover,.menu border-radius | `var(--radius-popover)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .progress-fill border-radius | `inherit` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .progress-track border-radius | `var(--radius-full)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .pull-hint border-radius | `var(--radius-tap)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .rec-dot border-radius | `var(--radius-round)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .row border-radius | `var(--radius-row)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .save-status i border-radius | `var(--radius-round)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .search-chip border-radius | `var(--radius-tap-sm)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | REMPLACÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .search-chip border-radius | `var(--radius-tap)` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .search-field input border-radius | `var(--radius-control)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .seek-range border-radius | `var(--radius-full)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .seek-thumb border-radius | `var(--radius-round)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .seek-track border-radius | `var(--radius-full)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .segmented button border-radius | `var(--radius-toolbar-btn)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .segmented border-radius | `calc(var(--radius-toolbar-btn) + var(--space-1))` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .study-btn border-radius | `var(--radius-tap-lg)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .swatch border-radius | `var(--radius-control)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .swipe-icon border-radius | `var(--radius-tap-sm)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .text-btn border-radius | `var(--radius-tap-sm)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | REMPLACÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .text-btn border-radius | `var(--radius-tap)` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .toast border-radius | `var(--radius-tap-lg)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .toolbar .icon-btn border-radius | `var(--radius-toolbar-btn)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| .wave i border-radius | `var(--radius-full)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .wave-play border-radius | `var(--radius-tap-sm)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :focus-visible outline-offset | `var(--focus-offset)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --border-thick | `2px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --edge-inset | `max(var(--space-screen), calc((100vw - var(--layout-max)) / 2 + var(--space-screen)))` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --focus-offset | `2px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --focus-ring | `3px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --h | `0%` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --line-clamp-card | `6` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --line-clamp-list | `1` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --offset-checkbox | `.2em` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --offset-icon-baseline | `-.125em` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --radius-card | `calc(var(--space-card) + var(--radius-card-inner) + 1px)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --radius-card-inner | `calc(var(--size-badge) / var(--radius-ratio))` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --radius-chip | `calc(var(--size-chip) / var(--radius-ratio))` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --radius-control | `calc(var(--size-dock-btn) / var(--radius-ratio))` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --radius-full | `999px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --radius-island | `calc(var(--radius-control) + var(--space-island))` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --radius-lg | `18px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --radius-md | `12px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --radius-popover | `calc(var(--radius-row) + var(--space-popover))` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --radius-ratio | `3` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --radius-round | `50%` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --radius-row | `calc(var(--size-row) / var(--radius-ratio))` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --radius-tap | `calc(var(--size-tap) / var(--radius-ratio))` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --radius-tap-lg | `calc(var(--size-tap-lg) / var(--radius-ratio))` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --radius-tap-sm | `calc(var(--size-tap-sm) / var(--radius-ratio))` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --radius-toolbar-btn | `var(--radius-tap-sm)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --scale-emphasis | `1.12` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --scale-press | `.98` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | REMPLACÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| :root --scale-press | `.97` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| :root --scale-press-btn | `.92` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-action-btn | `56px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-att-max-h | `30vh` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-badge | `24px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-checkbox | `18px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-chip | `22px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-dock-btn | `var(--size-tap-md)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-dock-clearance | `84px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-dot | `8px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-float-bar | `64px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-grabber-h | `5px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-grabber-w | `36px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-icon | `22px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-icon-sm | `18px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-icon-xs | `14px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-list-bottom | `184px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-masonry-row | `1px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-media-fallback | `96px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-play | `var(--size-tap-sm)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-popover-max-h | `calc(100dvh - var(--size-dock-clearance) - var(--space-6) - env(safe-area-inset-top,0px) - env(safe-area-inset-bottom,0px))` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-progress | `4px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-row | `52px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-sel-clearance | `92px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-sel-popover-max-h | `calc(100dvh - var(--size-sel-clearance) - var(--space-6) - env(safe-area-inset-top,0px) - env(safe-area-inset-bottom,0px))` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-tap | `44px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-tap-lg | `52px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-tap-md | `48px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-tap-sm | `40px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-thumb | `160px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-toolbar-btn | `var(--size-tap-sm)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | REMPLACÉ notes-v3@ea104c22 2026-10-15 | Notes PWA build notes-20261009101803 |
| :root --size-toolbar-btn | `var(--size-tap)` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| :root --size-wave | `32px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --size-wave-bar | `3px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --space-0-5 | `2px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --space-1 | `4px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --space-12 | `48px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --space-2 | `8px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --space-3 | `12px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --space-4 | `16px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --space-5 | `20px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --space-6 | `24px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --space-8 | `32px` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --space-card | `var(--space-4)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --space-edge | `var(--space-3)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --space-island | `var(--space-1)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --space-popover | `var(--space-2)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| :root --space-screen | `var(--space-4)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| mark border-radius | `var(--space-0-5)` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes PWA build notes-20261009101803 |
| .sheet.welcome border-radius | `var(--radius-lg)` | index.html (bundle) · @media (width>=48em) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .about-icon border-radius | `calc(var(--size-app-icon) / var(--radius-ratio))` | index.html (bundle) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .art-card b border-radius | `var(--radius-full)` | index.html (bundle) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .art-card i.art-check:before border-radius | `3px` | index.html (bundle) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .art-card i.art-wave border-radius | `0` | index.html (bundle) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .art-card i border-radius | `var(--radius-full)` | index.html (bundle) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .art-card border-radius | `var(--radius-md)` | index.html (bundle) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .art-plus border-radius | `var(--radius-control)` | index.html (bundle) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .changelog summary:after border-width | `0 2px 2px 0` | index.html (bundle) | notes-v3@637a0265 2026-10-09 | SUPPRIMÉ notes-v3@b99f70fc 2026-10-09 | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .format-strip .icon-btn border-radius | `var(--radius-toolbar-btn)` | index.html (bundle) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .md-hl border-radius | `var(--space-0-5)` | index.html (bundle) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .rounded border-radius | `.25rem` | index.html (bundle) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .tour-bubble border-radius | `var(--radius-popover)` | index.html (bundle) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .tour-spot border-radius | `calc(var(--radius-island) + var(--space-2))` | index.html (bundle) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .welcome-dots i border-radius | `var(--radius-full)` | index.html (bundle) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| :root --size-app-icon | `64px` | index.html (bundle) | notes-v3@637a0265 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.1.0: mise en forme dans l'éditeur, accueil, visite … |
| .change-count border-radius | `var(--radius-full)` | index.html (bundle) | notes-v3@b99f70fc 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.2.0: Quoi de neuf, journal des modifications en fri… |
| .change-group li:before border-radius | `var(--radius-round)` | index.html (bundle) | notes-v3@b99f70fc 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.2.0: Quoi de neuf, journal des modifications en fri… |
| .change-group border-radius | `var(--radius-lg)` | index.html (bundle) | notes-v3@b99f70fc 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.2.0: Quoi de neuf, journal des modifications en fri… |
| .change-icon border-radius | `var(--radius-tap-sm)` | index.html (bundle) | notes-v3@b99f70fc 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.2.0: Quoi de neuf, journal des modifications en fri… |
| .change-pill border-radius | `var(--radius-tap-sm)` | index.html (bundle) | notes-v3@b99f70fc 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.2.0: Quoi de neuf, journal des modifications en fri… |
| .news-summary border-radius | `var(--radius-lg)` | index.html (bundle) | notes-v3@b99f70fc 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.2.0: Quoi de neuf, journal des modifications en fri… |
| .release summary:after border-width | `0 2px 2px 0` | index.html (bundle) | notes-v3@b99f70fc 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.2.0: Quoi de neuf, journal des modifications en fri… |
| .release-badge border-radius | `var(--radius-chip)` | index.html (bundle) | notes-v3@b99f70fc 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.2.0: Quoi de neuf, journal des modifications en fri… |
| .release-node border-radius | `var(--radius-round)` | index.html (bundle) | notes-v3@b99f70fc 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.2.0: Quoi de neuf, journal des modifications en fri… |
| .version-pill border-radius | `var(--radius-full)` | index.html (bundle) | notes-v3@b99f70fc 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 2.2.0: Quoi de neuf, journal des modifications en fri… |
| .card-more border-radius | `var(--radius-card-inner)` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .create-tile border-radius | `var(--radius-row)` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .fab border-radius | `calc(var(--size-fab) / var(--radius-ratio))` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .icon-btn.ghost border-radius | `var(--radius-tap)` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .nav-tab border-radius | `var(--radius-control)` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .search-clear border-radius | `var(--radius-tap-sm)` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| .search-field border-radius | `var(--radius-tap)` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| :root --size-fab | `60px` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |
| :root --size-nav-tab | `52px` | index.html (bundle) | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15) | Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… |

## Lignée source Vite (src/styles/tokens.css, looks.css, app.css, 2026-10-18 à 2026-10-31)

271 valeurs distinctes (une ligne par valeur et par période).

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| .about-icon border-radius | `16px` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .action-btn border-radius | `var(--radius-pill)` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .action-btn border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .art-card b border-radius | `5px` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .art-card i.art-check::before border-radius | `4px` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .art-card i border-radius | `3px` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .art-card border-radius | `20px` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .art-card border-radius | `var(--radius-card)` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .art-plus border-radius | `50%` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .art-plus border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .att-remove border-radius | `50%` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .att-remove border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .att border-radius | `18px` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .att border-radius | `var(--radius-row)` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .back-chip border-radius | `var(--radius-pill)` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .back-chip border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .badge border-radius | `var(--radius-pill)` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@ef23bea4 2026-10-19 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .badge border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| .btn border-radius | `var(--radius-pill)` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .btn border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .card-check border-radius | `50%` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .card-check border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .card-media border-radius | `16px` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .card-media border-radius | `calc(var(--radius-card) - 6px)` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .card-more border-radius | `50%` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .card-more border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .card border-radius | `var(--radius-card)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .change-pill border-radius | `var(--radius-pill)` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .change-pill border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| .check-hit input border-radius | `6px` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .chip border-radius | `var(--radius-pill)` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .chip border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .dots i[data-on] border-radius | `4px` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .dots i border-radius | `50%` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@ef23bea4 2026-10-19 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .dots i border-radius | `calc(7px / var(--radius-ratio))` | app.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| .editor-grabber border-radius | `3px` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .fab border-radius | `50%` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .fab border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .flashcard border-radius | `26px` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .flashcard border-radius | `var(--radius-panel)` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .folder-tag::before border-radius | `50%` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@ef23bea4 2026-10-19 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .folder-tag::before border-radius | `calc(7px / var(--radius-ratio))` | app.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| .glass::before border-radius | `inherit` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .icon-btn.has-dot::after border-radius | `50%` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@ef23bea4 2026-10-19 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .icon-btn.has-dot::after border-radius | `calc(7px / var(--radius-ratio))` | app.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| .icon-btn border-radius | `var(--radius-pill)` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .icon-btn border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .inline-form button border-radius | `50%` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .inline-form button border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .inline-form input border-radius | `var(--radius-pill)` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .inline-form input border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .island border-radius | `var(--radius-pill)` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .island border-radius | `var(--radius-island)` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .layer, .sheet border-radius | `var(--radius-panel)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .map-canvas border-radius | `20px` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .map-canvas border-radius | `var(--radius-row)` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .md-hl border-radius | `3px` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .notice border-radius | `var(--radius-row)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .option[aria-pressed='true']::after border-width | `0 2.5px 2.5px 0` | app.css | notes-v3@4da62555 2026-10-18 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .option border-radius | `var(--radius-row)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .photo border-radius | `14px` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .photo border-radius | `calc(84px / var(--radius-ratio))` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .pill border-radius | `var(--radius-pill)` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .pill border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .player-btn border-radius | `var(--radius-pill)` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .player-btn border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .player-play border-radius | `50%` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .player-play border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .progress-fill border-radius | `inherit` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .progress-track border-radius | `3px` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .pull-hint border-radius | `var(--radius-pill)` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@ef23bea4 2026-10-19 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .pull-hint border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| .rec-dot border-radius | `50%` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@ef23bea4 2026-10-19 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .rec-dot border-radius | `calc(10px / var(--radius-ratio))` | app.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| .release-node border-radius | `50%` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@ef23bea4 2026-10-19 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .release-node border-radius | `calc(12px / var(--radius-ratio))` | app.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| .row border-radius | `var(--radius-row)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .save-status i border-radius | `50%` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@ef23bea4 2026-10-19 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .save-status i border-radius | `2px` | app.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| .search-clear border-radius | `50%` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .search-clear border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .seek::-moz-range-thumb border-radius | `50%` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@ef23bea4 2026-10-19 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .seek::-moz-range-thumb border-radius | `calc(16px / var(--radius-ratio))` | app.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| .seek::-moz-range-track border-radius | `3px` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .seek::-webkit-slider-runnable-track border-radius | `3px` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .seek::-webkit-slider-thumb border-radius | `50%` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@ef23bea4 2026-10-19 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .seek::-webkit-slider-thumb border-radius | `calc(16px / var(--radius-ratio))` | app.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| .segmented button border-radius | `var(--radius-pill)` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .segmented button border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .segmented border-radius | `var(--radius-pill)` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .segmented border-radius | `calc(40px / var(--radius-ratio) + 3px)` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .sel-count border-radius | `var(--radius-pill)` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .sel-count border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .stat border-radius | `var(--radius-pill)` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@ef23bea4 2026-10-19 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .stat border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| .study-missed li border-radius | `var(--radius-row)` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .swatch border-radius | `50%` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .swatch border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .swipe-icon border-radius | `50%` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .swipe-icon border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .tab-btn border-radius | `var(--radius-pill)` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .tab-btn border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .text-btn border-radius | `var(--radius-pill)` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .text-btn border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .tile border-radius | `20px` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .tile border-radius | `calc(84px / var(--radius-ratio))` | app.css | notes-v3@926abbd6 2026-10-18 | REMPLACÉ notes-v3@4a4da608 2026-10-18 | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .tile border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@4a4da608 2026-10-18 | HEAD | Notes 26.10.18.3 : barre unique + au pouce, créer en 3 choi… |
| .toast button border-radius | `var(--radius-pill)` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .toast button border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .toast border-radius | `var(--radius-pill)` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .toast border-radius | `calc(36px / var(--radius-ratio) + 6px)` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .tour-bubble border-radius | `24px` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .tour-bubble border-radius | `var(--radius-panel)` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .tour-spot border-radius | `26px` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .tour-spot border-radius | `var(--radius-island)` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .version-pill border-radius | `var(--radius-pill)` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@ef23bea4 2026-10-19 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .version-pill border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| .wave i border-radius | `2px` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .wave-play border-radius | `50%` | app.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .wave-play border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| :focus-visible outline-offset | `2px` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| mark border-radius | `3px` | app.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --dock-btn | `48px` | tokens.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@fe7ee2da 2026-10-29 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --dock-btn | `44px` | tokens.css | notes-v3@fe7ee2da 2026-10-29 | HEAD | measure contrast from tokens; theme-aware ink on fills and … |
| :root --edge | `12px` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --fab | `58px` | tokens.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@fe7ee2da 2026-10-29 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --fab | `calc(var(--dock-btn) + 2 * var(--space-1))` | tokens.css | notes-v3@fe7ee2da 2026-10-29 | HEAD | measure contrast from tokens; theme-aware ink on fills and … |
| :root --gutter | `16px` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --radius-card | `22px` | tokens.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --radius-card | `calc(var(--space-4) + 24px / var(--radius-ratio))` | tokens.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| :root --radius-chip | `12px` | tokens.css | notes-v3@4da62555 2026-10-18 | SUPPRIMÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --radius-panel | `30px` | tokens.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --radius-panel | `calc(var(--radius-row) + var(--space-2))` | tokens.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| :root --radius-pill | `999px` | tokens.css | notes-v3@4da62555 2026-10-18 | SUPPRIMÉ notes-v3@ef23bea4 2026-10-19 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --radius-row | `14px` | tokens.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --radius-row | `calc(48px / var(--radius-ratio))` | tokens.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| :root --radius-sm | `9px` | tokens.css | notes-v3@4da62555 2026-10-18 | SUPPRIMÉ notes-v3@926abbd6 2026-10-18 | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --space-1 | `4px` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --space-2 | `8px` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --space-3 | `12px` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --space-4 | `16px` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --space-5 | `20px` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --space-6 | `24px` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --space-8 | `32px` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| :root --tap | `44px` | tokens.css | notes-v3@4da62555 2026-10-18 | HEAD | Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide |
| .action-btn --h | `var(--dock-btn)` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .art-plus --h | `48px` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .att-remove --h | `32px` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .back-chip --h | `36px` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .btn --h | `50px` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .card-check --h | `24px` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .card-more --h | `32px` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .chip --h | `38px` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .fab --h | `var(--fab)` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .format-strip .icon-btn --h | `42px` | app.css | notes-v3@926abbd6 2026-10-18 | REMPLACÉ notes-v3@35c0380c 2026-10-21 | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .format-strip .icon-btn --h | `var(--dock-btn)` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .icon-btn --h | `var(--tap)` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .inline-form button --h | `46px` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .inline-form input --h | `46px` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .island .icon-btn --h | `var(--dock-btn)` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .pill --h | `34px` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .player-btn --h | `34px` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .player-play --h | `44px` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .search-clear --h | `36px` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .search-field --h | `var(--fab)` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .search-field border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .segmented button --h | `40px` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .swatch --h | `34px` | app.css | notes-v3@926abbd6 2026-10-18 | REMPLACÉ notes-v3@7986f74a 2026-10-28 | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .swatch --h | `36px` | app.css | notes-v3@7986f74a 2026-10-28 | HEAD | touch the folder chip and folder colours at 44px |
| .swipe-icon --h | `34px` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .tab-btn --h | `var(--dock-btn)` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .text-btn --h | `var(--tap)` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .toast button --h | `36px` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .toast --h | `48px` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .wave-play --h | `36px` | app.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| :root --radius-control | `calc(var(--dock-btn) / var(--radius-ratio))` | tokens.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| :root --radius-island | `calc(var(--radius-control) + var(--space-1))` | tokens.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| :root --radius-ratio | `3` | tokens.css | notes-v3@926abbd6 2026-10-18 | HEAD | Rayons au tiers, verre 24px/180 %, outil :: (carte à révise… |
| .widget --h | `124px` | app.css · @media (min-width: 40em) | notes-v3@801d11fb 2026-10-18 | SUPPRIMÉ notes-v3@4a4da608 2026-10-18 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .layer.lib-page border-radius | `0` | app.css | notes-v3@801d11fb 2026-10-18 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .lib-bubble border-radius | `12px` | app.css | notes-v3@801d11fb 2026-10-18 | SUPPRIMÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .lib-folder::before border-radius | `10px 10px 0 0` | app.css | notes-v3@801d11fb 2026-10-18 | HEAD | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .lib-folder --h | `96px` | app.css | notes-v3@801d11fb 2026-10-18 | HEAD | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .lib-folder border-radius | `calc(var(--h) / var(--radius-ratio) / 2) calc(var(--h) / var(--radius-ratio) / 2) calc(var(--h) / var(--radius-ratio) / 1.5) calc(var(--h) / var(--ra…` | app.css | notes-v3@801d11fb 2026-10-18 | HEAD | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .lib-rows border-radius | `var(--radius-panel)` | app.css | notes-v3@801d11fb 2026-10-18 | HEAD | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .lib-tag --h | `calc(32px + var(--weight) * 12px)` | app.css | notes-v3@801d11fb 2026-10-18 | HEAD | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .lib-tag border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@801d11fb 2026-10-18 | HEAD | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .lib-tiles.is-small .lib-tile --h | `64px` | app.css | notes-v3@801d11fb 2026-10-18 | HEAD | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .lib-tile --h | `104px` | app.css | notes-v3@801d11fb 2026-10-18 | HEAD | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .lib-tile border-radius | `calc(var(--h) / var(--radius-ratio) / 1.5)` | app.css | notes-v3@801d11fb 2026-10-18 | HEAD | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .seg-thumb border-radius | `calc(40px / var(--radius-ratio))` | app.css | notes-v3@801d11fb 2026-10-18 | REMPLACÉ notes-v3@ef23bea4 2026-10-19 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .seg-thumb border-radius | `calc(var(--th) / var(--radius-ratio))` | app.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| .switch i border-radius | `50%` | app.css | notes-v3@801d11fb 2026-10-18 | REMPLACÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .switch i border-radius | `calc(var(--k) / var(--radius-ratio))` | app.css | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| .switch border-radius | `16px` | app.css | notes-v3@801d11fb 2026-10-18 | REMPLACÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .switch border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| .widget --h | `112px` | app.css | notes-v3@801d11fb 2026-10-18 | REMPLACÉ notes-v3@4a4da608 2026-10-18 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .widget --h | `82px` | app.css | notes-v3@4a4da608 2026-10-18 | REMPLACÉ notes-v3@35c0380c 2026-10-21 | Notes 26.10.18.3 : barre unique + au pouce, créer en 3 choi… |
| .widget --h | `60px` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .widget border-radius | `calc(var(--h) / var(--radius-ratio) / 2 + 8px)` | app.css | notes-v3@801d11fb 2026-10-18 | REMPLACÉ notes-v3@4a4da608 2026-10-18 | Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… |
| .widget border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@4a4da608 2026-10-18 | HEAD | Notes 26.10.18.3 : barre unique + au pouce, créer en 3 choi… |
| .header-tools .icon-btn --h | `40px` | app.css | notes-v3@4a4da608 2026-10-18 | HEAD | Notes 26.10.18.3 : barre unique + au pouce, créer en 3 choi… |
| .header-tools.island border-radius | `calc(40px / var(--radius-ratio) + 3px)` | app.css | notes-v3@4a4da608 2026-10-18 | HEAD | Notes 26.10.18.3 : barre unique + au pouce, créer en 3 choi… |
| .tile --h | `116px` | app.css | notes-v3@4a4da608 2026-10-18 | REMPLACÉ notes-v3@d6af8790 2026-10-19 | Notes 26.10.18.3 : barre unique + au pouce, créer en 3 choi… |
| .tile --h | `92px` | app.css | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| :is(.tab-btn, .row, .chip, .lib-tile, .lib-folder, .lib-tag, .swatch)[aria-pressed='true'], .tab-btn[aria-current='page'], .card.selected, .segmented [aria-checked='true'] outline-offset | `-3px` | app.css · @media (forced-colors: active) | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .card:has(.card-open:focus-visible) outline-offset | `2px` | app.css | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .folder-chip --h | `32px` | app.css | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .folder-chip border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .sheet:is([data-mode='study'], [data-mode='map']) border-radius | `0` | app.css | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| :root --edge-l | `calc(var(--edge) + var(--safe-l))` | tokens.css | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| :root --edge-r | `calc(var(--edge) + var(--safe-r))` | tokens.css | notes-v3@ba6e7b28 2026-10-19 | HEAD | Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… |
| .change-pill --h | `26px` | app.css | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| .state-mark --h | `22px` | app.css | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| .state-mark border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| .switch i --k | `27px` | app.css | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| .switch --h | `31px` | app.css | notes-v3@d6af8790 2026-10-19 | HEAD | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| :is(.option, .row)[aria-pressed='true']::after border-width | `0 2.5px 2.5px 0` | app.css | notes-v3@d6af8790 2026-10-19 | SUPPRIMÉ notes-v3@c3ec060f 2026-10-21 | Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… |
| #nav-island .seg-thumb --gap | `2px` | app.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| #nav-island .seg-thumb --pad | `var(--space-1)` | app.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| #nav-island .seg-thumb --th | `var(--dock-btn)` | app.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| .badge --h | `18px` | app.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| .pull-hint --h | `34px` | app.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| .seg-thumb --gap | `0px` | app.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| .seg-thumb --pad | `3px` | app.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| .seg-thumb --th | `40px` | app.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| .stat --h | `28px` | app.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| .version-pill --h | `30px` | app.css | notes-v3@ef23bea4 2026-10-19 | HEAD | Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… |
| .card-actions button --h | `32px` | app.css · @media (hover: hover) and (pointer: fine) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .card-actions button border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css · @media (hover: hover) and (pointer: fine) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .card-actions border-radius | `calc(32px / var(--radius-ratio) + 2px)` | app.css · @media (hover: hover) and (pointer: fine) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .sheet border-radius | `var(--radius-panel)` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .widget --h | `90px` | app.css · @media (min-width: 40em) and (min-height: 30em) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| :focus-visible outline-width | `3px` | app.css · @media (prefers-contrast: more) | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .first-action --h | `56px` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .first-action border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .first-use border-radius | `var(--radius-card)` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .list-heading.is-toggle --h | `var(--tap)` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .list-heading.is-toggle border-radius | `var(--radius-row)` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .sheet-grabber border-radius | `3px` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .sheet border-radius | `var(--radius-panel) var(--radius-panel) 0 0` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .starter --h | `48px` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .starter border-radius | `calc(var(--h) / var(--radius-ratio))` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .tour-actions .btn --h | `40px` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| body:not([data-tint='on']) .card[data-color]::before border-radius | `0 2px 2px 0` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| kbd, .kbd border-radius | `calc(22px / var(--radius-ratio))` | app.css | notes-v3@35c0380c 2026-10-21 | HEAD | Notes 26.10.21.1 : audit design appliqué — téléphone en une… |
| .layer-foot .btn --h | `44px` | app.css | notes-v3@c3ec060f 2026-10-21 | HEAD | Notes 26.10.21.2 : corrections de l'audit interactif (AUDIT… |
| .version-preview border-radius | `var(--radius-row)` | app.css | notes-v3@c3ec060f 2026-10-21 | SUPPRIMÉ notes-v3@0fa410ce 2026-10-29 | Notes 26.10.21.2 : corrections de l'audit interactif (AUDIT… |
| :is(.option, .row)[aria-pressed='true']::after, .option[role='radio'][aria-checked='true']::after border-width | `0 2.5px 2.5px 0` | app.css | notes-v3@c3ec060f 2026-10-21 | HEAD | Notes 26.10.21.2 : corrections de l'audit interactif (AUDIT… |
| .accent-dot border-radius | `50%` | looks.css | notes-v3@fbf13b31 2026-10-24 | REMPLACÉ notes-v3@fe7ee2da 2026-10-29 | Port V5 Style/Accent, harden import equality, fix multi-att… |
| .accent-dot border-radius | `calc(var(--h) / var(--radius-ratio))` | looks.css | notes-v3@fe7ee2da 2026-10-29 | HEAD | measure contrast from tokens; theme-aware ink on fills and … |
| :root[data-look='paper'] --radius-ratio | `4.8` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| .tbl :is(th, td)[data-sel] outline-offset | `-3px` | app.css · @media (forced-colors: active) | notes-v3@9e7d5dd7 2026-10-29 | HEAD | add table editor, tools panel and Tableau button |
| .tbl-group border-radius | `var(--radius-control)` | app.css | notes-v3@9e7d5dd7 2026-10-29 | HEAD | add table editor, tools panel and Tableau button |
| .tbl-in border-radius | `0` | app.css | notes-v3@9e7d5dd7 2026-10-29 | HEAD | add table editor, tools panel and Tableau button |
| .tbl-tool border-radius | `calc(var(--radius-control) - 2px)` | app.css | notes-v3@9e7d5dd7 2026-10-29 | HEAD | add table editor, tools panel and Tableau button |
| .tbl-wrap border-radius | `var(--radius-control)` | app.css | notes-v3@9e7d5dd7 2026-10-29 | HEAD | add table editor, tools panel and Tableau button |
| #nav-island .seg-thumb --gap | `1px` | app.css · @media (max-width: 24em) | notes-v3@78e2a8a6 2026-10-29 | SUPPRIMÉ notes-v3@e30d2cdc 2026-10-29 | keep Bibliothèque whole in the dock at 360 px |
| #nav-island .seg-thumb --pad | `2px` | app.css · @media (max-width: 24em) | notes-v3@78e2a8a6 2026-10-29 | SUPPRIMÉ notes-v3@e30d2cdc 2026-10-29 | keep Bibliothèque whole in the dock at 360 px |
| .backup-code border-radius | `var(--radius-row)` | app.css | notes-v3@a5c92dad 2026-10-29 | HEAD | carry hidden notes in a backup, sealed by a code shown once |
| .tidy-actions .btn --h | `48px` | app.css | notes-v3@0fa410ce 2026-10-29 | HEAD | add Ranger sheet: merge or ignore near-duplicate notes |
| .version-preview, .tidy-pair border-radius | `var(--radius-row)` | app.css | notes-v3@0fa410ce 2026-10-29 | HEAD | add Ranger sheet: merge or ignore near-duplicate notes |
| .accent-dot --h | `12px` | looks.css | notes-v3@fe7ee2da 2026-10-29 | HEAD | measure contrast from tokens; theme-aware ink on fills and … |
| .main-dock #nav-island .seg-thumb --gap | `0px` | app.css · @media (max-width: 26em) | notes-v3@e30d2cdc 2026-10-29 | HEAD | polish editing, tables, cards and the 52px dock |
| .main-dock #nav-island .seg-thumb --pad | `2px` | app.css · @media (max-width: 26em) | notes-v3@e30d2cdc 2026-10-29 | HEAD | polish editing, tables, cards and the 52px dock |
| .main-dock --edge-l | `calc(10px + var(--safe-l))` | app.css · @media (max-width: 26em) | notes-v3@e30d2cdc 2026-10-29 | HEAD | polish editing, tables, cards and the 52px dock |
| .main-dock --edge-r | `calc(10px + var(--safe-r))` | app.css · @media (max-width: 26em) | notes-v3@e30d2cdc 2026-10-29 | HEAD | polish editing, tables, cards and the 52px dock |
| .task-group border-radius | `var(--radius-card)` | app.css | notes-v3@2c7478e4 2026-10-31 | HEAD | Tâches tab, search/filter/appearance in the top island |
| .settings-list border-radius | `var(--radius-card)` | app.css | notes-v3@47c570df 2026-10-31 | HEAD | Réglages as a page with a route per section (list on phone,… |
| .settings-tile border-radius | `8px` | app.css | notes-v3@47c570df 2026-10-31 | HEAD | Réglages as a page with a route per section (list on phone,… |
| .diff border-radius | `var(--radius-row)` | app.css | notes-v3@ce4f8459 2026-10-31 | HEAD | Sync: conflict resolution sheet (line diff, keep mine/their… |

## Règles de calcul et repères

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| Règle de rayon « hauteur ÷ 3 » (lignée notes-site) | `--radius-ratio:3`, `--radius-control:calc(var(--size-dock-btn)/var(--radius-ratio))`, `--radius-tap`, `--radius-chip`, `--radius-row`, `--radius-island = control + space-island`, `--radius-popover = row + space-popover` | index.html (bundle) | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site | ratio déjà présent au premier build |
| Capsules `--radius-pill:999px`, panel 30px, card 22px, row 14px, chip 12px, sm 9px | rayons fixes | tokens.css | notes-v3@4da62555 2026-10-18 | REMPLACÉ par la règle ÷3 notes-v3@926abbd6 2026-10-18 (« every radius = its box height ÷ 3 ; containers stay concentric ») | |
| Règle ÷3 dans la source | `--radius-ratio:3`, `border-radius:calc(var(--h)/var(--radius-ratio))`, container = rayon intérieur + padding | tokens.css, app.css | notes-v3@926abbd6 2026-10-18 | HEAD | |
| ÷3 étendue aux pastilles, points, versions | « Numéros de version, étiquettes et points suivent la règle ÷3 : plus aucune forme ronde » ; `--radius-pill` supprimé | app.css, tokens.css | notes-v3@ef23bea4 2026-10-19 | HEAD | |
| Point de dossier de la Carte des liens | cercle r=4 -> carré `rx=8/3` | Sheets.tsx | notes-v3@369fe07a 2026-10-19 | HEAD | |
| Style Papier | `--radius-ratio:4.8` (coins plus doux) | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | |
| Cible tactile | `--tap:44px` (source), `--size-tap:44px` (bundle) ; zone invisible `::after` à `max(100%, var(--tap))` pour les petits contrôles | tokens.css, app.css | notes-v3@4da62555 2026-10-18 | HEAD | notes-v3@662ac041 2026-10-28 |
| Barre du bas | `--dock-btn` 48px -> 44px, `--fab` 58px -> `calc(var(--dock-btn) + 2 * var(--space-1))` = 52px | tokens.css | notes-v3@fe7ee2da 2026-10-29 | HEAD | « barre du bas plus compacte : 52 px, boutons de 44 px, + au carré de la même hauteur » |
| Taille d'icône | bundle `--size-icon:22px` (18 et 14 en petit), trait 2px ; source `svg{width:22px;height:22px;stroke-width:1.75}` | CSS svg | notes-v3@b6647a04 2026-10-09 | HEAD | |
| Échelle d'espacement | `--space-1..8` = 4, 8, 12, 16, 20, 24, 32 px (bundle : + `--space-0-5:2px`, `--space-12:48px`) | tokens.css | notes-v3@b6647a04 2026-10-09 | HEAD | |
| Largeur de bordure | `.5px` (traits fins, cartes), `1px`, `--border-thick:2px` (bundle) ; focus `--focus-ring:3px` | CSS | notes-v3@b6647a04 2026-10-09 | voir tableau | |

