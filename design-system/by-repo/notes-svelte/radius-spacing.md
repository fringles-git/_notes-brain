Source : notes-svelte, commits lus : 4, plage : 2026-10-22 à 2026-10-22

Références : S1 = notes-svelte@2923c47d 2026-10-22, S2 = notes-svelte@112ae9d8 2026-10-22, S3 = notes-svelte@96889f8d 2026-10-22 (HEAD). Le commit cac60e91 (Initial commit) n'a aucun contenu graphique. Les quatre commits sont du même jour (10:22, 12:48, 13:18, 13:26) : aucune valeur de design ne change entre commits ; chaque ligne vaut donc "S1 à HEAD" sauf mention.

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| --radius-card | 22px | tokens.css | S1 | HEAD | NoteCard |
| --radius-container | 34px | tokens.css | S1 | HEAD | .card-surface, .empty-state |
| --radius-pill | 999px | tokens.css | S1 | HEAD | barre d'onglets, onglets, boutons, puces |
| rayon bouton + | 28px | BottomNavigation.svelte | S3 (QuickActionMenu.svelte dès S1) | HEAD | carré arrondi, pas une pastille |
| rayon quick-menu | 20px ; items 13px | BottomNavigation.svelte | S3 | HEAD | |
| rayon toolbar-button | 12px | +layout.svelte | S1 | HEAD | |
| rayon mini-button | 10px | NoteCard.svelte | S1 | HEAD | |
| rayon search-field | 16px | +layout.svelte | S1 | HEAD | |
| rayon des icônes d'app | rx 18/64 (favicon), 44/192, 120/512 | SVG | S1 | HEAD | |
| --safe-top / --safe-bottom | env(safe-area-inset-top/bottom, 0px) | tokens.css | S1 | HEAD | |
| viewport | viewport-fit=cover | app.html | S1 | HEAD | |
| largeur bordure | 1px solid var(--border) | partout | S1 | HEAD | focus : outline 2px solid var(--accent), offset 2px |
| FAB / bouton ajout | 76px x 76px ; 70px x 70px sous 440px | BottomNavigation.svelte | S3 (QuickActionMenu.svelte dès S1) | HEAD | |
| hauteur onglet | min-height 68px ; 62px sous 440px | BottomNavigation.svelte | S3 | HEAD | |
| hauteur menu item | min-height 46px | BottomNavigation.svelte | S3 | HEAD | |
| cible .toolbar-button | 42px x 42px | +layout.svelte | S1 | HEAD | |
| cible .mini-button | 32px x 32px | NoteCard.svelte | S1 | HEAD | sous 44px |
| .save-button | min-height 42px ; padding 8px 14px | +layout.svelte | S1 | HEAD | |
| .theme-option | min-height 40px ; padding 0 12px | +layout.svelte | S1 | HEAD | |
| .search-field | min-height 52px ; padding 8px 12px | +layout.svelte | S1 | HEAD | |
| tailles d'icônes | 16 (barre d'outils), 18 (menu rapide, recherche), 22 (onglets), 28 (états vides), 32 (+) | composants | S1 | HEAD | |
| espacements | gaps 6, 8, 10, 12, 14, 18 px ; padding carte 16px, .editor-card 16px, .settings-card 18px 16px, .app-layout 20px 16px | composants | S1 | HEAD | pas d'échelle nommée |
| .app-layout | max-width 920px, padding-bottom calc(var(--safe-bottom) + 120px) ; 26px latéral dès 680px | +layout.svelte | S1 | HEAD | |
