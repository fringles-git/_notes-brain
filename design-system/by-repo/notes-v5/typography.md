Source : notes-v5, commits lus : 132, plage : 2026-10-21 à 2026-11-11

Familles, piles, sources, graisses, échelle de tailles, interlignes et espacement des lettres. Les valeurs de `app.css` sont regroupées par valeur distincte : un sélecteur d'exemple (jusqu'à 3) est donné, pas la liste complète.

## 1. Familles de polices (--font, --font-display, polices d'édition)

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| --font | 'Manrope Variable', Manrope, system-ui, -apple-system, 'Segoe UI', sans-serif | looks.css :root, :root[data-look='glass'] | notes-v5@ad232dfb 2026-10-21 | HEAD | pile de l'interface |
| --font | 'Manrope Variable', Manrope, system-ui, sans-serif | looks.css :root[data-look='glass'] | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 | pile de l'interface |
| --font | 'Manrope Variable', Manrope, system-ui, -apple-system, 'Segoe UI', sans-serif | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD | pile de l'interface |
| --font | 'Work Sans Variable', 'Work Sans', system-ui, -apple-system, 'Segoe UI', sans-serif | looks.css :root[data-look='paper'] | notes-v5@ad232dfb 2026-10-21 | HEAD | pile de l'interface |
| --font | 'Work Sans Variable', 'Work Sans', system-ui, sans-serif | looks.css :root[data-look='paper'] | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ 'Work Sans Variable', 'Work Sans', system-ui, -apple-system,) | pile de l'interface |
| --font | system-ui, -apple-system, 'Segoe UI', sans-serif | tokens.css :root | notes-v5@ad232dfb 2026-10-21 | HEAD | pile de l'interface |
| --font | 'Figtree Variable', Figtree, system-ui, -apple-system, 'Segoe UI', sans-serif | tokens.css :root | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ system-ui, -apple-system, 'Segoe UI', sans-serif) | pile de l'interface |
| --font-display | var(--font) | looks.css :root | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 | titres : page, éditeur, bienvenue, feuilles, À propos |
| --font-display | 'Sora Variable', Sora, var(--font) | looks.css :root, :root[data-look='glass'] | notes-v5@ad232dfb 2026-10-21 | HEAD | titres : page, éditeur, bienvenue, feuilles, À propos |
| --font-display | 'Sora Variable', Sora, var(--font) | looks.css :root[data-look='glass'] | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 | titres : page, éditeur, bienvenue, feuilles, À propos |
| --font-display | 'Sora Variable', Sora, var(--font) | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD | titres : page, éditeur, bienvenue, feuilles, À propos |
| --font-display | 'Instrument Serif', Georgia, 'Times New Roman', serif | looks.css :root[data-look='paper'] | notes-v5@ad232dfb 2026-10-21 | HEAD | titres : page, éditeur, bienvenue, feuilles, À propos |
| --font-display | 'Instrument Serif', Georgia, serif | looks.css :root[data-look='paper'] | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ 'Instrument Serif', Georgia, 'Times New Roman', serif) | titres : page, éditeur, bienvenue, feuilles, À propos |
| --font-display | var(--font) | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD | titres : page, éditeur, bienvenue, feuilles, À propos |
| --font-editor-mono | ui-monospace, 'SFMono-Regular', Consolas, monospace | tokens.css :root | notes-v5@1c1fb148 2026-11-11 | HEAD | police d'écriture « Code » (Personnalisation) |
| --font-editor-serif | Georgia, 'Times New Roman', serif | tokens.css :root | notes-v5@1c1fb148 2026-11-11 | HEAD | police d'écriture « Livre » (Personnalisation) |

### Paquets de polices (package.json)

| paquet | plage de version | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| @fontsource-variable/figtree | ^5.2.0 | package.json | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@67979ff5 2026-10-21 | import retiré de App.tsx par notes-v5@945cd023 ; première police par défaut de tokens.css (`--font: 'Figtree Variable'`) ; paquet retiré car plus utilisé (message de 67979ff5) |
| @fontsource-variable/manrope | ^5.3.0 | package.json | notes-v5@b1f17318 2026-10-21 | HEAD | corps du look Glass et Minimal ; variable, sous-ensembles cyrillic, greek, latin-ext, latin, vietnamese dans dist (notes-v5@bbf94fb8) |
| @fontsource-variable/sora | ^5.3.0 | package.json | notes-v5@b1f17318 2026-10-21 | HEAD | titres Glass et Minimal ; sous-ensembles latin-ext et latin dans dist |
| @fontsource-variable/work-sans | ^5.3.0 | package.json | notes-v5@b1f17318 2026-10-21 | HEAD | corps du look Paper ; sous-ensembles latin-ext, latin, vietnamese dans dist |
| @fontsource/instrument-serif | ^5.3.0 | package.json | notes-v5@b1f17318 2026-10-21 | HEAD | titres Paper, graisse 400 seule ; sous-ensembles latin et latin-ext en woff2 et woff dans dist |

Source des polices : paquets fontsource importés dans `src/notes/App.tsx` (auto-hébergés, aucune requête tierce : design-teardown §5). Aucun `<link>` Google Fonts ni `@font-face` écrit à la main dans le code de l'app (`git grep` : seul `public/vendor/pdf.min.js` contient le texte « @font-face », hors sujet). Les `@font-face` du build (dist de notes-v5@bbf94fb8) sont générés par fontsource, tous en `font-display: swap` : Sora Variable 100-800, Manrope Variable 200-800, Work Sans Variable 100-900, Instrument Serif 400, découpés par `unicode-range` (latin, latin-ext, cyrillic, greek, vietnamese selon la police). Pile de repli système : `system-ui, -apple-system, 'Segoe UI', sans-serif` (tokens.css) ; les looks la rallongent (`'Manrope Variable', Manrope, system-ui, -apple-system, 'Segoe UI', sans-serif`).

### Polices citées mais absentes du code

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| Figtree | « Une seule police, Figtree, pour l'interface et les notes » | notes de version héritées de notes-v3 (config.ts puis changelog.ts) | notes-v5@b1f17318 2026-10-21 (entrée datée 2026-10-19) | texte HEAD (historique des versions) | la police elle-même est SUPPRIMÉE : paquet retiré notes-v5@67979ff5 2026-10-21 |
| Literata | « Police des notes au choix : Figtree ou Literata » | idem, entrée datée 2026-10-19 | notes-v5@b1f17318 2026-10-21 | texte HEAD | aucun paquet ni référence de code Literata dans notes-v5 |
| crédits des polices | « Manrope, Sora, Work Sans, Instrument Serif — polices · SIL Open Font License » | changelog.ts (Guide / À propos) | notes-v5@1af74e0e 2026-10-22 | HEAD | le message de 1af74e0e : « the fonts that ship (Manrope, Sora, Work Sans, Instrument Serif), not Figtree » |

## 2. Échelle de tailles de texte

### Jetons

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| --text-2xl | 33px | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --text-2xl | 26px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ 33px) |  |
| --text-2xs | 11px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --text-base | 16px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --text-heading | 28px | looks.css :root[data-look='paper'] | notes-v5@ad232dfb 2026-10-21 | HEAD | titre de feuille |
| --text-heading | var(--text-xl) | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD | titre de feuille |
| --text-input | 16px | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD | les champs ne descendent jamais sous 16px (pas de zoom iOS) |
| --text-label | var(--text-xs) | looks.css :root[data-look='paper'] | notes-v5@ad232dfb 2026-10-21 | HEAD | libellé de section |
| --text-label | var(--text-sm) | tokens.css :root | notes-v5@ad232dfb 2026-10-21 | HEAD | libellé de section |
| --text-lg | 17px | looks.css :root[data-look='glass'] | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --text-lg | 19px | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --text-lg | 17px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ 19px) |  |
| --text-md | 15px | looks.css :root[data-look='glass'] | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --text-md | 16px | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --text-md | 15px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ 16px) |  |
| --text-sm | 14px | looks.css :root[data-look='glass'] | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --text-sm | 14px | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --text-sm | 13.5px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ 14px) |  |
| --text-title | 38px | looks.css :root[data-look='paper'] | notes-v5@ad232dfb 2026-10-21 | HEAD | titre de page, d'éditeur, de bienvenue |
| --text-title | clamp(36px, 10vw, 46px) | looks.css :root[data-look='paper'] | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ 38px) | titre de page, d'éditeur, de bienvenue |
| --text-title | var(--text-heading) | looks.css @media (max-height: 30em) :root[data-look='paper'] | notes-v5@ad232dfb 2026-10-21 | HEAD | titre de page, d'éditeur, de bienvenue |
| --text-title | var(--text-2xl) | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD | titre de page, d'éditeur, de bienvenue |
| --text-title | clamp(30px, 8vw, 38px) | tokens.css :root | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--text-2xl)) | titre de page, d'éditeur, de bienvenue |
| --text-title | var(--text-xl) | tokens.css @media (max-height: 30em) :root | notes-v5@82aa90c2 2026-10-21 | HEAD | titre de page, d'éditeur, de bienvenue |
| --text-title | 26px | tokens.css @media (max-height: 30em) :root | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--text-xl)) | titre de page, d'éditeur, de bienvenue |
| --text-xl | 21px | looks.css :root[data-look='glass'] | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --text-xl | 23px | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --text-xl | 21px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ 23px) |  |
| --text-xs | 12px | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |

### tailles écrites dans app.css (distinctes)

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| font-size | .5em | app.css .title-count | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| font-size | 1.05em | app.css .md-h3 | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| font-size | 1.1em | app.css .card-body .md-h | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| font-size | 1.2em | app.css .md-h2 | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| font-size | 1.4em | app.css .md-h1 | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| font-size | 10px | app.css .glyph sub | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ .6em) |  |
| font-size | 11px | app.css .lib-tag small | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ var(--text-xs)) |  |
| font-size | 15px | app.css .glyph-card | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ var(--text-md)) |  |
| font-size | 17px | app.css .glyph | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ var(--text-lg)) |  |
| font-size | calc(13px + var(--weight) * 7px) | app.css .lib-tag | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ calc(var(--text-sm) + var(--weight) * (var(--text-) |  |
| font-size | var(--text-2xl) | app.css .welcome-title | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| font-size | var(--text-2xs) | app.css .action-btn; .badge; .tab-btn | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--text-xs)) |  |
| font-size | var(--text-base) | app.css .inline-form input; .search-field input | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--text-input)) |  |
| font-size | var(--text-lg) | app.css .calendar-heading h2; .calendar-period; .card-title (+10) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| font-size | var(--text-md) | app.css .card-body; .glyph-card; .guide-text (+12) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| font-size | var(--text-sm) | app.css .about-version, .about-text; .back-chip; .capture-actions small (+39) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| font-size | var(--text-sm) !important | app.css .change-group h4 | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| font-size | var(--text-title) | app.css #page-title; .editor-title | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| font-size | var(--text-xl) | app.css .about-name; .first-use h2; .flashcard-q (+4) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| font-size | var(--text-xl) !important | app.css .pin-input | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| font-size | var(--text-xs) | app.css .action-btn; .badge; .calendar-grid > span (+24) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| font-size | var(--text-input) | app.css .inline-form input; .search-field input | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| font-size | var(--text-label) | app.css .layer h4, .sheet h4; .list-heading; .note-found h2 (+1) | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| font-size | .6em | app.css .glyph sub | notes-v5@67979ff5 2026-10-21 | HEAD |  |
| font-size | calc(var(--text-sm) + var(--weight) * (var(--text-lg) - var(--text-sm))) | app.css .lib-tag | notes-v5@67979ff5 2026-10-21 | HEAD |  |
| font-size | 112.5% | app.css :root[data-font-scale='large'] | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| font-size | 93.75% | app.css :root[data-font-scale='small'] | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| font-size | var(--text-title) | app.css .today-intro h2 | notes-v5@1c1fb148 2026-11-11 | HEAD |  |

## 3. Graisses

### Jetons

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| --weight-body | 500 | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --weight-display | 700 | looks.css :root, :root[data-look='glass'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --weight-display | 700 | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --weight-display | 400 | looks.css :root[data-look='paper'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --weight-display | var(--weight-title) | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --weight-heading | 700 | looks.css :root[data-look='glass'] | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --weight-heading | 600 | looks.css :root[data-look='paper'] | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --weight-heading | 750 | tokens.css :root | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --weight-label | 600 | looks.css :root[data-look='glass'] | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --weight-label | 600 | looks.css :root[data-look='paper'] | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --weight-label | 600 | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --weight-label | 650 | tokens.css :root | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ 600) |  |
| --weight-title | 700 | looks.css :root[data-look='glass'] | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --weight-title | 400 | looks.css :root[data-look='paper'] | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --weight-title | 700 | tokens.css :root | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --weight-title | 800 | tokens.css :root | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ 700) |  |

### graisses écrites dans app.css

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| font-weight | 500 | app.css .change-count; .heading-count | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ var(--weight-body)) |  |
| font-weight | 550 | app.css .chip; .toast | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ var(--weight-body)) |  |
| font-weight | 600 | app.css .back-chip; .flashcard-a; .folder-chip (+12) | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ var(--weight-label)) |  |
| font-weight | 650 | app.css .action-btn; .btn; .lib-folder.is-new (+5) | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ var(--weight-label)) |  |
| font-weight | 700 | app.css .card-title; .change-pill; .layer h4, .sheet h4 (+11) | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ var(--weight-title)) |  |
| font-weight | 750 | app.css .badge; .flashcard-q; .glyph (+4) | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ var(--weight-title)) |  |
| font-weight | 800 | app.css .about-name; .lib-tile b; .news-title | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ var(--weight-title)) |  |
| font-weight | 900 | app.css .glyph-b | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ var(--weight-title)) |  |
| font-weight | calc(550 + var(--weight) * 250) | app.css .lib-tag | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ calc(var(--weight-body) + var(--weight) * (var(--w) |  |
| font-weight | var(--weight-heading) | app.css .layer-title; .tour-title | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--weight-title)) |  |
| font-weight | var(--weight-label) | app.css .action-btn; .back-chip; .btn (+29) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| font-weight | var(--weight-title) | app.css #page-title; .badge; .card-title (+28) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| font-weight | calc(var(--weight-body) + var(--weight) * (var(--weight-title) - var(--weight-body))) | app.css .lib-tag | notes-v5@67979ff5 2026-10-21 | HEAD |  |
| font-weight | var(--weight-body) | app.css .capture-actions small; .change-count; .chip (+3) | notes-v5@67979ff5 2026-10-21 | HEAD |  |

## 4. Interlignes, espacement des lettres, casse

### Jetons

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| --label-case | uppercase | looks.css :root[data-look='paper'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --label-case | none | tokens.css :root | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --label-tracking | .04em | looks.css :root[data-look='paper'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --label-tracking | 0 | tokens.css :root | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --leading | 1.55 | looks.css :root[data-look='paper'] | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --leading | 1.45 | tokens.css :root | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --tracking-heading | -.02em | looks.css :root, :root[data-look='glass'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --tracking-heading | 0 | looks.css :root[data-look='paper'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --tracking-heading | -.02em | tokens.css :root | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --tracking-title | -.035em | looks.css :root, :root[data-look='glass'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --tracking-title | -.025em | looks.css :root[data-look='minimal'] | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --tracking-title | -.01em | looks.css :root[data-look='paper'] | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --tracking-title | -.025em | tokens.css :root | notes-v5@ad232dfb 2026-10-21 | HEAD |  |

### app.css : line-height, letter-spacing, text-transform, font (raccourci), font-family

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| font | 11pt/1.45 var(--font) | app.css @media print #print-area | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| font | 400 var(--text-lg)/1.55 var(--font) | app.css .editor-text | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--weight-body) var(--text-lg)/1.55 var(--font)) |  |
| font | 400 var(--text-md)/var(--leading) var(--font) | app.css body | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--weight-body) var(--text-md)/var(--leading) v) |  |
| font | 600 13px var(--font) | app.css .map-node text | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ var(--weight-label) var(--text-xs) var(--font)) |  |
| font | 600 var(--text-xs)/1 var(--font) | app.css kbd, .kbd | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ var(--weight-label) var(--text-xs)/1 var(--font)) |  |
| font | inherit | app.css .agenda-view select; .legacy-table input; .note-properties :is(input, select) (+3) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| font | var(--weight-body) var(--text-lg)/1.55 var(--font) | app.css .editor-text; .rich-editor .tiptap | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| font | var(--weight-body) var(--text-md)/var(--leading) var(--font) | app.css body | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| font | var(--weight-display) var(--text-heading)/1.2 var(--font-display) | app.css .about-name; .first-use h2; .news-title (+1) | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| font | var(--weight-display) var(--text-title)/1.05 var(--font-display) | app.css #page-title | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| font | var(--weight-display) var(--text-title)/1.1 var(--font-display) | app.css .welcome-title | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| font | var(--weight-display) var(--text-title)/1.12 var(--font-display) | app.css .editor-title | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| font | var(--weight-label) var(--text-xs) var(--font) | app.css .map-node text | notes-v5@67979ff5 2026-10-21 | HEAD |  |
| font | var(--weight-label) var(--text-xs)/1 var(--font) | app.css kbd, .kbd | notes-v5@67979ff5 2026-10-21 | HEAD |  |
| font-family | var(--font) | app.css .md-h | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| font-family | var(--font-editor-mono) | app.css :root[data-editor-font='mono'] :is(.editor-text, .rich-editor .tiptap) | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| font-family | var(--font-editor-serif) | app.css :root[data-editor-font='serif'] :is(.editor-text, .rich-editor .tiptap | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| font-variant-numeric | tabular-nums | app.css .card-progress; .count; .lib-tile b (+10) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| letter-spacing | -.012em | app.css .card-title | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| letter-spacing | -.015em | app.css .md-h; .tab-btn | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| letter-spacing | -.01em | app.css .action-btn; .flashcard-q; .layer-title | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| letter-spacing | -.025em | app.css #page-title; .editor-title | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ var(--tracking-title)) |  |
| letter-spacing | -.02em | app.css .first-use h2; .glyph; .sheet-head h2 (+1) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| letter-spacing | .02em | app.css .glyph-card | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| letter-spacing | .5em | app.css .pin-input | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| letter-spacing | 0 | app.css .list-heading.is-section; .title-count | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| letter-spacing | 0 !important | app.css .change-group h4 | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| letter-spacing | -.025em | app.css .tab-btn | notes-v5@ad232dfb 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| letter-spacing | var(--label-tracking) | app.css .layer h4, .sheet h4; .list-heading; .note-found h2 (+1) | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| letter-spacing | var(--tracking-heading) | app.css .about-name; .first-use h2; .news-title (+1) | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| letter-spacing | var(--tracking-title) | app.css #page-title; .editor-title; .welcome-title | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| letter-spacing | -.025em | app.css .ctl.is-stack | notes-v5@2466c955 2026-10-24 | HEAD |  |
| letter-spacing | -.035em | app.css .today-intro h2 | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| line-height | 1.05 | app.css #page-title | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| line-height | 1.12 | app.css .editor-title | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| line-height | 1.25 | app.css .md-h1; .widget-title | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| line-height | 1.28 | app.css .card-title | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| line-height | 1.45 | app.css .card-body | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| line-height | 1.5 | app.css .guide-text | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| line-height | var(--h) | app.css .lib-tag | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| line-height | 1.3 | app.css :root[data-look='minimal'] .card-title | notes-v5@bb3fa23d 2026-11-10 | HEAD |  |
| line-height | 1.15 | app.css .today-intro h2 | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| line-height | 1.6 | app.css .tidy-lines; .today-grid .destination-empty; .today-intro > p:last-child | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| line-height | 1.65 | app.css .folder-sync :is(p, ol) | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| text-transform | none !important | app.css .change-group h4 | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| text-transform | none | app.css .list-heading.is-section | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| text-transform | var(--label-case) | app.css .layer h4, .sheet h4; .list-heading; .note-found h2 (+1) | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| text-transform | capitalize | app.css .calendar-heading h2 | notes-v5@32e9bd9e 2026-11-08 | SUPPRIMÉ notes-v5@f1b51602 2026-11-08 |  |
| text-transform | capitalize | app.css .calendar-period | notes-v5@f1b51602 2026-11-08 | HEAD |  |

### looks.css : propriétés typographiques écrites sur des composants

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| font-family | var(--font-display) | looks.css looks:#page-title, .editor-title, .welcome-title, .sheet-head h2, .fir | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| font-size | calc(var(--text-xl) + 4px) | looks.css looks:[data-look='paper'] :is(.sheet-head h2, .first-use h2, .news-tit | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| font-size | var(--text-xs) | looks.css looks:[data-look='paper'] h4 | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| font-weight | 400 | looks.css looks:[data-look='paper'] :is(#page-title, .editor-title, .welcome-tit; looks:[data-look='paper'] :is(.sheet-head h2, .first-use h2, .news-tit | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| letter-spacing | -.01em | looks.css looks:[data-look='paper'] :is(#page-title, .editor-title, .welcome-tit | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| letter-spacing | -.035em | looks.css looks:[data-look='glass'] #page-title, [data-look='glass'] .editor-tit | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| letter-spacing | .06em | looks.css looks:[data-look='paper'] h4 | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| letter-spacing | 0 | looks.css looks:[data-look='paper'] :is(.sheet-head h2, .first-use h2, .news-tit | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| text-transform | uppercase | looks.css looks:[data-look='paper'] h4 | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
