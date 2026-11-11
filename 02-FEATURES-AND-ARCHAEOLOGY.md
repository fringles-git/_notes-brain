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

## 11. Archéologie Git (Solutions abandonnées)

Passe du 2026-11-10 sur l'historique complet de `notes-v3` (118 commits), `brandonlazarre` (`notes-site` 8, `notes-v3` 65), `notes-aistudio` (7), `notes-v5` (41), `notes-v6` (23, plus 4 branches jamais mergées) et `MindSpace` (HEAD `c7c61a1`, version 6.11.10-1).
Méthode : `list_commits` avec `path` sur chaque fichier critique, `get_commit` en `full_patch` (la valeur `patch` n'existe pas dans l'outil), `pull_request_read` pour les raisons. `list_commits` n'a pas de filtre par message ; la recherche `gh api search/commits` par mots-clés a donné peu de résultats (aucun pour `rewrite` sur MindSpace).
Étiquettes de preuve : `[vérifié]` = confirmé sur le code courant le 2026-11-10 ; `[patch lu]` = lu dans un patch, non exécuté.

### 11.1 Résultat par module critique

| Module | Résultat |
|---|---|
| Recherche | Aucune solution passée supérieure. `notes-v3` #10 (`f133fd3`) et `MindSpace` #45 (`d9f203e`) remplacent une simple sous-chaîne `toLowerCase().includes()`. Seule perte : la recherche d'expression exacte (MS). |
| Sync (`sync.ts`, `syncApp.ts`, `syncApply.ts`, `diff.ts`) | Aucune implémentation antérieure remplacée. Commits additifs (3 sur `sync.ts`). Un garde-fou perdu en aval : fiche A1. |
| Ranger (`tidy.ts`) | Aucune implémentation antérieure remplacée (3 commits additifs, 0 et 1 suppression). |
| Éditeur | Ancien éditeur BlockNote : ne pas restaurer. Deux pépites : l'import Markdown riche annulé (M1) et les lacunes du convertisseur BlockNote vers Tiptap (M6). |
| Crypto, tables, rappels | `crypt.ts` (1 commit), `table.ts` (2), `ics.ts` : rien de supérieur. L'ancien `toCalendar` en ligne n'avait ni repli de ligne à 75 octets ni masquage des notes verrouillées. |

### 11.2 Fiches : implémentations passées supérieures ou partiellement supérieures

**M1. MindSpace : import Markdown riche vers Tiptap. Verdict : supérieure. [patch lu]**
- Commit : `f207d4e` (PR #43), annulé par `22d3a53` (PR #44, 2026-11-07).
- Supprimé : `src/data/markdownImport.ts` (180 lignes, `markdownToTiptap()` retournant `{body, editorJson}`), `tests/markdown-import.test.mjs` (65 lignes, 6 tests), un scénario dans `tests/notes-shell-v2.spec.ts` (+24 lignes), 9 lignes dans `importTextNotes` de `src/App.tsx` (appliquées aux `.md` et `.markdown`).
- Produisait : `heading` (1 à 3), `paragraph`, `bulletList`, `orderedList` (attribut `start`), `listItem`, `blockquote`, `codeBlock` (clôtures ``` ou ~~~ de même longueur), `horizontalRule`, tables GFM (`table`, `tableRow`, `tableHeader`, `tableCell`, `textAlign` lu depuis `:---:`, `\|` échappé) ; marques `bold`, `italic`, `strike`, `code`, `link`.
- Sécurité : liens limités à `http(s)://` et `mailto:`, sans caractère de contrôle ni `<>"'`, libellé ≤ 256, href ≤ 2048 ; HTML jamais interprété (test `<img onerror>` reste du texte) ; `javascript:` ne crée aucun lien. Limites : 2 Mio (`MAX_MARKDOWN`) et 20 000 lignes (`MAX_LINES`), `RangeError` avant parsing.
- Remplacé par : rien. `importTextNotes` (HEAD) stocke `body: content` sans `editorJson`. L'éditeur affiche alors `## Titre` comme texte littéral, car `legacyMigration.ts` découpe par `\n`.
- Raison : non documentée. Le corps de #44 dit seulement "Reverts #43". Codex n'avait signalé aucun défaut. Le corps de #43 disait Playwright non exécuté. `docs/legacy-repository-audit-2026-11-06.md` listait déjà cette conversion comme point non résolu.
- Limites de #43 elle-même : pas de listes imbriquées, de tâches, d'images ni de `_emphase_` ; titres H4+ absents ; langage de bloc de code perdu.
- Coût : faible. Un revert de `22d3a53` devrait s'appliquer proprement (non testé). Alerte liée : `changelogData.ts` annonce encore la fonction (voir `00-INDEX.md`, alerte 4).

**M2. MindSpace : repli SPA du serveur Node. Verdict : supérieure pour les liens profonds. [vérifié]**
- Commits : `3c0fa3f` (PR #9) puis `3d8e2c9` (PR #10) puis `53cd9bf` (PR #16, 2026-11-05).
- Supprimé : dans `server.mjs`, la condition générique `!path.includes('.') && Accept contient text/html`.
- Remplacé par : `isClientRoute()`, regex `^/settings(?:/[a-z0-9-]+(?:/releases/[0-9a-z.-]+)?)?/?$` plus `^/releases/[0-9a-z.-]+/?$`. Commentaire : "missing assets/API endpoints stay 404".
- Constat sur `main` : j'ai exécuté la regex. `/settings/a-propos/versions` donne `false`, `/settings/a-propos/quoi-de-neuf` donne `false`. Ces deux routes existent dans `src/main.tsx`. Un rechargement direct tombe dans le 404 JSON du serveur, sauf réécriture côté hébergeur (non vérifiée). `tests/server.test.mjs` (ligne 39) ne teste aucune des deux.
- Coût : trivial. Regex proposée : `^/settings(?:/[a-z0-9-]+)*(?:/releases/[0-9a-z.-]+)?/?$`. Elle garde les versions pointées (`/settings/a-propos/releases/6.11.7-7`, `/settings/a-propos/releases/6.11.5.8`). Une version plus simple `^/settings(?:/[a-z0-9-]+)*/?$` casserait ces routes (le point n'est pas dans `[a-z0-9-]`) : elle est à éviter. Testée en Node sur 10 chemins : les deux routes manquantes passent, les routes existantes restent vraies, `/settings/x.html` reste faux. Ajouter au test `tests/server.test.mjs` les deux nouvelles routes et une version pointée.

**M3. MindSpace : service worker réseau d'abord. Verdict : partiellement supérieure. [patch lu]**
- Commit : `1392b09`, PR #19, 2026-11-05. `mindspace-static-v1` devient `mindspace-static-v2`.
- Supprimé : réseau d'abord pour tous les GET de même origine, remise en cache de chaque réponse OK, repli sur l'entrée exacte puis `/index.html`.
- Remplacé par : navigations réseau d'abord avec repli `/index.html` ; `/assets/` et SHELL en cache d'abord ; `LIMIT = 60` (suppression des entrées les plus anciennes).
- Raison : "deployments cannot be stuck behind a cached SPA".
- Perte : `/index.html` n'est mis en cache qu'à l'install et n'est jamais rafraîchi. Déduction non exécutée : les clés SHELL sont les plus anciennes et partent en premier au-delà de 60 entrées.
- Gain du remplaçant : ne met en cache que `/assets/` et SHELL (moins de contenu mis en cache sans contrôle).
- Coût : faible. Rafraîchir `index.html` à chaque navigation réussie et exclure SHELL de l'éviction. Cohérent avec la décision `skipWaiting` automatique (`03`, section 11).
- Traité le 2026-11-11 dans `mindspace-core` (`src/sw.ts`) : `index.html` rafraîchi à chaque navigation réussie, cache du shell sans expiration. Piège constaté en navigateur : avec Workbox, la route de précache répond à `/` avant toute route de navigation enregistrée après elle, et le shell n'est alors jamais rafraîchi (fiche M3 reproduite avec `precacheAndRoute`). Voir `03`, décision 12.

**M4. MindSpace : CI Playwright sur chaque PR. Verdict : supérieure en couverture. [patch lu]**
- Commits : `#32` (2026-11-06), `#33`, `9c0aab6` (PR #41, 2026-11-07).
- Supprimé : `playwright install` + `npm run smoke` (persistance) sur chaque PR ; `design-system-ci.yml` avec `paths` (check, release, design, collab, version, build, server, sw, Playwright, rapport et captures en artefact) ; job manuel `browser` de `dependency-ci.yml`.
- Remplacé par : `dependency-ci.yml` (`npm run build` puis `node --test tests/*.test.mjs`) ; `design-system-ci.yml` en `workflow_dispatch` seul, 3 specs.
- Raison : "accélérer les PR et supprimer les tests redondants" ; "remove perpetually skipped browser check".
- Perte : aucun workflow à HEAD ne lance la persistance IndexedDB, l'éditeur ni le routage. La PR #45 le confirme : ses specs de recherche n'ont pas tourné faute de Chromium.
- Coût : faible. Le bloc d'étapes est dans le patch de #32 ; il coûte des minutes de CI.

**M5. MindSpace : deux chemins d'import JSON incompatibles. Verdict : partiellement supérieure (chemin Réglages). [patch lu]**
- Contexte : PR #34. Ce n'est pas du code supprimé, deux chemins coexistent.
- Chemin Réglages (`src/hooks/useStorageDiagnostics.ts`) : limite 50 Mo ; snapshot précédent téléchargé ; transaction atomique clear + `bulkPut` ; suppression des bases Yjs orphelines. Il préserve `orderedList.start` et `codeBlock.language`. Il écrit sans filtrer les clés inconnues ni les types de `pinned`, `hidden`, `tags`.
- `backupImport.ts` : liste blanche de nœuds, marques et attributs ; plafonds 16 Mio, 5000 éléments, profondeur 30, 20 000 nœuds ; aperçu et copies avec nouveaux identifiants. Il ne conserve que `heading.level`, `textAlign`, `colspan`, `rowspan`, `colwidth` : il perd donc `orderedList.start` et `codeBlock.language`.
- Incompatibilité : l'export de la liste (`format: 'mindspace-local-export'`, `version: 1`) est refusé par l'import des Réglages ("Version de schéma inconnue"). L'enveloppe des Réglages (`schemaVersion`, `tables`) est refusée par `inspectMindSpaceBackup`, qui exige `version === 1`.
- Coût : moyen. Adaptateur de format, et `validate()` des Réglages réutilisant `safeEditorJson` avec les attributs manquants.
- `mindspace-core` (2026-11-11) : un seul chemin d'import, qui lit `mindspace-core-backup` v1 (`planRestore` / `applyRestore`). La fiche M5 ne s'y applique plus ; elle reste ouverte pour `MindSpace`.

**M6. MindSpace : convertisseur BlockNote vers Tiptap lacunaire. Verdict : l'ancien éditeur n'est pas à restaurer, le convertisseur est à compléter. [patch lu]**
- Commits : `690b289`, `4b11860`, `dbbcaa2` (2026-11-05), PR #19 puis #21 (merge `a37e3c9`). `src/components/notes/NoteEditor.tsx` (35 lignes, `BlockNoteView`, `blocksToMarkdownLossy`) n'est resté que ~38 minutes dans `main`.
- Remplacé par : `src/components/editor/Editor.tsx`, `EditorToolbar.tsx`, `SlashMenu.tsx`, `legacyMigration.ts` (`initialTiptapDocument`). Aucun test supprimé ; `persist.spec.ts` change de sélecteurs (`.bn-editor` vers `.tiptap`) et gagne 5 tests.
- Raison : `EDITOR_MIGRATION.md` : les formats avancés peuvent différer, `blocksJson` est conservé pour le rollback.
- Lacunes de `legacyMigration.ts` (inchangé depuis #21) : les inlines non `text`, donc les liens, sont ignorés (le texte du lien disparaît) ; `checkListItem` devient du texte "☑" ou "☐" (aucune extension de tâches installée) ; niveaux de titre bornés à 2 alors que l'éditeur en accepte 3 depuis #27 ; `strike`, `underline`, `codeBlock`, `quote`, `table`, séparateurs absents ; `children` aplatis en paragraphes. Inférence non exécutée : un bloc `table` ferait lever `flatMap`, rattrapé par le `try` avec repli sur `body` pour toute la note.
- Coût : faible à moyen. Étendre le mapping est facile ; les tâches imposent d'ajouter `TaskList`.

**V1. notes-v6 : filtres de la Bibliothèque et réordonnancement. Verdict : supérieure. [patch lu]**
- Commit : `7f35142`, branche `feat/quiet-home-filters`, 2026-10-30, jamais mergée.
- Retire de main : `DashboardOverview.svelte` et son CSS (`mind-illustration`, `overview-card`) ; la barre `.library-filters` de 8 contrôles ; le `draggable="true"` HTML5 (toujours dans main, `NoteLibrary.svelte:35`).
- Ajoute dans `NoteLibrary.svelte` : `chips` dérivé, `clear(key)`, `clearFilters()` (conserve le tri), `portal`, `sheetKeys` ; une feuille `<dialog class="filter-sheet">` (panneau droit sur tablette, feuille basse sur téléphone, plages de dates liées par `min` / `max`, bouton "Afficher N notes") ; réordonnancement par pointer events (`gripDown`, `gripMove`, `gripEnd`, `gripCancel`, `setPointerCapture`, `touch-action:none`, défilement automatique à 72 px du bord) ; boutons ↑ / ↓ seulement en mode "Mon ordre". Dans `components.css` : survol conditionné par `@media (hover:hover)`.
- Raison (commit) : "8-control filter bar -> 'Filtres (n)' button + 'Trier par' select … HTML5 draggable removed". Le défaut du drag HTML5 au toucher n'est pas démontré, c'est le motif de la branche.
- Coût : moyen (~0,5 j selon l'agent). Adapter `use:focusDialog` à la signature `focusDialog(node,{onClose})` de `10ce308` et refaire la partie qui touche l'ancien `+page.svelte` dans `Workspace.svelte`.

**V2. notes-v6 : onboarding et identité. Verdict : supérieure. [patch lu]**
- Commit : `ac3fbc7`, branche `feat/onboard-distill`, 2026-10-30, jamais mergée.
- Retire de main : un prénom codé en dur et un avatar à initiale fixe (`Workspace.svelte:424,435`) ; `onboardingStep` à 3 étapes (`Workspace.svelte:56,77,506`) et tableau `onboarding` (`content.ts:3`) ; `topbar-context` statique.
- Ajoute : une carte unique (confidentialité, prénom, "Écrire ma première note" / "Plus tard") ; `userName`, `setName`, `finishOnboarding(write)` en `localStorage 'notes-v6:name'` ; champ "Prénom" dans les Réglages ; `focusDialog` ciblant `[data-autofocus]` ; état vide "première note" dans `NoteLibrary` (absent de main) ; état "Aucune note ne correspond" avec bouton "Tout afficher" (main : "Aucun résultat", `NoteLibrary.svelte:41`) ; indicateur d'enregistrement dans la barre du haut.
- Lien : décision ouverte de `PRODUCT.md` sur le prénom codé en dur.
- Coût : faible à moyen (~0,5 j), surtout du report manuel vers `Workspace.svelte`. Non vérifié : si main gère `[data-autofocus]` dans `focus.ts`.

**V3. notes-v6 : sauvegarde chiffrée et tâches. Verdict : partiellement supérieure. [patch lu]**
- Commit : `d665efc`, branche `feat/typeset-polish`, 2026-10-31, jamais mergée.
- Ajoute dans `EncryptedBackup.svelte` : lignes de réglage, bouton afficher / masquer la phrase (`Eye` / `EyeOff`), compteur "Encore N caractères", restauration sans `<input type=file>` natif. Dans `TaskList.svelte` : filtre segmenté Toutes / À faire / Terminées avec compteurs, recherche au-delà de 6 tâches, états vides adaptés. Typographie : plancher 14 px, texte sur canvas en "Graphite 2" (contraste 4,2:1 vers 7,1:1, non comparé à main).
- Main a déjà un `<details>`, un minimum de 12 caractères et une aide. `docs/branch-cleanup.md` : ne pas merger la branche entière.
- Coût : faible par composant.

**V4. notes-v6 : thème "Système" et éditeur. Verdict : partiellement supérieure. [patch lu]**
- Commit : `d11bb77` (2026-10-29), branche `fix/system-theme-editor` ; main a réimplémenté le correctif de fond dans `e309072` (PR #4, résolution dans `Workspace.svelte:162`).
- Reste dans la branche seulement : suppression des blocs `:root[data-theme='system']` et `@media (prefers-color-scheme)` de `tokens.css` (main garde un bloc de jetons dupliqué de plus de 25 lignes, `tokens.css:116+`) ; script `app.html` avant premier rendu ; `data-theme-preference` ; icône `SunMoon` et indication "Suit ton appareil, sombre en ce moment" ; `detailsSummary` (statut, dossier, tags, fichiers, rappel) dans l'en-tête du tiroir Détails ; libellés "À faire avant le" et "Me le rappeler le".
- Main garde en plus : les options de note ouvrent le tiroir à l'impression.
- Coût : faible (~1 h selon l'agent).

**V5. notes-v5 : traces d'export. Verdict : supérieure. [vérifié]**
- Commit : `ad395f4`, PR #12 (2026-11-07).
- Supprimé : `exportBackup()` dans `features.ts`, qui après un export réussi appelait `setPref('lastBackup', Date.now())` puis `persistStorage()` ; `backupBlob` dans `db.ts`.
- Remplacé par : `exportBackup = () => openSheet('backup')`, puis `PortableBackup.tsx` / `exportPortable`.
- Constat : `git grep lastBackup` sur `notes-v5` ne montre que des lectures (`features.ts:421,530`, `List.tsx:49,60`, `Sheets.tsx:207,235`) et la déclaration de type. Aucune écriture. Après une sauvegarde portable ou un snapshot, le rappel de sauvegarde (`backupNagDays`) continue de s'afficher et "Dernière" reste "Jamais".
- Raison de la PR : parle de l'import, pas de ces effets de bord.
- Coût : très faible. Deux appels après le téléchargement réussi, dans `PortableBackup.tsx` et `SnapshotTools.tsx`.
- Traité le 2026-11-11 dans `mindspace-core` : `src/backup/exportBackup.ts` écrit `lastBackup` et demande `persist()` après le téléchargement ; test `tests/backup.test.ts`. `notes-v5` reste inchangé.

**V6. notes-v5 : widgets Recap de l'accueil. Verdict : partiellement supérieure. [patch lu]**
- Commits : `32e9bd9` (PR #14) puis `f1b5160` (PR #15), 2026-11-08.
- Supprimé : l'appel `{s.page === 'home' && <Recap />}` dans `App.tsx`. `Recap()` et `widgets()` (`List.tsx:71-130`) subsistent comme code mort sans import.
- Remplacé par : `Today` dans `Destinations.tsx` (5 tâches, 4 rappels, 3 notes à reprendre).
- Perdu : widget "À réviser" (cartes dues, `startStudy(due)`) ; "Photo récente / Note vocale" ; "Souvenir" (note de plus de 30 jours) ; "Reprendre" borné par `CONFIG.resumeMs` ; "À venir" sur 14 jours avec dates détectées. `Today` n'affiche que les rappels explicites futurs.
- Lien : `notes-v3` (référence métier) garde `Recap` monté dans `List.tsx` et `main.tsx`.
- Coût : faible. Monter `widgets()` dans `Today`.

**V7. notes-v5 : indice de pull-to-search. Verdict : supérieure. [patch lu]**
- Commit : `32e9bd9`, PR #14. Supprimé : `<div className="pull-hint">` (icône + "Rechercher") dans le `Header` de `List.tsx`.
- Le geste (`gestures.ts:178-186`, `--pull`) et le CSS `.pull-hint` (`app.css:128-138`) restent actifs : le geste n'a plus d'indice visible. Coût : une ligne JSX.

**V8. notes-v5 : plafond d'export. Verdict : partiellement supérieure. [patch lu]**
- Commit : `ad395f4`. `backupBlob` assemblait la sauvegarde note par note en concaténant des `Blob`, sans plafond. Remplacé par `makeArchive` / `exportPortable` (`portableBackup.ts`, JSON en mémoire, `PORTABLE_LIMIT` = 64 Mio). Perte sur les bibliothèques lourdes (audio, PDF). Coût élevé : chiffrement et JSON en flux (le conteneur AES-GCM par blocs existe).

**A1. notes-aistudio : garde `syncSupported()`. Verdict : supérieure. [vérifié]**
- Commit : `6dbe911` (2026-11-05, sans PR), export supprimé aussi par `6fc4b9d`. Message du commit : "feat: add QR code support and storage management".
- Supprimé : `export const syncSupported` dans `src/syncApp.ts` ; dans `src/ui/SettingsPage.tsx`, `Synchro()` : `if (!syncSupported() && !c.folder) return <p className="layer-hint">{t('sync.unsupported')}</p>`.
- Constat : `git grep syncSupported` renvoie 0 résultat dans `notes-aistudio`, et 3 dans `notes-v3` (`syncApp.ts:18`, `SettingsPage.tsx:15,61`). Sans la garde, sur un navigateur sans `showDirectoryPicker`, `chooseFolder()` revient silencieusement (`try/catch { return; }`) et l'utilisateur n'a aucune explication.
- Coût : faible. Non vérifié : la clé `sync.unsupported` existe-t-elle dans les locales d'aistudio.
- Pertinent pour le plan de portage : la sync par dossier est Chromium seulement (`03`, section 8).

**A2. notes-aistudio : vue Tâches. Verdict : partiellement supérieure. [patch lu]**
- Commit : `6fc4b9d`, PR #1, 2026-11-05. Supprimé : bascule `showDone` dans `Tasks.tsx`, clés `tasks.showDone`, `tasks.hideDone`, `tasks.allDone`, `tasks.hintAllDone`, `HeaderTools`.
- Remplacé par : `view` (`pending|today|late|done`) avec chips et états vides en français codé en dur.
- Perte : aucune vue ne montre plus à la fois les tâches ouvertes et terminées. Régression i18n : `docs/i18n-baseline.json` passe de 548 à 558 chaînes (`Tasks.tsx` 6, `Metadata.tsx` 9, `Tidy.tsx` 12 vers 13) : le plafond a été relevé au lieu d'être respecté.
- Coût : faible. Restaurer les 4 clés, ajouter une chip "Tout", traduire les nouvelles chaînes.

**A3. notes-aistudio : syntaxe de tâche `+ action`. Verdict : partiellement supérieure (rigueur). [patch lu]**
- Commit : `6fc4b9d`, PR #1. `parseCheck`, `stripCheck`, `toggleCheck` dans `markdown.ts` ne reconnaissaient que `- [ ]` / `- [x]` (regex `CHECK_PREFIX`). Maintenant `parseCheck` accepte aussi `line.startsWith('+ ')` ; `toggleCheck` réécrit la ligne en `- [x] `.
- Conséquence : toute puce Markdown `+ item` devient une tâche (comptée par `checkStats`, listée dans Tâches et Recap "À faire", réécrite en `- [x]`). Aucun cas de test pour une puce `+` non tâche dans `tests/metadata.mjs` (lu en stats seulement). Gain : les cases vides sont exclues par `checklistItems()`.
- Coût : faible si on exige `+ ` en début de ligne hors liste.

**A4. notes-aistudio : widgets Recap. Verdict : supérieure en fonctions. [patch lu]**
- `6dbe911` (démontage, 2026-11-05) puis `6fc4b9d` (suppression de `Recap` et `widgets()` dans `List.tsx`), message : "retire Recap/QuickCapture et leurs styles inutilisés". Widgets perdus : Reprendre, À venir, À réviser, À faire, Photo récente / Note vocale, Souvenir.
- `notes-v3` (HEAD) monte toujours `Recap` : aistudio a divergé. Coût moyen : copier `Recap` / `widgets` (~100 lignes), les règles CSS `.recap` et `.widget`, restaurer `CONFIG.resumeMs`.

### 11.3 Remplacements jugés équivalents ou inférieurs à HEAD (une ligne chacun)

- `notes-v3` Recherche, `f133fd3` (PR #10) : ancien filtre `toLowerCase().includes()` plus surlignage échappé ; nouveau : accents pliés, tous les mots dans n'importe quel ordre, cache `WeakMap`, `tests/search.mjs`. Ancien inférieur. Le bundle `notes-site` 26.10.15.1 utilise aussi `.includes()`.
- `MindSpace` Recherche, `d9f203e` (PR #45) : ancienne sous-chaîne contiguë sur titre + corps, plus tag ; nouveau `src/data/noteSearch.ts` (NFD, œ/æ, mots en tout ordre, `WeakMap`, 4 tests Node, 2 Playwright à 390 et 1280 px). Seule perte : l'expression exacte. Aucun classement avant ni après.
- `notes-v3` Service worker, `1b4f7fd` (PR #9) remplaçant `28bb4ea` et `0315a92` : réseau d'abord avec course de 3 s et `no-store`, remplacé par cache d'abord avec revalidation. Équivalent, compromis : ouverture immédiate et hors ligne, mais shell précédent jusqu'au "Recharger". Aucun apport récupérable.
- `notes-v3` Réglages feuille vers page, `47c570d` (PR #15) : toutes les options conservées ; ajouts (sync, `.ics`, langue). Inférieur.
- `notes-v3` Rappels, `7fce56b` (PR #21) : `ics.ts` plie à 75 octets, masque les notes verrouillées, `tests/ics.mjs`. Inférieur.
- `notes-v3` Notes de démarrage, `35c0380` (PR #1 de `brandonlazarre`) : `STARTER_NOTES` remplacées par la carte `FirstUse` et le guide en feuille. Équivalent, choix de conception.
- `notes-v3` Filtrer, `1224a58` (2026-10-18) retiré, revenu dans l'île du haut via `2c7478e` (PR #14). Équivalent.
- `MindSpace` Barre d'outils, PR #27 : dock bas réduit ; H1 / H2 / code seulement en mode étendu ; le menu `/` (7 entrées) n'a ni H3, ni tableau, ni blocs rapides. Équivalent.
- `MindSpace` Hébergement, PR #10, #11, #12, #20 : `hostinger.mjs` et `postinstall` conservés. Équivalent, hors M2.
- `MindSpace` Export, PR #35 : `body` brut remplacé par `noteToMarkdown`. Inférieur.
- `MindSpace` Tests supprimés `global-export.test.mjs`, `legacy-features.test.mjs` (assertions sur du code source). Inférieurs.
- `notes-v6` `db.ts` à trois stores vers `entries` ; `cleanNote` laxiste vers validation v2 (50 000 entrées, 100 Mo) ; `focus.ts` vers isolation `inert` ; service worker `c80dbb0` (précache atomique, secours "toute navigation vers l'accueil" devenu `Response.error()` hors shell, écart mineur). Inférieurs ou équivalents.
- `notes-v5` Dexie transactionnel (PR #10), import par aperçu (PR #11, #12), Undo à jeton (PR #13). Inférieurs. TanStack Start / Nitro retirés (PR #9) : équivalent, seuls les écouteurs globaux d'`error-capture.ts` ont disparu. Dock 5 entrées (PR #14) vers 4 destinations (PR #15) : équivalent, un tap de plus pour la Bibliothèque. Apparence rapide sans Style / Accent, couleurs de type de note neutres (`KIND_TONE`), `.ctl`, changelog à la demande : équivalents.
- `notes-aistudio` QuickCapture (`6fc4b9d`) : équivalent, doublon du menu "+". Seules pertes : le raccourci N ou `/` et la conversion `- ` vers `- [ ]`. `SearchDock` : un seul passage au lieu de N, inférieur.

### 11.4 Priorités d'action (propositions, vous arbitrez)

| Priorité | Fiche | Action | Raison |
|---|---|---|---|
| 1 | M2 | Élargir `isClientRoute` et tester les 2 routes | Bug vérifié sur le produit déployé |
| 2 | M1 | Restaurer l'import Markdown (revert de `22d3a53`) | Comble un manque documenté, sans dépendance |
| 3 | V5 | Réécrire `lastBackup` et `persistStorage` à l'export | Régression vérifiée |
| 4 | A1 | Reprendre la garde `syncSupported` dans tout port de la sync | Sync Chromium seulement |
| 5 | M6, M5 | Compléter `legacyMigration.ts` ; unifier les deux imports JSON | Pertes silencieuses |
| 6 | M4 | Remettre une CI navigateur minimale sur PR | Couverture nulle de la persistance |
| 7 | V1, V2 | Reporter filtres et onboarding de `notes-v6` | Seulement si `notes-v6` reste vivant |
| 8 | V6, A4 | Réintégrer Recap (déjà dans `notes-v3`) | Révision espacée sans entrée |

### 11.5 Limites de cette passe

- Rien n'a été exécuté. Les verdicts viennent de la lecture de patchs et de fichiers, sauf trois points `[vérifié]` (M2, V5, A1).
- `notes-v3` : patches non lus pour `40209be`, `0eda4f0`, `893b157`, `9e55241` (sans réécriture ultérieure dans l'historique des fichiers) ; patches de plusieurs commits lus en statistiques seulement ; `pull_request_read` non utilisé, raisons tirées des messages de commit ; `gh search/commits` non utilisé (historiques assez petits pour être lus en entier).
- `brandonlazarre` `notes-site` : seuls `sw.js` et la fonction de recherche comparés. Le bundle minifié de 560 Ko n'a pas été comparé au source.
- `MindSpace` : `style.css` et `tokens.css` non comparés (ancien `@theme` contre `--ms-*`) ; réglages et changelog (PR #13 à #17, #23, #24, #36, #37 : suppression de `changelog.css`, `SettingsHub.tsx`, `ReleaseDetail.tsx`) sans verdict ; `tests/sw.test.mjs`, `tests/deployment.test.mjs`, `noteTemplates.ts` non lus.
- `notes-v6` : aucun éditeur `svelte-lexical` dans l'historique (un `MarkdownEditor` en textarea) ; les 23 commits n'ont pas été lus un à un.
- `notes-v5` : PR #11 lu par son corps, pas par le patch de `snapshot.ts` ; PR #8 lu sur le CSS seulement ; import `b1f1731` en un seul commit, aucune implémentation antérieure visible.
- Restaurer ne veut pas dire fusionner : les coûts sont des estimations des lecteurs de patch.

## 12. Limites

- Pas de lecture des lockfiles, pas d'exécution de l'app, pas de hash de build en ligne vérifié.
- Les cases `?` sont des points non trouvés dans les docs lues, pas des absences prouvées.
- `MindSpace/src/pages`, `components`, `hooks`, `layouts` et `notes-v3/src/ui` n'ont pas été parcourus fichier par fichier.
