Source : notes-aistudio, commits lus : 7 (hors fusion 20ad6c90), plage : 2026-10-31 à 2026-11-06

Références : A0 = notes-aistudio@9021b9bc 2026-10-31, A1 = @d2819fcc 2026-11-02, A2 = @6dbe9114, A3 = @6fc4b9d7. HEAD = @407c8f6d 2026-11-06. `src/styles/looks.css` (70 lignes) est identique de A0 à HEAD ; les trois « looks » sont posés sur `<html data-look>` avant la première peinture par un script dans `index.html` (clé localStorage `notes:look`, défaut `glass`). Réglages > Style (libellés fr.ts : `opt.glass` « Verre », `opt.acrylic` « Acrylique », `opt.paper` « Papier ») ; accents `data-accent` : Ambre (défaut), Abricot, Lilas.

| thème / look | différences de jetons | introduit | retrait | réf |
|---|---|---|---|---|
| Verre (glass), défaut | aucun override ; `--glass` light-dark(#ffffff8c, #26272e80), blur(24px) saturate(180%), reflet `--glass-shine`, fond calme #eef0f6 / #08090c | notes-aistudio@9021b9bc 2026-10-31 | HEAD | tokens.css |
| Acrylique | `--glass` #f6f7f9b8 / #2a2b30b8 ; `--glass-strong`, `--glass-sheet`, `--glass-dock` plus opaques ; `--glass-edge` #0000001a / #ffffff1f ; blur(32px) saturate(120%) ; grain fractalNoise en SVG data-URI (14 % max) ; ombre plate sans liseré clair | notes-aistudio@9021b9bc | HEAD | looks.css |
| Papier | fond #f7f4ec / #121110 ; carte #fffdf7 / #1c1a17 ; texte #1f1b16 / #f3efe6 ; `--leading` 1.55 ; `--radius-ratio` 4.8 ; `--glass` = carte, blur et reflet à none ; accent-glow supprimé ; `--color-select` #2f5bd3 / #8aa6f2 ; `--color-danger` #c8322b / #ff7a6e | notes-aistudio@9021b9bc | HEAD | looks.css |
| Accent Ambre | `--color-accent` #f4c542 ; `--color-accent-deep` #8c6600 / #e0ac1c ; `--color-on-accent` #1a1608 | notes-aistudio@9021b9bc | HEAD | tokens.css |
| Accent Abricot | #f59e5b ; deep #9a4a0f / #f8a76b ; on-accent #2a1505 | notes-aistudio@9021b9bc | HEAD | looks.css |
| Accent Lilas | #b9a2f5 ; deep #5b3fc4 / #c3b1f7 ; on-accent #1d1433 | notes-aistudio@9021b9bc | HEAD | looks.css |
| Mode : automatique / clair / sombre | `color-scheme: light dark` ; `data-theme` force ; `data-theme='light'` / `'dark'` | notes-aistudio@9021b9bc | HEAD | tokens.css |
| Noir OLED | `[data-theme='dark'][data-oled='true']` : `--color-bg` #000000, `--color-card` #08080a | notes-aistudio@d2819fcc 2026-11-02 | HEAD | tokens.css |
| Préférences d'apparence (Réglages) | échelle de police small 14px / large 18px ; densité compact (gap 4px, lignes 40px, réglages 44px) ; bordures 1px `--color-line-strong` ; mouvement réduit ; contraste élevé | notes-aistudio@d2819fcc | HEAD | app.css fin de fichier |
| Contraste forcé / transparence réduite / impression | blocs `forced-colors`, `prefers-contrast: more`, `prefers-reduced-transparency` | notes-aistudio@9021b9bc | HEAD | tokens.css, looks.css, app.css |
