Source : notes-svelte, commits lus : 4, plage : 2026-10-22 à 2026-10-22

Références : S1 = notes-svelte@2923c47d 2026-10-22, S2 = notes-svelte@112ae9d8 2026-10-22, S3 = notes-svelte@96889f8d 2026-10-22 (HEAD). Le commit cac60e91 (Initial commit) n'a aucun contenu graphique. Les quatre commits sont du même jour (10:22, 12:48, 13:18, 13:26) : aucune valeur de design ne change entre commits ; chaque ligne vaut donc "S1 à HEAD" sauf mention.

Empreinte : sha1 (8 caractères) du SVG, espaces normalisés. Les fichiers sont dans `svg/`.

| icône | source | empreinte | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| favicon (feuille de papier cornée sur carré crème, rx 18) | fichier `static/favicon.svg` | 4df9b511 | S1 | HEAD | viewBox 0 0 64 64 ; traits #1A1A1A ; fond #F7F3EE ; feuille #FFF9F5. svg/favicon-4df9b511.svg |
| icône 192 (feuille + pastille ambre avec "+") | fichier `static/icons/icon-192.svg` | 9c9fe36e | S1 | HEAD | viewBox 0 0 192 192 ; dégradé linéaire #D9A35A vers #EFDAB2 ; manifest sizes "192x192" type image/svg+xml purpose any. svg/icon-192-9c9fe36e.svg |
| icône 512 (même dessin) | fichier `static/icons/icon-512.svg` | ecb3cd6f | S1 | HEAD | viewBox 0 0 512 512, rx 120 ; même dessin à l'échelle. svg/icon-512-ecb3cd6f.svg |
| icône maskable | fichier `static/icons/icon-maskable.svg` | af877df9 | S1 | HEAD | viewBox 0 0 512 512 ; fond plein #D9A35A ; feuille #F7F3EE ; bande #EFDAB2 opacité 0.4 ; purpose maskable. svg/icon-maskable-af877df9.svg |
| apple-touch-icon | aucun | - | | | pas de balise ni de fichier |
| PNG | aucun | - | | | tous les fichiers d'icônes de l'appli sont des SVG ; aucun PNG ni .ico dans l'historique |

Icônes d'application : référencées par `static/manifest.webmanifest` ET par `vite.config.ts` (VitePWA, objet `manifest`, mêmes trois icônes). `src/app.html` : `<link rel="icon" href="/favicon.svg" type="image/svg+xml">`.

### Bibliothèque d'icônes (Lucide pour Svelte)

| paquet | version | période |
|---|---|---|
| `lucide-svelte` | ^0.468.0 | S1 (package.json de 2923c47d) ; retiré en S2 |
| `@lucide/svelte` | ^1.61.0 | S2 (112ae9d8) à HEAD |

Anomalie : après S2, `+layout.svelte` et `QuickActionMenu.svelte` importent encore `lucide-svelte` (plus déclaré dans package.json) alors que `BottomNavigation.svelte` (S3) importe `@lucide/svelte`.

| icône (nom Lucide) | source | empreinte | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| FileText | lucide-svelte@0.468 (QuickActionMenu.svelte) ; @lucide/svelte@1.61 (BottomNavigation.svelte) | - | S1 | HEAD | onglet Notes, size 22 |
| Library | idem | - | S1 | HEAD | onglet Bibliothèque, size 22 |
| Search | idem ; aussi `+layout.svelte` (lucide-svelte) | - | S1 | HEAD | onglet Recherche size 22 ; champ de recherche size 18 |
| Settings | idem | - | S1 | HEAD | onglet Réglages, size 22 |
| Plus | idem | - | S1 | HEAD | bouton d'ajout, size 32, strokeWidth 2.6 |
| NotebookPen | idem | - | S1 | HEAD | menu rapide "Note rapide", size 18 |
| ListTodo | idem | - | S1 | HEAD | menu rapide "To-do", size 18 |
| PenSquare | idem | - | S1 | HEAD | menu rapide "Liste", size 18 |
| Bold | lucide-svelte (`+layout.svelte`) | - | S1 | HEAD | barre d'outils de l'éditeur, size 16 |
| CheckCheck | lucide-svelte (`+layout.svelte`) | - | S1 | HEAD | barre d'outils "Créer une liste", size 16 |
| Pin | lucide-svelte (`+layout.svelte`) | - | S1 | HEAD | "Épingler la note", size 16 |
| Palette | lucide-svelte (`+layout.svelte`) | - | S1 | HEAD | "Changer la couleur", size 16 |
| NotebookText | lucide-svelte (`+layout.svelte`) | - | S1 | HEAD | état vide de la bibliothèque, size 28 |
| Sparkles | lucide-svelte (`+layout.svelte`) | - | S1 | HEAD | état vide de la recherche, size 28 |
| Archive, Tag, Trash2 | lucide-svelte (`+layout.svelte`) | - | S1 | HEAD | importées, non utilisées dans le gabarit |
| 📌 🗃 🗑 (emoji) | caractères Unicode dans `NoteCard.svelte` (`.mini-button`) | - | S1 | HEAD | actions épingler, archiver, supprimer ; le bouton supprimer a la classe `.danger` (color #b95555) |

Note de lecture : à S1 la barre d'onglets existe sous le nom `QuickActionMenu.svelte` (jamais importé) ; `+layout.svelte` importe `BottomNavigation.svelte`, créé seulement en S3 (même contenu, import `@lucide/svelte`). Les lignes "S1" des icônes de la barre d'onglets s'appliquent donc au fichier QuickActionMenu.svelte.
