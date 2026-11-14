Source : mindspace-old, commits lus : 222 (registre part1, diffs complets) + parcours de tous les commits non fusionnés touchant `.tsx`/`.ts` et `package.json` (493 commits du dépôt, toutes branches), plage : 2026-11-02 à 2026-11-12

# Icônes

Méthode : script `tools/a4-old-1/icons.py` : pour chaque commit non fusionné (ordre chronologique du commit, toutes branches `--all`), lecture de `git show <sha>:<fichier>` pour chaque `.ts`/`.tsx` touché, extraction des noms importés depuis `lucide-react`, différence avec l'état précédent du même fichier. L'état final a été recoupé avec `git show main:<fichier>` (identique pour les 9 fichiers). Les dates sont celles du commit (committer date) ; les sha sont raccourcis à 8 caractères.

## Bibliothèque et version

| paquet | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| lucide-react | ^1.66.0 | package.json (dependencies) | mindspace-old@c831ee63 2026-11-02 | REMPLACÉE par lucide-react@^1.67.0 @e87bff19 2026-11-03 | pas de package-lock.json dans le dépôt : seule la plage semver est connue |
| lucide-react | ^1.67.0 | package.json (dependencies) | mindspace-old@e87bff19 2026-11-03 | REMPLACÉE par lucide-react@^1.68.0 @997adc1f 2026-11-05 | pas de package-lock.json dans le dépôt : seule la plage semver est connue |
| lucide-react | ^1.68.0 | package.json (dependencies) | mindspace-old@997adc1f 2026-11-05 | REMPLACÉE par lucide-react@^1.69.0 @250fdf1c 2026-11-05 | pas de package-lock.json dans le dépôt : seule la plage semver est connue |
| lucide-react | ^1.69.0 | package.json (dependencies) | mindspace-old@250fdf1c 2026-11-05 | HEAD | pas de package-lock.json dans le dépôt : seule la plage semver est connue |

Autres paquets graphiques : aucun paquet d'icônes ou de polices autre que `lucide-react` n'a jamais été dans `package.json` (vérifié sur les 64 commits touchant package.json). `@blocknote/core/fonts/inter.css` a été importé par `NoteEditor.tsx` (voir typography.md).

## Icônes lucide-react utilisées (union de tous les fichiers)

Tous les noms sont des imports nommés `{ Nom } from 'lucide-react'` ; tailles et traits : voir radius-spacing.md. Aucune icône n'est un SVG en ligne (aucun `<svg` dans l'historique du code source, `git log --all -S'<svg'`, `-S'icon.svg'` et `-S'favicon'` ne trouvent aucun commit), donc pas de fichier dans `svg/`.

| icône | source | empreinte | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| Download | lucide-react@^1.67.0 | - | mindspace-old@d5c96cef 2026-11-03 | HEAD | fichiers : App.tsx, layouts/SettingsLayout.tsx, pages/SettingsHub.tsx; retiré de pages/SettingsHub.tsx @7d72e331 11-05 |
| Menu | lucide-react@^1.67.0 | - | mindspace-old@d5c96cef 2026-11-03 | HEAD | fichiers : layouts/SettingsLayout.tsx, pages/SettingsHub.tsx; retiré de pages/SettingsHub.tsx @7d72e331 11-05 |
| X | lucide-react@^1.67.0 | - | mindspace-old@d5c96cef 2026-11-03 | HEAD | fichiers : layouts/SettingsLayout.tsx, pages/SettingsHub.tsx; retiré de pages/SettingsHub.tsx @7d72e331 11-05 |
| Bold | lucide-react@^1.68.0 | - | mindspace-old@90c4f82d 2026-11-05 | HEAD | fichiers : components/editor/EditorToolbar.tsx |
| Code | lucide-react@^1.68.0 | - | mindspace-old@90c4f82d 2026-11-05 | HEAD | fichiers : components/editor/EditorToolbar.tsx |
| Heading1 | lucide-react@^1.68.0 | - | mindspace-old@90c4f82d 2026-11-05 | HEAD | fichiers : components/editor/EditorToolbar.tsx |
| Heading2 | lucide-react@^1.68.0 | - | mindspace-old@90c4f82d 2026-11-05 | HEAD | fichiers : components/editor/EditorToolbar.tsx |
| Italic | lucide-react@^1.68.0 | - | mindspace-old@90c4f82d 2026-11-05 | HEAD | fichiers : components/editor/EditorToolbar.tsx |
| List | lucide-react@^1.68.0 | - | mindspace-old@90c4f82d 2026-11-05 | HEAD | fichiers : App.tsx, components/editor/EditorToolbar.tsx |
| ListOrdered | lucide-react@^1.68.0 | - | mindspace-old@90c4f82d 2026-11-05 | HEAD | fichiers : components/editor/EditorToolbar.tsx |
| Redo2 | lucide-react@^1.68.0 | - | mindspace-old@90c4f82d 2026-11-05 | HEAD | fichiers : App.tsx, components/editor/EditorToolbar.tsx; retiré de components/editor/EditorToolbar.tsx @a53044e3 11-05 |
| Undo2 | lucide-react@^1.68.0 | - | mindspace-old@90c4f82d 2026-11-05 | HEAD | fichiers : App.tsx, components/editor/EditorToolbar.tsx; retiré de components/editor/EditorToolbar.tsx @a53044e3 11-05 |
| Sparkles | lucide-react@^1.69.0 | - | mindspace-old@64e843a0 2026-11-05 | HEAD | fichiers : components/settings/ChangelogTimeline.tsx, components/settings/ReleasePrimitives.tsx, pages/settings/AProposPage.tsx, pages/settings/WhatsNewPage.tsx |
| TrendingUp | lucide-react@^1.69.0 | - | mindspace-old@64e843a0 2026-11-05 | HEAD | fichiers : components/settings/ReleasePrimitives.tsx |
| Wrench | lucide-react@^1.69.0 | - | mindspace-old@64e843a0 2026-11-05 | HEAD | fichiers : components/settings/ReleasePrimitives.tsx |
| ArrowUpRight | lucide-react@^1.69.0 | - | mindspace-old@1274fca0 2026-11-05 | HEAD | fichiers : components/settings/ChangelogTimeline.tsx, pages/settings/AProposPage.tsx |
| ArrowLeft | lucide-react@^1.69.0 | - | mindspace-old@20902a5d 2026-11-05 | HEAD | fichiers : App.tsx, pages/settings/ReleasePage.tsx |
| ArrowRight | lucide-react@^1.69.0 | - | mindspace-old@20902a5d 2026-11-05 | HEAD | fichiers : components/notes/QuickCapture.tsx, pages/settings/ReleasePage.tsx, pages/settings/WhatsNewPage.tsx |
| AlignCenter | lucide-react@^1.69.0 | - | mindspace-old@04ddfe98 2026-11-05 | HEAD | fichiers : components/editor/EditorToolbar.tsx |
| AlignLeft | lucide-react@^1.69.0 | - | mindspace-old@04ddfe98 2026-11-05 | HEAD | fichiers : components/editor/EditorToolbar.tsx |
| AlignRight | lucide-react@^1.69.0 | - | mindspace-old@04ddfe98 2026-11-05 | HEAD | fichiers : components/editor/EditorToolbar.tsx |
| Columns3 | lucide-react@^1.69.0 | - | mindspace-old@04ddfe98 2026-11-05 | HEAD | fichiers : components/editor/EditorToolbar.tsx |
| Heading3 | lucide-react@^1.69.0 | - | mindspace-old@04ddfe98 2026-11-05 | HEAD | fichiers : components/editor/EditorToolbar.tsx |
| Rows3 | lucide-react@^1.69.0 | - | mindspace-old@04ddfe98 2026-11-05 | HEAD | fichiers : components/editor/EditorToolbar.tsx |
| Strikethrough | lucide-react@^1.69.0 | - | mindspace-old@04ddfe98 2026-11-05 | HEAD | fichiers : components/editor/EditorToolbar.tsx |
| Table2 | lucide-react@^1.69.0 | - | mindspace-old@04ddfe98 2026-11-05 | HEAD | fichiers : components/editor/EditorToolbar.tsx |
| Trash2 | lucide-react@^1.69.0 | - | mindspace-old@04ddfe98 2026-11-05 | HEAD | fichiers : App.tsx, components/editor/EditorToolbar.tsx |
| Underline | lucide-react@^1.69.0 | - | mindspace-old@04ddfe98 2026-11-05 | HEAD | fichiers : components/editor/EditorToolbar.tsx |
| ArrowDownWideNarrow | lucide-react@^1.69.0 | - | mindspace-old@ccd468ab 2026-11-05 | HEAD | fichiers : App.tsx |
| CheckSquare | lucide-react@^1.69.0 | - | mindspace-old@ccd468ab 2026-11-05 | HEAD | fichiers : App.tsx |
| LayoutGrid | lucide-react@^1.69.0 | - | mindspace-old@ccd468ab 2026-11-05 | HEAD | fichiers : App.tsx |
| ListChecks | lucide-react@^1.69.0 | - | mindspace-old@ccd468ab 2026-11-05 | HEAD | fichiers : App.tsx |
| MoreHorizontal | lucide-react@^1.69.0 | - | mindspace-old@ccd468ab 2026-11-05 | HEAD | fichiers : App.tsx |
| Plus | lucide-react@^1.69.0 | - | mindspace-old@ccd468ab 2026-11-05 | HEAD | fichiers : App.tsx |
| Settings2 | lucide-react@^1.69.0 | - | mindspace-old@ccd468ab 2026-11-05 | HEAD | fichiers : App.tsx |
| ChevronLeft | lucide-react@^1.69.0 | - | mindspace-old@ab94742b 2026-11-05 | SUPPRIMÉE mindspace-old@1fd96923 2026-11-05 | fichiers : App.tsx; retiré de App.tsx @1fd96923 11-05 |
| ChevronRight | lucide-react@^1.69.0 | - | mindspace-old@ab94742b 2026-11-05 | HEAD | fichiers : App.tsx |
| Clock3 | lucide-react@^1.69.0 | - | mindspace-old@ab94742b 2026-11-05 | HEAD | fichiers : App.tsx |
| Copy | lucide-react@^1.69.0 | - | mindspace-old@ab94742b 2026-11-05 | HEAD | fichiers : App.tsx |
| EyeOff | lucide-react@^1.69.0 | - | mindspace-old@ab94742b 2026-11-05 | HEAD | fichiers : App.tsx |
| PanelLeftClose | lucide-react@^1.69.0 | - | mindspace-old@ab94742b 2026-11-05 | HEAD | fichiers : App.tsx |
| PanelLeftOpen | lucide-react@^1.69.0 | - | mindspace-old@ab94742b 2026-11-05 | HEAD | fichiers : App.tsx |
| Pin | lucide-react@^1.69.0 | - | mindspace-old@ab94742b 2026-11-05 | HEAD | fichiers : App.tsx |
| Search | lucide-react@^1.69.0 | - | mindspace-old@ab94742b 2026-11-05 | HEAD | fichiers : App.tsx |
| ChevronDown | lucide-react@^1.69.0 | - | mindspace-old@a53044e3 2026-11-05 | HEAD | fichiers : components/editor/EditorToolbar.tsx, components/notes/QuickCapture.tsx |
| ChevronUp | lucide-react@^1.69.0 | - | mindspace-old@a53044e3 2026-11-05 | HEAD | fichiers : components/editor/EditorToolbar.tsx |
| Type | lucide-react@^1.69.0 | - | mindspace-old@a53044e3 2026-11-05 | HEAD | fichiers : components/editor/EditorToolbar.tsx |
| BookOpen | lucide-react@^1.69.0 | - | mindspace-old@90b6cb34 2026-11-06 | HEAD | fichiers : pages/settings/AProposPage.tsx |
| Info | lucide-react@^1.69.0 | - | mindspace-old@90b6cb34 2026-11-06 | HEAD | fichiers : pages/settings/AProposPage.tsx |
| PenLine | lucide-react@^1.69.0 | - | mindspace-old@f51f14b9 2026-11-07 | HEAD | fichiers : components/notes/QuickCapture.tsx |
| Blocks | lucide-react@^1.69.0 | - | mindspace-old@0c1cb372 2026-11-07 | HEAD | fichiers : components/editor/EditorToolbar.tsx |

## Ensemble des noms utilisés à chaque étape (ajouts et retraits datés)

| commit | date | ajouts | retraits | fichier |
|---|---|---|---|---|
| mindspace-old@d5c96cef | 2026-11-03 14:26 | Download, Menu, X | - | pages/SettingsHub.tsx |
| mindspace-old@d028541d | 2026-11-05 06:08 | Download, Menu, X | - | layouts/SettingsLayout.tsx |
| mindspace-old@7d72e331 | 2026-11-05 11:36 | - | Download, Menu, X | pages/SettingsHub.tsx |
| mindspace-old@90c4f82d | 2026-11-05 12:21 | Bold, Code, Heading1, Heading2, Italic, List, ListOrdered, Redo2, Undo2 | - | components/editor/EditorToolbar.tsx |
| mindspace-old@64e843a0 | 2026-11-05 12:55 | Sparkles, TrendingUp, Wrench | - | components/settings/ReleasePrimitives.tsx |
| mindspace-old@1274fca0 | 2026-11-05 12:56 | ArrowUpRight, Sparkles | - | components/settings/ChangelogTimeline.tsx |
| mindspace-old@20902a5d | 2026-11-05 12:57 | ArrowLeft, ArrowRight | - | pages/settings/ReleasePage.tsx |
| mindspace-old@04ddfe98 | 2026-11-05 18:05 | AlignCenter, AlignLeft, AlignRight, Columns3, Heading3, Rows3, Strikethrough, Table2, Trash2, Underline | - | components/editor/EditorToolbar.tsx |
| mindspace-old@ccd468ab | 2026-11-05 18:07 | ArrowDownWideNarrow, CheckSquare, LayoutGrid, List, ListChecks, MoreHorizontal, Plus, Settings2 | - | App.tsx |
| mindspace-old@ab94742b | 2026-11-05 18:34 | ArrowLeft, ChevronLeft, ChevronRight, Clock3, Copy, Download, EyeOff, PanelLeftClose, PanelLeftOpen, Pin, Redo2, Search, Trash2, Undo2 | - | App.tsx |
| mindspace-old@a53044e3 | 2026-11-05 18:35 | ChevronDown, ChevronUp, Type | Redo2, Undo2 | components/editor/EditorToolbar.tsx |
| mindspace-old@1fd96923 | 2026-11-05 18:37 | - | ChevronLeft | App.tsx |
| mindspace-old@90b6cb34 | 2026-11-06 22:11 | ArrowUpRight, BookOpen, Info, Sparkles | - | pages/settings/AProposPage.tsx |
| mindspace-old@290000c4 | 2026-11-06 22:11 | ArrowRight, Sparkles | - | pages/settings/WhatsNewPage.tsx |
| mindspace-old@f51f14b9 | 2026-11-07 02:04 | ArrowRight, ChevronDown, PenLine | - | components/notes/QuickCapture.tsx |
| mindspace-old@0c1cb372 | 2026-11-07 02:36 | Blocks | - | components/editor/EditorToolbar.tsx |

## Icônes d'application (PWA, favicon, apple-touch)

Référence PNG : `git show <sha8>:<chemin>` ; aucun SVG source, aucun favicon (`<link rel="icon">` jamais présent dans `index.html`), aucune icône maskable dédiée.

| icône | chemin | taille | empreinte (sha1 blob, 8 car.) | première apparition | dernier état | notes |
|---|---|---|---|---|---|---|
| icône PWA 192 | public/icons/icon-192.png | 192x192, PNG 8 bits RGB, 2096 octets | c2e3ce79 | mindspace-old@d5c96cef 2026-11-03 : `git show d5c96cef:public/icons/icon-192.png` | HEAD (jamais modifiée : un seul commit la touche) | déclarée dans le manifeste (`purpose: "any maskable"`) et comme `apple-touch-icon` dans index.html |
| icône PWA 512 | public/icons/icon-512.png | 512x512, PNG 8 bits RGB, 5909 octets | 854bc065 | mindspace-old@d5c96cef 2026-11-03 : `git show d5c96cef:public/icons/icon-512.png` | HEAD (jamais modifiée) | déclarée dans le manifeste, `purpose: "any maskable"` |
| apple-touch-icon | index.html `<link rel="apple-touch-icon" href="/icons/icon-192.png">` | 192x192 (réutilise icon-192.png) | c2e3ce79 | mindspace-old@d5c96cef 2026-11-03 | HEAD | aucune icône 180x180 dédiée |
| manifeste | public/manifest.webmanifest | 483 octets | f180671b | mindspace-old@d5c96cef 2026-11-03 | HEAD (un seul commit) | `background_color` et `theme_color` = #111827 (gris-bleu sombre de la période Tailwind 3-grays) ; jamais alignés sur la palette `--ms-bg` #faf9f6 introduite le 2026-11-05 : contradiction palette / manifeste à signaler |
