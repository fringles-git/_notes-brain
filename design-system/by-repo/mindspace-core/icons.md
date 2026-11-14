Source : mindspace-core, commits lus : 44, plage : 2026-11-10 à 2026-11-12

# Icônes — mindspace-core

Convention de l'empreinte : 8 premiers caractères du sha1 des données de tracé (attributs `d` des `<path>`, espaces normalisés, joints par un saut de ligne, dans l'ordre du document). Pour un PNG : sha1 du fichier entier. Les références `mindspace-core@sha8 date` sont celles du commit ; pour les commits de branche de PR, la fusion dans `main` est postérieure et n'est pas un commit du registre.

## Bibliothèque d'icônes

Aucune. `package.json` (HEAD et tout l'historique) ne contient ni `lucide`, ni `@lucide/*`, ni `react-icons`, ni paquet de pictogrammes (vérifié par `git grep` sur `lucide`, `svg`, `icon`). `CLAUDE.md` cite `lucide` seulement comme dépendance de l'ancienne appli `MindSpace`, « référence, jamais de copie » (citation : « L'éditeur de `MindSpace` (Yjs, Tailwind, lucide) sert de référence, jamais de copie », mindspace-core@93b47014 2026-11-10). Les seuls pictogrammes sont donc : un SVG en ligne (la corbeille), des glyphes de texte, et les icônes d'application (fichiers).

## Tableau

| icône | source | empreinte | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| Corbeille | SVG en ligne dans `src/ui/TrashIcon.tsx` (composant `TrashIcon`) | ab18015e | mindspace-core@4381e483 2026-11-11 | HEAD | 5 tracés `M3 6h18`, `M8 6V4h8v2`, `M6 6l1 14h10l1-14`, `M10 11v6`, `M14 11v6` ; viewBox `0 0 24 24`, affichée en 20 × 20, `fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`, `aria-hidden="true" focusable="false"`. Suit la couleur du bouton (`currentColor`). Jamais modifiée depuis. SVG : `svg/corbeille-ab18015e.svg` |
| Corbeille — emploi 1 | `TrashIcon` dans `NoteEditor.tsx`, bouton « Supprimer » (`ms-button ms-button--icon`) | ab18015e | mindspace-core@4381e483 2026-11-11 | HEAD | icône + libellé, `gap` 8 px (`--ms-space-2`) |
| Corbeille — emploi 2 | `TrashIcon` dans `NotesList.tsx`, barre de sélection, bouton « Supprimer » | ab18015e | mindspace-core@339dbce0 2026-11-11 (PR #24) | HEAD | désactivé tant que rien n'est sélectionné |
| Icône d'application (source) | fichier `public/icon.svg` | 4bdac621 | mindspace-core@87563ecf 2026-11-11 | HEAD | 512 × 512 ; `<rect width="512" height="512" fill="#f4c430"/>` + un tracé `M156 362V150L256 270L356 150V362` (lettre « M », trait `#1a1a1a`, `stroke-width="44"`, `stroke-linecap="round" stroke-linejoin="round"`, `fill="none"`). Aucun texte, aucune transparence (test `tests/pwa.test.ts` : pas de gradient, filtre, opacité, rgba). L'empreinte ne couvre que le tracé ; le fond ambre est dans le `<rect>`. SVG : `svg/icone-app-4bdac621.svg` |
| Favicon navigateur | `<link rel="icon" href="/icon.svg" type="image/svg+xml" />` dans `index.html` | 4bdac621 (même fichier) | mindspace-core@87563ecf 2026-11-11 | HEAD | pas de `favicon.ico` dans le dépôt |
| Icône PWA 192 | fichier `public/icon-192.png` | d201d95e | mindspace-core@87563ecf 2026-11-11 | HEAD | PNG 192 × 192, RGB 8 bits sans alpha (type de couleur 2), 1916 octets ; manifest `purpose: "any"`. Référence : `git show 87563ecf:public/icon-192.png` |
| Icône PWA 512 | fichier `public/icon-512.png` | f2af4a26 | mindspace-core@87563ecf 2026-11-11 | HEAD | PNG 512 × 512, RGB sans alpha, 5785 octets ; `purpose: "any"`. Référence : `git show 87563ecf:public/icon-512.png` |
| Icône PWA maskable | fichier `public/icon-maskable-512.png` | 2f8f3769 | mindspace-core@87563ecf 2026-11-11 | HEAD | PNG 512 × 512, RGB sans alpha, 5251 octets ; `purpose: "maskable"` ; tracé à l'échelle 0,82 (CLAUDE.md). Référence : `git show 87563ecf:public/icon-maskable-512.png` |
| apple-touch-icon | fichier `public/apple-touch-icon.png` | bacad776 | mindspace-core@87563ecf 2026-11-11 | HEAD | PNG 180 × 180, RGB sans alpha (iOS peint la transparence en noir, CLAUDE.md), 2273 octets ; `<link rel="apple-touch-icon" href="/apple-touch-icon.png" />`. Référence : `git show 87563ecf:public/apple-touch-icon.png` |
| Glyphe retour « ‹ » | caractère dans `NoteEditor.tsx`, `<span aria-hidden="true">‹</span> Notes` (bouton `.ms-back`) | - | mindspace-core@8f85ad28 2026-11-10 | HEAD | texte, pas un SVG |
| Glyphe « + » (Nouvelle note) | caractère « + » dans `Dock.tsx`, classe `ms-dock__new` puis `ms-fab` | - | mindspace-core@c74ffb69 2026-11-10 | HEAD | `font-size: 1.5rem; line-height: 1` ; `aria-label` et `title` « Nouvelle note ». Voir `components.md` pour la couleur selon la période |
| Glyphes de la barre d'outils | texte dans `EditorToolbar.tsx` : `G` (Gras), `I` (Italique, en italique), `T1`, `T2`, `T3`, `•` (liste à puces), `1.` (liste numérotée) | - | mindspace-core@93b47014 2026-11-10 | HEAD | aucun SVG : chaque bouton porte un libellé accessible (`aria-label` : « Gras », « Italique », « T1, titre de niveau 1 »…) |
| Phrase masquée « •••• •••• … » | texte dans `RecoveryPhrase.tsx` (`aria-label="Phrase masquée"`) | - | mindspace-core@0a15c7ce 2026-11-11 | HEAD | 7 groupes de 4 puces, remplace la phrase tant qu'elle est masquée |
| Icône d'onglet « Tâches » | aucune | - | - | - | l'onglet n'a jamais eu d'icône (libellé texte seulement, voir `components.md`) |

## Ensemble des noms utilisés, par date

| date | ref | pictogrammes présents | variation |
|---|---|---|---|
| 2026-11-10 | mindspace-core@128050ce | aucun (libellés texte Notes, Tâches, Réglages) | départ |
| 2026-11-10 | mindspace-core@93b47014 | glyphes `G I T1 T2 T3 • 1.` | ajout |
| 2026-11-10 | mindspace-core@c74ffb69 | + « + » | ajout |
| 2026-11-10 | mindspace-core@8f85ad28 | + « ‹ » | ajout |
| 2026-11-11 | mindspace-core@0a15c7ce | + « •••• » (phrase masquée) | ajout |
| 2026-11-11 | mindspace-core@4381e483 | + SVG corbeille | ajout (premier SVG en ligne) |
| 2026-11-11 | mindspace-core@87563ecf | + icônes d'application (SVG + 4 PNG) | ajout |
| 2026-11-11 | mindspace-core@339dbce0 | corbeille réutilisée dans la liste | nouvel emploi |

Aucune icône n'a été supprimée ni remplacée dans `main`. L'onglet Tâches (donc aucun pictogramme) est retiré seulement sur la branche non fusionnée `claude/brave-shannon-p7pfr9-no-tasks` (mindspace-core@7dd4d041 2026-11-12).

## Remarques

- Les icônes d'application sont décrites comme « Placeholders : visuel à décider par le propriétaire » (CLAUDE.md, mindspace-core@87563ecf 2026-11-11).
- Les PNG ont été rendus depuis `icon.svg` avec Chromium (CLAUDE.md) ; je n'ai pas relu les pixels, seulement les en-têtes (taille, type de couleur) et l'empreinte du fichier.
- Les attributs du SVG de la corbeille sont transcrits depuis JSX (`strokeWidth`, `strokeLinecap`, `strokeLinejoin`) vers leurs noms SVG.
