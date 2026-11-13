# ledger/ : registre de couverture des commits

Créé le 2026-11-13. Objet : prouver, commit par commit, ce qui a été lu et ce qui ne l'a pas été. Chaque ligne d'un fichier `<repo>.tsv` est un commit (hors commits de fusion) avec ce qu'il fait.

## Couverture

| Dépôt | Commits | `lu` | `stat` | `bruit` | `build` | directs | via PR | non fusionnés | Fusions exclues |
|---|---|---|---|---|---|---|---|---|---|
| `notes-v3` | 135 | 84 | 0 | 0 | 51 | 17 | 66 | 2 | 36 |
| `brandonlazarre` | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 16 |
| `notes-v5` | 132 | 98 | 1 | 12 | 21 | 5 | 104 | 1 | 25 |
| `notes-v6` | 23 | 22 | 0 | 1 | 0 | 8 | 10 | 5 | 8 |
| `notes-aistudio` | 7 | 7 | 0 | 0 | 0 | 6 | 1 | 0 | 1 |
| `notes-4` | 13 | 12 | 0 | 1 | 0 | 10 | 2 | 0 | 2 |
| `notes-svelte` | 4 | 4 | 0 | 0 | 0 | 4 | 0 | 0 | 0 |
| `notepad-pwa` | 7 | 6 | 0 | 1 | 0 | 6 | 0 | 0 | 0 |
| `mindspace-old` | 445 | 418 | 0 | 27 | 0 | 31 | 377 | 0 | 48 |
| `mindspace-core` | 44 | 44 | 0 | 0 | 0 | 12 | 31 | 1 | 35 |
| **Total** | **811** | **696** | **1** | **42** | **72** | | | | **171** |

- `brandonlazarre` partage 81 de ses 82 commits avec `notes-v3` (mêmes sha) : `notes-v3.tsv` les couvre. `brandonlazarre.tsv` ne contient que le commit propre à ce dépôt (`6234c333`, "Initial commit" de 2025).
- Les commits de fusion (colonne "Fusions exclues") sont hors registre : ils ne portent aucun contenu propre, leur contenu est dans les commits de la PR.
- Les colonnes "directs", "via PR" et "non fusionnés" se lisent par rapport à la branche de base du dépôt (`main`, et `notes-v3` pour `brandonlazarre`). Un build de `notes-site` apparaît donc "non fusionné".

## Colonnes
`sha` (8 caractères), `date`, `author` (pseudonyme du compte propriétaire ou `Claude` ou un bot), `kind`, `pr`, `nfiles`, `add`, `del`, `subject`, `files(<=6)`, puis `status`, `summary`, `flags`, `evidence`.
- `kind` : `direct` (ligne first-parent de la base, sans PR), `squash` (sujet terminé par `(#N)`), `pr-branch` (commit d'une PR fusionnée), `unmerged` (jamais fusionné), `bot`, `build` (ne touche que des artefacts de build).
- `status` : `lu` (le diff a été ouvert et résumé), `stat` (statistiques et noms de fichiers seulement, raison dans `evidence`), `bruit` (bot ou synchro de version, vérifié par `--stat`), `build` (commit de déploiement : version et sha source relevés).
- `flags` : `adds-feature`, `removes-feature`, `refactor`, `fix`, `design`, `icons`, `fonts`, `tokens`, `component`, `a11y`, `pwa`, `data`, `crypto`, `sync`, `search`, `editor`, `ci`, `docs`, `deps`, `tests`, `i18n`, `none`.

## Écarts et limites connus (à lire avant de se fier à une ligne)
1. `notes-v5@b1f17318` (import initial, 124 fichiers, +14 736 lignes) est `stat`. La mission autorisait ce statut ; la règle générale ne le permet qu'au-delà de 150 fichiers. `package.json`, les jetons, `looks.css`, `icons.tsx` et la liste des composants ont été lus.
2. `notes-aistudio@9021b9bc` (108 fichiers) est `lu` : seuls les fichiers de design et les en-têtes ont été lus, mais son dossier `src` a le même hachage d'arbre que `notes-v3` `origin/main:src` (`2a3ad0ba`), donc un contenu déjà lu.
3. `mindspace-old` (seconde moitié) : une douzaine de gros commits (dont `ccd468ab`, `fcb10d06`, `0c1cb372`) ont été lus sur leurs premières lignes et leur `--stat`, avec un complément ciblé pour `aeca0395`, `ccd468ab` et `0c1cb372`. Leurs résumés reposent sur ce qui était visible.
4. `notes-v3` : les 26 commits de bots sont classés `build`, pas `bruit`, car ils changent des artefacts de build. 33 résumés dépassaient 25 mots : ils sont coupés à 25, la suite est dans `evidence`. Les builds antérieurs à `9a174ad` n'ont pas de `version.json` : leur source est présumée à partir de l'heure et du sujet. Les builds `notes-site` sont des bundles minifiés : seules les chaînes visibles ont été lues.
5. `mindspace-old` : un commit marqué `build` par le script (`41a60f54`, `02417a94`) ne touche que `index.html` et est `lu`. Quelques résumés sont très courts (commits de tests).
6. Le script de classification `kind` est mécanique et peut se tromper sur les cas limites ; il est fourni dans `ledger/tools/`.
7. Aucun statut n'a été auto-attribué par script : chaque `lu` vient d'un agent qui a ouvert le diff. Contrôle automatique : `ledger/tools/check_ledger.py <entrée> <sortie>` (sha présents dans l'ordre, statut valide, résumé non vide). Contrôle par échantillon de l'orchestrateur : 5 à 8 lignes tirées au hasard par fichier, rejouées contre `git show --stat` le 2026-11-13, aucune incohérence trouvée sur `mindspace-old`, `mindspace-core`, `notes-v5` et `notes-v3` ; les cinq petits dépôts ont seulement passé le contrôle automatique.

## Reproduction
`ledger/tools/mkledger.py` génère l'entrée mécanique (sans `status`, `summary`, `flags`, `evidence`) depuis des clones complets avec toutes les branches. `ledger/tools/AGENT_BRIEF.md` est la consigne donnée aux agents de lecture.
