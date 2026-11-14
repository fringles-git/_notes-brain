Source : notes-svelte, commits lus : 4, plage : 2026-10-22 à 2026-10-22

Références : S1 = notes-svelte@2923c47d 2026-10-22, S2 = notes-svelte@112ae9d8 2026-10-22, S3 = notes-svelte@96889f8d 2026-10-22 (HEAD). Framework : Svelte 5 (runes $state, $props, $derived, $bindable). Note : les contenus de `+layout.svelte` (écrans de l'app) et de `+page.svelte` (import tokens, thème) semblent échangés par rapport aux noms usuels.

| composant | fichier | rôle | variantes / props visibles | première apparition | dernier état | notes |
|---|---|---|---|---|---|---|
| App shell (4 écrans : Notes, Bibliothèque, Recherche, Réglages) | `src/routes/+layout.svelte` | tout l'UI | écran par `activeTab` | S1 | HEAD | 639 lignes ; .screen-header avec .eyebrow + h1 ; .card-surface |
| Éditeur (carte) | +layout.svelte | titre (max 80), corps, tags suggérés, pied (mots, date), barre d'outils | .editor-card ; barre : Bold, CheckCheck, Pin, Palette | S1 | HEAD | |
| Suggestions de tags (.tag-chip) | +layout.svelte | puces #Daily #Work #Ideas #Personal #Inbox #Travel #Shopping | | S1 | HEAD | |
| Bouton Enregistrer (.save-button) | +layout.svelte | sauvegarde | pilule | S1 | HEAD | |
| États vides (.empty-state) | +layout.svelte | bibliothèque (NotebookText) et recherche (Sparkles) | | S1 | HEAD | |
| Champ de recherche (.search-field) | +layout.svelte | filtre titre/corps/tags | | S1 | HEAD | |
| Sélecteur de thème (.theme-switcher, .theme-option) | +layout.svelte | Système / Clair / Sombre | .active = --highlight | S1 | HEAD | |
| Carte info Réglages (Version "Quick Notes v0.1", Stockage "IndexedDB") | +layout.svelte | | | S1 | HEAD | |
| NoteCard | `src/lib/components/NoteCard.svelte` | carte de note | props note, selected, onSelect, onTogglePin, onArchive, onDelete ; couleurs amber/sage/slate/rose ; badge "Épinglée" ; tags ; pied date + Active/Archivée | S1 | HEAD | |
| Barre d'onglets + bouton + + menu rapide | `QuickActionMenu.svelte` (S1) puis `BottomNavigation.svelte` (S3) | navigation basse | props activeTab (bindable), onCreate ; menu : Note rapide, To-do, Liste (appui long 450 ms) | S1 (nom QuickActionMenu.svelte, non importé) ; S3 (BottomNavigation.svelte, importé) | HEAD (BottomNavigation.svelte) ; QuickActionMenu.svelte reste à HEAD comme doublon inutilisé | |
| Magasin de thème | `src/lib/stores/theme.ts` | system/light/dark, clé localStorage 'quick-notes-theme', attribut data-theme sur html | | S1 | HEAD | |
| Jetons | `src/lib/styles/tokens.css` | voir colors.md | | S1 | HEAD | |
