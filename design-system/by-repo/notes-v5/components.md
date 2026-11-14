Source : notes-v5, commits lus : 132, plage : 2026-10-21 à 2026-11-11

Composants React de `src/notes` (déclarés par fonction à la racine d'un fichier), composants shadcn importés, primitives CSS (`.ctl`, `.island`, `.card`, etc.). Première apparition = premier commit dont le fichier contient la déclaration ; dernier état = `HEAD` ou premier commit où elle disparaît du fichier.

## 1. Composants de l'application

| composant | fichier | rôle | variantes ou props visibles | première apparition | dernier état | notes |
|---|---|---|---|---|---|---|
| App | src/notes/App.tsx | Racine : charge tokens.css, app.css, looks.css et les polices ; pose data-look, data-accent, data-theme et les réglages de personnalisation sur <html> |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| About | src/notes/ui/Changelog.tsx | À propos |  | notes-v5@1af74e0e 2026-10-22 | HEAD |  |
| ChangeGroup | src/notes/ui/Changelog.tsx | Groupe de changements |  | notes-v5@1af74e0e 2026-10-22 | HEAD |  |
| Changes | src/notes/ui/Changelog.tsx | Liste des changements |  | notes-v5@1af74e0e 2026-10-22 | HEAD |  |
| Guide | src/notes/ui/Changelog.tsx | Guide |  | notes-v5@1af74e0e 2026-10-22 | HEAD |  |
| News | src/notes/ui/Changelog.tsx | Quoi de neuf |  | notes-v5@1af74e0e 2026-10-22 | HEAD |  |
| Timeline | src/notes/ui/Changelog.tsx | Chronologie des versions |  | notes-v5@1af74e0e 2026-10-22 | HEAD |  |
| Conflict | src/notes/ui/Conflict.tsx | Revue de conflit : comparaison ligne à ligne | `.conflict-diff` | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| Calendar | src/notes/ui/Destinations.tsx | Agenda : rappels, dates, échéances | Mois / Semaine / Liste | notes-v5@32e9bd9e 2026-11-08 | HEAD |  |
| Tasks | src/notes/ui/Destinations.tsx | Page des tâches (dérivée des notes) | vues À faire, Aujourd'hui, En retard, Terminées | notes-v5@32e9bd9e 2026-11-08 | HEAD |  |
| TaskRows | src/notes/ui/Destinations.tsx | Lignes de tâches | `.task-row` | notes-v5@f1b51602 2026-11-08 | HEAD |  |
| Today | src/notes/ui/Destinations.tsx | Page Aujourd'hui | actions de capture, À faire, À ne pas oublier, Reprendre le fil (1c1fb148) | notes-v5@f1b51602 2026-11-08 | HEAD |  |
| Dock | src/notes/ui/Dock.tsx | Conteneur de la barre du bas : choisit entre navigation, recherche, sélection, enregistrement | selon l'état du store | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Fab | src/notes/ui/Dock.tsx | Bouton + : ouvre Créer, ou presser-glisser-relâcher sur un choix | .fab, is-xl 58px ; masqué en édition (body.is-editing) depuis 32e9bd9e | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| MainDock | src/notes/ui/Dock.tsx | Île de navigation + bouton + | 4 onglets (Notes, Bibliothèque, Recherche, Réglages) ; 5 (Accueil, Notes, Tâches, Listes, Calendrier) à 32e9bd9e ; 4 (Aujourd'hui, Notes, Agenda, Bibliothèque) depuis f1b51602 | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| RecordingBar | src/notes/ui/Dock.tsx | Barre d'enregistrement vocal | `.rec-bar`, point `.rec-dot` | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| SearchDock | src/notes/ui/Dock.tsx | Recherche dans la barre du bas : champ et puces de type | puces Photos, Audio, PDF, Listes, Liens, Dates ; `.search-field` | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| SelectionDock | src/notes/ui/Dock.tsx | Barre de sélection multiple | compteur .sel-count, actions | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Attachments | src/notes/ui/Editor.tsx | Pièces jointes de la note |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Editor | src/notes/ui/Editor.tsx | Écran de note (titre, corps, pièces jointes, outils) | source texte ou éditeur visuel Tiptap depuis 32e9bd9e | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| FormatStrip | src/notes/ui/Editor.tsx | Barre de mise en forme « Aa » dans l'île du bas de l'éditeur | `.format-strip` | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Found | src/notes/ui/Editor.tsx | Dates, lieux, nombres et liens trouvés dans la note, en boutons |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| LiveText | src/notes/ui/Editor.tsx | Texte vivant : mots d'une photo ou d'un PDF versés dans la note | OCR | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Player | src/notes/ui/Editor.tsx | Lecteur audio d'une pièce jointe | `.player`, `.seek`, `.wave` | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| SaveStatus | src/notes/ui/Editor.tsx | État d'enregistrement, discret puis effacé, persistant en cas d'échec | `.save-status[data-status]` | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Tools | src/notes/ui/Editor.tsx | Plan, cartes à réviser et carte des liens sous le titre |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| RichEditor | src/notes/ui/Editor.tsx | Éditeur visuel Tiptap (chargé à la demande) | tableaux, listes de tâches, surlignage ; `.rich-editor .tiptap` | notes-v5@32e9bd9e 2026-11-08 | HEAD |  |
| FileInputs | src/notes/ui/Files.tsx | Entrées de fichiers cachées |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| FolderSync | src/notes/ui/FolderSync.tsx | Synchronisation chiffrée par dossier | `.folder-sync` | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| Create | src/notes/ui/Layers.tsx | Panneau Créer : Importer, Vocal, Note (le plus près du pouce) | tuiles `.tile` ; panneau bas sur mobile | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Hint | src/notes/ui/Layers.tsx | Astuce affichée une à la fois |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| History | src/notes/ui/Layers.tsx | Historique des versions (inspecteur) |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Import | src/notes/ui/Layers.tsx | Menu d'import |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| IosInstall | src/notes/ui/Layers.tsx | Aide d'installation iOS |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| LayerHost | src/notes/ui/Layers.tsx | Hôte des feuilles volantes (menus ancrés, panneaux, inspecteurs) | data-mode : create, note-menu, import, sort, filters, outline, history, sketch, qr-show, qr-scan, … | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| ListActions | src/notes/ui/Layers.tsx | Actions de liste |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| NoteMenu | src/notes/ui/Layers.tsx | Menu d'une note | réduit à Déplacer, Rappel, Exporter, Supprimer en f1b51602 | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| NoteTools | src/notes/ui/Layers.tsx | Lignes Plan, Réviser, Carte des liens dans le menu d'une note ouverte | retirées du menu en f1b51602 (le menu garde Déplacer, Rappel, Exporter, Supprimer) ; ces outils restent sous le titre | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@f1b51602 2026-11-08 |  |
| Outline | src/notes/ui/Layers.tsx | Plan de la note (inspecteur) |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Picker | src/notes/ui/Layers.tsx | Sélecteur (dossier, tag) |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Pin | src/notes/ui/Layers.tsx | Saisie du code PIN |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Remind | src/notes/ui/Layers.tsx | Rappel |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| SelMore | src/notes/ui/Layers.tsx | Actions de sélection supplémentaires |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Sort | src/notes/ui/Layers.tsx | Tri | Modification, Création, Titre (Titre ajouté en 1c1fb148) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| TabRow | src/notes/ui/Layers.tsx | Ligne de destination dans un menu |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Title | src/notes/ui/Layers.tsx |  |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Appearance | src/notes/ui/Layers.tsx | Apparence rapide : Auto / Clair / Sombre | ajouté en 32e9bd9e ; limité au thème en f1b51602 | notes-v5@32e9bd9e 2026-11-08 | HEAD |  |
| Filters | src/notes/ui/Layers.tsx | Filtres | ajouté en 32e9bd9e | notes-v5@32e9bd9e 2026-11-08 | HEAD |  |
| Profile | src/notes/ui/Layers.tsx | Profil local | ajouté en 32e9bd9e | notes-v5@32e9bd9e 2026-11-08 | HEAD |  |
| ViewOptions | src/notes/ui/Layers.tsx | Options de vue : tri, ordre, filtres | ajouté en f1b51602 | notes-v5@f1b51602 2026-11-08 | HEAD |  |
| QrScan | src/notes/ui/Layers.tsx | Scan de QR code avec aperçu |  | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| QrShow | src/notes/ui/Layers.tsx | Partage par QR code |  | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| Sketch | src/notes/ui/Layers.tsx | Croquis : toile avec stylo, surligneur, gomme, annuler/rétablir | `.layer[data-mode='sketch']` | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| LegacyTable | src/notes/ui/LegacyTable.tsx | Tableau hérité AI Studio | `.legacy-table` | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| CollectionEditRow | src/notes/ui/Library.tsx | Ligne d'édition de collection |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| FolderEditRow | src/notes/ui/Library.tsx | Ligne d'édition de dossier (nom, couleur) | `.swatch` | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Library | src/notes/ui/Library.tsx | Page Bibliothèque : tuiles des types, dossiers, tags, collections | `.lib-tile`, `.lib-folder` | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Card | src/notes/ui/List.tsx | Carte de note | `.card` ; `.selected`, `.is-open`, `.dragging`, `.swiping`, `data-color` (liseré de dossier) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| CardBody | src/notes/ui/List.tsx | Corps de carte : titre, extrait, cases | `.card-body.is-clamped` | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| CardFooter | src/notes/ui/List.tsx | Pied de carte : méta, épingle, verrou | `.card-meta` | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| CardMedia | src/notes/ui/List.tsx | Média de carte (photo) | `.card-media` | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Count | src/notes/ui/List.tsx |  |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Empty | src/notes/ui/List.tsx | État vide |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| FirstUse | src/notes/ui/List.tsx | Invitation du premier lancement (sans notes d'exemple) | `.first-use`, `.first-action` | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Header | src/notes/ui/List.tsx | En-tête de la liste : titre de page et outils | outils d'en-tête, options, apparence ; contextuel depuis f1b51602 | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| InfoBar | src/notes/ui/List.tsx | Barre d'info sous le titre : filtres actifs |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| NoteList | src/notes/ui/List.tsx | Liste des notes : cartes en maçonnerie ou liste compacte | `.note-list`, `.cards`, `.is-compact` | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| QuickActions | src/notes/ui/List.tsx | Trois actions au survol de la souris | `.card-actions` | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Recap | src/notes/ui/List.tsx | Widgets du récap : Reprendre, À venir, À réviser, À faire, Photo récente / Note vocale, Souvenir | `.widget` ; teintes par type retirées en 6840b25e ; `data-size="tall"` | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Wave | src/notes/ui/List.tsx | Onde sonore d'une carte vocale | `.card-wave` | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| NoteMetadata | src/notes/ui/Metadata.tsx | Propriétés structurées d'une note | `.note-properties`, `.metadata-fields` | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| Personalization | src/notes/ui/Personalization.tsx | Mon espace et Confort de lecture et accessibilité | data-attributs sur <html> | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| PortableBackup | src/notes/ui/PortableBackup.tsx | Sauvegarde portable chiffrée dans Réglages |  | notes-v5@ad395f46 2026-11-07 | HEAD |  |
| QrScan | src/notes/ui/QrTools.tsx | Scan de QR code avec aperçu |  | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| QrShow | src/notes/ui/QrTools.tsx | Partage par QR code |  | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| RichEditor | src/notes/ui/RichEditor.tsx | Éditeur visuel Tiptap (chargé à la demande) | tableaux, listes de tâches, surlignage ; `.rich-editor .tiptap` | notes-v5@32e9bd9e 2026-11-08 | HEAD |  |
| About | src/notes/ui/Sheets.tsx | À propos |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Btn | src/notes/ui/Sheets.tsx | Bouton de feuille |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| ChangeGroup | src/notes/ui/Sheets.tsx | Groupe de changements |  | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@1af74e0e 2026-10-22 |  |
| Changes | src/notes/ui/Sheets.tsx | Liste des changements |  | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@1af74e0e 2026-10-22 |  |
| Empty | src/notes/ui/Sheets.tsx | État vide |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Guide | src/notes/ui/Sheets.tsx | Guide |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| LinkMap | src/notes/ui/Sheets.tsx | Carte des liens entre notes | seul <svg> dynamique du dépôt hors icons.tsx | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| News | src/notes/ui/Sheets.tsx | Quoi de neuf |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Overview | src/notes/ui/Sheets.tsx | Vue d'ensemble d'un dossier, tag ou collection |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| PrintArea | src/notes/ui/Sheets.tsx | Zone d'impression | feuille de style print, `#print-area` | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Section | src/notes/ui/Sheets.tsx | Section de feuille |  | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@1af74e0e 2026-10-22 |  |
| Settings | src/notes/ui/Sheets.tsx | Feuille Réglages | `.cols.settings-layout` depuis 010eb268 | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| SheetHost | src/notes/ui/Sheets.tsx | Hôte des feuilles du bas (Réglages, À propos, Quoi de neuf, Guide, Étude, Aperçu…) | `.sheet`, `.sheet.glass` | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Study | src/notes/ui/Sheets.tsx | Révision de cartes |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| StudyFoot | src/notes/ui/Sheets.tsx | Pied de la feuille d'étude |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Timeline | src/notes/ui/Sheets.tsx | Chronologie des versions |  | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@1af74e0e 2026-10-22 |  |
| Toast | src/notes/ui/Sheets.tsx | Message temporaire en haut de l'écran | `.toast` | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| SnapshotTools | src/notes/ui/Sheets.tsx | Snapshots techniques dans Réglages | `.snapshot-tools` | notes-v5@8ef0b652 2026-11-07 | HEAD |  |
| PortableBackup | src/notes/ui/Sheets.tsx | Sauvegarde portable chiffrée dans Réglages |  | notes-v5@ad395f46 2026-11-07 | HEAD |  |
| Conflict | src/notes/ui/Sheets.tsx | Revue de conflit : comparaison ligne à ligne | `.conflict-diff` | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| FolderSync | src/notes/ui/Sheets.tsx | Synchronisation chiffrée par dossier | `.folder-sync` | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| Personalization | src/notes/ui/Sheets.tsx | Mon espace et Confort de lecture et accessibilité | data-attributs sur <html> | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| Tidy | src/notes/ui/Sheets.tsx | Ranger : doublons, tâches, étiquettes |  | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| Sketch | src/notes/ui/Sketch.tsx | Croquis : toile avec stylo, surligneur, gomme, annuler/rétablir | `.layer[data-mode='sketch']` | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| SnapshotTools | src/notes/ui/SnapshotTools.tsx | Snapshots techniques dans Réglages | `.snapshot-tools` | notes-v5@8ef0b652 2026-11-07 | HEAD |  |
| NoteTag | src/notes/ui/Tidy.tsx | Suggestion d'étiquette |  | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| NoteTasks | src/notes/ui/Tidy.tsx | Tâches sans case |  | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| Tidy | src/notes/ui/Tidy.tsx | Ranger : doublons, tâches, étiquettes |  | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| TidyPair | src/notes/ui/Tidy.tsx | Paire de doublons |  | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| Art | src/notes/ui/Welcome.tsx | Illustration de la bienvenue | `.art-card` | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Feature | src/notes/ui/Welcome.tsx | Ligne de fonction de la bienvenue |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Tour | src/notes/ui/Welcome.tsx | Visite guidée | `.tour`, `.tour-spot`, z-modal | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Welcome | src/notes/ui/Welcome.tsx | Bienvenue (premier lancement) |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Chip | src/notes/ui/kit.tsx | Pastille | `.chip` | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| FolderTag | src/notes/ui/kit.tsx | Étiquette de dossier |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Formatted | src/notes/ui/kit.tsx | Rendu Markdown léger d'une note |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Highlight | src/notes/ui/kit.tsx | Surlignage de recherche (mark) | `findSearchRanges` depuis f261f690 | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Inline | src/notes/ui/kit.tsx | Texte en ligne |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| InlineForm | src/notes/ui/kit.tsx | Champ + bouton de validation | `.inline-form` | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Layer | src/notes/ui/kit.tsx | Feuille volante : focus piégé, scrim, ancrée ou tiroir ou inspecteur | props anchor, drawer, inspector ; `.scrim`, `data-anchored`, `data-drawer`, `data-inspector` | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| NewFolder | src/notes/ui/kit.tsx | Formulaire de nouveau dossier |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Option | src/notes/ui/kit.tsx | Option à choix | aria-pressed | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Row | src/notes/ui/kit.tsx | Ligne de menu | props icon, label, trailing, pressed, color | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Segmented | src/notes/ui/kit.tsx | Sélecteur segmenté à pouce glissant | `.segmented`, `.seg-thumb` ; prefs view, look, accent, theme, hand, tint, sort, dir | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| StateMark | src/notes/ui/kit.tsx | Pastille de type de changement | `.state-mark[data-kind]` | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Switch | src/notes/ui/kit.tsx | Interrupteur : case carrée coche/tiret | `.switch` | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Tagged | src/notes/ui/kit.tsx | Texte avec étiquettes |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| Section | src/notes/ui/kit.tsx | Section de feuille |  | notes-v5@1af74e0e 2026-10-22 | HEAD |  |

Les composants marqués SUPPRIMÉ en notes-v5@1af74e0e sont déplacés (Changelog.tsx), pas supprimés. `NoteTools` (Layers.tsx) est la seule suppression de composant à HEAD (notes-v5@f1b51602 2026-11-08).

## 2. Composants shadcn/Radix importés avec le projet Lovable

Tous ajoutés par notes-v5@b1f17318 2026-10-21 et présents à HEAD. Aucun fichier de `src/notes` ne les importe (`git grep` à HEAD) : ils ne sont pas rendus par l'app. Seuls `calendar.tsx` et `chart.tsx` ont été touchés ensuite (notes-v5@75c22d63 2026-11-07, migration DayPicker 10 et Recharts 3).

| composant | fichier | rôle | variantes | première apparition | dernier état | notes |
|---|---|---|---|---|---|---|
| accordion | src/components/ui/accordion.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| alert-dialog | src/components/ui/alert-dialog.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| alert | src/components/ui/alert.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| aspect-ratio | src/components/ui/aspect-ratio.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| avatar | src/components/ui/avatar.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| badge | src/components/ui/badge.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| breadcrumb | src/components/ui/breadcrumb.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| button | src/components/ui/button.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| calendar | src/components/ui/calendar.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| card | src/components/ui/card.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| carousel | src/components/ui/carousel.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| chart | src/components/ui/chart.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| checkbox | src/components/ui/checkbox.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| collapsible | src/components/ui/collapsible.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| command | src/components/ui/command.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| context-menu | src/components/ui/context-menu.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| dialog | src/components/ui/dialog.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| drawer | src/components/ui/drawer.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| dropdown-menu | src/components/ui/dropdown-menu.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| form | src/components/ui/form.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| hover-card | src/components/ui/hover-card.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| input-otp | src/components/ui/input-otp.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| input | src/components/ui/input.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| label | src/components/ui/label.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| menubar | src/components/ui/menubar.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| navigation-menu | src/components/ui/navigation-menu.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| pagination | src/components/ui/pagination.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| popover | src/components/ui/popover.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| progress | src/components/ui/progress.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| radio-group | src/components/ui/radio-group.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| resizable | src/components/ui/resizable.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| scroll-area | src/components/ui/scroll-area.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| select | src/components/ui/select.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| separator | src/components/ui/separator.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| sheet | src/components/ui/sheet.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| sidebar | src/components/ui/sidebar.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| skeleton | src/components/ui/skeleton.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| slider | src/components/ui/slider.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| sonner | src/components/ui/sonner.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| switch | src/components/ui/switch.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| table | src/components/ui/table.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| tabs | src/components/ui/tabs.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| textarea | src/components/ui/textarea.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| toggle-group | src/components/ui/toggle-group.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| toggle | src/components/ui/toggle.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| tooltip | src/components/ui/tooltip.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |
| use-mobile | src/hooks/use-mobile.tsx | composant shadcn/ui (Radix + Tailwind) |  | notes-v5@b1f17318 2026-10-21 | HEAD | non utilisé par l'app |

## 3. Primitives CSS

| composant | fichier | rôle | variantes ou props visibles | première apparition | dernier état | notes |
|---|---|---|---|---|---|---|
| .ctl | src/notes/styles/app.css | Primitive de bouton unique : tailles is-s 34 / 44 / is-l 48 / is-xl 58 ; formes is-icon, is-stack, is-start ; surfaces is-fill, is-fill-strong, is-line, is-ink, is-accent, glass ; encres is-link, is-muted, is-faint, is-danger, is-armed ; has-dot |  | notes-v5@2466c955 2026-10-24 | HEAD |  |
| .fab | src/notes/styles/app.css | Bouton + (58px, ambre, forme dock-btn) |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| .island | src/notes/styles/app.css | Îlot flottant en verre : dock, barre d'outils d'en-tête |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| .glass | src/notes/styles/app.css | Surface de verre (flou saturé, liseré, reflet) |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| .card | src/notes/styles/app.css | Carte de note ; maçonnerie ; liseré de dossier |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| .widget | src/notes/styles/app.css | Widget de récap |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| .tile | src/notes/styles/app.css | Tuile de création |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| .lib-tile | src/notes/styles/app.css | Tuile de Bibliothèque |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| .lib-folder | src/notes/styles/app.css | Dossier de Bibliothèque en forme de chemise |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| .chip | src/notes/styles/app.css | Pastille : remplacée par .ctl en notes-v5@2466c955 |  | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| .icon-btn | src/notes/styles/app.css | Bouton icône : remplacé par .ctl en 2466c955 |  | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@2466c955 2026-10-24 |  |
| .sheet | src/notes/styles/app.css | Feuille du bas / tiroir latéral |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| .layer | src/notes/styles/app.css | Menu ancré ou panneau |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| .scrim | src/notes/styles/app.css | Voile derrière feuille ou menu |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| .segmented | src/notes/styles/app.css | Sélecteur segmenté |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| .switch | src/notes/styles/app.css | Interrupteur |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| .toast | src/notes/styles/app.css | Message |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| .option | src/notes/styles/app.css | Ligne d'option |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| .row | src/notes/styles/app.css | Ligne de menu |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| #nav-island | src/notes/styles/app.css | Île de navigation et pouce glissant |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| .nav-rail / barre latérale | src/notes/styles/app.css | Rail latéral ≥48em (f1b51602) |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| .rich-editor .tiptap | src/notes/styles/app.css | Contenu Tiptap |  | notes-v5@32e9bd9e 2026-11-08 | HEAD |  |
| .storage-alert | src/notes/styles/app.css | Bannière d'échec de stockage persistante |  | notes-v5@e32924bc 2026-11-07 | HEAD |  |
| .snapshot-tools | src/notes/styles/app.css | Panneau de snapshots |  | notes-v5@8ef0b652 2026-11-07 | HEAD |  |
| .today-grid / .capture-actions | src/notes/styles/app.css | Page Aujourd'hui (1c1fb148) |  | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| .calendar-grid | src/notes/styles/app.css | Grille du calendrier (32e9bd9e) |  | notes-v5@32e9bd9e 2026-11-08 | HEAD |  |
| .personalization | src/notes/styles/app.css | Personnalisation (1c1fb148) |  | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| .ambient | src/notes/styles/app.css | Fond d'ambiance : trois taches floues |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| [data-tone] | src/notes/styles/app.css | Teintes par type : 9 tons système puis accent/danger |  | notes-v5@b1f17318 2026-10-21 | HEAD |  |
