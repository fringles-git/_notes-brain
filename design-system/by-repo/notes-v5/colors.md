Source : notes-v5, commits lus : 132, plage : 2026-10-21 à 2026-11-11

Jetons de couleur par thème ou « look » : une ligne par valeur et par période. `portée` = fichier et sélecteur. Valeurs `light-dark(a, b)` séparées en colonnes clair / sombre. `(identique)` = la même valeur dans les deux modes. Les dates sont celles du registre (`SCR/ledger`).

## 1. Jetons de couleur (tokens.css et looks.css)

| jeton | portée | clair | sombre | usage | première apparition | dernier état | notes |
|---|---|---|---|---|---|---|---|
| --accent-amber | tokens.css :root | #f4c542 | (identique) | pastilles de Réglages → Accent | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --accent-apricot | tokens.css :root | #f59e5b | (identique) | pastilles de Réglages → Accent | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --accent-lilac | tokens.css :root | #b9a2f5 | (identique) | pastilles de Réglages → Accent | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --ambient-1 | looks.css :root[data-look='paper'] | var(--color-bg) | (identique) | taches du fond d'ambiance (accueil/bienvenue) | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --ambient-1 | tokens.css :root | #ffe9a8 | #3a2f0c | taches du fond d'ambiance (accueil/bienvenue) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --ambient-2 | looks.css :root[data-look='paper'] | var(--color-bg) | (identique) | taches du fond d'ambiance (accueil/bienvenue) | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --ambient-2 | tokens.css :root | #cfe0ff | #0d1f3d | taches du fond d'ambiance (accueil/bienvenue) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --ambient-3 | looks.css :root[data-look='paper'] | var(--color-bg) | (identique) | taches du fond d'ambiance (accueil/bienvenue) | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --ambient-3 | tokens.css :root | #f5d6ec | #2a1024 | taches du fond d'ambiance (accueil/bienvenue) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --color-accent | looks.css :root, :root[data-look='glass'] | #f4c542 | (identique) | ambre par défaut = créer et épinglé (le +, la tuile Note) | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --color-accent | looks.css :root[data-accent='apricot'] | #f59e5b | (identique) | ambre par défaut = créer et épinglé (le +, la tuile Note) | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --color-accent | looks.css :root[data-accent='lilac'] | #b9a2f5 | (identique) | ambre par défaut = créer et épinglé (le +, la tuile Note) | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --color-accent | looks.css :root[data-look='paper'] | #f2b632 | (identique) | ambre par défaut = créer et épinglé (le +, la tuile Note) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --color-accent | tokens.css :root | var(--accent-amber) | (identique) | ambre par défaut = créer et épinglé (le +, la tuile Note) | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --color-accent | tokens.css :root | #f4c542 | (identique) | ambre par défaut = créer et épinglé (le +, la tuile Note) | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ var(--accent-amber)) |  |
| --color-accent-deep | looks.css :root, :root[data-look='glass'] | #8c6600 | #e0ac1c | l'accent en encre (coches, traits, libellés), ≥4,5:1 | notes-v5@ad232dfb 2026-10-21 | HEAD | documenté : ≥4,5:1 en texte |
| --color-accent-deep | looks.css :root[data-accent='apricot'] | #9a4a0f | #f8a76b | l'accent en encre (coches, traits, libellés), ≥4,5:1 | notes-v5@ad232dfb 2026-10-21 | HEAD | documenté : ≥4,5:1 en texte |
| --color-accent-deep | looks.css :root[data-accent='lilac'] | #5b3fc4 | #c3b1f7 | l'accent en encre (coches, traits, libellés), ≥4,5:1 | notes-v5@ad232dfb 2026-10-21 | HEAD | documenté : ≥4,5:1 en texte |
| --color-accent-deep | looks.css :root[data-look='glass'] | #8c6600 | #d9a514 | l'accent en encre (coches, traits, libellés), ≥4,5:1 | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 | documenté : ≥4,5:1 en texte |
| --color-accent-deep | looks.css :root[data-look='paper'] | #7d5800 | #f2b632 | l'accent en encre (coches, traits, libellés), ≥4,5:1 | notes-v5@ad232dfb 2026-10-21 | HEAD | documenté : ≥4,5:1 en texte |
| --color-accent-deep | looks.css :root[data-look='paper'] | #835c00 | #f2b632 | l'accent en encre (coches, traits, libellés), ≥4,5:1 | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ light-dark(#7d5800, #f2b632)) | documenté : ≥4,5:1 en texte |
| --color-accent-deep | tokens.css :root | #8c6600 | #e0ac1c | l'accent en encre (coches, traits, libellés), ≥4,5:1 | notes-v5@b1f17318 2026-10-21 | HEAD | documenté : ≥4,5:1 en texte |
| --color-accent-glow | looks.css :root[data-look='paper'] | 0 0 transparent | (identique) | halo du + | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --color-accent-glow | looks.css :root[data-look='paper'] | none | (identique) | halo du + | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ 0 0 transparent) |  |
| --color-accent-glow | tokens.css :root | 0 8px 24px color-mix(in srgb, var(--color-accent) var(--alpha-strong), transparent) | (identique) | halo du + | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --color-accent-glow | tokens.css :root | 0 8px 24px light-dark(#f4c54270, #f4c54240) | (identique) | halo du + | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ 0 8px 24px color-mix(in srgb, var(--color-accent) var(--alph) |  |
| --color-accent-stroke | looks.css :root, :root[data-look='glass'] | #d9a514 | (identique) | bord propre du + | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --color-accent-stroke | looks.css :root[data-accent='apricot'] | #d97b33 | (identique) | bord propre du + | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --color-accent-stroke | looks.css :root[data-accent='lilac'] | #9479e3 | (identique) | bord propre du + | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --color-accent-stroke | looks.css :root[data-look='paper'] | #c9921a | (identique) | bord propre du + | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --color-accent-stroke | tokens.css :root | #d9a514 | (identique) | bord propre du + | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --color-bg | looks.css :root, :root[data-look='glass'] | #f4f5f8 | #0b0c0f | sol de page (ground) | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --color-bg | looks.css :root[data-look='glass'] | #f4f5f8 | #0b0c0f | sol de page (ground) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| --color-bg | looks.css :root[data-look='minimal'] | #fafaf9 | #101115 | sol de page (ground) | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --color-bg | looks.css :root[data-look='paper'] | #f7f4ec | #121110 | sol de page (ground) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --color-bg | tokens.css :root | #eef0f6 | #08090c | sol de page (ground) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --color-bg | tokens.css :root[data-look][data-oled='true'][data-theme='dark'] | #000 | (identique) | sol de page (ground) | notes-v5@89526ff2 2026-11-11 | HEAD |  |
| --color-bg | tokens.css :root[data-oled='true'][data-theme='dark'] | #000 | (identique) | sol de page (ground) | notes-v5@1c1fb148 2026-11-11 | SUPPRIMÉ notes-v5@89526ff2 2026-11-11 |  |
| --color-bg | tokens.css @media (prefers-color-scheme: dark) :root[data-look][data-oled='true']:not([data-theme='light']) | #000 | (identique) | sol de page (ground) | notes-v5@89526ff2 2026-11-11 | HEAD |  |
| --color-bg | tokens.css @media (prefers-color-scheme: dark) :root[data-oled='true']:not([data-theme='light']) | #000 | (identique) | sol de page (ground) | notes-v5@1c1fb148 2026-11-11 | SUPPRIMÉ notes-v5@89526ff2 2026-11-11 |  |
| --color-card | looks.css :root, :root[data-look='glass'] | #ffffff | #17181d | surface de contenu pleine : cartes, tuiles, widgets | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --color-card | looks.css :root[data-look='minimal'] | #ffffff | #1b1d23 | surface de contenu pleine : cartes, tuiles, widgets | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --color-card | looks.css :root[data-look='paper'] | #fffdf7 | #1c1a17 | surface de contenu pleine : cartes, tuiles, widgets | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --color-card | tokens.css :root | #ffffff | #1a1b20 | surface de contenu pleine : cartes, tuiles, widgets | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --color-card-solid | looks.css :root[data-look='paper'] | var(--color-card) | (identique) | copie de --color-card | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --color-card-solid | tokens.css :root | #ffffff | #1a1b20 | copie de --color-card | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --color-danger | looks.css :root[data-look='paper'] | #c8322b | #ff7a6e | rouge = supprimer, enregistrement vocal | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --color-danger | tokens.css :root | #d70015 | #ff6961 | rouge = supprimer, enregistrement vocal | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --color-danger-tint | tokens.css :root | color-mix(in srgb, var(--color-danger) var(--alpha-soft), transparent) | (identique) | teinte du rouge (pulsation) | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --color-editor | looks.css :root, :root[data-look='glass'] | #fafbfc | #0e0f13 | page en cours d'écriture, pleine, rien ne transparaît | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --color-editor | looks.css :root[data-look='minimal'] | #ffffff | #15171c | page en cours d'écriture, pleine, rien ne transparaît | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --color-editor | looks.css :root[data-look='paper'] | var(--color-card) | (identique) | page en cours d'écriture, pleine, rien ne transparaît | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --color-editor | looks.css :root[data-look='paper'] | #fbf9f3 | #161412 | page en cours d'écriture, pleine, rien ne transparaît | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ var(--color-card)) |  |
| --color-editor | tokens.css :root | #f7f8fb | #0e0f13 | page en cours d'écriture, pleine, rien ne transparaît | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --color-editor | tokens.css :root[data-look][data-oled='true'][data-theme='dark'] | #000 | (identique) | page en cours d'écriture, pleine, rien ne transparaît | notes-v5@89526ff2 2026-11-11 | HEAD |  |
| --color-editor | tokens.css :root[data-oled='true'][data-theme='dark'] | #000 | (identique) | page en cours d'écriture, pleine, rien ne transparaît | notes-v5@1c1fb148 2026-11-11 | SUPPRIMÉ notes-v5@89526ff2 2026-11-11 |  |
| --color-editor | tokens.css @media (prefers-color-scheme: dark) :root[data-look][data-oled='true']:not([data-theme='light']) | #000 | (identique) | page en cours d'écriture, pleine, rien ne transparaît | notes-v5@89526ff2 2026-11-11 | HEAD |  |
| --color-editor | tokens.css @media (prefers-color-scheme: dark) :root[data-oled='true']:not([data-theme='light']) | #000 | (identique) | page en cours d'écriture, pleine, rien ne transparaît | notes-v5@1c1fb148 2026-11-11 | SUPPRIMÉ notes-v5@89526ff2 2026-11-11 |  |
| --color-fill | looks.css :root[data-look='paper'] | #1f1b160d | #f3efe612 | remplissage léger = encre à un palier d'opacité | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| --color-fill | tokens.css :root | color-mix(in srgb, var(--color-text) var(--alpha-faint), transparent) | (identique) | remplissage léger = encre à un palier d'opacité | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --color-fill | tokens.css :root | #16171b0d | #ffffff12 | remplissage léger = encre à un palier d'opacité | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ color-mix(in srgb, var(--color-text) var(--alpha-faint), tra) |  |
| --color-fill-strong | looks.css :root[data-look='paper'] | #1f1b1617 | #f3efe61f | remplissage appuyé = encre à un palier d'opacité | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| --color-fill-strong | tokens.css :root | color-mix(in srgb, var(--color-text) var(--alpha-soft), transparent) | (identique) | remplissage appuyé = encre à un palier d'opacité | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --color-fill-strong | tokens.css :root | #16171b17 | #ffffff1f | remplissage appuyé = encre à un palier d'opacité | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ color-mix(in srgb, var(--color-text) var(--alpha-soft), tran) |  |
| --color-focus | tokens.css :root | var(--color-text) | (identique) | anneau de focus (encre) | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --color-focus | tokens.css :root | #16171b | #f2f3f7 | anneau de focus (encre) | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--color-text)) |  |
| --color-ground | tokens.css :root | var(--color-bg) | (identique) | alias de --color-bg, sans lecteur | notes-v5@232da787 2026-10-22 | SUPPRIMÉ notes-v5@d083fb4c 2026-10-22 |  |
| --color-highlight | looks.css :root[data-look='paper'] | #f6e2a2 | #4d3d12 | fond du surlignage de recherche (mark) | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --color-highlight | tokens.css :root | #fbe7a1 | #5a4610 | fond du surlignage de recherche (mark) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --color-line | looks.css :root[data-look='paper'] | #1f1b161a | #f3efe61a | trait fin = encre à un palier d'opacité | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 | prefers-contrast: more le passe à 40 % d'encre |
| --color-line | looks.css @media (prefers-contrast: more) :root, :root[data-look] | color-mix(in srgb, var(--color-text) var(--alpha-strong), transparent) | (identique) | trait fin = encre à un palier d'opacité | notes-v5@ad232dfb 2026-10-21 | HEAD | prefers-contrast: more le passe à 40 % d'encre |
| --color-line | tokens.css :root | color-mix(in srgb, var(--color-text) var(--alpha-soft), transparent) | (identique) | trait fin = encre à un palier d'opacité | notes-v5@82aa90c2 2026-10-21 | HEAD | prefers-contrast: more le passe à 40 % d'encre |
| --color-line | tokens.css :root | #16171b14 | #ffffff14 | trait fin = encre à un palier d'opacité | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ color-mix(in srgb, var(--color-text) var(--alpha-soft), tran) | prefers-contrast: more le passe à 40 % d'encre |
| --color-line | tokens.css :root[data-high-contrast='true'] | var(--color-line-strong) | (identique) | trait fin = encre à un palier d'opacité | notes-v5@1c1fb148 2026-11-11 | SUPPRIMÉ notes-v5@89526ff2 2026-11-11 | prefers-contrast: more le passe à 40 % d'encre |
| --color-line | tokens.css :root[data-look][data-high-contrast='true'] | var(--color-line-strong) | (identique) | trait fin = encre à un palier d'opacité | notes-v5@89526ff2 2026-11-11 | HEAD | prefers-contrast: more le passe à 40 % d'encre |
| --color-line | tokens.css @media (prefers-contrast: more) :root | color-mix(in srgb, var(--color-text) var(--alpha-strong), transparent) | (identique) | trait fin = encre à un palier d'opacité | notes-v5@82aa90c2 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 | prefers-contrast: more le passe à 40 % d'encre |
| --color-line | tokens.css @media (prefers-contrast: more) :root | #16171b4d | #ffffff4d | trait fin = encre à un palier d'opacité | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ color-mix(in srgb, var(--color-text) var(--alpha-strong), tr) | prefers-contrast: more le passe à 40 % d'encre |
| --color-line-strong | looks.css :root[data-look='paper'] | #1f1b1633 | #f3efe633 | trait marqué = encre à un palier d'opacité | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| --color-line-strong | looks.css @media (prefers-contrast: more) :root, :root[data-look] | color-mix(in srgb, var(--color-text) calc(var(--alpha-strong) + var(--alpha-medium)), transparent) | (identique) | trait marqué = encre à un palier d'opacité | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --color-line-strong | tokens.css :root | color-mix(in srgb, var(--color-text) var(--alpha-medium), transparent) | (identique) | trait marqué = encre à un palier d'opacité | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --color-line-strong | tokens.css :root | #16171b2e | #ffffff2e | trait marqué = encre à un palier d'opacité | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ color-mix(in srgb, var(--color-text) var(--alpha-medium), tr) |  |
| --color-line-strong | tokens.css @media (prefers-contrast: more) :root | color-mix(in srgb, var(--color-text) calc(var(--alpha-strong) + var(--alpha-medium)), transparent) | (identique) | trait marqué = encre à un palier d'opacité | notes-v5@82aa90c2 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| --color-line-strong | tokens.css @media (prefers-contrast: more) :root | #16171b80 | #ffffff80 | trait marqué = encre à un palier d'opacité | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ color-mix(in srgb, var(--color-text) calc(var(--alpha-strong) |  |
| --color-on-accent | looks.css :root[data-accent='apricot'] | #2a1505 | (identique) | texte sur fond d'accent | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --color-on-accent | looks.css :root[data-accent='lilac'] | #1d1433 | (identique) | texte sur fond d'accent | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --color-on-accent | looks.css :root[data-look='paper'] | #1f1b16 | (identique) | texte sur fond d'accent | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --color-on-accent | tokens.css :root | #1a1608 | (identique) | texte sur fond d'accent | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --color-on-strong | tokens.css :root | #fff | (identique) | texte/icône sur bleu, rouge, vert, dossiers, photo | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --color-raised | looks.css :root, :root[data-look='glass'] | #ffffff | #34353d | bouton ou curseur plein posé sur un remplissage | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --color-raised | looks.css :root[data-look='minimal'] | #ffffff | #363943 | bouton ou curseur plein posé sur un remplissage | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --color-raised | looks.css :root[data-look='paper'] | #fffdf7 | #2c2925 | bouton ou curseur plein posé sur un remplissage | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --color-raised | tokens.css :root | #ffffff | #3a3b43 | bouton ou curseur plein posé sur un remplissage | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --color-scrim | looks.css :root, :root[data-look='glass'] | color-mix(in srgb, #0b0c0f var(--alpha-strong), transparent) | (identique) | voile derrière feuilles et menus | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --color-scrim | looks.css :root[data-look='glass'] | #10121a33 | #00000066 | voile derrière feuilles et menus | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| --color-scrim | looks.css :root[data-look='paper'] | color-mix(in srgb, #1f1b16 var(--alpha-medium), transparent) | color-mix(in srgb, #000 var(--alpha-strong), transparent) | voile derrière feuilles et menus | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --color-scrim | looks.css :root[data-look='paper'] | #1f1b1638 | #00000080 | voile derrière feuilles et menus | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ light-dark(color-mix(in srgb, #1f1b16 var(--alpha-medium), t) |  |
| --color-scrim | tokens.css :root | color-mix(in srgb, #10121a var(--alpha-medium), transparent) | color-mix(in srgb, #000 var(--alpha-strong), transparent) | voile derrière feuilles et menus | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --color-scrim | tokens.css :root | #10121a2e | #0000006b | voile derrière feuilles et menus | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ light-dark(color-mix(in srgb, #10121a var(--alpha-medium), t) |  |
| --color-select | looks.css :root, :root[data-look='glass'] | #0062cc | #0a84ff | bleu = sélection, liens | notes-v5@ad232dfb 2026-10-21 | HEAD | documenté : #0062cc en clair car #0a84ff sur blanc = 3,6:1 ; reste #0a84ff en sombre |
| --color-select | looks.css :root[data-look='glass'] | #0062cc | #0a84ff | bleu = sélection, liens | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 | documenté : #0062cc en clair car #0a84ff sur blanc = 3,6:1 ; reste #0a84ff en sombre |
| --color-select | looks.css :root[data-look='paper'] | #2f5bd3 | #8aa6f2 | bleu = sélection, liens | notes-v5@ad232dfb 2026-10-21 | HEAD | documenté : #0062cc en clair car #0a84ff sur blanc = 3,6:1 ; reste #0a84ff en sombre |
| --color-select | looks.css :root[data-look='paper'] | #2f5bd3 | #7d9cf0 | bleu = sélection, liens | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ light-dark(#2f5bd3, #8aa6f2)) | documenté : #0062cc en clair car #0a84ff sur blanc = 3,6:1 ; reste #0a84ff en sombre |
| --color-select | tokens.css :root | #0062cc | #0a84ff | bleu = sélection, liens | notes-v5@b1f17318 2026-10-21 | HEAD | documenté : #0062cc en clair car #0a84ff sur blanc = 3,6:1 ; reste #0a84ff en sombre |
| --color-select-tint | looks.css :root[data-look='paper'] | #2f5bd31a | #7d9cf02e | teinte de ce qui est choisi | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| --color-select-tint | tokens.css :root | color-mix(in srgb, var(--color-select) var(--alpha-soft), transparent) | color-mix(in srgb, var(--color-select) var(--alpha-medium), transparent) | teinte de ce qui est choisi | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --color-select-tint | tokens.css :root | #0062cc1a | #0a84ff2e | teinte de ce qui est choisi | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ light-dark(color-mix(in srgb, var(--color-select) var(--alph) |  |
| --color-shade | tokens.css :root | rgb(0 0 0 / var(--alpha-strong)) | (identique) | contrôle posé sur une photo | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --color-success | tokens.css :root | #1e7a35 | #40a970 | vert = fait, activé | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --color-surface | tokens.css :root | var(--color-card) | (identique) | alias de --color-card, sans lecteur | notes-v5@232da787 2026-10-22 | SUPPRIMÉ notes-v5@d083fb4c 2026-10-22 |  |
| --color-text | looks.css :root[data-look='minimal'] | #171717 | #f2f3f5 | encre principale | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --color-text | looks.css :root[data-look='paper'] | #1f1b16 | #f3efe6 | encre principale | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --color-text | tokens.css :root | #16171b | #f2f3f7 | encre principale | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --color-text-faint | looks.css :root[data-look='minimal'] | #626772 | #aab0bb | texte tertiaire (cible ≥5,4:1) | notes-v5@feebaaea 2026-11-10 | HEAD | documenté : ≥5,4:1 (mesures 5,67 à 6,99) |
| --color-text-faint | looks.css :root[data-look='paper'] | #5f574b | #a39b8d | texte tertiaire (cible ≥5,4:1) | notes-v5@ad232dfb 2026-10-21 | HEAD | documenté : ≥5,4:1 (mesures 5,67 à 6,99) |
| --color-text-faint | looks.css :root[data-look='paper'] | #5f574b | #9a9284 | texte tertiaire (cible ≥5,4:1) | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ light-dark(#5f574b, #a39b8d)) | documenté : ≥5,4:1 (mesures 5,67 à 6,99) |
| --color-text-faint | looks.css @media (prefers-contrast: more) :root, :root[data-look] | #3e414c | #b9bcc6 | texte tertiaire (cible ≥5,4:1) | notes-v5@ad232dfb 2026-10-21 | HEAD | documenté : ≥5,4:1 (mesures 5,67 à 6,99) |
| --color-text-faint | looks.css @media (prefers-contrast: more) :root[data-look='paper'] | #3d362c | #c4bcae | texte tertiaire (cible ≥5,4:1) | notes-v5@ad232dfb 2026-10-21 | HEAD | documenté : ≥5,4:1 (mesures 5,67 à 6,99) |
| --color-text-faint | tokens.css :root | #5d616d | #8e929b | texte tertiaire (cible ≥5,4:1) | notes-v5@b1f17318 2026-10-21 | HEAD | documenté : ≥5,4:1 (mesures 5,67 à 6,99) |
| --color-text-faint | tokens.css :root[data-high-contrast='true'] | var(--color-text) | (identique) | texte tertiaire (cible ≥5,4:1) | notes-v5@1c1fb148 2026-11-11 | SUPPRIMÉ notes-v5@89526ff2 2026-11-11 | documenté : ≥5,4:1 (mesures 5,67 à 6,99) |
| --color-text-faint | tokens.css :root[data-look][data-high-contrast='true'] | var(--color-text) | (identique) | texte tertiaire (cible ≥5,4:1) | notes-v5@89526ff2 2026-11-11 | HEAD | documenté : ≥5,4:1 (mesures 5,67 à 6,99) |
| --color-text-faint | tokens.css @media (prefers-contrast: more) :root | #3e414c | #b9bcc6 | texte tertiaire (cible ≥5,4:1) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 | documenté : ≥5,4:1 (mesures 5,67 à 6,99) |
| --color-text-muted | looks.css :root[data-look='minimal'] | #50545d | #c0c4cc | texte secondaire (cible ≥7:1) | notes-v5@feebaaea 2026-11-10 | HEAD | documenté : muted ≥7:1 ; sombre #a4a8b4 -> #b0b4bf (6,61 -> 7,58:1) en 190af4b5 |
| --color-text-muted | looks.css :root[data-look='paper'] | #4a4339 | #bdb5a7 | texte secondaire (cible ≥7:1) | notes-v5@ad232dfb 2026-10-21 | HEAD | documenté : muted ≥7:1 ; sombre #a4a8b4 -> #b0b4bf (6,61 -> 7,58:1) en 190af4b5 |
| --color-text-muted | looks.css :root[data-look='paper'] | #4a4339 | #b5ad9f | texte secondaire (cible ≥7:1) | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ light-dark(#4a4339, #bdb5a7)) | documenté : muted ≥7:1 ; sombre #a4a8b4 -> #b0b4bf (6,61 -> 7,58:1) en 190af4b5 |
| --color-text-muted | looks.css @media (prefers-contrast: more) :root, :root[data-look] | #2f323c | #d0d3dc | texte secondaire (cible ≥7:1) | notes-v5@ad232dfb 2026-10-21 | HEAD | documenté : muted ≥7:1 ; sombre #a4a8b4 -> #b0b4bf (6,61 -> 7,58:1) en 190af4b5 |
| --color-text-muted | looks.css @media (prefers-contrast: more) :root[data-look='paper'] | #2e2820 | #d8d1c4 | texte secondaire (cible ≥7:1) | notes-v5@ad232dfb 2026-10-21 | HEAD | documenté : muted ≥7:1 ; sombre #a4a8b4 -> #b0b4bf (6,61 -> 7,58:1) en 190af4b5 |
| --color-text-muted | tokens.css :root | #484c59 | #b0b4bf | texte secondaire (cible ≥7:1) | notes-v5@190af4b5 2026-10-21 | HEAD | documenté : muted ≥7:1 ; sombre #a4a8b4 -> #b0b4bf (6,61 -> 7,58:1) en 190af4b5 |
| --color-text-muted | tokens.css :root | #484c59 | #a4a8b4 | texte secondaire (cible ≥7:1) | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@190af4b5 2026-10-21 (→ light-dark(#484c59, #b0b4bf)) | documenté : muted ≥7:1 ; sombre #a4a8b4 -> #b0b4bf (6,61 -> 7,58:1) en 190af4b5 |
| --color-text-muted | tokens.css :root[data-high-contrast='true'] | var(--color-text) | (identique) | texte secondaire (cible ≥7:1) | notes-v5@1c1fb148 2026-11-11 | SUPPRIMÉ notes-v5@89526ff2 2026-11-11 | documenté : muted ≥7:1 ; sombre #a4a8b4 -> #b0b4bf (6,61 -> 7,58:1) en 190af4b5 |
| --color-text-muted | tokens.css :root[data-look][data-high-contrast='true'] | var(--color-text) | (identique) | texte secondaire (cible ≥7:1) | notes-v5@89526ff2 2026-11-11 | HEAD | documenté : muted ≥7:1 ; sombre #a4a8b4 -> #b0b4bf (6,61 -> 7,58:1) en 190af4b5 |
| --color-text-muted | tokens.css @media (prefers-contrast: more) :root | #2f323c | #d0d3dc | texte secondaire (cible ≥7:1) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 | documenté : muted ≥7:1 ; sombre #a4a8b4 -> #b0b4bf (6,61 -> 7,58:1) en 190af4b5 |
| --folder-1 | tokens.css :root | #4f86e8 | (identique) | couleur de dossier (organisation seulement) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --folder-1-text | tokens.css :root | #1d64e1 | #6696eb | texte lisible de la couleur de dossier | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --folder-1-tint | tokens.css :root | #eaf1fdd9 | #17243ad9 | teinte de carte de dossier | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --folder-2 | tokens.css :root | #e9824f | (identique) | couleur de dossier (organisation seulement) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --folder-2-text | tokens.css :root | #b64c17 | #e9824f | texte lisible de la couleur de dossier | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --folder-2-tint | tokens.css :root | #fdeee6d9 | #33211ad9 | teinte de carte de dossier | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --folder-3 | tokens.css :root | #3fa56e | (identique) | couleur de dossier (organisation seulement) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --folder-3-text | tokens.css :root | #2e7950 | #40a970 | texte lisible de la couleur de dossier | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --folder-3-tint | tokens.css :root | #e6f4ecd9 | #14291dd9 | teinte de carte de dossier | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --folder-4 | tokens.css :root | #9171db | (identique) | couleur de dossier (organisation seulement) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --folder-4-text | tokens.css :root | #7850d3 | #a185e0 | texte lisible de la couleur de dossier | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --folder-4-tint | tokens.css :root | #f1ecfbd9 | #241d38d9 | teinte de carte de dossier | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --folder-5 | tokens.css :root | #db5f96 | (identique) | couleur de dossier (organisation seulement) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --folder-5-text | tokens.css :root | #c62d71 | #df70a1 | texte lisible de la couleur de dossier | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --folder-5-tint | tokens.css :root | #fbeaf2d9 | #331a26d9 | teinte de carte de dossier | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --folder-6 | tokens.css :root | #2fa4ad | (identique) | couleur de dossier (organisation seulement) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --folder-6-text | tokens.css :root | #22767d | #2fa4ad | texte lisible de la couleur de dossier | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --folder-6-tint | tokens.css :root | #e2f4f5d9 | #112b2dd9 | teinte de carte de dossier | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --folder-7 | tokens.css :root | #a2845e | (identique) | couleur de dossier (organisation seulement) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --folder-7-text | tokens.css :root | #7f6749 | #ab906e | texte lisible de la couleur de dossier | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --folder-7-tint | tokens.css :root | #f3eee7d9 | #2b241bd9 | teinte de carte de dossier | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --folder-8 | tokens.css :root | #7c7c84 | (identique) | couleur de dossier (organisation seulement) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --folder-8-text | tokens.css :root | #636369 | #94949a | texte lisible de la couleur de dossier | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --folder-8-tint | tokens.css :root | #eeeef0d9 | #232326d9 | teinte de carte de dossier | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --glass | looks.css :root, :root[data-look='glass'] | rgb(255 255 255 / 62%) | rgb(38 39 46 / 62%) | verre des éléments flottants (dock, menus, toasts) | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --glass | looks.css :root[data-look='glass'] | #ffffff9e | #23242b85 | verre des éléments flottants (dock, menus, toasts) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| --glass | looks.css :root[data-look='minimal'] | var(--color-card) | (identique) | verre des éléments flottants (dock, menus, toasts) | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --glass | looks.css :root[data-look='paper'] | var(--color-card) | (identique) | verre des éléments flottants (dock, menus, toasts) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --glass | looks.css @media (prefers-contrast: more) :root, :root[data-look] | var(--glass-strong) | (identique) | verre des éléments flottants (dock, menus, toasts) | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --glass | looks.css @media (prefers-reduced-transparency: reduce) :root, :root[data-look] | var(--glass-strong) | (identique) | verre des éléments flottants (dock, menus, toasts) | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --glass | tokens.css :root | #ffffff8c | #26272e80 | verre des éléments flottants (dock, menus, toasts) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --glass | tokens.css @media (prefers-contrast: more) :root | var(--glass-strong) | (identique) | verre des éléments flottants (dock, menus, toasts) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@ad232dfb 2026-10-21 |  |
| --glass-edge | looks.css :root[data-look='minimal'] | var(--color-line) | (identique) | liseré du verre | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --glass-edge | looks.css :root[data-look='paper'] | var(--color-line) | (identique) | liseré du verre | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --glass-edge | looks.css :root[data-look='paper'] | var(--color-line-strong) | (identique) | liseré du verre | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ var(--color-line)) |  |
| --glass-edge | tokens.css :root | #ffffffb3 | #ffffff26 | liseré du verre | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --glass-nav | looks.css :root[data-look='minimal'] | var(--color-card) | (identique) | verre de la navigation | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --glass-nav | looks.css :root[data-look='paper'] | var(--color-card) | (identique) | verre de la navigation | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --glass-nav | tokens.css :root | color-mix(in srgb, var(--color-card) calc(100% - var(--alpha-medium)), transparent) | (identique) | verre de la navigation | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --glass-solid | looks.css :root[data-look='minimal'] | var(--color-card) | (identique) | verre quasi plein derrière les longues lectures (Réglages) | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --glass-solid | looks.css :root[data-look='paper'] | var(--color-card) | (identique) | verre quasi plein derrière les longues lectures (Réglages) | notes-v5@ad232dfb 2026-10-21 | HEAD |  |
| --glass-solid | tokens.css :root | color-mix(in srgb, var(--color-editor) calc(100% - var(--alpha-faint)), transparent) | (identique) | verre quasi plein derrière les longues lectures (Réglages) | notes-v5@82aa90c2 2026-10-21 | HEAD |  |
| --glass-strong | looks.css :root[data-look='minimal'] | var(--color-card) | (identique) | verre renforcé (contraste demandé, transparence réduite) | notes-v5@feebaaea 2026-11-10 | HEAD |  |
| --glass-strong | looks.css :root[data-look='paper'] | var(--color-card) | (identique) | verre renforcé (contraste demandé, transparence réduite) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --glass-strong | tokens.css :root | #ffffffc4 | #1e1f25c9 | verre renforcé (contraste demandé, transparence réduite) | notes-v5@b1f17318 2026-10-21 | HEAD |  |
| --sketch-ink | tokens.css :root | #1c1c1e | (identique) | encre par défaut du croquis | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| --sketch-paper | tokens.css :root | #ffffff | (identique) | papier du croquis | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| --sketch-red | tokens.css :root | #dc2626 | (identique) | rouge du croquis | notes-v5@1c1fb148 2026-11-11 | HEAD |  |
| --tone-blue | tokens.css :root | #007aff | #0a84ff | ton système iOS par type de note (KIND_TONE) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --tone-gray | tokens.css :root | #8e8e93 | #98989d | ton système iOS par type de note (KIND_TONE) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --tone-green | tokens.css :root | #34c759 | #30d158 | ton système iOS par type de note (KIND_TONE) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --tone-indigo | tokens.css :root | #5856d6 | #5e5ce6 | ton système iOS par type de note (KIND_TONE) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --tone-orange | tokens.css :root | #ff9500 | #ff9f0a | ton système iOS par type de note (KIND_TONE) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --tone-pink | tokens.css :root | #ff2d55 | #ff375f | ton système iOS par type de note (KIND_TONE) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --tone-purple | tokens.css :root | #af52de | #bf5af2 | ton système iOS par type de note (KIND_TONE) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --tone-red | tokens.css :root | #ff3b30 | #ff453a | ton système iOS par type de note (KIND_TONE) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --tone-teal | tokens.css :root | #30b0c7 | #40c8e0 | ton système iOS par type de note (KIND_TONE) | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@82aa90c2 2026-10-21 |  |
| --veil-photo | tokens.css :root | linear-gradient(180deg, rgb(0 0 0 / var(--alpha-medium)), rgb(0 0 0 / calc(100% - var(--alpha-medium)))) | (identique) | dégradé sous le texte posé sur une photo | notes-v5@82aa90c2 2026-10-21 | HEAD |  |

## 2. Valeurs de couleur écrites en dur dans app.css

Au premier commit, app.css portait des couleurs littérales ; `82aa90c2` et `67979ff5` les ont remplacées par des jetons (message de `67979ff5` : « colour literals 27 → 0 »). Restent à HEAD seulement les masques (`#000` dans un dégradé d'alpha) et la feuille d'impression.

| propriété | valeur | sélecteurs | première apparition | dernier état |
|---|---|---|---|---|
| --tone-ink | light-dark(color-mix(in oklab, var(--tone) 74%, #000), color-mix(in oklab, var(--tone) 85%, #fff)) | [data-tone] | notes-v5@b1f17318 2026-10-21 | SUPPRIMÉ notes-v5@6840b25e 2026-10-22 |
| -webkit-mask-image | linear-gradient(#000 calc(100% - 2.6em), transparent) | .card-body.is-clamped | notes-v5@b1f17318 2026-10-21 | HEAD |
| @body | 50% { box-shadow: 0 0 0 8px light-dark(#d7001520, #ff696126); } | @keyframes pulse | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ 50% { box-shadow: 0 0 0 8px var(--color-danger-tint); }) |
| background | #0007 | .att-remove | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--color-shade)) |
| background | #fff | .seek::-moz-range-thumb; .seek::-webkit-slider-thumb; .switch i | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ var(--color-on-strong)) |
| background | light-dark(#d7001514, #ff696124) | .notice.alert | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--color-danger-tint)) |
| background | light-dark(#eef0f633, #08090c4d) | .scrim | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ color-mix(in srgb, var(--color-bg) var(--alpha-medium), tran) |
| background | light-dark(#f7f8fbf2, #17181df2) | .sheet.glass | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--glass-solid)) |
| background | light-dark(#fff, #3a3b43) | .seg-thumb | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--color-raised)) |
| background | light-dark(#ffffffd6, #25262cd9) | .dock .island.glass, .editor-dock .island.glass, .header-tools.glass | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--glass-nav)) |
| background | linear-gradient(180deg, #0005, #000b) | .widget:has(img) | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--veil-photo)) |
| border | 2px solid #fff | .check-hit input:checked::after | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ 2px solid var(--color-on-strong)) |
| box-shadow | 0 1px 3px #0002, inset 0 1px 0 #fff5 | .seg-thumb | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--shadow-1)) |
| box-shadow | 0 1px 4px #0005 | .seek::-moz-range-thumb; .seek::-webkit-slider-thumb | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--shadow-knob)) |
| box-shadow | 0 2px 6px #0003 | .switch i | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--shadow-knob)) |
| box-shadow | 0 4px 14px #0002 | .about-icon | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--shadow-2)) |
| box-shadow | inset 0 1px 0 #fff9, inset 0 -2px 6px #c8950a55, var(--color-accent-glow), 0 2px 6px #0002 | .fab | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ var(--shadow-fab)) |
| color | #000 | #print-area | notes-v5@b1f17318 2026-10-21 | HEAD |
| color | #fff | .action-btn.armed; .att-remove; .card.selected .card-check (+4) | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ var(--color-on-strong)) |
| color | #fffd | .widget:has(img) .widget-label, .widget:has(img) .widget-detail | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@82aa90c2 2026-10-21 (→ color-mix(in srgb, var(--color-on-strong) calc(100% - var(--) |
| mask-image | linear-gradient(#000 calc(100% - 2.6em), transparent) | .card-body.is-clamped | notes-v5@b1f17318 2026-10-21 | HEAD |
| mask-image | linear-gradient(180deg, transparent 20%, #000 20% 80%, transparent 80%) | .art-card i.art-wave | notes-v5@b1f17318 2026-10-21 | HEAD |
| stroke | #fff | .swipe-icon svg | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@67979ff5 2026-10-21 (→ var(--color-on-strong)) |

## 3. Couleurs hors feuilles de style

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| theme-color (clair) | #EEF0F6 | src/routes/__root.tsx (balise meta) | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@945cd023 2026-10-21 (→ #F4F5F8) | suit le sol Glass d'origine |
| theme-color (sombre) | #08090C | src/routes/__root.tsx | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@945cd023 2026-10-21 (→ #0B0C0F) | |
| theme-color (clair) | #F4F5F8 | __root.tsx puis index.html | notes-v5@945cd023 2026-10-21 | HEAD | déplacé dans index.html par notes-v5@19c7ee4b 2026-11-07 ; « la balise suit Glass », une balise statique ne suit pas le look (design-teardown) |
| theme-color (sombre) | #0B0C0F | __root.tsx puis index.html | notes-v5@945cd023 2026-10-21 | HEAD | |
| manifest background_color et theme_color | #EEF0F6 | public/manifest.webmanifest | notes-v5@b1f17318 2026-10-21 | HEAD | jamais modifié : diffère du theme-color de index.html (#F4F5F8) |
| sol de premier affichage (clair) | #eef0f6 | src/styles.css `html {}` | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ #f4f5f8) | |
| sol de premier affichage (sombre) | #08090c | src/styles.css (prefers-color-scheme: dark) | notes-v5@b1f17318 2026-10-21 | REMPLACÉ notes-v5@ad232dfb 2026-10-21 (→ #0b0c0f) | |
| sol de premier affichage Glass clair / sombre | #f4f5f8 / #0b0c0f | src/styles.css `:where(html)` | notes-v5@ad232dfb 2026-10-21 | HEAD | |
| sol de premier affichage Paper clair / sombre | #f7f4ec / #121110 | src/styles.css `:where(html[data-look="paper"])` | notes-v5@ad232dfb 2026-10-21 | HEAD | |
| sol de premier affichage Minimal | (aucune règle) | src/styles.css | — | HEAD | le look Minimal (bg #fafaf9 / #101115) n'a pas de règle de premier affichage : il montre le sol Glass jusqu'au chargement du CSS de l'app |
| couleurs du croquis | #1c1c1e (encre), #ffffff (papier), #dc2626 (rouge) | tokens.css `--sketch-*` | notes-v5@1c1fb148 2026-11-11 | HEAD | |
| fond OLED | #000 (bg et editor, sombre) | tokens.css `:root[data-look][data-oled='true']` | notes-v5@1c1fb148 2026-11-11 | HEAD | sélecteur re-scopé par notes-v5@89526ff2 2026-11-11 pour passer devant les looks |
| icône d'application | fond ambre (PNG) | public/icons/*.png, favicon.ico | notes-v5@b1f17318 2026-10-21 | HEAD | voir icons.md ; pixels non analysés |

## 4. Palette effective à HEAD par look (résolue : valeur du look sinon valeur de tokens.css)

Les références `var(--…)` ne sont pas résolues. Accents : voir themes.md.

| jeton | Glass clair | Glass sombre | Paper clair | Paper sombre | Minimal clair | Minimal sombre |
|---|---|---|---|---|---|---|
| --color-bg | #f4f5f8 | #0b0c0f | #f7f4ec | #121110 | #fafaf9 | #101115 |
| --color-card | #ffffff | #17181d | #fffdf7 | #1c1a17 | #ffffff | #1b1d23 |
| --color-raised | #ffffff | #34353d | #fffdf7 | #2c2925 | #ffffff | #363943 |
| --color-editor | #fafbfc | #0e0f13 | var(--color-card) | (identique) | #ffffff | #15171c |
| --color-text | #16171b | #f2f3f7 | #1f1b16 | #f3efe6 | #171717 | #f2f3f5 |
| --color-text-muted | #484c59 | #b0b4bf | #4a4339 | #bdb5a7 | #50545d | #c0c4cc |
| --color-text-faint | #5d616d | #8e929b | #5f574b | #a39b8d | #626772 | #aab0bb |
| --color-accent | #f4c542 | (identique) | #f2b632 | (identique) | var(--accent-amber) | (identique) |
| --color-accent-deep | #8c6600 | #e0ac1c | #7d5800 | #f2b632 | #8c6600 | #e0ac1c |
| --color-accent-stroke | #d9a514 | (identique) | #c9921a | (identique) | #d9a514 | (identique) |
| --color-on-accent | #1a1608 | (identique) | #1f1b16 | (identique) | #1a1608 | (identique) |
| --color-select | #0062cc | #0a84ff | #2f5bd3 | #8aa6f2 | #0062cc | #0a84ff |
| --color-danger | #d70015 | #ff6961 | #c8322b | #ff7a6e | #d70015 | #ff6961 |
| --color-success | #1e7a35 | #40a970 | #1e7a35 | #40a970 | #1e7a35 | #40a970 |
| --color-highlight | #fbe7a1 | #5a4610 | #f6e2a2 | #4d3d12 | #fbe7a1 | #5a4610 |
| --glass | rgb(255 255 255 / 62%) | rgb(38 39 46 / 62%) | var(--color-card) | (identique) | var(--color-card) | (identique) |
| --glass-strong | #ffffffc4 | #1e1f25c9 | var(--color-card) | (identique) | var(--color-card) | (identique) |
| --glass-blur | blur(28px) saturate(180%) | (identique) | none | (identique) | none | (identique) |

## 5. Contrastes documentés dans le dépôt

Source : `docs/design-teardown.md` (notes-v5@499ece81 2026-10-21), `docs/shots/results.json` (notes-v5@190af4b5 2026-10-21), messages de commit.

| mesure | valeur | source |
|---|---|---|
| texte ≥4,5:1, secondaire (muted) ≥7:1 | cible du propriétaire du dépôt pour les deux looks | design-teardown §1 KEEP, AGENTS.md |
| 664 passes de contraste sur 20 écrans | 0 échec | notes-v5@190af4b5 |
| échec trouvé puis corrigé | texte muted sur widget teinté, Glass sombre, 6,61:1 ; encre sombre #a4a8b4 -> #b0b4bf = 7,58:1 | notes-v5@190af4b5 |
| baseline avant travail | 10 échecs, libellés muted des contrôles segmentés sombres (6,22:1 Glass, 6,73:1 Paper) | design-teardown §4 |
| #0a84ff sur blanc | 3,6:1 → bleu clair devenu #0062cc | design-teardown §5 |
| contraste renforcé (prefers-contrast: more) | muted ≥ 11,44 à 13,26:1 selon look et mode | design-teardown §4 |
| 716 passes sur 28 écrans (Bibliothèque, Créer, puces) | 0 échec | notes-v5@6840b25e, notes-v5@2466c955 |
| 280 passes sur 16 écrans | 0 échec | notes-v5@1af74e0e |
| Glass clair, 390, accueil : min texte / muted / faint | 5,29 / 7,85 / 5,67 | results.json |
| Glass sombre, 390, accueil | 4,86 / 8,55 / 5,68 | results.json |
| Paper clair, 390, accueil | 5,20 / 8,87 / 6,47 | results.json |
| Paper sombre, 390, accueil | 5,41 / 8,54 / 6,31 | results.json |
| Minimal : contrastes | non mesurés dans le dépôt ; le message de notes-v5@feebaaea dit « accessible opaque palette », sans chiffre | looks.css |
