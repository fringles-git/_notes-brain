import re,sys,subprocess,collections,os
S='/tmp/claude-0/-home-user/5d777d85-fea9-5a54-aa14-1174fb1aafde/scratchpad/design-final'
f=sys.argv[1]
t=open(f,encoding='utf-8').read()
lines=t.split('\n')
# tableaux : nombre de colonnes constant par tableau
tabs=[];cur=[]
for l in lines:
    if l.startswith('|'): cur.append(l)
    else:
        if cur: tabs.append(cur); cur=[]
if cur: tabs.append(cur)
bad=0
for i,tb in enumerate(tabs):
    c=collections.Counter(len(re.split(r'(?<!\\)\|',r)) for r in tb)
    if len(c)>1:
        bad+=1; print('tableau',i,'colonnes variables',dict(c))
print('lignes',len(lines),'tableaux',len(tabs),'tableaux irreguliers',bad)
# sections presentes
print('sections:',[l[:60] for l in lines if l.startswith('## ')][:14])
# references repo@sha
repos=['notes-v3','notes-v5','notes-v6','notes-aistudio','notes-4','notes-svelte','notepad-pwa','mindspace-old','mindspace-core','brandonlazarre']
refs=set(re.findall(r'\b('+'|'.join(repos)+r')@([0-9a-f]{7,8})\b',t))
miss=[]
for r,s in sorted(refs):
    if subprocess.run(['git','-C','/home/user/'+r,'cat-file','-e',s+'^{commit}'],capture_output=True).returncode: miss.append(f'{r}@{s}')
print('refs repo@sha',len(refs),'introuvables',len(miss),miss[:12])
# personnel
for pat,name in ((r'[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+\.(com|fr|net|org)','email'),):
    m=re.findall(pat,t)
    if m: print('ALERTE',name,len(m))
empty=sum(1 for tb in tabs for r in tb if re.search(r'\|\s*\|\s*\|\s*\|\s*\|\s*\|\s*\|\s*\|\s*\|\s*\|',r))
print('lignes avec 8 cellules vides consecutives',empty)
