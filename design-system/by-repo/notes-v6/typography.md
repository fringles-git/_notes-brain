Source : notes-v6, commits lus : 23, plage : 2026-10-28 à 2026-11-02

Deux lignes d'histoire. LIGNE MAIN (fusionnée) : V0 = notes-v6@57c25ea2 2026-10-28 (premier code), V1 = @1bae3e15 2026-10-28 (contraste), V2 = @34172c2a 2026-10-28 (thème Système, dock 5 colonnes), V3 = @a0935371 2026-10-29 (styles séparés en tokens.css, components.css, responsive.css), V4 = @1f5a70d2 2026-10-29 (DESIGN.md), V5 = @c80dbb09 2026-10-31 (copie accessible synchronisée : fonts.css, jetons de texte), V6 = @10ce3085 2026-10-31, V7 = @7598f175 2026-10-31 (routes), V8 = @daf38120 2026-11-01 (geometry.css), V9 = @c2701fc1 2026-11-02 (capture, état « HEAD » de main). BRANCHES NON FUSIONNÉES (empilées sur 1f5a70d2, aucune n'est dans main) : BR1 = @d11bb77c 2026-10-29 (fix/system-theme-editor), BR2 = @77ff3726 2026-10-29, BR3 = @ac3fbc72 2026-10-30 (feat/onboard-distill), BR4 = @7f351420 2026-10-30 (feat/quiet-home-filters), BR5 = @d665efcb 2026-10-31 (feat/typeset-polish). Les tableaux « ligne main » listent une ligne par couple (propriété, valeur) ; « HEAD » = V9. Les tableaux « branches » ne listent que les valeurs ajoutées ou retirées par les commits non fusionnés relativement à @1f5a70d2 ; « HEAD » y veut dire « présent à @d665efcb ». Les commits e309072e (PR #4, correctif P0) et c80dbb09 réimplémentent à leur façon une partie de ce que contenaient les branches ; l'état final de main n'est donc pas celui des branches.

Familles (DESIGN.md et tokens) : interface Figtree Variable ; mode papier Literata Variable (Georgia en repli) ; valeurs techniques JetBrains Mono Variable. Source : paquets fontsource `@fontsource-variable/figtree`, `@fontsource-variable/literata`, `@fontsource-variable/jetbrains-mono` 5.3.0 (package.json de V0 à HEAD). Jusqu'à V4 les polices viennent d'imports du paquet complet ; depuis notes-v6@c80dbb09 (V5), `src/lib/styles/fonts.css` déclare des `@font-face` locaux au sous-ensemble Latin (`unicode-range` U+0000-00FF...), poids variables (Figtree 300-900, Literata 200-900, JetBrains Mono 100-800), `font-display: swap`. Échelle écrite dans DESIGN.md (V4) : Display clamp(31px, 3.2vw, 44px) 620 / 1.08 / -0.055em ; Note Title clamp(25px, 4vw, 37px) 620 ; Headline 27px 630 (24px téléphone) ; Title 21px 650 ; Body 15px 400 / 1.5 ; Writing 15px / 1.85 (Literata 16px / 1.95 en mode papier) ; Label 12px 620 ; Value Mono 12px 600. BR2 ajoute « supporting » 14px / 1.6 et « meta » 13px. BR5 : « Label (620, 12px): counts, versions, dock labels only. Sentences never go below 14px; field labels and meta use 13px. » V5 réécrit DESIGN.md : body 15px / 1.5, label 13px, technical-value 13px (Figtree pour titres, labels, dates, compteurs ; mono seulement pour versions, raccourcis, code saisi). Jetons de taille V5 : `--text-xs` 13px, `--text-sm` 14px, `--text-md` 15px.

## Jetons de typographie — ligne main
| jeton | valeur | première apparition | dernier état | défini dans |
|---|---|---|---|---|
| `--font-mono` | 'JetBrains Mono Variable', 'JetBrains Mono', monospace | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--font-mono` | 'JetBrains Mono Variable', 'JetBrains Mono', monospace | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--font-sans` | 'Figtree Variable', 'Figtree', system-ui, sans-serif | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--font-sans` | 'Figtree Variable', 'Figtree', system-ui, sans-serif | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--font-serif` | 'Literata Variable', 'Literata', Georgia, serif | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--font-serif` | 'Literata Variable', 'Literata', Georgia, serif | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |

## Jetons de typographie — branches non fusionnées (différences)
| jeton | valeur | première apparition | dernier état | défini dans |
|---|---|---|---|---|


## Valeurs dans les CSS (font-family, font-size, font-weight, letter-spacing, line-height, text-transform) — ligne main
| propriété | valeur | première apparition | dernier état | notes |
|---|---|---|---|---|
| font | 10px var(--font-mono) | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 1 règle(s) à l'origine; ex. `.nav-count` |
| font | 10px/1.5 var(--font-mono) | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 1 règle(s) à l'origine; ex. `kbd` |
| font | 11px var(--font-mono) | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 1 règle(s) à l'origine; ex. `.section-count` |
| font | 12px var(--font-mono) | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 2 règle(s) à l'origine; ex. `.nav-count`, `.section-count` |
| font | 12px/1.5 var(--font-mono) | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `kbd` |
| font | 400 15px/1.5 var(--font-sans) | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `body` |
| font | 400 var(--text-md)/1.5 var(--font-sans) | notes-v6@c80dbb09 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `body` |
| font | inherit | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `button, input, textarea, select`, `select` |
| font | var(--text-xs) var(--font-sans) | notes-v6@c80dbb09 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.nav-count`, `.section-count` |
| font | var(--text-xs)/1.5 var(--font-mono) | notes-v6@c80dbb09 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `kbd` |
| font-family | 'Figtree Variable' | notes-v6@c80dbb09 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `@font-face` |
| font-family | 'JetBrains Mono Variable' | notes-v6@c80dbb09 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `@font-face` |
| font-family | 'Literata Variable' | notes-v6@c80dbb09 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `@font-face` |
| font-family | var(--font-mono) | notes-v6@57c25ea2 2026-10-28 | HEAD | 5 règle(s) à l'origine, 2 à HEAD; ex. `.brand-copy small`, `.version-label` |
| font-family | var(--font-sans) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 5 à HEAD; ex. `:root`, `.brand-copy small` |
| font-family | var(--font-serif) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.paper-mode .note-title-input, .paper-mo` |
| font-size | 10px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 20 règle(s) à l'origine; ex. `.sidebar-label`, `.privacy-card small` |
| font-size | 11px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 18 règle(s) à l'origine; ex. `.privacy-card strong`, `.sidebar-footer` |
| font-size | 12px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 11 règle(s) à l'origine; ex. `.topbar-context`, `.avatar` |
| font-size | 13px | notes-v6@57c25ea2 2026-10-28 | HEAD | 3 règle(s) à l'origine, 4 à HEAD; ex. `.primary-button`, `.help-card h2` |
| font-size | 14px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 3 règle(s) à l'origine; ex. `.subheading`, `.note-card-title` |
| font-size | 15px | notes-v6@57c25ea2 2026-10-28 | HEAD | 3 règle(s) à l'origine, 3 à HEAD; ex. `.metric strong`, `.note-body-input` |
| font-size | 16px | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.mobile-brand strong`, `.paper-mode .note-body-input` |
| font-size | 17px | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.release-card h2`, `.confirm-card h2` |
| font-size | 18px | notes-v6@57c25ea2 2026-10-28 | HEAD | 3 règle(s) à l'origine, 4 à HEAD; ex. `.brand-copy strong, .mobile-brand strong`, `.spark-one` |
| font-size | 19px | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.spark-b`, `.section-heading h2` |
| font-size | 21px | notes-v6@57c25ea2 2026-10-28 | HEAD | 3 règle(s) à l'origine, 3 à HEAD; ex. `.section-heading h2`, `.empty-state h3` |
| font-size | 22px | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.spark-a`, `.overview-side h2` |
| font-size | 24px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.onboarding-card h2` |
| font-size | 25px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.overview-copy h2` |
| font-size | 27px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.onboarding-card h2` |
| font-size | 28px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.dashboard-heading h1` |
| font-size | 29px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.note-title-input` |
| font-size | 31px | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.dashboard-heading h1`, `.settings-page > h1` |
| font-size | 36px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.settings-page > h1` |
| font-size | 8px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 1 règle(s) à l'origine; ex. `.metric span` |
| font-size | 9px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 11 règle(s) à l'origine; ex. `.brand-copy small`, `.overview-kicker` |
| font-size | clamp(22px, 2.5vw, 29px) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.overview-copy h2` |
| font-size | clamp(25px, 4vw, 37px) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.note-title-input` |
| font-size | clamp(31px, 3.2vw, 44px) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.dashboard-heading h1, .settings-page h1` |
| font-size | var(--text-sm) | notes-v6@c80dbb09 2026-10-31 | HEAD | 4 règle(s) à l'origine, 4 à HEAD; ex. `.subheading`, `.note-card-title` |
| font-size | var(--text-xs) | notes-v6@c80dbb09 2026-10-31 | HEAD | 59 règle(s) à l'origine, 59 à HEAD; ex. `.brand-copy small`, `.sidebar-label` |
| font-weight | 100 800 | notes-v6@c80dbb09 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `@font-face` |
| font-weight | 200 900 | notes-v6@c80dbb09 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `@font-face` |
| font-weight | 300 900 | notes-v6@c80dbb09 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `@font-face` |
| font-weight | 430 | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.paper-mode .note-title-input, .paper-mo` |
| font-weight | 600 | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 4 à HEAD; ex. `.metric strong`, `.release-version` |
| font-weight | 620 | notes-v6@57c25ea2 2026-10-28 | HEAD | 6 règle(s) à l'origine, 6 à HEAD; ex. `.dashboard-heading h1, .settings-page h1`, `.overview-copy h2` |
| font-weight | 630 | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.onboarding-card h2` |
| font-weight | 650 | notes-v6@57c25ea2 2026-10-28 | HEAD | 5 règle(s) à l'origine, 6 à HEAD; ex. `.primary-nav button.active, .secondary-n`, `.privacy-card strong` |
| font-weight | 670 | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.note-card-title` |
| font-weight | 680 | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.settings-group-heading h2` |
| font-weight | 700 | notes-v6@57c25ea2 2026-10-28 | HEAD | 5 règle(s) à l'origine, 6 à HEAD; ex. `.sidebar-label`, `.avatar` |
| font-weight | 720 | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.eyebrow` |
| font-weight | 760 | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.brand-copy strong, .mobile-brand strong` |
| font-weight | 800 | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.overview-kicker` |
| letter-spacing | -.015em | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.settings-group-heading h2` |
| letter-spacing | -.025em | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.paper-mode .note-title-input, .paper-mo` |
| letter-spacing | -.02em | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.note-card-title`, `.help-card h2` |
| letter-spacing | -.03em | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.release-card h2`, `.confirm-card h2` |
| letter-spacing | -.045em | notes-v6@57c25ea2 2026-10-28 | HEAD | 3 règle(s) à l'origine, 3 à HEAD; ex. `.overview-copy h2`, `.overview-side h2` |
| letter-spacing | -.04em | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.metric strong`, `.empty-state h3` |
| letter-spacing | -.055em | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.brand-copy strong, .mobile-brand strong`, `.dashboard-heading h1, .settings-page h1` |
| letter-spacing | -.05em | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.note-title-input`, `.onboarding-card h2` |
| letter-spacing | .08em | notes-v6@c80dbb09 2026-10-31 | HEAD | 4 règle(s) à l'origine, 4 à HEAD; ex. `.brand-copy small`, `.sidebar-label` |
| letter-spacing | .12em | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.editor-date` |
| letter-spacing | .13em | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 2 règle(s) à l'origine; ex. `.brand-copy small`, `.side-tag` |
| letter-spacing | .145em | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.eyebrow` |
| letter-spacing | .15em | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.sidebar-label` |
| letter-spacing | .16em | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.overview-kicker` |
| letter-spacing | normal | notes-v6@c80dbb09 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.editor-date`, `.editor-options .editor-date` |
| line-height | 1 | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.brand-copy` |
| line-height | 1.08 | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.dashboard-heading h1, .settings-page h1` |
| line-height | 1.12 | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.overview-side h2` |
| line-height | 1.13 | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.overview-copy h2` |
| line-height | 1.15 | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.note-title-input` |
| line-height | 1.16 | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.onboarding-card h2` |
| line-height | 1.55 | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.overview-side p`, `.confirm-card p` |
| line-height | 1.6 | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.note-excerpt`, `.local-notice p` |
| line-height | 1.65 | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.subheading`, `.help-card p` |
| line-height | 1.7 | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.empty-state > p:not(.eyebrow)`, `.onboarding-copy` |
| line-height | 1.85 | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.note-body-input` |
| line-height | 1.95 | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.paper-mode .note-body-input` |
| text-transform | uppercase | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.brand-copy small`, `.eyebrow` |

## Valeurs dans les CSS (font-family, font-size, font-weight, letter-spacing, line-height, text-transform) — branches non fusionnées (différences)
| propriété | valeur | première apparition | dernier état | notes |
|---|---|---|---|---|
| font-size | 22px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 2 règle(s) à l'origine; ex. `.spark-a`, `.overview-side h2` |
| font-size | 25px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.overview-copy h2` |
| font-size | 29px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@d11bb77c 2026-10-29 | 1 règle(s) à l'origine; ex. `.note-title-input` |
| font-size | clamp(22px, 2.5vw, 29px) | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.overview-copy h2` |
| font-weight | 400 | notes-v6@ac3fbc72 2026-10-30 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.onboarding-form label span` |
| font-weight | 720 | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@d665efcb 2026-10-31 | 1 règle(s) à l'origine; ex. `.eyebrow` |
| font-weight | 800 | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.overview-kicker` |
| letter-spacing | .12em | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@d11bb77c 2026-10-29 | 1 règle(s) à l'origine; ex. `.editor-date` |
| letter-spacing | .13em | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@d665efcb 2026-10-31 | 2 règle(s) à l'origine; ex. `.brand-copy small`, `.side-tag` |
| letter-spacing | .145em | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@d665efcb 2026-10-31 | 1 règle(s) à l'origine; ex. `.eyebrow` |
| letter-spacing | .15em | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@d665efcb 2026-10-31 | 1 règle(s) à l'origine; ex. `.sidebar-label` |
| letter-spacing | .16em | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.overview-kicker` |
| line-height | 1.12 | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.overview-side h2` |
| line-height | 1.13 | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.overview-copy h2` |
| line-height | 1.7 | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@ac3fbc72 2026-10-30 | 2 règle(s) à l'origine; ex. `.empty-state > p:not(.eyebrow)`, `.onboarding-copy` |
| line-height | 1.85 | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.note-body-input` |
| text-transform | uppercase | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@d665efcb 2026-10-31 | 2 règle(s) à l'origine; ex. `.brand-copy small`, `.eyebrow` |
