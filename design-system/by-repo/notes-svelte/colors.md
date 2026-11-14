Source : notes-svelte, commits lus : 4, plage : 2026-10-22 à 2026-10-22

Références : S1 = notes-svelte@2923c47d 2026-10-22, S2 = notes-svelte@112ae9d8 2026-10-22, S3 = notes-svelte@96889f8d 2026-10-22 (HEAD). Le commit cac60e91 (Initial commit) n'a aucun contenu graphique. Les quatre commits sont du même jour (10:22, 12:48, 13:18, 13:26) : aucune valeur de design ne change entre commits ; chaque ligne vaut donc "S1 à HEAD" sauf mention.

Jeu unique "Quick Notes" : papier chaud + ambre. Thèmes : clair (:root), sombre (`:root[data-theme='dark']`, aussi appliqué par `@media (prefers-color-scheme: dark)` quand le thème n'est pas forcé clair). Mode choisi : système / clair / sombre (voir themes.md). Aucun contraste n'est documenté.

| jeton | valeur claire | valeur sombre | usage | période (réf) |
|---|---|---|---|---|
| --bg | #F7F3EE | #141413 | fond de page, theme-color, background_color du manifest | S1 à HEAD |
| --surface | #F1EAE1 | #1D1C1A | cartes, conteneurs | S1 à HEAD |
| --surface-strong | #FFF9F5 | #171714 | menu rapide, feuille de l'icône | S1 à HEAD |
| --card | #F7F3EE | #1D1C1A | défini, non utilisé dans les fichiers lus | S1 à HEAD |
| --ink | #1A1A1A | #F3F0EA | texte | S1 à HEAD |
| --muted | #5A5A56 | #C9C1B8 | texte secondaire | S1 à HEAD |
| --accent | #D9A35A | #E3B36C | bouton +, anneau de focus | S1 à HEAD |
| --highlight | #EFDAB2 | #3A2D1B | onglet actif, option de thème active | S1 à HEAD |
| --border | rgba(26,26,26,0.12) | rgba(243,240,234,0.14) | bordures | S1 à HEAD |
| fond du body | radial-gradient(circle at top, rgba(239,218,178,0.18), transparent 30%) sur --bg | idem | halo ambré en haut | S1 à HEAD |
| fond barre d'onglets | rgba(255,255,255,0.46) | rgba(25,25,25,0.64) | verre | S3 (QuickActionMenu.svelte dès S1) à HEAD |
| onglet actif, ombre | 0 8px 18px rgba(217,163,90,0.12) | | | S3 à HEAD |
| fond menu item au survol | rgba(239,218,178,0.2) | | | S3 à HEAD |
| couleurs de note (NoteColor) | amber : dégradé rgba(239,218,178,0.22) vers 0.08 ; sage : rgba(128,170,138,0.16) vers 0.05 ; slate : rgba(94,112,136,0.12) vers 0.04 ; rose : rgba(196,152,138,0.12) vers 0.04 | mêmes (non adaptées au sombre) | fonds de NoteCard (classes .card-amber, .card-sage, .card-slate, .card-rose) | S1 à HEAD |
| carte sélectionnée | bordure rgba(217,163,90,0.5), ombre 0 12px 30px rgba(217,163,90,0.12) | | | S1 à HEAD |
| danger | #b95555 | idem | bouton supprimer de la carte | S1 à HEAD |
| fonds translucides blancs | rgba(255,255,255,0.1 à 0.18) | idem | puces de tag, boutons de barre d'outils, champ de recherche, mini-boutons | S1 à HEAD |
| manifest | background_color #F7F3EE ; theme_color #F7F3EE | | | S1 à HEAD |
| meta theme-color | #F7F3EE | | un seul, pas de variante sombre | S1 à HEAD |
| sémantique : ambre = action principale (créer, focus) ; highlight = sélection | | | | |
