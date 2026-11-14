Source : mindspace-old, commits lus : 222 (registre part1, diffs complets) + 16 commits de design hors part1 (tokens.css, style.css, DESIGN_SYSTEM.md, index.html ; diffs lus), plage : 2026-11-02 à 2026-11-10 (dernier commit de design : 2026-11-07)

# Thèmes et "looks"

Aucun look nommé Verre / Papier / Acrylique. Trois thèmes (data-theme) ; le verre est un matériau spécifié, jamais appliqué à un écran (voir elevation-motion.md).

| thème | différences de jetons | introduit | retiré / dernier état | notes |
|---|---|---|---|---|
| sombre par défaut (gris-bleu) | canvas #111827, surface #1f2937, accent #818cf8 / #4f46e5 | mindspace-old@99c91a87 2026-11-03 (hex) ; jetons @591eb91e 2026-11-05 05:39 | valeurs de base de :root, écrasées par data-theme | |
| clair "slate" | canvas #f8fafc, texte #0f172a, accent #4f46e5 (media light et data-theme=light) | mindspace-old@77149a05 2026-11-05 06:10 | REMPLACÉ par la palette chaude @96b634f1 2026-11-06 22:10 | |
| light (chaud) | bg #faf9f6, fg #1a1a1a, ambre #f4c430, accent #6b3dd0 | mindspace-old@55eb1028 2026-11-05 18:05 ; unifié @96b634f1 | HEAD | |
| dark (chaud) | bg #121316, fg #f5f5f7, surface #1e2025, accent #c7b4f7 / #6942ae, focus #b99ff5 | mindspace-old@55eb1028 ; unifié @96b634f1 | HEAD | |
| lilac | bg #faf8ff, fg #241b35, lilas #7e52e8, accent #6b3dd0 (était #7e52e8) | mindspace-old@55eb1028 ; accent @96b634f1 | HEAD | |
| sélection du thème | AppearancePage : Clair, Sombre, Lilas ; défaut prefers-color-scheme ; clé mindspace-appearance-v1 | mindspace-old@bf81e3ca 2026-11-05 18:03, @9f8ab235 | HEAD | thème restauré sur chaque route @2f1e903e 2026-11-06 |
| "Liquid Glass" | jetons glass-tint/rim/blur, .ms-glass | mindspace-old@78997d3f / @f4917c57 2026-11-05 14:00 | défini, inutilisé ; opaque imposé au dock, rail, barres @de556ab2 18:09 | repli opaque en reduced-transparency / forced-colors |
