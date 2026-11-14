Source : notes-4, commits lus : 13 (hors 2 fusions sans contenu propre), plage : 2026-10-21 à 2026-11-09

Références : N0 = notes-4@94f8e515 2026-10-22, N1 = notes-4@28ad8ce4 2026-10-22, N2 = notes-4@6f00cf58 2026-10-22, N3 = notes-4@854f07b5 2026-10-22, N4 = notes-4@8150588e 2026-10-22 (HEAD de main via fea834d7). Framework : Svelte 5 en syntaxe Svelte 4 (`export let`, `on:click`, `createEventDispatcher`). Les noms de fichiers sont ceux de N4 ; avant, les contenus étaient permutés (voir note de références).

| composant | fichier | rôle | variantes / props visibles | première apparition | dernier état | notes |
|---|---|---|---|---|---|---|
| Dock | `src/lib/components/Dock.svelte` | navigation basse flottante + FAB | prop `active` (notes, library, search, settings) ; événements select, create ; `.dock-item.active` fond --bg-elevated | N0 (statique) ; N2 (select) ; N3 (create) | HEAD | libellés anglais (Library, Search, Settings) en N0, français dès N1 ; aria-label "Main navigation" puis "Navigation principale" |
| FAB (`.fab`) | Dock.svelte | créer une note | "+" | N0 | HEAD | |
| Button | `src/lib/components/Button.svelte` | bouton | variant primary / ghost / danger ; type ; compact | N0 | HEAD | |
| NoteCard | `src/lib/components/NoteCard.svelte` | carte de note | prop note, selected ; pastille dossier, bouton Épingler, pied date + Épinglée/Brouillon | N0 | HEAD | |
| Page unique (App shell) | `src/routes/+page.svelte` | topbar (titre, Clair/Sombre, Nouveau), liste, éditeur, vues Bibliothèque, Recherche, Réglages | activeView | N0 (liste + éditeur) ; N2 (4 vues) | HEAD | 3 vues pleine largeur ajoutées en N2 |
| .folder-card / .folder-dot | +page.svelte | dossiers de la Bibliothèque | | N2 | HEAD | |
| .search-box / .search-result | +page.svelte | recherche | | N2 | HEAD | |
| .settings-item (Thème, Langue, Version) | +page.svelte | Réglages | .disabled | N2 | HEAD | Version affichée "26.10.19.8" |
| Magasin de notes | `src/lib/stores/notes.ts` | données, localStorage 'notes-4-state' | | N0 (notes.ts : 01c4a094) | HEAD | hors design |
| Layout | `src/routes/+layout.svelte` | importe base.css, enregistre le service worker | | N1 (service worker) | HEAD | |
