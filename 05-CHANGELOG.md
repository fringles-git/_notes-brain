# 05 : Journal du cerveau

## 2026-11-10 : audit initial Notes PWA

- Audit lecture seule de 9 repos : `notepad-pwa`, `notes-svelte`, `notes-4`, `notes-aistudio`, `brandonlazarre`, `notes-v3`, `notes-v5`, `notes-v6`, `MindSpace`. 112 PR, 30 branches.
- Fichiers créés : `00-INDEX.md`, `01-BUSINESS-AND-VISION.md`, `02-FEATURES-AND-ARCHAEOLOGY.md`, `03-TECH-CONVENTIONS.md`, `05-CHANGELOG.md`.
- Livraison : PR `fringles-git/_notes-brain#1`, branche `claude/youthful-meitner-od7w6o`. Non mergée.

### Décisions du propriétaire
1. Local 100 % gratuit sans compte. Compte requis pour Cloud (sync E2E, collaboration) et API à l'usage (IA, OCR avancé, traitement lourd).
2. Référence métier : `notes-v3`. Référence UI / Tiptap / Yjs : `MindSpace`.
3. Licence propriétaire, All Rights Reserved. `MindSpace/LICENSE` (MIT) à remplacer par PR dédiée.
4. Repos publics (`notes-v5`, `notes-4`, `notes-svelte`, `notepad-pwa`, `brandonlazarre`) à passer en privé après l'audit.
5. OCR et Whisper locaux restent gratuits. L'API vend vitesse, batterie / stockage, qualité.
6. Sync : transport par dossier d'abord, relais géré ensuite, pas d'infrastructure serveur avant validation de l'usage local.
7. IA : consentement explicite pour tout envoi de contenu en clair. Chiffrement E2E reste la norme pour sync et stockage.

### Alertes ouvertes
- `MindSpace/LICENSE` MIT et mentions MIT publiques (`legal.html`, `llms.txt`, `mindspace.md`, `IMPLEMENTATION.md`).
- Titulaire du copyright et identité légale de l'éditeur non renseignés.
- Aucun scan de secrets exécuté.
- Passage en privé : aucun outil MCP de la session ne change la visibilité ; contrôles Hostinger / Pages à faire avant.
- Fichiers permutés à HEAD : `notepad-pwa`, `notes-svelte`.

### Non vérifié
- Hash de build en ligne, statut CI : non applicable au repo brain (aucun workflow).
- Lockfiles, exécution des tests et des apps.

## 2026-11-10 : suites de l'audit

- PR `fringles-git/_notes-brain#1` mergée. `MindSpace#48` mergée : `LICENSE` All Rights Reserved, titulaire Brandon Lazarre, mentions MIT publiques alignées. Build Hostinger `01a1c55e` (version 6.11.10-1) `completed` sur `c7c61a1`. Page `legal.html` en ligne non relue (proxy de session bloqué).
- Alertes closes : `MindSpace/LICENSE` MIT, titulaire du copyright.
- Décisions d'architecture validées (`03`, section 11) :
  1. CalVer `y.m.d-n`, exemple `6.11.10-3`. Pas de SemVer.
  2. `skipWaiting` automatique, risque de conflit d'onglet accepté.
  3. Zustand.
  4. Node.js 24.
  5. CSS natif, approche utilitaire écrite à la main, zéro dépendance.
- Non spécifié, à écrire avant le code : frontière Zustand / Dexie / Yjs ; convention de nommage des classes utilitaires ; relevé d'usage de Tailwind avant retrait ; collision de décennie du `y` en 2036.
- Alertes restantes : passage en privé de 5 repos (action manuelle), scan de secrets, fichiers permutés de `notepad-pwa` et `notes-svelte`.

## 2026-11-10 : archéologie Git

- Passe sur l'historique de `notes-v3`, `brandonlazarre` (`notes-site`, `notes-v3`), `notes-aistudio`, `notes-v5`, `notes-v6` (avec ses 4 branches non mergées) et `MindSpace`.
- Ajout de `02`, section 11 "Archéologie Git (Solutions abandonnées)" : 14 fiches (M1 à M6, V1 à V8, A1 à A4) plus remplacements équivalents ou inférieurs.
- Recherche, Sync, Ranger : aucune solution passée supérieure. Pépites : import Markdown riche de `MindSpace` #43 (annulé par #44), filtres / onboarding / sauvegarde de `notes-v6` (branches non mergées), widgets Recap, garde `syncSupported`.
- Trois constats vérifiés sur le code courant : `MindSpace` `server.mjs` renvoie 404 JSON sur `/settings/a-propos/versions` et `/settings/a-propos/quoi-de-neuf` en chargement direct ; `notes-v5` n'écrit plus `lastBackup` ; `notes-aistudio` a perdu `syncSupported` que `notes-v3` garde.
- Non fait : correctifs de code, exécution des tests, comparaison de `style.css` / `tokens.css` de `MindSpace`.

## 2026-11-10 : initialisation de mindspace-core

- Repo `fringles-git/mindspace-core` : commit `fd2427e` poussé directement sur `main` sur ordre explicite (pas de PR). Contenu : `CLAUDE.md`, `LICENSE` (All Rights Reserved), `"license": "UNLICENSED"`, Vite 8.3 + React 19.3 + TypeScript 7 + zustand 5, lockfile, Node 24.22.1.
- Audit de `notes-v3/src/crypt.ts` (HEAD `6e441ec`) avant portage :
  - IV : pas aléatoire. Nonce = compteur de chunk (8 octets à zéro + u32). Unicité (clé, nonce) garantie par une clé AES-256 par fichier (HKDF, sel de 16 octets via `crypto.getRandomValues`). Conception conservée : format `NOTESENC` v1 inchangé, sauvegardes v3 lisibles.
  - Tag : GCM 16 octets par chunk, vérifié par WebCrypto. AAD = en-tête + drapeau de dernier chunk : troncature, ajout, réordonnancement et en-tête modifié rejetés.
  - KDF : HKDF-SHA256, `info` `notes/backup/v1`. Pas de KDF de mot de passe : la clé maîtresse est 128 bits aléatoires (phrase de 28 signes). Force effective : 128 bits, pas 256.
  - Faiblesses corrigées : clé de longueur quelconque acceptée (clé vide chiffrait), taille de chunk non bornée à l'écriture (fichier illisible par le lecteur), compteur u32 bouclable sur plus de 2^32 chunks.
- `src/crypt.ts` et `tests/crypt.test.ts` (node:test, 25 cas, vert sous Node 24.22.1) : aller-retour aux frontières de chunk, mauvaise clé, altération, troncature, réordonnancement, vecteur de compatibilité généré par le code v3.
- `tsc --noEmit` et `vite build` verts en local.

### Non vérifié
- Statut CI : aucun workflow dans `mindspace-core`. Hash de build en ligne : aucun déploiement.
- Zustand installé, non utilisé (frontière Zustand / Dexie / Yjs non spécifiée, `03` section 11).
- Version `6.11.10-1` choisie par application de `03` section 11 ; `n` non issu d'une PR mergée.

### À décider
- Phrase de 128 bits (28 signes) ou 256 bits si "AES-256" doit désigner la force effective.
- Ajout d'un workflow CI (typecheck, build, `npm test`) dans `mindspace-core`.

## 2026-11-10 : décisions crypto, CI, frontière des données

- `mindspace-core#1` (ouverte, non mergée) : `.github/workflows/ci.yml` et `CLAUDE.md` mis à jour.
- Décisions du propriétaire :
  1. `crypt.ts` conservé tel que porté (nonce compteur, clé par fichier, HKDF). Phrase de 128 bits. UI publique : "Chiffrement AES-GCM", jamais "AES-256".
  2. CI : `npm`, `tsc --noEmit`, `npm test`, `vite build` sur chaque PR et push `main`. Écart appliqué : `npm ci` au lieu de `npm install`.
  3. Frontière des données : Yjs = contenu, Dexie = métadonnées et pièces jointes, Zustand = UI seulement.
- `03` section 11 : décisions 6 à 8 ajoutées, "frontière non spécifiée" remplacée.
- Alerte ouverte : le miroir du contenu Yjs dans Dexie (`editorJson`, `body`) n'a ni format ni règle de resynchronisation. Bloque recherche, aperçus de liste, export.
- Non vérifié : statut CI de `mindspace-core#1` (première exécution du workflow).

## 2026-11-10 : UI Shell de mindspace-core

- `mindspace-core` commit `128050c` poussé directement sur `main` sur ordre explicite : `src/ui/` (Dock, NotesList, Tasks, Settings, `store.ts`, `tokens.css`, `ui.css`), `src/App.tsx` réécrit, `tests/ui-store.test.ts`.
- Zustand utilisé : `currentPage` (`notes`, `tasks`, `settings`), état d'UI seulement (décision 6).
- Vérifié en local (Node 24.22.1) : `tsc --noEmit`, 28 tests, `vite build`, `npm run dev`. Rendu Chromium 390 px, clair et sombre : 3 cibles de 44 px de haut, navigation et `aria-current` corrects, aucune erreur console.
- Contrastes calculés des placeholders : texte atténué 6,35:1 (clair) et 7,00:1 (sombre) ; texte sur accent 10,60:1.
- Choix de convention posés par le code, à valider (le cerveau les disait non spécifiés) : préfixe de classes `ms-`, éléments `ms-bloc__element`, utilitaire `ms-glass`, jetons `--ms-*` dont l'échelle `--ms-z-*`. Hex et z-index numériques confinés à `src/ui/tokens.css`.
- Couleurs de `tokens.css` : valeurs provisoires reprises de la palette MindSpace (`02` section 3). Décision visuelle du propriétaire en attente.
- Dock sans icônes (libellés seuls) : choix visuel laissé au propriétaire. Page active non persistée, pas d'URL ni de routeur : rechargement = retour sur Notes.
- Non vérifié : statut CI du commit `128050c` (voir PR), hash de build en ligne (aucun déploiement), aucun test sur appareil réel.
