Source : notes-aistudio, commits lus : 7 (hors fusion 20ad6c90), plage : 2026-10-31 à 2026-11-06

Références : A0 = notes-aistudio@9021b9bc 2026-10-31 (premier commit avec contenu : appli importée, le commit cce6e01b ne contient qu'un README), A1 = @d2819fcc 2026-11-02, A2 = @6dbe9114 2026-11-05, A3 = @6fc4b9d7 2026-11-05 (CSS identique à @5a430a7b et @407c8f6d, qui ne touchent pas aux styles). HEAD = @407c8f6d 2026-11-06. Les tableaux générés listent une ligne par couple (propriété, valeur) ; « règle(s) » = nombre de déclarations CSS portant cette valeur ; « dernier état » donne le commit qui retire la valeur.

Verre : `--glass-blur: blur(24px) saturate(180%)` (Acrylique : blur(32px) saturate(120%) + grain SVG `feTurbulence`). Échelle de z-index entièrement par jetons (`--z-*`), test `tests/tokens.mjs`. Mouvement : `--ease` cubic-bezier(.32,.72,0,1), `--ease-out` cubic-bezier(.2,.8,.2,1), durées 140 / 240 / 380 ms ; `prefers-reduced-motion` réduit les durées à 1ms ; `prefers-reduced-transparency` retire le flou ; `forced-colors: active`, `prefers-contrast: more`, `print` ont leurs blocs. A1 ajoute `[data-reduced-motion='true']` (préférence interne).

## Jetons d'élévation, z-index et mouvement
| jeton | valeur | première apparition | dernier état | défini dans |
|---|---|---|---|---|
| `--base` | 240ms | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--base` | 1ms | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root [@media (prefers-reduced-motion: reduce)]` |
| `--ease` | cubic-bezier(.32, .72, 0, 1) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--ease-out` | cubic-bezier(.2, .8, .2, 1) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--fast` | 140ms | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--fast` | 1ms | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root [@media (prefers-reduced-motion: reduce)]` |
| `--glass-blur` | blur(24px) saturate(180%) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--glass-blur` | blur(32px) saturate(120%) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='acrylic']` |
| `--glass-blur` | none | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper']` |
| `--glass-blur` | none | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root, :root[data-look] [@media (prefers-reduced-transparency: reduce)]` |
| `--glass-shadow` | inset 0 1px 0 light-dark(#ffffffe6, #ffffff33), inset 0 -1px 0 light-dark(#ffffff59, #ffffff0d), 0 1px 2px light-dark(#1218300f, #0000004d), 0 10px 30px light-dark(#1218301f, #00000073) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--glass-shadow` | 0 1px 0 light-dark(#0000000a, #0000001f), 0 8px 28px light-dark(#12183024, #00000080) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='acrylic']` |
| `--glass-shadow` | 0 0 0 1px var(--color-line) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper']` |
| `--glass-shine` | linear-gradient(180deg, light-dark(#ffffffb3, #ffffff2e) 0%, #fff0 42%, #fff0 72%, light-dark(#ffffff40, #ffffff0f) 100%) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--glass-shine` | url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .55 0 0 0 0 .55 0 0 0 0 .55 .14 0 0 0 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E") | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='acrylic']` |
| `--glass-shine` | none | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper']` |
| `--shadow-icon` | 0 4px 14px #0002 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--shadow-knob` | 0 2px 6px #0003 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--shadow-seek` | 0 1px 4px #0005 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--shadow-thumb` | 0 1px 3px #0002, inset 0 1px 0 #fff5 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--slow` | 380ms | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--slow` | 1ms | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root [@media (prefers-reduced-motion: reduce)]` |
| `--z-dock` | 20 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--z-editor` | 30 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--z-layer` | calc(var(--z-over-scrim) + 1) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--z-layer-scrim` | calc(var(--z-sheet) + 1) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--z-lifted` | 5 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--z-over` | 1 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--z-over-2` | 2 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--z-over-scrim` | calc(var(--z-layer-scrim) + 1) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--z-rec` | calc(var(--z-dock) + 1) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--z-scrim` | 40 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--z-sheet` | calc(var(--z-scrim) + 1) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--z-toast` | 60 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--z-tour` | 70 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--z-under` | -1 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--z-under-2` | -2 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |

## Ombres, flou, filtres, opacités dans app.css
| propriété | valeur | première apparition | dernier état | notes |
|---|---|---|---|---|
| -webkit-backdrop-filter | blur(14px) saturate(140%) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.scrim` |
| -webkit-backdrop-filter | blur(8px) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.att-remove` |
| -webkit-backdrop-filter | none | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 5 règle(s) à l'origine, 5 à HEAD; ex. `.scrim[data-light]`, `:is(.dock, .editor-dock) .island.glass, ` |
| -webkit-backdrop-filter | var(--glass-blur) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 3 à HEAD; ex. `.glass`, `.fab.is-quiet` |
| backdrop-filter | blur(14px) saturate(140%) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.scrim` |
| backdrop-filter | blur(8px) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.att-remove` |
| backdrop-filter | none | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 5 règle(s) à l'origine, 5 à HEAD; ex. `.scrim[data-light]`, `:is(.dock, .editor-dock) .island.glass, ` |
| backdrop-filter | var(--glass-blur) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 3 à HEAD; ex. `.glass`, `.fab.is-quiet` |
| box-shadow | 0 -8px 32px color-mix(in srgb, var(--color-scrim) 40%, transparent) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.settings-sheet` |
| box-shadow | 0 0 0 200vmax var(--color-scrim) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.tour-spot` |
| box-shadow | 0 0 0 2px var(--color-accent) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.card.drop-target` |
| box-shadow | 0 0 0 2px var(--color-bg), 0 0 0 4px var(--color-primary) | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.sketch-color-dot.is-selected` |
| box-shadow | 0 0 0 2px var(--color-card-solid), 0 0 0 4px var(--folder-dot) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.swatch[aria-pressed='true']` |
| box-shadow | 0 0 0 2px var(--color-fill-strong) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 2 règle(s) à l'origine, 1 à HEAD; ex. `.quick-capture-input-box:focus-within`, `.settings-input:focus` |
| box-shadow | 0 0 0 2px var(--color-select) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.card.is-open` |
| box-shadow | 0 0 0 2px var(--folder-dot, var(--tone-gray)) | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@d2819fcc 2026-11-02 | 1 règle(s) à l'origine; ex. `.lib-folder[aria-pressed='true']` |
| box-shadow | 0 0 0 2px var(--glass-strong) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.icon-btn.has-dot::after` |
| box-shadow | 0 0 0 3px var(--color-fill-strong) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.inline-form input:focus` |
| box-shadow | 0 0 0 8px var(--recording-ring) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `50%` |
| box-shadow | 0 0 8px var(--color-primary) | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.qr-scan-line` |
| box-shadow | 0 1px 2px color-mix(in srgb, var(--color-scrim) 8%, transparent) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.settings-kbd` |
| box-shadow | 0 1px 3px color-mix(in srgb, var(--color-scrim) 25%, transparent), 0 2px 6px color-mix(in srgb, var(--color-scrim) 10%, transparent) | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.switch i` |
| box-shadow | 0 1px 3px color-mix(in srgb, var(--color-scrim) 30%, transparent) | notes-aistudio@d2819fcc 2026-11-02 | SUPPRIMÉ notes-aistudio@6dbe9114 2026-11-05 | 1 règle(s) à l'origine; ex. `.switch i` |
| box-shadow | 0 2px 12px color-mix(in srgb, var(--color-scrim) 8%, transparent) | notes-aistudio@d2819fcc 2026-11-02 | SUPPRIMÉ notes-aistudio@6fc4b9d7 2026-11-05 | 1 règle(s) à l'origine; ex. `.quick-capture-deck` |
| box-shadow | 0 2px 8px color-mix(in srgb, var(--color-accent) 35%, transparent) | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.scope-pill.is-active` |
| box-shadow | 0 4px 12px color-mix(in srgb, var(--color-accent) 40%, transparent) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.hero-avatar`, `.avatar-preview` |
| box-shadow | 0 4px 14px color-mix(in srgb, var(--color-scrim) 12%, transparent) | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.pwa-hero-app-icon` |
| box-shadow | inset 0 .5px 0 var(--color-separator, var(--color-fill-strong)) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `.settings-row + .settings-row`, `.settings-card .settings-row:not(:last-c` |
| box-shadow | inset 0 0 0 1.5px var(--color-select) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 3 règle(s) à l'origine, 3 à HEAD; ex. `.chip[aria-pressed='true']`, `.tbl-tool[aria-pressed='true']` |
| box-shadow | inset 0 0 0 1.5px var(--tone-ink) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.chip[data-tone][aria-pressed='true']`, `.lib-tile[aria-pressed='true']` |
| box-shadow | inset 0 0 0 1px var(--color-line-strong) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 3 règle(s) à l'origine, 3 à HEAD; ex. `.tbl-wrap`, `:where(.tile, .lib-tile, .lib-folder, .w` |
| box-shadow | inset 0 0 0 2px var(--color-select) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.card.selected`, `.tbl :is(th, td)[data-sel], #note-view .` |
| box-shadow | inset 0 0 0 2px var(--folder-dot, var(--tone-gray)) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.lib-folder[aria-pressed='true']` |
| box-shadow | inset 0 0 0 2px var(--tone-ink) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.layer[data-mode='create'] .tile.is-arme` |
| box-shadow | inset 0 1px 3px color-mix(in srgb, var(--color-scrim) 8%, transparent) | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.sketch-canvas-wrap` |
| box-shadow | none | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.settings-sheet` |
| box-shadow | none !important | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.segmented button:focus, .segmented butt` |
| box-shadow | var(--color-accent-glow) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.art-plus` |
| box-shadow | var(--fab-shadow) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.fab`, `.fab-add, .fab` |
| box-shadow | var(--glass-shadow) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 5 règle(s) à l'origine, 6 à HEAD; ex. `.glass`, `.pull-hint` |
| box-shadow | var(--shadow-card) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 4 règle(s) à l'origine, 11 à HEAD; ex. `.settings-hero-card`, `.settings-list` |
| box-shadow | var(--shadow-chip) | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.sketch-tool-btn.is-active` |
| box-shadow | var(--shadow-icon) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.about-icon` |
| box-shadow | var(--shadow-knob) | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@d2819fcc 2026-11-02 | 1 règle(s) à l'origine; ex. `.switch i` |
| box-shadow | var(--shadow-seek) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.seek::-webkit-slider-thumb`, `.seek::-moz-range-thumb` |
| box-shadow | var(--shadow-thumb) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 3 à HEAD; ex. `.seg-thumb`, `.avatar-chip` |
| filter | brightness(1.05) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.btn-action:hover` |
| filter | brightness(1.06) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `:where(.fab, .btn.primary, .player-play,` |
| opacity | .25 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `50%` |
| opacity | .5 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.map-edges line` |
| opacity | .55 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.wave i` |
| opacity | .7 | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.back-chip:active` |
| opacity | .8 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.art-card i.art-wave` |
| opacity | .9 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `55%` |
| opacity | 0 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 19 règle(s) à l'origine, 19 à HEAD; ex. `from`, `.card.is-leaving` |
| opacity | 1 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 5 règle(s) à l'origine, 5 à HEAD; ex. `.card.selected .card-check svg`, `.card:is(:hover, :focus-within) .card-ac` |
| opacity | var(--opacity-disabled) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `button:disabled` |
| opacity | var(--pull, 0) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.pull-hint` |

## z-index dans app.css
| propriété | valeur | première apparition | dernier état | notes |
|---|---|---|---|---|
| z-index | var(--z-dock) | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@d2819fcc 2026-11-02 | 1 règle(s) à l'origine; ex. `.dock` |
| z-index | var(--z-dock, 100) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.dock, .bottom-nav-container` |
| z-index | var(--z-editor) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.editor` |
| z-index | var(--z-layer) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.layer` |
| z-index | var(--z-layer-scrim) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.scrim:has(+ .layer)` |
| z-index | var(--z-lifted) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.card.dragging` |
| z-index | var(--z-modal) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.settings-backdrop`, `.avatar-modal-backdrop` |
| z-index | var(--z-over) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 11 règle(s) à l'origine, 11 à HEAD; ex. `.pull-hint`, `.card-check` |
| z-index | var(--z-over-2) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 4 règle(s) à l'origine, 4 à HEAD; ex. `.card.swiping`, `.card-actions` |
| z-index | var(--z-over-scrim) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `body.layer-open .dock`, `.sheet:is([data-mode='study'], [data-mod` |
| z-index | var(--z-rec) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.rec-bar` |
| z-index | var(--z-scrim) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.scrim` |
| z-index | var(--z-sheet) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.layer, .sheet` |
| z-index | var(--z-toast) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.toast` |
| z-index | var(--z-tour) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.tour` |
| z-index | var(--z-under) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.ambient`, `.glass::before` |
| z-index | var(--z-under-2) | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@6fc4b9d7 2026-11-05 | 1 règle(s) à l'origine; ex. `.widget img` |

## Transitions et animations dans app.css
| propriété | valeur | première apparition | dernier état | notes |
|---|---|---|---|---|
| animation | blink 1s steps(2) infinite | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.rec-dot` |
| animation | card-in var(--base) var(--ease-out) both | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.card`, `.starters` |
| animation | card-in var(--slow) var(--ease-out) both | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@6fc4b9d7 2026-11-05 | 1 règle(s) à l'origine; ex. `.widget` |
| animation | drift 40s ease-in-out infinite alternate | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.ambient` |
| animation | drop var(--base) var(--ease) both | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.toast` |
| animation | fade var(--base) both | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.scrim`, `.flashcard-a` |
| animation | fade var(--base) reverse both | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.scrim[data-closing]` |
| animation | grow var(--base) var(--ease) both | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.search-field`, `.format-strip` |
| animation | none | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.ambient, .icon-btn.is-recording, .rec-d` |
| animation | nudge var(--slow) var(--ease) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.tab-btn:is([aria-pressed='true'], [aria` |
| animation | pop var(--base) var(--ease) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.chip[aria-pressed='true']`, `.check-hit input:checked` |
| animation | pop var(--base) var(--ease) both | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `:is(.option, .row)[aria-pressed='true']:` |
| animation | pulse 1.4s ease-in-out infinite | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.icon-btn.is-recording` |
| animation | rise var(--base) var(--ease) both | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.dock`, `.rec-bar` |
| animation | sheet-in var(--base) var(--ease) both | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.tour-bubble` |
| animation | sheet-in var(--slow) var(--ease) both | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.layer, .sheet` |
| animation | sheet-out var(--base) var(--ease) both | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.layer[data-closing], .sheet[data-closin`, `:is(.layer, .sheet)[data-closing][data-c` |
| animation-duration | 0.01ms !important | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `[data-reduced-motion='true'] *` |
| animation-duration | var(--base) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.layer[data-anchored]` |
| transition | all var(--base) var(--ease) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.tour-spot` |
| transition | all var(--fast) | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.today-pill`, `.changelog-filter-chip` |
| transition | background-color var(--base) var(--ease) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.switch` |
| transition | background-color var(--fast) | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.cache-clear-action-btn` |
| transition | background-color var(--fast) var(--ease), border-color var(--fast) var(--ease), transform var(--fast) var(--ease) | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.scope-pill` |
| transition | background-color var(--fast) var(--ease), color var(--fast) var(--ease), box-shadow var(--base) var(--ease), transform var(--fast) var(--ease), translate var(--base) var(--ease), filter var(--fast) var(--ease) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `:where(.icon-btn, .tab-btn, .action-btn,` |
| transition | background-color var(--fast), border-color var(--fast) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.check-hit input` |
| transition | background-color var(--fast), border-color var(--fast), transform var(--fast) | notes-aistudio@d2819fcc 2026-11-02 | SUPPRIMÉ notes-aistudio@6fc4b9d7 2026-11-05 | 1 règle(s) à l'origine; ex. `.quick-action-chip` |
| transition | background-color var(--fast), color var(--fast) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `.segmented button`, `.tool-btn.icon-btn` |
| transition | background-color var(--fast), color var(--fast), border-color var(--fast) | notes-aistudio@d2819fcc 2026-11-02 | SUPPRIMÉ notes-aistudio@6fc4b9d7 2026-11-05 | 1 règle(s) à l'origine; ex. `.quick-starter-btn` |
| transition | border-color var(--fast), background-color var(--fast) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.settings-input` |
| transition | border-color var(--fast), background-color var(--fast), box-shadow var(--fast) | notes-aistudio@d2819fcc 2026-11-02 | SUPPRIMÉ notes-aistudio@6fc4b9d7 2026-11-05 | 1 règle(s) à l'origine; ex. `.quick-capture-input-box` |
| transition | color var(--fast) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.segmented button` |
| transition | grid-template-columns var(--fast) var(--ease) | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.settings-body` |
| transition | max-width var(--fast) var(--ease) | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.settings-detail` |
| transition | none | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 5 règle(s) à l'origine, 5 à HEAD; ex. `.card.swiping`, `.card.dragging` |
| transition | opacity 180ms, transform 180ms var(--ease) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.card.is-leaving` |
| transition | opacity var(--base) var(--ease), translate var(--base) var(--ease), right var(--slow) var(--ease), left var(--slow) var(--ease) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.dock` |
| transition | opacity var(--base) var(--ease), translate var(--base) var(--ease), visibility 0s | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.dock, .editor-dock` |
| transition | opacity var(--fast) var(--ease), translate var(--base) var(--ease), visibility 0s linear var(--base) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `body.sheet-open .dock` |
| transition | opacity var(--fast) var(--ease), translate var(--fast) var(--ease) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.card-actions` |
| transition | opacity var(--fast), background-color var(--fast) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.back-chip` |
| transition | opacity var(--slow) var(--ease) 1.4s | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.save-status` |
| transition | right var(--slow) var(--ease), left var(--slow) var(--ease) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `body.sheet-open .dock` |
| transition | rotate var(--base) var(--ease) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.list-heading.is-toggle .chevron`, `.fab svg` |
| transition | transform 180ms var(--ease) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.card.swipe-release` |
| transition | transform var(--base) var(--ease) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `html:not(.is-pulling) .page` |
| transition | transform var(--fast) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `.avatar-chip`, `.sketch-color-dot` |
| transition | transform var(--fast) var(--ease) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.swipe-icon` |
| transition | transform var(--fast) var(--ease), background var(--fast) | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.today-action-chip` |
| transition | transform var(--fast) var(--ease), background-color var(--fast) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.settings-hero-card.is-clickable` |
| transition | transform var(--fast) var(--ease), rotate var(--base) var(--ease) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.fab-add, .fab` |
| transition | transform var(--fast), background-color var(--fast) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `.emoji-btn`, `.tile` |
| transition | transform var(--fast), filter var(--fast) | notes-aistudio@d2819fcc 2026-11-02 | SUPPRIMÉ notes-aistudio@6fc4b9d7 2026-11-05 | 1 règle(s) à l'origine; ex. `.quick-capture-btn` |
| transition | transform var(--slow) var(--ease), color var(--base) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.switch i` |
| transition | transform var(--slow) var(--ease), opacity var(--base) var(--ease) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.seg-thumb` |
| transition | transform var(--slow) var(--ease), visibility 0s linear var(--slow) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.editor` |
| transition | transform var(--slow) var(--ease), visibility 0s, padding var(--base) var(--ease) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.editor.open` |
| transition | transform var(--slow) var(--ease), width var(--fast) var(--ease), color var(--base) | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@d2819fcc 2026-11-02 | 1 règle(s) à l'origine; ex. `.switch i` |
| transition | translate var(--base) var(--ease) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.sheet.drag-release` |
| transition | width var(--base) var(--ease) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 3 à HEAD; ex. `.progress-fill`, `.dots i` |
| transition-duration | 0.01ms !important | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `[data-reduced-motion='true'] *` |

## @keyframes (noms)
| propriété | valeur | première apparition | dernier état | notes |
|---|---|---|---|---|
| blink |  | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `50%` |
| card-in |  | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `from` |
| drawer-in |  | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `from` |
| drift |  | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `to` |
| drop |  | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `from` |
| fade |  | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `from` |
| grow |  | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `from` |
| nudge |  | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `40%` |
| pop |  | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 3 règle(s) à l'origine, 3 à HEAD; ex. `from`, `60%` |
| pop-in |  | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `from` |
| pulse |  | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `50%` |
| rise |  | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `from` |
| sheet-in |  | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `from` |
| sheet-out |  | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 3 règle(s) à l'origine, 3 à HEAD; ex. `55%`, `to` |
