Source : notes-v6, commits lus : 23, plage : 2026-10-28 à 2026-11-02

Références : sigles de colors.md (V0 = notes-v6@57c25ea2 ... V9 = @c2701fc1 = HEAD de main ; BR1 à BR5 = commits non fusionnés). Un seul « look » (papier chaud, une lampe ambre). Pas de thèmes nommés Verre, Acrylique ni Papier : le mode papier est une option d'éditeur (Literata).

| thème / look | différences de jetons | introduit | retrait | réf |
|---|---|---|---|---|
| clair | --canvas #f5f4ef, --surface #fffefa, --ink #242623 | notes-v6@57c25ea2 2026-10-28 | HEAD | colors.md |
| sombre | --canvas #171918, --surface #202321, --ink #f2f0e8 (« warm-tinted, never neutral #111 ») | notes-v6@57c25ea2 | HEAD | colors.md |
| Système | V2 (@34172c2a) : `data-theme='system'` (non résolu en CSS) ; V4 revue : « data-theme="system" never applies dark neutrals » ; BR1 (@d11bb77c, non fusionné) et e309072e (main) : `data-theme` écrit résolu ; V5 (@c80dbb09) : bloc sombre complet dans `@media (prefers-color-scheme: dark)` pour `data-theme='system'` | notes-v6@34172c2a 2026-10-28 | HEAD (corrigé en notes-v6@e309072e 2026-10-31 et @c80dbb09) | |
| accent ambre | --accent-base #f4c430, --accent-action #e0a816 | V0 | HEAD | |
| accent lilas | --accent-base #b99ff5, --accent-action #7e52e8 (clair) / #9c77ed (sombre jusqu'à V1) | V0 | HEAD | |
| contraste renforcé | --text-muted #484d46, --text-subtle #62675f, --border-control #81877d (clair) ; #bcc2b8, #a4aca1, #858e83 (sombre) ; --danger #882f28 (clair) / #ffb4aa (sombre) | notes-v6@c80dbb09 2026-10-31 | HEAD | colors.md |
| mode papier de l'éditeur | Literata 16px / 1.95 ; classe `.paper-mode` | notes-v6@a0935371 (dans le code depuis V0) | HEAD | typography.md |
