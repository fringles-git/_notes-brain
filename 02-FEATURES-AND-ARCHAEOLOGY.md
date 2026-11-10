# 02 : Fonctionnalités et archéologie

Audit du 2026-11-10. Sources : lecture des 9 repos (README, docs, `package.json`, SW, 112 PR, branches). Inventaire seulement : aucun correctif, aucune décision visuelle.

## 0. Cadrage et décisions (2026-11-10)

- Référence métier absolue : `notes-v3` (sync, crypto, Ranger, rappels, i18n).
- Référence UI et éditeur : `MindSpace` (Tiptap 3.32, Yjs 13, Dexie 4).
- Local : 100 % gratuit, sans compte.
- Compte requis pour : fonctions Cloud (sync E2E, collaboration) et fonctions à consommation d'API (IA, OCR avancé, traitement lourd). Abonnement infrastructure et/ou facturation à l'usage.
- Licence cible : propriétaire, All Rights Reserved. Écart constaté : voir section 9.

Légende des statuts : `S` shipped, `E` experimental, `D` described only, `—` absent, `?` non documenté.
Légende `Cible` : `L` local gratuit, `C` Cloud (compte), `A` API à l'usage (compte).

## 1. Matrice des fonctionnalités

Colonnes : v3 = `notes-v3` (inclut `brandonlazarre` pour les builds), MS = `MindSpace`, v5 = `notes-v5`, v6 = `notes-v6`, AI = `notes-aistudio`. Les repos `notepad-pwa`, `notes-svelte`, `notes-4` n'apparaissent que si une ligne les concerne (voir section 1.9).

### 1.1 Capture et édition

| Fonction | v3 | MS | v5 | v6 | AI | Cible | Preuve / note |
|---|---|---|---|---|---|---|---|
| Éditeur riche | S (Markdown maison) | S (Tiptap + Yjs) | S (Tiptap 3.33) | S (aperçu Markdown) | S | L | v3 `markdown.ts`, MS #21, v5 #14 |
| Tableaux | S | S | S (GFM) | — | ? | L | `brandonlazarre` #14 ; MS table + alignement |
| Capture rapide sans titre, brouillon récupérable | S (raccourcis `?new=note,list,voice,today`) | S | — | S (commit direct `c2701fc`, métriques locales E) | S, retirée (QuickCapture "unmounted") | L | MS #40 ; v6 `docs/capture-experiment-2026-11-02.md` |
| Note vocale + transcription Whisper locale | S | — | S | — | S | L | WASM chargé à la demande depuis `public/vendor` |
| OCR local (Tesseract) | S | — | S | — | S | L | idem |
| Import PDF / EPUB / Markdown | S | partiel (Markdown/TXT en texte brut, S) | S | — | S | L | MS #32 ; import structuré MS #43 annulé par #44 |
| Modèles | S (6 ; 2 en avant) | S (3 : Réunion, Projet, Journal) | S (6) | S (5 + perso + snippets) | S | L | MS #38 ; v6 #2 ; v3 #2/#3 |
| Blocs rapides (Actions, Décision, Point de réunion) | — | S | — | — | — | L | MS #42 |
| Listes, cases, onglet Tâches | S | S (stockage localStorage) | S | S (kind task) | S | L | v3 #14 |
| Propriétés, entités, `@mentions`, `+ action`, vues À faire / Aujourd'hui / En retard | — | — | — | — | S | L | AI PR #1 (40 fichiers) |
| Cartes de révision `Question :: Réponse` (Leitner) | S | — | S | — | S | L | |
| Carte des liens `[[ ]]` | ? | — | — | — | S | L | |
| Lien de note sans serveur `#n=` | S | — | S | — | S | L | |
| QR code (génération, scan) | ? | — | — | — | S | L | AI commit `6dbe911` |
| Gestes tactiles | S (`gestures.ts`, 16 Ko) | — | — | — | S | L | MS matrice : réimplémenter avec alternative clavier |

### 1.2 Organisation et recherche

| Fonction | v3 | MS | v5 | v6 | AI | Cible | Preuve / note |
|---|---|---|---|---|---|---|---|
| Dossiers, collections, étiquettes | S | tags S, dossiers ? | S (renommage atomique #13) | S | S | L | |
| Épingles, favoris | S | S | S | S | S | L | |
| Recherche multi-mots sans accents | S (`search.ts`) | S (`noteSearch.ts`) | — | ? | S | L | v3 #10 ; MS #45 réécrite indépendamment |
| Ranger : doublons MinHash/LSH (Jaccard ≥ 0,6), même titre, tâches sans case, étiquettes TF-IDF | S (`tidy.ts`) | — | — | — | S | L ou C | v3 #6, #7, #13 ; absent des autres |
| Ranger C3 (sujets vers collection), C4 (Résumer) | D | — | — | — | — | A (Résumer) | v3 #7 |
| Notes masquées / coffre (PIN, Face ID, WebAuthn PRF) | S (`vault.ts`) | champ `hidden`, sans chiffrement E | S | — | S | L | MS `db.ts` |
| Corbeille | S (30 jours) | — (suppression irréversible) | S | S (`deletedAt`, sans purge) | S | L | |
| Historique de versions | S (10 par note) | E (bouton désactivé) | ? | — | S | L ou C | MS : l'historique Yjs n'est pas sauvegardé |
| Undo ciblé de liste + fusion en nouvelle note | — | — | S | S (annulation de conversion) | — | L | v5 #13 |

### 1.3 Données, sauvegarde, sync

| Fonction | v3 | MS | v5 | v6 | AI | Cible | Preuve / note |
|---|---|---|---|---|---|---|---|
| Stockage | IndexedDB brut `NotesAppDB` v1 | Dexie `mindspace` v1 + un Y.Doc par note (`y-indexeddb`) | Dexie, écritures transactionnelles (CAS de révision, Web Locks, UUID) | IndexedDB natif `notes-v6` v3 | IndexedDB | L | |
| Export JSON | S | S (v1 `mindspace-local-export`) | S | S (v2) | S | L | MS #31 |
| Sauvegarde chiffrée `.enc` (AES-256-GCM, blocs 1 Mio, phrase 128 bits en 28 signes) | S (`crypt.ts`) | — | S (`notes-portable/2`) | S (AES-GCM, PBKDF2 600k, format distinct) | S | L | v3 #12 ; v5 #12 ; v6 #1 |
| Import avec aperçu, choix `mine/theirs/both`, copie avant import | S | S (copies indépendantes, 16 Mio, 5000 éléments) | S (64 Mio) | S (validation totale avant écriture) | S | L | MS #34 |
| Snapshot technique complet | — | — | S (`.notes-snapshot`, non chiffré) | — | — | L | v5 #11 |
| Export Markdown / ZIP Obsidian | S | S (enrichi, #35) | S | S (MD, HTML) | S | L | |
| Export PPTX | S | — | S | — | S | L | |
| Rappel de sauvegarde (14 jours) | S | — | — | — | S | L | |
| Sync E2E par dossier (File System Access), vecteurs de version, tombstones 90 jours | S (`sync.ts` 14 Ko, `syncApp.ts`, `syncApply.ts`) | — | D | — | S | C | v3 #17, #18 ; Chromium seulement ; notes masquées exclues |
| Conflits : deux textes gardés, comparaison ligne à ligne | S (`diff.ts`) | — | — | — | — | C | v3 #20 |
| Relais Cloud géré (stockage et transport hébergés) | — | — | — | — | — | C | Aucun repo. Adaptateurs Dropbox / Drive / WebDAV : `D` (v3 `docs/future.md`) |
| Collaboration temps réel (salles Yjs chiffrées) | — | D (seule la convergence locale est testée) | — | — | — | C | MS `docs/COLLABORATION_MIGRATION.md` |
| Compte, authentification, facturation, quotas | — | — | — | — | — | C, A | Aucun repo |

### 1.4 Rappels et agenda

| Fonction | v3 | MS | v5 | v6 | AI | Cible | Preuve / note |
|---|---|---|---|---|---|---|---|
| Rappels dans l'app (onglet ouvert, boucle 30 s) | S | — | S | S (échéance locale) | S | L | |
| Export `.ics` de tous les rappels | S | — | par note S | — | S | L | v3 #21 |
| Push serveur app fermée | D | — | — | — | D | C | Notification Triggers retirés de la plateforme (v3 #21) |
| Aujourd'hui, Agenda (mois / semaine / liste) | — | — | S | — | — | L | v5 #15 |
| Web Share Target | S | — | déclaré, non géré par le SW (cassé) | — | S | L | v5 `storage-migration.md` |
| Raccourcis d'icône (note, liste, vocal, note du jour) | S | — | S | — | S | L | |

### 1.5 IA et API (cible nouvelle)

| Fonction | État dans les repos | Cible |
|---|---|---|
| IA générative, résumé, transcription cloud, OCR avancé, traitement lourd | `—` partout. Ranger C4 "Résumer" : `D`. Aucun appel d'API tierce, aucune clé, aucun proxy. | A |
| OCR et Whisper locaux | `S` en v3, v5, AI. Gratuits et sans compte. | L |
| Étiquettes TF-IDF locales | `S` v3 | L |

Point à trancher (section 10) : le local déjà livré concurrence l'offre API. La valeur payante doit être une qualité ou une vitesse que le local ne fournit pas.

### 1.6 Plateforme, agents, i18n

| Fonction | v3 | MS | v5 | v6 | AI | Cible | Preuve / note |
|---|---|---|---|---|---|---|---|
| Pages publiques sans JS, `robots.txt`, `llms.txt`, `sitemap`, Markdown négocié | — | S | — | — | — | L | MS #7, #8, #9 |
| Serveur MCP public (`POST /mcp`, lecture seule, informations produit) | — | S | — | — | — | — | Ne lit aucune note. Pas de limitation de débit |
| WebMCP `mindspace_public_info` | — | E | — | — | — | — | `agentTools.ts`, dépend de `navigator.modelContext` |
| i18n FR / EN | E (193 clés, anglais masqué `READY=false`, 374 chaînes en dur) | — | — | rejeté (prématuré) | E (`?lang=en`) | L | v3 #22 ; garde-fou `tests/i18n.mjs` |
| Thèmes / looks | Verre, Papier, Acrylique | clair, sombre, lilas | Soft Glass Pro, Paper and Ink | système, clair, sombre ; ambre, lilas | Verre, Acrylique, Papier | L | section 3 |
| Mode main gauche / droite | S | — | — | — | S | L | |
| Changelog / Quoi de neuf / Versions | S (`changelog.ts`) | S (timeline, permaliens) | S | S | S | L | |

### 1.7 Écart de la cible (v3 métier vers MS)

Ce que `MindSpace` n'a pas et que `notes-v3` livre : crypto de sauvegarde, sync, conflits, Ranger, corbeille, historique, notes masquées, rappels et `.ics`, recherche déjà réécrite, OCR, Whisper, cartes de révision, partage de lien, gestes, i18n, share target, mode main.
Ce que `MindSpace` a et pas `notes-v3` : Tiptap + Yjs, import avec aperçu #34, blocs rapides, serveur Node, MCP, découvrabilité, rail repliable (iPad), changelog à permaliens.

### 1.8 Absent partout (à construire, aucune source à porter)

Compte, authentification, facturation, quotas, relais Cloud, collaboration réseau, push serveur, passerelle d'API, IA, journalisation d'usage.

### 1.9 Repos plus anciens (pas de croisement)

- `notepad-pwa` : `S` minuteur d'écriture, 8 ambiances WebAudio, snapshots (12), export TXT/HTML/PDF/DOCX. Aucun import. Fichiers permutés à HEAD (voir `00-INDEX.md`).
- `notes-svelte` : `S` CRUD, épingle, 4 couleurs, archive, recherche, thème. `E` menu rapide à appui long (doublon). `D` checklist PWA du README.
- `notes-4` : `S` CRUD, épingle, dossiers, recherche, thème. `D` Réglages Langue et Version désactivés.

## 2. Navigation

| Repo | Modèle |
|---|---|
| v3 | Dock de 4 : Notes · Tâches · Bibliothèque · Réglages. Barre du haut : recherche, Filtrer et trier, Apparence rapide. Réglages en routes de hash `#/reglages/<section>`. Feuilles et volets côté pouce. Écran large ≥ 64 em : vue scindée. |
| MS | Routes React Router : `/`, `/settings/{aide,apparence,donnees,confidentialite,a-propos}`, `/settings/a-propos/{quoi-de-neuf,versions,releases/:version}`. Mobile < 768 px : liste, puis note, barre basse (Notes, Créer, Tâches). iPad 768-1199 : rail gauche, droite ou bas. Desktop ≥ 1200 : sidebar. |
| v5 | 4 destinations : Aujourd'hui · Notes · Agenda · Bibliothèque. Barre du bas 48 px (mobile), barre latérale 52 px (≥ 48 em), FAB 58 px. Aucun routeur, état dans le store. |
| v6 | Routes prérendues `/`, `/settings/`, `/about/`. Note ouverte via `?note=id`. Sidebar desktop, rail 72 px (761-1100), dock mobile ≤ 760. |
| AI | Idem v3 : `state.page` Zustand, Réglages en hash, feuilles (`LayerHost`, `SheetHost`). |
| notes-4 / svelte | État `activeView` / `activeTab` (notes, library, search, settings). Pas de routes. |
| notepad-pwa | Page unique à 3 colonnes. |

## 3. UI / UX (inventaire, pas de recommandation)

| Repo | Looks | Couleurs | Typographie | Onboarding | Notes UX / tests |
|---|---|---|---|---|---|
| v3 | Verre (défaut), Papier, Acrylique | Fond `#eef0f6` / `#08090c`, carte `#fff` / `#1a1b20`, encre `#16171b` / `#f2f3f7`, ambre `#f4c542` (créer, épingler), abricot `#f59e5b`, lilas `#b9a2f5`, sélection `#0062cc` / `#0a84ff`, danger `#d70015` / `#ff6961`, succès `#1e7a35` / `#40a970`. Papier : `#f7f4ec` / `#121110` | Figtree variable. Échelle 12 / 13,5 / 15 / 16 / 17 / 21 / 26 / 30-38 px. Rayon = hauteur ÷ 3 | Welcome + Tour 5 étapes, 7 astuces, 4 démarrages, aucune note d'exemple | Dock 52 px, boutons 44, "+" 52. `tests/smoke.mjs` (TAP-01..03, DOCK-360, SYNC-01, CONFLICT-01, ICS-01, I18N-01, LOOK-01, RNG-01), `contrast.mjs` (892 paires). Lighthouse mobile local : Perf 83-95, A11y 100, BP 100, SEO 91 |
| MS | clair, sombre, lilas, verre opt-in (`.ms-glass`) | Fond `#faf9f6`, texte `#1a1a1a`, ambre `#f4c430`, lilas `#b99ff5`, danger `#b3261e`, focus `#7e52e8`. Sombre `#121316` / `#f5f5f7`. Dérive : `@theme` hérité canvas `#111827`, accent `#818cf8`, manifest `#111827` | `system-ui`, aucune webfont. Rayons 8 / 16 / 24 / 30 / 32 / pill. Motion 150 / 220 ms | `non documenté` | 78/78 Playwright à 390 / 834 / 1440 (#27). axe-core, cibles 44 px, piège de focus, forced-colors, reduced-transparency. INP < 200 ms visé, non mesuré. Playwright ne tourne plus sur les PR |
| v5 | Soft Glass Pro (défaut), Paper and Ink | SGP : `#f4f5f8` / `#0b0c0f`, carte `#fff` / `#17181d`, accent `#f4c542`, sélection `#0062cc`. P&I : `#f7f4ec` / `#121110`, accent `#f2b632`, sélection `#2f5bd3` | Sora 700 + Manrope 500 ; Instrument Serif 400 + Work Sans 500. Types 12 / 14 / 16 / 19 / 23 / 33 | Welcome + Tour hérités, sans notes d'exemple | Primitif unique `.ctl` (34 / 44 / 48 / 58). Règle : aucun hex ni z-index numérique. Chromium 153 avec fixtures, rien sur Android ou iPad |
| v6 | "Mind Space" (nom historique "The Quiet Desk", une seule lampe ambre) | Canvas `#f5f4ef`, surface `#fffefa`, ink `#242623`, ambre `#f4c430`, lilas `#b99ff5`. Sombre `#171918` / `#202321` | Figtree 15 px, JetBrains Mono (versions, code), Literata (mode papier). Rayons 8 / 12 / 20. Contrôles 52 / 44, navigation 60 / 44 | 3 étapes sur `main` ; carte unique et état zéro dans `feat/onboard-distill` (non mergé) | Contraste muté ≥ 7,52:1, bordures ≥ 3,20:1. Rendus 390 / 1280 px seulement. Prénom du greeting codé en dur (décision ouverte) |
| notes-4 | clair, sombre | `#f3f4f6`, accent `#f4c542`, sélection `#1d4ed8` | Inter | aucun | dock 52, FAB 60 |
| notes-svelte | clair, sombre | `#F7F3EE`, accent `#D9A35A` | Manrope | aucun | FAB 76, `prefers-reduced-motion` respecté |
| notepad-pwa | clair, sombre | `#f3f7ff` / `#090d18`, primaire `#2563eb` | Inter | aucun | effet verre, grille 295 / 1fr / 290 |

Constat de continuité : l'ambre `#f4c4xx` est le signe commun de v3, notes-4, v5, v6 et MS. Les choix visuels restent les vôtres.

## 4. Flux de données local-first

| Repo | Base | Chiffrement | Sync | Particularités |
|---|---|---|---|---|
| v3 | IndexedDB `NotesAppDB` v1 (`notes`, `prefs`), pièces jointes Blob | Coffre PIN / Face ID ; sauvegarde `.enc` ; sync chiffrée | Dossier utilisateur, vecteurs de version | Corbeille 30 j, 10 versions, rappel de sauvegarde 14 j |
| MS | Dexie `mindspace` + Y.Doc par note | Aucun | Aucune | Attend `whenSynced` avant montage ; miroir `editorJson` dans Dexie ; tâches en localStorage ; effacer tout supprime aussi les bases Yjs |
| v5 | Dexie `NotesAppDB` natif v2, UUID v4 | Sauvegarde portable `.enc` ; snapshot non chiffré | Aucune | File d'écritures, verrou Web Locks, CAS ; retour à l'ancien build non supporté ; limites 64 Mio en mémoire |
| v6 | IndexedDB `notes-v6` v3, un store `entries` | Fichier exporté AES-GCM | Aucune | Pièces jointes en data URL ; localStorage pour les préférences |
| AI | IndexedDB `NotesAppDB` v1 | Coffre ECDH P-256 + AES-GCM ; `.enc` | Dossier local | Idem v3 |
| notes-4 | localStorage `notes-4-state` | — | — | 2 notes de démonstration |
| notes-svelte | Dexie `quick-notes-db` | — | — | |
| notepad-pwa | localStorage `notepad-pwa-*` | — | — | 24 notes, 12 snapshots, aucun import |

## 5. PWA

| Repo | Stratégie SW | Caches | Mise à jour | Repli hors ligne | Manifest | Installation |
|---|---|---|---|---|---|---|
| v3 / AI | Navigation : cache d'abord, rafraîchie en arrière-plan (code). Le reste : stale-while-revalidate. `vendor/extra` : cache d'abord. Non-2xx jamais mis en cache | `notes-<BUILD>`, `notes-share`, `notes-extras` | Pas de `skipWaiting` : toast "Nouvelle version disponible · Recharger" | Shell en cache, pas de page dédiée | standalone, `background_color #EEF0F6`, sans `theme_color` (retiré, #10), 4 raccourcis, `share_target` POST | Réglages › Application |
| MS | Navigation : réseau d'abord, repli `/index.html`. `/assets/` et shell : cache d'abord | `mindspace-static-v2` (60 entrées max) | `skipWaiting` + `clients.claim`. Enregistré en production seulement | Repli `/index.html` | standalone, fond et thème `#111827`, PNG 192 / 512 `any maskable` | Réglages + CTA "Installer" dans la navigation (#39) |
| v5 | Précache de tous les assets. Navigation : réseau d'abord, repli index. Reste : cache d'abord | `notes-v5-<12 hex>` | Message `skip-waiting`, toast, `updateViaCache:'none'`, revérification à la visibilité | Repli `./index.html` | `theme_color #EEF0F6` (≠ `index.html`), `share_target` non géré | `beforeinstallprompt`, détection iOS, `persistStorage` en standalone |
| v6 | Shell : cache d'abord. Assets connus : SWR. Précache atomique | `notes-v6-shell-<v>`, `notes-v6-assets-<v>` | Pas de `skipWaiting`, pas de `clients.claim` | `Response.error()`, pas de page offline | standalone, portrait-primary, fond `#f6f4ef`, thème `#f4c430` | Après ≥ 3 notes, éditeur fermé ; "Plus tard" = 30 jours. Testé avec événements simulés seulement |
| notes-4 | Cache d'abord (shell `/`, manifest, icône), purge des anciens, `skipWaiting` + `clients.claim` | `notes-pwa-${version}` | automatique | `Response.error()` | standalone, portrait, `lang fr` | aucun bouton |
| notes-svelte | `vite-plugin-pwa` autoUpdate, `navigateFallback /index.html` | workbox | automatique | `/index.html` | standalone, portrait, icônes SVG | aucun bouton |
| notepad-pwa | Cache d'abord (SW cassé à HEAD) | `notepad-pwa-v2` | — | `/index.html` | standalone, icône SVG 64 px | bouton Install (`beforeinstallprompt`) |

Contradictions documentaires : `docs/pwa-baseline.md` (v3, AI) dit "network-first" alors que le code est cache d'abord ; `roadmap.md` (v5) dit "offline non porté" alors que le SW existe depuis #9 ; `DISCOVERABILITY.md` (MS) dit qu'aucun MCP n'existe.

## 6. Archéologie : rejets, annulations, branches non intégrées

| Élément | Résultat | Raison documentée |
|---|---|---|
| `notes-v3` #19 : assets hachés cache-first, `.htaccess` immutable | Fermée sans merge, 19 s après #21, `dirty` | `non documentée` ; la fonction n'est pas dans `main` |
| `MindSpace` #43 (import Markdown structuré) puis #44 (revert) | Revert mergé 2 min après | `non documentée` ; #43 disait Playwright non exécuté ; `markdownImport.ts` (180 lignes) supprimé ; `changelogData.ts` annonce encore la fonction |
| `MindSpace` #19 BlockNote vers #21 Tiptap | Remplacé | "BlockNote menus conflict with Tailwind and virtual keyboards" ; `blocksJson` conservé pour le rollback |
| `MindSpace` #30, #6 | Fermées à la main | `non documentée` |
| `notes-4` #2, #3 ; `notes-4` #4 et `notes-v5` #16 ouvertes | TS 7 bloqué | peer deps de Kit 3 (`^6`) et de typescript-eslint (`<6.1.0`) |
| `notes-v6` : `fix/system-theme-editor` (`77ff372`), `feat/onboard-distill` (`ac3fbc7`), `feat/quiet-home-filters` (`7f35142`), `feat/typeset-polish` (`d665efc`) | Jamais mergées, pile linéaire | `docs/branch-cleanup.md` : `typeset-polish` chevauche des correctifs, ne pas merger en bloc. `main` contient encore `DashboardOverview.svelte` |
| Réécritures Svelte (`notes-svelte`, `notes-4`, `notes-v6`) | Écartées ou isolées | `notes-aistudio/docs/future.md` : "SvelteKit is not a fit" ; un rewrite ne remplace l'app qu'après la même suite smoke |
| `notes-v3` : Web Speech API, MiniSearch / FlexSearch, merge par horloge, PIN pour l'export masqué | Refusés | audio vers serveur ; inutiles ; vecteurs de version ; PIN contournable hors ligne |
| `notes-v5` : TanStack Start / Nitro, `spa:{}`, y-dexie, comark-tiptap, ancien import JSON | Retirés ou non retenus | hydratation React #418 ; périmètre |
| `notes-v6` : Dexie / idb, Web Worker, i18n, sync | Reportés | "prématuré" (`docs/architecture-audit.md`) |
| `MindSpace` : copie du code `notes-v3` et `notes-v5` | Refusée, recherche réécrite (#45) | pas de LICENSE trouvé (`docs/notes-search-integration-2026-11-07.md`, voir section 9) |
| `brandonlazarre` #2 : second gestionnaire clavier de `notes-pwa` | Écarté | doublon avec `gestures.ts` ; touche N ouvrait le menu Créer |
| Actions `startup_failure` sur 25 exécutions (`brandonlazarre`) | Non résolu | cause externe au YAML |
| `notes-4` : 5 commits à fichiers mal placés | Corrigé par #1 | build Hostinger rouge jusqu'au correctif |

## 7. Branches et déploiements

- Source : `notes-v3/main`, `MindSpace/main`, `notes-v5/main`, `notes-v6/main`, `notes-aistudio/main`.
- Build seul : `brandonlazarre/notes-site` (26.10.15.1), `notes-v3-site` (×2 repos), `notes-v5-site`.
- Hostinger tire les branches `*-site` (v3, v5) ; MindSpace est une app Node (preset Express, `hostinger.mjs`, `postinstall: npm run build`).
- Domaine live v3 non tranché : `notes.` ou `notes-v3.` (`brandonlazarre` #14).

## 8. Plan de portage inventorié (v3 vers MS), risques repris de MS #31

| Fonction v3 | Fichiers v3 | Destination MS | Risque | Dépendance compte / API |
|---|---|---|---|---|
| Sauvegarde chiffrée `.enc` | `crypt.ts` (6 Ko) | Réglages › Données | élevé | non |
| Notes masquées / coffre | `vault.ts` (9 Ko), `db.ts` | champ `hidden` existant sans chiffrement | élevé | non |
| Import avec conflits | `features.ts`, `storage.ts` | déjà #34 (aperçu) ; ajouter choix de conflit | moyen | non |
| Sync E2E | `sync.ts` (14 Ko), `syncApp.ts`, `syncApply.ts`, `diff.ts` | pont Yjs à concevoir | très élevé | oui (relais géré) |
| Ranger | `tidy.ts` (11 Ko) | liste Notes, entrée Bibliothèque | moyen | non ; "Résumer" = API |
| Rappels, `.ics` | `ics.ts`, `features.ts` | rappels et export global | moyen | push = oui |
| Corbeille, historique | `actions.ts`, `db.ts` | suppression récupérable (la restauration Dexie seule perdrait l'historique Yjs) | élevé | historique cloud = oui |
| Médias (OCR, Whisper, PDF) | `media.ts` (17 Ko), `public/vendor` | import | moyen | OCR avancé / transcription cloud = API |
| i18n | `i18n.ts`, `locales/`, `tests/i18n.mjs` | tout le texte de l'app | moyen | non |
| Gestes | `gestures.ts` (16 Ko) | React + alternative clavier | moyen | non |

Incompatibilité de modèle (analyse) : v3 stocke des notes Markdown comme objets avec vecteurs de version ; MS stocke des documents Yjs. La sync de v3 ne se branche pas telle quelle.

## 9. Licence : état réel vs décision

- Décision : propriétaire, All Rights Reserved.
- `MindSpace/LICENSE` : MIT, "Copyright (c) 2026 MindSpace contributors" (PR #5). Contradiction directe. Le repo est privé. Toute copie déjà distribuée sous MIT reste sous MIT.
- `notes-v3`, `notes-v5` : aucun fichier LICENSE. Sans licence, le droit d'auteur par défaut réserve les droits. `notes-v5` est public : code lisible, non réutilisable.
- Repos publics : `notepad-pwa`, `notes-svelte`, `notes-4`, `brandonlazarre`, `notes-v5`. `notepad-pwa/LICENSE` contient le texte du README ("License: MIT"), pas une licence valide.
- Obstacle de porter v3 vers MS levé par le propriétaire : MS #45 avait réécrit la recherche faute de LICENSE (`docs/notes-search-integration-2026-11-07.md`). Le même auteur peut désormais réutiliser son code.
- Mentions tierces à conserver dans un produit commercial : crédits des bibliothèques (changelog `CREDITS` v3 : pdf.js, Tesseract, PptxGenJS, Whisper/Transformers). Leurs licences propres restent à vérifier, `non documenté`.

## 10. Questions ouvertes

Tranchées le 2026-11-10 :
1. `MindSpace/LICENSE` (MIT) remplacé par All Rights Reserved, PR dédiée. Détail : `03`, section 9.1.
2. `notes-v5`, `notes-4`, `notes-svelte`, `notepad-pwa`, `brandonlazarre` passent en privé après l'audit. Détail : `03`, section 9.2.
3. OCR et Whisper locaux restent gratuits. L'API vend vitesse, batterie / stockage et modèles plus lourds. Le résumé et toute fonction IA exigent le consentement explicite à l'envoi en clair (`03`, section 8.3).
4. Sync : transport par dossier d'abord, relais géré payant ensuite, pas d'infrastructure serveur avant validation de l'usage local.

Restent ouvertes :
5. Fournisseur d'IA, passerelle d'API, facturation, identité légale du titulaire : `non documenté`.

## 11. Limites

- Pas de lecture des lockfiles, pas d'exécution de l'app, pas de hash de build en ligne vérifié.
- Les cases `?` sont des points non trouvés dans les docs lues, pas des absences prouvées.
- `MindSpace/src/pages`, `components`, `hooks`, `layouts` et `notes-v3/src/ui` n'ont pas été parcourus fichier par fichier.
