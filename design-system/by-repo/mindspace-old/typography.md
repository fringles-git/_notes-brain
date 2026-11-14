Source : mindspace-old, commits lus : 222 (registre part1, diffs complets) + 16 commits de design hors part1, plage : 2026-11-02 à 2026-11-07 (dernier commit touchant un fichier de style : 0c1cb37, 2026-11-07 02:36)

# Typographie

Résumé : une seule famille, la pile système. Aucun paquet de police (`package.json` : ni fontsource, ni Google Fonts ; aucun `@font-face` dans tout l'historique), aucun fichier de police dans `public/`. Seule exception temporaire : l'import `@blocknote/core/fonts/inter.css` (police Inter fournie par BlockNote) dans `NoteEditor.tsx`, présent 50 minutes le 2026-11-05. Aucune échelle de tailles en jeton : les tailles sont écrites en `rem`/`clamp()` règle par règle dans `src/style.css`, et en classes Tailwind (`text-xs` à `text-5xl`) dans les `.tsx`.

## Familles et piles

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| famille de base (`:root`) | `system-ui, sans-serif` | src/style.css | mindspace-old@99c91a87 2026-11-03 11:51 | REMPLACÉE par `var(--font-sans)` @b44de130 2026-11-05 05:40 | source : système |
| `--font-sans` | `system-ui, -apple-system, "Segoe UI", sans-serif` | src/styles/tokens.css (`@theme`) | mindspace-old@591eb91e 2026-11-05 05:39 | HEAD | appliquée à `:root` depuis @b44de130 |
| `--font-mono` | `ui-monospace, SFMono-Regular, Consolas, monospace` | src/styles/tokens.css (`@theme`) | mindspace-old@77149a05 2026-11-05 06:10 | HEAD | utilisée par `.tiptap code` / `.tiptap pre` (@6e5d04cf) et par les classes Tailwind `font-mono` (puces de version, eyebrow, compteurs de filtres) |
| mono dans changelog.css | `ui-monospace, SFMono-Regular, Consolas, monospace` | src/components/settings/changelog.css | mindspace-old@83de6dd4 2026-11-05 05:27 | REMPLACÉE par `inherit` @28bcfe04 05:41, puis `var(--font-mono, ui-monospace, SFMono-Regular, monospace)` @88d1ec33 06:09 ; fichier supprimé @7e3da2f4 11:36 | |
| repli HTML pré-React | `font:16px/1.6 system-ui` (attribut `style`) | index.html | mindspace-old@997adc1f 2026-11-05 04:02 | HEAD | |
| Inter (BlockNote) | `@blocknote/core/fonts/inter.css` | src/components/notes/NoteEditor.tsx | mindspace-old@0bdaf5ca 2026-11-05 11:33 | SUPPRIMÉE @dbbcaa29 2026-11-05 12:23 (« remove BlockNote component and stylesheet imports ») | seule police nommée de l'historique ; les paquets `@blocknote/*` quittent `package.json` @4b118601 12:20 |
| paquets de polices | aucun | package.json | - | - | `tailwind-merge` et `tw-animate-css` sont dans package.json depuis @c831ee63 2026-11-02 mais jamais importés (`@import` de style.css : `tailwindcss` et `./styles/tokens.css` seulement) |

## Graisses, tailles, interlignes, espacement des lettres (règles de `src/style.css`)

Valeurs distinctes extraites automatiquement (`tools/a4-old-1/valsum.py`) : une ligne par valeur, avec le premier commit où elle apparaît et son état à `main`.

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| font-size (`.sidebar h1`) | 24px | src/style.css | mindspace-old@99c91a87 2026-11-03 11:51 | HEAD | 1 règle(s) |
| font-size (`.workspace h2`) | 28px | src/style.css | mindspace-old@99c91a87 2026-11-03 11:51 | HEAD | 1 règle(s) |
| font-size (`.settings-sidebar-title`) | 1.25rem | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 1 règle(s) |
| font-size (`.ms-notes-date, .ms-ui-badge, .settings-eyebrow`) | .75rem | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 4 règle(s) |
| font-size (`.settings-brand`) | 1.1rem | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 1 règle(s) |
| font-size (`.ms-ui-field label, .settings-footer, .settings-install-help`) | .875rem | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 4 règle(s) |
| font-size (`.settings-content h1`) | clamp(1.8rem,4vw,2.4rem) | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 1 règle(s) |
| font-size (`.ms-count, .ms-editor-blocks-title, .ms-menu-surface label`) | .8rem | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 5 règle(s) |
| font-size (`.ms-app .ms-quick-capture-toggle, .ms-release-pagination a span, .settings-install-block p`) | .85rem | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 3 règle(s) |
| font-size (`.settings-prose h2, [data-tiptap-editor] .tiptap h3`) | 1.15rem | src/style.css | mindspace-old@b92397ac 2026-11-05 06:10 | HEAD | 2 règle(s) |
| font-size (`[data-tiptap-editor] .tiptap h1`) | clamp(1.7rem, 3vw, 2.15rem) | src/style.css | mindspace-old@6e5d04cf 2026-11-05 12:24 | HEAD | 1 règle(s) |
| font-size (`[data-tiptap-editor] .tiptap h2`) | clamp(1.35rem, 2.6vw, 1.65rem) | src/style.css | mindspace-old@6e5d04cf 2026-11-05 12:24 | HEAD | 1 règle(s) |
| font-size (`[data-tiptap-editor] .tiptap code`) | .875em | src/style.css | mindspace-old@6e5d04cf 2026-11-05 12:24 | HEAD | 1 règle(s) |
| font-size (`.ms-quick-capture textarea, [data-tiptap-editor] .tiptap`) | 16px | src/style.css | mindspace-old@6e5d04cf 2026-11-05 12:24 | HEAD | 2 règle(s) |
| font-size (`.ms-ui-field p`) | .8125rem | src/style.css | mindspace-old@cc1d4cf2 2026-11-05 14:02 | HEAD | 1 règle(s) |
| font-size (`.ms-app-sidebar h1`) | 1.3rem | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 1 règle(s) |
| font-size (`.ms-app .ms-app-note-link strong`) | .9rem | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 1 règle(s) |
| font-size (`.ms-app .ms-app-note-link span, .ms-quick-capture label`) | .79rem | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 2 règle(s) |
| font-size (`.ms-app-heading h2`) | clamp(1.5rem, 3vw, 2rem) | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 1 règle(s) |
| font-size (`.ms-note-heading input`) | clamp(1.8rem, 4vw, 2.3rem) | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 1 règle(s) |
| font-size (`.ms-bottom-nav button, .ms-list-empty, .ms-notes-local, .ms-note-meta`) | .77rem | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 5 règle(s) |
| font-size (`.ms-app-sidebar h1`) | 0 | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| font-size (`.ms-app .ms-main-links button, .ms-app .ms-settings-lin`) | .66rem | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| font-size (`.ms-app .ms-create-button`) | .62rem | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| font-size (`.ms-notes-panel-header .ms-app-heading h2`) | clamp(1.25rem, 2vw, 1.55rem) | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| font-size (`.ms-editor-blocks-label, .ms-note-actions-menu button, .ms-note-search input`) | .86rem | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 3 règle(s) |
| font-size (`.ms-notes-empty h2`) | 1.7rem | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| font-size (`.ms-confirm-dialog h2`) | 1.4rem | src/style.css | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | 1 règle(s) |
| font-size (`.ms-quick-capture-actions small`) | .72rem | src/style.css | mindspace-old@f51f14b9 2026-11-07 02:04 | HEAD | 1 règle(s) |
| font-size (`.ms-app .ms-quick-capture-actions button`) | .82rem | src/style.css | mindspace-old@f51f14b9 2026-11-07 02:04 | HEAD | 1 règle(s) |
| font-size (`.ms-editor-blocks-description`) | .73rem | src/style.css | mindspace-old@0c1cb372 2026-11-07 02:36 | HEAD | 1 règle(s) |
| font-weight (`.ms-app .ms-create-button, .ms-app .ms-quick-capture-actions button, .ms-confirm-dialog h2`) | 700 | src/style.css | mindspace-old@99c91a87 2026-11-03 11:51 | HEAD | 13 règle(s) |
| font-weight (`.ms-appearance-options legend, .ms-note-heading input, .settings-content h1`) | 750 | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 4 règle(s) |
| font-weight (`.ms-detail-version, .ms-main-links button, .ms-settings-link, .ms-note-saved`) | 600 | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 6 règle(s) |
| font-weight (`[data-tiptap-editor] .tiptap h1`) | 800 | src/style.css | mindspace-old@6e5d04cf 2026-11-05 12:24 | HEAD | 1 règle(s) |
| font-weight (`.ms-app .ms-quick-capture-toggle, .ms-bottom-nav button, .ms-editor-blocks-label`) | 650 | src/style.css | mindspace-old@cc1d4cf2 2026-11-05 14:02 | HEAD | 5 règle(s) |
| line-height (`.ms-app-heading h2, .settings-content h1, [data-tiptap-editor] .tiptap h1`) | 1.2 | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 3 règle(s) |
| line-height (`.ms-detail-change p, .settings-intro`) | 1.7 | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 2 règle(s) |
| line-height (`.settings-prose, [data-tiptap-editor] .tiptap p`) | 1.75 | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 2 règle(s) |
| line-height (`.ms-ui-button, [data-tiptap-editor] .tiptap h2`) | 1.25 | src/style.css | mindspace-old@6e5d04cf 2026-11-05 12:24 | HEAD | 2 règle(s) |
| line-height (`.ms-notes-date`) | 1.45 | src/style.css | mindspace-old@91121793 2026-11-05 18:44 | HEAD | 1 règle(s) |
| line-height (`.ms-quick-capture textarea, .settings-install-block p`) | 1.5 | src/style.css | mindspace-old@e08ed76c 2026-11-07 01:57 | HEAD | 2 règle(s) |
| line-height (`.ms-quick-capture-success`) | 1.6 | src/style.css | mindspace-old@f51f14b9 2026-11-07 02:04 | HEAD | 1 règle(s) |
| letter-spacing (`.settings-eyebrow, .settings-nav-group h2`) | .08em | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 2 règle(s) |
| letter-spacing (`.settings-content h1`) | -.025em | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 1 règle(s) |
| letter-spacing (`.settings-index-group h2`) | .06em | src/style.css | mindspace-old@b44de130 2026-11-05 05:40 | HEAD | 1 règle(s) |
| letter-spacing (`[data-tiptap-editor] .tiptap h1`) | -.03em | src/style.css | mindspace-old@6e5d04cf 2026-11-05 12:24 | HEAD | 1 règle(s) |
| letter-spacing (`.ms-app-heading h2, .ms-app-sidebar h1, .ms-note-heading input`) | -.035em | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | 3 règle(s) |

## Typographie de changelog.css (mindspace-old@83de6dd4 2026-11-05 05:27 → supprimé @7e3da2f4 11:36)

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| titre `.ms-changelog-heading` | clamp(1.9rem, 4cqw, 2.65rem), graisse 800, interligne 1.14, espacement -0.03em | src/components/settings/changelog.css | mindspace-old@83de6dd4 2026-11-05 05:27 | SUPPRIMÉ @7e3da2f4 2026-11-05 11:36 | |
| eyebrow | 0.75rem, graisse 700, espacement 0.2em, mono | src/components/settings/changelog.css | mindspace-old@83de6dd4 2026-11-05 05:27 | SUPPRIMÉ @7e3da2f4 2026-11-05 11:36 | |
| intro | interligne 1.7 | src/components/settings/changelog.css | mindspace-old@83de6dd4 2026-11-05 05:27 | SUPPRIMÉ @7e3da2f4 2026-11-05 11:36 | |
| titre de release | clamp(1.25rem, 2.5cqw, 1.55rem), graisse 750, interligne 1.3, espacement -0.018em | src/components/settings/changelog.css | mindspace-old@83de6dd4 2026-11-05 05:27 | SUPPRIMÉ @7e3da2f4 2026-11-05 11:36 | |
| liste de changements | interligne 1.65 | src/components/settings/changelog.css | mindspace-old@83de6dd4 2026-11-05 05:27 | SUPPRIMÉ @7e3da2f4 2026-11-05 11:36 | |
| étiquette de catégorie | 0.69rem, graisse 700, espacement 0.06em, majuscules | src/components/settings/changelog.css | mindspace-old@83de6dd4 2026-11-05 05:27 | SUPPRIMÉ @7e3da2f4 2026-11-05 11:36 | |
| puce de version et « latest » | 0.78rem, mono | src/components/settings/changelog.css | mindspace-old@83de6dd4 2026-11-05 05:27 | SUPPRIMÉ @7e3da2f4 2026-11-05 11:36 | |
| libellé « latest » | 0.67rem, graisse 700, espacement 0.09em | src/components/settings/changelog.css | mindspace-old@83de6dd4 2026-11-05 05:27 | SUPPRIMÉ @7e3da2f4 2026-11-05 11:36 | |
| compteur de filtre | 0.73rem | src/components/settings/changelog.css | mindspace-old@83de6dd4 2026-11-05 05:27 | SUPPRIMÉ @7e3da2f4 2026-11-05 11:36 | |
| date de rail | 0.85rem, graisse 600 | src/components/settings/changelog.css | mindspace-old@83de6dd4 2026-11-05 05:27 | SUPPRIMÉ @7e3da2f4 2026-11-05 11:36 | |
| badge Nouveau | 0.7rem, graisse 700, majuscules | src/components/settings/changelog.css | mindspace-old@83de6dd4 2026-11-05 05:27 | SUPPRIMÉ @7e3da2f4 2026-11-05 11:36 | |
| filtre | 0.88rem, graisse 600, interligne 1.4 | src/components/settings/changelog.css | mindspace-old@83de6dd4 2026-11-05 05:27 | SUPPRIMÉ @7e3da2f4 2026-11-05 11:36 | |

## Classes Tailwind de typographie dans les composants

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| titre de page Paramètres | `text-3xl font-bold` ; sous-titre `mt-2 text-gray-400` | SettingsHub.tsx | mindspace-old@d5c96cef 2026-11-03 14:26 | SUPPRIMÉ @7d72e331 2026-11-05 11:36 |  |
| titre de section Paramètres | `text-xl font-semibold` ; groupes `text-xs font-bold tracking-wider text-gray-400` | SettingsHub.tsx | mindspace-old@d5c96cef | SUPPRIMÉ @7d72e331 |  |
| titre du journal | `text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl` ; eyebrow `font-mono text-xs font-semibold uppercase tracking-[0.18em]` | ChangelogTimeline.tsx | état lu dans le diff de @1274fca0 (2026-11-05 12:56) | REMPLACÉ par `text-3xl … sm:text-4xl` @1274fca0 (eyebrow inchangé) | HEAD : `text-3xl sm:text-4xl` |
| titre de release (carte) | `text-xl … sm:text-2xl` | ChangelogTimeline.tsx | avant @1274fca0 | REMPLACÉ par `text-2xl font-bold leading-snug tracking-tight` @1274fca0 | HEAD |
| étiquette de catégorie | `text-xs font-semibold uppercase tracking-wide` (rounded-full) | ReleasePrimitives.tsx | mindspace-old@1818172f 2026-11-05 11:01 | REMPLACÉE par `text-xs font-semibold` sans majuscules, avec icône @64e843a0 2026-11-05 12:55 | HEAD |
| puce de version | `font-mono text-xs font-semibold tabular-nums` | ReleasePrimitives.tsx | mindspace-old@1818172f | REMPLACÉE par `text-xs font-medium` @64e843a0 | HEAD |
| liste de puces de release | `text-sm leading-relaxed … sm:text-base` | ReleasePrimitives.tsx | mindspace-old@1818172f | HEAD |  |
| champ titre de note (Tailwind) | `text-2xl font-bold` | App.tsx | mindspace-old@77efa570 2026-11-05 | REMPLACÉ par `.ms-note-heading input` (style.css : clamp(1.8rem,4vw,2.3rem), 750, -.035em) @62846504 | HEAD (CSS) |
| éditeur : placeholder et corps | `Écrivez ici… Tapez / pour insérer un bloc.` ; `leading-relaxed` ; mobile `font-size:16px` | Editor.tsx / style.css | mindspace-old@15835dcc 2026-11-05 12:22 (16px : @6e5d04cf) | HEAD | 16px évite le zoom iOS (non documenté, inféré de la règle mobile) |
| titres de document Tiptap | h1 clamp(1.7rem,3vw,2.15rem) 800 ; h2 clamp(1.35rem,2.6vw,1.65rem) 750 ; h3 1.15rem 700 ; p interligne 1.75 | style.css | mindspace-old@6e5d04cf 2026-11-05 12:24 (h3 : @62846504) | HEAD |  |

Polices supprimées : Inter (BlockNote, 2026-11-05 11:33 → 12:23). Aucune autre.
