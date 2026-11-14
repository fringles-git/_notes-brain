Source : mindspace-core, commits lus : 44, plage : 2026-11-10 à 2026-11-12

# Couleurs — mindspace-core

Deux « looks » successifs, voir `themes.md` : **Verre** (mindspace-core@128050ce 2026-11-10 → mindspace-core@5469a8ab 2026-11-11) puis **Flat** (depuis mindspace-core@5469a8ab 2026-11-11, état HEAD). Mode clair et mode sombre par `prefers-color-scheme` seulement (`color-scheme: light dark` sur `:root` depuis mindspace-core@128050ce) ; il n'y a pas de bascule manuelle ni d'attribut `data-theme` dans le code. Fichier des jetons : `src/ui/tokens.css` puis `src/styles/tokens.css`.

## Jetons de couleur, une ligne par valeur et par période

| jeton | valeur claire | valeur sombre | usage sémantique | première apparition | dernier état |
|---|---|---|---|---|---|
| `--ms-bg` | `#faf9f6` | `#121316` | fond de page ; texte sur sélection (paire inversée) | mindspace-core@128050ce 2026-11-10 | HEAD (inchangé) |
| `--ms-text` | `#1a1a1a` | `#f5f5f7` | texte ; fond de la sélection (onglet actif, outil enfoncé) ; bordure 2 px des boutons, champs, dialogue, rappel | mindspace-core@128050ce 2026-11-10 | HEAD (inchangé) |
| `--ms-text-muted` | `#5c5c5c` | `#a9abb3` | dates, placeholders, libellés d'onglets inactifs | mindspace-core@128050ce 2026-11-10 | HEAD (inchangé) |
| `--ms-accent` | `#f4c430` | `#f4c430` (même valeur ; redéclaré dans le bloc sombre depuis mindspace-core@5469a8ab) | ambre « casual » : créer. Seul emploi plat : bouton « + » Nouvelle note (`.ms-fab`) | mindspace-core@128050ce 2026-11-10 | HEAD (inchangé) |
| `--ms-on-accent` | `#1a1a1a` | `#1a1a1a` | texte sur ambre, sombre dans les deux modes | mindspace-core@128050ce 2026-11-10 | HEAD (inchangé) |
| `--ms-focus` (version 1, verre) | `#7e52e8` | `#7e52e8` (non redéclaré) | anneau de focus, « violet historique de MindSpace » | mindspace-core@128050ce 2026-11-10 | REMPLACÉE (sombre) mindspace-core@5469a8ab 2026-11-11 |
| `--ms-focus` (version 2, plat) clair | `#7e52e8` | - | anneau de focus clair | mindspace-core@128050ce 2026-11-10 | HEAD |
| `--ms-focus` (version 2, plat) sombre | - | `var(--ms-accent-pro)` = `#b99ff5` | anneau de focus sombre | mindspace-core@5469a8ab 2026-11-11 | HEAD |
| `--ms-surface` (version 1) | `#ffffff` | `#1b1c21` | cartes, dock, lignes (surface du look Verre : fond du repli, des lignes de liste) | mindspace-core@128050ce 2026-11-10 | REMPLACÉE (sombre) mindspace-core@5469a8ab 2026-11-11 |
| `--ms-surface` (version 2) | `#ffffff` | `#1e1e22` | cartes, dock, barre d'outils, champs : surface opaque + `--ms-border` | mindspace-core@5469a8ab 2026-11-11 | HEAD |
| `--ms-border` | `#e5e5e5` | `#333333` | bordure décorative des surfaces (dock, barre d'outils, lignes, cartes, séparateurs) | mindspace-core@5469a8ab 2026-11-11 | HEAD |
| `--ms-accent-pro` | `#b99ff5` | `#b99ff5` | lilas « premium » : réservé aux fonctions payantes, « aucun emploi » ; seul emploi réel : anneau de focus en mode sombre | mindspace-core@5469a8ab 2026-11-11 | HEAD |
| `--ms-danger` | `#b3261e` | `#ff8a80` | actions irréversibles et avertissements : fond du bouton « Supprimer définitivement » (`.ms-button--danger`), bordure de `.ms-warning` (encadré de première sauvegarde) | mindspace-core@e64c019e 2026-11-11 (PR #17) | HEAD |
| `--ms-on-danger` | `#ffffff` | `#1a1a1a` | texte sur `--ms-danger` | mindspace-core@e64c019e 2026-11-11 (PR #17) | HEAD |
| `--ms-glass-bg` | `rgb(255 255 255 / 0.72)` | `rgb(32 33 39 / 0.72)` | fond translucide de `.ms-glass` (dock, barre d'outils) | mindspace-core@128050ce 2026-11-10 | SUPPRIMÉ mindspace-core@5469a8ab 2026-11-11 |
| `--ms-glass-border` | `rgb(0 0 0 / 0.1)` | `rgb(255 255 255 / 0.12)` | bordure de `.ms-glass`, lignes de liste, diviseur du dock, soulignement du titre | mindspace-core@128050ce 2026-11-10 | SUPPRIMÉ mindspace-core@5469a8ab 2026-11-11 (remplacé par `--ms-border`) |
| `--ms-glass-shadow` | `0 8px 30px rgb(0 0 0 / 0.12)` | `0 8px 30px rgb(0 0 0 / 0.5)` | ombre portée de `.ms-glass` | mindspace-core@128050ce 2026-11-10 | SUPPRIMÉ mindspace-core@5469a8ab 2026-11-11 |

## Couleurs système (mode contraste forcé)

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| Bordure des surfaces en `forced-colors: active` | `CanvasText` | `@media (forced-colors: active)` de `ui.css`/`editor.css`/`notes.css` puis `app.css` | mindspace-core@128050ce 2026-11-10 (dock) | HEAD | liste de sélecteurs étendue au fil des commits : `.ms-editor__toolbar` (93b47014), `.ms-note-row` (8f85ad28), `.ms-editor__content` (5469a8ab), `.ms-phrase-box`, `.ms-card`, `.ms-dialog` (4381e483), `.ms-warning`, `.ms-button--danger` (e64c019e), `.ms-reminder` (822c9496) |
| Sélection en `forced-colors: active` | `Highlight` / `HighlightText` | `.ms-dock__item[aria-current='page']`, `.ms-tool[aria-pressed='true']` | mindspace-core@128050ce 2026-11-10 (onglet) ; mindspace-core@93b47014 2026-11-10 (outil) | HEAD | |

## Couleurs écrites hors des jetons

Obligatoires car ni le manifest ni les balises `<meta>` ne lisent le CSS. `tests/pwa.test.ts` les garde égales à `--ms-bg`.

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| `theme-color` clair | `#faf9f6` | `index.html`, `<meta name="theme-color" ... media="(prefers-color-scheme: light)">` | mindspace-core@87563ecf 2026-11-11 | HEAD | |
| `theme-color` sombre | `#121316` | `index.html`, `media="(prefers-color-scheme: dark)"` | mindspace-core@87563ecf 2026-11-11 | HEAD | |
| `background_color` et `theme_color` du manifest | `#faf9f6` | `public/manifest.webmanifest` | mindspace-core@87563ecf 2026-11-11 | HEAD | un seul `theme_color` possible dans le manifest (clair) |
| Fond de l'icône d'application | `#f4c430` | `public/icon.svg` `<rect fill>` | mindspace-core@87563ecf 2026-11-11 | HEAD | |
| Trait de la lettre « M » de l'icône | `#1a1a1a` | `public/icon.svg` `stroke` | mindspace-core@87563ecf 2026-11-11 | HEAD | |
| Fond du `::backdrop` du dialogue | `var(--ms-bg)` | `.ms-dialog::backdrop` | mindspace-core@4381e483 2026-11-11 | HEAD | « The backdrop is the page color, not a dimming layer » |

## Emplois par période (qui porte quelle couleur)

| emploi | ère Verre (128050ce → 5469a8ab) | ère Flat (depuis 5469a8ab) | première apparition de la version Flat |
|---|---|---|---|
| Onglet actif du dock (`aria-current='page'`) | fond `--ms-accent` ambre, texte `--ms-on-accent` | fond `--ms-text`, texte `--ms-bg` (paire inversée) | mindspace-core@5469a8ab 2026-11-11 |
| Onglet inactif | fond transparent, texte `--ms-text-muted` | fond `--ms-surface`, texte `--ms-text-muted` | mindspace-core@5469a8ab 2026-11-11 |
| Outil enfoncé de la barre (`aria-pressed='true'`) | fond `--ms-accent`, texte `--ms-on-accent` | fond `--ms-text`, texte `--ms-bg` | mindspace-core@5469a8ab 2026-11-11 |
| Bouton « + » Nouvelle note | couleur `--ms-text`, sans fond, glyphe `1.5rem` (`.ms-dock__new`) | fond `--ms-accent`, texte `--ms-on-accent` (`.ms-fab`) | mindspace-core@5469a8ab 2026-11-11 |
| Dock et barre d'outils | `.ms-glass` : fond `--ms-glass-bg`, bordure `--ms-glass-border`, ombre | fond `--ms-surface`, bordure `1px --ms-border` | mindspace-core@5469a8ab 2026-11-11 |
| Ligne de liste | fond `--ms-surface`, bordure `--ms-glass-border` | fond `--ms-surface`, bordure `--ms-border` | mindspace-core@5469a8ab 2026-11-11 |
| Surface de l'éditeur | aucun fond ni bordure | carte : `--ms-surface` + `1px --ms-border` | mindspace-core@5469a8ab 2026-11-11 |
| Champ titre | fond transparent | fond `--ms-bg` | mindspace-core@5469a8ab 2026-11-11 |
| Bouton « Supprimer définitivement » | n'existe pas | `.ms-button` (bordure `--ms-text`) puis plein danger | mindspace-core@e64c019e 2026-11-11 |
| Surbrillance de recherche (`mark`) | n'existe pas | gras + souligné, couleurs du contexte (`--ms-surface` / `--ms-text`) | mindspace-core@1d3ce5c0 2026-11-11 |
| Rappel de sauvegarde | n'existe pas | bordure `2px --ms-text`, fond `--ms-surface` ; « la couleur d'alerte reste réservée aux actions destructives » | mindspace-core@822c9496 2026-11-11 |
| Prise de tape mobile `-webkit-tap-highlight-color` | `transparent` | jeton opaque (`--ms-surface` ou `--ms-bg`) car `transparent` est interdit | mindspace-core@5469a8ab 2026-11-11 |

## Contrastes

Documentés par le dépôt (CLAUDE.md, mindspace-core@e64c019e 2026-11-11 et mindspace-core@5469a8ab 2026-11-11) : `on-danger` sur `danger` 6,54 clair / 7,62 sombre ; `danger` sur le fond 6,21 / 8,14 ; sur une carte 6,54 / 7,28 ; lilas en texte clair 2,1:1 (à ne jamais utiliser) ; `--ms-border` 1,2:1 en clair (« décoratif »). `tests/tokens.test.ts` exige 4,5:1 pour les paires texte (`text`/`bg`, `text`/`surface`, `text-muted`/`bg`, `text-muted`/`surface`, `on-accent`/`accent`, `bg`/`text`, puis `on-danger`/`danger`, `danger`/`bg`, `danger`/`surface`) et 3:1 pour `focus` sur `bg` et `surface`.

Valeurs que j'ai calculées moi-même (formule WCAG 2.x, non écrites dans le dépôt, vérifiables) :

| paire | clair | sombre |
|---|---|---|
| `text` sur `bg` | 16,53 | 17,06 |
| `text` sur `surface` | 17,40 | 15,26 |
| `text-muted` sur `bg` | 6,35 | 8,11 |
| `text-muted` sur `surface` | 6,69 | 7,25 |
| `on-accent` sur `accent` | 10,60 | 10,60 |
| `focus` sur `bg` | 4,68 | 8,26 |
| `focus` sur `surface` | 4,93 | 7,39 |
| `accent-pro` (lilas) sur `bg` | 2,14 | 8,26 |
| `border` sur `bg` | 1,20 | 1,47 |
| `border` sur `surface` | 1,26 | 1,31 |
| `accent` sur `bg` | 1,56 | 11,31 |

Les valeurs calculées pour `danger` et `on-danger` retombent sur les chiffres documentés.
