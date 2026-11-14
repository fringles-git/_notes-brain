# Composants UI : inventaire entre toutes les versions

Portée : composants et familles de composants de l'interface (navigation, surfaces superposées, notes, éditeur, pages, Réglages, primitives, boutons) des 10 versions E0 à E9. Inventaire seulement : aucune recommandation, aucune décision visuelle. Sources : `design/<repo>/components.md` (9 dépôts, 620 lignes), `design-final/LINEAGE.md`.

## 1. Colonnes et légende

| Colonne | Version | Dépôt (branche) | Période |
|---|---|---|---|
| E0 | Notes 2.x et 26.10.9 à 26.10.15 | `notes-v3` (branche `notes-site`, aussi dans `brandonlazarre`) | 2026-10-09 à 2026-10-15 |
| E1 | Notes v3 (source) | `notes-v3` (`main`) | 2026-10-18 à 2026-10-31 |
| E2 | notepad-pwa | `notepad-pwa` | 2026-10-20 à 2026-11-10 |
| E3 | Notes 4 | `notes-4` | 2026-10-21 à 2026-11-09 |
| E4 | Notes v5 | `notes-v5` | 2026-10-21 à 2026-11-11 |
| E5 | Quick Notes | `notes-svelte` | 2026-10-22 |
| E6 | Notes v6 « Mind Space » | `notes-v6` (4 branches non fusionnées incluses, marquées « non fusionné ») | 2026-10-28 à 2026-11-02 |
| E7 | AI Studio | `notes-aistudio` | 2026-10-31 à 2026-11-06 |
| E8 | MindSpace (ancien) | `mindspace-old` | 2026-11-02 à 2026-11-12 |
| E9 | mindspace-core | `mindspace-core` | 2026-11-10 à 2026-11-12 |

Séparation E0 / E1 pour `notes-v3` : E0 = builds `notes-site` (2026-10-09 à 2026-10-15, bundle minifié : composants connus seulement par leurs classes CSS) ; E1 = source (premier commit `notes-v3@4da62555` 2026-10-18). E7 partage l'arbre `src` d'E1 à son premier commit.

Légende des cellules
- `valeur` : nom du composant (ou de la classe CSS) dans cette version, avec entre parenthèses une courte note de variante ou de props visibles quand elle diffère.
- `=` : identique à la dernière valeur affichée à gauche sur la même ligne (colonnes `—` ignorées). `= En` : identique à la valeur de la colonne En, quand la dernière valeur affichée à gauche est différente.
- `A → B` : changé pendant cette version (références en section 3). Dans une cellule, une flèche suit l'ordre chronologique.
- `—` : absent de cette version, ou non mentionné par l'entrée (voir section 6, points 9 à 12) ; un texte entre parenthèses après `—` précise le cas.
- `✗ <réf>` : supprimé dans cette version.
- `@sha8` dans une cellule = commit du dépôt de la colonne (E0 et E1 : `notes-v3`, E2 : `notepad-pwa`, E3 : `notes-4`, E4 : `notes-v5`, E5 : `notes-svelte`, E6 : `notes-v6`, E7 : `notes-aistudio`, E8 : `mindspace-old`, E9 : `mindspace-core`). Dates en section 3 ou 4.
- Colonne `alias` : autres noms du même rôle (même rôle sous deux noms = une seule ligne). Un élément du même nom mais de rôle différent n'est pas fusionné.
- `non fusionné` : commit présent seulement sur une branche qui n'est pas dans `main`.

## 2. Matrice

Familles, dans l'ordre : navigation et barres ; surfaces superposées ; notes (liste, cartes, recherche) ; éditeur ; pages et destinations ; réglages et journal ; primitives et boutons ; modules propres à notepad-pwa ; accessibilité.

| famille | élément | alias | E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Navigation et barres | Barre de navigation basse (Dock) | `BottomNavigation` (E5), `MainDock`, `.main-dock`, `.mobile-dock`, `#nav-island` | `.dock` | `Dock`, `MainDock` | — | `Dock` (libellés anglais → français ; aria-label « Main navigation » → « Navigation principale ») | `Dock`, `MainDock` (`#nav-island` ; 4 onglets → 5 onglets → 4 onglets) | `QuickActionMenu` (non importé) → `BottomNavigation` (importé) | `.mobile-dock` (5 emplacements, grille 5 colonnes dès @34172c2a) | `Dock` (île 4 destinations → bi-îlot → île de 5 destinations) | Dock bas mobile (Notes / Créer / Tâches ; masqué quand une note est ouverte) | `Dock` (`nav.ms-dock`, 3 onglets ; `ms-glass` → surface + bordure) |
| Navigation et barres | Onglet de dock | `.tab-btn`, `Tab`, `.dock-item` | — | `.tab-btn` | — | `.dock-item` (actif : fond `--bg-elevated`) | pouce glissant de `#nav-island` | — | — | `Tab` (`tab-btn`, curseur glissant `--i`, `--n`) | — | onglet (`aria-current='page'`) |
| Navigation et barres | Classes de navigation propres à la lignée notes-site | `.nav-bar`, `.nav-tab`, `.float-bar` | `.nav-bar`, `.nav-tab` (@ea104c22) ; `.float-bar` (@b6647a04) ; absents de la source | — | — | — | — | — | — | — | — | — |
| Navigation et barres | Bouton « + » de création (FAB) | `Fab`, `.fab`, `.ms-fab`, `.dock-create` | `.fab` (@ea104c22) | `Fab` (appui long / glisser depuis +, @e15376fa ; `aria-keyshortcuts="N"`, @90cbc970 ; rôle de l'appui simple : section 6) | — | `.fab` « + » (`Dock.svelte`, événement `create`) | `Fab` (`.fab` `is-xl` 58 px ; presser-glisser-relâcher ; masqué en édition `body.is-editing` dès @32e9bd9e) | « + » de `BottomNavigation` (prop `onCreate`) + menu rapide en appui long 450 ms (Note rapide, To-do, Liste) | `.dock-create` | `Fab` (`fab` → `fab fab-add` ; presser-glisser-relâcher) | entrée « Créer » du rail et du dock | `.ms-fab` « + » (sans fond → ambre ; anti double appui `creating`) |
| Navigation et barres | Îlot de création | `.create-island` | `.create-island` → ✗ @ea104c22 | — | — | — | — | — | — | — | — | — |
| Navigation et barres | Tuile de création | `.create-tile`, `.tile` | `.create-tile` (@ea104c22 ; absente de la source) | `.tile` | — | — | `.tile` (tuiles du panneau Créer) | — | — | — | — | — |
| Navigation et barres | Rail latéral (barre latérale) | `Sidebar`, `.nav-rail` | — | — | — | — | `.nav-rail` (rail ≥ 48 em, @f1b51602) | — | `Sidebar` (+ `.nav-count`, `.privacy-card` ; rail 72 px dès @c80dbb09) | — | Rail repliable (`ms-rail-collapse` ; Notes, Tâches, Créer, Paramètres) | — |
| Navigation et barres | Marque de l'app | `.brand-row`, `.brand-mark` | — | — | `.brand-row` (`.brand-mark` « N », h1 « Notepad » ; small « Offline & private » → « Offline · private ») | — | — | — | `.brand-mark` (carré ambre 38 px → 44 px) | — | — | — |
| Navigation et barres | Îlot flottant | `.island` | `.island` | = | — | — | `.island` (îlot en verre : dock, barre d'outils d'en-tête) | — | — | — | — | — |
| Navigation et barres | Barre du haut / en-tête de page | `.topbar`, `Header`, `HeaderTools`, `.header-tools`, `.screen-header` | `.header-tools` | `Header`, `HeaderTools` (îlot du haut : recherche, filtre et tri, apparence, @2c7478e4) | `.topbar` (thème, plein écran, fenêtre flottante, Download, Install) | topbar de `+page.svelte` (titre, Clair/Sombre, Nouveau) | `Header` (titre de page et outils ; contextuel dès @f1b51602) | `.screen-header` (`.eyebrow` + h1) | — | = E1 | — | — |
| Navigation et barres | Barre d'information sous le titre | `InfoBar` | — | `InfoBar` | — | — | `InfoBar` (filtres actifs) | — | — | = E1 | — | — |
| Surfaces superposées | Feuille du bas | `.sheet`, `SheetHost`, `Sheets.tsx` | `.sheet` | `.sheet`, `SheetHost` | — | — | `SheetHost` (`.sheet`, `.sheet.glass` ; feuille du bas ou tiroir latéral) | — | — (BR4 non fusionné : feuille Filtres, @7f351420) | `Sheets.tsx` (modes : voir ligne Calque) | — | — |
| Surfaces superposées | Calque (menu ancré, panneau) | `Layer`, `LayerHost`, `.layer` | — | `Layer`, `LayerHost`, `.layer` (props `anchor` @801d11fb, `drawer` @ba6e7b28, `inspector` @ef23bea4 ; scrim `data-light`) | — | — | `Layer`, `LayerHost` (props `anchor`, `drawer`, `inspector` ; focus piégé) | — | — | `Layer` (kit.tsx ; modes create, filter, appearance, sketch, qr-show, qr-scan, sort, list-more, profile-menu) | — | — |
| Surfaces superposées | Voile derrière une surface | `.scrim` | — | `.scrim` (@4da62555) | — | — | `.scrim` | — | — | — | voile `bg-black/75` (dialogue de `DataManagementPanel`) | — |
| Surfaces superposées | Popover et menu | `.popover`, `.menu` | `.popover`, `.menu` (absents de la source) | — | — | — | — | — | — | — | — | — |
| Surfaces superposées | Panneau latéral (tiroir) | `drawer`, `data-drawer` | — | `Layer drawer` (@ba6e7b28) | — | — | `data-drawer` + tiroir latéral `.sheet` | — | — | — | tiroir mobile des Paramètres → tiroir modal `inert` | — |
| Surfaces superposées | Inspecteur non modal | `Layer inspector`, `.panel-close` | — | `Layer inspector` (sans voile, ✕, @ef23bea4 ; `.panel-close`) | — | — | `data-inspector` (History, Outline) | — | — | — | — | — |
| Surfaces superposées | Dialogue de confirmation | `ConfirmDialog`, `.ms-confirm-dialog`, `.ms-danger-action` | — | — | — | — | — (shadcn `alert-dialog` non utilisé) | — | suppression avec confirmation dans `NoteEditor` (`<dialog>`) | — | Boîte de confirmation (`.ms-confirm-dialog`, `.ms-danger-action`) ; dialogue « Suppression définitive » (saisie SUPPRIMER) | `ConfirmDialog` (`<dialog>` natif modal ; props `title`, `children`, `confirmLabel`, `onConfirm`, `onCancel` → + `alternative` → + `danger`) |
| Surfaces superposées | Piège de focus des dialogues | `useDialogFocusTrap` | — | — | — | — | — | — | — | — | `useDialogFocusTrap` (verrou de défilement, restitution du focus) | — (focus piégé par le `<dialog>` natif de `ConfirmDialog`) |
| Surfaces superposées | Message transitoire (toast) | `Toast`, `.toast`, `#toast` | `.toast` | `Toast`, `.toast` | `#toast` (`aria-live` polite, `.show`) | — | `Toast` (en haut de l'écran) | — | `.toast` | — | — | — |
| Surfaces superposées | Indice de tirer pour rafraîchir | `.pull-hint` | `.pull-hint` | = | — | — | — | — | — | — | — | — |
| Surfaces superposées | Surface de verre | `.glass`, `.ms-glass` | — | — | — | — | `.glass` (flou saturé, liseré, reflet) | — | — | — | — | `.ms-glass` → ✗ @5469a8ab |
| Surfaces superposées | Bannière de rappel de sauvegarde | `BackupReminder`, `aside.ms-reminder` | — | — | — | — | — | — | — | — | — | `BackupReminder` (boutons « Sauvegarder » et « Plus tard » ; 14 jours) |
| Surfaces superposées | Bannière d'échec de stockage | `.storage-alert` | — | — | — | — | `.storage-alert` (persistante, @e32924bc) | — | — | — | — | — (état « erreur de stockage » dans `NotesList`) |
| Surfaces superposées | Limite d'erreur de chargement | `LoadBoundary` | — | — | — | — | — | — | — | — | — | `LoadBoundary` (`role="alert"`, bouton « Recharger ») |
| Surfaces superposées | Squelette et attente de chargement | `LoadingSkeleton`, `Suspense` | — | — | — | — | — | — | `LoadingSkeleton` (liste, panneau, éditeur) | — | — | `Suspense` « Chargement… » |
| Surfaces superposées | Invitation à installer l'app | `IosInstall`, `InstallPrompt`, `usePwaInstall`, `#install-btn` | — | `IosInstall` | `#install-btn` (« Install » → « Install app ») | — | `IosInstall` | — | `InstallPrompt` (après 3 notes) | page `install-guide` (Réglages) | bouton Installer + consignes iOS Safari (`usePwaInstall`, `.settings-install-cta`) | — |
| Notes (liste, cartes, recherche) | Liste de notes (conteneur) | `NoteList`, `NotesList`, `NoteLibrary`, `#note-list`, `ul.ms-notes` | — | `NoteList` | `#note-list` (panneau `.note-manager` avec recherche) | liste de `+page.svelte` | `NoteList` (`.note-list`, `.cards` maçonnerie, `.is-compact`) | — | `NoteLibrary` (cartes, filtres, tri, réordonnancement) | `NoteList` (cartes ou liste compacte ; bouton bascule dès @d2819fcc) | liste inline de `App.tsx` | `NotesList` (`ul.ms-notes` ; vue factice → éditeur anonyme → note la plus récente → liste Dexie live) |
| Notes (liste, cartes, recherche) | Carte ou ligne de note | `Card`, `NoteCard`, `.card`, `.note-item`, `.note-card`, `.ms-note-row` | `.card` | `Card` (+ `CardBody`, `CardFooter`) | `.note-item` (`.active`) | `NoteCard` (props note, selected ; pastille dossier, Épingler ; pied date + Épinglée/Brouillon) | `Card` (`.selected`, `.is-open`, `.dragging`, `.swiping`, `data-color`) | `NoteCard` (onSelect, onTogglePin, onArchive, onDelete ; couleurs amber/sage/slate/rose ; badge Épinglée) | `.note-card` | cartes de `List.tsx` | — | `.ms-note-row` (bouton, carte 16 px ; variante `--select` ; titre dérivé dès @ff39bfd6) |
| Notes (liste, cartes, recherche) | Progression de carte | `.card-progress` | `.card-progress` → ✗ @ea104c22 | `.card-progress` (recréée @a5bd51cb) | — | — | — | — | — | — | — | — |
| Notes (liste, cartes, recherche) | Poignée et icône de geste de carte | `.card-grip`, `.swipe-icon` | `.card-grip`, `.swipe-icon` | = | — | — | — (`.swiping` de `Card`) | — | — | — | — | — |
| Notes (liste, cartes, recherche) | Média et onde de carte | `CardMedia`, `Wave`, `.card-media`, `.card-wave` | — | `CardMedia`, `Wave` | — | — | = (`.card-media`, `.card-wave`) | — | — | — | — | — |
| Notes (liste, cartes, recherche) | Actions au survol de la souris | `QuickActions`, `.card-actions` | — | `QuickActions` (3 actions, @35c0380c) | — | — | `QuickActions` (`.card-actions`) | — | — | — | — | — |
| Notes (liste, cartes, recherche) | État vide | `Empty`, `.empty-state` | — | `Empty` | — | — | `Empty` | `.empty-state` (NotebookText, Sparkles) | « Ta première note t'attend » (BR3 non fusionné) | = E1 | — | texte « Aucune note pour l'instant. Créez-en une ! » dans `NotesList` |
| Notes (liste, cartes, recherche) | Invitation du premier lancement | `FirstUse` | — | `FirstUse` (@35c0380c ; sans notes d'exemple) | — | — | `FirstUse` (`.first-use`, `.first-action`) | — | — | — | — | — |
| Notes (liste, cartes, recherche) | Champ de recherche | `.search-field`, `#note-search`, `.search-box`, `.ms-search` | `.search-field` | = | `#note-search` | `.search-box` | `.search-field` | `.search-field` | — | Dock (barre de recherche) | — | `input.ms-search` (`type="search"`, masqué pendant la sélection) |
| Notes (liste, cartes, recherche) | Recherche dans le dock | `SearchDock` | — | `SearchDock` (statut contradictoire : section 6) | — | — | `SearchDock` (puces Photos, Audio, PDF, Listes, Liens, Dates) | — | — | Dock (barre de recherche) | — | — |
| Notes (liste, cartes, recherche) | Résultats de recherche | `SearchResults`, `.search-result` | — | — | — | `.search-result` | — | — | — | — | — | `SearchResults` (compteur `role="status"`, aperçu, `<mark>`) |
| Notes (liste, cartes, recherche) | Surlignage de recherche | `Highlight`, `<mark>` | — | `Highlight` | — | — | `Highlight` (`findSearchRanges` dès @f261f690) | — | — | = E1 | — | `<mark>` dans les résultats |
| Notes (liste, cartes, recherche) | Tri et filtres | `Sort`, `Filter`, `Filters`, `ViewOptions` | — | `Sort` + `Filter` → `Filter` seul (tri et filtre fusionnés, @2c7478e4) | — | — | `Sort` (+ Titre dès @1c1fb148), `Filters` (@32e9bd9e), `ViewOptions` (@f1b51602) | — | dans `NoteLibrary` (BR4 non fusionné : feuille Filtres) | modes `filter`, `sort` de `Layer` | — | — |
| Notes (liste, cartes, recherche) | Barre de sélection multiple | `SelectionDock`, `.sel-count`, `.ms-selectbar` | — | `SelectionDock` (compact) | — | — | `SelectionDock` (compteur `.sel-count`) | — | — | Dock (barre de sélection) | — | `.ms-selectbar` (« N notes sélectionnées », case native `.ms-note-row__check`) |
| Notes (liste, cartes, recherche) | Barre d'enregistrement vocal | `RecordingBar`, `.rec-bar`, `.rec-dot` | — | `RecordingBar` (`.rec-bar`, @4da62555) | — | — | `RecordingBar` (`.rec-dot`) | — | — | Dock (barre d'enregistrement) | — | — |
| Notes (liste, cartes, recherche) | Menu d'une note | `NoteMenu`, `NoteTools` | — | `NoteMenu` ; `NoteTools` (lignes Plan, Réviser, Carte des liens) | — | — | `NoteMenu` (réduit à Déplacer, Rappel, Exporter, Supprimer) ; `NoteTools` → ✗ @f1b51602 | — | — | — | menu d'actions de la barre de note | — |
| Notes (liste, cartes, recherche) | Sélecteurs et lignes de menu | `Picker`, `TabRow`, `ListActions`, `SelMore`, `Hint`, `Title` | — | `Picker`, `TabRow`, `ListActions`, `SelMore`, `Hint`, `Title` | — | — | = | — | — | — | — | — |
| Notes (liste, cartes, recherche) | Panneau Créer | `Create` | `.create-tile`, `.create-island` (voir lignes dédiées) | `Create` (Note, Vocal, Importer) | — | — | `Create` (Importer, Vocal, Note ; panneau bas sur mobile) | menu rapide du « + » (Note rapide, To-do, Liste) | — | mode `create` de `Layer` | — | — |
| Notes (liste, cartes, recherche) | Rappel et code PIN | `Remind`, `Pin` | — | `Remind`, `Pin` | — | — | `Remind`, `Pin` (saisie du code PIN) | — | rappel dans `NoteDetails` | — | — | — |
| Éditeur | Écran d'édition de note | `Editor`, `NoteEditor`, `.editor`, `.editor-card` | `.editor` | `Editor` | `.editor-header` + `textarea #editor` (placeholder « Start writing here... » → « Start typing here... ») | éditeur de `+page.svelte` | `Editor` (source texte → + éditeur visuel Tiptap `RichEditor` dès @32e9bd9e) | carte `.editor-card` (titre max 80, corps, tags suggérés, pied) | `NoteEditor` (`<dialog>`, mode papier Literata) | `Editor` (police et largeur @d2819fcc ; bloc Propriétés @6fc4b9d7) | textarea → `NoteEditor` (BlockNote) → `Editor` (Tiptap + Yjs) | `NoteEditor` (Tiptap relié au Y.Doc ; `NoteBody`, `NoteSurface`, `TitleField`) |
| Éditeur | Champ de titre de note | `#note-title`, `TitleField`, `.ms-title` | — | — | `.editor-header #note-title` | — | — | titre (max 80) | — | — | — | `TitleField` (`input.ms-title`, enregistré à 300 ms) |
| Éditeur | Barre d'outils de mise en forme | `FormatStrip`, `.format-strip`, `EditorToolbar` | `.format-strip` | `FormatStrip` | — | — | `FormatStrip` (« Aa », dans l'île du bas de l'éditeur) | barre Bold, CheckCheck, Pin, Palette | `MarkdownEditor` (Gras, Italique, Code, Titre, Liste, Aperçu) | — | `EditorToolbar` (barre haute sticky → dock bas extensible + bulle de sélection) | `EditorToolbar` (7 outils ; `ms-glass` → surface + bordure) |
| Éditeur | Menu d'insertion « / » | `SlashMenu` | — | — | — | — | — | — | — | — | `SlashMenu` (« Insérer un bloc ») | — |
| Éditeur | Barre d'actions de la note | `Barre de note`, `.ms-note__bar`, `.ms-back` | — | — | — | — | — | — | — | — | Barre de note (retour, annuler, rétablir, historique désactivé, épingler, masquer, menu) | `button.ms-back` « ‹ Notes » + « Supprimer » (`.ms-note__bar`) |
| Éditeur | Outils sous le titre | `Tools`, `.note-tools` | — | `Tools` (`.note-tools`, @a5bd51cb) | — | — | `Tools` | — | — | — | — | — |
| Éditeur | Inspecteurs de note | `Outline`, `History`, `LinkMap` | — | `Outline`, `History`, `LinkMap` | — | — | = | — | — | — | Historique (désactivé) dans la barre de note | — |
| Éditeur | Statut d'enregistrement | `SaveStatus` | — | `SaveStatus` | — | — | `SaveStatus` (`.save-status[data-status]`) | `.save-button` (pilule) | — | — | « Saved locally » (@47287b6f) | — |
| Éditeur | Pièces jointes | `Attachments`, `FileInputs`, `Files` | — | `Attachments`, `FileInputs` | — | — | = | — | pièces jointes dans `NoteDetails` | `Files` | — | — |
| Éditeur | Lecteur audio | `Player` | — | `Player` | — | — | `Player` (`.player`, `.seek`, `.wave`) | — | — | — | — | — |
| Éditeur | Éléments trouvés dans la note | `Found` | — | `Found` | — | — | = | — | — | — | — | — |
| Éditeur | Texte vivant (OCR) | `LiveText` | — | `LiveText` (@e15376fa) | — | — | `LiveText` | — | — | — | — | — |
| Éditeur | Tableaux | `TablePanel`, `TableEditor`, `TableView`, `LegacyTable`, `.tbl` | — | `TablePanel`, `TableEditor`, `TableView` (`.tbl`, @9e7d5dd7) | — | — | `LegacyTable` (`.legacy-table`) + tableaux Tiptap | — | — | `Table` | `TableKit` (Tiptap) + bouton Tableau de la barre d'outils | — |
| Éditeur | Modèles de note | `Templates`, `Starters`, `TemplateLibrary`, `.starters` | — | `Templates` → ✗ @4a4da608 ; `.starters` (@4a4da608) ; `Starters` (@d84b552a) | — | — | — | — | `TemplateLibrary` (@aeec85c1) | modèles dans `QuickCapture` | — | — |
| Éditeur | Propriétés de note | `NoteMetadata`, `Metadata`, `NoteDetails`, `WorkflowActions` | — | — | — | — | `NoteMetadata` (`.note-properties`, `.metadata-fields`) | — | `NoteDetails` (dossier, tags, rappel, pièces jointes) ; `WorkflowActions` (@aeec85c1) | `Metadata` (`<details class="note-metadata">`, @6fc4b9d7) | — | — |
| Éditeur | Capture rapide | `QuickCapture` | — | — | — | — | `Today` (actions de capture) | — | `QuickCapture` (@c2701fc1) | `QuickCapture` → ✗ @6dbe9114 (montage) puis @6fc4b9d7 (CSS) | `QuickCapture` (repliée ; chevron, bouton ambre) | — |
| Éditeur | Dessin à main levée | `Sketch` | — | — | — | — | `Sketch` (stylo, surligneur, gomme, annuler/rétablir) | — | — | `Sketch` (6 encres, stylo, surligneur, gomme) | — | — |
| Éditeur | Codes QR | `QrShow`, `QrScan`, `QrTools` | — | — | — | — | `QrShow`, `QrScan` | — | — | `QrTools` (`.qr-scan-box`, `.qr-target-corner`) | — | — |
| Éditeur | Rangement (Ranger) | `Tidy`, `TidyPair`, `NoteTag`, `NoteTasks` | — | `Tidy`, `TidyPair` (`.tidy-pair`), `NoteTag`, `NoteTasks` | — | — | = | — | — | `Tidy` | — | — |
| Éditeur | Conflit de fusion | `Conflict`, `ImportReview` | — | `Conflict` (`.diff-line`, @ce4f8459) ; `ImportReview` (@c3ec060f) | — | — | `Conflict` (`.conflict-diff`) | — | — | `Conflict` | — | — |
| Pages et destinations | Coque de l'app | `App`, `Workspace`, `.app-shell`, `+layout.svelte` | — | — | `.app-shell` (grille 3 colonnes ; `focus-mode` masque les côtés) | `+page.svelte` (topbar, liste, éditeur ; 3 vues pleine largeur dès @6f00cf58) | `App` (charge tokens.css, app.css, looks.css ; pose `data-look`, `data-accent`, `data-theme`) | `+layout.svelte` (4 écrans, 639 lignes) | `+page.svelte` (monolithe) → `Workspace.svelte` (@7598f175) | — | `App` (barre latérale + textarea → rail, liste, éditeur, tâches) | `App` (`div.ms-app` > `main.ms-main` + `Dock`) |
| Pages et destinations | Page des tâches | `Tasks`, `TaskList`, `TaskRows`, `.task-item` | — | `Tasks` (`.task-item`, @2c7478e4) | — | — | `Tasks` (À faire, Aujourd'hui, En retard, Terminées) + `TaskRows` (@f1b51602) | — | `TaskList` (BR5 non fusionné : ajout d'abord, recherche sur demande) | `Tasks` (@6fc4b9d7 : vues À faire, Aujourd'hui, En retard, Terminé) | entrée « Tâches » du rail et du dock | `Tasks` (vue factice « navigation test only ») |
| Pages et destinations | Page Aujourd'hui et résumé du jour | `Today`, `TodayGlanceBar` | — | — | — | — | `Today` (@f1b51602) | — | — | `TodayGlanceBar` (`.today-pill`, `.today-action-chip`) | — | — |
| Pages et destinations | Calendrier (agenda) | `Calendar`, `.calendar-grid` | — | — | — | — | `Calendar` (Mois / Semaine / Liste) | — | — | — | — | — |
| Pages et destinations | Récap et widgets d'accueil | `Recap`, `.recap`, `.widget` | — | `Recap` (`.recap`, `.widget`, @801d11fb) | — | — | `Recap` (teintes par type retirées @6840b25e) | — | — | `Recap` → ✗ @6dbe9114 (montage) | — | — |
| Pages et destinations | Tableau de bord d'accueil | `DashboardOverview` | — | — | — | — | — | — | `DashboardOverview` (héros, carte Capture rapide, métriques ; non monté dès @c80dbb09) | — | — | — |
| Pages et destinations | Bibliothèque | `Library`, `.lib-tile`, `.lib-folder`, `.lib-tag`, `.folder-card` | — | `Library` (`.lib-tile`, `.lib-folder`, `.lib-tag`) | — | `.folder-card`, `.folder-dot` | `Library` (tuiles des types, dossiers, tags, collections) | écran Bibliothèque | — | `Library` (+ section Entités, @6fc4b9d7) | — | — |
| Pages et destinations | Édition de dossier et de collection | `FolderEditRow`, `CollectionEditRow`, `NewFolder`, `.swatch` | — | `FolderEditRow`, `CollectionEditRow`, `NewFolder` (déplacés @d6af8790) | — | — | `FolderEditRow` (`.swatch`), `CollectionEditRow`, `NewFolder` | — | — | — | — | — |
| Pages et destinations | Étiquette de dossier | `FolderTag`, `.folder-chip` | — | `FolderTag`, `.folder-chip` (@ba6e7b28) | — | `.folder-dot` | `FolderTag` | — | — | `FolderTag` | — | — |
| Pages et destinations | Vue d'ensemble et impression | `Overview`, `PrintArea` | — | `Overview`, `PrintArea` | — | — | `Overview`, `PrintArea` (`#print-area`) | — | — | — | — | — |
| Pages et destinations | Étude (révision de cartes) | `Study`, `StudyFoot` | — | `Study`, `StudyFoot` | — | — | = | — | — | — | — | — |
| Pages et destinations | Bienvenue et visite guidée | `Welcome`, `Tour`, `Feature`, `Art`, `.tour-bubble`, `.art-card`, `.about-icon` | `.tour-bubble`, `.art-card`, `.about-icon` | `Welcome`, `Tour`, `Feature`, `Art` | — | — | `Welcome`, `Tour` (`.tour`, `.tour-spot`), `Art` (`.art-card`) | — | onboarding dans `SettingsPanel` | `Welcome` (visite guidée) | — | — |
| Pages et destinations | Aperçu d'un tag (TagPeek) | `TagPeek` | — | `TagPeek` (@c218aba2) | — | — | — | — | — | — | — | — |
| Pages et destinations | Barre de progression | `ProgressBar` | — | — | — | — | — | — | — | `ProgressBar` (@d2819fcc) | — | — |
| Réglages et journal | Réglages (conteneur) | `Settings`, `SettingsPage`, `SettingsPanel`, `SettingsHub`, `SettingsLayout` | — | `Settings` (feuille) → `SettingsPage` (page, `.settings-list`) | — | `.settings-item` (Thème, Langue, Version) | `Settings` (feuille ; `.cols.settings-layout` dès @010eb268) | écran Réglages (`.theme-switcher`, carte info Version / Stockage) | `SettingsPanel` (+ routes `/settings`, `/about`) | `SettingsPage` (7 sections = E1 → réécrit + Profil → + stockage, confidentialité, à propos, pages) | `SettingsHub` → ✗ @7d72e331 → `SettingsLayout` | `Settings` (`h1` + sections ; vue factice → `BackupSection`, `RestoreSection`) |
| Réglages et journal | Sections de Réglages | `Aide`, `Apparence`, `Sauvegarde`, `Synchro` | — | Aide, Apparence, Application, Masquees, Recherche, Sauvegarde (@47c570df), Synchro (@ac5e4bc9) | — | Thème, Langue, Version | — | — | thème, accent, exports, import, sauvegarde chiffrée, journal, onboarding | 7 sections = E1 (apparence, recherche, masquées, sauvegarde, synchro, application, aide) → + stockage, confidentialité, à propos | 9 sections (guide, shortcuts, storage, transfer, wipe, privacy, limits, changelog, credits) → AIDE, APPARENCE, DONNÉES, CONFIDENTIALITÉ, À PROPOS | Sauvegarde, Restauration |
| Réglages et journal | Pages de Réglages (Aide, Données, À propos…) | `AidePage`, `DonneesPage`, `ConfidentialitePage`, `AProposPage`, `AppearancePage`, `WhatsNewPage` | — | — | — | — | — | — | — | pages `news`, `changelog`, `guide`, `shortcuts`, `install-guide`, `credits`, `license` | `SettingsSection` → redirections (@36efbb3a) ; pages canoniques (@3b7f4e80, @96b80602, @4a2205c7, @9f8ab235, @290000c4) | — |
| Réglages et journal | Sélecteur de thème et d'apparence | `Appearance`, `.theme-switcher`, `Segmented` | — | `Appearance` (@2c7478e4) | icône de thème de `.topbar` | Clair/Sombre de la topbar | `Appearance` (Auto / Clair / Sombre ; limité au thème @f1b51602) | `.theme-switcher` (Système / Clair / Sombre) | `.segmented` (thème, accent) + `.accent-picker` | = E1 | `AppearancePage` (thème, navigation iPad) | — |
| Réglages et journal | Profil et avatar | `Profile`, `Avatar-chip` | — | — | — | — | `Profile` (@32e9bd9e) + `Personalization` (@1c1fb148) | — | — | `Avatar-chip` (initiales ou image, @d2819fcc) | — | — |
| Réglages et journal | Sauvegarde chiffrée | `BackupCode`, `PortableBackup`, `EncryptedBackup`, `BackupSection` | — | `BackupCode` (@a5c92dad) | — | — | `PortableBackup` (@ad395f46) | — | `EncryptedBackup` (AES-GCM) | = E1 | `DataManagementPanel` (export/import JSON, effacement) | `BackupSection` (bouton « Sauvegarder mes notes (chiffré) », `.ms-warning`) |
| Réglages et journal | Phrase de récupération | `BackupPhrase`, `BackupUnlock`, `SyncPhrase`, `RecoveryPhrase` | — | `BackupPhrase`, `BackupUnlock` (@40209be2), `SyncPhrase` (@ac5e4bc9) | — | — | — | — | champ de phrase avec Eye / EyeOff (BR5 non fusionné) | = E1 | — | `RecoveryPhrase` (`.ms-phrase-box`, masquée par défaut) |
| Réglages et journal | Restauration et import | `Import`, `ImportReview`, `RestoreSection` | — | `Import`, `ImportReview` | — | — | `Import` | — | import dans `SettingsPanel` | = E1 | `DataManagementPanel` (onglet transfer) | `RestoreSection` (aperçu `.ms-card` ; question d'adoption inline → `ConfirmDialog`) |
| Réglages et journal | Synchronisation par dossier | `Synchro`, `FolderSync` | — | `Synchro` (@ac5e4bc9) | — | — | `FolderSync` (`.folder-sync`) | — | — | = E1 | — | — |
| Réglages et journal | Snapshots techniques | `SnapshotTools`, `.snapshots-panel` | — | — | `.snapshots-panel` (`.snapshot-item`) | — | `SnapshotTools` (@8ef0b652) | — | — | — | — | — |
| Réglages et journal | Aide raccourcis clavier | `.kbd`, `.keyboard-panel`, `shortcuts` | — | `.kbd` (@35c0380c) | `.keyboard-panel` (`kbd` ; libellés « dark mode / focus mode / download » → « theme / focus / export PDF ») | — | — | — | — | page `shortcuts` | section `shortcuts` (SettingsHub) | — |
| Réglages et journal | Guide, Quoi de neuf, À propos | `Guide`, `News`, `About` | — | `Guide`, `News`, `About` (Sheets.tsx → Changelog.tsx @66b9f4b6) | — | — | `Guide`, `News`, `About` (Sheets.tsx @b1f17318 ; Changelog.tsx @1af74e0e) | — | — | pages `news`, `guide` | `WhatsNewPage`, `AidePage`, `AProposPage` | — |
| Réglages et journal | Journal des versions (timeline) | `Timeline`, `Changes`, `ChangeGroup`, `ChangelogTimeline`, `Changelog`, `.timeline`, `.release` | `.timeline`, `.release` (@b99f70fc) | `Timeline`, `Changes`, `ChangeGroup` (Sheets.tsx → Changelog.tsx @66b9f4b6) | — | — | `Timeline`, `Changes`, `ChangeGroup` (Sheets.tsx @b1f17318 → Changelog.tsx @1af74e0e) | — | — | `Changelog` (filtres, recherche, héros) | `ChangelogTimeline` (rail, cartes, filtres ; bascule technique @98fc56bf) | — |
| Réglages et journal | Feuille de style du journal | `changelog.css` | — | — | — | — | — | — | — | — | `changelog.css` (340 lignes, rail 136 px, nœud 44 px) → ✗ @7e3da2f4 | — |
| Réglages et journal | Pastilles de version et de type de changement | `.change-pill`, `.version-pill`, `StateMark`, `ReleaseTags`, `VersionChip` | `.change-pill`, `.version-pill` (@b99f70fc) | `StateMark` (`.state-mark`, @d6af8790) | — | — | `StateMark` (`.state-mark[data-kind]`) | — | — | = E1 | `ReleasePrimitives` (`ReleaseTags`, `VersionChip`, icônes Sparkles/TrendingUp/Wrench) | — |
| Réglages et journal | Détail d'une version | `ReleaseDetail`, `ReleasePage`, `LegacyReleaseRedirect` | — | — | — | — | — | — | — | — | `ReleaseDetail` (@3dbf30e9) → ✗ @c4f3770f → `ReleasePage` ; `LegacyReleaseRedirect` (@a6e6f6f6) | — |
| Primitives et boutons | Bouton (primitive) | `Button`, `.ctl`, `.ms-button`, `.primary-button`, `.small-button`, `.save-button`, `Btn` | — | `Btn` (Sheets.tsx) | `.small-button` (`.ghost`, `.primary`) | `Button` (primary / ghost / danger ; `compact`) | `.ctl` (4 tailles 34/44/48/58 ; surfaces fill, fill-strong, line, ink, accent, glass ; encres link, muted, faint, danger, armed ; `has-dot`) | `.save-button` (pilule) | `.primary-button` (ambre), `.outline-button` | — | `Button` de `MindSpaceUI` (primary / secondary / ghost / destructive ; jamais importé) | `.ms-button` (pilule 2 px ; `--danger`) |
| Primitives et boutons | Bouton icône | `.icon-btn`, `.icon-button`, `.bare-icon`, `.ms-button--icon` | `.icon-btn` | = | `.icon-button` | — | `.icon-btn` → ✗ @2466c955 (remplacé par `.ctl`) | — | `.icon-button`, `.bare-icon` | — | icônes seules (barre de note) | `.ms-button--icon` |
| Primitives et boutons | Pastille (chip) | `Chip`, `.chip`, `.tag-chip` | — | `Chip` (`data-tone`, `aria-pressed`, zone 44 px @369fe07a) | — | — | `Chip` (`.chip` → ✗ @2466c955 ; section 6) | `.tag-chip` (#Daily, #Work, #Ideas, #Personal, #Inbox, #Travel, #Shopping) | `.chip` | = E1 | — | — |
| Primitives et boutons | Sélecteur segmenté | `Segmented`, `.segmented`, `.seg-thumb` | `.segmented` | `Segmented` (`.seg-thumb`, @801d11fb) | — | — | `Segmented` (prefs view, look, accent, theme, hand, tint, sort, dir) | — | `.segmented` (thème, accent) | `Segmented` (prefs) | — | — |
| Primitives et boutons | Interrupteur | `Switch`, `.switch` | — | `Switch` (coulissant → carré ÷3 ✓/−, @d6af8790) | — | — | `Switch` (case carrée coche/tiret) | — | — | = E1 | — | — |
| Primitives et boutons | Ligne et option de menu | `Row`, `Option`, `.row`, `.option` | — | `Row`, `Option` | — | — | `Row` (props icon, label, trailing, pressed, color), `Option` (`aria-pressed`) | — | — | `Row`, `Option` (radios) | — | — |
| Primitives et boutons | Section de feuille | `Section` | — | `Section` (Sheets.tsx → kit.tsx @66b9f4b6) | — | — | `Section` (Sheets.tsx → ✗ @1af74e0e ; kit.tsx @1af74e0e) | — | — | `Section` | — | `.ms-section` |
| Primitives et boutons | Formulaire en ligne et champ | `InlineForm`, `TextField`, `.ms-field`, `.ms-form` | — | `InlineForm` | — | — | `InlineForm` (`.inline-form`) | — | — | = E1 | `TextField` (de `MindSpaceUI`) | `.ms-field`, `.ms-form` |
| Primitives et boutons | Texte formaté | `Formatted`, `Inline`, `Tagged` | — | `Formatted`, `Inline`, `Tagged` | — | — | = | — | — | `Formatted`, `Inline` | — | — |
| Primitives et boutons | Badge | `.badge`, `Badge` | `.badge` | = | — | — | — (shadcn `badge` non utilisé) | — | — | — | `Badge` (neutral, new, better, fix ; `MindSpaceUI`, jamais importé) | — |
| Primitives et boutons | Carte générique | `.card-surface`, `Card`, `.ms-card` | — | — | — | — | — | `.card-surface` | — | — | `Card` (`MindSpaceUI`) | `.ms-card` |
| Primitives et boutons | Classes utilitaires de composants | `.ms-*` | — | — | — | — | — | — | — | — | — | `.ms-section`, `.ms-hint`, `.ms-actions`, `.ms-sr-only` (@0a15c7ce) ; `.ms-card`, `.ms-field`, `.ms-button--icon`, `.ms-form` (@4381e483) ; `.ms-button--danger` (@e64c019e) |
| Primitives et boutons | Primitives typées | `MindSpaceUI` | — | — | — | — | — | — | — | — | `MindSpaceUI` (Button, Card, Badge, TextField ; @64878213 ; jamais importé) | — |
| Primitives et boutons | Composants shadcn/ui | `src/components/ui/*` | — | — | — | — | 47 fichiers (46 composants + `use-mobile`), non utilisés | — | — | — | shadcn utilisé par BlockNote (`NoteEditor`) | — |
| Primitives et boutons | Teintes par type | `[data-tone]` | — | `Chip` (`data-tone`) | — | — | `[data-tone]` (9 tons système puis accent/danger) | — | — | — | — | — |
| Primitives et boutons | Fond d'ambiance | `.ambient` | — | — | — | — | `.ambient` (trois taches floues) | — | — | — | — | — |
| Modules propres à notepad-pwa | Statistiques d'écriture | `.stats-panel` | — | — | `.panel .stats-panel` (div → section) | — | — | — | — | — | — | — |
| Modules propres à notepad-pwa | Mode focus | `#toggle-focus`, `focus-mode` | — | — | bouton Focus (`.small-button .ghost`) | — | — | — | — | — | — | — |
| Modules propres à notepad-pwa | Minuteur d'écriture | `.timer-panel` | — | — | `.timer-panel` (Start/Pause/Reset, Break reminder, Typewriter sound) | — | — | — | — | — | — | — |
| Modules propres à notepad-pwa | Sons d'ambiance | `#ambient-list` | — | — | 25 noms dans `ambientPatterns` (`.ambient-item`, `.slider-wrap`) | — | — | — | — | — | — | — |
| Modules propres à notepad-pwa | Panneau d'export | `.tools-panel` | — | — | `.tools-panel` (Save now, Export .txt/.html/.pdf/.docx) | — | — | — | — | — | — | — |
| Accessibilité | Focus principal | `main.ms-main` | — | — | — | — | — | — | — | — | — | `main.ms-main` (`tabIndex=-1`, focus à chaque changement de vue) |
| Accessibilité | Mode contraste forcé | `forced-colors` | — | — | — | — | — | — | — | — | — | `@media (forced-colors: active)` (bordures `CanvasText`, sélection `Highlight`) |
| Accessibilité | Icône de composant | `Icon`, `TrashIcon` | — | `Icon` | — | — | — (non listé) | — | — | = E1 | — | `TrashIcon` |

## 3. Détail des changements

Format : `valeur — première apparition réf — dernier état réf — raison`. Une entrée par élément dont la valeur a changé ou qui a été supprimé (les ajouts de propriétés sans retrait de valeur ne sont repris que lorsqu'ils modifient le nom ou le rôle). Sigles résolus : E2 A = notepad-pwa@3c6f6152 2026-10-20, B = @576a8c9d, C = @76dfefe5, D = @a488cc67 ; E3 N0 = notes-4@94f8e515, N1 = @28ad8ce4, N2 = @6f00cf58, N3 = @854f07b5, N4 = @8150588e (tous 2026-10-22) ; E5 S1 = notes-svelte@2923c47d, S2 = @112ae9d8, S3 = @96889f8d (tous 2026-10-22) ; E6 V0 = notes-v6@57c25ea2 2026-10-28, V1 = @1bae3e15 2026-10-28, V2 = @34172c2a 2026-10-28, V3 = @a0935371 2026-10-29, V5 = @c80dbb09 2026-10-31, V7 = @7598f175 2026-10-31, V9 = @c2701fc1 2026-11-02 ; E7 A0 = notes-aistudio@9021b9bc 2026-10-31, A1 = @d2819fcc 2026-11-02, A2 = @6dbe9114 2026-11-05, A3 = @6fc4b9d7 2026-11-05.

### Navigation et barres

- **Dock E3 (notes-4)**
  - libellés anglais (Library, Search, Settings), aria-label « Main navigation » — notes-4@94f8e515 2026-10-22 (N0) — remplacé en notes-4@28ad8ce4 (N1) — non documentée
  - libellés français, aria-label « Navigation principale » — notes-4@28ad8ce4 2026-10-22 — HEAD (notes-4@8150588e) — non documentée
- **Dock E4 (notes-v5)**
  - 4 onglets Notes, Bibliothèque, Recherche, Réglages — notes-v5@b1f17318 2026-10-21 — remplacé en notes-v5@32e9bd9e — non documentée
  - 5 onglets Accueil, Notes, Tâches, Listes, Calendrier ; `Fab` masqué en édition (`body.is-editing`) — notes-v5@32e9bd9e 2026-11-08 — remplacé en notes-v5@f1b51602 — non documentée
  - 4 onglets Aujourd'hui, Notes, Agenda, Bibliothèque — notes-v5@f1b51602 2026-11-08 — HEAD — non documentée
- **Barre de navigation basse E5 (notes-svelte)**
  - `QuickActionMenu.svelte` (barre d'onglets + « + » + menu rapide, non importé) — notes-svelte@2923c47d 2026-10-22 (S1) — reste à HEAD comme doublon inutilisé — non documentée
  - `BottomNavigation.svelte` (importé) — notes-svelte@96889f8d 2026-10-22 (S3) — HEAD — non documentée
- **Dock et rail E6 (notes-v6)**
  - `.mobile-dock` et `Sidebar` à V0 — notes-v6@57c25ea2 2026-10-28 — HEAD (V9)
  - `.brand-mark` 38 px → 44 px — V0 — notes-v6@1bae3e15 2026-10-28 (V1, commit décrit « contraste ») — non documentée
  - dock : grille 5 colonnes — notes-v6@34172c2a 2026-10-28 (V2) — HEAD — non documentée
  - actif : fond ambre 23 % + marqueur inset 3 px (sidebar), accent-text + marqueur inset 3 px en haut (dock), rail 72 px — notes-v6@c80dbb09 2026-10-31 (V5) — HEAD — non documentée
- **Dock E7 (notes-aistudio)**
  - île de 4 destinations — notes-aistudio@9021b9bc 2026-10-31 — remplacée en notes-aistudio@d2819fcc — non documentée
  - bi-îlot (`nav-pill-main` + `nav-pill-tools`), `Fab` `fab` → `fab fab-add` — notes-aistudio@d2819fcc 2026-11-02 — remplacé en notes-aistudio@6dbe9114 — non documentée
  - île unifiée de 5 destinations — notes-aistudio@6dbe9114 2026-11-05 — HEAD — non documentée
- **Dock E9 (mindspace-core)**
  - `nav.ms-dock ms-glass`, onglet actif ambre — mindspace-core@128050ce 2026-11-10 — remplacé en mindspace-core@5469a8ab — design flat décidé le 2026-11-11 (CLAUDE.md, cité par l'entrée du dépôt)
  - surface + bordure, onglet actif en paire inversée — mindspace-core@5469a8ab 2026-11-11 — HEAD — idem
  - 3 onglets Notes, Tâches, Réglages — mindspace-core@128050ce 2026-11-10 — HEAD de `main` ; 2 onglets Notes et Réglages sur la branche non fusionnée mindspace-core@7dd4d041 2026-11-12 — retrait décidé par le propriétaire (2026-11-12), non fusionné
  - deuxième appui sur Notes = retour à la liste — mindspace-core@8f85ad28 2026-11-10 — HEAD — non documentée
- **Bouton « + » E9** : sans fond — mindspace-core@c74ffb69 2026-11-10 — remplacé en mindspace-core@5469a8ab ; `.ms-fab` ambre — mindspace-core@5469a8ab 2026-11-11 — HEAD — non documentée (même commit que le passage au flat)
- **Bouton « + » E0 → E1** : `.fab` — notes-v3@ea104c22 2026-10-15 — HEAD (même nom en source) ; geste appui long / glisser depuis + — notes-v3@e15376fa 2026-10-19 ; `aria-keyshortcuts="N"` — notes-v3@90cbc970 2026-10-20 — non documentée
- **`.create-island`** : notes-v3@b6647a04 2026-10-09 — supprimé notes-v3@ea104c22 2026-10-15 (même commit : première apparition de `.fab`, `.nav-bar`, `.nav-tab`, `.create-tile`) — non documentée
- **Barre du haut E1 et E4** : `.header-tools` — notes-v3@b6647a04 2026-10-09 ; `HeaderTools` (recherche, filtre et tri, apparence) — notes-v3@2c7478e4 2026-10-31 ; `Header` contextuel — notes-v5@f1b51602 2026-11-08 — non documentée
- **Marque E2** : small « Offline & private » — notepad-pwa@3c6f6152 2026-10-20 (A) — remplacé en notepad-pwa@576a8c9d (B) par « Offline · private » — non documentée

### Surfaces superposées

- **Calque `Layer` E1** : base — notes-v3@4da62555 2026-10-18 ; prop `anchor` — notes-v3@801d11fb 2026-10-18 ; prop `drawer` — notes-v3@ba6e7b28 2026-10-19 ; prop `inspector` (non modal, sans voile, ✕) — notes-v3@ef23bea4 2026-10-19 — HEAD — non documentée
- **Dialogue de confirmation E9 (`ConfirmDialog`)**
  - props `title`, `children`, `confirmLabel`, `onConfirm`, `onCancel` — mindspace-core@4381e483 2026-11-11 — HEAD
  - + `alternative` {label, onChoose} — mindspace-core@59a8d11b 2026-11-11 (PR #15) — HEAD — décision du propriétaire : une question à la fois, focus piégé
  - + `danger` — mindspace-core@e64c019e 2026-11-11 (PR #17) — perdu au merge de `main`, rétabli mindspace-core@c5ae85a8 2026-11-11 — non documentée
- **Encadré d'avertissement `.ms-warning` E9** : bordure `--ms-text` — mindspace-core@0a15c7ce 2026-11-11 — remplacée en mindspace-core@e64c019e par `--ms-danger` — non documentée
- **Surface de verre E9 `.ms-glass`** : mindspace-core@128050ce 2026-11-10 — supprimée mindspace-core@5469a8ab 2026-11-11 — design flat (voir Dock E9)
- **Squelette / attente de chargement E9** : `Settings` en `lazy` — mindspace-core@426bd15d 2026-11-11 (PR #19) ; `LoadBoundary` autour de l'app — mindspace-core@142e61ba 2026-11-11 (PR #21) — HEAD — non documentée
- **Invitation d'installation E2** : `#install-btn` « Install » — notepad-pwa@3c6f6152 (A) — « Install app » — notepad-pwa@576a8c9d (B) — non documentée

### Notes (liste, cartes, recherche)

- **Liste de notes E9 (`NotesList`)** : « Vue factice. » — mindspace-core@128050ce 2026-11-10 ; héberge un éditeur anonyme — mindspace-core@93b47014 2026-11-10 ; ouvre la note la plus récente — mindspace-core@c74ffb69 2026-11-10 ; liste Dexie live — mindspace-core@8f85ad28 2026-11-10 — HEAD — non documentée
- **Ligne de note E9** : titre saisi — mindspace-core@8f85ad28 2026-11-10 — titre dérivé de l'index (`shownTitle`) — mindspace-core@ff39bfd6 2026-11-11 (PR #22) — HEAD — décision du propriétaire 2026-11-11 (CLAUDE.md)
- **`.card-progress`** : notes-v3@b6647a04 2026-10-09 — retirée notes-v3@ea104c22 2026-10-15 — recréée notes-v3@a5bd51cb 2026-10-18 — HEAD — non documentée
- **Tri et filtres E1** : `Sort` et `Filter` — notes-v3@4a4da608 2026-10-18 ; `Filter` supprimé notes-v3@1224a586 2026-10-18 ; `Sort` supprimé notes-v3@2c7478e4 2026-10-31 ; nouveau `Filter` (« Filter by kind of content, and sort: one place, from the top island ») — notes-v3@2c7478e4 2026-10-31 — HEAD — non documentée (hors commentaire du code)
- **Tri et filtres E4** : `Sort` — notes-v5@b1f17318 2026-10-21 ; `Titre` ajouté — notes-v5@1c1fb148 2026-11-11 ; `Filters` — notes-v5@32e9bd9e 2026-11-08 ; `ViewOptions` — notes-v5@f1b51602 2026-11-08 — non documentée
- **Menu d'une note E4** : `NoteMenu` — notes-v5@b1f17318 2026-10-21 — réduit à Déplacer, Rappel, Exporter, Supprimer — notes-v5@f1b51602 2026-11-08 ; `NoteTools` — supprimé notes-v5@f1b51602 (les outils restent sous le titre, `Tools`) — non documentée
- **Recherche dans le dock E1** : `SearchDock` — notes-v3@4da62555 2026-10-18 — retrait indiqué notes-v3@2c7478e4 2026-10-31 (contradiction : section 6) — non documentée
- **`Recap` E4** : teintes par type retirées — notes-v5@6840b25e (date non fournie) — HEAD ; `Recap` E7 — voir « Éléments disparus »

### Éditeur

- **Écran d'édition E4** : source texte — notes-v5@b1f17318 2026-10-21 — + éditeur visuel Tiptap (`RichEditor`) — notes-v5@32e9bd9e 2026-11-08 — HEAD — non documentée
- **Écran d'édition E8** : textarea (`App`) — mindspace-old@47287b6f 2026-11-03 — BlockNote — mindspace-old@77efa570 (date non fournie) — Tiptap — mindspace-old@690b2893 (date non fournie) — HEAD. Fichier `NoteEditor` (BlockNote) — mindspace-old@0bdaf5ca 2026-11-05 11:33 — supprimé mindspace-old@dbbcaa29 2026-11-05 12:23 ; `Editor` (Tiptap) — mindspace-old@15835dcc 2026-11-05 12:22 — non documentée
- **Écran d'édition E9** : éditeur anonyme — mindspace-core@93b47014 2026-11-10 ; surface sans cadre (ère Verre) → carte `surface + border` 16 px — mindspace-core@5469a8ab 2026-11-11 ; `injectCSS: false` — mindspace-core@67a5541f (date non fournie) — non documentée
- **Écran d'édition E2** : placeholder « Start writing here... » — notepad-pwa@576a8c9d (B) — « Start typing here... » — notepad-pwa@76dfefe5 (C) — non documentée
- **Barre d'outils E8** : barre haute sticky — mindspace-old@90c4f82d 2026-11-05 12:21 — remplacée en mindspace-old@a53044e3 2026-11-05 18:35 par un dock bas extensible + bulle de sélection ; Blocs ajouté mindspace-old@0c1cb372 2026-11-07 ; Annuler/Rétablir déplacés dans la barre de note — non documentée
- **Barre d'outils E9** : `ms-editor__toolbar ms-glass`, outil enfoncé ambre — mindspace-core@93b47014 2026-11-10 — surface + bordure, outil enfoncé en paire inversée — mindspace-core@5469a8ab 2026-11-11 — HEAD ; liste de sélecteurs et de glyphes inchangée — design flat (CLAUDE.md)
- **Modèles E1** : `Templates` supprimé — notes-v3@4a4da608 2026-10-18 ; `.starters` apparaît à ce commit ; `Starters` — notes-v3@d84b552a 2026-10-29 (« An empty note offers List and Flashcard ; the rarer shapes wait behind « Autres modèles » ») — non documentée
- **Tableaux E1 → E4** : `.tbl`, `TablePanel`, `TableEditor` — notes-v3@9e7d5dd7 2026-10-29 ; `LegacyTable` (« Tableau hérité AI Studio ») — notes-v5@1c1fb148 2026-11-11 — non documentée
- **Capture rapide E7** : `QuickCapture` créé notes-aistudio@d2819fcc 2026-11-02 — retiré du montage notes-aistudio@6dbe9114 2026-11-05, CSS retiré notes-aistudio@6fc4b9d7 2026-11-05 — non documentée
- **Éditeur E7** : police (système / serif / mono) et largeur (narrow / normal / full) — notes-aistudio@d2819fcc 2026-11-02 ; bloc Propriétés — notes-aistudio@6fc4b9d7 2026-11-05 — non documentée

### Pages et destinations

- **Coque E3** : liste + éditeur — notes-4@94f8e515 2026-10-22 (N0) ; 4 vues (Bibliothèque, Recherche, Réglages ajoutées) — notes-4@6f00cf58 2026-10-22 (N2) — HEAD — non documentée
- **Coque E6** : `+page.svelte` monolithe, 419 lignes — notes-v6@57c25ea2 2026-10-28 — remplacé par `Workspace.svelte` (500 lignes) notes-v6@7598f175 2026-10-31 — non documentée
- **Page des tâches E7** : `Tasks` — notes-aistudio@9021b9bc 2026-10-31 ; vues À faire, Aujourd'hui, En retard, Terminé — notes-aistudio@6fc4b9d7 2026-11-05 — non documentée
- **Page des tâches E9** : `Tasks` vue factice — mindspace-core@128050ce 2026-11-10 — HEAD de `main` ; supprimée sur la branche non fusionnée mindspace-core@7dd4d041 2026-11-12 — retrait décidé par le propriétaire (2026-11-12)
- **Tableau de bord E6 (`DashboardOverview`)** : inline dans `+page.svelte` — notes-v6@57c25ea2 2026-10-28 ; composant — notes-v6@a0935371 2026-10-29 ; non monté — notes-v6@c80dbb09 2026-10-31 — fichier présent à HEAD — non documentée
- **Déplacements de composants E1** (code déplacé, rôle inchangé) : `CollectionEditRow`, `FolderEditRow`, `Library`, `NewFolder` (Layers.tsx → Library.tsx / kit.tsx) — notes-v3@d6af8790 2026-10-19 ; `ChangeGroup`, `Changes`, `Timeline`, `About`, `Guide`, `News` (Sheets.tsx → Changelog.tsx) et `Section` (→ kit.tsx) — notes-v3@66b9f4b6 2026-10-24 ; `Empty` (Sheets.tsx → kit.tsx) — notes-v3@0fa410ce 2026-10-29
- **Déplacements de composants E4** : `ChangeGroup`, `Changes`, `Timeline`, `Section` quittent `Sheets.tsx` — notes-v5@1af74e0e 2026-10-22 (vers `Changelog.tsx` et `kit.tsx`) ; `Sketch`, `QrScan`, `QrShow`, `Tidy`, `Conflict`, `FolderSync`, `Personalization`, `SnapshotTools`, `PortableBackup`, `RichEditor` ont une déclaration dans leur fichier propre et une dans un autre fichier (section 6)

### Réglages et journal

- **Réglages E1** : `Settings` (feuille, Sheets.tsx) — notes-v3@4da62555 2026-10-18 — supprimé notes-v3@47c570df 2026-10-31 ; `SettingsPage` (page ; Aide, Apparence, Application, Masquees, Recherche, Sauvegarde) — notes-v3@47c570df 2026-10-31 — HEAD ; `Synchro` — notes-v3@ac5e4bc9 2026-10-31 — non documentée
- **Réglages E4** : `Settings` feuille — notes-v5@b1f17318 2026-10-21 ; `.cols.settings-layout` — notes-v5@010eb268 (date non fournie)
- **Réglages E7** : 7 sections — notes-aistudio@9021b9bc 2026-10-31 — réécrit + Profil, tuiles tonales, héros de profil — notes-aistudio@d2819fcc 2026-11-02 — + stockage, confidentialité, à propos et pages news, changelog, guide, shortcuts, install-guide, credits, license — notes-aistudio@6dbe9114 2026-11-05 — HEAD — non documentée
- **Réglages E8** : `SettingsHub` (9 sections, tiroir mobile, onglets mobile) — mindspace-old@d5c96cef 2026-11-03 — coque réduite mindspace-old@8e249933 (date non fournie) — supprimé mindspace-old@7d72e331 2026-11-05 11:36 ; `SettingsLayout` — mindspace-old@d028541d 2026-11-05 06:08 — HEAD ; `SettingsSection` (sections adressables) — mindspace-old@0f59ca60 2026-11-05 05:39 — remplacé par redirections mindspace-old@36efbb3a (date non fournie) ; pages canoniques — mindspace-old@3b7f4e80, @96b80602, @4a2205c7 2026-11-05 06:08, `AppearancePage` mindspace-old@9f8ab235 2026-11-05 18:03, `WhatsNewPage` mindspace-old@290000c4 2026-11-06 22:11 — non documentée (« remplace SettingsHub »)
- **Réglages E9** : vue factice — mindspace-core@128050ce 2026-11-10 — `BackupSection` mindspace-core@0a15c7ce 2026-11-11 — + `RestoreSection` mindspace-core@4381e483 2026-11-11 — HEAD
- **Sélecteur d'apparence E4** : `Appearance` ajouté (Auto / Clair / Sombre) — notes-v5@32e9bd9e 2026-11-08 — limité au thème — notes-v5@f1b51602 2026-11-08 — non documentée
- **Journal des versions E8** : `changelog.css` (rail 136 px, nœud 44 px, 340 lignes) — mindspace-old@83de6dd4 2026-11-05 05:27 — supprimé mindspace-old@7e3da2f4 2026-11-05 11:36 ; `ChangelogTimeline` — mindspace-old@d5c96cef 2026-11-03 — restylé mindspace-old@1274fca0, @880286dc (dates non fournies) — bascule technique mindspace-old@98fc56bf 2026-11-10 ; `ReleasePrimitives` — mindspace-old@1818172f 2026-11-05 11:01 — refondu mindspace-old@64e843a0, @219fe7ed ; `ReleaseDetail` — mindspace-old@3dbf30e9 2026-11-05 05:39 — supprimé mindspace-old@c4f3770f 2026-11-05 11:36 — `ReleasePage` ; `LegacyReleaseRedirect` — mindspace-old@a6e6f6f6 2026-11-07 02:13 — non documentée
- **Journal E7** : `Changelog` — notes-aistudio@9021b9bc 2026-10-31 ; filtres, recherche, héros — notes-aistudio@6dbe9114 2026-11-05

### Primitives et boutons

- **Bouton icône et pastille E4** : `.icon-btn` et `.chip` (CSS) — notes-v5@b1f17318 2026-10-21 — supprimés notes-v5@2466c955 2026-10-24 — remplacés par `.ctl` (commentaire de l'entrée) ; `.ctl` — notes-v5@2466c955 2026-10-24 — HEAD
- **`Switch` E1** : interrupteur coulissant — notes-v3@801d11fb 2026-10-18 — carré ÷3 avec ✓/− — notes-v3@d6af8790 2026-10-19 — HEAD — non documentée
- **`Chip` E1** : zone tactile 44 px — notes-v3@369fe07a 2026-10-19 — HEAD — non documentée
- **`ProgressBar` E7** : notes-aistudio@d2819fcc 2026-11-02 — « remplace deux copies » (audit, d'après l'entrée)
- **Boutons E9** : `.ms-button` (pilule 2 px) — mindspace-core@0a15c7ce 2026-11-11 ; `.ms-button--icon` — mindspace-core@4381e483 ; `.ms-button--danger` — mindspace-core@e64c019e — non documentée
- **Raccourcis clavier E2** : libellés « dark mode / focus mode / download » — notepad-pwa@3c6f6152 (A) — « theme / focus / export PDF » — notepad-pwa@576a8c9d (B) — non documentée
- **Statistiques E2** : `.stats-panel` `div` — notepad-pwa@3c6f6152 (A) — `section` — notepad-pwa@576a8c9d (B) — non documentée

## 4. Éléments disparus

Les cellules de références sont `dépôt@sha8 date`. « Non documenté » = l'entrée ne cite ni raison ni remplaçant.

### 4a. Créés puis supprimés (ou remplacés)

| élément | créé (réf) | supprimé (réf) | version | remplacé par | note |
|---|---|---|---|---|---|
| `.create-island` | notes-v3@b6647a04 2026-10-09 | notes-v3@ea104c22 2026-10-15 | E0 | non documenté | le même commit est la première apparition de `.fab`, `.nav-bar`, `.nav-tab`, `.create-tile` |
| `.card-progress` (première vie) | notes-v3@b6647a04 2026-10-09 | notes-v3@ea104c22 2026-10-15 | E0 | recréée par notes-v3@a5bd51cb 2026-10-18 (E1) | une seule ligne dans l'entrée avec la première apparition |
| `.nav-bar`, `.nav-tab` | notes-v3@ea104c22 2026-10-15 | absents de la source (fin de la lignée notes-site à notes-v3@ea104c22) | E0 | non documenté | aucun commit de suppression identifié |
| `.float-bar`, `.popover`, `.menu` | notes-v3@b6647a04 2026-10-09 | absents de la source (fin de la lignée à notes-v3@ea104c22) | E0 | non documenté | idem |
| `.create-tile` | notes-v3@ea104c22 2026-10-15 | absente de la source | E0 | non documenté | `.tile` existe en source dès notes-v3@4da62555 (rôle identique non établi) |
| `Templates` (Layers.tsx) | notes-v3@4da62555 2026-10-18 | notes-v3@4a4da608 2026-10-18 | E1 | non documenté | `.starters` apparaît au même commit ; `Starters` ensuite (notes-v3@d84b552a 2026-10-29) |
| `View` (Layers.tsx) | notes-v3@4da62555 2026-10-18 | notes-v3@4a4da608 2026-10-18 | E1 | non documenté | |
| `Filter` (première version) | notes-v3@4a4da608 2026-10-18 | notes-v3@1224a586 2026-10-18 | E1 | recréé par notes-v3@2c7478e4 2026-10-31 | |
| `Sort` | notes-v3@4a4da608 2026-10-18 | notes-v3@2c7478e4 2026-10-31 | E1 | `Filter` (commentaire : « Filter by kind of content, and sort: one place ») | |
| `Settings` (feuille, Sheets.tsx) | notes-v3@4da62555 2026-10-18 | notes-v3@47c570df 2026-10-31 | E1 | `SettingsPage` (créée au même commit) | |
| `SearchDock` | notes-v3@4da62555 2026-10-18 | notes-v3@2c7478e4 2026-10-31 (selon la note de variantes seulement) | E1 | recherche dans `HeaderTools` (îlot du haut) d'après son commentaire | tableau de l'entrée : HEAD (section 6) |
| `.chip` et `.icon-btn` (CSS) | notes-v5@b1f17318 2026-10-21 | notes-v5@2466c955 2026-10-24 | E4 | `.ctl` | le composant `Chip` de `kit.tsx` reste à HEAD (section 6) |
| `NoteTools` (lignes Plan, Réviser, Carte des liens du menu) | notes-v5@b1f17318 2026-10-21 | notes-v5@f1b51602 2026-11-08 | E4 | `Tools` sous le titre (déjà présent) | seule suppression de composant React à HEAD d'après l'entrée |
| `Dock` à 5 onglets (Accueil, Notes, Tâches, Listes, Calendrier) | notes-v5@32e9bd9e 2026-11-08 | notes-v5@f1b51602 2026-11-08 | E4 | `Dock` à 4 onglets (Aujourd'hui, Notes, Agenda, Bibliothèque) | variante |
| `Recap` / widgets | notes-aistudio@9021b9bc 2026-10-31 | montage : notes-aistudio@6dbe9114 2026-11-05 ; CSS : notes-aistudio@6fc4b9d7 2026-11-05 | E7 | non documenté (`TodayGlanceBar` apparaît à notes-aistudio@6dbe9114) | |
| `QuickCapture` (deck d'action rapide) | notes-aistudio@d2819fcc 2026-11-02 | montage : notes-aistudio@6dbe9114 ; CSS : notes-aistudio@6fc4b9d7 | E7 | non documenté | classes `.quick-capture-*`, `.quick-starter-*`, `.quick-action-chip` |
| Dock en île de 4 destinations | notes-aistudio@9021b9bc 2026-10-31 | notes-aistudio@d2819fcc 2026-11-02 | E7 | bi-îlot (`nav-pill-main` + `nav-pill-tools`) | variante |
| Dock en bi-îlot | notes-aistudio@d2819fcc 2026-11-02 | notes-aistudio@6dbe9114 2026-11-05 | E7 | île unifiée de 5 destinations | variante |
| `+page.svelte` monolithe (419 lignes) | notes-v6@57c25ea2 2026-10-28 | notes-v6@7598f175 2026-10-31 (devient point d'entrée mince) | E6 | `Workspace.svelte` | |
| `.privacy-card` (sidebar) | notes-v6@57c25ea2 2026-10-28 | retirée seulement en branche BR3 notes-v6@ac3fbc72 2026-10-30 (non fusionné) | E6 | non documenté | présente dans `main` à HEAD |
| `App` première interface (barre latérale + textarea) | mindspace-old@47287b6f 2026-11-03 | réécrit (rail, liste, éditeur, tâches), commit non identifié | E8 | non documenté | |
| `SettingsHub` | mindspace-old@d5c96cef 2026-11-03 | mindspace-old@7d72e331 2026-11-05 11:36 | E8 | `SettingsLayout` (mindspace-old@d028541d 2026-11-05 06:08) | coque réduite avant par mindspace-old@8e249933 |
| `changelog.css` | mindspace-old@83de6dd4 2026-11-05 05:27 | mindspace-old@7e3da2f4 2026-11-05 11:36 | E8 | styles restylés dans `ChangelogTimeline` (mindspace-old@1274fca0, @880286dc) | |
| `ReleaseDetail` | mindspace-old@3dbf30e9 2026-11-05 05:39 | mindspace-old@c4f3770f 2026-11-05 11:36 | E8 | `ReleasePage` | `LegacyReleaseRedirect` (mindspace-old@a6e6f6f6 2026-11-07) pour les anciennes URL |
| `SettingsSection` (sections adressables) | mindspace-old@0f59ca60 2026-11-05 05:39 | remplacé par une table de redirections mindspace-old@36efbb3a | E8 | redirections | |
| `NoteEditor` (BlockNote) | mindspace-old@0bdaf5ca 2026-11-05 11:33 | mindspace-old@dbbcaa29 2026-11-05 12:23 | E8 | `Editor` (Tiptap, mindspace-old@15835dcc 2026-11-05 12:22) | `rounded-[20px]`, `inter.css` ; BlockNote introduit dans `App` par mindspace-old@77efa570 |
| `EditorToolbar` haute sticky | mindspace-old@90c4f82d 2026-11-05 12:21 | mindspace-old@a53044e3 2026-11-05 18:35 | E8 | dock bas extensible + bulle de sélection | variante du même composant |
| `Notes (vue factice)` (`NotesList`) | mindspace-core@128050ce 2026-11-10 | mindspace-core@93b47014 2026-11-10 | E9 | éditeur anonyme, puis liste Dexie (mindspace-core@8f85ad28 2026-11-10) | |
| `Brouillon Zustand temporaire` (`draftStore.ts`) | mindspace-core@93b47014 2026-11-10 | mindspace-core@c74ffb69 2026-11-10 | E9 | persistance par Yjs / Dexie (non visuel) | exception à la frontière de données |
| `.ms-glass` | mindspace-core@128050ce 2026-11-10 | mindspace-core@5469a8ab 2026-11-11 | E9 | surface + bordure (`--ms-surface`, `--ms-border`) | design flat décidé le 2026-11-11 |
| Question d'adoption de la phrase (inline, `RestoreSection`) | mindspace-core@8a26a0e5 2026-11-11 | mindspace-core@59a8d11b 2026-11-11 | E9 | `ConfirmDialog` avec `alternative` | décision du propriétaire : une question à la fois, focus piégé |
| `Tâches (vue factice)` (onglet, page, route `/tasks`) | mindspace-core@128050ce 2026-11-10 | mindspace-core@7dd4d041 2026-11-12 (branche non fusionnée) | E9 | — | toujours dans `main` ; retrait décidé par le propriétaire (2026-11-12) |
| Prop `danger` de `ConfirmDialog` (perte temporaire) | mindspace-core@e64c019e 2026-11-11 | perdu au merge de `main` | E9 | rétablie mindspace-core@c5ae85a8 2026-11-11 | |

### 4b. Présents dans le code sans être montés (code mort)

| élément | dépôt (version) | créé (réf) | état | note |
|---|---|---|---|---|
| 47 fichiers shadcn/Radix (46 composants + `use-mobile`) : accordion, alert-dialog, alert, aspect-ratio, avatar, badge, breadcrumb, button, calendar, card, carousel, chart, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, form, hover-card, input-otp, input, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, switch, table, tabs, textarea, toggle-group, toggle, tooltip | notes-v5 (E4) | notes-v5@b1f17318 2026-10-21 | à HEAD, aucun fichier de `src/notes` ne les importe | seuls `calendar.tsx` et `chart.tsx` modifiés ensuite (notes-v5@75c22d63 2026-11-07, DayPicker 10 et Recharts 3) |
| `QuickActionMenu.svelte` | notes-svelte (E5) | notes-svelte@2923c47d 2026-10-22 | non importé dès S1, reste à HEAD comme doublon de `BottomNavigation.svelte` | |
| `DashboardOverview.svelte` | notes-v6 (E6) | notes-v6@a0935371 2026-10-29 | non monté depuis notes-v6@c80dbb09 2026-10-31, fichier présent à HEAD | BR4 le vide (non fusionné) |
| `MindSpaceUI.tsx` (Button, Card, Badge, TextField) | mindspace-old (E8) | mindspace-old@64878213 2026-11-05 | jamais importé par un autre fichier | pas de Modal/Sheet/Dialog (test mindspace-old@1ad2b2ed) |

## 5. Éléments propres à une seule version

Lignes de la matrice dont une seule colonne est renseignée (nom — version — référence ou état).

- Classes de navigation propres à la lignée notes-site — E0 — `.nav-bar`, `.nav-tab` (@ea104c22) ; `.float-bar` (@b6647a04) ; absents de la source
- Îlot de création — E0 — `.create-island` → ✗ @ea104c22
- Popover et menu — E0 — `.popover`, `.menu` (absents de la source)
- Piège de focus des dialogues — E8 — `useDialogFocusTrap` (verrou de défilement, restitution du focus)
- Bannière de rappel de sauvegarde — E9 — `BackupReminder` (boutons « Sauvegarder » et « Plus tard » ; 14 jours)
- Bannière d'échec de stockage — E4 — `.storage-alert` (persistante, @e32924bc)
- Limite d'erreur de chargement — E9 — `LoadBoundary` (`role="alert"`, bouton « Recharger »)
- Menu d'insertion « / » — E8 — `SlashMenu` (« Insérer un bloc »)
- Calendrier (agenda) — E4 — `Calendar` (Mois / Semaine / Liste)
- Tableau de bord d'accueil — E6 — `DashboardOverview` (héros, carte Capture rapide, métriques ; non monté dès @c80dbb09)
- Aperçu d'un tag (TagPeek) — E1 — `TagPeek` (@c218aba2)
- Barre de progression — E7 — `ProgressBar` (@d2819fcc)
- Feuille de style du journal — E8 — `changelog.css` (340 lignes, rail 136 px, nœud 44 px) → ✗ @7e3da2f4
- Détail d'une version — E8 — `ReleaseDetail` (@3dbf30e9) → ✗ @c4f3770f → `ReleasePage` ; `LegacyReleaseRedirect` (@a6e6f6f6)
- Classes utilitaires de composants — E9 — `.ms-section`, `.ms-hint`, `.ms-actions`, `.ms-sr-only` (@0a15c7ce) ; `.ms-card`, `.ms-field`, `.ms-button--icon`, `.ms-form` (@4381e483) ; `.ms-button--danger` (@e64c019e)
- Primitives typées — E8 — `MindSpaceUI` (Button, Card, Badge, TextField ; @64878213 ; jamais importé)
- Fond d'ambiance — E4 — `.ambient` (trois taches floues)
- Statistiques d'écriture — E2 — `.panel .stats-panel` (div → section)
- Mode focus — E2 — bouton Focus (`.small-button .ghost`)
- Minuteur d'écriture — E2 — `.timer-panel` (Start/Pause/Reset, Break reminder, Typewriter sound)
- Sons d'ambiance — E2 — 25 noms dans `ambientPatterns` (`.ambient-item`, `.slider-wrap`)
- Panneau d'export — E2 — `.tools-panel` (Save now, Export .txt/.html/.pdf/.docx)
- Focus principal — E9 — `main.ms-main` (`tabIndex=-1`, focus à chaque changement de vue)
- Mode contraste forcé — E9 — `@media (forced-colors: active)` (bordures `CanvasText`, sélection `Highlight`)

## 6. Contradictions et trous

Contradictions
1. `Fab` E1 : le commentaire du code dit « a tap writes a new note; a long press (or right-click) opens the Create sheet » ; la note de variantes du même dépôt dit « appui = menu Créer (Note, Vocal, Importer) ; appui long / glisser ». Le rôle de l'appui simple n'est pas tranché (cellule E1 de la ligne FAB).
2. `SearchDock` E1 : le tableau des composants le donne à HEAD (`notes-v3@4da62555` → HEAD) ; la note de variantes dit « jusqu'à notes-v3@2c7478e4 2026-10-31 ».
3. Déclarations en double dans notes-v3 : `About`, `Guide`, `News` sont à HEAD dans `Sheets.tsx` ET dans `Changelog.tsx`, alors que `ChangeGroup`, `Changes`, `Timeline`, `Section`, `Empty` de `Sheets.tsx` sont marqués « REMPLACÉ (déplacé) » ; `Tidy`, `Conflict` à HEAD dans `Sheets.tsx` et dans leur fichier propre ; `TablePanel` / `TableEditor` dans `Editor.tsx`, `Table.tsx` et `kit.tsx`. L'entrée ne dit pas si ce sont des doublons vivants ou des restes.
4. Même constat dans notes-v5 : `QrScan`, `QrShow`, `Sketch`, `SnapshotTools`, `PortableBackup`, `Conflict`, `FolderSync`, `Personalization`, `Tidy`, `RichEditor` sont déclarés à HEAD dans un fichier propre et dans `Layers.tsx`, `Sheets.tsx` ou `Editor.tsx`.
5. `.nav-rail` E4 : première apparition `notes-v5@b1f17318 2026-10-21`, mais sa note cite le rail ≥ 48 em de `notes-v5@f1b51602 2026-11-08`.
6. `.chip` et `.icon-btn` E4 : classes supprimées par `notes-v5@2466c955 2026-10-24`, alors que le composant `Chip` de `kit.tsx` est donné à HEAD avec la classe `.chip`.
7. E8 `QuickCapture` (`mindspace-old@f51f14b9`) et E6 `QuickCapture` (`notes-v6@c2701fc1`) : donnés « HEAD », mais l'entrée ne dit pas s'ils sont montés. Le lien entre la carte « Capture rapide » de `DashboardOverview` (E6) et `QuickCapture.svelte` n'est pas documenté.
8. E4 : `MainDock` est décrit à 4 onglets (`b1f17318`), 5 (`32e9bd9e`), puis 4 (`f1b51602`), mais le tableau donne une seule « première apparition » (`b1f17318`) ; les onglets de la première version ne sont pas ceux d'aujourd'hui.

Trous et limites des entrées
9. E0 (notes-site, minifié) : seules des classes CSS sont connues, jamais des composants. Un `—` en E0 pour un composant nommé signifie « aucune classe correspondante relevée », pas une absence prouvée. `b6647a04 2026-10-09` est le premier commit lu de E0 : la création réelle peut être antérieure.
10. E1 : toutes les entrées « première apparition `notes-v3@4da62555 2026-10-18` » sont le premier commit de la source, pas forcément la création du composant (E0 minifié, noms inconnus). Les composants dérivés d'E0 ne peuvent pas être appariés par le nom.
11. E7 : l'entrée liste des composants sans classes CSS. Les cellules `= E1` ne valent que pour un nom de composant identique ; l'égalité des props n'est pas vérifiée. Un `—` en E7 peut signifier « non listé » (par exemple `.island`, `FormatStrip`, `NoteMenu`, `Pin`).
12. E4 : `Icon` (`icons.tsx`) n'est pas listé ; E1 et E7 le listent. E3, E5, E6, E8 : aucune entrée sur un composant d'icône (voir `icons.md`).
13. E3 et E5 : le contenu des fichiers a été permuté dans l'historique (`notes-4` avant N4 ; `+layout.svelte` / `+page.svelte` de `notes-svelte`). Les noms de fichiers des cellules E3 et E5 sont ceux de HEAD.
14. E2 : les dates de B (`576a8c9d`), C (`76dfefe5`), D (`a488cc67`) sont données comme « même jour » sans date explicite ; les fichiers sont permutés à HEAD (LINEAGE).
15. E8 : l'entrée couvre 2026-11-02 à 2026-11-10 (HEAD `82a689c` 2026-11-10) ; LINEAGE donne 2026-11-02 à 2026-11-12. Premier composant daté : 2026-11-03.
16. E8 : `Dock bas mobile`, `Rail`, `Barre de note`, liste de notes sont inline dans `App.tsx` : aucune carte de note ni composant de liste nommé.
17. E6 : quatre branches non fusionnées (BR1 à BR5, voir le sigle dans `colors.md`) ne figurent dans les cellules que marquées « non fusionné » ; l'état final de `main` n'est pas celui des branches.
18. E9 : le dock a 3 onglets dans `main` et 2 sur la branche `claude/brave-shannon-p7pfr9-no-tasks` (`mindspace-core@7dd4d041 2026-11-12`, non fusionnée).
19. Références sans date dans les entrées : mindspace-old@77efa570, @690b2893, @8e249933, @36efbb3a, @1fd96923, @1274fca0, @880286dc, @64e843a0, @219fe7ed, @90b6cb34, @1ad2b2ed ; notes-v5@6840b25e, @f261f690, @010eb268 ; mindspace-core@67a5541f ; notes-v6@e309072e.
20. Raisons des changements : presque aucune n'est citée dans les entrées (messages de commit non repris). Les seules raisons : `.ctl` remplace `.chip` et `.icon-btn` (notes-v5@2466c955), `ProgressBar` remplace deux copies (notes-aistudio@d2819fcc), design flat décidé le 2026-11-11 et retrait de Tâches décidé le 2026-11-12 par le propriétaire (mindspace-core), question d'adoption en `ConfirmDialog` (décision du propriétaire).
21. Valeurs visuelles (tailles, rayons, couleurs, durées) par composant : dans les autres catégories, pas ici. Cette catégorie ne compare que noms, rôles et variantes.
22. Vérification des références : tous les sha de ces entrées ont été testés avec `git cat-file -e` dans les dépôts locaux (aucun invalide). Le contenu des commits n'a pas été relu.

### Complément de l'orchestrateur : contraste forcé (`forced-colors: active`)
Cette matrice ne montre le mode contraste forcé qu'en E9. Les entrées par dépôt le citent dans cinq versions (vérifié dans `design-system/by-repo/*/` le 2026-11-14) :
- E1 `notes-v3@ba6e7b28` 2026-10-19 : bordure et sélection par couleurs système, `app.css`, 6 déclarations, repris dans `35c0380`.
- E4 `notes-v5@b1f17318` 2026-10-21 : 6 règles (`.glass`, `.card`, `.chip`, `.tile`, `.lib-tile`, bordure `1px solid CanvasText` ; sélection `outline: 3px solid Highlight`) ; les règles de bordure et de sélection d'origine sont remplacées par `notes-v5@2466c955` 2026-10-24.
- E7 `notes-aistudio@9021b9bc` 2026-10-31 : 6 règles à l'origine et à HEAD (copie de E1).
- E8 `mindspace-old@f4917c57` : repli `@media (prefers-reduced-transparency: reduce), (forced-colors: active)` qui rend `.ms-glass` opaque (fond `--ms-surface`, `backdrop-filter: none`).
- E9 `mindspace-core@128050ce` 2026-11-10 : bordures `CanvasText`, sélection `Highlight` / `HighlightText`, scénario navigateur S9.
Détail dans `elevation-motion.md`, section « mouvement réduit et contraste ».

Détail complet par dépôt : design-system/by-repo/<repo>/components.md
