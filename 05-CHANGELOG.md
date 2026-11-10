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
