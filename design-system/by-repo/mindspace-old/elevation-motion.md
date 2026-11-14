Source : mindspace-old, commits lus : 222 (registre part1, diffs complets) + 16 commits de design hors part1, plage : 2026-11-03 à 2026-11-07

# Élévation, verre, opacités, z-index, mouvement

Résumé : le design « Liquid Glass » est spécifié (DESIGN_SYSTEM.md, `.ms-glass`, jetons de verre) mais jamais utilisé par un écran : `git grep ms-glass` ne trouve que `style.css`, `tokens.css` et les tests. La directive du 2026-11-05 18:09 : « Glass must never be introduced on scroll-heavy surfaces » ; barre basse, dock d'édition, barre de sélection, rail sont opaques (`backdrop-filter: none`). Il n'y a aucun `@keyframes` ni `animation` dans tout l'historique.

## Jetons d'ombre, verre, durées (src/styles/tokens.css)

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| `--ms-shadow-card` (sombre) | 0 2px 12px rgb(0 0 0 / 12%) | tokens.css `:root` | mindspace-old@78997d3f 2026-11-05 14:00 | HEAD | commentaire @66a0c3dc : « Provisional shadow values: visual sign-off required across themes » ; DESIGN_SYSTEM.md @d5a8114b : « visual sign-off pending » |
| `--ms-shadow-card` (clair) | 0 2px 14px rgb(15 23 42 / 6%) | tokens.css (media light + `data-theme=light`) | mindspace-old@78997d3f | HEAD | non écrasé par le thème « slate » : reste bleu nuit même après @96b634f1 |
| `--ms-shadow-card` (lilas) | 0 2px 14px rgb(36 27 53 / 7%) | tokens.css `[data-theme=lilac]` | mindspace-old@55eb1028 2026-11-05 18:05 | HEAD |  |
| `--ms-shadow-floating` (sombre) | 0 18px 60px rgb(0 0 0 / 25%) | tokens.css `:root` | mindspace-old@78997d3f | HEAD | utilisé par menus, dock d'édition, boîte de confirmation, barre de sélection |
| `--ms-shadow-floating` (clair) | 0 18px 60px rgb(15 23 42 / 16%) | tokens.css | mindspace-old@78997d3f | HEAD |  |
| `--ms-shadow-floating` (lilas) | 0 18px 60px rgb(36 27 53 / 16%) | tokens.css `[data-theme=lilac]` | mindspace-old@55eb1028 | HEAD |  |
| `--ms-glass-tint` (sombre) | rgb(31 41 55 / 76%) | tokens.css `:root` | mindspace-old@78997d3f | HEAD | transparence 76 % |
| `--ms-glass-tint` (clair) | rgb(255 255 255 / 78%) | tokens.css | mindspace-old@78997d3f | HEAD |  |
| `--ms-glass-tint` (lilas) | rgb(250 248 255 / 78%) | tokens.css | mindspace-old@55eb1028 | HEAD |  |
| `--ms-glass-rim` (sombre / clair / lilas) | rgb(255 255 255 / 15%) / rgb(255 255 255 / 75%) / rgb(255 255 255 / 78%) | tokens.css | mindspace-old@78997d3f (lilas @55eb1028) | HEAD | filet lumineux |
| `--ms-glass-blur` | 20px | tokens.css `:root` | mindspace-old@78997d3f | HEAD |  |
| `--ms-duration-fast` | 150ms | tokens.css `:root` | mindspace-old@78997d3f 2026-11-05 14:00 | HEAD | survol, focus |
| `--ms-duration-base` | 220ms | tokens.css `:root` | mindspace-old@78997d3f | HEAD | transitions (jamais consommée par une règle) |
| `--ms-ease-out` | cubic-bezier(.2,.8,.2,1) | tokens.css `:root` | mindspace-old@78997d3f | HEAD |  |

## Verre (`.ms-glass`) et flou

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| `.ms-glass` | background `--ms-glass-tint`, border `--ms-glass-rim`, radius `--ms-radius-dock`, ombre `--ms-shadow-floating`, `backdrop-filter: blur(var(--ms-glass-blur)) saturate(125%)` (+ `-webkit-`) | src/style.css | mindspace-old@f4917c57 2026-11-05 14:00 | HEAD (défini, non utilisé par un écran) | DESIGN_SYSTEM.md (@25206522 14:02) : « not native iOS Liquid Glass refraction. Never apply to large text reading surfaces » |
| repli `@media (prefers-reduced-transparency: reduce), (forced-colors: active)` | `.ms-glass { background: var(--ms-surface); backdrop-filter: none; border-color: var(--ms-border) }` | src/style.css | mindspace-old@f4917c57 | HEAD | garde `tests/design-contract.test.mjs` (@1ad2b2ed) ; tests `design-system-visual.spec.ts` (@6c59f16f) ; contraste 4,5:1 sur fonds #000/#fff (@a280a721) |
| saturation | saturate(125%) | src/style.css `.ms-glass` | mindspace-old@f4917c57 | HEAD | seule valeur de saturation de l'historique |
| `backdrop-filter: blur(10px)` (barre de filtres) | blur 10px, fond rgba(17, 24, 39, 0.96) puis `var(--ms-canvas)` | changelog.css `.ms-filter-bar` | mindspace-old@83de6dd4 2026-11-05 05:27 | SUPPRIMÉ avec le fichier @7e3da2f4 2026-11-05 11:36 |  |
| `backdrop-blur-md` (Tailwind) | 12px (Tailwind v4 `blur-md`) | ChangelogTimeline.tsx barre sticky `bg-ui-canvas/95` puis `bg-background/95` | mindspace-old@b1370152 2026-11-05 11:01 | HEAD | exception au « flat » : seule surface translucide + flou encore active |
| `backdrop-filter: none` explicites | none | style.css `.ms-bottom-nav`, `.ms-editor-dock`, `.ms-selection-toolbar`, `[role=toolbar]` de l'éditeur | mindspace-old@62846504 2026-11-05 18:08 (dock/sélection @aeca0395 18:37) | HEAD | barres opaques « for predictable scroll/input performance » |

## Ombres écrites dans les règles

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| box-shadow (`.ms-surface-card`) | var(--ms-shadow-card) | src/style.css | mindspace-old@f4917c57 2026-11-05 14:00 | HEAD | 1 règle(s) |
| box-shadow (`.ms-confirm-dialog, .ms-editor-blocks-menu, .ms-editor-dock`) | var(--ms-shadow-floating) | src/style.css | mindspace-old@f4917c57 2026-11-05 14:00 | HEAD | 6 règle(s) |
| box-shadow (`.ms-app--bottom .ms-bottom-nav, .ms-app:not(.ms-app--bo`) | 0 -7px 22px rgb(0 0 0 / 5%) | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 1 règle(s) |
| box-shadow (`.settings-nav-subnav .settings-nav-link.is-active`) | inset 2px 0 0 var(--ms-accent-strong) | src/style.css | mindspace-old@08cecd05 2026-11-06 22:12 | SUPPRIMÉ mindspace-old@e08ed76c 2026-11-07 01:57 | 1 règle(s) |
| box-shadow (`.ms-changelog .ms-release-card`) | 0 1px 2px rgba(0, 0, 0, 0.08), 0 12px 26px -22px rgba(0, 0, 0, 0.7) | changelog.css | mindspace-old@83de6dd4 2026-11-05 05:27 | SUPPRIMÉ mindspace-old@7e3da2f4 2026-11-05 11:36 | 1 règle(s) |
| box-shadow (`.ms-changelog .ms-release[data-new-release='true'] .ms-`) | 0 0 0 4px rgba(99, 102, 241, 0.18) | changelog.css | mindspace-old@83de6dd4 2026-11-05 05:27 | SUPPRIMÉ mindspace-old@7e3da2f4 2026-11-05 11:36 | 1 règle(s) |
| ombres Tailwind | `shadow-sm` (cartes, filtre actif), `hover:shadow-md`, `shadow-none` (releases techniques) ; `ring-1 ring-inset ring-ui-line/40`, `ring-emerald/indigo/amber-600/20` (étiquettes), `ring-4 ring-background` (nœud de timeline) | ReleasePrimitives, ChangelogTimeline, ReleasePage | mindspace-old@1818172f 2026-11-05 11:01 (hover:shadow-md @64e843a0 12:55 ; shadow-none @98fc56bf 2026-11-10 23:53) | HEAD | |

## Opacités et filtres

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| filter (`.ms-ui-button:hover:not(:disabled)`) | brightness(.95) | src/style.css | mindspace-old@cc1d4cf2 2026-11-05 14:02 | HEAD | 1 règle(s) |
| filter (`.settings-install-cta:hover`) | brightness(.94) | src/style.css | mindspace-old@e08ed76c 2026-11-07 01:57 | HEAD | 1 règle(s) |
| opacity (`button:disabled`) | .6 | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 1 règle(s) |
| opacity (`.ms-app .ms-note-topbar button:disabled`) | .35 | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| opacity (`.ms-app .ms-quick-capture-actions button:disabled`) | .45 | src/style.css | mindspace-old@f51f14b9 2026-11-07 02:04 | HEAD | 1 règle(s) |
| `bg-black/75` | voile 75 % | DataManagementPanel (dialogue d'effacement) ; SettingsHub (tiroir) | mindspace-old@d5c96cef 2026-11-03 14:26 | HEAD (DataManagementPanel) ; tiroir remplacé par `.settings-drawer-overlay rgb(0 0 0 / .75)` @b44de130 | |
| `bg-white/20`, `bg-primary/40`, `before:border-muted/50`, `bg-muted/30` (releases techniques @98fc56bf) | opacités Tailwind | ChangelogTimeline | mindspace-old@1274fca0 2026-11-05 12:56 | HEAD | |

## Échelle de z-index

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| z-index (`.settings-drawer-overlay`) | 50 | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 1 règle(s) |
| z-index (`.ms-menu-surface`) | 55 | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 1 règle(s) |
| z-index (`.ms-app--bottom .ms-bottom-nav, .ms-app:not(.ms-app--bo`) | 45 | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 1 règle(s) |
| z-index (`.ms-editor-dock`) | 40 | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| z-index (`.ms-selection-toolbar`) | 60 | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| z-index (`.ms-confirm-backdrop`) | 100 | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| z-index (`.ms-editor-blocks-menu`) | 85 | src/style.css | mindspace-old@0c1cb372 2026-11-07 02:36 | HEAD | 1 règle(s) |
| z-index (`.ms-changelog .ms-filter-bar`) | 10 | changelog.css | mindspace-old@83de6dd4 2026-11-05 05:27 | SUPPRIMÉ mindspace-old@7e3da2f4 2026-11-05 11:36 | 1 règle(s) |
| z-index (`.ms-changelog .ms-node`) | 1 | changelog.css | mindspace-old@83de6dd4 2026-11-05 05:27 | SUPPRIMÉ mindspace-old@7e3da2f4 2026-11-05 11:36 | 1 règle(s) |
| `z-10` (Tailwind) | barre de filtres sticky | ChangelogTimeline.tsx | mindspace-old@b1370152 2026-11-05 11:01 | HEAD | |
| `z-[1]` | nœud de timeline | ChangelogTimeline.tsx | mindspace-old@1818172f | HEAD | |
| `z-40` | barre d'outils Tiptap haute (sticky) | EditorToolbar.tsx | mindspace-old@90c4f82d 2026-11-05 12:21 | SUPPRIMÉ : remplacée par `.ms-editor-dock` (z 40, CSS) @a53044e3 2026-11-05 18:35 | |
| `z-50` (Tailwind) | dialogue d'effacement, menu slash | DataManagementPanel.tsx @d5c96cef ; SlashMenu.tsx @fda98088 2026-11-05 12:21 | HEAD | |
Échelle CSS résultante (HEAD) : 40 dock d'édition < 45 barre basse < 50 voile de tiroir < 55 menus de liste < 60 barre de sélection < 85 menu de blocs < 100 confirmation de suppression. Aucun jeton `--ms-z-*` : valeurs en dur.

## Transitions, durées, courbes, `@keyframes`

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| scroll-behavior (`.ms-app *, .ms-app *::before, .ms-app *::after, [data-tiptap-editor] *, [data-tiptap-editor] *::before`) | auto !important | src/style.css | mindspace-old@6e5d04cf 2026-11-05 12:24 | HEAD | 2 règle(s) |
| transition (`.ms-control`) | background-color var(--ms-duration-fast) var(--ms-ease-out), box-shadow var(--ms-duration-fast) var(--ms-ease-out) | src/style.css | mindspace-old@f4917c57 2026-11-05 14:00 | HEAD | 1 règle(s) |
| transition (`.ms-control, .ms-editor-dock, .ms-selection-toolbar, .ms-quick-capture-chevron`) | none | src/style.css | mindspace-old@f4917c57 2026-11-05 14:00 | HEAD | 4 règle(s) |
| transition (`.ms-ui-button`) | background-color var(--ms-duration-fast) var(--ms-ease-out) | src/style.css | mindspace-old@cc1d4cf2 2026-11-05 14:02 | HEAD | 1 règle(s) |
| transition (`.ms-quick-capture-chevron`) | transform 150ms ease | src/style.css | mindspace-old@f51f14b9 2026-11-07 02:04 | HEAD | 1 règle(s) |
| transition-duration (`.ms-app *, .ms-app *::before, .ms-app *::after, [data-tiptap-editor] *, [data-tiptap-editor] *::before`) | 0ms !important | src/style.css | mindspace-old@6e5d04cf 2026-11-05 12:24 | HEAD | 2 règle(s) |
| transition (`.ms-changelog .ms-filter-button`) | background 0.15s, border-color 0.15s | changelog.css | mindspace-old@83de6dd4 2026-11-05 05:27 | SUPPRIMÉ mindspace-old@7e3da2f4 2026-11-05 11:36 | 1 règle(s) |
| transition (`.ms-changelog .ms-filter-button`) | none | changelog.css | mindspace-old@83de6dd4 2026-11-05 05:27 | SUPPRIMÉ mindspace-old@7e3da2f4 2026-11-05 11:36 | 1 règle(s) |
| `@keyframes` / `animation` | aucun | - | - | - | vérifié : `git grep keyframes|animation` à main = 0 ; aucun `animate-*` Tailwind ; `tw-animate-css` est installé mais jamais importé |
| Tailwind `transition-colors`, `transition-transform`, `transition-all duration-200` | 150 ms (défaut Tailwind) / 200 ms | ChangelogTimeline, ReleasePrimitives, ReleasePage | mindspace-old@1274fca0 2026-11-05 12:56 (`duration-200` ; `transition-all` @64e843a0) | HEAD | 8 `transition-colors`, 3 `transition-transform`, 2 `duration-200` à main |
| flèches de pagination qui glissent | `group-hover:-translate-x-1` / `group-hover:translate-x-1` | ReleasePage.tsx | mindspace-old@20902a5d 2026-11-05 12:57 | HEAD | « animated version links » |
| défilement doux | `scrollIntoView({ behavior: 'smooth' })` | SettingsHub.tsx | mindspace-old@d5c96cef 2026-11-03 14:26 | SUPPRIMÉ @7d72e331 / @8e249933 2026-11-05 | `scroll-behavior: auto !important` sous `prefers-reduced-motion` dans `.ms-app` et l'éditeur (@6e5d04cf, @62846504) |
| `prefers-reduced-motion: reduce` | `transition: none` ou `transition-duration: 0ms !important; scroll-behavior: auto !important` | changelog.css (filtres) @83de6dd4 ; style.css : `.ms-ui-button`, `.ms-control`, `.ms-app *`, `[data-tiptap-editor] *`, dock/barre de sélection, chevron de capture rapide | mindspace-old@83de6dd4 2026-11-05 05:27 (changelog) ; @6e5d04cf 12:24 ; @f4917c57 14:00 ; @aeca0395 18:37 ; @f51f14b9 2026-11-07 02:04 | HEAD (changelog.css supprimé) | 8 blocs à main |
| `prefers-reduced-transparency` et `forced-colors: active` | repli opaque du verre | style.css | mindspace-old@f4917c57 | HEAD |  |
