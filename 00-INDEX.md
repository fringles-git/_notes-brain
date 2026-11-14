# 00-INDEX : cerveau Notes PWA

Audit en lecture seule du 2026-11-10 (9 repos Notes). Passe d'archéologie profonde du 2026-11-13 : tous les repos de `fringles-git` sont inventoriés (voir "Inventaire de l'organisation" ci-dessous). Les repos `tiles`, `tiles-aistudio`, `adv7j.fr` sont inventoriés mais non audités en profondeur.
Statuts utilisés partout : `shipped`, `experimental`, `described only`. Champ introuvable = `non documenté`.

## Fichiers du cerveau

| Fichier | Contenu | État |
|---|---|---|
| `00-INDEX.md` | Carte des repos, branches, PR, alertes. | écrit |
| `01-BUSINESS-AND-VISION.md` | MRR, freemium, killer features, personas, doublons à rejeter. | écrit |
| `02-FEATURES-AND-ARCHAEOLOGY.md` | Matrice features, UI/UX, navigation, PWA, rejets, plan de portage, licence, archéologie Git (section 11), fonctionnalités perdues ou non-mergées (section 12). | écrit |
| `03-TECH-CONVENTIONS.md` | Stack, architecture, nommage, CI, tests, sécurité, contraintes E2E + IA, gouvernance de dépôts, dette. | écrit |
| `05-CHANGELOG.md` | Journal de session. | écrit |
| `ledger/` | Registre de couverture : une ligne par commit de 10 dépôts (811 commits), statut lu / stat / bruit / build. Lire `ledger/README.md` d'abord. | écrit (2026-11-13) |
| `design-system/` | Mémoire graphique de 9 dépôts : icônes (207 SVG), polices, rayons, couleurs, ombres, composants, dispositions, thèmes, décisions, avec ce qui a changé et ce qui a disparu. Lire `design-system/README.md` d'abord. | écrit (2026-11-14) |

## Lignée des itérations (ordre indicatif, déduit des dates de PR et de push)

1. `notepad-pwa` : Vite JS vanille, bloc-notes écrivain. Aucune PR.
2. `brandonlazarre` (branche `notes-site`) : build mono-fichier "Notes 26.10.15.1".
3. `notes-aistudio` / `brandonlazarre` (`notes-v3`) / `notes-v3` : React + Zustand + IndexedDB brut. Famille "v3".
4. `notes-svelte`, `notes-4` : réécritures SvelteKit 5, écartées au profit de React (`notes-aistudio/docs/future.md`).
5. `notes-v5` : port React de v3, Dexie, Tiptap, stockage transactionnel. Sans Ranger, sync, i18n.
6. `notes-v6` : SvelteKit 3, "Mind Space", posture produit/design documentée.
7. `MindSpace` : React, Tiptap + Yjs, serveur Node Hostinger, MCP public.

Le README de `notes-aistudio` se déclare "source de Notes v3". `notes-v3` est un repo distinct de même famille (versions `YY.M.D.n`). Relation exacte de copie : non documentée.

## Repos

| Repo | Vis. | Stack | Branches | PR (total) | Rôle |
|---|---|---|---|---|---|
| `notepad-pwa` | pub | Vite 5, JS vanille, docx, jspdf | `main` | 0 (5 commits directs) | Prototype. |
| `notes-svelte` | pub | SvelteKit 3, Svelte 5, Dexie 4 | `main` | 0 | Expérience écartée. |
| `notes-4` | pub | SvelteKit 3, adapter-static, localStorage | `main`, `ccr-f8a43d1d-rusvf1`, 1 dependabot | 4 : 1 mergée, 2 fermées, 1 ouverte | Expérience écartée, déployée Hostinger. |
| `notes-aistudio` | priv | React 19.3, Zustand 5, Vite 8, TS 7 | `main` | 1 mergée | Source riche en docs, vues/propriétés/entités/tâches. |
| `brandonlazarre` | pub | Builds statiques + sources v3 | `main` (vide), `notes-site`, `notes-v3`, `notes-v3-site`, `claude/table-blocks-2026-10-29` | 14 mergées | Dépôt de déploiement et de travail v3 (branche par défaut `notes-site`). |
| `notes-v3` | priv | React 19.3, Zustand, Vite 8, TS 7 | `main`, `ccr-35863ab5-xpw36y`, `notes-site`, `notes-v3-site` | 22 : 21 mergées, 1 fermée (#19) | Produit le plus complet : sync chiffrée, Ranger, i18n. |
| `notes-v5` | pub | React 19.3, Dexie 4, Tiptap 3.33, Vitest | `main`, 3 `feat/fix`, `notes-v5-site`, 1 dependabot | 16 : 15 mergées, 1 ouverte | Port durci : stockage atomique, import portable. |
| `notes-v6` | priv | SvelteKit 3, IndexedDB natif | `main` + 5 `feat/fix` | 8 mergées | Docs produit/design, 4 branches non intégrées. |
| `MindSpace` | priv | React 19.3, Tiptap 3.32, Yjs 13, Dexie, Node `http` | `main`, 2 dependabot | 47 : 43 mergées, 2 fermées, 2 ouvertes | Version courante : version 6.11.7-7, déployée Hostinger Node. |

Total PR : 112.

### Inventaire de l'organisation (2026-11-13)

`list_repos` : 18 dépôts. Détail et constats : `02`, section 12.2.
- `MindSpace` a été recréé le 2026-11-11 : 1 commit (`89e0ed9`), 1 fichier `README.md`. Tout ce que ce document décrit pour `MindSpace` (47 PR, version 6.11.x) est dans `MindSpace-old` (493 commits, tête `82a689c`, 2026-11-10 ; PR #48 à #50 mergées le 2026-11-10 et 11). Le renommage est inféré (aucun ancêtre commun entre les deux).
- Non documentés avant le 2026-11-13 : `MindSpace-old`, `tiles` (public, CMS / vitrine bento JavaScript + PHP), `tiles-aistudio` ("LZR Hub", portfolio et CMS Flat-File), `adv7j.fr` (branches `main` et `troyes`), `F1-Data-JSON`, `txAdminRecipe` (fork), `fringles-git` (profil).
- `notes-v5` : 15 branches distantes et PR #17 à #24 depuis le 2026-11-10 (design minimal, recherche française, réglages tablette, perf, port AI Studio). Les lignes ci-dessus décrivent son état du 2026-11-10.
- Visibilité au 2026-11-13 : 4 dépôts publics (`tiles`, `F1-Data-JSON`, `txAdminRecipe`, `fringles-git`), 14 privés. Alerte : `tiles` suit `seed/uploads/car-*.jpg` (8 photos de véhicule) et `seed/uploads/cv-*.pdf`. À confirmer comme publics voulus.

### Code actuel : `mindspace-core` (ajouté le 2026-11-12)

L'audit ci-dessus date du 2026-11-10 et décrit les repos sources. Le code en cours est dans `fringles-git/mindspace-core` (privé) : base cible de la décision 1 (métier de `notes-v3` + UI Tiptap / Yjs de `MindSpace`). Sa mémoire de travail est `mindspace-core/CLAUDE.md` ; en cas de conflit, ce cerveau gagne.
- État au 2026-11-11 : `main` `021c13c`, CI verte (run 69), déployé sur `mindspace.brandonlazarre.fr` (`build.json` = sha de `main`, `check-deploy` ok). PR #1 à #25 toutes mergées ou fermées. Détail par session : `05-CHANGELOG.md`. Décisions 13 à 24 : `03` section 11.
- Fait : persistance Dexie + Yjs, éditeur Tiptap, sauvegarde chiffrée et restauration, suppression (simple et multiple) avec purge, index dérivé et recherche, titre affiché, rappel de sauvegarde, routeur, chargement à la demande, PWA (worker natif), déploiement vérifiable.
- Non commencé : compte, sync, Cloud payant (`03` section 8.2 : aucune ligne de code avant spécification écrite), Tâches (`Tasks.tsx` est un placeholder ; spec : décision 27, en attente de validation), Aide.

## Branches de build (pas de source)

- `brandonlazarre/notes-site` : app mono-fichier 26.10.15.1 (8 commits).
- `brandonlazarre/notes-v3-site`, `notes-v3/notes-v3-site` : build v3 écrit par GitHub Actions, tiré par Hostinger.
- `notes-v5/notes-v5-site` : build v5 écrit par `publish-site.yml`.
- `notes-v3/notes-site` : copie du build ancien, jamais fusionnée.

## Branches de travail non fusionnées ou résiduelles

- `notes-v6` : `fix/system-theme-editor`, `feat/onboard-distill`, `feat/quiet-home-filters`, `feat/typeset-polish` (pile linéaire, jamais mergées, `docs/branch-cleanup.md`). `feat/control-navigation-geometry` est mergée (#8).
- `notes-v3/ccr-35863ab5-xpw36y` : identique à `main`, non supprimée.
- `notes-4/ccr-f8a43d1d-rusvf1` : branche de la PR #1 mergée.
- `brandonlazarre/claude/table-blocks-2026-10-29` : source de la PR #14 mergée, derrière `notes-v3` de 2 commits.

## PR fermées sans fusion ou annulées

| Repo | PR | Objet | Raison |
|---|---|---|---|
| `notes-v3` | #19 | Assets hachés cache-first, `.htaccess` immutable | Fermée 19 s après la fusion de #21, état `dirty`. Raison non documentée. Probable conflit (inférence). |
| `MindSpace` | #43 puis #44 | Import Markdown à mise en forme dans Tiptap, puis revert | Revert mergé 2 min après. Raison non documentée. #43 déclarait Playwright non exécuté. |
| `MindSpace` | #30, #6 | Bumps dependabot | Fermées à la main, raison non documentée. |
| `notes-4` | #2 | TypeScript 6.0.3 vers 7.0.2 | "typescript is updatable in another way". |
| `notes-4` | #3 | Bump devDependencies | Raison non documentée. |
| `notes-4` | #4 (ouverte) | TypeScript `^7.0.2` | Casse `npm install` (peer deps Kit 3). Ne pas fusionner. |
| `notes-v5` | #16 (ouverte) | TS 7.0.2, `@types/node` 26 | Bloqué : typescript-eslint déclare `typescript <6.1.0`. |

## Alertes

1. `notepad-pwa` HEAD : contenus de fichiers permutés (`README.md` contient le SW, `src/style.css` contient le JS, etc.). Build non fiable.
2. `notes-svelte` HEAD : `+layout.svelte` et `+page.svelte` apparemment permutés. Import `lucide-svelte` au lieu de `@lucide/svelte`.
3. `notes-4` : l'écriture de fichiers sur de mauvais chemins a cassé chaque build Hostinger jusqu'à la PR #1.
4. `MindSpace` : `changelogData.ts` annonce toujours l'import Markdown retiré par #44. `DISCOVERABILITY.md` périmé (dit qu'aucun MCP n'existe). `dependabot.yml` référence encore BlockNote. Pas de lockfile. README vide.
5. Licence : décision du 2026-11-10 = propriétaire (All Rights Reserved). `MindSpace/LICENSE` est encore MIT (PR #5) : contradiction à corriger. `notes-v3` et `notes-v5` n'ont aucun LICENSE ; `notes-v5` est public. Détail dans `02`, section 9.
6. `notes-v5` : partage OS (`share_target`) déclaré mais non géré par son SW. `roadmap.md` dit "offline non porté" alors que le SW existe.
7. `notes-v6` : `main` reçoit des commits directs sans PR ni bump de version (installation PWA, capture directe).
8. Docs contredisant le code : `pwa-baseline.md` (notes-v3, notes-aistudio) dit "network-first", le SW est cache-first.
9. Domaine live v3 non tranché : `notes.` ou `notes-v3.` (`brandonlazarre` PR #14).
10. Source d'une branche de build : `brandonlazarre/main` ne contient que LICENSE et README.

## Limites de cet audit

- Versions de paquets : plages de `package.json`, pas de lockfile lu sauf mention.
- Hash de build en ligne et statut CI : non vérifiés à cette étape. À faire avant toute déclaration de clôture sur un déploiement.
- Raisons de rejet marquées "non documentée" : aucune trace dans corps de PR, commentaires ou reviews.
