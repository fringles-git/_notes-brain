# Lignée des versions (colonnes des matrices)

Ordre chronologique de la première apparition. Dates = premier et dernier commit du registre `ledger/`.

| Colonne | Version | Dépôt (branche) | Période | Nature |
|---|---|---|---|---|
| E0 | Notes 2.x et 26.10.9 à 26.10.15 | `notes-v3` (branche `notes-site`, aussi dans `brandonlazarre`) | 2026-10-09 à 2026-10-15 | Appli mono-fichier minifiée, 9 builds, aucune source. Design lu dans le CSS du bundle. |
| E1 | Notes v3 (source) | `notes-v3` (`main`) | 2026-10-18 à 2026-10-31 | React + Zustand, CSS natif. Looks Verre, Papier, Acrylique. |
| E2 | notepad-pwa | `notepad-pwa` | 2026-10-20 à 2026-11-10 | Prototype JS vanille. Fichiers permutés à HEAD : le vrai CSS est dans l'historique. |
| E3 | Notes 4 | `notes-4` | 2026-10-21 à 2026-11-09 | SvelteKit, localStorage. |
| E4 | Notes v5 | `notes-v5` | 2026-10-21 à 2026-11-11 | React statique, Dexie, Tiptap. Looks Soft Glass Pro, Paper and Ink, Minimal. |
| E5 | Quick Notes | `notes-svelte` | 2026-10-22 | SvelteKit, Dexie. |
| E6 | Notes v6 « Mind Space » | `notes-v6` | 2026-10-28 à 2026-11-02 | SvelteKit. Contient aussi 4 branches jamais fusionnées (marquées « non fusionné » dans les entrées). |
| E7 | AI Studio | `notes-aistudio` | 2026-10-31 à 2026-11-06 | Copie de `notes-v3` (même arbre `src` au premier commit), puis réécriture des Réglages. |
| E8 | MindSpace (ancien) | `mindspace-old` | 2026-11-02 à 2026-11-12 | React + Tiptap + Yjs + Tailwind 4. |
| E9 | mindspace-core | `mindspace-core` | 2026-11-10 à 2026-11-12 | Code actuel. Design flat décidé le 2026-11-11. |

Notes
- E1 et E7 partagent du code au départ : une valeur de E7 identique à E1 s'affiche `=`.
- Les dépôts se recouvrent dans le temps : l'ordre des colonnes est celui de la première apparition, pas une filiation stricte. `notes-v5` et `notes-v6` sont des ports parallèles de `notes-v3`.
