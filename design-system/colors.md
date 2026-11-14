# Couleurs : consolidation des versions E0 à E9

Portée : jetons de couleur, couleurs nommées, états, bordures, verre et voiles, couleurs d'enveloppe (theme-color, manifest, icône) et couleurs système de l'ensemble des dépôts de notes. Inventaire seulement : aucune recommandation, aucune décision visuelle. Sources : `SCR/design/<dépôt>/colors.md` (9 dépôts) et `LINEAGE.md`.

## 1. Colonnes et légende

| Colonne | Version | Dépôt (branche) | Période |
|---|---|---|---|
| E0 | Notes 2.x et 26.10.9 à 26.10.15 | `notes-v3` (branche `notes-site`) | 2026-10-09 à 2026-10-15 |
| E1 | Notes v3 (source) | `notes-v3` (`main`) | 2026-10-18 à 2026-10-31 |
| E2 | notepad-pwa | `notepad-pwa` | 2026-10-20 à 2026-11-10 |
| E3 | Notes 4 | `notes-4` | 2026-10-21 à 2026-11-09 |
| E4 | Notes v5 | `notes-v5` | 2026-10-21 à 2026-11-11 |
| E5 | Quick Notes | `notes-svelte` | 2026-10-22 |
| E6 | Notes v6 « Mind Space » | `notes-v6` | 2026-10-28 à 2026-11-02 |
| E7 | AI Studio | `notes-aistudio` | 2026-10-31 à 2026-11-06 |
| E8 | MindSpace (ancien) | `mindspace-old` | 2026-11-02 à 2026-11-12 |
| E9 | mindspace-core | `mindspace-core` | 2026-11-10 à 2026-11-12 |

Cellules :
- `valeur` : la valeur dans cette version. `clair / sombre` : une valeur pour chaque mode (une seule valeur sans barre = identique dans les deux modes, ou mode unique, précisé « sombre seul »).
- `=` : identique à la dernière valeur affichée à gauche (cellules `—` et `?` ignorées).
- `A → B` : changé pendant cette version (références et raisons au § 3). Une cellule à une seule flèche montre la première et la dernière valeur ; plusieurs flèches = étapes successives ; les étapes intermédiaires sont toutes au § 3.
- `—` : absent de cette version.
- `✗ <réf>` : supprimé dans cette version (réf = sha8 du commit du dépôt de la colonne). `valeur → ✗ réf` ou `= → ✗ réf` : présent puis supprimé dans la même version.
- `?` : non couvert par les entrées (voir § 6).

Conventions de lecture
- Une ligne = un rôle sémantique ; la colonne « alias » donne le nom du jeton dans chaque version. Les valeurs propres à un look ou à un thème ont leur propre ligne (Papier, Acrylique, Minimal, OLED, lilas). Le look Verre est le jeton de base ; E4 l'appelle `glass`, E9 « Verre » puis « Flat » (changement au sein de E9, au 2026-11-11).
- `mix(X; Y)` = `color-mix(in srgb, X Y, transparent)` ; X et Y sont des noms de jeton abrégés (`text` = `var(--color-text)`, `alpha-soft` = `var(--alpha-soft)`).
- E4 : la cellule du look Verre montre l'état par défaut, c'est-à-dire la valeur de `tokens.css :root` à la première apparition, puis la valeur effective de `looks.css` à HEAD ; le détail des états intermédiaires est au § 3.
- Les hex sont recopiés tels que dans les entrées (casse et notation comprises).

## 2. Matrice

Familles, dans l'ordre : Fonds, Textes, Accents, États, Bordures, Verre et voiles, Contraste renforcé, Catégories, Composants, Enveloppe, Système, Opacités. 283 lignes.

| famille | élément | alias (nom par version) | E0 | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Fonds | fond de page (défaut, look Verre) | E0 `--color-bg` ; E2 `--bg` ; E3 `--bg` ; E4 `--color-bg` ; E5 `--bg` ; E6 `--canvas` (DESIGN.md `paper-canvas`, `night-canvas`) ; E7 `--color-bg` ; E8 `--ms-canvas` puis `--ms-bg` ; E9 `--ms-bg` | #f2f2f7 / #000 | #eef0f6 / #08090c | #f4f7fb / #0b1020 → #f3f7ff / #090d18 | #f3f4f6 / #0b1020 | #eef0f6 / #08090c → #f4f5f8 / #0b0c0f | #F7F3EE / #141413 | #f5f4ef / #171918 | #eef0f6 / #08090c | #111827 (sombre seul) → #faf9f6 / #121316 | = |
| Fonds | fond de page, look Papier | `--color-bg` (looks.css `data-look='paper'`) | — | #f7f4ec / #121110 | — | — | = | — | — | = | — | — |
| Fonds | fond de page, look Minimal | `--color-bg` (`data-look='minimal'`) | — | — | — | — | #fafaf9 / #101115 | — | — | — | — | — |
| Fonds | fond de page, mode OLED (sombre) | E4 `--color-bg` (`data-oled='true'`) ; E7 `--color-oled-bg` | — | — | — | — | #000 | — | — | #000000 | — | — |
| Fonds | fond de page, thème lilas | E8 `--ms-bg` (`data-theme=lilac`) | — | — | — | — | — | — | — | — | #faf8ff | — |
| Fonds | fond de la barre latérale | E6 `--sidebar` (DESIGN.md `desk-sidebar`) | — | — | — | — | — | — | #faf9f5 / #1c201e | — | — | — |
| Fonds | surface de contenu (carte) | E0 `--color-surface` ; E1 `--color-card` ; E3 `--card` ; E4 `--color-card` ; E5 `--surface` ; E6 `--surface` (`sheet`, `night-sheet`) ; E7 `--color-card` ; E8 `--ms-surface` ; E9 `--ms-surface` | #fff / #1c1c1e | #ffffffc7 / #1d1e24b8 → #ffffff / #1a1b20 | — | #ffffff / #121a2a | #ffffff / #1a1b20 → #ffffff / #17181d | #F1EAE1 / #1D1C1A | #fffefa / #202321 | #ffffff / #1a1b20 | #1f2937 (sombre seul) → #ffffff / #1e2025 | #ffffff / #1b1c21 → #ffffff / #1e1e22 |
| Fonds | surface de contenu, look Papier | `--color-card` (`data-look='paper'`) | — | #fffdf7 / #1c1a17 | — | — | = | — | — | = | — | — |
| Fonds | surface de contenu, look Minimal | `--color-card` (`data-look='minimal'`) | — | — | — | — | #ffffff / #1b1d23 | — | — | — | — | — |
| Fonds | surface de contenu, mode OLED | E7 `--color-oled-card` | — | — | — | — | — | — | — | #08080a | — | — |
| Fonds | carte « solide » | `--color-card-solid` | — | #ffffff / #18191e → #ffffff / #1a1b20 | — | — | #ffffff / #1a1b20 → ✗ 82aa90c2 | — | — | #ffffff / #1a1b20 | — | — |
| Fonds | carte « solide », look Papier | `--color-card-solid` | — | var(--color-card) | — | — | = → ✗ 82aa90c2 | — | — | var(--color-card) | — | — |
| Fonds | surface de l'éditeur (page d'écriture) | `--color-editor` | — | #f7f8fbf2 / #0e0f13f2 → #f7f8fb / #0e0f13 | — | — | #f7f8fb / #0e0f13 → #fafbfc / #0e0f13 | — | — | #f7f8fb / #0e0f13 | — | — |
| Fonds | surface de l'éditeur, look Papier | `--color-editor` (`data-look='paper'`) | — | var(--color-card) | — | — | #fbf9f3 / #161412 → var(--color-card) | — | — | var(--color-card) | — | — |
| Fonds | surface de l'éditeur, look Minimal | `--color-editor` (`data-look='minimal'`) | — | — | — | — | #ffffff / #15171c | — | — | — | — | — |
| Fonds | surface de l'éditeur, mode OLED | `--color-editor` (`data-oled='true'`) | — | — | — | — | #000 | — | — | — | — | — |
| Fonds | surface posée (bouton ou curseur plein) | E0 `--color-segment-thumb` ; E1 `--surface-thumb` ; E4 `--color-raised` ; E7 `--surface-thumb` | var(--color-surface) / #636366 | #fff / #3a3b43 | — | — | #ffffff / #3a3b43 → #ffffff / #34353d | — | — | #fff / #3a3b43 | — | — |
| Fonds | surface posée, look Papier | `--color-raised` (`data-look='paper'`) | — | — | — | — | #fffdf7 / #2c2925 | — | — | — | — | — |
| Fonds | surface posée, look Minimal | `--color-raised` (`data-look='minimal'`) | — | — | — | — | #ffffff / #363943 | — | — | — | — | — |
| Fonds | bouton de curseur / interrupteur (knob) | `--surface-knob` | — | #fff | — | — | — | — | — | #fff | — | — |
| Fonds | surface atténuée (champs, boutons de barre, barre latérale) | E3 `--card-muted` ; E6 `--surface-soft` ; E8 `--ms-surface-muted` (aussi `--ms-muted-surface`, alias « ne pas utiliser ») | — | — | — | #f8f9fb / #171f2f | — | — | #f0efe9 / #252927 | — | #f1f1ee / #24262b | — |
| Fonds | surface atténuée, thème lilas | E8 `--ms-surface-muted` (`data-theme=lilac`) | — | — | — | — | — | — | — | — | #f1edfa | — |
| Fonds | surface au survol | E6 `--surface-hover` ; E8 `--ms-hover` (`--color-surface-hover`) | — | — | — | — | — | — | #eeece5 / #2d322f | — | #f1f5f9 / #374151 → #f1f1ee / #24262b | — |
| Fonds | teinte de carte | E6 `--card-tint` | — | — | — | — | — | — | #fbfaf6 / #232725 | — | — | — |
| Fonds | surface surélevée (item de dock actif) | E3 `--bg-elevated` | — | — | — | #ffffff / #141b2d | — | — | — | — | — | — |
| Fonds | fond des panneaux de volet | E0 `--color-pane` | #fff / #121214 | — | — | — | — | — | — | — | — | — |
| Fonds | surface pleine des boutons | E2 `--panel-strong` | — | — | #ffffff / #111827 | — | — | — | — | — | — | — |
| Fonds | surface secondaire de page (défini, non lu) | E2 `--surface` | — | — | #eef3ff / #111827 → #eef4ff / #0b1220 | — | — | — | — | — | — | — |
| Fonds | surface renforcée (menu rapide, feuille d'icône) | E5 `--surface-strong` | — | — | — | — | — | #FFF9F5 / #171714 | — | — | — | — |
| Fonds | carte (défini, non utilisé) | E5 `--card` | — | — | — | — | — | #F7F3EE / #1D1C1A | — | — | — | — |
| Fonds | paire inversée (fond = texte, texte = fond de page) | E0 `--color-inverse-bg` / `--color-inverse-text` ; E9 onglet actif et outil enfoncé | var(--color-text) / var(--color-bg) | — | — | — | — | — | — | — | — | var(--ms-text) / var(--ms-bg) (depuis 5469a8ab) |
| Fonds | halo et dégradé de fond de page | E3 `body` ; E5 `body` | — | — | — | radial rgba(246,196,83,0.12) 28 % + linéaire #f8f9fb → var(--bg) → radial rgba(244,197,66,0.14) 26 % ; sombre N3 : radial rgba(244,197,66,0.12) 26 % + linéaire #0d1424 → var(--bg) | — | radial rgba(239,218,178,0.18) 30 % sur --bg | — | — | — | — |
| Fonds | taches d'ambiance `--ambient-1` | `--ambient-1` | — | #ffe9a8 / #3a2f0c | — | — | = | — | — | = | — | — |
| Fonds | taches d'ambiance `--ambient-2` | `--ambient-2` | — | #cfe0ff / #0d1f3d | — | — | = | — | — | = | — | — |
| Fonds | taches d'ambiance `--ambient-3` | `--ambient-3` | — | #f5d6ec / #2a1024 | — | — | = | — | — | = | — | — |
| Fonds | taches d'ambiance, look Papier | `--ambient-1..3` (`data-look='paper'`) | — | var(--color-bg) | — | — | = | — | — | = | — | — |
| Textes | texte principal (défaut, look Verre) | E0 `--color-text` ; E2 `--text` ; E3 `--text` ; E4 `--color-text` ; E5 `--ink` ; E6 `--ink` (`graphite`, `night-graphite`) ; E7 `--color-text` ; E8 `:root color`, `--ms-text`, puis `--ms-fg` ; E9 `--ms-text` | #1c1c1e / #f2f2f7 | #16171b / #f2f3f7 | #0f172a / #e5eefb | #101828 / #edf3ff | #16171b / #f2f3f7 | #1A1A1A / #F3F0EA | #242623 / #f2f0e8 | #16171b / #f2f3f7 | #e5e7eb (sombre seul) → #1a1a1a / #f5f5f7 | = |
| Textes | texte principal, look Papier | `--color-text` (`data-look='paper'`) | — | #1f1b16 / #f3efe6 | — | — | = | — | — | = | — | — |
| Textes | texte principal, look Minimal | `--color-text` (`data-look='minimal'`) | — | — | — | — | #171717 / #f2f3f5 | — | — | — | — | — |
| Textes | texte principal, thème lilas | E8 `--ms-fg` (`data-theme=lilac`) | — | — | — | — | — | — | — | — | #241b35 | — |
| Textes | texte atténué (défaut, look Verre) | E0 `--color-text-muted` ; E2 `--muted` ; E3 `--text-soft` ; E4 `--color-text-muted` ; E5 `--muted` ; E6 `--muted` puis `--text-muted` (`pencil-muted`) ; E7 `--color-text-muted` ; E8 `[role=status]`, `--ms-muted`, puis `--ms-muted-fg` ; E9 `--ms-text-muted` | #636366 / #98989d | #5f6370 / #9a9eab → #484c59 / #a4a8b4 | #475569 / #a5b4cf → #4b5d79 / #a5b4cf | #475467 / #b8c3d9 | #484c59 / #a4a8b4 → #484c59 / #b0b4bf | #5A5A56 / #C9C1B8 | #72766f / #969a91 → #484d46 / #bcc2b8 | #484c59 / #a4a8b4 | #9ca3af (sombre seul) → #6b6b66 / #a0a0a8 | #5c5c5c / #a9abb3 |
| Textes | texte atténué, look Papier | `--color-text-muted` (`data-look='paper'`) | — | #4a4339 / #bdb5a7 | — | — | #4a4339 / #b5ad9f → #4a4339 / #bdb5a7 | — | — | = | — | — |
| Textes | texte atténué, look Minimal | `--color-text-muted` (`data-look='minimal'`) | — | — | — | — | #50545d / #c0c4cc | — | — | — | — | — |
| Textes | texte atténué, thème lilas | E8 `--ms-muted-fg` (`data-theme=lilac`) | — | — | — | — | — | — | — | — | #6b6280 | — |
| Textes | texte discret (faint / subtle) | E1 `--color-text-faint` ; E4 `--color-text-faint` ; E6 `--text-subtle` ; E7 `--color-text-faint` | — | #8b8f9b / #6c707c → #5d616d / #8e929b | — | — | = | — | #62675f / #a4aca1 | #5d616d / #8e929b | — | — |
| Textes | texte discret, look Papier | `--color-text-faint` (`data-look='paper'`) | — | #5f574b / #a39b8d | — | — | #5f574b / #9a9284 → #5f574b / #a39b8d | — | — | = | — | — |
| Textes | texte discret, look Minimal | `--color-text-faint` (`data-look='minimal'`) | — | — | — | — | #626772 / #aab0bb | — | — | — | — | — |
| Textes | texte secondaire (entre texte et atténué) | E6 `--ink-2` (`graphite-2`) ; E8 `--ms-secondary` | — | — | — | — | — | — | #4f534d / #c4c4ba | — | #334155 / #d1d5db → alias de `--ms-muted-fg` | — |
| Textes | texte sur accent (défaut) | E0 `--color-on-accent` ; E1 `--color-on-accent` ; E3 `--accent-ink` ; E4 `--color-on-accent` ; E6 `--accent-on-action` (`amber-on-action`) ; E7 `--color-on-accent` ; E8 `--ms-accent-amber-fg` ; E9 `--ms-on-accent` | #1c1c1e | #1a1608 | — | #20180a | #1a1608 | — | #302507 | #1a1608 | #1a1a1a | = |
| Textes | texte sur accent, look Papier | `--color-on-accent` (`data-look='paper'`) | — | #1f1b16 | — | — | = | — | — | = | — | — |
| Textes | texte sur accent abricot | `--color-on-accent` (`data-accent='apricot'`) | — | #2a1505 | — | — | = | — | — | = | — | — |
| Textes | texte sur accent lilas | E1 `--color-on-accent` (`data-accent='lilac'`) ; E6 `--accent-on-action` (lilas) ; E8 `--ms-accent-lilac-fg` | — | #1d1433 | — | — | = | — | #ffffff | #1d1433 | #241b35 | — |
| Textes | encre d'accent (valeur sombre sur ambre) | E6 `--accent-ink` (`amber-deep-ink`) | — | — | — | — | — | — | #352a0a | — | — | — |
| Textes | encre d'accent, lilas | E6 `--accent-ink` (`data-accent='lilac'`) | — | — | — | — | — | — | #28173d | — | — | — |
| Textes | accent en encre (texte d'accent lisible) | E1 `--color-accent-deep` ; E4 `--color-accent-deep` ; E6 `--accent-text` (`amber-ink-text`, `night-amber-text`) ; E7 `--color-accent-deep` | — | #e0ac1c → #8c6600 / #e0ac1c | — | — | = | — | #ffe27a → #594000 / #ffe27a | #8c6600 / #e0ac1c | — | — |
| Textes | accent en encre, look Papier | `--color-accent-deep` (`data-look='paper'`) | — | — | — | — | #835c00 / #f2b632 → #7d5800 / #f2b632 | — | — | — | — | — |
| Textes | accent en encre, abricot | `--color-accent-deep` (`data-accent='apricot'`) | — | #9a4a0f / #f8a76b | — | — | = | — | — | = | — | — |
| Textes | accent en encre, lilas | E1 `--color-accent-deep` (`data-accent='lilac'`) ; E6 `--accent-text` (lilas) | — | #5b3fc4 / #c3b1f7 | — | — | = | — | #5634a4 / #d8c7ff | #5b3fc4 / #c3b1f7 | — | — |
| Textes | texte sur fond saturé | E1 `--color-on-fill` ; E4 `--color-on-strong` ; E7 `--color-on-fill` | — | #fff → #fff / #0b0c0f | — | — | #fff | — | — | #fff / #0b0c0f | — | — |
| Textes | texte sur dossier | E0 `--color-on-folder` (dossiers 2 et 6 : `--color-on-folder-2`, `--color-on-folder-6` `#1c1c1e`) ; E1 `--color-on-folder` | #fff | #0b0c0f | — | — | — | — | — | = | — | — |
| Textes | texte sur média | `--color-on-media` | — | #fff | — | — | — | — | — | = | — | — |
| Textes | texte atténué sur média | E1 `--color-on-media-soft` (avant : `--color-on-fill-soft`) | — | #fffd | — | — | — | — | — | = | — | — |
| Textes | texte sur danger | E0 `--color-on-danger` ; E6 `--danger-on` ; E8 `--ms-danger-fg` ; E9 `--ms-on-danger` | #fff / #1c1c1e | — | — | — | — | — | #ffffff → #ffffff / #39100c | — | #ffffff / #6b1a16 | #ffffff / #1a1a1a |
| Textes | texte sur sélection | E0 `--color-on-select` | #fff | — | — | — | — | — | — | — | — | — |
| Textes | texte sur voile | E0 `--color-on-scrim` | #fff | — | — | — | — | — | — | — | — | — |
| Textes | texte sur primaire (bleu) | E2 texte du bouton primaire | — | — | white | — | — | — | — | — | — | — |
| Textes | texte sur bouton principal (lilas) | E8 `--ui-primary-foreground` | — | — | — | — | — | — | — | — | #ffffff | — |
| Textes | texte sur succès | E8 `--ms-success-fg` | — | — | — | — | — | — | — | — | #ffffff / #0e0f12 | — |
| Textes | texte secondaire sur ambre | E8 `.ms-app-note-link span` | — | — | — | — | — | — | — | — | #3c3220 | — |
| Textes | texte du CTA d'installation PWA | E8 `.settings-install-cta` | — | — | — | — | — | — | — | — | #fff | — |
| Textes | encre d'impression | E0 `#print-area color` ; E1 `--print-ink` ; E4 `#print-area color` ; E7 `--print-ink` | #000 | #000 | — | — | = | — | — | = | — | — |
| Accents | ambre (accent par défaut) | E0 `--color-accent` ; E1 `--color-accent` (puis `var(--accent-amber)`) ; E3 `--accent` ; E4 `--color-accent` ; E6 `--accent-base` (DESIGN.md `amber-lamp`, puis `amber`) ; E7 `--color-accent` ; E8 `--ms-accent-amber` ; E9 `--ms-accent` | #f4c542 | = | — | #f6c453 → #f4c542 | = | — | #f4c430 | #f4c542 | #f4c430 | = |
| Accents | pastille d'accent ambre (Réglages) | E1 `--accent-amber`, `.accent-dot` ; E4 `--accent-amber` ; E6 `--swatch-amber` ; E7 `--accent-amber` | — | #f4c542 | — | — | = | — | #f4c430 | #f4c542 | — | — |
| Accents | ambre, look Papier | `--color-accent` (`data-look='paper'`) | — | — | — | — | #f2b632 | — | — | — | — | — |
| Accents | ambre au survol | E0 `--color-accent-hover` | #e5b530 | — | — | — | — | — | — | — | — | — |
| Accents | anneau ambre | E0 `--color-accent-ring` | #f4c542b3 / #f4c54280 | — | — | — | — | — | — | — | — | — |
| Accents | ambre pressé (action) | E6 `--accent-action` (DESIGN.md `amber-press`) | — | — | — | — | — | — | #e0a816 | — | — | — |
| Accents | bord propre du « + » | E4 `--color-accent-stroke` | — | — | — | — | #d9a514 | — | — | — | — | — |
| Accents | bord propre du « + », look Papier | E4 `--color-accent-stroke` (`data-look='paper'`) | — | — | — | — | #c9921a | — | — | — | — | — |
| Accents | bord propre du « + », abricot | E4 `--color-accent-stroke` (`data-accent='apricot'`) | — | — | — | — | #d97b33 | — | — | — | — | — |
| Accents | bord propre du « + », lilas | E4 `--color-accent-stroke` (`data-accent='lilac'`) | — | — | — | — | #9479e3 | — | — | — | — | — |
| Accents | bordure de la note active (rail) | E8 `.ms-app-note-link[aria-current="page"]` | — | — | — | — | — | — | — | — | #ca9b18 | — |
| Accents | halo ambre du « + » | `--color-accent-glow` | — | 0 8px 24px #f4c54270 / #f4c54240 | — | — | 0 8px 24px #f4c54270 / #f4c54240 → 0 8px 24px mix(accent; alpha-strong) | — | — | 0 8px 24px #f4c54270 / #f4c54240 | — | — |
| Accents | halo du « + », look Papier | `--color-accent-glow` (`data-look='paper'`) | — | 0 0 transparent | — | — | none → 0 0 transparent | — | — | = | — | — |
| Accents | halo du « + », abricot | `--color-accent-glow` (`data-accent='apricot'`) | — | 0 8px 24px #f59e5b70 / #f59e5b40 | — | — | — | — | — | = | — | — |
| Accents | halo du « + », lilas | `--color-accent-glow` (`data-accent='lilac'`) | — | 0 8px 24px #b9a2f570 / #b9a2f540 | — | — | — | — | — | = | — | — |
| Accents | halo du « + », Papier avec abricot ou lilas | `--color-accent-glow` (`data-look='paper'` + accent) | — | 0 0 transparent | — | — | — | — | — | = | — | — |
| Accents | abricot (accent alternatif) | E1 `--accent-apricot`, `[data-accent='apricot'] --color-accent` ; E4, E7 idem | — | #f59e5b | — | — | = | — | — | = | — | — |
| Accents | lilas (accent alternatif / premium) | E1 `--accent-lilac` ; E6 `--accent-base` lilas (`lilac-lamp`, `--swatch-lilac`) ; E8 `--ms-accent-lilac` ; E9 `--ms-accent-pro` | — | #b9a2f5 | — | — | = | — | #b99ff5 | #b9a2f5 | #b99ff5 / #c7b4f7 | #b99ff5 |
| Accents | lilas pressé (action) | E6 `--accent-action` lilas (`lilac-press`) | — | — | — | — | — | — | #7e52e8 | — | — | — |
| Accents | accent du thème lilas | E8 `--ms-accent`, `--ui-primary` (`data-theme=lilac`) | — | — | — | — | — | — | — | — | #7e52e8 → #6b3dd0 | — |
| Accents | accent d'interface (indigo puis violet) | E8 `--ms-accent` (alias `--ring`) | — | — | — | — | — | — | — | — | #4f46e5 / #818cf8 → #6b3dd0 / #c7b4f7 | — |
| Accents | accent plein (boutons) | E8 `--ms-accent-strong`, `--ui-primary` | — | — | — | — | — | — | — | — | #4338ca / #4f46e5 → #6b3dd0 / #6942ae | — |
| Accents | littéraux indigo et gris de `changelog.css` | E8 `changelog.css` (liste : § 4) | — | — | — | — | — | — | — | — | ✗ 7e3da2f4 | — |
| Accents | accent primaire bleu | E2 `--primary` | — | — | #2563eb / #60a5fa | — | — | — | — | — | — | — |
| Accents | fond de l'élément actif (primary-soft) | E2 `--primary-soft` | — | — | rgba(37,99,235,0.12) / rgba(96,165,250,0.15) → rgba(37,99,235,0.12) / rgba(96,165,250,0.14) | — | — | — | — | — | — | — |
| Accents | dégradé du bouton primaire | E2 `.primary` | — | — | var(--primary) → linear-gradient(135deg, var(--primary), #3790ff) | — | — | — | — | — | — | — |
| Accents | dégradé du monogramme | E2 `.brand-mark` | — | — | linear-gradient(135deg, var(--primary), #38bdf8) | — | — | — | — | — | — | — |
| Accents | ambre doux (défini, jamais lu) | E3 `--accent-soft` | — | — | — | rgba(246,196,83,0.18) → rgba(244,197,66,0.18) | — | — | — | — | — | — |
| Accents | accent ocre (bouton +, anneau de focus) | E5 `--accent` | — | — | — | — | — | #D9A35A / #E3B36C | — | — | — | — |
| États | danger (défaut) | E0 `--color-danger` ; E1 idem ; E3 `--danger` ; E4 idem E0 ; E5 `danger` ; E6 `--danger` (DESIGN.md `danger`) ; E7 idem E0 ; E8 `--ms-danger` ; E9 `--ms-danger` | #d70015 / #ff6961 | = | — | #d92d20 (clair ; non redéfini en sombre) | #d70015 / #ff6961 | #b95555 | #b54b42 → #882f28 / #ffb4aa | #d70015 / #ff6961 | #b3261e / #f2b8b5 | #b3261e / #ff8a80 |
| États | danger, look Papier | `--color-danger` (`data-look='paper'`) | — | #c8322b / #ff7a6e | — | — | = | — | — | = | — | — |
| États | danger destructif (alias shadcn) | E8 `--destructive` (foreground `#fff`) | — | — | — | — | — | — | — | — | #ef4444 | — |
| États | teinte de danger | E1 `--color-danger-tint` ; E3 fond du bouton danger ; E4 idem E1 ; E7 idem E1 | — | #d7001514 / #ff696124 | — | rgba(217,45,32,0.08) | #d7001514 / #ff696124 → mix(danger; alpha-soft) | — | — | #d7001514 / #ff696124 | — | — |
| États | pulsation d'enregistrement | E1 `--recording-ring` ; E4 `@keyframes pulse` ; E7 `--recording-ring` | — | #d7001520 / #ff696126 | — | — | = → var(--color-danger-tint) | — | — | #d7001520 / #ff696126 | — | — |
| États | succès | E0 `--color-success` ; E1 idem ; E3 `--success` ; E4 idem E0 ; E6 `--good` (DESIGN.md `saved-green`) ; E7 idem E0 ; E8 `--ms-success` | #1e7a35 / #40a970 | = | — | #1f8a5d (défini, jamais lu ; non redéfini en sombre) | #1e7a35 / #40a970 | — | #43765b | #1e7a35 / #40a970 | #2e7d32 / #4caf50 | — |
| États | succès, point « enregistré » | E6 `--good-dot` (DESIGN.md `saved-dot`) | — | — | — | — | — | — | #66a87d | — | — | — |
| États | fond de la pastille « Enregistré » | E8 `.ms-note-saved` | — | — | — | — | — | — | — | — | rgb(46 125 50 / 12%) | — |
| États | avertissement (défini, jamais utilisé) | E2 `--warning` | — | — | #f59e0b / #fbbf24 → ✗ 576a8c9d | — | — | — | — | — | — | — |
| États | sélection (bleu) | E0 `--color-select` ; E1 idem ; E3 `--select` ; E4 idem E0 ; E7 idem E0 | #0062cc / #0a84ff | = | — | #1d4ed8 / #8ab4ff | #0062cc / #0a84ff | — | — | = | — | — |
| États | sélection, look Papier | `--color-select` (`data-look='paper'`) | — | #2f5bd3 / #8aa6f2 | — | — | #2f5bd3 / #7d9cf0 → #2f5bd3 / #8aa6f2 | — | — | = | — | — |
| États | teinte de sélection | E0 `--color-select-tint` ; E1 idem ; E3 `--select-soft` (défini, jamais lu) ; E4 idem E1 ; E7 idem E1 | #e5f0ff / #0a2a4d | #0062cc1a / #0a84ff2e | — | rgba(29,78,216,0.12) / rgba(138,180,255,0.12) | #0062cc1a / #0a84ff2e → mix(select; alpha-soft) / mix(select; alpha-medium) | — | — | #0062cc1a / #0a84ff2e | — | — |
| États | teinte de sélection, look Papier | E4 `--color-select-tint` (`data-look='paper'`) | — | — | — | — | #2f5bd31a / #7d9cf02e → ✗ ad232dfb | — | — | — | — | — |
| États | fond de l'onglet / option active (highlight) | E5 `--highlight` | — | — | — | — | — | #EFDAB2 / #3A2D1B | — | — | — | — |
| États | anneau de focus | E1 `--color-focus` ; E2 `#editor:focus` ; E3 `--select` ; E4 `--color-focus` ; E5 `--accent` ; E6 `--focus-ring` ; E7 `--color-focus` ; E8 `--ms-focus-ring` ; E9 `--ms-focus` | — | #16171b / #f2f3f7 | border-color rgba(59,130,246,0.45) + anneau rgba(59,130,246,0.12) | var(--select) = #1d4ed8 / #8ab4ff | #16171b / #f2f3f7 → var(--color-text) | var(--accent) = #D9A35A / #E3B36C | var(--accent-text) | #16171b / #f2f3f7 | #7e52e8 / #b99ff5 | #7e52e8 → #7e52e8 / #b99ff5 |
| États | anneau de focus, look Papier | E1 `--color-focus` (`data-look='paper'`) | — | var(--color-text) | — | — | — | — | — | = | — | — |
| États | anneau de focus, thème lilas | E8 `--ms-focus-ring` (`data-theme=lilac`) | — | — | — | — | — | — | — | — | #7e52e8 | — |
| États | surlignage de recherche (mark) | E0 `--color-highlight` ; E1 idem ; E4 idem ; E7 idem ; E9 `mark` | #fbe7a1 / #5a4610 | = | — | — | = | — | — | = | — | aucune couleur propre : gras + souligné, couleurs du contexte |
| États | surlignage de recherche, look Papier | `--color-highlight` (`data-look='paper'`) | — | #f6e2a2 / #4d3d12 | — | — | = | — | — | = | — | — |
| États | types de changement (kind) | E1 `[data-kind]` (`--kind`) | — | new = var(--color-accent) ; better = var(--color-success) ; fix = var(--color-danger) | — | — | — | — | — | — | — | — |
| Bordures | bordure et trait fin | E0 `--color-border` ; E1 `--color-line` ; E2 `--surface-border` ; E3 `--line` ; E4 `--color-line` ; E5 `--border` ; E6 `--line` (DESIGN.md `hairline`, `night-hairline`) ; E7 `--color-line` ; E8 `--ms-border` puis `--ms-app-border` ; E9 `--ms-border` | #e2e2e7 / #2c2c2e | #16171b14 / #ffffff14 → mix(text; alpha-soft) | rgba(15,23,42,0.08) / rgba(148,163,184,0.12) | rgba(16,24,40,0.1) / rgba(196,206,228,0.18) | #16171b14 / #ffffff14 → mix(text; alpha-soft) | rgba(26,26,26,0.12) / rgba(243,240,234,0.14) | #e8e6de / #343a35 | mix(text; alpha-soft) | #4b5563 (sombre seul) → #deded8 / #3a3d44 | #e5e5e5 / #333333 |
| Bordures | bordure, thème lilas | E8 `--ms-app-border` (`data-theme=lilac`) | — | — | — | — | — | — | — | — | #ddd4ef | — |
| Bordures | bordure marquée | E1 `--color-line-strong` ; E3 `--line-strong` (défini, jamais lu) ; E4 idem E1 ; E6 `--line-strong` (DESIGN.md `hairline-strong`) ; E7 idem E1 | — | #16171b2e / #ffffff2e → mix(text; alpha-strong) | — | rgba(16,24,40,0.18) / rgba(196,206,228,0.24) | #16171b2e / #ffffff2e → mix(text; alpha-medium) | — | #d9d7ce / #454b45 | mix(text; alpha-strong) | — | — |
| Bordures | bordure de champ ou de contrôle | E0 `--color-border-input` ; E6 `--border-control` (DESIGN.md `control-border`) ; E8 `--input` | #8a8a8e / #6e6e73 | — | — | — | — | — | #81877d / #858e83 | — | alias de `--ms-border` | — |
| Bordures | trait fin, look Papier | E4 `--color-line` (`data-look='paper'`) | — | — | — | — | #1f1b161a / #f3efe61a → ✗ ad232dfb | — | — | — | — | — |
| Bordures | trait marqué, look Papier | E4 `--color-line-strong` (`data-look='paper'`) | — | — | — | — | #1f1b1633 / #f3efe633 → ✗ ad232dfb | — | — | — | — | — |
| Bordures | séparateur | E7 `--color-separator` | — | — | — | — | — | — | — | var(--color-line) | — | — |
| Bordures | bordure de carte sélectionnée | E5 `.card.selected` | — | — | — | — | — | rgba(217,163,90,0.5) | — | — | — | — |
| Bordures | bordure de l'élément actif | E2 `.ambient-item.active`, `.note-item.active` | — | — | rgba(96,165,250,0.46) → rgba(96,165,250,0.52) | — | — | — | — | — | — | — |
| Verre et voiles | verre (fond translucide de base) | E0 `--color-glass` ; E1 `--glass` ; E2 `--panel` ; E3 `--panel` ; E4 `--glass` (valeur effective du look glass) ; E5 fond de la barre d'onglets ; E7 `--glass` ; E9 `--ms-glass-bg` | #ffffffb8 / #1c1c1eb8 | #ffffff8c / #26272e80 | rgba(255,255,255,0.7) / rgba(15,23,42,0.78) → rgba(255,255,255,0.72) / rgba(15,23,42,0.76) | rgba(255,255,255,0.72) / rgba(18,26,42,0.8) → rgba(255,255,255,0.7) / rgba(18,26,42,0.8) | #ffffff8c / #26272e80 → rgb(255 255 255 / 62%) / rgb(38 39 46 / 62%) | rgba(255,255,255,0.46) / rgba(25,25,25,0.64) | — | #ffffff8c / #26272e80 | — | rgb(255 255 255 / 0.72) / rgb(32 33 39 / 0.72) → ✗ 5469a8ab |
| Verre et voiles | verre fort | E0 `--color-glass-strong` ; E1 `--glass-strong` | #ffffffdb / #1c1c1ee0 | #ffffffc4 / #1e1f25c9 | — | — | = | — | — | = | — | — |
| Verre et voiles | liseré du verre | E1 `--glass-edge` ; E9 `--ms-glass-border` | — | #ffffffb3 / #ffffff26 | — | — | = | — | — | = | — | rgb(0 0 0 / 0.1) / rgb(255 255 255 / 0.12) → ✗ 5469a8ab |
| Verre et voiles | verre de navigation (dock) | E1 `--glass-dock` ; E4 `--glass-nav` ; E7 `--glass-dock` | — | #ffffffd6 / #25262cd9 | — | — | = → mix(card; calc(100% - alpha-medium)) | — | — | #ffffffd6 / #25262cd9 | — | — |
| Verre et voiles | verre de feuille (quasi plein) | E1 `--glass-sheet` ; E4 `--glass-solid` ; E7 `--glass-sheet` | — | #f7f8fbeb / #17181df2 → #f7f8fbf2 / #17181df2 | — | — | = → mix(editor; calc(100% - alpha-faint)) | — | — | #f7f8fbf2 / #17181df2 | — | — |
| Verre et voiles | verre pressé | E1 `--glass-press` | — | #ffffffa6 / #ffffff1f → ✗ d6af8790 | — | — | — | — | — | — | — | — |
| Verre et voiles | verre en transparence réduite | `--glass` (`prefers-reduced-transparency: reduce`) | — | var(--glass-strong) | — | — | = | — | — | = | — | — |
| Verre et voiles | verre, look Acrylique | `--glass` (`data-look='acrylic'`) | — | #f6f7f9b8 / #2a2b30b8 | — | — | — | — | — | = | — | — |
| Verre et voiles | verre de navigation, look Acrylique | `--glass-dock` (`data-look='acrylic'`) | — | #f4f5f8eb / #2a2b30eb | — | — | — | — | — | = | — | — |
| Verre et voiles | liseré, look Acrylique | `--glass-edge` (`data-look='acrylic'`) | — | #0000001a / #ffffff1f | — | — | — | — | — | = | — | — |
| Verre et voiles | verre de feuille, look Acrylique | `--glass-sheet` (`data-look='acrylic'`) | — | #f8f9fbf5 / #1d1e22f5 | — | — | — | — | — | = | — | — |
| Verre et voiles | verre fort, look Acrylique | `--glass-strong` (`data-look='acrylic'`) | — | #f8f9fbe0 / #26272cdc | — | — | — | — | — | = | — | — |
| Verre et voiles | verre, look Papier | `--glass` (`data-look='paper'`) | — | var(--color-card) | — | — | = | — | — | = | — | — |
| Verre et voiles | liseré, look Papier | `--glass-edge` (`data-look='paper'`) | — | var(--color-line) | — | — | var(--color-line-strong) → var(--color-line) | — | — | = | — | — |
| Verre et voiles | verre fort, look Papier | `--glass-strong` (`data-look='paper'`) | — | var(--color-card) | — | — | = | — | — | = | — | — |
| Verre et voiles | verre de navigation, look Papier | `--glass-nav` (`data-look='paper'`) | — | — | — | — | var(--color-card) | — | — | — | — | — |
| Verre et voiles | verre quasi plein, look Papier | `--glass-solid` (`data-look='paper'`) | — | — | — | — | var(--color-card) | — | — | — | — | — |
| Verre et voiles | verre, look Minimal | `--glass` (`data-look='minimal'`) | — | — | — | — | var(--color-card) | — | — | — | — | — |
| Verre et voiles | liseré, look Minimal | `--glass-edge` (`data-look='minimal'`) | — | — | — | — | var(--color-line) | — | — | — | — | — |
| Verre et voiles | verre de navigation, look Minimal | `--glass-nav` (`data-look='minimal'`) | — | — | — | — | var(--color-card) | — | — | — | — | — |
| Verre et voiles | verre quasi plein, look Minimal | `--glass-solid` (`data-look='minimal'`) | — | — | — | — | var(--color-card) | — | — | — | — | — |
| Verre et voiles | verre fort, look Minimal | `--glass-strong` (`data-look='minimal'`) | — | — | — | — | var(--color-card) | — | — | — | — | — |
| Verre et voiles | ombre du verre | E9 `--ms-glass-shadow` | — | — | — | — | — | — | — | — | — | 0 8px 30px rgb(0 0 0 / 0.12) / 0 8px 30px rgb(0 0 0 / 0.5) → ✗ 5469a8ab |
| Verre et voiles | voile derrière feuilles et menus (scrim) | E0 `--color-scrim` ; E1 `--color-scrim` ; E4 `--color-scrim` (valeur effective du look glass) ; E7 `--color-scrim` | #0000008c | #10121a2e / #0000006b | — | — | #10121a2e / #0000006b → mix(#0b0c0f; alpha-strong) | — | — | #10121a2e / #0000006b | — | — |
| Verre et voiles | voile, look Papier | `--color-scrim` (`data-look='paper'`) | — | #1f1b1633 / #000000a6 | — | — | #1f1b1638 / #00000080 → mix(#1f1b16; alpha-medium) / mix(#000; alpha-strong) | — | — | #1f1b1633 / #000000a6 | — | — |
| Verre et voiles | voile givré | E1 `--scrim-frost` ; E4 `.scrim` ; E7 `--scrim-frost` | — | var(--color-scrim) → #eef0f633 / #08090c4d | — | — | = → mix(bg; alpha-medium) | — | — | #eef0f633 / #08090c4d | — | — |
| Verre et voiles | voile de l'éditeur | E6 `--scrim-editor` | — | — | — | — | — | — | rgb(17 20 18 / 44%) / rgb(0 0 0 / 60%) | — | — | — |
| Verre et voiles | voile d'onboarding | E6 `--scrim-onboarding` | — | — | — | — | — | — | rgb(20 22 20 / 57%) / rgb(0 0 0 / 72%) | — | — | — |
| Verre et voiles | voile de la modale Réglages | E8 `.settings-drawer-overlay` (`bg-black/75` avant b44de130) | — | — | — | — | — | — | — | — | rgb(0 0 0 / .75) | — |
| Verre et voiles | voile de confirmation | E8 `.ms-confirm-backdrop` | — | — | — | — | — | — | — | — | rgb(0 0 0 / 55%) | — |
| Verre et voiles | dégradé sous le texte posé sur photo | E1 `--media-shade` ; E4 `--veil-photo` ; E7 `--media-shade` | — | linear-gradient(180deg, transparent 20%, #000a) → linear-gradient(180deg, #0005, #000b) | — | — | = → linear-gradient(180deg, rgb(0 0 0 / var(--alpha-medium)), rgb(0 0 0 / calc(100% - var(--alpha-medium)))) | — | — | linear-gradient(180deg, #0005, #000b) | — | — |
| Verre et voiles | voile du bouton posé sur photo | E1 `--media-veil` ; E4 `--color-shade` ; E7 `--media-veil` | — | #0007 | — | — | = → rgb(0 0 0 / var(--alpha-strong)) | — | — | #0007 | — | — |
| Verre et voiles | remplissage léger | E0 `--color-fill` ; E1 `--color-fill` ; E4 `--color-fill` ; E7 `--color-fill` | #e9e9ee / #2c2c2e | #16171b0d / #ffffff12 → mix(text; alpha-faint) / mix(text; alpha-soft) | — | — | #16171b0d / #ffffff12 → mix(text; alpha-faint) | — | — | mix(text; alpha-faint) / mix(text; alpha-soft) | — | — |
| Verre et voiles | remplissage appuyé | `--color-fill-strong` | — | #16171b17 / #ffffff1f → mix(text; alpha-soft) / mix(text; alpha-medium) | — | — | = → mix(text; alpha-soft) | — | — | mix(text; alpha-soft) / mix(text; alpha-medium) | — | — |
| Verre et voiles | remplissage léger, look Papier | E4 `--color-fill` (`data-look='paper'`) | — | — | — | — | #1f1b160d / #f3efe612 → ✗ ad232dfb | — | — | — | — | — |
| Verre et voiles | remplissage appuyé, look Papier | E4 `--color-fill-strong` (`data-look='paper'`) | — | — | — | — | #1f1b1617 / #f3efe61f → ✗ ad232dfb | — | — | — | — | — |
| Contraste renforcé | trait fin renforcé | `--color-line` (`prefers-contrast: more`) | — | #16171b4d / #ffffff4d | — | — | = → mix(text; alpha-strong) | — | — | #16171b4d / #ffffff4d | — | — |
| Contraste renforcé | trait marqué renforcé | `--color-line-strong` (`prefers-contrast: more`) | — | #16171b80 / #ffffff80 | — | — | = → mix(text; calc(alpha-strong + alpha-medium)) | — | — | #16171b80 / #ffffff80 | — | — |
| Contraste renforcé | texte atténué renforcé | `--color-text-muted` (`prefers-contrast: more`) | — | #2f323c / #d0d3dc | — | — | = | — | — | = | — | — |
| Contraste renforcé | texte atténué renforcé, look Papier | `--color-text-muted` (`prefers-contrast: more`, `data-look='paper'`) | — | #2e2820 / #d8d1c4 | — | — | = | — | — | = | — | — |
| Contraste renforcé | texte discret renforcé | `--color-text-faint` (`prefers-contrast: more`) | — | #3e414c / #b9bcc6 | — | — | = | — | — | = | — | — |
| Contraste renforcé | texte discret renforcé, look Papier | `--color-text-faint` (`prefers-contrast: more`, `data-look='paper'`) | — | #3d362c / #c4bcae | — | — | = | — | — | = | — | — |
| Contraste renforcé | accent en encre renforcé | `--color-accent-deep` (`prefers-contrast: more`) | — | #5f4500 / #e0ac1c | — | — | — | — | — | = | — | — |
| Contraste renforcé | accent en encre renforcé, abricot | `--color-accent-deep` (`prefers-contrast: more`, abricot) | — | #7a3a08 / #f8a76b | — | — | — | — | — | = | — | — |
| Contraste renforcé | accent en encre renforcé, lilas | `--color-accent-deep` (`prefers-contrast: more`, lilas) | — | #4a30a8 / #c3b1f7 | — | — | — | — | — | = | — | — |
| Contraste renforcé | verre en contraste renforcé | `--glass` (`prefers-contrast: more`) | — | var(--glass-strong) | — | — | = | — | — | = | — | — |
| Contraste renforcé | trait fin en contraste élevé réglé | E4 `--color-line` (`data-high-contrast='true'`) | — | — | — | — | var(--color-line-strong) | — | — | — | — | — |
| Contraste renforcé | texte atténué et discret en contraste élevé réglé | E4 `--color-text-muted`, `--color-text-faint` (`data-high-contrast='true'`) | — | — | — | — | var(--color-text) | — | — | — | — | — |
| Catégories | dossier 1, point | E0 `--color-folder-1` ; E1, E4, E7 `--folder-1` | #4f86e8 | = | — | — | = | — | — | = | — | — |
| Catégories | dossier 1, texte lisible | E0 `--color-folder-1-text` ; E1, E4, E7 `--folder-1-text` | #1d64e1 / #6696eb | = | — | — | = | — | — | = | — | — |
| Catégories | dossier 1, teinte de carte | E0 `--color-folder-1-tint` ; E1, E4, E7 `--folder-1-tint` | #eaf1fd / #17243a | #eaf1fdd9 / #17243ad9 | — | — | = | — | — | = | — | — |
| Catégories | dossier 2, point | E0 `--color-folder-2` ; E1, E4, E7 `--folder-2` | #e9824f | = | — | — | = | — | — | = | — | — |
| Catégories | dossier 2, texte lisible | E0 `--color-folder-2-text` ; E1, E4, E7 `--folder-2-text` | #b64c17 / #e9824f | = | — | — | = | — | — | = | — | — |
| Catégories | dossier 2, teinte de carte | E0 `--color-folder-2-tint` ; E1, E4, E7 `--folder-2-tint` | #fdeee6 / #33211a | #fdeee6d9 / #33211ad9 | — | — | = | — | — | = | — | — |
| Catégories | dossier 3, point | E0 `--color-folder-3` ; E1, E4, E7 `--folder-3` | #3fa56e | = | — | — | = | — | — | = | — | — |
| Catégories | dossier 3, texte lisible | E0 `--color-folder-3-text` ; E1, E4, E7 `--folder-3-text` | #2e7950 / #40a970 | = | — | — | = | — | — | = | — | — |
| Catégories | dossier 3, teinte de carte | E0 `--color-folder-3-tint` ; E1, E4, E7 `--folder-3-tint` | #e6f4ec / #14291d | #e6f4ecd9 / #14291dd9 | — | — | = | — | — | = | — | — |
| Catégories | dossier 4, point | E0 `--color-folder-4` ; E1, E4, E7 `--folder-4` | #9171db | = | — | — | = | — | — | = | — | — |
| Catégories | dossier 4, texte lisible | E0 `--color-folder-4-text` ; E1, E4, E7 `--folder-4-text` | #7850d3 / #a185e0 | = | — | — | = | — | — | = | — | — |
| Catégories | dossier 4, teinte de carte | E0 `--color-folder-4-tint` ; E1, E4, E7 `--folder-4-tint` | #f1ecfb / #241d38 | #f1ecfbd9 / #241d38d9 | — | — | = | — | — | = | — | — |
| Catégories | dossier 5, point | E0 `--color-folder-5` ; E1, E4, E7 `--folder-5` | #db5f96 | = | — | — | = | — | — | = | — | — |
| Catégories | dossier 5, texte lisible | E0 `--color-folder-5-text` ; E1, E4, E7 `--folder-5-text` | #c62d71 / #df70a1 | = | — | — | = | — | — | = | — | — |
| Catégories | dossier 5, teinte de carte | E0 `--color-folder-5-tint` ; E1, E4, E7 `--folder-5-tint` | #fbeaf2 / #331a26 | #fbeaf2d9 / #331a26d9 | — | — | = | — | — | = | — | — |
| Catégories | dossier 6, point | E0 `--color-folder-6` ; E1, E4, E7 `--folder-6` | #2fa4ad | = | — | — | = | — | — | = | — | — |
| Catégories | dossier 6, texte lisible | E0 `--color-folder-6-text` ; E1, E4, E7 `--folder-6-text` | #22767d / #2fa4ad | = | — | — | = | — | — | = | — | — |
| Catégories | dossier 6, teinte de carte | E0 `--color-folder-6-tint` ; E1, E4, E7 `--folder-6-tint` | #e2f4f5 / #112b2d | #e2f4f5d9 / #112b2dd9 | — | — | = | — | — | = | — | — |
| Catégories | dossier 7, point | E0 `--color-folder-7` ; E1, E4, E7 `--folder-7` | #a2845e | = | — | — | = | — | — | = | — | — |
| Catégories | dossier 7, texte lisible | E0 `--color-folder-7-text` ; E1, E4, E7 `--folder-7-text` | #7f6749 / #ab906e | = | — | — | = | — | — | = | — | — |
| Catégories | dossier 7, teinte de carte | E0 `--color-folder-7-tint` ; E1, E4, E7 `--folder-7-tint` | #f3eee7 / #2b241b | #f3eee7d9 / #2b241bd9 | — | — | = | — | — | = | — | — |
| Catégories | dossier 8, point | E0 `--color-folder-8` ; E1, E4, E7 `--folder-8` | #7c7c84 | = | — | — | = | — | — | = | — | — |
| Catégories | dossier 8, texte lisible | E0 `--color-folder-8-text` ; E1, E4, E7 `--folder-8-text` | #636369 / #94949a | = | — | — | = | — | — | = | — | — |
| Catégories | dossier 8, teinte de carte | E0 `--color-folder-8-tint` ; E1, E4, E7 `--folder-8-tint` | #eeeef0 / #232326 | #eeeef0d9 / #232326d9 | — | — | = | — | — | = | — | — |
| Catégories | ton système blue | `--tone-blue` | — | #007aff / #0a84ff | — | — | = → ✗ 82aa90c2 | — | — | #007aff / #0a84ff | — | — |
| Catégories | ton système gray | `--tone-gray` | — | #8e8e93 / #98989d | — | — | = → ✗ 82aa90c2 | — | — | #8e8e93 / #98989d | — | — |
| Catégories | ton système green | `--tone-green` | — | #34c759 / #30d158 | — | — | = → ✗ 82aa90c2 | — | — | #34c759 / #30d158 | — | — |
| Catégories | ton système indigo | `--tone-indigo` | — | #5856d6 / #5e5ce6 | — | — | = → ✗ 82aa90c2 | — | — | #5856d6 / #5e5ce6 | — | — |
| Catégories | ton système orange | `--tone-orange` | — | #ff9500 / #ff9f0a | — | — | = → ✗ 82aa90c2 | — | — | #ff9500 / #ff9f0a | — | — |
| Catégories | ton système pink | `--tone-pink` | — | #ff2d55 / #ff375f | — | — | = → ✗ 82aa90c2 | — | — | #ff2d55 / #ff375f | — | — |
| Catégories | ton système purple | `--tone-purple` | — | #af52de / #bf5af2 | — | — | = → ✗ 82aa90c2 | — | — | #af52de / #bf5af2 | — | — |
| Catégories | ton système red | `--tone-red` | — | #ff3b30 / #ff453a | — | — | = → ✗ 82aa90c2 | — | — | #ff3b30 / #ff453a | — | — |
| Catégories | ton système teal | `--tone-teal` | — | #30b0c7 / #40c8e0 | — | — | = → ✗ 82aa90c2 | — | — | #30b0c7 / #40c8e0 | — | — |
| Catégories | encre de ton | `--tone-ink` | — | light-dark(color-mix(in oklab, var(--tone) 74%, #000), color-mix(in oklab, var(--tone) 85%, #fff)) | — | — | = → ✗ 6840b25e | — | — | light-dark(color-mix(in oklab, var(--tone) 74%, #000), color-mix(in oklab, var(--tone) 85%, #fff)) | — | — |
| Catégories | ton jaune (accent comme ton) | E1 `[data-tone='yellow'] --tone` | — | var(--color-accent-deep) → var(--color-accent) | — | — | — | — | — | — | — | — |
| Catégories | progression terminée | E0 `--color-progress-done` | var(--color-folder-3) | — | — | — | — | — | — | — | — | — |
| Catégories | halo de la pastille de dossier | E3 `.folder-dot` | — | — | — | rgba(244,197,66,0.2) | — | — | — | — | — | — |
| Catégories | couleur de note ambre | E5 `NoteColor` amber (`.card-amber`) | — | — | — | — | — | dégradé rgba(239,218,178,0.22) vers 0.08 | — | — | — | — |
| Catégories | couleur de note sauge | E5 `NoteColor` sage (`.card-sage`) | — | — | — | — | — | dégradé rgba(128,170,138,0.16) vers 0.05 | — | — | — | — |
| Catégories | couleur de note ardoise | E5 `NoteColor` slate (`.card-slate`) | — | — | — | — | — | dégradé rgba(94,112,136,0.12) vers 0.04 | — | — | — | — |
| Catégories | couleur de note rose | E5 `NoteColor` rose (`.card-rose`) | — | — | — | — | — | dégradé rgba(196,152,138,0.12) vers 0.04 | — | — | — | — |
| Catégories | croquis, encre | E4 `--sketch-ink` ; E7 `Sketch.tsx` « Encre » | — | — | — | — | #1c1c1e | — | — | #1C1C1E | — | — |
| Catégories | croquis, papier | E4 `--sketch-paper` | — | — | — | — | #ffffff | — | — | — | — | — |
| Catégories | croquis, rouge | E4 `--sketch-red` ; E7 `Sketch.tsx` « Rouge » | — | — | — | — | #dc2626 | — | — | #DC2626 | — | — |
| Catégories | croquis, bleu | E7 `Sketch.tsx` « Bleu » | — | — | — | — | — | — | — | #2563EB | — | — |
| Catégories | croquis, vert | E7 `Sketch.tsx` « Vert » | — | — | — | — | — | — | — | #16A34A | — | — |
| Catégories | croquis, jaune | E7 `Sketch.tsx` « Jaune » | — | — | — | — | — | — | — | #EAB308 | — | — |
| Catégories | croquis, violet | E7 `Sketch.tsx` « Violet » | — | — | — | — | — | — | — | #9333EA | — | — |
| Catégories | code QR, modules sombres | E7 QR code | — | — | — | — | — | — | — | #1C1C1E | — | — |
| Catégories | code QR, fond clair | E7 QR code | — | — | — | — | — | — | — | #FFFFFF | — | — |
| Catégories | catégorie de version Nouveauté | E8 `--ms-feature` | — | — | — | — | — | — | — | — | #047857 / #34d399 | — |
| Catégories | catégorie de version Correctif | E8 `--ms-fix` | — | — | — | — | — | — | — | — | #92400e / #fbbf24 | — |
| Catégories | catégorie de version Amélioration | E8 `--ms-improvement` | — | — | — | — | — | — | — | — | #4338ca / #a5b4fc | — |
| Catégories | étiquette Nouveauté (fond / texte) | E8 `--tag-feature` / `--tag-feature-foreground` | — | — | — | — | — | — | — | — | fond #d1fae5, texte #064e3b / fond #064e3b, texte #d1fae5 | — |
| Catégories | étiquette Amélioration (fond / texte) | E8 `--tag-improvement` / `-foreground` | — | — | — | — | — | — | — | — | fond #e0e7ff, texte #312e81 / fond #312e81, texte #e0e7ff | — |
| Catégories | étiquette Correctif (fond / texte) | E8 `--tag-fix` / `-foreground` | — | — | — | — | — | — | — | — | fond #fef3c7, texte #78350f / fond #78350f, texte #fef3c7 | — |
| Catégories | étiquettes de version, classes Tailwind | E8 `emerald`, `indigo`, `amber` 900 et 200 (SettingsHub, ChangelogTimeline) | — | — | — | — | — | — | — | — | emerald/indigo/amber 900 et 200 → ✗ 931f56a2 | — |
| Composants | fond de tuile teintée | E1 `.tile` | — | var(--glass) → color-mix(in srgb, var(--tone) 12%, var(--color-card)) | — | — | — | — | — | — | — | — |
| Composants | fond de widget | E1 `.widget` | — | linear-gradient(150deg, color-mix(in srgb, var(--tone) 18%, transparent), transparent 75%), var(--color-card) → color-mix(in srgb, var(--tone) 10%, var(--color-card)) | — | — | — | — | — | — | — | — |
| Composants | fond de dossier de bibliothèque | E1 `.lib-folder` | — | linear-gradient(170deg, color-mix(… folder-dot 26%, card-solid), card-solid 80%) → linear-gradient(170deg, color-mix(… folder-dot 20%, card-solid), card-solid 85%) | — | — | — | — | — | — | — | — |
| Composants | pastille de dossier de bibliothèque (::before) | E1 `.lib-folder::before` | — | color-mix(in srgb, var(--folder-dot, var(--tone-gray)) 40%, var(--color-card-solid)) → … 32% … | — | — | — | — | — | — | — | — |
| Composants | fond du chip actif | E1 `.chip[data-tone][aria-pressed='true']` | — | var(--tone) → color-mix(in srgb, var(--tone) 16%, var(--color-card-solid)) | — | — | — | — | — | — | — | — |
| Composants | texte du chip actif | E1 `.chip[data-tone][aria-pressed='true']` color | — | #fff → var(--on-tone, #fff) → var(--tone-ink) | — | — | — | — | — | — | — | — |
| Composants | fond de la pastille de changement | E1 `.change-pill` | — | var(--color-fill) → color-mix(in srgb, var(--kind) 16%, transparent) | — | — | — | — | — | — | — | — |
| Composants | fond de tuile de bibliothèque pressée | E1 `.lib-tile[aria-pressed='true']` | — | color-mix(in srgb, var(--tone) 12%, var(--color-card)) | — | — | — | — | — | — | — | — |
| Composants | ligne de Réglages courante | E1 `.settings-row[aria-current='true']` | — | color-mix(in srgb, var(--tone) 14%, var(--color-card)) | — | — | — | — | — | — | — | — |
| Composants | tuile de Réglages | E1 `.settings-tile` | — | color-mix(in srgb, var(--tone) 16%, transparent) | — | — | — | — | — | — | — | — |
| Composants | lignes de diff (ajout / suppression) | E1 `.diff-line.is-add` / `.is-del` | — | color-mix(in srgb, var(--tone-green) 18%, transparent) / color-mix(in srgb, var(--tone-red) 16%, transparent) | — | — | — | — | — | — | — | — |
| Composants | en-tête de tableau | E1 `#note-view .tbl th` | — | color-mix(in srgb, var(--color-text) var(--alpha-faint), var(--color-editor)) | — | — | — | — | — | — | — | — |
| Composants | cellule de tableau sélectionnée | E1 `.tbl th/td[data-sel]` ; E8 `.tiptap .selectedCell::after` | — | color-mix(in srgb, var(--color-accent) 14%, transparent) → color-mix(in srgb, var(--color-select) 10%, var(--color-editor)) | — | — | — | — | — | — | rgb(244 196 48 / 20%) | — |
| Composants | action de toast | E0 `--color-toast-action` | #f4c542 / #0040dd | — | — | — | — | — | — | — | — | — |
| Composants | bordure d'en-tête d'application et de carte colorée | E0 `.app-header border-bottom`, `[data-tint=on] .card[data-color] border-color` | 1px solid #0000 ; #0000 | — | — | — | — | — | — | — | — | — |
| Composants | fond du champ de l'éditeur (textarea) | E2 `#editor` | — | — | rgba(148,163,184,0.02) → linear-gradient(180deg, rgba(255,255,255,0.3), rgba(148,163,184,0.03)) / linear-gradient(180deg, rgba(15,23,42,0.7), rgba(15,23,42,0.32)) | — | — | — | — | — | — | — |
| Composants | fond du toast | E2 `.toast` (texte white) | — | — | rgba(15,23,42,0.9) → rgba(15,23,42,0.94) | — | — | — | — | — | — | — |
| Composants | fonds discrets superposés | E2 `.snapshot-item`, `.topbar`, `kbd`, `.ambient-item` | — | — | rgba(148,163,184,0.02 à 0.12) (snapshot 0.03 → 0.04 ; topbar 0.03 → 0.02 ; kbd 0.1 → 0.12 ; ambient 0.02 → 0.025) | — | — | — | — | — | — | — |
| Composants | fenêtre flottante (document.write) | E2 fenêtre flottante | — | — | fond #111827, texte #e5eefb → #e2e8f0 ; textarea fond #0f172a → texte #fff → #f8fafc | — | — | — | — | — | — | — |
| Composants | fond du dock (dock-shell) | E3 `.dock-shell` | — | — | — | rgba(255,255,255,0.55) → rgba(255,255,255,0.62) | — | — | — | — | — | — |
| Composants | fond du bouton ghost | E3 `.ghost` | — | — | — | var(--card-muted) → rgba(255,255,255,0.46) | — | — | — | — | — | — |
| Composants | fond des panneaux de liste et d'édition | E3 `.list-panel`, `.editor-panel` | — | — | — | rgba(255,255,255,0.45) → var(--panel) | — | — | — | — | — | — |
| Composants | ombre de l'onglet actif | E5 onglet actif | — | — | — | — | — | 0 8px 18px rgba(217,163,90,0.12) | — | — | — | — |
| Composants | ombre de la carte sélectionnée | E5 carte sélectionnée | — | — | — | — | — | 0 12px 30px rgba(217,163,90,0.12) | — | — | — | — |
| Composants | fond de l'item de menu au survol | E5 menu rapide | — | — | — | — | — | rgba(239,218,178,0.2) | — | — | — | — |
| Composants | fonds translucides blancs (puces, boutons, champ de recherche) | E5 | — | — | — | — | — | rgba(255,255,255,0.1 à 0.18) | — | — | — | — |
| Composants | ombre de la barre basse | E8 `.ms-bottom-nav` | — | — | — | — | — | — | — | — | 0 -7px 22px rgb(0 0 0 / 5%) | — |
| Composants | classes Tailwind du hub Paramètres | E8 `gray-400`, `gray-500/600/700/800`, `red-300` (erreur) | — | — | — | — | — | — | — | — | gray-400, gray-500, gray-600, gray-700, gray-800, red-300 → ✗ 7d72e331 (SettingsHub) | — |
| Enveloppe | balise theme-color | E0 `index.html` ; E1 `index.html` ; E2 `index.html` et `src/main.js` ; E3 `meta` ; E4 `__root.tsx` puis `index.html` ; E5 `meta` ; E7 `index.html` ; E8 `index.html` ; E9 `index.html` | #F2F2F7 / #000000 | #EEF0F6 / #08090C → réécrit à l'exécution depuis --color-bg | #111827 (index.html) ; #0f172a (HTML de src/main.js) | #0d1117 → #f4c542 | #EEF0F6 / #08090C → #F4F5F8 / #0B0C0F | #F7F3EE | ? | #EEF0F6 / #08090C | #111827 | #faf9f6 / #121316 |
| Enveloppe | manifest background_color | `manifest.webmanifest` | #F2F2F7 | #EEF0F6 | #0b1020 | #f3f4f6 | #EEF0F6 | #F7F3EE | ? | #EEF0F6 | #111827 | #faf9f6 |
| Enveloppe | manifest theme_color | `manifest.webmanifest` | #F2F2F7 | #EEF0F6 → ✗ cfa03208 | #0b1020 | #f4c542 | #EEF0F6 | #F7F3EE | ? | — | #111827 | #faf9f6 |
| Enveloppe | fond avant première peinture | E1 `html{background}` ; E4 `html {}` ; E7 `index.html` | ? | #eef0f6 / #08090c | — | — | #eef0f6 / #08090c → #f4f5f8 / #0b0c0f | — | — | #eef0f6 / #08090c | — | — |
| Enveloppe | fond avant première peinture, look Papier | E4 `html[data-look="paper"]` | — | — | — | — | #f7f4ec / #121110 | — | — | — | — | — |
| Enveloppe | fond avant première peinture, look Minimal | E4 | — | — | — | — | aucune règle | — | — | — | — | — |
| Enveloppe | repli HTML pré-React | E8 `index.html` `style=""` | — | — | — | — | — | — | — | — | #e5e7eb (texte), #93c5fd (liens) | — |
| Enveloppe | icône d'application | E2 `icon.svg` ; E3 icône ; E4 PNG ; E9 `public/icon.svg` | ? | ? | fond #0f172a ; #f8fafc opacité .08 ; barres #e2e8f0 | fond #f5f7fb ; tuile dégradé #f8d872 → #f4c542 ; barres #20180a | fond ambre (PNG, pixels non analysés) | ? | ? | ? | ? | fond #f4c430 ; trait du « M » #1a1a1a |
| Système | bordure des surfaces en contraste forcé | E9 `@media (forced-colors: active)` | — | — | — | — | — | — | — | — | — | CanvasText |
| Système | sélection en contraste forcé | E9 `.ms-dock__item[aria-current='page']`, `.ms-tool[aria-pressed='true']` | — | — | — | — | — | — | — | — | — | Highlight / HighlightText |
| Système | fond du ::backdrop du dialogue | E9 `.ms-dialog::backdrop` | — | — | — | — | — | — | — | — | — | var(--ms-bg) |
| Système | surbrillance de tape mobile | E9 `-webkit-tap-highlight-color` | — | — | — | — | — | — | — | — | — | transparent → jeton opaque (--ms-surface ou --ms-bg) |
| Opacités | paliers alpha (--alpha-*) | E1 `--alpha-faint`, `--alpha-soft`, `--alpha-medium`, `--alpha-strong` | — | faint 5 % ; soft 8 % ; medium 12 % ; strong 18 % | — | — | ? | — | — | = | — | — |
| Opacités | opacité décorative | E6 `--opacity-decorative` | — | — | — | — | — | — | .35 | — | — | — |
| Opacités | opacité désactivé | `--opacity-disabled` | — | — | — | — | — | — | .45 | .4 | — | — |
| Opacités | opacité d'entrée | E6 `--opacity-enter` | — | — | — | — | — | — | .5 | — | — | — |
| Opacités | opacité masqué | E6 `--opacity-hidden` | — | — | — | — | — | — | 0 | — | — | — |
| Opacités | opacité d'illustration | E6 `--opacity-illustration` | — | — | — | — | — | — | .75 | — | — | — |
| Opacités | opacité de placeholder | E6 `--opacity-placeholder` | — | — | — | — | — | — | .76 | — | — | — |
| Opacités | opacité de pop | E6 `--opacity-pop` | — | — | — | — | — | — | .7 | — | — | — |
| Opacités | opacité visible | E6 `--opacity-visible` | — | — | — | — | — | — | 1 | — | — | — |

## 3. Détail des changements

Format : `valeur — première apparition réf — dernier état réf — raison`. « Raison » = citation du commit ou de l'entrée ; sinon « non documentée ». Les valeurs d'une étape intermédiaire sont toutes listées. Références abrégées : `repo@sha8 date`. Dans E2 : A = notepad-pwa@3c6f6152, B = @576a8c9d, C = @76dfefe5, D = @a488cc67 (tous 2026-10-20). Dans E3 : N0 = notes-4@94f8e515, N1 = @28ad8ce4, N2 = @6f00cf58, N3 = @854f07b5, N4 = @8150588e (tous 2026-10-22).

### 3.1 Fonds et surfaces

**fond de page, E2** : `#f4f7fb / #0b1020` — A — remplacé en B — non documentée ; `#f3f7ff / #090d18` — notepad-pwa@576a8c9d 2026-10-20 — dernier CSS connu C (CSS supprimé en D) — non documentée.

**fond de page, E4** : `#eef0f6 / #08090c` — notes-v5@b1f17318 2026-10-21 (tokens.css `:root`) — remplacé par `#f4f5f8 / #0b0c0f` notes-v5@ad232dfb 2026-10-21 (looks.css `:root, :root[data-look='glass']`) — non documentée. Précision : le look `glass` portait déjà `#f4f5f8 / #0b0c0f` depuis b1f17318 (ligne supprimée en ad232dfb) ; ad232dfb le rend aussi valeur par défaut sans attribut `data-look`.

**fond de page, E8** : `#111827` (sombre seul, `:root background`) — mindspace-old@99c91a87 2026-11-03 — remplacé par `--ms-canvas` mindspace-old@b44de130 2026-11-05 05:40 (même valeur) — non documentée ; `--ms-canvas` `#111827 / #f8fafc` (clair ajouté @77149a05 2026-11-05 06:10) ; `--ms-bg` `#faf9f6 / #121316` mindspace-old@55eb1028 2026-11-05 18:05 (palette « app » chaude, décrite dans DESIGN_SYSTEM.md de556ab 2026-11-05) ; `--ms-canvas` devient `var(--ms-bg)` mindspace-old@96b634f1 2026-11-06 22:10 — raison citée : « Earlier settings tokens retained a separate blue/gray palette while notes used warm neutral colors ».

**surface de contenu, E1** : `#ffffffc7 / #1d1e24b8` — notes-v3@4da62555 2026-10-18 — `#ffffff / #1a1b20` notes-v3@35c0380c 2026-10-21 — message : « Notes 26.10.21.1 : audit design appliqué — téléphone en une… ».

**surface de contenu, E4** : `#ffffff / #1a1b20` — notes-v5@b1f17318 2026-10-21 — `#ffffff / #17181d` notes-v5@ad232dfb 2026-10-21 (looks.css glass) — non documentée.

**surface de contenu, E8** : `#1f2937` (sombre seul, panneau latéral et textarea) — mindspace-old@99c91a87 2026-11-03 — `--ms-surface` `#1f2937 / #ffffff` mindspace-old@591eb91e 2026-11-05 05:39 — `#ffffff / #1e2025` mindspace-old@96b634f1 2026-11-06 22:10 — raison du 96b634f1 citée ci-dessus.

**surface de contenu, E9** : `#ffffff / #1b1c21` — mindspace-core@128050ce 2026-11-10 — `#ffffff / #1e1e22` mindspace-core@5469a8ab 2026-11-11 — non documentée (passage au design flat du 2026-11-11).

**carte « solide », E1** : `#ffffff / #18191e` — notes-v3@4da62555 — `#ffffff / #1a1b20` notes-v3@35c0380c — même message que ci-dessus. E4 : supprimée, voir § 4.

**surface de l'éditeur, E1** : `#f7f8fbf2 / #0e0f13f2` — notes-v3@4da62555 — `#f7f8fb / #0e0f13` notes-v3@35c0380c. **E4** : `#f7f8fb / #0e0f13` — notes-v5@b1f17318 — `#fafbfc / #0e0f13` notes-v5@ad232dfb. **E4, look Papier** : `#fbf9f3 / #161412` — b1f17318 — `var(--color-card)` ad232dfb. Raisons : non documentées.

**surface posée, E4** : `#ffffff / #3a3b43` (tokens.css `--color-raised`, notes-v5@82aa90c2 2026-10-21) — `#ffffff / #34353d` notes-v5@ad232dfb (looks.css glass).

**surface au survol, E8** : `--ms-hover` `#374151 / #f1f5f9` — mindspace-old@591eb91e — alias de `--ms-surface-muted` (`#f1f1ee / #24262b`) mindspace-old@96b634f1.

**surfaces de teinte, E2** : `--surface` `#eef3ff / #111827` — A — `#eef4ff / #0b1220` B (défini, non lu).

### 3.2 Textes

**texte atténué, E1** : `#5f6370 / #9a9eab` — notes-v3@4da62555 2026-10-18 — `#4f5361 / #9a9eab` notes-v3@ba6e7b28 2026-10-19 (« Notes 26.10.19.1 : volets en coins sur tablette, panneaux l… ») — `#484c59 / #a4a8b4` notes-v3@35c0380c 2026-10-21 (« audit design appliqué »).

**texte discret, E1** : `#8b8f9b / #6c707c` — 4da62555 — `#6b6f7c / #82868f` ba6e7b28 — `#5d616d / #8e929b` 35c0380c. Raison : messages ci-dessus (cible « ≥5,4:1 » documentée pour E4 et E7, § 3.7).

**texte atténué, E2** : `#475569 / #a5b4cf` — A — `#4b5d79 / #a5b4cf` B (seul le clair change) — non documentée.

**texte atténué, E4** : `#484c59 / #a4a8b4` — notes-v5@b1f17318 — `#484c59 / #b0b4bf` notes-v5@190af4b5 2026-10-21 — raison citée : texte muted sur widget teinté, Glass sombre, 6,61:1 → 7,58:1 ; cible muted ≥7:1.

**texte atténué, E4 Papier** : `#b5ad9f` (sombre) — b1f17318 — `#bdb5a7` ad232dfb. **texte discret, E4 Papier** : `#9a9284` — b1f17318 — `#a39b8d` ad232dfb. Raisons : non documentées.

**texte atténué, E6** : `#72766f / #969a91` — notes-v6@57c25ea2 2026-10-28 (déplacé de app.css à tokens.css en a0935371 2026-10-29, sans changement de valeur) — `--muted: var(--text-muted)` avec `--text-muted` `#484d46 / #bcc2b8` notes-v6@c80dbb09 2026-10-31 — raison : DESIGN.md V4 documentait Pencil Muted `#72766f` à 4,6:1 sur Sheet et 4,2:1 sur Canvas (échec AA petit texte) ; V5 (c80dbb09) documente « Muted text contrast is at least 7.52:1 ».

**texte atténué, E8** : `#9ca3af` (statut, sombre seul) — mindspace-old@99c91a87 — `--ms-muted` `#9ca3af / #64748b` @591eb91e — alias de `--ms-muted-fg` `#6b6b66 / #a0a0a8` @96b634f1 (raison du 96b634f1). **texte principal, E8** : `#e5e7eb` — 99c91a87 — `--ms-text` `#f9fafb / #0f172a` @b44de130 (clair) — alias de `--ms-fg` `#1a1a1a / #f5f5f7` @96b634f1. **texte secondaire, E8** : `--ms-secondary` `#d1d5db / #334155` @591eb91e — alias de `--ms-muted-fg` @96b634f1 (cible de l'alias déduite de la liste d'alias de l'entrée, § 6).

**accent en encre, E1** : `#e0ac1c` — 4da62555 — `#8c6600 / #e0ac1c` ba6e7b28 (« volets en coins sur tablette… »). **E4 Papier** : `#835c00 / #f2b632` — b1f17318 — `#7d5800 / #f2b632` ad232dfb. **E4 glass sombre** : `#d9a514` (supprimé ad232dfb au profit de `#e0ac1c`). **E6** : `--accent-text` `#ffe27a` (:root) — 57c25ea2 — `#594000 / #ffe27a` 1bae3e15 2026-10-28 — raison citée : constat de revue, `#ffe27a` sur clair 1,27:1 ; DESIGN.md V4 « Ink-Not-Light Rule ».

**texte sur accent** : voir § 3.3 pour E6. **texte sur fond saturé, E1** : `--color-on-fill` `#fff` — notes-v3@15678aae 2026-10-29 — `#fff / #0b0c0f` notes-v3@fe7ee2da 2026-10-29 — raison citée : « le blanc tombait à 2,8–3,7:1 » sur les fonds vifs du sombre (message « measure contrast from tokens; theme-aware ink on fills and … »).

**texte sur danger, E6** : `#ffffff` — notes-v6@1bae3e15 — `#ffffff / #39100c` notes-v6@c80dbb09 (non documentée ; accompagne le passage de `--danger`).

### 3.3 Accents

**ambre, E3** : `#f6c453` (clair) — notes-4@94f8e515 — `#f4c542` notes-4@28ad8ce4 (sombre `#f4c542` dès N2) — non documentée. **accent doux, E3** : `rgba(246,196,83,0.18)` — N0 — `rgba(244,197,66,0.18)` N1.

**accent ambre, E1/E4/E7** : valeur `#f4c542` constante ; seul le déplacement littéral → `var(--accent-amber)` (notes-v3@15678aae 2026-10-29, « move every colour into tokens and fail the smoke on a stray… ») est un changement de forme, sans changement de valeur. Pastilles `.accent-dot` abricot `#f59e5b` et lilas `#b9a2f5` : littéraux notes-v3@fbf13b31 2026-10-24 → jetons 15678aae.

**accent, E8** : `--ms-accent` `#818cf8 (sombre) / #4f46e5 (clair)` — mindspace-old@591eb91e 2026-11-05 — `#6b3dd0` (clair) et `#c7b4f7` (sombre) @96b634f1 2026-11-06 22:10 ; lilas : `#7e52e8` @55eb1028 → `#6b3dd0` @96b634f1. **accent plein, E8** : `--ms-accent-strong` `#4f46e5 (sombre) / #4338ca (clair)` @591eb91e — `#6b3dd0` clair, `#6942ae` sombre @96b634f1. **`--ui-primary`** : `var(--ms-accent-strong)` @931f56a2 2026-11-05 11:01 — `#6b3dd0 / #6942ae` @96b634f1. Raison commune : voir E8 fond de page.

**ambre / lilas, E6** : `--accent-action` `#e0a816` (:root) 57c25ea2 — inchangé en valeur, déplacé en tokens.css a0935371 ; variantes `[data-theme='dark'][data-accent=…]` (`#e0a816`, `#9c77ed`) supprimées 1bae3e15 (§ 4). `--accent-ink` sombre/ambre `#302507` — 57c25ea2 — supprimé 1bae3e15 ; `--accent-on-action` `#302507` est créé au même commit (lien de remplacement non écrit dans l'entrée).

**accent primaire, E2** : `--primary-soft` sombre `rgba(96,165,250,0.15)` — A — `rgba(96,165,250,0.14)` B. **dégradé du bouton primaire** : `background: var(--primary)` — A — `linear-gradient(135deg, var(--primary), #3790ff)` B (à C). **bordure active** : `rgba(96,165,250,0.46)` A, B — `0.52` C. Non documentées.

**halo ambre, E4** : `0 8px 24px light-dark(#f4c54270, #f4c54240)` — b1f17318 — `0 8px 24px color-mix(in srgb, var(--color-accent) var(--alpha-strong), transparent)` notes-v5@82aa90c2 2026-10-21. **Papier** : `none` — b1f17318 — `0 0 transparent` ad232dfb.

**bord propre du « + »** : jeton `--color-accent-stroke` créé notes-v5@82aa90c2 (défaut `#d9a514`), valeurs par look ajoutées ad232dfb : pas de changement de valeur.

### 3.4 États

**danger, E6** : `#b54b42` — notes-v6@57c25ea2 — `#882f28` (clair) / `#ffb4aa` (sombre) notes-v6@c80dbb09 2026-10-31 — non documentée (V5 : contrastes de texte relevés). Sur la même ligne, E8 `--destructive #ef4444` ne change jamais, E8 `--ms-danger` `#b3261e / #f2b8b5` est posé en 55eb1028.

**teinte de danger, E4** : `light-dark(#d7001514, #ff696124)` (littéral `.notice.alert`) — b1f17318 — `color-mix(in srgb, var(--color-danger) var(--alpha-soft), transparent)` notes-v5@82aa90c2. **pulsation** : `0 0 0 8px light-dark(#d7001520, #ff696126)` — b1f17318 — `var(--color-danger-tint)` 82aa90c2.

**sélection Papier, E4** : sombre `#7d9cf0` — b1f17318 — `#8aa6f2` ad232dfb. **teinte de sélection, E4** : `#0062cc1a / #0a84ff2e` — b1f17318 — `color-mix(select, alpha-soft / alpha-medium)` 82aa90c2. Papier `#2f5bd31a / #7d9cf02e` supprimée ad232dfb (§ 4).

**avertissement, E2** : `--warning` `#f59e0b / #fbbf24` — A — supprimé B (§ 4).

**focus, E1** : jeton `--color-focus` créé notes-v3@35c0380c 2026-10-21 (`#16171b / #f2f3f7`) — message : « L'ambre est réservé à la création et aux notes épinglées ; le contour du focus est sombre et se voit partout ». **E4** : `#16171b / #f2f3f7` — b1f17318 — `var(--color-text)` notes-v5@82aa90c2. **E6** : `--focus-ring` `var(--accent-text)` créé c80dbb09 (pas de changement). **E9** : sombre `#7e52e8` (non redéfini) — mindspace-core@128050ce 2026-11-10 — `var(--ms-accent-pro)` = `#b99ff5` mindspace-core@5469a8ab 2026-11-11 — raison citée dans le fichier de jetons : « violet historique de MindSpace » pour la valeur claire ; le changement sombre n'a pas de raison écrite (contrastes de `focus` en § 3.7).

**ombre/verre E9** : voir § 3.5.

### 3.5 Verre, voiles, remplissages

**verre, E1** : `--glass` stable `#ffffff8c / #26272e80`. **dock, E1** (littéral `.dock .island.glass`) : `light-dark(#ffffffd6, #25262cd9)` — notes-v3@4a4da608 2026-10-18 — `light-dark(#ffffffd6, #4a4b5466)` @1224a586 2026-10-18 (« Notes 26.10.18.4 : Trier en menu déroulant, verre clair en… ») — retour `#ffffffd6 / #25262cd9` @d6af8790 2026-10-19 — `var(--glass-dock)` @15678aae. Bordure `light-dark(#ffffffb3, #ffffff2e)` : 1224a586 → supprimée d6af8790. **verre de feuille, E1** : `.sheet.glass` `#f7f8fbeb / #17181df2` (notes-v3@801d11fb 2026-10-18) — `#f7f8fbc7 / #17181dcc` @4a4da608 — `#f7f8fbf2 / #17181df2` @35c0380c — `var(--glass-sheet)` @15678aae.

**remplissages et traits, E1** : `--color-fill` `#16171b0d / #ffffff12`, `--color-fill-strong` `#16171b17 / #ffffff1f`, `--color-line` `#16171b14 / #ffffff14`, `--color-line-strong` `#16171b2e / #ffffff2e` (créé 35c0380c) — remplacés par des `color-mix` sur `--color-text` et paliers `--alpha-*` notes-v3@fe7ee2da 2026-10-29 — message : « measure contrast from tokens; theme-aware ink on fills and … ». **E4** : mêmes valeurs littérales b1f17318 — `color-mix` 82aa90c2 (`line` : alpha-soft ; `line-strong` : alpha-medium ; `fill` : alpha-faint ; `fill-strong` : alpha-soft). Contraste renforcé E4 : `#16171b4d / #ffffff4d` → `color-mix(text, alpha-strong)` ; `#16171b80 / #ffffff80` → `color-mix(text, alpha-strong + alpha-medium)` 82aa90c2.

**verre, E4** : `#ffffff8c / #26272e80` (tokens.css) — look glass `#ffffff9e / #23242b85` b1f17318 — `rgb(255 255 255 / 62%) / rgb(38 39 46 / 62%)` ad232dfb. **nav E4** : littéral `#ffffffd6 / #25262cd9` — `--glass-nav color-mix(card, 100% − alpha-medium)` 82aa90c2. **feuille E4** : littéral `#f7f8fbf2 / #17181df2` — `--glass-solid color-mix(editor, 100% − alpha-faint)` 82aa90c2. **voile E4** : `#10121a2e / #0000006b` — `color-mix(#10121a alpha-medium)/(#000 alpha-strong)` 82aa90c2 — look glass `#10121a33 / #00000066` (b1f17318) puis `color-mix(#0b0c0f, alpha-strong)` ad232dfb. **Papier E4** : `#1f1b1638 / #00000080` — `color-mix(#1f1b16 alpha-medium)/(#000 alpha-strong)` ad232dfb. **photo E4** : `linear-gradient(180deg, #0005, #000b)` / `#0007` — `--veil-photo` / `--color-shade` 82aa90c2. Raisons : « colour literals 27 → 0 » (notes-v5@67979ff5, 82aa90c2) pour les remplacements par jetons.

**verre, E2** : `rgba(255,255,255,0.7) / rgba(15,23,42,0.78)` — A — `0.72 / 0.76` B. **verre, E3** : clair `rgba(255,255,255,0.72)` N0 — `0.7` N1 ; sombre `rgba(18,26,42,0.8)` ajouté N2. **dock E3** : `0.55` N0 — `0.62` N1. **ghost E3** : `var(--card-muted)` N0 — `rgba(255,255,255,0.46)` N1. **panneaux E3** : `.list-panel`, `.editor-panel` `rgba(255,255,255,0.45)` N0 — `var(--panel)` N1 ; champs `0.72` N0 — `0.42` N1 ; `.folder-badge` `var(--card-muted)` N0 — `rgba(255,255,255,0.25)` N1 ; items `rgba(255,255,255,0.26)` N2. **fond du body E3** : clair radial `0.12 / 28 %` N0 — `0.14 / 26 %` N1 ; sombre radial `0.12 / 26 %` + linéaire `#0d1424` ajouté N3. **theme-color E3** : `#0d1117` N0 — `#f4c542` N1. Non documentées.

**verre, E9** : `--ms-glass-bg`, `--ms-glass-border`, `--ms-glass-shadow` — mindspace-core@128050ce 2026-11-10 — supprimés mindspace-core@5469a8ab 2026-11-11 — bordure remplacée par `--ms-border` ; voir § 4.

**fond de tape mobile, E9** : `-webkit-tap-highlight-color: transparent` — 128050ce — jeton opaque 5469a8ab — raison citée : `transparent` interdit.

**E1 `.scrim`** : `var(--color-scrim)` 4da62555 — `light-dark(#eef0f633, #08090c4d)` @4a4da608 — `var(--scrim-frost)` @15678aae.

### 3.6 Composants teintés (E1)

`.tile` : `var(--glass)` (4da62555) — `linear-gradient(150deg, color-mix(tone 16 %, transparent), transparent 70 %), card` (@4a4da608 2026-10-18) — `… 14 % …` (@d6af8790 2026-10-19) — `color-mix(tone 12 %, card)` (@35c0380c 2026-10-21). `.widget` : gradient tone 18 % / 75 % (801d11fb) — `color-mix(tone 10 %, card)` (35c0380c). `.lib-folder` : `26 % / 80 %` (801d11fb) — `20 % / 85 %` (35c0380c) ; `::before` `40 %` — `32 %` (35c0380c). `.chip` actif : fond `var(--tone)` (4a4da608) — `color-mix(tone 16 %, card-solid)` (d6af8790) ; texte `#fff` (4a4da608) — `var(--on-tone, #fff)` (ba6e7b28) — `var(--tone-ink)` (d6af8790). `.change-pill` : `var(--color-fill)` (4da62555) — `color-mix(kind 16 %, transparent)` (d6af8790). `.widget:has(img)` fond : `linear-gradient(180deg, transparent 20%, #000a)` (801d11fb) — `#0005 → #000b` (35c0380c) — `var(--media-shade)` (15678aae). `[data-tone='yellow'] --tone` : `var(--color-accent-deep)` (801d11fb) — `var(--color-accent)` (ba6e7b28). Tableau : `[data-sel]` `color-mix(accent 14 %, transparent)` (9e7d5dd7 2026-10-29) — `color-mix(select 10 %, editor)` (e30d2cdc 2026-10-29, « polish editing, tables, cards and the 52px dock »). Messages cités : voir E1 ci-dessus ; pour d6af8790 « Notes 26.10.19.2 : Bibliothèque en page, barre toujours là,… » et 801d11fb « Notes 26.10.18.2 : récap, bibliothèque pleine page, couleur… ».

**Déplacements littéral → jeton sans changement de valeur (E1, notes-v3@15678aae 2026-10-29, « move every colour into tokens and fail the smoke on a stray… »)** : `#fff` (coches, boutons armés, swipe, swatch, widget) → `--color-on-fill` puis `--color-on-media` / `--color-on-folder` (e30d2cdc) ; `#0007` → `--media-veil` ; `#fff` (curseurs) → `--surface-knob` ; `light-dark(#fff, #3a3b43)` → `--surface-thumb` ; `#d7001514 / #ff696124` → `--color-danger-tint` ; `#000` → `--print-ink` ; `#fffd` → `--color-on-fill-soft` (supprimé fe7ee2da, remplacé par `--color-on-media-soft`). **E4** : mêmes littéraux → jetons, notes-v5@82aa90c2 et @67979ff5 (« colour literals 27 → 0 »).

### 3.7 Contrastes (documentés ou calculés)

Provenance : **D** = documenté dans le dépôt ; **C** = calculé par l'agent d'extraction du dépôt (formule WCAG 2.x), non écrit dans le dépôt.

| version | mesure | valeur | provenance |
|---|---|---|---|
| E1 | `--color-on-fill` blanc sur fonds clairs profonds ; encre sombre sur fonds vifs du sombre | ≥5,3:1 ; le blanc tombait à 2,8–3,7:1 | D, notes-v3@fe7ee2da 2026-10-29 (commentaires tokens.css, tests/contrast.mjs) |
| E1 | `--color-on-folder` `#0b0c0f` sur les 8 dossiers | ≥4,7:1 | D, idem |
| E1 | `--color-accent-deep` | ≥7:1 (7,9 sur le fond, 9,0 sur les cartes) | D, idem (voir § 6 : E7/E4 écrivent ≥4,5:1) |
| E4 | texte ; texte atténué | ≥4,5:1 ; ≥7:1 (cible du propriétaire du dépôt, les deux looks) | D, design-teardown §1, AGENTS.md (notes-v5@499ece81 2026-10-21) |
| E4 | texte discret | ≥5,4:1 (mesures 5,67 à 6,99) | D, looks.css |
| E4 | 664 passes sur 20 écrans | 0 échec | D, notes-v5@190af4b5 |
| E4 | échec trouvé puis corrigé : muted sur widget teinté, Glass sombre `#a4a8b4` | 6,61:1 → `#b0b4bf` 7,58:1 | D, notes-v5@190af4b5 |
| E4 | baseline avant travail : libellés muted des contrôles segmentés sombres | 10 échecs ; 6,22:1 Glass, 6,73:1 Paper | D, design-teardown §4 |
| E4 | `#0a84ff` sur blanc | 3,6:1 → bleu clair devenu `#0062cc` | D, design-teardown §5 |
| E4 | contraste renforcé (`prefers-contrast: more`) : muted | 11,44 à 13,26:1 selon look et mode | D, design-teardown §4 |
| E4 | 716 passes sur 28 écrans ; 280 passes sur 16 écrans | 0 échec | D, notes-v5@6840b25e, @2466c955 ; @1af74e0e |
| E4 | Glass clair 390 accueil, min texte / muted / faint | 5,29 / 7,85 / 5,67 | D, results.json |
| E4 | Glass sombre | 4,86 / 8,55 / 5,68 | D, results.json |
| E4 | Paper clair | 5,20 / 8,87 / 6,47 | D, results.json |
| E4 | Paper sombre | 5,41 / 8,54 / 6,31 | D, results.json |
| E4 | Minimal | non mesuré (« accessible opaque palette » sans chiffre, notes-v5@feebaaea) | D |
| E6 | Amber On-Action `#302507` sur Amber Press | 7,0:1 | D, DESIGN.md notes-v6@1f5a70d2 2026-10-29 |
| E6 | Amber Ink Text `#594000` sur Sheet | 9,6:1 | D, idem |
| E6 | Lilac Press avec texte blanc | 4,9:1 | D, idem |
| E6 | Pencil Muted `#72766f` sur Sheet ; sur Canvas | 4,6:1 ; 4,2:1 (échec AA petit texte) | D, idem |
| E6 | `#ffe27a` sur clair | 1,27:1 (constat de revue) | D |
| E6 | texte atténué sur canvas, surface, surface douce, barre latérale ; bordures de contrôle | ≥7,52:1 ; ≥3,20:1 | D, ACCESSIBILITY.md notes-v6@c80dbb09 2026-10-31 |
| E7 | `--color-text-muted` ; `--color-text-faint` | ≥7:1 sur fond et cartes ; ≥5,4:1 | D, tokens.css |
| E7 | `--color-accent-deep` | ≥4,5:1 ; ≥7:1 en `prefers-contrast: more` (7,9 sur fond, 9,0 sur carte) | D |
| E7 | `--color-on-fill` blanc ; `--color-on-folder` | ≥5,3:1 ; ≥4,7:1 sur les 8 couleurs de dossier | D |
| E8 | étiquettes et verre | critère ≥4,5:1, fonds testés `#000` et `#fff` ; mesuré par `tests/design-accessibility.spec.ts` (mindspace-old@a280a721) | D, DESIGN_SYSTEM.md d5a8114 2026-11-05 15:44 ; aucune valeur écrite |
| E9 | `on-danger` sur `danger` | 6,54 clair / 7,62 sombre | D, mindspace-core@e64c019e 2026-11-11 |
| E9 | `danger` sur le fond ; sur une carte | 6,21 / 8,14 ; 6,54 / 7,28 | D, idem |
| E9 | lilas en texte clair | 2,1:1 (à ne pas utiliser) | D, mindspace-core@5469a8ab |
| E9 | `--ms-border` en clair | 1,2:1 (« décoratif ») | D, idem |
| E9 | seuils des tests | 4,5:1 paires de texte ; 3:1 `focus` sur `bg` et `surface` | D, `tests/tokens.test.ts` |
| E9 | `text` / `bg` ; `text` / `surface` | 16,53 / 17,06 ; 17,40 / 15,26 | C |
| E9 | `text-muted` / `bg` ; `text-muted` / `surface` | 6,35 / 8,11 ; 6,69 / 7,25 | C |
| E9 | `on-accent` / `accent` | 10,60 / 10,60 | C |
| E9 | `focus` / `bg` ; `focus` / `surface` | 4,68 / 8,26 ; 4,93 / 7,39 | C |
| E9 | `accent-pro` / `bg` | 2,14 / 8,26 | C |
| E9 | `border` / `bg` ; `border` / `surface` | 1,20 / 1,47 ; 1,26 / 1,31 | C |
| E9 | `accent` / `bg` | 1,56 / 11,31 | C |

(Pour E9 les valeurs C sont « clair / sombre ».) E0, E2, E3, E5 : aucun contraste documenté ; E2, E3 et E5 le disent explicitement dans leur entrée.

## 4. Éléments disparus

« Supprimé » = ligne `SUPPRIMÉ` ou fin de lignée dans l'entrée. Les remplacements de valeur (dans la matrice par `A → B`) ne sont pas répétés ici. « non documenté » = l'entrée ne donne pas de remplaçant.

| élément | créé (réf) | supprimé (réf) | version | remplacé par | note |
|---|---|---|---|---|---|
| `--color-accent-hover` `#e5b530`, `--color-accent-ring` `#f4c542b3 / #f4c54280` | notes-v3@b6647a04 2026-10-09 | absents du premier commit source notes-v3@4da62555 2026-10-18 (dernier état de la lignée : notes-v3@ea104c22 2026-10-15) | E0 | non documenté | bundle minifié, aucune source |
| `--color-border` `#e2e2e7 / #2c2c2e`, `--color-border-input` `#8a8a8e / #6e6e73` | notes-v3@b6647a04 | idem | E0 | E1 `--color-line` (autre valeur) ; pas de jeton « bordure de champ » en E1 | rôle comparable, valeurs différentes |
| `--color-pane` `#fff / #121214`, `--color-segment-thumb` `var(--color-surface) / #636366` | notes-v3@b6647a04 | idem | E0 | `--color-editor`, `--surface-thumb` (rôles voisins, non documenté) | |
| `--color-inverse-bg` `var(--color-text)`, `--color-inverse-text` `var(--color-bg)` | notes-v3@b6647a04 | idem | E0 | non documenté | l'idée « paire inversée » réapparaît en E9 (mindspace-core@5469a8ab) |
| `--color-on-danger` `#fff / #1c1c1e`, `--color-on-select` `#fff`, `--color-on-scrim` `#fff`, `--color-on-folder-2` et `-6` `#1c1c1e` | notes-v3@b6647a04 | idem | E0 | `--color-on-fill` (E1 notes-v3@15678aae), `--color-on-folder` `#0b0c0f` (fe7ee2da) | non documenté pour on-danger, on-select, on-scrim |
| `--color-toast-action` `#f4c542 / #0040dd` | notes-v3@b6647a04 | idem | E0 | non documenté | seul bleu `#0040dd` de la lignée |
| `--color-progress-done` `var(--color-folder-3)` | notes-v3@b6647a04 | idem | E0 | non documenté | |
| `.app-header border-bottom 1px solid #0000`, `.card[data-color] border-color #0000` | notes-v3@b6647a04 | idem | E0 | non documenté | |
| meta `theme-color` `#F2F2F7 / #000000`, manifest `#F2F2F7` | notes-v3@b6647a04 | remplacés notes-v3@4da62555 | E0 | `#EEF0F6 / #08090C` | présenté aussi dans la matrice |
| manifest `theme_color` `#EEF0F6` | notes-v3@4da62555 2026-10-18 | notes-v3@cfa03208 2026-10-28 | E1 | balise theme-color réécrite à l'exécution (`syncThemeColor`) | raison citée : « Chromium dropped dark manifest colours in 128 » |
| `--glass-press` `#ffffffa6 / #ffffff1f` | notes-v3@4da62555 | notes-v3@d6af8790 2026-10-19 | E1 | non documenté | |
| `--color-on-fill-soft` `#fffd` | notes-v3@15678aae 2026-10-29 | notes-v3@fe7ee2da 2026-10-29 | E1 | `--color-on-media-soft` `#fffd` | |
| `:root --glass` en `prefers-reduced-transparency` dans tokens.css | notes-v3@4da62555 | notes-v3@ba6e7b28 2026-10-19 | E1 | même règle recréée dans app.css (ba6e7b28) puis looks.css (fbf13b31) | |
| `--tone-ink` dans app.css | notes-v3@d6af8790 2026-10-19 | notes-v3@15678aae 2026-10-29 | E1 | même valeur dans tokens.css | déplacement |
| `[data-tone='yellow'] --on-tone` `var(--color-accent)` | notes-v3@ba6e7b28 | notes-v3@d6af8790 | E1 | `--tone-ink` | |
| `.tbl [data-sel]` `color-mix(accent 14 %, transparent)` | notes-v3@9e7d5dd7 2026-10-29 | notes-v3@e30d2cdc 2026-10-29 | E1 | `color-mix(select 10 %, editor)` | |
| `.lib-tag[aria-pressed] color #fff` ; `.lib-bubble color` (`#fff`, puis `var(--on-tone, #fff)`) ; `.layer.lib-page background` (`var(--color-editor)`, puis `light-dark(#f2f4f9b3, #0e0f13b8)`) | notes-v3@801d11fb 2026-10-18 | notes-v3@d6af8790 2026-10-19 | E1 | non documenté | |
| `.dock .island.glass` bordure `light-dark(#ffffffb3, #ffffff2e)` | notes-v3@1224a586 2026-10-18 | notes-v3@d6af8790 | E1 | non documenté | |
| `.starters .chip background` `light-dark(#ffffffd6, #25262cd9)` | notes-v3@4a4da608 2026-10-18 | notes-v3@35c0380c 2026-10-21 | E1 | non documenté | |
| tons `--tone-blue`, `-gray`, `-green`, `-indigo`, `-orange`, `-pink`, `-purple`, `-red`, `-teal` (9) | notes-v5@b1f17318 2026-10-21 | notes-v5@82aa90c2 2026-10-21 | E4 | non documenté (le jeton survit en E1 et E7) | |
| `--tone-ink` | notes-v5@b1f17318 | notes-v5@6840b25e 2026-10-22 | E4 | non documenté | |
| `--color-card-solid` (défaut et Papier) | notes-v5@b1f17318 | notes-v5@82aa90c2 | E4 | `--color-card` (« copie de --color-card ») | |
| `--color-ground`, `--color-surface` (alias sans lecteur) | notes-v5@232da787 2026-10-22 | notes-v5@d083fb4c 2026-10-22 | E4 | `--color-bg`, `--color-card` | |
| look Verre : `--color-accent-deep` sombre `#d9a514`, `--glass` `#ffffff9e / #23242b85`, `--color-scrim` `#10121a33 / #00000066`, `--color-select` (même valeur que la base), `--color-bg` (fusionné) | notes-v5@b1f17318 | notes-v5@ad232dfb 2026-10-21 | E4 | valeurs par défaut de `:root, :root[data-look='glass']` | |
| look Papier : `--color-fill`, `--color-fill-strong`, `--color-line`, `--color-line-strong`, `--color-select-tint` | notes-v5@b1f17318 | notes-v5@ad232dfb | E4 | `color-mix` hérités de tokens.css | |
| règles `prefers-contrast: more` de tokens.css (`--color-line`, `--color-line-strong`, `--color-text-faint`, `--color-text-muted`, `--glass`) | notes-v5@b1f17318 / 82aa90c2 | notes-v5@ad232dfb | E4 | mêmes règles dans looks.css | déplacement, mêmes valeurs |
| sélecteurs `data-oled` et `data-high-contrast` sans `data-look` | notes-v5@1c1fb148 2026-11-11 | notes-v5@89526ff2 2026-11-11 | E4 | mêmes valeurs sous `[data-look]` | re-scopage pour passer devant les looks |
| `html` sol de premier affichage `#eef0f6 / #08090c` | notes-v5@b1f17318 | notes-v5@ad232dfb | E4 | `#f4f5f8 / #0b0c0f` (Verre), `#f7f4ec / #121110` (Papier) | |
| `--warning` `#f59e0b / #fbbf24` | notepad-pwa@3c6f6152 2026-10-20 | notepad-pwa@576a8c9d 2026-10-20 | E2 | aucun | « défini, jamais utilisé » |
| tout le CSS de notepad-pwa (jetons bleus `--bg`, `--panel`, `--primary`, …) | notepad-pwa@3c6f6152 | CSS supprimé notepad-pwa@a488cc67 2026-10-20 | E2 | aucun | à HEAD les fichiers sont permutés ; dernier CSS connu : 76dfefe5 |
| palette nommée de DESIGN.md (28 noms : `amber-lamp` `#f4c430`, `amber-press` `#e0a816`, `amber-ink-text` `#594000`, `amber-deep-ink` `#352a0a`, `amber-on-action` `#302507`, `lilac-lamp` `#b99ff5`, `lilac-press` `#7e52e8`, `lilac-ink-text` `#5634a4`, `paper-canvas` `#f5f4ef`, `sheet` `#fffefa`, `sheet-soft` `#f0efe9`, `sheet-hover` `#eeece5`, `desk-sidebar` `#faf9f5`, `graphite` `#242623`, `graphite-2` `#4f534d`, `pencil-muted` `#72766f`, `hairline` `#e8e6de`, `hairline-strong` `#d9d7ce`, `danger` `#b54b42`, `saved-green` `#43765b`, `saved-dot` `#66a87d`, `night-canvas` `#171918`, `night-sheet` `#202321`, `night-sheet-soft` `#252927`, `night-graphite` `#f2f0e8`, `night-muted` `#969a91`, `night-hairline` `#343a35`, `night-amber-text` `#ffe27a`) | notes-v6@1f5a70d2 2026-10-29 | notes-v6@c80dbb09 2026-10-31 | E6 | palette de 7 noms (`amber`, `lilac`, `canvas`, `surface`, `ink`, `muted`, `control-border`) ; les valeurs vivent dans tokens.css | les 28 noms portent la mention « SUPPRIMÉ » dans l'entrée ; chaque valeur existe aussi comme jeton de tokens.css au même moment |
| jetons d'accent par thème sombre : `--accent-action` `#e0a816` et `#9c77ed`, `--accent-base` `#f4c430` et `#b99ff5`, `--accent-ink` `#302507` et `#241933`, `--accent-text` `#ffe27a` et `#d8c7ff` (`[data-theme='dark'][data-accent=…]`) | notes-v6@57c25ea2 2026-10-28 | notes-v6@1bae3e15 2026-10-28 | E6 | `--accent-text` sombre, `--accent-on-action` (non documenté) | |
| `--accent-text` `#ffe27a` / `#d8c7ff` dans `:root` ambre et lilas | notes-v6@57c25ea2 | notes-v6@1bae3e15 | E6 | `#594000` clair, `#5634a4` lilas clair | constat de revue (1,27:1) |
| `--accent-text` sous `data-theme='system'` (3 définitions) | notes-v6@1f5a70d2 / main | non fusionné : retiré en notes-v6@d11bb77c 2026-10-29 (branche BR1) | E6 | — | toujours présent dans main à HEAD |
| littéraux de `changelog.css` : `rgba(79, 70, 229, 0.11)` (dégradé hero), `#a5b4fc`, `#f9fafb`, `#d1d5db`, `#4f46e5`, `#312e81`, `#e0e7ff`, `#6366f1`, `#6b7280`, `rgba(17, 24, 39, 0.96)`, `#c7d2fe`, `#4b5563`, `#374151`, `#9ca3af`, `#1f2937`, `#111827`, `#e5e7eb`, `#818cf8` | mindspace-old@83de6dd4 2026-11-05 05:27 | remplacés par `var(--ms-*)` mindspace-old@28bcfe04 2026-11-05 05:41 | E8 | `--ms-improvement`, `--ms-text`, `--ms-secondary`, `--ms-accent-strong`, `--ms-hover`, `--ms-muted`, `--ms-canvas`, `--ms-accent` (liste partielle de l'entrée) | |
| halo de nœud `rgba(99, 102, 241, 0.18)`, compteur de filtre `rgba(255, 255, 255, 0.19)`, ombres `rgba(0, 0, 0, 0.08)` et `rgba(0, 0, 0, 0.7)` | mindspace-old@83de6dd4 | mindspace-old@7e3da2f4 2026-11-05 11:36 (fichier supprimé, 340 lignes) | E8 | aucun | |
| classes Tailwind du hub Paramètres (`gray-400` à `gray-800`, `red-300`, `bg-black/75`, `emerald`/`indigo`/`amber` 900 et 200) | mindspace-old@d5c96cef 2026-11-03 14:26 | SettingsHub supprimé mindspace-old@7d72e331 2026-11-05 11:36 ; étiquettes → `--tag-*` mindspace-old@931f56a2 | E8 | `--tag-feature`, `--tag-improvement`, `--tag-fix` | `bg-black/75` encore dans DataManagementPanel à HEAD |
| palette P1 codée en dur (`#1f2937`, `#4b5563`, `#374151`, `#9ca3af`, `#e5e7eb`) | mindspace-old@99c91a87 2026-11-03 11:51 | remplacée mindspace-old@b44de130 2026-11-05 05:40 | E8 | `--ms-surface`, `--ms-border`, `--ms-hover`, `--ms-muted`, `--ms-text` | |
| `--ms-glass-bg` `rgb(255 255 255 / 0.72) / rgb(32 33 39 / 0.72)`, `--ms-glass-border` `rgb(0 0 0 / 0.1) / rgb(255 255 255 / 0.12)`, `--ms-glass-shadow` | mindspace-core@128050ce 2026-11-10 | mindspace-core@5469a8ab 2026-11-11 | E9 | `--ms-surface` et `--ms-border` (opaques) | décision flat |
| onglet actif et outil enfoncé en fond ambre (`--ms-accent` / `--ms-on-accent`) | mindspace-core@128050ce 2026-11-10 (onglet), mindspace-core@93b47014 2026-11-10 (outil) | mindspace-core@5469a8ab | E9 | paire inversée `--ms-text` / `--ms-bg` | |
| bouton `.ms-dock__new` sans fond, texte `--ms-text` | mindspace-core@128050ce | mindspace-core@5469a8ab | E9 | `.ms-fab` fond ambre | |
| `-webkit-tap-highlight-color: transparent` | mindspace-core@128050ce | mindspace-core@5469a8ab | E9 | jeton opaque | `transparent` interdit en flat |
| `--ms-surface` sombre `#1b1c21`, `--ms-focus` sombre `#7e52e8` | mindspace-core@128050ce | mindspace-core@5469a8ab | E9 | `#1e1e22` ; `var(--ms-accent-pro)` | présenté aussi dans la matrice |

## 5. Éléments propres à une seule version

- **E0** (notes-v3@b6647a04 2026-10-09) : `--color-accent-hover`, `--color-accent-ring`, `--color-border-input`, `--color-pane`, `--color-toast-action` (voir § 4).
- **E1** : `--glass-press` (notes-v3@4da62555) ; types de changement `[data-kind]` (notes-v3@d6af8790 2026-10-19) ; lignes de diff (notes-v3@ce4f8459 2026-10-31) ; ligne et tuile de Réglages teintées (notes-v3@47c570df 2026-10-31).
- **E2** : palette bleue (`--primary` `#2563eb / #60a5fa`, `--primary-soft`), dégradés `#3790ff` et `#38bdf8`, `--warning`, fenêtre flottante (notepad-pwa@3c6f6152 à @76dfefe5, 2026-10-20).
- **E3** : `--bg-elevated`, `--card-muted`, `--accent-ink`, `--accent-soft`, `--text-soft`, `--select-soft`, `--success` `#1f8a5d`, halo `.folder-dot` (notes-4@94f8e515 2026-10-22 ; halo notes-4@6f00cf58).
- **E4** : `--color-accent-stroke`, `--color-raised`, `--color-shade`, `--veil-photo`, `--glass-nav`, `--glass-solid` (notes-v5@82aa90c2 2026-10-21) ; look Minimal (notes-v5@feebaaea 2026-11-10) ; couleurs du croquis `--sketch-*` (notes-v5@1c1fb148 2026-11-11) ; `data-high-contrast` (notes-v5@1c1fb148).
- **E5** : `--surface-strong`, `--card`, `--highlight`, quatre couleurs de note (notes-svelte@2923c47d 2026-10-22).
- **E6** : `--accent-action`, `--accent-ink`, `--card-tint`, `--sidebar`, `--good-dot`, `--scrim-editor`, `--scrim-onboarding`, `--border-control`, les huit `--opacity-*`, `--swatch-*` (notes-v6@57c25ea2 2026-10-28 à @c80dbb09 2026-10-31).
- **E7** : palette de dessin à six couleurs et couleurs du code QR (notes-aistudio@6dbe9114 2026-11-05 ; références A2 de l'entrée), `--color-oled-card` (notes-aistudio@d2819fcc 2026-11-02), `--color-separator` (d2819fcc).
- **E8** : `--ms-secondary`, `--ms-feature`, `--ms-fix`, `--ms-improvement`, `--tag-*`, `--destructive`, bordure de note active `#ca9b18` (mindspace-old@62846504 2026-11-05), thème lilas (mindspace-old@55eb1028 2026-11-05 18:05).
- **E9** : `--ms-accent-pro` (mindspace-core@5469a8ab 2026-11-11), règles `forced-colors` (mindspace-core@128050ce 2026-11-10), `--ms-glass-shadow`, fond de `::backdrop` en couleur de page (mindspace-core@4381e483 2026-11-11).

## 6. Contradictions et trous

Contradictions
1. **Lilas** : E1, E4 et E7 écrivent `#b9a2f5` (`--accent-lilac`) ; E6, E8 et E9 écrivent `#b99ff5`. Valeurs proches, hex distincts, aucune raison écrite.
2. **E8, enveloppe** : `theme-color` et manifest restent `#111827` (mindspace-old@41a60f54 2026-11-03, @d5c96cef) alors que la palette app est `#faf9f6 / #121316` depuis mindspace-old@55eb1028 2026-11-05 (contradiction notée dans l'entrée).
3. **E4, enveloppe** : `theme-color` `#F4F5F8 / #0B0C0F` (notes-v5@945cd023) contre manifest `#EEF0F6` « jamais modifié ». Une balise statique ne suit pas le look (design-teardown).
4. **E2, enveloppe** : `theme-color` `#111827` dans `index.html` contre `#0f172a` dans le HTML de `src/main.js` (dès B) ; manifest `#0b1020`.
5. **E9, lilas** : `--ms-accent-pro` est déclaré « aucun emploi » mais sert d'anneau de focus en mode sombre (entrée mindspace-core). Même écart en E8 : `--ms-accent-lilac` « aucun usage » alors que le thème lilas l'utilise comme accent.
6. **Contraste de `--color-accent-deep`** : E1 (notes-v3@fe7ee2da) écrit ≥7:1 (7,9 sur fond, 9,0 sur cartes) ; E7 écrit ≥4,5:1 avec 7:1 en contraste renforcé et les mêmes 7,9 / 9,0 ; E4 écrit ≥4,5:1. Les valeurs de jeton sont les mêmes.
7. **E8, nom de jeton** : l'entrée E8 cite « `--ms-lilac` jamais utilisé » alors que le jeton se nomme `--ms-accent-lilac`.
8. **E6, DESIGN.md** : le texte (V4) documente Pencil Muted à 4,2:1 sur Canvas (échec AA) ; la V5 documente ≥7,52:1. Ce n'est pas un conflit mais le texte V4 ne dit pas si les règles « One Lamp », « Ink-Not-Light », « Muted-on-Sheet » survivent à la réécriture de c80dbb09 (la palette nommée a été retirée ; le reste n'est pas couvert).
9. **E4, Minimal** : opt-in, sans règle de premier affichage ni contraste mesuré (« accessible opaque palette » sans chiffre).

Trous
10. **E0 → E1** : quinze jetons d'E0 n'ont pas d'équivalent en E1 (voir § 4) ; la reprise en source (notes-v3@4da62555) ne dit pas pourquoi. E0 n'a aucune source : valeurs lues dans le CSS minifié (`#rrggbb`, alpha en 8 chiffres).
11. **E4, `--alpha-*`** : utilisés par E4 (`var(--alpha-faint)`, etc.) mais leurs valeurs ne sont pas listées dans l'entrée ; cellule `?` dans la matrice.
12. **E4, valeurs effectives** : les valeurs de `tokens.css :root` sont masquées par `looks.css` pour le look Verre (fond, carte, éditeur, verre, voile, surface posée). La matrice affiche l'état par défaut du look Verre ; les états intermédiaires sont au § 3.
13. **E6** : aucune donnée sur `theme-color`, manifest, icône (`?`). **E0, E1, E5, E6, E7** : couleur d'icône non couverte par cette catégorie (voir `icons.md`). **E5** : couleurs de note non adaptées au sombre ; `--card` défini et non utilisé.
14. **E8, alias** : la cible de `--ms-secondary` n'est pas écrite explicitement (cinq alias, quatre cibles dans l'entrée) ; la matrice la rattache à `--ms-muted-fg`. Le sort de la classe Tailwind `red-300` après la suppression de SettingsHub n'est pas précisé. `--ms-canvas` de `:root` reste `#111827` à HEAD.
15. **E7** : tous les jetons ont pour première apparition notes-aistudio@9021b9bc (application importée), sauf OLED et `--color-separator` (d2819fcc) ; les entrées A1 à A3 ne contiennent aucun autre changement de couleur. La date de pose de la règle sémantique de tokens.css n'est pas séparable du commit d'import.
16. **E3** : aucune raison écrite pour les changements N0 → N1 ; seuls les jours (2026-10-22) sont connus. Pas de contraste documenté en E2, E3, E5.
17. **E2** : le CSS n'existe qu'en A, B, C (fichiers permutés) ; « dernier état » = dernier CSS connu (C), non HEAD.
18. **Hors couleurs** : les entrées contiennent des jetons qui ne sont pas des couleurs (`--text-xs`, `--text-sm`, `--text-md` en E6 ; `--h` `12px` en E7) : non repris dans la matrice, à chercher dans la typographie et les tailles. Les ombres colorées sont dans `elevation-motion.md` ; seul le halo `--color-accent-glow` est repris ici.
19. **Références** : toutes les valeurs de E5 portent « S1 à HEAD » (quatre commits le même jour) ; toutes celles de E7 portent la référence d'import notes-aistudio@9021b9bc, hors OLED et séparateur.
20. **Notations** : E0 est minifié (`#fff`, `#0000`), E1 à E7 utilisent `light-dark(...)` ; E2, E3, E5 utilisent `rgba(r,g,b,a)` ; E4 et E8 mêlent `rgb(r g b / %)` et hex 8 chiffres. Les valeurs sont conservées telles quelles ; `#1c1c1e` (E4) et `#1C1C1E` (E7) sont identiques à la casse près et restent distinguées.

## 7. Palette par usage sémantique

Un sens = une couleur portante, dans une version. « Posé » = première réf où le sens est écrit ou appliqué ; « changé » = changement de couleur portante ou de règle ; « retiré » = fin du sens. Les cellules `—` = aucun événement trouvé dans les entrées.

| sens | version | couleur portante | posé | changé | retiré | source |
|---|---|---|---|---|---|---|
| ambre = créer et notes épinglées ; focus sombre ; boutons principaux encre ; coches vertes | E1 | `--color-accent` `#f4c542` | notes-v3@35c0380c 2026-10-21 | — (valeur constante jusqu'à HEAD) | — | message de commit et changelog : « L'ambre est réservé à la création et aux notes épinglées ; le contour du focus est sombre et se voit partout » |
| un sens par couleur ; un choix se montre teinté et cerclé, jamais en noir | E1 | toutes | notes-v3@d6af8790 2026-10-19 | — | — | changelog 26.10.19.2, commentaire de tokens.css |
| rouge = micro et suppression ; orange = dates ; vert = photos (couleurs système par type de note `KIND_TONE`) | E1 | `--tone-red` `#ff3b30 / #ff453a`, `--tone-orange`, `--tone-green` | notes-v3@801d11fb 2026-10-18 | `yellow` : accent en encre → accent (notes-v3@ba6e7b28 2026-10-19) | — | `src/config.ts`, tokens.css |
| ambre = action principale (bouton primaire, FAB, halo de dossier) ; bleu `--select` = sélection et focus | E3 | `--accent` `#f6c453 → #f4c542` ; `--select` `#1d4ed8 / #8ab4ff` | notes-4@94f8e515 2026-10-22 | ambre `#f6c453 → #f4c542` notes-4@28ad8ce4 | — | entrée E3 |
| ambre = créer et épinglé (le « + », la tuile Note) ; bleu = sélection, liens ; rouge = supprimer, enregistrement vocal ; vert = fait, activé ; dossiers = organisation seulement | E4 | `#f4c542` ; `#0062cc / #0a84ff` ; `#d70015 / #ff6961` ; `#1e7a35 / #40a970` ; `--folder-*` | jetons notes-v5@b1f17318 2026-10-21 | bleu clair `#0a84ff` → `#0062cc` (3,6:1 sur blanc) ; encre de focus `var(--color-text)` notes-v5@82aa90c2 | tons `--tone-*` notes-v5@82aa90c2 | colonne « usage » de l'entrée ; design-teardown §5 |
| encre = focus, boutons principaux, progression ; ambre = créer et épinglé ; bleu = sélection, liens ; rouge = supprimer, enregistrement ; vert = fait, activé ; dossiers = organisation seulement | E7 | `--color-focus` `#16171b / #f2f3f7`, `--accent-amber` `#f4c542`, `--color-select`, `--color-danger`, `--color-success`, `--folder-*` | notes-aistudio@9021b9bc 2026-10-31 (import) | — | — | commentaire de tokens.css : « One meaning per colour, everywhere — a colour never decorates » |
| ambre = action principale (créer, focus) ; highlight = sélection (onglet actif, option de thème) | E5 | `--accent` `#D9A35A / #E3B36C` ; `--highlight` `#EFDAB2 / #3A2D1B` | notes-svelte@2923c47d 2026-10-22 | — | — | entrée E5 |
| « One Lamp Rule » (un seul accent, ~10 % d'une vue ; ambre = action, sélection, emplacement ; jamais fond de section) ; « Ink-Not-Light » (pas de texte ambre sur clair) ; « Muted-on-Sheet » | E6 | ambre `#f4c430`, texte d'accent `#594000 / #ffe27a` | notes-v6@1f5a70d2 2026-10-29 (DESIGN.md V4) | texte d'accent `#ffe27a → #594000` notes-v6@1bae3e15 2026-10-28 (réf antérieure à V4 : valeur) | le texte des règles n'est pas couvert après notes-v6@c80dbb09 2026-10-31 (DESIGN.md réécrit, palette nommée retirée) | DESIGN.md |
| lilas = accent alternatif (`data-accent='lilac'`) | E1, E4, E6, E7 | `#b9a2f5` (E1, E4, E7) ; `#b99ff5` (E6) | E6 notes-v6@57c25ea2 2026-10-28 ; E1 notes-v3@fbf13b31 2026-10-24 ; E4 notes-v5@b1f17318 ; E7 notes-aistudio@9021b9bc | — | — | entrées |
| ambre = actif et création (bouton Créer, lien de rail actif, note active, outil enfoncé, bouton Épingler pressé, poignée de colonne de tableau) ; « a color on its own must not communicate state » ; boutons ambre à texte sombre | E8 | `--ms-accent-amber` `#f4c430` + `--ms-accent-amber-fg` `#1a1a1a` | mindspace-old@55eb1028 2026-11-05 18:05 ; DESIGN_SYSTEM.md de556ab 2026-11-05 18:09 | — | — | DESIGN_SYSTEM.md |
| rouge = « Supprimer définitivement » et erreur de capture rapide ; vert = case de tâche, pastille « Enregistré », succès de capture rapide ; lilas = aucun usage ; focus = lilas | E8 | `--ms-danger` `#b3261e / #f2b8b5` ; `--ms-success` `#2e7d32 / #4caf50` ; `--ms-accent-lilac` ; `--ms-focus-ring` `#7e52e8 / #b99ff5` | mindspace-old@55eb1028 2026-11-05 18:05 | accent d'interface indigo → violet `#6b3dd0` mindspace-old@96b634f1 2026-11-06 22:10 | — | `style.css`, `git grep` rapporté dans l'entrée |
| indigo = accent d'interface et catégories de version (Nouveauté vert, Correctif ambre, Amélioration indigo) | E8 (palette P2) | `--ms-accent` `#4f46e5 / #818cf8`, `--ms-feature`, `--ms-fix`, `--ms-improvement` | mindspace-old@591eb91e 2026-11-05 05:39 | indigo → violet @96b634f1 ; étiquettes `--tag-*` @931f56a2 | accent indigo remplacé @96b634f1 | entrée E8 |
| ambre = onglet actif, outil enfoncé ; focus violet historique `#7e52e8` | E9 ère Verre | `--ms-accent` `#f4c430` ; `--ms-focus` `#7e52e8` | mindspace-core@128050ce 2026-11-10 (onglet) ; @93b47014 2026-11-10 (outil) | focus sombre → `#b99ff5` @5469a8ab | ambre actif retiré @5469a8ab 2026-11-11 | fichier de jetons |
| ambre = créer (bouton « Nouvelle note » seulement) ; sélection = paire inversée `--ms-text` / `--ms-bg` ; lilas = premium, « aucun emploi » (réel : focus sombre) ; bordure 2 px `--ms-text` des boutons, champs, dialogue, rappel | E9 ère Flat | `--ms-accent` `#f4c430` ; `#1a1a1a / #f5f5f7` ; `--ms-accent-pro` `#b99ff5` | mindspace-core@5469a8ab 2026-11-11 | — | — | fichiers de jetons et commits |
| rouge = actions irréversibles et avertissements (« Supprimer définitivement », encadré de première sauvegarde) | E9 | `--ms-danger` `#b3261e / #ff8a80` | mindspace-core@e64c019e 2026-11-11 (PR #17) | — | — | « la couleur d'alerte reste réservée aux actions destructives » (rappel de sauvegarde, mindspace-core@822c9496 2026-11-11) |
| surlignage de recherche : aucune couleur ne porte l'état (gras + souligné) | E9 | couleurs du contexte | mindspace-core@1d3ce5c0 2026-11-11 | — | surlignage coloré `--color-highlight` : présent E0, E1, E4, E7, absent E9 | entrée E9 |
| bleu = sélection (valeur `--color-select`) | E0 | `#0062cc / #0a84ff` | notes-v3@b6647a04 2026-10-09 (valeur) | — | absent de E5, E6, E8, E9 (autres dépôts ; aucun événement de suppression documenté) | usage non écrit en E0 |
| bleu primaire = accent unique | E2 | `--primary` `#2563eb / #60a5fa` | notepad-pwa@3c6f6152 2026-10-20 | `--primary-soft` sombre 0.15 → 0.14 (B) | CSS supprimé notepad-pwa@a488cc67 | entrée E2 |

### Complément de l'orchestrateur : contraste forcé (`forced-colors: active`)
Cette matrice ne montre le mode contraste forcé qu'en E9. Les entrées par dépôt le citent dans cinq versions (vérifié dans `design-system/by-repo/*/` le 2026-11-14) :
- E1 `notes-v3@ba6e7b28` 2026-10-19 : bordure et sélection par couleurs système, `app.css`, 6 déclarations, repris dans `35c0380`.
- E4 `notes-v5@b1f17318` 2026-10-21 : 6 règles (`.glass`, `.card`, `.chip`, `.tile`, `.lib-tile`, bordure `1px solid CanvasText` ; sélection `outline: 3px solid Highlight`) ; les règles de bordure et de sélection d'origine sont remplacées par `notes-v5@2466c955` 2026-10-24.
- E7 `notes-aistudio@9021b9bc` 2026-10-31 : 6 règles à l'origine et à HEAD (copie de E1).
- E8 `mindspace-old@f4917c57` : repli `@media (prefers-reduced-transparency: reduce), (forced-colors: active)` qui rend `.ms-glass` opaque (fond `--ms-surface`, `backdrop-filter: none`).
- E9 `mindspace-core@128050ce` 2026-11-10 : bordures `CanvasText`, sélection `Highlight` / `HighlightText`, scénario navigateur S9.
Détail dans `elevation-motion.md`, section « mouvement réduit et contraste ».

Détail complet par dépôt : design-system/by-repo/<repo>/colors.md
