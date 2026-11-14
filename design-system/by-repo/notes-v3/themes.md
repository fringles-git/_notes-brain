Source : notes-v3, commits lus : 135 (9 lignée notes-site, 83 lignée source main, 43 builds notes-v3-site), plage : 2026-10-09 à 2026-10-31

# Thèmes et « looks »

Un thème (clair, sombre, auto) est le mécanisme `light-dark()` + `:root[data-theme]` ; un « look » est un ensemble de jetons surchargés sur `<html data-look>` ; un accent surcharge les jetons ambrés sur `<html data-accent>`. « Un look ne fait que repointer des jetons ; les composants ne testent jamais le look » (looks.css).

| nom | type | introduit | retiré | différences de jetons | notes |
|---|---|---|---|---|---|
| Clair / Sombre / Auto | thème | notes-v3@b6647a04 2026-10-09 | HEAD | `:root{color-scheme:light dark}`, `:root[data-theme=light|dark]` ; réglage « Thème » (Auto, Clair, Sombre) avec icônes themeAuto/themeLight/themeDark ; bundle : fond #F2F2F7 / #000, source : #eef0f6 / #08090c | Vite 8 : `cssTarget` garde `light-dark()` natif (notes-v3@117ee61b 2026-10-29) |
| Verre (glass, défaut) | look | verre liquide notes-v3@4da62555 2026-10-18 (nommé « Verre » notes-v3@fbf13b31 2026-10-24) | HEAD | défaut sans surcharge : `--glass-blur:blur(24px) saturate(180%)` (22px/190 % à l'origine, notes-v3@926abbd6 2026-10-18), `--glass-shine`, `--glass-shadow`, fond ambiant `--ambient-1..3` ; rayons ÷3 | bundle : variables `--color-glass`, `--blur-glass:blur(24px) saturate(180%)` depuis notes-v3@b6647a04 2026-10-09 |
| Papier (paper) | look | notes-v3@fbf13b31 2026-10-24 | HEAD | `--color-bg:#f7f4ec/#121110`, cartes `#fffdf7/#1c1a17`, texte `#1f1b16/#f3efe6`, pas de verre (`--glass-blur:none`, `--glass-shadow:0 0 0 1px var(--color-line)`), `--leading:1.55`, `--radius-ratio:4.8`, focus encre, danger `#c8322b/#ff7a6e` | barres système : crème `247,244,236` / `18,17,16` |
| Acrylique (acrylic) | look | notes-v3@3687c668 2026-10-31 | HEAD | `--glass:#f6f7f9b8/#2a2b30b8`, `--glass-strong`, `--glass-sheet`, `--glass-dock`, `--glass-edge:#0000001a/#ffffff1f`, `--glass-blur:blur(32px) saturate(120%)`, `--glass-shine` = grain SVG feTurbulence, `--glass-shadow` plat | « Plus de reflet ni de relief : le sombre reste calme » ; grain : svg/acrylic-grain-*.svg |
| Ambre | accent (défaut) | `--color-accent:#f4c542` notes-v3@b6647a04 2026-10-09 | HEAD | `--accent-amber:#f4c542` (notes-v3@15678aae 2026-10-29), `--color-on-accent` #1a1608 ; ambre = créer et épinglées | « Notes yellow » |
| Abricot | accent | notes-v3@fbf13b31 2026-10-24 | HEAD | `--accent-apricot:#f59e5b`, `--color-accent-deep` #9a4a0f/#f8a76b, `--color-on-accent:#2a1505` ; contraste renforcé #7a3a08/#f8a76b (notes-v3@fe7ee2da 2026-10-29) | |
| Lilas | accent | notes-v3@fbf13b31 2026-10-24 | HEAD | `--accent-lilac:#b9a2f5`, `--color-accent-deep` #5b3fc4/#c3b1f7, `--color-on-accent:#1d1433` ; contraste renforcé #4a30a8/#c3b1f7 (notes-v3@fe7ee2da 2026-10-29) | |
| Fond coloré « ambiant » | décor | notes-v3@4da62555 2026-10-18 | restreint notes-v3@35c0380c 2026-10-21 | `--ambient-1..3` (jaune, bleu, rose) derrière tout ; « le fond coloré reste pour l'accueil » (`.ambient` seulement si `welcome`) ; Papier : fond uni | |
| Couleur des dossiers | option | `Pastille`/`Teinter` notes-v3@b6647a04 2026-10-09 | HEAD | 8 couleurs `--folder-N` (#4f86e8, #e9824f, #3fa56e, #9171db, #db5f96, #2fa4ad, #a2845e, #7c7c84), teintes et textes lisibles | |
| Police Literata | choix de police des notes | notes-v3@d6af8790 2026-10-19 | notes-v3@ef23bea4 2026-10-19 | `--font-serif`, `body[data-font=serif]` | voir typography.md |
| Main dominante | disposition | notes-v3@b6647a04 2026-10-09 | HEAD | `body[data-hand=left]` inverse la barre et les panneaux | |

## Surcharges de jetons par look (lignes de looks.css, avec périodes)

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| :root[data-look='paper'] --color-text-faint | `light-dark(#3d362c, #c4bcae)` | looks.css · @media (prefers-contrast: more) | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --color-text-muted | `light-dark(#2e2820, #d8d1c4)` | looks.css · @media (prefers-contrast: more) | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root, :root[data-look] --glass | `var(--glass-strong)` | looks.css · @media (prefers-reduced-transparency: reduce) | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root, :root[data-look] --glass-blur | `none` | looks.css · @media (prefers-reduced-transparency: reduce) | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| .accent-dot[data-accent='apricot'] background | `#f59e5b` | looks.css | notes-v3@fbf13b31 2026-10-24 | REMPLACÉ notes-v3@15678aae 2026-10-29 | Port V5 Style/Accent, harden import equality, fix multi-att… |
| .accent-dot[data-accent='apricot'] background | `var(--accent-apricot)` | looks.css | notes-v3@15678aae 2026-10-29 | HEAD | move every colour into tokens and fail the smoke on a stray… |
| .accent-dot[data-accent='lilac'] background | `#b9a2f5` | looks.css | notes-v3@fbf13b31 2026-10-24 | REMPLACÉ notes-v3@15678aae 2026-10-29 | Port V5 Style/Accent, harden import equality, fix multi-att… |
| .accent-dot[data-accent='lilac'] background | `var(--accent-lilac)` | looks.css | notes-v3@15678aae 2026-10-29 | HEAD | move every colour into tokens and fail the smoke on a stray… |
| .accent-dot background | `#f4c542` | looks.css | notes-v3@fbf13b31 2026-10-24 | REMPLACÉ notes-v3@15678aae 2026-10-29 | Port V5 Style/Accent, harden import equality, fix multi-att… |
| .accent-dot background | `var(--accent-amber)` | looks.css | notes-v3@15678aae 2026-10-29 | HEAD | move every colour into tokens and fail the smoke on a stray… |
| .accent-dot border-radius | `50%` | looks.css | notes-v3@fbf13b31 2026-10-24 | REMPLACÉ notes-v3@fe7ee2da 2026-10-29 | Port V5 Style/Accent, harden import equality, fix multi-att… |
| .accent-dot border-radius | `calc(var(--h) / var(--radius-ratio))` | looks.css | notes-v3@fe7ee2da 2026-10-29 | HEAD | measure contrast from tokens; theme-aware ink on fills and … |
| .accent-dot box-shadow | `inset 0 0 0 1px var(--color-line-strong)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| .accent-dot display | `inline-block` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| .accent-dot height | `12px` | looks.css | notes-v3@fbf13b31 2026-10-24 | REMPLACÉ notes-v3@fe7ee2da 2026-10-29 | Port V5 Style/Accent, harden import equality, fix multi-att… |
| .accent-dot height | `var(--h)` | looks.css | notes-v3@fe7ee2da 2026-10-29 | HEAD | measure contrast from tokens; theme-aware ink on fills and … |
| .accent-dot width | `12px` | looks.css | notes-v3@fbf13b31 2026-10-24 | REMPLACÉ notes-v3@fe7ee2da 2026-10-29 | Port V5 Style/Accent, harden import equality, fix multi-att… |
| .accent-dot width | `var(--h)` | looks.css | notes-v3@fe7ee2da 2026-10-29 | HEAD | measure contrast from tokens; theme-aware ink on fills and … |
| :root[data-accent='apricot'] --color-accent | `#f59e5b` | looks.css | notes-v3@fbf13b31 2026-10-24 | REMPLACÉ notes-v3@15678aae 2026-10-29 | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-accent='apricot'] --color-accent | `var(--accent-apricot)` | looks.css | notes-v3@15678aae 2026-10-29 | HEAD | move every colour into tokens and fail the smoke on a stray… |
| :root[data-accent='apricot'] --color-accent-deep | `light-dark(#9a4a0f, #f8a76b)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-accent='apricot'] --color-accent-glow | `0 8px 24px light-dark(#f59e5b70, #f59e5b40)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-accent='apricot'] --color-on-accent | `#2a1505` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-accent='lilac'] --color-accent | `#b9a2f5` | looks.css | notes-v3@fbf13b31 2026-10-24 | REMPLACÉ notes-v3@15678aae 2026-10-29 | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-accent='lilac'] --color-accent | `var(--accent-lilac)` | looks.css | notes-v3@15678aae 2026-10-29 | HEAD | move every colour into tokens and fail the smoke on a stray… |
| :root[data-accent='lilac'] --color-accent-deep | `light-dark(#5b3fc4, #c3b1f7)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-accent='lilac'] --color-accent-glow | `0 8px 24px light-dark(#b9a2f570, #b9a2f540)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-accent='lilac'] --color-on-accent | `#1d1433` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'][data-accent='apricot'], :root[data-look='paper'][data-accent='lilac'] --color-accent-glow | `0 0 transparent` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --ambient-1 | `var(--color-bg)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --ambient-2 | `var(--color-bg)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --ambient-3 | `var(--color-bg)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --color-accent-glow | `0 0 transparent` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --color-bg | `light-dark(#f7f4ec, #121110)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --color-card | `light-dark(#fffdf7, #1c1a17)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --color-card-solid | `var(--color-card)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --color-danger | `light-dark(#c8322b, #ff7a6e)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --color-editor | `var(--color-card)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --color-focus | `var(--color-text)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --color-highlight | `light-dark(#f6e2a2, #4d3d12)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --color-on-accent | `#1f1b16` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --color-scrim | `light-dark(#1f1b1633, #000000a6)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --color-select | `light-dark(#2f5bd3, #8aa6f2)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --color-text | `light-dark(#1f1b16, #f3efe6)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --color-text-faint | `light-dark(#5f574b, #a39b8d)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --color-text-muted | `light-dark(#4a4339, #bdb5a7)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --glass | `var(--color-card)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --glass-blur | `none` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --glass-edge | `var(--color-line)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --glass-shadow | `0 0 0 1px var(--color-line)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --glass-shine | `none` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --glass-strong | `var(--color-card)` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --leading | `1.55` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-look='paper'] --radius-ratio | `4.8` | looks.css | notes-v3@fbf13b31 2026-10-24 | HEAD | Port V5 Style/Accent, harden import equality, fix multi-att… |
| :root[data-accent='apricot'] --color-accent-deep | `light-dark(#7a3a08, #f8a76b)` | looks.css · @media (prefers-contrast: more) | notes-v3@fe7ee2da 2026-10-29 | HEAD | measure contrast from tokens; theme-aware ink on fills and … |
| :root[data-accent='lilac'] --color-accent-deep | `light-dark(#4a30a8, #c3b1f7)` | looks.css · @media (prefers-contrast: more) | notes-v3@fe7ee2da 2026-10-29 | HEAD | measure contrast from tokens; theme-aware ink on fills and … |
| .accent-dot --h | `12px` | looks.css | notes-v3@fe7ee2da 2026-10-29 | HEAD | measure contrast from tokens; theme-aware ink on fills and … |
| :root[data-look='acrylic'] --glass | `light-dark(#f6f7f9b8, #2a2b30b8)` | looks.css | notes-v3@3687c668 2026-10-31 | HEAD | Acrylique look: flat frosted surface, no bevel |
| :root[data-look='acrylic'] --glass-blur | `blur(32px) saturate(120%)` | looks.css | notes-v3@3687c668 2026-10-31 | HEAD | Acrylique look: flat frosted surface, no bevel |
| :root[data-look='acrylic'] --glass-dock | `light-dark(#f4f5f8eb, #2a2b30eb)` | looks.css | notes-v3@3687c668 2026-10-31 | HEAD | Acrylique look: flat frosted surface, no bevel |
| :root[data-look='acrylic'] --glass-edge | `light-dark(#0000001a, #ffffff1f)` | looks.css | notes-v3@3687c668 2026-10-31 | HEAD | Acrylique look: flat frosted surface, no bevel |
| :root[data-look='acrylic'] --glass-shadow | `0 1px 0 light-dark(#0000000a, #0000001f), 0 8px 28px light-dark(#12183024, #00000080)` | looks.css | notes-v3@3687c668 2026-10-31 | HEAD | Acrylique look: flat frosted surface, no bevel |
| :root[data-look='acrylic'] --glass-sheet | `light-dark(#f8f9fbf5, #1d1e22f5)` | looks.css | notes-v3@3687c668 2026-10-31 | HEAD | Acrylique look: flat frosted surface, no bevel |
| :root[data-look='acrylic'] --glass-shine | `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n' x='0' y='0' width='100%25' height='100%…` | looks.css | notes-v3@3687c668 2026-10-31 | HEAD | Acrylique look: flat frosted surface, no bevel |
| :root[data-look='acrylic'] --glass-strong | `light-dark(#f8f9fbe0, #26272cdc)` | looks.css | notes-v3@3687c668 2026-10-31 | HEAD | Acrylique look: flat frosted surface, no bevel |
