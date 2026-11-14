Source : notepad-pwa, commits lus : 7, plage : 2026-10-20 à 2026-11-10

Références : A = notepad-pwa@3c6f6152 2026-10-20, B = notepad-pwa@576a8c9d 2026-10-20, C = notepad-pwa@76dfefe5 2026-10-20, D = notepad-pwa@a488cc67 2026-10-20. Le CSS existe seulement en A, B, C (dans des fichiers permutés) et est supprimé en D : à HEAD "dernier état" désigne donc le dernier CSS connu (C).

Aucun contraste n'est documenté dans le dépôt (pas de DESIGN.md). Les thèmes sont deux : clair (:root) et sombre (`body.dark`), bascule par `document.body.classList.toggle('dark')`, sombre par défaut (`darkMode: true`, `userTheme = 'dark'`).

| jeton | valeur claire | valeur sombre | usage | période (réf) |
|---|---|---|---|---|
| --bg | #f4f7fb | #0b1020 | fond de page | A, REMPLACÉ en B |
| --bg | #f3f7ff | #090d18 | fond de page | B à C |
| --panel | rgba(255,255,255,0.7) | rgba(15,23,42,0.78) | fond des panneaux (verre) | A, REMPLACÉ en B |
| --panel | rgba(255,255,255,0.72) | rgba(15,23,42,0.76) | idem | B à C |
| --panel-strong | #ffffff | #111827 | fond des boutons | A à C |
| --surface | #eef3ff | #111827 | défini, non lu dans le CSS d'origine | A, REMPLACÉ en B |
| --surface | #eef4ff | #0b1220 | idem | B à C |
| --surface-border | rgba(15,23,42,0.08) | rgba(148,163,184,0.12) | toutes les bordures | A à C |
| --text | #0f172a | #e5eefb | texte | A à C |
| --muted | #475569 | #a5b4cf | texte secondaire | A, REMPLACÉ en B |
| --muted | #4b5d79 | #a5b4cf | texte secondaire | B à C (seul le clair change) |
| --primary | #2563eb | #60a5fa | accent (bleu) : bouton primaire, accent-color, brand-mark | A à C |
| --primary-soft | rgba(37,99,235,0.12) | rgba(96,165,250,0.15) | fond de l'élément actif | A, REMPLACÉ en B |
| --primary-soft | rgba(37,99,235,0.12) | rgba(96,165,250,0.14) | idem | B à C |
| --warning | #f59e0b | #fbbf24 | jeton défini, jamais utilisé | A, SUPPRIMÉ en B |
| --shadow | voir elevation-motion.md | | | |
| dégradé bouton primaire | background var(--primary) (A) ; linear-gradient(135deg, var(--primary), #3790ff) (B, C) | | bouton .primary | A, REMPLACÉ en B |
| dégradé .brand-mark | linear-gradient(135deg, var(--primary), #38bdf8) | idem | monogramme N | A à C |
| texte sur primaire | white | white | | A à C |
| fond textarea | rgba(148,163,184,0.02) | idem | #editor | A à B ; REMPLACÉ en C |
| fond textarea (C) clair | linear-gradient(180deg, rgba(255,255,255,0.3), rgba(148,163,184,0.03)) | body.dark : linear-gradient(180deg, rgba(15,23,42,0.7), rgba(15,23,42,0.32)) | #editor | C |
| focus éditeur et champs | border-color rgba(59,130,246,0.45) + anneau rgba(59,130,246,0.12) | idem | #editor:focus, .search-box input:focus, #note-title:focus | A (éditeur), C (champs) à C |
| actif ambient / note | border rgba(96,165,250,0.46) (A, B) ; 0.52 (C) | idem | .ambient-item.active ; .note-item.active (0.52, C) | A à C |
| toast | rgba(15,23,42,0.9) (A) ; rgba(15,23,42,0.94) (B, C), texte white | idem | .toast | A à C |
| fonds discrets (snapshot-item, topbar, kbd, ambient-item) | rgba(148,163,184,0.02 à 0.12) | idem | surfaces superposées | A à C, valeurs: snapshot 0.03 puis 0.04 ; topbar 0.03 puis 0.02 ; kbd 0.1 puis 0.12 ; ambient 0.02 puis 0.025 |
| theme-color (balise meta, index.html) | #111827 | | barre de navigateur | A à HEAD (`index.html`) |
| theme-color (balise meta, HTML de src/main.js) | #0f172a | | barre de navigateur | B à HEAD (le HTML de src/main.js diffère de celui de index.html : #0f172a contre #111827) |
| manifest background_color / theme_color | #0b1020 / #0b1020 | | | A à HEAD |
| icône d'app (SVG) | #0f172a fond ; #f8fafc opacité .08 ; #e2e8f0 barres | | | A à HEAD |
| fenêtre flottante (document.write) | fond #111827, texte #e5eefb (A) puis #e2e8f0 (B, C), textarea fond #0f172a texte #fff (A) puis #f8fafc (B) | | | A à HEAD |
