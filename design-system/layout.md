# Mise en page, navigation et géométrie : consolidation entre toutes les versions

Portée : points de rupture (px et em), grilles et colonnes, modèle de navigation (dock, barre latérale, rail, île du haut, onglets, FAB, Réglages, routes), géométrie (hauteurs, largeurs, marges, zones sûres), comportements par taille d'écran, mode main gauche / droite. Inventaire seulement : aucune recommandation. Sources : `design/<repo>/layout.md` (9 dépôts).

## 1. Légende

Colonnes (ordre chronologique de première apparition, copié de `LINEAGE.md`) :

| Colonne | Version | Dépôt (branche) | Période | Nature |
|---|---|---|---|---|
| E0 | Notes 2.x et 26.10.9 à 26.10.15 | `notes-v3` (branche `notes-site`, aussi dans `[donnée personnelle]`) | 2026-10-09 à 2026-10-15 | Appli mono-fichier minifiée, 9 builds, aucune source. Design lu dans le CSS du bundle. |
| E1 | Notes v3 (source) | `notes-v3` (`main`) | 2026-10-18 à 2026-10-31 | React + Zustand, CSS natif. Looks Verre, Papier, Acrylique. |
| E2 | notepad-pwa | `notepad-pwa` | 2026-10-20 à 2026-11-10 | Prototype JS vanille. Fichiers permutés à HEAD : le vrai CSS est dans l'historique. |
| E3 | Notes 4 | `notes-4` | 2026-10-21 à 2026-11-09 | SvelteKit, localStorage. |
| E4 | Notes v5 | `notes-v5` | 2026-10-21 à 2026-11-11 | React statique, Dexie, Tiptap. Looks Soft Glass Pro, Paper and Ink, Minimal. |
| E5 | Quick Notes | `notes-svelte` | 2026-10-22 | SvelteKit, Dexie. |
| E6 | Notes v6 « Mind Space » | `notes-v6` | 2026-10-28 à 2026-11-02 | SvelteKit. Contient aussi 4 branches jamais fusionnées (marquées « non fusionné » dans les entrées). |
| E7 | AI Studio | `notes-aistudio` | 2026-10-31 à 2026-11-06 | Copie de `notes-v3` (même arbre `src` au premier commit), puis réécriture des Réglages. |
| E8 | MindSpace (ancien) | `mindspace-old` | 2026-11-02 à 2026-11-12 | React + Tiptap + Yjs + Tailwind 4. |
| E9 | mindspace-core | `mindspace-core` | 2026-11-10 à 2026-11-12 | Code actuel. Design flat décidé le 2026-11-11. |

Notes de lignée : E1 et E7 partagent du code au départ (une valeur de E7 identique à E1 s'affiche `=`). Les dépôts se recouvrent dans le temps ; `notes-v5` et `notes-v6` sont des ports parallèles de `notes-v3`.

Cellules de la matrice :

- `valeur` : la valeur ou l'état dans cette version ;
- `=` : identique à la dernière valeur affichée à gauche (la valeur n'est pas répétée) ;
- `A → B` : changé pendant cette version (références en section 3) ;
- `—` : absent de cette version, ou version non couverte par le sujet de la ligne (voir section 6) ;
- `✗ <réf>` : supprimé dans cette version (sha8 du commit, dans le dépôt de la colonne) ;
- `?` (ajout à la légende imposée) : l'élément existe très probablement dans cette version mais l'entrée ne donne pas sa valeur (cas de E7, copie de E1, voir section 6).

Conventions des cellules : un sha8 entre parenthèses est le commit de première apparition de la valeur, dans le dépôt de la colonne. `N0`..`N4` (E3), `S1`..`S3` (E5) et `A` (E2, `3c6f6152`) sont les repères des entrées : leurs sha complets sont donnés en section 3. « N règles » ou « N décl. » = nombre de déclarations CSS portant la requête (E0 : « déclarations », autres : « règles »). `décl.` = déclarations. Les `em` des entrées sont gardés tels quels ; avec une taille de police de base de 16 px (hypothèse du lecteur, non citée dans les entrées) 21.25em = 340px, 22em = 352px, 24em = 384px, 25em = 400px, 26em = 416px, 30em = 480px, 40em = 640px, 47.99em = 767.84px, 48em = 768px, 63.99em = 1023.84px, 64em = 1024px, 90em = 1440px.

Les valeurs `var(--…)` sont recopiées telles quelles ; leur résolution numérique n'est pas dans les entrées (`--space-N` en particulier : voir section 6).

## 2. Matrice

### A. Points de rupture (requêtes de largeur et de hauteur, unité de la source)

| id | élément | alias | E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| A01 | `min-width 40em` | — | — | oui ; ✗ ba6e7b28 ; recréé 35c0380c | — | — | = | — | — | = ; ✗ d2819fcc | — | — |
| A02 | `min-width 40em` et `min-height 30em` | `wideMedia` (config.ts) | — | 93 règles (ba6e7b28) | — | — | 99 règles | — | — | 93 → 70 règles | — | — |
| A03 | `min-width 48em` | — | 26 décl. | — | — | — | — | — | — | — | — | — |
| A04 | `min-width 48em` et `min-height 30em` | — | — | — | — | — | 46 règles (f1b51602) | — | — | — | — | — |
| A05 | `min-width 64em` | `splitMedia` (config.ts) | 16 décl. | 42 règles (4da62555) | — | — | 41 règles | — | — | 42 → 61 règles | — | — |
| A06 | `min-width 64em`, `hover: hover`, `pointer: fine` | — | 3 décl. | — | — | — | — | — | — | — | — | — |
| A07 | `min-width 64em` et `min-height 30em` | — | — | — | — | — | 6 règles (1c1fb148) | — | — | — | — | — |
| A08 | `min-width 90em` | — | — | oui (4a4da608) ; ✗ 35c0380c | — | — | — | — | — | — | — | — |
| A09 | `max-width 21.25em` | — | 8 décl. | — | — | — | — | — | — | — | — | — |
| A10 | `min-width 25em` | — | 2 décl. | — | — | — | — | — | — | — | — | — |
| A11 | `max-width 22em` | — | — | — | — | — | 7 règles (f1b51602) | — | — | — | — | — |
| A12 | `max-width 24em` | — | — | oui (78e2a8a6) ; ✗ e30d2cdc | — | — | 3 règles (32e9bd9e) | — | — | — | — | — |
| A13 | `max-width 25em` | — | — | — | — | — | 6 règles (32e9bd9e) | — | — | — | — | — |
| A14 | `max-width 26em` | — | — | 9 règles (e30d2cdc) | — | — | — | — | — | 9 → 7 règles | — | — |
| A15 | `max-width 40em` | — | — | — | — | — | 3 règles (bb3fa23d) | — | — | 2 règles (6dbe9114) | — | — |
| A16 | `max-width 47.99em` | — | — | — | — | — | 2 règles (f1b51602) | — | — | — | — | — |
| A17 | `max-width 47.99em`, `max-height 29.99em` | — | — | — | — | — | 9 règles (f1b51602) | — | — | — | — | — |
| A18 | `max-width 63.99em` | — | — | — | — | — | 4 règles (d9bdac08) | — | — | 25 règles (d2819fcc) | — | — |
| A19 | `min-width 40em` et `min-height 30em` dans `max-width 63.99em` | — | — | — | — | — | 1 règle (2bd9ec0b) | — | — | — | — | — |
| A20 | `max-height 30em` | — | — | 1 règle (ba6e7b28) | — | — | 1 règle (tokens.css) + 1 (looks.css, ad232dfb) | — | — | 1 règle | — | — |
| A21 | `max-width 390px` | — | — | — | — | — | — | — | 9 → 11 règles | — | — | — |
| A22 | `max-width 440px` | — | — | — | — | — | — | oui (S1/S3) | — | 3 règles (6dbe9114) | — | — |
| A23 | `max-width 560px` | — | — | — | oui (576a8c9d) | — | — | — | — | — | — | — |
| A24 | `max-width 650px` | — | — | — | — | — | — | — | — | — | oui (99c91a87) ; ✗ b44de130 | — |
| A25 | `min-width 680px` | — | — | — | — | — | — | oui | — | — | — | — |
| A26 | `max-width 760px` | — | — | — | — | — | — | — | 164 → 200 règles (+ bloc de 2 règles, c80dbb09) | — | — | — |
| A27 | `min-width 761px` et `max-width 1100px` | — | — | — | — | — | — | — | 16 → 23 règles (c80dbb09) | — | — | — |
| A28 | `max-width 767px` | — | — | — | — | — | — | — | — | — | oui (b44de130) | — |
| A29 | `min-width 768px` | — | — | — | — | — | — | — | — | — | oui (d5c96cef) | — |
| A30 | `min-width 768px` et `max-width 1199px` (iPad) | — | — | — | — | — | — | — | — | — | oui (62846504) | — |
| A31 | bureau `≥ 1200px` | — | — | — | — | — | — | — | — | — | doc DESIGN_SYSTEM.md (de556ab2) | — |
| A32 | point de rupture 900px | — | — | — | — | `max-width` (N0) → `min-width` (N1) | — | — | — | — | — | — |
| A33 | `max-width 1100px` | — | — | — | oui (A, 3c6f6152) | — | — | — | 6 → 3 règles | — | — | — |
| A34 | `@container list (min-width 36em)` | — | — | oui (ba6e7b28) ; ✗ d6af8790 | — | — | — | — | — | — | — | — |
| A35 | `@container` 720px et 410px (journal) | — | — | — | — | — | — | — | — | — | oui (83de6dd4) ; ✗ 7e3da2f4 | — |
| A36 | Tailwind `sm` / `md` / `lg` | — | — | — | — | — | — | — | — | — | défauts (d5c96cef) | — |
| A37 | aucune requête de largeur ni de hauteur | — | — | — | — | — | — | — | — | — | — | oui (HEAD) |

### A (suite). Requêtes média non dimensionnelles

| id | élément | alias | E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| A40 | `hover: hover` | — | 13 décl. | — | — | — | — | — | 2 règles (10ce3085) ; branche BR4 : 5 règles (7f351420) | — | — | — |
| A41 | `hover: hover` et `pointer: fine` | — | 3 décl. | 36 règles (d6af8790) | — | — | 42 règles | — | — | 36 règles | — | — |
| A42 | `prefers-reduced-motion: reduce` | — | 3 décl. | 4 règles (4da62555) | — | — | — | — | 4 règles (57c25ea2) + 2 (10ce3085) | 4 règles | — | — |
| A43 | `prefers-reduced-transparency: reduce` | — | 2 décl. | 13 règles (4da62555) | — | — | — | — | — | 13 règles | — | oui (128050ce) ; ✗ 5469a8ab |
| A44 | `forced-colors: active` | — | — | 6 règles (ba6e7b28) | — | — | — | — | — | 6 règles | — | oui |
| A45 | `prefers-contrast: more` | — | — | 16 règles (35c0380c) | — | — | — | — | — | 16 règles | — | — |
| A46 | `prefers-color-scheme: dark` | — | — | — | — | — | — | — | 3 → 24 règles (34172c2a) ; branche BR1 : ✗ d11bb77c | — | — | oui |
| A47 | `print` | — | 15 décl. | 9 règles (4da62555) | — | — | 9 règles | — | 15 → 17 règles (a0935371) | 9 règles | — | — |
| A48 | `@supports (backdrop-filter: blur(1px))` | — | 3 décl. | — | — | — | — | — | — | — | — | — |

### B. Grilles et colonnes (liste, éditeur, vue scindée, panneaux)

| id | élément | alias | E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| B01 | `--layout-columns` (colonnes de la liste) | — | 2 ; 3 (≥48em) ; 4 (≥64em, hover fin) ; 1 (is-editing ≥64em) | — | — | — | — | — | — | — | — | — |
| B02 | Cartes de notes : grille de base, hors requête | `.note-list.cards`, `.notes-grid`, listes | — | 1 colonne pleine largeur (35c0380c) | — | `repeat(auto-fit, minmax(220px, 1fr))` ; gap 16px | `repeat(auto-fill, minmax(min(17.5rem, 100%), 1fr))` | 1 colonne ; gap 14px | — | — | — | — |
| B03 | Cartes de notes : ≥40em et ≥30em | `.note-list.cards` | — | `repeat(auto-fill, minmax(250px, 1fr))` → `repeat(3, 1fr)` → `repeat(auto-fill, minmax(15rem, 1fr))` | — | — | = | — | — | ? | — | — |
| B04 | Cartes de notes : colonnes par largeur (document) | — | — | — | — | — | — | — | 3 bureau ; 2 à 1100px ; 1 à 760px (DESIGN.md, 1f5a70d2) | — | — | — |
| B05 | Liste en lignes : ≥40em et ≥30em | `.note-list:not(.cards)` | — | `1fr 1fr` → `repeat(auto-fill, minmax(22rem, 1fr))` | — | — | = | — | — | ? | — | — |
| B06 | Liste de notes en colonne de lignes | `.ms-notes`, `.ms-note-row` | — | — | — | — | — | — | — | — | — | colonne pleine largeur ; gap 8px ; ligne en colonne titre / aperçu / date, gap 4px |
| B07 | `.recap-row` : ≥40em et ≥30em | — | — | `repeat(4, 1fr)` | — | — | = | — | — | ? | — | — |
| B08 | `.recap-row` pendant l'édition, ≥64em | — | — | `repeat(2, 1fr)` | — | — | = | — | — | ? | — | — |
| B09 | Liste de notes pendant l'édition, ≥64em | — | — | cartes `repeat(2, 1fr)`, lignes `1fr` (d6af8790) → `1fr` (35c0380c) | — | — | = | — | — | ? | — | — |
| B10 | `.cols` (deux colonnes de champs) | — | — | `1fr 1fr` ; `1fr` dans `[data-drawer]` | — | — | = | — | — | ? | — | — |
| B11 | `.first-actions` | — | — | `repeat(4, 1fr)` ≥40em (35c0380c) | — | — | `repeat(2, 1fr)` ; `repeat(4, 1fr)` ≥40em | — | — | règle ≥40em ✗ d2819fcc | — | — |
| B12 | `.starters` | — | — | `repeat(3, 1fr)` ≥40em (35c0380c) | — | — | `repeat(2, 1fr)` ; `repeat(3, 1fr)` ≥40em | — | — | règle ≥40em ✗ d2819fcc | — | — |
| B13 | `.lib-tiles` | — | — | — | — | — | `repeat(auto-fill, minmax(104px, 1fr))` | — | — | — | — | — |
| B14 | `.lib-folders`, `.atts.is-multi` | — | — | — | — | — | `repeat(auto-fill, minmax(150px, 1fr))` | — | — | — | — | — |
| B15 | `.photos` | — | — | — | — | — | `repeat(auto-fill, minmax(84px, 1fr))` | — | — | — | — | — |
| B16 | `.calendar-grid` | — | — | — | — | — | `repeat(7, minmax(0, 1fr))` (32e9bd9e) | — | — | — | — | — |
| B17 | `.capture-actions` | — | — | — | — | — | `repeat(3, minmax(0, 1fr))` (1c1fb148) | — | — | — | — | — |
| B18 | `.metadata-fields` | — | — | — | — | — | `repeat(2, minmax(0, 1fr))` (1c1fb148) | — | — | — | — | — |
| B19 | `.today-grid` | — | — | — | — | — | `minmax(0, 1fr)` (2bd9ec0b) | — | — | — | — | — |
| B20 | Grilles ≥64em et ≥30em hors édition (sélecteurs tronqués) | `body:not(.is-editing) …` | — | — | — | — | `2fr 1fr 1fr 1fr` ; `minmax(0, 1.15fr) minmax(0, 1fr)` (1c1fb148) | — | — | — | — | — |
| B21 | Réglages : colonnes | `.menu-cols`, `.settings-body`, `.settings-layout`, `.info-row` | `.menu-cols` `1fr 1fr` ≥48em ; ✗ ea104c22 | `minmax(260px, 320px) minmax(0, 560px)` ≥64em ; liste sticky, top `var(--space-4)` (47c570df) | — | — | deux colonnes ; `minmax(0, 1fr)` sous 64em (2bd9ec0b) | `.info-row` 2 colonnes | — | liste (colonne 280-340px) + détail ≥64em ; feuilles <64em (d2819fcc) | sidebar sticky 250px + workspace max 1050px → 1120px | sections empilées ; marge 24px entre sections ; boutons en rangée `flex-wrap`, gap 8px (0a15c7ce) |
| B22 | Vue scindée liste + éditeur (≥64em) : bord gauche de l'éditeur | `.editor left` | `var(--layout-split-list)` | `50%` (4da62555) → `var(--split-list)` (ba6e7b28) | — | — | `var(--split-list)` ; `var(--nav-rail)` ≥48em et ≥30em (f1b51602) | — | — | ? | — | — |
| B23 | `--split-list` (largeur de la liste en vue scindée) | `--layout-split-list` (E0) | `max(33.333vw, 22rem)` | `max(36vw, 22rem)` → `clamp(22rem, 34vw, 30rem)` | — | — | = | — | — | = | — | — |
| B24 | Grille de page à trois colonnes (sidebar / éditeur / outils) | `.app-shell` | — | — | `290px minmax(0, 1fr) 280px` → `295px minmax(0, 1fr) 290px` | — | — | — | — | — | — | — |
| B25 | `.layout` à deux colonnes | — | — | — | — | `minmax(0, 1.2fr) minmax(320px, 0.8fr)` ; gap 20px ; défaut (N0) → dès `min-width 900px` (N1) | — | — | — | — | — | — |
| B26 | `.layout` mobile | — | — | — | — | 1 colonne ; gap 16px (N1 ; N0 : 2 colonnes par défaut) | — | — | — | — | — | — |
| B27 | `.full-panel` | — | — | — | — | `grid-column 1 / -1` dès 900px (N2) | — | — | — | — | — | — |
| B28 | `.ambient-list` | — | — | — | `repeat(2, minmax(0, 1fr))` ; 1 colonne sous 560px | — | — | — | — | — | — | — |
| B29 | `.shell` : barre latérale + espace de travail | — | — | — | — | — | — | — | — | — | `250px 1fr` (99c91a87) → `250px minmax(0, 1fr)` (b44de130) | — |
| B30 | App v1 : barre latérale + zone de travail | — | — | — | — | — | — | — | — | — | `minmax(220px, 25%) 1fr` ; iPad 2fr / 6fr (62846504) ; ✗ aeca0395 | — |
| B31 | App v2 : trois volets rail / liste / éditeur | — | — | — | — | — | — | — | — | — | `78px minmax(245px, 300px) minmax(0, 1fr)` (aeca0395) ; rail replié 56px (743c7e94) | — |
| B32 | App v2 iPad | — | — | — | — | — | — | — | — | — | rail 72px ; liste `minmax(215px, 30%)` (aeca0395) | — |
| B33 | Zone de travail des tâches | — | — | — | — | — | — | — | — | — | colonnes 2 à fin ; iPad : 1/3 droite, 1/-1 bas (e87af217) | — |
| B34 | Journal : rail Hostinger | — | — | — | — | — | — | — | — | — | 136px date / 44px nœud / carte ; max 850px (83de6dd4) ; Tailwind lg 3 colonnes (1274fca0) | — |
| B35 | `.screen`, `.screen-header` | — | — | — | — | — | — | grille, gap 18px ; flex, `align-items: end`, `space-between` (S1) | — | — | — | — |
| B36 | Grilles internes aux composants | `.card` compacte, `.lib-tile`, `.card-pdf`, `.player` | — | — | — | — | `minmax(0, 1fr) auto auto` ; `1fr auto` ; `auto 1fr` ; `auto 1fr auto` | — | — | — | — | — |

### C. Modèle de navigation

| id | élément | alias | E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| C01 | Modèle principal | — | dock bas + barre d'outils haute (b6647a04) → barre de navigation basse `.nav-bar` (ea104c22) | dock bas « thumb-first » (4da62555) → barre unique (4a4da608) → + îlot du haut (2c7478e4) | aucune navigation : page unique, 3 colonnes | dock bas flottant + FAB ; pas de barre latérale | dock bas → barre latérale dès 48em (f1b51602) | dock bas flottant (onglets + bouton +) | barre latérale + dock bas <760px (57c25ea2) → rail 72px 761-1100px (c80dbb09) → routes (7598f175) | dock bas : îles + FAB | barre latérale (99c91a87) → barre latérale + zone de travail, rail droit miroir, barre basse (62846504) → 3 volets + dock bas (aeca0395) | dock bas flottant (îlot) ; ni barre latérale ni rail |
| C02 | Entrées de la navigation basse (nombre : liste) | — | îlot création + champ de recherche (b6647a04) → 4 : Notes, Recherche, Bibliothèque, Réglages + FAB (ea104c22) | 2 : Bibliothèque, Réglages + groupe pouce (4da62555) → 4 : Notes, Bibliothèque, Recherche, Réglages (4a4da608) → 4 : Notes, Tâches, Bibliothèque, Réglages (2c7478e4) | — | 4 : Notes, Bibliothèque, Recherche, Réglages + FAB (94f8e515) | 4 : Notes, Bibliothèque, Recherche, Réglages (b1f17318) → 5 : Accueil, Notes, Tâches, Listes, Calendrier (32e9bd9e, 2026-11-08) → 4 : Aujourd'hui, Notes, Agenda, Bibliothèque (f1b51602, 2026-11-08) | 4 : Notes, Bibliothèque, Recherche, Réglages + bouton + (S1) | dock mobile flex + central (57c25ea2) → grille de 5 colonnes (34172c2a) ; document : Notes, Tâches, Recherche, Réglages, + (1f5a70d2) | 4 : Notes, Tâches, Bibliothèque, Réglages + FAB (9021b9bc) → 3 + 2 + FAB (d2819fcc) → 5 : Notes, Tâches, Bibliothèque, Recherche, Paramètres + FAB (6dbe9114) | dock bas « 3 colonnes » (aeca0395), entrées non listées | 3 : Notes, Tâches, Réglages (128050ce) → + « + » (c74ffb69) ; branche non fusionnée : 2 + « + » (7dd4d041) |
| C03 | Recherche | — | champ dans le dock (b6647a04) → onglet + page `.app-header.is-search` (ea104c22) | îlot recherche / micro (4da62555) → onglet (4a4da608) → dans l'îlot du haut (2c7478e4) | — | onglet (N0) | onglet (b1f17318) → dans l'en-tête (32e9bd9e) | onglet (S1) | onglet du dock (document 1f5a70d2) | mode de l'île du haut (9021b9bc) → îlot Outils (d2819fcc) → destination du dock (6dbe9114) | — | — |
| C04 | Bouton « + » / FAB : placement | — | îlot de création du dock (b6647a04) → FAB (ea104c22) | groupe pouce (4da62555) → « + » du côté du pouce, `is-compact` en sélection (4a4da608) | — | FAB à droite du dock (N0) | « + » du côté de la main (b1f17318) → centré au-dessus de la barre mobile, `bottom: calc(100% + var(--space-3))` (f1b51602) | bouton + à droite ; grille `repeat(4, minmax(0, 1fr)) auto`, gap 10px, padding 12px 10px | central surélevé, `margin-top: -20px` (57c25ea2) → un des 5 emplacements du dock (34172c2a, 1f5a70d2) | FAB du côté de la main (9021b9bc) → FAB, `data-hand` ne positionne plus le dock (6dbe9114) | — | action « + » dans le dock, séparée par un diviseur de 1px, marge 4px (c74ffb69) |
| C05 | Barre ou île du haut | — | barre d'outils `.island.toolbar` (b6647a04) | îlot du haut `HeaderTools` : recherche, filtre / tri, apparence (2c7478e4) | — | — | en-tête : Recherche et Réglages (32e9bd9e) | — | barre du haut (57c25ea2) | île du haut : Recherche (9021b9bc) → top bar : avatar-chip, bascule cartes / liste, tri, filtre (d2819fcc) | — | — |
| C06 | Barre latérale | `.sidebar` | — | — | colonne gauche de la grille de page (A) | — | dès 48em et 30em : pouce masqué, île sans verre ; 176px (commentaire 2bd9ec0b) ; 52px par bouton ; `--nav-rail` (f1b51602) | — | avec marque, navigation, carte « privacy », pied avec version (57c25ea2) | — | 250px (99c91a87) ; `minmax(220px, 25%)` (62846504) ; ✗ aeca0395 ; `.shell` partiellement remplacé (b44de130) | — |
| C07 | Rail (barre latérale étroite) | — | — | — | — | — | — | — | 72px, 761-1100px, bouton développer / réduire (c80dbb09) | — | 78px ; replié 56px (743c7e94) ; iPad 72px | — |
| C08 | Tiroir mobile des Paramètres | — | — | — | — | — | — | — | — | — | `min(90vw, 340px)` (d5c96cef) | — |
| C09 | Barre d'outils de l'éditeur (dock d'édition) | `.editor-dock` | — | `.editor-dock` ; ≥64em largeur `min(760px, 100% - var(--edge) - var(--edge-r))` (ba6e7b28) | — | — | île flottante `bottom: calc(var(--dock-bottom) + 64px)` (32e9bd9e) → barre fixe en bas de l'éditeur, bordure haute (f1b51602) | — | — | ? | sticky bottom 8px + zone sûre, rayon 20px, extensible (aeca0395) | îlot fixe au-dessus du dock, « within thumb reach » (93b47014) |
| C10 | Menu ou panneau de création | — | menu Créer en tuiles (ea104c22) | créer en 3 choix (4a4da608) | — | — | panneau du bas sur mobile (`.layer[data-mode='create']`) ; menu ancré sur tablette (f1b51602) | — | — | — | — | — |
| C11 | Réglages : feuille puis page | — | `.menu[data-mode=settings]` (b6647a04) ; ✗ ea104c22 | feuille → page avec une route par section : liste groupée sur téléphone, vue scindée ≥64em (47c570df) | — | onglet Réglages (N0) | feuille du bas (b1f17318) → pleine page (32e9bd9e) | onglet Réglages (S1) | route `/settings` (7598f175) | liste de sections + détail ≥64em, feuilles <64em (d2819fcc) | sidebar sticky 250px + tiroir mobile (d5c96cef) | page `/settings` : vue factice (128050ce) → sauvegarde (0a15c7ce) → restauration (4381e483) |
| C12 | Routes et adresses | — | — | `#/reglages/<section>` (47c570df) | — | aucun routeur : bascule d'état `activeView` (N2) | — | — | `/`, `/settings`, `/about` ; 404 statique (7598f175) | — | — | `/`, `/notes/<uuid>`, `/tasks`, `/settings` (da47d9f4) ; `/tasks` retirée sur branche non fusionnée (7dd4d041) |
| C13 | Largeur des onglets du dock | — | `--size-nav-tab` 52px (ea104c22) | boutons 44px, libellés 12px (fe7ee2da) | — | — | égale (b1f17318) → par libellé `--w1`..`--w4` (ad232dfb) → `flex: 1 1 0`, `--n: 5` (32e9bd9e) → `--n: 4` (f1b51602) | `repeat(4, minmax(0, 1fr)) auto` ; <440px : gap 6px, padding 10px 8px, onglet 62px, texte 0.74rem, bouton + 70px | 5 colonnes égales (34172c2a) | icône + libellé dessous, `--n: 3` + Outils icônes seules (d2819fcc) → `--n: 5` (6dbe9114) | — | — |
| C14 | Marqueur d'état actif (géométrie) | — | — | — | — | — | — | — | inset 3px `accent-text` à gauche (sidebar), 3px en haut (dock) (c80dbb09) | — | — | — |
| C15 | Liste et note sur téléphone | — | — | barre toujours présente (d6af8790) | — | — | — | — | éditeur plein écran (document 1f5a70d2) | — | liste d'abord ; note ouverte masque liste et dock bas (aeca0395) | bouton « ‹ Notes » ou nouvel appui sur l'onglet Notes (8f85ad28) |
| C16 | Focus au changement de vue | — | — | — | — | — | — | — | — | — | — | `<main>` reçoit le focus (8f85ad28) |
| C17 | Page d'accueil | — | — | — | — | — | — | — | héros `DashboardOverview` (57c25ea2) ; import retiré (c80dbb09) ; QuickCapture en tête (c2701fc1) | — | — | page Notes : vue factice (128050ce) → éditeur anonyme (93b47014) → éditeur de la note récente (c74ffb69) → liste Dexie (8f85ad28) → liste + recherche + sélection + rappel |
| C18 | Éditeur : conteneur | — | — | — | — | — | — | — | panneau `<dialog>` (57c25ea2) → zone défilante, tiroir Détails (e309072e) ; document : feuille droite max 680px tablette | — | — | sans cadre (2026-11-10) → carte 16px (2026-11-11) |

### D. Géométrie : dock, barre, rail, panneaux, marges, zones sûres

| id | élément | alias | E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D01 | Hauteur de la barre de navigation | — | — | 52px (fe7ee2da) | — | — | — | — | — | `--nav-h` 60px ; `--nav-height` 58px (nav-padding 4px) | — | 62px (pilule) |
| D02 | Bouton ou onglet de navigation (taille) | — | `--size-nav-tab` 52px (ea104c22) ; `--size-dock-btn` `var(--size-tap-md)` (`var(--size-tap)` ≤21.25em) | boutons 44px (fe7ee2da) | — | item 52px (N0) | `--dock-btn` 48px ; 48px sur mobile, 52px en barre latérale (f1b51602) | onglet 62px sous 440px | — | `--control-h` 52px | — | — |
| D03 | FAB (taille) | — | 60px (ea104c22) | 58px (4da62555) | — | 60px (N0) | `--fab`, valeur non relevée | — | `margin-top: -20px` (57c25ea2) → 52px, `margin-top: -12px`, bordure 4px (34172c2a) | 52px (9021b9bc) | — | — |
| D04 | Largeur du dock flottant | — | — | — | — | `min(92vw, 560px)` (N0) | `max-width` 540px (32e9bd9e) | `min(100%, 920px)` | — | — | — | `width: fit-content` |
| D05 | `--dock-max` | — | — | `calc(var(--layout-max) - 2 * var(--gutter) + 2 * var(--edge))` (ba6e7b28) | — | — | `calc(var(--layout-max) - 2 * var(--gutter) + 2 * var(--edge))` | — | — | ? | — | — |
| D06 | Forme du dock | — | — | — | — | rayon 24px (N0) → pilule 999px (N1) | — | pilule | — | — | — | pilule |
| D07 | Distance du dock au bas (`--dock-bottom`) | `bottom`, `--ms-dock-bottom` (E9) | — | `calc(var(--safe-bottom) + var(--space-2) + var(--kb))` (4da62555) | — | `max(16px, env(safe-area-inset-bottom))` | `calc(var(--safe-bottom) + var(--space-2) + var(--kb))` → `calc(var(--safe-bottom) + var(--space-2) + var(--dock-lift) + var(--kb))` (82aa90c2) | — | — | zone sûre + 8px + clavier | — | 16px + zone sûre (128050ce) |
| D08 | `--dock-lift` | — | — | — | — | — | `0px` (82aa90c2) ; 4px look glass et minimal ; 0px look paper | — | — | — | — | — |
| D09 | Réserve de bas de page (`--dock-space`) | `.ms-main` padding bas | — | `calc(var(--fab) + var(--safe-bottom) + var(--space-8))` (4da62555) → `calc(var(--dock-bottom) + var(--fab) + var(--space-6))` (35c0380c) | — | padding bas 120px | `calc(var(--dock-bottom) + var(--fab) + var(--space-6))` → `... + var(--space-4))` (82aa90c2) | `calc(var(--safe-bottom) + 120px)` | — | dock-bottom + nav-h + 24px | mobile : `calc(90-100px + safe-area)` | `target + space-2 * 2 + space-3 * 2 + env(safe-area-inset-bottom)` (128050ce) → dock-bottom + dock-height + 16px (93b47014) |
| D10 | `--layer-bottom` | — | — | `calc(var(--dock-bottom) + var(--fab) + var(--space-3))` (d6af8790) | — | — | = | — | — | ? | — | — |
| D11 | `--edge` | — | — | 12px | — | — | = → `var(--space-3)` (82aa90c2) | — | — | 12px | — | — |
| D12 | `--edge-l`, `--edge-r` | — | — | `calc(var(--edge) + var(--safe-l))`, `calc(var(--edge) + var(--safe-r))` (ba6e7b28) ; ≤26em sur `.main-dock` : `calc(10px + var(--safe-l))`, `calc(10px + var(--safe-r))` (e30d2cdc) | — | — | = | — | — | ? | — | — |
| D13 | `--safe-l`, `--safe-r` | — | — | `env(safe-area-inset-left, 0px)`, `env(safe-area-inset-right, 0px)` (ba6e7b28) | — | — | = | — | — | `--safe-*` définis, valeurs non détaillées | — | — |
| D14 | `--safe-top` | — | `env(safe-area-inset-top, 0px)` en ligne (`--menu-top`) | `env(safe-area-inset-top, 0px)` (4da62555) | — | — | = | `env(safe-area-inset-top)` via `--safe-top` ; défini, non utilisé dans les fichiers lus | — | `--safe-*` définis, valeurs non détaillées | — | — |
| D15 | `--safe-bottom` | — | — | `max(env(safe-area-inset-bottom, 0px), 8px)` (4da62555) | — | — | = → `max(env(safe-area-inset-bottom, 0px), var(--space-2))` (82aa90c2) | `env(safe-area-inset-bottom)` via `--safe-bottom`, formule non relevée | — | `max(env(safe-area-inset-bottom), 8px)` | — | — |
| D16 | Zone sûre basse hors jeton | — | `env(safe-area-inset-bottom, 0px)` dans `--size-popover-max-h` | — | — | dans le dock : `max(16px, env(safe-area-inset-bottom))` | — | — | dans le dock et l'éditeur | — | `env(safe-area-inset-bottom)` (62846504) | `env(safe-area-inset-bottom)` dans `--ms-dock-bottom` |
| D17 | `meta viewport` | — | `viewport-fit=cover` | = | `width=device-width, initial-scale=1.0` ; sans `viewport-fit` | `viewport-fit=cover` (N1) | `width=device-width, initial-scale=1, viewport-fit=cover, interactive-widget=resizes-content` (b1f17318) | `viewport-fit=cover` (S1) | `viewport-fit=cover` (57c25ea2) | `interactive-widget=resizes-content` cité | sans `viewport-fit=cover` ; barre d'état iOS `black-translucent` (d5c96cef) | `viewport-fit=cover` (87563ecf) |
| D18 | `--kb` (clavier virtuel) | — | `0px` | = ; appliqué seulement en saisie (35c0380c) | — | — | = ; ajouté au bas du dock | — | — | défini ; `interactive-widget=resizes-content` | — | — |
| D19 | Largeur maximale du contenu | `--layout-max`, `.app-shell`, `.app-layout`, `.workspace` | `--layout-max` 1280px | `--layout-max` 1180px | — | `.app-shell` 1200px | `--layout-max` 1180px | `.app-layout` 920px | ~1180px (document 1f5a70d2) | `--layout-max` 1180px | workspace 950px (99c91a87) ; Paramètres 1050px → 1120px (b44de130) | aucune |
| D20 | Marge latérale de la page | `--gutter`, `--space-screen`, `.ms-main` | `--space-screen` `var(--space-4)` ; `var(--space-6)` ≥48em | `--gutter` 16px | `.app-shell` padding 0.75rem sous 560px (576a8c9d) | — | `--gutter` 16px ; look paper 20px → `var(--space-4)` (ad232dfb) | 16px, puis 26px dès 680px (padding 20px 16px) | 17px (13px sous 390px) ; tablette 48-56px (document 1f5a70d2) | `--gutter` 16px | workspace 25px ; mobile 15px (aeca0395) | 16px (`padding: var(--ms-space-4) var(--ms-space-3)`, 24px / 16px) |
| D21 | Hauteur de page ou d'éditeur | — | — | — | `#editor` min-height 72vh ; mode focus `calc(100vh - 2rem)` | — | — | — | — | — | 100dvh (app) ; éditeur min-height `max(560px, 78dvh)`, mobile 100dvh (aeca0395) | `.ms-app` min-height 100dvh ; surface d'édition min-height 40dvh |
| D22 | Hauteur maximale des popovers et calques | — | `--size-popover-max-h` ; `--size-sel-popover-max-h` (voir D24, D26) | — | — | — | `.layer` / `.sheet` : `calc(100dvh - var(--safe-top) - var(--layer-bottom) - var(--space-6))` → `... - var(--space-4))` (82aa90c2) ; `.sheet` : `calc(100dvh - var(--safe-top) - var(--space-6))` → `... - var(--space-4))` | — | — | — | — | — |
| D23 | `--size-dock-clearance` | — | 84px | — | — | — | — | — | — | — | — | — |
| D24 | `--size-popover-max-h` | — | `calc(100dvh - var(--size-dock-clearance) - var(--space-6) - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px))` | — | — | — | — | — | — | — | — | — |
| D25 | `--size-sel-clearance` | — | 92px | — | — | — | — | — | — | — | — | — |
| D26 | `--size-sel-popover-max-h` | — | `calc(100dvh - var(--size-sel-clearance) - var(--space-6) - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px))` | — | — | — | — | — | — | — | — | — |
| D27 | `--size-list-bottom` | — | 184px | — | — | — | — | — | — | — | — | — |
| D28 | `--size-float-bar`, `--float-offset` | — | 64px ; `--float-offset` 0px, `.has-float-bar` = `var(--size-float-bar)` | — | — | — | — | — | — | — | — | — |
| D29 | `--size-masonry-row` | — | 1px | — | — | — | — | — | — | — | — | — |
| D30 | `--layout-list-max` | — | 720px | — | — | — | — | — | — | — | — | — |
| D31 | `--layout-float-max` | — | 616px | — | — | — | — | — | — | — | — | — |
| D32 | `--layout-map-w` | — | 64rem ; `.sheet[data-mode=map]` `min(var(--layout-map-w), 100vw)` ≥48em | — | — | — | — | — | — | — | — | — |
| D33 | `--layout-popover-w` | — | 340px | — | — | — | — | — | — | — | — | — |
| D34 | `--layout-settings-w` | — | 620px ; ✗ ea104c22 | — | — | — | — | — | — | — | — | — |
| D35 | `--layout-sheet-w` | — | 36rem ; `.sheet` `min(var(--layout-sheet-w), 100vw)` ≥48em | — | — | — | — | — | — | — | — | — |
| D36 | `--layout-toast-max` | — | 608px | — | — | — | — | — | — | — | — | — |
| D37 | `--space-edge` | — | `var(--space-3)` ; `var(--space-1)` ≤21.25em | — | — | — | — | — | — | — | — | — |
| D38 | `--edge-inset` | — | `max(var(--space-screen), calc((100vw - var(--layout-max)) / 2 + var(--space-screen)))` ; `.is-editing` `var(--space-screen)` ≥64em | — | — | — | — | — | — | — | — | — |
| D39 | `--menu-top`, `--popover-top`, `--popover-right` | — | `calc(env(safe-area-inset-top, 0px) + var(--space-3))` ; `var(--menu-top)`, `var(--space-edge)` (ea104c22) | — | — | — | — | — | — | — | — | — |
| D40 | `--search-field-w` | — | `min(var(--layout-float-max), calc(min(100vw, var(--layout-max)) - ...))` ; ✗ ea104c22 | — | — | — | — | — | — | — | — | — |
| D41 | Décalages d'alignement | `--offset-checkbox`, `--offset-icon-baseline` | `.2em` ; `-.125em` | — | — | — | — | — | — | — | — | — |
| D42 | `.sheet.welcome` | — | ≥48em : `inset: 50% auto auto 50%` ; largeur `min(28rem, calc(100vw - 2 * var(--space-6)))` ; hauteur `min(42rem, calc(100dvh - 2 * var(--space-6)))` (637a0265) | `--layer-bottom: var(--dock-bottom)` (d6af8790) ; ✗ 35c0380c | — | — | — | — | — | — | — | — |
| D43 | Barre de sélection : libellés des actions | `.sel-bar .action-btn` | ≤21.25em : `span` `position: absolute`, 1px × 1px | `span` `display: block`, bouton 72px ≥40em (801d11fb) ; ✗ ba6e7b28 ; ≥40em et ≥30em (ba6e7b28) | — | — | — | — | — | — | — | — |
| D44 | Calques et feuilles : largeur ≥40em | `.layer`, `.sheet` | `.sheet` `min(var(--layout-sheet-w), 100vw)` | `--layer-w` 380px ; `.sheet` `min(560px, ...)` → `min(600px, calc(100vw - 2 * var(--edge)))` (801d11fb) | — | — | `--layer-w` 380px ; `.sheet` `min(600px, calc(100vw - 2 * var(--edge)))` | — | — | `--layer-w` 380px | — | — |
| D45 | `--drawer-w` | — | — | `min(26rem, 45vw)` (ef23bea4) | — | — | = | — | — | = | — | — |
| D46 | Tiroirs `[data-drawer]` : position | — | — | `inset: calc(var(--safe-top) + var(--edge)) var(--edge-r) var(--dock-bottom) auto` → `... var(--layer-bottom) auto` (d6af8790) → `... var(--dock-bottom) auto` (35c0380c) | — | — | — | — | — | — | — | — |
| D47 | Inspecteurs (Plan, Historique) : tiroir non modal à droite | `.layer[data-inspector]` | — | `.editor-dock` décalé de `calc(var(--drawer-w) + var(--edge-r) + var(--edge))` (ef23bea4) | — | — | ≥48em : `min(380px, calc(100vw - var(--nav-rail) - var(--space-4)))` ; `inset: calc(var(--safe-top) + var(--space-2)) var(--edge-r) calc(var(--safe-bottom) + var(--space-2)) auto` (f1b51602) | — | — | — | — | — |
| D48 | Toast : position | `.toast` | `--layout-toast-max` 608px (D36) | `left: auto` ; `right: var(--dock-inset-r)` ≥40em et ≥30em (ba6e7b28) ; ✗ 35c0380c ; messages en haut (35c0380c) | fixed ; right 1rem ; bottom 1rem | — | `top: calc(var(--safe-top) + var(--space-3))` ; `left: 50%` ; `max-width: calc(100vw - var(--edge-l) - var(--edge-r))` ; `width: max-content` | — | — | — | — | — |
| D49 | Barre d'enregistrement | `.rec-bar` | — | `left: auto` ; `right: var(--dock-inset-r)` ≥40em et ≥30em (35c0380c) | — | — | = ; `bottom: calc(var(--dock-bottom) + var(--fab) + var(--space-3))` | — | — | — | — | — |
| D50 | `.main-dock` | — | — | `justify-content: flex-end` ≥40em (4a4da608) ; ✗ ba6e7b28 ; ≥40em et ≥30em (ba6e7b28) ; ≤26em : `#nav-island` `padding-inline: 2px` | — | — | mobile : `left` / `right` `var(--space-2)` (<47.99em), `var(--space-1)` (<22em) ; `max-width` 540px (32e9bd9e) ; ≥48em et ≥30em : `inset: calc(var(--safe-top) + var(--space-4)) auto calc(var(--safe-bottom) + var(--space-4)) var(--edge-l)`, `width` 152px, `max-width: none` (f1b51602) | — | — | — | — | — |
| D51 | `.dock` en vue scindée (≥64em) | `body.is-editing .dock` | `width: var(--layout-split-list)` ; `right: auto` | `right: calc(50% + var(--edge))` (4da62555) → `auto` (ba6e7b28) ; `left: var(--edge-l)` ; `width: calc(var(--split-list) - var(--edge-l) - var(--edge))` ; `max-width: none` (ba6e7b28) | — | — | — | — | — | — | — | — |
| D52 | `.dock` : position de base | — | — | — | — | — | fixed ; `left: var(--edge-l)` ; `right: var(--edge-r)` ; `bottom: var(--dock-bottom)` ; `max-width: var(--dock-max)` | — | — | — | — | — |
| D53 | `.editor-dock` : position et largeur | — | — | ≥64em : `left: auto` ; `right: var(--edge-r)` ; `width: min(760px, 100% - var(--edge) - var(--edge-r))` (ba6e7b28) | — | — | `max-width: 760px` ; ≥64em : `width: min(760px, 100% - var(--edge) - var(--edge-r))`, `left: auto` (b1f17318) ; `bottom: var(--dock-bottom)` ; `calc(var(--dock-bottom) + 64px)` (32e9bd9e) → `var(--dock-bottom)` (f1b51602) ; `.editor .editor-dock` : position relative, `inset: auto`, `width: 100%`, `max-width: none` (f1b51602) | — | — | — | — | — |
| D54 | `.editor-dock` ≤30em de haut | — | — | `flex-direction: row` (ba6e7b28) ; ✗ 35c0380c ; `.editor.is-formatting::after` hauteur `calc(var(--dock-bottom) + var(--fab) + var(--fade))` ; ✗ 35c0380c | — | — | — | — | — | — | — | — |
| D55 | Éditeur pleine largeur (`note-wide`) | `body.note-wide` | — | ≥64em : `.editor` `left: 0` ; `.editor-dock` `left: 0`, `right: 0`, `margin-inline: auto` (c218aba2) | — | — | ≥64em et ≥30em : `.editor` `left: var(--nav-rail)` (1c1fb148) | — | — | — | — | — |
| D56 | Largeur d'écriture | `--layout-editor-max`, `data-editor-width` | `--layout-editor-max` 680px | — | — | — | narrow `(100% - 40rem) / 2` ; normal 55rem ; full `gutter` (1c1fb148) | — | feuille droite max 680px sur tablette (document 1f5a70d2) | narrow 600px ; normal 760px ; full 100% (d2819fcc) | — | — |
| D57 | `--nav-rail`, `--workspace-gap` | — | — | — | — | — | `--nav-rail` 0px ; `.page` `width: calc(100% - var(--nav-rail))` (f1b51602) ; `--workspace-gap` `clamp(var(--space-3), 2vw, var(--space-5))` (1c1fb148) | — | — | — | — | — |
| D58 | Calque Croquis | `.layer[data-mode='sketch']` | — | — | — | — | `width: min(48rem, calc(100vw - 2 * var(--space-3)))` ; `max-height: calc(100dvh - var(--space-4))` ; `inset: auto auto var(--space-3) 50%` ; `translate: -50% 0` (1c1fb148) | — | — | — | — | — |
| D59 | `.search-dock`, `.widget`, `.sheet-grabber` (≥40em et ≥30em) | — | — | `.search-dock > *` `width: min(34rem, 100%)` (ba6e7b28) ; `.widget` `width: 220px` (801d11fb) ✗ 4a4da608 ; `.widget` `max-width: none`, `justify-content: flex-end` ; `.sheet-grabber` `display: none` (35c0380c) | — | — | — | — | — | — | — | — |
| D60 | Menu rapide | `.quick-menu` | — | — | — | — | — | `position: absolute` ; `right: 12px` ; `bottom: 96px` ; `width: min(246px, 100vw - 36px)` (S3) | — | — | — | — |
| D61 | Cible de contrôle (spécification) | — | — | — | — | — | — | — | — | cibles 46px ; îlot gauche 210px (~70px par section) + 14px + îlot droit 150px sur 390px ; marge de garde 12px (d2819fcc) | — | — |
| D62 | Pile basse : barre d'outils au-dessus du dock | `.ms-editor__toolbar` | — | — | — | — | — | — | — | — | — | `inset-block-end: var(--ms-toolbar-bottom)` = dock-bottom + 62px + 8px ; z-index 9 sous le dock (10) (93b47014) |
| D63 | Éditeur : marge basse | `.ms-editor` | — | — | — | — | — | — | — | — | — | `padding-bottom: calc(var(--ms-toolbar-height) + var(--ms-space-2))` (93b47014) |
| D64 | En-tête de note | `.ms-note__header`, `.ms-note__bar` | — | — | — | — | — | — | — | — | — | colonne, gap 8px, margin-block-end 16px (8f85ad28) ; barre : ligne, `flex-wrap`, `space-between` (4381e483) |
| D65 | Bannière de rappel | `.ms-reminder` | — | — | — | — | — | — | — | — | — | bloc au-dessus de la liste ; margin-block-end 16px ; padding 16px (822c9496) |
| D66 | Barre de sélection | `.ms-selectbar` | — | — | — | — | — | — | — | — | — | flex, `flex-wrap`, `align-items: center`, gap 8px, margin-block-end 16px (339dbce0) |
| D67 | Dialogue de confirmation | `.ms-dialog` | — | — | — | — | — | — | — | — | — | `showModal` ; `width: min(28rem, 100% - 32px)` ; padding 16px (4381e483) |
| D68 | `.page` pendant l'édition (≥64em) | `body.is-editing .page` | `.header-bar`, `.info-bar`, `.note-list` : `max-width: var(--layout-split-list)` | `margin-inline-end: 50%`, `margin-inline-start: 0` (4da62555) ; ✗ ba6e7b28 ; `max-width: var(--split-list)` (ba6e7b28) | — | — | — | — | — | — | — | — |
| D69 | `.split-hidden`, `.split-only` | — | `display: none` ; `display: grid` ≥64em | `none !important` ; `grid !important` (4da62555) | — | — | — | — | — | — | — | — |
| D70 | Toast et rec-bar en vue scindée | — | — | `left: calc(var(--split-list) / 2)` ; `right: auto` (ba6e7b28) | — | — | — | — | — | — | — | — |
| D71 | Groupe pouce en vue scindée | `.thumb-row`, `.thumb-group`, `.search-dock` | — | `flex-direction: row` ; `justify-content: flex-end` ; `.dock.thumb-row` `row-reverse` ; `.search-dock > *` `width: auto` (ba6e7b28) | — | — | — | — | — | — | — | — |
| D72 | `.sheet` : hauteur et ancrage ≥40em et ≥30em | — | — | `height: fit-content` ; `inset: 0` (801d11fb) → `0 0 var(--layer-bottom)` (d6af8790) | — | — | `inset: 0 0 var(--layer-bottom)` | — | — | — | — | — |
| D73 | `--dock-inset-l`, `--dock-inset-r` | — | — | `max(var(--edge-l), (100vw - var(--dock-max)) / 2)`, `max(var(--edge-r), (100vw - var(--dock-max)) / 2)` (ba6e7b28) | — | — | = | — | — | ? | — | — |
| D74 | Barre de format (≥64em) | `.format-bar`, `.format-strip` | `left: var(--layout-split-list)` ; `justify-content: center` (b6647a04) ; `.format-strip` centré (637a0265) | — | — | — | — | — | — | — | — | — |

### E. Comportements par taille d'écran et manifeste

| id | élément | alias | E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| E01 | Téléphone | — | labels des actions de sélection masqués ≤21.25em ; colonnes : 2 | une colonne pleine largeur ; feuilles du bas avec poignée ; messages en haut (35c0380c) | 1 colonne sous 1100px ; padding 0.75rem sous 560px | 1 colonne, gap 16px | dock bas ; création en panneau bas sous 47.99em ; Réglages 1 colonne sous 64em | 1 colonne ; onglets resserrés sous 440px | barre du haut + dock bas sous 760px (57c25ea2) ; éditeur plein écran (document) | dock bas ; Réglages en feuilles sous 63.99em (d2819fcc) | liste d'abord ; note ouverte masque liste et dock (aeca0395) | une colonne ; contenu = largeur − 2 × 16px |
| E02 | Tablette | — | 3 colonnes ≥48em ; feuilles 36rem | feuilles centrées 600px ; menus ancrés au bouton (801d11fb) ; volets en coins (ba6e7b28) ; grille fluide 15rem (35c0380c) | — | 2 colonnes dès 900px | barre latérale dès 48em (f1b51602) ; vue scindée dès 64em | marges latérales 26px dès 680px | rail 72px entre 761 et 1100px (c80dbb09) ; éditeur en feuille droite (document) | — | iPad 768-1199px : rail 72px, liste `minmax(215px, 30%)` (aeca0395) | identique au téléphone (aucune requête) |
| E03 | Bureau | — | 4 colonnes ≥64em hover fin ; liste + éditeur scindés ≥64em | liste et note côte à côte ≥64em : 50 % (4da62555) → liste `--split-list` (ba6e7b28) | 3 colonnes au-dessus de 1100px | 2 colonnes dès 900px | barre latérale + vue scindée ; grilles ≥64em et ≥30em (1c1fb148) | — | sidebar 250px ; contenu max ~1180px (document) | liste + détail des Réglages dès 64em (d2819fcc) | bureau ≥1200px (DESIGN_SYSTEM.md) : 3 volets (aeca0395) | contenu = largeur − 2 × 16px ; aucune largeur maximale |
| E04 | Mode focus | — | — | — | `body.focus-mode` masque `.sidebar`, `.tools-panel`, `.topbar` ; `.editor-area` `grid-column: 1 / -1` (3c6f6152) | — | — | — | — | — | — | — |
| E05 | Ordre des blocs en 1 colonne | — | — | — | sous 1100px : `.sidebar`, `.tools-panel` `order: 2` ; `.editor-area` `order: 1` (A) | — | — | — | — | — | — | — |
| E06 | Orientation (manifeste) | — | — | — | absente (A) → `portrait-primary` (576a8c9d) | `portrait` (N1) | — | `portrait` (S1) | — | — | — | — |
| E07 | Affichage (manifeste) | — | — | — | `standalone` (A) | `standalone` (N1) | — | — | — | — | — | — |
| E08 | Adresse de départ et base | — | — | — | `start_url` / `scope` "/" (A, B, C) → "./" (a488cc67) ; base Vite "./" (a488cc67) | `start_url` "/" (N1) | — | — | — | — | — | — |
| E09 | Largeurs de vérification | — | — | — | — | — | 390 / 768 / 1280 (190af4b5) ; + 320 et 820 (f1b51602) ; « Bibliothèque fits, 360-820px » | — | — | — | — | 360px cité (c74ffb69) ; 390 × 780 (scripts) |
| E10 | Téléphone en paysage | — | — | `max-height: 30em` (ba6e7b28) | — | — | `max-height: 30em` : `--text-title` réduit | — | — | `max-height: 30em` | — | — |

### F. Mode main gauche / droite

| id | élément | alias | E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| F01 | Mode gaucher (`data-hand`) | `body[data-hand=left]` | ? | inversion du dock, des feuilles et des tiroirs (4da62555) ; règles `.layer` / `.sheet` `left: var(--edge)`, `right: auto` ≥40em ✗ 801d11fb ; `--drawer-from: -24px` (ba6e7b28) ; `.editor` `padding-inline: calc(var(--drawer-w) + var(--edge-l)) 0` avec inspecteur (ef23bea4) | — | — | `body[data-hand='left']` inverse barres et menus ; préférence `hand` (b1f17318) | — | — | `data-hand` gauche / droite, dock côté de la main (9021b9bc) → ne positionne plus le dock (6dbe9114) | — | — |
| F02 | Position du rail iPad | `mindspace-appearance-v1` | — | — | — | — | — | — | — | — | gauche / droite / bas ; jamais déduit automatiquement (bf81e3ca) | — |

## 3. Détail des changements

### 3.1 États des dispositions par période, version par version

Chaque ligne donne l'état de la disposition pendant la période indiquée (dates des commits des entrées). Une disposition qui ne change pas dans une version n'est pas répétée.

**E0 (`notes-v3`, builds `notes-site`)**

| Disposition | Période | État |
|---|---|---|
| Navigation | 2026-10-09 → 2026-10-15 (bundle v2.0.0 à 26.10.9.5, `notes-v3@b6647a04` 2026-10-09) | barre d'outils en haut (`.island.toolbar`) ; dock bas avec îlot de création (`.create-island`) et champ de recherche (`#main-dock [role=search]`) ; popovers et menus (`.menu`, `.popover`) |
| Navigation | dès 2026-10-15 (bundle 26.10.15.1, `notes-v3@ea104c22`) | barre de navigation `.nav-bar` en bas : 4 `.nav-tab` (Notes, Recherche, Bibliothèque, Réglages ; `--size-nav-tab` 52px) + `.fab` 60px ; menu Créer en tuiles ; recherche en page (`.app-header.is-search`) ; fin de la lignée `notes-site` |
| Colonnes de la liste | 2026-10-09 → 2026-10-15 | `--layout-columns` 2 ; 3 dès 48em ; 4 dès 64em avec hover fin ; 1 pendant l'édition dès 64em |
| Largeur maximale | 2026-10-09 → 2026-10-15 | `--layout-max` 1280px |
| Réglages | 2026-10-09 → 2026-10-15 | `.menu[data-mode=settings]` largeur `min(var(--layout-settings-w), calc(100vw - 2 * var(--space-edge)))` dès 48em, `--layout-settings-w` 620px, `.menu-cols` 2 colonnes ; supprimés à `ea104c22` 2026-10-15 |
| Accueil | 2026-10-09 (`notes-v3@637a0265`, « Notes 2.1.0 ») | `.sheet.welcome` centrée dès 48em, `.format-strip` centré dès 64em |

**E1 (`notes-v3`, source)**

| Disposition | Période | État |
|---|---|---|
| Navigation basse | 2026-10-18 (`4da62555`, 26.10.18.1) | dock « thumb-first » : îlot de navigation (Bibliothèque, Réglages) + groupe pouce (îlot recherche / micro + FAB 58px), inversé pour gaucher ; feuilles du bas |
| Navigation basse | 2026-10-18 (`801d11fb`, 26.10.18.2) | Bibliothèque en page pleine (tuiles, dossiers), récap en bande défilante ; tablette : menus ancrés au bouton, feuilles centrées 600px |
| Navigation basse | 2026-10-18 (`4a4da608`, 26.10.18.3) → 2026-10-31 | une seule barre : Notes · Bibliothèque · Recherche · Réglages, « + » du côté du pouce (`is-compact` en sélection) |
| Navigation basse | dès 2026-10-31 (`2c7478e4`, 26.10.31.4) | barre : Notes · Tâches · Bibliothèque · Réglages ; recherche, filtre / tri, apparence dans l'îlot du haut (`HeaderTools`) |
| Navigation basse | 2026-10-29 (`fe7ee2da`, 26.10.29.5) | barre 52px, boutons 44px, libellés 12px ; `@media (max-width: 26em)` resserre la barre (cas 360px) |
| Panneaux | 2026-10-18 (`4da62555`) | dès 40em : calques latéraux `--layer-w` 380px ; dès 64em : liste et éditeur côte à côte (50 %) |
| Panneaux | 2026-10-19 (`ba6e7b28`, 26.10.19.1) | volets en coins, panneaux latéraux `--drawer-w`, plein écran, `max-height: 30em` pour téléphone horizontal, `--safe-l` / `--safe-r` ; liste de la vue scindée = `--split-list` |
| Panneaux | 2026-10-19 (`d6af8790`, 26.10.19.2) | `@container list` remplacé par des requêtes média ; Bibliothèque est une page ; la barre ne disparaît plus |
| Panneaux | 2026-10-21 (`35c0380c`, 26.10.21.1) | téléphone : une colonne pleine largeur ; tablette : grille fluide 15rem ; liste à côté d'une note `clamp(22rem, 34vw, 30rem)` ; feuilles du bas avec poignée ; messages en haut |
| Réglages | 2026-10-31 (`47c570df`, 26.10.31.5) | page : liste groupée sur téléphone, vue scindée (liste + section) dès 64em, route `#/reglages/<section>` |

**E2 (`notepad-pwa`)** : A = `notepad-pwa@3c6f6152` 2026-10-20, B = `576a8c9d`, C = `76dfefe5`, D = `a488cc67` (dates de B, C, D non données).

| Disposition | Période | État |
|---|---|---|
| Grille de page | A | `290px minmax(0, 1fr) 280px` |
| Grille de page | B → C | `295px minmax(0, 1fr) 290px` |
| Petit écran | A | point de rupture 1100px (1 colonne) ; pas de point de rupture 560px |
| Petit écran | B → C | + point de rupture 560px (`.app-shell` padding 0.75rem, `.topbar` `flex-wrap`, `.ambient-list` 1 colonne) |
| Manifeste | A | `orientation` absente ; `start_url` "/" |
| Manifeste | B | `orientation: portrait-primary` |
| Manifeste | D | `start_url` / `scope` "./" ; base Vite "./" |

**E3 (`notes-4`)** : N0 = `notes-4@94f8e515`, N1 = `28ad8ce4`, N2 = `6f00cf58`, N3 = `854f07b5`, N4 = `8150588e`, tous 2026-10-22.

| Disposition | Période | État |
|---|---|---|
| Dock | N0 | `dock-shell` rayon 24px |
| Dock | N1 → N4 | pilule 999px |
| `.layout` | N0 | 2 colonnes par défaut, repli à 1 colonne sous 900px (`max-width`) |
| `.layout` | N1 → N4 | 1 colonne (gap 16px) ; 2 colonnes dès `min-width: 900px` (gap 20px) |
| `.full-panel` | N2 → N4 | `grid-column: 1 / -1` dès 900px |
| Navigation | N2 → N4 | bascule d'état `activeView` (pas de routeur) |
| Manifeste | N1 | `portrait`, `standalone`, `viewport-fit=cover` |

**E4 (`notes-v5`)**

| Disposition | Période | État |
|---|---|---|
| Dock | 2026-10-21 (`b1f17318`) → 2026-11-08 | 4 entrées : Notes, Bibliothèque, Recherche, Réglages, `--n: 4`, onglets d'abord de largeur égale puis largeurs par libellé `--w1`..`--w4` (`ad232dfb` 2026-10-21) ; « + » du côté de la main |
| Dock | 2026-11-08 (`32e9bd9e`) | 5 entrées : Accueil, Notes, Tâches, Listes, Calendrier, `--n: 5` ; Recherche et Réglages dans l'en-tête ; Réglages en pleine page |
| Dock | dès 2026-11-08 (`f1b51602`) | 4 entrées : Aujourd'hui, Notes, Agenda, Bibliothèque, `--n: 4` ; barre latérale dès 48em et 30em ; « + » centré au-dessus de la barre mobile |
| Éditeur : barre d'outils | 2026-11-08 (`32e9bd9e`) | île flottante `bottom: calc(var(--dock-bottom) + 64px)` |
| Éditeur : barre d'outils | dès 2026-11-08 (`f1b51602`) | barre fixe au bas de l'éditeur, bordure haute |
| Réglages | 2026-10-21 (`b1f17318`) | feuille du bas |
| Réglages | 2026-11-08 (`32e9bd9e`) | pleine page |
| Réglages | dès 2026-11-11 (`2bd9ec0b`) | deux colonnes `.settings-layout` ; 1 colonne sous 64em |
| `--dock-bottom`, `--edge`, `--safe-bottom`, `--dock-space` | 2026-10-21 (`b1f17318`) → (`82aa90c2`, même jour) | valeurs initiales puis remplacées (voir 3.2) |
| Largeur d'écriture | dès 2026-11-11 (`1c1fb148`) | `data-editor-width` narrow / normal / full ; éditeur pleine largeur dès 64em et 30em |

**E5 (`notes-svelte`)** : S1 = `2923c47d`, S2 = `112ae9d8`, S3 = `96889f8d`, tous 2026-10-22 (S3 = HEAD). Aucune disposition ne change entre S1 et S3 dans l'entrée, sauf que `BottomNavigation.svelte` apparaît en S3 (voir section 6).

**E6 (`notes-v6`)** : ligne main V0 = `57c25ea2` 2026-10-28 → V9 = `c2701fc1` 2026-11-02.

| Disposition | Période | État |
|---|---|---|
| Navigation | V0 (2026-10-28) | barre latérale fixe 250px (220px sous 1100px) avec marque, navigation, carte « privacy », pied avec version ; barre du haut 72px ; sous 760px : barre du haut mobile + dock bas flex avec « + » central surélevé (`margin-top: -20px`) |
| Navigation | V2 `34172c2a` (2026-10-28) | dock mobile en grille de 5 colonnes égales ; « + » 52px (`margin-top: -12px`, bordure 4px), icône 24px |
| Navigation | V4 `1f5a70d2` (2026-10-29), document `DESIGN.md` | sidebar 250 / 220px ; contenu max ~1180px, marges 48-56px sur tablette ; sous 760px barre haute 60px + dock 5 emplacements ; gouttières téléphone 17px (13px sous 390px) |
| Navigation | V5 `c80dbb09` (2026-10-31) | rail de 72px entre 761 et 1100px ; dock jusqu'à 760px ; marqueur d'état actif de 3px |
| Navigation | V7 `7598f175` (2026-10-31) | navigation par routes `/`, `/settings`, `/about` ; 404 statique |
| Accueil | V0 → V4 | héros `DashboardOverview` (orbites, `.mind-illustration`, carte « Capture rapide ») |
| Accueil | V5 `c80dbb09` → V9 | import du héros retiré (le fichier reste, non monté) ; V9 `c2701fc1` : QuickCapture en tête, avant les filtres |
| Éditeur | V0 | panneau `<dialog>` |
| Éditeur | `e309072e` (PR #4, correctif P0) | zone défilante, titre et texte d'abord, tiroir Détails |

**E7 (`notes-aistudio`)** : A0 = `9021b9bc` 2026-10-31, A1 = `d2819fcc` 2026-11-02, A2 = `6dbe9114` 2026-11-05, A3 = `6fc4b9d7` 2026-11-05, HEAD = `407c8f6d` 2026-11-06.

| Disposition | Période | État |
|---|---|---|
| Navigation | A0 (2026-10-31) → A1 | dock bas « navigation island next to + » : île de 4 destinations (Notes, Tâches, Bibliothèque, Réglages ; Recherche = mode de l'île du haut), FAB 52px du côté de la main (`data-hand` gauche / droite) |
| Navigation | A1 (2026-11-02) → A2 | « Bi-island navigation » : îlot Contenu (Notes, Tâches, Bibliothèque ; icône + libellé, `--n: 3`) + îlot Outils (Recherche, Réglages ; icônes seules) + FAB ; top bar avec avatar-chip, bascule cartes / liste, tri et filtre |
| Navigation | A2 (2026-11-05) → HEAD (2026-11-06) | « Unified navigation » : une île de 5 destinations (Notes, Tâches, Bibliothèque, Recherche, Paramètres ; `--n: 5`) + FAB ; îlot Outils retiré ; `body[data-hand]` ne positionne plus le dock |
| Réglages | A1 | liste de sections à gauche + détail à droite dès 64em ; feuilles sous 63.99em |
| Largeur d'écriture | A1 | narrow 600px / normal 760px / full 100 % |
| Spécification (A1) | `docs/design-reference/aistudio/…` | cibles 46px ; îlot gauche 210px (~70px par section) + 14px + îlot droit 150px sur 390px ; marge de garde tactile 12px |

**E8 (`mindspace-old`)**

| Disposition | Période | État |
|---|---|---|
| Navigation d'application | 2026-11-03 11:51 (`99c91a87`) → 2026-11-05 18:08 | `.shell` grille `250px 1fr`, workspace max 950px, padding 40px, point de rupture 650px |
| Navigation d'application | 2026-11-03 14:26 (`d5c96cef`) | Paramètres : sidebar sticky 250px, tiroir mobile `min(90vw, 340px)`, workspace max 1050px, point de rupture 768px |
| Navigation d'application | 2026-11-05 05:40 (`b44de130`) | point de rupture mobile 767px (remplace 650px) ; `.shell` `250px minmax(0, 1fr)` ; workspace des Paramètres 1120px |
| Navigation d'application | 2026-11-05 18:08 (`62846504`) → 18:37 | « app v1 » : barre latérale + zone de travail `minmax(220px, 25%) 1fr`, iPad `2fr / 6fr`, rail droit miroir, barre basse ; iPad = 768-1199px |
| Navigation d'application | dès 2026-11-05 18:37 (`aeca0395`) | « app v2 » : trois volets `78px minmax(245px, 300px) minmax(0, 1fr)` ; iPad : rail 72px, liste `minmax(215px, 30%)` ; mobile : liste d'abord ; dock bas 3 colonnes (fixed, z 45) ; dock d'édition sticky ; rail replié 56px dès 18:43 (`743c7e94`) |
| Préférences iPad | 2026-11-05 18:03 (`bf81e3ca`) | position du rail : gauche / droite / bas (`mindspace-appearance-v1`) |
| Journal | 2026-11-05 05:27 (`83de6dd4`) → 11:36 | rail Hostinger 136px / 44px / carte ; requêtes de conteneur 720px et 410px |
| Journal | dès 2026-11-05 (`7e3da2f4`, 11:36) | requêtes de conteneur supprimées ; Tailwind lg 3 colonnes (`1274fca0`), max-w 850px |

**E9 (`mindspace-core`)**

| Disposition | Période | État |
|---|---|---|
| Dock | 2026-11-10 (`128050ce` → `8f85ad28`) | îlot verre, 3 onglets (Notes, Tâches, Réglages), onglet actif ambre ; « + » ajouté à `c74ffb69` |
| Dock | 2026-11-11 (`5469a8ab` → HEAD) | pilule plate surface + bordure, actif en paire inversée, « + » ambre |
| Dock | 2026-11-12 (branche non fusionnée `7dd4d041`) | 2 onglets (Notes, Réglages) + « + » |
| Barre d'outils de l'éditeur | 2026-11-10 (`93b47014`) | îlot verre au-dessus du dock |
| Barre d'outils de l'éditeur | 2026-11-11 | îlot plat |
| Page Notes | 2026-11-10 | vue factice (`128050ce`) → éditeur anonyme (`93b47014`) → éditeur de la note la plus récente (`c74ffb69`) → liste Dexie (`8f85ad28`) |
| Page Notes | 2026-11-11 | liste + recherche (`1d3ce5c0`) + sélection (`339dbce0`) + rappel (`822c9496`) |
| Page Réglages | 2026-11-10 | vue factice |
| Page Réglages | 2026-11-11 | sauvegarde (`0a15c7ce`), restauration (`4381e483`) |
| Page Tâches | 2026-11-10 → 2026-11-11 | vue factice |
| Page Tâches | 2026-11-12 (branche non fusionnée `7dd4d041`) | supprimée ; `/tasks` retirée |
| Éditeur | 2026-11-10 | sans cadre |
| Éditeur | 2026-11-11 | carte 16px |
| Requête `prefers-reduced-transparency` | 2026-11-10 (`128050ce`) → 2026-11-11 | présente (ère Verre), supprimée à `5469a8ab` |

### 3.2 Détail par élément (valeur — première apparition — dernier état — raison)

Format : `valeur — première apparition réf — dernier état réf — raison citée dans le commit, ou « non documentée »`. Les raisons « message » sont les débuts de messages de commit donnés (tronqués) par les entrées ; une raison n'est pas déduite d'un message quand l'entrée ne le donne pas.

**A01, B11, B12 : `@media (min-width: 40em)` seul**
- E1, règles `.cols`, `.layer`, `.sheet`, `.note-list.cards` (0 déclaration à la fin) — `notes-v3@4da62555` 2026-10-18 — ✗ `notes-v3@ba6e7b28` 2026-10-19 — message « Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… ».
- E1, 2 déclarations (`.first-actions` `repeat(4, 1fr)`, `.starters` `repeat(3, 1fr)`) — `notes-v3@35c0380c` 2026-10-21 — HEAD — message « Notes 26.10.21.1 : audit design appliqué — téléphone en une… ».
- E7, même bloc — `notes-aistudio@9021b9bc` 2026-10-31 — ✗ `notes-aistudio@d2819fcc` 2026-11-02 — non documentée.

**A08 : `@media (min-width: 90em)` (E1)**
- 4 colonnes de cartes — `notes-v3@4a4da608` 2026-10-18 — ✗ `notes-v3@ba6e7b28` 2026-10-19 — message « Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… ».
- recréé, `body:not(.is-editing) .note-list.cards` `repeat(4, 1fr)` — `notes-v3@ba6e7b28` 2026-10-19 — ✗ `notes-v3@35c0380c` 2026-10-21 — message « Notes 26.10.21.1 : audit design appliqué — téléphone en une… ».

**A12, A14 : `max-width 24em` → `max-width 26em` (E1)**
- `max-width 24em` — `notes-v3@78e2a8a6` 2026-10-29 — ✗ `notes-v3@e30d2cdc` 2026-10-29 — message de `e30d2cdc` « polish editing, tables, cards and the 52px dock ».
- `max-width 26em` (9 règles : `.main-dock`, `#nav-island` `padding-inline: 2px`, `--edge-l` / `--edge-r` `calc(10px + var(--safe-l / --safe-r))`) — `notes-v3@e30d2cdc` 2026-10-29 — HEAD — même message.

**A34 : `@container list (min-width: 36em)` (E1)** — `notes-v3@ba6e7b28` 2026-10-19 — ✗ `notes-v3@d6af8790` 2026-10-19 — message « Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… » (remplacé par des requêtes média de la fenêtre).

**A24, A28 : mobile 650px → 767px (E8)**
- `max-width 650px` — `mindspace-old@99c91a87` 2026-11-03 11:51 — ✗ `mindspace-old@b44de130` 2026-11-05 05:40 — « remplacé par 767px », raison non documentée.
- `max-width 767px` — `mindspace-old@b44de130` 2026-11-05 05:40 — HEAD — non documentée.

**A35 : requêtes de conteneur du journal 720px et 410px (E8)** — `mindspace-old@83de6dd4` 2026-11-05 05:27 — ✗ `mindspace-old@7e3da2f4` 2026-11-05 11:36 (date non répétée par l'entrée, voir section 6) — non documentée.

**A32 : point de rupture 900px (E3)**
- `max-width 900px` (2 colonnes par défaut, repli à 1 colonne) — `notes-4@94f8e515` 2026-10-22 (N0) — remplacé en N1 — non documentée.
- `min-width 900px` (mobile-first, gap 20px) — `notes-4@28ad8ce4` 2026-10-22 (N1) — HEAD (`notes-4@8150588e`, N4) — non documentée.

**A43 : `prefers-reduced-transparency: reduce` (E9)** — `mindspace-core@128050ce` 2026-11-10 — ✗ `mindspace-core@5469a8ab` 2026-11-11 — non documentée dans l'entrée (contexte `LINEAGE.md` : design flat décidé le 2026-11-11).

**A46 : `prefers-color-scheme: dark` (E6, branche non fusionnée BR1)** — `notes-v6@1f5a70d2` 2026-10-29 — ✗ `notes-v6@d11bb77c` 2026-10-29 (branche `fix/system-theme-editor`, non fusionné) — non documentée.

**Décomptes de règles par bloc de requête (une même valeur de requête, nombre de règles qui change dans la version)**
- A02 `min-width 40em` et `min-height 30em`, E7 : 93 → 70 — `notes-aistudio@9021b9bc` 2026-10-31 — HEAD `notes-aistudio@407c8f6d` 2026-11-06 — non documentée.
- A05 `min-width 64em`, E7 : 42 → 61 — mêmes références — non documentée.
- A14 `max-width 26em`, E7 : 9 → 7 — mêmes références — non documentée.
- A21 `max-width 390px`, E6 : 9 → 11 — `notes-v6@57c25ea2` 2026-10-28 — V9 `notes-v6@c2701fc1` 2026-11-02 — non documentée.
- A26 `max-width 760px`, E6 : 164 → 200 — mêmes références — non documentée.
- A27 `min-width 761px` et `max-width 1100px`, E6 : 16 → 23 — `notes-v6@c80dbb09` 2026-10-31 — V9 — non documentée.
- A33 `max-width 1100px`, E6 : 6 → 3 — `notes-v6@57c25ea2` 2026-10-28 — V9 — non documentée.
- A46 `prefers-color-scheme: dark`, E6 : 3 → 24 — `notes-v6@34172c2a` 2026-10-28 — V9 — non documentée.
- A47 `print`, E6 : 15 → 17 — `notes-v6@a0935371` 2026-10-29 — V9 — non documentée.

**B03 : cartes de notes dès 40em et 30em (E1)**
- `repeat(auto-fill, minmax(250px, 1fr))` (≥40em) — `notes-v3@801d11fb` 2026-10-18 — remplacé `notes-v3@4a4da608` 2026-10-18 — message « Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… ».
- `repeat(3, 1fr)` — `notes-v3@4a4da608` 2026-10-18 — remplacé `notes-v3@35c0380c` 2026-10-21 (passe par `@container list` de `ba6e7b28` à `d6af8790`, puis `min-width 40em` et `min-height 30em`) — message « Notes 26.10.18.3 : barre unique + au pouce, créer en 3 choi… ».
- `repeat(auto-fill, minmax(15rem, 1fr))` — `notes-v3@35c0380c` 2026-10-21 — HEAD — message « Notes 26.10.21.1 : audit design appliqué — téléphone en une… ».

**B05 : liste en lignes (E1)** — `1fr 1fr` — `notes-v3@801d11fb` 2026-10-18 — remplacé `notes-v3@35c0380c` 2026-10-21 (`display: grid` et `1fr 1fr` ✗ `ba6e7b28`, repris en `@container list` puis en média `d6af8790`) — message « Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… » ; puis `repeat(auto-fill, minmax(22rem, 1fr))` — `notes-v3@35c0380c` 2026-10-21 — HEAD — message « Notes 26.10.21.1 : audit design appliqué — téléphone en une… ».

**B09 : liste de notes pendant l'édition (E1)** — cartes et récap `repeat(2, 1fr)`, lignes `1fr` — `notes-v3@d6af8790` 2026-10-19 — remplacé `notes-v3@35c0380c` 2026-10-21 (cartes et lignes `1fr`, récap `repeat(2, 1fr)` conservé) — message « Notes 26.10.21.1 : audit design appliqué — téléphone en une… ».

**B21 : Réglages, colonnes**
- E0 : `.menu-cols` `1fr 1fr` dès 48em — `notes-v3@b6647a04` 2026-10-09 — ✗ `notes-v3@ea104c22` 2026-10-15 — message « Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… ».
- E1 : `minmax(260px, 320px) minmax(0, 560px)` dès 64em ; liste `sticky`, `top: var(--space-4)` — `notes-v3@47c570df` 2026-10-31 — HEAD — message « Réglages as a page with a route per section (list on phone,… ».
- E4 : `.cols.settings-layout` deux colonnes → une colonne sous 63.99em — `notes-v5@2bd9ec0b` 2026-11-11 — HEAD — changelog 5.11.11.19 « une colonne au lieu de deux colonnes trop étroites ».
- E7 : liste (280-340px) + détail dès 64em, feuilles sous 63.99em — `notes-aistudio@d2819fcc` 2026-11-02 — HEAD — non documentée.
- E8 : sidebar sticky 250px, workspace max 1050px — `mindspace-old@d5c96cef` — remplacé par 1120px `mindspace-old@b44de130` 2026-11-05 05:40 — non documentée.

**B22, B23 : vue scindée (E0, E1, E4)**
- E0 : `.editor` `left: var(--layout-split-list)`, `--layout-split-list` `max(33.333vw, 22rem)` — `notes-v3@b6647a04` 2026-10-09 — fin de la lignée `notes-site` `notes-v3@ea104c22` 2026-10-15 — non documentée.
- E1 : `.editor` `left: 50%` — `notes-v3@4da62555` 2026-10-18 — remplacé `notes-v3@ba6e7b28` 2026-10-19 — message « Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide ».
- E1 : `.editor` `left: var(--split-list)` — `notes-v3@ba6e7b28` 2026-10-19 — HEAD — message « Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… ».
- E1 : `--split-list` `max(36vw, 22rem)` — `notes-v3@ba6e7b28` 2026-10-19 — remplacé `notes-v3@35c0380c` 2026-10-21 — idem.
- E1 : `--split-list` `clamp(22rem, 34vw, 30rem)` — `notes-v3@35c0380c` 2026-10-21 — HEAD — message « Notes 26.10.21.1 : audit design appliqué — téléphone en une… ».
- E4 : `--split-list` `clamp(22rem, 34vw, 30rem)` — `notes-v5@b1f17318` 2026-10-21 — HEAD — non documentée ; `.editor` `left: var(--nav-rail)` ajouté dès 48em et 30em — `notes-v5@f1b51602` 2026-11-08 — HEAD — message de commit non donné.

**B24 : grille de page à trois colonnes (E2)** — `290px minmax(0, 1fr) 280px` — `notepad-pwa@3c6f6152` 2026-10-20 (A) — remplacé en B `notepad-pwa@576a8c9d` — non documentée ; `295px minmax(0, 1fr) 290px` — B — dernier état C `notepad-pwa@76dfefe5` — non documentée.

**B25, B26 : `.layout` (E3)** — 2 colonnes par défaut avec repli sous 900px — `notes-4@94f8e515` 2026-10-22 (N0) — remplacé N1 — non documentée ; 1 colonne gap 16px, 2 colonnes dès `min-width: 900px` gap 20px — `notes-4@28ad8ce4` 2026-10-22 (N1) — HEAD — non documentée.

**B29, B30, B31, B32 : agencements successifs de l'application (E8)**
- `.shell` `250px 1fr` — `mindspace-old@99c91a87` 2026-11-03 11:51 — remplacé en partie `mindspace-old@b44de130` 2026-11-05 05:40 (`250px minmax(0, 1fr)`) — non documentée.
- app v1 `minmax(220px, 25%) 1fr`, iPad `2fr / 6fr`, rail droit miroir, barre basse — `mindspace-old@62846504` 2026-11-05 18:08 — ✗ `mindspace-old@aeca0395` 2026-11-05 18:37 — non documentée.
- app v2 `78px minmax(245px, 300px) minmax(0, 1fr)` — `mindspace-old@aeca0395` 2026-11-05 18:37 — HEAD ; rail replié 56px — `mindspace-old@743c7e94` (18:43) — HEAD — non documentée.

**C01, C02 : modèle de navigation et entrées (voir aussi 3.1)**
- E0 : barre d'outils haute + dock avec îlot de création et recherche — `notes-v3@b6647a04` 2026-10-09 — ✗ `notes-v3@ea104c22` 2026-10-15 — message « Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… ».
- E0 : `.nav-bar` 4 `.nav-tab` + `.fab` 60px — `notes-v3@ea104c22` 2026-10-15 — fin de la lignée — idem.
- E1 : dock « thumb-first » à 2 entrées + groupe pouce — `notes-v3@4da62555` 2026-10-18 — remplacé `notes-v3@4a4da608` 2026-10-18 — message « Notes 26.10.18.1 : source v3 — îlots au pouce, verre liquide ».
- E1 : une barre à 4 entrées (Notes, Bibliothèque, Recherche, Réglages) — `notes-v3@4a4da608` 2026-10-18 — remplacé `notes-v3@2c7478e4` 2026-10-31 — message « Notes 26.10.18.3 : barre unique + au pouce, créer en 3 choi… ».
- E1 : barre à 4 entrées (Notes, Tâches, Bibliothèque, Réglages) + îlot du haut — `notes-v3@2c7478e4` 2026-10-31 — HEAD — non documentée (entrée sans message).
- E4 : 4 entrées (Notes, Bibliothèque, Recherche, Réglages) — `notes-v5@b1f17318` 2026-10-21 — remplacé `notes-v5@32e9bd9e` 2026-11-08 — message hérité « Une seule barre en bas : Notes, Bibliothèque, Recherche, Réglages, avec + du côté de la main dominante » ; onglets de largeur égale d'abord (« equal widths cut Bibliothèque », design-teardown), puis largeurs par libellé `notes-v5@ad232dfb` 2026-10-21 (« Bibliothèque fits from 360px, the thumb follows »).
- E4 : 5 entrées (Accueil, Notes, Tâches, Listes, Calendrier) — `notes-v5@32e9bd9e` 2026-11-08 — remplacé `notes-v5@f1b51602` 2026-11-08 — `docs/navigation-editor.md` « Bas persistant : Accueil, Notes, Tâches, Listes, Calendrier ; icône puis libellé ».
- E4 : 4 entrées (Aujourd'hui, Notes, Agenda, Bibliothèque) — `notes-v5@f1b51602` 2026-11-08 — HEAD — `docs/contextual-navigation.md` « Quatre destinations : Aujourd'hui · Notes · Agenda · Bibliothèque. Navigation en bas sur mobile ; barre latérale à partir de 48em ».
- E7 : 4 destinations + FAB — `notes-aistudio@9021b9bc` 2026-10-31 — remplacé `notes-aistudio@d2819fcc` 2026-11-02 — non documentée (le libellé « Bi-island navigation » est celui de la version suivante).
- E7 : 2 îlots (3 + 2) + FAB — `notes-aistudio@d2819fcc` 2026-11-02 — remplacé `notes-aistudio@6dbe9114` 2026-11-05 — message « Bi-island navigation ».
- E7 : 1 île à 5 destinations + FAB — `notes-aistudio@6dbe9114` 2026-11-05 — HEAD — message « Unified navigation ».
- E6 : dock mobile flex avec « + » central — `notes-v6@57c25ea2` 2026-10-28 — remplacé `notes-v6@34172c2a` 2026-10-28 (grille de 5 colonnes égales) — non documentée.
- E6 : rail de 72px entre 761 et 1100px — `notes-v6@c80dbb09` 2026-10-31 — HEAD — non documentée.
- E8 : barre latérale 250px — `mindspace-old@99c91a87` 2026-11-03 — voir B29 à B32 — non documentée.
- E9 : 3 destinations — `mindspace-core@128050ce` 2026-11-10 — HEAD (main) ; 2 destinations sur branche non fusionnée `mindspace-core@7dd4d041` 2026-11-12 — non documentée.
- E9 : action « + » séparée des destinations — `mindspace-core@c74ffb69` 2026-11-10 — HEAD — commentaire « an action, not a destination ».

**C03 : recherche**
- E0 : champ de recherche dans le dock — `notes-v3@b6647a04` 2026-10-09 — remplacé `notes-v3@ea104c22` 2026-10-15 par un onglet et une page `.app-header.is-search` — message « Notes 26.10.15.1 : refonte UX… ».
- E1 : îlot recherche / micro — `notes-v3@4da62555` 2026-10-18 — onglet `notes-v3@4a4da608` 2026-10-18 — dans l'îlot du haut `notes-v3@2c7478e4` 2026-10-31 — non documentée.
- E4 : onglet — `notes-v5@b1f17318` 2026-10-21 — dans l'en-tête `notes-v5@32e9bd9e` 2026-11-08 — non documentée.
- E7 : mode de l'île du haut (A0) → îlot Outils (A1) → destination (A2) — non documentée.

**C04 : bouton « + » / FAB**
- E4 : `.main-dock > .fab` `bottom: calc(100% + var(--space-3))` — `notes-v5@32e9bd9e` 2026-11-08 — supprimé puis recréé à l'identique `notes-v5@f1b51602` 2026-11-08 (position `static` dès 48em et 30em) — non documentée.
- E6 : `margin-top: -20px` — `notes-v6@57c25ea2` 2026-10-28 — remplacé `notes-v6@34172c2a` 2026-10-28 (52px, `margin-top: -12px`, bordure 4px) — non documentée.
- E7 : FAB du côté de la main (`data-hand`) — `notes-aistudio@9021b9bc` 2026-10-31 — `data-hand` ne positionne plus le dock `notes-aistudio@6dbe9114` 2026-11-05 — non documentée.

**C09 : barre d'outils de l'éditeur (E4)** — île flottante `bottom: calc(var(--dock-bottom) + 64px)` — `notes-v5@32e9bd9e` 2026-11-08 — remplacé `notes-v5@f1b51602` 2026-11-08 (`bottom: var(--dock-bottom)`, barre fixe au bas de l'éditeur, bordure haute, sans verre) — non documentée.

**C11 : Réglages, feuille puis page**
- E4 : feuille du bas — `notes-v5@b1f17318` 2026-10-21 — remplacée `notes-v5@32e9bd9e` 2026-11-08 par une pleine page — changelog 5.11.8.14 « Réglages en pleine page ».
- E1 : feuille → page avec une route par section — `notes-v3@47c570df` 2026-10-31 — HEAD — message « Réglages as a page with a route per section (list on phone,… ».
- E9 : vue factice (`mindspace-core@128050ce` 2026-11-10) → sauvegarde (`mindspace-core@0a15c7ce` 2026-11-11) → restauration (`mindspace-core@4381e483` 2026-11-11) — non documentée comme changement de disposition.

**C12 : routes**
- E9 : `/`, `/notes/<uuid>`, `/tasks`, `/settings` — `mindspace-core@da47d9f4` 2026-11-11 (PR #18) — HEAD (main) ; `/tasks` ✗ `mindspace-core@7dd4d041` 2026-11-12 (branche non fusionnée) — non documentée.
- E6 : `/`, `/settings`, `/about` — `notes-v6@7598f175` 2026-10-31 — HEAD — non documentée.

**C13 : onglets du dock** — E4 : largeur égale (`b1f17318`) → par libellé (`notes-v5@ad232dfb` 2026-10-21, « Bibliothèque fits from 360px, the thumb follows ») → `flex: 1 1 0` à `--n: 5` (`32e9bd9e`) → `--n: 4` (`f1b51602`). E7 : `--n: 3` + îlot Outils (A1) → `--n: 5` (A2).

**C17, C18 : contenu de page et éditeur**
- E6 : héros `DashboardOverview` — `notes-v6@57c25ea2` 2026-10-28 — import retiré `notes-v6@c80dbb09` 2026-10-31 (fichier conservé, règles `.overview-*` et `.eyebrow` restent dans `components.css` à HEAD) ; vidé par BR4 `notes-v6@7f351420` 2026-10-30 (non fusionné) — non documentée.
- E6 : éditeur `<dialog>` — `notes-v6@57c25ea2` 2026-10-28 — zone défilante, titre et texte d'abord, tiroir Détails (BR1 `d11bb77c`, et `e309072e` « PR #4, correctif P0 » dans main) — non documentée.
- E9 : éditeur sans cadre → carte 16px — 2026-11-10 → 2026-11-11 — non documentée.

**D01 à D04, D07, D09, D11, D15, D19, D20 : valeurs qui varient (chronologique)**
- D01 hauteur de la barre : 52px E1 (`notes-v3@fe7ee2da` 2026-10-29) ; `--nav-h` 60px / `--nav-height` 58px E7 (HEAD `notes-aistudio@407c8f6d`) ; 62px E9 (`mindspace-core@128050ce` 2026-11-10, « pilule de 62 px »).
- D02 bouton de navigation : `--size-nav-tab` 52px E0 (`notes-v3@ea104c22` 2026-10-15) ; boutons 44px E1 (`fe7ee2da`) ; 52px E3 (N0) ; `--dock-btn` 48px E4 (`notes-v5@b1f17318` 2026-10-21) ; `--control-h` 52px E7. Raison non documentée.
- D03 FAB : 60px E0 (`ea104c22`), 58px E1 (`4da62555`), 60px E3, 52px E6 (`notes-v6@34172c2a` 2026-10-28, après `margin-top: -20px` de `57c25ea2`), 52px E7. Raison non documentée.
- D07 `--dock-bottom` E4 : `calc(var(--safe-bottom) + var(--space-2) + var(--kb))` — `notes-v5@b1f17318` 2026-10-21 — remplacé `notes-v5@82aa90c2` 2026-10-21 (ajout de `var(--dock-lift)`, `--dock-lift` 0px dans `tokens.css`) — non documentée.
- D09 `--dock-space` E1 : `calc(var(--fab) + var(--safe-bottom) + var(--space-8))` — `notes-v3@4da62555` 2026-10-18 — remplacé `notes-v3@35c0380c` 2026-10-21 (`calc(var(--dock-bottom) + var(--fab) + var(--space-6))`) — message « Notes 26.10.21.1 : audit design appliqué — téléphone en une… » ; E4 : `... + var(--space-6)` — `notes-v5@b1f17318` 2026-10-21 — remplacé `notes-v5@82aa90c2` 2026-10-21 (`var(--space-4)`) — non documentée ; E9 : formule en littéraux — `mindspace-core@128050ce` 2026-11-10 — remplacée `mindspace-core@93b47014` 2026-11-10 (dock-bottom + dock-height + 16px) — non documentée.
- D11 `--edge` E4 : `12px` — `notes-v5@b1f17318` 2026-10-21 — remplacé `notes-v5@82aa90c2` 2026-10-21 par `var(--space-3)` — non documentée (E1 et E7 : 12px, `notes-v3@4da62555` 2026-10-18).
- D15 `--safe-bottom` E4 : `max(env(safe-area-inset-bottom, 0px), 8px)` — `notes-v5@b1f17318` 2026-10-21 — remplacé `notes-v5@82aa90c2` 2026-10-21 par `max(env(safe-area-inset-bottom, 0px), var(--space-2))` — non documentée.
- D19 largeur maximale du contenu : 1280px E0 (`notes-v3@b6647a04` 2026-10-09) → 1180px E1 (`notes-v3@4da62555` 2026-10-18) ; 1200px E3 (N0, `notes-4@94f8e515`) ; 1180px E4 ; 920px E5 (S1) ; ~1180px E6 (document `1f5a70d2`) ; 1180px E7 ; 950px E8 (`99c91a87`), Paramètres 1050px (`d5c96cef`) → 1120px (`b44de130`) ; aucune E9. Raison non documentée.
- D20 marge latérale : voir la matrice ; E4 look paper : `20px` — `notes-v5@b1f17318` 2026-10-21 — remplacé `notes-v5@ad232dfb` 2026-10-21 par `var(--space-4)` — non documentée.

**D22 : hauteur maximale des calques (E4)** — `calc(100dvh - var(--safe-top) - var(--layer-bottom) - var(--space-6))` (`.layer`, `.sheet`) et `calc(100dvh - var(--safe-top) - var(--space-6))` (`.sheet`) — `notes-v5@b1f17318` 2026-10-21 — remplacés `notes-v5@82aa90c2` 2026-10-21 par les mêmes formules avec `var(--space-4)` — non documentée.

**E0 supprimés au passage 26.10.15.1** : `--layout-settings-w` 620px (D34), `--search-field-w` (D40), `.menu[data-mode=settings] width` et `.menu-cols` (B21, C11) — `notes-v3@b6647a04` 2026-10-09 — ✗ `notes-v3@ea104c22` 2026-10-15 — message « Notes 26.10.15.1 : refonte UX (navigation, menu Créer, ⋮ pa… ».

**D42, D43, D44, D46, D48, D50, D51, D54, D59, D68, D72 (E1) : règles de volets, calques et dock ajoutées puis retirées**
- `.layer, .sheet` `width: var(--layer-w)` et `left: auto` dès 40em ; `body[data-hand='left'] :is(.layer, .sheet)` `left: var(--edge)`, `right: auto` — `notes-v3@4da62555` 2026-10-18 — ✗ `notes-v3@801d11fb` 2026-10-18 — message « Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… ».
- `.layer:not([data-anchored]):not(.lib-page)` (`left: 0`, `right: 0`, `margin-inline: auto`, `width: var(--layer-w)`), `.sheet` `inset: 0` et `height: fit-content`, `.sel-bar .action-btn` 72px, `.note-list:not(.cards)` grille — `notes-v3@801d11fb` 2026-10-18 — ✗ `notes-v3@ba6e7b28` 2026-10-19 (les règles `.layer` ré-apparaissent en média 40em et 30em, ✗ `d6af8790`, puis `.layer:not([data-anchored])`) — messages « Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… » puis « Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… ».
- `.widget` `width: 220px` — `notes-v3@801d11fb` 2026-10-18 — ✗ `notes-v3@4a4da608` 2026-10-18 — message « Notes 26.10.18.3 : barre unique + au pouce, créer en 3 choi… ».
- `.sheet` `width: min(560px, ...)` — `notes-v3@4da62555` 2026-10-18 — remplacé `notes-v3@801d11fb` 2026-10-18 par `min(600px, ...)` ; reprise en 40em et 30em `notes-v3@ba6e7b28` 2026-10-19 — HEAD.
- `.sheet` `inset: 0` → `0 0 var(--layer-bottom)` — `notes-v3@ba6e7b28` 2026-10-19 → `notes-v3@d6af8790` 2026-10-19 — message « Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… ».
- `[data-drawer]` `inset` : `... var(--dock-bottom) auto` (`ba6e7b28`) → `... var(--layer-bottom) auto` (`d6af8790`) → `... var(--dock-bottom) auto` (`35c0380c`, 2026-10-21) ; largeur `min(26rem, 45vw)` (`ba6e7b28`) → `var(--drawer-w)` (`notes-v3@ef23bea4` 2026-10-19, message « Notes 26.10.19.3 : onglet glissant, inspecteurs, ÷3 partout… »).
- `body.is-editing .dock` `right: calc(50% + var(--edge))` — `notes-v3@4da62555` 2026-10-18 — remplacé `notes-v3@ba6e7b28` 2026-10-19 par `auto` ; `body.is-editing .page` `margin-inline-end: 50%` — ✗ `ba6e7b28`, remplacé par `max-width: var(--split-list)`.
- `.main-dock` `justify-content: flex-end` (≥40em) — `notes-v3@4a4da608` 2026-10-18 — ✗ `ba6e7b28`, recréé en 40em et 30em (HEAD).
- `.editor-dock` `flex-direction: row` et `.editor.is-formatting::after` (max-height 30em) — `notes-v3@ba6e7b28` 2026-10-19 — ✗ `notes-v3@35c0380c` 2026-10-21 — message « Notes 26.10.21.1 : audit design appliqué — téléphone en une… ».
- `:is(.toast, .rec-bar)` `left: auto`, `right: var(--dock-inset-r)` et pendant `body[data-hand='left']` — `notes-v3@ba6e7b28` 2026-10-19 — ✗ `notes-v3@35c0380c` 2026-10-21 (`.rec-bar` repris seul à `35c0380c`) — idem.
- `.sheet.welcome` `--layer-bottom: var(--dock-bottom)` — `notes-v3@d6af8790` 2026-10-19 — ✗ `notes-v3@35c0380c` 2026-10-21 — idem.
- `body.is-editing .note-list:not(.cards)` `1fr` et `:is(.note-list.cards, .recap-row)` `repeat(2, 1fr)` — `notes-v3@d6af8790` 2026-10-19 — ✗ `notes-v3@35c0380c` 2026-10-21 (reformulés) — idem.

**E4 : règles retirées**
- `.main-dock .tab-btn span` `max-width: 100%` — `notes-v5@b1f17318` 2026-10-21 — ✗ `notes-v5@2466c955` 2026-10-24 — non documentée.


## 4. Éléments disparus

| élément | créé (réf) | supprimé (réf) | version | remplacé par | note |
|---|---|---|---|---|---|
| Barre d'outils haute `.island.toolbar` + dock avec îlot de création et champ de recherche | `notes-v3@b6647a04` 2026-10-09 | `notes-v3@ea104c22` 2026-10-15 | E0 | `.nav-bar` 4 onglets + FAB 60px | bundle v2.0.0 à 26.10.9.5 |
| `--layout-settings-w` 620px, `.menu[data-mode=settings]` largeur, `.menu-cols` 2 colonnes (≥48em) | `notes-v3@b6647a04` 2026-10-09 | `notes-v3@ea104c22` 2026-10-15 | E0 | Réglages dans la nouvelle navigation (disposition non détaillée) | |
| `--search-field-w` | `notes-v3@b6647a04` 2026-10-09 | `notes-v3@ea104c22` 2026-10-15 | E0 | recherche en page `.app-header.is-search` | |
| Dock « thumb-first » à 2 entrées + groupe pouce | `notes-v3@4da62555` 2026-10-18 | `notes-v3@4a4da608` 2026-10-18 | E1 | barre unique à 4 entrées | |
| Barre unique Notes, Bibliothèque, Recherche, Réglages | `notes-v3@4a4da608` 2026-10-18 | `notes-v3@2c7478e4` 2026-10-31 | E1 | Notes, Tâches, Bibliothèque, Réglages + îlot du haut | |
| `@media (min-width: 40em)` (version d'origine) | `notes-v3@4da62555` 2026-10-18 | `notes-v3@ba6e7b28` 2026-10-19 | E1 | `(min-width: 40em) and (min-height: 30em)` ; recréé en 2 règles à `35c0380c` | |
| `@media (min-width: 90em)` (deux apparitions) | `notes-v3@4a4da608` 2026-10-18 ; `notes-v3@ba6e7b28` 2026-10-19 | `notes-v3@ba6e7b28` 2026-10-19 ; `notes-v3@35c0380c` 2026-10-21 | E1 | grille fluide `minmax(15rem, 1fr)` | 4 colonnes de cartes |
| `@container list (min-width: 36em)` | `notes-v3@ba6e7b28` 2026-10-19 | `notes-v3@d6af8790` 2026-10-19 | E1 | requêtes média sur la fenêtre | |
| `@media (max-width: 24em)` | `notes-v3@78e2a8a6` 2026-10-29 | `notes-v3@e30d2cdc` 2026-10-29 | E1 | `@media (max-width: 26em)` | |
| `.layer, .sheet` largeur `--layer-w` dès 40em ; `body[data-hand='left'] :is(.layer, .sheet)` `left` / `right` | `notes-v3@4da62555` 2026-10-18 | `notes-v3@801d11fb` 2026-10-18 | E1 | `.layer:not([data-anchored]):not(.lib-page)` | |
| `.widget` `width: 220px` (≥40em) | `notes-v3@801d11fb` 2026-10-18 | `notes-v3@4a4da608` 2026-10-18 | E1 | `.widget` `max-width: none` (`35c0380c`) | |
| `.layer:not([data-anchored]):not(.lib-page)`, `.sheet` `inset: 0`, `.sheet` `fit-content`, `.sel-bar` 72px (40em seul) | `notes-v3@801d11fb` 2026-10-18 | `notes-v3@ba6e7b28` 2026-10-19 | E1 | mêmes règles en `(min-width: 40em) and (min-height: 30em)` | |
| `body.is-editing .page` `margin-inline-end: 50%` | `notes-v3@4da62555` 2026-10-18 | `notes-v3@ba6e7b28` 2026-10-19 | E1 | `max-width: var(--split-list)` | |
| `.editor-dock` `flex-direction: row`, `.editor.is-formatting::after` hauteur (max-height 30em) | `notes-v3@ba6e7b28` 2026-10-19 | `notes-v3@35c0380c` 2026-10-21 | E1 | non précisé | |
| `:is(.toast, .rec-bar)` `left` / `right` (40em et 30em) | `notes-v3@ba6e7b28` 2026-10-19 | `notes-v3@35c0380c` 2026-10-21 | E1 | `.rec-bar` seul ; toasts en haut | |
| `.sheet.welcome` `--layer-bottom` | `notes-v3@d6af8790` 2026-10-19 | `notes-v3@35c0380c` 2026-10-21 | E1 | non précisé | |
| Grille `.app-shell` `290px minmax(0, 1fr) 280px` | `notepad-pwa@3c6f6152` 2026-10-20 | `notepad-pwa@576a8c9d` (B) | E2 | `295px minmax(0, 1fr) 290px` | valeur modifiée, non supprimée |
| `@media (max-width: 900px)` (2 colonnes par défaut) | `notes-4@94f8e515` 2026-10-22 | `notes-4@28ad8ce4` 2026-10-22 | E3 | `@media (min-width: 900px)` | |
| `.main-dock .tab-btn span` `max-width: 100%` | `notes-v5@b1f17318` 2026-10-21 | `notes-v5@2466c955` 2026-10-24 | E4 | non précisé | |
| Dock 4 entrées Notes, Bibliothèque, Recherche, Réglages | `notes-v5@b1f17318` 2026-10-21 | `notes-v5@32e9bd9e` 2026-11-08 | E4 | dock 5 entrées | |
| Dock 5 entrées Accueil, Notes, Tâches, Listes, Calendrier | `notes-v5@32e9bd9e` 2026-11-08 | `notes-v5@f1b51602` 2026-11-08 | E4 | dock 4 entrées Aujourd'hui, Notes, Agenda, Bibliothèque | durée : un jour (2026-11-08) |
| Barre d'outils de l'éditeur en île flottante | `notes-v5@32e9bd9e` 2026-11-08 | `notes-v5@f1b51602` 2026-11-08 | E4 | barre fixe au bas de l'éditeur | |
| Réglages en feuille du bas | `notes-v5@b1f17318` 2026-10-21 | `notes-v5@32e9bd9e` 2026-11-08 | E4 | Réglages en pleine page | |
| `@media (min-width: 40em)` (`.first-actions`, `.starters`) | `notes-aistudio@9021b9bc` 2026-10-31 | `notes-aistudio@d2819fcc` 2026-11-02 | E7 | non précisé | |
| Dock à 4 destinations + FAB positionné par `data-hand` | `notes-aistudio@9021b9bc` 2026-10-31 | `notes-aistudio@d2819fcc` 2026-11-02 (îlots) ; `data-hand` : `notes-aistudio@6dbe9114` 2026-11-05 | E7 | 2 îlots, puis 1 île à 5 destinations | l'entrée écrit « supprimé en A2 » pour `data-hand` (voir section 6) |
| Îlot Outils (Recherche, Réglages) | `notes-aistudio@d2819fcc` 2026-11-02 | `notes-aistudio@6dbe9114` 2026-11-05 | E7 | Recherche et Paramètres deviennent des destinations de l'île unique à 5 | |
| `@media (max-width: 650px)` | `mindspace-old@99c91a87` 2026-11-03 | `mindspace-old@b44de130` 2026-11-05 | E8 | `@media (max-width: 767px)` | |
| Requêtes de conteneur du journal 720px et 410px | `mindspace-old@83de6dd4` 2026-11-05 | `mindspace-old@7e3da2f4` 2026-11-05 (11:36) | E8 | rail Tailwind `lg` 3 colonnes | |
| App v1 : barre latérale + zone de travail, iPad 2fr / 6fr, rail droit miroir, barre basse | `mindspace-old@62846504` 2026-11-05 | `mindspace-old@aeca0395` 2026-11-05 | E8 | app v2 : 3 volets, dock bas 3 colonnes | durée : environ 29 minutes (18:08 à 18:37) |
| Héros d'accueil `DashboardOverview` (orbites, `.mind-illustration`, carte « Capture rapide ») | `notes-v6@57c25ea2` 2026-10-28 | `notes-v6@c80dbb09` 2026-10-31 (import retiré) | E6 | QuickCapture en tête (`c2701fc1`) | fichier et règles `.overview-*` / `.eyebrow` conservés à HEAD ; BR4 `7f351420` le vide (non fusionné) |
| Éditeur en panneau `<dialog>` | `notes-v6@57c25ea2` 2026-10-28 | `e309072e` (main) | E6 | zone défilante, titre et texte d'abord, tiroir Détails | date de `e309072e` non donnée |
| `@media (prefers-color-scheme: dark)` (branche BR1) | `notes-v6@1f5a70d2` 2026-10-29 | `notes-v6@d11bb77c` 2026-10-29 (non fusionné) | E6 | non précisé | la ligne main la conserve |
| `prefers-reduced-transparency: reduce` | `mindspace-core@128050ce` 2026-11-10 | `mindspace-core@5469a8ab` 2026-11-11 | E9 | aucun (design flat) | |
| Dock verre 3 onglets, onglet actif ambre | `mindspace-core@128050ce` 2026-11-10 | période 2026-11-11 (`5469a8ab` → HEAD) | E9 | pilule plate surface + bordure, actif en paire inversée | |
| Vue factice de la page Notes | `mindspace-core@128050ce` 2026-11-10 | `mindspace-core@8f85ad28` 2026-11-10 | E9 | liste Dexie | |
| Formule initiale de `.ms-main` (bas) en littéraux | `mindspace-core@128050ce` 2026-11-10 | `mindspace-core@93b47014` 2026-11-10 | E9 | dock-bottom + dock-height + 16px | |
| Page Tâches et route `/tasks` (branche non fusionnée) | `mindspace-core@128050ce` 2026-11-10 | `mindspace-core@7dd4d041` 2026-11-12 | E9 | aucun | branche non fusionnée : l'état de `main` conserve la page |

## 5. Éléments propres à une seule version

- E0 : `--layout-columns` 2 / 3 / 4 (colonnes selon la largeur), `--layout-list-max`, `--layout-float-max`, `--layout-map-w`, `--layout-popover-w`, `--layout-settings-w`, `--layout-sheet-w`, `--layout-toast-max`, `--size-dock-clearance`, `--size-float-bar`, `--float-offset`, `--size-list-bottom`, `--size-masonry-row`, `--size-popover-max-h`, `--size-sel-clearance`, `--size-sel-popover-max-h`, `--space-edge`, `--space-screen`, `--edge-inset`, `--menu-top`, `--popover-top`, `--popover-right`, `--search-field-w`, `--offset-checkbox`, `--offset-icon-baseline`, `.sheet.welcome`, `@supports (backdrop-filter: blur(1px))` (`notes-v3@b6647a04` 2026-10-09 ; `notes-v3@637a0265` 2026-10-09 ; `notes-v3@ea104c22` 2026-10-15). Bloc `.nav-bar` + FAB 60px : `notes-v3@ea104c22` 2026-10-15.
- E1 : `@container list`, `min-width 90em`, `.search-dock`, `.widget`, `HeaderTools` (`notes-v3@2c7478e4` 2026-10-31).
- E2 : mode focus `body.focus-mode`, `.tools-panel`, `.ambient-list`, `order` des blocs sous 1100px, `.toast` en bas à droite (`notepad-pwa@3c6f6152` 2026-10-20), `orientation: portrait-primary` (`notepad-pwa@576a8c9d`).
- E3 : `.layout` `minmax(0, 1.2fr) minmax(320px, 0.8fr)`, `.full-panel`, `.notes-grid` `auto-fit minmax(220px, 1fr)`, dock rayon 24px (N0 `notes-4@94f8e515` 2026-10-22).
- E4 : dock 5 entrées (un jour, 2026-11-08), `--nav-rail`, `--dock-lift`, `--workspace-gap`, `.calendar-grid`, `.today-grid`, `.capture-actions`, `.metadata-fields`, `.layer[data-mode='sketch']` (`notes-v5@1c1fb148` 2026-11-11), `--w1`..`--w4` (`notes-v5@ad232dfb` 2026-10-21).
- E5 : menu rapide `.quick-menu` (`notes-svelte@96889f8d` 2026-10-22), onglet 62px sous 440px, `.screen`, `.screen-header`.
- E6 : rail 761-1100px (`notes-v6@c80dbb09` 2026-10-31), marqueur d'état actif inset 3px, héros `DashboardOverview`, routes `/about`, `geometry.css` (`notes-v6@daf38120` 2026-11-01, voir section 6), branches BR1 à BR5 non fusionnées.
- E7 : îlots Contenu et Outils, avatar-chip, bascule cartes / liste (`notes-aistudio@d2819fcc` 2026-11-02), `--control-h`, `--nav-h`, `--nav-height`, spécification d'origine (cibles 46px).
- E8 : tiroir mobile `min(90vw, 340px)`, `.shell`, rail Hostinger du journal, préférences iPad gauche / droite / bas (`mindspace-old@bf81e3ca` 2026-11-05), seuil 1200px (document), points de rupture 650 / 767 / 768 / 1199px.
- E9 : absence de toute requête de largeur, bannière de rappel, barre de sélection, dialogue de confirmation, pile basse dock puis barre d'outils (`mindspace-core@93b47014` 2026-11-10), `.ms-dock__action` (`mindspace-core@c74ffb69` 2026-11-10).

## 6. Contradictions et trous

Contradictions et ambiguïtés (aucune n'est résolue par supposition) :

1. **E4, largeur de la barre latérale** : le commentaire de `notes-v5@2bd9ec0b` 2026-11-11 parle de « the 176px navigation rail », alors que `.main-dock` reçoit `width: 152px` dès 48em et 30em (`notes-v5@f1b51602` 2026-11-08, section 4 de l'entrée) et que les boutons font 52px. L'entrée ne dit pas si 176px est la largeur de la barre, de la colonne ou une valeur antérieure.
2. **E4, Recherche** : le premier dock (4 entrées, `notes-v5@b1f17318`) liste Recherche comme entrée et l'entrée écrit aussi « Recherche est un mode, jamais un lieu » ; la ligne C03 ne tranche pas si Recherche était un onglet ou un mode à `b1f17318`.
3. **E7, `data-hand`** : l'entrée dit que `body[data-hand]` ne positionne plus le dock à A2 (`notes-aistudio@6dbe9114`), et que `data-hand` est « supprimé en A2 », mais liste dans le même commit un bloc `@media (max-width: 440px)` contenant `body[data-hand] .bottom-nav-container` (3 règles). Le sens exact de « supprimé » (attribut, règles de positionnement, ou seulement le positionnement du dock) n'est pas donné.
4. **E7, cibles tactiles** : la spécification d'origine (A1) fixe des cibles de 46px ; les jetons donnent `--control-h` 52px, `--nav-h` 60px et `--nav-height` 58px (deux jetons de hauteur de barre coexistent) ; E1 donne des boutons de 44px et une barre de 52px (`notes-v3@fe7ee2da`).
5. **E7, `--dock-bottom`** : l'entrée écrit « zone sûre + 8px + clavier » ; E1 écrit `calc(var(--safe-bottom) + var(--space-2) + var(--kb))` où `--safe-bottom` vaut déjà `max(env(...), 8px)`. L'égalité ou non de ces deux valeurs ne peut pas être établie sans la valeur de `--space-2`.
6. **E7, `--dock-space`** : « dock-bottom + nav-h + 24px » (E7) contre `calc(var(--dock-bottom) + var(--fab) + var(--space-6))` (E1, `35c0380c`) : la valeur de `--space-6` et la présence de `--fab` en E7 ne sont pas dans les entrées.
7. **E5, première apparition de la navigation** : la ligne « navigation » donne `BottomNavigation.svelte` à S3 (`notes-svelte@96889f8d`, avec `QuickActionMenu.svelte` « non importé, dès S1 ») alors que la ligne « onglets » donne S1 (`notes-svelte@2923c47d`) pour les mêmes quatre onglets.
8. **E8, zones sûres** : `env(safe-area-inset-bottom)` est utilisé (`mindspace-old@62846504`) alors que `<meta viewport>` n'a pas `viewport-fit=cover` (`index.html`, `d5c96cef`) : l'entrée note elle-même l'incohérence.
9. **E8, bureau et iPad** : « iPad min 768px et max 1199px » et « bureau ≥ 1200px » (`DESIGN_SYSTEM.md @de556ab2`), mais le point de rupture `min-width: 768px` dit « bureau Paramètres » (`d5c96cef`). Les deux usages de 768px (Paramètres bureau, début iPad) se recouvrent.
10. **E8, `.shell`** : « partiellement remplacé @b44de130 » : l'entrée ne dit pas quelles propriétés restent de `99c91a87`.
11. **E6, document contre code** : `DESIGN.md` (V4, `1f5a70d2`) donne grille de notes 3 / 2 / 1 colonnes (bureau / 1100px / 760px), barre haute 60px sous 760px, gouttières 17px (13px sous 390px), éditeur max 680px, marges 48-56px. L'entrée ne donne aucune valeur CSS qui les confirme ; V0 donne par ailleurs une barre du haut de 72px. Le CLAUDE.md de `mindspace-core` demande de vérifier le code avant de croire un `.md`.
12. **E6, sidebar et rail** : V0 donne une sidebar de 250px (220px sous 1100px) et V5 un rail de 72px entre 761 et 1100px ; le bloc `@media (max-width: 1100px)` garde 3 règles à HEAD sans que l'entrée dise lesquelles. La sidebar de 220px est-elle encore présente à HEAD sous 760px ou au-dessus de 1100px : non précisé.
13. **E1, taille du FAB et de la barre (ambiguïté)** : 58px à `4da62555` (26.10.18.1) alors que le bundle E0 26.10.15.1 donne 60px ; et `e30d2cdc` et `fe7ee2da` (2026-10-29) citent « the 52px dock » et « barre 52px » : l'entrée ne dit pas si la hauteur de barre et la taille du FAB sont reliées.
14. **E1 et E7, copie** : E7 `9021b9bc` (2026-10-31) reprend la barre Notes · Tâches · Bibliothèque · Réglages de E1 `2c7478e4` (2026-10-31) ; les décomptes de règles sont égaux (93, 42, 36, 16, 13, 9, 6, 4 règles) mais l'entrée E7 ne dit pas si la page Réglages de `47c570df` (2026-10-31) était déjà dans la copie.
15. **E9, branche non fusionnée** : le dock à 2 entrées et la suppression de `/tasks` sont sur `mindspace-core@7dd4d041` 2026-11-12, non fusionné ; la matrice garde l'état de `main` et note la branche.

Trous (zones non couvertes par les entrées) :

- **Dates absentes** : E2, B (`576a8c9d`), C (`76dfefe5`) et D (`a488cc67`) ; E3, la plage va jusqu'à 2026-11-09 mais les 5 repères N0 à N4 sont tous du 2026-10-22 ; E4, `190af4b5` (largeurs de vérification) ; E6 `e309072e` ; E8, `7e3da2f4` (11:36), `743c7e94` (18:43), `1274fca0`, `de556ab2` (le jour est celui du commit voisin dans l'entrée, non répété).
- **E0** : 9 builds, mais les entrées ne citent que trois commits (`b6647a04`, `637a0265`, `ea104c22`) ; l'état des autres builds et le mode main gauche / droite (`?` en F01) ne sont pas documentés.
- **E1 et E7, valeurs de base** : les tableaux ne listent que les déclarations placées dans des requêtes ou dans `tokens.css` ; les grilles et positions hors requête (cartes sur téléphone, `.dock`, `.editor`, `.toast`) ne sont pas relevées (cellules `—` ou `?` selon le cas).
- **E7** : seules les requêtes média, la navigation et quelques jetons sont relevés. Toute ligne `?` en E7 signale une valeur probablement égale à E1 (copie) mais non confirmée par les entrées.
- **E8, nombre et liste des entrées** du dock bas « 3 colonnes » : non donnés. Géométrie du dock d'édition et du rail iPad : voir la matrice (C07, C09).
- **E6, `geometry.css`** (`notes-v6@daf38120` 2026-11-01, V8) : l'entrée renvoie à `radius-spacing.md` ; son contenu n'est pas dans cette catégorie. Branches BR1 à BR5 : seules les différences de requêtes média sont listées.
- **Lignes `—`** : pour les requêtes non dimensionnelles (A40 à A48) et pour les lignes de grilles internes de E4 (B13 à B20, B36), `—` en E2, E3, E5, E8 ne prouve pas l'absence : ces entrées ne relèvent que les points de rupture. Pour E4, E9, les entrées listent tous les blocs `@media`, `—` y est une absence.
- **`--space-N`** : la valeur numérique de `--space-1`..`--space-8` n'est pas dans les entrées de cette catégorie (voir `radius-spacing.md`) ; les valeurs `var(--space-N)` ne peuvent pas être comparées entre versions.
- **E0, syntaxe** : le CSS du bundle utilise la syntaxe de plage (`width>=48em`, `width<=21.25em`) ; la matrice la note `min-width` / `max-width` pour comparer avec les autres versions (même sens, forme différente).
- **Conversions em en px** : faites à 16 px par em (hypothèse), jamais citées par les entrées.
- **E9, valeurs numériques** : `--ms-toolbar-height`, `--ms-dock-height` : la valeur 62px est citée pour le dock ; les autres hauteurs ne sont pas dans l'entrée.
- **Mode main gauche / droite** : E0 non documenté ; E2, E3, E5, E6, E8, E9 : aucun mode mentionné par les entrées ; E8 a seulement la position du rail iPad.

Détail complet par dépôt : design-system/by-repo/<repo>/layout.md
