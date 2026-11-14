Source : mindspace-core, commits lus : 44, plage : 2026-11-10 à 2026-11-12

# Ombres, flou, verre, opacité, z-index, mouvement — mindspace-core

Le dépôt a connu une ère « Verre » (ombre, flou, translucidité) du 2026-11-10 au 2026-11-11, retirée en bloc par mindspace-core@5469a8ab (2026-11-11). Depuis, tout est plat et opaque, et gardé par `tests/tokens.test.ts` (interdit : `backdrop-filter`, `rgb()/rgba()/hsl()/color-mix()`, `transparent`, `box-shadow`, `text-shadow`, `drop-shadow`, `filter:`, canal alpha, `opacity` inférieure à 1).

## Verre, flou, saturation, ombres, translucidité

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| Classe utilitaire `.ms-glass` | `background: var(--ms-glass-bg); border: 1px solid var(--ms-glass-border); box-shadow: var(--ms-glass-shadow); backdrop-filter: blur(20px) saturate(1.4)` (et préfixe `-webkit-`) | `src/ui/ui.css` | mindspace-core@128050ce 2026-11-10 | SUPPRIMÉE mindspace-core@5469a8ab 2026-11-11 | portée par le dock et par la barre d'outils (`className="ms-dock ms-glass"`, `"ms-editor__toolbar ms-glass"`) |
| Flou de l'arrière-plan | `blur(20px)` | `.ms-glass` | mindspace-core@128050ce 2026-11-10 | SUPPRIMÉ mindspace-core@5469a8ab 2026-11-11 | |
| Saturation de l'arrière-plan | `saturate(1.4)` | `.ms-glass` | mindspace-core@128050ce 2026-11-10 | SUPPRIMÉE mindspace-core@5469a8ab 2026-11-11 | |
| Translucidité du fond (clair) | `rgb(255 255 255 / 0.72)` | `--ms-glass-bg` | mindspace-core@128050ce 2026-11-10 | SUPPRIMÉE mindspace-core@5469a8ab 2026-11-11 | |
| Translucidité du fond (sombre) | `rgb(32 33 39 / 0.72)` | `--ms-glass-bg` | mindspace-core@128050ce 2026-11-10 | SUPPRIMÉE mindspace-core@5469a8ab 2026-11-11 | |
| Ombre (clair) | `0 8px 30px rgb(0 0 0 / 0.12)` | `--ms-glass-shadow` | mindspace-core@128050ce 2026-11-10 | SUPPRIMÉE mindspace-core@5469a8ab 2026-11-11 | |
| Ombre (sombre) | `0 8px 30px rgb(0 0 0 / 0.5)` | `--ms-glass-shadow` | mindspace-core@128050ce 2026-11-10 | SUPPRIMÉE mindspace-core@5469a8ab 2026-11-11 | |
| Repli `prefers-reduced-transparency` | `@media (prefers-reduced-transparency: reduce) { .ms-glass { background: var(--ms-surface); backdrop-filter: none } }` | `ui.css` | mindspace-core@128050ce 2026-11-10 | SUPPRIMÉ mindspace-core@5469a8ab 2026-11-11 | devenu sans objet : plus aucune transparence |
| Ombres, flou, verre, transparence | interdits | `CLAUDE.md` section « Design system » et `tests/tokens.test.ts` | mindspace-core@5469a8ab 2026-11-11 | HEAD | citation : « Design flat. Interdits : glassmorphism, `backdrop-filter`, transparence (couleurs alpha, `transparent`, `opacity` < 1), ombres. Chaque surface peint un jeton opaque. » |
| Ombre du dialogue | aucune | `.ms-dialog` | mindspace-core@4381e483 2026-11-11 | HEAD | le fond du `::backdrop` est `var(--ms-bg)`, pas une couche assombrie |
| `.ProseMirror-hideselection` | volontairement absent | `app.css` section « ProseMirror base » | mindspace-core@67a5541f 2026-11-11 | HEAD | « Left out: `.ProseMirror-hideselection` (needs `transparent`, which the flat design forbids; it only hides the selection of non-text nodes such as a rule) » |

## Opacités

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| `opacity` des placeholders | `1` | `.ms-title::placeholder` (mindspace-core@8f85ad28 2026-11-10), `.ms-field::placeholder` (mindspace-core@4381e483), `.ms-search::placeholder` (mindspace-core@1d3ce5c0) | mindspace-core@8f85ad28 2026-11-10 | HEAD | neutralise l'opacité par défaut du navigateur ; seule valeur d'`opacity` autorisée |
| Bouton désactivé | couleur et bordure `--ms-text-muted`, `cursor: progress` (aucune opacité) | `.ms-button:disabled` | mindspace-core@0a15c7ce 2026-11-11 | HEAD | |
| Prise de tape mobile `-webkit-tap-highlight-color` | `transparent` | `ui.css` | mindspace-core@128050ce 2026-11-10 | REMPLACÉE mindspace-core@5469a8ab 2026-11-11 | remplacée par un jeton opaque (`--ms-surface` ou `--ms-bg`) |

## Échelle de z-index

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| `--ms-z-content` | `0` | tokens.css | mindspace-core@128050ce 2026-11-10 | HEAD | `.ms-main` |
| `--ms-z-toolbar` | `9` | tokens.css | mindspace-core@93b47014 2026-11-10 | HEAD | barre d'outils de l'éditeur |
| `--ms-z-dock` | `10` | tokens.css | mindspace-core@128050ce 2026-11-10 | HEAD | dock |
| Dialogue modal | pas de z-index : couche supérieure du navigateur (`<dialog>` + `showModal()`) | `ConfirmDialog.tsx` | mindspace-core@4381e483 2026-11-11 | HEAD | |
| Règle | seul `tokens.css` peut contenir un `z-index` numérique ; préfixe `--ms-z-*` | `tests/tokens.test.ts` | mindspace-core@5469a8ab 2026-11-11 | HEAD | |

## Durées, courbes, `@keyframes`, transitions

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| `@keyframes ProseMirror-cursor-blink` | `to { visibility: hidden }` | `app.css`, section « ProseMirror base » | mindspace-core@67a5541f 2026-11-11 | HEAD | copié de `@tiptap/core` ; clignotement du curseur de bloc |
| Animation du curseur de bloc | `animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite` | `.ProseMirror-gapcursor::after` | mindspace-core@67a5541f 2026-11-11 | HEAD | seule animation du dépôt |
| `transition` | aucune | - | - | - | `git grep transition` sur `src` : aucun résultat à HEAD ni dans les commits lus. Aucune micro-interaction animée |
| Courbes (`cubic-bezier`, `ease`) | aucune | - | - | - | |
| `prefers-reduced-motion` | aucune règle | - | - | - | le seul mouvement est le clignotement ci-dessus (copie Tiptap) ; non protégé par `prefers-reduced-motion` |
| `scroll-behavior`, `view-transition` | aucun | - | - | - | |
| Actions tactiles | `touch-action: manipulation` sur dock, outils, lignes, boutons | `app.css` | mindspace-core@128050ce 2026-11-10 | HEAD | évite le zoom de double-tap |
| Curseur | `cursor: pointer` sur les contrôles ; `cursor: progress` sur `.ms-button:disabled` | `app.css` | mindspace-core@128050ce 2026-11-10 | HEAD | |
| Délais fonctionnels (pas du design) | titre enregistré 300 ms après la dernière frappe ; ligne d'index et `updatedAt` 400 ms ; rappel 14 jours | `NoteEditor.tsx`, `indexing.ts`, `reminder.ts` | mindspace-core@8f85ad28 2026-11-10 ; mindspace-core@91a5e0ef ; mindspace-core@822c9496 | HEAD | cités pour ne pas les confondre avec des durées de mouvement |
