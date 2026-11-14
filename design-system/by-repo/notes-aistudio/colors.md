Source : notes-aistudio, commits lus : 7 (hors fusion 20ad6c90), plage : 2026-10-31 à 2026-11-06

Références : A0 = notes-aistudio@9021b9bc 2026-10-31 (premier commit avec contenu : appli importée, le commit cce6e01b ne contient qu'un README), A1 = @d2819fcc 2026-11-02, A2 = @6dbe9114 2026-11-05, A3 = @6fc4b9d7 2026-11-05 (CSS identique à @5a430a7b et @407c8f6d, qui ne touchent pas aux styles). HEAD = @407c8f6d 2026-11-06. Les tableaux générés listent une ligne par couple (propriété, valeur) ; « règle(s) » = nombre de déclarations CSS portant cette valeur ; « dernier état » donne le commit qui retire la valeur.

Sémantique écrite dans tokens.css : « One meaning per colour, everywhere — a colour never decorates : amber = create and pinned (the + and what it makes) · blue = selection, links · ink = focus, primary buttons, progress · red = delete, recording · green = done, switched on · folder colours = organisation only ». Contrastes documentés dans le fichier : `--color-text-muted` >= 7:1 sur le fond et les cartes ; `--color-text-faint` >= 5,4:1 ; `--color-accent-deep` >= 4,5:1 (7:1 en `prefers-contrast: more`, 7,9 sur fond et 9,0 sur carte) ; `--color-on-fill` blanc >= 5,3:1 sur les fonds clairs saturés ; `--color-on-folder` >= 4,7:1 sur les 8 couleurs de dossier. Thèmes : `color-scheme: light dark` avec `light-dark(clair, sombre)` ; forçage via `data-theme`; OLED (A1) via `data-oled`. Valeurs sous forme `light-dark(CLAIR, SOMBRE)`. Les trois accents (Ambre `#f4c542`, Abricot `#f59e5b`, Lilas `#b9a2f5`) et les looks (Verre, Acrylique, Papier) redéfinissent des jetons : voir themes.md. Palette du dessin (A2, `Sketch.tsx`) : Encre #1C1C1E, Bleu #2563EB, Rouge #DC2626, Vert #16A34A, Jaune #EAB308, Violet #9333EA ; QR code : sombre #1C1C1E, clair #FFFFFF. Index.html : fond avant peinture #eef0f6 / #08090c ; theme-color #EEF0F6 (clair) et #08090C (sombre) ; manifest background_color #EEF0F6 (pas de theme_color).

## Jetons de couleur (une ligne par valeur et par portée)
| jeton | valeur | première apparition | dernier état | défini dans |
|---|---|---|---|---|
| `--accent-amber` | #f4c542 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--accent-apricot` | #f59e5b | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--accent-lilac` | #b9a2f5 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--alpha-faint` | 5% | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--alpha-medium` | 12% | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--alpha-soft` | 8% | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--alpha-strong` | 18% | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--ambient-1` | light-dark(#ffe9a8, #3a2f0c) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--ambient-1` | var(--color-bg) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper']` |
| `--ambient-2` | light-dark(#cfe0ff, #0d1f3d) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--ambient-2` | var(--color-bg) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper']` |
| `--ambient-3` | light-dark(#f5d6ec, #2a1024) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--ambient-3` | var(--color-bg) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper']` |
| `--color-accent` | var(--accent-amber) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--color-accent` | var(--accent-apricot) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-accent='apricot']` |
| `--color-accent` | var(--accent-lilac) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-accent='lilac']` |
| `--color-accent-deep` | light-dark(#8c6600, #e0ac1c) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--color-accent-deep` | light-dark(#5f4500, #e0ac1c) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root [@media (prefers-contrast: more)]` |
| `--color-accent-deep` | light-dark(#9a4a0f, #f8a76b) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-accent='apricot']` |
| `--color-accent-deep` | light-dark(#5b3fc4, #c3b1f7) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-accent='lilac']` |
| `--color-accent-deep` | light-dark(#7a3a08, #f8a76b) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-accent='apricot'] [@media (prefers-contrast: more)]` |
| `--color-accent-deep` | light-dark(#4a30a8, #c3b1f7) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-accent='lilac'] [@media (prefers-contrast: more)]` |
| `--color-accent-glow` | 0 8px 24px light-dark(#f4c54270, #f4c54240) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--color-accent-glow` | 0 0 transparent | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper']` |
| `--color-accent-glow` | 0 8px 24px light-dark(#f59e5b70, #f59e5b40) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-accent='apricot']` |
| `--color-accent-glow` | 0 8px 24px light-dark(#b9a2f570, #b9a2f540) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-accent='lilac']` |
| `--color-accent-glow` | 0 0 transparent | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper'][data-accent='apricot'], :root[data-look='paper'][data-accent='lilac']` |
| `--color-bg` | light-dark(#eef0f6, #08090c) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--color-bg` | light-dark(#f7f4ec, #121110) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper']` |
| `--color-bg` | var(--color-oled-bg) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | tokens.css `:root[data-theme='dark'][data-oled='true']` |
| `--color-card` | light-dark(#ffffff, #1a1b20) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--color-card` | light-dark(#fffdf7, #1c1a17) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper']` |
| `--color-card` | var(--color-oled-card) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | tokens.css `:root[data-theme='dark'][data-oled='true']` |
| `--color-card-solid` | light-dark(#ffffff, #1a1b20) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--color-card-solid` | var(--color-card) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper']` |
| `--color-card-solid` | var(--color-oled-card) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | tokens.css `:root[data-theme='dark'][data-oled='true']` |
| `--color-danger` | light-dark(#d70015, #ff6961) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--color-danger` | light-dark(#c8322b, #ff7a6e) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper']` |
| `--color-danger-tint` | light-dark(#d7001514, #ff696124) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--color-editor` | light-dark(#f7f8fb, #0e0f13) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--color-editor` | var(--color-card) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper']` |
| `--color-fill` | light-dark(color-mix(in srgb, var(--color-text) var(--alpha-faint), transparent), color-mix(in srgb, var(--color-text) var(--alpha-soft), transparent)) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--color-fill-strong` | light-dark(color-mix(in srgb, var(--color-text) var(--alpha-soft), transparent), color-mix(in srgb, var(--color-text) var(--alpha-medium), transparent)) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--color-focus` | light-dark(#16171b, #f2f3f7) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--color-focus` | var(--color-text) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper']` |
| `--color-highlight` | light-dark(#fbe7a1, #5a4610) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--color-highlight` | light-dark(#f6e2a2, #4d3d12) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper']` |
| `--color-line` | color-mix(in srgb, var(--color-text) var(--alpha-soft), transparent) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--color-line` | light-dark(#16171b4d, #ffffff4d) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root [@media (prefers-contrast: more)]` |
| `--color-line-strong` | color-mix(in srgb, var(--color-text) var(--alpha-strong), transparent) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--color-line-strong` | light-dark(#16171b80, #ffffff80) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root [@media (prefers-contrast: more)]` |
| `--color-oled-bg` | #000000 | notes-aistudio@d2819fcc 2026-11-02 | HEAD | tokens.css `:root` |
| `--color-oled-card` | #08080a | notes-aistudio@d2819fcc 2026-11-02 | HEAD | tokens.css `:root` |
| `--color-on-accent` | #1a1608 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--color-on-accent` | #1f1b16 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper']` |
| `--color-on-accent` | #2a1505 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-accent='apricot']` |
| `--color-on-accent` | #1d1433 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-accent='lilac']` |
| `--color-on-fill` | light-dark(#fff, #0b0c0f) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--color-on-folder` | #0b0c0f | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--color-on-media` | #fff | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--color-on-media-soft` | #fffd | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--color-scrim` | light-dark(#10121a2e, #0000006b) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--color-scrim` | light-dark(#1f1b1633, #000000a6) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper']` |
| `--color-select` | light-dark(#0062cc, #0a84ff) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--color-select` | light-dark(#2f5bd3, #8aa6f2) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper']` |
| `--color-select-tint` | light-dark(#0062cc1a, #0a84ff2e) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--color-separator` | var(--color-line) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | tokens.css `:root` |
| `--color-success` | light-dark(#1e7a35, #40a970) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--color-text` | light-dark(#16171b, #f2f3f7) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--color-text` | light-dark(#1f1b16, #f3efe6) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper']` |
| `--color-text-faint` | light-dark(#5d616d, #8e929b) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--color-text-faint` | light-dark(#3e414c, #b9bcc6) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root [@media (prefers-contrast: more)]` |
| `--color-text-faint` | light-dark(#5f574b, #a39b8d) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper']` |
| `--color-text-faint` | light-dark(#3d362c, #c4bcae) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper'] [@media (prefers-contrast: more)]` |
| `--color-text-muted` | light-dark(#484c59, #a4a8b4) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--color-text-muted` | light-dark(#2f323c, #d0d3dc) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root [@media (prefers-contrast: more)]` |
| `--color-text-muted` | light-dark(#4a4339, #bdb5a7) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper']` |
| `--color-text-muted` | light-dark(#2e2820, #d8d1c4) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper'] [@media (prefers-contrast: more)]` |
| `--folder-1` | #4f86e8 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--folder-1-text` | light-dark(#1d64e1, #6696eb) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--folder-1-tint` | light-dark(#eaf1fdd9, #17243ad9) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--folder-2` | #e9824f | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--folder-2-text` | light-dark(#b64c17, #e9824f) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--folder-2-tint` | light-dark(#fdeee6d9, #33211ad9) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--folder-3` | #3fa56e | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--folder-3-text` | light-dark(#2e7950, #40a970) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--folder-3-tint` | light-dark(#e6f4ecd9, #14291dd9) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--folder-4` | #9171db | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--folder-4-text` | light-dark(#7850d3, #a185e0) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--folder-4-tint` | light-dark(#f1ecfbd9, #241d38d9) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--folder-5` | #db5f96 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--folder-5-text` | light-dark(#c62d71, #df70a1) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--folder-5-tint` | light-dark(#fbeaf2d9, #331a26d9) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--folder-6` | #2fa4ad | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--folder-6-text` | light-dark(#22767d, #2fa4ad) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--folder-6-tint` | light-dark(#e2f4f5d9, #112b2dd9) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--folder-7` | #a2845e | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--folder-7-text` | light-dark(#7f6749, #ab906e) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--folder-7-tint` | light-dark(#f3eee7d9, #2b241bd9) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--folder-8` | #7c7c84 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--folder-8-text` | light-dark(#636369, #94949a) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--folder-8-tint` | light-dark(#eeeef0d9, #232326d9) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--glass` | light-dark(#ffffff8c, #26272e80) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--glass` | var(--glass-strong) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root [@media (prefers-contrast: more)]` |
| `--glass` | light-dark(#f6f7f9b8, #2a2b30b8) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='acrylic']` |
| `--glass` | var(--color-card) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper']` |
| `--glass` | var(--glass-strong) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root, :root[data-look] [@media (prefers-reduced-transparency: reduce)]` |
| `--glass-dock` | light-dark(#ffffffd6, #25262cd9) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--glass-dock` | light-dark(#f4f5f8eb, #2a2b30eb) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='acrylic']` |
| `--glass-edge` | light-dark(#ffffffb3, #ffffff26) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--glass-edge` | light-dark(#0000001a, #ffffff1f) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='acrylic']` |
| `--glass-edge` | var(--color-line) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper']` |
| `--glass-sheet` | light-dark(#f7f8fbf2, #17181df2) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--glass-sheet` | light-dark(#f8f9fbf5, #1d1e22f5) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='acrylic']` |
| `--glass-strong` | light-dark(#ffffffc4, #1e1f25c9) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--glass-strong` | light-dark(#f8f9fbe0, #26272cdc) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='acrylic']` |
| `--glass-strong` | var(--color-card) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper']` |
| `--media-shade` | linear-gradient(180deg, #0005, #000b) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--media-veil` | #0007 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--opacity-disabled` | .4 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--print-ink` | #000 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--recording-ring` | light-dark(#d7001520, #ff696126) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--scrim-frost` | light-dark(#eef0f633, #08090c4d) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--surface-knob` | #fff | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--surface-thumb` | light-dark(#fff, #3a3b43) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--tone-blue` | light-dark(#007aff, #0a84ff) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--tone-gray` | light-dark(#8e8e93, #98989d) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--tone-green` | light-dark(#34c759, #30d158) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--tone-indigo` | light-dark(#5856d6, #5e5ce6) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--tone-ink` | light-dark(color-mix(in oklab, var(--tone) 74%, #000), color-mix(in oklab, var(--tone) 85%, #fff)) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `[data-tone]` |
| `--tone-orange` | light-dark(#ff9500, #ff9f0a) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--tone-pink` | light-dark(#ff2d55, #ff375f) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--tone-purple` | light-dark(#af52de, #bf5af2) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--tone-red` | light-dark(#ff3b30, #ff453a) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--tone-teal` | light-dark(#30b0c7, #40c8e0) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |

## Autres
| jeton | valeur | première apparition | dernier état | défini dans |
|---|---|---|---|---|
| `--h` | 12px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `.accent-dot` |
