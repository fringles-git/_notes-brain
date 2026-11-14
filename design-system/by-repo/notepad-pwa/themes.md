Source : notepad-pwa, commits lus : 7, plage : 2026-10-20 à 2026-11-10

Deux "looks" seulement, sans nom : clair (`:root`) et sombre (`body.dark`), à bascule manuelle (bouton ◐ ou Ctrl/Cmd+Shift+L), sombre par défaut, mémorisé dans localStorage ('notepad-pwa-settings', clé darkMode). Aucun suivi de `prefers-color-scheme`. Aucun thème Verre, Acrylique ou Papier. L'aspect "verre" (panneaux semi-transparents + `backdrop-filter`) est permanent dans les deux thèmes.

| thème | différences de jetons | introduit | retrait | réf |
|---|---|---|---|---|
| clair | --bg #f4f7fb (puis #f3f7ff), --text #0f172a, --primary #2563eb | notepad-pwa@3c6f6152 2026-10-20 | CSS supprimé notepad-pwa@a488cc67 2026-10-20 (le comportement existe encore dans le JS) | colors.md |
| sombre | --bg #0b1020 (puis #090d18), --text #e5eefb, --primary #60a5fa | notepad-pwa@3c6f6152 2026-10-20 | idem | colors.md |
| mode focus (variante de mise en page) | masque sidebar, tools-panel, topbar | notepad-pwa@3c6f6152 2026-10-20 | idem | layout.md |
