Source : notes-v6, commits lus : 23, plage : 2026-10-28 à 2026-11-02

Deux lignes d'histoire. LIGNE MAIN (fusionnée) : V0 = notes-v6@57c25ea2 2026-10-28 (premier code), V1 = @1bae3e15 2026-10-28 (contraste), V2 = @34172c2a 2026-10-28 (thème Système, dock 5 colonnes), V3 = @a0935371 2026-10-29 (styles séparés en tokens.css, components.css, responsive.css), V4 = @1f5a70d2 2026-10-29 (DESIGN.md), V5 = @c80dbb09 2026-10-31 (copie accessible synchronisée : fonts.css, jetons de texte), V6 = @10ce3085 2026-10-31, V7 = @7598f175 2026-10-31 (routes), V8 = @daf38120 2026-11-01 (geometry.css), V9 = @c2701fc1 2026-11-02 (capture, état « HEAD » de main). BRANCHES NON FUSIONNÉES (empilées sur 1f5a70d2, aucune n'est dans main) : BR1 = @d11bb77c 2026-10-29 (fix/system-theme-editor), BR2 = @77ff3726 2026-10-29, BR3 = @ac3fbc72 2026-10-30 (feat/onboard-distill), BR4 = @7f351420 2026-10-30 (feat/quiet-home-filters), BR5 = @d665efcb 2026-10-31 (feat/typeset-polish). Les tableaux « ligne main » listent une ligne par couple (propriété, valeur) ; « HEAD » = V9. Les tableaux « branches » ne listent que les valeurs ajoutées ou retirées par les commits non fusionnés relativement à @1f5a70d2 ; « HEAD » y veut dire « présent à @d665efcb ». Les commits e309072e (PR #4, correctif P0) et c80dbb09 réimplémentent à leur façon une partie de ce que contenaient les branches ; l'état final de main n'est donc pas celui des branches.

Sémantique écrite dans DESIGN.md (V4) : « The One Lamp Rule » (un seul accent à l'écran, environ 10 % d'une vue maximum ; ambre = action, sélection, emplacement ; jamais fond de section) ; « The Ink-Not-Light Rule » (Amber Lamp et Amber Press ne portent pas de texte sur fond clair : texte d'accent = Amber Ink Text en clair, Night Amber Text en sombre) ; « The Muted-on-Sheet Rule » (Pencil Muted seulement sur Sheet). Contrastes documentés V4 : Amber On-Action #302507 sur Amber Press 7,0:1 ; Amber Ink Text #594000 9,6:1 sur Sheet ; Lilac Press avec texte blanc 4,9:1 ; Pencil Muted #72766f 4,6:1 sur Sheet et 4,2:1 sur Canvas (échec AA petit texte), 1,27:1 pour #ffe27a sur clair (constat de revue). V5 (ACCESSIBILITY.md) : « Muted text contrast is at least 7.52:1 across canvas, surface, soft surface and sidebar. Control borders are at least 3.20:1. » Thèmes : clair, sombre, Système (résolu en clair ou sombre, `data-theme` toujours résolu depuis V5/BR1) ; accents ambre (défaut) et lilas via `data-accent`.

## Palette nommée de DESIGN.md
| nom (DESIGN.md) | valeur | première apparition | dernier état |
|---|---|---|---|
| amber-lamp | #f4c430 | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| amber-press | #e0a816 | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| amber-ink-text | #594000 | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| amber-deep-ink | #352a0a | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| amber-on-action | #302507 | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| lilac-lamp | #b99ff5 | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| lilac-press | #7e52e8 | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| lilac-ink-text | #5634a4 | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| paper-canvas | #f5f4ef | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| sheet | #fffefa | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| sheet-soft | #f0efe9 | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| sheet-hover | #eeece5 | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| desk-sidebar | #faf9f5 | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| graphite | #242623 | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| graphite-2 | #4f534d | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| pencil-muted | #72766f | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| hairline | #e8e6de | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| hairline-strong | #d9d7ce | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| danger | #b54b42 | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| saved-green | #43765b | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| saved-dot | #66a87d | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| night-canvas | #171918 | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| night-sheet | #202321 | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| night-sheet-soft | #252927 | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| night-graphite | #f2f0e8 | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| night-muted | #969a91 | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| night-hairline | #343a35 | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| night-amber-text | #ffe27a | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 (palette nommée retirée du DESIGN.md réécrit ; les valeurs vivent dans tokens.css) |
| amber | #f4c430 | notes-v6@c80dbb09 2026-10-31 | HEAD |
| lilac | #b99ff5 | notes-v6@c80dbb09 2026-10-31 | HEAD |
| canvas | #f5f4ef | notes-v6@c80dbb09 2026-10-31 | HEAD |
| surface | #fffefa | notes-v6@c80dbb09 2026-10-31 | HEAD |
| ink | #242623 | notes-v6@c80dbb09 2026-10-31 | HEAD |
| muted | #484d46 | notes-v6@c80dbb09 2026-10-31 | HEAD |
| control-border | #81877d | notes-v6@c80dbb09 2026-10-31 | HEAD |

## Jetons de couleur (une ligne par valeur et par portée) — ligne main
| jeton | valeur | première apparition | dernier état | défini dans |
|---|---|---|---|---|
| `--accent-action` | #e0a816 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--accent-action` | #7e52e8 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root[data-accent='lilac']` |
| `--accent-action` | #e0a816 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | app.css `:root[data-theme='dark'][data-accent='amber']` |
| `--accent-action` | #9c77ed | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | app.css `:root[data-theme='dark'][data-accent='lilac']` |
| `--accent-action` | #e0a816 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--accent-action` | #7e52e8 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root[data-accent='lilac']` |
| `--accent-base` | #f4c430 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--accent-base` | #b99ff5 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root[data-accent='lilac']` |
| `--accent-base` | #f4c430 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | app.css `:root[data-theme='dark'][data-accent='amber']` |
| `--accent-base` | #b99ff5 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | app.css `:root[data-theme='dark'][data-accent='lilac']` |
| `--accent-base` | #f4c430 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--accent-base` | #b99ff5 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root[data-accent='lilac']` |
| `--accent-ink` | #352a0a | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--accent-ink` | #28173d | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root[data-accent='lilac']` |
| `--accent-ink` | #302507 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | app.css `:root[data-theme='dark'][data-accent='amber']` |
| `--accent-ink` | #241933 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | app.css `:root[data-theme='dark'][data-accent='lilac']` |
| `--accent-ink` | #352a0a | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--accent-ink` | #28173d | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root[data-accent='lilac']` |
| `--accent-on-action` | #302507 | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--accent-on-action` | #ffffff | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root[data-accent='lilac']` |
| `--accent-on-action` | #302507 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--accent-on-action` | #ffffff | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root[data-accent='lilac']` |
| `--accent-text` | #594000 | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--accent-text` | #5634a4 | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root[data-accent='lilac']` |
| `--accent-text` | #ffe27a | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root[data-theme='dark']` |
| `--accent-text` | #5634a4 | notes-v6@34172c2a 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root[data-theme='system'][data-accent='lilac']` |
| `--accent-text` | #ffe27a | notes-v6@34172c2a 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root[data-theme='system'] [@media (prefers-color-scheme: dark)]` |
| `--accent-text` | #d8c7ff | notes-v6@34172c2a 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root[data-theme='system'][data-accent='lilac'] [@media (prefers-color-scheme: dark)]` |
| `--accent-text` | #ffe27a | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | app.css `:root` |
| `--accent-text` | #d8c7ff | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | app.css `:root[data-accent='lilac']` |
| `--accent-text` | #ffe27a | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@1bae3e15 2026-10-28 | app.css `:root[data-theme='dark'][data-accent='amber']` |
| `--accent-text` | #d8c7ff | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root[data-theme='dark'][data-accent='lilac']` |
| `--accent-text` | #594000 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--accent-text` | #5634a4 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root[data-accent='lilac']` |
| `--accent-text` | #ffe27a | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root[data-theme='dark']` |
| `--accent-text` | #d8c7ff | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root[data-theme='dark'][data-accent='lilac']` |
| `--accent-text` | #5634a4 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root[data-theme='system'][data-accent='lilac']` |
| `--accent-text` | #ffe27a | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root[data-theme='system'] [@media (prefers-color-scheme: dark)]` |
| `--accent-text` | #d8c7ff | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root[data-theme='system'][data-accent='lilac'] [@media (prefers-color-scheme: dark)]` |
| `--canvas` | #f5f4ef | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--canvas` | #171918 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root[data-theme='dark']` |
| `--canvas` | #f5f4ef | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--canvas` | #171918 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root[data-theme='dark']` |
| `--canvas` | #171918 | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root[data-theme='system'] [@media (prefers-color-scheme: dark)]` |
| `--card-tint` | #fbfaf6 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--card-tint` | #232725 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root[data-theme='dark']` |
| `--card-tint` | #fbfaf6 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--card-tint` | #232725 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root[data-theme='dark']` |
| `--card-tint` | #232725 | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root[data-theme='system'] [@media (prefers-color-scheme: dark)]` |
| `--danger` | #b54b42 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--danger` | #b54b42 | notes-v6@a0935371 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | tokens.css `:root` |
| `--danger` | #882f28 | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root` |
| `--danger` | #ffb4aa | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root[data-theme='dark']` |
| `--danger` | #ffb4aa | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root[data-theme='system'] [@media (prefers-color-scheme: dark)]` |
| `--danger-on` | #ffffff | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--danger-on` | #ffffff | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--danger-on` | #39100c | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root[data-theme='dark']` |
| `--danger-on` | #39100c | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root[data-theme='system'] [@media (prefers-color-scheme: dark)]` |
| `--good` | #43765b | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--good` | #43765b | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--good-dot` | #66a87d | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--good-dot` | #66a87d | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--ink` | #242623 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--ink` | #f2f0e8 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root[data-theme='dark']` |
| `--ink` | #242623 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--ink` | #f2f0e8 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root[data-theme='dark']` |
| `--ink` | #f2f0e8 | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root[data-theme='system'] [@media (prefers-color-scheme: dark)]` |
| `--ink-2` | #4f534d | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--ink-2` | #c4c4ba | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root[data-theme='dark']` |
| `--ink-2` | #4f534d | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--ink-2` | #c4c4ba | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root[data-theme='dark']` |
| `--ink-2` | #c4c4ba | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root[data-theme='system'] [@media (prefers-color-scheme: dark)]` |
| `--line` | #e8e6de | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--line` | #343a35 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root[data-theme='dark']` |
| `--line` | #e8e6de | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--line` | #343a35 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root[data-theme='dark']` |
| `--line` | #343a35 | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root[data-theme='system'] [@media (prefers-color-scheme: dark)]` |
| `--line-strong` | #d9d7ce | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--line-strong` | #454b45 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root[data-theme='dark']` |
| `--line-strong` | #d9d7ce | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--line-strong` | #454b45 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root[data-theme='dark']` |
| `--line-strong` | #454b45 | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root[data-theme='system'] [@media (prefers-color-scheme: dark)]` |
| `--muted` | #72766f | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--muted` | #969a91 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root[data-theme='dark']` |
| `--muted` | #72766f | notes-v6@a0935371 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | tokens.css `:root` |
| `--muted` | #969a91 | notes-v6@a0935371 2026-10-29 | SUPPRIMÉ notes-v6@c80dbb09 2026-10-31 | tokens.css `:root[data-theme='dark']` |
| `--muted` | var(--text-muted) | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root` |
| `--sidebar` | #faf9f5 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--sidebar` | #1c201e | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root[data-theme='dark']` |
| `--sidebar` | #faf9f5 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--sidebar` | #1c201e | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root[data-theme='dark']` |
| `--sidebar` | #1c201e | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root[data-theme='system'] [@media (prefers-color-scheme: dark)]` |
| `--surface` | #fffefa | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--surface` | #202321 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root[data-theme='dark']` |
| `--surface` | #fffefa | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--surface` | #202321 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root[data-theme='dark']` |
| `--surface` | #202321 | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root[data-theme='system'] [@media (prefers-color-scheme: dark)]` |
| `--surface-hover` | #eeece5 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--surface-hover` | #2d322f | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root[data-theme='dark']` |
| `--surface-hover` | #eeece5 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--surface-hover` | #2d322f | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root[data-theme='dark']` |
| `--surface-hover` | #2d322f | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root[data-theme='system'] [@media (prefers-color-scheme: dark)]` |
| `--surface-soft` | #f0efe9 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--surface-soft` | #252927 | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root[data-theme='dark']` |
| `--surface-soft` | #f0efe9 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--surface-soft` | #252927 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root[data-theme='dark']` |
| `--surface-soft` | #252927 | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root[data-theme='system'] [@media (prefers-color-scheme: dark)]` |
| `--text-md` | 15px | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root` |
| `--text-muted` | #484d46 | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root` |
| `--text-muted` | #bcc2b8 | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root[data-theme='dark']` |
| `--text-muted` | #bcc2b8 | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root[data-theme='system'] [@media (prefers-color-scheme: dark)]` |
| `--text-sm` | 14px | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root` |
| `--text-subtle` | #62675f | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root` |
| `--text-subtle` | #a4aca1 | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root[data-theme='dark']` |
| `--text-subtle` | #a4aca1 | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root[data-theme='system'] [@media (prefers-color-scheme: dark)]` |
| `--text-xs` | 13px | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root` |

## Jetons de couleur (une ligne par valeur et par portée) — branches non fusionnées (différences)
| jeton | valeur | première apparition | dernier état | défini dans |
|---|---|---|---|---|
| `--accent-text` | #5634a4 | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@d11bb77c 2026-10-29 | tokens.css `:root[data-theme='system'][data-accent='lilac']` |
| `--accent-text` | #ffe27a | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@d11bb77c 2026-10-29 | tokens.css `:root[data-theme='system'] [@media (prefers-color-scheme: dark)]` |
| `--accent-text` | #d8c7ff | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@d11bb77c 2026-10-29 | tokens.css `:root[data-theme='system'][data-accent='lilac'] [@media (prefers-color-scheme: dark)]` |

## Autres jetons (ligne main : scrims, opacités, valeurs RGB d'ombre)
| jeton | valeur | première apparition | dernier état | défini dans |
|---|---|---|---|---|
| `--border-control` | #81877d | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root` |
| `--border-control` | #858e83 | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root[data-theme='dark']` |
| `--border-control` | #858e83 | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root[data-theme='system'] [@media (prefers-color-scheme: dark)]` |
| `--focus-ring` | var(--accent-text) | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root` |
| `--opacity-decorative` | .35 | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--opacity-decorative` | .35 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--opacity-disabled` | .45 | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--opacity-disabled` | .45 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--opacity-enter` | .5 | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--opacity-enter` | .5 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--opacity-hidden` | 0 | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--opacity-hidden` | 0 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--opacity-illustration` | .75 | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--opacity-illustration` | .75 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--opacity-placeholder` | .76 | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--opacity-placeholder` | .76 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--opacity-pop` | .7 | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--opacity-pop` | .7 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--opacity-visible` | 1 | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--opacity-visible` | 1 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--scrim-editor` | rgb(17 20 18 / 44%) | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--scrim-editor` | rgb(0 0 0 / 60%) | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root[data-theme='dark']` |
| `--scrim-editor` | rgb(17 20 18 / 44%) | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--scrim-editor` | rgb(0 0 0 / 60%) | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root[data-theme='dark']` |
| `--scrim-editor` | rgb(0 0 0 / 60%) | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root[data-theme='system'] [@media (prefers-color-scheme: dark)]` |
| `--scrim-onboarding` | rgb(20 22 20 / 57%) | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--scrim-onboarding` | rgb(0 0 0 / 72%) | notes-v6@1bae3e15 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root[data-theme='dark']` |
| `--scrim-onboarding` | rgb(20 22 20 / 57%) | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--scrim-onboarding` | rgb(0 0 0 / 72%) | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root[data-theme='dark']` |
| `--scrim-onboarding` | rgb(0 0 0 / 72%) | notes-v6@c80dbb09 2026-10-31 | HEAD | tokens.css `:root[data-theme='system'] [@media (prefers-color-scheme: dark)]` |
| `--swatch-amber` | #f4c430 | notes-v6@34172c2a 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--swatch-amber` | #f4c430 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
| `--swatch-lilac` | #b99ff5 | notes-v6@34172c2a 2026-10-28 | SUPPRIMÉ notes-v6@a0935371 2026-10-29 | app.css `:root` |
| `--swatch-lilac` | #b99ff5 | notes-v6@a0935371 2026-10-29 | HEAD | tokens.css `:root` |
