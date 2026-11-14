Source : mindspace-core, commits lus : 44, plage : 2026-11-10 à 2026-11-12

# Typographie — mindspace-core

Source des polices : le système. Aucun fichier de police dans le dépôt, aucun paquet `@fontsource/*` ni lien Google Fonts (`git grep` sur `font`, `fontsource`, `google` dans `package.json`, `index.html`, `public/`, `CLAUDE.md`, `README.md` : aucun résultat sur une police chargée). Aucune police n'a donc été supprimée. Le fichier de jetons est `src/ui/tokens.css` du 2026-11-10 au 2026-11-11, puis `src/styles/tokens.css` (mindspace-core@5469a8ab 2026-11-11) ; ses valeurs de police n'ont pas changé.

| élément | valeur | défini dans | première apparition | dernier état | notes |
|---|---|---|---|---|---|
| Pile de base `--ms-font` | `system-ui, sans-serif` | `src/ui/tokens.css` puis `src/styles/tokens.css` ; appliquée à `body` | mindspace-core@128050ce 2026-11-10 | HEAD | police système, ni empattement ni web font |
| Pile monospace `--ms-font-mono` | `ui-monospace, monospace` | `src/styles/tokens.css` | mindspace-core@0a15c7ce 2026-11-11 | HEAD | utilisée pour la phrase de récupération (`.ms-phrase`) et le champ de saisie de la phrase (`.ms-field`) |
| Taille de texte des notes `--ms-text-size` | `1rem` | `tokens.css` | mindspace-core@93b47014 2026-11-10 | HEAD | libellé « Placeholder type scale for note content » |
| Interligne des notes `--ms-text-leading` | `1.6` | `tokens.css` | mindspace-core@93b47014 2026-11-10 | HEAD | appliqué à `.ms-editor__content` |
| Titre niveau 1 dans l'éditeur `--ms-h1-size` | `1.75rem` | `tokens.css`, `.ms-editor__content h1` | mindspace-core@93b47014 2026-11-10 | HEAD | |
| Titre niveau 2 dans l'éditeur `--ms-h2-size` | `1.4rem` | `tokens.css`, `.ms-editor__content h2` et `.ms-title` | mindspace-core@93b47014 2026-11-10 | HEAD | le champ « Titre de la note » (`.ms-title`) utilise la même taille (mindspace-core@8f85ad28 2026-11-10) |
| Titre niveau 3 dans l'éditeur `--ms-h3-size` | `1.15rem` | `tokens.css`, `.ms-editor__content h3` | mindspace-core@93b47014 2026-11-10 | HEAD | |
| Interligne des titres de l'éditeur | `1.25` | `editor.css` puis `app.css`, `.ms-editor__content h1, h2, h3` | mindspace-core@93b47014 2026-11-10 | HEAD | |
| Interligne du champ titre `.ms-title` | `1.25`, graisse 700 | `editor.css` puis `app.css` | mindspace-core@8f85ad28 2026-11-10 | HEAD | |
| Titres de pages et de sections hors éditeur (`h1` « Notes », « Réglages », `h2` des sections, `h3`) | aucune règle de taille ; valeurs par défaut du navigateur | `app.css` ne définit que des marges (`.ms-section h2`, `.ms-phrase-box h3`, `.ms-card h3`, `.ms-dialog h2`) | mindspace-core@128050ce 2026-11-10 | HEAD | non défini par le dépôt : à vérifier côté rendu si une valeur est exigée |
| Libellés d'onglets du dock | `0.9375rem` (15 px), graisse 600 | `.ms-dock__item` | mindspace-core@128050ce 2026-11-10 | HEAD | |
| Glyphe « + » du dock | `1.5rem`, interligne `1` | `.ms-dock__new` puis `.ms-fab` | mindspace-core@c74ffb69 2026-11-10 | HEAD | |
| Texte secondaire (dates, aides) | `0.875rem` (14 px) | `.ms-note-row__date`, `.ms-hint` | mindspace-core@8f85ad28 2026-11-10 (date), mindspace-core@0a15c7ce 2026-11-11 (aide) | HEAD | couleur `--ms-text-muted` |
| Phrase de récupération | `1.05rem`, `letter-spacing: 0.04em`, monospace | `.ms-phrase` | mindspace-core@0a15c7ce 2026-11-11 | HEAD | |
| Champ de saisie de la phrase | `1rem`, `letter-spacing: 0.04em`, monospace | `.ms-field` | mindspace-core@4381e483 2026-11-11 | HEAD | le champ de recherche `.ms-search` (mindspace-core@1d3ce5c0 2026-11-11) hérite de la police du corps (`font: inherit`) |
| Graisse 600 | boutons `.ms-button`, onglets du dock, `.ms-back`, titres de lignes `.ms-note-row__title`, `.ms-warning`, étiquettes de formulaire | `app.css` | mindspace-core@128050ce 2026-11-10 (dock) | HEAD | |
| Graisse 700 | `.ms-tool`, `.ms-title`, texte surligné `.ms-note-row mark` | `editor.css`/`app.css`, `notes`/recherche | mindspace-core@93b47014 2026-11-10 (outils) ; mindspace-core@1d3ce5c0 2026-11-11 (`mark`) | HEAD | `mark` : gras + souligné (`text-decoration: underline`) |
| Italique | `.ms-tool[data-tool='italic']` : `font-style: italic` | `editor.css` puis `app.css` | mindspace-core@93b47014 2026-11-10 | HEAD | seul emploi explicite |
| Ligatures désactivées dans l'éditeur | `font-variant-ligatures: none`, `font-feature-settings: 'liga' 0` (et préfixe `-webkit-`) | `app.css`, section « ProseMirror base » | mindspace-core@67a5541f 2026-11-11 | HEAD | copie des règles de base de Tiptap, qui injectait un `<style>` bloqué par la CSP |
| Espacement des lettres | `0.04em` sur la phrase et le champ phrase ; sinon aucune règle | `app.css` | mindspace-core@0a15c7ce 2026-11-11 | HEAD | |
| Texte tronqué des lignes | `overflow: hidden; text-overflow: ellipsis; white-space: nowrap` sur `.ms-note-row__title` et `.ms-note-row__preview` | `app.css` | mindspace-core@8f85ad28 2026-11-10 (titre) ; mindspace-core@1d3ce5c0 2026-11-11 (aperçu) | HEAD | |
| Retours à la ligne du contenu | `overflow-wrap: anywhere` (éditeur) et `anywhere` sur la phrase | `app.css` | mindspace-core@93b47014 2026-11-10 | HEAD | |
| Langue du document | `<html lang="fr">` | `index.html` | mindspace-core@fd2427e0 2026-11-10 | HEAD | formats de date `Intl.DateTimeFormat('fr-FR', { dateStyle: 'medium', timeStyle: 'short' })` depuis mindspace-core@8f85ad28 2026-11-10 |
| Hérédité des contrôles | `font: inherit` sur boutons, champs, `.ms-note-row`, `.ms-search` | `app.css` | mindspace-core@128050ce 2026-11-10 | HEAD | |

## Notes

- Le dépôt n'a jamais eu d'échelle typographique nommée au-delà des cinq jetons ci-dessus, décrite comme « provisoire » : le commentaire de `tokens.css` dit « Placeholder type scale for note content » et le message de mindspace-core@93b47014 dit « échelle typographique provisoire ».
- L'échelle de tailles hors éditeur est faite de littéraux dans `app.css` (`0.9375rem`, `0.875rem`, `1.05rem`, `1.5rem`), pas de jetons.
- `tests/tokens.test.ts` ne contrôle aucune valeur typographique.
