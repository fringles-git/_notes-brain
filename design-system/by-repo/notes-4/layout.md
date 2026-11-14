Source : notes-4, commits lus : 13 (hors 2 fusions sans contenu propre), plage : 2026-10-21 à 2026-11-09

Références : N0 = notes-4@94f8e515 2026-10-22, N1 = notes-4@28ad8ce4 2026-10-22, N2 = notes-4@6f00cf58 2026-10-22, N3 = notes-4@854f07b5 2026-10-22, N4 = notes-4@8150588e 2026-10-22 (HEAD de main via fea834d7).

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| modèle de navigation | dock bas flottant à 4 entrées + FAB à droite ; pas de barre latérale | Dock.svelte | N0 | HEAD | entrées : Notes, Bibliothèque, Recherche, Réglages ; pas d'effet de routeur : bascule d'état `activeView` dès N2 |
| dock : géométrie | position fixed, centré (left 50% + translateX(-50%)), width min(92vw, 560px), bottom max(16px, env(safe-area-inset-bottom)), gap 12px ; item hauteur 52px ; FAB 60px | Dock.svelte | N0 | HEAD | |
| dock : forme | dock-shell rayon 24px (N0) puis pilule 999px (N1) | Dock.svelte | N0 | HEAD | |
| .app-shell | max-width 1200px, centré, padding bas 120px (réserve du dock) | +page.svelte | N0 | HEAD | |
| .layout mobile | 1 colonne, gap 16px | +page.svelte | N1 (N0 : 2 colonnes par défaut) | HEAD | |
| .layout 2 colonnes | grid-template-columns minmax(0,1.2fr) minmax(320px,0.8fr) ; N0 : par défaut, repli à 1 colonne sous 900px (max-width) ; N1 : mobile-first, 2 colonnes dès min-width 900px, gap 20px | +page.svelte | N0 | HEAD | passage de max-width à min-width en N1 |
| point de rupture | 900px | +page.svelte | N0 | HEAD | seul |
| .full-panel | grid-column 1 / -1 dès 900px | +page.svelte | N2 | HEAD | |
| .notes-grid | repeat(auto-fit, minmax(220px, 1fr)), gap 16px | +page.svelte | N0 | HEAD | |
| zones sûres | env(safe-area-inset-bottom) dans le dock ; viewport-fit=cover | Dock.svelte, app.html | N0 (dock) ; N1 (viewport-fit) | HEAD | |
| orientation du manifest | portrait | manifest | N1 | HEAD | |
| display | standalone | manifest | N1 | HEAD | start_url "/" |
