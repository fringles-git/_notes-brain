Source : mindspace-core, commits lus : 44, plage : 2026-11-10 à 2026-11-12

# Mise en page, navigation, géométrie — mindspace-core

## Points de rupture, grilles

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| Points de rupture (`@media (min-width / max-width)`) | aucun | `app.css` | - | HEAD | les seules requêtes média du dépôt sont `prefers-color-scheme: dark`, `forced-colors: active` et, en ère Verre, `prefers-reduced-transparency: reduce` (mindspace-core@128050ce 2026-11-10, supprimée mindspace-core@5469a8ab 2026-11-11) |
| Grilles (`display: grid`, `grid-template`) | aucune | - | - | HEAD | toute la mise en page est en flexbox et en flux normal |
| Largeurs de test | 360 px cité, 390 × 780 pour les scénarios navigateur | message de mindspace-core@c74ffb69 2026-11-10 (« tenir à 360 px ») ; `scripts/check-pwa-browser.mjs` `viewport: { width: 390, height: 780 }` | mindspace-core@c74ffb69 2026-11-10 | HEAD | ce sont des largeurs de vérification, pas des seuils de style |
| Mise en page mobile d'abord | une seule colonne, pas de largeur maximale du contenu | `.ms-main` | mindspace-core@128050ce 2026-11-10 | HEAD | aucune règle de centrage ni de `max-width` pour la page : sur grand écran le contenu occupe toute la largeur moins 2 × 16 px |
| Zones sûres | `viewport-fit=cover` et `env(safe-area-inset-bottom)` | `index.html` ; `--ms-dock-bottom` | mindspace-core@128050ce 2026-11-10 (`env()` dans le CSS) ; mindspace-core@87563ecf 2026-11-11 (`viewport-fit=cover`) | HEAD | commentaire : « the dock sits above the home indicator » ; « Non testé sur appareil » (CLAUDE.md) |
| Hauteur de l'écran | `min-height: 100dvh` | `.ms-app` | mindspace-core@128050ce 2026-11-10 | HEAD | |

## Modèle de navigation

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| Dock flottant en bas (îlot centré) | `position: fixed; inset-inline: 0; margin-inline: auto; inset-block-end: var(--ms-dock-bottom); width: fit-content` | `.ms-dock` | mindspace-core@128050ce 2026-11-10 | HEAD | pilule de 62 px de haut ; distance du bas 16 px + zone sûre |
| Trois destinations dans le dock : Notes, Tâches, Réglages | `ITEMS` / `PAGES` dans le store | `Dock.tsx`, `store.ts` | mindspace-core@128050ce 2026-11-10 | HEAD (main) | sur la branche non fusionnée mindspace-core@7dd4d041 2026-11-12 : deux destinations, Notes et Réglages |
| Action « + » séparée des destinations | `li.ms-dock__action` avec diviseur de 1 px et marge de 4 px | `Dock.tsx`, `app.css` | mindspace-core@c74ffb69 2026-11-10 | HEAD | commentaire : « an action, not a destination » |
| Retour à la liste | bouton « ‹ Notes » (`.ms-back`) ou nouvel appui sur l'onglet Notes | `NoteEditor.tsx`, `Dock.tsx` | mindspace-core@8f85ad28 2026-11-10 | HEAD | |
| Routage par l'adresse | `/` liste, `/notes/<uuid>`, `/tasks`, `/settings` ; `history.pushState`, `popstate` ; adresse inconnue = la liste, adresse remplacée | `src/router.ts` | mindspace-core@da47d9f4 2026-11-11 (PR #18) | HEAD (main) | `/tasks` retirée sur la branche non fusionnée mindspace-core@7dd4d041 2026-11-12 ; la note ouverte derrière Réglages n'est pas dans l'adresse de Réglages |
| Pas de barre latérale, pas de rail | - | - | - | - | un seul modèle : dock bas |
| Focus au changement de vue | `<main>` reçoit le focus à chaque changement de vue | `NotesPage.tsx` (mindspace-core@8f85ad28 2026-11-10) ; `remove` de `NotesList.tsx` après suppression multiple (mindspace-core@339dbce0 2026-11-11) | mindspace-core@8f85ad28 2026-11-10 | HEAD | |

## Géométrie par zone (HEAD, avec date d'origine)

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| Page `.ms-main` | `padding: var(--ms-space-4) var(--ms-space-3)` (24 px / 16 px) ; bas : dock-bottom + dock-height + 16 px | `app.css` | mindspace-core@128050ce 2026-11-10 (formule initiale), mindspace-core@93b47014 2026-11-10 (formule actuelle) | HEAD | la formule initiale tenait en littéraux `target + space-2 * 2 + space-3 * 2 + env(safe-area-inset-bottom)` |
| Pile basse (dock puis barre d'outils) | barre d'outils : `inset-block-end: var(--ms-toolbar-bottom)` = dock-bottom + dock-height (62) + 8 px ; z-index 9 sous le dock (10) | `.ms-editor__toolbar` | mindspace-core@93b47014 2026-11-10 | HEAD | « fixed island above the dock, within thumb reach » |
| Éditeur | `.ms-editor { padding-bottom: calc(var(--ms-toolbar-height) + var(--ms-space-2)) }` ; surface `min-height: 40dvh` | `app.css` | mindspace-core@93b47014 2026-11-10 | HEAD | |
| En-tête de note | colonne (`flex-direction: column`, `gap: 8px`, `margin-block-end: 16px`) ; `.ms-note__bar` ligne avec retour à gauche et Supprimer à droite (`flex-wrap`, `justify-content: space-between`) | `.ms-note__header`, `.ms-note__bar` | mindspace-core@8f85ad28 2026-11-10 ; barre : mindspace-core@4381e483 2026-11-11 | HEAD | |
| Liste de notes | colonne de lignes pleine largeur, `gap: 8px`, lignes en colonne titre / aperçu / date (`gap: 4px`) | `.ms-notes`, `.ms-note-row` | mindspace-core@8f85ad28 2026-11-10 | HEAD | l'aperçu est ajouté par la recherche (mindspace-core@1d3ce5c0 2026-11-11) |
| Bannière de rappel | bloc au-dessus de la liste, `margin-block-end: 16px`, `padding: 16px` | `.ms-reminder` | mindspace-core@822c9496 2026-11-11 | HEAD | |
| Barre de sélection | `display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-block-end: 16px` | `.ms-selectbar` | mindspace-core@339dbce0 2026-11-11 | HEAD | |
| Réglages | sections empilées, `margin-block-start: 24px` entre sections ; boutons en rangée `flex-wrap` (`gap: 8px`, `margin-block: 16px`) | `.ms-section`, `.ms-actions` | mindspace-core@0a15c7ce 2026-11-11 | HEAD | |
| Dialogue de confirmation | centré par le navigateur (`showModal`), `width: min(28rem, 100% - 32px)`, `padding: 16px` | `.ms-dialog` | mindspace-core@4381e483 2026-11-11 | HEAD | |

## État de chaque disposition par période

| disposition | 2026-11-10 (128050ce → 8f85ad28) | 2026-11-11 (5469a8ab → HEAD) | 2026-11-12 (branche non fusionnée) |
|---|---|---|---|
| Dock | îlot verre, 3 onglets, onglet actif ambre ; « + » ajouté à c74ffb69 | pilule plate surface + bordure, actif en paire inversée, « + » ambre | 2 onglets + « + » |
| Barre d'outils | îlot verre au-dessus du dock (93b47014) | îlot plat | inchangé |
| Page Notes | vue factice (128050ce), éditeur anonyme (93b47014), éditeur de la note la plus récente (c74ffb69), liste Dexie (8f85ad28) | liste + recherche + sélection + rappel | inchangé |
| Page Réglages | vue factice | sauvegarde (0a15c7ce), restauration (4381e483) | inchangé |
| Page Tâches | vue factice | vue factice | supprimée (7dd4d041) |
| Éditeur | sans cadre | carte 16 px | inchangé |
