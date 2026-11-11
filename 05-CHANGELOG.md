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

## 2026-11-11 : design system (couleurs et jetons) de mindspace-core

- `mindspace-core` commit `5469a8a` poussé directement sur `main` sur ordre explicite. `src/styles/tokens.css` (palette officielle clair / sombre) et `src/styles/app.css` (tout le CSS applicatif). Fusion de `ui.css`, `notes.css`, `editor.css` dans `app.css` ; anciens `src/ui/tokens.css` et `ui.css` supprimés.
- Décision 9 ajoutée à `03` : design flat, ni glassmorphism ni `backdrop-filter` ni transparence ni ombre. Classe `ms-glass` supprimée.
- Palette appliquée : `--ms-bg`, `--ms-text`, `--ms-accent` (ambre), `--ms-accent-pro` (lilas, aucun emploi), `--ms-surface`, `--ms-border`. Cartes de la liste, éditeur, dock et barre d'outils : surface + bordure. "Nouvelle note" : ambre.
- Écarts et ajouts à valider : 3 jetons hors liste, nécessaires à la lisibilité : `--ms-text-muted`, `--ms-on-accent` (texte sombre sur ambre dans les deux modes, le texte clair du mode sombre ferait 1,5:1), `--ms-focus` (violet `#7e52e8` en clair, lilas en sombre). L'état sélectionné (onglet actif, outil enfoncé) passe de l'ambre à la paire inversée texte / fond, pour réserver l'ambre à la création (règle de couleur de `02` section 3). Bouton "Nouvelle note" laissé dans le dock : la mise en page n'a pas été touchée.
- Garde-fou : `tests/tokens.test.ts` (12 cas) vérifie la palette, les contrastes, aucun hex hors `tokens.css`, aucune transparence / `backdrop-filter` / ombre, aucun z-index numérique, aucune variable non définie, cibles de 44 px. Test de mutation : 8 violations injectées dans `app.css`, 8 détectées.
- Vérifié en local (Node 24.22.1) : `tsc --noEmit`, 61 tests, `vite build`, CSS livré sans `backdrop-filter`, alpha ni ombre. Chromium 390 px, clair et sombre, valeurs calculées : fonds opaques partout, 0 filtre, 0 ombre, opacité 1 ; cibles : onglets 67 à 91 x 44, "+" 44 x 44, outils 44 x 44, retour 80 x 44, titre 358 x 44, lignes 358 x 59 ; anneau de focus de 3 px sur chaque élément atteint au clavier, 4,68:1 minimum en clair et 7,39:1 en sombre ; aucune erreur console.
- Contrastes mesurés (clair / sombre) : texte sur fond 16,5 / 17,1 ; texte sur surface 17,4 / 15,3 ; texte atténué sur surface 6,7 / 7,3 ; "+" sur ambre 10,6 ; onglet actif 16,5 / 17,1.
- Points faibles de la palette demandée : `--ms-border` ne fait que 1,2:1 (clair) et 1,3:1 (sombre) sur surface, utile en séparation seulement ; le lilas fait 2,1:1 sur fond clair, inutilisable en texte ou en anneau de focus clair ; l'ambre sur surface claire fait 1,6:1, le "+" ne s'identifie que par son glyphe. La sélection de texte garde la couleur native du navigateur.
- Non vérifié : appareil réel, lecteur d'écran, mode contraste forcé (CSS écrit, non rendu), hash de build en ligne (aucun déploiement).

## 2026-11-11 : sauvegarde chiffrée de mindspace-core (fiche V5)

- `mindspace-core` commit `0a15c7c` poussé directement sur `main` sur ordre explicite. `src/backup/` (export, lecture, validation, phrase), `BackupSection` et `RecoveryPhrase` dans Réglages, Dexie v3 (table `prefs`), 25 tests ajoutés.
- Redondance vérifiée : `notes-v3` a déjà ce flux (`exportEncrypted` : phrase gardée sur l'appareil, enregistrée avant le téléchargement, puis `lastBackup` et `persistStorage`). Logique portée sur le modèle Yjs + Dexie, pas copiée : le contenu vient des Y.Doc, pas d'un store.
- Fiche V5 traitée : `lastBackup` et `persist()` après le téléchargement. Décision 10 ajoutée à `03`.
- Format : JSON `mindspace-core-backup` v1 (`id`, `title`, `createdAt`, `updatedAt`, `content`) dans un conteneur `NOTESENC`. `content` = texte courant en JSON ProseMirror. Choix : pas de mises à jour Yjs brutes, qui embarqueraient l'historique et le texte supprimé.
- Phrase de 28 signes créée au premier export, réutilisée ensuite. Affichage masqué par défaut, clair à la création et sur demande, "Copier" fonctionne masquée. Compromis assumé : elle est stockée en clair dans IndexedDB à côté des notes (v3 faisait pareil) ; elle protège le fichier, pas l'appareil.
- Vérifié en local (Node 24.22.1) : `tsc --noEmit`, 86 tests, `vite build`. Chromium 390 px, vrai téléchargement : `mindspace-notes-2026-11-11.enc` ; fichier relu avec `readBackup` du projet, 2 notes identiques (accents, emoji, guillemets), aucun texte en clair dans les octets, mauvaise phrase refusée ; phrase absente du DOM quand masquée, copie vérifiée dans le presse-papiers, même phrase après rechargement et au second export, aucun avertissement au second export ; aucune note : pas de fichier, pas de phrase ; boutons 44 px de haut ; aucune erreur console.
- Un `persist()` demandé : `persisted()` reste `false` en Chromium headless (le navigateur n'accorde pas sans critère d'engagement). Effet réel non vérifié sur appareil.
- Limites : tout est en mémoire (pas de plafond ni de flux ; rien de lourd n'existe, pas de pièce jointe), pas de rappel à 14 jours, pas d'écran de restauration (le chemin d'import unique reste à écrire), un fichier abîmé d'un seul chunk est signalé "clé" (comportement de `crypt.ts`).
- Non vérifié : appareil réel, lecteur d'écran, hash de build en ligne (aucun déploiement).

## 2026-11-11 : suppression et restauration dans mindspace-core

- `mindspace-core` commit `4381e48` poussé directement sur `main` sur ordre explicite. Bouton "Supprimer" (icône poubelle) dans l'éditeur avec confirmation `<dialog>` native ; "Restaurer une sauvegarde" dans Réglages (fichier `.enc`, phrase, aperçu, confirmation). `src/db/noteContent.ts`, `src/backup/restoreBackup.ts`, 21 tests ajoutés. Décision 11 ajoutée à `03`.
- Suppression : définitive, sans corbeille (le cerveau signale la corbeille de v3, 30 jours, comme absente ici ; non demandée). Ligne Dexie, puis base IndexedDB du texte via `clearDocument`. Écart avec ma supposition de départ : `lib0` ferme la connexion d'une base supprimée (`onversionchange`), la suppression n'attend donc pas l'éditeur. L'interface démonte l'éditeur avant de supprimer.
- Restauration : en deux temps (aperçu avant écriture, règle du cerveau). Strictement additive, donc aucune sauvegarde de sécurité préalable. Même id et contenu identique : ignorée. Même id, contenu différent : ajoutée en copie "(restaurée)" avec un nouvel id. Dates d'origine conservées. Texte validé contre le schéma de l'éditeur avant toute écriture : un lien ou un nœud inconnu refuse tout le fichier. Limites 64 Mio et 10 000 notes. Écriture : textes, puis métadonnées en une transaction ; retrait des textes en cas d'échec.
- Défaut trouvé par le test navigateur : `<dialog>` fermé dans le nettoyage de l'effet, sous StrictMode (dev), annulait la confirmation aussitôt ouverte (événement `close` en file). Corrigé, noté dans `CLAUDE.md`.
- Vérifié en local (Node 24.22.1) : `tsc --noEmit`, 107 tests, `vite build`. Chromium 390 px : annuler, Échap (focus rendu au bouton Supprimer), confirmation ; suppression juste après une frappe sans erreur console ; base de texte supprimée ; mauvaise phrase, phrase mal saisie, fichier non reconnu : messages distincts, rien écrit ; restauration sur le même appareil (1 ajoutée, 2 ignorées) ; après modifications locales : 2 copies, versions locales intactes ; restauration sur un appareil vierge : 3 notes et 3 textes exacts ; boutons et champ de 44 px ; fond de dialogue et fond d'arrière-plan opaques, sans filtre ni ombre.
- Points à décider avec le propriétaire : (1) la restauration n'adopte pas la phrase saisie, un appareil vierge qui restaure puis sauvegarde crée donc une nouvelle phrase (adopter la phrase d'un tiers lui donnerait accès aux sauvegardes suivantes) ; (2) pas de corbeille ni de suppression multiple, donc une restauration par erreur se défait note par note ; (3) bouton destructif sans couleur dédiée (la palette n'a pas de jeton d'alerte).
- Trou connu : aucun balayage des bases de texte orphelines. Une fermeture d'onglet entre la suppression de la ligne et celle du texte laisse du texte "supprimé" dans IndexedDB. À traiter avant la production.
- Non vérifié : appareil réel, lecteur d'écran, sélecteur de fichier mobile (filtre `.enc` ignoré par certains navigateurs), hash de build en ligne (aucun déploiement).

## 2026-11-11 : PWA de mindspace-core (service worker, manifest, iOS)

- `mindspace-core` commit `87563ec` poussé directement sur `main` sur ordre explicite. `vite-plugin-pwa` (`injectManifest`), `src/sw.ts`, `public/manifest.webmanifest`, icônes, balises iOS, `scripts/check-pwa.mjs` (build et CI), `tests/pwa.test.ts`. Décision 12 ajoutée à `03`, fiche M3 marquée traitée.
- Écart d'architecture justifié : `generateSW` ne sait pas rafraîchir `index.html` à chaque navigation ni refuser une navigation non-2xx (deux exigences du `CLAUDE.md`). `injectManifest` avec un worker écrit à la main, le plugin fournissant la liste de précache et l'enregistrement.
- Écart de comportement : `registerType: 'autoUpdate'` recharge la page à chaque nouvelle version (code du plugin, `window.location.reload()`). Neutralisé via `onNeedReload` : un éditeur de notes ne se recharge pas sous l'utilisateur. `skipWaiting` et `clientsClaim` écrits dans le worker.
- Défauts trouvés par le test navigateur, absents du build : (1) route de précache avant la route de navigation : `/` servi cache d'abord, shell jamais rafraîchi, cache `mindspace-shell` jamais créé ; (2) un hébergeur à repli SPA répond `200 text/html` à un asset disparu : Workbox l'acceptait, la mise à jour s'installait avec un faux asset. Corrigés (ordre des routes ; refus d'une page HTML sous une URL qui n'est pas `.html`).
- Vérifié en local (Node 24.22.1) : `tsc --noEmit`, 116 tests, `vite build`, `check-pwa`. Chromium contre un serveur contrôlé, serveur réellement arrêté pour le hors ligne, 3 passages complets : installation et contrôle de la page ; hors ligne : liste, texte d'une note et lien profond `/settings/...` ; `index.html` rafraîchi après une navigation réussie et servi hors ligne ; navigation en 500 refusée (app affichée, copie saine conservée), lien profond en 404 rescué ; précache incomplet (fichier manquant en 200 HTML, puis en 404) : installation échouée, version active et précache intacts, toujours fonctionnel hors ligne ; mise à jour valide : activée seule, page non rechargée ; nouvel asset précaché et ancien retiré, shell conservé ; Chromium ne signale aucune erreur d'installabilité ni de manifest ; dev : aucun service worker.
- Coût de la dépendance : `node_modules` de 111 Mo à 190 Mo, 52 à 265 paquets de premier niveau, 6 alertes `npm audit` (0 avant ; transitives via `workbox-build` : `deepmerge`, `glob`, `minimatch`, compilation seulement, la correction proposée rétrograde le plugin). Livré : `sw.js` 18,9 Ko (6 Ko gzip), chunk `workbox-window` 5,6 Ko (2,2 Ko gzip). Alternative écartée sur instruction : worker natif d'environ 80 lignes, zéro dépendance.
- Points ouverts : visuel des icônes (placeholder ambre avec "M") et couleur de fond du splash sombre (un seul `theme_color` possible dans le manifest) ; `viewport-fit=cover` et barre d'état iOS `default` non testés sur appareil ; aucun bouton "Installer" ni message "prêt hors ligne" ; onglet ancien après mise à jour avec montée de version Dexie ; hôte non défini (`sw.js` doit être servi en `no-cache`, le manifest en `application/manifest+json`).
- Non vérifié : installation réelle sur Android et iOS, hash de build en ligne (aucun déploiement).

## 2026-11-11 : Sprint 1 de l'arbitrage des 69 points, mindspace-core

Sprint exécuté sur branches dédiées `claude/brave-shannon-p7pfr9*`, 7 PR empilées (#4 à #10), aucune mergée par moi. Ordre de merge : #4, #5, #6, #7, #8, #9, #10. PR-1 (retrait de `Tasks.tsx`, point 65) non ouverte : `Tasks` figure dans `02` (ligne « Listes, cases, onglet Tâches »), la condition du verdict n'est pas remplie.

- #4 CI : script de scénarios navigateur (`scripts/check-pwa-browser.mjs`) avec assertions, sans dépendance au projet (`playwright-core` installé en CI seulement, Chrome du runner), `forced-colors` via CDP (point 67), `npm audit --omit=dev`, Dependabot hebdomadaire groupé 5 PR. CodeQL retiré : dépôt privé, l'envoi des résultats échoue sur chaque PR (point 57). Cause d'un premier échec de CI : `in-incognito` renvoyé par le Chrome du runner, filtré.
- #5 Déploiement : `build.json`, `.htaccess`, CSP stricte sans `unsafe-inline`, `check-deploy.mjs` (testé sur un vrai Apache). Trouvaille : la CSP bloquait la balise `<style>` que Tiptap injecte ; `injectCSS: false` et règles copiées dans `app.css`. Décision 13.
- #6 Purge des textes orphelins (point 15) : file `purgeQueue`, balayage au démarrage, verrou partagé avec la restauration. Écart avec la spec : « 5 reprises à 500 ms » remplacé par une requête unique attendue 5 x 500 ms (une seconde requête `deleteDatabase` derrière une requête bloquée ne signale rien : mon premier essai se bloquait). Décision 14.
- #7 et #8 Index dérivé (point 53) : schéma, extracteur pur, resynchronisation. Vérification demandée par la spec : `updatedAt` NE suivait PAS la persistance Yjs (500 ms, pas de flush à `pagehide`) ; corrigé par une écriture de tête et une écriture finale à la même heure. Mutation vérifiée en Chromium. Défaut trouvé par la CI, absent en local : la garde de concurrence comparait des horloges, deux renommages dans la même milliseconde se prenaient pour une écriture concurrente ; remplacée par un compare-and-swap, test de non-régression qui échouait à chaque exécution avant. Décision 15.
- #9 Adoption de la phrase (point 11), `randomBytes` (point 62), garde « aucun journal ne cite une phrase » (point 22). Les deux tests crypto du point 55 existaient déjà (sel par fichier, retrait du dernier chunk) : pas de doublon. Décision 16.
- #10 Worker natif (point 7) : `vite-plugin-pwa` et `workbox-*` retirés, `npm audit` de 6 alertes à 0, `node_modules` de 190 Mo à 109 Mo. `stripTypeScriptTypes` est expérimental en Node 24 (`engines` borne la version). Décision 12 mise à jour.
- Vérifié en local : 195 tests, `tsc`, build, 13 scénarios navigateur (S1 à S13) sur 3 passes consécutives. Chaque scénario ajouté a une mutation qui le fait échouer.
- Non fait, bloqué par une décision du propriétaire : domaine final et mécanisme de déploiement (point 8). `check-deploy` n'est donc pas câblé en CI après déploiement et le critère « `build.json` en ligne égal au sha de `main` » reste ouvert. `.htaccess` non testé sur LiteSpeed ni sur l'hébergeur réel. Un bot Hostinger poste des aperçus de PR : à exploiter pour tester le vrai hébergeur.
- Non fait : secret scanning avec push protection (réglage du dépôt, non vérifiable d'ici). Mise en page de la question d'adoption : proposition sans nouveau CSS, le propriétaire arbitre.
- Hash de build en ligne : non vérifié (aucun déploiement). Une tâche n'est pas close tant que la CI n'est pas verte sur chaque PR et que le propriétaire n'a pas validé.

## 2026-11-11 (suite) : Sprint 1 livré et vérifié en ligne, début du sprint suivant

Livraison et déploiement
- Le contenu des PR #6 à #10 était resté dans des branches de pile (chaque PR mergée dans la branche de sa base, en cascade) : seul #4 était sur `main`. Je l'ai constaté en lisant `main`, pas supposé. PR de tête #12 ouverte puis mergée par le propriétaire, CI verte.
- Premier déploiement réel de `main` (Hostinger, domaine `mindspace.brandonlazarre.fr`) : build ÉCHOUÉ, défaut de mon `build-info` (clone superficiel, erreur levée à la dernière étape ; le site restait sur un ancien déploiement de 12:48). Corrigé (#14) : il tente `git fetch --unshallow`, sinon continue. Journal Hostinger lu via le connecteur : « shallow clone and no way to fetch the rest », donc le `n` de la version en ligne est une borne basse (décision 17, compromis assumé par le propriétaire).
- Vérifié en ligne sur le commit `b2f6c3b` de `main` : CI verte (run 43), `build.json` égal au sha de `main`, `check-deploy` vert, en-têtes du `.htaccess` appliqués par LiteSpeed (CSP, `no-cache`, manifest en `application/manifest+json`). L'ancien déploiement n'avait pas les en-têtes parce qu'il datait d'avant le `.htaccess`, pas parce que LiteSpeed les ignore. Redirection HTTP vers HTTPS : contrôlée par le propriétaire (`301`), non testable depuis l'environnement (proxy HTTPS seulement). Critère de clôture du Sprint 1 rempli.
- Environnement réseau : `mindspace.brandonlazarre.fr` autorisé (seul hôte). `check-deploy` demande `NODE_USE_ENV_PROXY=1` ici (le `fetch` de Node ignore le proxy).

Sprint suivant (décisions du propriétaire), une PR chacune, toutes basées sur `main` et non empilées (leçon de la pile précédente), aucune mergée par moi
- PR-0 (#15) question d'adoption en `<dialog>` modal. PR-a (#16) garde `npm ci` : la CI l'utilisait déjà, il manquait seulement la garde (le « point 48 » n'existe pas dans le cerveau, qui ne tient pas de liste numérotée : fermé par son nom). PR-b (#17) jetons `--ms-danger` / `--ms-on-danger`. PR-c (#18) routeur minimal. PR-d (#19) chargement à la demande.
- Trouvailles : le premier test du routeur ne voyait pas la mutation de la garde (le cas de la paire de stores à moitié mise à jour n'était pas couvert) ; la cible « initial sous 300 Ko gzip » était déjà atteinte avant le découpage, et la reconstruction de l'index au démarrage ramenait le gros chunk dans le chargement de départ (séparée par une vérification légère).
- Décisions ajoutées à `03` : 17 à 20 ; 8, 13 et 16 précisées. Un push forcé sur une branche déjà mergée a été refusé par le garde-fou : branches neuves à la place.
- Hors périmètre, non attaqué (consigne) : `dexie-react-hooks` (hook maison gardé), dérivation du titre, recherche, suppression multiple, rappel 14 jours, points visuels (sprint design), `persist()`, `viewport-fit`, appareil réel, lecteur d'écran (sprint avant production). Secret scanning : activé par le propriétaire, tenu pour acquis.


## 2026-11-11 (fin) : sprint suivant mergé, deux constats de revue corrigés

État
- Mergées par le propriétaire : #15 à #19 (mindspace-core) et #15 (cerveau). Le merge de `main` dans #17 avait perdu le paramètre `danger` de `ConfirmDialog` (tsc et build rouges) : réparé avant le merge (c5ae85a), puis conflits de #19 résolus (S14 puis S15 conservés). `main` à `4fd5827` : CI verte (run 55), `build.json` en ligne = sha de `main` (version 6.11.11-1, borne basse, décision 17).
- Environnement : Node 22 passait avant Node 24 dans le PATH de la session ; 2 tests (`navigator.locks`) échouaient pour cette seule raison. Les vérifications locales utilisent `/opt/node24/bin`.

Constats de revue Codex, tous deux valides, deux PR séparées sur `main`
- #20 routeur : une recherche d'existence périmée écrasait la destination suivante (retour puis retour, ou clic pendant un retour). Compteur de navigation ; 2 tests, mutations vérifiées.
- #21 chargement à la demande : un onglet survivant à une mise à jour démontait l'app quand il demandait un chunk disparu. `LoadBoundary` + scénario S16 (16 scénarios) ; mutation vérifiée. Visuel du message à arbitrer par le propriétaire.
- Décisions 19 et 20 précisées dans `03`.

Restent ouverts
- Merge de #20 et #21 : propriétaire, après CI verte.
- Déploiement par la CI du dossier `dist/` pour une version exacte (sprint dédié) ; `stripTypeScriptTypes` expérimental en Node 24 ; Hostinger construit avec `npm install` (exception à `npm ci`).
