Source : notes-v5, commits lus : 132, plage : 2026-10-21 à 2026-11-11

Rayons (valeur et règle de calcul), espacement, largeurs de bordure, tailles de contrôles et d'icônes. Les valeurs de `app.css` sont regroupées par valeur distincte (sélecteurs d'exemple, jusqu'à 3).

## 1. Rayons

Règle de calcul d'origine (tokens.css de notes-v5@b1f17318 2026-10-21) : « every radius = its box height ÷ 3 ; containers stay concentric (inner radius + padding) ». Depuis notes-v5@82aa90c2 2026-10-21 : `--radius-sm = --dock-btn ÷ --radius-ratio`, `--radius-island = --radius-sm + --space-1`, `--radius-panel = --radius-sm + --space-2` ; le ratio est 3 (Glass), 4,8 (Paper), 4 (Minimal). Règle concentrique écrite en notes-v5@31c3b88f 2026-11-10 : `R_inner = max(0, R_outer - padding)`.

### Jetons de rayon
| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| --list-icon-radius | calc(var(--list-radius) - var(--list-icon-padding)) | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --list-icon-radius | calc(var(--list-radius) - var(--list-icon-padding)) | tokens.css :root | notes-v5@712013c6 2026-11-10 | HEAD |  |
| --list-radius | 28px | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --list-radius | var(--radius-md) | tokens.css :root | notes-v5@712013c6 2026-11-10 | HEAD |  |
| --radius-card | 14px | looks.css :root[data-look='paper'] | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| --radius-card | calc(var(--space-4) + 24px / var(--radius-ratio)) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --radius-control | 12px | looks.css :root[data-look='paper'] | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| --radius-control | calc(var(--dock-btn) / var(--radius-ratio)) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --radius-dock | 999px | looks.css :root, :root[data-look='glass'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --radius-dock | calc(var(--radius-sm) + var(--space-1)) | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --radius-dock | var(--radius-island) | looks.css :root[data-look='paper'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --radius-dock | var(--radius-island) | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --radius-dock-btn | calc(var(--radius-dock) - var(--space-1)) | tokens.css :root | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --radius-island | 20px | looks.css :root[data-look='paper'] | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| --radius-island | calc(var(--radius-sm) + var(--space-1)) | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --radius-island | calc(var(--radius-control) + var(--space-1)) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ calc(var(--radius-sm) + var(--space-1))) |  |
| --radius-lg | 28px | looks.css :root, :root[data-look='glass'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --radius-lg | 32px | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --radius-lg | 20px | looks.css :root[data-look='paper'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --radius-lg | 24px | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --radius-md | 22px | looks.css :root, :root[data-look='glass'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --radius-md | 28px | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --radius-md | 14px | looks.css :root[data-look='paper'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --radius-md | 24px | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --radius-panel | 14px | looks.css :root[data-look='paper'] | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| --radius-panel | calc(var(--radius-sm) + var(--space-2)) | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --radius-panel | calc(var(--radius-row) + var(--space-2)) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ calc(var(--radius-sm) + var(--space-2))) |  |
| --radius-ratio | 4 | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --radius-ratio | 4.8 | looks.css :root[data-look='paper'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --radius-ratio | 3 | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --radius-row | 10px | looks.css :root[data-look='paper'] | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| --radius-row | calc(48px / var(--radius-ratio)) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --radius-sm | calc(var(--dock-btn) / var(--radius-ratio)) | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --radius-xs | 3px | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --settings-row-radius | 16px | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --settings-row-radius | var(--radius-sm) | tokens.css :root | notes-v5@712013c6 2026-11-10 | HEAD |  |

### border-radius écrits dans app.css

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| border-radius | 0 | app.css .editor .editor-dock .island; .sheet:is([data-mode='study'], [data-mode='map']) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| border-radius | 0 2px 2px 0 | app.css body:not([data-tint='on']) .card[data-color]::before | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ 0 var(--radius-xs) var(--radius-xs) 0) |  |
| border-radius | 10px 10px 0 0 | app.css .lib-folder::before | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ calc(var(--h) / var(--radius-ratio) / 2) calc(var() |  |
| border-radius | 16px | app.css .about-icon | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ calc(64px / var(--radius-ratio))) |  |
| border-radius | 2px | app.css .save-status i; .wave i | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ var(--radius-xs)) |  |
| border-radius | 3px | app.css .art-card i; .editor-grabber; .md-hl (+5) | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--radius-xs)) |  |
| border-radius | 4px | app.css .art-card i.art-check::before; .dots i[data-on] | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ var(--radius-xs)) |  |
| border-radius | 5px | app.css .art-card b | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ calc(9px / var(--radius-ratio))) |  |
| border-radius | 6px | app.css .check-hit input | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ calc(18px / var(--radius-ratio))) |  |
| border-radius | calc(10px / var(--radius-ratio)) | app.css .rec-dot | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| border-radius | calc(12px / var(--radius-ratio)) | app.css .release-node | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| border-radius | calc(16px / var(--radius-ratio)) | app.css .seek::-moz-range-thumb; .seek::-webkit-slider-thumb | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| border-radius | calc(22px / var(--radius-ratio)) | app.css kbd, .kbd | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| border-radius | calc(32px / var(--radius-ratio) + 2px) | app.css @media (hover: hover) and (pointer: fine) .card-actions | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@2466c955 2026-10-24 (→ calc(var(--ctl-s) / var(--radius-ratio) + 2px)) |  |
| border-radius | calc(36px / var(--radius-ratio) + 6px) | app.css .toast | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@2466c955 2026-10-24 (→ calc(var(--ctl-s) / var(--radius-ratio) + 7px)) |  |
| border-radius | calc(40px / var(--radius-ratio) + 3px) | app.css .header-tools.island; .segmented | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| border-radius | calc(7px / var(--radius-ratio)) | app.css .ctl.has-dot::after; .dots i; .folder-tag::before (+1) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| border-radius | calc(84px / var(--radius-ratio)) | app.css .photo | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| border-radius | calc(var(--h) / var(--radius-ratio) / 1.5) | app.css .lib-tile | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| border-radius | calc(var(--h) / var(--radius-ratio) / 2) calc(var(--h) / var(--radius-ratio) / 2) calc(var(--h) / var(--radius-ratio) /  | app.css .lib-folder | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| border-radius | calc(var(--h) / var(--radius-ratio)) | app.css .accent-dot; .action-btn; .art-plus (+38) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| border-radius | calc(var(--k) / var(--radius-ratio)) | app.css .switch i | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| border-radius | calc(var(--radius-card) - 6px) | app.css .card-media | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ calc(var(--radius-md) - 6px)) |  |
| border-radius | calc(var(--th) / var(--radius-ratio)) | app.css .seg-thumb | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| border-radius | inherit | app.css .glass::before; .progress-fill | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| border-radius | var(--radius-card) | app.css .art-card; .card; .first-use | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--radius-md)) |  |
| border-radius | var(--radius-island) | app.css .island; .tour-spot | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| border-radius | var(--radius-panel) | app.css .flashcard; .layer, .sheet; .lib-rows (+2) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| border-radius | var(--radius-panel) var(--radius-panel) 0 0 | app.css .sheet | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--radius-lg) var(--radius-lg) 0 0) |  |
| border-radius | var(--radius-row) | app.css .att; .list-heading.is-toggle; .map-canvas (+4) | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--radius-sm)) |  |
| border-radius | calc(var(--radius-md) - 6px) | app.css .card-media | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| border-radius | var(--radius-lg) | app.css @media (min-width: 40em) and (min-height: 30em) .sheet | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| border-radius | var(--radius-lg) var(--radius-lg) 0 0 | app.css .sheet; @media (max-width: 47.99em), (max-height: 29.99em) .layer[data-mode='c | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| border-radius | var(--radius-md) | app.css .art-card; .card; .first-use (+2) | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| border-radius | var(--radius-sm) | app.css .agenda-view select; .att; .conflict-diff (+22) | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| border-radius | var(--radius-xs) | app.css .art-card i; .calendar-dot; .dots i[data-on] (+9) | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| border-radius | var(--radius-dock) | app.css :is(.dock, .editor-dock) .island, .rec-bar | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| border-radius | var(--radius-dock-btn) | app.css .fab; :is(.dock, .editor-dock) .island .ctl, #nav-island .seg-thumb; :is(.dock, .editor-dock) .island :is(.icon-btn, .tab-btn, .action-btn) | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| border-radius | 0 var(--radius-xs) var(--radius-xs) 0 | app.css body:not([data-tint='on']) .card[data-color]::before | notes-v5@67979ff5 2026-10-21 | HEAD |  |
| border-radius | calc(11px / var(--radius-ratio)) | app.css .art-card i.art-check::before | notes-v5@67979ff5 2026-10-21 | HEAD |  |
| border-radius | calc(18px / var(--radius-ratio)) | app.css .check-hit input | notes-v5@67979ff5 2026-10-21 | HEAD |  |
| border-radius | calc(64px / var(--radius-ratio)) | app.css .about-icon | notes-v5@67979ff5 2026-10-21 | HEAD |  |
| border-radius | calc(9px / var(--radius-ratio)) | app.css .art-card b | notes-v5@67979ff5 2026-10-21 | HEAD |  |
| border-radius | calc(var(--h) / var(--radius-ratio) / 2) calc(var(--h) / var(--radius-ratio) / 2) 0 0 | app.css .lib-folder::before | notes-v5@67979ff5 2026-10-21 | HEAD |  |
| border-radius | calc(var(--ctl-s) / var(--radius-ratio) + 2px) | app.css @media (hover: hover) and (pointer: fine) .card-actions | notes-v5@2466c955 2026-10-24 | HEAD |  |
| border-radius | calc(var(--ctl-s) / var(--radius-ratio) + 7px) | app.css .toast | notes-v5@2466c955 2026-10-24 | HEAD |  |
| border-radius | calc(var(--tap) / var(--radius-ratio) + 3px) | app.css .header-tools.island | notes-v5@2466c955 2026-10-24 | HEAD |  |
| border-radius | calc(var(--list-radius) - var(--list-padding) / 2) | app.css :root[data-look='minimal'] .card-media | notes-v5@bb3fa23d 2026-11-10 | HEAD |  |
| border-radius | var(--list-icon-radius) | app.css :root[data-look='minimal'] .row > svg | notes-v5@bb3fa23d 2026-11-10 | SUPPRIMÉ notes-v5@7c2488c3 2026-11-11 |  |
| border-radius | var(--list-radius) | app.css :root[data-look='minimal'] .card | notes-v5@bb3fa23d 2026-11-10 | HEAD |  |
| border-radius | var(--settings-row-radius) | app.css :root[data-look='minimal'] .note-list.is-compact .card; :root[data-look='minimal'] .settings-layout .option, :root[data-look='; :root[data-look='minimal'] .sheet-section .option, :root[data-look='mi | notes-v5@bb3fa23d 2026-11-10 | HEAD |  |
| border-radius | var(--list-icon-radius) | app.css :root[data-look='minimal'] .settings-layout .row > svg | notes-v5@7c2488c3 2026-11-11 | HEAD |  |

## 2. Échelle d'espacement

Un dernier état à noter : `--space-4` vaut 20px dans v5 (« without renumbering the existing --space-* scale (--space-4 is 20px in v5) », docs/project-decisions-2026-11-10.md).

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| --dock-lift | 4px | looks.css :root, :root[data-look='glass'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --dock-lift | 4px | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --dock-lift | 0px | looks.css :root[data-look='paper'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --dock-lift | 0px | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --edge | var(--space-3) | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --edge | 12px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--space-3)) |  |
| --edge-l | calc(var(--edge) + var(--safe-l)) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --edge-r | calc(var(--edge) + var(--safe-r)) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --gutter | var(--space-4) | looks.css :root[data-look='paper'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --gutter | 20px | looks.css :root[data-look='paper'] | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ var(--space-4)) |  |
| --gutter | 16px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --list-gap | 16px | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --list-gap | 16px | tokens.css :root | notes-v5@712013c6 2026-11-10 | HEAD |  |
| --list-padding | 20px | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --list-padding | 16px | tokens.css :root | notes-v5@712013c6 2026-11-10 | HEAD |  |
| --list-space | 12px | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --list-space | 12px | tokens.css :root | notes-v5@712013c6 2026-11-10 | HEAD |  |
| --safe-bottom | max(env(safe-area-inset-bottom, 0px), var(--space-2)) | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --safe-bottom | max(env(safe-area-inset-bottom, 0px), 8px) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ max(env(safe-area-inset-bottom, 0px), var(--space-2))) |  |
| --safe-l | env(safe-area-inset-left, 0px) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --safe-r | env(safe-area-inset-right, 0px) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --safe-top | env(safe-area-inset-top, 0px) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --space-1 | 4px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --space-2 | 8px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --space-3 | 12px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --space-4 | 20px | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --space-4 | 16px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ 20px) |  |
| --space-5 | 32px | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --space-5 | 20px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ 32px) |  |
| --space-6 | 48px | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --space-6 | 24px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ 48px) |  |
| --space-8 | 32px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --workspace-gap | clamp(var(--space-3), 2vw, var(--space-5)) | tokens.css :root | notes-v5@1c1fb148 2026-11-11 | HEAD |  |

## 3. Largeurs de bordure et anneaux

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| --hairline | 1px | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --hairline | 1px | looks.css :root[data-look='paper'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --hairline | .5px | tokens.css :root | notes-v5@ad232dfb 2026-10-21 | HEAD |  |

### border et outline écrits dans app.css (largeurs)

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| border | .5px solid var(--color-line) | app.css .card; .first-use; .pill (+3) | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ var(--hairline) solid var(--color-line)) |  |
| border | .5px solid var(--glass-edge) | app.css .fab.is-quiet; .glass | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ var(--hairline) solid var(--glass-edge)) |  |
| border | 0 | app.css .editor .editor-dock .island.glass; .editor-text; .editor-title (+7) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| border | 1.5px solid var(--color-text-faint) | app.css .art-card i.art-check::before; .card-check; .check-hit input | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| border | 1px dashed var(--color-line-strong) | app.css .lib-folder.is-new | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| border | 1px solid CanvasText | app.css @media (forced-colors: active) .glass, .card, .chip, .tile, .lib-tile, | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| border | 1px solid var(--color-line) | app.css .inline-form input; .starter | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| border | 1px solid var(--color-line-strong) | app.css :root[data-borders='true'] :is(.card, .today-grid > section, .task-gro; @media (prefers-contrast: more) .card, .widget, .lib-tile, .first-use; @media (prefers-contrast: more) :is(.dock, .editor-dock) .island.glass (+2) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| border | 2px solid #fff | app.css .check-hit input:checked::after | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ 2px solid var(--color-on-strong)) |  |
| border | 2px solid var(--color-text-faint) | app.css .release-node | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| border | solid var(--color-select) | app.css :is(.option, .row)[aria-pressed='true']::after | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| border | var(--hairline) solid var(--color-line) | app.css .agenda-view select; .card; .ctl.is-line (+9) | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| border | var(--hairline) solid var(--glass-edge) | app.css .fab.is-quiet; .glass | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| border | 2px solid var(--color-on-strong) | app.css .check-hit input:checked::after | notes-v5@67979ff5 2026-10-21 | HEAD |  |
| border | 1px solid CanvasText | app.css @media (forced-colors: active) .glass, .card, .ctl:is(.is-fill, .is-fi | notes-v5@2466c955 2026-10-24 | HEAD |  |
| border | 1px solid var(--color-text-faint) | app.css .snapshot-tools input[type='text'], .snapshot-tools input:not([type]) | notes-v5@8ef0b652 2026-11-07 | HEAD |  |
| border | var(--hairline) solid var(--color-line-strong) | app.css .legacy-table :is(td, th); .note-properties :is(input, select); .personalization > label > input (+2) | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| border-bottom | .5px solid var(--glass-edge) | app.css @media (min-width: 40em) and (min-height: 30em) .sheet | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ var(--hairline) solid var(--glass-edge)) |  |
| border-bottom | 0 | app.css .sheet | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| border-bottom | var(--hairline) solid var(--glass-edge) | app.css @media (min-width: 40em) and (min-height: 30em) .sheet | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| border-bottom | 1px solid currentColor | app.css .storage-alert | notes-v5@e32924bc 2026-11-07 | HEAD |  |
| border-bottom | var(--hairline) solid var(--color-line) | app.css .task-row | notes-v5@32e9bd9e 2026-11-08 | HEAD |  |
| border-inline-start | .5px solid var(--color-line) | app.css @media (min-width: 64em) .editor | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ var(--hairline) solid var(--color-line)) |  |
| border-inline-start | var(--hairline) solid var(--color-line) | app.css @media (min-width: 64em) .editor | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| border-inline-start | 3px solid var(--color-line) | app.css .rich-editor .tiptap blockquote | notes-v5@32e9bd9e 2026-11-08 | HEAD |  |
| border-inline-start | 3px solid var(--color-danger) | app.css .conflict-diff [data-change='del'] | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| border-inline-start | 3px solid var(--color-success) | app.css .conflict-diff [data-change='add'] | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| border-top | .5px solid var(--color-line) | app.css .note-found; .sheet-foot | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ var(--hairline) solid var(--color-line)) |  |
| border-top | 0 | app.css .check-hit input:checked::after; .sheet[data-mode='study'] .sheet-foot | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| border-top | var(--hairline) solid var(--color-line) | app.css .editor .editor-dock; .note-found; .sheet-foot (+1) | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| border-width | 0 2.5px 2.5px 0 | app.css :is(.option, .row)[aria-pressed='true']::after | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| outline | 2.5px solid var(--color-focus) | app.css .card:has(.card-open:focus-visible); :focus-visible | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| outline | 3px solid Highlight | app.css @media (forced-colors: active) :is(.tab-btn, .row, .chip, .lib-tile, . | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| outline | none | app.css .card-open:focus-visible; .editor-text; .editor-title (+4) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| outline | 3px solid Highlight | app.css @media (forced-colors: active) :is(.ctl, .row, .lib-tile, .lib-folder, | notes-v5@2466c955 2026-10-24 | HEAD |  |
| outline | 2px solid var(--color-focus) | app.css .note-properties summary:focus-visible, .table-tools summary:focus-vis; .sketch-color-dot[aria-pressed='true'], .sketch-color-dot.is-selected | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| outline-offset | -3px | app.css @media (forced-colors: active) :is(.tab-btn, .row, .chip, .lib-tile, . | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| outline-offset | 2px | app.css .card:has(.card-open:focus-visible); .note-properties summary:focus-visible, .table-tools summary:focus-vis; .sketch-color-dot[aria-pressed='true'], .sketch-color-dot.is-selected (+1) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| outline-offset | -3px | app.css @media (forced-colors: active) :is(.ctl, .row, .lib-tile, .lib-folder, | notes-v5@2466c955 2026-10-24 | HEAD |  |

## 4. Tailles des contrôles (cibles tactiles, dock, FAB)

Chiffres cités par les commits : « 44px minimum touch targets (chips drawn at 38px and touched at 44px), 48px dock buttons, a 58px +, 16px inputs » (notes-v5@499ece81) ; `.ctl` : tailles 34 (touché à 44), 44, 48 (dock), 58 (+) (notes-v5@2466c955).

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| --ctl-s | 34px | tokens.css :root | notes-v5@2466c955 2026-10-24 | HEAD |  |
| --dock-btn | 48px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --fab | 58px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --layer-w | 380px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --layout-max | 1180px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --list-icon-padding | 12px | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --list-icon-padding | 12px | tokens.css :root | notes-v5@712013c6 2026-11-10 | HEAD |  |
| --list-icon-size | 56px | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --list-icon-size | 48px | tokens.css :root | notes-v5@712013c6 2026-11-10 | HEAD |  |
| --primary-height | 52px | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --primary-height | 52px | tokens.css :root | notes-v5@712013c6 2026-11-10 | HEAD |  |
| --settings-row-height | 56px | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --settings-row-height | 52px | tokens.css :root | notes-v5@712013c6 2026-11-10 | HEAD |  |
| --tap | 44px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |

### hauteurs et largeurs de contrôles dans app.css (--h, min-height, min-width, height, width sur .ctl, .fab, .tab-btn, .segmented, .chip, .island)

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| --h | 31px | app.css .switch | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --h | 32px | app.css .card-more | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| --h | 38px | app.css .chip | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| --h | 40px | app.css .header-tools .icon-btn; .segmented button | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@f1b51602 2026-11-08 (→ 44px) |  |
| --h | var(--dock-btn) | app.css .action-btn; .format-strip .icon-btn; .island .icon-btn (+1) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| --h | var(--fab) | app.css .ctl.is-xl; .fab; .search-field | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --h | var(--tap) | app.css .icon-btn | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| --h | var(--ctl-s) | app.css .ctl.is-s | notes-v5@2466c955 2026-10-24 | HEAD |  |
| --h | var(--dock-btn) | app.css .ctl.is-l | notes-v5@2466c955 2026-10-24 | HEAD |  |
| --h | var(--tap) | app.css .ctl | notes-v5@2466c955 2026-10-24 | HEAD |  |
| --h | 44px | app.css .segmented button | notes-v5@f1b51602 2026-11-08 | HEAD |  |
| --k | 27px | app.css .switch i | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| height | 1.45em | app.css .check-hit | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| height | 100% | app.css .search-field input | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| height | 16px | app.css .ctl.is-s svg; .switch svg | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| height | 17px | app.css .chip svg | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| height | 18px | app.css .card-more svg; .check-hit input; .segmented button svg (+1) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| height | 22px | app.css .fab.is-quiet svg; .tab-btn svg | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| height | 28px | app.css .fab svg | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| height | 5px | app.css .check-hit input:checked::after | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| height | 7px | app.css .icon-btn.has-dot::after | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| height | var(--h) | app.css .action-btn; .card-more; .fab (+4) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| height | var(--k) | app.css .switch i | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| height | 7px | app.css .ctl.has-dot::after | notes-v5@2466c955 2026-10-24 | HEAD |  |
| height | 52px | app.css @media (min-width: 48em) and (min-height: 30em) .main-dock #nav-island | notes-v5@f1b51602 2026-11-08 | HEAD |  |
| height | auto | app.css .capture-actions .ctl; .info-bar .ctl | notes-v5@f1b51602 2026-11-08 | HEAD |  |
| min-height | var(--h) | app.css .chip; .ctl; .segmented button | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| min-height | var(--tap) | app.css .info-bar .ctl | notes-v5@f1b51602 2026-11-08 | HEAD |  |
| min-height | var(--primary-height) | app.css .capture-actions .ctl; :root[data-look='minimal'] .ctl.is-ink | notes-v5@bb3fa23d 2026-11-10 | HEAD |  |
| min-width | 0 | app.css .action-btn; .calendar-grid .ctl; .capture-actions .ctl (+6) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| min-width | 68px | app.css .tab-btn | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| min-width | 88px | app.css @media (min-width: 40em) and (min-height: 30em) .main-dock .tab-btn | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| min-width | 40px | app.css .format-strip .ctl | notes-v5@2466c955 2026-10-24 | HEAD |  |
| min-width | 64px | app.css .player-row .ctl | notes-v5@2466c955 2026-10-24 | HEAD |  |
| min-width | var(--h) | app.css .ctl | notes-v5@2466c955 2026-10-24 | HEAD |  |
| min-width | 44px | app.css @media (max-width: 25em) .editor-head .ctl | notes-v5@32e9bd9e 2026-11-08 | SUPPRIMÉ notes-v5@f1b51602 2026-11-08 |  |
| min-width | 44px | app.css .editor .format-strip .ctl | notes-v5@f1b51602 2026-11-08 | HEAD |  |
| width | 16px | app.css .ctl.is-s svg; .switch svg | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| width | 17px | app.css .chip svg | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| width | 18px | app.css .card-more svg; .check-hit input; .segmented button svg (+1) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| width | 22px | app.css .check-hit; .fab.is-quiet svg; .tab-btn svg | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| width | 28px | app.css .fab svg | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| width | 33px | app.css .option:active .switch i | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| width | 51px | app.css .switch | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| width | 72px | app.css @media (min-width: 40em) and (min-height: 30em) .sel-bar .action-btn | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| width | 7px | app.css .icon-btn.has-dot::after | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| width | 9px | app.css .check-hit input:checked::after | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| width | auto | app.css .format-strip .icon-btn | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| width | var(--dock-btn) | app.css .sel-bar .action-btn | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| width | var(--h) | app.css .card-more; .fab; .icon-btn | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| width | var(--k) | app.css .switch i | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| width | 72px | app.css @media (min-width: 40em) and (min-height: 30em) .sel-bar .ctl | notes-v5@2466c955 2026-10-24 | HEAD |  |
| width | 7px | app.css .ctl.has-dot::after | notes-v5@2466c955 2026-10-24 | HEAD |  |
| width | auto | app.css .format-strip .ctl | notes-v5@2466c955 2026-10-24 | HEAD |  |
| width | var(--dock-btn) | app.css .sel-bar .ctl | notes-v5@2466c955 2026-10-24 | HEAD |  |
| width | var(--h) | app.css .ctl.is-icon | notes-v5@2466c955 2026-10-24 | HEAD |  |
| width | 100% | app.css .calendar-grid .ctl; @media (min-width: 48em) and (min-height: 30em) .main-dock #nav-island | notes-v5@32e9bd9e 2026-11-08 | HEAD |  |

## 5. Tailles d'icônes

Jeu d'icônes en ligne : viewBox 24×24, trait 1,75, bouts ronds (commentaire de `src/notes/ui/icons.tsx` : « 24×24, 1.75 stroke, round caps (stroke styles live in CSS) »). Voir icons.md pour la liste.

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| height | 13px | app.css .card-meta svg | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| height | 14px | app.css .change-pill svg; .count svg; .pill svg (+1) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| height | 15px | app.css .card-check svg; .folder-chip svg; .widget-label svg | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| height | 16px | app.css .att-remove svg; .ctl.is-s svg; .list-heading svg (+5) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| height | 17px | app.css .chip svg; @media (hover: hover) and (pointer: fine) .card-actions svg | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| height | 18px | app.css .back-chip svg; .card-more svg; .news-versions svg (+4) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| height | 22px | app.css .fab.is-quiet svg; .tab-btn svg; svg | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| height | 24px | app.css .lib-tile > svg | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| height | 26px | app.css .tile svg | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| height | 28px | app.css .fab svg | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| height | calc(var(--list-icon-size) - 2 * var(--list-icon-padding) - 4px) | app.css :root[data-look='minimal'] .row > svg | notes-v5@bb3fa23d 2026-11-10 | SUPPRIMÉ notes-v5@7c2488c3 2026-11-11 |  |
| height | calc(var(--list-icon-size) - 2 * var(--list-icon-padding) - 4px) | app.css :root[data-look='minimal'] .settings-layout .row > svg | notes-v5@7c2488c3 2026-11-11 | HEAD |  |
| height | var(--space-3) | app.css .local-caption svg | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| stroke-width | 1.75 | app.css svg | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| stroke-width | 2 | app.css .card-meta svg; .fab.is-quiet svg | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| stroke-width | 2.25 | app.css .fab svg; .state-mark svg | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| stroke-width | 2.5 | app.css .card-check svg; .swatch svg; .switch svg | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| width | 13px | app.css .card-meta svg | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| width | 14px | app.css .change-pill svg; .count svg; .pill svg (+1) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| width | 15px | app.css .card-check svg; .folder-chip svg; .widget-label svg | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| width | 16px | app.css .att-remove svg; .ctl.is-s svg; .list-heading svg (+5) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| width | 17px | app.css .chip svg; @media (hover: hover) and (pointer: fine) .card-actions svg | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| width | 18px | app.css .back-chip svg; .card-more svg; .news-versions svg (+4) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| width | 22px | app.css .fab.is-quiet svg; .tab-btn svg; svg | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| width | 24px | app.css .lib-tile > svg | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| width | 26px | app.css .tile svg | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| width | 28px | app.css .fab svg | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| width | calc(var(--list-icon-size) - 2 * var(--list-icon-padding) - 4px) | app.css :root[data-look='minimal'] .row > svg | notes-v5@bb3fa23d 2026-11-10 | SUPPRIMÉ notes-v5@7c2488c3 2026-11-11 |  |
| width | calc(var(--list-icon-size) - 2 * var(--list-icon-padding) - 4px) | app.css :root[data-look='minimal'] .settings-layout .row > svg | notes-v5@7c2488c3 2026-11-11 | HEAD |  |
| width | var(--space-3) | app.css .local-caption svg | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
