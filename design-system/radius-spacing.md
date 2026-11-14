# Rayons, espacements, bordures, tailles de contrôles et d'icônes : consolidation

Portée : rayons (valeur, jeton, composant), règles de calcul de rayon, échelle d'espacement, largeurs de bordure et d'anneau, tailles de contrôles (cibles tactiles, dock, bouton « + »), tailles d'icônes, sur les 10 versions E0 à E9. Inventaire seulement : aucune recommandation. Les cellules citent des sha à 8 caractères du dépôt de la colonne (voir section 3 pour `repo@sha date`).

## 1. Colonnes et légende

| Colonne | Version | Dépôt (branche) | Période |
|---|---|---|---|
| E0 | Notes 2.x et 26.10.9 à 26.10.15 | `notes-v3` (`notes-site`) | 2026-10-09 à 2026-10-15 |
| E1 | Notes v3 (source) | `notes-v3` (`main`) | 2026-10-18 à 2026-10-31 |
| E2 | notepad-pwa | `notepad-pwa` | 2026-10-20 à 2026-11-10 |
| E3 | Notes 4 | `notes-4` | 2026-10-21 à 2026-11-09 |
| E4 | Notes v5 | `notes-v5` | 2026-10-21 à 2026-11-11 |
| E5 | Quick Notes | `notes-svelte` | 2026-10-22 |
| E6 | Notes v6 « Mind Space » | `notes-v6` | 2026-10-28 à 2026-11-02 |
| E7 | AI Studio | `notes-aistudio` | 2026-10-31 à 2026-11-06 |
| E8 | MindSpace (ancien) | `mindspace-old` | 2026-11-02 à 2026-11-12 |
| E9 | mindspace-core | `mindspace-core` | 2026-11-10 à 2026-11-12 |

Cellules : `valeur` = valeur ou état dans cette version ; `=` = identique à la dernière valeur affichée à gauche ; `A → B` = changé pendant cette version (réf. en section 3) ; `—` = absent de cette version ; `✗ réf` = supprimé dans cette version (`A → ✗ réf` quand la valeur est née puis supprimée dans la même version). Compléments : `=E1` = identique à la colonne E1 (utilisé quand des colonnes intermédiaires diffèrent ; E7 est une copie d'E1 au départ) ; `non listé` = présent dans la version mais valeur absente des entrées (voir section 6) ; `non défini` = la version n'a pas de valeur propre ; `h÷ratio` = `calc(var(--h) / var(--radius-ratio))` ; `size÷ratio` = `calc(size / var(--radius-ratio))`. Les valeurs de rayon des composants regroupent tous les composants de même rôle et de même valeur (colonne `utilisé par`, liste non exhaustive : le détail complet est dans les fichiers par dépôt).

Familles d'identifiants : `a` rayons, `b` règles de calcul, `c` espacements, `d` bordures et anneaux, `e` tailles de contrôles, `f` tailles d'icônes.

## 2. Matrice

| id | famille | élément | alias | utilisé par | E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| b01 | règle | `--radius-ratio` (diviseur) | — | règle ÷ ratio (voir b02) | 3 (b6647a04) | fixe → 3 (926abbd6) ; Papier 4.8 (fbf13b31) | — | — | 3 (b1f17318) ; Papier 4.8 (ad232dfb) ; Minimal 4 (feebaaea) | — | — | =E1 (3 ; Papier 4.8, 9021b9bc) | — | — |
| b02 | règle | Règle « rayon = hauteur ÷ ratio » | « hauteur ÷ 3 » ; « tiers » | E0 : jetons `--radius-control/-tap/-row…` ; E1 : nombreux composants `calc(var(--h) / var(--radius-ratio))` (.btn, .icon-btn, .fab, .chip, .pill, .badge, .switch, .toast…) ; E4/E7 : idem | `size ÷ ratio` (jetons) dès le premier build | rayons fixes → `h ÷ 3` (926abbd6) → étendue aux pastilles/points (ef23bea4) | —  (aucune règle) | —  (échelle sans formule) | `h ÷ ratio` (b1f17318) ; `--radius-sm = dock-btn ÷ ratio` (82aa90c2) | —  (valeurs fixes) | —  (valeurs fixes) | `h ÷ ratio` (=E1, 9021b9bc) ; jetons figés en px (d2819fcc, 6dbe9114) | —  (aucune : recherche git `height / 3` vide) | —  (aucune) |
| b03 | règle | Règle concentrique (conteneur = rayon intérieur + marge) | « concentric », `R_inner = max(0, R_outer − padding)` | îlots, panneaux, cartes imbriquées | `island = control + space-island` ; `popover = row + space-popover` ; `card = space-card + inner + 1px` | =E0 en principe (926abbd6 « containers stay concentric ») : `island = control + space-1` ; `panel = row + space-2` ; `card = space-4 + 24px÷ratio` | — | — | =E1 (b1f17318) ; écrite `max(0, R_outer − padding)` (31c3b88f) | — | géométrie 52/44/4/12/8 et 60/44/8/20/12 (daf38120) | =E1 (9021b9bc) ; « Concentric radius system » (d2819fcc) | `max(0px, calc(--ms-parent-radius − --ms-inset))`, inset 12px (f4917c57, 29b654ea) | — |
| a01 | rayon | `999px` pilule | `--radius-full` (E0) ; `--radius-pill` (E1, E5, E9 en `--ms-radius-pill`) ; `--radius-dock` Verre (E4) | E0 .progress-track, .seek-*, .wave i, .version-pill, .change-count ; E1 .action-btn, .btn, .badge, .chip, .icon-btn, .island, .pill, .segmented, .tab-btn, .text-btn, .toast… ; E3 dock-shell (dès 28ad8ce4), .folder, .pin ; E4 dock Verre ; E5 barre d'onglets, onglets, boutons, puces ; E7 .scope-count ; E8 filtres changelog.css ; E9 dock, barre d'outils, onglets, outils, .ms-back, .ms-button | 999px (b6647a04) | 999px → ✗ ef23bea4 | — | 999px (94f8e515 puces ; 28ad8ce4 dock) | 999px (ad232dfb) | 999px (2923c47d) | — | 999px (6dbe9114) | 999px → ✗ 28bcfe04 | 999px (128050ce) |
| a02 | rayon | `9999px` pilule | `--ms-radius-pill`, `rounded-full` (Tailwind) | filtres capsule, onglets compacts | — | — | — | — | — | — | — | — | 9999px (78997d3f) | — |
| a03 | rayon | `99px` | — | `.ms-note-saved`, `button` | — | — | — | — | — | — | — | — | 99px (aeca0395) | — |
| a04 | rayon | `50%` cercle | `--radius-round` (E0) | E0 .folder-dot, .rec-dot, .seek-thumb, .save-status i, .icon-btn.has-dot:after ; E1 .fab, .swatch, .player-play, .switch i, .dots i… ; E3 .folder-dot ; E6 .status-dot, .avatar (10 règles) ; E7 .avatar-chip, .hero-avatar ; E8 .ms-meta-dot, .ms-node | 50% (b6647a04) | 50% → ✗ fe7ee2da | — | 50% (6f00cf58) | — | — | 50% (57c25ea2) | 50% (d2819fcc) | 50% → ✗ 7e3da2f4 | — |
| a05 | rayon | Carte de note | `--radius-card` (E0, E1, E5, E7) ; `--radius-md` (E3, E4, E6) ; `--ms-radius-card` (E8) ; `var(--ms-space-3)` (E9) | E0 .card, .card-open:after ; E1 .card, .art-card, .first-use, .task-group, .settings-list ; E3/E5 NoteCard ; E4 .card, .art-card, .first-use ; E6 .note-card ; E8 cartes de release, tableaux de bord ; E9 .ms-note-row | `space-card + (24px÷ratio) + 1px` (b6647a04) | 22px → `space-4 + 24px÷ratio` (926abbd6) | — | 18px (94f8e515) | `=E1` → 24px (82aa90c2) ; Verre 22 ; Papier 14 ; Minimal 28 | 22px (2923c47d) | 16px → 12px (1bae3e15) | `=E1` → 12px (6dbe9114) | 24px (78997d3f) | 16px (8f85ad28) |
| a06 | rayon | Conteneur de page | `--radius-container` (E5) | .card-surface, .empty-state | — | — | — | — | — | 34px (2923c47d) | — | — | — | — |
| a07 | rayon | Panneau / calque | `--radius-panel` (E1, E4, E7) ; `--radius-lg` (E0, E3, E4, E6) ; `--radius` (E2) ; `var(--ms-radius)` (E8) ; `var(--ms-space-3)` (E9) | E0 .att-box, .empty-state, .flashcard, .change-group, .news-summary ; E1/E4/E7 .layer, .sheet, .flashcard, .lib-rows, .tour-bubble ; E2 panneaux, brand-row, editor-area ; E3 .list-panel, .editor-panel, .settings-panel ; E6 .overview-card, .empty-state (13 règles à HEAD) ; E8 .settings-panel ; E9 .ms-card, .ms-editor__content, .ms-phrase-box, .ms-warning, .ms-reminder | 18px (b6647a04) | 30px → `row + space-2` (926abbd6) | 18px (3c6f6152) | 24px → 28px (28ad8ce4) | `row + space-2` → `sm + space-2` (82aa90c2) | — | 20px (57c25ea2) | =E1 → 12px (6dbe9114) | 8px → 16px (072f02c6) | 16px (5469a8ab) |
| a08 | rayon | Feuille basse (coins hauts) | `.sheet` mobile ; `--radius-sheet` (E7) | .sheet (≤ 47,99em), `.settings-sheet` | — | `panel panel 0 0` (35c0380c) | — | — | `panel panel 0 0` → `lg lg 0 0` (82aa90c2) | — | — | `panel panel 0 0` (=E1) ; `--radius-sheet` 20px (6dbe9114) ; `.settings-sheet` 24px 24px 0 0 (d2819fcc) | — | — |
| a09 | rayon | Dialogue / modal / bulle | `--radius-modal` (E7, E8) | E1 .tour-bubble ; E8 dialogues, tiroirs, `.ms-confirm-dialog` ; E9 .ms-dialog | — | 24px → `--radius-panel` (926abbd6) | — | — | — | — | — | `--radius-modal` 20px (6dbe9114) | 30px (78997d3f) ; 24px confirm (aeca0395) | 16px (4381e483) |
| a10 | rayon | Popover / menu | `--radius-popover` (E0) | E0 .popover, .menu, .tour-bubble ; E8 .ms-menu-surface | `row + space-popover` (b6647a04) | — | — | — | — | — | — | — | 20px (62846504) | — |
| a11 | rayon | Rangée / ligne / notice / option | `--radius-row` | E0 .row, .menu-option, .create-tile ; E1 .row, .option, .att, .map-canvas, .notice, .list-heading.is-toggle, .backup-code, .diff, .tidy-pair ; E3 .folder-card, .settings-item, .search-result ; E7 idem E1 | `52px÷ratio` (b6647a04) | 14px → `48px÷ratio` (926abbd6) | — | 18px (6f00cf58) | `48px÷ratio` → ✗ 82aa90c2 (→ `--radius-sm`) | — | — | `48px÷ratio` → 8px (6dbe9114) | — | — |
| a12 | rayon | Îlot / dock / barre flottante | `--radius-island` (E0, E1, E4, E7) ; `--radius-dock` (E4, E8) ; `--nav-radius` (E6) ; `--radius-nav-outer`, `--radius-outer`, `--radius-control-outer` (E7) | dock, barre d'outils, barre d'éditeur, `.island`, `.header-tools`, `.segmented` | `control + space-island` (b6647a04) | 999px → `control + space-1` (926abbd6) | — | 24px → 999px (28ad8ce4) | `control + space-1` → `sm + space-1` (82aa90c2) ; dock Verre 999px | 999px (2923c47d) | 20px nav ; 12px contrôles (daf38120) | `=E1` → 12px (d2819fcc) ; nav 20px → 12px (6dbe9114) | 32px (78997d3f) ; 20px `.ms-editor-dock` (62846504) | 999px (128050ce) |
| a13 | rayon | Bouton interne d'îlot / dock | `--radius-dock-btn` (E4) ; `--control-inner-radius`, `--nav-inner-radius` (E6) ; `--radius-control-inner`, `--radius-nav-inner`, `--radius-inner` (E7) | .fab, `.island .ctl`, `.seg-thumb`, items de dock | — | — | — | — | `dock − space-1` (ad232dfb) | — | 8px contrôle ; 12px nav (daf38120) | 8px (d2819fcc) ; nav-inner 12px → 8px (6dbe9114) | — | — |
| a14 | rayon | Bouton / contrôle | `--radius-control` (E0, E1, E7, E8 `--ms-radius-control`) ; `--radius-sm` (E3, E4) ; `--control-radius` (E6) | .action-btn, .icon-btn, .btn, .text-btn, .tab-btn, .chip… (E0/E1/E4/E7) ; boutons et champs (E2, E3, E6, E8) | `size-dock-btn(48)÷ratio` (b6647a04) | 999px → `dock-btn÷ratio` (926abbd6) | 10px → 12px (576a8c9d) | 12px → 16px (28ad8ce4) | `h÷ratio` ; `--radius-sm = dock-btn÷ratio` (82aa90c2) | 12px .toolbar-button ; 10px .mini-button (2923c47d) | 12px (57c25ea2) ; `--control-radius` 12px (daf38120) | `dock-btn÷ratio` → 8px (d2819fcc) | 16px (78997d3f) | — |
| a15 | rayon | `--radius-tap` (44÷ratio) | — | .info-pill, .att-remove, .player-play, .pull-hint ✗, .action-chip, .search-chip, .text-btn (dès ea104c22), .icon-btn.ghost, .search-field (ea104c22) | 44px÷ratio (b6647a04) | — | — | — | — | — | — | — | — | — |
| a16 | rayon | `--radius-tap-sm` (40÷ratio) | `--radius-toolbar-btn` (E0) | .player-btn, .wave-play, .swipe-icon, .change-icon, .change-pill, .segmented button, .format-strip .icon-btn, .search-clear (ea104c22) | 40px÷ratio (b6647a04) | — | — | — | — | — | — | — | — | — |
| a17 | rayon | `--radius-tap-lg` (52÷ratio) | — | .inline-form button/input, .study-btn, .toast | 52px÷ratio (b6647a04) | — | — | — | — | — | — | — | — | — |
| a18 | rayon | Pastille / badge / puce / compteur | `--radius-chip` (E0, E1) ; `--radius-card-inner` (E0, 24÷ratio) | E0 .meta-chip, .release-badge, .card-check, .card-grip ; E1 .badge, .chip, .pill, .sel-count, .stat, .version-pill, .change-pill ; E3 .folder, .pin ; E5 puces ; E6 .nav-count ; E8 badges, .ms-count | `22px÷ratio` (chip) ; `24px÷ratio` (card-inner) (b6647a04) | 12px (chip) → ✗ 926abbd6 ; 999px → `h÷ratio` (926abbd6, ef23bea4) | — | 999px (94f8e515) | `h÷ratio` (b1f17318) | 999px (2923c47d) | 8px (--radius-sm, 1bae3e15) | `=E1` ; 999px et 10px (6dbe9114) | 8px (--ms-radius-micro) ; 30px .ms-count (62846504) | — |
| a19 | rayon | Petits éléments 2–6 px (repères, mark, barres, kbd) | `--radius-xs` (E4) | mark, .md-hl, .wave i, .save-status i, .editor-grabber, .progress-track, .seek, .dots i, .art-card b/i, kbd | 2 px (`--space-0-5`) ; 3px ; .25rem (b6647a04, 637a0265) | 2/3/4/5/6px fixes (4da62555) | 6px kbd (3c6f6152) | — | 2–6px → `--radius-xs` 3px (67979ff5, 82aa90c2) | — | 2/3/5/6/7px → ✗ 1bae3e15 | =E1 (9021b9bc) | — | 4px (`--ms-space-1`, focus éditeur) → ✗ 5469a8ab |
| a20 | rayon | Photo / média de carte | — | .photo, .card-media, .overview-photo | `card − 1px` (haut) ; `--radius-md` (b6647a04) | 14px → `84px÷ratio` ; 16px → `card − 6px` (926abbd6) | — | — | `card − 6px` → `md − 6px` (82aa90c2) ; Minimal `list-radius − list-padding÷2` (bb3fa23d) | — | — | `card − 6px` → `card − space-2` (d2819fcc) | — | — |
| a21 | rayon | Tuile / widget / bibliothèque | — | .tile, .widget, .lib-tile, .lib-folder, .lib-tag, .create-tile | `--radius-row` .create-tile (ea104c22) | 20px → `84÷ratio` → `h÷ratio` (926abbd6, 4a4da608) ; `.lib-*` `h÷ratio÷1.5` (801d11fb) | — | — | =E1 (b1f17318) | — | — | =E1 (9021b9bc) | — | — |
| a22 | rayon | Interrupteur (switch) | — | .switch, .switch i | — | 16px → `h÷ratio` (d6af8790) ; i 50% → `k÷ratio` | — | — | `h÷ratio` ; i `k÷ratio` (b1f17318) | — | — | =E1 ; i `k÷ratio` → ✗ d2819fcc | — | — |
| a23 | rayon | Contrôle segmenté / barre d'actions | — | .segmented, .header-tools.island, .card-actions | `toolbar-btn + space-1` (b6647a04) | 999px → `40px÷ratio + 3px` (926abbd6, 4a4da608) | — | — | `40px÷ratio + 3px` (b1f17318) | — | 11px → ✗ 1bae3e15 → 8px (daf38120) | `40px÷ratio + 3px` → ✗ d2819fcc | — | — |
| a24 | rayon | Toast | — | .toast, .ambient-item | `--radius-tap-lg` (b6647a04) | 999px → `36px÷ratio + 6px` (926abbd6) | 10px (3c6f6152) | — | `36px÷ratio + 6px` → `ctl-s÷ratio + 7px` (2466c955) | — | — | =E1 (9021b9bc) | — | — |
| a25 | rayon | Champ de saisie / recherche | — | .search-field, .inline-form input, .title-input, .ms-field, .ms-search | `--radius-control` ✗ → `--radius-tap` (ea104c22) | 999px → `h÷ratio` (926abbd6) | 10px ; #note-title 12px (76dfefe5) | 12px → 18px (28ad8ce4) | `h÷ratio` | 16px (2923c47d) | 12px (--radius-md) | `h÷ratio` | 16px (78997d3f) ; 13px tâches (62846504) | 8px (0a15c7ce, 4381e483, 1d3ce5c0) |
| a26 | rayon | Case à cocher / sélecteur | — | .check-hit input, .card-check | `--radius-card-inner` (b6647a04) | 50% → `h÷ratio` ; 6px (926abbd6) | — | — | 6px → `18px÷ratio` (67979ff5) | — | — | 6px → `18px÷ratio` (d2819fcc) | — | — |
| a27 | rayon | Bouton « + » (FAB) | — | .fab, .quick-action | `60px÷ratio` (ea104c22) | 50% → `h÷ratio` (926abbd6) | — | 24px → 20px (28ad8ce4) | `--radius-dock-btn` (ad232dfb) | 28px (2923c47d) | — | =E1 (9021b9bc) | — | non documenté |
| a28 | rayon | Item de dock / onglet | — | .dock-item, .tab-btn, .nav-tab | `--radius-control` (ea104c22) | `h÷ratio` (926abbd6) | — | 12px → 16px (28ad8ce4) | `--radius-dock-btn` | — | `--nav-inner-radius` 12px | `=E1` | — | 999px (128050ce) |
| a29 | rayon | Icône d'application | — | .about-icon, favicon, manifest | `64px÷ratio` (637a0265) | 16px (4da62555) | rx 12 / 14 / 16 sur 64 (3c6f6152) | — | 16px → `64px÷ratio` (67979ff5) | rx 18/64, 44/192, 120/512 (2923c47d) | — | 16px ; 14px (6dbe9114) | — | — |
| a30 | rayon | Menu rapide (E5) | — | .quick-menu ; items | — | — | — | — | — | 20px ; items 13px (96889f8d) | — | — | — | — |
| a31 | rayon | `--radius-xs` | — | non lu (E3) ; petits éléments (E4) | — | — | — | 8px (94f8e515) | 3px (82aa90c2) | — | — | — | — | — |
| a32 | rayon | `--radius-sm` | — | E1 chips ; E3 bouton/champs/dock-item ; E4 contrôles (25+ sélecteurs) ; E6 pastilles ; E8 alias Tailwind | — | 9px → ✗ 926abbd6 | — | 12px (94f8e515) | `dock-btn÷ratio` (82aa90c2) | — | 8px (57c25ea2) | — | 8px (alias micro, 78997d3f) | — |
| a33 | rayon | `--radius-md` | — | (rôles : voir a05, a14) | 12px (b6647a04) | — | — | 18px (94f8e515) | 24px (82aa90c2) ; Verre 22 ; Papier 14 ; Minimal 28 | — | 12px (57c25ea2) | — | 8px (alias micro) | — |
| a34 | rayon | `--radius-lg` | — | (rôles : voir a07) | 18px (b6647a04) | — | — | 24px → 28px (28ad8ce4) | 24px (82aa90c2) ; Verre 28 ; Papier 20 ; Minimal 32 | — | 20px (57c25ea2) | — | 16px → ✗ 66a0c3dc | — |
| a35 | rayon | `--radius-xl` / `-2xl` / `-3xl` | — | alias Tailwind | — | — | — | — | — | — | — | — | xl 16px → ✗ 66a0c3dc ; 2xl 24px ; 3xl 30px (78997d3f) | — |
| a36 | rayon | `--radius` (alias shadcn) | — | — | — | — | 18px (3c6f6152) | — | — | — | — | — | 1rem (78997d3f) | — |
| a37 | rayon | `--radius-micro` | `--radius-ui`, `--ms-radius` | badges, étiquettes, kbd, cartes/filtres de changelog.css | — | — | — | — | — | — | — | — | 8px (591eb91e) ; `--ms-radius` → 16px (072f02c6) | — |
| a38 | rayon | `--list-radius` / `--settings-row-radius` / `--list-icon-radius` | — | liste de notes et réglages (look Minimal) | — | — | — | — | `md` ; `sm` ; `list-radius − list-icon-padding` (712013c6) ; Minimal 28px / 16px (feebaaea) | — | — | — | — | — |
| a39 | rayon | Rayons littéraux E8 (10, 12, 13, 14, 15, 16, 9, 20, 24, 30 px) | — | boutons de barre/menu 10 ; création, dock d'éditeur 12 ; actions de tête 14 ; liens de note, nav basse 15 ; menus, blocs, `pre` 16 ; menu 9 ; champ tâches 13 ; dock/menu 20 ; confirm 24 ; compteur 30 | — | — | — | — | — | — | — | — | 10 (99c91a87) ; 16 (6e5d04cf) ; 9/13/14/15/20/30 (62846504) ; 12/24 (aeca0395) | — |
| a40 | rayon | Valeurs hors échelle E6 (10, 11, 13, 14, 15, 16, 18, 19, 22, 24, 25px…) | — | brand-mark, note-card, settings-group, onboarding-card, editor-panel… | — | — | — | — | — | — | 10–25px (57c25ea2) → ✗ 1bae3e15 | — | — | — |
| c01 | espacement | `--space-0-5` 2px | — | mark, .md-hl, `--space-island` (≤ 21,25em) | 2px (b6647a04) | — | — | — | — | — | — | — | — | — |
| c02 | espacement | `--space-1` 4px | `--ms-space-1` (E9) | écarts de dock, de ligne, padding de barre d'outils (E9) ; `--radius-island` (E0, E1, E4) | 4px (b6647a04) | 4px (4da62555) | — | 4px (94f8e515) | 4px (b1f17318) | — | 4px (c80dbb09) | 4px (9021b9bc) | — | 4px (128050ce) |
| c03 | espacement | `--space-2` 8px | `--ms-space-2` (E9) | padding du dock, gap de listes et d'actions (E9) ; `--radius-panel` (E1, E4) | 8px (b6647a04) | 8px (4da62555) | — | 8px (94f8e515) | 8px (b1f17318) | — | 8px (c80dbb09) | 8px (9021b9bc) | — | 8px (128050ce) |
| c04 | espacement | `--space-3` 12px | — | `--edge` (E4), écarts de contrôles ; E9 : voir c05 | 12px (b6647a04) | 12px (4da62555) | — | 12px (94f8e515) | 12px (b1f17318) | — | 12px (c80dbb09) | 12px (9021b9bc) | — | — |
| c05 | espacement | `--space-4` 16px | `--ms-space-3` (E9, indice différent) | E0/E1 `--space-card`, `--space-screen` ; E9 marges latérales de `.ms-main`, padding des cartes | 16px (b6647a04) | 16px (4da62555) | — | 16px (94f8e515) | 16px → 20px (82aa90c2) | — | 16px (c80dbb09) | 16px (9021b9bc) | — | 16px (`--ms-space-3`, 128050ce) |
| c06 | espacement | `--space-5` 20px | — | E0 `--space-card` ≥ 48em | 20px (b6647a04) | 20px (4da62555) | — | 20px (94f8e515) | 20px → 32px (82aa90c2) | — | 20px (c80dbb09) | 20px (9021b9bc) | — | — |
| c07 | espacement | `--space-6` 24px | `--ms-space-4` (E9, indice différent) | E0 `--space-screen` ≥ 48em ; E9 padding vertical de `.ms-main`, marge des sections | 24px (b6647a04) | 24px (4da62555) | — | 24px (94f8e515) | 24px → 48px (82aa90c2) | — | 24px (c80dbb09) | 24px (9021b9bc) | — | 24px (`--ms-space-4`, 128050ce) |
| c08 | espacement | `--space-8` 32px | `--space-7` (E3) | E0/E1/E6/E7 grands écarts | 32px (b6647a04) | 32px (4da62555) | — | 32px (`--space-7`, 94f8e515) | 32px → ✗ 82aa90c2 | — | 32px (c80dbb09) | 32px (9021b9bc) | — | — |
| c09 | espacement | `--space-12` 48px | — | — | 48px (b6647a04) | — | — | — | — | — | — | — | — | — |
| c10 | espacement | `--space-card` / `--space-card-y` | — | cartes et lignes du bundle | `space-4` (≥48em `space-5`) ; y `space-3` (b6647a04) | — | — | — | — | — | — | — | — | — |
| c11 | espacement | `--space-screen` / `--edge-inset` | — | marge d'écran du bundle | `space-4` (≥48em `space-6`) ; edge-inset avec `--layout-max` (b6647a04) | — | — | — | — | — | — | — | — | — |
| c12 | espacement | `--space-island` / `--space-popover` | — | ilots, popovers | `space-1` (≤21,25em `space-0-5`) ; popover `space-2` (b6647a04) | — | — | — | — | — | — | — | — | — |
| c13 | espacement | `--gutter` | — | marge de page | — | 16px (4da62555) | — | — | 16px ; Papier 20px → `space-4` (b1f17318, ad232dfb) | — | — | 16px (9021b9bc) | — | — |
| c14 | espacement | `--edge` | `--space-edge` (E0) | bord d'écran | `space-3` (≤21,25em `space-1`) (b6647a04) | 12px (4da62555) | — | — | 12px → `space-3` (82aa90c2) | — | — | 12px (9021b9bc) | — | — |
| c15 | espacement | `--edge-l` / `--edge-r` | — | `edge + safe-l/r` ; dock mobile ≤ 26em : `10px + safe` (e30d2cdc) | — | `edge + safe` (ba6e7b28) | — | — | =E1 (b1f17318) | — | — | =E1 (9021b9bc) | — | — |
| c16 | espacement | `--safe-top` / `--safe-bottom` / `--safe-l` / `--safe-r` | — | encoches | — | valeurs non listées | — | — | bottom : `max(env, 8px)` → `max(env, space-2)` (82aa90c2) | `env(safe-area-inset-top/bottom, 0px)` (2923c47d) | — | bottom `max(env, 8px)` (9021b9bc) | — | `--ms-dock-bottom` : `space-3 + env(safe-area-inset-bottom)` (93b47014) |
| c17 | espacement | `--dock-bottom` / `--dock-lift` | `--ms-dock-bottom` (E9) | distance du dock au bas | — | — | — | — | lift 4px ; Papier 0px (ad232dfb) | — | — | `safe-bottom + space-2 + kb` (9021b9bc) | — | `space-3 + safe` (93b47014) |
| c18 | espacement | `--list-gap` / `--list-padding` / `--list-space` | — | listes (look Minimal) | — | — | — | — | 16 / 16 (Minimal 20) / 12 px (712013c6, feebaaea) | — | — | — | — | — |
| c19 | espacement | `--workspace-gap` | — | — | — | — | — | — | `clamp(space-3, 2vw, space-5)` (1c1fb148) | — | — | — | — | — |
| c20 | espacement | Rembourrage de page | — | .app-shell, .app-layout, .dashboard, .ms-main, .ms-app-workspace | — | — | 1rem ; 0.75rem < 560px (3c6f6152, 576a8c9d) | 32px 20px 120px → 24px 16px 120px (28ad8ce4) | — | padding 20px 16px (.app-layout, 2923c47d) | 32px 17px 16px → ✗ c80dbb09 | — | 24px clamp(16px,4vw,54px) 48px → 16px 16px calc(100px + safe) (62846504) | `space-4 space-3` (128050ce) |
| c21 | espacement | Marge basse de `.ms-main` (place du dock) | — | `.ms-main` | — | — | — | — | — | — | — | — | — | `target + 2×space-2 + 2×space-3 + safe` → `dock-bottom + dock-height + space-3` (93b47014) |
| c22 | espacement | Padding horizontal d'un onglet du dock | — | .ms-dock__item | — | — | — | — | — | — | — | — | — | `space-3` 16px → `space-2 + space-1` 12px (c74ffb69) |
| c23 | espacement | Espacements littéraux hors échelle (gap, padding, marge) | — | — | non listé | non listé | rem : 1, .5, .7, .72, .9, 1.1, 1.2 | gap 12 ; padding 12 14, 14 16, 18, 20 | non listé | gaps 6, 8, 10, 12, 14, 18 ; padding 16, 18 16 | 7–15, 17, 19, 21, 23, 25, 26, 28 → ✗ c80dbb09 | audit (d2819fcc) : 1, 2, 3, 5, 6, 7, 10, 14 px hors échelle | 1–25px (7, 9, 11, 13, 15…) (99c91a87, 62846504, aeca0395) | — |
| d01 | bordure | Trait fin `.5px` (hairline) | `--hairline` (E4) | cartes, pastilles, `.glass`, séparateurs | .5px (b6647a04) | non listé | — | — | `.5px` → `--hairline` .5px (ad232dfb) ; Papier/Minimal 1px | — | — | .5px (9021b9bc) | — | — |
| d02 | bordure | Bordure `1px` | `--ms-border-width` (E8) | surfaces, champs, cartes | 1px (b6647a04) | non listé | 1px solid (3c6f6152) ; bouton transparent → solid (576a8c9d) | 1px solid (94f8e515) | 1px (b1f17318) | 1px solid (2923c47d) | 1px solid (57c25ea2) | 1px (9021b9bc) | 1px (--ms-border-width, 591eb91e) | 1px solid `--ms-glass-border` → `--ms-border` (128050ce → 5469a8ab) |
| d03 | bordure | Bordure `2px` | `--border-thick` (E0) | E0 épaisse ; E9 boutons, champs, dialogue, rappel, avertissement | 2px (b6647a04) | — | kbd (bas) 2px (3c6f6152) | — | 2px (case, release-node) (b1f17318) | — | 2px (.loader, .radio-chip) | 2px (9021b9bc) | 2px (rail changelog) → ✗ 28bcfe04 | 2px solid `--ms-text` (0a15c7ce, 4381e483, 822c9496, 1d3ce5c0) ; avertissement `--ms-text` → `--ms-danger` (e64c019e) |
| d04 | bordure | Bordure `1.5px` (case à cocher) | — | .card-check, .check-hit input | — | — | — | — | 1.5px (b1f17318) | — | — | 1.5px (9021b9bc) | — | — |
| d05 | bordure | Bordure `3px` | — | E4 citation et diff ; E7 coins de QR ; E8 nœud changelog | — | — | — | — | 3px (32e9bd9e, 1c1fb148) | — | — | 3px (6dbe9114) | 3px → ✗ 28bcfe04 | — |
| d06 | bordure | Bordure pointillée | — | dossier nouveau, état vide, champ invalide | — | — | — | — | 1px dashed (b1f17318) | — | 1px dashed (57c25ea2) | 1px dashed (9021b9bc) ; variante `--color-line` → ✗ 6fc4b9d7 | — | `aria-invalid` dashed (4381e483) |
| d07 | bordure | Anneau de focus (largeur / décalage) | `--focus-ring`, `--focus-offset` (E0) ; `--ms-focus` (E9) | `:focus-visible` | 3px / offset 2px (b6647a04) | offset 2px ; largeur non listée ; 3px sous `prefers-contrast: more` (35c0380c) | — | 2px solid / offset 2px (94f8e515) | 2.5px / offset 2px ; composants 2px (b1f17318, 1c1fb148) | 2px / offset 2px (2923c47d) | 3px 55 % mélangé offset 3px → 2px (a0935371) → 3px `--focus-ring` (c80dbb09) | 2.5px / offset 2px (9021b9bc) | — | 3px / offset 2px ; `.ms-tool` −3px ; éditeur 8px → 2px (128050ce, 93b47014, 5469a8ab) |
| d08 | bordure | Mode contraste forcé | — | `forced-colors: active` | — | offset −3px (ba6e7b28) | — | — | 1px CanvasText ; outline 3px Highlight ; offset −3px (b1f17318, 2466c955) | — | offset −3px (daf38120) | 1px CanvasText ; 3px / 2px Highlight (9021b9bc) | — | bordure CanvasText (danger) |
| d09 | bordure | Coche / chevron en bordure partielle | — | `[aria-pressed]::after`, `summary:after` | 0 2px 2px 0 (637a0265) | 0 2.5px 2.5px 0 → ✗ d6af8790 ; ré-ajouté (d6af8790) → ✗ c3ec060f ; ré-ajouté (c3ec060f) | — | — | 0 2.5px 2.5px 0 (b1f17318) | — | — | =E1 (9021b9bc) | — | — |
| d10 | bordure | Soulignement / séparateur partiel | — | `.sheet`, `.note-found`, `.task-row`, titre, diviseur du dock | — | — | — | — | border-bottom/top `.5px` → `--hairline` (ad232dfb) | — | — | — | — | 1px glass-border → `--ms-border` (8f85ad28, c74ffb69, 5469a8ab) |
| d11 | bordure | Contour du bouton « + » de dock | — | .mobile-dock .dock-create | — | — | — | — | — | — | 5px → 4px solid `--surface` (34172c2a) | — | — | — |
| d12 | bordure | Bordure mélangée (`color-mix`) | — | teintes de bordure | — | — | — | — | — | — | 1px color-mix 20–44 % (57c25ea2) ; 8px `.mind-dot` | 1px color-mix 24 % (6dbe9114) | — | — |
| d13 | bordure | Curseur de bloc (gapcursor) | — | .ProseMirror-gapcursor::after | — | — | — | — | — | — | — | — | — | 1px solid `--ms-text`, 20px, top −2px (67a5541f) |
| e01 | contrôle | Cible tactile minimale | `--size-tap` (E0) ; `--tap` (E1, E4, E7) ; `--ms-target` (E9) | tous les contrôles interactifs | 44px (b6647a04) | 44px (4da62555) | non imposée : 2.55rem ≈ 40,8px (576a8c9d) | — | 44px (b1f17318) | non imposée (42px / 32px) | 44px (min-height button 1bae3e15 ; input, select ddf2710f) | 44px (9021b9bc) | 44px (doc 1cfd405a ; `min-h-11` 90c4f82d) | 44px (128050ce ; garde `tests/tokens.test.ts`) |
| e02 | contrôle | Zone tactile invisible (`::after`) | — | petits contrôles dessinés sous 44px | — | `max(100%, --tap)` (réf. 662ac041, date de pose non explicite) | — | — | chips 38px touchés à 44px (499ece81) | — | — | — | — | — |
| e03 | contrôle | `--size-tap-sm` 40px | — | toolbar-btn (→ tap en ea104c22), play, segmented | 40px (b6647a04) | — | — | — | — | — | — | — | — | — |
| e04 | contrôle | `--size-tap-md` 48px | — | `--size-dock-btn` | 48px (b6647a04) | — | — | — | — | — | — | — | — | — |
| e05 | contrôle | `--size-tap-lg` 52px | — | .inline-form, .study-btn, .toast | 52px (b6647a04) | — | — | — | — | — | — | — | — | — |
| e06 | contrôle | Bouton / onglet de dock (hauteur) | `--size-dock-btn` (E0) ; `--dock-btn` (E1, E4, E7) ; `--dock-height` (E3) ; `--nav-inner-height`, `--nav-inner` (E6, E7) | onglets et boutons du dock | 48px ; ≤ 21,25em 44px ; `--size-nav-tab` 52px (b6647a04, ea104c22) | 48px → 44px (fe7ee2da) | — | 52px (`--dock-height`, hauteur d'un `.dock-item`, 94f8e515) | 48px (b1f17318) | 68px → 62px < 440px (min-height onglet, 96889f8d) | 49px → 52px (34172c2a) ; intérieur 44px (daf38120) | 44px (9021b9bc) ; `--nav-inner` 44px (d2819fcc) | 51px (62846504) | min 44px (128050ce) |
| e07 | contrôle | Hauteur totale du dock / barre du bas | `--nav-height`, `--nav-h` (E6, E7) ; `--ms-dock-height` (E9) | barre de navigation | non défini (réserve `--size-dock-clearance` 84px) | 52px (messages fe7ee2da, e30d2cdc) | — | non défini (item 52px, padding 4px) | 52px `#nav-island` ≥ 48em (f1b51602) | non défini | 60px (daf38120) | 60px `--nav-h` ; 58px `--nav-height` (d2819fcc) | non défini (boutons 51px, padding 8px 14px + safe) | 62px `target + 2×space-2 + 2px` (93b47014) |
| e08 | contrôle | Bouton « + » (FAB), taille | `--size-fab` (E0) ; `--fab` (E1, E4, E7) ; `--fab-size` (E3) | bouton de création | 60px (ea104c22) | 58px → `dock-btn + 2×space-1` = 52px (fe7ee2da) | — | 60px (94f8e515) | 58px (b1f17318) | 76px → 70px < 440px (96889f8d) | 52px × 52px (57c25ea2) | `dock-btn + 2×space-1` → `--control-h` 52px (d2819fcc) | — (pas de FAB) | 44px min (item de dock) ; glyphe 1.5rem (5469a8ab) |
| e09 | contrôle | Bouton principal (hauteur) | `--size-action-btn` (E0) | boutons pleins | 56px (b6647a04) | `.btn` 50px (926abbd6) ; 44px (c3ec060f) ; 40px (35c0380c) ; 48px (0fa410ce) | padding .7rem 1rem → .72rem 1rem (576a8c9d) | 40px → 42px ; compact 34px (28ad8ce4) | `.ctl` 44px ; 52px (2466c955, bb3fa23d) | 42px `.save-button` ; 40px `.theme-option` | 30–42px → 44px (1bae3e15) | =E1 ; 32–40px (d2819fcc) | 44px ; 48px → 52px `.ms-create-button` (f4917c57, 62846504, aeca0395) | min 44px (0a15c7ce) |
| e10 | contrôle | Bouton icône carré | `--size-toolbar-btn` (E0) | .icon-btn, .toolbar-button, .back-chip | 40px → 44px (ea104c22) | 44px (926abbd6) ; format-strip 42px → dock-btn (35c0380c) ; header-tools 40px (4a4da608) | 2.5rem → 2.55rem (576a8c9d) | — | 44px (2466c955) ; 40px → 44px (f1b51602) | 42px × 42px (2923c47d) | 38–44px → 44px (1bae3e15) | =E1 | 44 × 44px (62846504) ; 38–42px (aeca0395) | min 44px (128050ce) |
| e11 | contrôle | Petits contrôles sous 44px | `--ctl-s` (E4) | chips, pills, jetons, mini-boutons | — | 18–38px (zone `::after` 44) ; `.swatch` 34 → 36 (7986f74a) | ≈ 40,8px | 34px compact | `--ctl-s` 34px (2466c955) ; chip 38px → ✗ 2466c955 | 32px `.mini-button` | 30–42px → ✗ 1bae3e15 | 32–40px (audit d2819fcc) | 36–42px (aeca0395) | — |
| e12 | contrôle | Échelle `.ctl` (34 / 44 / 48 / 58) | — | `.ctl`, `.ctl.is-s`, `.is-l`, `.is-xl` | — | — | — | — | 34 (touché 44) / 44 / 48 dock / 58 + (2466c955) | — | — | — | — | — |
| e13 | contrôle | Champ de saisie / recherche (hauteur) | — | .search-field, .ms-field, .ms-search | non listé | `--h = --fab` ; `.inline-form input` 46px (926abbd6) | — | padding 14px 16px | `--h = --fab` 58px | min-height 52px (2923c47d) | input, select 44px (ddf2710f) | =E1 | padding .65rem .875rem (cc1d4cf2) | min 44px (4381e483, 1d3ce5c0) |
| e14 | contrôle | Interrupteur (taille) | — | .switch | — | h 31px, i 27px (d6af8790) | — | — | 31 / 27px ; largeur 51px, actif 33px (b1f17318) | — | — | h 32px, largeur 52px (d2819fcc) ; 51px / 33px → ✗ | — | — |
| e15 | contrôle | Ligne de liste / réglage (hauteur min) | `--settings-row-height` (E4) | .row, .option, .setting-row, .ms-note-row | — | .list-heading.is-toggle 44px (35c0380c) | — | — | 52px → Minimal 56px (712013c6, feebaaea) | menu item 46px | 62–68px (57c25ea2) | 48px / 52px (9021b9bc) | 56px ; 64px (62846504, aeca0395) | min 44px (128050ce) |
| e16 | contrôle | Barre supérieure / barre d'outils (hauteur) | `--ms-toolbar-height` (E9) | .topbar, .header-bar, .ms-toolbar | — | — | — | — | — | — | 60 / 72px (57c25ea2) | 56px `.header-bar` (9021b9bc) | 68px ; 70px ; 78px (62846504, aeca0395, b44de130) | 54px `target + 2×space-1 + 2px` (93b47014) |
| e17 | contrôle | Largeur min d'un onglet de dock | — | .tab-btn, .mobile-dock button | — | — | — | — | 68px ; 88px ≥ 40em (b1f17318) | — | 52px (57c25ea2) | 68 / 88px (9021b9bc) ; 58 / 80px (d2819fcc) ; 52px (6dbe9114) | — | 44px (128050ce) |
| e18 | contrôle | Jetons de taille E0 divers | — | `--size-row` 52, `--size-chip` 22, `--size-badge` 24, `--size-checkbox` 18, `--size-dot` 8, `--size-thumb` 160, `--size-wave` 32, `--size-app-icon` 64 (637a0265)… | voir « utilisé par » (b6647a04) | — | — | — | — | — | — | — | — | — |
| e19 | contrôle | Hauteurs `--primary-height` / `--list-icon-size` (E4) | — | look Minimal | — | — | — | — | 52px / 48px → Minimal 56px (712013c6, feebaaea) | — | — | — | — | — |
| e20 | contrôle | Géométrie concentrique contrôles / nav | — | `--control-*`, `--nav-*` | — | — | — | — | — | — | 52 / 44 / 4 / 12 / 8 ; 60 / 44 / 8 / 20 / 12 (daf38120) | 52 / 44 / space-1 / 12 / 8 ; 60 ou 58 / 44 / space-2 ou 4px / 20 / 12 (d2819fcc) | — | — |
| e21 | contrôle | Largeurs de structure (jetons) | `--layer-w`, `--layout-max`, `--panel-max`, `--drawer-w`, `--split-list`, `--dock-max` | calques, mise en page | `--layout-max` référencé, valeur non listée | — | — | `--panel-max` 760px (jamais lu, 94f8e515) | `--layer-w` 380px ; `--layout-max` 1180px (b1f17318) | — | sidebar 250px ; 220px → ✗ c80dbb09 ; rail 72px | idem E4 ; `--drawer-w` `min(26rem, 45vw)` ; `--split-list` `clamp(22rem, 34vw, 30rem)` (9021b9bc) | sidebar 250px → rail 78px / replié 56px (99c91a87, aeca0395) | — |
| e22 | contrôle | Dimensions E9 diverses | `--ms-toolbar-bottom` | dock, barre, éditeur, dialogue, case | — | — | — | — | — | — | — | — | — | barre `dock-bottom + dock-height + space-2` ; éditeur min 40dvh ; dialogue `min(28rem, 100% − 2×space-3)` ; case 1.5rem (93b47014, 4381e483, 339dbce0) |
| f01 | icône | `13px` | — | .card-meta svg, .pwa-pill svg ; lucide `size={13}` | — | non listé | — | — | 13px (b1f17318) | — | — | 13px (9021b9bc) | 13 (64e843a0) | — |
| f02 | icône | `14px` | `--size-icon-xs` (E0) | .pill svg, .count svg, .change-pill svg | 14px (b6647a04) | non listé | — | — | 14px (b1f17318) | — | — | 14px (9021b9bc) | — | — |
| f03 | icône | `15px` | — | .card-check svg, .folder-chip svg ; lucide 15 | — | non listé | — | — | 15px (b1f17318) | — | — | 15px (9021b9bc) | 15 (20902a5d) | — |
| f04 | icône | `16px` | — | .ctl.is-s svg, .list-heading svg ; barre d'outils E5 ; lucide 16 | — | non listé | — | — | 16px (b1f17318) | 16 (2923c47d) | — | 16px (9021b9bc) | 16 (d5c96cef) | — |
| f05 | icône | `17px` | — | .chip svg, .card-actions svg ; lucide 17 | — | non listé | — | — | 17px → ✗ 2466c955 | — | — | 17px (9021b9bc) | 17 (ab94742b) | — |
| f06 | icône | `18px` | `--size-icon-sm` (E0) | .back-chip svg, .card-more svg ; menu rapide, recherche E5 ; lucide 18 | 18px (b6647a04) | non listé | — | — | 18px (b1f17318) | 18 (2923c47d) | — | 18px (9021b9bc) | 18 (a53044e3) | — |
| f07 | icône | `19px` | — | lucide 19 (EditorToolbar, barre de note, liste, rail : plus fréquent) | — | — | — | — | — | — | — | — | 19 (90c4f82d) | — |
| f08 | icône | `20px` | — | corbeille ; lucide Plus, MoreHorizontal ; `.settings-banner svg` | — | — | — | — | — | — | — | 20px (d2819fcc) | 20 (d5c96cef) | 20 × 20, viewBox 24 (4381e483) |
| f09 | icône | `22px` | `--size-icon` (E0) | svg global, `.tab-btn svg`, `.fab.is-quiet svg` ; onglets E5 ; `+` du dock bas E8 | 22px (b6647a04) | 22px (svg global) | — | — | 22px (b1f17318) | 22 (2923c47d) | — | 22px (9021b9bc) | 22 (ab94742b, 62846504) | — |
| f10 | icône | `24px` | — | .lib-tile > svg ; `.dock-create > svg` (E6) ; défaut lucide ; glyphe `1.5rem` (E9) | — | non listé | — | — | 24px (b1f17318) | — | 24px (34172c2a) | 24px (9021b9bc) | 24 (défaut lucide `<X />`, d5c96cef) | 1.5rem (c74ffb69) |
| f11 | icône | `26px` | — | .tile svg ; états vides E5 28 | — | non listé | — | — | 26px (b1f17318) | — | — | 26px → ✗ 6dbe9114 | — | — |
| f12 | icône | `28px` | — | .fab svg ; états vides E5 | — | non listé | — | — | 28px (b1f17318) | 28 (2923c47d) | — | 28px (9021b9bc) | — | — |
| f13 | icône | `30px` / `32px` | — | .pwa-hero-app-icon svg ; .changelog-empty-state svg ; `+` E5 | — | — | — | — | — | 32 (2923c47d) | — | 30px (9021b9bc) ; 32px (6dbe9114) | — | — |
| f14 | icône | Épaisseur de trait `1.75` | — | svg global | — | 1.75 (svg global) | — | — | 1.75 (b1f17318) | — | — | — | — | — |
| f15 | icône | Épaisseur de trait `2` | — | E0 global ; .card-meta svg, .fab.is-quiet svg ; E8 flèches | 2px (b6647a04) | — | — | — | 2 (b1f17318) | — | — | — | 2 (20902a5d) | — |
| f16 | icône | Épaisseur de trait `2.25` | — | .fab svg, .state-mark svg ; badges E8 | — | — | — | — | 2.25 (b1f17318) | — | — | — | 2.25 (64e843a0) | — |
| f17 | icône | Épaisseur de trait `2.5` | — | .card-check svg, .swatch svg, .switch svg | — | — | — | — | 2.5 (b1f17318) | — | — | — | — | — |

## 3. Détail des changements

Format : `valeur — première apparition réf — dernier état réf — raison`. Références complètes `repo@sha date`.

### 3.0 Points demandés : hauteur du dock, bouton « + » (FAB), cibles tactiles

**Hauteur du bouton / onglet de dock (e06) et hauteur totale du dock (e07)**
- 48 px (`--size-dock-btn` = `--size-tap-md`; 44 px sous 21,25em) — notes-v3@b6647a04 2026-10-09 — fin de la lignée notes-site notes-v3@ea104c22 2026-10-15 — non documentée. `--size-nav-tab` 52 px posé par notes-v3@ea104c22 2026-10-15 (« refonte UX (navigation, menu Créer, ⋮ pa… »).
- 48 px (`--dock-btn`) — notes-v3@4da62555 2026-10-18 — remplacé notes-v3@fe7ee2da 2026-10-29 — « barre du bas plus compacte : 52 px, boutons de 44 px, + au carré de la même hauteur ».
- 44 px (`--dock-btn`) — notes-v3@fe7ee2da 2026-10-29 — HEAD. Message de notes-v3@e30d2cdc 2026-10-29 : « polish editing, tables, cards and the 52px dock » (hauteur totale 52 px citée par les messages, sans jeton dans les entrées).
- 52 px (`--dock-height`, hauteur d'un `.dock-item`) — notes-4@94f8e515 2026-10-22 — HEAD (jamais modifié).
- 48 px (`--dock-btn`) — notes-v5@b1f17318 2026-10-21 — HEAD (non aligné sur le passage à 44 px d'E1). `#nav-island` `height: 52px` ≥ 48em — notes-v5@f1b51602 2026-11-08 — HEAD.
- 68 px → 62 px sous 440 px (min-height d'un onglet) — notes-svelte@96889f8d 2026-10-22 — HEAD.
- 49 px (`.mobile-dock button`, min-height) — notes-v6@57c25ea2 2026-10-28 — supprimé notes-v6@34172c2a 2026-10-28 (thème Système, dock 5 colonnes) ; 52 px à la place. Puis `--nav-height` 60 px, `--nav-inner-height` 44 px, `--nav-padding` 8 px — notes-v6@daf38120 2026-11-01 — HEAD (« geometry.css »).
- 44 px (`--dock-btn`) — notes-aistudio@9021b9bc 2026-10-31 ; `--nav-h` 60 px et `--nav-height` 58 px — notes-aistudio@d2819fcc 2026-11-02 — HEAD (deux jetons de valeurs différentes ; voir section 6).
- 51 px (`.ms-bottom-nav button`) — mindspace-old@62846504 2026-11-05 — HEAD ; contenu décalé de 100/102 px.
- 62 px (`--ms-dock-height` = `target + 2×space-2 + 2px`) — mindspace-core@93b47014 2026-11-10 — HEAD. Le « 2px » est la bordure (glass border en ère verre, bordure plate depuis mindspace-core@5469a8ab 2026-11-11). Auparavant la marge basse de `.ms-main` était calculée sans jeton (`target + 2×space-2 + 2×space-3 + safe`, mindspace-core@128050ce).

**Bouton « + » / FAB (e08)**
- 60 px (`--size-fab`) — notes-v3@ea104c22 2026-10-15 — fin notes-site ; `--size-action-btn` 56 px posé dès notes-v3@b6647a04 2026-10-09.
- 58 px (`--fab`) — notes-v3@4da62555 2026-10-18 — remplacé notes-v3@fe7ee2da 2026-10-29 par `calc(var(--dock-btn) + 2 * var(--space-1))` = 52 px — « + au carré de la même hauteur » ; 58 px aussi dans notes-v5@b1f17318 2026-10-21 (HEAD).
- 60 px (`--fab-size`) — notes-4@94f8e515 2026-10-22 — HEAD ; rayon du FAB 24 px → 20 px notes-4@28ad8ce4 2026-10-22.
- 76 px × 76 px, 70 px sous 440 px — notes-svelte@96889f8d 2026-10-22 (QuickActionMenu dès notes-svelte@2923c47d) — HEAD.
- 52 px × 52 px (`.dock-create`) — notes-v6@57c25ea2 2026-10-28 — HEAD ; contour 5 px → 4 px `--surface` notes-v6@34172c2a.
- `--fab` = `calc(dock-btn + 2×space-1)` — notes-aistudio@9021b9bc 2026-10-31 — remplacé notes-aistudio@d2819fcc 2026-11-02 par `var(--control-h)` = 52 px.
- Aucun FAB : `.ms-create-button` 48 px → 52 px — mindspace-old@62846504 2026-11-05 / @aeca0395 2026-11-05.
- 44 px minimum, glyphe `1.5rem`, aucune taille propre (c'est un `.ms-dock__item`) — mindspace-core@5469a8ab 2026-11-11 (nom, fond ambre) ; glyphe depuis mindspace-core@c74ffb69 2026-11-10 — HEAD.

**Cibles tactiles minimales (e01, e11)**
- 44 px — présente dès E0 (`--size-tap`, notes-v3@b6647a04), E1 (`--tap`, notes-v3@4da62555), E4 (`--tap`, notes-v5@b1f17318), E7, E9 (`--ms-target`, mindspace-core@128050ce).
- notepad-pwa : aucune cible 44 px imposée, `.icon-button` 2.5rem → 2.55rem (≈ 40,8 px) — notepad-pwa@3c6f6152 → @576a8c9d 2026-10-20.
- notes-4 : bouton `min-height` 40 px → 42 px (notes-4@28ad8ce4), compact 34 px.
- notes-v5 : `--ctl-s` 34 px « touché à 44 » — notes-v5@2466c955 2026-10-24 ; commit @499ece81 : « 44px minimum touch targets (chips drawn at 38px and touched at 44px), 48px dock buttons, a 58px +, 16px inputs ».
- notes-v6 : `min-height` 30 à 42 px → 44 px — notes-v6@57c25ea2 → @1bae3e15 2026-10-28 (« contraste ») ; champs `input, select` 44 px — notes-v6@ddf2710f 2026-10-29.
- notes-v3 : `.swatch` `--h` 34 → 36 px — notes-v3@926abbd6 2026-10-18 → @7986f74a 2026-10-28 (« touch the folder chip and folder colours at 44px »).
- notes-aistudio : le document `docs/ui-visual-consistency-audit.md` (d2819fcc) liste des cibles de 40 px (`.header-tools .icon-btn`, `.segmented button`, `.tour-actions .btn`).

### 3.1 Règles de calcul de rayon

**b01 `--radius-ratio`**
- 3 — notes-v3@b6647a04 2026-10-09 — fin notes-site — non documentée (déjà présent au premier build).
- rayons fixes → 3 — notes-v3@4da62555 2026-10-18 (fixes) puis @926abbd6 2026-10-18 (règle ÷3) — HEAD — « every radius = its box height ÷ 3 ; containers stay concentric ».
- 4.8 (Papier) — notes-v3@fbf13b31 2026-10-24 — HEAD — « Port V5 Style/Accent… » (coins plus doux). Notes-v5 : Papier 4.8 notes-v5@ad232dfb 2026-10-21 ; Minimal 4 notes-v5@feebaaea 2026-11-10.

**b02 Règle ÷ ratio**
- tokens `size÷ratio` — notes-v3@b6647a04 — fin notes-site. Rayons fixes (999 px, panel 30, card 22, row 14, chip 12, sm 9) — notes-v3@4da62555 2026-10-18 — remplacés par ÷3 notes-v3@926abbd6 2026-10-18. Étendue aux pastilles, points, versions (« plus aucune forme ronde ») — notes-v3@ef23bea4 2026-10-19 ; `--radius-pill` supprimé.
- notes-v5 : `--radius-sm = --dock-btn ÷ --radius-ratio`, `--radius-island = sm + space-1`, `--radius-panel = sm + space-2` — notes-v5@82aa90c2 2026-10-21 (avant : `--radius-control`, `--radius-row`, `--radius-card` dérivés).
- notes-aistudio : ÷3 en A0 ; valeurs figées en px à notes-aistudio@d2819fcc 2026-11-02 (« Concentric radius system ») et notes-aistudio@6dbe9114 2026-11-05 (jetons réduits à 8 / 12 px, sheet et modal 20 px) ; le ratio reste utilisé par `calc(var(--h)/var(--radius-ratio))` pour la plupart des contrôles.
- notes-v6, notes-4, notepad-pwa, mindspace-old, mindspace-core : aucune règle ÷N (mindspace-old : `git log --all -S'height / 3'` et `-S'÷'` ne trouvent rien ; mindspace-core : « aucune règle de calcul du type hauteur ÷ 3 »).

**b03 Règle concentrique**
- notes-v5@31c3b88f 2026-11-10 : `R_inner = max(0, R_outer − padding)`. mindspace-old@f4917c57 2026-11-05 14:00 : `max(0px, calc(var(--ms-parent-radius) - var(--ms-inset)))`, inset 12px ; `.ms-concentric-card` mindspace-old@29b654ea 2026-11-05 15:42 « no silent radius fallback ». Géométrie notes-v6@daf38120 2026-11-01 ; notes-aistudio@d2819fcc 2026-11-02.

### 3.2 Rayons

**a01 Pilule 999px**
- 999 px (`--radius-pill`) — notes-v3@4da62555 2026-10-18 — SUPPRIMÉ notes-v3@ef23bea4 2026-10-19 — « Numéros de version, étiquettes et points suivent la règle ÷3 : plus aucune forme ronde » (la plupart des composants passent à ÷3 dès notes-v3@926abbd6 2026-10-18).
- 999 px (changelog.css) — mindspace-old@83de6dd4 2026-11-05 — SUPPRIMÉ mindspace-old@28bcfe04 2026-11-05 (remplacé par `var(--ms-radius)` ; fichier supprimé @7e3da2f4 2026-11-05 11:36) — non documentée.

**a04 Cercle 50%**
- 50 % — notes-v3@4da62555 2026-10-18 (dernier élément remplacé : `.accent-dot`, notes-v3@fe7ee2da 2026-10-29) — par `h÷ratio` ou `7px÷ratio` (@926abbd6, @d6af8790, @ef23bea4) — « plus aucune forme ronde ». Point de dossier de la Carte des liens : cercle r=4 → carré `rx=8/3` — notes-v3@369fe07a 2026-10-19 (Sheets.tsx).
- 50 % (changelog.css `.ms-meta-dot`, `.ms-node`) — mindspace-old@83de6dd4 2026-11-05 — SUPPRIMÉ mindspace-old@7e3da2f4 2026-11-05 11:36.

**a05 Carte de note**
- 22 px → `space-4 + 24px÷ratio` — notes-v3@4da62555 2026-10-18 — notes-v3@926abbd6 2026-10-18 (HEAD) — ÷3.
- `--radius-card` formule → 24 px (`--radius-md`) — notes-v5@b1f17318 2026-10-21 — notes-v5@82aa90c2 2026-10-21 — non documentée (échelle `xs/sm/md/lg` posée). Papier 14 px : `--radius-card` b1f17318 → `--radius-md` ad232dfb ; Verre 22 px ad232dfb ; Minimal 28 px feebaaea 2026-11-10.
- 16 px → 12 px (`--radius-md`) — notes-v6@57c25ea2 2026-10-28 — notes-v6@1bae3e15 2026-10-28 (HEAD) — « contraste » (rayons ramenés à l'échelle 8/12/20).
- `space-4 + 24px÷ratio` → 12 px — notes-aistudio@9021b9bc 2026-10-31 — notes-aistudio@6dbe9114 2026-11-05 — « jetons réduits à 8 / 12 px ».
- notes-4 `--radius-md` 18 px ; notes-svelte `--radius-card` 22 px ; mindspace-old `--ms-radius-card` 24 px ; mindspace-core 16 px (`--ms-space-3`) : jamais modifiés.

**a07 Panneau / calque**
- 30 px → `row + space-2` — notes-v3@4da62555 → @926abbd6 2026-10-18 — ÷3.
- 24 px → 28 px (panneaux) — notes-4@94f8e515 2026-10-22 → @28ad8ce4 2026-10-22 — non documentée.
- `row + space-2` → `sm + space-2` — notes-v5@b1f17318 → @82aa90c2 2026-10-21. Papier 14 px → ✗ notes-v5@ad232dfb.
- `row + space-2` → 12 px — notes-aistudio@9021b9bc → @6dbe9114 2026-11-05.
- `var(--ms-radius)` 8 px → 16 px — mindspace-old@b44de130 2026-11-05 05:40 → @072f02c6 2026-11-05 14:01 (`--ms-radius` remplacé par `var(--ms-radius-control)`).
- notepad-pwa : `#editor` 14 → 16 → 18 px (A → B → C, 2026-10-20) ; `--radius` 18 px stable.

**a08 Feuille basse** : `panel panel 0 0` — notes-v3@35c0380c 2026-10-21 — HEAD ; → `lg lg 0 0` notes-v5@82aa90c2 2026-10-21 ; `--radius-sheet` 20 px + `.settings-sheet` 24 px notes-aistudio@6dbe9114 / @d2819fcc.

**a09 Dialogue** : `.tour-bubble` 24 px → `--radius-panel` — notes-v3@4da62555 → @926abbd6 ; mindspace-old `--ms-radius-modal` 30 px notes @78997d3f, `.ms-confirm-dialog` 24 px @aeca0395.

**a11 Rangée** : 14 px → `48px÷ratio` — notes-v3@4da62555 → @926abbd6 ; notes-v5 `--radius-row` `48px÷ratio` → ✗ notes-v5@82aa90c2 (→ `--radius-sm`) ; notes-aistudio `48px÷ratio` → 8 px @6dbe9114.

**a12 Îlot / dock**
- 999 px → `control + space-1` — notes-v3@4da62555 → @926abbd6 2026-10-18 ; `.header-tools.island` / `.segmented` `40px÷ratio + 3px` — notes-v3@4a4da608 2026-10-18 (« barre unique + au pouce »).
- 24 px (`--radius-lg`) → 999 px (dock-shell) — notes-4@94f8e515 → @28ad8ce4 2026-10-22.
- `control + space-1` → `sm + space-1` — notes-v5@b1f17318 → @82aa90c2 ; `--radius-dock` posé notes-v5@ad232dfb 2026-10-21 (Verre 999 px).
- 20 px nav / 12 px contrôles — notes-v6@daf38120 2026-11-01 (geometry.css) — HEAD.
- `control + space-1` → 12 px (`--radius-control-outer`) — notes-aistudio@d2819fcc 2026-11-02 ; nav 20 px → 12 px — notes-aistudio@6dbe9114 2026-11-05.
- mindspace-old `--ms-radius-dock` 32 px mindspace-old@78997d3f 2026-11-05 ; `.ms-editor-dock` 20 px @62846504.

**a14 Bouton / contrôle**
- 999 px → `dock-btn÷ratio` — notes-v3@4da62555 → @926abbd6 ; `--dock-btn` 48 → 44 px (@fe7ee2da) fait varier le rayon calculé.
- 10 px → 12 px (boutons) — notepad-pwa@3c6f6152 → @576a8c9d 2026-10-20.
- 12 px → 16 px — notes-4@94f8e515 → @28ad8ce4 2026-10-22.
- `dock-btn÷ratio` → 8 px — notes-aistudio@9021b9bc → @d2819fcc (via `--radius-control-inner`) puis @6dbe9114 (littéral).

**a18 Pastille** : 12 px (`--radius-chip`) — notes-v3@4da62555 — SUPPRIMÉ @926abbd6 ; badges 999 px → `h÷ratio` @926abbd6 / @ef23bea4 ; E0 `.badge`, `.meta-folder`, `.media-count` supprimés notes-v3@ea104c22 2026-10-15.

**a19 Petits éléments** : `2/3/4/5/6px` → `--radius-xs` 3 px — notes-v5@b1f17318 → @67979ff5 / @82aa90c2 2026-10-21 ; valeurs 2/3/5/6/7 px d'E6 supprimées notes-v6@1bae3e15 ; focus éditeur 4 px (`--ms-space-1`) — mindspace-core@93b47014 2026-11-10 → SUPPRIMÉ mindspace-core@5469a8ab 2026-11-11 (éditeur devenu carte de 16 px, `outline-offset: 2px`).

**a20 à a29, a32 à a37** (rayons de composants et échelle générique)
- Photo : 14 px → `84px÷ratio`, `.card-media` 16 px → `card − 6px` — notes-v3@4da62555 → @926abbd6 ; → `md − 6px` notes-v5@82aa90c2 ; → `card − space-2` notes-aistudio@d2819fcc.
- Tuile / widget : `.tile` 20 px → `84px÷ratio` @926abbd6 → `h÷ratio` @4a4da608 ; `.widget` `h÷ratio÷2 + 8px` → `h÷ratio` @4a4da608.
- Interrupteur : 16 px → `h÷ratio` — notes-v3@801d11fb 2026-10-18 → @d6af8790 2026-10-19.
- Toast : 999 px → `36px÷ratio + 6px` — notes-v3@926abbd6 ; → `ctl-s÷ratio + 7px` notes-v5@2466c955 2026-10-24.
- Champ : 12 px → 18 px — notes-4@94f8e515 → @28ad8ce4 ; 999 px → `h÷ratio` notes-v3@926abbd6.
- Case : 6 px → `18px÷ratio` — notes-v5@b1f17318 → @67979ff5 ; notes-aistudio@9021b9bc → @d2819fcc.
- FAB : 50 % → `h÷ratio` notes-v3@926abbd6 ; 24 px → 20 px notes-4@28ad8ce4.
- `--radius-sm` : 9 px → ✗ notes-v3@926abbd6 ; notes-4 12 px ; notes-v5 `dock-btn÷ratio` @82aa90c2 ; notes-v6 8 px ; `--radius-lg` : notes-4 24 → 28 px (@28ad8ce4) ; notes-v5 24 px (@82aa90c2) ; mindspace-old 16 px → ✗ @66a0c3dc (« avoid global lg/xl radius remap »).
- Icône d'app : 16 px → `64px÷ratio` — notes-v5@b1f17318 → @67979ff5. Favicons notepad-pwa : rx 12 / 14 / 16 sur 64 selon fichier (3c6f6152, 576a8c9d).
- Valeurs hors échelle d'E6 (10 à 25 px) — notes-v6@57c25ea2 — SUPPRIMÉES notes-v6@1bae3e15 2026-10-28 (rayons ramenés à `--radius-sm/md/lg`).

### 3.3 Espacements

**c05 / c06 / c07 / c08 (échelle de notes-v5)** : `--space-4` 16 → 20 px, `--space-5` 20 → 32 px, `--space-6` 24 → 48 px, `--space-8` 32 px supprimé — notes-v5@b1f17318 2026-10-21 — notes-v5@82aa90c2 2026-10-21 — « without renumbering the existing --space-* scale (--space-4 is 20px in v5) » (docs/project-decisions-2026-11-10.md, citation seule).
**c13 `--gutter`** (Papier) : 20 px → `var(--space-4)` — notes-v5@b1f17318 → @ad232dfb 2026-10-21.
**c14 `--edge`** : 12 px → `var(--space-3)` — notes-v5@b1f17318 → @82aa90c2.
**c16 `--safe-bottom`** : `max(env(...), 8px)` → `max(env(...), var(--space-2))` — notes-v5@b1f17318 → @82aa90c2.
**c20 Rembourrage de page** : notepad-pwa 1rem ; 0.75rem sous 560 px (@576a8c9d) ; notes-4 `32px 20px 120px` → `24px 16px 120px` (@94f8e515 → @28ad8ce4) ; notes-v6 `32px 17px 16px` → ✗ @c80dbb09 ; mindspace-old `24px clamp(16px,4vw,54px) 48px` → `16px 16px calc(100px + safe)` (@62846504).
**c21 Marge basse de `.ms-main`** : `calc(target + space-2×2 + space-3×2 + env(safe-area-inset-bottom))` — mindspace-core@128050ce 2026-11-10 — remplacée mindspace-core@93b47014 2026-11-10 par `calc(dock-bottom + dock-height + space-3)`.
**c22 Padding d'un onglet du dock** : `0 var(--ms-space-3)` 16 px — mindspace-core@128050ce — remplacé mindspace-core@c74ffb69 2026-11-10 par `0 calc(space-2 + space-1)` 12 px — « marges des items réduites pour tenir à 360 px ».
**c23** : E6 padding / gap impairs supprimés notes-v6@c80dbb09 2026-10-31 (styles alignés sur `--space-*`) ; E7 audit des écarts hors échelle (1, 2, 3, 5, 6, 7, 10, 14 px) — notes-aistudio@d2819fcc 2026-11-02.

### 3.4 Bordures et anneaux

**d01** `.5px` → `var(--hairline)` — notes-v5@b1f17318 → @ad232dfb 2026-10-21 ; `--hairline` Papier 1 px @ad232dfb, Minimal 1 px @feebaaea.
**d02 / d10 / d03 (mindspace-core)** : `1px solid var(--ms-glass-border)` — mindspace-core@128050ce 2026-11-10 — remplacée mindspace-core@5469a8ab 2026-11-11 par `1px solid var(--ms-border)` (passage au design plat). Bordure des boutons, champs, dialogue, rappel `2px solid var(--ms-text)` — mindspace-core@0a15c7ce / @4381e483 / @822c9496 2026-11-11 (commentaire : « a 2px edge in the text color so it is found without relying on the faint border token »). Avertissement de première sauvegarde : `2px solid var(--ms-text)` — @0a15c7ce → `2px solid var(--ms-danger)` — @e64c019e 2026-11-11.
**d07 Anneau de focus** : notes-v6 `3px` mélangé offset 3 px (@57c25ea2) → `2px solid var(--accent-text)` (@a0935371) → `3px solid var(--focus-ring)` (@c80dbb09). notes-v3 `outline-width: 3px` sous `prefers-contrast: more` — notes-v3@35c0380c 2026-10-21. mindspace-core : `outline-offset` de l'éditeur `var(--ms-space-2)` → `2px` @5469a8ab ; `.ms-tool` `-3px` @93b47014.
**d09** : coche `0 2.5px 2.5px 0` — notes-v3@4da62555 — SUPPRIMÉE @d6af8790 2026-10-19 — ré-ajoutée @d6af8790 (`:is(.option, .row)`) — SUPPRIMÉE @c3ec060f 2026-10-21 — ré-ajoutée @c3ec060f ; HEAD.
**d11** : contour du `+` de dock 5 px → 4 px — notes-v6@57c25ea2 → @34172c2a 2026-10-28.
**d08** : `1px solid CanvasText` et `3px Highlight` d'E4 supprimés puis remplacés par des équivalents — notes-v5@b1f17318 → @2466c955 2026-10-24.

### 3.5 Tailles de contrôles (autres)

**e09 / e10 / e13 / e14** : `.btn` `--h` 50 px (notes-v3@926abbd6) ; `.format-strip .icon-btn` 42 px → `var(--dock-btn)` (notes-v3@926abbd6 → @35c0380c 2026-10-21, « audit design appliqué… ») ; `.widget` `--h` 124 → 112 → 82 → 60 px (notes-v3@801d11fb → @4a4da608 → @35c0380c) ; `.tile` `--h` 116 → 92 px (@4a4da608 → @d6af8790) ; `.header-tools .icon-btn` / `.segmented button` 40 → 44 px — notes-v5@b1f17318 → @f1b51602 2026-11-08 ; notes-svelte `.save-button` 42 px ; notes-4 bouton 40 → 42 px (@28ad8ce4) ; `.ctl` remplace `.icon-btn`/`.chip`/`.card-more` — notes-v5@2466c955 2026-10-24 (`--h` 32 et 38 px supprimés). mindspace-old `.ms-create-button` 48 px → 52 px (@62846504 → @aeca0395).
**e10 (E0)** : `--size-toolbar-btn` 40 px → 44 px — notes-v3@b6647a04 → @ea104c22 2026-10-15 (« refonte UX »).
**e20 E6 géométrie** : 52 / 44 / 4 / 12 / 8 et 60 / 44 / 8 / 20 / 12 — notes-v6@daf38120 2026-11-01 ; DESIGN.md « Angles de 8, 12 et 20px suivant l'échelle existante ».
**e14 Interrupteur (E7)** : 51 px → 52 px, 33 px actif supprimé — notes-aistudio@9021b9bc → @d2819fcc.

### 3.6 Tailles d'icônes

- 17 px (`.chip svg`, `.card-actions svg`) — notes-v5@b1f17318 2026-10-21 — SUPPRIMÉ notes-v5@2466c955 2026-10-24 (chips remplacés par `.ctl`) ; encore présent en E7.
- 26 px (`.tile svg`) — notes-aistudio@9021b9bc — SUPPRIMÉ notes-aistudio@6dbe9114 2026-11-05.
- Corbeille 20 × 20 px, viewBox 24 — mindspace-core@4381e483 2026-11-11.


## 4. Éléments disparus

| élément | créé (réf) | supprimé (réf) | version | remplacé par | note |
|---|---|---|---|---|---|
| `--radius-pill` 999px | notes-v3@4da62555 2026-10-18 | notes-v3@ef23bea4 2026-10-19 | E1 | `h÷ratio` | « plus aucune forme ronde » |
| `--radius-chip` 12px | notes-v3@4da62555 2026-10-18 | notes-v3@926abbd6 2026-10-18 | E1 | `h÷ratio` | — |
| `--radius-sm` 9px | notes-v3@4da62555 2026-10-18 | notes-v3@926abbd6 2026-10-18 | E1 | `--radius-control` (`dock-btn÷ratio`) | — |
| `--radius-panel` 30px, `--radius-row` 14px, `--radius-card` 22px (valeurs fixes) | notes-v3@4da62555 2026-10-18 | notes-v3@926abbd6 2026-10-18 | E1 | formules ÷3 | noms conservés, valeurs remplacées |
| `.widget --h` 124px / 112px / 82px | notes-v3@801d11fb 2026-10-18 | notes-v3@4a4da608 2026-10-18 (124), @35c0380c 2026-10-21 (82) | E1 | 60px (90px ≥ 40em) | — |
| `.layer.lib-page` radius 0, `.lib-bubble` 12px | notes-v3@801d11fb 2026-10-18 | notes-v3@d6af8790 2026-10-19 | E1 | — | bibliothèque en page |
| `.version-preview` radius row (seul) | notes-v3@c3ec060f 2026-10-21 | notes-v3@0fa410ce 2026-10-29 | E1 | `.version-preview, .tidy-pair` | — |
| `#nav-island .seg-thumb --gap 1px / --pad 2px` (≤ 24em) | notes-v3@78e2a8a6 2026-10-29 | notes-v3@e30d2cdc 2026-10-29 | E1 | `.main-dock …` ≤ 26em (gap 0px, pad 2px) | « keep Bibliothèque whole in the dock at 360 px » |
| `.badge`, `.meta-folder`, `.media-count`, `.pull-hint`, `.search-field input`, `.toolbar .icon-btn`, `.island.toolbar` (rayons) | notes-v3@b6647a04 2026-10-09 | notes-v3@ea104c22 2026-10-15 | E0 | — | « refonte UX » |
| `.changelog summary:after` border-width | notes-v3@637a0265 2026-10-09 | notes-v3@b99f70fc 2026-10-09 | E0 | `.release summary:after` | — |
| `--radius-card`, `--radius-control`, `--radius-row` (formules), `--space-8` | notes-v5@b1f17318 2026-10-21 | notes-v5@82aa90c2 2026-10-21 | E4 | `--radius-md`, `--radius-sm` ; `--space-5/-6` redéfinis | — |
| Papier : `--radius-card/-control/-island/-panel/-row` | notes-v5@b1f17318 2026-10-21 | notes-v5@ad232dfb 2026-10-21 | E4 | `--radius-md/-lg` Papier | — |
| `border: .5px solid` littéral, `1px solid CanvasText`, `outline 3px Highlight` (premières versions) | notes-v5@b1f17318 2026-10-21 | notes-v5@ad232dfb / @2466c955 | E4 | `--hairline` ; règles `.ctl` | — |
| `--h` 32px (`.card-more`), 38px (`.chip`), `.icon-btn`, `.action-btn`, `width` 7px / 17px / 72px | notes-v5@b1f17318 2026-10-21 | notes-v5@2466c955 2026-10-24 | E4 | `.ctl` + `--ctl-s` | — |
| `.row > svg` Minimal (taille d'icône) | notes-v5@bb3fa23d 2026-11-10 | notes-v5@7c2488c3 2026-11-11 | E4 | `.settings-layout .row > svg` | — |
| valeurs de rayon 10 à 25px et `48% 52% 56% 44%` | notes-v6@57c25ea2 2026-10-28 | notes-v6@1bae3e15 2026-10-28 | E6 | `--radius-sm/md/lg` | « contraste » |
| padding / gap impairs (11, 13, 17, 19, 21, 23…) | notes-v6@57c25ea2 2026-10-28 | notes-v6@c80dbb09 2026-10-31 | E6 | échelle `--space-*` | — |
| `.mobile-dock button` min-height 49px, padding `3px 7px` | notes-v6@57c25ea2 2026-10-28 | notes-v6@34172c2a 2026-10-28 | E6 | 52px | dock 5 colonnes |
| `border: 5px solid var(--surface)` (dock-create) | notes-v6@57c25ea2 2026-10-28 | notes-v6@34172c2a 2026-10-28 | E6 | 4px | — |
| `--radius-card` `space-4 + 24px÷ratio`, `--radius-panel`, `--radius-row`, `--radius-control` (formules) | notes-aistudio@9021b9bc 2026-10-31 | notes-aistudio@6dbe9114 / @d2819fcc | E7 | 12px / 12px / 8px / 8px | « jetons réduits à 8 / 12 px » |
| `.switch` 51px, `.option:active .switch i` 33px, `.seg-thumb` formule | notes-aistudio@9021b9bc 2026-10-31 | notes-aistudio@d2819fcc 2026-11-02 | E7 | 52px | — |
| `.tile svg` 26px ; `.widget` min-width 9.5rem | notes-aistudio@9021b9bc 2026-10-31 | notes-aistudio@6dbe9114 / @6fc4b9d7 2026-11-05 | E7 | — | — |
| `--radius-lg`, `--radius-xl` (16px, remap global) | mindspace-old@78997d3f 2026-11-05 | mindspace-old@66a0c3dc 2026-11-05 | E8 | `--radius-ms-control`, `--radius-ms-micro` | « avoid global lg/xl radius remap » |
| `--ms-radius` 0.5rem | mindspace-old@591eb91e 2026-11-05 | mindspace-old@072f02c6 2026-11-05 | E8 | `var(--ms-radius-control)` 16px | — |
| rayons et bordures de `changelog.css` (8, 16, 999px, 50 %, 2 px, 3 px) | mindspace-old@83de6dd4 2026-11-05 | mindspace-old@28bcfe04 / @7e3da2f4 2026-11-05 | E8 | `var(--ms-radius)` | fichier supprimé |
| `button` 8px | mindspace-old@99c91a87 2026-11-03 | mindspace-old@b44de130 2026-11-05 | E8 | `var(--ms-radius)` | — |
| `--ms-space-card` 1.5rem (seul jeton d'espacement, non consommé) | mindspace-old@78997d3f 2026-11-05 | — (HEAD) | E8 | — | jamais supprimé |
| `border-radius: var(--ms-space-1)` du focus de l'éditeur | mindspace-core@93b47014 2026-11-10 | mindspace-core@5469a8ab 2026-11-11 | E9 | carte de 16 px | design plat |
| `1px solid var(--ms-glass-border)` | mindspace-core@128050ce 2026-11-10 | mindspace-core@5469a8ab 2026-11-11 | E9 | `1px solid var(--ms-border)` | `--ms-glass-border` : `rgb(0 0 0 / 0.1)` clair, `rgb(255 255 255 / 0.12)` sombre |
| padding d'onglet du dock 16px | mindspace-core@128050ce 2026-11-10 | mindspace-core@c74ffb69 2026-11-10 | E9 | 12px | « marges des items réduites pour tenir à 360 px » |
| marge basse de `.ms-main` (formule v1) | mindspace-core@128050ce 2026-11-10 | mindspace-core@93b47014 2026-11-10 | E9 | `dock-bottom + dock-height + space-3` | — |
| bordure d'avertissement `2px solid var(--ms-text)` | mindspace-core@0a15c7ce 2026-11-11 | mindspace-core@e64c019e 2026-11-11 | E9 | `2px solid var(--ms-danger)` | — |


## 5. Éléments propres à une seule version

- **E0** : `--space-0-5` 2px, `--space-12` 48px, `--space-card`, `--space-screen`, `--space-island`, `--space-popover`, `--size-tap-sm` 40 / `-md` 48 / `-lg` 52, `--size-nav-tab` 52 (ea104c22), `--radius-tap`, `--radius-tap-sm`, `--radius-tap-lg`, `--radius-toolbar-btn`, `--radius-popover`, `--radius-card-inner`, `--border-thick` 2px (b6647a04, ea104c22).
- **E2** : favicon / manifest rx 12 / 14 / 16 sur 64 (3c6f6152) ; `kbd` 6px ; aucune cible 44px.
- **E3** : `--space-7` 32px, `--panel-max` 760px (jamais lu), `--dock-height` 52px, `--fab-size` 60px, `.folder-dot` 12 × 12 + halo (94f8e515, 6f00cf58).
- **E4** : `--radius-dock`, `--radius-dock-btn`, `--ctl-s`, échelle `.ctl`, `--hairline`, `--list-*`, `--settings-row-*`, `--primary-height`, `--workspace-gap` (ad232dfb, 2466c955, 712013c6, 1c1fb148).
- **E5** : `--radius-container` 34px, `--radius-card` 22px propre (2923c47d), FAB 76 / 70px, menu rapide 20 / 13px (96889f8d).
- **E6** : `--control-*`, `--nav-*` (daf38120).
- **E7** : `--radius-outer`, `--radius-inner`, `--radius-nav-*`, `--radius-sheet`, `--radius-modal`, `--control-h`, `--nav-h`, `--nav-height` (d2819fcc, 6dbe9114).
- **E8** : `--ms-radius-micro`, `--ms-radius-modal`, `--ms-radius-dock`, `--ms-radius-pill` 9999px, `99px`, `--ms-space-card`, concentric `--ms-inset` 12px (78997d3f, f4917c57, 29b654ea).
- **E9** : `--ms-dock-height` 62px, `--ms-toolbar-height` 54px, `--ms-target`, échelle `--ms-space-1..4` (4 / 8 / 16 / 24), `--ms-radius-pill` 999px (128050ce, 93b47014).


## 6. Contradictions et trous

Contradictions et pièges de nommage
1. `--space-N` : E0, E1, E6, E7 donnent 12px à `--space-3`, 16px à `--space-4`, 24px à `--space-6` ; E4 redéfinit `--space-4` à 20px, `--space-5` à 32px, `--space-6` à 48px (notes-v5@82aa90c2) ; E9 nomme 16px `--ms-space-3` et 24px `--ms-space-4` ; E3 nomme 32px `--space-7`, les autres `--space-8`. Une même valeur (32px) existe sous `--space-8` (E0, E1), `--space-7` (E3), `--space-5` (E4).
2. E7 définit à la fois `--nav-h` 60px et `--nav-height` 58px, `--nav-pad` (`--space-2`) et `--nav-padding` 4px (d2819fcc) ; E6 `--nav-padding` vaut 8px et `--nav-height` 60px. Le fichier d'entrée n'indique pas quel jeton est consommé.
3. E3 : `--radius-xs` 8px (jamais lu) ; E4 : `--radius-xs` 3px ; E0 n'a pas de `--radius-xs`. Même nom, rôles différents.
4. E6 : l'en-tête annonce des rayons 8 / 12 / 20px « depuis V0 jusqu'à HEAD » ; le tableau montre que `--radius-sm/md/lg` ne sont utilisés qu'à partir de notes-v6@1bae3e15 (les valeurs 10 à 25px sont encore en V0). L'en-tête annonce aussi `button { min-height: 44px }` dès V1 ; le tableau place `min-height: 44px` dès notes-v6@57c25ea2 (2 règles). Il annonce des gouttières téléphone de 17px (13px sous 390px) sans réf., alors que `.dashboard, .settings-page` `padding 32px 17px 16px` est supprimé à notes-v6@c80dbb09 (V5, que l'en-tête cite pour l'échelle d'espacement).
5. E7 : l'en-tête dit « jetons réduits à 8 / 12px » (A2) mais `--radius-sheet` et `--radius-modal` 20px, `.settings-sheet` 24px 24px 0 0 et plusieurs `calc(var(--h)/var(--radius-ratio))` restent ; `--radius-sheet` et `--radius-modal` sont définis sans consommateur visible dans les entrées (`.sheet` garde `var(--radius-panel) var(--radius-panel) 0 0`).
6. E1 : la ligne « Cible tactile » (notes-v3@4da62555 → HEAD) porte `notes-v3@662ac041 2026-10-28` dans la colonne des notes : on ne sait pas si c'est la pose de la zone `::after` ou une autre référence.
7. E1 : la ligne « Barre du bas » donne `--dock-btn` 48 → 44px et `--fab` 58 → `calc(dock-btn + 2×space-1)` = 52px (notes-v3@fe7ee2da), le message parle d'une « barre du bas … 52 px » ; aucun jeton E1 de hauteur totale du dock n'est listé.
8. E4 : `--dock-btn` reste 48px et `--fab` 58px à HEAD alors que notes-v5 est un port parallèle de notes-v3, qui passe à 44 / 52px le 2026-10-29 ; aucune entrée E4 ne dit si c'est volontaire.
9. E4 : la phrase « `--space-4` vaut 20px dans v5 » est citée depuis `docs/project-decisions-2026-11-10.md` ; le changement de valeur apparaît dans le code à notes-v5@82aa90c2 (2026-10-21), onze jours avant ce document.
10. E8 : `--ms-radius` vaut 8px puis 16px (mindspace-old@072f02c6) ; les règles qui l'utilisent (b44de130, 05:40) n'ont donc pas gardé la même valeur ; `--radius` shadcn vaut 1rem en E8 et 18px en E2 (rôles distincts).
11. E9 : `.ms-note-row`, `.ms-card`, etc. écrivent le rayon avec `var(--ms-space-3)` (jeton d'espacement) ; le dépôt n'a qu'un jeton de rayon (`--ms-radius-pill`). E9 dit « 16 px = `--ms-space-3` » alors que `--space-3` vaut 12px dans E0, E1, E4, E6, E7.
12. E9 : le rayon du bouton « + » (`.ms-fab`) n'est pas listé ; seule la forme pilule du dock, de la barre d'outils, des onglets et des outils est documentée (cellule a27 : « non documenté »).

Trous (zones non couvertes par les entrées)
- E1 : pas de largeur de bordure (hairline, 1px, 2px) ni de taille d'icône par composant listées, alors qu'E7 (copie d'E1 au premier commit) en montre (`.5px solid var(--color-line)`, 13 à 28px). Cellules `non listé`. Pas de largeur de focus de base listée (3px seulement sous `prefers-contrast: more`).
- E1 : `--safe-top/-bottom/-l/-r` référencés (`--edge-l`) mais valeurs non listées ; E0 : `--layout-max` référencé (`--edge-inset`) sans valeur.
- E0 : hauteur totale du dock non définie (seul `--size-dock-clearance` 84px et `--size-sel-clearance` 92px) ; E3, E5, E8 : pas de hauteur totale de dock.
- E9 : tailles d'icônes seulement la corbeille 20×20 et le glyphe `1.5rem` ; pas de tableau d'icônes de l'interface, rayon du `.ms-fab` et icône d'app non listés (voir icons.md).
- E6 : branches non fusionnées (BR1 à BR5) : valeurs de forme/taille seulement des retraits de décors (orbites, `.mind-*`) et `.editor-details[open] > summary` `var(--radius-lg) var(--radius-lg) 0 0` (notes-v6@d11bb77c 2026-10-29) ; aucune n'est dans la matrice (non fusionnées).
- Tailles de lignes de structure (sidebar, rail, largeurs de page) : renvoi à `layout.md` ; seules celles que les entrées de cette catégorie citent sont reprises (e21).
- Les composants listés en `utilisé par` sont des exemples (jusqu'à 3 sélecteurs par valeur dans notes-v5, 2 à 3 dans notes-v6/E7, une liste complète dans notes-v3) : la liste exhaustive est dans les fichiers par dépôt.
- notes-v6 : valeurs de `gap`, `padding`, `height`, `width`, `min-*` de décor (orbites, anneaux, illustrations 110 à 330px) non reprises dans la matrice ; elles sont dans `design-system/by-repo/notes-v6/radius-spacing.md`.
- notes-v5@499ece81 : la date n'est pas donnée dans l'entrée.

Détail complet par dépôt : design-system/by-repo/<repo>/radius-spacing.md
