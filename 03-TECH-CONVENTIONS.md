# 03 : Conventions techniques

Audit du 2026-11-10. Sources : `package.json`, workflows, docs et PR des 9 repos. Inventaire et contraintes : aucun correctif de code ici.
Versions = plages de `package.json` sauf mention (lockfiles non lus).

## 0. Décisions qui contraignent la technique (2026-11-10)

1. Licence : propriétaire (All Rights Reserved). Une PR dédiée remplace `MindSpace/LICENSE` (section 9).
2. Repos publics `notes-v5`, `notes-4`, `notes-svelte`, `notepad-pwa`, `brandonlazarre` : passage en privé après l'audit (section 9).
3. Local gratuit à 100 %, y compris OCR et Whisper. L'API payante vend vitesse, économie de batterie et de stockage, meilleurs modèles côté serveur.
4. Sync : livrer d'abord le transport par dossier (File System Access API) pour valider l'usage. Relais géré payant ensuite. Aucune infrastructure serveur avant validation de l'usage local.
5. Règle E2E + IA : le chiffrement reste la norme pour la sync et le stockage. Toute fonction IA (ex : résumé) envoie du contenu en clair au serveur. L'utilisateur doit y consentir explicitement.

6. Architecture : CalVer `y.m.d-n`, `skipWaiting` automatique, Zustand, Node 24, CSS natif utilitaire (section 11).

Base de code cible : métier de `notes-v3`, UI / Tiptap / Yjs de `MindSpace`.

## 1. Stack par repo

| Repo | UI | État / stockage | Éditeur | Build | TypeScript | Node |
|---|---|---|---|---|---|---|
| `notes-v3` | React `^19.3.1` | Zustand `^5.0.16`, IndexedDB brut | Markdown maison (`markdown.ts`, `table.ts`) | Vite `^8.3.5`, plugin-react `^6.1.2` | `^7.0.2` | 22 (CI) |
| `MindSpace` | React `^19.3.1`, react-router-dom `^7.18.5` | Dexie `^4.4.7`, yjs `^13.6.33`, y-indexeddb `^9.0.12` | Tiptap `^3.32.3` (react, pm, starter-kit, collaboration, placeholder, table, text-align), `@tiptap/y-tiptap ^3.1.0` | Vite `^8.3.6`, plugin-react `^6.2.1`, Tailwind `^4.3.4` | `^7.0.2` | `>=24.22.1 <25` |
| `notes-v5` | React 19.3.1 | Zustand 5.1.0, Dexie `^4.4.7`, dexie-export-import 4.4.2, zod 4.6.7, date-fns 4.4.0 | Tiptap 3.33.0 | Vite 8.3.6, plugin-react 6.2.1 | 6.0.3 | 24 |
| `notes-v6` | Svelte 5.57.3, SvelteKit 3.1.1, adapter-static 4.0.1 | IndexedDB natif | `@paddim8/svelte-lexical 0.6.8` (usage non vérifié) | Vite 8.3.5, vite-plugin-svelte 7.3.1 | 6.0.3 | 24.22.2 |
| `notes-aistudio` | React `^19.3.1` | Zustand `^5.0.16`, IndexedDB brut | Markdown maison | Vite `^8.3.5` | `^7.0.2` | non documenté |
| `notes-4` | Svelte `^5.57.2`, SvelteKit `^3.1.0` | localStorage | — | Vite `^8.3.5`, adapter-static `^4.0.0` | `^6.0.3` (épinglé) | 22 (Hostinger) |
| `notes-svelte` | Svelte `^5.57.2`, SvelteKit `^3.1.0` | Dexie `^4.4.6` | — | Vite `^8.3.5`, vite-plugin-pwa `^2.0.0` | `^7.0.2` | non documenté |
| `notepad-pwa` | JS vanille | localStorage | — | Vite `^5.4.10` | — | 20 (Pages) |
| `brandonlazarre` (`notes-v3` branche) | React `^19.1.0` | Zustand `^5.0.0` | Markdown maison | Vite `^7.1.0` | `^5.9.0` | non documenté |

Éléments communs : Playwright `^1.64.1` (v3, MS, v6), polices Figtree (v3, aistudio, v6, MS non), Lucide (MS 1.69, v6 1.66, svelte 1.61, v5 1.70).

Divergences à connaître avant un portage v3 vers MS :
- Node 22 (CI v3) contre Node 24 (engines MS).
- Markdown en chaîne (v3) contre documents Tiptap/Yjs (MS).
- IndexedDB brut `NotesAppDB` (v3) contre Dexie + une base `y-indexeddb` par note (MS).
- Zustand (v3) contre état React local dans `App.tsx` de 36 Ko (MS).
- CSS natif moderne sans Tailwind (v3) contre Tailwind 4 + `style.css` de 39 Ko (MS).

## 2. Architecture

### notes-v3 (référence métier)
- Modules plats `src/*.ts` : `actions` (41 Ko), `features` (42 Ko), `markdown`, `media`, `gestures`, `tidy`, `sync`, `syncApp`, `syncApply`, `crypt`, `vault`, `diff`, `ics`, `search`, `table`, `tables`, `store`, `db`, `storage`, `i18n`, `config`, `changelog`, `types`, `utils`, `sw.js`.
- UI : `src/ui/*.tsx`. Styles : `src/styles/` (`tokens.css`, `looks.css`, `app.css` de 96 Ko). Textes : `src/locales/`.
- Tâches lourdes (pdf.js, Tesseract, ONNX/Whisper, PptxGenJS) chargées à la demande depuis `public/vendor`.
- Pas de routeur : `state.page` + hash `#/reglages/<section>`, `#n=`, `?new=`.

### MindSpace (référence UI)
- `src/App.tsx` (36 Ko) monolithe. Dossiers : `components/`, `data/`, `hooks/`, `layouts/`, `pages/`, `styles/`, `types/`. Fichiers clés : `db.ts`, `appearance.ts`, `agentTools.ts`, `data/{noteSearch,backupImport,quickCapture,changelogData}.ts`.
- `server.mjs` : `node:http` sans Express. Sert l'app, le shell SPA pour `/settings/…` et `/releases/…`, négociation `Accept: text/markdown`, en-têtes Link, `POST /mcp` (lecture seule, informations produit), `/.well-known/mcp/server-card.json`. 404 JSON sinon.
- Hostinger : preset Express, entrée `hostinger.mjs`, `postinstall: npm run build`.
- Docs : `DESIGN_SYSTEM.md`, `COLLABORATION_MIGRATION.md`, `EDITOR_MIGRATION.md`, `AGENT_READINESS.md`, `DISCOVERABILITY.md`, `IMPLEMENTATION.md`, `HOSTINGER_NODE_DEPLOY.md`.

### notes-v5
- Store `page` sans routeur. `src/notes/` (stockage, `vault.ts`, `features.ts`). Scripts : `build-sw.mjs`, `check-sw.mjs`, `check-release.mjs`. Docs : `storage-migration`, `technical-snapshots`, `portable-import`, `contextual-navigation`, `navigation-editor`, `dependency-release-review`, `persistence-retry-review`, `design-teardown`, `design-remediation-plan`.

### notes-v6
- `src/lib/notes/{db,crypto}.ts`, routes prérendues, `Workspace.svelte` (30 Ko), service worker Kit. Docs : `PRODUCT`, `DESIGN`, `UX-AUDIT`, `ACCESSIBILITY`, `SYNC`, `CLEAN-AUDIT`, `docs/architecture-audit.md`, `docs/branch-cleanup.md`.

### Autres
- `notes-aistudio` : `codebase-model.md` (section 6 : 15 incohérences UI connues), `docs/` (`principles`, `future`, `retention`, `pwa-baseline`, `quality-bar`, `i18n`).
- `notes-4`, `notes-svelte` : `src/lib/{components,stores,styles}`, alias `$lib` ou `#lib/*`.
- `notepad-pwa` : `main.js` monolithique.

## 3. Conventions de nommage

### Versions
| Repo | Schéma | Exemple | Vérifié par |
|---|---|---|---|
| `notes-v3` | `YY.M.D.n` (rang de la release du jour) | 26.10.31.10 | `scripts/check-changelog.mjs` |
| `MindSpace` | `A.MM.J.X` jusqu'à #38, puis `6.11.JOUR-N` (N = PR mergées ce jour, Paris) | 6.11.5.15, 6.11.7-7 | `release-version.yml`, `tests/versioning.test.mjs`, `tests/release-contract.test.mjs` |
| `notes-v5` | `5.M.J+PR`, affiché `5.M.J.PR` | 5.11.8+15 | `scripts/check-release.mjs` |
| `notes-v6` | `6.mois.jour.rang` (`APP_VERSION`), `package.json` reste 6.0.0 | 6.10.31.3 | aucun |
| `notes-4` | `26.10.19.8` (Réglages) | | aucun |

Trois schémas différents pour une même lignée. Décision du 2026-11-10 : CalVer `y.m.d-n` (section 11).

### Branches et PR
- v3 : `claude/<sujet>-AAAA-MM-JJ`, puis `ccr-<id>`. v3 déploie depuis `main` uniquement.
- MindSpace : `feat/<sujet>-AAAAMMJJ`, `fix/`, `chore/`, `ci:`, `style:`, `revert-N-…`, `dependabot/…`. Gabarit de PR : Résumé, Notes de version, Validation. Titres en français.
- v5 : `claude/new-session-…`, `feat/`, `fix/`, `refactor/`. Titre de PR avec version (#13 à #15).
- v6 : `feat/`, `fix/`, `chore/`, `docs/`. Trailer `Co-Authored-By` sur les commits Claude. Commits directs sur `main` sans PR (installation, capture, SYNC).

### Identifiants et clés
- Bases : `NotesAppDB` (v3, v5, aistudio), `mindspace` + `mindspace-note-<id>` (MS), `notes-v6` (v6), `quick-notes-db` (svelte).
- Caches SW : `notes-<BUILD>`, `notes-share`, `notes-extras` (v3) ; `notes-v5-<hash12>` ; `notes-v6-shell-<v>` / `-assets-<v>` ; `mindspace-static-v2` ; `notes-pwa-${version}` (notes-4).
- localStorage : `notes:look|accent|theme` (v5), `mindspace-appearance-v1` (MS), `notes-4-state`, `notes-theme`, `quick-notes-theme`, `notepad-pwa-*`.
- IDs de note : UUID v4 (v5) ; ids numériques hérités conservés ; entités par nom normalisé (aistudio).
- Formats : `NOTESENC` (`.enc`), `notes-portable/2`, `.notes-snapshot`, `mindspace-local-export` v1, `notes-v6` v2.
- Tests nommés par code : `TAP-01..03`, `DOCK-360`, `DOCK-52`, `SYNC-01`, `CONFLICT-01`, `ICS-01`, `I18N-01`, `LOOK-01`, `RNG-01` (v3).

### CSS et design
- Tokens avant valeurs : v3 `tokens.css` + `looks.css` (un look ne fait que repointer des tokens) ; v5 règle "aucun hex ni z-index numérique", échelle `--z-*` ; MS préfixe `--ms-*`, classes `.ms-glass` ; v6 `tokens.css`.
- Primitif unique : `.ctl` (v5, tailles 34 / 44 / 48 / 58), `Button` / `Dock` / `NoteCard` (notes-4).
- Règle de rayon : hauteur ÷ 3 (v3, v5). Cibles tactiles ≥ 44 px. Contraste ≥ 4,5:1 (v3, MS), ≥ 7,52:1 pour le texte muté (v6).
- Sens fixe des couleurs (v3) : ambre = créer / épingler, bleu = sélection, rouge = supprimer, vert = fait.
- Textes d'interface en français, i18n préparée en v3 uniquement.

## 4. CI / CD et déploiement

| Repo | Workflows | Contrôles | Déploiement |
|---|---|---|---|
| `notes-v3` | `deploy.yml` (Node 22) | Chaque PR : check changelog, `npm run smoke` (chaîne de 11 tests node, build, `sw-regression`, `smoke.mjs`). Push `main` : `deploy -- --prebuilt` | Build écrit sur `notes-v3-site`, tiré par Hostinger. Rollback : `--rollback <version>`. Règle changelog : échec si `src/` ou `public/` changent sans `changelog.ts`, sauf `[no changelog]` |
| `MindSpace` | `dependency-ci.yml`, `design-system-ci.yml` (Playwright en `workflow_dispatch`), `release-version.yml`, `dependabot-auto-merge.yml` | `tsc --noEmit`, build, `node --test tests/*.test.mjs` | Hostinger Node (Express preset). `release-version` incrémente `package.json` et `changelogData.ts` après merge (commit `[skip ci]`) |
| `notes-v5` | `verify.yml` (PR), `publish-site.yml` (push `main`) | check, lint, test, build, `check-sw` ; `check-release` impose version = PR | `dist/` poussé sur `notes-v5-site`, servi par Hostinger |
| `notes-v6` | `ci.yml` | check, test (6 scripts), build, Playwright Chromium, smoke | non documenté |
| `notes-4` | `.hostinger/site.json` (nodejs, Node 22) | aucun test | auto-déploiement Hostinger, sortie `build/` |
| `notepad-pwa` | `.github/workflows/static.yml` | Node 20, `npm ci` | GitHub Pages, `dist` |
| `brandonlazarre` | actions héritées | — | Hostinger tire `notes-v3-site` (`notes-v3.brandonlazarre.fr`) |

- Dependabot : MS quotidien 06:00 Paris (référence encore `@blocknote/*`) ; v5 hebdomadaire lundi 09:00 UTC, groupes production et développement. Les labels `dependencies` et `automated` n'existent pas dans plusieurs repos.
- Actions anciennes : `design-system-ci.yml` (MS) reste sur `actions/*@v4`, d'où PR #46 et #47 ouvertes.
- Règle de clôture de l'utilisateur : hash du build en ligne et CI verte avant de déclarer terminé. `version.json` (v3), `build-info.json` (v5), `version` du cache (v6) servent de preuve.

## 5. Tests

| Repo | Unitaires / node | Navigateur | Lacunes |
|---|---|---|---|
| `notes-v3` | 11 scripts `tests/*.mjs` (tokens, contrast, table, tidy, search, crypt, folder, sync, diff, ics, i18n) | `smoke.mjs` (82 Ko), `sw-regression.mjs` | RNG-01 instable ; pas d'appareil réel (undo iOS, colonne collante Safari) ; smoke complet souvent "laissé à la CI" |
| `MindSpace` | `node --test tests/*.test.mjs` (backup, collab, markdown-export, note-search, templates, quick-capture, sw, server, versioning…) | Playwright : `*.spec.ts` (responsive, a11y axe, persist, settings…) | Playwright hors CI de PR ; convergence Yjs locale seulement |
| `notes-v5` | Vitest 5.1.0, jsdom, fake-indexeddb | `docs/shots/verify.mjs` (716 passages de contraste) | rien sur Android ou iPad ; 44 erreurs de lint à #10 puis 0 |
| `notes-v6` | 6 scripts dans `npm test` | Playwright, `tests/focus.mjs` | rendus 390 / 1280 px seulement ; pas de Lighthouse |
| `notes-4`, `notes-svelte`, `notepad-pwa` | aucun | aucun | |

## 6. Dépendances et ratio d'utilité

Aucun repo ne mesure le ratio code utilisé / code téléchargé. Seuls ces faits sont établis.

| Repo | Constat | Source |
|---|---|---|
| `notes-v3` | 4 dépendances d'exécution. Bibliothèques lourdes à la demande. Ratio élevé | `package.json` |
| `notes-v5` | Scaffold non utilisé : 26 paquets Radix, Tailwind 4.3.5 (non activé dans `vite.config.ts`), recharts, react-day-picker, react-hook-form, sonner, lucide. Chunk Tiptap > 500 Ko | `docs/dependency-release-review.md` |
| `notes-v6` | `vite-plugin-pwa`, `shadcn-svelte`, `svelte-lexical` apparemment inutilisés (non vérifié) | digest v6 |
| `MindSpace` | Chunk éditeur > 500 Ko. `tailwind-merge`, `tw-animate-css` : usage non vérifié | PR #21 |
| `notepad-pwa` | `docx` et `jspdf` dans le bundle principal | `package.json` |
| `notes-4`, `notes-svelte` | zéro dépendance d'exécution (`notes-4`) | |

Règle utilisateur applicable : toute nouvelle dépendance se justifie par un ratio proche de 100 %, sinon fonction native. Candidats à vérifier avant le portage : `tailwind-merge`, `tw-animate-css`, `react-router-dom` (routes limitées à Réglages).

Pins de sécurité : `rolldown 1.2.1`, `esbuild >= 0.28.1`, `cookie >= 0.7.0` (v5). TypeScript 7 est bloqué en v5, v6, notes-4 (peer deps Kit 3 `^6`, typescript-eslint `<6.1.0`). v3 et MS l'utilisent déjà. `@types/node` 26 avec runtime Node 24 : désaccord documenté en v5.

## 7. Sécurité et cryptographie

| Élément | Paramètres | Où |
|---|---|---|
| Sauvegarde `.enc` | Conteneur `NOTESENC`, AES-256-GCM, blocs 1 Mio, phrase de récupération 128 bits en 28 signes | v3 `crypt.ts` ; v5 `notes-portable/2` |
| JSON avec notes masquées | PBKDF2 600 000 itérations, code de 20 signes | v3 #4 |
| Coffre | Clé enveloppée par PIN ou Face ID, ECDH P-256 + AES-GCM, WebAuthn PRF | v3 `vault.ts`, aistudio |
| Sauvegarde v6 | AES-GCM, PBKDF2-SHA256 600 000, passphrase ≥ 12 caractères. Protège le fichier, pas la base locale | v6 `crypto.ts` |
| Sync | Fichiers `manifest.enc`, `n-<hmac>.enc`, `a-<hmac>.enc` (noms opaques), tombstones 90 jours, vecteurs de version. Notes masquées jamais synchronisées | v3 #17 |
| Snapshot v5 | Contient le matériel du coffre, non chiffré, confirmation `RESTAURER`, plafond 64 Mio | v5 #11 |

Limites d'import : MS 16 Mio / 5000 éléments (aperçu), 50 Mo (remplacement), 50 fichiers × 2 Mio (Markdown/TXT) ; v5 64 Mio ; v6 50 000 entrées / 100 Mo / pièces jointes 5 Mo. Nœuds Tiptap en liste blanche, liens `http(s)` et `mailto` seulement (MS `backupImport.ts`).

Points ouverts :
- `MindSpace` `POST /mcp` sans limitation de débit ni authentification (informations publiques).
- Contact et identité légale de l'éditeur non renseignés (`legal.html`, `AGENT_READINESS.md`).
- Le champ `hidden` de MS n'est pas chiffré. Le nom "masquée" laisse croire le contraire.
- Aucun scan de secrets exécuté sur les 9 repos. À faire avant le passage en privé. `notes-4/.hostinger/site.json` contient un identifiant Hostinger (non reproduit ici).

## 8. Contraintes d'architecture issues des décisions (aucune implémentation existante)

### 8.1 Phasage
1. Phase 1 : sync par dossier (File System Access API) portée de v3 vers MindSpace. Valide l'usage. Chromium seulement. Aucune infrastructure serveur.
2. Phase 2 : relais géré payant, après validation de la phase 1.
3. Phase API : après le compte. Chaque requête consomme du quota.

### 8.2 Compte et usage (absent partout)
Exigences à spécifier avant de coder, `non documenté` aujourd'hui : identité, entitlements par palier (L / C / A), mesure d'usage, quotas et plafonds, facturation, récupération de compte face à la phrase de récupération E2E, suppression des données.

### 8.3 Règle E2E + IA
- Sync et stockage : chiffrés de bout en bout, serveur aveugle.
- Fonction IA (ex : résumé, OCR serveur, transcription serveur) : le contenu part en clair vers le serveur. Consentement explicite requis à l'activation de chaque fonction IA, rappelé à l'usage, révocable.
- Le consentement ne s'étend pas : activer le résumé ne déverrouille pas l'OCR serveur.
- Notes masquées : exclure de toute requête IA par défaut (analyse, cohérent avec leur exclusion de la sync).
- Journaliser côté client la liste des envois ; côté serveur ne pas conserver le contenu (à confirmer avec le fournisseur d'IA, `non documenté`).
- OCR / Whisper locaux : restent le chemin par défaut, gratuit, sans compte. L'API vend vitesse, batterie, stockage, qualité de modèle.

### 8.4 Pont sync entre v3 et Yjs
- v3 : objets note + vecteurs de version + tombstones. MS : un Y.Doc par note.
- Pour le transport par dossier, deux options à arbitrer : synchroniser le miroir `editorJson` (perd la fusion fine), ou synchroniser les mises à jour Yjs (incompatible avec `sync.ts` tel quel). Risque très élevé (MS #31).
- Les sauvegardes MS ne contiennent pas l'historique Yjs (`docs/COLLABORATION_MIGRATION.md`).

## 9. Gouvernance de dépôts : actions décidées

### 9.1 Licence MindSpace (PR dédiée)
- Remplacer `LICENSE` (MIT, "MindSpace contributors") par un texte All Rights Reserved.
- Références MIT à aligner dans la même PR : `IMPLEMENTATION.md:17`, `public/llms.txt:10`, `public/mindspace.md:29`, `public/legal.html` ("Le code de MindSpace est publié sous licence MIT" + lien vers un repo privé), `public/about.html`, `public/contact.html`. Ajouter `"license": "UNLICENSED"` à `package.json` (champ absent).
- Aucun test n'asserte "MIT". `src/data/changelogData.ts:293` raconte l'ajout de la licence MIT (historique, à ne pas réécrire).
- Le titulaire du copyright doit être précisé (le repo ne contient aucune identité légale).

### 9.2 Passage en privé
Cibles : `notes-v5`, `notes-4`, `notes-svelte`, `notepad-pwa`, `brandonlazarre`. Aucun outil GitHub MCP de cette session ne change la visibilité d'un repo : action manuelle (Settings › Danger Zone) ou autre canal.
Points à vérifier avant chaque passage :
- `notes-4` : auto-déploiement Hostinger depuis GitHub (`.hostinger/site.json`).
- `brandonlazarre` : Hostinger tire `notes-v3-site` pour `notes-v3.brandonlazarre.fr`.
- `notes-v5` : Hostinger sert `notes-v5-site`.
- `notepad-pwa` : GitHub Pages via `static.yml`. Pages sur repo privé dépend du plan (non vérifié).
- Liens publics qui pointent vers ces repos (`legal.html` pointe déjà vers `MindSpace`, privé : 404 pour les visiteurs).
- Dependabot et Actions : quotas de minutes pour repos privés.
Ordre conseillé : scan de secrets, correction de la licence, vérification de la prise en charge de repos privés par Hostinger, puis privatisation un repo à la fois avec contrôle du déploiement.

## 10. Dette technique consolidée

| Repo | Dette |
|---|---|
| `notepad-pwa` | Fichiers permutés à HEAD ; chemins absolus ; bundle lourd ; pas de PR |
| `notes-svelte` | Layout et page permutés ; import `lucide-svelte` erroné ; menu rapide en doublon |
| `notes-4` | SW sans repli dédié ; Svelte 4 et 5 mélangés ; pas de test |
| `notes-aistudio` | Chunk 212 Ko gzip pour un budget de 170 ; `SettingsPage.tsx` 59 Ko ; i18n incomplet ; docs contradictoires sur le SW |
| `brandonlazarre` | TAP-01 instable ; clé `fix:` dupliquée qui a cassé `tsc` ; `AUDIT.md` / `REQUIREMENTS.md` cités mais absents |
| `notes-v3` | `smoke.mjs` 82 Ko, `app.css` 96 Ko ; JSON en data URLs ; 374 chaînes FR en dur ; sync Chromium seulement |
| `notes-v5` | Dépendances de scaffold ; pas de journal durable ; export en mémoire 64 Mio ; `theme_color` ≠ `index.html` ; partage OS cassé |
| `notes-v6` | `Workspace.svelte` 30 Ko ; PJ en data URL ; pas d'historique ; pas de purge corbeille ; commits directs sur `main` ; 4 branches non mergées |
| `MindSpace` | `App.tsx` 36 Ko ; pas de lockfile ; README vide ; `changelogData.ts` périmé ; `dependabot.yml` BlockNote ; Playwright hors PR ; `DISCOVERABILITY.md` périmé ; MIT contradictoire |

## 11. Synthèse évolutive : conventions et décisions d'architecture

À conserver (déjà éprouvées) :
- Contrôle de changelog sur toute modification d'app (v3).
- Version calculée et vérifiée en CI (MS `release-version.yml`, v5 `check-release.mjs`).
- Tokens seuls, aucun hex ni z-index numérique (v5).
- Portes d'accessibilité : contraste, cibles 44 px, piège de focus (v3, v6, MS).
- Précache atomique et refus des réponses non-2xx (v6, v3).
- Sauvegarde de sécurité avant import, aperçu avant écriture (v5, MS).

### Décisions validées (2026-11-10)

| # | Sujet | Décision |
|---|---|---|
| 1 | Versioning | CalVer `y.m.d-n`, exemple `6.11.10-3`. `y` = dernier chiffre de l'année, `n` = nombre de PR / merges du jour. Pas de SemVer. |
| 2 | Service Worker | `skipWaiting` automatique. Risque de conflit d'onglet accepté pour itérer vite. |
| 3 | État | Zustand. |
| 4 | Node.js | 24. |
| 5 | CSS | Natif, approche utilitaire "à la Tailwind" : classes écrites à la main, zéro dépendance. |
| 6 | Frontière des données (2026-11-10) | Yjs : contenu des notes (texte, blocs). Dexie : métadonnées (titres, dates, tags) et pièces jointes. Zustand : état d'UI seulement (navigation, modales, thème). Implémentée dans `mindspace-core` (2026-11-10) : Dexie `notes` (id, title, createdAt, updatedAt), un Y.Doc par note via `y-indexeddb`, Zustand = id de la note ouverte. L'exception temporaire `draftStore` a été supprimée. |
| 7 | Chiffrement (2026-11-10) | `crypt.ts` conservé tel que porté : nonce compteur, clé par fichier, HKDF. Phrase de 128 bits (28 signes). Vocabulaire public : "Chiffrement AES-GCM", jamais "AES-256". |
| 8 | CI (2026-11-10) | GitHub Actions `ci.yml` : `npm ci`, `tsc --noEmit`, `npm test`, `vite build`, sur chaque PR et push `main` (`mindspace-core`). Précision 2026-11-11 : `npm ci` est voulu (installe exactement le lockfile, échoue s'il est désynchronisé) ; gardé par `tests/ci-install.test.ts`. Exception subie : Hostinger construit avec `npm install`. |
| 9 | Design system (2026-11-11) | Design flat : ni glassmorphism, ni `backdrop-filter`, ni transparence, ni ombre. Palette officielle clair / sombre dans `mindspace-core/src/styles/tokens.css` (`bg`, `text`, `accent` ambre, `accent-pro` lilas, `surface`, `border`), seul fichier qui contient des hex. Garde automatique : `tests/tokens.test.ts`. |
| 10 | Sauvegarde chiffrée (2026-11-11) | Un fichier `.enc` (conteneur `NOTESENC`) autour d'un JSON `mindspace-core-backup` v1 : métadonnées Dexie + texte courant de chaque note en JSON ProseMirror (pas d'historique Yjs). Phrase de 28 signes créée au premier export, enregistrée sur l'appareil avant que le fichier parte, affichée masquée par défaut avec Copier. Un seul chemin d'import futur, qui lit ce format. |
| 11 | Suppression et restauration (2026-11-11) | Suppression définitive, sans corbeille, derrière une confirmation. Restauration en deux temps (aperçu puis écriture), strictement additive : note identique ignorée, note différente ajoutée en copie, rien écrasé, donc pas de sauvegarde de sécurité préalable. Texte validé contre le schéma de l'éditeur avant toute écriture. Un seul chemin d'import (`mindspace-core-backup` v1). |
| 12 | PWA (2026-11-11, modifiée le 2026-11-11) | Worker écrit à la main, sans bibliothèque : `src/sw.ts` compilé en `dist/sw.js` par `scripts/build-sw.mjs` (types retirés par Node, liste de précache injectée). `vite-plugin-pwa` et `workbox-*` retirés (arbitrage point 7). `skipWaiting` + `clients.claim` automatiques sans rechargement de page. Précache atomique dans un cache nommé d'après la liste de son build (un échec ne touche jamais la version active ; échec si un fichier manque, n'est pas 2xx, ou est une page HTML à la place d'un fichier). Navigations réseau d'abord, `index.html` rafraîchi à chaque 200, tout autre statut refusé, shell sans éviction. Manifest écrit à la main, `standalone`. |
| 13 | Déploiement vérifiable (2026-11-11) | `dist/build.json` = `{ version, sha, swHash }`, version CalVer calculée depuis le commit construit (jour de Paris, commits first-parent du jour), jamais éditée à la main (`package.json` sans champ `version`). `public/.htaccess` (hypothèse Hostinger mutualisé) : HTTPS, repli SPA pour les chemins sans extension seulement, vrai 404 d'un fichier manquant, `no-cache` sur `sw.js` / `index.html` / `build.json` / manifest, `immutable` sur `/assets/*`, CSP stricte sans `unsafe-inline` (Tiptap : `injectCSS: false`, règles dans `app.css`), `nosniff`. `scripts/check-deploy.mjs` vérifie un site en ligne, testé sur un vrai Apache. Décidé le 2026-11-11 : domaine `mindspace.brandonlazarre.fr` (jamais `apps.brandonlazarre.fr`), Hostinger construit `main` à chaque commit (Git auto-déploiement, Node 24, `npm run build`, sortie `dist`). Vérifié en ligne : `build.json` égal au sha de `main`, en-têtes du `.htaccess` appliqués par LiteSpeed, `check-deploy` vert (hors redirection HTTP, contrôlée à la main par le propriétaire : `301` vers `https`). Premier déploiement réel en échec : clone superficiel, corrigé (décision 17). |
| 14 | Purge des textes (2026-11-11) | Suppression d'une note en trois temps : une transaction Dexie (ligne + ligne d'index + entrée `purgeQueue`), puis suppression de la base IndexedDB du texte, puis retrait de l'entrée. Balayage au démarrage avant le premier rendu : file d'abord, puis bases `mindspace-core-note-*` sans ligne ni entrée. Verrou `navigator.locks` `ms-sweep` partagé avec la restauration. Comble le « trou connu » de la décision 11. |
| 15 | Index dérivé des notes (2026-11-11) | Table Dexie `noteIndex` (`id`, `title`, `preview`, `tokens` multiEntry, `wordCount`, `indexedAt`, `v`). Yjs reste la source ; l'index est en clair en local, jamais exporté, jamais synchronisé, reconstructible à 100 %. `INDEX_VERSION` monte à toute modification du calcul. Écriture 400 ms après la dernière frappe avec `updatedAt` posé aussi à la première frappe (l'ancien `updatedAt` à 500 ms ne suivait pas la persistance Yjs) ; restauration et suppression dans la même transaction que les notes ; reconstruction au démarrage par lots de 20. Concurrence : compare-and-swap sur `indexedAt`, pas d'horloges. |
| 16 | Adoption de la phrase (2026-11-11) | Appareil sans phrase qui restaure : question « D'où vient cette sauvegarde ? », deux boutons sans présélection : « de moi, réutiliser la phrase » (adoptée après restauration réussie) ou « tiers, nouvelle phrase à l'export » (rien stocké). Appareil avec phrase : aucune question, jamais de remplacement. Rotation de phrase : différée. Remplace le point ouvert de la décision 11. Précision 2026-11-11 (propriétaire) : la question s'ouvre dans un `<dialog>` modal natif (une seule question à la fois, focus piégé, Annuler ou Échap ne restaure rien), après l'appui sur « Restaurer », cohérent avec la confirmation de suppression. |
| 17 | Version en ligne sur Hostinger (2026-11-11) | Compromis assumé par le propriétaire : Hostinger construit `main` sur un clone superficiel et ne peut pas récupérer l'historique, donc le `n` de la version servie dans `build.json` est une BORNE BASSE (ex. `6.11.11-1`). Le `sha` et le `swHash` sont exacts ; la CI, qui clone tout, donne le vrai `n`. Suffisant pour clore le Sprint 1. `build-info` ne fait pas échouer le build pour un numéro (l'ancienne version levait une erreur : premier déploiement réel en échec, site resté sur un ancien build). À reprendre dans un sprint dédié : déployer `dist/` construit par la CI (version exacte). Jusque-là, ne pas citer la version en ligne comme preuve du nombre de merges. |
| 18 | Jetons d'alerte (2026-11-11) | `--ms-danger` `#b3261e` / `#ff8a80` et `--ms-on-danger` `#ffffff` / `#1a1a1a` (clair / sombre), contrastes mesurés 6,2 à 8,1:1 ; valeurs proposées par Claude, le propriétaire arbitre. Emplois : « Supprimer définitivement » (aplat) et bordure de l'encadré de première sauvegarde. Garde-fou tokens étendu. |
| 19 | Routeur minimal (2026-11-11) | `/`, `/notes/<uuid>`, `/tasks`, `/settings`, sans dépendance (`URL` et `history`). Restauration au rechargement, `popstate`. Adresse invalide ou note inconnue : la liste, adresse remplacée. La note ouverte derrière Réglages n'est pas dans l'adresse de Réglages. Garde contre la paire de stores à moitié mise à jour. Course asynchrone (revue Codex) : la recherche d'existence d'une note est asynchrone ; un compteur de navigation (popstate et action de l'utilisateur) abandonne toute réponse périmée (PR mindspace-core#20). |
| 20 | Chargement à la demande (2026-11-11) | Éditeur, Réglages et reconstruction de l'index en `import()` dynamique : premier chargement 273,9 Ko gzip (1 fichier) à 100,1 Ko (2 fichiers). La cible « sous 300 Ko » était déjà atteinte avant ; budget de 150 Ko dans `check-pwa` (c'est lui qui détecte l'import statique de l'éditeur). Démarrage : vérification légère Dexie seule avant de charger le code qui calcule l'index. Tous les chunks sont précachés. Onglet resté ouvert à travers une mise à jour : ses chunks paresseux n'existent plus (le worker supprime l'ancien précache) ; `LoadBoundary` affiche un message et un bouton Recharger, jamais de rechargement automatique ; conserver l'ancien précache est écarté (contredit le précache atomique). PR mindspace-core#21. |

### Conséquences relevées par l'audit (inventaire, pas de code)

**1. Versioning**
- `MindSpace` applique déjà ce schéma : `package.json` à `6.11.10-1`, déployé le 2026-11-10 (`6.11.JOUR-N` depuis la PR #39, `tests/versioning.test.mjs`, `release-version.yml`). Aucun changement de mécanisme pour la base cible.
- Remplace `YY.M.D.n` (`notes-v3`) et `5.M.J+PR` (`notes-v5`). Ces deux repos restent figés sur leur ancien schéma.
- Analyse : `n` compte les PR mergées du jour, fuseau Paris dans l'implémentation `MindSpace`, pas le numéro de PR. Le texte de la décision dit "PR / merge" : l'implémentation fait foi tant qu'elle n'est pas modifiée.
- Analyse : npm exige une chaîne semver valide. `6.11.10-3` en est une (pré-release), à condition que le mois et le jour n'aient pas de zéro initial. Elle ne porte aucune sémantique majeur / mineur / correctif.
- Analyse : `y` est le dernier chiffre de l'année, donc 2026 et 2036 donnent tous deux `6`. Collision de décennie à traiter avant 2036.

**2. Service Worker**
- Aligne le produit cible sur `MindSpace` (`skipWaiting` + `clients.claim`, cache `mindspace-static-v2`, navigation réseau d'abord).
- Abandonne le toast "Nouvelle version disponible · Recharger" de `notes-v3` et `notes-v5`.
- Risque accepté, tel que documenté : un onglet ancien peut écrire avec un ancien code (`notes-v5/docs/technical-snapshots.md` demande de fermer les anciens onglets avant déploiement). Avec Yjs (un Y.Doc par note), l'écriture concerne aussi les documents collaboratifs.
- À reprendre du portage : précache atomique et refus des réponses non-2xx (`notes-v6`, `notes-v3`). Le test `notes-v3/tests/sw-regression.mjs` suppose le comportement actuel de `notes-v3` (pas de `skipWaiting` automatique) et devra être adapté.

**3. Zustand**
- Source : `notes-v3/src/store.ts` (10 Ko, `^5.0.16`). `MindSpace` n'a aucun store : l'état vit dans `App.tsx` (36 Ko).
- Ajoute une dépendance d'exécution à `MindSpace`. Ratio d'utilité : non mesuré (règle utilisateur : proche de 100 %).
- Frontière tranchée le 2026-11-10 (décision 6) : Zustand = UI seulement. `notes-v3/src/store.ts` mêle données et UI : ne pas le porter tel quel, séparer avant de porter.
- Non spécifié : format et resynchronisation du miroir dérivé du contenu Yjs dans Dexie (`editorJson`, `body`), dont dépendent recherche, aperçus de liste et export.

**4. Node.js 24**
- Déjà la cible de `MindSpace` (`engines >=24.22.1 <25`), `notes-v5` (24) et `notes-v6` (24.22.2). Hostinger : `node_version` 24 confirmé sur le build `01a1c55e` du 2026-11-10.
- Seul `notes-v3` (`deploy.yml`, Node 22) doit monter en 24 au portage.
- Constat local : l'environnement d'audit exécutait Node 22.23.4 et `npm install` a signalé `EBADENGINE`. Les tests node de MindSpace passent sous 22 après build.

**5. CSS natif utilitaire**
- Retire de `MindSpace` quatre dépendances : `tailwindcss`, `@tailwindcss/vite`, `tailwind-merge`, `tw-animate-css`. Usage réel dans les composants : non mesuré, à relever avant retrait.
- Références existantes : CSS natif de `notes-v3` (`light-dark()`, `color-mix`, nesting, `tokens.css` + `looks.css`) ; `MindSpace/src/style.css` (39 Ko) à rapprocher des tokens.
- Contraintes déjà établies qui restent applicables : aucun hex ni z-index numérique, échelle `--z-*`, préfixe `--ms-*`, cibles 44 px, contrastes (section 3).
- Non spécifié : convention de nommage des classes utilitaires (préfixe, échelle d'espacement, variantes responsive et états). À écrire avant la première migration.
- Les choix visuels (couleurs, mise en page, micro-interactions) restent à l'utilisateur. Cette décision porte sur la méthode d'écriture du CSS, pas sur le rendu.

## 12. Limites

- Aucun lockfile lu ; versions exactes non vérifiées.
- Pas d'exécution des tests ni de l'app ; pas de hash de build en ligne vérifié.
- Pas de scan de secrets.
- `MindSpace/src/{components,pages,hooks,layouts}` et `notes-v3/src/ui` non parcourus fichier par fichier.
- Statut CI GitHub de `_notes-brain` : non vérifié (aucun workflow dans ce repo).
