Source : notes-4, commits lus : 13 (hors 2 fusions sans contenu propre), plage : 2026-10-21 à 2026-11-09

Références : N0 = notes-4@94f8e515 2026-10-22, N1 = notes-4@28ad8ce4 2026-10-22, N2 = notes-4@6f00cf58 2026-10-22, N3 = notes-4@854f07b5 2026-10-22, N4 = notes-4@8150588e 2026-10-22 (fusionné en main par fea834d7 le 2026-10-22, état "HEAD" de main). Les commits 28ad8ce4, 6f00cf58 et 854f07b5 contiennent des fichiers aux contenus permutés (le CSS de tokens est dans src/lib/styles/base.css, etc.) ; 8150588e remet chaque contenu à sa place sans changer les valeurs de design (vérifié par comparaison des contenus). Les valeurs ci-dessous sont lues par contenu, pas par nom de fichier.

Aucune police chargée (pas de @font-face, de `<link>`, ni de paquet fontsource) : Inter n'est qu'un nom de pile.

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| --font-ui | Inter, "Segoe UI", sans-serif | tokens.css | N0 | HEAD | source : système (ou Inter si installée localement) |
| --font-display | "Inter", "Segoe UI", sans-serif | tokens.css | N0 | HEAD | défini, jamais lu par un composant |
| application de la police | `:root { font-family: var(--font-ui); line-height: 1.5; font-weight: 500 }` | tokens.css | N0 | HEAD | `body { font-family: var(--font-ui) }` ajouté en N1 |
| h1 | clamp(2rem, 4vw, 3.2rem), weight 800, letter-spacing -0.05em | +page.svelte | N0 | REMPLACÉE en N1 | |
| h1 | clamp(2rem, 6vw, 3.5rem), weight 800, letter-spacing -0.05em | +page.svelte | N1 | HEAD | |
| .eyebrow | 0.7rem, weight 800, majuscules, letter-spacing 0.12em | +page.svelte | N0 | HEAD | |
| .title-input | clamp(1.5rem, 2vw, 2.5rem), weight 800, letter-spacing -0.04em | +page.svelte | N0 | REMPLACÉE en N1 | |
| .title-input | clamp(1.5rem, 4vw, 2.6rem), weight 800, line-height 1.1, letter-spacing -0.04em | +page.svelte | N1 | HEAD | |
| .body-input | line-height 1.6 | +page.svelte | N0 | HEAD | taille héritée |
| .panel-head | 0.85rem (N0), 0.82rem (N1 à HEAD), weight 700 | +page.svelte | N0 | HEAD | |
| .folder-badge | 0.8rem | +page.svelte | N0 | HEAD | |
| .search-box | 0.85rem, weight 700 | +page.svelte | N2 | HEAD | |
| .folder-card strong, .search-result strong, .settings-item strong | 0.96rem | +page.svelte | N2 | HEAD | |
| .dock-item | weight 700, font-size 0.78rem | Dock.svelte | weight N0 ; 0.78rem N1 | HEAD | N0 sans taille propre |
| .fab | 2rem, weight 700 | Dock.svelte | N0 | HEAD | |
| .button | weight 700 ; .compact 0.88rem | Button.svelte | N0 | HEAD | |
| NoteCard h3 | 1.2rem (N0), 1.1rem + line-height 1.2 + letter-spacing -0.02em (N1 à HEAD) | NoteCard.svelte | N0 | HEAD | |
| NoteCard .meta, .footer | 0.75rem (N0), 0.74rem (N1) | NoteCard.svelte | N0 | HEAD | |
| NoteCard p | line-height 1.5 (N1), clamp 3 lignes | NoteCard.svelte | N1 | HEAD | |
| html lang | en (N0) puis fr (N1) | app.html | N0 | HEAD | |
| polices supprimées | aucune | | | | |
