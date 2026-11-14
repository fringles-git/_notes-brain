Source : mindspace-old, commits lus : 222 (registre part1, diffs complets) + 16 commits de design hors part1 + sujets de 493 commits (grep design) + 47 titres de PR, plage : 2026-11-02 à 2026-11-10

# Décisions de design citées

| date | réf | décision (citation courte) | catégorie |
|---|---|---|---|
| 2026-11-05 | mindspace-old@25206522 DESIGN_SYSTEM.md | « shadcn-compatible, not an installed shadcn/ui or Radix component package. Do not introduce a Tailwind 3 tailwind.config.js » | architecture |
| 2026-11-05 | @25206522 | rayons 8 / 16 / 24 / 30 / 32 / 9999 px ; mouvements 150 ms et 220 ms | rayons, mouvement |
| 2026-11-05 | @25206522 | « A CSS border-radius is an approximation of an Apple-style continuous G² curve » | rayons |
| 2026-11-05 | @25206522 | « .ms-glass … is not native iOS Liquid Glass refraction. Never apply to large text reading surfaces » | verre |
| 2026-11-05 | @25206522 | Button « min-h-11 rounded-xl px-4 », champs « min-h-11 » | composants, cibles |
| 2026-11-05 | @1cfd405a | « buttons 44px minimum touch targets where practical » ; captures 390 et 1440 px clair/sombre | accessibilité |
| 2026-11-05 | @1cfd405a | « The changelog is manually authored » ; ajout en tête de RELEASE_LIST | processus |
| 2026-11-05 | @d5a8114b | « do not remap the Tailwind rounded-lg or rounded-xl utility values globally » | rayons |
| 2026-11-05 | @d5a8114b | ombres : « visual sign-off pending » | ombres |
| 2026-11-05 | @d5a8114b | contraste >= 4.5:1 des badges et du verre sur #000 et #fff | accessibilité |
| 2026-11-05 | @66a0c3dc | « Provisional shadow values: visual sign-off required across themes » | ombres |
| 2026-11-05 | @66a0c3dc | « Preserve Tailwind native rounded-lg/xl values until their existing consumers migrate » | rayons |
| 2026-11-05 | @29b654ea | concentricité : « Variables must be inherited from a concentric parent; no silent radius fallback » | rayons |
| 2026-11-05 | @de556ab2 DESIGN_SYSTEM.md | mobile < 768px : barre basse Notes, Créer, Tâches, masquée au focus de l'éditeur, action « Terminer » | navigation |
| 2026-11-05 | @de556ab2 | iPad 768-1199px : rail gauche par défaut, options droite et bas ; « Never infer hand dominance, never relocate controls automatically » | navigation |
| 2026-11-05 | @de556ab2 | « top bar, bottom nav, note cards and Tiptap toolbar are opaque. Glass must never be introduced on scroll-heavy surfaces » | verre, élévation |
| 2026-11-05 | @de556ab2 | « Amber buttons contain dark text; a color on its own must not communicate state » | couleurs |
| 2026-11-05 | @de556ab2 | « --ms-muted-surface is a compatibility alias; do not use it in new code » | jetons |
| 2026-11-05 | @de556ab2 | capture : focus sur le corps de la note, titre dérivé de la première ligne (80 caractères) | interaction |
| 2026-11-05 | @31762b98 | « a fresh browser tab opens the list of notes (no editor auto-open) » | navigation |
| 2026-11-05 | @31762b98 | barre d'édition : « one opaque, horizontally scrollable bottom row … No glass » | composants |
| 2026-11-05 | @31762b98 | « No fake functionality: version history remains disabled » | composants |
| 2026-11-05 | @31762b98 | cibles >= 44 px, INP < 200 ms au p75 | performance |
| 2026-11-05 | @62846504 style.css | « MindSpace application navigation — opaque for predictable scroll/input performance » | élévation |
| 2026-11-05 | @aeca0395 style.css | « Compact opaque bottom formatting dock » ; rail « collapsible thumb rail » | navigation |
| 2026-11-05 | @6e5d04cf style.css | « Tiptap is headless: these rules own its document typography » | typographie |
| 2026-11-05 | @62846504 style.css | « Tiptap documents and table controls remain solid, never frosted » | élévation |
| 2026-11-05 | @28bcfe04 | refonte changelog.css : « shared visual tokens » | jetons |
| 2026-11-05 | commit 45af35c (PR #23) | « premium timeline, Lucide tags and release permalink surfaces » | composants, icônes |
| 2026-11-05 | commit 5d5d26c (PR #13) | « Hostinger changelog timeline » ; PR #14 : « faithful Hostinger changelog » | références |
| 2026-11-05 | commit fb5ff85 (PR #27) | « MindSpace notes v2 — collapsible rail, list-first editor and contextual toolbars » | navigation |
| 2026-11-06 | @96b634f1 style.css | « Earlier settings tokens retained a separate blue/gray palette while notes used warm neutral colors » ; une seule palette sémantique par thème | couleurs, thèmes |
| 2026-11-06 | commit d19eb93 (PR #37) | « À propos parent, sous-rubriques et thèmes harmonisés » | navigation, thèmes |
| 2026-11-07 | @e08ed76c | « All About links are direct siblings » ; CTA d'installation distinct des liens | navigation |
| 2026-11-07 | commit 22c691e (PR #40) | « capture rapide sans titre, brouillon récupérable et design compact » | interaction |
| 2026-11-07 | docs/notes-search-integration (@d9f203e3) | « No new dock, font, palette or component family is introduced here » ; « Keep MindSpace identity » ; référence « Paper/Glass tokens » de notes v3 | périmètre |
| 2026-11-07 | commit 5361cad (PR #44) | annulation de l'import Markdown structuré (#43) | fonctionnalité |
| 2026-11-10 | commit fdb453d | licence MIT remplacée par « All Rights Reserved » | licence |
| 2026-11-10 | commit 98fc56b | « persistent maintenance filter, accurate counts and unified release surfaces » (cartes techniques en pointillés) | composants |
| 2026-11-05 | EDITOR_MIGRATION.md (@25dc845c) | mobile : 100dvh, 44px, 128px de marge basse, visualViewport | mobile |
