Source : notes-4, commits lus : 13 (hors 2 fusions sans contenu propre), plage : 2026-10-21 à 2026-11-09

Références : N0 = notes-4@94f8e515 2026-10-22, N1 = notes-4@28ad8ce4 2026-10-22, N2 = notes-4@6f00cf58 2026-10-22, N3 = notes-4@854f07b5 2026-10-22, N4 = notes-4@8150588e 2026-10-22 (fusionné en main par fea834d7 le 2026-10-22, état "HEAD" de main). Les commits 28ad8ce4, 6f00cf58 et 854f07b5 contiennent des fichiers aux contenus permutés (le CSS de tokens est dans src/lib/styles/base.css, etc.) ; 8150588e remet chaque contenu à sa place sans changer les valeurs de design (vérifié par comparaison des contenus). Les valeurs ci-dessous sont lues par contenu, pas par nom de fichier.

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| --shadow-1 clair | 0 1px 2px rgba(15,23,42,0.08) | tokens.css | N0 | HEAD | |
| --shadow-2 clair | 0 12px 28px rgba(15,23,42,0.12) | tokens.css | N0 | HEAD | FAB, carte au survol |
| --shadow-1 sombre | 0 1px 2px rgba(2,6,23,0.52) | tokens.css | N2 | HEAD | |
| --shadow-2 sombre | 0 18px 34px rgba(2,6,23,0.68) | tokens.css | N2 | HEAD | |
| flou (verre) dock-shell | backdrop-filter: blur(18px) | Dock.svelte | N0 | HEAD | aucune saturation |
| flou panneaux | blur(16px) (N0) puis blur(18px) (N1 à HEAD) | +page.svelte | N0 | HEAD | |
| transparence | --panel rgba(255,255,255,0.7) etc. | voir colors.md | N0 | HEAD | |
| z-index | 20 (`.dock`, position fixed) | Dock.svelte | N0 | HEAD | seule valeur |
| --ease | cubic-bezier(0.2, 0.8, 0.2, 1) | tokens.css | N0 | HEAD | |
| --duration-fast | 120ms | tokens.css | N0 | HEAD | |
| --duration-base | 220ms | tokens.css | N0 | HEAD | |
| transitions bouton | transform, background (fast) ; + box-shadow (N1) ; survol translateY(-1px), actif translateY(0) | Button.svelte | N0 | HEAD | |
| transitions dock-item | background, color (base) ; + transform (fast) dès N1 | Dock.svelte | N0 | HEAD | |
| transitions NoteCard | box-shadow, border-color (base), transform (fast) ; survol translateY(-1px) + shadow-2 | NoteCard.svelte | N0 | HEAD | |
| .settings-item.disabled | opacity 0.7 | +page.svelte | N2 | HEAD | |
| @keyframes | aucun | | | | |
| prefers-reduced-motion | aucun | | | | |
| prefers-color-scheme | lu en JS (matchMedia) pour initialiser le thème sombre, pas en CSS | +page.svelte | N2 | HEAD | |
