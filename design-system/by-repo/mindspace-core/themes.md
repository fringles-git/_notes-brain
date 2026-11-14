Source : mindspace-core, commits lus : 44, plage : 2026-11-10 à 2026-11-12

# Thèmes et « looks » — mindspace-core

Aucun sélecteur de thème dans l'interface, aucun attribut `data-theme`, aucun état de thème dans Zustand (`src/ui/store.ts` ne contient que `currentPage` et `setPage`). `CLAUDE.md` cite « thème » parmi les états d'UI possibles de Zustand (« navigation, modales, thème »), sans code. Les deux « looks » ci-dessous se sont succédé ; chacun a un mode clair et un mode sombre choisis par `prefers-color-scheme`.

## Looks nommés

| look | introduit | retiré | fichiers | description |
|---|---|---|---|---|
| Verre (nom employé par le dépôt : « îlot verre », classe `.ms-glass`, `--ms-glass-*`, « glassmorphism ») | mindspace-core@128050ce 2026-11-10 | mindspace-core@5469a8ab 2026-11-11 | `src/ui/tokens.css`, `ui.css`, `editor.css`, `notes.css` | dock et barre d'outils translucides (fond 72 % opaque, flou 20 px, saturation 1,4, ombre `0 8px 30px`), onglet actif ambre, jetons « placeholder » (« Colors are the owner's to decide: values below are stand-ins taken from the brain (MindSpace palette) ») |
| Flat (nom du dépôt : « Design flat », « design system », « palette MindSpace ») | mindspace-core@5469a8ab 2026-11-11 | - | `src/styles/tokens.css`, `app.css` | tout opaque ; cartes, dock, barre d'outils = `--ms-surface` + `--ms-border` ; ambre = créer ; sélection = paire inversée ; palette « décidée le 2026-11-11 » |
| Contraste forcé | mindspace-core@128050ce 2026-11-10 | - | `@media (forced-colors: active)` | bordures `CanvasText`, sélection `Highlight`/`HighlightText` dans les deux looks ; mindspace-core@37ceb889 2026-11-11 ajoute le scénario navigateur S9 |
| Papier, Acrylique, Terminal… | - | - | - | aucun autre look nommé dans ce dépôt |

## Différences de jetons, Verre contre Flat

| élément | Verre (128050ce) | Flat (5469a8ab) |
|---|---|---|
| `--ms-bg` | `#faf9f6` / `#121316` | identique |
| `--ms-text` | `#1a1a1a` / `#f5f5f7` | identique |
| `--ms-text-muted` | `#5c5c5c` / `#a9abb3` | identique |
| `--ms-accent` | `#f4c430` | identique |
| `--ms-on-accent` | `#1a1a1a` | identique |
| `--ms-surface` | `#ffffff` / `#1b1c21` | `#ffffff` / `#1e1e22` |
| `--ms-focus` | `#7e52e8` (les deux modes) | `#7e52e8` clair, `var(--ms-accent-pro)` = `#b99ff5` sombre |
| `--ms-border` | absent | `#e5e5e5` / `#333333` |
| `--ms-accent-pro` | absent | `#b99ff5` / `#b99ff5` |
| `--ms-glass-bg`, `--ms-glass-border`, `--ms-glass-shadow` | présents (alpha 0,72 / 0,1 / 0,12 et variantes sombres) | supprimés |
| `.ms-glass` | présente (dock, barre d'outils) | supprimée |
| `backdrop-filter` | `blur(20px) saturate(1.4)` | interdit, testé |
| Onglet actif | ambre | `--ms-text` sur `--ms-bg` |
| « + » Nouvelle note | sans fond | ambre |
| Surface de l'éditeur | sans cadre | carte |
| Repli `prefers-reduced-transparency` | présent | supprimé (sans objet) |
| Pile de z-index | 0 / 9 / 10 | identique |
| Rayons, espacements, cibles | identiques | identiques (pas de changement) |

## Ajouts au look Flat après 5469a8ab

| date | ref | ajout |
|---|---|---|
| 2026-11-11 | mindspace-core@0a15c7ce | `--ms-font-mono`, boutons `.ms-button` 2 px, encadré `.ms-warning`, boîte de phrase |
| 2026-11-11 | mindspace-core@4381e483 | `.ms-dialog`, `.ms-field`, `.ms-card`, `.ms-button--icon` |
| 2026-11-11 | mindspace-core@e64c019e | `--ms-danger`, `--ms-on-danger`, `.ms-button--danger`, `.ms-warning` en danger |
| 2026-11-11 | mindspace-core@1d3ce5c0 | `.ms-search`, `.ms-note-row__preview`, `.ms-note-row mark` |
| 2026-11-11 | mindspace-core@339dbce0 | `.ms-selectbar`, `.ms-note-row--select`, `.ms-note-row__check`, `.ms-note-row__text` |
| 2026-11-11 | mindspace-core@822c9496 | `.ms-reminder`, `.ms-reminder__text` |
| 2026-11-11 | mindspace-core@67a5541f | règles « ProseMirror base » (gapcursor, `@keyframes ProseMirror-cursor-blink`) |

## Observations

- Le dépôt écrit que les jetons `--ms-text-muted`, `--ms-on-accent` et `--ms-focus` ont été « ajoutés pour la lisibilité (hors liste du propriétaire) » à mindspace-core@5469a8ab ; ils existaient déjà, avec les mêmes valeurs claires, dans le fichier de l'ère Verre (mindspace-core@128050ce). Ils sont « hors liste » de la palette du propriétaire, pas nouveaux dans le dépôt.
- Seule la valeur sombre de `--ms-surface` (`#1b1c21` → `#1e1e22`) et celle de `--ms-focus` en sombre (`#7e52e8` → `#b99ff5`) changent entre les deux looks ; les autres couleurs reprises du look Verre sont conservées telles quelles.
