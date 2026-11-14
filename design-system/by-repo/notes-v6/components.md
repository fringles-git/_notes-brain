Source : notes-v6, commits lus : 23, plage : 2026-10-28 à 2026-11-02

Références : mêmes sigles que colors.md (V0 = notes-v6@57c25ea2 2026-10-28 ... V9 = @c2701fc1 2026-11-02 = HEAD de main ; BR1 à BR5 = commits non fusionnés @d11bb77c, @77ff3726, @ac3fbc72, @7f351420, @d665efcb). Svelte 5 (runes), aucune bibliothèque d'UI.

| composant | fichier | rôle | variantes / props visibles | première apparition | dernier état | notes |
|---|---|---|---|---|---|---|
| Page unique (tout l'UI) | src/routes/+page.svelte | tableau de bord, bibliothèque, tâches, réglages, éditeur | `view` | notes-v6@57c25ea2 2026-10-28 | REMPLACÉ par Workspace.svelte (notes-v6@7598f175 2026-10-31) ; +page.svelte devient un point d'entrée mince | 419 lignes à V0, -459 en V7 |
| Workspace | src/lib/app/Workspace.svelte | le shell de l'app (sidebar, dock, vues, éditeur) | | notes-v6@7598f175 2026-10-31 | HEAD | 500 lignes ; contexte dans context.ts |
| Sidebar + marque | Workspace / +page | navigation latérale, `.brand-mark` (carré ambre, 38px puis 44px à V1), compteurs `.nav-count`, carte « privacy » (`.privacy-card`) | actif = fond ambre 23 % + marqueur inset 3px (V5) | V0 | HEAD (carte `.privacy-card` SUPPRIMÉE en branche BR3 seulement) | rail 72px dès V5 |
| Dock mobile (`.mobile-dock`) | idem | navigation basse 5 emplacements + bouton + (`.dock-create`) | grille 5 colonnes dès V2 ; actif en accent-text, marqueur inset 3px en haut (V5) | V0 | HEAD | |
| DashboardOverview | src/lib/components/DashboardOverview.svelte | héros « Les pensées prennent forme ici », carte Capture rapide, métriques | | notes-v6@a0935371 2026-10-29 (inline dans +page depuis V0) | non monté depuis notes-v6@c80dbb09 2026-10-31 ; fichier présent à HEAD | BR4 le vide (non fusionné) |
| NoteLibrary | src/lib/components/NoteLibrary.svelte | cartes de notes, filtres, tri, réordonnancement | BR3 : état vide « Ta première note t'attend » ; BR4 : feuille Filtres, puces amovibles, poignée de glissement tactile (non fusionnés) | notes-v6@a0935371 | HEAD (variantes BR non fusionnées) | |
| NoteEditor | NoteEditor.svelte | feuille d'écriture (`<dialog>`), mode papier (Literata), suppression avec confirmation | V0 : date + titre + corps + métadonnées ; BR1 / e309072e : zone défilante, tiroir Détails | notes-v6@a0935371 | HEAD | |
| MarkdownEditor | MarkdownEditor.svelte | zone de texte + barre Gras / Italique / Code / Titre / Liste / Aperçu | | notes-v6@a0935371 | HEAD | aperçu désactivé par défaut (UX-AUDIT) |
| NoteDetails, WorkflowActions | idem | dossier, tags, rappel, pièces jointes ; statut de workflow | | NoteDetails notes-v6@a0935371 ; WorkflowActions notes-v6@aeec85c1 | HEAD | |
| TemplateLibrary | TemplateLibrary.svelte | modèles et extraits | | notes-v6@aeec85c1 2026-10-29 | HEAD | |
| TaskList | TaskList.svelte | tâches | BR5 : ajout d'abord, recherche sur demande | notes-v6@a0935371 | HEAD | |
| SettingsPanel | SettingsPanel.svelte | thème, accent, exports, import, sauvegarde chiffrée, journal, onboarding | BR3 : champ Prénom | notes-v6@a0935371 | HEAD | |
| EncryptedBackup | EncryptedBackup.svelte | sauvegarde chiffrée AES-GCM | BR5 : lignes `.setting-row`, champ de phrase avec Eye / EyeOff (non fusionné) | notes-v6@a0935371 | HEAD | |
| InstallPrompt, LoadingSkeleton | idem | invitation d'installation contextuelle (après 3 notes) ; squelettes de chargement (liste, panneau, éditeur) | | notes-v6@10ce3085 2026-10-31 | HEAD | |
| QuickCapture | QuickCapture.svelte | capture directe sur l'accueil | | notes-v6@c2701fc1 2026-11-02 | HEAD | |
| Routes /settings, /about, +error | src/routes/ | pages persistantes et erreur statique | | notes-v6@7598f175 | HEAD | static/404.html |
| Primitives CSS | components.css | `.primary-button` (ambre, une par vue), `.outline-button`, `.icon-button`, `.bare-icon`, `.segmented` (thème, accent), `.accent-picker`, `.chip`, `.note-card`, `.toast`, `.setting-row` | | V0 | HEAD | design.json V4 liste 'Primary Button' etc. avec html/css de démonstration |
