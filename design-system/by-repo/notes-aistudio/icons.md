Source : notes-aistudio, commits lus : 7 (hors fusion 20ad6c90), plage : 2026-10-31 à 2026-11-06

Références : A0 = notes-aistudio@9021b9bc 2026-10-31 (premier commit avec contenu : appli importée, le commit cce6e01b ne contient qu'un README), A1 = @d2819fcc 2026-11-02, A2 = @6dbe9114 2026-11-05, A3 = @6fc4b9d7 2026-11-05 (CSS identique à @5a430a7b et @407c8f6d, qui ne touchent pas aux styles). HEAD = @407c8f6d 2026-11-06. Les tableaux générés listent une ligne par couple (propriété, valeur) ; « règle(s) » = nombre de déclarations CSS portant cette valeur ; « dernier état » donne le commit qui retire la valeur.

Bibliothèque d'icônes : aucune (ni lucide, ni autre : package.json ne contient pas de paquet d'icônes). Les 98 icônes sont un jeu maison : chaînes de tracé dans `src/ui/icons.tsx`, composant `Icon` (viewBox 0 0 24 24, `aria-hidden`), traits définis en CSS (`svg { width: 22px; height: 22px; fill: none; stroke: currentColor; stroke-width: 1.75; stroke-linecap: round; stroke-linejoin: round }`). Aucune icône n'a changé de tracé ni n'a été supprimée sur la période. Fingerprint = sha1 (8 car.) de la chaîne de tracé ; un fichier SVG complet par icône est dans `svg/`. Ajouts : 82 icônes en A0 ; 6 en A2 (sidebar, shield, cloud, refresh, broom, checkCircle) ; 10 en notes-aistudio@5a430a7b 2026-11-05 (at, person, timer, cart, target, book, quiz, bulb, location, tag).

Tailles d'icônes en CSS : voir radius-spacing.md (valeurs `svg { width/height }`). Le `docs/ui-visual-consistency-audit.md` (A1) note 10 tailles (13 à 28 px) et 5 épaisseurs (1.75, 2, 2.25, 2.5, 3).

## Icônes d'application (PWA, favicon, apple-touch)
Manifest : `public/manifest.webmanifest` (inchangé A0 à HEAD) ; `index.html` (inchangé) : favicon PNG 192, apple-touch-icon. Aucun SVG d'icône d'application ; PNG non copiés (référence git indiquée).

| icône d'application | source | empreinte | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| apple-touch-icon.png | fichier `public/icons/apple-touch-icon.png` ; `git show 9021b9bc:public/icons/apple-touch-icon.png` | blob 527a3a3d | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 180 px (index.html `<link rel="apple-touch-icon">`) |
| icon-192.png | fichier `public/icons/icon-192.png` ; `git show 9021b9bc:public/icons/icon-192.png` | blob a19309ba | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 192x192, aussi favicon `<link rel="icon" type="image/png">` et icônes de raccourcis |
| icon-512.png | fichier `public/icons/icon-512.png` ; `git show 9021b9bc:public/icons/icon-512.png` | blob c219ce8d | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 512x512 |
| icon-maskable-512.png | fichier `public/icons/icon-maskable-512.png` ; `git show 9021b9bc:public/icons/icon-maskable-512.png` | blob d47574f4 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | 512x512, purpose maskable |

## Jeu d'icônes de l'interface
| icône | source | empreinte | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| alignCenter | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | cdc05398 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/alignCenter-cdc05398.svg |
| alignLeft | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | c7c63ac7 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/alignLeft-c7c63ac7.svg |
| alignRight | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | cec60154 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/alignRight-cec60154.svg |
| all | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | cb54ca93 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/all-cb54ca93.svg |
| arrowRight | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 0e3224d2 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/arrowRight-0e3224d2.svg |
| at | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 9a3b3317 | notes-aistudio@5a430a7b 2026-11-05 | HEAD | svg/at-9a3b3317.svg |
| attach | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 78a9a920 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/attach-78a9a920.svg |
| audio | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 2dfdd927 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/audio-2dfdd927.svg |
| back | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 5899fce0 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/back-5899fce0.svg |
| bell | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 7d5a30b0 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/bell-7d5a30b0.svg |
| biometric | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 7e595b57 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/biometric-7e595b57.svg |
| book | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 023d0ab4 | notes-aistudio@5a430a7b 2026-11-05 | HEAD | svg/book-023d0ab4.svg |
| broom | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | ad4873ef | notes-aistudio@6dbe9114 2026-11-05 | HEAD | svg/broom-ad4873ef.svg |
| bug | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 14bf43f5 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/bug-14bf43f5.svg |
| bulb | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 5cc4dc14 | notes-aistudio@5a430a7b 2026-11-05 | HEAD | svg/bulb-5cc4dc14.svg |
| bullets | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 9a7c601c | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/bullets-9a7c601c.svg |
| calendar | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | c1dfd79a | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/calendar-c1dfd79a.svg |
| camera | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 9b71b38e | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/camera-9b71b38e.svg |
| cards | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | c516fdcd | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/cards-c516fdcd.svg |
| cart | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | eede3f97 | notes-aistudio@5a430a7b 2026-11-05 | HEAD | svg/cart-eede3f97.svg |
| check | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | e857cf71 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/check-e857cf71.svg |
| checkCircle | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 390fce25 | notes-aistudio@6dbe9114 2026-11-05 | HEAD | svg/checkCircle-390fce25.svg |
| checklist | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | fcadc6e7 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/checklist-fcadc6e7.svg |
| close | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 3b0b8a9b | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/close-3b0b8a9b.svg |
| cloud | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | cbb5fffe | notes-aistudio@6dbe9114 2026-11-05 | HEAD | svg/cloud-cbb5fffe.svg |
| collapse | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 66a08b47 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/collapse-66a08b47.svg |
| doc | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 0b8d3922 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/doc-0b8d3922.svg |
| download | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 4f86e2ac | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/download-4f86e2ac.svg |
| edit | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | cadbac7c | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/edit-cadbac7c.svg |
| expand | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 7568aa56 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/expand-7568aa56.svg |
| extract | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 522db1c6 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/extract-522db1c6.svg |
| filter | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 56984e1d | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/filter-56984e1d.svg |
| folder | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 3cdb3c91 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/folder-3cdb3c91.svg |
| folderNew | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 6d7112d5 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/folderNew-6d7112d5.svg |
| graph | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 986d576e | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/graph-986d576e.svg |
| grip | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | e93ce473 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/grip-e93ce473.svg |
| hand | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 7654db72 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/hand-7654db72.svg |
| hash | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 71a61110 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/hash-71a61110.svg |
| highlight | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | c2d37bf3 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/highlight-c2d37bf3.svg |
| history | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | b13eb3bc | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/history-b13eb3bc.svg |
| image | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 44374186 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/image-44374186.svg |
| improve | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | f5620024 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/improve-f5620024.svg |
| library | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 58d3d040 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/library-58d3d040.svg |
| link | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | d7b2640c | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/link-d7b2640c.svg |
| list | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 499e714e | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/list-499e714e.svg |
| listReset | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | e954fec3 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/listReset-e954fec3.svg |
| liveText | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | c99f3604 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/liveText-c99f3604.svg |
| location | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | bdaecb81 | notes-aistudio@5a430a7b 2026-11-05 | HEAD | svg/location-bdaecb81.svg |
| lock | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | a1ba290d | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/lock-a1ba290d.svg |
| mail | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | d8e93851 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/mail-d8e93851.svg |
| mapPin | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | bc719aaa | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/mapPin-bc719aaa.svg |
| merge | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | d9b68b52 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/merge-d9b68b52.svg |
| mic | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | b86154b5 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/mic-b86154b5.svg |
| minus | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | a09d0137 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/minus-a09d0137.svg |
| more | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 7a3d4c16 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/more-7a3d4c16.svg |
| move | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 0b4740a6 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/move-0b4740a6.svg |
| numbers | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 5dc25e9d | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/numbers-5dc25e9d.svg |
| offline | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 99ac30c3 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/offline-99ac30c3.svg |
| outline | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 480c55d4 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/outline-480c55d4.svg |
| paste | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 71069abb | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/paste-71069abb.svg |
| pause | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | e85e1ed2 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/pause-e85e1ed2.svg |
| person | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 19b61692 | notes-aistudio@5a430a7b 2026-11-05 | HEAD | svg/person-19b61692.svg |
| phone | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | a5affc36 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/phone-a5affc36.svg |
| pin | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | d079e25b | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/pin-d079e25b.svg |
| play | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 999041e5 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/play-999041e5.svg |
| plus | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 083e7f93 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/plus-083e7f93.svg |
| print | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 8329aae3 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/print-8329aae3.svg |
| quiz | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 8f613fd0 | notes-aistudio@5a430a7b 2026-11-05 | HEAD | svg/quiz-8f613fd0.svg |
| redo | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 215c80f8 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/redo-215c80f8.svg |
| refresh | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 2ee91218 | notes-aistudio@6dbe9114 2026-11-05 | HEAD | svg/refresh-2ee91218.svg |
| restore | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 1b53c56e | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/restore-1b53c56e.svg |
| search | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | db61e26f | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/search-db61e26f.svg |
| selectAll | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 959c4c86 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/selectAll-959c4c86.svg |
| settings | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 56cda94a | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/settings-56cda94a.svg |
| share | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | a0d06e5a | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/share-a0d06e5a.svg |
| shield | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 30d26a13 | notes-aistudio@6dbe9114 2026-11-05 | HEAD | svg/shield-30d26a13.svg |
| sidebar | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 50bb2847 | notes-aistudio@6dbe9114 2026-11-05 | HEAD | svg/sidebar-50bb2847.svg |
| slides | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 19d701aa | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/slides-19d701aa.svg |
| sort | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 28c59bf3 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/sort-28c59bf3.svg |
| sparkle | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | d19d82d3 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/sparkle-d19d82d3.svg |
| study | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | aaf5b02a | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/study-aaf5b02a.svg |
| table | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 6bf7141d | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/table-6bf7141d.svg |
| tableColAdd | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 0d907945 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/tableColAdd-0d907945.svg |
| tableColRemove | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 7c15f562 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/tableColRemove-7c15f562.svg |
| tableHead | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 852ca6fb | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/tableHead-852ca6fb.svg |
| tableMerge | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | f118d7cf | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/tableMerge-f118d7cf.svg |
| tableRowAdd | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 40cc0397 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/tableRowAdd-40cc0397.svg |
| tableRowRemove | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 5795cd7b | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/tableRowRemove-5795cd7b.svg |
| tag | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 56748a85 | notes-aistudio@5a430a7b 2026-11-05 | HEAD | svg/tag-56748a85.svg |
| target | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 36f35550 | notes-aistudio@5a430a7b 2026-11-05 | HEAD | svg/target-36f35550.svg |
| theme | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 6e681ba0 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/theme-6e681ba0.svg |
| themeAuto | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | ccb1e06a | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/themeAuto-ccb1e06a.svg |
| themeDark | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 551d7c4d | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/themeDark-551d7c4d.svg |
| themeLight | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 4e4439fe | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/themeLight-4e4439fe.svg |
| timer | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 0127df59 | notes-aistudio@5a430a7b 2026-11-05 | HEAD | svg/timer-0127df59.svg |
| tour | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 9cfd4f40 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/tour-9cfd4f40.svg |
| trash | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | 404ee0cf | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/trash-404ee0cf.svg |
| undo | SVG en ligne dans `src/ui/icons.tsx` (24x24, trait 1.75, arrondis) | e8218dd2 | notes-aistudio@9021b9bc 2026-10-31 | HEAD | svg/undo-e8218dd2.svg |
