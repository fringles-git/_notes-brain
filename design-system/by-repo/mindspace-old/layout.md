Source : mindspace-old, commits lus : 222 (registre part1, diffs complets) + 16 commits de design hors part1 (tokens.css, style.css, DESIGN_SYSTEM.md, index.html ; diffs lus), plage : 2026-11-02 à 2026-11-10 (dernier commit de design : 2026-11-07)

# Mise en page

## Points de rupture

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| mobile (1 colonne) | max-width 650px | src/style.css | mindspace-old@99c91a87 2026-11-03 11:51 | SUPPRIMÉ @b44de130 2026-11-05 05:40 | remplacé par 767px |
| bureau Paramètres | min-width 768px | src/style.css | mindspace-old@d5c96cef 2026-11-03 14:26 | HEAD | |
| mobile | max-width 767px | src/style.css | mindspace-old@b44de130 | HEAD | |
| iPad | min 768px et max 1199px | src/style.css | mindspace-old@62846504 2026-11-05 18:08 | HEAD | bureau ≥ 1200px (DESIGN_SYSTEM.md @de556ab2) |
| requêtes de conteneur du journal | 720px et 410px | changelog.css | mindspace-old@83de6dd4 2026-11-05 05:27 | SUPPRIMÉ @7e3da2f4 11:36 | |
| Tailwind sm / md / lg | défauts | ChangelogTimeline, hub | mindspace-old@d5c96cef | HEAD | rail 3 colonnes à lg |

## Modèle de navigation par période

| disposition | géométrie | première apparition | dernier état | notes |
|---|---|---|---|---|
| barre latérale + espace de travail | `.shell` grid 250px 1fr, workspace max 950px, padding 40px | mindspace-old@99c91a87 2026-11-03 | partiellement remplacé @b44de130 ; `.shell` 250px minmax(0,1fr) | |
| Paramètres : sidebar sticky + tiroir mobile | 250px ; tiroir min(90vw,340px) ; workspace max 1050px puis 1120px | mindspace-old@d5c96cef ; 1120px @b44de130 | HEAD | |
| app v1 : barre latérale + zone de travail | minmax(220px,25%) 1fr ; iPad 2fr/6fr ; rail droit miroir ; barre basse | mindspace-old@62846504 2026-11-05 18:08 | REMPLACÉ @aeca0395 18:37 | dock bas 3 colonnes (fixed, z 45) |
| app v2 : trois volets (rail / liste / éditeur) | 78px minmax(245px,300px) minmax(0,1fr) ; rail replié 56px | mindspace-old@aeca0395 2026-11-05 18:37 | HEAD | |
| iPad v2 | rail 72px, liste minmax(215px,30%) ; droit : miroir ; bas : liste 32% | mindspace-old@aeca0395 | HEAD | replié : 56px @743c7e94 18:43 |
| tâches | zone de travail sur les colonnes 2 à fin (iPad : 1/3 droite, 1/-1 bas) | mindspace-old@e87af217 2026-11-05 18:42 | HEAD | |
| mobile v2 | liste d'abord, note ouverte masque liste et dock bas | mindspace-old@aeca0395 | HEAD | |
| dock d'édition | sticky bottom 8px + safe-area, radius 20px, extensible | mindspace-old@aeca0395 | HEAD | barre de sélection fixed z 60 |
| zones sûres | env(safe-area-inset-bottom) ; meta viewport sans viewport-fit=cover ; barre d'état iOS black-translucent | mindspace-old@62846504 ; index.html @d5c96cef | HEAD | incohérence : safe-area sans cover |
| hauteurs | 100dvh (app) ; min-height éditeur max(560px,78dvh), mobile 100dvh | mindspace-old@aeca0395 | HEAD | |
| marges bureau/mobile | workspace padding 0 25px ; mobile 0 15px + calc(90-100px + safe-area) | mindspace-old@aeca0395 | HEAD | |
| journal : rail Hostinger | 136px date / 44px nœud / carte | mindspace-old@83de6dd4 ; Tailwind lg 3 colonnes @1274fca0 | HEAD (Tailwind) | max-w 850px |
| préférences iPad | gauche / droite / bas (mindspace-appearance-v1) | mindspace-old@bf81e3ca 2026-11-05 18:03 | HEAD | jamais déduit automatiquement |
