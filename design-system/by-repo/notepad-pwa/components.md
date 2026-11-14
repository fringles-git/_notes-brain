Source : notepad-pwa, commits lus : 7, plage : 2026-10-20 à 2026-11-10

Références : A = notepad-pwa@3c6f6152 2026-10-20, B = 576a8c9d, C = 76dfefe5, D = a488cc67 (même jour). Pas de framework : HTML + JS vanille ; composants = blocs de HTML et classes CSS. Le HTML est dans `index.html` (A à HEAD) et dans `src/main.js` (B à HEAD).

| composant | fichier | rôle | variantes / props visibles | première apparition | dernier état | notes |
|---|---|---|---|---|---|---|
| .app-shell | HTML + CSS | grille de page | focus-mode masque les côtés | A | HEAD | grille 3 colonnes |
| .brand-row (.brand-mark "N", h1 "Notepad", small) | HTML + CSS | marque | | A | HEAD | small : "Offline & private" (A) puis "Offline · private" (B) |
| .panel .stats-panel | HTML | statistiques (mots, caractères, paragraphes, lecture, sauvegarde) | .stats-list | A | HEAD | A : div ; B : section |
| bouton Focus (#toggle-focus) | HTML | mode focus | .small-button .ghost | A | HEAD | |
| .panel .timer-panel (#timer-display, Start/Pause/Reset, cases Break reminder et Typewriter sound) | HTML | minuteur d'écriture | .button-row.compact, .setting-row | A | HEAD | |
| .panel .snapshots-panel (#snapshot-list, .snapshot-item, .snapshot-actions) | HTML | instantanés | .snapshot-item.empty (B) | A | HEAD | |
| .panel .note-manager (#new-note "New", #note-search, #note-list, .note-item) | HTML | bibliothèque de notes avec recherche | .note-item.active | C | HEAD | |
| .topbar (.topbar-left, .topbar-right) | HTML | barre d'actions : thème, plein écran, fenêtre flottante, Download, Install | .icon-button, .primary, .hidden | A | HEAD | #install-btn "Install" (A) puis "Install app" (B) |
| .editor-header #note-title | HTML | titre de note | | C | HEAD | valeur "Untitled note" |
| textarea #editor | HTML + CSS | zone d'écriture | placeholder "Start writing here..." (B) puis "Start typing here..." (C) | A | HEAD | |
| .tools-panel : Tools (Save now, Export .txt/.html/.pdf/.docx) | HTML | exports | .button-stack | A | HEAD | |
| Ambient sounds (#ambient-list, #ambient-volume, #ambient-stop) | HTML | sons d'ambiance (25 noms dans ambientPatterns) | .ambient-item.active, .slider-wrap (B) | A | HEAD | |
| Keyboard shortcuts (.keyboard-panel, kbd) | HTML | aide raccourcis | | A | HEAD | libellés "dark mode / focus mode / download" (A) puis "theme / focus / export PDF" (B) |
| #toast | HTML + CSS | message transitoire, aria-live polite | .show | A | HEAD | |
| Service worker (register) | public/sw.js | hors design | | D | HEAD | snippet navigator.serviceWorker.register |
