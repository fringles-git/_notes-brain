Source : notes-v6, commits lus : 23, plage : 2026-10-28 à 2026-11-02

Deux lignes d'histoire. LIGNE MAIN (fusionnée) : V0 = notes-v6@57c25ea2 2026-10-28 (premier code), V1 = @1bae3e15 2026-10-28 (contraste), V2 = @34172c2a 2026-10-28 (thème Système, dock 5 colonnes), V3 = @a0935371 2026-10-29 (styles séparés en tokens.css, components.css, responsive.css), V4 = @1f5a70d2 2026-10-29 (DESIGN.md), V5 = @c80dbb09 2026-10-31 (copie accessible synchronisée : fonts.css, jetons de texte), V6 = @10ce3085 2026-10-31, V7 = @7598f175 2026-10-31 (routes), V8 = @daf38120 2026-11-01 (geometry.css), V9 = @c2701fc1 2026-11-02 (capture, état « HEAD » de main). BRANCHES NON FUSIONNÉES (empilées sur 1f5a70d2, aucune n'est dans main) : BR1 = @d11bb77c 2026-10-29 (fix/system-theme-editor), BR2 = @77ff3726 2026-10-29, BR3 = @ac3fbc72 2026-10-30 (feat/onboard-distill), BR4 = @7f351420 2026-10-30 (feat/quiet-home-filters), BR5 = @d665efcb 2026-10-31 (feat/typeset-polish). Les tableaux « ligne main » listent une ligne par couple (propriété, valeur) ; « HEAD » = V9. Les tableaux « branches » ne listent que les valeurs ajoutées ou retirées par les commits non fusionnés relativement à @1f5a70d2 ; « HEAD » y veut dire « présent à @d665efcb ». Les commits e309072e (PR #4, correctif P0) et c80dbb09 réimplémentent à leur façon une partie de ce que contenaient les branches ; l'état final de main n'est donc pas celui des branches.

DESIGN.md V4 : « Flat and tonal at rest: Canvas → Sheet → Soft Sheet, separated by Hairline borders. Shadow belongs to overlays only. » ; Float `0 24px 72px rgb(20 22 20 / 18%)` (sombre 55 %) pour éditeur, dialogues, onboarding ; Soft `0 10px 35px rgb(38 38 32 / 6%)` « being retired » ; scrims : éditeur `rgb(17 20 18 / 44%)` + flou 5px, dialogues `rgb(20 22 20 / 57%)` + flou 8px. design.json V4 : mouvements `state` 180ms ease, `sheet-in` 220ms cubic-bezier(.2,.8,.2,1), `pop-in` 250ms cubic-bezier(.2,.8,.2,1). V5 : « Motion : CSS/Svelte d'abord, 125–300ms et ease-out pour les nouveaux mouvements de produit. Respecter prefers-reduced-motion. Aucun GSAP. » design.json HEAD : shadows `floating` var(--shadow-float) ; motion `product-ui` 125–300ms ease-out. `prefers-reduced-motion: reduce` présent dès V0 (`*, *::before, *::after`). Hover sous `@media (hover: hover)` depuis V6 (et BR4 pour les cartes).

## Jetons d'élévation et de mouvement — ligne main
| jeton | valeur | première apparition | dernier état | défini dans |
|---|---|---|---|---|
| `--shadow-alpha` | 7% | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--shadow-alpha` | 20% | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root[data-theme='dark']` |
| `--shadow-alpha` | 7% | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--shadow-alpha` | 20% | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root[data-theme='dark']` |
| `--shadow-alpha` | 20% | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root[data-theme='system'] [@media (prefers-color-scheme: dark)]` |
| `--shadow-float` | 0 24px 72px rgb(20 22 20 / 18%) | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--shadow-float` | 0 24px 72px rgb(0 0 0 / 55%) | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root[data-theme='dark']` |
| `--shadow-float` | 0 24px 72px rgba(20, 22, 20, 0.18) | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | app.css `:root` |
| `--shadow-float` | 0 24px 72px rgba(0, 0, 0, 0.55) | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | app.css `:root[data-theme='dark']` |
| `--shadow-float` | 0 24px 72px rgb(20 22 20 / 18%) | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--shadow-float` | 0 24px 72px rgb(0 0 0 / 55%) | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root[data-theme='dark']` |
| `--shadow-float` | 0 24px 72px rgb(0 0 0 / 55%) | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root[data-theme='system'] [@media (prefers-color-scheme: dark)]` |
| `--shadow-rgb` | 0 0 0 | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--shadow-rgb` | 0 0 0 | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root[data-theme='dark']` |
| `--shadow-rgb` | 0 0 0 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--shadow-rgb` | 0 0 0 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root[data-theme='dark']` |
| `--shadow-rgb` | 0 0 0 | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root[data-theme='system'] [@media (prefers-color-scheme: dark)]` |
| `--shadow-small` | 0 2px 6px rgb(var(--shadow-rgb) / var(--shadow-alpha)) | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root` |
| `--shadow-soft` | 0 10px 35px rgb(38 38 32 / 6%) | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--shadow-soft` | 0 10px 35px rgb(0 0 0 / 20%) | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root[data-theme='dark']` |
| `--shadow-soft` | 0 10px 35px rgba(38, 38, 32, 0.055) | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | app.css `:root` |
| `--shadow-soft` | 0 10px 35px rgba(0, 0, 0, 0.2) | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | app.css `:root[data-theme='dark']` |
| `--shadow-soft` | 0 10px 35px rgb(38 38 32 / 6%) | notes-v6@a0935371 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | tokens.css `:root` |
| `--shadow-soft` | 0 10px 35px rgb(0 0 0 / 20%) | notes-v6@a0935371 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | tokens.css `:root[data-theme='dark']` |
| `--shadow-soft` | 0 10px 35px rgb(var(--shadow-rgb) / var(--shadow-alpha)) | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root` |
| `--shadow-soft` | 0 10px 35px rgb(var(--shadow-rgb) / var(--shadow-alpha)) | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root[data-theme='dark']` |
| `--shadow-soft` | 0 10px 35px rgb(var(--shadow-rgb) / var(--shadow-alpha)) | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root[data-theme='system'] [@media (prefers-color-scheme: dark)]` |

## Jetons d'élévation et de mouvement — branches non fusionnées (différences)
| jeton | valeur | première apparition | dernier état | défini dans |
|---|---|---|---|---|


## Ombres, flous, filtres, opacités, dégradés — ligne main
| propriété | valeur | première apparition | dernier état | notes |
|---|---|---|---|---|
| backdrop-filter | blur(10px) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.overview-meta` |
| backdrop-filter | blur(18px) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.topbar` |
| backdrop-filter | blur(20px) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.mobile-dock` |
| backdrop-filter | blur(5px) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.editor-backdrop` |
| backdrop-filter | blur(8px) | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.confirm-layer`, `.onboarding-layer` |
| background | linear-gradient(118deg, color-mix(in srgb, var(--accent-base) 12%, var(--surface)) 0%, var(--surface) 54%) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.overview-main` |
| background | linear-gradient(142deg, color-mix(in srgb, var(--accent-base) 17%, var(--surface)), var(--card-tint)) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.onboarding-art` |
| background | linear-gradient(145deg, var(--surface) 32%, color-mix(in srgb, var(--accent-base) 13%, var(--surface))) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.overview-side` |
| box-shadow | 0 0 0 12px color-mix(in srgb, var(--accent-base) 15%, transparent) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.mind-dot` |
| box-shadow | 0 0 0 3px color-mix(in srgb, #66a87d 15%, transparent) | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 1 règle(s) à l'origine; ex. `.status-dot` |
| box-shadow | 0 0 0 3px color-mix(in srgb, var(--accent-action) 12%, transparent) | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.search-box:focus-within` |
| box-shadow | 0 0 0 3px color-mix(in srgb, var(--good-dot) 15%, transparent) | notes-v6@1bae3e15 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.status-dot` |
| box-shadow | 0 12px 35px color-mix(in srgb, var(--accent-action) 24%, transparent) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.onboarding-art-center` |
| box-shadow | 0 2px 6px rgb(var(--shadow-rgb) / var(--shadow-alpha)) | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.segmented button.chosen` |
| box-shadow | 0 2px 6px rgba(0,0,0,.07) | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 1 règle(s) à l'origine; ex. `.segmented button.chosen` |
| box-shadow | 0 5px 17px color-mix(in srgb, var(--accent-action) 28%, transparent) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.mobile-dock button.dock-create`, `.mobile-dock :is(button, a).dock-create` |
| box-shadow | 0 7px 22px color-mix(in srgb, var(--accent-action) 18%, transparent) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.primary-button:hover` |
| box-shadow | inset 0 0 0 1px var(--accent-action) | notes-v6@34172c2a 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.accent-option.chosen` |
| box-shadow | inset 0 0 0 1px var(--accent-text) | notes-v6@daf38120 2026-11-01 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `:root .app-shell .workflow-tabs > button` |
| box-shadow | inset 0 0 0 1px var(--border-control) | notes-v6@daf38120 2026-11-01 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `:root .app-shell :is(.search-box, .segme` |
| box-shadow | inset 0 0 0 1px var(--border-control), var(--shadow-soft) | notes-v6@daf38120 2026-11-01 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `:root .app-shell .mobile-dock` |
| box-shadow | inset 0 0 0 2px var(--accent-text) | notes-v6@c80dbb09 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.segmented button.chosen, .accent-option` |
| box-shadow | inset 0 3px 0 var(--accent-text) | notes-v6@c80dbb09 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.mobile-dock button.active`, `.mobile-dock :is(button, a).active` |
| box-shadow | inset 3px 0 0 var(--accent-text) | notes-v6@c80dbb09 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.primary-nav button.active, .secondary-n`, `.primary-nav :is(button, a).active, .sec` |
| box-shadow | none!important | notes-v6@a0935371 2026-10-29 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.editor-backdrop,.editor-panel,.editor-c` |
| box-shadow | var(--shadow-float) | notes-v6@57c25ea2 2026-10-28 | HEAD | 5 règle(s) à l'origine, 6 à HEAD; ex. `.editor-panel`, `.confirm-card` |
| box-shadow | var(--shadow-small) | notes-v6@c80dbb09 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.segmented button.chosen` |
| box-shadow | var(--shadow-soft) | notes-v6@57c25ea2 2026-10-28 | HEAD | 5 règle(s) à l'origine, 5 à HEAD; ex. `.overview-card`, `.mind-note` |
| filter | brightness(1.08) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.danger-button:hover` |
| opacity | .35 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 2 règle(s) à l'origine; ex. `.side-decoration`, `50%` |
| opacity | .45 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 1 règle(s) à l'origine; ex. `.format-actions button:disabled` |
| opacity | .5 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 2 règle(s) à l'origine; ex. `from` |
| opacity | .7 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 2 règle(s) à l'origine; ex. `from` |
| opacity | .75 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 1 règle(s) à l'origine; ex. `.mind-illustration` |
| opacity | .76 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 1 règle(s) à l'origine; ex. `.note-body-input::placeholder` |
| opacity | 0 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 2 règle(s) à l'origine; ex. `.note-open`, `from` |
| opacity | 1 | notes-v6@57c25ea2 2026-10-28 | HEAD | 7 règle(s) à l'origine, 2 à HEAD; ex. `.note-card:hover .note-open, .note-card:`, `to` |
| opacity | var(--opacity-decorative) | notes-v6@1bae3e15 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.side-decoration`, `50%` |
| opacity | var(--opacity-disabled) | notes-v6@1bae3e15 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.format-actions button:disabled`, `.task-entry .primary-button:disabled` |
| opacity | var(--opacity-enter) | notes-v6@1bae3e15 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `from` |
| opacity | var(--opacity-hidden) | notes-v6@1bae3e15 2026-10-28 | HEAD | 2 règle(s) à l'origine, 1 à HEAD; ex. `.note-open`, `from` |
| opacity | var(--opacity-illustration) | notes-v6@1bae3e15 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.mind-illustration` |
| opacity | var(--opacity-placeholder) | notes-v6@1bae3e15 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.note-body-input::placeholder` |
| opacity | var(--opacity-pop) | notes-v6@1bae3e15 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `from` |
| opacity | var(--opacity-visible) | notes-v6@1bae3e15 2026-10-28 | HEAD | 6 règle(s) à l'origine, 6 à HEAD; ex. `.note-card:hover .note-open, .note-card:`, `to` |

## Ombres, flous, filtres, opacités, dégradés — branches non fusionnées (différences)
| propriété | valeur | première apparition | dernier état | notes |
|---|---|---|---|---|
| backdrop-filter | blur(10px) | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@ac3fbc72 2026-10-30 | 1 règle(s) à l'origine; ex. `.overview-meta` |
| background | linear-gradient(118deg, color-mix(in srgb, var(--accent-base) 12%, var(--surface)) 0%, var(--surface) 54%) | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.overview-main` |
| background | linear-gradient(142deg, color-mix(in srgb, var(--accent-base) 17%, var(--surface)), var(--card-tint)) | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@ac3fbc72 2026-10-30 | 1 règle(s) à l'origine; ex. `.onboarding-art` |
| background | linear-gradient(145deg, var(--surface) 32%, color-mix(in srgb, var(--accent-base) 13%, var(--surface))) | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.overview-side` |
| box-shadow | 0 0 0 12px color-mix(in srgb, var(--accent-base) 15%, transparent) | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.mind-dot` |
| box-shadow | 0 12px 35px color-mix(in srgb, var(--accent-action) 24%, transparent) | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@ac3fbc72 2026-10-30 | 1 règle(s) à l'origine; ex. `.onboarding-art-center` |
| box-shadow | 0 2px 6px rgb(var(--shadow-rgb) / var(--shadow-alpha)) | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@d11bb77c 2026-10-29 | 1 règle(s) à l'origine; ex. `.segmented button.chosen` |
| box-shadow | none | notes-v6@d665efcb 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.task-entry .primary-button:disabled` |
| opacity | var(--opacity-disabled) | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@d665efcb 2026-10-31 | 2 règle(s) à l'origine; ex. `.format-actions button:disabled`, `.task-entry .primary-button:disabled` |
| opacity | var(--opacity-illustration) | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.mind-illustration` |
| opacity | var(--opacity-placeholder) | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.note-body-input::placeholder` |

## z-index — ligne main
| propriété | valeur | première apparition | dernier état | notes |
|---|---|---|---|---|
| z-index | 1 | notes-v6@57c25ea2 2026-10-28 | HEAD | 4 règle(s) à l'origine, 4 à HEAD; ex. `.overview-copy`, `.overview-side h2` |
| z-index | 10 | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.topbar` |
| z-index | 100 | notes-v6@10ce3085 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.skip-link` |
| z-index | 15 | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.sidebar` |
| z-index | 2 | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `.overview-meta`, `.onboarding-skip` |
| z-index | 20 | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.mobile-dock` |
| z-index | 3 | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.confirm-layer` |
| z-index | 30 | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.editor-backdrop` |
| z-index | 50 | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.onboarding-layer` |
| z-index | 70 | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.toast` |
| z-index | 75 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | 1 règle(s) à l'origine; ex. `.offline-toast` |
| z-index | 80 | notes-v6@aeec85c1 2026-10-29 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.undo-bar` |

## z-index — branches non fusionnées (différences)
| propriété | valeur | première apparition | dernier état | notes |
|---|---|---|---|---|
| z-index | 1 | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 4 règle(s) à l'origine; ex. `.overview-copy`, `.overview-side h2` |
| z-index | 2 | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@ac3fbc72 2026-10-30 | 2 règle(s) à l'origine; ex. `.overview-meta`, `.onboarding-skip` |

## Transitions et animations — ligne main
| propriété | valeur | première apparition | dernier état | notes |
|---|---|---|---|---|
| animation | fade-in .16s ease-out | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.editor-backdrop` |
| animation | fade-in .18s ease-out | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.onboarding-layer` |
| animation | none | notes-v6@10ce3085 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.save-confirmed` |
| animation | page-in .22s ease-out both | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.page-in` |
| animation | pop-in .25s cubic-bezier(.2,.8,.2,1) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.onboarding-card` |
| animation | pulse 1.1s ease-in-out infinite | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.save-pulse` |
| animation | pulse 1s infinite | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.editor-status-dot.status-saving` |
| animation | save-confirm .22s ease-out | notes-v6@10ce3085 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.save-confirmed` |
| animation | slide-in .22s cubic-bezier(.2,.8,.2,1) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.editor-panel` |
| animation | slide-up .18s ease-out | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.toast` |
| animation | slide-up .2s ease-out | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.editor-panel` |
| animation | spin .8s linear infinite | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.loader` |
| animation-duration | .01ms !important | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `*, *::before, *::after` |
| scroll-behavior | auto !important | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `*, *::before, *::after` |
| transition | background .16s ease, border .16s ease | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.format-actions button, .outline-button` |
| transition | background .18s ease, border .18s ease, color .18s ease, transform .18s ease | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.icon-button, .bare-icon` |
| transition | background .18s ease, color .18s ease, transform .18s ease | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.primary-nav button, .secondary-nav butt`, `.primary-nav :is(button, a), .secondary-` |
| transition | background-color .16s ease-out,border-color .16s ease-out,transform .16s ease-out | notes-v6@10ce3085 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.primary-button,.outline-button,.icon-bu` |
| transition | background-color .18s ease-out | notes-v6@10ce3085 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.step-dots span` |
| transition | border .18s ease, box-shadow .18s ease | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.search-box` |
| transition | border-color .18s ease, transform .18s ease, box-shadow .18s ease | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.note-card` |
| transition | none | notes-v6@10ce3085 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.primary-button,.outline-button,.icon-bu` |
| transition | opacity .18s ease, transform .18s ease | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | 1 règle(s) à l'origine; ex. `.note-open` |
| transition | transform .18s ease, box-shadow .18s ease, background .18s ease | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.primary-button` |
| transition | width .18s ease, background .18s ease | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@10ce3085 2026-10-31 | 1 règle(s) à l'origine; ex. `.step-dots span` |
| transition-duration | .01ms !important | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `*, *::before, *::after` |

## Transitions et animations — branches non fusionnées (différences)
| propriété | valeur | première apparition | dernier état | notes |
|---|---|---|---|---|
| transition | background .16s ease-out, color .16s ease-out | notes-v6@d11bb77c 2026-10-29 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.segmented button` |
| transition | transform .18s ease-out | notes-v6@d11bb77c 2026-10-29 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.editor-details > summary svg` |
| transition | width .18s ease, background .18s ease | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@ac3fbc72 2026-10-30 | 1 règle(s) à l'origine; ex. `.step-dots span` |

## @keyframes (noms) — ligne main
| propriété | valeur | première apparition | dernier état | notes |
|---|---|---|---|---|
| fade-in |  | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `from`, `to` |
| page-in |  | notes-v6@57c25ea2 2026-10-28 | HEAD | 4 règle(s) à l'origine, 4 à HEAD; ex. `from`, `to` |
| pop-in |  | notes-v6@57c25ea2 2026-10-28 | HEAD | 4 règle(s) à l'origine, 4 à HEAD; ex. `from`, `to` |
| pulse |  | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `50%` |
| save-confirm |  | notes-v6@10ce3085 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `from`, `to` |
| slide-in |  | notes-v6@57c25ea2 2026-10-28 | HEAD | 4 règle(s) à l'origine, 4 à HEAD; ex. `from`, `to` |
| slide-up |  | notes-v6@57c25ea2 2026-10-28 | HEAD | 4 règle(s) à l'origine, 4 à HEAD; ex. `from`, `to` |
| spin |  | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `to` |

## @keyframes (noms) — branches non fusionnées (différences)
| propriété | valeur | première apparition | dernier état | notes |
|---|---|---|---|---|

