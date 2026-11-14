Source : notes-svelte, commits lus : 4, plage : 2026-10-22 à 2026-10-22

Références : S1 = notes-svelte@2923c47d 2026-10-22, S2 = notes-svelte@112ae9d8 2026-10-22, S3 = notes-svelte@96889f8d 2026-10-22 (HEAD).

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| navigation | barre d'onglets basse (dock) flottante : 4 onglets + bouton + à droite ; sticky bottom, largeur min(100%, 920px), forme pilule | BottomNavigation.svelte | S3 (QuickActionMenu.svelte, non importé, dès S1) | HEAD | grille `repeat(4, minmax(0,1fr)) auto`, gap 10px, padding 12px 10px |
| onglets | Notes, Bibliothèque, Recherche, Réglages | BottomNavigation.svelte | S1 | HEAD | |
| contenu | .app-layout max-width 920px centré, padding 20px 16px puis 26px latéral dès min-width 680px | +layout.svelte | S1 | HEAD | |
| padding bas du contenu | calc(var(--safe-bottom) + 120px) | +layout.svelte | S1 | HEAD | |
| .screen | grille, gap 18px | +layout.svelte | S1 | HEAD | |
| .screen-header | flex, align-items end, space-between | +layout.svelte | S1 | HEAD | |
| listes | grille 1 colonne, gap 14px | +layout.svelte | S1 | HEAD | |
| .info-row (Réglages) | 2 colonnes | +layout.svelte | S1 | HEAD | |
| points de rupture | 440px (onglets plus serrés : gap 6px, padding 10px 8px, onglet 62px, texte 0.74rem, bouton + 70px) ; 680px (marges latérales 26px) | composants | S1/S3 | HEAD | |
| zones sûres | env(safe-area-inset-top/bottom) via --safe-top, --safe-bottom ; viewport-fit=cover | tokens.css, app.html | S1 | HEAD | --safe-top défini, non utilisé dans les fichiers lus |
| quick-menu position | absolute, right 12px, bottom 96px, largeur min(246px, 100vw - 36px) | BottomNavigation.svelte | S3 | HEAD | |
| orientation manifest | portrait | manifest | S1 | HEAD | |
