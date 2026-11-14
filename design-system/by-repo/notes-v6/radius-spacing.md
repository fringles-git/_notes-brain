Source : notes-v6, commits lus : 23, plage : 2026-10-28 à 2026-11-02

Deux lignes d'histoire. LIGNE MAIN (fusionnée) : V0 = notes-v6@57c25ea2 2026-10-28 (premier code), V1 = @1bae3e15 2026-10-28 (contraste), V2 = @34172c2a 2026-10-28 (thème Système, dock 5 colonnes), V3 = @a0935371 2026-10-29 (styles séparés en tokens.css, components.css, responsive.css), V4 = @1f5a70d2 2026-10-29 (DESIGN.md), V5 = @c80dbb09 2026-10-31 (copie accessible synchronisée : fonts.css, jetons de texte), V6 = @10ce3085 2026-10-31, V7 = @7598f175 2026-10-31 (routes), V8 = @daf38120 2026-11-01 (geometry.css), V9 = @c2701fc1 2026-11-02 (capture, état « HEAD » de main). BRANCHES NON FUSIONNÉES (empilées sur 1f5a70d2, aucune n'est dans main) : BR1 = @d11bb77c 2026-10-29 (fix/system-theme-editor), BR2 = @77ff3726 2026-10-29, BR3 = @ac3fbc72 2026-10-30 (feat/onboard-distill), BR4 = @7f351420 2026-10-30 (feat/quiet-home-filters), BR5 = @d665efcb 2026-10-31 (feat/typeset-polish). Les tableaux « ligne main » listent une ligne par couple (propriété, valeur) ; « HEAD » = V9. Les tableaux « branches » ne listent que les valeurs ajoutées ou retirées par les commits non fusionnés relativement à @1f5a70d2 ; « HEAD » y veut dire « présent à @d665efcb ». Les commits e309072e (PR #4, correctif P0) et c80dbb09 réimplémentent à leur façon une partie de ce que contenaient les branches ; l'état final de main n'est donc pas celui des branches.

Rayons : 8px (`--radius-sm` : pastilles, compteurs), 12px (`--radius-md` : boutons, champs, cartes, navigation), 20px (`--radius-lg` : superpositions, héros, groupes) depuis V0 jusqu'à HEAD (DESIGN.md : « Angles de 8, 12 et 20px suivant l'échelle existante »). Pas de règle « hauteur ÷ N » : valeurs fixes. Géométrie V8 (notes-v6@daf38120 2026-11-01) : contrôles 52 / 44 intérieur / 4 de marge / 12 extérieur / 8 intérieur ; navigation 60 / 44 / 8 / 20 / 12 (jetons `--control-*`, `--nav-*`, fichier `geometry.css` de 116 lignes ; « Group outlines are inset shadows so borders do not add two pixels »). Cibles tactiles : 44px (`button { min-height: 44px }` dès V1, `input, select { min-height: 44px }` dès notes-v6@ddf2710f 2026-10-29). Échelle d'espacement `--space-1..6, 8` = 4, 8, 12, 16, 20, 24, 32 px depuis V5. Largeurs : sidebar 250px (220px sous 1100px), rail 72px entre 761 et 1100px (V5), gouttières téléphone 17px (13px sous 390px), panneau d'édition max 680px (DESIGN.md V4).

## Jetons de forme et de taille — ligne main
| jeton | valeur | première apparition | dernier état | défini dans |
|---|---|---|---|---|
| `--control-height` | 52px | notes-v6@daf38120 2026-11-01 | HEAD | tokens.css `:root` |
| `--control-inner-height` | 44px | notes-v6@daf38120 2026-11-01 | HEAD | tokens.css `:root` |
| `--control-inner-radius` | 8px | notes-v6@daf38120 2026-11-01 | HEAD | tokens.css `:root` |
| `--control-padding` | 4px | notes-v6@daf38120 2026-11-01 | HEAD | tokens.css `:root` |
| `--control-radius` | 12px | notes-v6@daf38120 2026-11-01 | HEAD | tokens.css `:root` |
| `--nav-height` | 60px | notes-v6@daf38120 2026-11-01 | HEAD | tokens.css `:root` |
| `--nav-inner-height` | 44px | notes-v6@daf38120 2026-11-01 | HEAD | tokens.css `:root` |
| `--nav-inner-radius` | 12px | notes-v6@daf38120 2026-11-01 | HEAD | tokens.css `:root` |
| `--nav-padding` | 8px | notes-v6@daf38120 2026-11-01 | HEAD | tokens.css `:root` |
| `--nav-radius` | 20px | notes-v6@daf38120 2026-11-01 | HEAD | tokens.css `:root` |
| `--radius-lg` | 20px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--radius-lg` | 20px | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--radius-md` | 12px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--radius-md` | 12px | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--radius-sm` | 8px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--radius-sm` | 8px | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--space-1` | 4px | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root` |
| `--space-2` | 8px | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root` |
| `--space-3` | 12px | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root` |
| `--space-4` | 16px | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root` |
| `--space-5` | 20px | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root` |
| `--space-6` | 24px | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root` |
| `--space-8` | 32px | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root` |

## Jetons de forme et de taille — branches non fusionnées (différences)
| jeton | valeur | première apparition | dernier état | défini dans |
|---|---|---|---|---|


## Rayons — ligne main
| propriété | valeur | première apparition | dernier état | notes |
|---|---|---|---|---|
| border-radius | 0 | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.editor-panel` |
| border-radius | 10px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 7 règle(s) à l'origine; ex. `.privacy-icon`, `.mobile-brand .brand-mark` |
| border-radius | 11px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 3 règle(s) à l'origine; ex. `.settings-group-icon`, `.segmented` |
| border-radius | 12px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 7 règle(s) à l'origine; ex. `.primary-nav button, .secondary-nav butt`, `.icon-button, .bare-icon` |
| border-radius | 13px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 6 règle(s) à l'origine; ex. `.brand-mark`, `.version-card` |
| border-radius | 14px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 3 règle(s) à l'origine; ex. `.privacy-card`, `.overview-meta` |
| border-radius | 15px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 1 règle(s) à l'origine; ex. `.empty-icon` |
| border-radius | 16px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 4 règle(s) à l'origine; ex. `.note-card`, `.loading-card` |
| border-radius | 18px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 3 règle(s) à l'origine; ex. `.settings-group`, `.release-card` |
| border-radius | 19px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 3 règle(s) à l'origine; ex. `.confirm-card`, `.onboarding-art` |
| border-radius | 22px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 1 règle(s) à l'origine; ex. `.onboarding-card` |
| border-radius | 24px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 1 règle(s) à l'origine; ex. `.editor-panel` |
| border-radius | 25px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 1 règle(s) à l'origine; ex. `.onboarding-card` |
| border-radius | 2px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 2 règle(s) à l'origine; ex. `.mind-note i`, `.editor-divider` |
| border-radius | 3px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 1 règle(s) à l'origine; ex. `.side-decoration span` |
| border-radius | 48% 52% 56% 44% | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 1 règle(s) à l'origine; ex. `.mind-ring` |
| border-radius | 50% | notes-v6@57c25ea2 2026-10-28 | HEAD | 10 règle(s) à l'origine, 10 à HEAD; ex. `.status-dot`, `.avatar` |
| border-radius | 5px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 2 règle(s) à l'origine; ex. `.accent-option span`, `.step-dots span.current` |
| border-radius | 6px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 1 règle(s) à l'origine; ex. `kbd` |
| border-radius | 7px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 2 règle(s) à l'origine; ex. `.clear-search`, `.release-version` |
| border-radius | 8px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 4 règle(s) à l'origine; ex. `.nav-count`, `.note-open` |
| border-radius | 9px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 1 règle(s) à l'origine; ex. `.mind-note` |
| border-radius | var(--control-inner-radius) | notes-v6@daf38120 2026-11-01 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `:root .app-shell :is(.segmented, .workfl` |
| border-radius | var(--control-radius) | notes-v6@daf38120 2026-11-01 | HEAD | 4 règle(s) à l'origine, 4 à HEAD; ex. `:root .app-shell :is(.primary-button, .o`, `:root .app-shell :is(.icon-button, .bare` |
| border-radius | var(--nav-inner-radius) | notes-v6@daf38120 2026-11-01 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `:root .app-shell :is(.primary-nav, .seco`, `:root .app-shell .mobile-dock > :is(butt` |
| border-radius | var(--nav-radius) | notes-v6@daf38120 2026-11-01 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `:root .app-shell :is(.primary-nav, .seco`, `:root .app-shell .mobile-dock` |
| border-radius | var(--radius-lg) | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 13 à HEAD; ex. `.overview-card`, `.empty-state` |
| border-radius | var(--radius-md) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 35 à HEAD; ex. `.primary-button`, `.brand-mark` |
| border-radius | var(--radius-sm) | notes-v6@1bae3e15 2026-10-28 | HEAD | 14 règle(s) à l'origine, 17 à HEAD; ex. `.nav-count`, `kbd` |

## Rayons — branches non fusionnées (différences)
| propriété | valeur | première apparition | dernier état | notes |
|---|---|---|---|---|
| border-radius | var(--radius-lg) var(--radius-lg) 0 0 | notes-v6@d11bb77c 2026-10-29 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.editor-details[open] > summary` |

## Bordures et contours — ligne main
| propriété | valeur | première apparition | dernier état | notes |
|---|---|---|---|---|
| border | 0 | notes-v6@57c25ea2 2026-10-28 | HEAD | 13 règle(s) à l'origine, 20 à HEAD; ex. `.primary-nav button, .secondary-nav butt`, `.text-action` |
| border | 0 !important | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.visually-hidden` |
| border | 0!important | notes-v6@a0935371 2026-10-29 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.markdown-preview` |
| border | 1px dashed var(--line-strong) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.empty-state` |
| border | 1px solid color-mix(in srgb, var(--accent-action) 20%, var(--line)) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.update-banner` |
| border | 1px solid color-mix(in srgb, var(--accent-action) 22%, transparent) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.mind-ring` |
| border | 1px solid color-mix(in srgb, var(--accent-action) 22%, var(--line)) | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.avatar`, `.empty-icon` |
| border | 1px solid color-mix(in srgb, var(--accent-action) 24%, var(--line)) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.onboarding-art-center` |
| border | 1px solid color-mix(in srgb, var(--accent-action) 27%, transparent) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.onboarding-orbit` |
| border | 1px solid color-mix(in srgb, var(--accent-base) 33%, var(--line)) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.onboarding-art` |
| border | 1px solid color-mix(in srgb, var(--accent-base) 44%, transparent) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.overview-orbit` |
| border | 1px solid color-mix(in srgb, var(--danger) 30%, var(--line)) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.storage-alert` |
| border | 1px solid color-mix(in srgb, var(--good) 22%, var(--line)) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.local-notice` |
| border | 1px solid color-mix(in srgb, var(--line) 75%, transparent) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.overview-meta` |
| border | 1px solid color-mix(in srgb, var(--line) 80%, transparent) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.mind-note` |
| border | 1px solid transparent | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.icon-button, .bare-icon` |
| border | 1px solid var(--accent-action) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.primary-button` |
| border | 1px solid var(--border-control) | notes-v6@c80dbb09 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.sidebar-toggle` |
| border | 1px solid var(--danger) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.danger-button` |
| border | 1px solid var(--line) | notes-v6@57c25ea2 2026-10-28 | HEAD | 18 règle(s) à l'origine, 22 à HEAD; ex. `kbd`, `.privacy-card` |
| border | 1px solid var(--line-strong) | notes-v6@1bae3e15 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.task-check, .task-remove` |
| border | 2px solid transparent | notes-v6@c80dbb09 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.radio-chip` |
| border | 2px solid var(--line-strong) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.loader` |
| border | 4px solid var(--surface) | notes-v6@34172c2a 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.mobile-dock button.dock-create`, `.mobile-dock :is(button, a).dock-create` |
| border | 5px solid var(--surface) | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@34172c2a 2026-10-28 | 1 règle(s) à l'origine; ex. `.mobile-dock button.dock-create` |
| border | 8px solid color-mix(in srgb, var(--accent-base) 65%, var(--surface)) | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.mind-dot` |
| outline | 0 | notes-v6@57c25ea2 2026-10-28 | HEAD | 3 règle(s) à l'origine, 3 à HEAD; ex. `.search-box input`, `.note-title-input` |
| outline | 2px solid var(--accent-text) | notes-v6@a0935371 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `:focus-visible` |
| outline | 3px solid color-mix(in srgb, var(--accent-action) 55%, transparent) | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `button:focus-visible, a:focus-visible, i` |
| outline | 3px solid var(--focus-ring) | notes-v6@c80dbb09 2026-10-31 | HEAD | 3 règle(s) à l'origine, 4 à HEAD; ex. `button:focus-visible, a:focus-visible, i`, `.search-box:focus-within` |
| outline-offset | -3px | notes-v6@daf38120 2026-11-01 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `:root .app-shell :is(.segmented, .workfl` |
| outline-offset | 3px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 4 à HEAD; ex. `button:focus-visible, a:focus-visible, i`, `.search-box:focus-within` |

## Bordures et contours — branches non fusionnées (différences)
| propriété | valeur | première apparition | dernier état | notes |
|---|---|---|---|---|
| border | 1px solid color-mix(in srgb, var(--accent-action) 22%, transparent) | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.mind-ring` |
| border | 1px solid color-mix(in srgb, var(--accent-action) 24%, var(--line)) | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@ac3fbc72 2026-10-30 | 1 règle(s) à l'origine; ex. `.onboarding-art-center` |
| border | 1px solid color-mix(in srgb, var(--accent-action) 27%, transparent) | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@ac3fbc72 2026-10-30 | 1 règle(s) à l'origine; ex. `.onboarding-orbit` |
| border | 1px solid color-mix(in srgb, var(--accent-base) 33%, var(--line)) | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@ac3fbc72 2026-10-30 | 1 règle(s) à l'origine; ex. `.onboarding-art` |
| border | 1px solid color-mix(in srgb, var(--accent-base) 44%, transparent) | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.overview-orbit` |
| border | 1px solid color-mix(in srgb, var(--line) 75%, transparent) | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@ac3fbc72 2026-10-30 | 1 règle(s) à l'origine; ex. `.overview-meta` |
| border | 1px solid color-mix(in srgb, var(--line) 80%, transparent) | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.mind-note` |
| border | 8px solid color-mix(in srgb, var(--accent-base) 65%, var(--surface)) | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.mind-dot` |
| outline | none | notes-v6@d11bb77c 2026-10-29 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.note-title-input:focus-visible,.note-bo` |

## Largeurs, hauteurs, paddings, gaps, marges (valeurs en px, rem, em) — ligne main
| propriété | valeur | première apparition | dernier état | notes |
|---|---|---|---|---|
| gap | 10px | notes-v6@57c25ea2 2026-10-28 | HEAD | 6 règle(s) à l'origine, 7 à HEAD; ex. `.privacy-card`, `.loading-card` |
| gap | 11px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 2 règle(s) à l'origine; ex. `.brand`, `.settings-layout` |
| gap | 12px | notes-v6@57c25ea2 2026-10-28 | HEAD | 7 règle(s) à l'origine, 1 à HEAD; ex. `.primary-nav button, .secondary-nav butt`, `.update-banner` |
| gap | 13px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.section-heading` |
| gap | 14px | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.topbar-actions`, `.release-list` |
| gap | 15px | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.dashboard-footer`, `.settings-layout` |
| gap | 16px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 3 règle(s) à l'origine; ex. `.overview-grid`, `.overview-meta` |
| gap | 18px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `.setting-row`, `.release-categories` |
| gap | 1px | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.metric`, `.update-banner div` |
| gap | 20px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.dashboard-heading`, `.editor-options-content` |
| gap | 2px | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 3 à HEAD; ex. `.privacy-card div`, `.version-card div` |
| gap | 3px | notes-v6@57c25ea2 2026-10-28 | HEAD | 5 règle(s) à l'origine, 3 à HEAD; ex. `.saved-label`, `.setting-row > div:first-child` |
| gap | 4px | notes-v6@57c25ea2 2026-10-28 | HEAD | 3 règle(s) à l'origine, 1 à HEAD; ex. `.mind-note`, `.version-check` |
| gap | 5px | notes-v6@57c25ea2 2026-10-28 | HEAD | 6 règle(s) à l'origine, 6 à HEAD; ex. `.primary-nav, .secondary-nav`, `.side-decoration` |
| gap | 6px | notes-v6@57c25ea2 2026-10-28 | HEAD | 4 règle(s) à l'origine, 4 à HEAD; ex. `.text-action`, `.empty-footnote` |
| gap | 7px | notes-v6@57c25ea2 2026-10-28 | HEAD | 5 règle(s) à l'origine, 5 à HEAD; ex. `.overview-kicker`, `.footer-saved` |
| gap | 8px | notes-v6@57c25ea2 2026-10-28 | HEAD | 11 règle(s) à l'origine, 4 à HEAD; ex. `.sidebar-footer`, `.mobile-brand` |
| gap | 8px 12px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.dashboard-footer` |
| gap | 9px | notes-v6@57c25ea2 2026-10-28 | HEAD | 11 règle(s) à l'origine, 11 à HEAD; ex. `.topbar-context`, `.eyebrow` |
| height | 110px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.ring-b` |
| height | 123px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.orbit-b` |
| height | 13px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `.accent-option span`, `.accent-swatch` |
| height | 145px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.onboarding-art` |
| height | 150px | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.mind-ring`, `.onboarding-orbit` |
| height | 16px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.loader` |
| height | 172px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.onboarding-art` |
| height | 175px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.orbit-a` |
| height | 18px | notes-v6@c80dbb09 2026-10-31 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `.radio-chip input[type=radio]`, `.save-feedback` |
| height | 1px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.eyebrow-line` |
| height | 21px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.clear-search` |
| height | 22px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.nav-count` |
| height | 23px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | 1 règle(s) à l'origine; ex. `.note-open` |
| height | 245px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.orbit-two` |
| height | 24px | notes-v6@34172c2a 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.mobile-dock button.dock-create > svg`, `.mobile-dock :is(button, a).dock-create ` |
| height | 27px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.meta-divider` |
| height | 2px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.editor-divider` |
| height | 30px | notes-v6@57c25ea2 2026-10-28 | HEAD | 3 règle(s) à l'origine, 2 à HEAD; ex. `.privacy-icon`, `.mobile-brand .brand-mark` |
| height | 31px | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 1 à HEAD; ex. `.version-card .brand-mark`, `.avatar` |
| height | 32px | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.update-glyph`, `.settings-group-icon` |
| height | 330px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.orbit-one` |
| height | 33px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.help-card-icon` |
| height | 34px | notes-v6@57c25ea2 2026-10-28 | HEAD | 3 règle(s) à l'origine, 1 à HEAD; ex. `.avatar`, `.side-icon` |
| height | 38px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 2 règle(s) à l'origine; ex. `.brand-mark`, `.icon-button, .bare-icon` |
| height | 39px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.confirm-icon` |
| height | 3px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.mind-note i` |
| height | 40px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 1 règle(s) à l'origine; ex. `.sort-button` |
| height | 43px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.empty-icon` |
| height | 44px | notes-v6@1bae3e15 2026-10-28 | HEAD | 8 règle(s) à l'origine, 8 à HEAD; ex. `.brand-mark`, `.icon-button, .bare-icon` |
| height | 46px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.side-decoration` |
| height | 47px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.mind-dot` |
| height | 52px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.mobile-dock button.dock-create`, `.mobile-dock :is(button, a).dock-create` |
| height | 58px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.onboarding-art-center` |
| height | 60px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.topbar` |
| height | 6px | notes-v6@57c25ea2 2026-10-28 | HEAD | 3 règle(s) à l'origine, 3 à HEAD; ex. `.release-bullet`, `.editor-status-dot` |
| height | 72px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.topbar` |
| height | 7px | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 1 à HEAD; ex. `.status-dot`, `.note-marker` |
| margin | 1px 2px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.help-card kbd` |
| max-width | 230px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.overview-side p` |
| max-width | 350px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.dashboard-heading .subheading` |
| max-width | 385px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.empty-state > p:not(.eyebrow)` |
| max-width | 560px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.subheading` |
| max-width | 570px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.empty-state` |
| max-width | 780px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 3 à HEAD; ex. `.release-list`, `.task-entry` |
| max-width | 790px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.settings-layout` |
| max-width | 82px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.metric span` |
| max-width | 850px | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.help-grid`, `.help-bottom` |
| min-height | 144px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.note-card` |
| min-height | 165px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.help-card` |
| min-height | 180px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.note-card` |
| min-height | 190px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.loading-card` |
| min-height | 213px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.overview-main` |
| min-height | 224px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.overview-main` |
| min-height | 250px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.note-body-input` |
| min-height | 265px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.overview-card` |
| min-height | 30px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 2 règle(s) à l'origine; ex. `.segmented button`, `.note-excerpt` |
| min-height | 32px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.sidebar-spacer` |
| min-height | 34px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 1 règle(s) à l'origine; ex. `.format-actions button` |
| min-height | 35px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 2 règle(s) à l'origine; ex. `.accent-option`, `.format-actions button, .outline-button` |
| min-height | 38px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 1 règle(s) à l'origine; ex. `.confirm-actions > button` |
| min-height | 39px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.note-excerpt` |
| min-height | 40px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 1 règle(s) à l'origine; ex. `.search-box` |
| min-height | 42px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 2 règle(s) à l'origine; ex. `.empty-state .primary-button`, `.search-box` |
| min-height | 44px | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 20 à HEAD; ex. `.primary-nav button, .secondary-nav butt`, `.primary-button` |
| min-height | 48px | notes-v6@c80dbb09 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.editor-options > summary` |
| min-height | 49px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@34172c2a 2026-10-28 | 1 règle(s) à l'origine; ex. `.mobile-dock button` |
| min-height | 52px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `.mobile-dock button.dock-create`, `.mobile-dock :is(button, a)` |
| min-height | 58px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.editor-header` |
| min-height | 59px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.onboarding-copy` |
| min-height | 60px | notes-v6@1bae3e15 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.task-list li` |
| min-height | 62px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.setting-link` |
| min-height | 65px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.editor-header` |
| min-height | 68px | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.setting-row`, `.onboarding-copy` |
| min-width | 140px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.update-banner div` |
| min-width | 153px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.mind-illustration` |
| min-width | 180px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.mind-illustration` |
| min-width | 22px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `kbd` |
| min-width | 23px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.nav-count` |
| min-width | 320px | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `html`, `body` |
| min-width | 44px | notes-v6@1bae3e15 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.task-check, .task-remove` |
| min-width | 52px | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 1 à HEAD; ex. `.mobile-dock button`, `.mobile-dock button.dock-create` |
| padding | 10px 11px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.update-banner` |
| padding | 10px 14px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | 1 règle(s) à l'origine; ex. `.offline-toast` |
| padding | 10px 2px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.setting-link` |
| padding | 11px 12px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 2 règle(s) à l'origine; ex. `.storage-alert`, `.version-card` |
| padding | 11px 14px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.overview-meta` |
| padding | 12px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.local-notice` |
| padding | 12px 10px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.privacy-card` |
| padding | 12px 15px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.toast` |
| padding | 12px 16px | notes-v6@aeec85c1 2026-10-29 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.undo-bar`, `.skip-link` |
| padding | 12px 1px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.setting-row` |
| padding | 13px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.help-bottom` |
| padding | 13px 14px 10px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.note-card` |
| padding | 13px 17px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.update-banner` |
| padding | 14px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.editor-backdrop` |
| padding | 15px | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.help-card`, `.onboarding-layer` |
| padding | 15px 14px 5px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.settings-group` |
| padding | 15px 16px 13px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.note-card` |
| padding | 17px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 2 règle(s) à l'origine; ex. `.help-card`, `.release-card` |
| padding | 19px 20px 16px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.overview-main` |
| padding | 19px 21px 7px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.settings-group` |
| padding | 20px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.confirm-layer` |
| padding | 20px 16px | notes-v6@c80dbb09 2026-10-31 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.editor-content` |
| padding | 20px 20px 16px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.onboarding-card` |
| padding | 21px 23px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.release-card` |
| padding | 22px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.onboarding-layer` |
| padding | 22px 22px 17px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.overview-side` |
| padding | 23px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.confirm-card` |
| padding | 25px 28px 20px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.overview-main` |
| padding | 26px 32px 20px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.onboarding-card` |
| padding | 2px 5px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `kbd` |
| padding | 30px 19px 20px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.sidebar` |
| padding | 32px 17px 16px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.dashboard, .settings-page` |
| padding | 32px 18px 28px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.empty-state` |
| padding | 37px 20px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.search-empty` |
| padding | 3px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.segmented` |
| padding | 3px 7px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@34172c2a 2026-10-28 | 1 règle(s) à l'origine; ex. `.mobile-dock button` |
| padding | 43px 24px 38px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.empty-state` |
| padding | 4px 2px | notes-v6@34172c2a 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.mobile-dock button` |
| padding | 4px 7px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.release-version` |
| padding | 6px 8px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.onboarding-skip` |
| padding | 8px | notes-v6@a0935371 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `select` |
| padding | 8px 12px | notes-v6@1bae3e15 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.task-list li`, `.radio-chip` |
| padding | 9px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.mind-note` |
| padding | 9px 11px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.overview-meta` |
| width | 110px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.ring-b` |
| width | 123px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.orbit-b` |
| width | 13px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `.accent-option span`, `.accent-swatch` |
| width | 150px | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.mind-ring`, `.onboarding-orbit` |
| width | 16px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.loader` |
| width | 175px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.orbit-a` |
| width | 18px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 3 à HEAD; ex. `.eyebrow-line`, `.radio-chip input[type=radio]` |
| width | 1px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.meta-divider` |
| width | 20px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.step-dots span.current` |
| width | 21px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.clear-search` |
| width | 220px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | 1 règle(s) à l'origine; ex. `.sidebar` |
| width | 23px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | 1 règle(s) à l'origine; ex. `.note-open` |
| width | 245px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.orbit-two` |
| width | 24px | notes-v6@34172c2a 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.mobile-dock button.dock-create > svg`, `.mobile-dock :is(button, a).dock-create ` |
| width | 250px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 3 à HEAD; ex. `.sidebar`, `.sidebar.expanded` |
| width | 30px | notes-v6@57c25ea2 2026-10-28 | HEAD | 3 règle(s) à l'origine, 2 à HEAD; ex. `.privacy-icon`, `.mobile-brand .brand-mark` |
| width | 31px | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 1 à HEAD; ex. `.version-card .brand-mark`, `.avatar` |
| width | 32px | notes-v6@57c25ea2 2026-10-28 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.update-glyph`, `.settings-group-icon` |
| width | 330px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.orbit-one` |
| width | 33px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.help-card-icon` |
| width | 34px | notes-v6@57c25ea2 2026-10-28 | HEAD | 3 règle(s) à l'origine, 1 à HEAD; ex. `.avatar`, `.side-icon` |
| width | 37px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.editor-divider` |
| width | 38px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 2 règle(s) à l'origine; ex. `.brand-mark`, `.icon-button, .bare-icon` |
| width | 39px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.confirm-icon` |
| width | 40px | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | 1 règle(s) à l'origine; ex. `.sort-button` |
| width | 43px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.empty-icon` |
| width | 44px | notes-v6@1bae3e15 2026-10-28 | HEAD | 8 règle(s) à l'origine, 8 à HEAD; ex. `.brand-mark`, `.icon-button, .bare-icon` |
| width | 47px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.mind-dot` |
| width | 52px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.mobile-dock button.dock-create`, `.mobile-dock :is(button, a).dock-create` |
| width | 58px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.onboarding-art-center` |
| width | 6px | notes-v6@57c25ea2 2026-10-28 | HEAD | 3 règle(s) à l'origine, 3 à HEAD; ex. `.release-bullet`, `.editor-status-dot` |
| width | 72px | notes-v6@57c25ea2 2026-10-28 | HEAD | 1 règle(s) à l'origine, 2 à HEAD; ex. `.mind-note`, `.sidebar` |
| width | 7px | notes-v6@57c25ea2 2026-10-28 | HEAD | 3 règle(s) à l'origine, 2 à HEAD; ex. `.status-dot`, `.side-decoration span` |

## Largeurs, hauteurs, paddings, gaps, marges (valeurs en px, rem, em) — branches non fusionnées (différences)
| propriété | valeur | première apparition | dernier état | notes |
|---|---|---|---|---|
| gap | 4px 16px | notes-v6@d11bb77c 2026-10-29 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.editor-foot` |
| gap | 8px 20px | notes-v6@ac3fbc72 2026-10-30 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.onboarding-actions` |
| height | 110px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.ring-b` |
| height | 123px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.orbit-b` |
| height | 145px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@ac3fbc72 2026-10-30 | 1 règle(s) à l'origine; ex. `.onboarding-art` |
| height | 150px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 2 règle(s) à l'origine; ex. `.mind-ring`, `.onboarding-orbit` |
| height | 172px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@ac3fbc72 2026-10-30 | 1 règle(s) à l'origine; ex. `.onboarding-art` |
| height | 175px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.orbit-a` |
| height | 1px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@d665efcb 2026-10-31 | 1 règle(s) à l'origine; ex. `.eyebrow-line` |
| height | 245px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.orbit-two` |
| height | 2px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@d11bb77c 2026-10-29 | 1 règle(s) à l'origine; ex. `.editor-divider` |
| height | 330px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.orbit-one` |
| height | 34px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.side-icon` |
| height | 3px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.mind-note i` |
| height | 46px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.side-decoration` |
| height | 47px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.mind-dot` |
| height | 58px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@ac3fbc72 2026-10-30 | 1 règle(s) à l'origine; ex. `.onboarding-art-center` |
| max-width | 230px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.overview-side p` |
| max-width | 385px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@ac3fbc72 2026-10-30 | 1 règle(s) à l'origine; ex. `.empty-state > p:not(.eyebrow)` |
| max-width | 400px | notes-v6@ac3fbc72 2026-10-30 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.empty-state > p:not(.eyebrow)`, `.empty-state > p` |
| max-width | 82px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@ac3fbc72 2026-10-30 | 1 règle(s) à l'origine; ex. `.metric span` |
| min-height | 213px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.overview-main` |
| min-height | 224px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.overview-main` |
| min-height | 250px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@d11bb77c 2026-10-29 | 1 règle(s) à l'origine; ex. `.note-body-input` |
| min-height | 265px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.overview-card` |
| min-height | 59px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@ac3fbc72 2026-10-30 | 1 règle(s) à l'origine; ex. `.onboarding-copy` |
| min-width | 153px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.mind-illustration` |
| min-width | 180px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.mind-illustration` |
| padding | 11px 14px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@ac3fbc72 2026-10-30 | 1 règle(s) à l'origine; ex. `.overview-meta` |
| padding | 12px 10px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@ac3fbc72 2026-10-30 | 1 règle(s) à l'origine; ex. `.privacy-card` |
| padding | 16px | notes-v6@d11bb77c 2026-10-29 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.editor-details-body` |
| padding | 19px 20px 16px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.overview-main` |
| padding | 20px 20px 16px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@ac3fbc72 2026-10-30 | 1 règle(s) à l'origine; ex. `.onboarding-card` |
| padding | 22px 22px 17px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.overview-side` |
| padding | 25px 28px 20px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.overview-main` |
| padding | 26px 32px 20px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@ac3fbc72 2026-10-30 | 1 règle(s) à l'origine; ex. `.onboarding-card` |
| padding | 32px | notes-v6@ac3fbc72 2026-10-30 | HEAD | 1 règle(s) à l'origine, 1 à HEAD; ex. `.onboarding-card` |
| padding | 6px 8px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@ac3fbc72 2026-10-30 | 1 règle(s) à l'origine; ex. `.onboarding-skip` |
| padding | 9px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.mind-note` |
| padding | 9px 11px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@ac3fbc72 2026-10-30 | 1 règle(s) à l'origine; ex. `.overview-meta` |
| width | 110px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.ring-b` |
| width | 123px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.orbit-b` |
| width | 150px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 2 règle(s) à l'origine; ex. `.mind-ring`, `.onboarding-orbit` |
| width | 175px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.orbit-a` |
| width | 18px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@d665efcb 2026-10-31 | 1 règle(s) à l'origine; ex. `.eyebrow-line` |
| width | 20px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@ac3fbc72 2026-10-30 | 1 règle(s) à l'origine; ex. `.step-dots span.current` |
| width | 245px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.orbit-two` |
| width | 330px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.orbit-one` |
| width | 34px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.side-icon` |
| width | 37px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@d11bb77c 2026-10-29 | 1 règle(s) à l'origine; ex. `.editor-divider` |
| width | 47px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.mind-dot` |
| width | 58px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@ac3fbc72 2026-10-30 | 1 règle(s) à l'origine; ex. `.onboarding-art-center` |
| width | 72px | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@7f351420 2026-10-30 | 1 règle(s) à l'origine; ex. `.mind-note` |
