Source : notes-v3, commits lus : 135 (9 lignée notes-site, 83 lignée source main, 43 builds notes-v3-site), plage : 2026-10-09 à 2026-10-31

# Décisions de design citées

Seules les décisions écrites dans les messages de commit, `docs/*.md`, les commentaires de `tokens.css`/`looks.css` et le journal des modifications (`src/changelog.ts`, texte de l'auteur) sont reprises, sans interprétation. Les PR n'ont pas de description dans le dépôt cloné : les « PR » sont les messages de merge et les corps des commits de branche. Citations raccourcies à 260 caractères.

218 citations.

| date | réf | décision (citation courte) | catégorie |
|---|---|---|---|
| 2026-10-09 | notes-v3@9643242e 2026-10-09 | « Notes 2.1.0: centrage de l'accueil, icône inutilisée retirée » | icônes |
| 2026-10-18 | notes-v3@1224a586 2026-10-18 | « Notes 26.10.18.4 : Trier en menu déroulant, verre clair en sombre, Filtrer retiré » | couleur |
| 2026-10-18 | notes-v3@1224a586 2026-10-18 (changelog) | « En thème sombre, les barres sont en verre clair au lieu d’un bloc noir » | couleur |
| 2026-10-18 | notes-v3@4a4da608 2026-10-18 | « Notes 26.10.18.3 : barre unique + au pouce, créer en 3 choix, note vide guidée, trier/filtrer, récap mosaïque, guide réécrit » | mise en page |
| 2026-10-18 | notes-v3@4a4da608 2026-10-18 (changelog) | « Une seule barre en bas : Notes, Bibliothèque, Recherche, Réglages, avec + du côté de la main dominante ; regroupée de ce côté sur tablette » | mise en page |
| 2026-10-18 | notes-v3@4a4da608 2026-10-18 (changelog) | « Récap en mosaïque, fond flouté derrière les menus, barre de navigation plus lisible, trois colonnes de cartes sur tablette » | couleur |
| 2026-10-18 | notes-v3@4da62555 2026-10-18 | « Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide » | élévation/verre |
| 2026-10-18 | notes-v3@4da62555 2026-10-18 | « Thumb-first layout (mirrored islands, one-tap +, search in dock, bottom sheets), » | mise en page |
| 2026-10-18 | notes-v3@4da62555 2026-10-18 | « liquid glass skin, same storage schema and backup format. » | élévation/verre |
| 2026-10-18 | notes-v3@4da62555 2026-10-18 (changelog) | « Verre liquide : îlots flottants translucides sur un fond calme » | couleur |
| 2026-10-18 | notes-v3@4da62555 2026-10-18 (changelog) | « Deux îlots au pouce : Bibliothèque et Réglages d’un côté ; Recherche, micro et + de l’autre, inversés pour les gauchers » | mise en page |
| 2026-10-18 | notes-v3@4da62555 2026-10-18 (changelog) | « Menus en feuilles venues du bas, du côté du pouce » | mise en page |
| 2026-10-18 | notes-v3@4da62555 2026-10-18 (changelog) | « Le mode gaucher inverse à nouveau toutes les barres et tous les menus » | mise en page |
| 2026-10-18 | notes-v3@4da62555 2026-10-18 (changelog) | « Accueil, visite guidée et panneau À propos » | mise en page |
| 2026-10-18 | notes-v3@4da62555 2026-10-18 (changelog) | « Design system Notes : îlots au pouce, thème sombre, couleurs de dossiers » | couleur |
| 2026-10-18 | notes-v3@4da62555 2026-10-18 (src/styles/tokens.css, commentaire) | « Folders: dot color, tint, readable text » | couleur |
| 2026-10-18 | notes-v3@801d11fb 2026-10-18 | « Notes 26.10.18.2 : récap, bibliothèque pleine page, couleurs système, tablette, micro-interactions » | couleur |
| 2026-10-18 | notes-v3@801d11fb 2026-10-18 (changelog) | « Sur tablette : cartes plus grandes, vue liste sur deux colonnes, menus ouverts à côté du bouton qui les appelle » | mise en page |
| 2026-10-18 | notes-v3@801d11fb 2026-10-18 (changelog) | « Interrupteurs et sélecteurs qui glissent ; petites animations aux coches et aux choix » | mouvement |
| 2026-10-18 | notes-v3@926abbd6 2026-10-18 | « Rayons au tiers, verre 24px/180 %, outil :: (carte à réviser) » | forme |
| 2026-10-18 | notes-v3@926abbd6 2026-10-18 (src/styles/tokens.css, commentaire) | « Shape: every radius = its box height ÷ 3; containers stay concentric (inner radius + padding) » | forme |
| 2026-10-18 | notes-v3@a5bd51cb 2026-10-18 (changelog) | « Les listes affichent une barre de progression sur leur carte » | mise en page |
| 2026-10-18 | notes-v3@ba1d8822 2026-10-18 | « Build: rayons au tiers, outil :: » | forme |
| 2026-10-19 | notes-v3@369fe07a 2026-10-19 | « 26.10.19.5 : puces touchées à 44px, points de dossier carrés sur la Carte des liens, icônes inutilisées retirées » | forme |
| 2026-10-19 | notes-v3@369fe07a 2026-10-19 | « .chip dessinée à 38px, zone de toucher 44px (comme les pastilles et le ⋮) » | accessibilité/cibles |
| 2026-10-19 | notes-v3@369fe07a 2026-10-19 | « Carte des liens : le point de dossier devient un carré ÷3 (plus aucun cercle) » | forme |
| 2026-10-19 | notes-v3@369fe07a 2026-10-19 | « Retire les icônes stop et templates, plus utilisées » | icônes |
| 2026-10-19 | notes-v3@369fe07a 2026-10-19 (changelog) | « Pastilles et puces se touchent plus facilement (44 px), sans grossir à l’écran » | accessibilité/cibles |
| 2026-10-19 | notes-v3@893b157b 2026-10-19 | « Réglages › Notes masquées : Face ID ou empreinte, Changer le code PIN ; bouton dans le panneau PIN » | mise en page |
| 2026-10-19 | notes-v3@8eb1ac1c 2026-10-19 | « Titres de section (panneaux, Réglages, « Dans cette note ») : 13,5 px gras atténué, plus de capitales, une seule voix avec la liste » | mise en page |
| 2026-10-19 | notes-v3@9dbf7f2f 2026-10-19 | « npm run smoke : build + 8 parcours clés dans Chromium (lancement, créer, recherche, Bibliothèque, texte des photos, sombre, Plan téléphone, inspecteur tablette) » | couleur |
| 2026-10-19 | notes-v3@a9bdc0da 2026-10-19 | « Notes 26.10.19.5 : sélection au clavier (S), pastilles touchées à 44px, filtre mort retiré, 11 tests + CI » | accessibilité/cibles |
| 2026-10-19 | notes-v3@a9bdc0da 2026-10-19 | « Pastilles sous le titre : 34px visibles, 44px au toucher (comme le ⋮) » | accessibilité/cibles |
| 2026-10-19 | notes-v3@ba6e7b28 2026-10-19 | « Notes 26.10.19.1 : volets en coins sur tablette, panneaux latéraux, plein écran, encres lisibles » | mise en page |
| 2026-10-19 | notes-v3@ba6e7b28 2026-10-19 | « Menus ancrés : le bouton déclencheur reste visible ; Plan, Historique, Vue d'ensemble en panneau côté pouce ; Réviser et Carte des liens en plein écran » | mise en page |
| 2026-10-19 | notes-v3@ba6e7b28 2026-10-19 | « Colonnes par container query (volet, pas écran) ; téléphone à l'horizontale garde l'interface téléphone (min-height 30em) » | mise en page |
| 2026-10-19 | notes-v3@ba6e7b28 2026-10-19 | « Tokens : texte discret ≥4,4:1, ambre en encre (#8c6600 clair), jaune = remplissage + encre sombre, zones sûres gauche/droite » | couleur |
| 2026-10-19 | notes-v3@ba6e7b28 2026-10-19 | « Réduire la transparence / les animations complets, couleurs forcées, focus de carte, cible des cases, aria-current » | couleur |
| 2026-10-19 | notes-v3@ba6e7b28 2026-10-19 | « Dossier au-dessus du titre (inspiration HyperOS), fondu du texte sous les îlots, Créer aligné » | couleur |
| 2026-10-19 | notes-v3@ba6e7b28 2026-10-19 (changelog) | « Tablette, liste et note côte à côte : chaque volet garde ses îlots dans son coin, la navigation et + en bas à gauche, les outils de la note en bas à droite » | mise en page |
| 2026-10-19 | notes-v3@ba6e7b28 2026-10-19 (changelog) | « Plan, Historique et Vue d’ensemble s’ouvrent en panneau sur le côté du pouce, la note reste visible » | mise en page |
| 2026-10-19 | notes-v3@ba6e7b28 2026-10-19 (changelog) | « Créer : icône, nom et détail alignés dans les trois choix, Note en jaune avec un crayon sombre » | couleur |
| 2026-10-19 | notes-v3@ba6e7b28 2026-10-19 (changelog) | « Textes secondaires et coches ambrées plus lisibles en thème clair » | typographie |
| 2026-10-19 | notes-v3@ba6e7b28 2026-10-19 (changelog) | « Réduire la transparence et réduire les animations sont respectés partout » | élévation/verre |
| 2026-10-19 | notes-v3@ba6e7b28 2026-10-19 (changelog) | « Les cases à cocher des cartes sont plus faciles à toucher » | accessibilité/cibles |
| 2026-10-19 | notes-v3@ba6e7b28 2026-10-19 (src/styles/tokens.css, commentaire) | « amber as ink (ticks, strokes, labels): ≥4.5:1; fills stay --color-accent » | couleur |
| 2026-10-19 | notes-v3@ba6e7b28 2026-10-19 (src/styles/tokens.css, commentaire) | « where the dock's sides fall: things above it line up » | mise en page |
| 2026-10-19 | notes-v3@ba6e7b28 2026-10-19 (src/styles/tokens.css, commentaire) | « phone landscape, short windows » | mise en page |
| 2026-10-19 | notes-v3@d6af8790 2026-10-19 | « Notes 26.10.19.2 : Bibliothèque en page, barre toujours là, états unifiés, Réglages utiles » | mise en page |
| 2026-10-19 | notes-v3@d6af8790 2026-10-19 | « Bibliothèque = page (titre + barre du bas) ; un dossier ouvert revient à la Bibliothèque ; Échap y revient aussi » | mise en page |
| 2026-10-19 | notes-v3@d6af8790 2026-10-19 | « Barre du bas jamais masquée : au-dessus du voile, + devient ✕ ; menus ancrés au-dessus du déclencheur sur tous écrans (+ clavier --kb) » | mise en page |
| 2026-10-19 | notes-v3@d6af8790 2026-10-19 | « Créer : Importer · Vocal · Note (Note côté pouce, inversé gaucher), icônes au trait teintées, sans légende » | icônes |
| 2026-10-19 | notes-v3@d6af8790 2026-10-19 | « États unifiés : survol (souris), appui, choisi = teinte + anneau (fin du chip noir), focus, désactivé ; transitions communes » | couleur |
| 2026-10-19 | notes-v3@d6af8790 2026-10-19 | « Encres de teinte (--tone-ink) ≥3:1 icônes / ≥4,5:1 libellés ; marques d'état new/fix/better partagées (notes de version, toast de mise à jour) » | couleur |
| 2026-10-19 | notes-v3@d6af8790 2026-10-19 | « Interrupteur carré (÷3) avec ✓ / − ; Réglages : Aide (visite, guide, Quoi de neuf), Protéger le stockage automatique ; police Figtree / Literata (embarquée, latin) » | typographie |
| 2026-10-19 | notes-v3@d6af8790 2026-10-19 | « Réglages, À propos, Quoi de neuf en panneau côté pouce sur tablette ; Bienvenue au centre » | mise en page |
| 2026-10-19 | notes-v3@d6af8790 2026-10-19 | « Verre sombre de la barre rétabli ; titres de carte > titres du contenu ; libellés unifiés (Corbeille, Sans dossier, Toutes les notes) » | couleur |
| 2026-10-19 | notes-v3@d6af8790 2026-10-19 | « Requêtes média viewport (fin des container queries) ; liste en 2 colonnes à côté d'une note » | mise en page |
| 2026-10-19 | notes-v3@d6af8790 2026-10-19 (changelog) | « La Bibliothèque est une page comme la liste : son titre, la barre du bas reste ; un dossier ouvert revient à la Bibliothèque » | mise en page |
| 2026-10-19 | notes-v3@d6af8790 2026-10-19 (changelog) | « Police des notes au choix : Figtree ou Literata » | typographie |
| 2026-10-19 | notes-v3@d6af8790 2026-10-19 (changelog) | « La barre du bas ne disparaît plus : + devient ✕ et referme le menu, les onglets restent utilisables » | mise en page |
| 2026-10-19 | notes-v3@d6af8790 2026-10-19 (changelog) | « Créer : Importer, Vocal, Note (le plus près du pouce), icônes au trait dans leur couleur, sans légende » | couleur |
| 2026-10-19 | notes-v3@d6af8790 2026-10-19 (changelog) | « Thème sombre : la barre du bas retrouve son verre sombre » | couleur |
| 2026-10-19 | notes-v3@d6af8790 2026-10-19 (src/styles/tokens.css, commentaire) | « menus and panels open above the dock, never over it » | mise en page |
| 2026-10-19 | notes-v3@e15376fa 2026-10-19 | « Reprendre : carte ambre en tête du récap pour une note modifiée il y a moins de 2 h » | couleur |
| 2026-10-19 | notes-v3@e15376fa 2026-10-19 | « Envoyer un lien : note compressée (deflate-raw, base64url) dans le #fragment ; import à l'ouverture et au hashchange » | élévation/verre |
| 2026-10-19 | notes-v3@e15376fa 2026-10-19 | « Manifeste : raccourci Note vocale (?new=voice) ; pastille d'icône (cartes dues + rappels du jour) » | icônes |
| 2026-10-19 | notes-v3@e15376fa 2026-10-19 (changelog) | « Raccourci « Note vocale » sur l’icône de l’app, et une pastille pour les cartes à réviser et les rappels du jour » | icônes |
| 2026-10-19 | notes-v3@ef23bea4 2026-10-19 | « Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout, Figtree seule » | typographie |
| 2026-10-19 | notes-v3@ef23bea4 2026-10-19 | « Barre du bas : pastille glissante partagée avec les contrôles segmentés (.seg-thumb généralisé) » | mise en page |
| 2026-10-19 | notes-v3@ef23bea4 2026-10-19 | « Plan et Historique en inspecteurs non modaux sur tablette : la note se décale et reste éditable, le plan reste ouvert » | mise en page |
| 2026-10-19 | notes-v3@ef23bea4 2026-10-19 | « Plus de pilules ni de cercles (version, badge, stat, points, curseur) ; police unique Figtree (Literata et le réglage retirés) » | typographie |
| 2026-10-19 | notes-v3@ef23bea4 2026-10-19 | « Notes de démarrage jamais modifiées mises à jour au lancement ; premier rendu au fond clair/sombre (index.html) » | couleur |
| 2026-10-19 | notes-v3@ef23bea4 2026-10-19 | « Règle « un sens par couleur » écrite dans tokens.css » | couleur |
| 2026-10-19 | notes-v3@ef23bea4 2026-10-19 (changelog) | « La barre du bas glisse d’un onglet à l’autre, comme les choix des Réglages » | mouvement |
| 2026-10-19 | notes-v3@ef23bea4 2026-10-19 (changelog) | « Numéros de version, étiquettes et points suivent la règle ÷3 : plus aucune forme ronde » | forme |
| 2026-10-19 | notes-v3@ef23bea4 2026-10-19 (changelog) | « Une seule police, Figtree, pour l’interface et les notes » | typographie |
| 2026-10-19 | notes-v3@ef23bea4 2026-10-19 (changelog) | « Au lancement, le fond suit le thème clair ou sombre avant même l’affichage » | couleur |
| 2026-10-19 | notes-v3@ef23bea4 2026-10-19 (src/styles/tokens.css, commentaire) | « One meaning per colour, everywhere — a colour never decorates: amber = create and pinned (the + and what it makes) · blue = selection, links · ink = focus, primary buttons, progress red = delete, recording · green = done, switched on · folder colours = organisation only (kind tones: outline icons a… » | couleur |
| 2026-10-20 | notes-v3@ea7be2e4 2026-10-20 | « fix(ui): remove unused dock action import » | mise en page |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 | « Notes 26.10.21.1 : audit design appliqué — téléphone en une colonne, surfaces pleines, une barre d'éditeur, vraies feuilles, premier lancement sans notes d'exemple » | élévation/verre |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 | « Mise en page : une colonne pleine largeur sur téléphone ; grille fluide (15rem) sur tablette/ordinateur ; liste à côté d'une note en une colonne lisible (clamp 22–30rem) ; vue liste compacte (titre, date, une ligne) » | mise en page |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 | « Surfaces : fond uni (le fond coloré reste pour l'accueil), cartes et éditeur pleins, ombres décoratives retirées, Bibliothèque plus calme ; échelle de texte unique ; contrastes relevés ; prefers-contrast: more » | couleur |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 | « Couleurs : ambre réservé à la création et aux épinglées ; focus encre ; boutons principaux encre ; coches vertes » | couleur |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 | « Feuilles : bas d'écran sur téléphone, poignée et glisser vers le bas, la barre du bas s'efface ; sur tablette, panneaux jusqu'à la ligne de la barre, la barre se range à côté ; messages en haut » | mouvement |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 | « Récap : « À faire » compte les tâches ; bande défilante sur téléphone » | mise en page |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 | « Premier lancement : invitation (Note, Liste, Vocal, Importer) au lieu des notes Bienvenue / Comment utiliser ; le guide s'ouvre en feuille depuis Réglages › Aide ; visite guidée plus courte » | mise en page |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 | « Astuces : bannière « Tirez la liste » retirée, astuces tactiles masquées à la souris ; --kb seulement en saisie » | accessibilité/cibles |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 | « Tests : 29 parcours, deux notes semées depuis tests/fixtures/notes.json ; nouveaux : premier lancement, feuille au glisser, barre unique, épinglées, liste compacte, survol souris, panneau tablette ; captures mises à jour » | mouvement |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 (changelog) | « Éditeur : une seule barre en bas ; Aa y remplace les outils par la mise en forme » | mise en page |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 (changelog) | « Réglages, À propos et Quoi de neuf : de vraies feuilles venues du bas, avec une poignée pour les tirer vers le bas » | mise en page |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 (changelog) | « Sur tablette, les panneaux descendent jusqu’en bas et la barre se range à côté » | mise en page |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 (changelog) | « Les messages s’affichent en haut : plus rien ne s’empile sur les barres du bas » | mise en page |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 (changelog) | « Fond uni, cartes pleines, sans ombres : le texte se détache ; le fond coloré reste pour l’accueil » | couleur |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 (changelog) | « L’ambre est réservé à la création et aux notes épinglées ; le contour du focus est sombre et se voit partout » | couleur |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 (changelog) | « Le dossier d’une note se voit sur sa carte, par un liseré de sa couleur » | couleur |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 (changelog) | « Plus de « … » isolé au-dessus de la barre de progression : le texte s’estompe » | typographie |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 (changelog) | « La barre du bas ne saute plus quand la barre d’adresse du navigateur apparaît » | mise en page |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 (src/styles/tokens.css, commentaire) | « Notes — design tokens. A calm plain ground, solid content, liquid glass only for what floats over it. » | couleur |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 (src/styles/tokens.css, commentaire) | « Ground; the ambient field (three soft blobs) is kept for the welcome only » | couleur |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 (src/styles/tokens.css, commentaire) | « ≥7:1 on the ground and on cards » | couleur |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 (src/styles/tokens.css, commentaire) | « ≥5.4:1 as text on every surface » | élévation/verre |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 (src/styles/tokens.css, commentaire) | « focus ring: ink, readable on amber, blue and grey alike » | couleur |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 (src/styles/tokens.css, commentaire) | « Surfaces: four roles, never stacked glass on glass ground (--color-bg) · content, solid (--color-card) · floating controls and overlays, glass (--glass*) · chosen (--color-select-tint) » | couleur |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 (src/styles/tokens.css, commentaire) | « content always clears the dock (+ keyboard) » | mise en page |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 (src/styles/tokens.css, commentaire) | « list pane when the note opens beside it: one readable column » | mise en page |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 (src/styles/tokens.css, commentaire) | « Type: one scale, and one role per step — nothing else picks a size title (page) · heading (sheet, welcome) · card title / menu title · body · section label · meta · tab label » | mise en page |
| 2026-10-21 | notes-v3@35c0380c 2026-10-21 (src/styles/tokens.css, commentaire) | « the device asks for more contrast: secondary text darkens, lines thicken » | couleur |
| 2026-10-21 | notes-v3@b470f99b 2026-10-21 | « smoke: measure the sheet and the editor once their entry has landed » | mise en page |
| 2026-10-21 | notes-v3@b470f99b 2026-10-21 | « frame of the slide-in: the sheet ended at 868 instead of 844 (the » | mise en page |
| 2026-10-21 | notes-v3@b470f99b 2026-10-21 | « landed() waits for the element's finite animations and transitions » | mouvement |
| 2026-10-21 | notes-v3@c3ec060f 2026-10-21 | « UX-07 / R23 : écran vide (React #185) en fermant l'historique puis la note pendant la sortie du panneau — le sélecteur de History rendait un nouveau [] à chaque lecture une fois la note fermée ; constante stable, + écran de reprise (ErrorBoundary) qui enregis… » | mise en page |
| 2026-10-21 | notes-v3@c3ec060f 2026-10-21 | « Calques : un menu ouvert depuis une feuille (PIN pour Face ID, import) passait derrière Réglages (z-index égal) ; ordre explicite voile 40 · feuille 41 · voile du menu 42 · barre 43 · menu 44 » | élévation/verre |
| 2026-10-21 | notes-v3@c3ec060f 2026-10-21 | « UX-01 / R01 : import JSON lu puis présenté (nouvelles, différentes, identiques, collections) ; conflits : garder les deux (copie « (importée) »), garder la mienne, prendre la sauvegarde (la mienne reste dans l'historique) ; rien n'est écrit avant Importer ; A… » | couleur |
| 2026-10-21 | notes-v3@c3ec060f 2026-10-21 | « UX-03 / R09 : groupes radio — flèches, Début/Fin, un seul arrêt Tab ; piège de focus ignore tabindex=-1 » | accessibilité/cibles |
| 2026-10-21 | notes-v3@c3ec060f 2026-10-21 | « R21 : guide et aide iPhone sans promesse d'effacement impossible ; une sauvegarde reste recommandée » | mise en page |
| 2026-10-21 | notes-v3@c3ec060f 2026-10-21 (changelog) | « Thème, main, couleur des dossiers : les flèches du clavier changent le choix » | couleur |
| 2026-10-24 | notes-v3@66b9f4b6 2026-10-24 | « Guide move to ui/Changelog.tsx and load when their sheet opens. Startup reads the » | mise en page |
| 2026-10-24 | notes-v3@66b9f4b6 2026-10-24 | « chunk is precached by the service worker, so the sheets still work offline. » | mise en page |
| 2026-10-24 | notes-v3@fbf13b31 2026-10-24 | « Port V5 Style/Accent, harden import equality, fix multi-attachment layout » | couleur |
| 2026-10-24 | notes-v3@fbf13b31 2026-10-24 | « Réglages: Style (Verre/Papier) and Accent (Ambre/Abricot/Lilas), as token overrides in looks.css » | couleur |
| 2026-10-24 | notes-v3@fbf13b31 2026-10-24 | « Pre-paint script in index.html applies look/accent/theme from localStorage (no flash) » | couleur |
| 2026-10-24 | notes-v3@fbf13b31 2026-10-24 (src/styles/looks.css, commentaire) | « solid paper: no glass, hairlines at ink » | couleur |
| 2026-10-24 | notes-v3@fbf13b31 2026-10-24 (src/styles/looks.css, commentaire) | « "Create and pinned" hue: amber unless chosen » | couleur |
| 2026-10-28 | notes-v3@1b16fd48 2026-10-28 | « test touch areas of player, attachment and card play buttons » | accessibilité/cibles |
| 2026-10-28 | notes-v3@1b2454c6 2026-10-28 | « measure touch areas once entry animations have landed » | mouvement |
| 2026-10-28 | notes-v3@1b2454c6 2026-10-28 | « the first frame, the touch area still squeezed. This is the failure » | accessibilité/cibles |
| 2026-10-28 | notes-v3@1b2454c6 2026-10-28 | « reducedMotion 'no-preference'; touchMisses() now waits for every » | mouvement |
| 2026-10-28 | notes-v3@1b2454c6 2026-10-28 | « finite animation (sheets scale in from .94 too), then measures. » | mouvement |
| 2026-10-28 | notes-v3@2acef5af 2026-10-28 | « measure touch areas once entry animations have landed » | mouvement |
| 2026-10-28 | notes-v3@2acef5af 2026-10-28 | « the first frame, the touch area still squeezed. This is the failure » | accessibilité/cibles |
| 2026-10-28 | notes-v3@2acef5af 2026-10-28 | « reducedMotion 'no-preference'; touchMisses() now waits for every » | mouvement |
| 2026-10-28 | notes-v3@2acef5af 2026-10-28 | « finite animation (sheets scale in from .94 too), then measures. » | mouvement |
| 2026-10-28 | notes-v3@2cd7e9bb 2026-10-28 | « measure touch areas once entry animations have landed » | mouvement |
| 2026-10-28 | notes-v3@2cd7e9bb 2026-10-28 | « the first frame, the touch area still squeezed. This is the failure » | accessibilité/cibles |
| 2026-10-28 | notes-v3@2cd7e9bb 2026-10-28 | « reducedMotion 'no-preference'; touchMisses() now waits for every » | mouvement |
| 2026-10-28 | notes-v3@2cd7e9bb 2026-10-28 | « finite animation (sheets scale in from .94 too), then measures. » | mouvement |
| 2026-10-28 | notes-v3@602f0c6b 2026-10-28 | « move every z-index onto a --z-* scale in tokens.css » | élévation/verre |
| 2026-10-28 | notes-v3@602f0c6b 2026-10-28 | « 28 numeric z-index values in app.css become tokens: five in-component » | élévation/verre |
| 2026-10-28 | notes-v3@602f0c6b 2026-10-28 | « stacking order (dock, rec, editor, scrim, sheet, layer-scrim, » | mise en page |
| 2026-10-28 | notes-v3@602f0c6b 2026-10-28 | « 0-px screenshot diff on 9 screens. tests/tokens.mjs, now first in » | design général |
| 2026-10-28 | notes-v3@602f0c6b 2026-10-28 | « npm run smoke, fails on any numeric z-index outside tokens.css. » | élévation/verre |
| 2026-10-28 | notes-v3@602f0c6b 2026-10-28 (src/styles/tokens.css, commentaire) | « Depth: one scale, nothing else picks a z-index inside a component (its own stacking context): under · over · over-2 · lifted across the app, bottom to top: dock · recording pill · editor · scrim · sheet · menu's scrim · over the scrim (dock, full-screen sheet) · menu · toast · tour » | élévation/verre |
| 2026-10-28 | notes-v3@662ac041 2026-10-28 | « fix touch areas of quiet controls to 44px » | accessibilité/cibles |
| 2026-10-28 | notes-v3@662ac041 2026-10-28 | « attachment remove and toast buttons were drawn at 32–36px and touched » | accessibilité/cibles |
| 2026-10-28 | notes-v3@662ac041 2026-10-28 | « centred and max(100%, --tap) on each axis, now takes the finger at 44px. » | accessibilité/cibles |
| 2026-10-28 | notes-v3@662ac041 2026-10-28 (changelog) | « Les petits boutons (⋯ d’une note, effacer la recherche, Bibliothèque, Annuler, lecteur, retirer une pièce jointe) se touchent sur 44 px sans changer d’apparence : un doigt qui frôle le ⋯ n’ouvre plus la note » | accessibilité/cibles |
| 2026-10-28 | notes-v3@7986f74a 2026-10-28 | « touch the folder chip and folder colours at 44px » | couleur |
| 2026-10-28 | notes-v3@7986f74a 2026-10-28 | « The note's folder chip (32px) is touched at 44px like the other quiet » | accessibilité/cibles |
| 2026-10-28 | notes-v3@7986f74a 2026-10-28 | « with the 8px gap that is one swatch per 44px, so their touch areas sit » | accessibilité/cibles |
| 2026-10-28 | notes-v3@7986f74a 2026-10-28 (changelog) | « Le dossier au-dessus du titre et les couleurs de dossier se touchent sur 44 px : le titre ne se fait plus voler un toucher, deux couleurs voisines non plus » | couleur |
| 2026-10-28 | notes-v3@c67f3d5c 2026-10-28 | « measure touch areas once entry animations have landed » | mouvement |
| 2026-10-28 | notes-v3@c67f3d5c 2026-10-28 | « the first frame, the touch area still squeezed. This is the failure » | accessibilité/cibles |
| 2026-10-28 | notes-v3@c67f3d5c 2026-10-28 | « reducedMotion 'no-preference'; touchMisses() now waits for every » | mouvement |
| 2026-10-28 | notes-v3@c67f3d5c 2026-10-28 | « finite animation (sheets scale in from .94 too), then measures. » | mouvement |
| 2026-10-28 | notes-v3@cfa03208 2026-10-28 | « make the system bars follow the app's ground » | couleur |
| 2026-10-28 | notes-v3@cfa03208 2026-10-28 | « The manifest pinned theme_color #EEF0F6: Chromium dropped dark manifest » | couleur |
| 2026-10-28 | notes-v3@cfa03208 2026-10-28 | « colours in 128, so one theme_color fixes the installed app's status bar » | couleur |
| 2026-10-28 | notes-v3@cfa03208 2026-10-28 | « theme-color tags stay. syncThemeColor() now rewrites them from » | couleur |
| 2026-10-28 | notes-v3@cfa03208 2026-10-28 | « --color-bg on every theme or look change: per scheme on Auto, the » | couleur |
| 2026-10-28 | notes-v3@cfa03208 2026-10-28 | « chosen one's otherwise, Papier's cream and near-black included. » | couleur |
| 2026-10-28 | notes-v3@cfa03208 2026-10-28 (changelog) | « La barre du téléphone prend la couleur du fond de Notes : sombre en thème Sombre même si le téléphone est en clair, crème avec le style Papier » | couleur |
| 2026-10-29 | notes-v3@0fa410ce 2026-10-29 | « add Ranger sheet: merge or ignore near-duplicate notes » | mise en page |
| 2026-10-29 | notes-v3@0fa410ce 2026-10-29 | « Bibliothèque > Vues > Ranger (shown from two notes) opens a side sheet loaded » | mise en page |
| 2026-10-29 | notes-v3@0fa410ce 2026-10-29 | « Empty moves to kit.tsx (Sheets and Tidy share it); pushVersion is exported. » | mise en page |
| 2026-10-29 | notes-v3@0fa410ce 2026-10-29 | « Checked: tsc + vite build, tokens, table, tidy, sw-regression, smoke 50/50 » | design général |
| 2026-10-29 | notes-v3@117ee61b 2026-10-29 | « keep light-dark() native under Vite 8's Lightning CSS » | couleur |
| 2026-10-29 | notes-v3@15678aae 2026-10-29 | « move every colour into tokens and fail the smoke on a stray hex » | couleur |
| 2026-10-29 | notes-v3@15678aae 2026-10-29 (src/styles/tokens.css, commentaire) | « the veil behind a sheet: blurs, hardly darkens » | couleur |
| 2026-10-29 | notes-v3@15678aae 2026-10-29 (src/styles/tokens.css, commentaire) | « Floating material and its shadows, named once » | élévation/verre |
| 2026-10-29 | notes-v3@15678aae 2026-10-29 (src/styles/tokens.css, commentaire) | « sliding thumb of tab bar and segmented controls » | mise en page |
| 2026-10-29 | notes-v3@15678aae 2026-10-29 (src/styles/tokens.css, commentaire) | « the three accents (Réglages › Style) » | couleur |
| 2026-10-29 | notes-v3@15678aae 2026-10-29 (src/styles/tokens.css, commentaire) | « A system tone as ink: darker in light, lighter in dark (kinds, Créer, Récap, Bibliothèque) » | couleur |
| 2026-10-29 | notes-v3@494f7c92 2026-10-29 (docs/principles.md) | « **Thumb first** — Everything frequent sits in the bottom band: dock, +, note tools, sheets. Closing never needs the top: a sheet closes by its handle or Échap, the note by ✓; a ✕ in a header is only a second way. Tablets keep the tools on the hand side (Réglages › Main). » | mise en page |
| 2026-10-29 | notes-v3@494f7c92 2026-10-29 (docs/principles.md) | « **Quiet glass** — Depth, colour and blur come from `src/styles/tokens.css`: `z-index` only from the `--z-*` scale, hex colours only as token definitions (`tokens.css`, `looks.css` for the looks and accents) — both enforced. Amber = create · commit · current · progress. Blue inner ring = selected; o… » | couleur |
| 2026-10-29 | notes-v3@494f7c92 2026-10-29 (docs/quality-bar.md) | « Touch targets — ≥ 44 × 44 px hit area on every control (a small drawing may extend its area with `::after`) » | accessibilité/cibles |
| 2026-10-29 | notes-v3@494f7c92 2026-10-29 (docs/quality-bar.md) | « Text contrast — ≥ 4.5:1 on its own ground, light and dark, Verre and Papier » | couleur |
| 2026-10-29 | notes-v3@494f7c92 2026-10-29 (docs/quality-bar.md) | « Focus — visible outer ring on every focusable control; selection uses the inner ring, never the same mark » | accessibilité/cibles |
| 2026-10-29 | notes-v3@494f7c92 2026-10-29 (docs/quality-bar.md) | « Motion — `prefers-reduced-motion`: no drift, no smooth scroll; all smoke tests run with motion reduced » | mouvement |
| 2026-10-29 | notes-v3@494f7c92 2026-10-29 (docs/quality-bar.md) | « Transparency, contrast, forced colours — `prefers-reduced-transparency`, `prefers-contrast: more`, `forced-colors: active` each have a block » | couleur |
| 2026-10-29 | notes-v3@494f7c92 2026-10-29 (docs/quality-bar.md) | « Narrow phone — the four dock labels whole at 360 px, both hands » | mise en page |
| 2026-10-29 | notes-v3@494f7c92 2026-10-29 (docs/quality-bar.md) | « No theme flash — dark ground from the first frame » | couleur |
| 2026-10-29 | notes-v3@494f7c92 2026-10-29 (docs/quality-bar.md) | « Tokens only — no `z-index` outside the `--z-*` scale; a hex colour only defines a custom property in `tokens.css` or `looks.css` » | couleur |
| 2026-10-29 | notes-v3@78e2a8a6 2026-10-29 | « keep Bibliothèque whole in the dock at 360 px » | mise en page |
| 2026-10-29 | notes-v3@9e7d5dd7 2026-10-29 (changelog) | « Tableaux dans les notes : touchez Tableau dans la barre, tapez dans les cellules (Tab et Entrée passent à la suivante), ajoutez ou retirez lignes et colonnes, fusionnez, alignez ; export et import Markdown » | mise en page |
| 2026-10-29 | notes-v3@a704c2df 2026-10-29 | « fix adjacent table export, header-toggle focus and table JSON read as flashcard » | accessibilité/cibles |
| 2026-10-29 | notes-v3@b6010383 2026-10-29 | « exact Jaccard to decide; accents, case and œ/æ folded; under four words is » | couleur |
| 2026-10-29 | notes-v3@c218aba2 2026-10-29 | « keep the note in context: list chip, tag peek on phones, full width beside the list; release 26.10.29.3 » | mise en page |
| 2026-10-29 | notes-v3@c218aba2 2026-10-29 (changelog) | « « Bibliothèque » n’est plus coupé dans la barre des petits téléphones (360 px) » | mise en page |
| 2026-10-29 | notes-v3@c590aacb 2026-10-29 | « preload the Latin font face; release notes 26.10.29.5 » | typographie |
| 2026-10-29 | notes-v3@c590aacb 2026-10-29 (changelog) | « En écrivant, Annuler et Rétablir sont dans la barre Aa ; « [] » suivi d’une espace devient une case à cocher » | mise en page |
| 2026-10-29 | notes-v3@c590aacb 2026-10-29 (changelog) | « Tableaux : la cellule choisie est en bleu comme toute sélection, la première colonne reste visible en défilant, le panneau dit quelle cellule est active et « Terminé » le referme ; supprimer un tableau demande un second toucher et s’annule » | mise en page |
| 2026-10-29 | notes-v3@c590aacb 2026-10-29 (changelog) | « Les cartes montrent plus de texte avant de s’estomper (10 lignes sur téléphone, 14 sur grand écran) et la liste compacte deux lignes par note » | typographie |
| 2026-10-29 | notes-v3@c590aacb 2026-10-29 (changelog) | « Barre du bas plus compacte : 52 px, boutons de 44 px, + au carré de la même hauteur ; libellés en 12 px » | forme |
| 2026-10-29 | notes-v3@c590aacb 2026-10-29 (changelog) | « La coche d’une couleur de dossier est foncée : lisible sur les huit couleurs » | couleur |
| 2026-10-29 | notes-v3@cea1e72c 2026-10-29 | « say where reminders are reliable, in the sheet and the guide; release 26.10.29.2 » | mise en page |
| 2026-10-29 | notes-v3@e30d2cdc 2026-10-29 | « polish editing, tables, cards and the 52px dock » | mise en page |
| 2026-10-29 | notes-v3@fe7ee2da 2026-10-29 | « measure contrast from tokens; theme-aware ink on fills and folder colours » | couleur |
| 2026-10-29 | notes-v3@fe7ee2da 2026-10-29 (src/styles/tokens.css, commentaire) | « Ink on a saturated fill (selection, delete, done, recording): white on the deep light fills (≥5.3:1), dark on the bright dark fills, where white fell to 2.8–3.7:1 » | couleur |
| 2026-10-29 | notes-v3@fe7ee2da 2026-10-29 (src/styles/tokens.css, commentaire) | « on a folder colour (same in both themes): ≥4.7:1 on all eight, white was 2.7–4.1 » | couleur |
| 2026-10-29 | notes-v3@fe7ee2da 2026-10-29 (src/styles/tokens.css, commentaire) | « a dock button: the touch size itself » | mise en page |
| 2026-10-29 | notes-v3@fe7ee2da 2026-10-29 (src/styles/tokens.css, commentaire) | « 52px: flush with the island (4 + 44 + 4) » | mise en page |
| 2026-10-29 | notes-v3@fe7ee2da 2026-10-29 (src/styles/tokens.css, commentaire) | « amber as ink at 7:1 and more: 7.9 on the ground, 9.0 on cards » | couleur |
| 2026-10-31 | notes-v3@0d6f0834 2026-10-31 (changelog) | « Les panneaux et menus ne sautent plus au milieu de l’écran en se fermant : ils se réduisent en diagonale vers le bouton qui les a ouverts » | mise en page |
| 2026-10-31 | notes-v3@2c7478e4 2026-10-31 | « Tâches tab, search/filter/appearance in the top island » | mise en page |
| 2026-10-31 | notes-v3@2c7478e4 2026-10-31 (changelog) | « Tâches : un onglet à part dans la barre du bas rassemble les cases à cocher de toutes vos notes ; cocher ici coche dans la note, le titre ouvre la note » | mise en page |
| 2026-10-31 | notes-v3@2c7478e4 2026-10-31 (changelog) | « Apparence : un panneau rapide dans la barre du haut (thème, style, accent, affichage, main) ; « Tous les réglages » est dessous » | couleur |
| 2026-10-31 | notes-v3@2c7478e4 2026-10-31 (changelog) | « Filtrer et trier : le filtre par type de contenu revient dans la barre du haut, avec le tri » | mise en page |
| 2026-10-31 | notes-v3@2c7478e4 2026-10-31 (changelog) | « La recherche passe dans la barre du haut, sur toutes les pages ; la barre du bas garde les endroits : Notes, Tâches, Bibliothèque, Réglages » | mise en page |
| 2026-10-31 | notes-v3@3687c668 2026-10-31 | « Acrylique look: flat frosted surface, no bevel » | élévation/verre |
| 2026-10-31 | notes-v3@3687c668 2026-10-31 (changelog) | « Style « Acrylique » (Réglages › Apparence) : un fond dépoli plat avec un fin grain, comme l’acrylique de Microsoft. Plus de reflet ni de relief : le sombre reste calme » | couleur |
| 2026-10-31 | notes-v3@3687c668 2026-10-31 (src/styles/looks.css, commentaire) | « Three looks (Réglages → Style) and three accents, set on <html data-look / data-accent> before first paint (index.html). A look only re-points tokens; components never test the look. Glass is the default and needs no overrides. » | couleur |
| 2026-10-31 | notes-v3@3687c668 2026-10-31 (src/styles/looks.css, commentaire) | « Acrylic, the way Fluent does it: a strong blur of what is behind, a flat tint, a fine grain, one hairline edge and a plain shadow. No bright lip, no inset bevel (what made the glass look embossed in the dark): the surface is flat, only depth comes from the blur. » | couleur |
| 2026-10-31 | notes-v3@47c570df 2026-10-31 | « Réglages as a page with a route per section (list on phone, split view on tablet) » | mise en page |
| 2026-10-31 | notes-v3@ac5e4bc9 2026-10-31 | « Réglages › Synchronisation: choose a folder, phrase, run on open/foreground/after a note » | couleur |
| 2026-10-31 | notes-v3@ce4f8459 2026-10-31 | « Sync: conflict resolution sheet (line diff, keep mine/theirs/both) and status details » | mise en page |
| 2026-10-31 | notes-v3@e221230f 2026-10-31 (changelog) | « Base pour d’autres langues : les textes de la barre du bas, de la barre du haut, des Tâches, des Réglages et de la synchronisation passent par des dictionnaires (français, anglais). Rien ne change à l’écran tant que tout n’est pas traduit ; l’anglais s’essaie… » | typographie |
| 2026-10-31 | notes-v3@f133fd3a 2026-10-31 | « Search: accent-insensitive, every word in any order, cached folding » | couleur |
