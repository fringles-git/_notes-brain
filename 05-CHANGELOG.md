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
