Source : notes-v5, commits lus : 132, plage : 2026-10-21 à 2026-11-11

Thèmes et « looks » nommés, accents, modes clair/sombre, réglages de personnalisation, avec dates d'introduction et de retrait et différences de jetons. Aucun look n'a été retiré à HEAD ; un look C « Bold Utility » est seulement proposé dans la documentation.

## 1. Inventaire

| thème / look | nom affiché | attribut | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| Soft Glass Pro (B) | Verre | `data-look='glass'` | notes-v5@b1f17318 2026-10-21 (looks.css importé avec l'app) | HEAD | défaut ; Manrope + Sora ; verre blanc 62 %, flou 28px saturé 180 % ; réglé comme `look ?? 'glass'` ; refondu par notes-v5@ad232dfb |
| Paper and Ink (A) | Papier | `data-look='paper'` | notes-v5@b1f17318 2026-10-21 | HEAD | Work Sans + Instrument Serif ; sans verre ; hairlines 1px ; refondu par notes-v5@ad232dfb |
| Minimal (Soft Minimal) | Minimal | `data-look='minimal'` | notes-v5@feebaaea 2026-11-10 (palette), option de Réglages notes-v5@f5089647, avant-peinture notes-v5@62fcd009 | HEAD | opt-in ; « Offer Minimal alongside Verre and Papier » (project-decisions) ; fusionné par PR 17 (5.11.11.17) |
| Bold Utility (C) | — | `data-look='utility'` (proposé) | notes-v5@499ece81 2026-10-21 (docs/design-teardown.md) | NON CONSTRUIT | « future option, not built » ; Inter Tight ou Geist, noir/blanc, accent #ffcc00, rayon ratio 6 |
| Auto / Clair / Sombre | Auto, Clair, Sombre | `data-theme` absent / `light` / `dark` + `color-scheme: light dark` | notes-v5@b1f17318 2026-10-21 | HEAD | « apparence rapide » Auto/Clair/Sombre dans un panneau depuis notes-v5@32e9bd9e |
| Accent Ambre | Ambre | (aucun) | notes-v5@ad232dfb 2026-10-21 | HEAD | défaut ; `--accent-amber #f4c542` |
| Accent Abricot | Abricot | `data-accent='apricot'` | notes-v5@ad232dfb 2026-10-21 (réglage 945cd023) | HEAD | `#f59e5b`, encre #9a4a0f / #f8a76b, bord #d97b33, sur-accent #2a1505 |
| Accent Lilas | Lilas | `data-accent='lilac'` | notes-v5@ad232dfb 2026-10-21 (réglage 945cd023) | HEAD | `#b9a2f5`, encre #5b3fc4 / #c3b1f7, bord #9479e3, sur-accent #1d1433 |
| Droitier / Gaucher | — | `body[data-hand]` | notes-v5@b1f17318 2026-10-21 | HEAD | |
| Teinte de dossier | off / on | `body[data-tint]` | notes-v5@b1f17318 2026-10-21 | HEAD | cartes teintées par la couleur du dossier |
| Taille du texte | Petite / Normale / Grande | `data-font-scale` : 93,75 % / 112,5 % | notes-v5@1c1fb148 2026-11-11 | HEAD | |
| Densité | Aérée / Compacte | `data-density` | notes-v5@1c1fb148 2026-11-11 | HEAD | compacte : cartes `padding: --space-3`, liste `gap: --space-1` |
| Police d'écriture | Système / Livre (Georgia) / Code (monospace) | `data-editor-font` | notes-v5@1c1fb148 2026-11-11 | HEAD | |
| Largeur d'écriture | Étroite 40rem / Normale 55rem / Large | `data-editor-width` | notes-v5@1c1fb148 2026-11-11 | HEAD | |
| Contours renforcés | oui / non | `data-borders='true'` : bordure 1px `--color-line-strong` | notes-v5@1c1fb148 2026-11-11 | HEAD | |
| Contraste renforcé | oui / non | `data-high-contrast='true'` | notes-v5@1c1fb148 2026-11-11 | HEAD | sélecteur re-scopé `:root[data-look]` par notes-v5@89526ff2 pour passer devant les looks |
| Fond OLED | oui / non | `data-oled='true'` + thème sombre : bg et editor `#000` | notes-v5@1c1fb148 2026-11-11 | HEAD | idem re-scopé par 89526ff2 |
| Réduire les animations | oui / non | `data-reduced-motion='true'` | notes-v5@1c1fb148 2026-11-11 | HEAD | |
| Éditeur pleine largeur | oui / non | `body.note-wide` | notes-v5@1c1fb148 2026-11-11 | HEAD | |

Pré-peinture : un script inline lit `notes:look`, `notes:accent`, `notes:theme` dans localStorage et pose les attributs avant le premier rendu (notes-v5@945cd023 2026-10-21 dans `__root.tsx`, déplacé dans `index.html` par notes-v5@19c7ee4b 2026-11-07 ; accepte `minimal` depuis notes-v5@62fcd009 2026-11-10). Le sol de premier affichage de `styles.css` ne couvre que Glass et Paper (voir colors.md §3).

## 2. Différences entre Glass, Paper et Minimal (valeurs à HEAD)

| jeton | Glass | Paper | Minimal |
|---|---|---|---|
| polices | Manrope / Sora | Work Sans / Instrument Serif | Manrope / Sora |
| ratio de rayon | 3 (hérité de tokens.css) | 4,8 | 4 |
| rayons md / lg | 22 / 28 | 14 / 20 | 28 / 32 |
| verre | blanc 62 %, flou 28px saturé 180 % | aucun (`--glass` = carte, flou none) | aucun (opaque, flou none) |
| ombres 1 / 2 / 3 | `0 1px 2px` 8 % / `0 8px 24px` 11 % / `0 24px 60px` 14 % | none / none / `0 12px 32px` 10 % | `0 2px 4px` 3 % / `0 8px 24px` 6 % / `0 24px 60px` 12 % |
| hairline | .5px | 1px | 1px |
| dock lift | 4px | 0 | 4px |
| titres | Sora 700, −.035em | Instrument Serif 400, −.01em, 38px | Sora 700, −.025em |
| libellés de section | 14px, casse normale | 12px, majuscules, +.04em | hérités de tokens.css |
| interligne | 1,45 | 1,55 | 1,45 |
| gouttière | 16px | `var(--space-4)` (20px) | 16px |
| icônes de liste / rangée de réglage | 48px / 52px | 48px / 52px | 56px / 56px, padding 20px, rayon 28px |
| hauteur bouton principal | 52px | 52px | 52px |
| ambiance | taches floues (accueil) | désactivée (`--ambient-*` = bg) | héritée de tokens.css |

Rayons de Glass : `--radius-md: 22px` (cartes) et `--radius-lg: 28px` (feuilles) dans looks.css depuis notes-v5@ad232dfb ; les valeurs de repli de tokens.css (24px / 24px) ne s'appliquent que sans bloc de look. Pilule du dock Glass : `--radius-dock: 999px`.

### Détail jeton par jeton, par look (looks.css, toutes valeurs)

| scope | propriété | valeur | première apparition | dernier état |
|---|---|---|---|---|
| #page-title, .editor-title, .welcome-title, .sheet-head h2, .first-use h2, .news-title, .about-name | font-family | var(--font-display) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| :is(button, .card):active | scale | var(--press) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |
| :root | --font-display | var(--font) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| :root | --press | .97 | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |
| :root | --shadow-1 | 0 1px 2px light-dark(#1218300f, #0000004d) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |
| :root | --shadow-2 | 0 8px 24px light-dark(#12183014, #00000059) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |
| :root | --shadow-3 | 0 24px 60px light-dark(#1218301f, #00000073) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |
| :root, :root[data-look='glass'] | --color-accent | #f4c542 | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root, :root[data-look='glass'] | --color-accent-deep | light-dark(#8c6600, #e0ac1c) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root, :root[data-look='glass'] | --color-accent-stroke | #d9a514 | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root, :root[data-look='glass'] | --color-bg | light-dark(#f4f5f8, #0b0c0f) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root, :root[data-look='glass'] | --color-card | light-dark(#ffffff, #17181d) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root, :root[data-look='glass'] | --color-editor | light-dark(#fafbfc, #0e0f13) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root, :root[data-look='glass'] | --color-raised | light-dark(#ffffff, #34353d) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root, :root[data-look='glass'] | --color-scrim | color-mix(in srgb, #0b0c0f var(--alpha-strong), transparent) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root, :root[data-look='glass'] | --color-select | light-dark(#0062cc, #0a84ff) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root, :root[data-look='glass'] | --dock-lift | 4px | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root, :root[data-look='glass'] | --font | 'Manrope Variable', Manrope, system-ui, -apple-system, 'Segoe UI', sans-serif | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root, :root[data-look='glass'] | --font-display | 'Sora Variable', Sora, var(--font) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root, :root[data-look='glass'] | --glass | light-dark(rgb(255 255 255 / 62%), rgb(38 39 46 / 62%)) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root, :root[data-look='glass'] | --glass-blur | blur(28px) saturate(180%) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root, :root[data-look='glass'] | --radius-dock | 999px | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root, :root[data-look='glass'] | --radius-lg | 28px | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root, :root[data-look='glass'] | --radius-md | 22px | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root, :root[data-look='glass'] | --tracking-heading | -.02em | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root, :root[data-look='glass'] | --tracking-title | -.035em | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root, :root[data-look='glass'] | --weight-display | 700 | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-accent='apricot'] | --color-accent | #f59e5b | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-accent='apricot'] | --color-accent-deep | light-dark(#9a4a0f, #f8a76b) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-accent='apricot'] | --color-accent-stroke | #d97b33 | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-accent='apricot'] | --color-on-accent | #2a1505 | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-accent='lilac'] | --color-accent | #b9a2f5 | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-accent='lilac'] | --color-accent-deep | light-dark(#5b3fc4, #c3b1f7) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-accent='lilac'] | --color-accent-stroke | #9479e3 | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-accent='lilac'] | --color-on-accent | #1d1433 | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='glass'] | --color-accent-deep | light-dark(#8c6600, #d9a514) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| :root[data-look='glass'] | --color-bg | light-dark(#f4f5f8, #0b0c0f) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| :root[data-look='glass'] | --color-scrim | light-dark(#10121a33, #00000066) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| :root[data-look='glass'] | --color-select | light-dark(#0062cc, #0a84ff) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| :root[data-look='glass'] | --font | 'Manrope Variable', Manrope, system-ui, sans-serif | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| :root[data-look='glass'] | --font-display | 'Sora Variable', Sora, var(--font) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| :root[data-look='glass'] | --glass | light-dark(#ffffff9e, #23242b85) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| :root[data-look='glass'] | --glass-blur | blur(28px) saturate(180%) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| :root[data-look='glass'] | --glass-shadow | inset 0 1px 0 light-dark(#ffffffe6, #ffffff2e), var(--shadow-2) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| :root[data-look='glass'] | --text-lg | 17px | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |
| :root[data-look='glass'] | --text-md | 15px | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |
| :root[data-look='glass'] | --text-sm | 14px | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |
| :root[data-look='glass'] | --text-xl | 21px | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |
| :root[data-look='glass'] | --weight-heading | 700 | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |
| :root[data-look='glass'] | --weight-label | 600 | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |
| :root[data-look='glass'] | --weight-title | 700 | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |
| :root[data-look='minimal'] | --color-bg | light-dark(#fafaf9, #101115) | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --color-card | light-dark(#ffffff, #1b1d23) | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --color-editor | light-dark(#ffffff, #15171c) | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --color-raised | light-dark(#ffffff, #363943) | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --color-text | light-dark(#171717, #f2f3f5) | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --color-text-faint | light-dark(#626772, #aab0bb) | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --color-text-muted | light-dark(#50545d, #c0c4cc) | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --dock-lift | 4px | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --font | 'Manrope Variable', Manrope, system-ui, -apple-system, 'Segoe UI', sans-serif | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --font-display | 'Sora Variable', Sora, var(--font) | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --glass | var(--color-card) | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --glass-blur | none | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --glass-edge | var(--color-line) | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --glass-nav | var(--color-card) | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --glass-shadow | var(--shadow-1), var(--shadow-2) | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --glass-shine | none | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --glass-solid | var(--color-card) | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --glass-strong | var(--color-card) | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --hairline | 1px | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --list-gap | 16px | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --list-icon-padding | 12px | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --list-icon-radius | calc(var(--list-radius) - var(--list-icon-padding)) | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --list-icon-size | 56px | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --list-padding | 20px | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --list-radius | 28px | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --list-shadow | var(--shadow-1), var(--shadow-2) | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --list-space | 12px | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --primary-height | 52px | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --radius-dock | calc(var(--radius-sm) + var(--space-1)) | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --radius-lg | 32px | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --radius-md | 28px | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --radius-ratio | 4 | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --settings-row-height | 56px | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --settings-row-radius | 16px | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --shadow-1 | 0 2px 4px light-dark(rgb(0 0 0 / 3%), rgb(0 0 0 / 18%)) | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --shadow-2 | 0 8px 24px light-dark(rgb(0 0 0 / 6%), rgb(0 0 0 / 24%)) | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --shadow-3 | 0 24px 60px light-dark(rgb(0 0 0 / 12%), rgb(0 0 0 / 38%)) | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --tracking-title | -.025em | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='minimal'] | --weight-display | 700 | notes-v5@feebaaea 2026-11-10 | HEAD |
| :root[data-look='paper'] | --ambient-1 | var(--color-bg) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --ambient-2 | var(--color-bg) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --ambient-3 | var(--color-bg) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --color-accent | #f2b632 | notes-v5@b1f17318 2026-10-21 | HEAD |
| :root[data-look='paper'] | --color-accent-deep | light-dark(#7d5800, #f2b632) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --color-accent-deep | light-dark(#835c00, #f2b632) | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ light-dark(#7d5800, #f2b632)) |
| :root[data-look='paper'] | --color-accent-glow | 0 0 transparent | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --color-accent-glow | none | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ 0 0 transparent) |
| :root[data-look='paper'] | --color-accent-stroke | #c9921a | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --color-bg | light-dark(#f7f4ec, #121110) | notes-v5@b1f17318 2026-10-21 | HEAD |
| :root[data-look='paper'] | --color-card | light-dark(#fffdf7, #1c1a17) | notes-v5@b1f17318 2026-10-21 | HEAD |
| :root[data-look='paper'] | --color-card-solid | var(--color-card) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |
| :root[data-look='paper'] | --color-danger | light-dark(#c8322b, #ff7a6e) | notes-v5@b1f17318 2026-10-21 | HEAD |
| :root[data-look='paper'] | --color-editor | var(--color-card) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --color-editor | light-dark(#fbf9f3, #161412) | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ var(--color-card)) |
| :root[data-look='paper'] | --color-fill | light-dark(#1f1b160d, #f3efe612) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| :root[data-look='paper'] | --color-fill-strong | light-dark(#1f1b1617, #f3efe61f) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| :root[data-look='paper'] | --color-highlight | light-dark(#f6e2a2, #4d3d12) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --color-line | light-dark(#1f1b161a, #f3efe61a) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| :root[data-look='paper'] | --color-line-strong | light-dark(#1f1b1633, #f3efe633) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| :root[data-look='paper'] | --color-on-accent | #1f1b16 | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --color-raised | light-dark(#fffdf7, #2c2925) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --color-scrim | light-dark(color-mix(in srgb, #1f1b16 var(--alpha-medium), transparent), color-mix(in srgb, #000 var(--alpha-s | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --color-scrim | light-dark(#1f1b1638, #00000080) | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ light-dark(color-mix(in srgb, #1f1b16 var(--alpha-medium), t) |
| :root[data-look='paper'] | --color-select | light-dark(#2f5bd3, #8aa6f2) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --color-select | light-dark(#2f5bd3, #7d9cf0) | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ light-dark(#2f5bd3, #8aa6f2)) |
| :root[data-look='paper'] | --color-select-tint | light-dark(#2f5bd31a, #7d9cf02e) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| :root[data-look='paper'] | --color-text | light-dark(#1f1b16, #f3efe6) | notes-v5@b1f17318 2026-10-21 | HEAD |
| :root[data-look='paper'] | --color-text-faint | light-dark(#5f574b, #a39b8d) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --color-text-faint | light-dark(#5f574b, #9a9284) | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ light-dark(#5f574b, #a39b8d)) |
| :root[data-look='paper'] | --color-text-muted | light-dark(#4a4339, #bdb5a7) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --color-text-muted | light-dark(#4a4339, #b5ad9f) | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ light-dark(#4a4339, #bdb5a7)) |
| :root[data-look='paper'] | --dock-lift | 0px | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --font | 'Work Sans Variable', 'Work Sans', system-ui, -apple-system, 'Segoe UI', sans-serif | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --font | 'Work Sans Variable', 'Work Sans', system-ui, sans-serif | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ 'Work Sans Variable', 'Work Sans', system-ui, -apple-system,) |
| :root[data-look='paper'] | --font-display | 'Instrument Serif', Georgia, 'Times New Roman', serif | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --font-display | 'Instrument Serif', Georgia, serif | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ 'Instrument Serif', Georgia, 'Times New Roman', serif) |
| :root[data-look='paper'] | --glass | var(--color-card) | notes-v5@b1f17318 2026-10-21 | HEAD |
| :root[data-look='paper'] | --glass-blur | none | notes-v5@b1f17318 2026-10-21 | HEAD |
| :root[data-look='paper'] | --glass-edge | var(--color-line) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --glass-edge | var(--color-line-strong) | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ var(--color-line)) |
| :root[data-look='paper'] | --glass-nav | var(--color-card) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --glass-shadow | 0 1px 0 var(--color-line) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| :root[data-look='paper'] | --glass-shine | none | notes-v5@b1f17318 2026-10-21 | HEAD |
| :root[data-look='paper'] | --glass-solid | var(--color-card) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --glass-strong | var(--color-card) | notes-v5@b1f17318 2026-10-21 | HEAD |
| :root[data-look='paper'] | --gutter | var(--space-4) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --gutter | 20px | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ var(--space-4)) |
| :root[data-look='paper'] | --hairline | 1px | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --label-case | uppercase | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --label-tracking | .04em | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --leading | 1.55 | notes-v5@b1f17318 2026-10-21 | HEAD |
| :root[data-look='paper'] | --radius-card | 14px | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| :root[data-look='paper'] | --radius-control | 12px | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| :root[data-look='paper'] | --radius-dock | var(--radius-island) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --radius-island | 20px | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| :root[data-look='paper'] | --radius-lg | 20px | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --radius-md | 14px | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --radius-panel | 14px | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| :root[data-look='paper'] | --radius-ratio | 4.8 | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --radius-row | 10px | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| :root[data-look='paper'] | --shadow-1 | 0 0 transparent | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --shadow-2 | 0 0 transparent | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --shadow-3 | 0 12px 32px rgb(0 0 0 / var(--alpha-soft)) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --shadow-fab | inset 0 0 0 1px var(--color-accent-stroke) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --shadow-knob | 0 0 0 1px var(--color-line-strong) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --text-heading | 28px | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --text-label | var(--text-xs) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --text-title | 38px | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --text-title | clamp(36px, 10vw, 46px) | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ 38px) |
| :root[data-look='paper'] | --tracking-heading | 0 | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --tracking-title | -.01em | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --weight-display | 400 | notes-v5@ad232dfb 2026-10-21 | HEAD |
| :root[data-look='paper'] | --weight-heading | 600 | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |
| :root[data-look='paper'] | --weight-label | 600 | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |
| :root[data-look='paper'] | --weight-title | 400 | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |
| @media (max-height: 30em) :root[data-look='paper'] | --text-title | var(--text-heading) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| @media (prefers-contrast: more) :root, :root[data-look] | --color-line | color-mix(in srgb, var(--color-text) var(--alpha-strong), transparent) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| @media (prefers-contrast: more) :root, :root[data-look] | --color-line-strong | color-mix(in srgb, var(--color-text) calc(var(--alpha-strong) + var(--alpha-medium)), transparent) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| @media (prefers-contrast: more) :root, :root[data-look] | --color-text-faint | light-dark(#3e414c, #b9bcc6) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| @media (prefers-contrast: more) :root, :root[data-look] | --color-text-muted | light-dark(#2f323c, #d0d3dc) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| @media (prefers-contrast: more) :root, :root[data-look] | --glass | var(--glass-strong) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| @media (prefers-contrast: more) :root[data-look='paper'] | --color-text-faint | light-dark(#3d362c, #c4bcae) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| @media (prefers-contrast: more) :root[data-look='paper'] | --color-text-muted | light-dark(#2e2820, #d8d1c4) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| @media (prefers-reduced-transparency: reduce) :root, :root[data-look] | --glass | var(--glass-strong) | notes-v5@ad232dfb 2026-10-21 | HEAD |
| @media (prefers-reduced-transparency: reduce) :root, :root[data-look] | --glass-blur | none | notes-v5@ad232dfb 2026-10-21 | HEAD |
| [data-look='glass'] #page-title, [data-look='glass'] .editor-title | letter-spacing | -.035em | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| [data-look='glass'] .card | box-shadow | var(--shadow-1) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| [data-look='paper'] .ambient | display | none | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| [data-look='paper'] .card | border | 1px solid var(--color-line) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| [data-look='paper'] .card | box-shadow | none | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| [data-look='paper'] .glass | border-width | 1px | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| [data-look='paper'] .glass::before | display | none | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| [data-look='paper'] .scrim | -webkit-backdrop-filter | none | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| [data-look='paper'] .scrim | backdrop-filter | none | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| [data-look='paper'] .sheet | box-shadow | 0 12px 32px #0000001a | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| [data-look='paper'] :is(#page-title, .editor-title, .welcome-title) | font-weight | 400 | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| [data-look='paper'] :is(#page-title, .editor-title, .welcome-title) | letter-spacing | -.01em | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| [data-look='paper'] :is(.sheet-head h2, .first-use h2, .news-title, .about-name) | font-size | calc(var(--text-xl) + 4px) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| [data-look='paper'] :is(.sheet-head h2, .first-use h2, .news-title, .about-name) | font-weight | 400 | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| [data-look='paper'] :is(.sheet-head h2, .first-use h2, .news-title, .about-name) | letter-spacing | 0 | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| [data-look='paper'] h4 | font-size | var(--text-xs) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| [data-look='paper'] h4 | letter-spacing | .06em | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |
| [data-look='paper'] h4 | text-transform | uppercase | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |

## 3. Introductions, changements et retraits datés

| date | réf | événement |
|---|---|---|
| 2026-10-21 | notes-v5@b1f17318 | Glass et Paper existent déjà dans looks.css importé de Lovable ; `look` vaut `glass` par défaut ; Style (Verre / Papier) dans Réglages ; Figtree importé mais remplacé dans les looks par Manrope / Sora (glass) et Work Sans / Instrument Serif (paper) |
| 2026-10-21 | notes-v5@82aa90c2 | fondation de jetons partagée ; looks.css ne garde que ce qui diffère |
| 2026-10-21 | notes-v5@ad232dfb | looks refondus (glass 62 %, pilule, ratio, accents Abricot et Lilas, Paper : ratio 4,8, hairlines, sans glow) ; styles.css : sol de premier affichage par look |
| 2026-10-21 | notes-v5@945cd023 | réglage Accent (Ambre, Abricot, Lilas) ; mise en miroir dans localStorage |
| 2026-10-22 | notes-v5@6840b25e | retrait des teintes par type de note (KIND_TONE) : « colour keeps its meanings only » |
| 2026-10-24 | notes-v5@2466c955 | primitive `.ctl` : un seul style de bouton pour tous les looks |
| 2026-11-08 | notes-v5@32e9bd9e, notes-v5@f1b51602 | « apparence rapide » Auto/Clair/Sombre dans un panneau, limitée au thème en f1b51602 ; Styles Verre/Papier et accents conservés |
| 2026-11-10 | notes-v5@feebaaea, notes-v5@bb3fa23d, notes-v5@712013c6 | look Minimal : palette opaque, styles de cartes/listes/réglages/dock/widgets, jetons `--list-*` |
| 2026-11-11 | notes-v5@7c2488c3, notes-v5@a790ac92, notes-v5@2bd9ec0b | Minimal re-scopé sur `.settings-layout` ; Réglages en une colonne sous 64em |
| 2026-11-11 | notes-v5@1c1fb148 | réglages de personnalisation (taille, densité, police, largeur, contours, contraste, OLED, animations) |
