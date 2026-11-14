Source : notes-v3, commits lus : 135 (9 lignée notes-site, 83 lignée source main, 43 builds notes-v3-site), plage : 2026-10-09 à 2026-10-31

# Icônes

Aucune bibliothèque d'icônes (ni lucide, ni autre : `git log -S"lucide-react"` ne trouve rien dans package.json ; le mot « translucides » du changelog est le seul faux positif) : toutes les icônes sont des fragments SVG en ligne dans un objet JS, rendus par `<svg viewBox="0 0 24 24">` avec les traits posés en CSS (règle `svg`). Dépendances d'interface à HEAD : @fontsource-variable/figtree, react, react-dom, zustand.

Convention des fichiers `svg/<nom>-<empreinte>.svg` : viewBox 0 0 24 24, `fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"`, stroke-width 2 (bundle notes-site, `svg{stroke-width:2px;width:var(--size-icon)}` 22px) ou 1.75 (source, `svg{width:22px;height:22px;stroke-width:1.75}`). Empreinte = 8 premiers caractères du sha1 du fragment de tracé normalisé (espaces entre balises supprimés).

## Icônes en ligne (une ligne par tracé)

| icône | source | empreinte | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| alignCenter | SVG en ligne dans src/ui/icons.tsx | cdc05398 | notes-v3@9e7d5dd7 2026-10-29 | HEAD | trait 1.75 (CSS svg) ; fichier svg/alignCenter-cdc05398.svg |
| alignLeft | SVG en ligne dans src/ui/icons.tsx | c7c63ac7 | notes-v3@9e7d5dd7 2026-10-29 | HEAD | trait 1.75 (CSS svg) ; fichier svg/alignLeft-c7c63ac7.svg |
| alignRight | SVG en ligne dans src/ui/icons.tsx | cec60154 | notes-v3@9e7d5dd7 2026-10-29 | HEAD | trait 1.75 (CSS svg) ; fichier svg/alignRight-cec60154.svg |
| all | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | cb54ca93 | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/all-cb54ca93.svg |
| arrowRight | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 0e3224d2 | notes-v3@b99f70fc 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/arrowRight-0e3224d2.svg |
| attach | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 78a9a920 | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/attach-78a9a920.svg |
| audio | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 2dfdd927 | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/audio-2dfdd927.svg |
| back | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 5899fce0 | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/back-5899fce0.svg |
| bell | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 7d5a30b0 | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/bell-7d5a30b0.svg |
| biometric | SVG en ligne dans src/ui/icons.tsx | 7e595b57 | notes-v3@893b157b 2026-10-19 | HEAD | trait 1.75 (CSS svg) ; fichier svg/biometric-7e595b57.svg |
| bug | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 14bf43f5 | notes-v3@b99f70fc 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/bug-14bf43f5.svg |
| bullets | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 9a7c601c | notes-v3@637a0265 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/bullets-9a7c601c.svg |
| calendar | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | c1dfd79a | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/calendar-c1dfd79a.svg |
| camera | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 9b71b38e | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/camera-9b71b38e.svg |
| cards | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | c516fdcd | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/cards-c516fdcd.svg |
| check | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | e857cf71 | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/check-e857cf71.svg |
| checklist | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | fcadc6e7 | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/checklist-fcadc6e7.svg |
| close | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 3b0b8a9b | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/close-3b0b8a9b.svg |
| collapse | SVG en ligne dans src/ui/icons.tsx | 66a08b47 | notes-v3@c218aba2 2026-10-29 | HEAD | trait 1.75 (CSS svg) ; fichier svg/collapse-66a08b47.svg |
| doc | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 0b8d3922 | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/doc-0b8d3922.svg |
| download | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 4f86e2ac | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/download-4f86e2ac.svg |
| edit | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | cadbac7c | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/edit-cadbac7c.svg |
| expand | SVG en ligne dans src/ui/icons.tsx | 7568aa56 | notes-v3@c218aba2 2026-10-29 | HEAD | trait 1.75 (CSS svg) ; fichier svg/expand-7568aa56.svg |
| extract | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 522db1c6 | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/extract-522db1c6.svg |
| filter | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 56984e1d | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/filter-56984e1d.svg |
| folder | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 3cdb3c91 | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/folder-3cdb3c91.svg |
| folderNew | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 6d7112d5 | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/folderNew-6d7112d5.svg |
| graph | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 986d576e | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/graph-986d576e.svg |
| grip | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | e93ce473 | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/grip-e93ce473.svg |
| hand | SVG en ligne dans src/ui/icons.tsx | 7654db72 | notes-v3@4da62555 2026-10-18 | HEAD | trait 1.75 (CSS svg) ; fichier svg/hand-7654db72.svg |
| hash | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 71a61110 | notes-v3@43a8615b 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/hash-71a61110.svg |
| highlight | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | c2d37bf3 | notes-v3@637a0265 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/highlight-c2d37bf3.svg |
| history | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | b13eb3bc | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/history-b13eb3bc.svg |
| image | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 44374186 | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/image-44374186.svg |
| improve | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | f5620024 | notes-v3@b99f70fc 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/improve-f5620024.svg |
| info | SVG en ligne dans index.html (bundle notes-site, objet d'icônes) | 5563a367 | notes-v3@637a0265 2026-10-09 | SUPPRIMÉE notes-v3@9643242e 2026-10-09 | trait 2 (CSS svg) ; fichier svg/info-5563a367.svg |
| library | SVG en ligne dans src/ui/icons.tsx | 58d3d040 | notes-v3@4da62555 2026-10-18 | HEAD | trait 1.75 (CSS svg) ; fichier svg/library-58d3d040.svg |
| link | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | d7b2640c | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/link-d7b2640c.svg |
| list | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 499e714e | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/list-499e714e.svg |
| listReset | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | e954fec3 | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/listReset-e954fec3.svg |
| liveText | SVG en ligne dans src/ui/icons.tsx | c99f3604 | notes-v3@e15376fa 2026-10-19 | HEAD | trait 1.75 (CSS svg) ; fichier svg/liveText-c99f3604.svg |
| lock | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | a1ba290d | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/lock-a1ba290d.svg |
| mail | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | d8e93851 | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/mail-d8e93851.svg |
| mapPin | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | bc719aaa | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/mapPin-bc719aaa.svg |
| merge | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | d9b68b52 | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/merge-d9b68b52.svg |
| mic | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | b86154b5 | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/mic-b86154b5.svg |
| minus | SVG en ligne dans src/ui/icons.tsx | a09d0137 | notes-v3@d6af8790 2026-10-19 | HEAD | trait 1.75 (CSS svg) ; fichier svg/minus-a09d0137.svg |
| more | SVG en ligne dans index.html (bundle notes-site, objet d'icônes) | 74384d52 | notes-v3@b6647a04 2026-10-09 | REMPLACÉE par more-7a3d4c16 notes-v3@ea104c22 2026-10-15 | trait 2 (CSS svg) ; fichier svg/more-74384d52.svg |
| more | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 7a3d4c16 | notes-v3@ea104c22 2026-10-15 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/more-7a3d4c16.svg |
| move | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 0b4740a6 | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/move-0b4740a6.svg |
| numbers | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 5dc25e9d | notes-v3@637a0265 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/numbers-5dc25e9d.svg |
| offline | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 99ac30c3 | notes-v3@637a0265 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/offline-99ac30c3.svg |
| outline | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 480c55d4 | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/outline-480c55d4.svg |
| paste | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 71069abb | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/paste-71069abb.svg |
| pause | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | e85e1ed2 | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/pause-e85e1ed2.svg |
| phone | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | a5affc36 | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/phone-a5affc36.svg |
| pin | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | d079e25b | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/pin-d079e25b.svg |
| play | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 999041e5 | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/play-999041e5.svg |
| plus | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 083e7f93 | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/plus-083e7f93.svg |
| print | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 8329aae3 | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/print-8329aae3.svg |
| redo | SVG en ligne dans src/ui/icons.tsx | 215c80f8 | notes-v3@e30d2cdc 2026-10-29 | HEAD | trait 1.75 (CSS svg) ; fichier svg/redo-215c80f8.svg |
| restore | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 1b53c56e | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/restore-1b53c56e.svg |
| search | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | db61e26f | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/search-db61e26f.svg |
| selectAll | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 959c4c86 | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/selectAll-959c4c86.svg |
| settings | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 56cda94a | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/settings-56cda94a.svg |
| share | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | a0d06e5a | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/share-a0d06e5a.svg |
| slides | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 19d701aa | notes-v3@43a8615b 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/slides-19d701aa.svg |
| sort | SVG en ligne dans index.html (bundle notes-site, objet d'icônes) | 28c59bf3 | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉE notes-v3@4da62555 2026-10-18 | trait 2 (CSS svg) ; fichier svg/sort-28c59bf3.svg |
| sort | SVG en ligne dans src/ui/icons.tsx | 28c59bf3 | notes-v3@4a4da608 2026-10-18 | HEAD | trait 1.75 (CSS svg) ; fichier svg/sort-28c59bf3.svg |
| sparkle | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | d19d82d3 | notes-v3@637a0265 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/sparkle-d19d82d3.svg |
| stop | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | e8d7169f | notes-v3@b6647a04 2026-10-09 | SUPPRIMÉE notes-v3@369fe07a 2026-10-19 | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/stop-e8d7169f.svg |
| study | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | aaf5b02a | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/study-aaf5b02a.svg |
| table | SVG en ligne dans src/ui/icons.tsx | 6bf7141d | notes-v3@9e7d5dd7 2026-10-29 | HEAD | trait 1.75 (CSS svg) ; fichier svg/table-6bf7141d.svg |
| tableColAdd | SVG en ligne dans src/ui/icons.tsx | 0d907945 | notes-v3@9e7d5dd7 2026-10-29 | HEAD | trait 1.75 (CSS svg) ; fichier svg/tableColAdd-0d907945.svg |
| tableColRemove | SVG en ligne dans src/ui/icons.tsx | 7c15f562 | notes-v3@9e7d5dd7 2026-10-29 | HEAD | trait 1.75 (CSS svg) ; fichier svg/tableColRemove-7c15f562.svg |
| tableHead | SVG en ligne dans src/ui/icons.tsx | 852ca6fb | notes-v3@9e7d5dd7 2026-10-29 | HEAD | trait 1.75 (CSS svg) ; fichier svg/tableHead-852ca6fb.svg |
| tableMerge | SVG en ligne dans src/ui/icons.tsx | f118d7cf | notes-v3@9e7d5dd7 2026-10-29 | HEAD | trait 1.75 (CSS svg) ; fichier svg/tableMerge-f118d7cf.svg |
| tableRowAdd | SVG en ligne dans src/ui/icons.tsx | 40cc0397 | notes-v3@9e7d5dd7 2026-10-29 | HEAD | trait 1.75 (CSS svg) ; fichier svg/tableRowAdd-40cc0397.svg |
| tableRowRemove | SVG en ligne dans src/ui/icons.tsx | 5795cd7b | notes-v3@9e7d5dd7 2026-10-29 | HEAD | trait 1.75 (CSS svg) ; fichier svg/tableRowRemove-5795cd7b.svg |
| templates | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 6f605ee9 | notes-v3@43a8615b 2026-10-09 | SUPPRIMÉE notes-v3@369fe07a 2026-10-19 | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/templates-6f605ee9.svg |
| theme | SVG en ligne dans src/ui/icons.tsx | 6e681ba0 | notes-v3@2c7478e4 2026-10-31 | HEAD | trait 1.75 (CSS svg) ; fichier svg/theme-6e681ba0.svg |
| themeAuto | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | ccb1e06a | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/themeAuto-ccb1e06a.svg |
| themeDark | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 551d7c4d | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/themeDark-551d7c4d.svg |
| themeLight | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 4e4439fe | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/themeLight-4e4439fe.svg |
| tour | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 9cfd4f40 | notes-v3@637a0265 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/tour-9cfd4f40.svg |
| trash | SVG en ligne dans index.html (bundle notes-site) puis src/ui/icons.tsx | 404ee0cf | notes-v3@b6647a04 2026-10-09 | HEAD | trait 1.75 (CSS svg) ; 2 dans le bundle, 1.75 dans la source ; fichier svg/trash-404ee0cf.svg |
| undo | SVG en ligne dans src/ui/icons.tsx | e8218dd2 | notes-v3@e30d2cdc 2026-10-29 | HEAD | trait 1.75 (CSS svg) ; fichier svg/undo-e8218dd2.svg |

## Ensemble des noms d'icônes à chaque version (ajouts et retraits datés)

| commit | lignée | nombre d'icônes après | ajoutées | retirées | tracé modifié |
|---|---|---|---|---|---|
| notes-v3@b6647a04 2026-10-09 | bundle notes-site | 52 | 52 icônes (état initial de la lignée : voir tableau ci-dessus) |  |  |
| notes-v3@637a0265 2026-10-09 | bundle notes-site | 59 | bullets, highlight, info, numbers, offline, sparkle, tour |  |  |
| notes-v3@9643242e 2026-10-09 | bundle notes-site | 58 |  | info |  |
| notes-v3@b99f70fc 2026-10-09 | bundle notes-site | 61 | arrowRight, bug, improve |  |  |
| notes-v3@43a8615b 2026-10-09 | bundle notes-site | 64 | hash, slides, templates |  |  |
| notes-v3@ea104c22 2026-10-15 | bundle notes-site | 64 |  |  | more |
| notes-v3@4da62555 2026-10-18 | source | 65 | hand, library | sort |  |
| notes-v3@4a4da608 2026-10-18 | source | 66 | sort |  |  |
| notes-v3@d6af8790 2026-10-19 | source | 67 | minus |  |  |
| notes-v3@369fe07a 2026-10-19 | source | 65 |  | stop, templates |  |
| notes-v3@e15376fa 2026-10-19 | source | 66 | liveText |  |  |
| notes-v3@893b157b 2026-10-19 | source | 67 | biometric |  |  |
| notes-v3@9e7d5dd7 2026-10-29 | source | 77 | alignCenter, alignLeft, alignRight, table, tableColAdd, tableColRemove, tableHead, tableMerge, tableRowAdd, tableRowRemove |  |  |
| notes-v3@c218aba2 2026-10-29 | source | 79 | collapse, expand |  |  |
| notes-v3@e30d2cdc 2026-10-29 | source | 81 | redo, undo |  |  |
| notes-v3@2c7478e4 2026-10-31 | source | 82 | theme |  |  |

Le passage de la lignée notes-site (64 icônes à ea104c2) à la source v3 (65 à 4da6255) retire `sort` (rajoutée par 4a4da60 avec le même tracé) et ajoute `hand` et `library`. `info` est supprimée par 9643242, `stop` et `templates` par 369fe07.

## Icônes d'application (PWA, favicon, apple-touch)

| fichier | taille | empreinte (blob git) | référence | première apparition | dernier état | notes |
|---|---|---|---|---|---|---|
| icons/icon-192.png | 192×192 | a19309ba | notes-site : `git show b6647a0:icons/icon-192.png` ; notes-v3-site : `git show 244aab1:icons/icon-192.png` ; source : `git show 4da6255:public/icons/icon-192.png` | notes-v3@b6647a04 2026-10-09 (notes-site), notes-v3@244aab13 2026-10-18 (notes-v3-site), notes-v3@4da62555 2026-10-18 (source public/icons) | HEAD : même blob a19309ba (jamais modifié) | PNG, `git cat-file -s` = 4352 octets |
| icons/icon-512.png | 512×512 | c219ce8d | notes-site : `git show b6647a0:icons/icon-512.png` ; notes-v3-site : `git show 244aab1:icons/icon-512.png` ; source : `git show 4da6255:public/icons/icon-512.png` | notes-v3@b6647a04 2026-10-09 (notes-site), notes-v3@244aab13 2026-10-18 (notes-v3-site), notes-v3@4da62555 2026-10-18 (source public/icons) | HEAD : même blob c219ce8d (jamais modifié) | PNG, `git cat-file -s` = 12162 octets |
| icons/icon-maskable-512.png | 512×512 maskable | d47574f4 | notes-site : `git show b6647a0:icons/icon-maskable-512.png` ; notes-v3-site : `git show 244aab1:icons/icon-maskable-512.png` ; source : `git show 4da6255:public/icons/icon-maskable-512.png` | notes-v3@b6647a04 2026-10-09 (notes-site), notes-v3@244aab13 2026-10-18 (notes-v3-site), notes-v3@4da62555 2026-10-18 (source public/icons) | HEAD : même blob d47574f4 (jamais modifié) | PNG, `git cat-file -s` = 10702 octets |
| icons/apple-touch-icon.png | 180×180 (apple-touch) | 527a3a3d | notes-site : `git show b6647a0:icons/apple-touch-icon.png` ; notes-v3-site : `git show 244aab1:icons/apple-touch-icon.png` ; source : `git show 4da6255:public/icons/apple-touch-icon.png` | notes-v3@b6647a04 2026-10-09 (notes-site), notes-v3@244aab13 2026-10-18 (notes-v3-site), notes-v3@4da62555 2026-10-18 (source public/icons) | HEAD : même blob 527a3a3d (jamais modifié) | PNG, `git cat-file -s` = 4154 octets |

Favicon : `<link rel="icon" href="./icons/icon-192.png" type="image/png">` (index.html du bundle b6647a0 et de la source 4da6255, inchangé à HEAD) ; `<link rel="apple-touch-icon" href="./icons/apple-touch-icon.png">`. Aucun fichier `.svg` d'icône d'application dans le dépôt. Les PNG sont identiques (même blob) dans les trois lignées.

## Motifs SVG hors icônes

- `svg/acrylic-grain-7a4c4ce3.svg` : grain du style Acrylique, extrait de `--glass-shine: url("data:image/svg+xml,…")` dans src/styles/looks.css, première apparition notes-v3@3687c668 2026-10-31, dernier état HEAD (feTurbulence fractalNoise, 120×120, voile gris à 14 % d'opacité au plus).

- Sheets.tsx (LinkMap, Carte des liens) dessine ses nœuds en `<rect>`/`<circle>` JSX : le point de dossier passe de `<circle r=4>` à `<rect class="map-dot" rx=8/3>` à notes-v3@369fe07a 2026-10-19.

