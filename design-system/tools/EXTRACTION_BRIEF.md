# Brief commun : registre de couverture + archive du design system

Contexte : le propriétaire veut (1) la preuve qu'AUCUN commit n'a été sauté et (2) une archive complète de tout ce qui est graphique dans les versions successives de ses applis de notes : ce qui a été choisi, changé, supprimé. Inventaire seulement : tu ne proposes aucune décision visuelle, tu ne codes rien, tu ne modifies aucun dépôt.

SCR = /tmp/claude-0/-home-user/5d777d85-fea9-5a54-aa14-1174fb1aafde/scratchpad
Les dépôts sont des clones complets dans /home/user/<repo> (toutes branches en `origin/*`).

## Règles de sécurité
- Git en lecture seule : `git -C <dir> log|show|grep|diff|rev-list|cat-file|ls-tree|blame`. Jamais `checkout`, `reset`, `clean`, `commit`, `push`, `fetch`, ni installation, build ou exécution de scripts du projet.
- Tu peux écrire des scripts d'aide (Python avec `python3 -I`, bash) UNIQUEMENT dans `SCR/tools/<ton-nom>/` et lancer ces scripts depuis là, jamais depuis un dépôt. Les sorties vont dans `SCR/` (chemins ci-dessous).
- Aucune donnée personnelle ni secret dans les sorties : pas de prénom, e-mail, téléphone, adresse, plaque, clé, jeton. Écris `[prénom]` ou `[donnée personnelle]` si un texte en contient.
- Zéro invention. Si tu n'as pas lu un diff, le statut n'est pas `lu`.

## PARTIE 1 : registre de couverture (obligatoire, exhaustif)
Entrée : `SCR/ledger/<repo>.tsv` (généré par script, une ligne par commit hors fusions). Colonnes : `sha date author kind pr nfiles add del subject files(<=6)`. `kind` : `direct` (sur la ligne first-parent de la branche de base sans PR), `squash`, `pr-branch` (commit d'une PR fusionnée), `unmerged` (jamais fusionné), `bot`, `build` (ne touche que des artefacts de build).
Sortie : `SCR/ledger-out/<repo>.tsv` (ou le nom de partie indiqué dans ta mission) avec EXACTEMENT les mêmes lignes dans le même ordre, et 4 colonnes ajoutées à la fin : `status`, `summary`, `flags`, `evidence`.
- `status` :
  - `lu` : tu as ouvert le diff (`git show <sha>`, pas seulement `--stat`) des fichiers de code, de style, de config ou de doc touchés et tu écris ce que le commit fait.
  - `stat` : seulement les statistiques et les noms de fichiers. Autorisé UNIQUEMENT si le commit touche plus de 150 fichiers, ou ne change qu'un bundle minifié ou un binaire. Dis pourquoi dans `evidence`.
  - `bruit` : commit de bot (`kind=bot`) ou synchro de version sans code, dont tu as vérifié par `--stat` qu'il ne change que `package.json` (champ version), un changelog généré ou un fichier de lock. Dis lequel dans `evidence`.
  - `build` : commit de déploiement. Note la version (ex. `26.10.29.1`) lue dans le sujet ou `version.json`, et le sha source si `version.json` le donne. Pour un build sans source (appli mono-fichier minifiée), lis les chaînes visibles du diff (`git show <sha> | grep -o` ciblé) et dis ce que tu y vois.
- `summary` : une phrase, 25 mots maximum, ce que le commit fait réellement (pas une copie du sujet). Cite des noms de fichiers ou de fonctions quand c'est utile.
- `flags` : liste séparée par des virgules parmi : `adds-feature`, `removes-feature`, `refactor`, `fix`, `design`, `icons`, `fonts`, `tokens`, `component`, `a11y`, `pwa`, `data`, `crypto`, `sync`, `search`, `editor`, `ci`, `docs`, `deps`, `tests`, `i18n`, `none`.
- `evidence` : un fait vérifiable (nom de fichier + ce que tu y as vu, ou la raison d'un `stat`/`bruit`).
- Remplace les tabulations et retours à la ligne dans tes textes par des espaces. Garde le fichier en TSV à 14 colonnes.
- Si un commit supprime du code ou une fonction utilisateur, `removes-feature` est obligatoire et le résumé dit QUOI (fichier, fonction ou composant).
- Quand tu as fini, lance `python3 -I SCR/tools/check_ledger.py <fichier-entrée> <fichier-sortie>` : il vérifie que chaque sha est présent, dans l'ordre, avec un statut valide et un résumé non vide. Corrige jusqu'à zéro erreur.

## PARTIE 2 : archive du design system (dans `SCR/design/<repo>/`)
Pour CHAQUE valeur graphique distincte, trouve le commit où elle apparaît pour la première fois et celui où elle change ou disparaît. Si une valeur ne change jamais, UNE seule ligne avec `HEAD` en dernier état. Si elle change, UNE ligne par valeur, l'une sous l'autre, chacune avec sa période. Une valeur supprimée reste dans l'archive avec le commit de suppression. Références de commit : `<repo>@<sha8> <date>`.
Méthode : repère les fichiers de design (tokens, thèmes, CSS, `DESIGN.md`, `index.html` pour polices et `theme-color`, manifest, fichiers d'icônes, composants d'icônes, `package.json` pour les paquets de polices et d'icônes, composants UI). Pour chacun, parcours `git log --reverse -p --follow -- <chemin>` (ou `git log -S'<valeur>'`). Écris un petit script d'aide qui, pour chaque commit touchant ces fichiers, extrait les valeurs et note les changements. Pour le CSS minifié d'un bundle (`index.html` mono-fichier), extrais les variables `--...`, les `font-family`, les `border-radius` et les couleurs par expressions régulières.
Fichiers à produire (si une catégorie n'a rien, crée le fichier avec "Aucun élément trouvé" et dis pourquoi) :
1. `icons.md` — tableau : `icône | source | empreinte | première apparition | dernier état | notes`. `icône` = nom canonique. `source` = `lucide-react@<version>`, `@lucide/svelte@<version>`, `SVG en ligne dans <fichier>`, `fichier <chemin>`, etc. `empreinte` = 8 premiers caractères du sha1 des données du tracé normalisées pour un SVG en ligne, sinon `-`. `dernier état` = `HEAD`, `SUPPRIMÉE <repo>@<sha8> <date>`, ou `REMPLACÉE par <nom>`. Pour chaque SVG en ligne distinct, écris le SVG complet dans `svg/<nom>-<empreinte>.svg` (viewBox, attributs de trait, contenu). Une même icône dont le tracé change = deux lignes et deux fichiers, côte à côte. Pour les bibliothèques d'icônes, note l'ensemble des noms utilisés à chaque version (ajouts et retraits datés) et la version de la bibliothèque. Ajoute les icônes d'application (PWA, favicon, apple-touch) : chemin, tailles, empreinte du fichier, et pour les `.svg` le contenu dans `svg/`. Pour les PNG, ne copie rien : donne `git show <sha8>:<chemin>` comme référence.
2. `typography.md` — familles et piles (`font-family`), source (paquet fontsource, sous-ensemble local, Google, système), graisses, échelle de tailles, interlignes, espacement des lettres, polices supprimées. Tableau : `élément | valeur | défini dans | première apparition | dernier état | notes`.
3. `radius-spacing.md` — rayons (valeurs, règle de calcul comme « hauteur ÷ 3 »), échelle d'espacement, largeurs de bordure, tailles des contrôles (cibles tactiles, hauteurs de dock, FAB), tailles d'icônes. Même tableau.
4. `colors.md` — jetons de couleur par thème ou « look » : nom, valeur claire, valeur sombre, usage sémantique (ex. ambre = créer), contrastes si documentés. Une ligne par valeur et par période.
5. `elevation-motion.md` — ombres, flou, verre, saturation, opacités, échelle de `z-index`, durées, courbes, `@keyframes`, transitions, `prefers-reduced-motion`.
6. `components.md` — composants UI : nom, fichier, rôle, variantes ou props visibles, première apparition, dernier état (`HEAD`, `SUPPRIMÉ <réf>`, `REMPLACÉ par <nom>`), notes.
7. `layout.md` — points de rupture, grilles, modèle de navigation (dock, barre latérale, rail), géométrie (hauteurs, largeurs, marges, zones sûres), état de chaque disposition par période.
8. `themes.md` — thèmes et « looks » nommés (ex. Verre, Papier, Acrylique), leurs différences de jetons, dates d'introduction et de retrait.
9. `decisions.md` — décisions de design citées dans les messages de commit, les PR et les `.md` du dépôt : `date | réf | décision (citation courte) | catégorie`. Cite seulement ce qui est écrit, n'interprète pas.
Chaque fichier commence par une ligne `Source : <repo>, commits lus : <n>, plage : <date début> à <date fin>`.

## Retour à l'orchestrateur (court)
Ne recopie PAS les tableaux dans ta réponse. Réponds en 300 mots maximum : nombre de lignes par fichier de sortie, répartition des statuts du registre (lu / stat / bruit / build), liste des commits `stat` avec la raison, ce que tu n'as pas pu faire, et toute anomalie (fichier de design introuvable, commit illisible, contradiction entre deux sources).
