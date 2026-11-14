Source : notes-4, commits lus : 13 (hors 2 fusions sans contenu propre), plage : 2026-10-21 à 2026-11-09

Références : N0 = notes-4@94f8e515 2026-10-22, N1 = notes-4@28ad8ce4 2026-10-22, N2 = notes-4@6f00cf58 2026-10-22, N3 = notes-4@854f07b5 2026-10-22, N4 = notes-4@8150588e 2026-10-22 (fusionné en main par fea834d7 le 2026-10-22, état "HEAD" de main). Les commits 28ad8ce4, 6f00cf58 et 854f07b5 contiennent des fichiers aux contenus permutés (le CSS de tokens est dans src/lib/styles/base.css, etc.) ; 8150588e remet chaque contenu à sa place sans changer les valeurs de design (vérifié par comparaison des contenus). Les valeurs ci-dessous sont lues par contenu, pas par nom de fichier.

Deux modes : clair (`:root`) et sombre (`:root[data-theme='dark']`, depuis N2 ; clé localStorage `notes-theme`, initialisé par `prefers-color-scheme`). Accent ambre = action principale (bouton primaire, FAB, halo de dossier) ; --select (bleu) = sélection et focus. Aucun contraste n'est documenté.

| jeton | valeur claire | valeur sombre | usage | période (réf) |
|---|---|---|---|---|
| --bg | #f3f4f6 | #0b1020 | fond de page, background_color du manifest (#f3f4f6) | clair N0 à HEAD ; sombre N2 à HEAD |
| --bg-elevated | #ffffff | #141b2d | item de dock actif | N0 / N2 à HEAD |
| --card | #ffffff | #121a2a | carte de note | N0 / N2 à HEAD |
| --card-muted | #f8f9fb | #171f2f | fond .folder, bouton ghost (N0) | N0 / N2 à HEAD |
| --panel | rgba(255,255,255,0.72) | rgba(18,26,42,0.8) | panneaux (verre) | clair 0.72 N0, REMPLACÉ en N1 ; sombre N2 à HEAD |
| --panel | rgba(255,255,255,0.7) | idem | idem | clair N1 à HEAD |
| --text | #101828 | #edf3ff | texte | N0 / N2 à HEAD |
| --text-soft | #475467 | #b8c3d9 | texte secondaire | N0 / N2 à HEAD |
| --line | rgba(16,24,40,0.1) | rgba(196,206,228,0.18) | bordures | N0 / N2 à HEAD |
| --line-strong | rgba(16,24,40,0.18) | rgba(196,206,228,0.24) | défini, jamais lu | N0 / N2 à HEAD |
| --accent | #f6c453 | #f4c542 (N2) | ambre : bouton primaire, FAB | clair #f6c453 N0, REMPLACÉ en N1 |
| --accent | #f4c542 | #f4c542 | idem | N1 à HEAD (clair) ; N2 à HEAD (sombre) |
| --accent-ink | #20180a | #20180a | texte sur ambre | N0 / N2 à HEAD |
| --accent-soft | rgba(246,196,83,0.18) | rgba(244,197,66,0.18) | défini, jamais lu | clair N0, REMPLACÉ en N1 par rgba(244,197,66,0.18) |
| --select | #1d4ed8 | #8ab4ff | focus-visible, carte sélectionnée | N0 / N2 à HEAD |
| --select-soft | rgba(29,78,216,0.12) | rgba(138,180,255,0.12) | défini, jamais lu | N0 / N2 à HEAD |
| --danger | #d92d20 | (non redéfini en sombre) | texte du bouton danger ; fond rgba(217,45,32,0.08) | N0 à HEAD |
| --success | #1f8a5d | (non redéfini) | défini, jamais lu | N0 à HEAD |
| fond du body, clair | radial-gradient(circle at top left, rgba(246,196,83,0.12), transparent 28%) puis linear-gradient(180deg, #f8f9fb 0%, var(--bg) 100%) | | halo ambre | N0, REMPLACÉ en N1 |
| fond du body, clair | radial-gradient(... rgba(244,197,66,0.14), transparent 26%) + même linéaire | | | N1 à HEAD |
| fond du body, sombre | radial-gradient(... rgba(244,197,66,0.12), transparent 26%) + linear-gradient(180deg, #0d1424 0%, var(--bg) 100%) | | | N3 à HEAD |
| fond dock-shell | rgba(255,255,255,0.55) (N0) puis 0.62 (N1 à HEAD) | idem (pas d'adaptation sombre) | verre | N0 à HEAD |
| fond bouton ghost | var(--card-muted) (N0) puis rgba(255,255,255,0.46) (N1 à HEAD) | idem | | N0 à HEAD |
| fonds des panneaux d'édition | .list-panel et .editor-panel rgba(255,255,255,0.45) (N0) puis var(--panel) (N1) ; champs rgba(255,255,255,0.72) (N0), 0.42 (N1) ; .folder-badge var(--card-muted) (N0), rgba(255,255,255,0.25) (N1) ; items rgba(255,255,255,0.26) (N2) | idem | | N0 à HEAD |
| theme-color (meta) | #0d1117 (N0) puis #f4c542 (N1 à HEAD) | | barre du navigateur | N0 à HEAD |
| manifest | background_color #f3f4f6, theme_color #f4c542 | | | N1 à HEAD |
| icône | fond #f5f7fb ; tuile dégradé #f8d872 vers #f4c542 ; barres #20180a | | | N1 à HEAD |
| halo .folder-dot | rgba(244,197,66,0.2) | | | N2 à HEAD |
| danger (bouton) | fond rgba(217,45,32,0.08) | | | N0 à HEAD |
