# Typographie : polices, piles, graisses, tailles, interlignes, espacement des lettres

Portée : inventaire de tout ce qui touche au texte dans les neuf dépôts (familles et sources de polices, piles `font-family`, graisses, échelle de tailles, interlignes, espacement des lettres, casse et autres propriétés de texte), sans recommandation.

## 1. Colonnes et légende

| Colonne | Version | Dépôt (branche) | Période | Nature |
|---|---|---|---|---|
| E0 | Notes 2.x et 26.10.9 à 26.10.15 | `notes-v3` (branche `notes-site`, aussi dans `brandonlazarre`) | 2026-10-09 à 2026-10-15 | Appli mono-fichier minifiée, 9 builds, aucune source. Design lu dans le CSS du bundle. |
| E1 | Notes v3 (source) | `notes-v3` (`main`) | 2026-10-18 à 2026-10-31 | React + Zustand, CSS natif. Looks Verre, Papier, Acrylique. |
| E2 | notepad-pwa | `notepad-pwa` | 2026-10-20 à 2026-11-10 | Prototype JS vanille. Fichiers permutés à HEAD : le vrai CSS est dans l'historique. |
| E3 | Notes 4 | `notes-4` | 2026-10-21 à 2026-11-09 | SvelteKit, localStorage. |
| E4 | Notes v5 | `notes-v5` | 2026-10-21 à 2026-11-11 | React statique, Dexie, Tiptap. Looks Soft Glass Pro, Paper and Ink, Minimal. |
| E5 | Quick Notes | `notes-svelte` | 2026-10-22 | SvelteKit, Dexie. |
| E6 | Notes v6 « Mind Space » | `notes-v6` | 2026-10-28 à 2026-11-02 | SvelteKit. Contient aussi 4 branches jamais fusionnées (marquées « non fusionné » dans les entrées). |
| E7 | AI Studio | `notes-aistudio` | 2026-10-31 à 2026-11-06 | Copie de `notes-v3` (même arbre `src` au premier commit), puis réécriture des Réglages. |
| E8 | MindSpace (ancien) | `mindspace-old` | 2026-11-02 à 2026-11-12 | React + Tiptap + Yjs + Tailwind 4. |
| E9 | mindspace-core | `mindspace-core` | 2026-11-10 à 2026-11-12 | Code actuel. Design flat décidé le 2026-11-11. |

Notes de lignée : E1 et E7 partagent du code au départ (une valeur de E7 identique à E1 s'affiche `= E1` quand les colonnes intermédiaires montrent autre chose). Les dépôts se recouvrent dans le temps : l'ordre des colonnes est celui de la première apparition, pas une filiation stricte. `notes-v5` et `notes-v6` sont des ports parallèles de `notes-v3`.

Légende des cellules :

- `valeur` : la valeur ou l'état dans cette version ;
- `=` : identique à la dernière valeur affichée à gauche (la valeur n'est pas répétée) ; `= E1` : identique à la valeur de la colonne E1 (cas de E7, quand les colonnes entre E1 et E7 montrent autre chose) ;
- `A → B` : changé pendant cette version (références en section 3) ;
- `—` : absent de cette version, ou non couvert par les entrées (voir section 6 pour les lignes concernées) ;
- `✗ <réf>` : supprimé dans cette version (référence du commit) ; `valeur ✗ <réf>` : créé puis supprimé dans la même version.

Conventions de lecture :

- Les références en cellule sont des `sha8` du dépôt de la colonne (E0 et E1 : `notes-v3`). Les références complètes `dépôt@sha8 date` sont en sections 3 et 4.
- Les tailles sont rangées par valeur en pixels, une ligne par palier ; les valeurs en `rem` sont converties à 16 px (la conversion est celle des entrées pour E9 : « 0.9375rem (15 px) ») ; la valeur d'origine est gardée entre parenthèses. Un jeton dont la valeur a changé apparaît donc sur deux lignes (ancienne et nouvelle valeur).
- Famille (colonne `fam.`) : A polices et sources ; B piles et attributs de police ; C graisses ; D tailles ; E interlignes ; F espacement des lettres ; G casse et autres propriétés de texte ; H échelle documentée (DESIGN.md de E6) ; I classes Tailwind de E8.
- Cellules d'E2 : dernier CSS connu (`notepad-pwa@76dfefe5`), le CSS n'existant plus à HEAD (voir sections 4 et 6). Références d'E2 : A = `3c6f6152`, B = `576a8c9d`, C = `76dfefe5`, D = `a488cc67` (tous 2026-10-20). Références d'E3 : N0 = `94f8e515`, N1 = `28ad8ce4`, N2 = `6f00cf58`, N3 = `854f07b5`, N4 = `8150588e` (tous 2026-10-22). E5 : S1 = `2923c47d`, S2 = `112ae9d8`, S3 = `96889f8d` (2026-10-22). E6 : V0 = `57c25ea2` (2026-10-28), V1 = `1bae3e15` (2026-10-28), V4 = `1f5a70d2` (2026-10-29), V5 = `c80dbb09` (2026-10-31), V9 = `c2701fc1` (2026-11-02). E7 : A0 = `9021b9bc` (2026-10-31), A1 = `d2819fcc` (2026-11-02), A2 = `6dbe9114` et A3 = `6fc4b9d7` (2026-11-05), HEAD = `407c8f6d` (2026-11-06).
- Les nombres « N règles » sont le nombre de déclarations CSS portant la valeur à l'état final de la version (E6, E7, E8) ; « règles » sans nombre : valeur utilisée sans décompte dans les entrées.

## 2. Matrice

| fam. | élément | alias | E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| A | Figtree (variable) | Figtree Variable | `@font-face` en ligne (woff2 base64, latin-ext + latin, 300-900, swap) | paquet `@fontsource-variable/figtree` ^5.2.0 (4da62555) → ^5.3.0 (abd0b64e) | — | — | paquet `@fontsource-variable/figtree` ^5.2.0 ✗ 67979ff5 | — | paquet 5.3.0 ; `@font-face` locaux latin dès c80dbb09 | paquet `@fontsource-variable/figtree` ^5.3.0 | — | — |
| A | Précharge de la face Figtree latine | plugin `notes-font-preload` | — | `<link rel="preload" as="font" type="font/woff2" crossorigin>` (c590aacb) | — | — | — | — | — | — | — | — |
| A | Literata (variable) | Literata Variable | — | paquet ^5.3.0, 200-900, normal + italique (d6af8790) ✗ ef23bea4 | — | — | — | — | paquet 5.3.0 ; `@font-face` local latin dès c80dbb09 (mode papier) | — | — | — |
| A | Manrope | Manrope Variable (E4), Manrope (E5) | — | — | — | — | paquet `@fontsource-variable/manrope` ^5.3.0 (corps looks Glass et Minimal) | paquet `@fontsource/manrope` ^5.0.0 (2923c47d) → ^5.3.0 (112ae9d8) | — | — | — | — |
| A | Sora (variable) | Sora Variable | — | — | — | — | paquet `@fontsource-variable/sora` ^5.3.0 (titres Glass et Minimal) | — | — | — | — | — |
| A | Work Sans (variable) | Work Sans Variable | — | — | — | — | paquet `@fontsource-variable/work-sans` ^5.3.0 (corps look Paper) | — | — | — | — | — |
| A | Instrument Serif | — | — | — | — | — | paquet `@fontsource/instrument-serif` ^5.3.0, graisse 400 seule (titres look Paper) | — | — | — | — | — |
| A | JetBrains Mono (variable) | JetBrains Mono Variable | — | — | — | — | — | — | paquet 5.3.0 ; `@font-face` local latin 100-800 dès c80dbb09 | — | — | — |
| A | Inter | — | — | — | nom dans la pile, non chargée (576a8c9d) ✗ a488cc67 | nom dans `--font-ui` et `--font-display`, non chargée (94f8e515) | — | — | — | — | import `@blocknote/core/fonts/inter.css` (0bdaf5ca) ✗ dbbcaa29 | — |
| A | Arial | — | chaîne `Arial` dans l'export PowerPoint (pptxgenjs), JS du bundle (43a8615b) | — | — | — | — | — | — | — | — | — |
| A | Chargement : sous-ensembles et `font-display` | — | Figtree : latin-ext + latin, `swap` | Figtree : latin-ext + latin ; Literata : latin seul | — | — | dist bbf94fb8, `swap` : Manrope cyrillic, greek, latin-ext, latin, vietnamese ; Sora latin-ext, latin ; Work Sans latin-ext, latin, vietnamese ; Instrument Serif latin, latin-ext | — | paquets complets (V0 à V4) → `@font-face` locaux latin (U+0000-00FF…), `swap` (c80dbb09) | — | — | — |
| A | `system-ui` | — | dans la pile | = | pile de base (3c6f6152) ✗ 576a8c9d | — | dans la pile | — | = | = | = | = |
| A | `-apple-system` | — | dans la pile | = | pile de base (3c6f6152) ✗ 576a8c9d | — | dans la pile | — | — | = | dans la pile (`--font-sans`) | — |
| A | `BlinkMacSystemFont` | — | — | — | pile de base (3c6f6152) ✗ 576a8c9d | — | — | — | — | — | — | — |
| A | `"Segoe UI"` | — | dans la pile | = | = | = | = | — | — | = | dans la pile (`--font-sans`) | — |
| B | Pile interface (corps) | `--font-family` (E0), `--font` (E1, E4, E7), `--font-ui` (E3), `--font-sans` (E6, E8), `--ms-font` (E9) | `"Figtree Variable", Figtree, system-ui, -apple-system, "Segoe UI", sans-serif` | = | `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` → `Inter, "Segoe UI", sans-serif` (576a8c9d) | `Inter, "Segoe UI", sans-serif` | `"Figtree Variable", Figtree, system-ui, -apple-system, "Segoe UI", sans-serif` → `system-ui, -apple-system, "Segoe UI", sans-serif` (ad232dfb) | `'Manrope', sans-serif` | `'Figtree Variable', 'Figtree', system-ui, sans-serif` | = E1 | `system-ui, sans-serif` → `system-ui, -apple-system, "Segoe UI", sans-serif` via `--font-sans` (591eb91e, b44de130) | `system-ui, sans-serif` |
| B | Pile interface, looks Glass et Minimal | `--font` (looks.css) | — | — | — | — | `'Manrope Variable', Manrope, system-ui, sans-serif` (b1f17318) → `'Manrope Variable', Manrope, system-ui, -apple-system, 'Segoe UI', sans-serif` (ad232dfb) | — | — | — | — | — |
| B | Pile interface, look Paper | `--font` (looks.css) | — | — | — | — | `'Work Sans Variable', 'Work Sans', system-ui, sans-serif` (b1f17318) → `'Work Sans Variable', 'Work Sans', system-ui, -apple-system, 'Segoe UI', sans-serif` (ad232dfb) | — | — | — | — | — |
| B | Pile titres (défaut) | `--font-display` | — | — | — | `"Inter", "Segoe UI", sans-serif` (défini, jamais lu par un composant) | `var(--font)` (82aa90c2, tokens.css) | — | — | — | — | — |
| B | Pile titres, looks Glass et Minimal | `--font-display` (looks.css) | — | — | — | — | `var(--font)` (b1f17318) → `'Sora Variable', Sora, var(--font)` (ad232dfb ; Minimal : feebaaea) | — | — | — | — | — |
| B | Pile titres, look Paper | `--font-display` (looks.css) | — | — | — | — | `'Instrument Serif', Georgia, serif` (b1f17318) → `'Instrument Serif', Georgia, 'Times New Roman', serif` (ad232dfb) | — | — | — | — | — |
| B | Pile serif (police d'écriture) | `--font-family-serif` (E0), `--font-serif` (E1, E6), `--font-editor-serif` (E4) | `ui-serif, "New York", "Iowan Old Style", Charter, Georgia, serif` | `ui-serif, 'New York', 'Iowan Old Style', Charter, Georgia, serif` → `'Literata Variable', Literata, Georgia, serif` (d6af8790) ✗ ef23bea4 | — | — | `Georgia, 'Times New Roman', serif` (1c1fb148) | — | `'Literata Variable', 'Literata', Georgia, serif` | `'New York', Georgia, 'Times New Roman', serif` (d2819fcc) | — | — |
| B | Pile monospace | `--font-editor-mono` (E4), `--font-mono` (E6, E8), `--ms-font-mono` (E9) | — | — | — | — | `ui-monospace, 'SFMono-Regular', Consolas, monospace` (1c1fb148) | — | `'JetBrains Mono Variable', 'JetBrains Mono', monospace` | `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace` (d2819fcc) | `ui-monospace, SFMono-Regular, Consolas, monospace` (77149a05) | `ui-monospace, monospace` (0a15c7ce) |
| B | Pile monospace courte (diagnostic) | — | — | — | — | — | — | — | — | `ui-monospace, SFMono-Regular, Menlo, monospace` (6dbe9114) | — | — |
| B | Pile monospace du journal des versions | changelog.css | — | — | — | — | — | — | — | — | `ui-monospace, SFMono-Regular, Consolas, monospace` → `inherit` (28bcfe04) → `var(--font-mono, ui-monospace, SFMono-Regular, monospace)` (88d1ec33) ✗ 7e3da2f4 | — |
| B | Pile de la fenêtre flottante (`document.write`) | — | — | — | `system-ui,sans-serif` (3c6f6152) | — | — | — | — | — | — | — |
| B | Repli HTML pré-React | attribut `style` de `index.html` | — | — | — | — | — | — | — | — | `font:16px/1.6 system-ui` (997adc1f) | — |
| B | Corps de texte global (raccourci `font`) | `body`, `:root` | `var(--font-weight-regular) var(--font-size-base)/var(--font-leading-normal) var(--font-family)` | `400 var(--text-md)/var(--leading) var(--font)` | — | `:root { font-family: var(--font-ui); line-height: 1.5; font-weight: 500 }` ; `body { font-family: var(--font-ui) }` dès 28ad8ce4 | `400 var(--text-md)/var(--leading) var(--font)` → `var(--weight-body) var(--text-md)/var(--leading) var(--font)` (82aa90c2) | `--text-body` 16 px / `--line-body` 24 px (jetons) | `400 15px/1.5 var(--font-sans)` → `400 var(--text-md)/1.5 var(--font-sans)` (c80dbb09) | — | `font-family: system-ui, sans-serif` sur `:root` → `font-family: var(--font-sans)` (b44de130) | `font-family: var(--ms-font)` ; contenu des notes `--ms-text-size` 1rem / `--ms-text-leading` 1.6 |
| B | Impression (`#print-area`, `font`) | — | `12pt/1.5 var(--font-family)` | `11pt/1.45 var(--font-notes)` (4da62555) → `11pt/1.45 var(--font)` (ef23bea4) | — | — | `11pt/1.45 var(--font)` | — | — | — | — | — |
| B | Police des champs et boutons | `font: inherit` | `button, input, textarea` | `button, input, textarea, select` | `boutons, input, textarea` | — | `.agenda-view select`, `.note-properties` (6 sélecteurs listés) | — | `button, input, textarea, select` | — | — | boutons, champs, `.ms-note-row`, `.ms-search` (128050ce) |
| B | Sélecteur de police d'écriture (attribut) | — | `[data-font=serif]` → `--font-family-notes` | `body[data-font='serif']` → `--font-notes` (réglage « Police des notes ») ✗ ef23bea4 | — | — | `:root[data-editor-font='mono'\|'serif']` (1c1fb148) | — | — | `[data-editor-font='serif'\|'mono']` (d2819fcc) | — | — |
| B | Préférence de taille de texte (`data-font-scale`) | — | — | — | — | — | `small` 93,75 % ; `large` 112,5 % (1c1fb148) | — | — | `small` 14 px ; `large` 18 px, sur l'élément racine (d2819fcc) | — | — |
| B | Jeton de police des notes | `--font-family-notes` (E0), `--font-notes` (E1) | `var(--font-family)` | `var(--font)` (4da62555) ✗ ef23bea4 | — | — | — | — | — | — | — | — |
| C | Graisse 400 | `--font-weight-regular` (E0) | jeton `--font-weight-regular` (corps) | `font` du corps et de `.editor-text` | — | — | `font` du corps et de `.editor-text` → jeton `--weight-display` (look Paper) | chargée ; valeur par défaut | `font` du corps (`body`) | `normal` (d2819fcc) | — | — |
| C | Graisse 430 | — | — | — | — | — | — | — | 1 règle (mode papier, titre de note) | — | — | — |
| C | Graisse 500 | `--font-weight-medium` (E0) | jeton `--font-weight-medium` | règles | — | `:root` (`font-weight: 500`) | règles → jeton `--weight-body` (82aa90c2) | chargée, jamais utilisée dans les composants lus | — | = E1 | — | — |
| C | Graisse 550 | — | — | règles | — | — | règles ✗ 67979ff5 | — | — | = E1 | — | — |
| C | Graisse 600 | `--font-weight-semibold` (E0) | jeton `--font-weight-semibold` | règles | — | — | règles → jeton `--weight-label` (82aa90c2) | — | 4 règles | = E1 | 6 règles | boutons, dock, titres de lignes, étiquettes |
| C | Graisse 620 | — | — | — | — | — | — | — | 6 règles | — | — | — |
| C | Graisse 630 | — | — | — | — | — | — | — | 1 règle | — | — | — |
| C | Graisse 650 | — | — | jeton `--weight-label` (35c0380c) et règles | — | — | jeton `--weight-label` et règles ✗ 82aa90c2 | — | 6 règles | = E1 | 5 règles | — |
| C | Graisse 670 | — | — | — | — | — | — | — | 1 règle | — | — | — |
| C | Graisse 680 | — | — | — | — | — | — | — | 1 règle | — | — | — |
| C | Graisse 700 | `--font-weight-bold` (E0) | jeton `--font-weight-bold` | règles | règles (`.timer-display`, `.brand-mark`, `#note-title`) | règles (`.panel-head`, `.dock-item`, `.fab`, `.button`) | règles → jeton `--weight-title` (82aa90c2) | chargée ; règles | 6 règles | = E1 | 13 règles | `.ms-tool`, `.ms-title`, texte surligné `mark` |
| C | Graisse 720 | — | — | — | — | — | — | — | 1 règle (`.eyebrow`) | — | — | — |
| C | Graisse 750 | — | — | jeton `--weight-heading` (35c0380c) et règles | — | — | jeton `--weight-heading` et règles ✗ 82aa90c2 | — | — | = E1 | 4 règles | — |
| C | Graisse 760 | — | — | — | — | — | — | — | 1 règle | — | — | — |
| C | Graisse 800 | `--font-weight-heavy` (E0) | jeton `--font-weight-heavy` | jeton `--weight-title` (35c0380c) et règles | — | règles (`h1`, `.eyebrow`, `.title-input`) | jeton `--weight-title` et règles ✗ 82aa90c2 | chargée ; règles | 1 règle | = E1 | 1 règle (titre h1 de l'éditeur) | — |
| C | Graisse 900 | — | — | règles (`.glyph-b`) | — | — | règles (`.glyph-b`) ✗ 67979ff5 | — | — | = E1 | — | — |
| C | Graisse en calcul `calc(550 + var(--weight) * 250)` | `.lib-tag` | — | `calc(550 + var(--weight) * 250)` | — | — | `calc(550 + var(--weight) * 250)` → `calc(var(--weight-body) + var(--weight) * (var(--weight-title) - var(--weight-body)))` (67979ff5) | — | — | = E1 | — | — |
| C | Plages de graisse chargées | — | Figtree 300-900 | Figtree 300-900 ; Literata 200-900 (d6af8790, ✗ ef23bea4) | — | — | Manrope 200-800 ; Sora 100-800 ; Work Sans 100-900 ; Instrument Serif 400 (dist bbf94fb8) | Manrope 400, 500, 700, 800 | Figtree 300-900 ; Literata 200-900 ; JetBrains Mono 100-800 (c80dbb09) | — | — | — |
| D | 8 px | — | — | — | — | — | — | — | 1 règle (`.metric span`) ✗ 1bae3e15 | — | — | — |
| D | 9 px | — | — | — | — | — | — | — | 11 règles ✗ 1bae3e15 | — | — | — |
| D | 9,92 px (.62rem) | — | — | — | — | — | — | — | — | — | 1 règle (`.ms-create-button`, aeca0395) | — |
| D | 10 px | — | — | `.glyph sub` | — | — | `.glyph sub` ✗ 67979ff5 | — | 20 règles ✗ 1bae3e15 | `.glyph sub`, `.pwa-hero-tag` | — | — |
| D | 10,5 px | — | — | jeton `--text-2xs` (4da62555) ✗ 35c0380c | — | — | — | — | — | `.main-dock .tab-btn span` (d2819fcc) | — | — |
| D | 10,56 px (.66rem) | — | — | — | — | — | — | — | — | — | 1 règle (`.ms-main-links button`, aeca0395) | — |
| D | 10,72 px (.67rem) | — | — | — | — | — | — | — | — | — | libellé « latest » du journal (changelog.css, 83de6dd4) ✗ 7e3da2f4 | — |
| D | 11 px | — | jeton `--font-size-label-min` | `.lib-tag small` ; jeton `--text-2xs` (35c0380c, ✗ fe7ee2da) | — | — | jeton `--text-2xs`, `.lib-tag small` (b1f17318) ✗ 67979ff5, 82aa90c2 | — | 18 règles ✗ 1bae3e15 | `.lib-tag small`, `.main-dock .tab-btn span` | — | — |
| D | 11,04 px (.69rem) | — | — | — | — | — | — | — | — | — | étiquette de catégorie du journal (changelog.css, 83de6dd4) ✗ 7e3da2f4 | — |
| D | 11,2 px (.7rem) | — | — | — | — | `.eyebrow` | — | `.pin-badge`, `.tag-pill` | — | — | badge Nouveau (changelog.css, 83de6dd4) ✗ 7e3da2f4 | — |
| D | 11,5 px | — | — | — | — | — | — | — | — | `.main-dock .tab-btn span` (d2819fcc) ✗ 6dbe9114 | — | — |
| D | 11,52 px (.72rem) | — | — | — | `.note-item small`, `.note-item span` (76dfefe5) | — | — | — | — | — | 1 règle (`.ms-quick-capture-actions small`, f51f14b9) | — |
| D | 11,68 px (.73rem) | — | — | — | — | — | — | — | — | — | 1 règle (`.ms-editor-blocks-description`, 0c1cb372) ; compteur de filtre du journal ✗ 7e3da2f4 | — |
| D | 11,84 px (.74rem) | — | — | — | — | NoteCard `.meta`, `.footer` (28ad8ce4) | — | NoteCard footer ; `.tab span` sous 440 px | — | — | — | — |
| D | 12 px (.75rem) | — | jeton `--font-size-2xs` | jeton `--text-xs` | — | NoteCard `.meta`, `.footer` (94f8e515) ✗ 28ad8ce4 | jeton `--text-xs` | jeton `--text-caption` (12 px / 16 px) | 11 règles ✗ c80dbb09 | = E1 | 4 règles (`.ms-notes-date`, `.ms-ui-badge`, `.settings-eyebrow`) ; eyebrow du journal ✗ 7e3da2f4 | — |
| D | 12,16 px (.76rem) | — | — | — | — | — | — | `.tag-chip`, `.label` | — | — | — | — |
| D | 12,32 px (.77rem) | — | — | — | — | — | — | — | — | — | 5 règles (`.ms-bottom-nav button`, `.ms-note-meta`…) | — |
| D | 12,48 px (.78rem) | — | — | — | `.snapshot-item strong` | `.dock-item` (28ad8ce4) | — | `.editor-footer` | — | — | puce de version du journal ✗ 7e3da2f4 | — |
| D | 12,64 px (.79rem) | — | — | — | — | — | — | — | — | — | 2 règles (`.ms-app-note-link span`, `.ms-quick-capture label`) | — |
| D | 12,8 px (.8rem) | — | — | — | `kbd` | `.folder-badge` | — | — | — | — | 5 règles (`.ms-count`, `.ms-editor-blocks-title`…) | — |
| D | 13 px | — | jeton `--font-size-xs` | `.map-node text` (600 13px) ; base de `.lib-tag` (`calc(13px + …)`) | — | — | `.map-node text` ✗ 67979ff5 | — | 4 règles ; jeton `--text-xs` (59 règles, c80dbb09) | — | 1 règle (`.ms-ui-field p`, .8125rem, cc1d4cf2) | — |
| D | 13,12 px (.82rem) | — | — | — | `.note-item strong` (76dfefe5) | `.panel-head` (28ad8ce4) | — | `.tab span` | — | — | 1 règle (`.ms-quick-capture-actions button`, f51f14b9) | — |
| D | 13,44 px (.84rem) | — | — | — | `.ambient-item` (3c6f6152) ✗ 576a8c9d | — | — | — | — | — | — | — |
| D | 13,5 px | — | — | jeton `--text-sm` | — | — | jeton `--text-sm` ✗ 82aa90c2 | — | — | = E1 | — | — |
| D | 13,6 px (.85rem) | — | — | — | — | `.search-box` (6f00cf58) ; `.panel-head` (94f8e515) ✗ 28ad8ce4 | — | — | — | — | 3 règles (`.ms-quick-capture-toggle`…) ; date de rail du journal ✗ 7e3da2f4 | — |
| D | 13,76 px (.86rem) | — | — | — | `.ambient-item` (576a8c9d) | — | — | — | — | — | 3 règles (`.ms-editor-blocks-label`, `.ms-note-search input`…) | — |
| D | 14 px (.875rem) | — | jeton `--font-size-sm` | — | — | — | jeton `--text-sm` (82aa90c2) | — | 3 règles → jeton `--text-sm` (4 règles, c80dbb09) | `[data-font-scale='small']` (d2819fcc) | 4 règles (`.ms-ui-field label`, `.settings-footer`…) | `.ms-note-row__date`, `.ms-hint` |
| D | 14,08 px (.88rem) | — | — | — | — | `.button.compact` | — | — | — | — | filtre du journal ✗ 7e3da2f4 | — |
| D | 14,4 px (.9rem) | — | — | — | — | — | — | — | — | — | 1 règle (`.ms-app-note-link strong`, 62846504) | — |
| D | 15 px | — | jeton `--font-size-md` | jeton `--text-md` ; `.glyph-card` | — | — | jeton `--text-md`, `.glyph-card` ✗ 67979ff5, 82aa90c2 | — | 3 règles ; `body` (jeton `--text-md` dès c80dbb09) | jeton `--text-md` ; `.glyph-card` ✗ d2819fcc | — | libellés d'onglets du dock (0,9375 rem) |
| D | 15,2 px (.95rem) | — | — | — | — | — | — | NoteCard copy | — | — | — | — |
| D | 15,36 px (.96rem) | — | — | — | — | `.folder-card strong`, `.search-result strong`, `.settings-item strong` (6f00cf58) | — | `.search-field input`, `strong` | — | — | — | — |
| D | 16 px (1rem) | — | jeton `--font-size-base` | jeton `--text-base` | `h1`, `h2` (1rem) | — | jeton `--text-base` (b1f17318) ✗ 82aa90c2 ; jetons `--text-md`, `--text-input` (82aa90c2) | jeton `--text-body` (/ 24 px) | 2 règles | = E1 | 2 règles (`.ms-quick-capture textarea`, `.tiptap`, 6e5d04cf) | jeton `--ms-text-size` (1rem) ; champ de la phrase `.ms-field` |
| D | 16,64 px (1.04rem) | — | — | — | `#editor` (3c6f6152) ✗ 76dfefe5 | — | — | — | — | — | — | — |
| D | 16,8 px (1.05rem) | — | — | — | `#note-title` (76dfefe5) | — | — | `.note-body` ; NoteCard h3 | — | — | — | `.ms-phrase` |
| D | 17 px | — | jeton `--font-size-lg` | jeton `--text-lg` ; `.glyph` | — | — | jeton `--text-lg`, `.glyph` ✗ 67979ff5, 82aa90c2 | — | 2 règles | jeton `--text-lg` ; `.glyph` ✗ d2819fcc | — | — |
| D | 17,28 px (1.08rem) | — | — | — | `#editor` (76dfefe5) | — | — | — | — | — | — | — |
| D | 17,6 px (1.1rem) | — | — | — | — | NoteCard h3 (28ad8ce4) | — | — | — | — | `.settings-brand` (b44de130) | — |
| D | 18 px | — | — | — | — | — | — | — | 4 règles | `[data-font-scale='large']` (d2819fcc) | — | — |
| D | 18,4 px (1.15rem) | — | — | — | — | — | — | — | — | — | 2 règles (`.settings-prose h2`, `.tiptap h3`, b92397ac) | jeton `--ms-h3-size` |
| D | 19 px | — | — | — | — | — | jeton `--text-lg` (82aa90c2) | — | 2 règles | — | — | — |
| D | 19,2 px (1.2rem) | — | — | — | — | NoteCard h3 (94f8e515) ✗ 28ad8ce4 | — | — | — | — | — | — |
| D | 20 px (1.25rem) | — | jeton `--font-size-xl` | — | — | — | — | `.note-title` | — | `.hero-avatar`, `.avatar-preview` | `.settings-sidebar-title` | — |
| D | 20,8 px (1.3rem) | — | — | — | `.brand-mark` (3c6f6152) ✗ 576a8c9d | — | — | — | — | — | `.ms-app-sidebar h1` (62846504) | — |
| D | 21 px | — | — | jeton `--text-xl` | — | — | jeton `--text-xl` ✗ 82aa90c2 | — | 3 règles | = E1 | — | — |
| D | 22 px | — | — | — | — | — | — | jeton `--text-h2` (/ 28 px), aucun h2 dans les écrans | 2 règles | — | — | — |
| D | 22,4 px (1.4rem) | — | — | — | `.brand-mark` (576a8c9d) | — | — | — | — | — | `.ms-confirm-dialog h2` (aeca0395) | jeton `--ms-h2-size` ; `.ms-title` |
| D | 23 px | — | — | — | — | — | jeton `--text-xl` (82aa90c2) | — | — | — | — | — |
| D | 24 px | — | — | — | — | — | — | — | 1 règle | `.emoji-btn` | `.sidebar h1` | glyphe « + » du dock (1,5 rem) |
| D | 25 px | — | — | — | — | — | — | — | 1 règle | — | — | — |
| D | 26 px | — | — | jetons `--text-2xl` (35c0380c), `--text-title` (≤ 30 em de haut) | — | — | jetons `--text-2xl`, `--text-title` (≤ 30 em de haut) ✗ 82aa90c2 | — | — | jetons `--text-2xl`, `--text-title` (≤ 30 em de haut) | — | — |
| D | 27 px | — | — | — | — | — | — | — | 1 règle | — | — | — |
| D | 27,2 px (1.7rem) | — | — | — | — | — | — | — | — | — | `.ms-notes-empty h2` (aeca0395) | — |
| D | 28 px (1.75rem) | — | jeton `--font-size-3xl` | — | — | — | jeton `--text-heading` (look Paper, ad232dfb) | jeton `--text-h1` (/ 34 px) | 1 règle | — | `.workspace h2` | jeton `--ms-h1-size` (1,75 rem) |
| D | 28,8 px (1.8rem) | — | — | — | `.timer-display` (3c6f6152) ✗ 576a8c9d | — | — | — | — | — | — | — |
| D | 29 px | — | — | — | — | — | — | — | 1 règle | — | — | — |
| D | 31 px | — | — | — | — | — | — | — | 2 règles | — | — | — |
| D | 32 px (2rem) | — | — | — | — | `.fab` | — | — | — | — | — | — |
| D | 33 px | — | — | — | — | — | jeton `--text-2xl` (82aa90c2) | — | — | — | — | — |
| D | 36 px | — | — | — | — | — | — | — | 1 règle (`.settings-page > h1`) | — | — | — |
| D | 38 px | — | — | — | — | — | jeton `--text-title` (look Paper, ad232dfb) | — | — | — | — | — |
| D | `clamp(30px, 8vw, 38px)` | — | — | jeton `--text-title` | — | — | jeton `--text-title` ✗ 82aa90c2 | — | — | = E1 | — | — |
| D | `clamp(36px, 10vw, 46px)` | — | — | — | — | — | jeton `--text-title` (look Paper, b1f17318) ✗ ad232dfb | — | — | — | — | — |
| D | `clamp(var(--text-lg), 5.5vw, var(--text-title))` | — | — | — | — | — | — | — | — | `#page-title` (d2819fcc) | — | — |
| D | `clamp(22px, 2.5vw, 29px)` | — | — | — | — | — | — | — | 1 règle (`.overview-copy h2`) | — | — | — |
| D | `clamp(25px, 4vw, 37px)` | — | — | — | — | — | — | — | 1 règle (`.note-title-input`) | — | — | — |
| D | `clamp(31px, 3.2vw, 44px)` | — | — | — | — | — | — | — | 1 règle (`.dashboard-heading h1`, `.settings-page h1`) | — | — | — |
| D | `clamp(2rem, 4vw, 3.2rem)` | — | — | — | — | `h1` (94f8e515) ✗ 28ad8ce4 | — | — | — | — | — | — |
| D | `clamp(2rem, 6vw, 3.5rem)` | — | — | — | — | `h1` (28ad8ce4) | — | — | — | — | — | — |
| D | `clamp(1.5rem, 2vw, 2.5rem)` | — | — | — | — | `.title-input` (94f8e515) ✗ 28ad8ce4 | — | — | — | — | — | — |
| D | `clamp(1.5rem, 4vw, 2.6rem)` | — | — | — | — | `.title-input` (28ad8ce4) | — | — | — | — | — | — |
| D | `clamp(1.6rem, 2vw, 2.2rem)` | — | — | — | `.timer-display` (576a8c9d) | — | — | — | — | — | — | — |
| D | `clamp(1.8rem, 4vw, 2.4rem)` | — | — | — | — | — | — | — | — | — | `.settings-content h1` (b44de130) | — |
| D | `clamp(1.7rem, 3vw, 2.15rem)` | — | — | — | — | — | — | — | — | — | `.tiptap h1` (6e5d04cf) | — |
| D | `clamp(1.35rem, 2.6vw, 1.65rem)` | — | — | — | — | — | — | — | — | — | `.tiptap h2` (6e5d04cf) | — |
| D | `clamp(1.5rem, 3vw, 2rem)` | — | — | — | — | — | — | — | — | — | `.ms-app-heading h2` (62846504) | — |
| D | `clamp(1.8rem, 4vw, 2.3rem)` | — | — | — | — | — | — | — | — | — | `.ms-note-heading input` (62846504) | — |
| D | `clamp(1.25rem, 2vw, 1.55rem)` | — | — | — | — | — | — | — | — | — | `.ms-notes-panel-header .ms-app-heading h2` (aeca0395) | — |
| D | `clamp(1.9rem, 4cqw, 2.65rem)` | — | — | — | — | — | — | — | — | — | titre du journal (changelog.css, 83de6dd4) ✗ 7e3da2f4 | — |
| D | `clamp(1.25rem, 2.5cqw, 1.55rem)` | — | — | — | — | — | — | — | — | — | titre de release (changelog.css, 83de6dd4) ✗ 7e3da2f4 | — |
| D | `calc(…)` de `.lib-tag` | — | — | `calc(13px + var(--weight) * 7px)` | — | — | `calc(13px + var(--weight) * 7px)` → `calc(var(--text-sm) + var(--weight) * (var(--text-lg) - var(--text-sm)))` (67979ff5) | — | — | `calc(13px + var(--weight) * 7px)` → `calc(var(--text-sm) + var(--weight) * 7px)` (d2819fcc) | — | — |
| D | 0,5 em | — | — | `.title-count` | — | — | = | — | — | = | — | — |
| D | 0,6 em | — | `.fmt-glyph sub` | — | — | — | `.glyph sub` (67979ff5) | — | — | — | — | — |
| D | 0,65 em | — | jeton `--font-size-title-count` | — | — | — | — | — | — | — | — | — |
| D | 0,875 em | — | — | — | — | — | — | — | — | — | `.tiptap code` (6e5d04cf) | — |
| D | 1,05 em | — | — | `.md-h3` | — | — | = | — | — | = | — | — |
| D | 1,1 em | — | — | `.card-body .md-h` (d6af8790) | — | — | = | — | — | = | — | — |
| D | 1,12 em | — | `.md-h1` | — | — | — | — | — | — | — | — | — |
| D | 1,2 em | — | `.editor-view .md-h2` (637a0265) | `.md-h2` | — | — | = | — | — | = | — | — |
| D | 1,4 em | — | — | `.md-h1` | — | — | = | — | — | = | — | — |
| D | 1,45 em | — | `.editor-view .md-h1` (637a0265) | — | — | — | — | — | — | — | — | — |
| D | 11 pt | — | — | `#print-area` | — | — | = | — | — | — | — | — |
| D | 12 pt | — | `#print-area` | — | — | — | — | — | — | — | — | — |
| D | 15 pt | — | `#print-area h2` | — | — | — | — | — | — | — | — | — |
| D | 22 pt | — | `#print-area h1` | — | — | — | — | — | — | — | — | — |
| D | 93,75 % | — | — | — | — | — | `:root[data-font-scale='small']` (1c1fb148) | — | — | — | — | — |
| D | 112,5 % | — | — | — | — | — | `:root[data-font-scale='large']` (1c1fb148) | — | — | — | — | — |
| D | 0 (texte masqué) | — | — | — | — | — | — | — | — | — | `.ms-app-sidebar h1` (aeca0395) | — |
| D | Jeton `--text-title` (références) | — | — | — | — | — | défaut : `var(--text-2xl)` ; ≤ 30 em de haut : `var(--text-xl)` ; Paper : 38 px, ≤ 30 em : `var(--text-heading)` | — | — | — | — | — |
| D | Jeton `--text-heading` (références) | — | — | — | — | — | défaut : `var(--text-xl)` (82aa90c2) ; Paper : 28 px (ad232dfb) | — | — | — | — | — |
| D | Jeton `--text-label` (références) | — | — | — | — | — | défaut : `var(--text-sm)` ; Paper : `var(--text-xs)` (ad232dfb) | — | — | — | — | — |
| D | Jetons de carte (références, E0) | `--font-size-card-body`, `--font-size-card-title`, `--font-size-card-meta` | corps : `--font-size-base`, puis `--font-size-lg` dès 48 em ; titre : `--font-size-lg`, puis `--font-size-xl` dès 48 em ; méta : `--font-size-sm` | — | — | — | — | — | — | — | — | — |
| D | Jeton `--text-input` | — | — | — | — | — | 16 px (82aa90c2) ; « les champs ne descendent jamais sous 16 px (pas de zoom iOS) » | — | — | — | — | — |
| E | 1 | — | `.segmented button`, `.fmt-glyph` | `kbd, .kbd` (35c0380c) | — | — | = | — | `.brand-copy` | `.avatar-initials` (d2819fcc) | — | glyphe « + » du dock |
| E | 1,05 | — | — | `#page-title` | — | — | `#page-title` en raccourci `font` (ad232dfb) | — | — | `#page-title` ✗ d2819fcc | — | — |
| E | 1,08 | — | — | — | — | — | — | — | `.dashboard-heading h1`, `.settings-page h1` | — | — | — |
| E | 1,1 | — | — | — | — | `.title-input` (28ad8ce4) | `.welcome-title` en raccourci `font` (ad232dfb) | `.tab span` | — | — | — | — |
| E | 1,12 | — | — | `.editor-title` | — | — | `.editor-title` en raccourci `font` (ad232dfb) | — | `.overview-side h2` | = E1 | — | — |
| E | 1,13 | — | — | — | — | — | — | — | `.overview-copy h2` | — | — | — |
| E | 1,14 | — | — | — | — | — | — | — | — | — | titre du journal (changelog.css) ✗ 7e3da2f4 | — |
| E | 1,15 | — | jeton `--font-leading-tight` | — | — | — | `.today-intro h2` (1c1fb148) | — | `.note-title-input` | `#page-title` (d2819fcc) | — | — |
| E | 1,16 | — | — | — | — | — | — | — | `.onboarding-card h2` | — | — | — |
| E | 1,2 | — | — | — | — | NoteCard h3 (28ad8ce4) | titres en raccourci `font` : `.about-name`, `.first-use h2`, `.news-title` (ad232dfb) | — | — | — | 3 règles (`.ms-app-heading h2`, `.settings-content h1`, `.tiptap h1`) | — |
| E | 1,25 | — | — | `.md-h1`, `.widget-title` | — | — | = | — | — | = | 2 règles (`.ms-ui-button`, `.tiptap h2`, 6e5d04cf) | titres h1, h2, h3 de l'éditeur ; `.ms-title` |
| E | 1,28 | — | — | `.card-title` (35c0380c) | — | — | = | — | — | = | — | — |
| E | 1,3 | — | jeton `--font-leading-snug` | `.backup-code` (a5c92dad) ; `.card-title` (4da62555) ✗ 35c0380c | — | — | `.card-title` look Minimal (bb3fa23d) | `.note-title` ; NoteCard h3 | — | `.backup-code` | titre de release du journal (changelog.css) ✗ 7e3da2f4 | — |
| E | 1,35 | — | — | — | — | — | — | — | — | `.install-banner-sub` (d2819fcc) | — | — |
| E | 1,4 | — | — | — | — | — | — | — | — | — | filtre du journal (changelog.css) ✗ 7e3da2f4 | — |
| E | 1,45 | — | jeton `--font-leading-normal` (corps) | jeton `--leading`, `.card-body` | — | — | = | — | — | = | 1 règle (`.ms-notes-date`, 91121793) | — |
| E | 1,5 | — | — | `.guide-text` (35c0380c) | — | `:root` (94f8e515) ; NoteCard p (28ad8ce4) | `.guide-text` | — | `body` ; `kbd` | `.guide-text`, `.changelog-hero-sub` | 2 règles (`.ms-quick-capture textarea`, `.settings-install-block p`, e08ed76c) | — |
| E | 1,55 | — | — | jeton `--leading` du look Paper (fbf13b31) ; `.editor-text` | — | — | jeton `--leading` du look Paper (b1f17318) ; `.editor-text` | — | `.overview-side p`, `.confirm-card p` | jeton `--leading` du look Paper | — | — |
| E | 1,6 | — | — | — | — | `.body-input` | `.tidy-lines`, `.today-grid .destination-empty`, `.today-intro > p:last-child` (1c1fb148) | NoteCard copy | `.note-excerpt`, `.local-notice p` | `.install-step-card ol`, `.license-modal-body` (d2819fcc) | 1 règle (`.ms-quick-capture-success`, f51f14b9) | jeton `--ms-text-leading` (notes) |
| E | 1,65 | — | jeton `--font-leading-relaxed` (`.editor-text`) | — | — | — | `.folder-sync :is(p, ol)` (1c1fb148) | — | `.subheading`, `.help-card p` | — | liste de changements du journal (changelog.css) ✗ 7e3da2f4 | — |
| E | 1,7 | — | — | — | `#editor` (3c6f6152) ✗ 76dfefe5 | — | — | `.note-body` | `.empty-state > p`, `.onboarding-copy` | — | 2 règles (`.ms-detail-change p`, `.settings-intro`, b44de130) ; intro du journal ✗ 7e3da2f4 | — |
| E | 1,75 | — | — | — | — | — | — | — | — | — | 2 règles (`.settings-prose`, `.tiptap p`) | — |
| E | 1,8 | — | — | — | `#editor` (76dfefe5) | — | — | — | — | — | — | — |
| E | 1,85 | — | — | — | — | — | — | — | `.note-body-input` | — | — | — |
| E | 1,95 | — | — | — | — | — | — | — | `.paper-mode .note-body-input` | — | — | — |
| E | `var(--h)` | — | — | `.lib-tag` | — | — | — | — | — | = | — | — |
| E | `var(--size-badge)` | — | `.change-count` | — | — | — | — | — | — | — | — | — |
| E | 16 px | — | — | — | — | — | — | jeton `--line-caption` | — | — | — | — |
| E | 24 px | — | — | — | — | — | — | jeton `--line-body` | — | — | — | — |
| E | 28 px | — | — | — | — | — | — | jeton `--line-h2` | — | — | — | — |
| E | 34 px | — | — | — | — | — | — | jeton `--line-h1` | — | — | — | — |
| F | -0,055 em | — | — | — | — | — | — | — | 2 règles (`.brand-copy strong`, h1) | — | — | — |
| F | -0,05 em | — | — | — | — | `h1` | — | — | 2 règles (`.note-title-input`, `.onboarding-card h2`) | — | — | — |
| F | -0,045 em | — | — | — | — | — | — | — | 3 règles | — | — | — |
| F | -0,04 em | — | — | `.main-dock .tab-btn span` (≤ 26 em, e30d2cdc) | — | `.title-input` | — | — | 2 règles | `.main-dock .tab-btn span` (9021b9bc) ✗ d2819fcc | — | — |
| F | -0,035 em | — | — | — | — | — | jeton `--tracking-title` (défaut looks.css et look Glass, ad232dfb) ; `.today-intro h2` (1c1fb148) | — | — | — | 3 règles (`.ms-app-heading h2`, `.ms-note-heading input`…, 62846504) | — |
| F | -0,03 em | — | jeton `--font-tracking-tight` | `.main-dock .tab-btn span` (≤ 24 em, 78e2a8a6) ✗ e30d2cdc | — | — | — | — | 2 règles | `.main-dock .tab-btn span` (d2819fcc) | `.tiptap h1` (6e5d04cf) ; titre du journal ✗ 7e3da2f4 | — |
| F | -0,025 em | — | — | `#page-title`, `.editor-title` | — | — | jeton `--tracking-title` (tokens.css ; look Minimal, feebaaea) ; `.ctl.is-stack` (2466c955) ; `#page-title`, `.editor-title` → `--tracking-title` (ad232dfb) ; `.tab-btn` (ad232dfb) ✗ 2466c955 | — | 1 règle (mode papier, titre de note) | = E1 | `.settings-content h1` (b44de130) | — |
| F | -0,02 em | — | — | `.glyph`, `.sheet-head h2`, `.first-use h2`, `.welcome-title` | — | NoteCard h3 (28ad8ce4) | jeton `--tracking-heading` (ad232dfb) ; règles (`.first-use h2`, `.glyph`, `.sheet-head h2`) | — | 2 règles | règles (8 à HEAD) | — | — |
| F | -0,018 em | — | — | — | — | — | — | — | — | — | titre de release du journal (changelog.css) ✗ 7e3da2f4 | — |
| F | -0,015 em | — | — | `.md-h`, `.tab-btn` (35c0380c) | — | — | `.md-h`, `.tab-btn` | — | 1 règle (`.settings-group-heading h2`) | `.md-h`, `.tab-btn` | — | — |
| F | -0,012 em | — | — | `.card-title` (35c0380c) | — | — | = | — | — | = | — | — |
| F | -0,01 em | — | — | `.action-btn`, `.flashcard-q`, `.layer-title`, `.settings-title` | — | — | règles ; jeton `--tracking-title` look Paper (ad232dfb) | — | — | règles (4 à HEAD) | — | — |
| F | 0 | — | `.title-count` | `.title-count` ; `.change-group h4` (`0 !important`) | — | — | `.list-heading.is-section`, `.title-count` ; jetons `--label-tracking` (défaut), `--tracking-heading` (look Paper) | — | — | = E1 | — | — |
| F | `normal` | — | — | — | — | — | — | — | `.editor-date` (c80dbb09) | — | — | — |
| F | 0,01 em | — | — | `.tab-btn` (4da62555) ✗ 35c0380c | — | — | — | — | — | — | — | — |
| F | 0,02 em | — | — | `.glyph-card` (926abbd6) | — | — | = | — | — | = | — | — |
| F | 0,03 em | — | — | — | — | — | — | — | — | `.changelog-hero-badge` (6dbe9114) | — | — |
| F | 0,04 em | — | — | `.layer h4`, `.note-found h2`, `.sheet-section > h3` (majuscules, 4da62555) ✗ 8eb1ac1c | — | — | jeton `--label-tracking` (look Paper, ad232dfb) | `.label`, `.pin-badge` | — | `.quick-capture-title` (d2819fcc) ✗ 6fc4b9d7 | — | `.ms-phrase`, `.ms-field` (0a15c7ce, 4381e483) |
| F | 0,05 em | — | — | — | — | — | — | — | — | `.settings-group-title` (d2819fcc) | — | — |
| F | 0,06 em | — | — | `.backup-code`, `.code-input` (a5c92dad) | — | — | `h4` du look Paper (b1f17318) ✗ ad232dfb | `.eyebrow` | — | `.backup-code`, `.code-input` | `.settings-index-group h2` ; étiquette de catégorie du journal ✗ 7e3da2f4 | — |
| F | 0,08 em | — | — | — | — | — | — | — | 4 règles (c80dbb09) | — | 2 règles (`.settings-eyebrow`, `.settings-nav-group h2`) | — |
| F | 0,09 em | — | — | — | — | — | — | — | — | — | libellé « latest » du journal (changelog.css) ✗ 7e3da2f4 | — |
| F | 0,1 em | — | — | — | `.timer-display` (3c6f6152) ✗ 576a8c9d | — | — | — | — | — | — | — |
| F | 0,12 em | — | — | — | — | `.eyebrow` | — | — | `.editor-date` (57c25ea2) ✗ c80dbb09 | — | — | — |
| F | 0,13 em | — | — | — | — | — | — | — | `.brand-copy small`, `.side-tag` (57c25ea2) ✗ c80dbb09 | — | — | — |
| F | 0,14 em | — | — | — | `.timer-display` (576a8c9d) | — | — | — | — | — | — | — |
| F | 0,145 em | — | — | — | — | — | — | — | `.eyebrow` (57c25ea2) ✗ c80dbb09 | — | — | — |
| F | 0,15 em | — | — | — | — | — | — | — | `.sidebar-label` (57c25ea2) ✗ c80dbb09 | — | — | — |
| F | 0,16 em | — | — | — | — | — | — | — | 1 règle (`.overview-kicker`) | — | — | — |
| F | 0,2 em | — | — | — | — | — | — | — | — | — | eyebrow du journal (changelog.css) ✗ 7e3da2f4 | — |
| F | 0,3 em | — | jeton `--font-tracking-wide` (`.pin-input`) | — | — | — | — | — | — | — | — | — |
| F | 0,5 em | — | — | `.pin-input` | — | — | = | — | — | = | — | — |
| G | Majuscules (`text-transform: uppercase`) | `--label-case` (E4) | — | `.layer h4`, `.sheet h4`, `.note-found h2`, `.sheet-section > h3` ✗ 8eb1ac1c ; `.code-input` (a5c92dad) | — | `.eyebrow` | jeton `--label-case` (look Paper, ad232dfb ; `none` par défaut) | `.eyebrow`, `.label`, `.pin-badge` | 2 règles (`.brand-copy small`, `.eyebrow`) | 3 règles (`.code-input`, `.settings-group-title`) | changelog.css (83de6dd4) ✗ 7e3da2f4 ; classes Tailwind `uppercase` (retirées de l'étiquette de catégorie en 64e843a0) | — |
| G | Casse neutralisée (`text-transform: none`) | — | — | `.change-group h4` (`none !important`) | — | — | `.change-group h4` ; `.list-heading.is-section` (ad232dfb) | — | — | `.change-group h4` | — | — |
| G | Capitalisation (`text-transform: capitalize`) | — | — | — | — | — | `.calendar-heading h2` (32e9bd9e) ✗ f1b51602 ; `.calendar-period` (f1b51602) | — | — | — | — | — |
| G | Chiffres tabulaires (`font-variant-numeric: tabular-nums`) | — | nombreux sélecteurs (`.card-progress`, `.player-time`, `.version-pill`…) | nombreux sélecteurs (`.count`, `.card-progress`, `.tbl`…) | — | — | 13 règles (b1f17318) | — | — | — | classe Tailwind `tabular-nums` (puce de version, 1818172f) ✗ 64e843a0 | — |
| G | Italique (`font-style: italic`) | — | `.fmt-i`, `.italic`, `.md-i` | `.glyph-i`, `.md-i`, `.chip.is-backlink` | — | — | — | — | — | — | — | `.ms-tool[data-tool='italic']` |
| G | Barré (`text-decoration: line-through`) | — | `.check[data-checked="1"] span` | `.check[data-checked='1'] > span` ; `.task-item[data-checked='1'] > span` (2c7478e4) | — | — | — | — | — | — | — | — |
| G | Souligné | — | `.editor-view .wiki-link` (`underline 1px`) | — | — | — | — | — | — | — | — | `.ms-note-row mark` (gras + souligné) |
| G | Ligatures désactivées | — | — | — | — | — | — | — | — | — | — | `font-variant-ligatures: none`, `font-feature-settings: 'liga' 0` (éditeur, 67a5541f) |
| G | Aperçu de carte (lignes affichées) | `-webkit-line-clamp`, `--lines` | `var(--line-clamp-card)`, `var(--line-clamp-list)` (valeurs non listées) | `-webkit-line-clamp` 8 (carte), 3 (liste) → `--lines` 10 (carte), 4 (snippet, liste), 14 / 5 (≥ 40 em), 7 (édition ≥ 64 em) | — | 3 lignes (NoteCard p) | — | — | — | — | — | — |
| G | Retour à la ligne des notes (`white-space: pre-wrap`) | — | `.editor-view`, `.card-body`, `.print-body` | `.editor-view`, `.card-body`, `.guide-text`, `.print-body`, `.version-text`, `.diff-line` | — | — | — | — | — | — | — | — |
| G | Libellés sur une ligne (`white-space: nowrap`) | — | nombreux sélecteurs | = | — | — | — | — | — | — | — | — |
| G | Troncature et césure | — | — | — | `word-break: break-word` (`.note-item small`, `.note-item span`) | — | — | — | — | — | — | `overflow: hidden; text-overflow: ellipsis; white-space: nowrap` (`.ms-note-row__title`, `__preview`) ; `overflow-wrap: anywhere` (éditeur, phrase) |
| G | Langue du document (`lang`) | — | — | — | — | `en` → `fr` (28ad8ce4) | — | `fr` | — | — | — | `<html lang="fr">` (fd2427e0) |
| G | Titres de pages et de sections hors éditeur | — | — | — | — | — | — | — | — | — | — | aucune règle de taille ; valeurs par défaut du navigateur (marges seules dans `app.css`) |
| H | DESIGN.md : Display | — | — | — | — | — | — | — | clamp(31px, 3.2vw, 44px) · 620 · 1,08 · -0,055 em (1f5a70d2) | — | — | — |
| H | DESIGN.md : Note Title | — | — | — | — | — | — | — | clamp(25px, 4vw, 37px) · 620 (1f5a70d2) | — | — | — |
| H | DESIGN.md : Headline | — | — | — | — | — | — | — | 27 px (24 px téléphone) · 630 (1f5a70d2) | — | — | — |
| H | DESIGN.md : Title | — | — | — | — | — | — | — | 21 px · 650 (1f5a70d2) | — | — | — |
| H | DESIGN.md : Body | — | — | — | — | — | — | — | 15 px · 400 · 1,5 (1f5a70d2) ; réécrit en V5 : 15 px / 1,5 (c80dbb09) | — | — | — |
| H | DESIGN.md : Writing | — | — | — | — | — | — | — | 15 px / 1,85 (Literata 16 px / 1,95 en mode papier) (1f5a70d2) | — | — | — |
| H | DESIGN.md : Label | — | — | — | — | — | — | — | 12 px · 620 (1f5a70d2) → 13 px (c80dbb09) | — | — | — |
| H | DESIGN.md : Value Mono | — | — | — | — | — | — | — | 12 px · 600 (1f5a70d2) → 13 px (c80dbb09) | — | — | — |
| I | Tailwind : titre de page Paramètres | `SettingsHub.tsx` | — | — | — | — | — | — | — | — | `text-3xl font-bold` ; sous-titre `mt-2 text-gray-400` (d5c96cef) ✗ 7d72e331 | — |
| I | Tailwind : titre de section Paramètres | `SettingsHub.tsx` | — | — | — | — | — | — | — | — | `text-xl font-semibold` ; groupes `text-xs font-bold tracking-wider text-gray-400` (d5c96cef) ✗ 7d72e331 | — |
| I | Tailwind : titre du journal des versions | `ChangelogTimeline.tsx` | — | — | — | — | — | — | — | — | `text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl` → `text-3xl … sm:text-4xl` (1274fca0) | — |
| I | Tailwind : titre d'une release (carte) | `ChangelogTimeline.tsx` | — | — | — | — | — | — | — | — | `text-xl … sm:text-2xl` → `text-2xl font-bold leading-snug tracking-tight` (1274fca0) | — |
| I | Tailwind : étiquette de catégorie | `ReleasePrimitives.tsx` | — | — | — | — | — | — | — | — | `text-xs font-semibold uppercase tracking-wide` (1818172f) → `text-xs font-semibold` sans majuscules, avec icône (64e843a0) | — |
| I | Tailwind : puce de version | `ReleasePrimitives.tsx` | — | — | — | — | — | — | — | — | `font-mono text-xs font-semibold tabular-nums` (1818172f) → `text-xs font-medium` (64e843a0) | — |
| I | Tailwind : liste de puces de release | `ReleasePrimitives.tsx` | — | — | — | — | — | — | — | — | `text-sm leading-relaxed … sm:text-base` (1818172f) | — |
| I | Tailwind : champ titre de note | `App.tsx` | — | — | — | — | — | — | — | — | `text-2xl font-bold` (77efa570) ✗ 62846504 | — |
| I | Tailwind : eyebrow du journal | `ChangelogTimeline.tsx` | — | — | — | — | — | — | — | — | `font-mono text-xs font-semibold uppercase tracking-[0.18em]` (inchangé en 1274fca0) | — |

## 3. Détail des changements

Format : `valeur` — première apparition réf — dernier état réf — raison. Les entrées ne citent une raison que lorsqu'un message de commit, un libellé de version ou une note de code la donne ; sinon « non documentée ». Les paliers de taille sont comparés par valeur, car aucune source ne relie les jetons `--font-size-*` (E0) aux `--text-*` (E1).

### A. Polices

**Figtree**
- `@font-face` en ligne, woff2 base64, 300-900 — `notes-v3@b6647a04` 2026-10-09 — fin de la lignée E0 `notes-v3@ea104c22` 2026-10-15 — remplacé en E1 par le paquet ; non documentée.
- `@fontsource-variable/figtree ^5.2.0` — `notes-v3@4da62555` 2026-10-18 — remplacé `notes-v3@abd0b64e` 2026-10-29 — non documentée.
- `^5.3.0` — `notes-v3@abd0b64e` 2026-10-29 — fin E1 (2026-10-31) — non documentée.
- E4, `^5.2.0` — `notes-v5@b1f17318` 2026-10-21 — supprimé `notes-v5@67979ff5` 2026-10-21 — « paquet retiré car plus utilisé » (message de 67979ff5) ; import retiré de `App.tsx` par `notes-v5@945cd023` ; crédits `notes-v5@1af74e0e` 2026-10-22 : « the fonts that ship (Manrope, Sora, Work Sans, Instrument Serif), not Figtree ».
- E6, import du paquet complet — `notes-v6@57c25ea2` 2026-10-28 — remplacé par `@font-face` locaux latin, `swap` — `notes-v6@c80dbb09` 2026-10-31 — libellé V5 « copie accessible synchronisée : fonts.css, jetons de texte » ; raison propre non documentée. Même changement pour Literata et JetBrains Mono.

**Literata** (E1) — paquet `^5.3.0`, deux `@font-face` (normal, italique, latin, 200-900), réglage « Police des notes : Figtree ou Literata » — `notes-v3@d6af8790` 2026-10-19 — supprimé `notes-v3@ef23bea4` 2026-10-19 — « Une seule police, Figtree, pour l'interface et les notes ». Builds : woff2 ajoutés par 870815d, retirés par d23cc84.

**Inter**
- E2, nom dans la pile (jamais chargée) — `notepad-pwa@576a8c9d` 2026-10-20 — dernier CSS connu `76dfefe5` ; CSS supprimé `a488cc67` — non documentée.
- E3, `--font-ui` et `--font-display` — `notes-4@94f8e515` 2026-10-22 — HEAD — non documentée.
- E8, `@blocknote/core/fonts/inter.css` — `mindspace-old@0bdaf5ca` 2026-11-05 — supprimé `mindspace-old@dbbcaa29` 2026-11-05 — « remove BlockNote component and stylesheet imports » ; paquets `@blocknote/*` retirés `4b118601`.

**Manrope** (E5) — `@fontsource/manrope ^5.0.0` — `notes-svelte@2923c47d` — `^5.3.0` `notes-svelte@112ae9d8` (2026-10-22) — non documentée.

**`-apple-system`, `BlinkMacSystemFont`** (E2) — pile `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` — `notepad-pwa@3c6f6152` 2026-10-20 — retirés `notepad-pwa@576a8c9d` 2026-10-20 (pile `Inter, "Segoe UI", sans-serif`) — non documentée. `system-ui` n'est resté que dans la pile de la fenêtre flottante.

### B. Piles et attributs de police

**Pile interface**
- E2 : `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` — `3c6f6152` — `Inter, "Segoe UI", sans-serif` `576a8c9d` (même jour) — non documentée.
- E4 : pile Figtree — `notes-v5@b1f17318` 2026-10-21 — `system-ui, -apple-system, 'Segoe UI', sans-serif` `notes-v5@ad232dfb` 2026-10-21 — non documentée (les looks portent désormais la police).
- E4 looks Glass/Minimal : `'Manrope Variable', Manrope, system-ui, sans-serif` `b1f17318` → ajout de `-apple-system, 'Segoe UI'` `ad232dfb` ; Paper (Work Sans) : même ajout, `ad232dfb` — non documentée.
- E6 : `'Figtree Variable', 'Figtree', system-ui, sans-serif` — `notes-v6@57c25ea2` (dans `app.css`), déplacée dans `tokens.css` `notes-v6@a0935371` 2026-10-29 — valeur inchangée.
- E8 : `:root` `system-ui, sans-serif` — `mindspace-old@99c91a87` 2026-11-03 — remplacée par `var(--font-sans)` `b44de130` 2026-11-05 ; `--font-sans` créée `591eb91e` (même jour, 05:39) — non documentée.

**Pile titres** (E4) : `var(--font)` dans `looks.css` — `b1f17318` — remplacée par `'Sora Variable', Sora, var(--font)` `ad232dfb` (Minimal : `feebaaea` 2026-11-10) ; Paper : `'Instrument Serif', Georgia, serif` → `…, 'Times New Roman', serif` `ad232dfb` ; défaut `tokens.css` `var(--font)` `82aa90c2` — non documentée.

**Pile serif** : `ui-serif, 'New York', 'Iowan Old Style', Charter, Georgia, serif` — `notes-v3@b6647a04` (E0, `--font-family-serif`) / `4da62555` (E1) — remplacée par `'Literata Variable', Literata, Georgia, serif` `d6af8790` ; supprimée `ef23bea4` (voir Literata).

**Pile monospace** (E8) : `ui-monospace, SFMono-Regular, Consolas, monospace` — `mindspace-old@77149a05` 2026-11-05 — HEAD ; dans `changelog.css` : même pile `83de6dd4` → `inherit` `28bcfe04` → `var(--font-mono, ui-monospace, SFMono-Regular, monospace)` `88d1ec33` → fichier supprimé `7e3da2f4` — non documentée. E7 : pile `…Menlo, Monaco, Consolas, monospace` (A1) et variante `…Menlo, monospace` (A2).

**Corps (`font`)** : E4 `400 …` → `var(--weight-body) …` `82aa90c2` ; E6 `400 15px/1.5` → `400 var(--text-md)/1.5` `c80dbb09` ; E8 `font-family` de `:root` → `var(--font-sans)` `b44de130` — non documentée.

**Impression** (E1) : `11pt/1.45 var(--font-notes)` `4da62555` → `var(--font)` `ef23bea4` (suit la suppression de `--font-notes`). De E0 (`12pt/1.5`) à E1 (`11pt/1.45`) : non documentée.

**`--font-notes` et `data-font=serif`** (E1) — `4da62555` — supprimés `ef23bea4` 2026-10-19 (voir Literata). E0 avait `--font-family-notes` et `[data-font=serif]`.

### C. Graisses

- E1, jetons `--weight-title` 800, `--weight-heading` 750, `--weight-label` 650 — `notes-v3@35c0380c` 2026-10-21 — HEAD E1 ; règles `#page-title`, `.editor-title`, `.sheet-head h2`, `.welcome-title` 800 → `var(--weight-title)` ; `.card-title` 650 → 700 ; `.tab-btn` 650 → jeton ; `.tour-title` 800 → jeton — libellé « audit design appliqué ». `.change-pill` 600 → 700 `d6af8790` ; `.option[aria-pressed='true']` 650 ✗ `c3ec060f` (remplacé par `.option:is(…)` 650) — non documentées.
- E4, graisses brutes (400, 500, 550, 600, 650, 700, 750, 800, 900) — `notes-v5@b1f17318` — remplacées par `--weight-*` `67979ff5` ; `--weight-body` 500 créé `82aa90c2` ; `--weight-title` 800 → 700, `--weight-label` 650 → 600, `--weight-heading` 750 supprimé `82aa90c2` ; `--weight-display` 700 (Glass, Minimal) / 400 (Paper) `ad232dfb` — non documentée. Corps 400 → 500 `82aa90c2`. Toutes le 2026-10-21.
- E7, `normal` — `notes-aistudio@d2819fcc` 2026-11-02 — HEAD ; reste identique à E1.
- E6, branches non fusionnées : `.eyebrow` 720 ✗ `d665efcb`, `.overview-kicker` 800 ✗ `7f351420`, `.onboarding-form label span` 400 ajouté `ac3fbc72` ; la ligne main garde 720 et 800 (V9 `c2701fc1`).

### D. Tailles (jetons et règles)

**E1**
- `--text-2xs` `10.5px` — `4da62555` 2026-10-18 — `11px` `35c0380c` 2026-10-21 — supprimé `notes-v3@fe7ee2da` 2026-10-29 ; `.action-btn`, `.badge`, `.tab-btn` passent de `--text-2xs` à `--text-xs` `e30d2cdc` 2026-10-29 (« polish editing, tables, cards and the 52px dock »).
- `--text-2xl` `26px` — `35c0380c` ; `.welcome-title` `26px` → `var(--text-2xl)` ; `.card-title` `--text-base` → `--text-lg` ; `.card-body` `--text-sm` → `--text-md` ; `.tour-title` `--text-lg` → `--text-md` — libellé « audit design appliqué ».
- Titres de feuille `.layer h4`, `.sheet h4`, `.note-found h2`, `.sheet-section > h3` : `--text-xs` → `--text-sm` — `8eb1ac1c` 2026-10-19 — libellé « titres de section en minuscules ».
- `.tbl-tool` `12px` → `var(--text-xs)` `e30d2cdc`.

**E4** (tous le 2026-10-21, jetons de `tokens.css`) : `--text-2xl` 26 → 33, `--text-xl` 21 → 23, `--text-lg` 17 → 19, `--text-md` 15 → 16, `--text-sm` 13.5 → 14 (`82aa90c2`) ; `--text-2xs` 11 et `--text-base` 16 supprimés `82aa90c2` ; `--text-title` `clamp(30px, 8vw, 38px)` → `var(--text-2xl)`, cas `≤ 30em` 26px → `var(--text-xl)` `82aa90c2` ; Paper : `clamp(36px, 10vw, 46px)` → 38px `ad232dfb` ; `--text-input` 16px créé `82aa90c2` (« les champs ne descendent jamais sous 16px (pas de zoom iOS) »). Règles : `.glyph` 17px, `.glyph-card` 15px, `.lib-tag small` 11px, `.map-node text` 13px, `.glyph sub` 10px → jetons ou `.6em` `67979ff5` ; `#page-title` et `.editor-title` : taille retirée de `app.css` `ad232dfb` (passage au raccourci `font`). Préférence `data-font-scale` 93.75 % / 112.5 % `1c1fb148` 2026-11-11 ; `text-transform: capitalize` de `.calendar-heading h2` `32e9bd9e` → déplacé sur `.calendar-period` `f1b51602` (2026-11-08).

**E2** (CSS A → C) : `.timer-display` `1.8rem` → `clamp(1.6rem, 2vw, 2.2rem)` `576a8c9d` ; `.brand-mark` `1.3rem` → `1.4rem` `576a8c9d` ; `.ambient-item` `0.84rem` → `0.86rem` `576a8c9d` ; `#editor` `1.04rem` → `1.08rem` `76dfefe5` — non documentées.

**E3** : `h1` `clamp(2rem, 4vw, 3.2rem)` → `clamp(2rem, 6vw, 3.5rem)`, `.title-input` `clamp(1.5rem, 2vw, 2.5rem)` → `clamp(1.5rem, 4vw, 2.6rem)`, `.panel-head` 0.85 → 0.82rem, NoteCard h3 1.2 → 1.1rem, `.meta`/`.footer` 0.75 → 0.74rem — `notes-4@28ad8ce4` 2026-10-22 ; `.dock-item` reçoit `0.78rem` `28ad8ce4` ; `html lang` `en` → `fr` `28ad8ce4` — non documentées (contenus permutés dans `28ad8ce4`, `6f00cf58`, `854f07b5`, remis en place par `8150588e`).

**E6** : tailles 8, 9, 10, 11 px supprimées `1bae3e15` 2026-10-28 (libellé V1 « contraste ») ; 12 px et 14 px remplacés par `--text-xs` (13 px, 59 règles) et `--text-sm` (14 px) `c80dbb09` 2026-10-31 ; DESIGN.md `Label` et `Value Mono` 12 px → 13 px `c80dbb09`. Branches non fusionnées : 22 px, 25 px, 29 px, `clamp(22px, 2.5vw, 29px)` retirés (`7f351420`, `d11bb77c`) ; la ligne main les garde.

**E7** : `.main-dock .tab-btn span` : 11px (A0) puis 11.5px (`d2819fcc`) supprimé `6dbe9114`, 10.5px (`d2819fcc`) ; `.glyph` 17px et `.glyph-card` 15px supprimés `d2819fcc` (toujours présents en E1) ; `.lib-tag` `calc(13px + …)` → `calc(var(--text-sm) + …)` `d2819fcc` ; `#page-title` → `clamp(var(--text-lg), 5.5vw, var(--text-title))` `d2819fcc` ; `[data-font-scale]` 14px / 18px `d2819fcc` — non documentées.

**E8** : tailles de base de `src/style.css` créées `99c91a87` (24 px, 28 px) et `b44de130` (jeu rem) ; `.ms-app-sidebar h1` `1.3rem` `62846504` et `0` `aeca0395`, les deux notés HEAD ; titre du journal `text-4xl … sm:text-5xl` → `text-3xl … sm:text-4xl`, titre de release `text-xl … sm:text-2xl` → `text-2xl` `1274fca0` 2026-11-05 ; `changelog.css` supprimé `7e3da2f4` — non documentées.

### E. Interlignes

- E1 : `.card-title` 1.3 → 1.28 `35c0380c` ; `.lib-head h2` 1.05 ✗ `d6af8790`.
- E2 : `#editor` 1.7 → 1.8 `76dfefe5`.
- E4 : `#page-title` 1.05 et `.editor-title` 1.12 : propriété `line-height` retirée `ad232dfb`, valeurs reprises dans le raccourci `font` (`/1.05`, `/1.12`) ; `.welcome-title` `/1.1` créé `ad232dfb`.
- E6 : 1.12, 1.13 (BR4 `7f351420`), 1.7 (BR3 `ac3fbc72`), 1.85 (BR4) retirés dans les branches non fusionnées ; main intacte.
- E7 : `#page-title` 1.05 ✗ → 1.15 `d2819fcc`.
- E8 : changelog (1.14, 1.3, 1.4, 1.65, 1.7) ✗ `7e3da2f4`.
- Raison : non documentée pour tous.

### F. Espacement des lettres

- E1 : `.tab-btn` `.01em` → `-.015em` `35c0380c` ; `.card-title` `-.01em` → `-.012em` `35c0380c` ; majuscules `.04em` des titres de feuille ✗ `8eb1ac1c` (« titres de section en minuscules ») ; `.main-dock .tab-btn span` `-.03em` (≤ 24em, `78e2a8a6`) ✗ `e30d2cdc` → `-.04em` (≤ 26em).
- E2 : `.timer-display` `0.1em` → `0.14em` `576a8c9d`.
- E3 : `h1` et `.title-input` `-0.05em`/`-0.04em` identiques, mais `h1` clamp change en `28ad8ce4` ; NoteCard h3 `-0.02em` créé `28ad8ce4`.
- E4 : `#page-title`, `.editor-title` `-.025em` → `var(--tracking-title)` `ad232dfb` ; `.tab-btn` `-.025em` `ad232dfb` ✗ `2466c955` (→ `.ctl.is-stack`) ; `--tracking-title` Minimal `-.025em` `feebaaea` 2026-11-10 ; look Paper `h4` `.06em` et majuscules ✗ `ad232dfb` (→ `--label-tracking`, `--label-case`).
- E6 : `.12em`, `.13em`, `.145em`, `.15em` ✗ `c80dbb09` (→ `.08em`, 4 règles ; `normal`) ; BR5 `d665efcb` retire 0.13/0.145/0.15 et `uppercase` (non fusionné).
- E7 : `-.04em` ✗ → `-.03em` `d2819fcc` ; `.04em` ✗ `6fc4b9d7`.
- E8 : changelog (`-.03em`, `.2em`, `-.018em`, `.06em`, `.09em`) ✗ `7e3da2f4` ; étiquette de catégorie `uppercase tracking-wide` → sans majuscules `64e843a0`.

### G. Autres propriétés

- Majuscules E1 : titres de feuille ✗ `8eb1ac1c` (libellé « titres de section en minuscules »). E6 : `uppercase` retiré dans BR5 (non fusionné). E8 : étiquette de catégorie `64e843a0`.
- Aperçu de carte E1 : `-webkit-line-clamp` 8 (carte) et 3 (liste) ✗ `35c0380c` → `--lines` ; ensuite `--lines` 6 → 10, snippet 3 → 4, `≥ 40 em` 8 → 14 et snippet 4 → 5, édition `≥ 64 em` 5 → 7 — `e30d2cdc` ; `.card-body.is-line` `nowrap` ✗ `e30d2cdc` ; règles `@media (min-width: 40em)` ✗ `ba6e7b28` → `@container list`, ✗ `d6af8790`.
- E0 → E1 : retrait de règles typographiques listé en section 4.

### H. Échelle documentée E6 (DESIGN.md)

- `Label` : `12px · 620` — `1f5a70d2` 2026-10-29 — `13px` `c80dbb09` 2026-10-31 ; `Value Mono` : `12px · 600` → `13px` `c80dbb09`. BR2 `77ff3726` ajoute `supporting 14px / 1.6` et `meta 13px`, BR5 `d665efcb` la règle « Sentences never go below 14px » : non fusionnés.

### I. Tailwind (E8)

- Titre du journal, titre de release, étiquette de catégorie (`1818172f` → `64e843a0`), puce de version (`1818172f` → `64e843a0`) : `1274fca0` et `64e843a0` (2026-11-05, 12:55-12:56) — non documentées. Champ titre de note `text-2xl font-bold` `77efa570` → classe CSS `.ms-note-heading input` `62846504` ; pages Paramètres `d5c96cef` 2026-11-03 → supprimées `7d72e331`.

## 4. Éléments disparus

| élément | créé (réf) | supprimé (réf) | version | remplacé par | note |
|---|---|---|---|---|---|
| Figtree (paquet) | `notes-v5@b1f17318` 2026-10-21 | `notes-v5@67979ff5` 2026-10-21 | E4 | Manrope, Work Sans, Sora, Instrument Serif (par look) | « paquet retiré car plus utilisé » ; import retiré `945cd023` |
| Literata (paquet, 2 `@font-face`, réglage « Police des notes ») | `notes-v3@d6af8790` 2026-10-19 | `notes-v3@ef23bea4` 2026-10-19 | E1 | Figtree seul | réapparaît en E6 (mode papier) |
| `--font-serif` Literata, `--font-notes`, `body[data-font='serif']`, `.glyph-i` et `.serif-sample` en serif | `notes-v3@4da62555` 2026-10-18 (`d6af8790` pour Literata) | `notes-v3@ef23bea4` 2026-10-19 | E1 | `--font` | pile serif système d'E0 remplacée puis supprimée |
| Inter (import BlockNote) | `mindspace-old@0bdaf5ca` 2026-11-05 | `mindspace-old@dbbcaa29` 2026-11-05 | E8 | pile système `--font-sans` | présent 50 minutes |
| `-apple-system`, `BlinkMacSystemFont` (pile de base) | `notepad-pwa@3c6f6152` 2026-10-20 | `notepad-pwa@576a8c9d` 2026-10-20 | E2 | `Inter, "Segoe UI", sans-serif` | |
| CSS entier de notepad-pwa (piles, tailles, graisses, interlignes) | `notepad-pwa@3c6f6152` 2026-10-20 | `notepad-pwa@a488cc67` 2026-10-20 | E2 | aucun CSS à HEAD | dernier CSS connu `76dfefe5` |
| Sources E0 : règles `.card-progress`, `.save-status` (taille, graisse), `.editor-meta-line`, `.media-count`, `.meta-remind`, `.meta-study`, `.pull-hint`, `.card-meta .meta-folder`, `.editor-meta .meta-folder` | `notes-v3@b6647a04` 2026-10-09 | `notes-v3@ea104c22` 2026-10-15 | E0 | `.editor-meta`, `.card-footer`, `.create-tile`, `.nav-tab` (refonte UX) | `.card-progress`, `.save-status` reviennent en E1 |
| E0 : `.menu h4, .popover h4` (taille, graisse), `.changelog summary span`, `.changelog ul` | `notes-v3@b6647a04` / `637a0265` 2026-10-09 | `notes-v3@637a0265` / `b99f70fc` 2026-10-09 | E0 | `.menu h4, .popover h4, .welcome h4` puis `.sheet h4` | — |
| `--text-2xs` (10,5 px, puis 11 px) | `notes-v3@4da62555` 2026-10-18 | `notes-v3@fe7ee2da` 2026-10-29 | E1 | `--text-xs` | usages migrés `e30d2cdc` |
| Majuscules + `.04em` des titres de feuille (`.layer h4`, `.sheet h4`, `.note-found h2`, `.sheet-section > h3`) | `notes-v3@4da62555` 2026-10-18 | `notes-v3@8eb1ac1c` 2026-10-19 | E1 | casse normale, `--text-sm` | « titres de section en minuscules » |
| E1 : `.lib-head h2`, `.lib-head p`, `.recap-hello`, `.tile` (taille, graisse), `.tile small` | `notes-v3@801d11fb` / `4a4da608` 2026-10-18 | `notes-v3@d6af8790` / `4a4da608` 2026-10-18 à 2026-10-19 | E1 | non documenté | — |
| E1 : `-webkit-line-clamp` 8, 3 et variantes `@media`/`@container` | `notes-v3@4da62555` à `d6af8790` | `notes-v3@35c0380c` 2026-10-21 (variantes : `ba6e7b28`, `d6af8790`) | E1 | `--lines` | — |
| E1 : `.main-dock .tab-btn span` `-.03em` (≤ 24 em) | `notes-v3@78e2a8a6` 2026-10-29 | `notes-v3@e30d2cdc` 2026-10-29 | E1 | `-.04em` (≤ 26 em) | — |
| E4 : `--text-base`, `--text-2xs`, `--weight-heading`, graisses 550, 650, 750, 800, 900 et tailles brutes | `notes-v5@b1f17318` 2026-10-21 | `notes-v5@67979ff5`, `82aa90c2` 2026-10-21 | E4 | `--weight-*` 500/600/700, `--text-input`, `--text-md` | — |
| E4 : `--font-display` `var(--font)` (looks.css), titres Glass `-.035em`, `h4` Paper majuscules `.06em` | `notes-v5@b1f17318` 2026-10-21 | `notes-v5@ad232dfb` 2026-10-21 | E4 | Sora / Instrument Serif ; `--label-*` | — |
| E4 : `.tab-btn` `-.025em` | `notes-v5@ad232dfb` 2026-10-21 | `notes-v5@2466c955` 2026-10-24 | E4 | `.ctl.is-stack` `-.025em` | — |
| E4 : `text-transform: capitalize` sur `.calendar-heading h2` | `notes-v5@32e9bd9e` 2026-11-08 | `notes-v5@f1b51602` 2026-11-08 | E4 | `.calendar-period` | — |
| E6 : tailles 8, 9, 10, 11 px et mono 10/11 px | `notes-v6@57c25ea2` 2026-10-28 | `notes-v6@1bae3e15` 2026-10-28 | E6 | tailles 12 px et plus | libellé V1 « contraste » |
| E6 : 12 px, 14 px, `.12em` à `.15em` | `notes-v6@57c25ea2` 2026-10-28 | `notes-v6@c80dbb09` 2026-10-31 | E6 | `--text-xs` 13 px, `--text-sm`, `.08em`, `normal` | — |
| E6 (branches non fusionnées) : 22, 25, 29 px, `.16em`, 1.12, 1.13, 1.7, 1.85, `uppercase` | `notes-v6@1f5a70d2` 2026-10-29 | `d11bb77c`, `7f351420`, `ac3fbc72`, `d665efcb` (2026-10-29 à 2026-10-31) | E6 | non fusionné | la ligne main les garde |
| E7 : 11,5 px, 15 px (`.glyph-card`), 17 px (`.glyph`), `-.04em` (tab span), `font-family: inherit`, `.04em` | `notes-aistudio@9021b9bc` / `d2819fcc` | `notes-aistudio@d2819fcc` 2026-11-02, `6dbe9114`, `6fc4b9d7` 2026-11-05 | E7 | 10,5 px, `-.03em` | — |
| E8 : `changelog.css` (titres, tailles, graisses, interlignes, mono) | `mindspace-old@83de6dd4` 2026-11-05 | `mindspace-old@7e3da2f4` 2026-11-05 | E8 | classes Tailwind | — |
| E8 : titres Tailwind de `SettingsHub.tsx` | `mindspace-old@d5c96cef` 2026-11-03 | `mindspace-old@7d72e331` 2026-11-05 | E8 | `src/style.css` (`.settings-*`) | — |
| E8 : champ titre `text-2xl font-bold` | `mindspace-old@77efa570` 2026-11-05 | `mindspace-old@62846504` 2026-11-05 | E8 | `.ms-note-heading input` | — |
| E8 : `uppercase tracking-wide`, `font-mono tabular-nums` (catégorie, puce) | `mindspace-old@1818172f` 2026-11-05 | `mindspace-old@64e843a0` 2026-11-05 | E8 | `text-xs font-semibold`, `text-xs font-medium` | — |

## 5. Éléments propres à une seule version

- E0 : Arial (export PowerPoint) `notes-v3@43a8615b` ; jetons `--font-size-2xs…3xl`, `--font-weight-regular…heavy`, `--font-leading-*`, `--font-tracking-tight/wide` ; impression 12 pt, `h1` 22 pt, `h2` 15 pt (`b6647a04`) ; `.editor-view .md-h1` 1,45 em.
- E1 : préchargement de la face Figtree `notes-v3@c590aacb` ; `--text-2xs` ; jeton `--leading`.
- E2 : `-apple-system`/`BlinkMacSystemFont`, pile de la fenêtre flottante (`3c6f6152`).
- E3 : `--font-display` Inter jamais lu ; `h1` et `.title-input` en `clamp`.
- E4 : Sora, Work Sans, Instrument Serif, Manrope variable (`b1f17318`) ; jetons `--weight-body`, `--weight-display`, `--label-case`, `--label-tracking`, `--tracking-*`, `--text-input`, `--text-heading`, `--text-label` ; `capitalize` du calendrier.
- E5 : Manrope statique, graisses 400/500/700/800, jetons `--text-h1/h2/body/caption` et `--line-*` en px (`2923c47d`).
- E6 : JetBrains Mono (`57c25ea2`, local `c80dbb09`) ; échelle DESIGN.md (Display, Note Title, Headline, Title, Body, Writing, Label, Value Mono) ; graisses 430, 620, 630, 670, 680, 760 ; interlignes 1.08, 1.13, 1.16, 1.85, 1.95 ; espacements `-.045em`, `-.055em`, `.16em`.
- E7 : `[data-font-scale]` en px (14/18), pile monospace courte `6dbe9114`, `.03em`, `.05em`, `1.35`.
- E8 : classes Tailwind de texte ; `font-size: 0` ; `changelog.css` ; `.875em` du code ; graisse 750 sur 4 règles.
- E9 : `--ms-text-size`, `--ms-text-leading`, `--ms-h1/h2/h3-size` (`93b47014`) ; ligatures désactivées `67a5541f` ; `mark` gras + souligné `1d3ce5c0` ; `text-overflow: ellipsis` ; `font-variant-ligatures`.

## 5b. Polices chargées ou citées et jamais utilisées

- Inter dans `notepad-pwa` (E2) : nom dans `Inter, "Segoe UI", sans-serif` (`576a8c9d`) sans `@font-face`, lien Google ni paquet fontsource : dépend de l'installation locale.
- Inter dans `notes-4` (E3) : `--font-ui` et `--font-display` (`94f8e515`), non chargée ; `--font-display` défini, jamais lu par un composant.
- Inter dans `mindspace-old` (E8) : chargée par l'import BlockNote 50 minutes (`0bdaf5ca` à `dbbcaa29`) ; son emploi par l'interface n'est pas documenté.
- Figtree dans `notes-v5` (E4) : paquet chargé puis plus utilisé (`67979ff5`) ; les notes de version continuent de la citer.
- Literata dans `notes-v5` (E4) : jamais chargée ni référencée ; citée dans le texte hérité de `notes-v3` (« Police des notes au choix : Figtree ou Literata »).
- Manrope 500 dans `notes-svelte` (E5) : graisse importée, jamais utilisée dans les composants lus ; `--text-h2` défini, aucun h2.

## 6. Contradictions et trous

1. E2 : le CSS n'existe plus à HEAD (`a488cc67`) ; les cellules E2 sont l'état de `76dfefe5`. Les entrées signalent aussi des contenus de fichiers permutés.
2. E3 : trois commits (`28ad8ce4`, `6f00cf58`, `854f07b5`) ont des contenus permutés ; valeurs lues par contenu.
3. Aucune source ne relie les jetons d'E0 (`--font-size-*`) à ceux d'E1 (`--text-*`) : paliers comparés par valeur. Les valeurs de `--line-clamp-card`, `--line-clamp-list`, `--size-badge` (E0) ne sont pas données.
4. Conversion rem vers px à 16 px : seule E9 la fait explicitement ; ailleurs elle est supposée. E4 et E7 ont en plus un `data-font-scale` qui change la base.
5. Propriétés non extraites : les entrées d'E6, E7 et E8 ne listent que `font-family`, `font-size`, `font-weight`, `letter-spacing`, `line-height`, `text-transform` (E4 ajoute `font-variant-numeric`). Les `—` d'E6, E7, E8 sur les lignes de la famille G, sur « Police des champs et boutons » et sur l'italique ne prouvent pas une absence.
6. E4 : l'ordre de `945cd023` (retrait de l'import Figtree), sans date dans les entrées, et de `ad232dfb` n'est pas établi. Les notes de version d'E4 citent Figtree et Literata alors que le code les a retirées ou ne les a jamais eues.
7. E7 `.main-dock .tab-btn span` : 11,5 px (supprimé `6dbe9114`), 10,5 px et 11 px (2 règles à HEAD) coexistent sans qu'on sache quelle règle (media) porte quoi ; `-.04em` supprimé et `-.03em` créé le même jour (`d2819fcc`), alors qu'E1 avait fait l'inverse (`e30d2cdc`).
8. E8 : `.ms-app-sidebar h1` a `1.3rem` (`62846504`) et `0` (`aeca0395`), tous deux notés HEAD ; la règle qui l'emporte n'est pas donnée.
9. E6 : la ligne main garde des valeurs que les branches non fusionnées retirent (22, 25, 29 px, `.16em`) ; le « HEAD » des tableaux de branches vaut `d665efcb`, pas `c2701fc1`.
10. E7 : `.glyph` 17 px et `.glyph-card` 15 px supprimés (`d2819fcc`) alors que le même dépôt, copie d'E1, les garde dans E1 ; raison non documentée.
11. E1 `font-display` des `@font-face` Literata et du paquet Figtree non indiqué ; E0, E4, E6 : `swap`.
12. E9 : titres de pages hors éditeur sans règle de taille (valeurs navigateur) ; échelle décrite « provisoire » (`93b47014`).
13. Valeurs sans raison de commit : presque tous les changements de la section 3 ; seules les raisons citées en section 3 viennent d'un message ou d'un libellé.
14. E0 : `Arial` (PowerPoint) est une chaîne JS, pas une règle CSS ; sa présence en E1 n'est pas couverte.
15. E4 : sous-ensembles Unicode connus par un seul build (`dist` de `bbf94fb8`, sans date).

Détail complet par dépôt : design-system/by-repo/<repo>/typography.md
