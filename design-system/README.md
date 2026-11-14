# design-system/ : mémoire graphique de toutes les versions

Créé le 2026-11-14. Inventaire de tout ce qui est graphique dans 9 dépôts de notes : icônes, polices, rayons et espacements, couleurs, ombres et mouvement, composants, dispositions, thèmes et décisions de design. Inventaire seulement : rien ici ne recommande un choix visuel, les décisions restent au propriétaire.

## Règles de l'archive (demandées par le propriétaire)
1. Une valeur identique d'une version à l'autre n'est pas répétée : la cellule affiche `=`.
2. Une valeur modifiée est dite et placée à côté de l'ancienne : `A → B`, avec les commits dans la section « Détail des changements ».
3. Ce qui a été créé puis supprimé reste en mémoire, avec son commit de création et son commit de suppression (section « Éléments disparus »).

## Les fichiers
Chaque fichier a la même structure : 1 légende, 2 matrice (une ligne par élément, une colonne par version E0 à E9), 3 détail des changements, 4 éléments disparus, 5 éléments propres à une seule version, 6 contradictions et trous.

| Fichier | Contenu | Lignes de matrice | Disparus | Contradictions et trous |
|---|---|---|---|---|
| `icons.md` | Icônes (jeu maison, Lucide, glyphes), icônes d'application, bibliothèques | 217 | 11 | 17 |
| `typography.md` | Polices, piles, graisses, échelle de tailles, interlignes | 248 | 26 | 15 |
| `colors.md` | Jetons de couleur par thème, usages sémantiques | 283 | 43 | 20 |
| `radius-spacing.md` | Rayons, règle de calcul, espacements, bordures, tailles de contrôles | 118 | 32 | 12 |
| `elevation-motion.md` | Ombres, verre, flou, opacités, z-index, durées, mouvement réduit | 347 | 60 | 17 |
| `components.md` | Composants UI (dock, FAB, feuilles, cartes, éditeur…) | 120 | 36 | 22 |
| `layout.md` | Points de rupture, grilles, navigation, géométrie | 186 | 37 | 15 |
| `themes.md` | Looks et thèmes nommés (Verre, Papier, Acrylique, Soft Glass Pro…) | 45 | 16 | 26 |
| `decisions.md` | Chronologie des décisions de design citées par les commits et docs | 245 décisions | 38 | 22 |
| `LINEAGE.md` | Les 10 colonnes de versions E0 à E9 | | | |
| `icons/svg/` | 207 SVG dédoublonnés (nom + empreinte du tracé) | | | |
| `icons/svg-index.tsv` | Pour chaque SVG : dépôts, autres noms, fichiers sources | | | |
| `by-repo/<dépôt>/` | Les 9 fichiers bruts par dépôt (preuves) et leurs SVG d'origine | | | |
| `tools/` | Consignes données aux agents, script de contrôle `check_final.py` | | | |

## Les versions (colonnes)
`LINEAGE.md` : E0 builds `notes-site` (2026-10-09), E1 `notes-v3`, E2 `notepad-pwa`, E3 `notes-4`, E4 `notes-v5`, E5 `notes-svelte`, E6 `notes-v6`, E7 `notes-aistudio`, E8 `mindspace-old` (l'ancien MindSpace), E9 `mindspace-core`.

## Lire une cellule
`valeur` : la valeur dans cette version. `=` : identique à la dernière valeur affichée à gauche. `A → B` : changé pendant cette version. `—` : absent. `?` : les entrées ne disent rien (surtout E7). `✗ réf` : supprimé dans cette version. Une référence `repo@sha8 date` renvoie à un commit du dépôt `fringles-git/<repo>` (`mindspace-old` est l'ancien dépôt `MindSpace`, renommé). Le registre `ledger/<repo>.tsv` donne ce que fait chaque commit.

## Comment ça a été produit et contrôlé
- Extraction par dépôt (9 agents sur clones complets, git en lecture seule), puis consolidation par catégorie (9 agents).
- Contrôle automatique des fichiers consolidés (`tools/check_final.py`) : nombre de colonnes constant par tableau, tous les `repo@sha` cités existent (icônes 48, typographie 50, couleurs 66, rayons 63, composants 97, thèmes 67, disposition 63, mouvement 96, décisions 159), aucune adresse e-mail.
- Échantillons rejoués contre le code par l'orchestrateur le 2026-11-13 et 2026-11-14 : valeurs de couleur (danger, ambre), `--space-3` (12 px dans `notes-v3`, `--ms-space-3` à 16 px dans `mindspace-core`), hauteur du dock, points de rupture, verre (`blur(20px) saturate(1.4)` retiré par `5469a8ab`), absence de chargement d'Inter dans `notepad-pwa`, libellé « Classique » de Literata, variantes du tracé `undo`. Aucune incohérence, sauf deux corrections faites à la main (voir plus bas).
- Données personnelles : prénom du propriétaire, identifiant d'hébergeur et adresses remplacés par `[prénom]` ou `[donnée personnelle]`. Aucun texte dans les SVG.

## Limites connues
1. Les matrices n'ont pas été relues cellule par cellule contre les 9 entrées. Les cellules `=` d'une partie des fichiers ont été vérifiées par script ou par relecture de l'agent, pas toutes par l'orchestrateur.
2. `mindspace-old` : les couleurs et tailles écrites en classes Tailwind dans les `.tsx` ne sont suivies valeur par valeur que pour les composants dont le diff a été lu.
3. Icônes : les tracés des icônes de bibliothèque (Lucide) ne sont dans aucun dépôt : seuls les noms et la version de la bibliothèque sont archivés. Les rapprochements `≈` entre une icône maison et une icône Lucide se font par le nom. Les PNG d'application ne sont pas copiés : référence `git show <sha>:<chemin>`.
4. `layout.md` : conversions em en px à 16 px par em (hypothèse de l'agent). La colonne « utilisé par » de `radius-spacing.md` est un échantillon.
5. Presque aucune raison de changement n'est citée dans les commits : elles figurent comme « non documentée ».
6. E0 (builds `notes-site`) vient du CSS minifié des bundles ; les builds antérieurs à `9a174ad` n'ont pas de `version.json`.
7. Les valeurs de rayon et de verre de Glass dans `notes-v5/docs/design-teardown.md` ne correspondent plus à `looks.css` : la source documentaire n'est pas fiable, le code fait foi.

## Corrections de l'orchestrateur après les agents
- `colors.md` et `components.md` : complément sur le contraste forcé (`forced-colors: active`), présent en E1, E4, E7, E8 et E9 alors que la matrice ne le montrait qu'en E9.
- `themes.md` : preuve du libellé « Classique » (point 15 de la section 6).
- `decisions.md` : une ligne de tableau sans colonne « réf » complétée (n° 29).
