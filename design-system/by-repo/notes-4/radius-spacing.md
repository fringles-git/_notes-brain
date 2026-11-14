Source : notes-4, commits lus : 13 (hors 2 fusions sans contenu propre), plage : 2026-10-21 à 2026-11-09

Références : N0 = notes-4@94f8e515 2026-10-22, N1 = notes-4@28ad8ce4 2026-10-22, N2 = notes-4@6f00cf58 2026-10-22, N3 = notes-4@854f07b5 2026-10-22, N4 = notes-4@8150588e 2026-10-22 (fusionné en main par fea834d7 le 2026-10-22, état "HEAD" de main). Les commits 28ad8ce4, 6f00cf58 et 854f07b5 contiennent des fichiers aux contenus permutés (le CSS de tokens est dans src/lib/styles/base.css, etc.) ; 8150588e remet chaque contenu à sa place sans changer les valeurs de design (vérifié par comparaison des contenus). Les valeurs ci-dessous sont lues par contenu, pas par nom de fichier.

Jetons définis dès N0 dans tokens.css. Après N1, plusieurs jetons de rayon ne sont plus lus (les composants utilisent des littéraux).

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| --radius-xs | 8px | tokens.css | N0 | HEAD | jamais lu |
| --radius-sm | 12px | tokens.css | N0 | HEAD | lu en N0 (bouton, item de dock, champs) ; plus lu depuis N1 |
| --radius-md | 18px | tokens.css | N0 | HEAD | lu par NoteCard |
| --radius-lg | 24px | tokens.css | N0 | HEAD | lu en N0 (panneaux, dock, fab) ; plus lu depuis N1 |
| --space-1..7 | 4, 8, 12, 16, 20, 24, 32 px | tokens.css | N0 | HEAD | échelle sans formule ; lue par NoteCard (--space-3, --space-5) et Button (--space-2) seulement |
| --dock-height | 52px | tokens.css | N0 | HEAD | hauteur d'un `.dock-item` |
| --fab-size | 60px | tokens.css | N0 | HEAD | largeur et hauteur du FAB |
| --panel-max | 760px | tokens.css | N0 | HEAD | défini, jamais lu |
| rayon dock-shell | var(--radius-lg) = 24px | Dock.svelte | N0 | REMPLACÉ en N1 | |
| rayon dock-shell | 999px | Dock.svelte | N1 | HEAD | pilule |
| rayon dock-item | var(--radius-sm) = 12px | Dock.svelte | N0 | REMPLACÉ en N1 | |
| rayon dock-item | 16px | Dock.svelte | N1 | HEAD | |
| rayon fab | var(--radius-lg) = 24px | Dock.svelte | N0 | REMPLACÉ en N1 | |
| rayon fab | 20px | Dock.svelte | N1 | HEAD | |
| dock : padding, gap, largeur | padding 4px ; gap 12px ; width min(92vw, 560px) ; bottom max(16px, env(safe-area-inset-bottom)) | Dock.svelte | N0 | HEAD | |
| bouton : min-height | 40px | Button.svelte | N0 | REMPLACÉ en N1 | |
| bouton : min-height | 42px ; compact 34px | Button.svelte | N1 (42) / N0 (34) | HEAD | cibles inférieures à 44px |
| bouton : rayon | var(--radius-sm) = 12px (N0) puis 16px (N1) | Button.svelte | N0 | HEAD | padding 0 16px ; compact 0 12px |
| NoteCard rayon | var(--radius-md) = 18px ; min-height 180px ; padding var(--space-5) = 20px ; gap 12px | NoteCard.svelte | N0 | HEAD | .folder et .pin : rayon 999px, padding 4px 8px |
| panneaux (.list-panel, .editor-panel) rayon | var(--radius-lg) = 24px | +page.svelte | N0 | REMPLACÉ en N1 | |
| panneaux rayon | 28px | +page.svelte | N1 | HEAD | .settings-panel idem dès N2 |
| champs (.title-input, .body-input, .search-box input) rayon | var(--radius-sm) = 12px (N0) ; 18px (N1 à HEAD) | +page.svelte | N0 | HEAD | padding 14px 16px |
| items (.folder-card, .settings-item, .search-result) | rayon 18px ; padding 12px 14px ; gap 12px | +page.svelte | N2 | HEAD | |
| .folder-dot | 12px x 12px, rayon 50% | +page.svelte | N2 | HEAD | halo box-shadow 0 0 0 6px rgba(244,197,66,0.2) |
| .app-shell | max-width 1200px ; padding 32px 20px 120px (N0) puis 24px 16px 120px (N1), padding-top 32px dès 900px | +page.svelte | N0 | HEAD | |
| gaps de page | .layout gap 24px (N0), 16px puis 20px dès 900px (N1) ; .topbar margin-bottom 24px puis 16px | +page.svelte | N0 | HEAD | |
| .list-panel, .settings-panel padding | 20px (N0) puis 18px (N1) ; .editor-panel 20px puis 18px, min-height 520px puis 480px ; .full-panel min-height 420px (N2) | +page.svelte | N0 | HEAD | |
| largeur de bordure | 1px solid var(--line) partout ; focus : outline 2px solid var(--select), offset 2px ; NoteCard sélectionnée : 1px var(--select) + box-shadow 0 0 0 1px | base.css / composants | N0 | HEAD | |
| tailles d'icônes | aucune icône (texte) | | | | |
