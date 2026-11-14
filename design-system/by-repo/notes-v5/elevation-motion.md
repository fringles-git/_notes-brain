Source : notes-v5, commits lus : 132, plage : 2026-10-21 à 2026-11-11

Ombres, flou, verre, saturation, opacités, échelle de z-index, durées, courbes, @keyframes, transitions, reduced-motion / reduced-transparency. Valeurs de `app.css` regroupées par valeur distincte.

## 1. Paliers d'opacité

Introduits par notes-v5@82aa90c2 2026-10-21 (« opacity: hex alpha suffixes → --alpha-faint/soft/medium/strong (6 / 10 / 20 / 40 %) »).

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| --alpha-faint | 6% | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --alpha-medium | 20% | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --alpha-soft | 10% | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --alpha-strong | 40% | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |

### opacity écrits dans app.css

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| opacity | .4 | app.css button:disabled | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| opacity | .5 | app.css .map-edges line | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| opacity | .55 | app.css .wave i | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| opacity | .7 | app.css .att-live:disabled | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| opacity | .8 | app.css .art-card i.art-wave | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| opacity | 0 | app.css .card-check svg; .card.is-leaving; .save-status[data-status='saved'] (+6) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| opacity | 1 | app.css .card.selected .card-check svg; .editor-status .save-status[data-status='saved']; .swatch[aria-pressed='true'] svg (+3) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| opacity | var(--pull, 0) | app.css .pull-hint | notes-v5@b1f17318 2026-10-21 | HEAD |  |

## 2. Ombres

### Jetons

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| --color-accent-glow | 0 0 transparent | looks.css :root[data-look='paper'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --color-accent-glow | none | looks.css :root[data-look='paper'] | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ 0 0 transparent) |  |
| --color-accent-glow | 0 8px 24px color-mix(in srgb, var(--color-accent) var(--alpha-strong), transparent) | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --color-accent-glow | 0 8px 24px light-dark(#f4c54270, #f4c54240) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ 0 8px 24px color-mix(in srgb, var(--color-accent) var(--alph) |  |
| --glass-shadow | inset 0 1px 0 light-dark(#ffffffe6, #ffffff2e), var(--shadow-2) | looks.css :root[data-look='glass'] | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| --glass-shadow | var(--shadow-1), var(--shadow-2) | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --glass-shadow | 0 1px 0 var(--color-line) | looks.css :root[data-look='paper'] | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| --glass-shadow | var(--shadow-1), var(--shadow-2) | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --glass-shadow | inset 0 1px 0 light-dark(#ffffffe6, #ffffff33), inset 0 -1px 0 light-dark(#ffffff59, #ffffff0d), 0 1px 2px light-dark(#1218300f, #0000004d), 0 10px 30px light-dark(#1218301f, #00000073) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--shadow-1), var(--shadow-2)) |  |
| --list-shadow | var(--shadow-1), var(--shadow-2) | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --list-shadow | var(--shadow-1) | tokens.css :root | notes-v5@712013c6 2026-11-10 | HEAD |  |
| --shadow-1 | 0 1px 2px light-dark(#1218300f, #0000004d) | looks.css :root | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --shadow-1 | 0 2px 4px light-dark(rgb(0 0 0 / 3%), rgb(0 0 0 / 18%)) | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --shadow-1 | 0 0 transparent | looks.css :root[data-look='paper'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --shadow-1 | 0 1px 2px light-dark(rgb(18 24 48 / 8%), rgb(0 0 0 / 30%)) | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --shadow-2 | 0 8px 24px light-dark(#12183014, #00000059) | looks.css :root | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --shadow-2 | 0 8px 24px light-dark(rgb(0 0 0 / 6%), rgb(0 0 0 / 24%)) | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --shadow-2 | 0 0 transparent | looks.css :root[data-look='paper'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --shadow-2 | 0 8px 24px light-dark(rgb(18 24 48 / 11%), rgb(0 0 0 / 35%)) | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --shadow-3 | 0 24px 60px light-dark(#1218301f, #00000073) | looks.css :root | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --shadow-3 | 0 24px 60px light-dark(rgb(0 0 0 / 12%), rgb(0 0 0 / 38%)) | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --shadow-3 | 0 12px 32px rgb(0 0 0 / var(--alpha-soft)) | looks.css :root[data-look='paper'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --shadow-3 | 0 24px 60px light-dark(rgb(18 24 48 / 14%), rgb(0 0 0 / 45%)) | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --shadow-fab | inset 0 0 0 1px var(--color-accent-stroke) | looks.css :root[data-look='paper'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --shadow-fab | inset 0 1px 0 rgb(255 255 255 / calc(100% - var(--alpha-strong))), inset 0 -2px 6px color-mix(in srgb, var(--color-accent-stroke) var(--alpha-strong), transparent), var(--color-accent-glow), var(--shadow-1) | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --shadow-knob | 0 0 0 1px var(--color-line-strong) | looks.css :root[data-look='paper'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --shadow-knob | var(--shadow-1), 0 0 0 .5px var(--color-line) | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |

### box-shadow écrits dans app.css

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| box-shadow | 0 0 0 200vmax var(--color-scrim) | app.css .tour-spot | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| box-shadow | 0 0 0 2px var(--color-accent) | app.css .card.drop-target | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| box-shadow | 0 0 0 2px var(--color-card-solid), 0 0 0 4px var(--folder-dot) | app.css .swatch[aria-pressed='true'] | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ 0 0 0 2px var(--color-card), 0 0 0 4px var(--folde) |  |
| box-shadow | 0 0 0 2px var(--color-select) | app.css .card.is-open | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| box-shadow | 0 0 0 2px var(--folder-dot, var(--tone-gray)) | app.css .lib-folder[aria-pressed='true'] | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ 0 0 0 2px var(--folder-dot, var(--folder-8))) |  |
| box-shadow | 0 0 0 2px var(--glass-strong) | app.css .icon-btn.has-dot::after | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| box-shadow | 0 0 0 3px var(--color-fill-strong) | app.css .inline-form input:focus | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| box-shadow | 0 1px 3px #0002, inset 0 1px 0 #fff5 | app.css .seg-thumb | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--shadow-1)) |  |
| box-shadow | 0 1px 4px #0005 | app.css .seek::-moz-range-thumb; .seek::-webkit-slider-thumb | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--shadow-knob)) |  |
| box-shadow | 0 2px 6px #0003 | app.css .switch i | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--shadow-knob)) |  |
| box-shadow | 0 4px 14px #0002 | app.css .about-icon | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--shadow-2)) |  |
| box-shadow | inset 0 0 0 1.5px var(--color-select) | app.css .chip[aria-pressed='true']; .ctl[aria-pressed='true']:not(.is-stack, .swatch); .lib-tag[aria-pressed='true'] (+1) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| box-shadow | inset 0 0 0 1.5px var(--tone-ink) | app.css .chip[data-tone][aria-pressed='true']; .lib-tile[aria-pressed='true'] | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@6840b25e 2026-10-22 (→ inset 0 0 0 1.5px var(--color-select)) |  |
| box-shadow | inset 0 0 0 1px var(--color-line-strong) | app.css @media (hover: hover) and (pointer: fine) :where(.tile, .lib-tile, .li | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| box-shadow | inset 0 0 0 2px var(--color-select) | app.css .card.selected | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| box-shadow | inset 0 0 0 2px var(--tone-ink) | app.css .layer[data-mode='create'] .tile.is-armed | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@6840b25e 2026-10-22 (→ inset 0 0 0 2px var(--tone-ink, var(--color-text))) |  |
| box-shadow | inset 0 1px 0 #fff9, inset 0 -2px 6px #c8950a55, var(--color-accent-glow), 0 2px 6px #0002 | app.css .fab | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--shadow-fab)) |  |
| box-shadow | var(--color-accent-glow) | app.css .art-plus | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| box-shadow | var(--glass-shadow) | app.css .card.dragging; .fab.is-quiet; .glass (+2) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| box-shadow | 0 0 0 2px var(--color-card), 0 0 0 4px var(--folder-dot) | app.css .swatch[aria-pressed='true'] | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| box-shadow | 0 0 0 2px var(--folder-dot, var(--folder-8)) | app.css .lib-folder[aria-pressed='true'] | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| box-shadow | var(--shadow-1) | app.css .card; .seg-thumb; :root[data-look='minimal'] .widget:not(:has(img)) | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| box-shadow | var(--shadow-2) | app.css .about-icon | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| box-shadow | var(--shadow-fab) | app.css .fab | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| box-shadow | var(--shadow-knob) | app.css .seek::-moz-range-thumb; .seek::-webkit-slider-thumb; .switch i | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| box-shadow | inset 0 0 0 1px var(--color-line) | app.css .accent-dot | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| box-shadow | var(--shadow-3) | app.css .sheet.glass | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| box-shadow | inset 0 0 0 2px var(--tone-ink, var(--color-text)) | app.css .layer[data-mode='create'] .tile.is-armed | notes-v5@6840b25e 2026-10-22 | HEAD |  |
| box-shadow | 0 0 0 2px var(--glass-strong) | app.css .ctl.has-dot::after | notes-v5@2466c955 2026-10-24 | HEAD |  |
| box-shadow | inset 0 0 0 1px var(--color-line-strong) | app.css @media (hover: hover) and (pointer: fine) .ctl:is(.is-fill-strong, .is; @media (hover: hover) and (pointer: fine) :where(.tile, .lib-tile, .li | notes-v5@2466c955 2026-10-24 | HEAD |  |
| box-shadow | none | app.css .editor .editor-dock .island.glass; @media (min-width: 48em) and (min-height: 30em) .main-dock #nav-island | notes-v5@f1b51602 2026-11-08 | HEAD |  |
| box-shadow | var(--list-shadow) | app.css :root[data-look='minimal'] .card; :root[data-look='minimal'] :is(.main-dock .island, .editor-dock .islan | notes-v5@bb3fa23d 2026-11-10 | HEAD |  |

## 3. Flou, verre, saturation, filtres

### Jetons

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| --glass-blur | blur(28px) saturate(180%) | looks.css :root, :root[data-look='glass'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --glass-blur | blur(28px) saturate(180%) | looks.css :root[data-look='glass'] | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| --glass-blur | none | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --glass-blur | none | looks.css :root[data-look='paper'] | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --glass-blur | none | looks.css @media (prefers-reduced-transparency: reduce) :root, :root[data-look] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --glass-blur | blur(24px) saturate(180%) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --glass-shine | none | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --glass-shine | none | looks.css :root[data-look='paper'] | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --glass-shine | linear-gradient(180deg, light-dark(#ffffffb3, #ffffff2e) 0%, #fff0 42%, #fff0 72%, light-dark(#ffffff40, #ffffff0f) 100%) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |

### backdrop-filter, filter, mask-image dans app.css et looks.css

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| -webkit-backdrop-filter | blur(14px) saturate(140%) | app.css .scrim | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| -webkit-backdrop-filter | blur(8px) | app.css .att-remove | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| -webkit-backdrop-filter | none | app.css .editor .editor-dock .island.glass; .scrim[data-light]; @media (min-width: 48em) and (min-height: 30em) .main-dock #nav-island (+7) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| -webkit-backdrop-filter | var(--glass-blur) | app.css .fab.is-quiet; .glass | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| backdrop-filter | blur(14px) saturate(140%) | app.css .scrim | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| backdrop-filter | blur(8px) | app.css .att-remove | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| backdrop-filter | none | app.css .editor .editor-dock .island.glass; .scrim[data-light]; @media (min-width: 48em) and (min-height: 30em) .main-dock #nav-island (+7) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| backdrop-filter | var(--glass-blur) | app.css .fab.is-quiet; .glass | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| filter | brightness(1.06) | app.css @media (hover: hover) and (pointer: fine) :where(.fab, .btn.primary, . | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| filter | brightness(1.06) | app.css @media (hover: hover) and (pointer: fine) .ctl:is(.is-ink, .is-accent, | notes-v5@2466c955 2026-10-24 | HEAD |  |

## 4. Échelle de z-index

Commit `82aa90c2` : « 26 z-index numbers → named layers: base, raised, dock, editor, sheet, popover, toast, modal ». Message de design-teardown : « Menus now sit above any sheet ».

### Jetons

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| --z-base | 0 | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --z-dock | 20 | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --z-editor | 30 | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --z-modal | 70 | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --z-popover | 44 | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --z-raised | 1 | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --z-sheet | 40 | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --z-toast | 60 | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |

### z-index écrits dans app.css

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| z-index | -1 | app.css .ambient; .glass::before | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ calc(var(--z-base) - 1)) |  |
| z-index | -2 | app.css .widget img | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ calc(var(--z-base) - 1)) |  |
| z-index | 1 | app.css #nav-island .tab-btn; .art-card:nth-child(2); .card-body .check, .card-body .check-hit (+7) | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--z-raised)) |  |
| z-index | 2 | app.css .art-plus; .card.swiping; @media (hover: hover) and (pointer: fine) .card-actions | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ calc(var(--z-raised) + 1)) |  |
| z-index | 20 | app.css .dock | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--z-dock)) |  |
| z-index | 21 | app.css .rec-bar | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ calc(var(--z-dock) + 1)) |  |
| z-index | 30 | app.css .editor | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--z-editor)) |  |
| z-index | 40 | app.css .scrim | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--z-sheet)) |  |
| z-index | 41 | app.css .layer, .sheet | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ calc(var(--z-sheet) + 1)) |  |
| z-index | 42 | app.css body.layer-open .dock | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ calc(var(--z-sheet) + 2)) |  |
| z-index | 43 | app.css .sheet:is([data-mode='study'], [data-mode='map']) | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ calc(var(--z-sheet) + 3)) |  |
| z-index | 5 | app.css .card.dragging | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ calc(var(--z-raised) + 2)) |  |
| z-index | 60 | app.css .toast | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--z-toast)) |  |
| z-index | 70 | app.css .tour | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--z-modal)) |  |
| z-index | calc(var(--z-base) - 1) | app.css .ambient; .glass::before; .widget img | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| z-index | calc(var(--z-dock) + 1) | app.css .rec-bar | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| z-index | calc(var(--z-raised) + 1) | app.css .art-plus; .card.swiping; @media (hover: hover) and (pointer: fine) .card-actions | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| z-index | calc(var(--z-raised) + 2) | app.css .card.dragging | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| z-index | calc(var(--z-sheet) + 1) | app.css .layer, .sheet | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| z-index | calc(var(--z-sheet) + 2) | app.css body.layer-open .dock | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| z-index | calc(var(--z-sheet) + 3) | app.css .sheet:is([data-mode='study'], [data-mode='map']) | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| z-index | var(--z-dock) | app.css .dock; @media (max-width: 47.99em), (max-height: 29.99em) body:has(.layer[dat | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| z-index | var(--z-editor) | app.css .editor | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| z-index | var(--z-modal) | app.css .tour | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| z-index | var(--z-popover) | app.css .layer | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| z-index | var(--z-raised) | app.css #nav-island .tab-btn; .art-card:nth-child(2); .card-body .check, .card-body .check-hit (+7) | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| z-index | var(--z-sheet) | app.css .scrim | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| z-index | var(--z-toast) | app.css .storage-alert; .toast | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| z-index | calc(var(--z-editor) + var(--z-raised)) | app.css body.is-editing .main-dock | notes-v5@32e9bd9e 2026-11-08 | HEAD |  |

## 5. Durées, courbes, appui

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| --base | 240ms | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --base | 1ms | tokens.css @media (prefers-reduced-motion: reduce) :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --ease | cubic-bezier(.32, .72, 0, 1) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --ease-out | cubic-bezier(.2, .8, .2, 1) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --fast | 140ms | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --fast | 1ms | tokens.css @media (prefers-reduced-motion: reduce) :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --press | .97 | looks.css :root | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --press | .97 | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --press | 1 | tokens.css @media (prefers-reduced-motion: reduce) :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --slow | 380ms | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --slow | 1ms | tokens.css @media (prefers-reduced-motion: reduce) :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |

### transition dans app.css

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| transition | all var(--base) var(--ease) | app.css .tour-spot | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| transition | background-color var(--base) var(--ease) | app.css .switch | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| transition | background-color var(--fast) var(--ease), color var(--fast) var(--ease), box-shadow var(--base) var(--ease), transform var(--fast) | app.css :where(.icon-btn, .tab-btn, .action-btn, .fab, .chip, .pill, .tile, .l | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| transition | background-color var(--fast), border-color var(--fast) | app.css .check-hit input | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| transition | background-color var(--fast), color var(--fast) | app.css .segmented button | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| transition | none | app.css .card.dragging; .card.swiping; .editor.dragging (+2) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| transition | opacity 180ms, transform 180ms var(--ease) | app.css .card.is-leaving | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| transition | opacity var(--base) var(--ease), translate var(--base) var(--ease), right var(--slow) var(--ease), left var(--slow) var(--ease) | app.css @media (min-width: 40em) and (min-height: 30em) .dock | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| transition | opacity var(--base) var(--ease), translate var(--base) var(--ease), visibility 0s | app.css .dock, .editor-dock | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| transition | opacity var(--fast) var(--ease), translate var(--base) var(--ease), visibility 0s linear var(--base) | app.css body.sheet-open .dock | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| transition | opacity var(--fast) var(--ease), translate var(--fast) var(--ease) | app.css @media (hover: hover) and (pointer: fine) .card-actions | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| transition | opacity var(--slow) var(--ease) 1.4s | app.css .save-status | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| transition | right var(--slow) var(--ease), left var(--slow) var(--ease) | app.css @media (min-width: 40em) and (min-height: 30em) body.sheet-open .dock | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| transition | rotate var(--base) var(--ease) | app.css .fab svg; .list-heading.is-toggle .chevron | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| transition | transform 180ms var(--ease) | app.css .card.swipe-release | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| transition | transform var(--base) var(--ease) | app.css html:not(.is-pulling) .page | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| transition | transform var(--fast) var(--ease) | app.css .swipe-icon | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| transition | transform var(--slow) var(--ease), opacity var(--base) var(--ease) | app.css .seg-thumb | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| transition | transform var(--slow) var(--ease), visibility 0s linear var(--slow) | app.css .editor | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| transition | transform var(--slow) var(--ease), visibility 0s, padding var(--base) var(--ease) | app.css .editor.open | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| transition | transform var(--slow) var(--ease), width var(--fast) var(--ease), color var(--base) | app.css .switch i | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| transition | translate var(--base) var(--ease) | app.css .sheet.drag-release | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| transition | width var(--base) var(--ease) | app.css .dots i; .progress-fill | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| transition | left var(--slow) var(--ease), width var(--slow) var(--ease), opacity var(--base) var(--ease) | app.css #nav-island .seg-thumb | notes-v5@ad232dfb 2026-10-21 | SUPPRIMÉ notes-v5@32e9bd9e 2026-11-08 |  |
| transition | background-color var(--fast) var(--ease), color var(--fast) var(--ease), box-shadow var(--base) var(--ease), transform var(--fast) | app.css .ctl | notes-v5@2466c955 2026-10-24 | HEAD |  |
| transition | background-color var(--fast) var(--ease), color var(--fast) var(--ease), box-shadow var(--base) var(--ease), transform var(--fast) | app.css :where(.tile, .lib-tile, .lib-folder, .lib-tag, .widget, .card, .row,  | notes-v5@2466c955 2026-10-24 | HEAD |  |
| transition | none !important | app.css :root[data-reduced-motion='true'] *, :root[data-reduced-motion='true'] | notes-v5@1c1fb148 2026-11-11 | HEAD |  |

### animation dans app.css

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| animation | blink 1s steps(2) infinite | app.css .rec-dot | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| animation | card-in var(--base) var(--ease-out) both | app.css .card; .starters | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ card-in var(--base) var(--ease) both) |  |
| animation | card-in var(--slow) var(--ease-out) both | app.css .widget | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ card-in var(--slow) var(--ease) both) |  |
| animation | drift 40s ease-in-out infinite alternate | app.css .ambient | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| animation | drop var(--base) var(--ease) both | app.css .toast | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| animation | fade var(--base) both | app.css .flashcard-a; .scrim | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| animation | fade var(--base) reverse both | app.css .scrim[data-closing] | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| animation | grow var(--base) var(--ease) both | app.css .format-strip; .search-field | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| animation | none | app.css @media (prefers-reduced-motion: reduce) .ambient, .icon-btn.is-recordi | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| animation | nudge var(--slow) var(--ease) | app.css .tab-btn:is([aria-pressed='true'], [aria-current='page']) svg | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| animation | pop var(--base) var(--ease) | app.css .check-hit input:checked; .chip[aria-pressed='true']; :is(.chips, .search-chips) .ctl[aria-pressed='true'] | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| animation | pop var(--base) var(--ease) both | app.css :is(.option, .row)[aria-pressed='true']::after | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| animation | pulse 1.4s ease-in-out infinite | app.css .icon-btn.is-recording | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| animation | rise var(--base) var(--ease) both | app.css .dock; .rec-bar | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| animation | sheet-in var(--base) var(--ease) both | app.css .tour-bubble | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| animation | sheet-in var(--slow) var(--ease) both | app.css .layer, .sheet | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| animation | sheet-out var(--base) var(--ease) both | app.css .layer[data-closing], .sheet[data-closing] | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| animation | card-in var(--base) var(--ease) both | app.css .card; .starters | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| animation | card-in var(--slow) var(--ease) both | app.css .widget | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| animation | none | app.css @media (prefers-reduced-motion: reduce) .ambient, .rec-dot; @media (prefers-reduced-motion: reduce) :root[data-look='minimal'] .ca | notes-v5@2466c955 2026-10-24 | HEAD |  |
| animation | none !important | app.css :root[data-reduced-motion='true'] *, :root[data-reduced-motion='true'] | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| animation-duration | var(--base) | app.css .layer[data-anchored] | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| animation-name | drawer-in | app.css @media (min-width: 40em) and (min-height: 30em) :is(.layer, .sheet)[da | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| animation-name | pop-in | app.css .layer[data-anchored] | notes-v5@b1f17318 2026-10-21 | HEAD |  |

### scale / transform d'appui

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| scale | var(--press) | app.css looks::is(button, .card):active | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |

## 6. @keyframes

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| @keyframes blink | 50% { opacity: .25; } | app.css | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| @keyframes card-in | from { opacity: 0; transform: translateY(6px) scale(.985); } | app.css | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| @keyframes drawer-in | from { opacity: 0; transform: translateX(var(--drawer-from, 24px)); } | app.css | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| @keyframes drift | to { transform: translate3d(2vmax, -3vmax, 0) rotate(6deg); } | app.css | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| @keyframes drop | from { opacity: 0; transform: translateY(-14px) scale(.98); } | app.css | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| @keyframes fade | from { opacity: 0; } | app.css | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| @keyframes grow | from { transform: scaleX(.3); opacity: 0; } | app.css | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| @keyframes nudge | 40% { transform: scale(1.14); } | app.css | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| @keyframes pop | from { transform: scale(.3); opacity: 0; } 60% { transform: scale(1.15); } | app.css | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| @keyframes pop-in | from { opacity: 0; transform: scale(.9); } | app.css | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| @keyframes pulse | 50% { box-shadow: 0 0 0 8px light-dark(#d7001520, #ff696126); } | app.css | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ 50% { box-shadow: 0 0 0 8px var(--color-danger-tint); }) |  |
| @keyframes pulse | 50% { box-shadow: 0 0 0 8px var(--color-danger-tint); } | app.css | notes-v5@82aa90c2 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| @keyframes rise | from { opacity: 0; transform: translateY(14px) scale(.98); } | app.css | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| @keyframes sheet-in | from { opacity: 0; transform: translateY(24px) scale(.94); } | app.css | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| @keyframes sheet-out | to { opacity: 0; transform: translateY(18px) scale(.96); } | app.css | notes-v5@b1f17318 2026-10-21 | HEAD |  |

## 7. Préférences de l'appareil : mouvement, transparence, contraste (blocs @media)

| bloc | contenu | première apparition | dernier état |
|---|---|---|---|
| @media (forced-colors: active) | app.css (6 règles : .glass, .card, .chip, .tile, .lib-t {border}; .glass, .card, .ctl:is(.is-fill, .i {border}) | notes-v5@b1f17318 2026-10-21 | HEAD |
| @media (prefers-color-scheme: dark) | tokens.css (4 règles : :root[data-look][data-oled='true']: {--color-bg}; :root[data-look][data-oled='true']: {--color-editor}) | notes-v5@1c1fb148 2026-11-11 | HEAD |
| @media (prefers-contrast: more) | tokens.css (5 règles : :root {--color-line-strong}; :root {--color-line}) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ/REMPLACÉ notes-v5@ad232dfb 2026-10-21 |
| @media (prefers-contrast: more) | app.css (6 règles : .card, .widget, .lib-tile, .first-u {border}; :focus-visible {outline-width}) | notes-v5@b1f17318 2026-10-21 | HEAD |
| @media (prefers-contrast: more) | looks.css (7 règles : :root, :root[data-look] {--color-line-strong}; :root, :root[data-look] {--color-line}) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| @media (prefers-reduced-motion: reduce) | tokens.css (4 règles : :root {--base}; :root {--fast}) | notes-v5@b1f17318 2026-10-21 | HEAD |
| @media (prefers-reduced-motion: reduce) | app.css (3 règles : .ambient, .icon-btn.is-recording, . {animation}; .ambient, .rec-dot {animation}) | notes-v5@b1f17318 2026-10-21 | HEAD |
| @media (prefers-reduced-transparency: reduce) | app.css (11 règles : .editor {-webkit-backdrop-filter}; .editor {backdrop-filter}) | notes-v5@b1f17318 2026-10-21 | HEAD |
| @media (prefers-reduced-transparency: reduce) | looks.css (2 règles : :root, :root[data-look] {--glass-blur}; :root, :root[data-look] {--glass}) | notes-v5@ad232dfb 2026-10-21 | HEAD |

### Réglages de personnalisation qui remplacent l'appareil (data-attributs sur `<html>`)

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| Réduire les animations | `animation: none !important; transition: none !important; scroll-behavior: auto !important` | app.css `:root[data-reduced-motion='true']` | notes-v5@1c1fb148 2026-11-11 | HEAD | pref `reducedMotion` (Personnalisation) |
| Mouvement réduit de l'appareil | `--fast/--base/--slow: 1ms`, `--press: 1` | tokens.css `@media (prefers-reduced-motion: reduce)` | notes-v5@b1f17318 2026-10-21 (sans --press) ; --press ajouté notes-v5@82aa90c2 | HEAD | vérifié par docs/shots/verify.mjs : « 140/240/380ms → 1ms and the press scale → 1, both looks » (notes-v5@190af4b5) |
| Transparence réduite de l'appareil | `--glass: var(--glass-strong)`, `--glass-blur: none` | looks.css `@media (prefers-reduced-transparency: reduce)` | notes-v5@ad232dfb 2026-10-21 | HEAD | « high contrast, reduced transparency and short windows still win over either look » |
