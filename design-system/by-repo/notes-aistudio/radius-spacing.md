Source : notes-aistudio, commits lus : 7 (hors fusion 20ad6c90), plage : 2026-10-31 à 2026-11-06

Références : A0 = notes-aistudio@9021b9bc 2026-10-31 (premier commit avec contenu : appli importée, le commit cce6e01b ne contient qu'un README), A1 = @d2819fcc 2026-11-02, A2 = @6dbe9114 2026-11-05, A3 = @6fc4b9d7 2026-11-05 (CSS identique à @5a430a7b et @407c8f6d, qui ne touchent pas aux styles). HEAD = @407c8f6d 2026-11-06. Les tableaux générés listent une ligne par couple (propriété, valeur) ; « règle(s) » = nombre de déclarations CSS portant cette valeur ; « dernier état » donne le commit qui retire la valeur.

Règle de rayon : A0 : « chaque rayon = hauteur de la boîte ÷ 3 ; les conteneurs restent concentriques (rayon intérieur + marge) » (`--radius-ratio: 3`, `--radius-control` = 44 ÷ 3, `--radius-island` = contrôle + 4, `--radius-row` = 48 ÷ 3, `--radius-panel` = row + 8, `--radius-card` = 16 + 24 ÷ 3). A1 : « Concentric radius system » : contrôles 52 / 44 / 4 de marge / 12 extérieur / 8 intérieur ; navigation 60 / 44 intérieur / 8 de marge / 20 extérieur / 12 intérieur (valeurs figées en px). A2 : jetons réduits à 8 / 12 px et sheet et modal 20 px. Le ratio (`--radius-ratio`, Papier 4.8) reste utilisé par `calc(var(--h) / var(--radius-ratio))` dans app.css pour la plupart des contrôles. Échelle d'espacement : `--space-1..6, 8` = 4, 8, 12, 16, 20, 24, 32 px (A0 à HEAD). Cibles tactiles : `--tap` 44px, `--dock-btn` 44px, `--fab` 52px = dock-btn + 2 x space-1 (A0), puis `--control-h` 52px, `--nav-h` 60px (A1). Le `docs/ui-visual-consistency-audit.md` (A1) liste les écarts hors échelle (1, 2, 3, 5, 6, 7, 10, 14 px) et des cibles de 40px (`.header-tools .icon-btn`, `.segmented button`, `.tour-actions .btn`).

## Jetons de forme et de taille
| jeton | valeur | première apparition | dernier état | défini dans |
|---|---|---|---|---|
| `--control-h` | 52px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | tokens.css `:root` |
| `--control-inner` | 44px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | tokens.css `:root` |
| `--control-pad` | var(--space-1) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | tokens.css `:root` |
| `--dock-bottom` | calc(var(--safe-bottom) + var(--space-2) + var(--kb)) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--dock-btn` | 44px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--dock-inset-l` | max(var(--edge-l), (100vw - var(--dock-max)) / 2) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--dock-inset-r` | max(var(--edge-r), (100vw - var(--dock-max)) / 2) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--dock-max` | calc(var(--layout-max) - 2 * var(--gutter) + 2 * var(--edge)) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--dock-space` | calc(var(--dock-bottom) + var(--fab) + var(--space-6)) | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@d2819fcc 2026-11-02 | tokens.css `:root` |
| `--dock-space` | calc(var(--dock-bottom) + var(--nav-h) + var(--space-6)) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | tokens.css `:root` |
| `--drawer-w` | min(26rem, 45vw) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--edge` | 12px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--edge-l` | calc(var(--edge) + var(--safe-l)) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--edge-r` | calc(var(--edge) + var(--safe-r)) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--fab` | calc(var(--dock-btn) + 2 * var(--space-1)) | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@d2819fcc 2026-11-02 | tokens.css `:root` |
| `--fab` | var(--control-h) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | tokens.css `:root` |
| `--fab-shadow` | inset 0 1px 0 #fff9, inset 0 -2px 6px #c8950a55, var(--color-accent-glow), 0 2px 6px #0002 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--gutter` | 16px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--kb` | 0px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--layer-bottom` | calc(var(--dock-bottom) + var(--fab) + var(--space-3)) | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@d2819fcc 2026-11-02 | tokens.css `:root` |
| `--layer-bottom` | calc(var(--dock-bottom) + var(--nav-h) + var(--space-3)) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | tokens.css `:root` |
| `--layer-w` | 380px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--layout-max` | 1180px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--nav-h` | 60px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | tokens.css `:root` |
| `--nav-height` | 58px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | tokens.css `:root` |
| `--nav-inner` | 44px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | tokens.css `:root` |
| `--nav-pad` | var(--space-2) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | tokens.css `:root` |
| `--nav-padding` | 4px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | tokens.css `:root` |
| `--radius-card` | 12px | notes-aistudio@6dbe9114 2026-11-05 | HEAD | tokens.css `:root` |
| `--radius-card` | calc(var(--space-4) + 24px / var(--radius-ratio)) | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@6dbe9114 2026-11-05 | tokens.css `:root` |
| `--radius-control` | 8px | notes-aistudio@6dbe9114 2026-11-05 | HEAD | tokens.css `:root` |
| `--radius-control` | calc(var(--dock-btn) / var(--radius-ratio)) | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@d2819fcc 2026-11-02 | tokens.css `:root` |
| `--radius-control` | var(--radius-control-inner) | notes-aistudio@d2819fcc 2026-11-02 | SUPPRIMÉ notes-aistudio@6dbe9114 2026-11-05 | tokens.css `:root` |
| `--radius-control-inner` | 8px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | tokens.css `:root` |
| `--radius-control-outer` | 12px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | tokens.css `:root` |
| `--radius-inner` | 8px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | tokens.css `:root` |
| `--radius-island` | 12px | notes-aistudio@6dbe9114 2026-11-05 | HEAD | tokens.css `:root` |
| `--radius-island` | calc(var(--radius-control) + var(--space-1)) | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@d2819fcc 2026-11-02 | tokens.css `:root` |
| `--radius-island` | var(--radius-control-outer) | notes-aistudio@d2819fcc 2026-11-02 | SUPPRIMÉ notes-aistudio@6dbe9114 2026-11-05 | tokens.css `:root` |
| `--radius-modal` | 20px | notes-aistudio@6dbe9114 2026-11-05 | HEAD | tokens.css `:root` |
| `--radius-nav-inner` | 8px | notes-aistudio@6dbe9114 2026-11-05 | HEAD | tokens.css `:root` |
| `--radius-nav-inner` | 12px | notes-aistudio@d2819fcc 2026-11-02 | SUPPRIMÉ notes-aistudio@6dbe9114 2026-11-05 | tokens.css `:root` |
| `--radius-nav-outer` | 12px | notes-aistudio@6dbe9114 2026-11-05 | HEAD | tokens.css `:root` |
| `--radius-nav-outer` | 20px | notes-aistudio@d2819fcc 2026-11-02 | SUPPRIMÉ notes-aistudio@6dbe9114 2026-11-05 | tokens.css `:root` |
| `--radius-outer` | 12px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | tokens.css `:root` |
| `--radius-panel` | 12px | notes-aistudio@6dbe9114 2026-11-05 | HEAD | tokens.css `:root` |
| `--radius-panel` | calc(var(--radius-row) + var(--space-2)) | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@6dbe9114 2026-11-05 | tokens.css `:root` |
| `--radius-ratio` | 3 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--radius-ratio` | 4.8 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper']` |
| `--radius-row` | 8px | notes-aistudio@6dbe9114 2026-11-05 | HEAD | tokens.css `:root` |
| `--radius-row` | calc(48px / var(--radius-ratio)) | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@6dbe9114 2026-11-05 | tokens.css `:root` |
| `--radius-sheet` | 20px | notes-aistudio@6dbe9114 2026-11-05 | HEAD | tokens.css `:root` |
| `--safe-bottom` | max(env(safe-area-inset-bottom, 0px), 8px) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--safe-l` | env(safe-area-inset-left, 0px) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--safe-r` | env(safe-area-inset-right, 0px) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--safe-top` | env(safe-area-inset-top, 0px) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--space-1` | 4px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--space-2` | 8px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--space-3` | 12px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--space-4` | 16px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--space-5` | 20px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--space-6` | 24px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--space-8` | 32px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--split-list` | clamp(22rem, 34vw, 30rem) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--tap` | 44px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |

## Rayons dans app.css
| propriété | valeur | première apparition | dernier état | notes |
|---|---|---|---|---|
| border-radius | 0 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 3 à HEAD; ex. `.tbl-in`, `.sheet:is([data-mode='study'], [data-mod` |
| border-radius | 0 2px 2px 0 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `body:not([data-tint='on']) .card[data-co` |
| border-radius | 10px | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.pwa-hero-tag`, `.changelog-tab-count` |
| border-radius | 10px 10px 0 0 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.lib-folder::before` |
| border-radius | 14px | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.pwa-hero-app-icon` |
| border-radius | 16px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.about-icon` |
| border-radius | 24px 24px 0 0 | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.settings-sheet` |
| border-radius | 2px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.wave i`, `.save-status i` |
| border-radius | 3px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 8 règle(s) à l'origine, 9 à HEAD; ex. `mark`, `.md-hl` |
| border-radius | 4px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 4 à HEAD; ex. `.dots i[data-on]`, `.art-card i.art-check::before` |
| border-radius | 50% | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 5 règle(s) à l'origine, 9 à HEAD; ex. `.avatar-chip`, `.hero-avatar` |
| border-radius | 5px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.art-card b` |
| border-radius | 6px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `.check-hit input`, `.settings-kbd` |
| border-radius | 8px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `.settings-tile`, `.note-metadata input, .note-metadata sel` |
| border-radius | 999px | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.scope-pill .scope-count` |
| border-radius | calc(10px / var(--radius-ratio)) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.rec-dot` |
| border-radius | calc(12px / var(--radius-ratio)) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.release-node` |
| border-radius | calc(16px / var(--radius-ratio)) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.seek::-webkit-slider-thumb`, `.seek::-moz-range-thumb` |
| border-radius | calc(18px / var(--radius-ratio)) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.check-hit input` |
| border-radius | calc(22px / var(--radius-ratio)) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `kbd, .kbd` |
| border-radius | calc(30px / var(--radius-ratio)) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.settings-tile` |
| border-radius | calc(32px / var(--radius-ratio) + 2px) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.card-actions` |
| border-radius | calc(36px / var(--radius-ratio) + 6px) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.toast` |
| border-radius | calc(40px / var(--radius-ratio) + 3px) | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@d2819fcc 2026-11-02 | 2 règle(s) à l'origine; ex. `.header-tools.island`, `.segmented` |
| border-radius | calc(7px / var(--radius-ratio)) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 3 règle(s) à l'origine, 3 à HEAD; ex. `.icon-btn.has-dot::after`, `.folder-tag::before` |
| border-radius | calc(84px / var(--radius-ratio)) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.photo` |
| border-radius | calc(var(--h) / var(--radius-ratio) / 1.5) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.lib-tile` |
| border-radius | calc(var(--h) / var(--radius-ratio) / 2) calc(var(--h) / var(--radius-ratio) / 2) calc(var(--h) / var(--radius-ratio) / 1.5) calc(var(--h) / var(--radius-ratio) / 1.5) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.lib-folder` |
| border-radius | calc(var(--h) / var(--radius-ratio)) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 40 règle(s) à l'origine, 33 à HEAD; ex. `.icon-btn`, `.text-btn` |
| border-radius | calc(var(--k) / var(--radius-ratio)) | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@d2819fcc 2026-11-02 | 1 règle(s) à l'origine; ex. `.switch i` |
| border-radius | calc(var(--radius-card) - 6px) | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@d2819fcc 2026-11-02 | 1 règle(s) à l'origine; ex. `.card-media` |
| border-radius | calc(var(--radius-card) - var(--space-2)) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.card-media` |
| border-radius | calc(var(--radius-control) - 2px) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.tbl-tool` |
| border-radius | calc(var(--radius-inner, 8px) - 2px) | notes-aistudio@d2819fcc 2026-11-02 | SUPPRIMÉ notes-aistudio@6fc4b9d7 2026-11-05 | 2 règle(s) à l'origine; ex. `.quick-capture-btn`, `.quick-capture-mic-btn` |
| border-radius | calc(var(--th) / var(--radius-ratio)) | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@d2819fcc 2026-11-02 | 1 règle(s) à l'origine; ex. `.seg-thumb` |
| border-radius | inherit | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 3 à HEAD; ex. `.glass::before`, `.progress-fill` |
| border-radius | var(--radius-card) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 5 règle(s) à l'origine, 11 à HEAD; ex. `.first-use`, `.card` |
| border-radius | var(--radius-card, 12px) | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 7 règle(s) à l'origine, 7 à HEAD; ex. `.tile`, `.install-sidebar-card` |
| border-radius | var(--radius-control) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 3 à HEAD; ex. `.tbl-wrap`, `.tbl-group` |
| border-radius | var(--radius-control-inner) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 4 règle(s) à l'origine, 4 à HEAD; ex. `.header-tools .icon-btn`, `.island .icon-btn` |
| border-radius | var(--radius-control-outer) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.header-tools.island`, `.dock .island:not(#nav-island):not(#nav-` |
| border-radius | var(--radius-inner, 8px) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 14 règle(s) à l'origine, 25 à HEAD; ex. `.back-chip`, `.nav-pill-main button, .main-dock .tab-b` |
| border-radius | var(--radius-island) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.island`, `.tour-spot` |
| border-radius | var(--radius-nav-inner) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `#nav-island .seg-thumb` |
| border-radius | var(--radius-outer, 12px) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 7 règle(s) à l'origine, 6 à HEAD; ex. `.nav-pill-main, .main-dock #nav-island`, `.nav-pill-tools, #nav-tools-island` |
| border-radius | var(--radius-panel) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 5 règle(s) à l'origine, 5 à HEAD; ex. `.layer, .sheet`, `.flashcard` |
| border-radius | var(--radius-panel) var(--radius-panel) 0 0 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.sheet` |
| border-radius | var(--radius-row) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 10 règle(s) à l'origine, 11 à HEAD; ex. `.list-heading.is-toggle`, `.row` |

## Largeurs et hauteurs en px / rem / em dans app.css
| propriété | valeur | première apparition | dernier état | notes |
|---|---|---|---|---|
| height | 10px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.rec-dot` |
| height | 11px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.art-card i.art-check::before` |
| height | 124px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.art-card` |
| height | 12px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 3 à HEAD; ex. `.release-node`, `.scope-pill .scope-clear-icon` |
| height | 13px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `.card-meta svg`, `.pwa-pill svg` |
| height | 14px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 6 règle(s) à l'origine, 9 à HEAD; ex. `.pill svg`, `.count svg` |
| height | 150px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.welcome-art` |
| height | 15px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 3 règle(s) à l'origine, 2 à HEAD; ex. `.card-check svg`, `.folder-chip svg` |
| height | 16px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 10 règle(s) à l'origine, 12 à HEAD; ex. `.pull-hint svg`, `.list-heading svg` |
| height | 17px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.chip svg`, `.card-actions svg` |
| height | 18px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 8 règle(s) à l'origine, 9 à HEAD; ex. `.back-chip svg`, `.card-more svg` |
| height | 1px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `hr`, `.visually-hidden` |
| height | 20px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `.settings-banner svg`, `.qr-target-corner` |
| height | 22px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 5 règle(s) à l'origine, 8 à HEAD; ex. `svg`, `.tab-btn svg` |
| height | 240px | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.qr-image` |
| height | 24px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 5 à HEAD; ex. `.format-strip .format-sep`, `.lib-tile > svg` |
| height | 26px | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@6dbe9114 2026-11-05 | 1 règle(s) à l'origine; ex. `.tile svg` |
| height | 28px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.fab svg`, `.seek` |
| height | 2px | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.qr-scan-line` |
| height | 30px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 3 règle(s) à l'origine, 4 à HEAD; ex. `.wave`, `.art-card i.art-wave` |
| height | 320px | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.sketch-canvas-wrap` |
| height | 32px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `.switch`, `.changelog-empty-state svg` |
| height | 38px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 2 règle(s) à l'origine, 1 à HEAD; ex. `.quick-capture-btn`, `.quick-capture-mic-btn` |
| height | 44px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 3 règle(s) à l'origine, 3 à HEAD; ex. `.back-chip`, `.seg-thumb` |
| height | 46px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.emoji-btn` |
| height | 4px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.card-progress .progress-track` |
| height | 52px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.segmented` |
| height | 56px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.hero-avatar`, `.avatar-preview` |
| height | 58px | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.pwa-hero-app-icon` |
| height | 5px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 5 règle(s) à l'origine, 6 à HEAD; ex. `.check-hit input:checked::after`, `.sheet-grabber` |
| height | 64px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.about-icon` |
| height | 6px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 3 règle(s) à l'origine, 4 à HEAD; ex. `.progress-track`, `.save-status i` |
| height | 7px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 3 règle(s) à l'origine, 6 à HEAD; ex. `.icon-btn.has-dot::after`, `.folder-tag::before` |
| height | 8px | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.storage-multi-bar` |
| height | 9px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.art-card b` |
| min-height | 1.45em | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.check-hit` |
| min-height | 1.55em | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.editor-view > div` |
| min-height | 280px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.flashcard` |
| min-height | 32px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.quick-starter-btn`, `.att-enhance` |
| min-height | 36px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `.btn-action`, `.sketch-tool-btn` |
| min-height | 38px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `.quick-capture-btn`, `.scope-pill` |
| min-height | 40px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 2 règle(s) à l'origine, 1 à HEAD; ex. `.quick-action-chip`, `[data-density='compact'] .row, [data-den` |
| min-height | 44px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 3 règle(s) à l'origine, 8 à HEAD; ex. `.back-chip`, `.segmented button` |
| min-height | 48px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 3 à HEAD; ex. `.row`, `.option` |
| min-height | 52px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `.settings-row`, `.segmented` |
| min-height | 56px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.header-bar` |
| min-width | 22px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `kbd, .kbd` |
| min-width | 44px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 3 à HEAD; ex. `.back-chip`, `.metadata-chips button` |
| min-width | 52px | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.nav-pill-main button, .main-dock .tab-b` |
| min-width | 58px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.main-dock .tab-btn` |
| min-width | 64px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.player-btn` |
| min-width | 68px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.tab-btn` |
| min-width | 80px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.main-dock .tab-btn` |
| min-width | 88px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 1 à HEAD; ex. `.main-dock .tab-btn`, `.tbl :is(th, td)` |
| min-width | 9.5rem | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@6fc4b9d7 2026-11-05 | 1 règle(s) à l'origine; ex. `.widget` |
| width | 10px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.rec-dot` |
| width | 112px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.art-card` |
| width | 11px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.art-card i.art-check::before` |
| width | 12px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 3 à HEAD; ex. `.release-node`, `.scope-pill .scope-clear-icon` |
| width | 13px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `.card-meta svg`, `.pwa-pill svg` |
| width | 14px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 4 règle(s) à l'origine, 7 à HEAD; ex. `.pill svg`, `.count svg` |
| width | 15px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 3 règle(s) à l'origine, 2 à HEAD; ex. `.card-check svg`, `.folder-chip svg` |
| width | 16px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 10 règle(s) à l'origine, 12 à HEAD; ex. `.pull-hint svg`, `.list-heading svg` |
| width | 17px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.chip svg`, `.card-actions svg` |
| width | 18px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 8 règle(s) à l'origine, 9 à HEAD; ex. `.back-chip svg`, `.card-more svg` |
| width | 1px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.visually-hidden`, `.format-strip .format-sep` |
| width | 20px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `.settings-banner svg`, `.qr-target-corner` |
| width | 22px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 6 règle(s) à l'origine, 9 à HEAD; ex. `svg`, `.check-hit` |
| width | 240px | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.qr-image` |
| width | 24px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 4 à HEAD; ex. `.lib-tile > svg`, `.switch i` |
| width | 26px | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@6dbe9114 2026-11-05 | 1 règle(s) à l'origine; ex. `.tile svg` |
| width | 28px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.fab svg` |
| width | 2px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.release::before` |
| width | 30px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `.settings-tile`, `.pwa-hero-app-icon svg` |
| width | 32px | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.changelog-empty-state svg` |
| width | 33px | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@d2819fcc 2026-11-02 | 1 règle(s) à l'origine; ex. `.option:active .switch i` |
| width | 36px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.sheet-grab` |
| width | 38px | notes-aistudio@d2819fcc 2026-11-02 | SUPPRIMÉ notes-aistudio@6fc4b9d7 2026-11-05 | 1 règle(s) à l'origine; ex. `.quick-capture-mic-btn` |
| width | 3px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `body:not([data-tint='on']) .card[data-co` |
| width | 40px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.sheet-grabber`, `.editor-grabber` |
| width | 51px | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@d2819fcc 2026-11-02 | 1 règle(s) à l'origine; ex. `.switch` |
| width | 52px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.switch` |
| width | 56px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.hero-avatar`, `.avatar-preview` |
| width | 58px | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.pwa-hero-app-icon` |
| width | 64px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.about-icon` |
| width | 6px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `.save-status i`, `.changelog-pulse-dot` |
| width | 72px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.sel-bar .action-btn` |
| width | 7px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 3 règle(s) à l'origine, 6 à HEAD; ex. `.icon-btn.has-dot::after`, `.folder-tag::before` |
| width | 8px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `:is(.option, .row)[aria-pressed='true']:` |
| width | 9px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.check-hit input:checked::after` |

## Bordures et contours
| propriété | valeur | première apparition | dernier état | notes |
|---|---|---|---|---|
| border | .5px solid var(--color-line) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 6 règle(s) à l'origine, 5 à HEAD; ex. `.pill`, `.first-use` |
| border | .5px solid var(--glass-edge) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.glass`, `.fab.is-quiet` |
| border | 0 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 9 règle(s) à l'origine, 9 à HEAD; ex. `button`, `hr` |
| border | 1.5px solid var(--color-text-faint) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 3 règle(s) à l'origine, 3 à HEAD; ex. `.card-check`, `.check-hit input` |
| border | 1px dashed var(--color-line) | notes-aistudio@d2819fcc 2026-11-02 | SUPPRIMÉ notes-aistudio@6fc4b9d7 2026-11-05 | 1 règle(s) à l'origine; ex. `.quick-starter-btn` |
| border | 1px dashed var(--color-line-strong) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.lib-folder.is-new` |
| border | 1px solid CanvasText | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.glass, .card, .chip, .tile, .lib-tile, ` |
| border | 1px solid color-mix(in srgb, var(--tone, var(--color-primary)) 24%, transparent) | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.today-action-chip` |
| border | 1px solid color-mix(in srgb, var(--tone-green) 24%, var(--color-line)) | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.diag-row` |
| border | 1px solid transparent | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.changelog-filter-chip` |
| border | 1px solid var(--color-line) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 3 règle(s) à l'origine, 15 à HEAD; ex. `.inline-form input`, `.starter` |
| border | 1px solid var(--color-line-strong) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 3 règle(s) à l'origine, 5 à HEAD; ex. `kbd, .kbd`, `:is(.dock, .editor-dock) .island.glass, ` |
| border | 2px solid transparent | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.sketch-color-dot` |
| border | 2px solid var(--color-on-fill) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.check-hit input:checked::after` |
| border | 2px solid var(--color-text-faint) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.release-node` |
| border | none | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 6 règle(s) à l'origine, 7 à HEAD; ex. `.back-chip`, `.segmented button` |
| border | solid var(--color-select) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `:is(.option, .row)[aria-pressed='true']:` |
| border-width | 0 0 3px 3px | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.qr-target-corner.bottom-left` |
| border-width | 0 2.5px 2.5px 0 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `:is(.option, .row)[aria-pressed='true']:` |
| border-width | 0 3px 3px 0 | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.qr-target-corner.bottom-right` |
| border-width | 3px 0 0 3px | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.qr-target-corner.top-left` |
| border-width | 3px 3px 0 0 | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.qr-target-corner.top-right` |
| outline | 2.5px solid var(--color-focus) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 5 à HEAD; ex. `:focus-visible`, `.card:has(.card-open:focus-visible)` |
| outline | 2px solid Highlight | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.tbl-tool[aria-pressed='true']` |
| outline | 3px solid Highlight | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.tbl :is(th, td)[data-sel]`, `:is(.tab-btn, .row, .chip, .lib-tile, .l` |
| outline | none | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 7 règle(s) à l'origine, 9 à HEAD; ex. `.card-open:focus-visible`, `.search-field input` |
| outline | none !important | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.segmented button:focus, .segmented butt` |
| outline-offset | -3px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.tbl :is(th, td)[data-sel]`, `:is(.tab-btn, .row, .chip, .lib-tile, .l` |
| outline-offset | 2px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 5 à HEAD; ex. `:focus-visible`, `.card:has(.card-open:focus-visible)` |
