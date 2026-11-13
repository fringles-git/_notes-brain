import sys, csv
VALID = {'lu', 'stat', 'bruit', 'build'}
src, out = sys.argv[1], sys.argv[2]
a = list(csv.reader(open(src, encoding='utf-8'), delimiter='\t'))
b = list(csv.reader(open(out, encoding='utf-8'), delimiter='\t'))
errs = []
if len(b) != len(a):
    errs.append(f'lignes: entree={len(a)} sortie={len(b)}')
for i, (ra, rb) in enumerate(zip(a[1:], b[1:]), start=2):
    if len(rb) != 14:
        errs.append(f'ligne {i}: {len(rb)} colonnes au lieu de 14 ({ra[0]})'); continue
    if rb[:10] != ra:
        errs.append(f'ligne {i}: colonnes 1-10 differentes de l\'entree ({ra[0]})')
    st, summ, flags, ev = rb[10], rb[11].strip(), rb[12].strip(), rb[13].strip()
    if st not in VALID:
        errs.append(f'ligne {i} {ra[0]}: statut invalide "{st}"')
    if not summ or len(summ.split()) > 40:
        errs.append(f'ligne {i} {ra[0]}: resume vide ou trop long')
    if not flags:
        errs.append(f'ligne {i} {ra[0]}: flags vides')
    if not ev:
        errs.append(f'ligne {i} {ra[0]}: evidence vide')
    if st == 'stat' and 'stat' not in ev.lower():
        errs.append(f'ligne {i} {ra[0]}: statut stat sans raison dans evidence')
    if int(ra[7]) >= 30 and 'removes-feature' not in flags and st == 'lu' and ra[3] not in ('bot', 'build'):
        pass  # suppression importante : controle humain, pas bloquant
print('ERREURS:', len(errs))
for e in errs[:40]:
    print(' ', e)
from collections import Counter
print('statuts:', dict(Counter(r[10] for r in b[1:] if len(r) == 14)))
sys.exit(1 if errs else 0)
