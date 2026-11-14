Source : notes-aistudio, commits lus : 7 (hors fusion 20ad6c90), plage : 2026-10-31 à 2026-11-06

Références : A0 = notes-aistudio@9021b9bc 2026-10-31 (premier commit avec contenu : appli importée, le commit cce6e01b ne contient qu'un README), A1 = @d2819fcc 2026-11-02, A2 = @6dbe9114 2026-11-05, A3 = @6fc4b9d7 2026-11-05 (CSS identique à @5a430a7b et @407c8f6d, qui ne touchent pas aux styles). HEAD = @407c8f6d 2026-11-06. Les tableaux générés listent une ligne par couple (propriété, valeur) ; « règle(s) » = nombre de déclarations CSS portant cette valeur ; « dernier état » donne le commit qui retire la valeur.

Police : `--font: 'Figtree Variable', Figtree, system-ui, -apple-system, 'Segoe UI', sans-serif` (A0 à HEAD), source : paquet fontsource `@fontsource-variable/figtree` ^5.3.0 (package.json, A0 à HEAD), importé par `src/main.tsx`. Échelle : `--text-xs` 12px, `--text-sm` 13.5px, `--text-md` 15px, `--text-base` 16px (champs, sans zoom iOS), `--text-lg` 17px, `--text-xl` 21px, `--text-2xl` 26px, `--text-title` clamp(30px, 8vw, 38px) ; 26px en paysage court ; graisses `--weight-title` 800, `--weight-heading` 750, `--weight-label` 650 ; `--leading` 1.45 (Papier : 1.55). Valeurs détaillées ci-dessous (jetons puis usages). Polices d'éditeur (A1) : système, serif (`'New York', Georgia, 'Times New Roman', serif`), mono. Préférence de taille (A1) : `[data-font-scale='small']` 14px, `large` 18px sur l'élément racine. Aucune police supprimée.

## Jetons de typographie
| jeton | valeur | première apparition | dernier état | défini dans |
|---|---|---|---|---|
| `--font` | 'Figtree Variable', Figtree, system-ui, -apple-system, 'Segoe UI', sans-serif | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--leading` | 1.45 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--leading` | 1.55 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | looks.css `:root[data-look='paper']` |
| `--text-2xl` | 26px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--text-base` | 16px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--text-lg` | 17px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--text-md` | 15px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--text-sm` | 13.5px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--text-title` | clamp(30px, 8vw, 38px) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--text-title` | 26px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root [@media (max-height: 30em)]` |
| `--text-xl` | 21px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--text-xs` | 12px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--weight-heading` | 750 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--weight-label` | 650 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |
| `--weight-title` | 800 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css `:root` |

## Usages dans app.css (une ligne par valeur)
| propriété | valeur | première apparition | dernier état | notes |
|---|---|---|---|---|
| font-family | 'New York', Georgia, 'Times New Roman', serif | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `[data-editor-font='serif'] .editor-text,` |
| font-family | inherit | notes-aistudio@d2819fcc 2026-11-02 | SUPPRIMÉ notes-aistudio@6fc4b9d7 2026-11-05 | 1 règle(s) à l'origine; ex. `.quick-capture-input` |
| font-family | ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.settings-kbd`, `[data-editor-font='mono'] .editor-text, ` |
| font-family | ui-monospace, SFMono-Regular, Menlo, monospace | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 3 règle(s) à l'origine, 3 à HEAD; ex. `.diag-score-pill`, `.diag-tag` |
| font-family | var(--font) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.md-h` |
| font-size | .5em | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.title-count` |
| font-size | 1.05em | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.md-h3` |
| font-size | 1.1em | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.card-body .md-h` |
| font-size | 1.2em | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.md-h2` |
| font-size | 1.4em | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.md-h1` |
| font-size | 10.5px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.main-dock .tab-btn span` |
| font-size | 10px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `.glyph sub`, `.pwa-hero-tag` |
| font-size | 11.5px | notes-aistudio@d2819fcc 2026-11-02 | SUPPRIMÉ notes-aistudio@6dbe9114 2026-11-05 | 1 règle(s) à l'origine; ex. `.main-dock .tab-btn span` |
| font-size | 11px | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `.lib-tag small`, `.main-dock .tab-btn span` |
| font-size | 14px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `[data-font-scale='small']` |
| font-size | 15px | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@d2819fcc 2026-11-02 | 1 règle(s) à l'origine; ex. `.glyph-card` |
| font-size | 17px | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@d2819fcc 2026-11-02 | 1 règle(s) à l'origine; ex. `.glyph` |
| font-size | 18px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `[data-font-scale='large']` |
| font-size | 20px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.hero-avatar`, `.avatar-preview` |
| font-size | 24px | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.emoji-btn` |
| font-size | calc(13px + var(--weight) * 7px) | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@d2819fcc 2026-11-02 | 1 règle(s) à l'origine; ex. `.lib-tag` |
| font-size | calc(var(--text-sm) + var(--weight) * 7px) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.lib-tag` |
| font-size | clamp(var(--text-lg), 5.5vw, var(--text-title)) | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `#page-title` |
| font-size | var(--text-2xl) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.welcome-title` |
| font-size | var(--text-base) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 3 règle(s) à l'origine, 7 à HEAD; ex. `.search-field input`, `.inline-form input` |
| font-size | var(--text-lg) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 9 règle(s) à l'origine, 10 à HEAD; ex. `.list-heading.is-section`, `.card-title` |
| font-size | var(--text-md) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 10 règle(s) à l'origine, 13 à HEAD; ex. `.card-body`, `.note-list.is-compact .card-title` |
| font-size | var(--text-md) !important | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.change-group h4` |
| font-size | var(--text-sm) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 38 règle(s) à l'origine, 51 à HEAD; ex. `.chip`, `.pill` |
| font-size | var(--text-sm) !important | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@d2819fcc 2026-11-02 | 1 règle(s) à l'origine; ex. `.change-group h4` |
| font-size | var(--text-title) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 1 à HEAD; ex. `#page-title`, `.editor-title` |
| font-size | var(--text-xl) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 8 règle(s) à l'origine, 10 à HEAD; ex. `.first-use h2`, `.sheet-head h2` |
| font-size | var(--text-xl) !important | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.pin-input` |
| font-size | var(--text-xs) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 22 règle(s) à l'origine, 50 à HEAD; ex. `.card-meta`, `.card-footer` |
| font-weight | 500 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 4 à HEAD; ex. `.heading-count`, `.change-count` |
| font-weight | 550 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 4 à HEAD; ex. `.chip`, `.toast` |
| font-weight | 600 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 16 règle(s) à l'origine, 24 à HEAD; ex. `.text-btn`, `.title-count` |
| font-weight | 650 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 10 règle(s) à l'origine, 16 à HEAD; ex. `.btn`, `.snippet-source` |
| font-weight | 700 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 16 règle(s) à l'origine, 28 à HEAD; ex. `.list-heading`, `.card-title` |
| font-weight | 750 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 7 règle(s) à l'origine, 11 à HEAD; ex. `.md-h`, `.sel-count` |
| font-weight | 800 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 3 règle(s) à l'origine, 7 à HEAD; ex. `.about-name`, `.news-title` |
| font-weight | 900 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.glyph-b` |
| font-weight | calc(550 + var(--weight) * 250) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.lib-tag` |
| font-weight | normal | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.settings-row .row-label .option-note` |
| font-weight | var(--weight-heading) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 3 règle(s) à l'origine, 5 à HEAD; ex. `.layer-title`, `.tour-title` |
| font-weight | var(--weight-label) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 3 règle(s) à l'origine, 3 à HEAD; ex. `.first-action`, `.tab-btn` |
| font-weight | var(--weight-title) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 6 règle(s) à l'origine, 6 à HEAD; ex. `#page-title`, `.first-use h2` |
| letter-spacing | -.012em | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.card-title` |
| letter-spacing | -.015em | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.md-h`, `.tab-btn` |
| letter-spacing | -.01em | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 4 règle(s) à l'origine, 4 à HEAD; ex. `.action-btn`, `.layer-title` |
| letter-spacing | -.025em | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `#page-title`, `.editor-title` |
| letter-spacing | -.02em | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 4 règle(s) à l'origine, 8 à HEAD; ex. `.first-use h2`, `.sheet-head h2` |
| letter-spacing | -.03em | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.main-dock .tab-btn span` |
| letter-spacing | -.04em | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@d2819fcc 2026-11-02 | 1 règle(s) à l'origine; ex. `.main-dock .tab-btn span` |
| letter-spacing | .02em | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.glyph-card` |
| letter-spacing | .03em | notes-aistudio@6dbe9114 2026-11-05 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.changelog-hero-badge` |
| letter-spacing | .04em | notes-aistudio@d2819fcc 2026-11-02 | SUPPRIMÉ notes-aistudio@6fc4b9d7 2026-11-05 | 1 règle(s) à l'origine; ex. `.quick-capture-title` |
| letter-spacing | .05em | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.settings-group-title` |
| letter-spacing | .06em | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 3 à HEAD; ex. `.backup-code`, `.code-input` |
| letter-spacing | .5em | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.pin-input` |
| letter-spacing | 0 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.title-count` |
| letter-spacing | 0 !important | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.change-group h4` |
| line-height | 1 | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.avatar-initials` |
| line-height | 1.05 | notes-aistudio@9021b9bc 2026-10-31 | SUPPRIMÉ notes-aistudio@d2819fcc 2026-11-02 | 1 règle(s) à l'origine; ex. `#page-title` |
| line-height | 1.12 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.editor-title` |
| line-height | 1.15 | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `#page-title` |
| line-height | 1.25 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 2 règle(s) à l'origine, 1 à HEAD; ex. `.md-h1`, `.widget-title` |
| line-height | 1.28 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.card-title` |
| line-height | 1.3 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.backup-code` |
| line-height | 1.35 | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.install-banner-sub` |
| line-height | 1.45 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 4 à HEAD; ex. `.card-body`, `.change-group ul` |
| line-height | 1.5 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `.guide-text`, `.changelog-hero-sub` |
| line-height | 1.6 | notes-aistudio@d2819fcc 2026-11-02 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `.install-step-card ol`, `.license-modal-body` |
| line-height | var(--h) | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.lib-tag` |
| text-transform | none !important | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.change-group h4` |
| text-transform | uppercase | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 1 règle(s) à l'origine, 3 à HEAD; ex. `.code-input`, `.settings-group-title` |
