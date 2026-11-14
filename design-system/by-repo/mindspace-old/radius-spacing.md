Source : mindspace-old, commits lus : 222 (registre part1, diffs complets) + 16 commits de design hors part1, plage : 2026-11-02 à 2026-11-07

# Rayons, espacements, bordures, tailles de contrôles et d'icônes

Aucune règle de calcul de type « hauteur ÷ 3 » n'existe dans ce dépôt (`git log --all -S'height / 3'` et `-S'÷'` ne trouvent rien). La seule règle de calcul est la courbure concentrique : `border-radius: max(0px, calc(var(--ms-parent-radius) - var(--ms-inset)))` avec `--ms-inset: 12px` (`.ms-surface-inset`, mindspace-old@f4917c57 2026-11-05 14:00 ; `.ms-concentric-card` qui fixe `--ms-parent-radius: var(--ms-radius-card)` et `--ms-inset: 12px` : @29b654ea 2026-11-05 15:42, « no silent radius fallback »).
Constats : (1) les classes de primitives (`.ms-surface-card`, `.ms-control`, `.ms-modal-surface`, `.ms-glass`, `.ms-surface-inset`) et `MindSpaceUI.tsx` ne sont consommées par aucun autre fichier `.tsx` à `main` ; les écrans utilisent des rayons en pixels écrits en dur dans `style.css` (vérifié par `git grep`). (2) La viewport meta n'a jamais contenu `viewport-fit=cover` alors que `env(safe-area-inset-bottom)` est utilisé.

## Jetons de rayon (src/styles/tokens.css)

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| `--radius-ui` / `--ms-radius` (valeur initiale) | 0.5rem (8px) | tokens.css `@theme` / `:root` | mindspace-old@591eb91e 2026-11-05 05:39 | `--ms-radius` REMPLACÉ par `var(--ms-radius-control)` (1rem, 16px) @072f02c6 2026-11-05 14:01 ; `--radius-ui` reste 0.5rem (HEAD) | utilisé par les cartes, filtres, puces de changelog.css |
| `--radius` | 1rem | tokens.css `:root` | mindspace-old@78997d3f 2026-11-05 14:00 | HEAD | alias shadcn |
| `--ms-radius-micro` | 0.5rem (8px) | tokens.css `:root` | mindspace-old@78997d3f | HEAD | badges, étiquettes, indices clavier (DESIGN_SYSTEM.md) |
| `--ms-radius-control` | 1rem (16px) | tokens.css `:root` | mindspace-old@78997d3f | HEAD | champs, boutons, sélecteurs, barres d'outils |
| `--ms-radius-card` | 1.5rem (24px) | tokens.css `:root` | mindspace-old@78997d3f | HEAD | cartes de release, tableaux de bord, panneaux inclus |
| `--ms-radius-modal` | 1.875rem (30px) | tokens.css `:root` | mindspace-old@78997d3f | HEAD | dialogues, tiroirs, surcouches |
| `--ms-radius-dock` | 2rem (32px) | tokens.css `:root` | mindspace-old@78997d3f | HEAD | navigation flottante ; `.ms-glass` |
| `--ms-radius-pill` | 9999px | tokens.css `:root` | mindspace-old@78997d3f | HEAD | filtres capsule, onglets compacts |
| `--radius-sm`, `--radius-md` | var(--ms-radius-micro) | tokens.css `@theme inline` | mindspace-old@78997d3f | HEAD | `rounded-sm`, `rounded-md` Tailwind |
| `--radius-lg`, `--radius-xl` | var(--ms-radius-control) | tokens.css `@theme inline` | mindspace-old@78997d3f 2026-11-05 14:00 | SUPPRIMÉS @66a0c3dc 2026-11-05 15:41 (« avoid global lg/xl radius remap ») | remplacés par `--radius-ms-control`, `--radius-ms-micro` (même commit) : les classes `rounded-lg/xl` Tailwind restent natives |
| `--radius-2xl`, `--radius-3xl` | var(--ms-radius-card) / var(--ms-radius-modal) | tokens.css `@theme inline` | mindspace-old@78997d3f | HEAD | `rounded-2xl` = 24px, `rounded-3xl` = 30px |
| `--ms-space-card` | 1.5rem | tokens.css `:root` | mindspace-old@78997d3f | HEAD | seul jeton d'espacement de tout l'historique ; non consommé |
| `--ms-border-width` | 1px | tokens.css `:root` | mindspace-old@591eb91e 2026-11-05 05:39 | HEAD | utilisé par changelog.css (supprimé) ; changelog.css utilisait aussi 2px (trait de rail) et 3px (bord de nœud) en dur jusqu'à @28bcfe04 05:41 |

## Rayons écrits dans `src/style.css` (une ligne par valeur)

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| border-radius (`button`) | 8px | src/style.css | mindspace-old@99c91a87 2026-11-03 11:51 | SUPPRIMÉ mindspace-old@b44de130 2026-11-05 05:40 | 1 règle(s) |
| border-radius (`.ms-app .ms-editor-blocks-menu button, .ms-app .ms-quick-capture-actions button, .ms-app .ms-selection-toolbar button`) | 10px | src/style.css | mindspace-old@99c91a87 2026-11-03 11:51 | HEAD | 6 règle(s) |
| border-radius (`.ms-release-pagination a, .settings-index-group, .settings-panel, .settings-short, .settings-install-help`) | var(--ms-radius) | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 8 règle(s) |
| border-radius (`.ms-app .ms-create-button, .ms-editor-blocks-menu, [data-tiptap-editor] .tiptap pre`) | 16px | src/style.css | mindspace-old@6e5d04cf 2026-11-05 12:24 | HEAD | 3 règle(s) |
| border-radius (`.ms-surface-card`) | var(--ms-radius-card) | src/style.css | mindspace-old@f4917c57 2026-11-05 14:00 | HEAD | 1 règle(s) |
| border-radius (`.ms-surface-inset`) | max(0px, calc(var(--ms-parent-radius) - var(--ms-inset))) | src/style.css | mindspace-old@f4917c57 2026-11-05 14:00 | HEAD | 1 règle(s) |
| border-radius (`.ms-glass`) | var(--ms-radius-dock) | src/style.css | mindspace-old@f4917c57 2026-11-05 14:00 | HEAD | 1 règle(s) |
| border-radius (`.ms-control, .ms-ui-button, .ms-ui-field input`) | var(--ms-radius-control) | src/style.css | mindspace-old@f4917c57 2026-11-05 14:00 | HEAD | 4 règle(s) |
| border-radius (`.ms-modal-surface`) | var(--ms-radius-modal) | src/style.css | mindspace-old@f4917c57 2026-11-05 14:00 | HEAD | 1 règle(s) |
| border-radius (`.ms-ui-badge`) | var(--ms-radius-micro) | src/style.css | mindspace-old@cc1d4cf2 2026-11-05 14:02 | HEAD | 1 règle(s) |
| border-radius (`.ms-concentric-card`) | var(--ms-parent-radius) | src/style.css | mindspace-old@29b654ea 2026-11-05 15:42 | HEAD | 1 règle(s) |
| border-radius (`.ms-app .ms-app-top-actions button, .ms-app .ms-quick-capture-toggle, .ms-appearance-options .ms-appearance-option`) | 14px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 8 règle(s) |
| border-radius (`.ms-app .ms-app-note-link, .ms-bottom-nav button, .ms-quick-capture`) | 15px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 3 règle(s) |
| border-radius (`.ms-count`) | 30px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 1 règle(s) |
| border-radius (`.ms-editor-dock, .ms-menu-surface`) | 20px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 2 règle(s) |
| border-radius (`.ms-menu-surface a, .ms-menu-surface span`) | 9px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 1 règle(s) |
| border-radius (`.ms-tasks-panel form input`) | 13px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 1 règle(s) |
| border-radius (`.ms-app .ms-create-button, .ms-app .ms-editor-dock button, .ms-app .ms-main-links button, .ms-app .ms-settings-lin`) | 12px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 7 règle(s) |
| border-radius (`.ms-note-saved, button`) | 99px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 2 règle(s) |
| border-radius (`.ms-confirm-dialog`) | 24px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| border-radius (`.ms-app .ms-editor-blocks-trigger`) | 12px !important | src/style.css | mindspace-old@0c1cb372 2026-11-07 02:36 | HEAD | 1 règle(s) |

## Rayons de changelog.css (supprimé @7e3da2f4 2026-11-05 11:36)

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| border-radius (`.ms-changelog .ms-latest-chip, .ms-changelog .ms-version-chip`) | 8px | src/components/settings/changelog.css | mindspace-old@83de6dd4 2026-11-05 05:27 | SUPPRIMÉ mindspace-old@28bcfe04 2026-11-05 05:41 | 2 règle(s) |
| border-radius (`.ms-changelog .ms-filter-button, .ms-changelog .ms-filter-count, .ms-changelog .ms-new-badge`) | 999px | src/components/settings/changelog.css | mindspace-old@83de6dd4 2026-11-05 05:27 | SUPPRIMÉ mindspace-old@28bcfe04 2026-11-05 05:41 | 6 règle(s) |
| border-radius (`.ms-changelog .ms-release-card`) | 16px | src/components/settings/changelog.css | mindspace-old@83de6dd4 2026-11-05 05:27 | SUPPRIMÉ mindspace-old@28bcfe04 2026-11-05 05:41 | 1 règle(s) |
| border-radius (`.ms-changelog .ms-meta-dot, .ms-changelog .ms-node`) | 50% | src/components/settings/changelog.css | mindspace-old@83de6dd4 2026-11-05 05:27 | SUPPRIMÉ mindspace-old@7e3da2f4 2026-11-05 11:36 | 2 règle(s) |
| border-radius (`.ms-changelog .ms-filter-button, .ms-changelog .ms-filter-count, .ms-changelog .ms-latest-chip`) | var(--ms-radius) | src/components/settings/changelog.css | mindspace-old@28bcfe04 2026-11-05 05:41 | SUPPRIMÉ mindspace-old@7e3da2f4 2026-11-05 11:36 | 9 règle(s) |

## Rayons Tailwind dans les composants

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| `rounded-lg` | 8 px (valeur Tailwind native ; 16 px seulement entre @78997d3f et @66a0c3dc, 2026-11-05 14:00 → 15:41) | SettingsHub (`rounded-lg px-3 py-2`) | mindspace-old@d5c96cef 2026-11-03 14:26 | audit DESIGN_SYSTEM.md @d5a8114b 2026-11-05 15:44 : `rounded-lg` dans ReleasePrimitives (badges), DataManagementPanel ; `rounded-xl` dans ReleasePage, EditorToolbar, SlashMenu | décision : ne pas remapper globalement |
| `rounded-[20px]` | 20 px | NoteEditor.tsx, ReleasePrimitives `releaseSurface` | mindspace-old@1818172f 2026-11-05 11:01 | REMPLACÉ par `rounded-2xl` @64e843a0 2026-11-05 12:55 | NoteEditor supprimé @dbbcaa29 |
| `rounded-2xl` | 24 px (`--radius-2xl`) | ReleasePrimitives `releaseSurface`, ChangelogTimeline, champ titre | mindspace-old@64e843a0 | HEAD |  |
| `rounded-full` | pilule | filtres, étiquettes, puces | mindspace-old@d5c96cef | HEAD (étiquettes passent en `rounded-lg` @219fe7ed 2026-11-05 12:58) |  |

## Tailles de contrôles, cibles tactiles, géométrie (min-height / min-width / largeurs fixes)

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| min-height (`.settings-workspace, .shell`) | 100vh | src/style.css | mindspace-old@99c91a87 2026-11-03 11:51 | HEAD | 2 règle(s) |
| min-height (`textarea`) | 360px | src/style.css | mindspace-old@99c91a87 2026-11-03 11:51 | HEAD | 1 règle(s) |
| min-height (`.settings-topbar`) | 78px | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 1 règle(s) |
| min-height (`[data-tiptap-editor] .tiptap`) | 300px | src/style.css | mindspace-old@6e5d04cf 2026-11-05 12:24 | HEAD | 1 règle(s) |
| min-height (`.ms-app .ms-app-top-actions button, .ms-app .ms-editor-dock button, .ms-app .ms-note-topbar button`) | 44px | src/style.css | mindspace-old@f4917c57 2026-11-05 14:00 | HEAD | 13 règle(s) |
| min-height (`.ms-app, .ms-app .ms-app-workspace, .ms-app .ms-notes-panel`) | 100dvh | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 7 règle(s) |
| min-height (`.ms-app .ms-create-button, .ms-appearance-options .ms-appearance-option, .ms-task-row`) | 48px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 3 règle(s) |
| min-height (`.ms-notes-nav`) | 0 | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 1 règle(s) |
| min-height (`.ms-app .ms-app-note-link`) | 56px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 1 règle(s) |
| min-height (`.ms-app-topbar`) | 68px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 1 règle(s) |
| min-height (`.ms-app .ms-quick-capture-actions button, .ms-menu-surface select, button`) | 40px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 3 règle(s) |
| min-height (`.ms-bottom-nav button`) | 51px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 1 règle(s) |
| min-height (`.ms-app .ms-main-links button, .ms-app .ms-settings-lin`) | 64px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| min-height (`.ms-app .ms-create-button`) | 52px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| min-height (`.ms-app .ms-note-topbar`) | 70px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| min-height (`.ms-note-meta`) | 50px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| min-height (`.ms-note-meta form button, .ms-note-meta form input`) | 36px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 2 règle(s) |
| min-height (`.ms-app [data-tiptap-editor]`) | max(560px, 78dvh) | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| min-height (`.ms-app .ms-selection-toolbar button`) | 38px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| min-height (`.ms-app .ms-note-topbar button`) | 42px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| min-height (`.ms-quick-capture textarea`) | 92px | src/style.css | mindspace-old@f51f14b9 2026-11-07 02:04 | HEAD | 1 règle(s) |
| min-height (`.ms-app .ms-editor-blocks-menu button`) | 54px | src/style.css | mindspace-old@0c1cb372 2026-11-07 02:36 | HEAD | 1 règle(s) |
| min-width (`.ms-app .ms-app-sidebar, .ms-app .ms-app-workspace, .ms-app .ms-notes-panel .ms-app-note-link`) | 0 | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 13 règle(s) |
| min-width (`.ms-app .ms-app-top-actions button, .ms-app .ms-editor-dock button, .ms-app .ms-note-topbar button`) | 44px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 3 règle(s) |
| min-width (`[data-tiptap-editor] .tiptap table`) | 320px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 1 règle(s) |
| min-width (`[data-tiptap-editor] .tiptap th, [data-tiptap-editor] .`) | 48px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 1 règle(s) |
| min-width (`button`) | 40px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| min-width (`.ms-app .ms-note-actions-menu`) | 215px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| min-width (`.ms-app .ms-selection-toolbar button`) | 38px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| min-width (`.ms-app .ms-note-topbar button`) | 39px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| cible tactile documentée | 44 px (« buttons 44px minimum touch targets where practical ») | docs/DESIGN_SYSTEM.md | mindspace-old@1cfd405a 2026-11-05 14:09 | HEAD | aussi `min-h-11 min-w-11` (Tailwind) dans EditorToolbar @90c4f82d 2026-11-05 12:21 |
| hauteur du dock bas mobile | 51 px (boutons) ; padding 8px 14px + safe-area ; contenu décalé de 100/102 px | style.css `.ms-bottom-nav` | mindspace-old@62846504 2026-11-05 18:08 | HEAD | |
| FAB | aucun FAB : le bouton Créer est un bouton de barre (`.ms-bottom-create`, `.ms-create-button` 48/52 px) | style.css | mindspace-old@62846504 / @aeca0395 | HEAD | |
| largeur de barre latérale | 250px (`.shell`) → rail 78px / replié 56px (`.ms-app`) | style.css | mindspace-old@99c91a87 2026-11-03 11:51 ; rail @aeca0395 2026-11-05 18:37 | voir layout.md | |

## Espacements (padding / gap) : valeurs distinctes les plus structurantes

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| gap (`.sidebar`) | 18px | src/style.css | mindspace-old@99c91a87 2026-11-03 11:51 | HEAD | 1 règle(s) |
| gap (`.ms-app .ms-create-button, .ms-app .ms-notes-panel .ms-notes-nav, .ms-app--bottom .ms-mobile-notes-list`) | 8px | src/style.css | mindspace-old@99c91a87 2026-11-03 11:51 | HEAD | 11 règle(s) |
| gap (`.settings-navigation`) | 24px | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 1 règle(s) |
| gap (`.ms-app .ms-app-note-link, .ms-app--bottom .ms-bottom-nav, .ms-app:not(.ms-app--bo, .ms-editor-blocks-menu`) | 4px | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 8 règle(s) |
| gap (`.settings-index-grid`) | 20px | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 1 règle(s) |
| gap (`.ms-app-sidebar, .ms-release-pagination, .settings-index-link`) | 16px | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 3 règle(s) |
| gap (`.ms-app-topbar, .ms-appearance-options, .ms-task-row`) | 12px | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 5 règle(s) |
| gap (`.ms-notes-panel, .settings-links`) | 14px | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 2 règle(s) |
| gap (`.ms-app .ms-quick-capture-actions button, .ms-main-links, .ms-release-pagination a`) | 6px | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 3 règle(s) |
| gap (`.ms-ui-button`) | .5rem | src/style.css | mindspace-old@cc1d4cf2 2026-11-05 14:02 | HEAD | 1 règle(s) |
| gap (`.ms-ui-badge, .ms-ui-field`) | .375rem | src/style.css | mindspace-old@cc1d4cf2 2026-11-05 14:02 | HEAD | 2 règle(s) |
| gap (`.ms-main-links button, .ms-settings-link`) | 11px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 1 règle(s) |
| gap (`.ms-mobile-notes-list, .ms-note-meta, .ms-note-search`) | 7px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 4 règle(s) |
| gap (`.ms-app .ms-app-sidebar, .ms-app-heading, .ms-note-heading`) | 10px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 6 règle(s) |
| gap (`.ms-app .ms-note-topbar, .ms-app .ms-quick-capture-toggle, .ms-appearance-options .ms-appearance-option`) | 9px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 5 règle(s) |
| gap (`.ms-app .ms-editor-blocks-menu button, .ms-app .ms-notes-panel .ms-app-note-link strong, .ms-appearance-option span`) | 3px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 5 règle(s) |
| gap (`.ms-app .ms-main-links button, .ms-app .ms-settings-lin, .ms-note-topbar-group`) | 5px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 2 règle(s) |
| gap (`.ms-app .ms-create-button`) | 1px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| gap (`.ms-app .ms-note-topbar-group, .settings-nav-subnav`) | 2px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 2 règle(s) |
| padding (`.ms-menu-surface, .settings-shortcut, .sidebar`) | 16px | src/style.css | mindspace-old@99c91a87 2026-11-03 11:51 | HEAD | 4 règle(s) |
| padding (`.ms-confirm-backdrop, .settings-drawer, .workspace`) | 20px | src/style.css | mindspace-old@99c91a87 2026-11-03 11:51 | HEAD | 4 règle(s) |
| padding (`.settings-install-cta, :where(button:not(.ms-ui-button)), button`) | 10px 14px | src/style.css | mindspace-old@99c91a87 2026-11-03 11:51 | HEAD | 3 règle(s) |
| padding (`.ms-confirm-dialog, .sidebar`) | 24px | src/style.css | mindspace-old@99c91a87 2026-11-03 11:51 | HEAD | 2 règle(s) |
| padding (`.workspace`) | 40px | src/style.css | mindspace-old@99c91a87 2026-11-03 11:51 | HEAD | 1 règle(s) |
| padding (`.settings-panel, textarea`) | 18px | src/style.css | mindspace-old@99c91a87 2026-11-03 11:51 | HEAD | 2 règle(s) |
| padding (`.ms-app .ms-create-button, .ms-app .ms-editor-blocks-menu button, .ms-main-links button, .ms-settings-link`) | 10px 12px | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 7 règle(s) |
| padding (`.settings-main`) | 32px 0 64px | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 1 règle(s) |
| padding (`.settings-footer`) | 20px 0 | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 1 règle(s) |
| padding (`.settings-index-group`) | 22px | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 1 règle(s) |
| padding (`.settings-index-link`) | 12px 0 | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 1 règle(s) |
| padding (`.settings-panel`) | 26px | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 1 règle(s) |
| padding (`.settings-shortcut kbd`) | 2px 7px | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 1 règle(s) |
| padding (`.ms-task-row, .settings-install-help`) | 12px | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 2 règle(s) |
| padding (`.ms-detail-change`) | 16px 0 | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 1 règle(s) |
| padding (`.ms-release-pagination a`) | 14px | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 1 règle(s) |
| padding (`.settings-workspace`) | 0 20px | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 1 règle(s) |
| padding (`[data-tiptap-editor] .tiptap pre`) | 1rem | src/style.css | mindspace-old@6e5d04cf 2026-11-05 12:24 | HEAD | 1 règle(s) |
| padding (`.ms-ui-button`) | .65rem 1rem | src/style.css | mindspace-old@cc1d4cf2 2026-11-05 14:02 | HEAD | 1 règle(s) |
| padding (`.ms-ui-card`) | clamp(1rem, 2vw, 2rem) | src/style.css | mindspace-old@cc1d4cf2 2026-11-05 14:02 | HEAD | 1 règle(s) |
| padding (`.ms-ui-badge`) | .25rem .625rem | src/style.css | mindspace-old@cc1d4cf2 2026-11-05 14:02 | HEAD | 1 règle(s) |
| padding (`.ms-ui-field input`) | .65rem .875rem | src/style.css | mindspace-old@cc1d4cf2 2026-11-05 14:02 | HEAD | 1 règle(s) |
| padding (`.ms-concentric-card`) | var(--ms-inset) | src/style.css | mindspace-old@29b654ea 2026-11-05 15:42 | HEAD | 1 règle(s) |
| padding (`.ms-app-sidebar`) | 25px 16px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 1 règle(s) |
| padding (`.ms-app .ms-app-note-link`) | 12px 13px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 1 règle(s) |
| padding (`.ms-app-workspace`) | 24px clamp(16px, 4vw, 54px) 48px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 1 règle(s) |
| padding (`.ms-count`) | 4px 9px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 1 règle(s) |
| padding (`.ms-app .ms-app-top-actions button, .ms-editor-blocks-menu`) | 10px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 2 règle(s) |
| padding (`.ms-editor-blocks-title, .ms-menu-surface select`) | 6px 8px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 2 règle(s) |
| padding (`.ms-menu-surface a, .ms-menu-surface span`) | 9px 8px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 1 règle(s) |
| padding (`.ms-note-heading label`) | 0 | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 1 règle(s) |
| padding (`.ms-note-heading input`) | 8px 0 | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 1 règle(s) |
| padding (`.ms-appearance-options .ms-appearance-option`) | 12px 14px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 1 règle(s) |
| padding (`.ms-app-workspace`) | 16px 16px calc(100px + env(safe-area-inset-bottom, 0px)) | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 1 règle(s) |
| padding (`.ms-app--bottom .ms-bottom-nav, .ms-app:not(.ms-app--bo`) | 8px 14px calc(8px + env(safe-area-inset-bottom, 0px)) | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 1 règle(s) |
| padding (`.ms-app .ms-note-topbar button, .ms-bottom-nav button, .ms-editor-dock`) | 6px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 3 règle(s) |
| padding (`.ms-app .ms-app-sidebar`) | 15px 8px 13px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| padding (`.ms-app .ms-editor-dock button, .ms-app .ms-rail-collapse, button`) | 8px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 3 règle(s) |
| padding (`.ms-app .ms-main-links button, .ms-app .ms-settings-lin`) | 8px 4px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| padding (`.ms-app .ms-create-button`) | 10px 5px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| padding (`.ms-notes-panel`) | 23px 12px 15px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| padding (`.ms-note-search`) | 0 12px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| padding (`.ms-app .ms-app-workspace`) | 0 25px 0 | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| padding (`.ms-app .ms-note-topbar`) | 13px 0 | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| padding (`.ms-app .ms-note-topbar button`) | 9px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| padding (`.ms-note-actions-menu button`) | 8px 10px !important | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| padding (`button`) | 7px 10px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| padding (`.ms-note-meta form input`) | 5px 8px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| padding (`.ms-note-saved`) | 6px 9px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| padding (`.ms-notes-empty`) | 20vh 0 0 | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| padding (`.ms-selection-toolbar`) | 4px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| padding (`.ms-app .ms-selection-toolbar button`) | 7px | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| padding (`.ms-app .ms-notes-panel`) | 20px 15px calc(100px + env(safe-area-inset-bottom, 0px)) | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| padding (`.ms-app[data-note-open="true"] .ms-app-workspace`) | 0 15px calc(90px + env(safe-area-inset-bottom, 0px)) | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| padding (`.ms-app[data-section="tasks"] .ms-app-workspace`) | 24px 15px calc(90px + env(safe-area-inset-bottom, 0px)) | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| padding (`.ms-app .ms-quick-capture-actions button, .settings-nav-subnav .settings-nav-link`) | 8px 12px | src/style.css | mindspace-old@08cecd05 2026-11-06 22:12 | HEAD | 2 règle(s) |
| padding (`.ms-app .ms-quick-capture-toggle`) | 10px 13px | src/style.css | mindspace-old@f51f14b9 2026-11-07 02:04 | HEAD | 1 règle(s) |
| padding (`.ms-quick-capture form`) | 2px 12px 12px | src/style.css | mindspace-old@f51f14b9 2026-11-07 02:04 | HEAD | 1 règle(s) |
| padding (`.ms-quick-capture-success button`) | 4px 2px | src/style.css | mindspace-old@f51f14b9 2026-11-07 02:04 | HEAD | 1 règle(s) |

## Tailles d'icônes (lucide-react, prop `size`) et traits

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| `size={13}` | 13 | ReleasePrimitives (badges, `strokeWidth={2.25}`), ChangelogTimeline (Sparkles), App.tsx (`Pin`, `ChevronRight`) | mindspace-old@64e843a0 2026-11-05 12:55 | HEAD | 5 usages à main |
| `size={15}` | 15 | ReleasePage (ArrowLeft/ArrowRight) | mindspace-old@20902a5d 2026-11-05 12:57 | HEAD | 3 usages |
| `size={16}` | 16 | SettingsHub `Download`, ReleasePage (flèche « Retour au journal », `strokeWidth={2}`) | mindspace-old@d5c96cef 2026-11-03 14:26 | HEAD | 7 usages |
| `size={17}` | 17 | App.tsx (menu de note, Search) | mindspace-old@ab94742b 2026-11-05 18:34 | HEAD | 9 usages |
| `size={18}` | 18 | selection toolbar (Bold/Italic/Underline) | mindspace-old@a53044e3 2026-11-05 18:35 | HEAD | 4 usages |
| `size={19}` | 19 | EditorToolbar (outils), App.tsx (barre de note, liste, rail) | mindspace-old@90c4f82d 2026-11-05 12:21 | HEAD | 16 usages (plus fréquent) |
| `size={20}` | 20 | SettingsLayout `Menu`, App.tsx (Plus, MoreHorizontal), ChevronUp/Down | mindspace-old@d5c96cef | HEAD | 8 usages |
| `size={22}` | 22 | App.tsx (`Plus` du dock bas) | mindspace-old@ab94742b / @62846504 | HEAD | 2 usages |
| `strokeWidth` | 2 (2 usages) et 2.25 (badges) | ReleasePage, ReleasePrimitives | mindspace-old@64e843a0 / @20902a5d | HEAD | les autres icônes gardent le trait par défaut de lucide (non écrit dans le code) |
| `<X />` sans taille | 24 (défaut lucide) | SettingsHub puis SettingsLayout (bouton Fermer du tiroir) | mindspace-old@d5c96cef | HEAD |  |
