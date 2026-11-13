import subprocess, sys, re, os, csv
S='/tmp/claude-0/-home-user/5d777d85-fea9-5a54-aa14-1174fb1aafde/scratchpad/ledger'
def git(d,*a):
    return subprocess.run(['git','-C',d,*a],capture_output=True,text=True,check=True).stdout

BUILD_TOP={'index.html','sw.js','manifest.webmanifest','version.json','.htaccess','build-info.json','robots.txt'}
def is_build(files, subj):
    if not files: return False
    def art(f):
        return f in BUILD_TOP or f.startswith(('assets/','vendor/','icons/','dist/','docs/shots/'))
    return all(art(f) for f in files)
def build(repo, d, base):
    # all commits, no merges
    sep='\x1e'
    out=git(d,'log','--all','--no-merges','--numstat','--date=short',f'--format={sep}%H|%ad|%an|%s')
    commits=[]
    for blk in out.split(sep)[1:]:
        lines=blk.strip('\n').split('\n')
        h,date,author,subj=lines[0].split('|',3)
        add=dele=0; files=[]
        for l in lines[1:]:
            p=l.split('\t')
            if len(p)==3:
                a=0 if p[0]=='-' else int(p[0]); dd=0 if p[1]=='-' else int(p[1])
                add+=a; dele+=dd; files.append(p[2])
        commits.append(dict(sha=h,date=date,author=author,subj=subj,add=add,dele=dele,files=files))
    reach=set(git(d,'rev-list',base).split())
    first=set(git(d,'rev-list','--first-parent','--no-merges',base).split())
    # PR mapping from merge commits
    pr={}
    for m in git(d,'log',base,'--merges','--format=%H|%P|%s').splitlines():
        h,par,s=m.split('|',2)
        mm=re.match(r'Merge pull request #(\d+)',s)
        ps=par.split()
        if mm and len(ps)==2:
            for c in git(d,'rev-list',f'{ps[0]}..{ps[1]}').split():
                pr.setdefault(c,mm.group(1))
    rows=[]
    for c in commits:
        s=c['subj']; a=c['author']; sha=c['sha']
        if a.lower().endswith('[bot]') or 'github-actions' in a.lower():
            kind='bot'
        elif is_build(c['files'], s):
            kind='build'
        elif sha in pr:
            kind='pr-branch'
        elif sha in first:
            kind='squash' if re.search(r'\(#\d+\)\s*$',s) else 'direct'
        elif sha in reach:
            kind='pr-branch'
        else:
            kind='unmerged'
        prn=pr.get(sha,'')
        mm=re.search(r'\(#(\d+)\)\s*$',s)
        if mm and not prn: prn=mm.group(1)
        rows.append((sha[:8],c['date'],a,kind,prn,len(c['files']),c['add'],c['dele'],s.replace('\t',' '),' '.join(c['files'][:6])))
    rows.sort(key=lambda r:(r[1],r[0]))
    path=os.path.join(S,repo+'.tsv')
    with open(path,'w',newline='',encoding='utf-8') as f:
        w=csv.writer(f,delimiter='\t',lineterminator='\n')
        w.writerow(['sha','date','author','kind','pr','nfiles','add','del','subject','files(<=6)'])
        w.writerows(rows)
    from collections import Counter
    print(repo, len(rows), dict(Counter(r[3] for r in rows)))
repos=[('notes-v3','origin/main'),('notes-v5','origin/main'),('notes-v6','origin/main'),('notes-aistudio','origin/main'),
       ('brandonlazarre','origin/notes-v3'),('mindspace-old','origin/main'),('mindspace-core','origin/main'),
       ('notes-4','origin/main'),('notes-svelte','origin/main'),('notepad-pwa','origin/main')]
for r,b in repos:
    d='/home/user/'+r
    if not os.path.isdir(d): print('missing',r); continue
    try: build(r,d,b)
    except Exception as e: print('ERR',r,e)
