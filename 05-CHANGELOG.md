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
- CI GitHub Actions verte sur `128050c` (run 3, push sur `main`).
- Non vérifié : hash de build en ligne (aucun déploiement), aucun test sur appareil réel.

## 2026-11-10 : éditeur Tiptap dans mindspace-core

- `mindspace-core` commit `93b4701` poussé directement sur `main` sur ordre explicite : `src/ui/NoteEditor.tsx`, `EditorToolbar.tsx`, `editorExtensions.ts`, `draftStore.ts`, `editor.css`, tokens de pile basse, 9 tests ajoutés.
- Dépendances ajoutées : `@tiptap/react`, `starter-kit`, `extension-placeholder` (demandées) plus `@tiptap/core` et `@tiptap/pm` (pairs obligatoires), tous en 3.33.1.
- Redondance vérifiée : `MindSpace` possède déjà un éditeur Tiptap + Yjs (`Editor.tsx`, `EditorToolbar.tsx`), couplé à Tailwind et lucide-react. Pas de copie. Patterns repris : `role="toolbar"`, `aria-pressed`, `preventDefault` au mousedown, titres 1 à 3.
- Exception à la décision 6, demandée par le propriétaire : contenu de note dans Zustand via un store séparé de `useUi`, en mémoire, brouillon unique, à supprimer au branchement Yjs. Documentée dans `CLAUDE.md` et `03`.
- Lien Tiptap désactivé (`link: false`) : aucune UI de lien, règle http(s) et mailto non implémentée.
- Vérifié en local (Node 24.22.1) : `tsc --noEmit`, 35 tests, `vite build`. Chromium 390 et 360 px : 7 cibles de 44 px, un seul arrêt de tabulation, flèches / Début / Fin, formats appliqués, contenu restauré après changement de page, aucune erreur console.
- Bundle : un seul chunk JS de 626,6 Ko (197,3 Ko gzip), avertissement Vite au-delà de 500 Ko. Aucune scission du code.
- Non vérifié : clavier virtuel mobile (la barre fixe et le dock peuvent passer sous le clavier), appareil réel, hash de build en ligne (aucun déploiement).
- Décisions visuelles en attente du propriétaire : emplacement de la barre d'outils (îlot fixe au-dessus du dock), anneau de focus sur toute la zone d'édition, échelle typographique, libellés textuels sans icônes.
- Dependabot actif sur `mindspace-core` (PR #2) : premières exécutions en file d'attente, PR de mises à jour attendues.

## 2026-11-10 : persistance locale de mindspace-core

- `mindspace-core` commit `c74ffb6` poussé directement sur `main` sur ordre explicite. Texte en Yjs (`y-indexeddb`, un Y.Doc par note, champ `default`), métadonnées en Dexie, id de la note ouverte en Zustand, bouton "+" Nouvelle note dans le Dock.
- Frontière des données appliquée : table `notes` = `id` (UUID v4), `title`, `createdAt`, `updatedAt`, aucun champ de contenu (test et lecture de la base réelle). `draftStore` supprimé : l'exception temporaire est levée.
- Bases IndexedDB : `mindspace-core` et `mindspace-core-note-<id>`, noms distincts de `mindspace` / `mindspace-note-<id>` de l'ancienne app (collision possible si même origine un jour).
- Dépendances ajoutées : `dexie`, `yjs`, `y-indexeddb`, `@tiptap/extension-collaboration` (demandées), `@tiptap/y-tiptap` (pair obligatoire de Collaboration), `fake-indexeddb` (dev, tests). Une seule instance de `yjs` dans l'arbre.
- Vérifié en local (Node 24.22.1) : `tsc --noEmit`, 46 tests, `vite build`. Chromium 390 px sur le serveur de dev : texte tapé puis rechargement après 100 ms, texte restauré (titre, gras) ; une seule note créée malgré StrictMode ; ouvrir une note ne modifie pas `updatedAt` ; annulation via l'historique Yjs ; texte conservé au changement de page ; "Nouvelle note" ouvre une note vide, rechargement sur la plus récente ; double appui = une seule note ; la première note reste stockée ; aucune erreur console.
- Bundle : un chunk JS de 844,8 Ko (265,3 Ko gzip), contre 626,6 Ko avant (Yjs, Dexie, Collaboration). Aucune scission du code.
- Limites connues : `y-indexeddb` n'expose pas d'erreur d'ouverture (si IndexedDB est indisponible, la note reste en "Restauration…") ; aucune liste de notes, donc les notes antérieures ne sont pas rouvrables ; `title` reste "Sans titre" (dérivation depuis le contenu = index dérivé non spécifié) ; clavier virtuel et appareil réel non testés ; pas de test navigateur en CI.
- Dock : marges horizontales des items réduites (16 px vers 12 px) pour tenir à 360 px avec le bouton "+". Décision visuelle du propriétaire en attente (emplacement et forme du "+").
- Non vérifié : hash de build en ligne (aucun déploiement).

## 2026-11-10 : liste des notes et titre dans mindspace-core

- `mindspace-core` commit `8f85ad2` poussé directement sur `main` sur ordre explicite. `NotesList` réelle (Dexie `liveQuery`), `NotesPage` (liste ou éditeur selon `currentNoteId`), champ Titre dans `NoteEditor`, `closeNote` dans `useNoteStore`, Dock : second appui sur l'onglet Notes = retour à la liste.
- Changement de comportement : plus aucune note rouverte automatiquement au rechargement, la liste s'affiche. `ensureNote` supprimé (code mort).
- Dexie v2 : les titres "Sans titre" écrits par la v1 sont vidés. Un titre vide s'affiche "Sans titre", jamais stocké. Création d'une note : titre vide.
- Écart avec la demande : `dexie-react-hooks` non installé (154 Ko décompressés pour un seul hook utilisé, rapport d'utilité faible). Hook `useNotes` maison sur `liveQuery`, déjà dans Dexie. Réévaluer si d'autres hooks du paquet servent.
- Titre : enregistré 300 ms après la dernière frappe, et aussitôt à la sortie de la note, au blur, à `pagehide`, à l'onglet masqué (testés). Limite mesurée : un rechargement brutal dans les 300 ms perd les derniers caractères du titre. Le texte du corps (Yjs) n'a pas cette fenêtre.
- Vérifié en local (Node 24.22.1) : `tsc --noEmit`, 49 tests, `vite build`. Chromium 390 px : état vide au texte exact, "+" ouvre une note vide, titre et texte enregistrés, retour par le bouton et par l'onglet Notes, liste triée par date décroissante, une note éditée remonte en tête, rechargement conserve liste et contenus, effacer le titre affiche "Sans titre", focus sur `<main>` à chaque changement de vue, cibles : bouton retour 80x44, titre 358x44, lignes 358x59, aucune erreur console.
- Bundle : 847,7 Ko (266 Ko gzip), contre 844,8 Ko. Aucune scission du code.
- Non vérifié : clavier virtuel mobile, appareil réel, lecteur d'écran, hash de build en ligne (aucun déploiement). Pas de test navigateur en CI.
- Restent ouverts : dérivation du titre depuis le contenu (index dérivé), suppression et corbeille de notes, recherche, erreur d'ouverture d'IndexedDB (`y-indexeddb`).
- Décisions visuelles en attente du propriétaire : cartes de la liste (bordure, rayon, ombre absente), format de date, bouton de retour "‹ Notes", taille du champ Titre.
