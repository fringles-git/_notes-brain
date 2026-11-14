Source : notes-v5, commits lus : 132, plage : 2026-10-21 à 2026-11-11

Icônes : jeu en ligne de l'application (`icons.tsx`, 77 tracés), bibliothèque `lucide-react` (uniquement dans les fichiers shadcn), icônes d'application (PWA, favicon, apple-touch).

## 1. Jeu d'icônes en ligne de l'application

Composant `Icon({name})` : `<svg viewBox="0 0 24 24" aria-hidden="true">` rempli par `dangerouslySetInnerHTML` depuis le dictionnaire `icons` de `src/notes/ui/icons.tsx`. Style commun dans app.css (`svg { width: 22px; height: 22px; fill: none; stroke: currentColor; stroke-width: 1.75; stroke-linecap: round; stroke-linejoin: round; }`, présent depuis notes-v5@b1f17318 2026-10-21). Les fichiers de `svg/` reprennent ces attributs. Empreinte = 8 premiers caractères du sha1 du tracé (chaîne interne, espaces normalisés).

Historique du dictionnaire (vérifié commit par commit, `git log -- icons.tsx`) :
- notes-v5@b1f17318 2026-10-21 : 67 icônes.
- notes-v5@32e9bd9e 2026-11-08 : +9 (home, user, ascending, descending, undo, redo, table, code, forward) = 76.
- notes-v5@89526ff2 2026-11-11 : +1 (eraser) = 77.
- Aucune icône retirée ; aucun tracé modifié (donc un seul fichier svg par icône).
- Nom référencé mais non défini : `broom` dans Sketch.tsx entre notes-v5@1c1fb148 2026-11-11 et notes-v5@89526ff2 2026-11-11 (corrigé en `eraser`).
- Icônes non utilisées à HEAD : user, ascending, descending.

| icône | source | empreinte | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| home | SVG en ligne dans src/notes/ui/icons.tsx | 009f6eb2 | notes-v5@32e9bd9e 2026-11-08 | HEAD | fichier svg/home-009f6eb2.svg ; 8 référence(s) dans src/notes à HEAD |
| user | SVG en ligne dans src/notes/ui/icons.tsx | e09af6bc | notes-v5@32e9bd9e 2026-11-08 | HEAD (présente mais plus utilisée depuis notes-v5@f1b51602 2026-11-08) | fichier svg/user-e09af6bc.svg ; utilisée dans l'en-tête de List.tsx à notes-v5@32e9bd9e (profil local, ordre croissant/décroissant) |
| ascending | SVG en ligne dans src/notes/ui/icons.tsx | ff385c46 | notes-v5@32e9bd9e 2026-11-08 | HEAD (présente mais plus utilisée depuis notes-v5@f1b51602 2026-11-08) | fichier svg/ascending-ff385c46.svg ; utilisée dans l'en-tête de List.tsx à notes-v5@32e9bd9e (profil local, ordre croissant/décroissant) |
| descending | SVG en ligne dans src/notes/ui/icons.tsx | 667eb975 | notes-v5@32e9bd9e 2026-11-08 | HEAD (présente mais plus utilisée depuis notes-v5@f1b51602 2026-11-08) | fichier svg/descending-667eb975.svg ; utilisée dans l'en-tête de List.tsx à notes-v5@32e9bd9e (profil local, ordre croissant/décroissant) |
| undo | SVG en ligne dans src/notes/ui/icons.tsx | 3d118974 | notes-v5@32e9bd9e 2026-11-08 | HEAD | fichier svg/undo-3d118974.svg ; 8 référence(s) dans src/notes à HEAD |
| redo | SVG en ligne dans src/notes/ui/icons.tsx | 01ea4006 | notes-v5@32e9bd9e 2026-11-08 | HEAD | fichier svg/redo-01ea4006.svg ; 6 référence(s) dans src/notes à HEAD |
| table | SVG en ligne dans src/notes/ui/icons.tsx | b7bf08ed | notes-v5@32e9bd9e 2026-11-08 | HEAD | fichier svg/table-b7bf08ed.svg ; 3 référence(s) dans src/notes à HEAD |
| eraser | SVG en ligne dans src/notes/ui/icons.tsx | 348caa3c | notes-v5@89526ff2 2026-11-11 | HEAD | fichier svg/eraser-348caa3c.svg ; 7 référence(s) dans src/notes à HEAD ; ajoutée pour remplacer `broom`, nom appelé par Sketch.tsx mais jamais défini (notes-v5@1c1fb148 à notes-v5@89526ff2) |
| code | SVG en ligne dans src/notes/ui/icons.tsx | 3d95ace5 | notes-v5@32e9bd9e 2026-11-08 | HEAD | fichier svg/code-3d95ace5.svg ; 1 référence(s) dans src/notes à HEAD |
| forward | SVG en ligne dans src/notes/ui/icons.tsx | 05b7efc8 | notes-v5@32e9bd9e 2026-11-08 | HEAD | fichier svg/forward-05b7efc8.svg ; 11 référence(s) dans src/notes à HEAD |
| back | SVG en ligne dans src/notes/ui/icons.tsx | 5899fce0 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/back-5899fce0.svg ; 9 référence(s) dans src/notes à HEAD |
| search | SVG en ligne dans src/notes/ui/icons.tsx | db61e26f | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/search-db61e26f.svg ; 6 référence(s) dans src/notes à HEAD |
| filter | SVG en ligne dans src/notes/ui/icons.tsx | 56984e1d | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/filter-56984e1d.svg ; 5 référence(s) dans src/notes à HEAD |
| sort | SVG en ligne dans src/notes/ui/icons.tsx | 28c59bf3 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/sort-28c59bf3.svg ; 7 référence(s) dans src/notes à HEAD |
| settings | SVG en ligne dans src/notes/ui/icons.tsx | 56cda94a | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/settings-56cda94a.svg ; 13 référence(s) dans src/notes à HEAD |
| attach | SVG en ligne dans src/notes/ui/icons.tsx | 78a9a920 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/attach-78a9a920.svg ; 2 référence(s) dans src/notes à HEAD |
| mic | SVG en ligne dans src/notes/ui/icons.tsx | b86154b5 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/mic-b86154b5.svg ; 4 référence(s) dans src/notes à HEAD |
| plus | SVG en ligne dans src/notes/ui/icons.tsx | 083e7f93 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/plus-083e7f93.svg ; 5 référence(s) dans src/notes à HEAD |
| selectAll | SVG en ligne dans src/notes/ui/icons.tsx | 959c4c86 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/selectAll-959c4c86.svg ; 1 référence(s) dans src/notes à HEAD |
| move | SVG en ligne dans src/notes/ui/icons.tsx | 0b4740a6 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/move-0b4740a6.svg ; 2 référence(s) dans src/notes à HEAD |
| checklist | SVG en ligne dans src/notes/ui/icons.tsx | fcadc6e7 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/checklist-fcadc6e7.svg ; 9 référence(s) dans src/notes à HEAD |
| camera | SVG en ligne dans src/notes/ui/icons.tsx | 9b71b38e | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/camera-9b71b38e.svg ; 4 référence(s) dans src/notes à HEAD |
| check | SVG en ligne dans src/notes/ui/icons.tsx | e857cf71 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/check-e857cf71.svg ; 17 référence(s) dans src/notes à HEAD |
| minus | SVG en ligne dans src/notes/ui/icons.tsx | a09d0137 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/minus-a09d0137.svg ; 1 référence(s) dans src/notes à HEAD |
| pin | SVG en ligne dans src/notes/ui/icons.tsx | d079e25b | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/pin-d079e25b.svg ; 13 référence(s) dans src/notes à HEAD |
| lock | SVG en ligne dans src/notes/ui/icons.tsx | a1ba290d | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/lock-a1ba290d.svg ; 7 référence(s) dans src/notes à HEAD |
| edit | SVG en ligne dans src/notes/ui/icons.tsx | cadbac7c | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/edit-cadbac7c.svg ; 11 référence(s) dans src/notes à HEAD |
| restore | SVG en ligne dans src/notes/ui/icons.tsx | 1b53c56e | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/restore-1b53c56e.svg ; 5 référence(s) dans src/notes à HEAD |
| all | SVG en ligne dans src/notes/ui/icons.tsx | cb54ca93 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/all-cb54ca93.svg ; 30 référence(s) dans src/notes à HEAD |
| trash | SVG en ligne dans src/notes/ui/icons.tsx | 404ee0cf | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/trash-404ee0cf.svg ; 26 référence(s) dans src/notes à HEAD |
| folder | SVG en ligne dans src/notes/ui/icons.tsx | 3cdb3c91 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/folder-3cdb3c91.svg ; 10 référence(s) dans src/notes à HEAD |
| folderNew | SVG en ligne dans src/notes/ui/icons.tsx | 6d7112d5 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/folderNew-6d7112d5.svg ; 2 référence(s) dans src/notes à HEAD |
| library | SVG en ligne dans src/notes/ui/icons.tsx | 58d3d040 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/library-58d3d040.svg ; 12 référence(s) dans src/notes à HEAD |
| close | SVG en ligne dans src/notes/ui/icons.tsx | 3b0b8a9b | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/close-3b0b8a9b.svg ; 13 référence(s) dans src/notes à HEAD |
| image | SVG en ligne dans src/notes/ui/icons.tsx | 44374186 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/image-44374186.svg ; 20 référence(s) dans src/notes à HEAD |
| cards | SVG en ligne dans src/notes/ui/icons.tsx | c516fdcd | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/cards-c516fdcd.svg ; 11 référence(s) dans src/notes à HEAD |
| list | SVG en ligne dans src/notes/ui/icons.tsx | 499e714e | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/list-499e714e.svg ; 17 référence(s) dans src/notes à HEAD |
| themeAuto | SVG en ligne dans src/notes/ui/icons.tsx | ccb1e06a | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/themeAuto-ccb1e06a.svg ; 2 référence(s) dans src/notes à HEAD |
| themeLight | SVG en ligne dans src/notes/ui/icons.tsx | 4e4439fe | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/themeLight-4e4439fe.svg ; 1 référence(s) dans src/notes à HEAD |
| themeDark | SVG en ligne dans src/notes/ui/icons.tsx | 551d7c4d | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/themeDark-551d7c4d.svg ; 1 référence(s) dans src/notes à HEAD |
| audio | SVG en ligne dans src/notes/ui/icons.tsx | 2dfdd927 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/audio-2dfdd927.svg ; 26 référence(s) dans src/notes à HEAD |
| play | SVG en ligne dans src/notes/ui/icons.tsx | 999041e5 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/play-999041e5.svg ; 6 référence(s) dans src/notes à HEAD |
| pause | SVG en ligne dans src/notes/ui/icons.tsx | e85e1ed2 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/pause-e85e1ed2.svg ; 4 référence(s) dans src/notes à HEAD |
| bell | SVG en ligne dans src/notes/ui/icons.tsx | 7d5a30b0 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/bell-7d5a30b0.svg ; 5 référence(s) dans src/notes à HEAD |
| share | SVG en ligne dans src/notes/ui/icons.tsx | a0d06e5a | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/share-a0d06e5a.svg ; 4 référence(s) dans src/notes à HEAD |
| history | SVG en ligne dans src/notes/ui/icons.tsx | b13eb3bc | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/history-b13eb3bc.svg ; 8 référence(s) dans src/notes à HEAD |
| grip | SVG en ligne dans src/notes/ui/icons.tsx | e93ce473 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/grip-e93ce473.svg ; 1 référence(s) dans src/notes à HEAD |
| more | SVG en ligne dans src/notes/ui/icons.tsx | 7a3d4c16 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/more-7a3d4c16.svg ; 3 référence(s) dans src/notes à HEAD |
| link | SVG en ligne dans src/notes/ui/icons.tsx | d7b2640c | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/link-d7b2640c.svg ; 13 référence(s) dans src/notes à HEAD |
| phone | SVG en ligne dans src/notes/ui/icons.tsx | a5affc36 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/phone-a5affc36.svg ; 1 référence(s) dans src/notes à HEAD |
| mail | SVG en ligne dans src/notes/ui/icons.tsx | d8e93851 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/mail-d8e93851.svg ; 1 référence(s) dans src/notes à HEAD |
| mapPin | SVG en ligne dans src/notes/ui/icons.tsx | bc719aaa | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/mapPin-bc719aaa.svg ; 1 référence(s) dans src/notes à HEAD |
| calendar | SVG en ligne dans src/notes/ui/icons.tsx | c1dfd79a | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/calendar-c1dfd79a.svg ; 15 référence(s) dans src/notes à HEAD |
| paste | SVG en ligne dans src/notes/ui/icons.tsx | 71069abb | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/paste-71069abb.svg ; 4 référence(s) dans src/notes à HEAD |
| merge | SVG en ligne dans src/notes/ui/icons.tsx | d9b68b52 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/merge-d9b68b52.svg ; 1 référence(s) dans src/notes à HEAD |
| study | SVG en ligne dans src/notes/ui/icons.tsx | aaf5b02a | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/study-aaf5b02a.svg ; 14 référence(s) dans src/notes à HEAD |
| extract | SVG en ligne dans src/notes/ui/icons.tsx | 522db1c6 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/extract-522db1c6.svg ; 1 référence(s) dans src/notes à HEAD |
| biometric | SVG en ligne dans src/notes/ui/icons.tsx | 7e595b57 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/biometric-7e595b57.svg ; 1 référence(s) dans src/notes à HEAD |
| liveText | SVG en ligne dans src/notes/ui/icons.tsx | c99f3604 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/liveText-c99f3604.svg ; 1 référence(s) dans src/notes à HEAD |
| doc | SVG en ligne dans src/notes/ui/icons.tsx | 0b8d3922 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/doc-0b8d3922.svg ; 6 référence(s) dans src/notes à HEAD |
| graph | SVG en ligne dans src/notes/ui/icons.tsx | 986d576e | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/graph-986d576e.svg ; 3 référence(s) dans src/notes à HEAD |
| print | SVG en ligne dans src/notes/ui/icons.tsx | 8329aae3 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/print-8329aae3.svg ; 1 référence(s) dans src/notes à HEAD |
| download | SVG en ligne dans src/notes/ui/icons.tsx | 4f86e2ac | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/download-4f86e2ac.svg ; 5 référence(s) dans src/notes à HEAD |
| outline | SVG en ligne dans src/notes/ui/icons.tsx | 480c55d4 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/outline-480c55d4.svg ; 6 référence(s) dans src/notes à HEAD |
| listReset | SVG en ligne dans src/notes/ui/icons.tsx | e954fec3 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/listReset-e954fec3.svg ; 2 référence(s) dans src/notes à HEAD |
| bullets | SVG en ligne dans src/notes/ui/icons.tsx | 9a7c601c | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/bullets-9a7c601c.svg ; 1 référence(s) dans src/notes à HEAD |
| numbers | SVG en ligne dans src/notes/ui/icons.tsx | 5dc25e9d | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/numbers-5dc25e9d.svg ; 1 référence(s) dans src/notes à HEAD |
| highlight | SVG en ligne dans src/notes/ui/icons.tsx | c2d37bf3 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/highlight-c2d37bf3.svg ; 2 référence(s) dans src/notes à HEAD |
| tour | SVG en ligne dans src/notes/ui/icons.tsx | 9cfd4f40 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/tour-9cfd4f40.svg ; 1 référence(s) dans src/notes à HEAD |
| sparkle | SVG en ligne dans src/notes/ui/icons.tsx | d19d82d3 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/sparkle-d19d82d3.svg ; 1 référence(s) dans src/notes à HEAD |
| bug | SVG en ligne dans src/notes/ui/icons.tsx | 14bf43f5 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/bug-14bf43f5.svg ; 2 référence(s) dans src/notes à HEAD |
| improve | SVG en ligne dans src/notes/ui/icons.tsx | f5620024 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/improve-f5620024.svg ; 1 référence(s) dans src/notes à HEAD |
| arrowRight | SVG en ligne dans src/notes/ui/icons.tsx | 0e3224d2 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/arrowRight-0e3224d2.svg ; 1 référence(s) dans src/notes à HEAD |
| slides | SVG en ligne dans src/notes/ui/icons.tsx | 19d701aa | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/slides-19d701aa.svg ; 1 référence(s) dans src/notes à HEAD |
| hash | SVG en ligne dans src/notes/ui/icons.tsx | 71a61110 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/hash-71a61110.svg ; 2 référence(s) dans src/notes à HEAD |
| offline | SVG en ligne dans src/notes/ui/icons.tsx | 99ac30c3 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/offline-99ac30c3.svg ; 1 référence(s) dans src/notes à HEAD |
| hand | SVG en ligne dans src/notes/ui/icons.tsx | 7654db72 | notes-v5@b1f17318 2026-10-21 | HEAD | fichier svg/hand-7654db72.svg ; 5 référence(s) dans src/notes à HEAD |

## 2. lucide-react

Version : `^0.575.0` (package.json, notes-v5@b1f17318 2026-10-21) puis `1.70.0` épinglée (notes-v5@75c22d63 2026-11-07, lot de 62 mises à jour). Aucun import dans `src/notes` ni `src/main.tsx` : seuls les composants shadcn de `src/components/ui/` l'importent, et l'app ne les importe pas (recherche `git grep` à HEAD). Ce sont des icônes de boilerplate Lovable, pas des icônes visibles de l'app.

| icône | source | empreinte | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| ArrowLeft | lucide-react@^0.575.0 puis 1.70.0 | - | notes-v5@b1f17318 2026-10-21 | HEAD | importée par carousel.tsx |
| ArrowRight | lucide-react@^0.575.0 puis 1.70.0 | - | notes-v5@b1f17318 2026-10-21 | HEAD | importée par carousel.tsx |
| Check | lucide-react@^0.575.0 puis 1.70.0 | - | notes-v5@b1f17318 2026-10-21 | HEAD | importée par checkbox.tsx, context-menu.tsx, dropdown-menu.tsx, menubar.tsx, select.tsx |
| ChevronDown | lucide-react@^0.575.0 puis 1.70.0 | - | notes-v5@b1f17318 2026-10-21 | HEAD | importée par accordion.tsx, navigation-menu.tsx, select.tsx |
| ChevronDownIcon | lucide-react@^0.575.0 puis 1.70.0 | - | notes-v5@b1f17318 2026-10-21 | HEAD | importée par calendar.tsx |
| ChevronLeft | lucide-react@^0.575.0 puis 1.70.0 | - | notes-v5@b1f17318 2026-10-21 | HEAD | importée par pagination.tsx |
| ChevronLeftIcon | lucide-react@^0.575.0 puis 1.70.0 | - | notes-v5@b1f17318 2026-10-21 | HEAD | importée par calendar.tsx |
| ChevronRight | lucide-react@^0.575.0 puis 1.70.0 | - | notes-v5@b1f17318 2026-10-21 | HEAD | importée par breadcrumb.tsx, context-menu.tsx, dropdown-menu.tsx, menubar.tsx, pagination.tsx |
| ChevronRightIcon | lucide-react@^0.575.0 puis 1.70.0 | - | notes-v5@b1f17318 2026-10-21 | HEAD | importée par calendar.tsx |
| ChevronUp | lucide-react@^0.575.0 puis 1.70.0 | - | notes-v5@b1f17318 2026-10-21 | HEAD | importée par select.tsx |
| Circle | lucide-react@^0.575.0 puis 1.70.0 | - | notes-v5@b1f17318 2026-10-21 | HEAD | importée par context-menu.tsx, dropdown-menu.tsx, menubar.tsx, radio-group.tsx |
| GripVertical | lucide-react@^0.575.0 puis 1.70.0 | - | notes-v5@b1f17318 2026-10-21 | HEAD | importée par resizable.tsx |
| Minus | lucide-react@^0.575.0 puis 1.70.0 | - | notes-v5@b1f17318 2026-10-21 | HEAD | importée par input-otp.tsx |
| MoreHorizontal | lucide-react@^0.575.0 puis 1.70.0 | - | notes-v5@b1f17318 2026-10-21 | HEAD | importée par breadcrumb.tsx, pagination.tsx |
| PanelLeft | lucide-react@^0.575.0 puis 1.70.0 | - | notes-v5@b1f17318 2026-10-21 | HEAD | importée par sidebar.tsx |
| Search | lucide-react@^0.575.0 puis 1.70.0 | - | notes-v5@b1f17318 2026-10-21 | HEAD | importée par command.tsx |
| X | lucide-react@^0.575.0 puis 1.70.0 | - | notes-v5@b1f17318 2026-10-21 | HEAD | importée par dialog.tsx, sheet.tsx |

Ensemble inchangé aux trois points relevés (notes-v5@b1f17318, notes-v5@75c22d63, HEAD) : 17 noms. Les commits notes-v5@75c22d63 (calendar.tsx, chart.tsx) ont changé des types et des classes, pas des icônes.

## 3. Icônes d'application (PWA, favicon, apple-touch)

Tous ces fichiers ont été ajoutés par notes-v5@b1f17318 2026-10-21 et jamais modifiés depuis (`git log --all -- public/icons public/favicon.ico public/manifest.webmanifest` ne renvoie que ce commit). Aucun SVG ; pour les PNG : `git show notes-v5@b1f17318:<chemin>`.

| icône | source | empreinte (sha1 du fichier) | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| favicon.ico | fichier public/favicon.ico | dd15dcde | notes-v5@b1f17318 2026-10-21 | HEAD | ICO 1 image 256×256 PNG, 20373 octets ; non référencé par index.html |
| apple-touch-icon | fichier public/icons/apple-touch-icon.png | d6c16f87 | notes-v5@b1f17318 2026-10-21 | HEAD | PNG 180×180 RGB, 4296 octets ; `<link rel="apple-touch-icon">` |
| icon-192 | fichier public/icons/icon-192.png | 80503b5f | notes-v5@b1f17318 2026-10-21 | HEAD | PNG 192×192, 4507 octets ; `<link rel="icon">` et manifest, et icône des 4 raccourcis du manifest |
| icon-512 | fichier public/icons/icon-512.png | fcc93e4b | notes-v5@b1f17318 2026-10-21 | HEAD | PNG 512×512, 12244 octets ; manifest |
| icon-maskable-512 | fichier public/icons/icon-maskable-512.png | a567ed31 | notes-v5@b1f17318 2026-10-21 | HEAD | PNG 512×512, 10882 octets ; manifest `purpose: maskable` |

Raccourcis du manifest (notes-v5@b1f17318) : Nouvelle note, Nouvelle liste, Note vocale, Note du jour, tous avec icon-192. `share_target` accepte images, audio, PDF.
