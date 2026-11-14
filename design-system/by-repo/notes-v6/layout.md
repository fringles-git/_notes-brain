Source : notes-v6, commits lus : 23, plage : 2026-10-28 à 2026-11-02

Deux lignes d'histoire. LIGNE MAIN (fusionnée) : V0 = notes-v6@57c25ea2 2026-10-28 (premier code), V1 = @1bae3e15 2026-10-28 (contraste), V2 = @34172c2a 2026-10-28 (thème Système, dock 5 colonnes), V3 = @a0935371 2026-10-29 (styles séparés en tokens.css, components.css, responsive.css), V4 = @1f5a70d2 2026-10-29 (DESIGN.md), V5 = @c80dbb09 2026-10-31 (copie accessible synchronisée : fonts.css, jetons de texte), V6 = @10ce3085 2026-10-31, V7 = @7598f175 2026-10-31 (routes), V8 = @daf38120 2026-11-01 (geometry.css), V9 = @c2701fc1 2026-11-02 (capture, état « HEAD » de main). BRANCHES NON FUSIONNÉES (empilées sur 1f5a70d2, aucune n'est dans main) : BR1 = @d11bb77c 2026-10-29 (fix/system-theme-editor), BR2 = @77ff3726 2026-10-29, BR3 = @ac3fbc72 2026-10-30 (feat/onboard-distill), BR4 = @7f351420 2026-10-30 (feat/quiet-home-filters), BR5 = @d665efcb 2026-10-31 (feat/typeset-polish). Les tableaux « ligne main » listent une ligne par couple (propriété, valeur) ; « HEAD » = V9. Les tableaux « branches » ne listent que les valeurs ajoutées ou retirées par les commits non fusionnés relativement à @1f5a70d2 ; « HEAD » y veut dire « présent à @d665efcb ». Les commits e309072e (PR #4, correctif P0) et c80dbb09 réimplémentent à leur façon une partie de ce que contenaient les branches ; l'état final de main n'est donc pas celui des branches.

Navigation par période (ligne main) :
- V0 (@57c25ea2) : barre latérale fixe de 250px (220px sous 1100px) avec marque, navigation principale, carte « privacy », pied avec version ; barre du haut de 72px ; sous 760px : barre du haut mobile + dock bas flex avec bouton + central surélevé (margin-top -20px).
- V2 (@34172c2a) : dock mobile en grille de 5 colonnes égales, bouton + 52px (margin-top -12px, bordure 4px), icône 24px.
- V4 (DESIGN.md) : sidebar 250/220px, contenu max ~1180px avec marges 48-56px sur tablette ; sous 760px barre haute 60px + dock 5 emplacements (Notes, Tâches, Recherche, Réglages, + créer) au-dessus de l'inset de zone sûre ; gouttières téléphone 17px (13px sous 390px) ; grille de notes 3 colonnes bureau, 2 colonnes à 1100px, 1 colonne à 760px ; éditeur en feuille droite (max 680px) sur tablette, plein écran sur téléphone. « The Thumb Rule » : actions principales dans le tiers bas sur téléphone.
- V5 (@c80dbb09) : rail de 72px entre 761 et 1100px (bouton développer/réduire, noms accessibles), dock jusqu'à 760px ; marqueur géométrique d'état actif (inset 3px accent-text à gauche pour la sidebar, inset 3px en haut pour le dock).
- V7 (@7598f175) : navigation par routes (/, /settings, /about) : `.primary-nav :is(button, a)` ; page d'erreur statique 404.
- V8 : géométrie commune contrôles / navigation (voir radius-spacing.md). V9 : QuickCapture en tête de l'accueil, avant les filtres.
- Accueil : V0 à V4 héros `DashboardOverview.svelte` (orbites, `.mind-illustration`, carte « Capture rapide », eyebrows) ; BR4 vide ce composant (non fusionné) ; en main, @c80dbb09 (V5) retire son import de la page (le fichier reste, non monté ensuite : aucune référence à V7 et V9) et les éléments `.eyebrow` de la page ; les règles CSS `.overview-*`, `.eyebrow` restent dans components.css à HEAD. Éditeur : V0 panneau `<dialog>` ; BR1 et e309072e : zone défilante, titre et texte d'abord, tiroir Détails.
Zones sûres : `env(safe-area-inset-bottom)` dans le dock et l'éditeur ; `viewport-fit=cover` (app.html V0 à HEAD).

## Points de rupture (media queries) — ligne main
| propriété | valeur | première apparition | dernier état | notes |
|---|---|---|---|---|
| @media (max-width: 1100px) |  | notes-v6@57c25ea2 2026-10-28 | HEAD | 6 règle(s) à l'origine, 3 à HEAD; ex. `.sidebar`, `.main-area` |
| @media (max-width: 390px) |  | notes-v6@57c25ea2 2026-10-28 | HEAD | 9 règle(s) à l'origine, 11 à HEAD; ex. `.dashboard, .settings-page`, `.dashboard-heading h1` |
| @media (max-width: 760px) |  | notes-v6@57c25ea2 2026-10-28 | HEAD | 164 règle(s) à l'origine, 200 à HEAD; ex. `.sidebar`, `.main-area` |
| @media (min-width: 761px) and (max-width: 1100px) |  | notes-v6@c80dbb09 2026-10-31 | HEAD | 16 règle(s) à l'origine, 23 à HEAD; ex. `.sidebar`, `.main-area` |
| @media (prefers-color-scheme: dark) |  | notes-v6@34172c2a 2026-10-28 | HEAD | 3 règle(s) à l'origine, 24 à HEAD; ex. `:root[data-theme='system']`, `:root[data-theme='system'][data-accent='` |
| @media (prefers-reduced-motion: reduce) |  | notes-v6@57c25ea2 2026-10-28 | HEAD | 4 règle(s) à l'origine, 4 à HEAD; ex. `*, *::before, *::after` |
| @media print |  | notes-v6@a0935371 2026-10-29 | HEAD | 15 règle(s) à l'origine, 17 à HEAD; ex. `.sidebar,.main-area,.mobile-dock,.floati`, `.editor-backdrop,.editor-panel,.editor-c` |
| @media(hover:hover) |  | notes-v6@10ce3085 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.primary-button,.outline-button,.icon-bu`, `.primary-button:active:not(:disabled),.o` |
| @media(max-width:760px) |  | notes-v6@c80dbb09 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.editor-panel`, `.editor-content` |
| @media(prefers-reduced-motion:reduce) |  | notes-v6@10ce3085 2026-10-31 | HEAD | 2 règle(s) à l'origine, 2 à HEAD; ex. `.save-confirmed`, `.primary-button,.outline-button,.icon-bu` |

## Points de rupture (media queries) — branches non fusionnées (différences)
| propriété | valeur | première apparition | dernier état | notes |
|---|---|---|---|---|
| @media (hover: hover) |  | notes-v6@7f351420 2026-10-30 | HEAD | 5 règle(s) à l'origine, 5 à HEAD; ex. `.note-card:hover .note-open`, `.note-card:hover` |
| @media (prefers-color-scheme: dark) |  | notes-v6@1f5a70d2 2026-10-29 | SUPPRIMÉ notes-v6@d11bb77c 2026-10-29 | 3 règle(s) à l'origine; ex. `:root[data-theme='system']`, `:root[data-theme='system'][data-accent='` |
