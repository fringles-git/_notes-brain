# 01 : Business et vision

Source : audit des 9 repos (voir `00-INDEX.md`). Aucun prix, palier, plan ou métrique d'usage n'est documenté dans aucun repo. Tout chiffre de revenu ci-dessous serait une supposition : aucun n'est donné. Les jugements sont marqués `analyse`.

## 0. Décisions du propriétaire (2026-11-10)

1. Local : 100 % gratuit, sans compte (souveraineté).
2. Compte requis pour deux familles : Cloud (sync E2E, collaboration) et API à l'usage (IA, OCR avancé, traitement lourd). Modèle : abonnement infrastructure et/ou paiement à l'usage.
3. Référence métier : `notes-v3`. Référence UI, Tiptap, Yjs : `MindSpace`.
4. Licence : propriétaire, All Rights Reserved, produit commercial.
5. Architecture MRR prévue dès maintenant. Aucun repo ne contient aujourd'hui compte, authentification, facturation, quotas ni passerelle d'API (`02`, section 1.8).

Conséquences relevées (analyse) :
- `MindSpace/LICENSE` est MIT : à remplacer. Voir `02`, section 9.
- OCR et Whisper locaux sont déjà livrés gratuits (v3, v5, aistudio). L'offre API doit vendre une qualité ou une vitesse que le local ne donne pas, sans quoi le palier A cannibalise le local.
- Le palier A est le seul à coût marginal variable : prévoir quotas, plafonds et mesure d'usage avant le premier appel d'API.
- Le chiffrement E2E contraint l'IA côté serveur : tout traitement IA sur une note exige que le client envoie le contenu en clair (ou un extrait). Il faut un consentement explicite par requête, pour ne pas contredire "souveraineté".

## 1. Verdict produit

- Revenu actuel : zéro. 112 PR, aucune ne touche à un modèle économique.
- Posture documentée : "rien n'est envoyé nulle part", pas de compte, pas de serveur (`notes-aistudio/docs/principles.md`, `notes-v6/PRODUCT.md`). Cette posture est un atout de confiance. Elle bloque aussi tout MRR.
- Analyse : un abonnement exige un service récurrent côté serveur. Toute fonction purement locale se copie, se contourne et n'a pas de coût marginal à facturer. Le MRR ne peut venir que de fonctions qui coûtent du stockage, du relais ou de la livraison.
- Analyse : l'effort des 47 PR de `MindSpace` va surtout à l'enveloppe. Au moins 18 PR portent sur SEO, découvrabilité, correctifs de déploiement Hostinger, changelog et design de Réglages : #7, #8, #9, #10, #11, #12, #13, #14, #15, #16, #17, #18, #20, #23, #24, #25, #36, #37. Aucune ne porte sur la rétention, l'acquisition mesurée ou la conversion.
- Aucune télémétrie produit. `notes-v6` mesure la capture en local seulement (`notes-v6:capture-metrics:v1`, aucun uplift revendiqué).

## 2. Positionnement documenté

| Source | Promesse |
|---|---|
| `notes-aistudio/docs/principles.md` | Capturer, organiser, retrouver, protéger. Rien n'est envoyé nulle part. |
| `notes-v3/README` | Carnet personnel hors ligne, à portée de pouce. |
| `notes-v6/PRODUCT.md` | PWA privée, installable, hors ligne, sans compte. Succès : capture en moins de deux taps, aucune perte, aucune configuration. |
| `notes-4` README | Un jeu de tokens, une surface, un dock, une carte. |
| `notepad-pwa` README | Bloc-notes hors ligne, privacy-first, pour l'écriture. |
| `MindSpace` manifest | "Notes locales et espaces de réflexion". Local-first, sans sync inter-appareils (`llms.txt`). |

## 3. Personas documentés

| Persona | Source | Détail |
|---|---|---|
| Utilisateur mobile à une main, francophone, y compris gaucher | `notes-v3` (Réglages › Main), `notes-aistudio` | Pouce, feuilles côté pouce, mode main gauche/droite. |
| Même personne sur téléphone (capture) et tablette (écriture, tri) | `notes-v6/PRODUCT.md` | Tutoiement calme. Décision ouverte : prénom codé en dur. |
| Écrivain solo | `notepad-pwa` | Minuteur d'écriture, mode focus, ambiances sonores. |
| Utilisateur soucieux de vie privée | tous | Coffre, sauvegarde chiffrée. |
| Persona de `MindSpace` | `non documenté` | README vide. |

Aucun repo ne documente de test utilisateur, d'entretien, d'étude de marché ou de segmentation payante.

## 4. Fonctions candidates à un modèle payant

Colonnes : `Serveur` = nécessite une infrastructure récurrente. `MRR` = potentiel `analyse`, sans montant.

| Fonction | État | Où | Serveur | MRR | Lecture |
|---|---|---|---|---|---|
| Sync chiffrée de bout en bout entre appareils | `shipped` (moteur, écran, conflits) via un dossier choisi par l'utilisateur. Adaptateurs Dropbox / Drive : `described only` | `notes-v3` #17, #18, #20, `docs/future.md` | Non aujourd'hui | Élevé si relais géré | Killer candidat n°1. Aujourd'hui l'utilisateur apporte son propre transport (Nextcloud, Syncthing, iCloud Drive) : revenu nul. Limites : Chromium seulement (pas d'iPhone), notes masquées exclues. |
| Collaboration chiffrée en temps réel (salles Yjs) | `described only` | `MindSpace/docs/COLLABORATION_MIGRATION.md` | Oui (signalisation, relais) | Élevé | Seule la convergence Yjs locale est testée. Aucun transport. Pas de revendication E2EE autorisée (refusé en MindSpace #8). |
| Rappels qui sonnent app fermée | `shipped` en `.ics` global. Push serveur : `described only` | `notes-v3` #21, `docs/future.md` | Oui pour le push | Moyen | Les Notification Triggers ont été retirés de la plateforme (#21). Le `.ics` est gratuit et suffisant en l'état. |
| Sauvegarde chiffrée (`.enc`, phrase de récupération 128 bits) | `shipped` | `notes-v3` #12, `notes-v5` #12, `notes-v6` #1 | Non | Faible en l'état | Fonction de confiance, à garder gratuite. Payant seulement sous forme de sauvegarde planifiée hébergée (inexistante). |
| Ranger : doublons, tâches sans case, étiquettes TF-IDF | `shipped` | `notes-v3` #6, #7, #13 | Non | Faible à moyen | Absent de v5, v6, MindSpace. Bon aimant de démonstration. Contrôle de licence local contournable. |
| OCR, transcription Whisper, import PDF/EPUB | `shipped` | `notes-v3`, `notes-aistudio`, `notes-v5` | Non | Faible | Bibliothèques lourdes chargées à la demande. Coût marginal nul pour vous, donc argument de vente faible. |
| Coffre biométrique (PIN, WebAuthn PRF), notes masquées | `shipped` | `notes-v3` #4, `notes-aistudio` | Non | Faible | Confiance. Gratuit. |
| Exports riches (ZIP Obsidian, PPTX, DOCX, PDF, Markdown enrichi) | `shipped` | `notes-v3`, `notepad-pwa`, `MindSpace` #35 | Non | Faible | Possible gating "Pro", fragile. |
| Serveur MCP public et WebMCP | `shipped`, informations produit seulement, lecture seule | `MindSpace` #8, #9 | Oui (déjà hébergé) | `non documenté` | N'accède à aucune note. Un MCP authentifié sur les notes de l'utilisateur n'existe pas et contredirait le local-first sans sync. Hypothèse à tester, pas un acquis. |
| Modèles (Réunion, Projet, Journal), blocs rapides | `shipped` | `MindSpace` #38, #42, `notes-v6` #2, `notes-v3` | Non | Faible | Contenu gratuit. Packs payants non justifiés. |
| Historique de versions | `shipped` (10 versions par note) dans v3. Bouton désactivé dans MindSpace | `notes-v3`, `MindSpace` | Non | Faible | Devient payant seulement synchronisé. |

## 5. Modèle freemium : hypothèse de travail à valider (aucun prix)

- Gratuit : tout le local (édition, recherche, exports, sauvegarde chiffrée, coffre, Ranger).
- Payant (récurrent) : ce qui coûte de l'infrastructure.
  1. Relais de sync chiffrée géré, y compris iPhone et Safari.
  2. Salles de collaboration chiffrées.
  3. Rappels push app fermée.
  4. Sauvegarde cloud planifiée.
- Dépendance bloquante `analyse` : aucune couche d'identité, de facturation ou de stockage n'existe dans les 9 repos. Toute offre payante impose un compte, ce qui contredit "sans compte". Piste : compte facultatif, clés de chiffrement côté client, serveur aveugle. La cryptographie de `notes-v3` (`crypt.ts`, `sync.ts`) est la base réutilisable.
- Contraintes à lever avant tout code : licence de `notes-v3` et `notes-v5` (aucun LICENSE trouvé), choix du repo de base (section 7), identité facturation.
- Disposition à payer, taille de marché, coût d'infrastructure par utilisateur : `non documenté`. Rien à extrapoler.

## 6. Code sans modèle économique (à rejeter ou geler)

- Réécritures SvelteKit `notes-svelte` et `notes-4` : écartées par `notes-aistudio/docs/future.md` ("SvelteKit is not a fit"). Geler.
- Polissage de l'enveloppe de `MindSpace` (liste en section 1) : n'ajoute ni rétention ni revenu mesurable. Pas de nouvelle PR de ce type sans hypothèse chiffrée.
- Dépendances de scaffold inutilisées (Radix, Tailwind, recharts dans `notes-v5` ; `vite-plugin-pwa`, `shadcn-svelte`, `svelte-lexical` dans `notes-v6`, non vérifiées) : coût sans valeur.
- Gestes, looks supplémentaires et variantes de thème tant que le choix du repo de base n'est pas fait.

## 7. Zéro redondance : fonctions qui existent déjà

Règle : avant d'écrire une fonction, la chercher ici. Porter plutôt que réécrire, sous réserve de licence.

| Fonction | Où elle existe | Réimplémentée ailleurs |
|---|---|---|
| Sync chiffrée par dossier, vecteurs de version, conflits | `notes-v3` | Non portée (MindSpace : "ne pas copier, concevoir un pont Yjs") |
| Sauvegarde chiffrée `.enc` (AES-256-GCM, phrase 28 signes) | `notes-v3` `crypt.ts`, `notes-v5` portable-import | `notes-v6` : AES-GCM avec passphrase, format différent. MindSpace : absente |
| Import avec aperçu et choix de conflit | `notes-v5` #12, `MindSpace` #34 | Deux implémentations |
| Recherche multi-mots sans accents | `notes-v3` #10 | Réécrite dans `MindSpace` #45 pour cause de licence |
| Ranger (doublons Jaccard/MinHash) | `notes-v3` seul | Absent ailleurs |
| Tableaux dans l'éditeur | `brandonlazarre` #14, `notes-v5`, `MindSpace` (Tiptap table) | Trois fois |
| Modèles de note | `notes-v3`, `notes-v6` #2, `MindSpace` #38 | Trois fois |
| Capture rapide sans titre | `notes-v6`, `MindSpace` #40 | Deux fois |
| Corbeille | `notes-v3` (30 jours), `notes-v6` (`deletedAt`), `notes-v5` (incluse dans l'import) | `MindSpace` : suppression irréversible |
| Historique de versions | `notes-v3` (10 versions) | `MindSpace` : désactivé |
| Export `.ics` | `notes-v3` #21 (global), `notes-v5` (par note) | |
| i18n FR/EN | `notes-v3` #22 (193 clés, anglais masqué) | `notes-v6` : jugé prématuré |
| Stockage transactionnel (CAS de révision, Web Locks, UUID) | `notes-v5` #10 | Absent de v3 et MindSpace |
| Découvrabilité, MCP, `llms.txt` | `MindSpace` | |

## 8. Recommandation consolidée (le choix reste le vôtre)

- Base de code : `MindSpace` est le dernier repo actif et déployé (version 6.11.7-7), avec Tiptap + Yjs, seule base compatible avec une collaboration future. `notes-v3` est la mine de fonctions commercialisables (sync, `.enc`, Ranger) mais sans licence trouvée et sans Yjs.
- Ordre de valeur `analyse` : 1) relais de sync chiffrée géré, 2) salles Yjs chiffrées, 3) push de rappels. Tout le reste reste gratuit.
- Condition préalable : une décision explicite sur le compte facultatif et la facturation, avant la moindre ligne de code serveur.
- Décisions visuelles (looks, couleurs, disposition) : à vous. Rien dans ce fichier n'en propose.

## 9. Questions ouvertes pour vous

Questions 1 à 3 tranchées le 2026-11-10 (section 0). Restent ouvertes :

1. Compte facultatif acceptable malgré "sans compte" ?
2. Repo de base : `MindSpace` ou `notes-v3` ?
3. Licence de `notes-v3` et `notes-v5` : à publier ou à tolérer en privé seulement ?
4. Marché et canal d'acquisition visés : `non documenté` partout.
5. Hébergement du relais : Hostinger Node suffit-il pour du relais chiffré ?
