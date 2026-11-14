Source : notes-aistudio, commits lus : 7 (hors fusion 20ad6c90), plage : 2026-10-31 à 2026-11-06

Références : A0 = notes-aistudio@9021b9bc 2026-10-31, A1 = @d2819fcc 2026-11-02, A2 = @6dbe9114 2026-11-05, A3 = @6fc4b9d7 2026-11-05. HEAD = @407c8f6d 2026-11-06. React 19 + Zustand, sans bibliothèque d'UI (« no UI kit »).

| composant | fichier | rôle | variantes / props visibles | première apparition | dernier état | notes |
|---|---|---|---|---|---|---|
| Dock (navigation basse) | src/ui/Dock.tsx | navigation + FAB + barres de recherche, sélection, enregistrement | A0 : île 4 destinations ; A1 : bi-îlot (nav-pill-main + nav-pill-tools) ; A2+ : île unifiée de 5 destinations | A0 | HEAD (variantes A0 et A1 REMPLACÉES en A2) | voir layout.md |
| Fab (bouton +) | Dock.tsx | ouvre « Créer » ; geste presser-glisser-relâcher | classe `fab` ; `fab fab-add` (A1) | A0 | HEAD | |
| Tab (`tab-btn`) | Dock.tsx | destination ; `aria-current` | île avec curseur glissant `--i`, `--n` | A0 | HEAD | A1 retire `aria-pressed` des panneaux |
| Layer / Sheet | src/ui/kit.tsx (Layer), Layers.tsx, Sheets.tsx | menus, feuilles, panneaux | modes create, filter, appearance, sketch, qr-show, qr-scan, sort, list-more, profile-menu... | A0 (A2 pour sketch, qr-*, sort, list-more, profile-menu) | HEAD | |
| Row, Chip, Section, Switch, Option, Segmented, Empty, InlineForm, FolderTag, Highlight, Inline, Formatted, StateMark | src/ui/kit.tsx | primitives partagées | Segmented : prefs ; Option : radios | A0 | HEAD | A1 ajoute ProgressBar (barre de progression, remplace deux copies : audit) |
| ProgressBar | kit.tsx | progression (révision, tâches) | `value`, `max`, `label` | A1 | HEAD | |
| Liste de notes (NoteList, Header, InfoBar, cartes, HeaderTools) | src/ui/List.tsx | accueil : cartes ou liste compacte | A1 : bouton bascule cartes/liste, avatar-chip, Recap + QuickCapture | A0 | HEAD (Recap, QuickCapture SUPPRIMÉS : retirés du montage en A2, CSS retiré en A3) | A2 : TodayGlanceBar |
| QuickCapture (deck d'action rapide) | List.tsx | saisie rapide + modèles | .quick-capture-*, .quick-starter-*, .quick-action-chip | A1 | SUPPRIMÉ notes-aistudio@6dbe9114 2026-11-05 (montage), CSS retiré notes-aistudio@6fc4b9d7 2026-11-05 | |
| Recap / widgets | List.tsx | tuiles de récap | .recap, .widget* | A0 | SUPPRIMÉ notes-aistudio@6dbe9114 (montage) ; CSS retiré en @6fc4b9d7 | |
| TodayGlanceBar | List.tsx | résumé du jour | .today-glance-bar, .today-pill, .today-action-chip | A2 | HEAD | |
| Bibliothèque | src/ui/Library.tsx | dossiers, étiquettes, vues ; A3 : section Entités | .lib-tile, .lib-folder | A0 | HEAD | |
| Tâches | src/ui/Tasks.tsx | tâches issues des cases à cocher | A3 : vues À faire, Aujourd'hui, En retard, Terminé | A0 | HEAD | |
| Éditeur | src/ui/Editor.tsx | écriture | A1 : police (système / serif / mono), largeur (narrow / normal / full) ; A3 : bloc Propriétés | A0 | HEAD | |
| Metadata (Propriétés) | src/ui/Metadata.tsx | étiquettes, entités, statut, priorité, échéance | `<details class="note-metadata">` | A3 | HEAD | |
| SettingsPage | src/ui/SettingsPage.tsx | Réglages : liste de sections + détail | A0 : 7 sections (apparence, recherche, masquées, sauvegarde, synchro, application, aide) ; A1 : réécrit, + Profil, tuiles tonales, héros de profil ; A2 : + stockage, confidentialité, à propos, pages news / changelog / guide / shortcuts / install-guide / credits / license | A0 | HEAD | |
| Changelog (Quoi de neuf) | src/ui/Changelog.tsx | journal des versions | A2 : filtres, recherche, héros | A0 | HEAD | |
| QrTools | src/ui/QrTools.tsx | afficher et scanner un QR code | .qr-scan-box, .qr-target-corner | A2 | HEAD | |
| Sketch | src/ui/Sketch.tsx | dessin à main levée | 6 encres, outils stylo, surligneur, gomme | A2 | HEAD | |
| Table, Tidy, Conflict, Files, Welcome | src/ui/*.tsx | tableaux, rangement, conflits de fusion, fichiers, visite guidée | | A0 | HEAD | |
| Avatar-chip / profil | List.tsx, SettingsPage.tsx | accès rapide à Apparence | initiales ou image | A1 | HEAD | |
| Icon | src/ui/icons.tsx | icônes | voir icons.md | A0 | HEAD | |
