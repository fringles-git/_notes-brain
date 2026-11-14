# Icônes : inventaire entre toutes les versions

Portée : tous les pictogrammes de l'interface (jeu en SVG maison, bibliothèques Lucide, glyphes de texte et emoji) et les icônes d'application (SVG, PNG, favicon, data-URI) des 10 versions E0 à E9. Inventaire seulement : aucune recommandation, aucune décision visuelle. Sources : `design/<repo>/icons.md` (9 dépôts), `design-final/icons/svg-index.tsv` (207 SVG uniques issus de 274 fichiers) et `design-final/icons/svg/*.svg`.

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

Séparation E0 / E1 pour `notes-v3` : E0 = builds `notes-site` (commits du 2026-10-09 au 2026-10-15, icônes lues dans l'objet d'icônes du `index.html` minifié) ; E1 = source (`src/ui/icons.tsx`, premier commit `notes-v3@4da62555` 2026-10-18).

Légende des cellules
- `valeur` : l'état dans cette version. Pour une icône SVG : l'identifiant de variante `<nom>-<empreinte8>` = nom du fichier de `design-final/icons/svg/` sans `.svg` ; pour une icône de bibliothèque : `lib:<bibliothèque>@<version>` ; pour un caractère : `glyphe:<caractère>` ; pour un PNG de la section 2b : `png:<empreinte>`.
- `=` : tracé identique à la dernière valeur affichée à gauche sur la même ligne (colonnes `—` ignorées). Le tracé est celui de l'attribut `d` des tracés, pas les attributs de la balise `<svg>` (voir annexe A).
- `id (= En)` : retour à un tracé déjà affiché dans la colonne En (la dernière valeur affichée à gauche était différente).
- `A → B` : changé pendant cette version (références en section 3). Pour une bibliothèque : la plage de versions traversée pendant la colonne (le détail daté est en section 2c).
- `—` : absent de cette version. `✗ <réf>` : supprimé dans cette version (réf = commit).
- Colonne `alias` : `≈ X` = nom proche ou rôle apparent du même nom dans un autre jeu (rapprochement par le nom, tracés non comparés : les tracés des icônes de bibliothèque ne sont dans aucun dépôt). Deux lignes proches ne sont donc jamais fusionnées.
- Les lignes `lib:` portent le nom du composant dans la colonne `élément`. Notation des versions : `^x.y.z` = plage semver déclarée (aucun fichier verrou dans `mindspace-old`).
- Famille `Propriétés communes du jeu` : attributs partagés par toutes les icônes d'un jeu (trait, taille), pas des icônes.

## 2. Matrice

Une ligne par icône (ou par propriété commune). Familles, dans l'ordre : propriétés communes, jeu SVG maison (navigation et structure, actions, texte et blocs, médias et capteurs, données lieux et état, thème, autres ; la corbeille en ligne d'E9 est sur la ligne `trash`), glyphes de texte et emoji, Lucide. Dans un jeu SVG, les colonnes E2, E3, E5, E6, E8 sont `—` parce que ces versions n'ont pas ce jeu ; leurs pictogrammes sont dans les familles 8 et 9.

| famille | élément | alias | E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Propriétés communes du jeu | `trait (stroke-width)` |  | 2 | 1.75 | — | — | = | — | — | = | — | 2 (corbeille) |
| Propriétés communes du jeu | `taille d'affichage` |  | 22px (var(--size-icon)) | 22px | — | — | = | — | — | = | — | 20×20 (corbeille) |
| Propriétés communes du jeu | `bouts et jointures` |  | round / round | = | — | — | = | — | — | = | — | = |
| Propriétés communes du jeu | `couleur du trait` |  | currentColor | = | — | — | = | — | — | = | — | = |
| Propriétés communes du jeu | `viewBox` |  | 0 0 24 24 | = | — | — | = | — | — | = | — | = |
| Navigation et structure | `all` |  | all-d41ee407 | = | — | — | = | — | — | = | — | — |
| Navigation et structure | `arrowRight` | ≈ ArrowRight | arrowRight-644a52ea | = | — | — | = | — | — | = | — | — |
| Navigation et structure | `ascending` |  | — | — | — | — | ascending-97104664 | — | — | — | — | — |
| Navigation et structure | `back` | ≈ ArrowLeft | back-df65692a | = | — | — | = | — | — | = | — | — |
| Navigation et structure | `cards` |  | cards-a4a58eab | = | — | — | = | — | — | = | — | — |
| Navigation et structure | `collapse` |  | — | collapse-ae24e908 | — | — | — | — | — | = | — | — |
| Navigation et structure | `descending` |  | — | — | — | — | descending-0106f11c | — | — | — | — | — |
| Navigation et structure | `expand` |  | — | expand-fa481de0 | — | — | — | — | — | = | — | — |
| Navigation et structure | `filter` |  | filter-10ed389d | = | — | — | = | — | — | = | — | — |
| Navigation et structure | `folder` |  | folder-8cc74d89 | = | — | — | = | — | — | = | — | — |
| Navigation et structure | `folderNew` |  | folderNew-371e1d34 | = | — | — | = | — | — | = | — | — |
| Navigation et structure | `forward` |  | — | — | — | — | forward-b47127e5 | — | — | — | — | — |
| Navigation et structure | `graph` |  | graph-883dd743 | = | — | — | = | — | — | = | — | — |
| Navigation et structure | `grip` | ≈ GripVertical | grip-e59b076c | = | — | — | = | — | — | = | — | — |
| Navigation et structure | `home` |  | — | — | — | — | home-92eeb99d | — | — | — | — | — |
| Navigation et structure | `library` | ≈ Library | — | library-2e3220c8 | — | — | = | — | — | = | — | — |
| Navigation et structure | `list` | ≈ List | list-93b64799 | = | — | — | = | — | — | = | — | — |
| Navigation et structure | `more` | ≈ MoreHorizontal (E0 seulement : points horizontaux) | more-f699ea37 → more-146e2aec | = | — | — | = | — | — | = | — | — |
| Navigation et structure | `move` |  | move-118c4463 | = | — | — | = | — | — | = | — | — |
| Navigation et structure | `outline` |  | outline-1ab09169 | = | — | — | = | — | — | = | — | — |
| Navigation et structure | `search` | ≈ Search | search-e097e254 | = | — | — | = | — | — | = | — | — |
| Navigation et structure | `settings` | ≈ Settings, Settings2 | settings-bb3bf0aa | = | — | — | = | — | — | = | — | — |
| Navigation et structure | `sidebar` |  | — | — | — | — | — | — | — | sidebar-717a5d38 | — | — |
| Navigation et structure | `sort` |  | sort-c0a4b667 | = (✗ notes-v3@4da62555, rétabli notes-v3@4a4da608, même jour) | — | — | = | — | — | = | — | — |
| Navigation et structure | `sparkle` | ≈ Sparkles | sparkle-2edfc2b2 | = | — | — | = | — | — | = | — | — |
| Navigation et structure | `tour` |  | tour-9b7508c6 | = | — | — | = | — | — | = | — | — |
| Actions | `attach` | ≈ Paperclip | attach-40b7c79f | = | — | — | = | — | — | = | — | — |
| Actions | `broom` |  | — | — | — | — | — (nom référencé, tracé non défini) | — | — | broom-fd4708b3 | — | — |
| Actions | `bug` |  | bug-fefbaa54 | = | — | — | = | — | — | = | — | — |
| Actions | `check` | ≈ Check | check-2a107c85 | = | — | — | = | — | — | = | — | — |
| Actions | `checkCircle` |  | — | — | — | — | — | — | — | checkCircle-a80b9d48 | — | — |
| Actions | `close` | ≈ X | close-12683d61 | = | — | — | = | — | — | = | — | — |
| Actions | `download` | ≈ Download | download-f97ba9d0 | = | — | — | = | — | — | = | — | — |
| Actions | `edit` |  | edit-fb3c475f | = | — | — | = | — | — | = | — | — |
| Actions | `eraser` |  | — | — | — | — | eraser-179da814 | — | — | — | — | — |
| Actions | `extract` |  | extract-b5444958 | = | — | — | = | — | — | = | — | — |
| Actions | `hand` |  | — | hand-e62876fb | — | — | = | — | — | = | — | — |
| Actions | `highlight` |  | highlight-ce59b981 | = | — | — | = | — | — | = | — | — |
| Actions | `improve` |  | improve-58038212 | = | — | — | = | — | — | = | — | — |
| Actions | `link` |  | link-e7fa1866 | = | — | — | = | — | — | = | — | — |
| Actions | `listReset` |  | listReset-074732aa | = | — | — | = | — | — | = | — | — |
| Actions | `merge` |  | merge-6e720f98 | = | — | — | = | — | — | = | — | — |
| Actions | `minus` | ≈ Minus | — | minus-ef4042d2 | — | — | = | — | — | = | — | — |
| Actions | `paste` |  | paste-17c7fd59 | = | — | — | = | — | — | = | — | — |
| Actions | `pin` | ≈ Pin, 📌 | pin-7ddd3c1c | = | — | — | = | — | — | = | — | — |
| Actions | `plus` | ≈ Plus | plus-3820781f | = | — | — | = | — | — | = | — | — |
| Actions | `print` |  | print-256d5618 | = | — | — | = | — | — | = | — | — |
| Actions | `redo` | ≈ Redo2 | — | redo-01f828ab | — | — | redo-24ef0775 | — | — | redo-01f828ab (= E1) | — | — |
| Actions | `refresh` |  | — | — | — | — | — | — | — | refresh-8b79fce2 | — | — |
| Actions | `restore` |  | restore-844889fb | = | — | — | = | — | — | = | — | — |
| Actions | `selectAll` |  | selectAll-0fe5efbd | = | — | — | = | — | — | = | — | — |
| Actions | `share` |  | share-bc191de1 | = | — | — | = | — | — | = | — | — |
| Actions | `trash` | TrashIcon (E9) ; ≈ Trash2, 🗑 | trash-d9deae38 | = | — | — | = | — | — | = | — | corbeille-43b6d92e |
| Actions | `undo` | ≈ Undo2 | — | undo-8e785014 | — | — | undo-e9c5acaf | — | — | undo-8e785014 (= E1) | — | — |
| Texte et blocs | `alignCenter` | ≈ AlignCenter | — | alignCenter-872f0992 | — | — | — | — | — | = | — | — |
| Texte et blocs | `alignLeft` | ≈ AlignLeft | — | alignLeft-0fb8f11d | — | — | — | — | — | = | — | — |
| Texte et blocs | `alignRight` | ≈ AlignRight | — | alignRight-b756d55e | — | — | — | — | — | = | — | — |
| Texte et blocs | `at` |  | — | — | — | — | — | — | — | at-2d9e6933 | — | — |
| Texte et blocs | `book` | ≈ BookOpen | — | — | — | — | — | — | — | book-3fb68395 | — | — |
| Texte et blocs | `bullets` |  | bullets-e37cdf2b | = | — | — | = | — | — | = | — | — |
| Texte et blocs | `checklist` | ≈ ListChecks | checklist-e2f9062d | = | — | — | = | — | — | = | — | — |
| Texte et blocs | `code` | ≈ Code | — | — | — | — | code-ad5e2fea | — | — | — | — | — |
| Texte et blocs | `doc` | ≈ FileText | doc-dfb6106f | = | — | — | = | — | — | = | — | — |
| Texte et blocs | `hash` |  | hash-09949018 | = | — | — | = | — | — | = | — | — |
| Texte et blocs | `liveText` |  | — | liveText-f54628b4 | — | — | = | — | — | = | — | — |
| Texte et blocs | `numbers` |  | numbers-a136c2ce | = | — | — | = | — | — | = | — | — |
| Texte et blocs | `quiz` |  | — | — | — | — | — | — | — | quiz-a82bb304 | — | — |
| Texte et blocs | `slides` |  | slides-63f95bd0 | = | — | — | = | — | — | = | — | — |
| Texte et blocs | `study` |  | study-92653eb1 | = | — | — | = | — | — | = | — | — |
| Texte et blocs | `table` | ≈ Table2 | — | table-87aa3649 | — | — | table-94345f4b | — | — | table-87aa3649 (= E1) | — | — |
| Texte et blocs | `tableColAdd` |  | — | tableColAdd-611c21dd | — | — | — | — | — | = | — | — |
| Texte et blocs | `tableColRemove` |  | — | tableColRemove-211d4ea4 | — | — | — | — | — | = | — | — |
| Texte et blocs | `tableHead` |  | — | tableHead-130195cf | — | — | — | — | — | = | — | — |
| Texte et blocs | `tableMerge` |  | — | tableMerge-6a28dea1 | — | — | — | — | — | = | — | — |
| Texte et blocs | `tableRowAdd` |  | — | tableRowAdd-7a7cd93d | — | — | — | — | — | = | — | — |
| Texte et blocs | `tableRowRemove` |  | — | tableRowRemove-638c1a64 | — | — | — | — | — | = | — | — |
| Texte et blocs | `templates` |  | templates-88a46ea1 | = ✗ notes-v3@369fe07a | — | — | — | — | — | — | — | — |
| Médias et capteurs | `audio` |  | audio-8b2f6f48 | = | — | — | = | — | — | = | — | — |
| Médias et capteurs | `biometric` |  | — | biometric-4043ba97 | — | — | = | — | — | = | — | — |
| Médias et capteurs | `camera` |  | camera-fbf55e22 | = | — | — | = | — | — | = | — | — |
| Médias et capteurs | `image` |  | image-0308bfb5 | = | — | — | = | — | — | = | — | — |
| Médias et capteurs | `mic` |  | mic-542f5f74 | = | — | — | = | — | — | = | — | — |
| Médias et capteurs | `pause` |  | pause-a37d0223 | = | — | — | = | — | — | = | — | — |
| Médias et capteurs | `play` |  | play-57bc06cd | = | — | — | = | — | — | = | — | — |
| Médias et capteurs | `stop` |  | stop-c6cb7b18 | = ✗ notes-v3@369fe07a | — | — | — | — | — | — | — | — |
| Données, lieux, état | `bell` |  | bell-f74a8f96 | = | — | — | = | — | — | = | — | — |
| Données, lieux, état | `bulb` |  | — | — | — | — | — | — | — | bulb-ebfe51b5 | — | — |
| Données, lieux, état | `calendar` |  | calendar-74949606 | = | — | — | = | — | — | = | — | — |
| Données, lieux, état | `cart` |  | — | — | — | — | — | — | — | cart-252dfc67 | — | — |
| Données, lieux, état | `cloud` |  | — | — | — | — | — | — | — | cloud-b0f76292 | — | — |
| Données, lieux, état | `history` |  | history-9bb76d61 | = | — | — | = | — | — | = | — | — |
| Données, lieux, état | `info` | ≈ Info | info-4fbcd3b8 ✗ notes-v3@9643242e | — | — | — | — | — | — | — | — | — |
| Données, lieux, état | `location` |  | — | — | — | — | — | — | — | location-ae32ab00 | — | — |
| Données, lieux, état | `lock` | ≈ Lock | lock-3c4209bb | = | — | — | = | — | — | = | — | — |
| Données, lieux, état | `mail` |  | mail-80a7e512 | = | — | — | = | — | — | = | — | — |
| Données, lieux, état | `mapPin` |  | mapPin-6494bae3 | = | — | — | = | — | — | = | — | — |
| Données, lieux, état | `offline` |  | offline-6f2820c7 | = | — | — | = | — | — | = | — | — |
| Données, lieux, état | `person` |  | — | — | — | — | — | — | — | person-0c3a35e7 | — | — |
| Données, lieux, état | `phone` |  | phone-7c6e55aa | = | — | — | = | — | — | = | — | — |
| Données, lieux, état | `shield` | ≈ ShieldCheck | — | — | — | — | — | — | — | shield-55eca4da | — | — |
| Données, lieux, état | `tag` | ≈ Tag | — | — | — | — | — | — | — | tag-42496760 | — | — |
| Données, lieux, état | `target` |  | — | — | — | — | — | — | — | target-1018a83e | — | — |
| Données, lieux, état | `timer` |  | — | — | — | — | — | — | — | timer-56c21f76 | — | — |
| Données, lieux, état | `user` |  | — | — | — | — | user-3ceb2c1d | — | — | — | — | — |
| Thème | `theme` |  | — | theme-4ab45b69 | — | — | — | — | — | = | — | — |
| Thème | `themeAuto` | ≈ SunMoon | themeAuto-e9067c05 | = | — | — | = | — | — | = | — | — |
| Thème | `themeDark` | ≈ Moon | themeDark-35243fff | = | — | — | = | — | — | = | — | — |
| Thème | `themeLight` | ≈ Sun | themeLight-a50a053f | = | — | — | = | — | — | = | — | — |
| Glyphes texte et emoji | `◐ bouton thème` |  | — | — | glyphe:◐ | — | — | — | — | — | — | — |
| Glyphes texte et emoji | `▣ plein écran` |  | — | — | glyphe:▣ | — | — | — | — | — | — | — |
| Glyphes texte et emoji | `⬚ fenêtre flottante` |  | — | — | glyphe:⬚ | — | — | — | — | — | — | — |
| Glyphes texte et emoji | `N monogramme (.brand-mark)` |  | — | — | glyphe:N | — | — | — | — | — | — | — |
| Glyphes texte et emoji | `+ créer une note (FAB / Dock)` |  | — | — | — | glyphe:+ (2rem) | — | — | — | — | — | glyphe:+ (1.5rem) |
| Glyphes texte et emoji | `📌 épingler (NoteCard)` | ≈ Pin, pin | — | — | — | — | — | glyphe:📌 | — | — | — | — |
| Glyphes texte et emoji | `🗃 archiver (NoteCard)` |  | — | — | — | — | — | glyphe:🗃 | — | — | — | — |
| Glyphes texte et emoji | `🗑 supprimer (NoteCard)` | ≈ Trash2, trash | — | — | — | — | — | glyphe:🗑 | — | — | — | — |
| Glyphes texte et emoji | `‹ retour (.ms-back)` | ≈ back | — | — | — | — | — | — | — | — | — | glyphe:‹ |
| Glyphes texte et emoji | `G barre d'outils (gras)` |  | — | — | — | — | — | — | — | — | — | glyphe:G |
| Glyphes texte et emoji | `I barre d'outils (italique)` |  | — | — | — | — | — | — | — | — | — | glyphe:I |
| Glyphes texte et emoji | `T1 barre d'outils (titre 1)` |  | — | — | — | — | — | — | — | — | — | glyphe:T1 |
| Glyphes texte et emoji | `T2 barre d'outils (titre 2)` |  | — | — | — | — | — | — | — | — | — | glyphe:T2 |
| Glyphes texte et emoji | `T3 barre d'outils (titre 3)` |  | — | — | — | — | — | — | — | — | — | glyphe:T3 |
| Glyphes texte et emoji | `• barre d'outils (liste à puces)` |  | — | — | — | — | — | — | — | — | — | glyphe:• |
| Glyphes texte et emoji | `1. barre d'outils (liste numérotée)` |  | — | — | — | — | — | — | — | — | — | glyphe:1. |
| Glyphes texte et emoji | `•••• •••• … phrase masquée` |  | — | — | — | — | — | — | — | — | — | glyphe:• |
| Lucide (bibliothèque) | `AlignCenter` | ≈ alignCenter | — | — | — | — | — | — | — | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `AlignLeft` | ≈ alignLeft | — | — | — | — | — | — | — | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `AlignRight` | ≈ alignRight | — | — | — | — | — | — | — | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `Archive` |  | — | — | — | — | — | lib:lucide-svelte@^0.468.0 (paquet retiré en S2, import conservé) (non utilisée) | — | — | — | — |
| Lucide (bibliothèque) | `ArrowDownToLine` |  | — | — | — | — | — | — | lib:@lucide/svelte@1.61.0 → 1.63.0 → 1.66.0 | — | — | — |
| Lucide (bibliothèque) | `ArrowDownWideNarrow` |  | — | — | — | — | — | — | — | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `ArrowLeft` | ≈ back | — | — | — | — | lib:lucide-react@^0.575.0 → 1.70.0 | — | lib:@lucide/svelte@1.61.0 → 1.63.0 → 1.66.0 | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `ArrowRight` | ≈ arrowRight | — | — | — | — | lib:lucide-react@^0.575.0 → 1.70.0 | — | lib:@lucide/svelte@1.66.0 | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `ArrowUpFromLine` |  | — | — | — | — | — | — | lib:@lucide/svelte@1.61.0 → 1.63.0 → 1.66.0 | — | — | — |
| Lucide (bibliothèque) | `ArrowUpRight` |  | — | — | — | — | — | — | — | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `Blocks` |  | — | — | — | — | — | — | — | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `Bold` | ≈ glyphe G (E9) | — | — | — | — | — | lib:lucide-svelte@^0.468.0 (paquet retiré en S2, import conservé) | — | — | lib:lucide-react@^1.68.0 → ^1.69.0 | — |
| Lucide (bibliothèque) | `BookOpen` | ≈ book | — | — | — | — | — | — | lib:@lucide/svelte@1.61.0 → 1.63.0 → 1.66.0 | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `Check` | ≈ check | — | — | — | — | lib:lucide-react@^0.575.0 → 1.70.0 | — | lib:@lucide/svelte@1.61.0 → 1.63.0 → 1.66.0 | — | — | — |
| Lucide (bibliothèque) | `CheckCheck` |  | — | — | — | — | — | lib:lucide-svelte@^0.468.0 (paquet retiré en S2, import conservé) | — | — | — | — |
| Lucide (bibliothèque) | `CheckSquare` |  | — | — | — | — | — | — | — | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `ChevronDown` |  | — | — | — | — | lib:lucide-react@^0.575.0 → 1.70.0 | — | lib:@lucide/svelte@1.63.0 (branche non fusionnée) | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `ChevronDownIcon` |  | — | — | — | — | lib:lucide-react@^0.575.0 → 1.70.0 | — | — | — | — | — |
| Lucide (bibliothèque) | `ChevronLeft` | ≈ back | — | — | — | — | lib:lucide-react@^0.575.0 → 1.70.0 | — | — | — | lib:lucide-react@^1.69.0 ✗ mindspace-old@1fd96923 | — |
| Lucide (bibliothèque) | `ChevronLeftIcon` |  | — | — | — | — | lib:lucide-react@^0.575.0 → 1.70.0 | — | — | — | — | — |
| Lucide (bibliothèque) | `ChevronRight` |  | — | — | — | — | lib:lucide-react@^0.575.0 → 1.70.0 | — | lib:@lucide/svelte@1.61.0 → 1.63.0 → 1.66.0 | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `ChevronRightIcon` |  | — | — | — | — | lib:lucide-react@^0.575.0 → 1.70.0 | — | — | — | — | — |
| Lucide (bibliothèque) | `ChevronUp` |  | — | — | — | — | lib:lucide-react@^0.575.0 → 1.70.0 | — | lib:@lucide/svelte@1.63.0 (branche non fusionnée) | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `Circle` |  | — | — | — | — | lib:lucide-react@^0.575.0 → 1.70.0 | — | — | — | — | — |
| Lucide (bibliothèque) | `Clock3` |  | — | — | — | — | — | — | — | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `Code` | ≈ code | — | — | — | — | — | — | — | — | lib:lucide-react@^1.68.0 → ^1.69.0 | — |
| Lucide (bibliothèque) | `Columns3` |  | — | — | — | — | — | — | — | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `Command` |  | — | — | — | — | — | — | lib:@lucide/svelte@1.61.0 ✗ notes-v6@1bae3e15 | — | — | — |
| Lucide (bibliothèque) | `Copy` |  | — | — | — | — | — | — | — | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `Download` | ≈ download | — | — | — | — | — | — | lib:@lucide/svelte@1.63.0 → 1.66.0 | — | lib:lucide-react@^1.67.0 → ^1.68.0 → ^1.69.0 | — |
| Lucide (bibliothèque) | `Eye` |  | — | — | — | — | — | — | lib:@lucide/svelte@1.63.0 (branche non fusionnée) | — | — | — |
| Lucide (bibliothèque) | `EyeOff` |  | — | — | — | — | — | — | lib:@lucide/svelte@1.63.0 (branche non fusionnée) | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `FileText` | ≈ doc | — | — | — | — | — | lib:lucide-svelte@^0.468.0 → @lucide/svelte@^1.61.0 | lib:@lucide/svelte@1.61.0 → 1.63.0 → 1.66.0 | — | — | — |
| Lucide (bibliothèque) | `GripVertical` | ≈ grip | — | — | — | — | lib:lucide-react@^0.575.0 → 1.70.0 | — | lib:@lucide/svelte@1.63.0 (branche non fusionnée) | — | — | — |
| Lucide (bibliothèque) | `Heading1` | ≈ glyphe T1 (E9) | — | — | — | — | — | — | — | — | lib:lucide-react@^1.68.0 → ^1.69.0 | — |
| Lucide (bibliothèque) | `Heading2` | ≈ glyphe T2 (E9) | — | — | — | — | — | — | — | — | lib:lucide-react@^1.68.0 → ^1.69.0 | — |
| Lucide (bibliothèque) | `Heading3` | ≈ glyphe T3 (E9) | — | — | — | — | — | — | — | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `HelpCircle` |  | — | — | — | — | — | — | lib:@lucide/svelte@1.61.0 ✗ notes-v6@1bae3e15 | — | — | — |
| Lucide (bibliothèque) | `House` |  | — | — | — | — | — | — | lib:@lucide/svelte@1.61.0 ✗ notes-v6@1bae3e15 | — | — | — |
| Lucide (bibliothèque) | `Info` | ≈ info | — | — | — | — | — | — | lib:@lucide/svelte@1.61.0 → 1.63.0 → 1.66.0 | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `Italic` | ≈ glyphe I (E9) | — | — | — | — | — | — | — | — | lib:lucide-react@^1.68.0 → ^1.69.0 | — |
| Lucide (bibliothèque) | `Keyboard` |  | — | — | — | — | — | — | lib:@lucide/svelte@1.61.0 → 1.63.0 → 1.66.0 | — | — | — |
| Lucide (bibliothèque) | `LayoutGrid` |  | — | — | — | — | — | — | — | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `LayoutTemplate` |  | — | — | — | — | — | — | lib:@lucide/svelte@1.63.0 (branche non fusionnée) | — | — | — |
| Lucide (bibliothèque) | `Library` | ≈ library | — | — | — | — | — | lib:lucide-svelte@^0.468.0 → @lucide/svelte@^1.61.0 | — | — | — | — |
| Lucide (bibliothèque) | `Lightbulb` |  | — | — | — | — | — | — | lib:@lucide/svelte@1.61.0 → 1.63.0 ✗ notes-v6@a0935371 | — | — | — |
| Lucide (bibliothèque) | `List` | ≈ list | — | — | — | — | — | — | — | — | lib:lucide-react@^1.68.0 → ^1.69.0 | — |
| Lucide (bibliothèque) | `ListChecks` | ≈ checklist | — | — | — | — | — | — | — | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `ListOrdered` | ≈ numbers, glyphe 1. (E9) | — | — | — | — | — | — | — | — | lib:lucide-react@^1.68.0 → ^1.69.0 | — |
| Lucide (bibliothèque) | `ListTodo` |  | — | — | — | — | — | lib:lucide-svelte@^0.468.0 → @lucide/svelte@^1.61.0 | — | — | — | — |
| Lucide (bibliothèque) | `Lock` | ≈ lock | — | — | — | — | — | — | lib:@lucide/svelte@1.63.0 (branche non fusionnée) | — | — | — |
| Lucide (bibliothèque) | `Menu` |  | — | — | — | — | — | — | — | — | lib:lucide-react@^1.67.0 → ^1.68.0 → ^1.69.0 | — |
| Lucide (bibliothèque) | `Minus` | ≈ minus | — | — | — | — | lib:lucide-react@^0.575.0 → 1.70.0 | — | — | — | — | — |
| Lucide (bibliothèque) | `Moon` | ≈ themeDark | — | — | — | — | — | — | lib:@lucide/svelte@1.61.0 → 1.63.0 → 1.66.0 | — | — | — |
| Lucide (bibliothèque) | `MoreHorizontal` | ≈ more | — | — | — | — | lib:lucide-react@^0.575.0 → 1.70.0 | — | lib:@lucide/svelte@1.61.0 → 1.63.0 ✗ notes-v6@a0935371 | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `NotebookPen` |  | — | — | — | — | — | lib:lucide-svelte@^0.468.0 → @lucide/svelte@^1.61.0 | — | — | — | — |
| Lucide (bibliothèque) | `NotebookText` |  | — | — | — | — | — | lib:lucide-svelte@^0.468.0 (paquet retiré en S2, import conservé) | — | — | — | — |
| Lucide (bibliothèque) | `Palette` |  | — | — | — | — | — | lib:lucide-svelte@^0.468.0 (paquet retiré en S2, import conservé) | — | — | — | — |
| Lucide (bibliothèque) | `PanelLeft` |  | — | — | — | — | lib:lucide-react@^0.575.0 → 1.70.0 | — | — | — | — | — |
| Lucide (bibliothèque) | `PanelLeftClose` |  | — | — | — | — | — | — | — | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `PanelLeftOpen` |  | — | — | — | — | — | — | — | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `Paperclip` | ≈ attach | — | — | — | — | — | — | lib:@lucide/svelte@1.63.0 (branche non fusionnée) | — | — | — |
| Lucide (bibliothèque) | `PenLine` |  | — | — | — | — | — | — | lib:@lucide/svelte@1.63.0 (branche non fusionnée) | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `PenSquare` |  | — | — | — | — | — | lib:lucide-svelte@^0.468.0 → @lucide/svelte@^1.61.0 | — | — | — | — |
| Lucide (bibliothèque) | `Pin` | ≈ pin | — | — | — | — | — | lib:lucide-svelte@^0.468.0 (paquet retiré en S2, import conservé) | lib:@lucide/svelte@1.63.0 (branche non fusionnée) | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `Plus` | ≈ plus | — | — | — | — | — | lib:lucide-svelte@^0.468.0 → @lucide/svelte@^1.61.0 | lib:@lucide/svelte@1.61.0 → 1.63.0 → 1.66.0 | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `Redo2` | ≈ redo | — | — | — | — | — | — | — | — | lib:lucide-react@^1.68.0 → ^1.69.0 | — |
| Lucide (bibliothèque) | `Rows3` |  | — | — | — | — | — | — | — | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `Search` | ≈ search | — | — | — | — | lib:lucide-react@^0.575.0 → 1.70.0 | lib:lucide-svelte@^0.468.0 → @lucide/svelte@^1.61.0 | lib:@lucide/svelte@1.61.0 → 1.63.0 → 1.66.0 | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `Settings` | ≈ settings | — | — | — | — | — | lib:lucide-svelte@^0.468.0 → @lucide/svelte@^1.61.0 | — | — | — | — |
| Lucide (bibliothèque) | `Settings2` | ≈ settings | — | — | — | — | — | — | lib:@lucide/svelte@1.61.0 → 1.63.0 → 1.66.0 | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `ShieldCheck` | ≈ shield | — | — | — | — | — | — | lib:@lucide/svelte@1.61.0 → 1.63.0 → 1.66.0 | — | — | — |
| Lucide (bibliothèque) | `SlidersHorizontal` |  | — | — | — | — | — | — | lib:@lucide/svelte@1.63.0 (branche non fusionnée) | — | — | — |
| Lucide (bibliothèque) | `Sparkles` | ≈ sparkle | — | — | — | — | — | lib:lucide-svelte@^0.468.0 (paquet retiré en S2, import conservé) | lib:@lucide/svelte@1.61.0 → 1.63.0 → 1.66.0 | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `Star` |  | — | — | — | — | — | — | lib:@lucide/svelte@1.63.0 (branche non fusionnée) | — | — | — |
| Lucide (bibliothèque) | `Strikethrough` |  | — | — | — | — | — | — | — | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `Sun` | ≈ themeLight | — | — | — | — | — | — | lib:@lucide/svelte@1.61.0 → 1.63.0 → 1.66.0 | — | — | — |
| Lucide (bibliothèque) | `SunMoon` | ≈ themeAuto | — | — | — | — | — | — | lib:@lucide/svelte@1.63.0 (branche non fusionnée) | — | — | — |
| Lucide (bibliothèque) | `Table2` | ≈ table | — | — | — | — | — | — | — | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `Tag` | ≈ tag | — | — | — | — | — | lib:lucide-svelte@^0.468.0 (paquet retiré en S2, import conservé) (non utilisée) | — | — | — | — |
| Lucide (bibliothèque) | `Trash2` | ≈ trash | — | — | — | — | — | lib:lucide-svelte@^0.468.0 (paquet retiré en S2, import conservé) (non utilisée) | lib:@lucide/svelte@1.61.0 → 1.63.0 → 1.66.0 | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `TrendingUp` |  | — | — | — | — | — | — | — | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `Type` |  | — | — | — | — | — | — | — | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `Underline` |  | — | — | — | — | — | — | — | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `Undo2` | ≈ undo | — | — | — | — | — | — | — | — | lib:lucide-react@^1.68.0 → ^1.69.0 | — |
| Lucide (bibliothèque) | `Wrench` |  | — | — | — | — | — | — | — | — | lib:lucide-react@^1.69.0 | — |
| Lucide (bibliothèque) | `X` | ≈ close | — | — | — | — | lib:lucide-react@^0.575.0 → 1.70.0 | — | lib:@lucide/svelte@1.61.0 → 1.63.0 → 1.66.0 | — | lib:lucide-react@^1.67.0 → ^1.68.0 → ^1.69.0 | — |

Notes de lecture de la matrice
- E0 : le CSS du bundle fixe le trait à 2 (`svg{stroke-width:2px;width:var(--size-icon)}`) ; les fichiers SVG des icônes d'E0 conservées en E1 portent `1.75` (convention de la source) : un seul fichier par tracé, voir section 8.
- E4 : les noms `Lucide` de la colonne E4 sont dans les composants shadcn de boilerplate, jamais importés par l'app (section 2c). Les icônes `user`, `ascending`, `descending` sont définies mais plus utilisées depuis `notes-v5@f1b51602` 2026-11-08.
- E5 : tous les noms `Lucide` de la colonne E5 sont présents jusqu'à HEAD (`notes-svelte@96889f8d`).
- E6 : `lib:@lucide/svelte@1.61.0 → 1.63.0 → 1.66.0` = l'icône est dans le code depuis V0 (`notes-v6@57c25ea2`) jusqu'à V9 (`notes-v6@c2701fc1`) pendant que la bibliothèque passe de 1.61.0 à 1.63.0 puis 1.66.0 ; voir section 8 pour les versions inférées.
- E8 : `Redo2` et `Undo2` sont retirés de `EditorToolbar.tsx` (`mindspace-old@a53044e3` 2026-11-05) mais restent importés par `App.tsx` jusqu'à HEAD ; `Download`, `Menu`, `X` sont retirés de `SettingsHub.tsx` (`@7d72e331` 2026-11-05) mais restent dans d'autres fichiers : ces retraits de fichier ne sont pas des suppressions d'icône.

## 2b. Icônes d'application

Une ligne par rôle, une colonne par version. `png:<empreinte>` = empreinte du PNG : sha1 du blob git (8 caractères) pour E0, E1, E4, E6, E7, E8 ; sha1 du contenu du fichier pour E9 (méthode différente, voir section 8). Les identifiants SVG sont ceux de `design-final/icons/svg/`. `(= En)` : mêmes octets (même blob) que la colonne En.

| rôle | E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 |
|---|---|---|---|---|---|---|---|---|---|---|
| SVG source de l'icône (`icon.svg`, ou data-URI du manifest) | — | — | manifest-icon-rx16-20c49c83 (data-URI 64×64, dans `sw.js` puis `manifest.webmanifest`) | icon-ee54f29f | — | — | icon-6566208c | — | — | icone-app-598444e0 |
| favicon (`<link rel="icon">`) | png:a19309ba (`./icons/icon-192.png`) | = | favicon-rx12-fe6df6bd (data-URI, `index.html`) et favicon-rx14-3262e41b (data-URI, `src/main.js`) | icon-ee54f29f (`/icon.svg`) | png:80503b5f (`icon-192.png`) | favicon-4df9b511 (`/favicon.svg`) | favicon-08c9ace1 (`/favicon.svg`) | png:a19309ba (= E0) | — (aucune balise `rel="icon"`) | icone-app-598444e0 (`/icon.svg`) |
| icône 192 | png:a19309ba | = | — | — | png:80503b5f | icon-192-9c9fe36e (SVG) | png:16da49c3 | png:a19309ba (= E0) | png:c2e3ce79 | png:d201d95e |
| icône 512 | png:c219ce8d | = | — | — | png:fcc93e4b | icon-512-ecb3cd6f (SVG) | png:a9defcf4 | png:c219ce8d (= E0) | png:854bc065 | png:f2af4a26 |
| icône maskable | png:d47574f4 (512) | = | — | icon-ee54f29f (`purpose "any maskable"`, `sizes "any"`) | png:a567ed31 (512) | icon-maskable-af877df9 (SVG) | icon-6566208c (`purpose maskable`, même fichier, sans zone sûre dédiée) | png:d47574f4 (= E0) | — (192 et 512 déclarées `"any maskable"`, aucun fichier dédié) | png:2f8f3769 (512) |
| apple-touch-icon | png:527a3a3d (180) | = | — | icon-ee54f29f (SVG, pas de PNG) | png:d6c16f87 (180) | — | — | png:527a3a3d (= E0) | png:c2e3ce79 (`icon-192.png` réutilisé, 192×192) | png:bacad776 (180) |
| `favicon.ico` | — | — | — | — | ico:dd15dcde (256×256, non référencé) | — | — | — | — | — |

Dimensions des PNG (octets, `git cat-file -s` pour E0 et E1 ; taille relevée par l'entrée pour les autres) : 192 : E0 4352, E4 4507, E6 10 419, E8 2096, E9 1916 ; 512 : E0 12 162, E4 12 244, E6 59 035, E8 5909, E9 5785 ; maskable 512 : E0 10 702, E4 10 882, E9 5251 ; 180 : E0 4154, E4 4296, E9 2273. E7 reprend les blobs d'E0 (mêmes tailles).

Contenu des SVG d'icône d'application (lu dans les fichiers du dossier `svg/`)

| fichier | version | contenu |
|---|---|---|
| manifest-icon-rx16-20c49c83 | E2 | viewBox 64×64, carré rx 16 `#0f172a`, bloc `#f8fafc` à `fill-opacity .08`, trois barres `#e2e8f0` |
| favicon-rx12-fe6df6bd, favicon-rx14-3262e41b | E2 | même dessin que ci-dessus, seul le `rx` du carré change : 12 puis 14 |
| icon-ee54f29f | E3 | 512×512, fond `#f5f7fb` rx 120, tuile 344×344 rx 86 en dégradé `#f8d872` vers `#f4c542`, 4 barres `#20180a` aux opacités 0.84 / 0.82 / 0.7 / 0.6 |
| favicon-4df9b511 | E5 | 64×64 rx 18 `#F7F3EE`, feuille `#FFF9F5` à traits `#1A1A1A`, coin plié |
| icon-192-9c9fe36e, icon-512-ecb3cd6f | E5 | feuille + pastille ronde en dégradé `#D9A35A` vers `#EFDAB2` avec « + » |
| icon-maskable-af877df9 | E5 | fond plein `#D9A35A`, feuille `#F7F3EE`, bande `#EFDAB2` à opacité 0.4 |
| icon-6566208c | E6 | 512×512 rx 124 `#171918`, feuille `#f4c430` (pli `#ffe27a`, barres `#29291f`), pastille `#b99ff5` avec coche `#241d35` |
| favicon-08c9ace1 | E6 | 48×48 rx 12 `#171918`, même motif simplifié |
| icone-app-598444e0 | E9 | 512×512, `<rect fill="#f4c430">` sans arrondi, lettre « M » en tracé `M156 362V150L256 270L356 150V362`, trait `#1a1a1a` de 44, arrondis, aucun texte, aucune transparence |

Références de lecture (`git show <sha>:<chemin>`, fournies par les entrées)

| version | références |
|---|---|
| E0 | `git show b6647a0:icons/icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` (premier : notes-v3@b6647a04 2026-10-09) |
| E1 | `git show 4da6255:public/icons/icon-192.png` (et 512, maskable, apple-touch ; source, notes-v3@4da62555 2026-10-18) ; builds `notes-v3-site` : `git show 244aab1:icons/icon-192.png` (notes-v3@244aab13 2026-10-18) ; même blob que E0 dans les trois lignées, jamais modifié |
| E2 | `git show 3c6f6152:public/sw.js` (manifest d'origine), `git show 3c6f6152:index.html`, `git show 576a8c9d:src/main.js`, `git show a488cc67:public/manifest.webmanifest` |
| E3 | `static/icon.svg`, premier notes-4@28ad8ce4 2026-10-22 (dans `src/routes/+page.ts` à ce commit, fichiers permutés), état final notes-4@8150588e ; blob git `f51ce59011ea78c98e99c0d0d0b03bf2c25ada06` |
| E4 | `git show b1f17318:public/icons/icon-192.png` (et `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png`, `public/favicon.ico`) ; seul commit : notes-v5@b1f17318 2026-10-21 |
| E5 | `static/favicon.svg`, `static/icons/icon-192.svg`, `icon-512.svg`, `icon-maskable.svg` : première notes-svelte@2923c47d 2026-10-22 |
| E6 | `static/icon.svg` et `static/favicon.svg` : notes-v6@57c25ea2 2026-10-28 ; PNG : `git show c2701fc1:static/icon-192.png` (blob 16da49c3) et `icon-512.png` (blob a9defcf4), premier ajout notes-v6@10ce3085 2026-10-31 |
| E7 | `git show 9021b9bc:public/icons/apple-touch-icon.png` (blob 527a3a3d), `icon-192.png` (a19309ba), `icon-512.png` (c219ce8d), `icon-maskable-512.png` (d47574f4) ; notes-aistudio@9021b9bc 2026-10-31, inchangé jusqu'à HEAD |
| E8 | `git show d5c96cef:public/icons/icon-192.png` (blob c2e3ce79) et `icon-512.png` (854bc065) ; `public/manifest.webmanifest` (blob f180671b) ; mindspace-old@d5c96cef 2026-11-03, jamais modifiés |
| E9 | `git show 87563ecf:public/icon.svg`, `public/icon-192.png`, `public/icon-512.png`, `public/icon-maskable-512.png`, `public/apple-touch-icon.png` ; mindspace-core@87563ecf 2026-11-11 |

Comparaison d'une version à l'autre
- E0 → E1 : aucun changement (mêmes quatre PNG, mêmes balises : favicon = `icon-192.png`, `apple-touch-icon` = `apple-touch-icon.png`). Aucun SVG d'icône d'application dans le dépôt.
- E1 → E2 : abandon des PNG au profit d'une data-URI SVG 64×64 ; aucun PNG, aucune icône 192 ou 512, aucune maskable, aucun apple-touch-icon (`git ls-tree -r` : aucun fichier image dans tout l'historique d'E2).
- E2 : trois SVG de même dessin (`rx` 12, 14, 16) : favicon de `index.html`, favicon de `src/main.js`, icône du manifest ; les deux favicons coexistent à HEAD (permutation de fichiers).
- E3 : avant notes-4@28ad8ce4, aucune icône, aucun manifest, aucun favicon (commits 94f8e515 à 16d7560e) ; ensuite un seul `icon.svg` sert de favicon, d'apple-touch-icon et d'icône de manifest ; aucun PNG ni `.ico`.
- E4 : 4 PNG + `favicon.ico`, tous nouveaux (blobs différents de ceux d'E0/E1) ; `icon-192` sert aussi d'icône aux 4 raccourcis du manifest (Nouvelle note, Nouvelle liste, Note vocale, Note du jour).
- E5 : 4 SVG (favicon, 192, 512, maskable), aucun PNG, pas d'apple-touch-icon ; déclarés dans `static/manifest.webmanifest` et dans `vite.config.ts` (VitePWA, mêmes trois icônes).
- E6 : SVG seuls jusqu'à notes-v6@10ce3085 2026-10-31, puis PNG 192 et 512 ajoutés ; pas d'apple-touch-icon ; `<meta name="theme-color">` unique `#f4c430`, manifest `theme_color #f4c430`, `background_color #f6f4ef` de V0 à HEAD.
- E7 : mêmes quatre PNG qu'E0/E1 (blobs a19309ba, c219ce8d, d47574f4, 527a3a3d), importés avec l'appli au premier commit.
- E8 : deux PNG neufs (192, 512), aucun SVG, aucun favicon, aucune maskable dédiée ; manifest `background_color` et `theme_color` `#111827`.
- E9 : un SVG source (nouveau dessin : « M » sur `#f4c430`) et quatre PNG neufs rendus depuis ce SVG avec Chromium (RGB sans alpha) ; décrits comme « Placeholders : visuel à décider par le propriétaire » (`CLAUDE.md`, mindspace-core@87563ecf 2026-11-11) ; maskable : tracé à l'échelle 0,82 ; aucun `favicon.ico`.

## 2c. Bibliothèques d'icônes

Versions sans aucune bibliothèque : E0, E1, E2, E3, E7, E9 (E9 : aucun paquet de pictogrammes dans `package.json` ni dans l'historique ; `CLAUDE.md` cite `lucide` seulement comme dépendance de l'ancienne appli, « référence, jamais de copie », mindspace-core@93b47014 2026-11-10).

| version | bibliothèque | version du paquet (dates) | utilisation |
|---|---|---|---|
| E4 | `lucide-react` | `^0.575.0` (notes-v5@b1f17318 2026-10-21) → `1.70.0` épinglée (notes-v5@75c22d63 2026-11-07, lot de 62 mises à jour) | 17 noms, uniquement dans les composants shadcn de `src/components/ui/` (boilerplate), jamais importés par l'app ni par `src/notes` ; ensemble inchangé aux trois points relevés (b1f17318, 75c22d63, HEAD) |
| E5 | `lucide-svelte` | `^0.468.0` (notes-svelte@2923c47d 2026-10-22, S1) ; retiré de `package.json` en S2 (notes-svelte@112ae9d8) | 17 noms lus dans `QuickActionMenu.svelte` et `+layout.svelte` ; ces fichiers l'importent encore après le retrait |
| E5 | `@lucide/svelte` | `^1.61.0` (S2 notes-svelte@112ae9d8 à HEAD S3 notes-svelte@96889f8d) | `BottomNavigation.svelte` (créé en S3, même contenu que `QuickActionMenu.svelte`) |
| E6 | `@lucide/svelte` | `1.61.0` (V0 notes-v6@57c25ea2 à V1 notes-v6@1bae3e15) → `1.63.0` (notes-v6@34172c2a 2026-10-28 à V7 notes-v6@7598f175, et toutes les branches non fusionnées) → `1.66.0` (notes-v6@dad00d5b 2026-10-31 à HEAD) | composants importés par nom, taille par la prop `size` (14 à 22 en général, 24 pour le « + » du dock) ; aucun `<svg>` dessiné à la main dans `src/` |
| E8 | `lucide-react` | `^1.66.0` (mindspace-old@c831ee63 2026-11-02) → `^1.67.0` (@e87bff19 2026-11-03) → `^1.68.0` (@997adc1f 2026-11-05) → `^1.69.0` (@250fdf1c 2026-11-05, HEAD) | imports nommés ; aucun `<svg>` dans l'historique du code source (`git log --all -S'<svg'` : aucun commit) ; pas de `package-lock.json` : seule la plage semver est connue |

Taille d'affichage des icônes de bibliothèque : E5 22 (onglets), 18 (champ de recherche et menu rapide), 16 (barre d'outils), 28 (états vides), 32 avec `strokeWidth` 2.6 (bouton d'ajout) ; E6 voir ci-dessus ; E8 voir `radius-spacing.md` (non repris ici).

Ensembles de noms et variations datées

| version | date | réf | ajouts | retraits |
|---|---|---|---|---|
| E4 | 2026-10-21 | notes-v5@b1f17318 | ArrowLeft, ArrowRight, Check, ChevronDown, ChevronDownIcon, ChevronLeft, ChevronLeftIcon, ChevronRight, ChevronRightIcon, ChevronUp, Circle, GripVertical, Minus, MoreHorizontal, PanelLeft, Search, X (17) | |
| E5 | 2026-10-22 | notes-svelte@2923c47d (S1) | FileText, Library, Search, Settings, Plus, NotebookPen, ListTodo, PenSquare (menu et onglets) ; Bold, CheckCheck, Pin, Palette (barre d'outils de l'éditeur : « Épingler la note », « Changer la couleur »…) ; NotebookText, Sparkles (états vides de la bibliothèque et de la recherche) ; Archive, Tag, Trash2 (importées, non utilisées) | |
| E6 | 2026-10-28 | notes-v6@57c25ea2 (V0) | 23 noms : ArrowDownToLine, ArrowLeft, ArrowUpFromLine, BookOpen, Check, ChevronRight, Command, FileText, HelpCircle, House, Info, Keyboard, Lightbulb, Moon, MoreHorizontal, Plus, Search, Settings2, ShieldCheck, Sparkles, Sun, Trash2, X | |
| E6 | 2026-10-28 | notes-v6@1bae3e15 (V1) | | Command, HelpCircle, House (→ 20 noms, inchangé en V2) |
| E6 | 2026-10-29 | notes-v6@a0935371 (V3) | | Lightbulb, MoreHorizontal (→ 18 noms) |
| E6 | 2026-10-31 | notes-v6@10ce3085 (V6) | Download (→ 19) | |
| E6 | 2026-11-02 | notes-v6@c2701fc1 (V9) | ArrowRight (→ 20) | |
| E6 (non fusionné) | 2026-10-29 à 2026-10-31 | notes-v6@d11bb77c (BR1), @7f351420 (BR4), @ac3fbc72 (BR3), @d665efcb (BR5) | ChevronDown, Paperclip, SunMoon (BR1) ; ChevronUp, GripVertical, Pin, SlidersHorizontal, Star (BR4) ; LayoutTemplate, PenLine (BR3) ; Eye, EyeOff, Lock (BR5), présents jusqu'à @d665efcb, aucune présence dans `main` | |
| E8 | 2026-11-03 | mindspace-old@d5c96cef | Download, Menu, X (`SettingsHub.tsx`) | |
| E8 | 2026-11-05 | @d028541d | Download, Menu, X (`SettingsLayout.tsx`) | |
| E8 | 2026-11-05 | @7d72e331 | | Download, Menu, X retirés de `SettingsHub.tsx` |
| E8 | 2026-11-05 | @90c4f82d | Bold, Code, Heading1, Heading2, Italic, List, ListOrdered, Redo2, Undo2 (`EditorToolbar.tsx`) | |
| E8 | 2026-11-05 | @64e843a0, @1274fca0, @20902a5d | Sparkles, TrendingUp, Wrench ; ArrowUpRight ; ArrowLeft, ArrowRight | |
| E8 | 2026-11-05 | @04ddfe98 | AlignCenter, AlignLeft, AlignRight, Columns3, Heading3, Rows3, Strikethrough, Table2, Trash2, Underline | |
| E8 | 2026-11-05 | @ccd468ab | ArrowDownWideNarrow, CheckSquare, LayoutGrid, List, ListChecks, MoreHorizontal, Plus, Settings2 (`App.tsx`) | |
| E8 | 2026-11-05 | @ab94742b | ArrowLeft, ChevronLeft, ChevronRight, Clock3, Copy, Download, EyeOff, PanelLeftClose, PanelLeftOpen, Pin, Redo2, Search, Trash2, Undo2 (`App.tsx`) | |
| E8 | 2026-11-05 | @a53044e3 | ChevronDown, ChevronUp, Type | Redo2, Undo2 (retirés de `EditorToolbar.tsx`) |
| E8 | 2026-11-05 | @1fd96923 | | ChevronLeft (`App.tsx`) |
| E8 | 2026-11-06 | @90b6cb34, @290000c4 | ArrowUpRight, BookOpen, Info, Sparkles (`AProposPage.tsx`) ; ArrowRight, Sparkles (`WhatsNewPage.tsx`) | |
| E8 | 2026-11-07 | @f51f14b9, @0c1cb372 | ArrowRight, ChevronDown, PenLine (`QuickCapture.tsx`) ; Blocks | |

Jeux SVG maison : effectifs et ajouts datés (ces jeux ne sont pas des bibliothèques ; chaque tracé est dans `design-final/icons/svg/`)

| version | date | réf | effectif après | ajouts | retraits | tracé modifié |
|---|---|---|---|---|---|---|
| E0 | 2026-10-09 | notes-v3@b6647a04 | 52 | 52 icônes (état initial) | | |
| E0 | 2026-10-09 | @637a0265 | 59 | bullets, highlight, info, numbers, offline, sparkle, tour | | |
| E0 | 2026-10-09 | @9643242e | 58 | | info | |
| E0 | 2026-10-09 | @b99f70fc | 61 | arrowRight, bug, improve | | |
| E0 | 2026-10-09 | @43a8615b | 64 | hash, slides, templates | | |
| E0 | 2026-10-15 | @ea104c22 | 64 | | | more |
| E1 | 2026-10-18 | @4da62555 | 65 | hand, library | sort | |
| E1 | 2026-10-18 | @4a4da608 | 66 | sort (même tracé) | | |
| E1 | 2026-10-19 | @d6af8790 | 67 | minus | | |
| E1 | 2026-10-19 | @369fe07a | 65 | | stop, templates | |
| E1 | 2026-10-19 | @e15376fa | 66 | liveText | | |
| E1 | 2026-10-19 | @893b157b | 67 | biometric | | |
| E1 | 2026-10-29 | @9e7d5dd7 | 77 | alignCenter, alignLeft, alignRight, table, tableColAdd, tableColRemove, tableHead, tableMerge, tableRowAdd, tableRowRemove | | |
| E1 | 2026-10-29 | @c218aba2 | 79 | collapse, expand | | |
| E1 | 2026-10-29 | @e30d2cdc | 81 | redo, undo | | |
| E1 | 2026-10-31 | @2c7478e4 | 82 | theme | | |
| E4 | 2026-10-21 | notes-v5@b1f17318 | 67 | 67 icônes (état initial) | | |
| E4 | 2026-11-08 | @32e9bd9e | 76 | home, user, ascending, descending, undo, redo, table, code, forward | | |
| E4 | 2026-11-11 | @89526ff2 | 77 | eraser | | |
| E7 | 2026-10-31 | notes-aistudio@9021b9bc (A0) | 82 | 82 icônes (même ensemble qu'E1 à HEAD) | | |
| E7 | 2026-11-05 | @6dbe9114 (A2) | 88 | sidebar, shield, cloud, refresh, broom, checkCircle | | |
| E7 | 2026-11-05 | @5a430a7b | 98 | at, person, timer, cart, target, book, quiz, bulb, location, tag | | |
| E9 | 2026-11-11 | mindspace-core@4381e483 | 1 SVG en ligne (corbeille) | corbeille (`TrashIcon`) ; réutilisée dans la liste en @339dbce0 (PR #24) | | |


## 3. Détail des changements

Format : `valeur — première apparition réf — dernier état réf — raison`. Les messages de commit ne sont pas repris par les entrées ; « non documentée » = aucune raison dans les entrées.

**`more` (points de suspension)** : changement de tracé dans E0
1. `more-f699ea37` : trois points `circle` r 1.8 sur la ligne horizontale (`cx` 5, 12, 19 ; `cy` 12), trait 2 — notes-v3@b6647a04 2026-10-09 — remplacée par notes-v3@ea104c22 2026-10-15 — non documentée.
2. `more-146e2aec` : trois points `circle` r 1.8 sur la ligne verticale (`cx` 12 ; `cy` 5, 12, 19), trait 1.75 — notes-v3@ea104c22 2026-10-15 — HEAD (même tracé en E4 et E7, empreinte 7a3d4c16) — non documentée.

**`undo` / `redo` / `table`** : même nom, deux tracés dans deux dépôts (aucun changement à l'intérieur d'un dépôt)
- `undo-8e785014` (E1, aussi E7 par le fichier `undo-815242b2`) : deux tracés `M9 14L4 9l5-5` (pointe en chevron) et `M4 9h10.5a5.5 5.5 0 0 1 0 11H11` (arc de rayon 5.5 qui s'arrête en `x` 11, `y` 20) — notes-v3@e30d2cdc 2026-10-29 (E7 : notes-aistudio@9021b9bc 2026-10-31) — HEAD — non documentée.
- `undo-e9c5acaf` (E4) : un seul tracé `M4 9h10a6 6 0 0 1 0 12M4 9l5-5M4 9l5 5` (arc de rayon 6 qui finit en `x` 14, `y` 21 ; pointe dessinée par deux bras partant du même point `4 9`) — notes-v5@32e9bd9e 2026-11-08 — HEAD — non documentée.
- `redo-01f828ab` (E1, E7 via `redo-a2dbf363`) : `M15 14l5-5-5-5` et `M20 9H9.5a5.5 5.5 0 0 0 0 11H13` — notes-v3@e30d2cdc 2026-10-29 — HEAD — non documentée.
- `redo-24ef0775` (E4) : `M20 9H10a6 6 0 0 0 0 12M20 9l-5-5M20 9l-5 5` — notes-v5@32e9bd9e 2026-11-08 — HEAD — non documentée.
- `table-87aa3649` (E1, E7 via `table-335e91b3`) : `<rect x=3 y=4 width=18 height=16 rx=3>` + `M3 10h18M3 15h18M10 10v10` (deux lignes horizontales, une verticale sous la première) — notes-v3@9e7d5dd7 2026-10-29 — HEAD — non documentée.
- `table-94345f4b` (E4) : `<rect x=3 y=3 width=18 height=18 rx=2>` + `M3 9h18M3 15h18M9 3v18M15 3v18` (grille 3 × 3, carré) — notes-v5@32e9bd9e 2026-11-08 — HEAD — non documentée.

**`trash` / corbeille** : tracé différent en E9
1. `trash-d9deae38` (E0 à E8 : mêmes tracés dans E1, E4, E7) : un seul `path` `M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6`, trait 1.75, affichée à 22 px — notes-v3@b6647a04 2026-10-09 — HEAD de notes-v3, notes-v5 (notes-v5@b1f17318 2026-10-21) et notes-aistudio (notes-aistudio@9021b9bc 2026-10-31) — non documentée.
2. `corbeille-43b6d92e` (E9, composant `TrashIcon`) : cinq `path` `M3 6h18`, `M8 6V4h8v2`, `M6 6l1 14h10l1-14`, `M10 11v6`, `M14 11v6`, trait 2, affichée à 20 × 20 (`width`/`height` = 20), `aria-hidden="true" focusable="false"` — mindspace-core@4381e483 2026-11-11 — HEAD (jamais modifiée) — non documentée. Différences lues dans les deux fichiers : couvercle à `y` 6 et de `x` 3 à 21 (au lieu de `y` 7 et `x` 4 à 20), poignée `M8 6V4h8v2` (de `x` 8 à 16, hauteur 2) au lieu de `M9 7V4h6v3` (de `x` 9 à 15, hauteur 3), corps `M6 6l1 14h10l1-14` (part de `y` 6, finit à `y` 20) au lieu de `M6 7l1 13h10l1-13` (part de `y` 7, finit à `y` 20) ; les deux traits intérieurs `M10 11v6` et `M14 11v6` sont identiques. Emplois en E9 : bouton « Supprimer » de `NoteEditor.tsx` (`ms-button ms-button--icon`, @4381e483) et barre de sélection de `NotesList.tsx` (@339dbce0 2026-11-11, PR #24).

**`sort`** : retrait puis rétablissement le même jour, même tracé (`sort-c0a4b667`) : supprimé notes-v3@4da62555 2026-10-18, ajouté de nouveau notes-v3@4a4da608 2026-10-18 — HEAD — non documentée (le passage du bundle à la source retire `sort` et ajoute `hand` et `library` dans le même commit).

**Trait (`stroke-width`) du jeu** : `2` (CSS du bundle, E0) — notes-v3@b6647a04 2026-10-09 — `1.75` (CSS de la source, E1 ; `svg { width: 22px; height: 22px; stroke-width: 1.75 }`) — HEAD de notes-v3, repris par notes-v5 (`app.css`, notes-v5@b1f17318 2026-10-21) et notes-aistudio (A0) — raison non documentée ; commit exact du passage de 2 à 1.75 non lu (voir section 8). E9 : `2` sur la corbeille seulement (attribut `stroke-width="2"`).

**Taille d'affichage** : `width:var(--size-icon)` de 22 px (E0) puis `width:22px;height:22px` (E1, E4, E7) — non documentée ; E9 : 20 × 20 pour la seule corbeille.

**Ajouts et retraits de bibliothèque** : voir le tableau daté de la section 2c.
- E4 : `lucide-react` `^0.575.0` → `1.70.0` épinglée (notes-v5@75c22d63 2026-11-07, lot de 62 mises à jour : non documentée pour les icônes ; ce commit a changé des types et des classes dans `calendar.tsx` et `chart.tsx`, pas des icônes).
- E5 : `lucide-svelte ^0.468.0` (S1) → `@lucide/svelte ^1.61.0` (S2 notes-svelte@112ae9d8) — non documentée ; l'import de `lucide-svelte` est resté dans `+layout.svelte` et `QuickActionMenu.svelte`.
- E6 : `1.61.0` → `1.63.0` (notes-v6@34172c2a 2026-10-28) → `1.66.0` (notes-v6@dad00d5b 2026-10-31) — non documentée.
- E8 : `^1.66.0` → `^1.67.0` → `^1.68.0` → `^1.69.0` (@e87bff19, @997adc1f, @250fdf1c) — non documentée.

**Icônes d'application** (cf. section 2b ; mêmes colonnes)
- E2 favicon `rx` 12 → `rx` 14 : `favicon-rx12-fe6df6bd` (notepad-pwa@3c6f6152 2026-10-20, `index.html`, jamais modifié) et `favicon-rx14-3262e41b` (notepad-pwa@576a8c9d 2026-10-20, HTML de `src/main.js`, HEAD) ; l'icône du manifest `manifest-icon-rx16-20c49c83` (@3c6f6152, HEAD) a `rx` 16 ; non documentée. Les contenus de fichiers sont permutés dans ce dépôt (a488cc67 en corrige une partie).
- E2 : manifest d'abord dans `public/sw.js` (@3c6f6152, @576a8c9d, @76dfefe5) puis dans `public/manifest.webmanifest` (@a488cc67).
- E3 : `icon-ee54f29f` — notes-4@28ad8ce4 2026-10-22 (chemins permutés jusqu'à notes-4@8150588e, qui remet chaque contenu à sa place sans changer de valeur) — HEAD (état de `main` après fea834d7 le 2026-10-22) ; `aria-label` du bouton « + » : « Create note » en notes-4@94f8e515 puis « Créer une note » dès notes-4@28ad8ce4 (texte, non icône).
- E6 : PNG ajoutés à notes-v6@10ce3085 2026-10-31 après SVG seuls ; non documentée.
- E9 : voir ci-dessus ; « Placeholders : visuel à décider par le propriétaire » (`CLAUDE.md`, mindspace-core@87563ecf 2026-11-11).
- E0 → E7 : aucun changement de blob entre les trois lignées d'E0/E1 et E7 (`a19309ba`, `c219ce8d`, `d47574f4`, `527a3a3d`).

**Icônes de texte (glyphes) : états à la création** (aucun changement de valeur dans une version)
- E2 : `◐` (U+25D0), `▣` (U+25A3), `⬚` (U+2B1A), monogramme `N` dans `.brand-mark` : carré en dégradé `linear-gradient(135deg, var(--primary), #38bdf8)`, 2.5 rem puis 2.7 rem (A → B entre notepad-pwa@3c6f6152 et @576a8c9d), lettre 1.3 rem puis 1.4 rem, graisse 700 — non documentée.
- E3 : `+` du FAB de `Dock.svelte`, `font-size: 2rem`, `aria-label` « Create note » (notes-4@94f8e515) puis « Créer une note » (notes-4@28ad8ce4).
- E5 : 📌 🗃 🗑 dans `NoteCard.svelte` (`.mini-button`) ; le bouton supprimer porte la classe `.danger` (`color #b95555`).
- E9 : `‹` (mindspace-core@8f85ad28 2026-11-10), `+` (@c74ffb69 2026-11-10, `font-size: 1.5rem; line-height: 1`, `aria-label` et `title` « Nouvelle note ») ; barre d'outils `G I T1 T2 T3 • 1.` (@93b47014 2026-11-10, chaque bouton avec un `aria-label` : « Gras », « Italique », « T1, titre de niveau 1 »…) ; phrase masquée « •••• •••• … » (@0a15c7ce 2026-11-11, 7 groupes de 4 puces, `aria-label="Phrase masquée"`).

## 4. Éléments disparus

| élément | créé (réf) | supprimé (réf) | version | remplacé par | note |
|---|---|---|---|---|---|
| `info` (`info-4fbcd3b8`) | notes-v3@637a0265 2026-10-09 | notes-v3@9643242e 2026-10-09 | E0 | aucun remplaçant relevé | cercle r 9, trait vertical, point (trait de 3) ; supprimé le jour de sa création |
| `more-f699ea37` (points horizontaux) | notes-v3@b6647a04 2026-10-09 | notes-v3@ea104c22 2026-10-15 | E0 | `more-146e2aec` (points verticaux) | remplacement de tracé, même nom |
| `sort` (retrait temporaire) | notes-v3@b6647a04 2026-10-09 | notes-v3@4da62555 2026-10-18 | E1 | `sort` rétabli (même tracé) en notes-v3@4a4da608 2026-10-18 | présent à HEAD |
| `stop` (`stop-c6cb7b18`) | notes-v3@b6647a04 2026-10-09 | notes-v3@369fe07a 2026-10-19 | E1 | aucun remplaçant relevé | carré plein `rect` 12×12 rx 2 ; présent en E0 et au début d'E1 |
| `templates` (`templates-88a46ea1`) | notes-v3@43a8615b 2026-10-09 | notes-v3@369fe07a 2026-10-19 | E1 | aucun remplaçant relevé | présente en E0 et au début d'E1 |
| `lucide-svelte` (paquet) | notes-svelte@2923c47d 2026-10-22 | notes-svelte@112ae9d8 2026-10-22 (retiré de `package.json`) | E5 | `@lucide/svelte` | imports de `lucide-svelte` restés dans `+layout.svelte` et `QuickActionMenu.svelte` |
| Lucide `Command`, `HelpCircle`, `House` | notes-v6@57c25ea2 2026-10-28 | notes-v6@1bae3e15 2026-10-28 | E6 | aucun remplaçant relevé | |
| Lucide `Lightbulb`, `MoreHorizontal` | notes-v6@57c25ea2 2026-10-28 | notes-v6@a0935371 2026-10-29 | E6 | aucun remplaçant relevé | |
| Lucide `ChevronLeft` | mindspace-old@ab94742b 2026-11-05 | mindspace-old@1fd96923 2026-11-05 | E8 | aucun remplaçant relevé | retiré de `App.tsx` ; supprimé le jour de son ajout |
| `broom` (référence sans tracé) | notes-v5@1c1fb148 2026-11-11 (référence dans `Sketch.tsx`) | corrigé notes-v5@89526ff2 2026-11-11 | E4 | `eraser` (`eraser-179da814`) | nom référencé mais jamais défini dans `icons.tsx` ; `eraser` ajouté pour le remplacer |
| Lucide : 13 noms sur branches non fusionnées | notes-v6@d11bb77c, @7f351420, @ac3fbc72, @d665efcb (2026-10-29 à 2026-10-31) | jamais fusionnés dans `main` | E6 (non fusionné) | — | ChevronDown, ChevronUp, Eye, EyeOff, GripVertical, LayoutTemplate, Lock, Paperclip, PenLine, Pin, SlidersHorizontal, Star, SunMoon |

Les jeux SVG maison d'E0, E1, E4, E7 ne sont repris par aucune autre version (E2, E3, E5, E6, E8 utilisent des glyphes ou Lucide) ni par E9, qui n'a que la corbeille : ce n'est pas une suppression dans un dépôt, donc non listé comme disparu.

## 5. Éléments propres à une seule version

- E0 : `info` (notes-v3@637a0265 2026-10-09, supprimée le même jour) ; variante `more-f699ea37` (notes-v3@b6647a04) ; trait 2 (CSS du bundle).
- E1 : aucune icône exclusive ; `stop` et `templates` ne sont partagées qu'avec E0 ; variantes `undo-8e785014`, `redo-01f828ab`, `table-87aa3649` partagées avec E7.
- E2 : `◐`, `▣`, `⬚`, monogramme `N` (notepad-pwa@3c6f6152 2026-10-20) ; trois SVG de favicon et d'icône de manifest (`favicon-rx12-fe6df6bd`, `favicon-rx14-3262e41b`, `manifest-icon-rx16-20c49c83`).
- E3 : `icon-ee54f29f` (notes-4@28ad8ce4 2026-10-22) ; « + » partagé avec E9.
- E4 : `home`, `user`, `ascending`, `descending`, `code`, `forward` (notes-v5@32e9bd9e 2026-11-08), `eraser` (notes-v5@89526ff2 2026-11-11) ; variantes `undo-e9c5acaf`, `redo-24ef0775`, `table-94345f4b` (@32e9bd9e) ; `favicon.ico` (notes-v5@b1f17318 2026-10-21) ; noms Lucide de boilerplate absents des autres colonnes : ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, Circle, Minus, PanelLeft (notes-v5@b1f17318).
- E5 : emoji 📌 🗃 🗑 ; Lucide Archive, CheckCheck, ListTodo, NotebookPen, NotebookText, Palette, PenSquare, Settings, Tag, Library (notes-svelte@2923c47d 2026-10-22) ; quatre SVG d'icône (`favicon-4df9b511`, `icon-192-9c9fe36e`, `icon-512-ecb3cd6f`, `icon-maskable-af877df9`).
- E6 : Lucide ArrowDownToLine, ArrowUpFromLine, Keyboard, Moon, ShieldCheck, Sun (notes-v6@57c25ea2 2026-10-28) ; supprimés dans E6 : Command, HelpCircle, House, Lightbulb ; branches non fusionnées : Eye, LayoutTemplate, Lock, Paperclip, SlidersHorizontal, Star, SunMoon ; `icon-6566208c` et `favicon-08c9ace1` (57c25ea2).
- E7 : sidebar, shield, cloud, refresh, broom, checkCircle (notes-aistudio@6dbe9114 2026-11-05) ; at, person, timer, cart, target, book, quiz, bulb, location, tag (notes-aistudio@5a430a7b 2026-11-05).
- E8 : Lucide AlignCenter, AlignLeft, AlignRight, ArrowDownWideNarrow, ArrowUpRight, Blocks, CheckSquare, Clock3, Code, Columns3, Copy, Heading1, Heading2, Heading3, Italic, LayoutGrid, List, ListChecks, ListOrdered, Menu, PanelLeftClose, PanelLeftOpen, Redo2, Rows3, Strikethrough, Table2, TrendingUp, Type, Underline, Undo2, Wrench (mindspace-old@d5c96cef à @0c1cb372, 2026-11-03 à 2026-11-07).
- E9 : `corbeille-43b6d92e` (mindspace-core@4381e483 2026-11-11) ; `icone-app-598444e0` (@87563ecf) ; glyphes `‹`, barre d'outils `G I T1 T2 T3 • 1.`, phrase masquée (refs section 3).

## 6. Contradictions et trous

1. Empreintes de deux sortes. Les entrées par dépôt nomment les SVG `<nom>-<empreinte du tracé>` (par exemple `undo-e8218dd2`), alors que `svg-index.tsv` nomme les fichiers d'après leur contenu complet (`undo-8e785014`). La matrice utilise les noms du dossier `design-final/icons/svg/`. Correspondance dans l'annexe A.
2. Attributs de la balise `<svg>`. Les fichiers issus de `notes-v3` portent `width="24" height="24"` ; les fichiers issus de `notes-v5` et `notes-aistudio` n'en portent pas ; les tracés (`d`, `rect`, `circle`) sont identiques pour 82 variantes de tracé, chacune présente en deux fichiers (annexe A). Aucune entrée ne dit si cet attribut vient du code source ou de l'extraction : la matrice les traite comme un seul tracé.
3. Trait des icônes d'E0. L'entrée `notes-v3` dit « 2 dans le bundle, 1.75 dans la source » mais les fichiers SVG des icônes présentes en E0 et E1 portent tous `stroke-width="1.75"` (un seul fichier par tracé) ; seule `more-f699ea37` porte `2`. La date du passage de 2 à 1.75 dans le CSS n'est donnée par aucune entrée ; l'entrée de `more-146e2aec` (créée en notes-v3@ea104c22 2026-10-15, dans E0) dit « trait 1.75 (CSS svg) ; 2 dans le bundle ».
4. Présence en E0 : les entrées ne donnent pas de liste d'icônes d'E0 mais des ajouts datés et des effectifs (64 à notes-v3@ea104c22). La matrice place une icône en E0 quand sa première apparition est datée du 2026-10-09 au 2026-10-15 (64 icônes, `info` exclue : supprimée le jour de sa création) ; en E1 quand elle existe dans la source (82 à HEAD, plus `stop` et `templates` au début d'E1 ; 84 au maximum). Les effectifs recomptés dans la matrice égalent ceux des entrées.
5. Empreintes des PNG. E0, E1, E4, E6, E7, E8 donnent le sha1 du blob git (8 caractères) ; E9 donne le sha1 du contenu du fichier. Ces deux méthodes ne sont pas comparables : une égalité ou une différence entre E9 et les autres versions ne peut se lire que par les tailles en octets, toutes différentes (section 2b). 
6. E4 : `broom` est référencé par `Sketch.tsx` entre notes-v5@1c1fb148 et notes-v5@89526ff2 sans être défini ; E7 définit `broom` (`broom-fd4708b3`, balai) et E4 définit `eraser` (`eraser-179da814`, gomme) : deux tracés différents pour deux noms ; l'entrée E4 dit `eraser` « ajoutée pour remplacer `broom` ».
7. E5 : à S1 la barre d'onglets existe sous le nom `QuickActionMenu.svelte`, jamais importé ; `BottomNavigation.svelte` n'est créé qu'en S3 (même contenu). Les lignes d'E5 `S1` pour les onglets s'appliquent à `QuickActionMenu.svelte`. Les icônes Lucide d'E5 n'ont ni empreinte ni fichier SVG (paquet npm).
8. E6 : l'entrée écrit « 18 de V3 à V6 » et « 19 depuis V6 » : V6 (notes-v6@10ce3085) compte donc 18 ou 19 selon la lecture (`Download` y est ajouté). Les versions de cellule de la matrice pour `Download` (`1.63.0 → 1.66.0`) et `ArrowRight` (`1.66.0`) sont déduites des plages de version (`1.63.0` jusqu'à V7, `1.66.0` dès notes-v6@dad00d5b) : le commit de passage entre V7 et notes-v6@dad00d5b n'est pas daté dans les entrées.
9. E6 : le manifest utilise `icon.svg` en `purpose "any"` et `"maskable"` sans zone sûre dédiée ; aucune entrée ne dit si l'icône est lisible une fois masquée.
10. E8 : le manifest (`background_color` et `theme_color` `#111827`, gris-bleu sombre de la période Tailwind 3-grays) contredit la palette `--ms-bg` `#faf9f6` introduite le 2026-11-05 (entrée `mindspace-old`). Aucun SVG ni favicon ; le `apple-touch-icon` réutilise l'icône 192 (pas de 180 dédiée).
11. E2 : deux favicons différents (`rx` 12 et 14) à HEAD à cause de la permutation de fichiers ; les entrées signalent que le HTML vit à la fois dans `index.html` et dans `src/main.js`.
12. E3 : le `apple-touch-icon` est un SVG (`/icon.svg`), pas un PNG : constat des entrées, aucune ligne ne dit si c'est lisible sur iOS.
13. Icônes de bibliothèque non comparables aux jeux maison : les tracés Lucide ne sont dans aucun dépôt (E5 à E8 : paquets npm), donc aucun alias `≈` de la matrice ne garantit une identité de dessin, seulement une proximité de nom ou de rôle.
14. E8 : aucun fichier verrou : seule la plage semver de `lucide-react` est connue ; la version réellement installée n'est pas dans les entrées.
15. E4 : `lucide-react` ne fait pas partie de l'interface visible (boilerplate shadcn, jamais importé par l'app) : les 17 noms de la colonne E4 ne sont donc pas des icônes affichées.
16. Zones non couvertes par les entrées : tailles d'affichage des icônes de bibliothèque d'E6 et E8 (renvoi à `radius-spacing.md`, non lu ici) ; messages de commit des changements de tracé (`more`, `trash`, `undo`, `redo`, `table`) ; E1 et E7 : valeur de `theme_color` du manifest ; E0, E1, E4, E7 : couleurs du manifest ; contenu pixel des PNG (aucune entrée n'a lu les pixels ; E9 : seuls les en-têtes et l'empreinte du fichier ont été lus) ; branche `claude/brave-shannon-p7pfr9-no-tasks` d'E9 (retire l'onglet Tâches, qui n'a jamais eu d'icône ; mindspace-core@7dd4d041 2026-11-12, non fusionnée).
17. Motif SVG hors icônes : `acrylic-grain-7a4c4ce3` (grain du style Acrylique, extrait de `--glass-shine: url("data:image/svg+xml,…")` dans `src/styles/looks.css`, première apparition notes-v3@3687c668 2026-10-31, HEAD, E1 ; `feTurbulence` `fractalNoise`, 120 × 120, voile gris à 14 % d'opacité au plus) : présent dans le dossier `svg/`, ne figure pas dans la matrice parce que ce n'est pas un pictogramme. De même, `Sheets.tsx` (Carte des liens, E1) dessine ses nœuds en `<rect>`/`<circle>` JSX : le point de dossier passe de `<circle r=4>` à `<rect class="map-dot" rx=8/3>` à notes-v3@369fe07a 2026-10-19 (hors du jeu d'icônes).

## Annexe A. Équivalences de fichiers (même tracé, fichiers différents du dossier `svg/`)

Chaque ligne : l'identifiant utilisé dans la matrice, l'empreinte du tracé (celle des entrées par dépôt), et les autres fichiers de `design-final/icons/svg/` au même tracé. `v3`, `v5`, `aistudio` = dépôts `notes-v3`, `notes-v5`, `notes-aistudio`.

| variante (id de la matrice) | empreinte du tracé | autres fichiers du même tracé (attributs `width`/`height` seuls différents) |
|---|---|---|
| `alignCenter-872f0992` (v3) | cdc05398 | `alignCenter-e45c0b87` (aistudio) |
| `alignLeft-0fb8f11d` (v3) | c7c63ac7 | `alignLeft-81977ead` (aistudio) |
| `alignRight-b756d55e` (v3) | cec60154 | `alignRight-1c004593` (aistudio) |
| `all-d41ee407` (v3) | cb54ca93 | `all-81d5fa17` (v5+aistudio) |
| `arrowRight-644a52ea` (v3) | 0e3224d2 | `arrowRight-332bcc18` (v5+aistudio) |
| `attach-40b7c79f` (v3) | 78a9a920 | `attach-6a29c20e` (v5+aistudio) |
| `audio-8b2f6f48` (v3) | 2dfdd927 | `audio-b461d35f` (v5+aistudio) |
| `back-df65692a` (v3) | 5899fce0 | `back-098443e8` (v5+aistudio) |
| `bell-f74a8f96` (v3) | 7d5a30b0 | `bell-2cab4e4a` (v5+aistudio) |
| `biometric-4043ba97` (v3) | 7e595b57 | `biometric-af109c9c` (v5+aistudio) |
| `bug-fefbaa54` (v3) | 14bf43f5 | `bug-a06d2526` (v5+aistudio) |
| `bullets-e37cdf2b` (v3) | 9a7c601c | `bullets-1890aafd` (v5+aistudio) |
| `calendar-74949606` (v3) | c1dfd79a | `calendar-851ecf26` (v5+aistudio) |
| `camera-fbf55e22` (v3) | 9b71b38e | `camera-1a6e4182` (v5+aistudio) |
| `cards-a4a58eab` (v3) | c516fdcd | `cards-cda6d6dc` (v5+aistudio) |
| `check-2a107c85` (v3) | e857cf71 | `check-3294550e` (v5+aistudio) |
| `checklist-e2f9062d` (v3) | fcadc6e7 | `checklist-b5af7d3b` (v5+aistudio) |
| `close-12683d61` (v3) | 3b0b8a9b | `close-1cbd7560` (v5+aistudio) |
| `collapse-ae24e908` (v3) | 66a08b47 | `collapse-8ec76439` (aistudio) |
| `doc-dfb6106f` (v3) | 0b8d3922 | `doc-428ba3a0` (v5+aistudio) |
| `download-f97ba9d0` (v3) | 4f86e2ac | `download-2948f536` (v5+aistudio) |
| `edit-fb3c475f` (v3) | cadbac7c | `edit-5e9704c6` (v5+aistudio) |
| `expand-fa481de0` (v3) | 7568aa56 | `expand-b3921a53` (aistudio) |
| `extract-b5444958` (v3) | 522db1c6 | `extract-6cae1673` (v5+aistudio) |
| `filter-10ed389d` (v3) | 56984e1d | `filter-23dcb7d2` (v5+aistudio) |
| `folder-8cc74d89` (v3) | 3cdb3c91 | `folder-1e1b13af` (v5+aistudio) |
| `folderNew-371e1d34` (v3) | 6d7112d5 | `folderNew-f7e474a0` (v5+aistudio) |
| `graph-883dd743` (v3) | 986d576e | `graph-35a6ba75` (v5+aistudio) |
| `grip-e59b076c` (v3) | e93ce473 | `grip-d4adaf39` (v5+aistudio) |
| `hand-e62876fb` (v3) | 7654db72 | `hand-3cfadc96` (v5+aistudio) |
| `hash-09949018` (v3) | 71a61110 | `hash-224a11e1` (v5+aistudio) |
| `highlight-ce59b981` (v3) | c2d37bf3 | `highlight-9b9cb1dc` (v5+aistudio) |
| `history-9bb76d61` (v3) | b13eb3bc | `history-2b3813f9` (v5+aistudio) |
| `image-0308bfb5` (v3) | 44374186 | `image-a1286bc5` (v5+aistudio) |
| `improve-58038212` (v3) | f5620024 | `improve-7b6a9cb9` (v5+aistudio) |
| `library-2e3220c8` (v3) | 58d3d040 | `library-25329bd1` (v5+aistudio) |
| `link-e7fa1866` (v3) | d7b2640c | `link-ea91ba0c` (v5+aistudio) |
| `list-93b64799` (v3) | 499e714e | `list-f55a2b0b` (v5+aistudio) |
| `listReset-074732aa` (v3) | e954fec3 | `listReset-72b717d1` (v5+aistudio) |
| `liveText-f54628b4` (v3) | c99f3604 | `liveText-301bffb0` (v5+aistudio) |
| `lock-3c4209bb` (v3) | a1ba290d | `lock-5839568a` (v5+aistudio) |
| `mail-80a7e512` (v3) | d8e93851 | `mail-2958b8ed` (v5+aistudio) |
| `mapPin-6494bae3` (v3) | bc719aaa | `mapPin-ff27abba` (v5+aistudio) |
| `merge-6e720f98` (v3) | d9b68b52 | `merge-71153480` (v5+aistudio) |
| `mic-542f5f74` (v3) | b86154b5 | `mic-d5596eff` (v5+aistudio) |
| `minus-ef4042d2` (v3) | a09d0137 | `minus-600577fa` (v5+aistudio) |
| `more-146e2aec` (v3) | 7a3d4c16 | `more-04d69893` (v5+aistudio) |
| `move-118c4463` (v3) | 0b4740a6 | `move-9f1f826e` (v5+aistudio) |
| `numbers-a136c2ce` (v3) | 5dc25e9d | `numbers-bc4c357c` (v5+aistudio) |
| `offline-6f2820c7` (v3) | 99ac30c3 | `offline-0d6f3b83` (v5+aistudio) |
| `outline-1ab09169` (v3) | 480c55d4 | `outline-2d01eff0` (v5+aistudio) |
| `paste-17c7fd59` (v3) | 71069abb | `paste-9438fe6a` (v5+aistudio) |
| `pause-a37d0223` (v3) | e85e1ed2 | `pause-0043ce63` (v5+aistudio) |
| `phone-7c6e55aa` (v3) | a5affc36 | `phone-9f4a0861` (v5+aistudio) |
| `pin-7ddd3c1c` (v3) | d079e25b | `pin-b3031947` (v5+aistudio) |
| `play-57bc06cd` (v3) | 999041e5 | `play-76630778` (v5+aistudio) |
| `plus-3820781f` (v3) | 083e7f93 | `plus-7e91a917` (v5+aistudio) |
| `print-256d5618` (v3) | 8329aae3 | `print-e5e23a37` (v5+aistudio) |
| `redo-01f828ab` (v3) | 215c80f8 | `redo-a2dbf363` (aistudio) |
| `restore-844889fb` (v3) | 1b53c56e | `restore-aa8a94bc` (v5+aistudio) |
| `search-e097e254` (v3) | db61e26f | `search-50b817cf` (v5+aistudio) |
| `selectAll-0fe5efbd` (v3) | 959c4c86 | `selectAll-de1b92ff` (v5+aistudio) |
| `settings-bb3bf0aa` (v3) | 56cda94a | `settings-3825ff78` (v5+aistudio) |
| `share-bc191de1` (v3) | a0d06e5a | `share-6aa36543` (v5+aistudio) |
| `slides-63f95bd0` (v3) | 19d701aa | `slides-3522d0ac` (v5+aistudio) |
| `sort-c0a4b667` (v3) | 28c59bf3 | `sort-6f7c0970` (v5+aistudio) |
| `sparkle-2edfc2b2` (v3) | d19d82d3 | `sparkle-75cc6a86` (v5+aistudio) |
| `study-92653eb1` (v3) | aaf5b02a | `study-4f98861c` (v5+aistudio) |
| `table-87aa3649` (v3) | 6bf7141d | `table-335e91b3` (aistudio) |
| `tableColAdd-611c21dd` (v3) | 0d907945 | `tableColAdd-d6c6871c` (aistudio) |
| `tableColRemove-211d4ea4` (v3) | 7c15f562 | `tableColRemove-0c704521` (aistudio) |
| `tableHead-130195cf` (v3) | 852ca6fb | `tableHead-b2c1c2ad` (aistudio) |
| `tableMerge-6a28dea1` (v3) | f118d7cf | `tableMerge-cc9476fa` (aistudio) |
| `tableRowAdd-7a7cd93d` (v3) | 40cc0397 | `tableRowAdd-0b08c488` (aistudio) |
| `tableRowRemove-638c1a64` (v3) | 5795cd7b | `tableRowRemove-3472f50e` (aistudio) |
| `theme-4ab45b69` (v3) | 6e681ba0 | `theme-c386c8a0` (aistudio) |
| `themeAuto-e9067c05` (v3) | ccb1e06a | `themeAuto-6857e7c9` (v5+aistudio) |
| `themeDark-35243fff` (v3) | 551d7c4d | `themeDark-c7ef1e49` (v5+aistudio) |
| `themeLight-a50a053f` (v3) | 4e4439fe | `themeLight-1d8a4f60` (v5+aistudio) |
| `tour-9b7508c6` (v3) | 9cfd4f40 | `tour-788989f0` (v5+aistudio) |
| `trash-d9deae38` (v3) | 404ee0cf | `trash-f3897429` (v5+aistudio) |
| `undo-8e785014` (v3) | e8218dd2 | `undo-815242b2` (aistudio) |

Détail complet par dépôt : design-system/by-repo/<repo>/icons.md
