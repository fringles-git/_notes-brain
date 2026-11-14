Source : notes-v6, commits lus : 23, plage : 2026-10-28 à 2026-11-02

Deux lignes d'histoire. LIGNE MAIN (fusionnée) : V0 = notes-v6@57c25ea2 2026-10-28 (premier code), V1 = @1bae3e15 2026-10-28 (contraste), V2 = @34172c2a 2026-10-28 (thème Système, dock 5 colonnes), V3 = @a0935371 2026-10-29 (styles séparés en tokens.css, components.css, responsive.css), V4 = @1f5a70d2 2026-10-29 (DESIGN.md), V5 = @c80dbb09 2026-10-31 (copie accessible synchronisée : fonts.css, jetons de texte), V6 = @10ce3085 2026-10-31, V7 = @7598f175 2026-10-31 (routes), V8 = @daf38120 2026-11-01 (geometry.css), V9 = @c2701fc1 2026-11-02 (capture, état « HEAD » de main). BRANCHES NON FUSIONNÉES (empilées sur 1f5a70d2, aucune n'est dans main) : BR1 = @d11bb77c 2026-10-29 (fix/system-theme-editor), BR2 = @77ff3726 2026-10-29, BR3 = @ac3fbc72 2026-10-30 (feat/onboard-distill), BR4 = @7f351420 2026-10-30 (feat/quiet-home-filters), BR5 = @d665efcb 2026-10-31 (feat/typeset-polish). Les tableaux « ligne main » listent une ligne par couple (propriété, valeur) ; « HEAD » = V9. Les tableaux « branches » ne listent que les valeurs ajoutées ou retirées par les commits non fusionnés relativement à @1f5a70d2 ; « HEAD » y veut dire « présent à @d665efcb ». Les commits e309072e (PR #4, correctif P0) et c80dbb09 réimplémentent à leur façon une partie de ce que contenaient les branches ; l'état final de main n'est donc pas celui des branches.

Bibliothèque d'icônes : `@lucide/svelte` (Lucide pour Svelte 5), composants importés par nom, tailles par prop `size` (14 à 22 en général, 24 pour le bouton + du dock). Versions : 1.61.0 (V0 à V1), 1.63.0 (notes-v6@34172c2a 2026-10-28 à V7 ; aussi toutes les branches), 1.66.0 (notes-v6@dad00d5b 2026-10-31 à HEAD). Ensemble utilisé : 23 noms à V0 ; 20 à V1 et V2 ; 18 de V3 à V6 (retrait de Lightbulb et MoreHorizontal en notes-v6@a0935371) ; 19 depuis V6 (+Download) ; 20 à V9 (+ArrowRight). Retirés à V3 aussi : Command, HelpCircle, House (retirés en notes-v6@1bae3e15). Aucune icône n'est dessinée à la main dans les composants (aucun `<svg>` dans `src/`) ; les tracés Lucide ne sont pas dans le dépôt (paquet npm), donc aucun fichier SVG de bibliothèque n'est copié.

## Icônes d'application (PWA, favicon)
| icône | source | empreinte | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| icône de l'app (feuille ambre sur carré sombre, pastille lilas avec coche) | fichier `static/icon.svg` | 6566208c | notes-v6@57c25ea2 2026-10-28 | HEAD | viewBox 0 0 512 512 ; fond #171918, feuille #f4c430, pli #ffe27a, barres #29291f, pastille #b99ff5, coche #241d35. svg/icon-6566208c.svg. Manifest : "any" et "maskable" (même fichier, sans zone sûre dédiée) |
| favicon | fichier `static/favicon.svg` | 08c9ace1 | notes-v6@57c25ea2 2026-10-28 | HEAD | viewBox 0 0 48 48, rx 12 ; même motif simplifié. svg/favicon-08c9ace1.svg |
| icon-192.png | `git show c2701fc1:static/icon-192.png` (blob 16da49c3, 10 419 o) | - | notes-v6@10ce3085 2026-10-31 | HEAD | purpose "any", 192x192 |
| icon-512.png | `git show c2701fc1:static/icon-512.png` (blob a9defcf4, 59 035 o) | - | notes-v6@10ce3085 2026-10-31 | HEAD | purpose "any", 512x512 |
| apple-touch-icon | aucun | - | | | pas de balise dans `src/app.html` |
Manifest (`static/manifest.webmanifest`) : theme_color #f4c430 et background_color #f6f4ef de V0 à HEAD ; `<meta name="theme-color" content="#f4c430">` unique (pas de variante sombre) ; orientation portrait-primary ; icônes SVG seules jusqu'à @10ce3085, puis PNG 192 et 512 + SVG.

## Noms Lucide (une ligne par nom)
| icône | source | empreinte | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| ArrowDownToLine | `@lucide/svelte` | - | notes-v6@57c25ea2 2026-10-28 | HEAD | ligne main; aussi dans les branches non fusionnées (jusqu'à notes-v6@d665efcb 2026-10-31) |
| ArrowLeft | `@lucide/svelte` | - | notes-v6@57c25ea2 2026-10-28 | HEAD | ligne main; aussi dans les branches non fusionnées (jusqu'à notes-v6@d665efcb 2026-10-31) |
| ArrowRight | `@lucide/svelte` | - | notes-v6@c2701fc1 2026-11-02 | HEAD | ligne main |
| ArrowUpFromLine | `@lucide/svelte` | - | notes-v6@57c25ea2 2026-10-28 | HEAD | ligne main; aussi dans les branches non fusionnées (jusqu'à notes-v6@d665efcb 2026-10-31) |
| BookOpen | `@lucide/svelte` | - | notes-v6@57c25ea2 2026-10-28 | HEAD | ligne main; aussi dans les branches non fusionnées (jusqu'à notes-v6@d665efcb 2026-10-31) |
| Check | `@lucide/svelte` | - | notes-v6@57c25ea2 2026-10-28 | HEAD | ligne main; aussi dans les branches non fusionnées (jusqu'à notes-v6@d665efcb 2026-10-31) |
| ChevronDown | `@lucide/svelte` | - | branche non fusionnée : notes-v6@d11bb77c 2026-10-29 | absente de main ; présente jusqu'à notes-v6@d665efcb 2026-10-31 | aucune présence dans main |
| ChevronRight | `@lucide/svelte` | - | notes-v6@57c25ea2 2026-10-28 | HEAD | ligne main; aussi dans les branches non fusionnées (jusqu'à notes-v6@d665efcb 2026-10-31) |
| ChevronUp | `@lucide/svelte` | - | branche non fusionnée : notes-v6@7f351420 2026-10-30 | absente de main ; présente jusqu'à notes-v6@d665efcb 2026-10-31 | aucune présence dans main |
| Command | `@lucide/svelte` | - | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉE notes-v6@1bae3e15 2026-10-28 | ligne main |
| Download | `@lucide/svelte` | - | notes-v6@10ce3085 2026-10-31 | HEAD | ligne main |
| Eye | `@lucide/svelte` | - | branche non fusionnée : notes-v6@d665efcb 2026-10-31 | absente de main ; présente jusqu'à notes-v6@d665efcb 2026-10-31 | aucune présence dans main |
| EyeOff | `@lucide/svelte` | - | branche non fusionnée : notes-v6@d665efcb 2026-10-31 | absente de main ; présente jusqu'à notes-v6@d665efcb 2026-10-31 | aucune présence dans main |
| FileText | `@lucide/svelte` | - | notes-v6@57c25ea2 2026-10-28 | HEAD | ligne main; aussi dans les branches non fusionnées (jusqu'à notes-v6@d665efcb 2026-10-31) |
| GripVertical | `@lucide/svelte` | - | branche non fusionnée : notes-v6@7f351420 2026-10-30 | absente de main ; présente jusqu'à notes-v6@d665efcb 2026-10-31 | aucune présence dans main |
| HelpCircle | `@lucide/svelte` | - | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉE notes-v6@1bae3e15 2026-10-28 | ligne main |
| House | `@lucide/svelte` | - | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉE notes-v6@1bae3e15 2026-10-28 | ligne main |
| Info | `@lucide/svelte` | - | notes-v6@57c25ea2 2026-10-28 | HEAD | ligne main; aussi dans les branches non fusionnées (jusqu'à notes-v6@d665efcb 2026-10-31) |
| Keyboard | `@lucide/svelte` | - | notes-v6@57c25ea2 2026-10-28 | HEAD | ligne main; aussi dans les branches non fusionnées (jusqu'à notes-v6@d665efcb 2026-10-31) |
| LayoutTemplate | `@lucide/svelte` | - | branche non fusionnée : notes-v6@ac3fbc72 2026-10-30 | absente de main ; présente jusqu'à notes-v6@d665efcb 2026-10-31 | aucune présence dans main |
| Lightbulb | `@lucide/svelte` | - | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉE notes-v6@a0935371 2026-10-29 | ligne main |
| Lock | `@lucide/svelte` | - | branche non fusionnée : notes-v6@d665efcb 2026-10-31 | absente de main ; présente jusqu'à notes-v6@d665efcb 2026-10-31 | aucune présence dans main |
| Moon | `@lucide/svelte` | - | notes-v6@57c25ea2 2026-10-28 | HEAD | ligne main; aussi dans les branches non fusionnées (jusqu'à notes-v6@d665efcb 2026-10-31) |
| MoreHorizontal | `@lucide/svelte` | - | notes-v6@57c25ea2 2026-10-28 | SUPPRIMÉE notes-v6@a0935371 2026-10-29 | ligne main |
| Paperclip | `@lucide/svelte` | - | branche non fusionnée : notes-v6@d11bb77c 2026-10-29 | absente de main ; présente jusqu'à notes-v6@d665efcb 2026-10-31 | aucune présence dans main |
| PenLine | `@lucide/svelte` | - | branche non fusionnée : notes-v6@ac3fbc72 2026-10-30 | absente de main ; présente jusqu'à notes-v6@d665efcb 2026-10-31 | aucune présence dans main |
| Pin | `@lucide/svelte` | - | branche non fusionnée : notes-v6@7f351420 2026-10-30 | absente de main ; présente jusqu'à notes-v6@d665efcb 2026-10-31 | aucune présence dans main |
| Plus | `@lucide/svelte` | - | notes-v6@57c25ea2 2026-10-28 | HEAD | ligne main; aussi dans les branches non fusionnées (jusqu'à notes-v6@d665efcb 2026-10-31) |
| Search | `@lucide/svelte` | - | notes-v6@57c25ea2 2026-10-28 | HEAD | ligne main; aussi dans les branches non fusionnées (jusqu'à notes-v6@d665efcb 2026-10-31) |
| Settings2 | `@lucide/svelte` | - | notes-v6@57c25ea2 2026-10-28 | HEAD | ligne main; aussi dans les branches non fusionnées (jusqu'à notes-v6@d665efcb 2026-10-31) |
| ShieldCheck | `@lucide/svelte` | - | notes-v6@57c25ea2 2026-10-28 | HEAD | ligne main; aussi dans les branches non fusionnées (jusqu'à notes-v6@d665efcb 2026-10-31) |
| SlidersHorizontal | `@lucide/svelte` | - | branche non fusionnée : notes-v6@7f351420 2026-10-30 | absente de main ; présente jusqu'à notes-v6@d665efcb 2026-10-31 | aucune présence dans main |
| Sparkles | `@lucide/svelte` | - | notes-v6@57c25ea2 2026-10-28 | HEAD | ligne main; aussi dans les branches non fusionnées (jusqu'à notes-v6@d665efcb 2026-10-31) |
| Star | `@lucide/svelte` | - | branche non fusionnée : notes-v6@7f351420 2026-10-30 | absente de main ; présente jusqu'à notes-v6@d665efcb 2026-10-31 | aucune présence dans main |
| Sun | `@lucide/svelte` | - | notes-v6@57c25ea2 2026-10-28 | HEAD | ligne main; aussi dans les branches non fusionnées (jusqu'à notes-v6@d665efcb 2026-10-31) |
| SunMoon | `@lucide/svelte` | - | branche non fusionnée : notes-v6@d11bb77c 2026-10-29 | absente de main ; présente jusqu'à notes-v6@d665efcb 2026-10-31 | aucune présence dans main |
| Trash2 | `@lucide/svelte` | - | notes-v6@57c25ea2 2026-10-28 | HEAD | ligne main; aussi dans les branches non fusionnées (jusqu'à notes-v6@d665efcb 2026-10-31) |
| X | `@lucide/svelte` | - | notes-v6@57c25ea2 2026-10-28 | HEAD | ligne main; aussi dans les branches non fusionnées (jusqu'à notes-v6@d665efcb 2026-10-31) |
