Source : mindspace-core, commits lus : 44, plage : 2026-11-10 à 2026-11-12

# Rayons, espacements, bordures, tailles — mindspace-core

Il n'existe qu'un seul jeton de rayon, `--ms-radius-pill`. Les autres rayons sont écrits avec les jetons d'espacement (`--ms-space-*`) : 16 px = `--ms-space-3`, 8 px = `--ms-space-2`. Aucune règle de calcul du type « hauteur ÷ 3 » dans le dépôt. Les jetons sont dans `src/ui/tokens.css` (2026-11-10), puis `src/styles/tokens.css` depuis mindspace-core@5469a8ab 2026-11-11.

## Rayons

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| `--ms-radius-pill` | `999px` | tokens.css | mindspace-core@128050ce 2026-11-10 | HEAD | dock, barre d'outils, onglets, outils, `.ms-back`, `.ms-button` (depuis mindspace-core@0a15c7ce 2026-11-11) |
| Cartes et lignes | `var(--ms-space-3)` = 16 px | `.ms-note-row` (mindspace-core@8f85ad28 2026-11-10) ; `.ms-editor__content`, `.ms-phrase-box`, `.ms-card`, `.ms-warning`, `.ms-dialog`, `.ms-reminder` | mindspace-core@8f85ad28 2026-11-10 (ligne) ; mindspace-core@5469a8ab 2026-11-11 (éditeur devenu carte) ; mindspace-core@0a15c7ce 2026-11-11 (`.ms-phrase-box`, `.ms-warning`) ; mindspace-core@4381e483 2026-11-11 (`.ms-card`, `.ms-dialog`) ; mindspace-core@822c9496 2026-11-11 (`.ms-reminder`) | HEAD | |
| Champs et phrase | `var(--ms-space-2)` = 8 px | `.ms-phrase` (mindspace-core@0a15c7ce 2026-11-11), `.ms-field` (mindspace-core@4381e483 2026-11-11), `.ms-search` (mindspace-core@1d3ce5c0 2026-11-11) | mindspace-core@0a15c7ce 2026-11-11 | HEAD | |
| Surface de l'éditeur, focus (ère verre) | `border-radius: var(--ms-space-1)` = 4 px, avec `outline-offset: var(--ms-space-2)` | `.ms-editor__content:focus-visible` dans `editor.css` | mindspace-core@93b47014 2026-11-10 | SUPPRIMÉE mindspace-core@5469a8ab 2026-11-11 | remplacée : l'éditeur devient une carte de 16 px, `outline-offset: 2px` |
| Contour du dock (forme) | pilule | `.ms-dock` | mindspace-core@128050ce 2026-11-10 | HEAD | |

## Échelle d'espacement

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| `--ms-space-1` | `4px` | tokens.css | mindspace-core@128050ce 2026-11-10 | HEAD | écarts de dock, de ligne, padding de la barre d'outils |
| `--ms-space-2` | `8px` | tokens.css | mindspace-core@128050ce 2026-11-10 | HEAD | padding du dock, `gap` de listes et d'actions |
| `--ms-space-3` | `16px` | tokens.css | mindspace-core@128050ce 2026-11-10 | HEAD | marges latérales de `.ms-main`, padding des cartes |
| `--ms-space-4` | `24px` | tokens.css | mindspace-core@128050ce 2026-11-10 | HEAD | padding vertical de `.ms-main`, `margin-block-start` des sections |
| Padding horizontal d'un onglet du dock, version 1 | `0 var(--ms-space-3)` = 16 px | `.ms-dock__item` dans `ui.css` | mindspace-core@128050ce 2026-11-10 | REMPLACÉE mindspace-core@c74ffb69 2026-11-10 | |
| Padding horizontal d'un onglet du dock, version 2 | `0 calc(var(--ms-space-2) + var(--ms-space-1))` = 12 px | `.ms-dock__item` | mindspace-core@c74ffb69 2026-11-10 | HEAD | message du commit : « marges des items réduites pour tenir à 360 px » |
| Écart interne du dock | `gap: var(--ms-space-1)` | `.ms-dock__list` | mindspace-core@128050ce 2026-11-10 | HEAD | |
| Écart des listes | `gap: var(--ms-space-2)` (`.ms-notes`), `gap: var(--ms-space-1)` (colonne d'une ligne) | `app.css` | mindspace-core@8f85ad28 2026-11-10 | HEAD | |
| Écart de la ligne en mode sélection | `gap: var(--ms-space-3)` | `.ms-note-row--select` | mindspace-core@339dbce0 2026-11-11 | HEAD | |
| Marge basse de `.ms-main` (place du dock), version 1 | `calc(target + space-2 * 2 + space-3 * 2 + env(safe-area-inset-bottom))` | `ui.css` | mindspace-core@128050ce 2026-11-10 | REMPLACÉE mindspace-core@93b47014 2026-11-10 | |
| Marge basse de `.ms-main`, version 2 | `calc(var(--ms-dock-bottom) + var(--ms-dock-height) + var(--ms-space-3))` | `ui.css` puis `app.css` | mindspace-core@93b47014 2026-11-10 | HEAD | |
| Padding du corps de page | `var(--ms-space-4) var(--ms-space-3)` (24 px haut/bas, 16 px côtés) | `.ms-main` | mindspace-core@128050ce 2026-11-10 | HEAD | |

## Largeurs de bordure et de contour

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| Bordure d'une surface (dock, barre d'outils, lignes, carte d'éditeur, cartes, phrase) | `1px solid`, couleur `--ms-border` | `app.css` | mindspace-core@5469a8ab 2026-11-11 | HEAD | |
| Même bordure, ère verre | `1px solid var(--ms-glass-border)` | `.ms-glass` (dock, barre), `.ms-note-row` | mindspace-core@128050ce 2026-11-10 | REMPLACÉE mindspace-core@5469a8ab 2026-11-11 | `--ms-glass-border` : `rgb(0 0 0 / 0.1)` clair, `rgb(255 255 255 / 0.12)` sombre |
| Bordure des boutons | `2px solid var(--ms-text)` | `.ms-button` | mindspace-core@0a15c7ce 2026-11-11 | HEAD | |
| Bordure des champs (`.ms-field`, `.ms-search`) | `2px solid var(--ms-text)` ; `aria-invalid` : `border-style: dashed` | `app.css` | mindspace-core@4381e483 2026-11-11 (champ) ; mindspace-core@1d3ce5c0 2026-11-11 (recherche) | HEAD | commentaire : « a 2px edge in the text color so it is found without relying on the faint border token » |
| Bordure du dialogue | `2px solid var(--ms-text)` | `.ms-dialog` | mindspace-core@4381e483 2026-11-11 | HEAD | |
| Bordure du rappel de sauvegarde | `2px solid var(--ms-text)` | `.ms-reminder` | mindspace-core@822c9496 2026-11-11 | HEAD | |
| Bordure de l'encadré d'avertissement, version 1 | `2px solid var(--ms-text)` | `.ms-warning` | mindspace-core@0a15c7ce 2026-11-11 | REMPLACÉE mindspace-core@e64c019e 2026-11-11 | |
| Bordure de l'encadré d'avertissement, version 2 | `2px solid var(--ms-danger)` | `.ms-warning` | mindspace-core@e64c019e 2026-11-11 | HEAD | |
| Soulignement du champ titre | `border-block-end: 1px solid var(--ms-glass-border)` puis `var(--ms-border)` | `.ms-title` | mindspace-core@8f85ad28 2026-11-10 (verre) ; mindspace-core@5469a8ab 2026-11-11 (plat) | HEAD (version plate) | |
| Diviseur de l'action « Nouvelle note » | `border-inline-start: 1px solid` glass-border puis `var(--ms-border)` | `.ms-dock__action` | mindspace-core@c74ffb69 2026-11-10 | HEAD (version plate) | |
| Anneau de focus | `outline: 3px solid var(--ms-focus)` ; `outline-offset: 2px` (général) | `:focus-visible` des composants | mindspace-core@128050ce 2026-11-10 | HEAD | `outline-offset: -3px` pour `.ms-tool` (mindspace-core@93b47014 2026-11-10) ; `.ms-editor__content` : `var(--ms-space-2)` en ère verre, `2px` depuis mindspace-core@5469a8ab 2026-11-11 |
| Curseur de bloc (gapcursor) | `border-top: 1px solid var(--ms-text)`, `width: 20px`, `top: -2px` | `.ProseMirror-gapcursor::after` | mindspace-core@67a5541f 2026-11-11 | HEAD | copie des règles Tiptap |

## Tailles des contrôles

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| Cible tactile `--ms-target` | `44px` | tokens.css | mindspace-core@128050ce 2026-11-10 | HEAD | gardée par `tests/tokens.test.ts` (`min-height: var(--ms-target)` sur `.ms-dock__item`, `.ms-tool`, `.ms-note-row`, `.ms-back`, `.ms-title` ; puis + `.ms-button` mindspace-core@0a15c7ce, + `.ms-field` mindspace-core@4381e483, + `.ms-search` mindspace-core@1d3ce5c0) |
| Hauteur du dock `--ms-dock-height` | `calc(var(--ms-target) + var(--ms-space-2) * 2 + 2px)` = 62 px | tokens.css | mindspace-core@93b47014 2026-11-10 | HEAD | le `2px` est la bordure (« 2px = glass border » en ère verre, « 2px = border » depuis mindspace-core@5469a8ab) |
| Distance du dock au bas `--ms-dock-bottom` | `calc(var(--ms-space-3) + env(safe-area-inset-bottom))` | tokens.css | mindspace-core@93b47014 2026-11-10 | HEAD | |
| Hauteur de la barre d'outils `--ms-toolbar-height` | `calc(var(--ms-target) + var(--ms-space-1) * 2 + 2px)` = 54 px | tokens.css | mindspace-core@93b47014 2026-11-10 | HEAD | |
| Position de la barre d'outils `--ms-toolbar-bottom` | `calc(var(--ms-dock-bottom) + var(--ms-dock-height) + var(--ms-space-2))` | tokens.css | mindspace-core@93b47014 2026-11-10 | HEAD | la barre flotte 8 px au-dessus du dock |
| Largeur minimale d'un onglet et d'un outil | `min-width: var(--ms-target)` | `.ms-dock__item`, `.ms-tool`, `.ms-back` | mindspace-core@128050ce 2026-11-10 | HEAD | |
| Bouton « + » (`.ms-fab`) | 44 px minimum (item du dock), glyphe `1.5rem` | `.ms-fab` | mindspace-core@5469a8ab 2026-11-11 (nom, fond ambre) ; glyphe depuis mindspace-core@c74ffb69 2026-11-10 | HEAD | aucune taille propre de FAB : c'est un `.ms-dock__item` |
| Case à cocher de sélection | `width: 1.5rem; height: 1.5rem` (24 px), `accent-color: var(--ms-text)` | `.ms-note-row__check` | mindspace-core@339dbce0 2026-11-11 | HEAD | la ligne entière (`<label>`) est la cible de 44 px |
| Icône corbeille | `20 × 20` px, viewBox 24 | `TrashIcon.tsx` | mindspace-core@4381e483 2026-11-11 | HEAD | |
| Hauteur minimale de la surface de l'éditeur | `40dvh` | `.ms-editor__content` | mindspace-core@93b47014 2026-11-10 | HEAD | |
| Largeur du dialogue | `min(28rem, calc(100% - var(--ms-space-3) * 2))` | `.ms-dialog` | mindspace-core@4381e483 2026-11-11 | HEAD | |
| Largeur maximale du dock et de la barre | `max-width: calc(100% - var(--ms-space-3) * 2)`, `width: fit-content` | `.ms-dock`, `.ms-editor__toolbar` | mindspace-core@128050ce 2026-11-10 (dock) ; mindspace-core@93b47014 2026-11-10 (barre) | HEAD | la barre déborde en `overflow-x: auto` |
| Texte pour lecteurs d'écran | `1px × 1px`, `margin: -1px`, `overflow: hidden` | `.ms-sr-only` | mindspace-core@0a15c7ce 2026-11-11 | HEAD | |
