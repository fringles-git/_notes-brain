Source : notes-v3, commits lus : 135 (9 lignée notes-site, 83 lignée source main, 43 builds notes-v3-site), plage : 2026-10-09 à 2026-10-31

# Composants UI

Deux niveaux : (1) composants React de `src/ui/*.tsx` (fonctions ou constantes à majuscule) avec leur première apparition et leur dernier état, extraits de chaque commit ; (2) classes CSS de composants. La lignée notes-site est minifiée (noms de composants absents) : ses composants sont connus par leurs classes CSS.

## Classes CSS de composants (dock, FAB, îlots, feuilles, panneaux…)

| classe | lignée | première apparition | dernier état |
|---|---|---|---|
| `.dock` | bundle notes-site puis source | notes-v3@b6647a04 2026-10-09 | HEAD |
| `.main-dock` | source | notes-v3@4a4da608 2026-10-18 | HEAD |
| `.tab-btn` | source | notes-v3@4da62555 2026-10-18 | HEAD |
| `.fab` | bundle notes-site puis source | notes-v3@ea104c22 2026-10-15 | HEAD |
| `.island` | bundle notes-site puis source | notes-v3@b6647a04 2026-10-09 | HEAD |
| `.icon-btn` | bundle notes-site puis source | notes-v3@b6647a04 2026-10-09 | HEAD |
| `.chip` | source | notes-v3@4da62555 2026-10-18 | HEAD |
| `.card` | bundle notes-site puis source | notes-v3@b6647a04 2026-10-09 | HEAD |
| `.widget` | source | notes-v3@801d11fb 2026-10-18 | HEAD |
| `.recap` | source | notes-v3@801d11fb 2026-10-18 | HEAD |
| `.lib-tile` | source | notes-v3@801d11fb 2026-10-18 | HEAD |
| `.lib-folder` | source | notes-v3@801d11fb 2026-10-18 | HEAD |
| `.lib-tag` | source | notes-v3@801d11fb 2026-10-18 | HEAD |
| `.tile` | source | notes-v3@4da62555 2026-10-18 | HEAD |
| `.starters` | source | notes-v3@4a4da608 2026-10-18 | HEAD |
| `.switch` | source | notes-v3@801d11fb 2026-10-18 | HEAD |
| `.seg-thumb` | source | notes-v3@801d11fb 2026-10-18 | HEAD |
| `.segmented` | bundle notes-site puis source | notes-v3@b6647a04 2026-10-09 | HEAD |
| `.toast` | bundle notes-site puis source | notes-v3@b6647a04 2026-10-09 | HEAD |
| `.sheet` | bundle notes-site puis source | notes-v3@b6647a04 2026-10-09 | HEAD |
| `.layer` | source | notes-v3@4da62555 2026-10-18 | HEAD |
| `.scrim` | source | notes-v3@4da62555 2026-10-18 | HEAD |
| `.editor` | bundle notes-site puis source | notes-v3@b6647a04 2026-10-09 | HEAD |
| `.format-strip` | bundle notes-site puis source | notes-v3@637a0265 2026-10-09 | HEAD |
| `.folder-chip` | source | notes-v3@ba6e7b28 2026-10-19 | HEAD |
| `.note-tools` | source | notes-v3@a5bd51cb 2026-10-18 | HEAD |
| `.card-progress` | bundle notes-site puis source | notes-v3@b6647a04 2026-10-09 | HEAD |
| `.settings-list` | source | notes-v3@47c570df 2026-10-31 | HEAD |
| `.tbl` | source | notes-v3@9e7d5dd7 2026-10-29 | HEAD |
| `.tidy-pair` | source | notes-v3@0fa410ce 2026-10-29 | HEAD |
| `.diff-line` | source | notes-v3@ce4f8459 2026-10-31 | HEAD |
| `.rec-bar` | source | notes-v3@4da62555 2026-10-18 | HEAD |
| `.search-field` | bundle notes-site puis source | notes-v3@b6647a04 2026-10-09 | HEAD |
| `.header-tools` | bundle notes-site puis source | notes-v3@b6647a04 2026-10-09 | HEAD |
| `.task-item` | source | notes-v3@2c7478e4 2026-10-31 | HEAD |
| `.timeline` | bundle notes-site puis source | notes-v3@b99f70fc 2026-10-09 | HEAD |
| `.release` | bundle notes-site puis source | notes-v3@b99f70fc 2026-10-09 | HEAD |
| `.change-pill` | bundle notes-site puis source | notes-v3@b99f70fc 2026-10-09 | HEAD |
| `.version-pill` | bundle notes-site puis source | notes-v3@b99f70fc 2026-10-09 | HEAD |
| `.tour-bubble` | bundle notes-site puis source | notes-v3@637a0265 2026-10-09 | HEAD |
| `.pull-hint` | bundle notes-site puis source | notes-v3@b6647a04 2026-10-09 | HEAD |
| `.nav-tab` | bundle notes-site | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15), absent de la source |
| `.nav-bar` | bundle notes-site | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15), absent de la source |
| `.float-bar` | bundle notes-site | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15), absent de la source |
| `.create-island` | bundle notes-site | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉ notes-v3@ea104c22 2026-10-15 |
| `.create-tile` | bundle notes-site | notes-v3@ea104c22 2026-10-15 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15), absent de la source |
| `.popover` | bundle notes-site | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15), absent de la source |
| `.menu` | bundle notes-site | notes-v3@b6647a04 2026-10-09 | fin de la lignée notes-site (notes-v3@ea104c22 2026-10-15), absent de la source |
| `.badge` | bundle notes-site puis source | notes-v3@b6647a04 2026-10-09 | HEAD |
| `.state-mark` | source | notes-v3@d6af8790 2026-10-19 | HEAD |
| `.panel-close` | source | notes-v3@ef23bea4 2026-10-19 | HEAD |
| `.kbd` | source | notes-v3@35c0380c 2026-10-21 | HEAD |
| `.backup-code` | source | notes-v3@a5c92dad 2026-10-29 | HEAD |
| `.import-conflicts` | source | notes-v3@c3ec060f 2026-10-21 | HEAD |
| `.version-preview` | source | notes-v3@c3ec060f 2026-10-21 | HEAD |
| `.accent-dot` | source | notes-v3@fbf13b31 2026-10-24 | HEAD |
| `.swipe-icon` | bundle notes-site puis source | notes-v3@b6647a04 2026-10-09 | HEAD |
| `.card-grip` | bundle notes-site puis source | notes-v3@b6647a04 2026-10-09 | HEAD |
| `.recover` | source | notes-v3@c3ec060f 2026-10-21 | HEAD |
| `.about-icon` | bundle notes-site puis source | notes-v3@637a0265 2026-10-09 | HEAD |
| `.art-card` | bundle notes-site puis source | notes-v3@637a0265 2026-10-09 | HEAD |

Remarque : une classe supprimée puis réintroduite garde une seule ligne ici, avec sa première apparition ; exemple `.card-progress` (bundle) est retirée par ea104c2 puis recréée par a5bd51c ; le détail propriété par propriété est dans les tableaux de colors, typography, radius-spacing et elevation-motion.


## Variantes et props visibles (lues dans le code)

- `Layer` (kit.tsx) : props `anchor` (placée à côté du bouton, notes-v3@801d11fb 2026-10-18), `drawer` (panneau plein hauteur du côté du pouce, notes-v3@ba6e7b28 2026-10-19), `inspector` (non modal, sans voile, ✕, notes-v3@ef23bea4 2026-10-19) ; scrim `data-light`.

- `Segmented`/`Switch` : fond glissant `.seg-thumb` (notes-v3@801d11fb 2026-10-18), interrupteur coulissant puis carré ÷3 avec ✓/− (notes-v3@d6af8790 2026-10-19).

- `Chip` : `data-tone`, `aria-pressed`, zone tactile 44px (notes-v3@369fe07a 2026-10-19).

- `Fab` : appui = menu Créer (Note, Vocal, Importer) ; appui long / glisser depuis + (notes-v3@e15376fa 2026-10-19) ; `aria-keyshortcuts="N"` (notes-v3@90cbc970 2026-10-20).

- Dock : `MainDock` (navigation + FAB), `SearchDock` (jusqu'à notes-v3@2c7478e4 2026-10-31), `SelectionDock` (compact), `RecordingBar` (`.rec-bar`).


## Composants React

| nom | fichier | rôle (commentaire du code ou nom) | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| Dock | src/ui/Dock.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Fab | src/ui/Dock.tsx | + : a tap writes a new note; a long press (or right-click) opens the Create sheet. | notes-v3@4da62555 2026-10-18 | HEAD |  |
| MainDock | src/ui/Dock.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| RecordingBar | src/ui/Dock.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| SearchDock | src/ui/Dock.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| SelectionDock | src/ui/Dock.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Attachments | src/ui/Editor.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Editor | src/ui/Editor.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| FormatStrip | src/ui/Editor.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Found | src/ui/Editor.tsx | Dates, places, numbers and links found in the note, as buttons. | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Player | src/ui/Editor.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| SaveStatus | src/ui/Editor.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| FileInputs | src/ui/Files.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| CollectionEditRow | src/ui/Layers.tsx | — | notes-v3@4da62555 2026-10-18 | REMPLACÉ par Library.tsx::CollectionEditRow (déplacé) notes-v3@d6af8790 2026-10-19 | déplacé |
| Create | src/ui/Layers.tsx | ---------- Create (long press on +) ---------- | notes-v3@4da62555 2026-10-18 | HEAD |  |
| FolderEditRow | src/ui/Layers.tsx | ---------- Library ---------- | notes-v3@4da62555 2026-10-18 | REMPLACÉ par Library.tsx::FolderEditRow (déplacé) notes-v3@d6af8790 2026-10-19 | déplacé |
| Hint | src/ui/Layers.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| History | src/ui/Layers.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Import | src/ui/Layers.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| IosInstall | src/ui/Layers.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| LayerHost | src/ui/Layers.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Library | src/ui/Layers.tsx | — | notes-v3@4da62555 2026-10-18 | REMPLACÉ par Library.tsx::Library (déplacé) notes-v3@d6af8790 2026-10-19 | déplacé |
| ListActions | src/ui/Layers.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| NewFolder | src/ui/Layers.tsx | — | notes-v3@4da62555 2026-10-18 | REMPLACÉ par kit.tsx::NewFolder (déplacé) notes-v3@d6af8790 2026-10-19 | déplacé |
| NoteMenu | src/ui/Layers.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| NoteTools | src/ui/Layers.tsx | ---------- Note menu ---------- | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Outline | src/ui/Layers.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Picker | src/ui/Layers.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Pin | src/ui/Layers.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Remind | src/ui/Layers.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| SelMore | src/ui/Layers.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| TabRow | src/ui/Layers.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Templates | src/ui/Layers.tsx | — | notes-v3@4da62555 2026-10-18 | SUPPRIMÉ notes-v3@4a4da608 2026-10-18 |  |
| Title | src/ui/Layers.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| View | src/ui/Layers.tsx | — | notes-v3@4da62555 2026-10-18 | SUPPRIMÉ notes-v3@4a4da608 2026-10-18 |  |
| Card | src/ui/List.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| CardBody | src/ui/List.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| CardFooter | src/ui/List.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| CardMedia | src/ui/List.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Count | src/ui/List.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Empty | src/ui/List.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Header | src/ui/List.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| InfoBar | src/ui/List.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| NoteList | src/ui/List.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Wave | src/ui/List.tsx | ---------- Card ---------- | notes-v3@4da62555 2026-10-18 | HEAD |  |
| About | src/ui/Sheets.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Btn | src/ui/Sheets.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| ChangeGroup | src/ui/Sheets.tsx | — | notes-v3@4da62555 2026-10-18 | REMPLACÉ par Changelog.tsx::ChangeGroup (déplacé) notes-v3@66b9f4b6 2026-10-24 | déplacé |
| Empty | src/ui/Sheets.tsx | — | notes-v3@4da62555 2026-10-18 | REMPLACÉ par kit.tsx::Empty (déplacé) notes-v3@0fa410ce 2026-10-29 | déplacé |
| LinkMap | src/ui/Sheets.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| News | src/ui/Sheets.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Overview | src/ui/Sheets.tsx | ---------- Overview of a folder, tag or collection ---------- | notes-v3@4da62555 2026-10-18 | HEAD |  |
| PrintArea | src/ui/Sheets.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Section | src/ui/Sheets.tsx | — | notes-v3@4da62555 2026-10-18 | REMPLACÉ par kit.tsx::Section (déplacé) notes-v3@66b9f4b6 2026-10-24 | déplacé |
| Settings | src/ui/Sheets.tsx | ---------- Settings ---------- | notes-v3@4da62555 2026-10-18 | SUPPRIMÉ notes-v3@47c570df 2026-10-31 |  |
| SheetHost | src/ui/Sheets.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Study | src/ui/Sheets.tsx | ---------- Study ---------- | notes-v3@4da62555 2026-10-18 | HEAD |  |
| StudyFoot | src/ui/Sheets.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Timeline | src/ui/Sheets.tsx | — | notes-v3@4da62555 2026-10-18 | REMPLACÉ par Changelog.tsx::Timeline (déplacé) notes-v3@66b9f4b6 2026-10-24 | déplacé |
| Toast | src/ui/Sheets.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Art | src/ui/Welcome.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Feature | src/ui/Welcome.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Tour | src/ui/Welcome.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Welcome | src/ui/Welcome.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Icon | src/ui/icons.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Chip | src/ui/kit.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| FolderTag | src/ui/kit.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Formatted | src/ui/kit.tsx | Renders a note body; `lines` wraps each source line (for the editor's tap-to-edit). | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Highlight | src/ui/kit.tsx | ---------- Text ---------- | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Inline | src/ui/kit.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| InlineForm | src/ui/kit.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Layer | src/ui/kit.tsx | A bottom-anchored glass panel with its own scrim. Focus moves in on open and back on clos… | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Option | src/ui/kit.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Row | src/ui/kit.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Segmented | src/ui/kit.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Tagged | src/ui/kit.tsx | — | notes-v3@4da62555 2026-10-18 | HEAD |  |
| Recap | src/ui/List.tsx | — | notes-v3@801d11fb 2026-10-18 | HEAD |  |
| Switch | src/ui/kit.tsx | On/off with a sliding knob. | notes-v3@801d11fb 2026-10-18 | HEAD |  |
| Filter | src/ui/Layers.tsx | — | notes-v3@4a4da608 2026-10-18 | SUPPRIMÉ notes-v3@1224a586 2026-10-18 |  |
| Filter | src/ui/Layers.tsx | Filter by kind of content, and sort: one place, from the top island. | notes-v3@2c7478e4 2026-10-31 | HEAD |  |
| Sort | src/ui/Layers.tsx | — | notes-v3@4a4da608 2026-10-18 | SUPPRIMÉ notes-v3@2c7478e4 2026-10-31 |  |
| Tools | src/ui/Editor.tsx | Outline, flashcards and link map, one tap away under the title. | notes-v3@a5bd51cb 2026-10-18 | HEAD |  |
| CollectionEditRow | src/ui/Library.tsx | — | notes-v3@d6af8790 2026-10-19 | HEAD |  |
| FolderEditRow | src/ui/Library.tsx | — | notes-v3@d6af8790 2026-10-19 | HEAD |  |
| Library | src/ui/Library.tsx | — | notes-v3@d6af8790 2026-10-19 | HEAD |  |
| NewFolder | src/ui/kit.tsx | — | notes-v3@d6af8790 2026-10-19 | HEAD |  |
| StateMark | src/ui/kit.tsx | State mark: one small squared badge for every "what kind of change" signal (patch notes, … | notes-v3@d6af8790 2026-10-19 | HEAD |  |
| LiveText | src/ui/Editor.tsx | Live text: the words of a photo or PDF go into the note in one tap (read first if needed). | notes-v3@e15376fa 2026-10-19 | HEAD |  |
| FirstUse | src/ui/List.tsx | First use: the workspace starts empty — no tutorial notes — with one invitation that leav… | notes-v3@35c0380c 2026-10-21 | HEAD |  |
| QuickActions | src/ui/List.tsx | With a mouse, hovering a card offers its three most used actions (touch has the swipes). … | notes-v3@35c0380c 2026-10-21 | HEAD |  |
| Changes | src/ui/Sheets.tsx | — | notes-v3@35c0380c 2026-10-21 | REMPLACÉ par Changelog.tsx::Changes (déplacé) notes-v3@66b9f4b6 2026-10-24 | déplacé |
| Guide | src/ui/Sheets.tsx | The guide, from Réglages › Aide: read like a note, kept out of the notes. | notes-v3@35c0380c 2026-10-21 | HEAD |  |
| ImportReview | src/ui/Layers.tsx | — | notes-v3@c3ec060f 2026-10-21 | HEAD |  |
| About | src/ui/Changelog.tsx | — | notes-v3@66b9f4b6 2026-10-24 | HEAD |  |
| ChangeGroup | src/ui/Changelog.tsx | — | notes-v3@66b9f4b6 2026-10-24 | HEAD |  |
| Changes | src/ui/Changelog.tsx | — | notes-v3@66b9f4b6 2026-10-24 | HEAD |  |
| Guide | src/ui/Changelog.tsx | The guide, from Réglages › Aide: read like a note, kept out of the notes. | notes-v3@66b9f4b6 2026-10-24 | HEAD |  |
| News | src/ui/Changelog.tsx | — | notes-v3@66b9f4b6 2026-10-24 | HEAD |  |
| Timeline | src/ui/Changelog.tsx | — | notes-v3@66b9f4b6 2026-10-24 | HEAD |  |
| Section | src/ui/kit.tsx | — | notes-v3@66b9f4b6 2026-10-24 | HEAD |  |
| TablePanel | src/ui/Editor.tsx | — | notes-v3@9e7d5dd7 2026-10-29 | HEAD |  |
| TableEditor | src/ui/Table.tsx | — | notes-v3@9e7d5dd7 2026-10-29 | HEAD |  |
| TablePanel | src/ui/Table.tsx | Row, column, header, merge, alignment and delete, in two rows of grouped tiles. Pressing … | notes-v3@9e7d5dd7 2026-10-29 | HEAD |  |
| TableEditor | src/ui/kit.tsx | A table, read only (cards, printing); the editor's cells load apart, only when a note sho… | notes-v3@9e7d5dd7 2026-10-29 | HEAD |  |
| TableView | src/ui/kit.tsx | — | notes-v3@9e7d5dd7 2026-10-29 | HEAD |  |
| Starters | src/ui/Editor.tsx | An empty note offers List and Flashcard; the rarer shapes wait behind « Autres modèles » … | notes-v3@d84b552a 2026-10-29 | HEAD |  |
| BackupCode | src/ui/Layers.tsx | Shown once, right after an export with the hidden notes: the only key to them outside thi… | notes-v3@a5c92dad 2026-10-29 | HEAD |  |
| TagPeek | src/ui/Layers.tsx | A #tag touched in a note on a phone: its other notes over the open one, which stays where… | notes-v3@c218aba2 2026-10-29 | HEAD |  |
| Tidy | src/ui/Sheets.tsx | Ranger: the comparison loads with its sheet (Tidy.tsx, tidy.ts) | notes-v3@0fa410ce 2026-10-29 | HEAD |  |
| Tidy | src/ui/Tidy.tsx | — | notes-v3@0fa410ce 2026-10-29 | HEAD |  |
| TidyPair | src/ui/Tidy.tsx | — | notes-v3@0fa410ce 2026-10-29 | HEAD |  |
| Empty | src/ui/kit.tsx | — | notes-v3@0fa410ce 2026-10-29 | HEAD |  |
| NoteTag | src/ui/Tidy.tsx | — | notes-v3@2c5e96f5 2026-10-29 | HEAD |  |
| NoteTasks | src/ui/Tidy.tsx | — | notes-v3@2c5e96f5 2026-10-29 | HEAD |  |
| BackupPhrase | src/ui/Layers.tsx | The recovery phrase of the encrypted backups: shown again whenever asked, since it lives … | notes-v3@40209be2 2026-10-31 | HEAD |  |
| BackupUnlock | src/ui/Layers.tsx | A backup file that is encrypted, opened with the phrase of the device that made it. | notes-v3@40209be2 2026-10-31 | HEAD |  |
| Appearance | src/ui/Layers.tsx | The few choices that change how it looks, within reach of the top island; the rest of the… | notes-v3@2c7478e4 2026-10-31 | HEAD |  |
| HeaderTools | src/ui/List.tsx | The top island: search, filter and sort, appearance (and what a page adds). Search is a m… | notes-v3@2c7478e4 2026-10-31 | HEAD |  |
| Tasks | src/ui/Tasks.tsx | — | notes-v3@2c7478e4 2026-10-31 | HEAD |  |
| Aide | src/ui/SettingsPage.tsx | — | notes-v3@47c570df 2026-10-31 | HEAD |  |
| Apparence | src/ui/SettingsPage.tsx | — | notes-v3@47c570df 2026-10-31 | HEAD |  |
| Application | src/ui/SettingsPage.tsx | — | notes-v3@47c570df 2026-10-31 | HEAD |  |
| Masquees | src/ui/SettingsPage.tsx | — | notes-v3@47c570df 2026-10-31 | HEAD |  |
| Recherche | src/ui/SettingsPage.tsx | — | notes-v3@47c570df 2026-10-31 | HEAD |  |
| Sauvegarde | src/ui/SettingsPage.tsx | — | notes-v3@47c570df 2026-10-31 | HEAD |  |
| SettingsPage | src/ui/SettingsPage.tsx | — | notes-v3@47c570df 2026-10-31 | HEAD |  |
| SyncPhrase | src/ui/Layers.tsx | A folder that another device already syncs: its phrase opens it. | notes-v3@ac5e4bc9 2026-10-31 | HEAD |  |
| Synchro | src/ui/SettingsPage.tsx | — | notes-v3@ac5e4bc9 2026-10-31 | HEAD |  |
| Conflict | src/ui/Conflict.tsx | — | notes-v3@ce4f8459 2026-10-31 | HEAD |  |
| Conflict | src/ui/Sheets.tsx | Ranger: the comparison loads with its sheet (Tidy.tsx, tidy.ts) | notes-v3@ce4f8459 2026-10-31 | HEAD |  |
