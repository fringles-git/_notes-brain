Source : notepad-pwa, commits lus : 7, plage : 2026-10-20 à 2026-11-10

Références : A = notepad-pwa@3c6f6152 2026-10-20, B = notepad-pwa@576a8c9d 2026-10-20, C = notepad-pwa@76dfefe5 2026-10-20, D = notepad-pwa@a488cc67 2026-10-20 (CSS supprimé en D ; "dernier état" = dernier CSS connu, C).

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| --shadow clair | 0 18px 40px rgba(15,23,42,0.08) | CSS :root | A | REMPLACÉ en B | |
| --shadow clair | 0 18px 44px rgba(15,23,42,0.08) | CSS :root | B | C | |
| --shadow sombre | 0 18px 40px rgba(2,6,23,0.56) | CSS body.dark | A | REMPLACÉ en B | |
| --shadow sombre | 0 20px 52px rgba(2,6,23,0.58) | CSS body.dark | B | C | |
| application de l'ombre | .panel, .brand-row, .editor-area | CSS | A | C | B regroupe les trois sélecteurs |
| ombre du toast | var(--shadow) | CSS .toast | B | C | absente en A |
| ombre interne de l'éditeur | clair : inset 0 2px 18px rgba(15,23,42,0.05) ; sombre : inset 0 2px 18px rgba(2,6,23,0.3) | CSS #editor, body.dark #editor | C | C | |
| anneau de focus | 0 0 0 3px rgba(59,130,246,0.12) + border-color rgba(59,130,246,0.45) | CSS | A (#editor), C (champs de recherche et titre) | C | pas de :focus-visible ; outline: none |
| flou (verre) | backdrop-filter: blur(18px) sur .panel seulement | CSS | A | REMPLACÉ en B | .brand-row et .editor-area sans flou en A |
| flou (verre) | backdrop-filter: blur(16px) sur .brand-row, .panel, .editor-area | CSS | B | C | |
| saturation | aucune (pas de saturate()) | | | | |
| fond translucide des panneaux | var(--panel) rgba 0.7/0.78 (A), 0.72/0.76 (B, C) | CSS | A | C | voir colors.md |
| opacités | .toast opacity 0 puis .show opacity 1 ; fonds rgba 0.02 à 0.12 | CSS | A | C | |
| z-index | aucun | | | | aucune échelle ; .toast en position: fixed sans z-index |
| transition body | background 0.2s ease, color 0.2s ease | CSS | A | C | |
| transition button | transform 0.15s ease, opacity 0.15s ease, border-color 0.15s ease | CSS | A | C | |
| survol bouton | transform: translateY(-1px) | CSS button:hover | A | C | |
| transition .toast | all 0.2s ease ; état caché translateY(10px), visible translateY(0) | CSS | A | C | durée d'affichage JS : 2000 ms (A), 2200 ms (B, C) |
| @keyframes | aucun | | | | |
| prefers-reduced-motion | aucun | | | | |
| prefers-color-scheme | aucun (thème par classe body.dark, sombre par défaut) | | | | |
