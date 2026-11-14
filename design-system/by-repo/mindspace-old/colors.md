Source : mindspace-old, commits lus : 222 (registre part1, diffs complets) + 16 commits de design hors part1 (diffs de `tokens.css`, `style.css`, `DESIGN_SYSTEM.md`, `index.html`), plage : 2026-11-02 à 2026-11-10 (dernier commit de design : 2026-11-07)

# Couleurs

Méthode : `tools/a4-old-1/cssdiff.py` analyse `src/styles/tokens.css` (9 commits), `src/style.css` (19), `src/components/settings/changelog.css` (4) à chaque commit (toutes branches) et sort les variables, valeurs et dates de changement. Références de commit : `mindspace-old@<sha8> <date heure du commit>`. "HEAD" = `main` (82a689c, 2026-11-10).

Vue d'ensemble : l'app a eu trois palettes successives. (1) 2026-11-03 : gris-bleu sombre Tailwind (canvas #111827). (2) 2026-11-05 matin : jetons `--ms-*` / `@theme` gris-bleu + indigo, avec un thème clair « slate ». (3) 2026-11-05 18:05 : palette « app » chaude (#faf9f6, ambre #f4c430, lilas #b99ff5) en trois thèmes (light, dark, lilac), harmonisée avec les pages Paramètres le 2026-11-06 22:10.

## 1. Période 1 : palette Tailwind sombre codée en dur (2026-11-03 → 2026-11-05)

| jeton / usage | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| fond de page `:root background` | #111827 | src/style.css | mindspace-old@99c91a87 2026-11-03 11:51 | REMPLACÉ par `--ms-canvas` @b44de130 2026-11-05 05:40 (même valeur via `--color-canvas`) | aussi `<meta name="theme-color">` dans index.html (voir ci-dessous) |
| texte `:root color` | #e5e7eb | src/style.css | mindspace-old@99c91a87 2026-11-03 11:51 | REMPLACÉ par `--ms-text` #f9fafb @b44de130 2026-11-05 05:40 | |
| panneau latéral, textarea | #1f2937 | src/style.css | mindspace-old@99c91a87 2026-11-03 11:51 | REMPLACÉ par `--ms-surface` @b44de130 | |
| bordures boutons/textarea | #4b5563 | src/style.css | mindspace-old@99c91a87 2026-11-03 11:51 | REMPLACÉ par `--ms-border` @b44de130 | |
| survol bouton | #374151 | src/style.css | mindspace-old@99c91a87 2026-11-03 11:51 | REMPLACÉ par `--ms-hover` @b44de130 | |
| texte de statut `[role=status]` | #9ca3af | src/style.css | mindspace-old@99c91a87 2026-11-03 11:51 | REMPLACÉ par `--ms-muted` @b44de130 | |
| `theme-color` (index.html) | #111827 | index.html | mindspace-old@41a60f54 2026-11-03 11:50 | HEAD (jamais modifié) | contradiction : reste #111827 alors que la palette app est #faf9f6 / #121316 depuis 2026-11-05 |
| `background_color` et `theme_color` du manifeste | #111827 | public/manifest.webmanifest | mindspace-old@d5c96cef 2026-11-03 14:26 | HEAD (jamais modifié) | idem |
| classes Tailwind du hub Paramètres | gray-400, gray-500/600/700/800, red-300 (erreur), `bg-black/75` (voile), emerald/indigo/amber 900 + 200 (étiquettes Nouveauté/Amélioration/Correctif) | src/pages/SettingsHub.tsx, ChangelogTimeline.tsx, DataManagementPanel.tsx | mindspace-old@d5c96cef 2026-11-03 14:26 | REMPLACÉ : SettingsHub supprimé @7d72e331 2026-11-05 11:36 ; étiquettes remplacées par `--tag-*` @931f56a2 | voile `bg-black/75` encore dans DataManagementPanel (HEAD) |
| repli HTML pré-React | #e5e7eb (texte), #93c5fd (liens) en `style=""` | index.html | mindspace-old@997adc1f 2026-11-05 04:02 | HEAD | seule apparition de #93c5fd |

## 2. Période 2 : changelog.css à hex puis jetons gris-bleu + indigo (2026-11-05 05:27 → 2026-11-06 22:10)

`changelog.css` (« Hostinger Changelog layout », référence `hostinger/hostinger-templates/templates/changelog`) : créé en dur le 2026-11-05 05:27, passé aux variables à 05:41, supprimé à 11:36 (340 lignes).

| usage | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| dégradé du hero | rgba(79, 70, 229, 0.11) | changelog.css | mindspace-old@83de6dd4 2026-11-05 05:27 | REMPLACÉ par `transparent` @28bcfe04 2026-11-05 05:41 | seul dégradé de l'historique |
| eyebrow, étiquette `improvement` | #a5b4fc | changelog.css | mindspace-old@83de6dd4 | REMPLACÉ par `var(--ms-improvement)` @28bcfe04 | |
| titres | #f9fafb | changelog.css | mindspace-old@83de6dd4 | REMPLACÉ par `var(--ms-text)` @28bcfe04 | |
| intro, puces secondaires | #d1d5db | changelog.css | mindspace-old@83de6dd4 | REMPLACÉ par `var(--ms-secondary)` @28bcfe04 | |
| bordure puce « latest », filtre actif, badge Nouveau | #4f46e5 (indigo-600) | changelog.css | mindspace-old@83de6dd4 | REMPLACÉ par `var(--ms-accent-strong)` @28bcfe04 | |
| fond puce « latest », bandeau Nouveau | #312e81 | changelog.css | mindspace-old@83de6dd4 | REMPLACÉ par `var(--ms-hover)` @28bcfe04 | |
| texte puce « latest » | #e0e7ff | changelog.css | mindspace-old@83de6dd4 | REMPLACÉ par `var(--ms-text)` @28bcfe04 | |
| bordure bandeau Nouveau, carte nouvelle | #6366f1 | changelog.css | mindspace-old@83de6dd4 | REMPLACÉ @28bcfe04 | |
| point méta, bord du nœud | #6b7280 | changelog.css | mindspace-old@83de6dd4 | REMPLACÉ par `var(--ms-muted)` @28bcfe04 | |
| fond barre de filtres | rgba(17, 24, 39, 0.96) | changelog.css | mindspace-old@83de6dd4 | REMPLACÉ par `var(--ms-canvas)` @28bcfe04 | avec `backdrop-filter: blur(10px)` (voir elevation-motion.md) |
| nœud « nouveau » | #c7d2fe | changelog.css | mindspace-old@83de6dd4 | REMPLACÉ par `var(--ms-accent)` @28bcfe04 | |
| halo nœud « nouveau » | rgba(99, 102, 241, 0.18) | changelog.css | mindspace-old@83de6dd4 | supprimé avec le fichier @7e3da2f4 2026-11-05 11:36 | |
| compteur de filtre actif | rgba(255, 255, 255, 0.19) | changelog.css | mindspace-old@83de6dd4 | supprimé avec le fichier @7e3da2f4 | |
| ombre de carte | rgba(0, 0, 0, 0.08) et rgba(0, 0, 0, 0.7) | changelog.css | mindspace-old@83de6dd4 | supprimé @7e3da2f4 | |
| couleurs de bordure/filtre #4b5563, #374151, #9ca3af, #1f2937, #111827, #e5e7eb, #818cf8 | idem période 1 | changelog.css | mindspace-old@83de6dd4 | REMPLACÉ @28bcfe04 | |

### Jetons `--ms-*` gris-bleu (src/styles/tokens.css)

| jeton | valeur sombre (défaut) | valeur claire (media + `[data-theme=light]`) | usage | première apparition | dernier état |
|---|---|---|---|---|---|
| `--ms-canvas` (`--color-canvas`) | #111827 | #f8fafc | fond | mindspace-old@591eb91e 2026-11-05 05:39 ; clair @77149a05 06:10 | clair REMPLACÉ par `var(--ms-bg)` @96b634f1 2026-11-06 22:10 ; sombre `:root` base reste #111827 (HEAD) mais écrasé par `[data-theme=dark]`/`light`/`lilac` |
| `--ms-surface` | #1f2937 | #ffffff | cartes | mindspace-old@591eb91e | `[data-theme=dark]` REMPLACÉ par #1e2025 @96b634f1 ; clair #ffffff HEAD |
| `--ms-hover` (`--color-surface-hover`) | #374151 | #f1f5f9 | survol | mindspace-old@591eb91e | clair REMPLACÉ par `var(--ms-surface-muted)` @96b634f1 |
| `--ms-border` (`--color-stroke`) | #4b5563 | #cbd5e1 | bordures | mindspace-old@591eb91e | clair REMPLACÉ par `var(--ms-app-border)` @96b634f1 |
| `--ms-text` | #f9fafb | #0f172a | texte | mindspace-old@591eb91e | clair REMPLACÉ par `var(--ms-fg)` @96b634f1 |
| `--ms-secondary` | #d1d5db | #334155 | texte secondaire | mindspace-old@591eb91e | clair REMPLACÉ par `var(--ms-muted-fg)` @96b634f1 |
| `--ms-muted` | #9ca3af | #64748b | texte atténué | mindspace-old@591eb91e | clair REMPLACÉ par `var(--ms-muted-fg)` @96b634f1 |
| `--ms-accent` | #818cf8 (indigo-400) | #4f46e5 | accent | mindspace-old@591eb91e | clair REMPLACÉ par #6b3dd0 @96b634f1 ; sombre `[data-theme=dark]` REMPLACÉ par #c7b4f7 @96b634f1 ; `:root` base #818cf8 reste (HEAD) |
| `--ms-accent-strong` | #4f46e5 | #4338ca | accent plein, boutons | mindspace-old@591eb91e | clair REMPLACÉ par #6b3dd0, sombre par #6942ae @96b634f1 |
| `--ms-feature` | #34d399 | #047857 | catégorie Nouveauté | mindspace-old@591eb91e | HEAD (jeton non retouché) |
| `--ms-fix` | #fbbf24 | #92400e | catégorie Correctif | mindspace-old@591eb91e | HEAD |
| `--ms-improvement` | #a5b4fc | #4338ca | catégorie Amélioration | mindspace-old@591eb91e | HEAD |
| `--font-sans`, `--radius-ui` | voir typography.md / radius-spacing.md | | | | |

### Étiquettes de version (931f56a2 2026-11-05 11:01)

| jeton | sombre | clair | usage | dernier état |
|---|---|---|---|---|
| `--tag-feature` / `-foreground` | #064e3b / #d1fae5 | #d1fae5 / #064e3b | étiquette Nouveauté | HEAD |
| `--tag-improvement` / `-foreground` | #312e81 / #e0e7ff | #e0e7ff / #312e81 | étiquette Amélioration | HEAD |
| `--tag-fix` / `-foreground` | #78350f / #fef3c7 | #fef3c7 / #78350f | étiquette Correctif | HEAD |
| `--ui-primary` / `--ui-primary-foreground` | `var(--ms-accent-strong)` / #ffffff | idem | bouton principal, liens | `--ui-primary` REMPLACÉ par #6b3dd0 (clair, lilas) et #6942ae (sombre) @96b634f1 ; `-foreground` #ffffff HEAD |
| alias shadcn `--color-background/foreground/card/muted/border/primary…` | alias de `--ms-*` | | classes Tailwind `bg-background`, `bg-card`, `text-muted-foreground` | mindspace-old@11d4bee9 2026-11-05 12:55 : HEAD |
| alias `--color-ui-canvas/surface/muted/foreground/secondary/subtle/line/primary` | alias de `--ms-*` | | classes `bg-ui-*` | mindspace-old@931f56a2 : HEAD (plus utilisés par les composants récents, qui passent aux alias shadcn) |
| `--destructive` / `--destructive-foreground` | #ef4444 / #fff | idem | bouton destructif de MindSpaceUI | mindspace-old@78997d3f 2026-11-05 14:00 : HEAD, valeur inchangée, jamais thémée |
| `--input`, `--ring`, `--popover`, `--secondary` | alias (`--ms-border`, `--ms-accent`, `--ms-surface`, `--ms-hover`) | | | mindspace-old@78997d3f : HEAD |

## 3. Période 3 : palette « app » chaude, trois thèmes (mindspace-old@55eb1028 2026-11-05 18:05)

Décrite dans DESIGN_SYSTEM.md (de556ab 2026-11-05 18:09) : « Amber buttons contain dark text; a color on its own must not communicate state ». Les jetons sont dans `src/styles/tokens.css`, exposés à Tailwind par `@theme inline` (`--color-ms-bg`, `--color-ms-amber`…).

| jeton | clair (`:root`, `data-theme=light`) | sombre (`data-theme=dark`) | lilas (`data-theme=lilac`) | usage sémantique | première apparition | dernier état |
|---|---|---|---|---|---|---|
| `--ms-bg` | #faf9f6 | #121316 | #faf8ff | fond d'app | mindspace-old@55eb1028 2026-11-05 18:05 | HEAD |
| `--ms-fg` | #1a1a1a | #f5f5f7 | #241b35 | texte | idem | HEAD |
| `--ms-surface-muted` | #f1f1ee | #24262b | #f1edfa | barre latérale, champs, boutons de barre d'outils | idem | HEAD |
| `--ms-muted-surface` | alias de `--ms-surface-muted` | | | « compatibility ; do not use in new code » | idem | HEAD (jamais utilisé) |
| `--ms-muted-fg` | #6b6b66 | #a0a0a8 | #6b6280 | texte atténué (dates, aperçus) | idem | HEAD |
| `--ms-app-border` | #deded8 | #3a3d44 | #ddd4ef | bordures de l'app | idem | HEAD |
| `--ms-accent-amber` / `-fg` | #f4c430 / #1a1a1a | #f4c430 / #1a1a1a | #f4c430 / #1a1a1a (hérite de `:root`) | ambre : actif et création (bouton Créer, lien actif de rail, note active, outil enfoncé, bouton Épingler pressé, handle de colonne de tableau) | idem | HEAD |
| `--ms-accent-lilac` / `-fg` | #b99ff5 / #241b35 | #c7b4f7 / #241b35 | #7e52e8 / #ffffff | lilas : jeton défini, **aucun usage** dans `style.css` ni dans les `.tsx` (vérifié `git grep` sur main) | idem | HEAD (inutilisé) |
| `--ms-success` / `-fg` | #2e7d32 / #ffffff | #4caf50 / #0e0f12 | #2e7d32 / #ffffff | case de tâche (`accent-color`), pastille « Enregistré » (fond rgb(46 125 50 / 12%)), succès de capture rapide | idem | HEAD |
| `--ms-danger` / `-fg` | #b3261e / #ffffff | #f2b8b5 / #6b1a16 | #b3261e / #ffffff | action « Supprimer définitivement » (`.ms-danger-action`), erreur de capture rapide | idem | HEAD |
| `--ms-focus-ring` | #7e52e8 | #b99ff5 | #7e52e8 | anneau `outline: 3px solid` + `outline-offset: 3px` | idem | HEAD |

Valeurs de réalignement des pages Paramètres sur cette palette (mindspace-old@96b634f1 2026-11-06 22:10, « Earlier settings tokens retained a separate blue/gray palette while notes used warm neutral colors ») :

| jeton | clair | sombre | lilas | première apparition | dernier état |
|---|---|---|---|---|---|
| `--ms-canvas` | `var(--ms-bg)` | `var(--ms-bg)` | `var(--ms-bg)` | mindspace-old@96b634f1 (sombre/lilas : @55eb1028 pour lilas) | HEAD |
| `--ms-surface` | #ffffff | #1e2025 | #ffffff | @96b634f1 | HEAD |
| `--ms-hover`, `--ms-border`, `--ms-text`, `--ms-secondary`, `--ms-muted` | alias de `--ms-surface-muted`, `--ms-app-border`, `--ms-fg`, `--ms-muted-fg` | idem | idem | @96b634f1 | HEAD |
| `--ms-accent` | #6b3dd0 | #c7b4f7 | #6b3dd0 (était #7e52e8 @55eb1028) | @96b634f1 | HEAD |
| `--ms-accent-strong` | #6b3dd0 | #6942ae | #6b3dd0 | @96b634f1 | HEAD |
| `--ui-primary` | #6b3dd0 | #6942ae | #6b3dd0 (était #7e52e8 @55eb1028) | @96b634f1 | HEAD |
| `color-scheme` | light | dark | light | @96b634f1 | HEAD |
| `--tag-*` (thème lilas) | valeurs claires (#d1fae5/#064e3b, #e0e7ff/#312e81, #fef3c7/#78350f) | | | @55eb1028 | HEAD |

Autres valeurs codées en dur dans `src/style.css` (hors jetons) :

| usage | valeur | sélecteur | première apparition | dernier état |
|---|---|---|---|---|
| bordure de la note active (rail) | #ca9b18 | `.ms-app .ms-app-note-link[aria-current="page"]` | mindspace-old@62846504 2026-11-05 18:08 | HEAD |
| texte secondaire sur ambre | #3c3220 | idem `span` | mindspace-old@62846504 | HEAD |
| cellule de tableau sélectionnée | rgb(244 196 48 / 20%) | `.tiptap .selectedCell::after` | mindspace-old@62846504 | HEAD |
| ombre barre basse | 0 -7px 22px rgb(0 0 0 / 5%) | `.ms-bottom-nav` | mindspace-old@62846504 | HEAD |
| voile de modale (Paramètres) | rgb(0 0 0 / .75) | `.settings-drawer-overlay` | mindspace-old@b44de130 2026-11-05 05:40 | HEAD |
| voile de confirmation | rgb(0 0 0 / 55%) | `.ms-confirm-backdrop` | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD |
| fond pastille Enregistré | rgb(46 125 50 / 12%) | `.ms-note-saved` | mindspace-old@aeca0395 | HEAD |
| texte du CTA d'installation PWA | #fff | `.settings-install-cta` | mindspace-old@e08ed76c 2026-11-07 01:57 | HEAD |

Contrastes documentés : DESIGN_SYSTEM.md (d5a8114 2026-11-05 15:44) fixe le critère « >= 4.5:1 » pour les étiquettes et le verre (fond testé noir #000 et blanc #fff) ; `tests/design-accessibility.spec.ts` (a280a721) le mesure. Aucune valeur de ratio n'est écrite dans le dépôt.

Incohérences constatées : (a) `theme-color` / manifeste restent #111827 ; (b) `--ms-lilac` jamais utilisé ; (c) `--ms-canvas` de `:root` base reste #111827 (sombre) alors que `--ms-bg` de `:root` est clair ; seul `data-theme` posé par `appearance.ts` (`readAppearance` / `applyAppearance`) rend l'ensemble cohérent.
