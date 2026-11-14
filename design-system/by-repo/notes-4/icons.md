Source : notes-4, commits lus : 13 (hors 2 fusions sans contenu propre), plage : 2026-10-21 à 2026-11-09

Références : N0 = notes-4@94f8e515 2026-10-22, N1 = notes-4@28ad8ce4 2026-10-22, N2 = notes-4@6f00cf58 2026-10-22, N3 = notes-4@854f07b5 2026-10-22, N4 = notes-4@8150588e 2026-10-22 (fusionné en main par fea834d7 le 2026-10-22, état "HEAD" de main). Les commits 28ad8ce4, 6f00cf58 et 854f07b5 contiennent des fichiers aux contenus permutés (le CSS de tokens est dans src/lib/styles/base.css, etc.) ; 8150588e remet chaque contenu à sa place sans changer les valeurs de design (vérifié par comparaison des contenus). Les valeurs ci-dessous sont lues par contenu, pas par nom de fichier.

Aucune bibliothèque d'icônes : package.json ne contient ni lucide, ni autre paquet d'icônes (devDependencies : adapter, kit, vite-plugin-svelte, svelte, svelte-check, typescript, vite). Les contrôles utilisent du texte : `+` dans `.fab`, libellés dans `.dock-item`.

| icône | source | empreinte | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| icône d'application "Notes" (carré arrondi crème, tuile ambre en dégradé, 4 barres sombres) | fichier `static/icon.svg` (au commit 28ad8ce4 le SVG est dans `src/routes/+page.ts` ; chemins permutés jusqu'à 8150588e) | ee54f29f | N1 | HEAD | viewBox 0 0 512 512, rx 120 fond #f5f7fb ; tuile x84 y84 344x344 rx 86, dégradé #f8d872 vers #f4c542 ; barres #20180a opacités 0.84 / 0.82 / 0.7 / 0.6. svg/icon-ee54f29f.svg. Référencée en favicon, apple-touch-icon et manifest (sizes "any", purpose "any maskable") |
| favicon | `<link rel="icon" href="/icon.svg" type="image/svg+xml">` dans app.html | - | N1 | HEAD | même fichier |
| apple-touch-icon | `<link rel="apple-touch-icon" href="/icon.svg">` | - | N1 | HEAD | SVG (pas de PNG) |
| theme-color / apple-mobile-web-app-* | app.html | - | N1 | HEAD | voir colors.md |
| icônes PNG, .ico | aucune | - | | | aucun fichier image dans l'historique |
| "+" du bouton FAB | caractère texte dans `Dock.svelte` (`.fab`, aria-label "Créer une note", font-size 2rem) | - | N0 | HEAD | aria-label "Create note" en N0, "Créer une note" depuis N1 |

Icône d'application : seul fichier `static/icon.svg` (empreinte de fichier git : f51ce59011ea78c98e99c0d0d0b03bf2c25ada06). Avant N1 (commit 94f8e515 à 16d7560e) l'appli n'avait aucune icône, aucun manifest et aucun favicon.
