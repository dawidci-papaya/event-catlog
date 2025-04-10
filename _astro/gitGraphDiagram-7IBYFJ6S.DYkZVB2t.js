import{p as Y}from"./chunk-4BMEZGHF.Bjh336jA.js";import{I as K}from"./chunk-XZIHB7SX.DI7RD7_4.js";import{_ as l,q as U,p as V,s as X,g as J,a as Q,b as Z,l as m,c as rr,u as er,D as tr,y as ar,j as C,E as sr,F as nr,G as or,H as cr}from"./mermaid.core.CcsqOJI7.js";import{p as ir}from"./radar-MK3ICKWK.DvuG3k_s.js";import{s as dr}from"./transform.7sWRJG2v.js";import"./preload-helper.CLcXU_4U.js";import"./_commonjsHelpers.D6-XlEtG.js";import"./_baseUniq.CywcTDti.js";import"./_basePickBy.D0Q99hE_.js";import"./clone.CAzacvU9.js";var x={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},hr=or.gitGraph,I=l(()=>sr({...hr,...nr().gitGraph}),"getConfig"),c=new K(()=>{const t=I(),r=t.mainBranchName,s=t.mainBranchOrder;return{mainBranchName:r,commits:new Map,head:null,branchConfig:new Map([[r,{name:r,order:s}]]),branches:new Map([[r,null]]),currBranch:r,direction:"LR",seq:0,options:{}}});function A(){return cr({length:7})}l(A,"getID");function z(t,r){const s=Object.create(null);return t.reduce((n,e)=>{const a=r(e);return s[a]||(s[a]=!0,n.push(e)),n},[])}l(z,"uniqBy");var lr=l(function(t){c.records.direction=t},"setDirection"),$r=l(function(t){m.debug("options str",t),t=t?.trim(),t=t||"{}";try{c.records.options=JSON.parse(t)}catch(r){m.error("error while parsing gitGraph options",r.message)}},"setOptions"),fr=l(function(){return c.records.options},"getOptions"),gr=l(function(t){let r=t.msg,s=t.id;const n=t.type;let e=t.tags;m.info("commit",r,s,n,e),m.debug("Entering commit:",r,s,n,e);const a=I();s=C.sanitizeText(s,a),r=C.sanitizeText(r,a),e=e?.map(o=>C.sanitizeText(o,a));const d={id:s||c.records.seq+"-"+A(),message:r,seq:c.records.seq++,type:n??x.NORMAL,tags:e??[],parents:c.records.head==null?[]:[c.records.head.id],branch:c.records.currBranch};c.records.head=d,m.info("main branch",a.mainBranchName),c.records.commits.set(d.id,d),c.records.branches.set(c.records.currBranch,d.id),m.debug("in pushCommit "+d.id)},"commit"),yr=l(function(t){let r=t.name;const s=t.order;if(r=C.sanitizeText(r,I()),c.records.branches.has(r))throw new Error(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${r}")`);c.records.branches.set(r,c.records.head!=null?c.records.head.id:null),c.records.branchConfig.set(r,{name:r,order:s}),D(r),m.debug("in createBranch")},"branch"),ur=l(t=>{let r=t.branch,s=t.id;const n=t.type,e=t.tags,a=I();r=C.sanitizeText(r,a),s&&(s=C.sanitizeText(s,a));const d=c.records.branches.get(c.records.currBranch),o=c.records.branches.get(r),f=d?c.records.commits.get(d):void 0,h=o?c.records.commits.get(o):void 0;if(f&&h&&f.branch===r)throw new Error(`Cannot merge branch '${r}' into itself.`);if(c.records.currBranch===r){const i=new Error('Incorrect usage of "merge". Cannot merge a branch to itself');throw i.hash={text:`merge ${r}`,token:`merge ${r}`,expected:["branch abc"]},i}if(f===void 0||!f){const i=new Error(`Incorrect usage of "merge". Current branch (${c.records.currBranch})has no commits`);throw i.hash={text:`merge ${r}`,token:`merge ${r}`,expected:["commit"]},i}if(!c.records.branches.has(r)){const i=new Error('Incorrect usage of "merge". Branch to be merged ('+r+") does not exist");throw i.hash={text:`merge ${r}`,token:`merge ${r}`,expected:[`branch ${r}`]},i}if(h===void 0||!h){const i=new Error('Incorrect usage of "merge". Branch to be merged ('+r+") has no commits");throw i.hash={text:`merge ${r}`,token:`merge ${r}`,expected:['"commit"']},i}if(f===h){const i=new Error('Incorrect usage of "merge". Both branches have same head');throw i.hash={text:`merge ${r}`,token:`merge ${r}`,expected:["branch abc"]},i}if(s&&c.records.commits.has(s)){const i=new Error('Incorrect usage of "merge". Commit with id:'+s+" already exists, use different custom Id");throw i.hash={text:`merge ${r} ${s} ${n} ${e?.join(" ")}`,token:`merge ${r} ${s} ${n} ${e?.join(" ")}`,expected:[`merge ${r} ${s}_UNIQUE ${n} ${e?.join(" ")}`]},i}const $=o||"",g={id:s||`${c.records.seq}-${A()}`,message:`merged branch ${r} into ${c.records.currBranch}`,seq:c.records.seq++,parents:c.records.head==null?[]:[c.records.head.id,$],branch:c.records.currBranch,type:x.MERGE,customType:n,customId:!!s,tags:e??[]};c.records.head=g,c.records.commits.set(g.id,g),c.records.branches.set(c.records.currBranch,g.id),m.debug(c.records.branches),m.debug("in mergeBranch")},"merge"),pr=l(function(t){let r=t.id,s=t.targetId,n=t.tags,e=t.parent;m.debug("Entering cherryPick:",r,s,n);const a=I();if(r=C.sanitizeText(r,a),s=C.sanitizeText(s,a),n=n?.map(f=>C.sanitizeText(f,a)),e=C.sanitizeText(e,a),!r||!c.records.commits.has(r)){const f=new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');throw f.hash={text:`cherryPick ${r} ${s}`,token:`cherryPick ${r} ${s}`,expected:["cherry-pick abc"]},f}const d=c.records.commits.get(r);if(d===void 0||!d)throw new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');if(e&&!(Array.isArray(d.parents)&&d.parents.includes(e)))throw new Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.");const o=d.branch;if(d.type===x.MERGE&&!e)throw new Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.");if(!s||!c.records.commits.has(s)){if(o===c.records.currBranch){const g=new Error('Incorrect usage of "cherryPick". Source commit is already on current branch');throw g.hash={text:`cherryPick ${r} ${s}`,token:`cherryPick ${r} ${s}`,expected:["cherry-pick abc"]},g}const f=c.records.branches.get(c.records.currBranch);if(f===void 0||!f){const g=new Error(`Incorrect usage of "cherry-pick". Current branch (${c.records.currBranch})has no commits`);throw g.hash={text:`cherryPick ${r} ${s}`,token:`cherryPick ${r} ${s}`,expected:["cherry-pick abc"]},g}const h=c.records.commits.get(f);if(h===void 0||!h){const g=new Error(`Incorrect usage of "cherry-pick". Current branch (${c.records.currBranch})has no commits`);throw g.hash={text:`cherryPick ${r} ${s}`,token:`cherryPick ${r} ${s}`,expected:["cherry-pick abc"]},g}const $={id:c.records.seq+"-"+A(),message:`cherry-picked ${d?.message} into ${c.records.currBranch}`,seq:c.records.seq++,parents:c.records.head==null?[]:[c.records.head.id,d.id],branch:c.records.currBranch,type:x.CHERRY_PICK,tags:n?n.filter(Boolean):[`cherry-pick:${d.id}${d.type===x.MERGE?`|parent:${e}`:""}`]};c.records.head=$,c.records.commits.set($.id,$),c.records.branches.set(c.records.currBranch,$.id),m.debug(c.records.branches),m.debug("in cherryPick")}},"cherryPick"),D=l(function(t){if(t=C.sanitizeText(t,I()),c.records.branches.has(t)){c.records.currBranch=t;const r=c.records.branches.get(c.records.currBranch);r===void 0||!r?c.records.head=null:c.records.head=c.records.commits.get(r)??null}else{const r=new Error(`Trying to checkout branch which is not yet created. (Help try using "branch ${t}")`);throw r.hash={text:`checkout ${t}`,token:`checkout ${t}`,expected:[`branch ${t}`]},r}},"checkout");function _(t,r,s){const n=t.indexOf(r);n===-1?t.push(s):t.splice(n,1,s)}l(_,"upsert");function P(t){const r=t.reduce((e,a)=>e.seq>a.seq?e:a,t[0]);let s="";t.forEach(function(e){e===r?s+="	*":s+="	|"});const n=[s,r.id,r.seq];for(const e in c.records.branches)c.records.branches.get(e)===r.id&&n.push(e);if(m.debug(n.join(" ")),r.parents&&r.parents.length==2&&r.parents[0]&&r.parents[1]){const e=c.records.commits.get(r.parents[0]);_(t,r,e),r.parents[1]&&t.push(c.records.commits.get(r.parents[1]))}else{if(r.parents.length==0)return;if(r.parents[0]){const e=c.records.commits.get(r.parents[0]);_(t,r,e)}}t=z(t,e=>e.id),P(t)}l(P,"prettyPrintCommitHistory");var xr=l(function(){m.debug(c.records.commits);const t=N()[0];P([t])},"prettyPrint"),mr=l(function(){c.reset(),ar()},"clear"),br=l(function(){return[...c.records.branchConfig.values()].map((r,s)=>r.order!==null&&r.order!==void 0?r:{...r,order:parseFloat(`0.${s}`)}).sort((r,s)=>(r.order??0)-(s.order??0)).map(({name:r})=>({name:r}))},"getBranchesAsObjArray"),wr=l(function(){return c.records.branches},"getBranches"),vr=l(function(){return c.records.commits},"getCommits"),N=l(function(){const t=[...c.records.commits.values()];return t.forEach(function(r){m.debug(r.id)}),t.sort((r,s)=>r.seq-s.seq),t},"getCommitsArray"),Cr=l(function(){return c.records.currBranch},"getCurrentBranch"),Er=l(function(){return c.records.direction},"getDirection"),Tr=l(function(){return c.records.head},"getHead"),S={commitType:x,getConfig:I,setDirection:lr,setOptions:$r,getOptions:fr,commit:gr,branch:yr,merge:ur,cherryPick:pr,checkout:D,prettyPrint:xr,clear:mr,getBranchesAsObjArray:br,getBranches:wr,getCommits:vr,getCommitsArray:N,getCurrentBranch:Cr,getDirection:Er,getHead:Tr,setAccTitle:Z,getAccTitle:Q,getAccDescription:J,setAccDescription:X,setDiagramTitle:V,getDiagramTitle:U},Br=l((t,r)=>{Y(t,r),t.dir&&r.setDirection(t.dir);for(const s of t.statements)Lr(s,r)},"populate"),Lr=l((t,r)=>{const n={Commit:l(e=>r.commit(kr(e)),"Commit"),Branch:l(e=>r.branch(Mr(e)),"Branch"),Merge:l(e=>r.merge(Ir(e)),"Merge"),Checkout:l(e=>r.checkout(Rr(e)),"Checkout"),CherryPicking:l(e=>r.cherryPick(Gr(e)),"CherryPicking")}[t.$type];n?n(t):m.error(`Unknown statement type: ${t.$type}`)},"parseStatement"),kr=l(t=>({id:t.id,msg:t.message??"",type:t.type!==void 0?x[t.type]:x.NORMAL,tags:t.tags??void 0}),"parseCommit"),Mr=l(t=>({name:t.name,order:t.order??0}),"parseBranch"),Ir=l(t=>({branch:t.branch,id:t.id??"",type:t.type!==void 0?x[t.type]:void 0,tags:t.tags??void 0}),"parseMerge"),Rr=l(t=>t.branch,"parseCheckout"),Gr=l(t=>({id:t.id,targetId:"",tags:t.tags?.length===0?void 0:t.tags,parent:t.parent}),"parseCherryPicking"),Or={parse:l(async t=>{const r=await ir("gitGraph",t);m.debug(r),Br(r,S)},"parse")},qr=rr(),v=qr?.gitGraph,L=10,k=40,E=4,T=2,M=8,b=new Map,w=new Map,O=30,R=new Map,q=[],B=0,u="LR",Ar=l(()=>{b.clear(),w.clear(),R.clear(),B=0,q=[],u="LR"},"clear"),W=l(t=>{const r=document.createElementNS("http://www.w3.org/2000/svg","text");return(typeof t=="string"?t.split(/\\n|\n|<br\s*\/?>/gi):t).forEach(n=>{const e=document.createElementNS("http://www.w3.org/2000/svg","tspan");e.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),e.setAttribute("dy","1em"),e.setAttribute("x","0"),e.setAttribute("class","row"),e.textContent=n.trim(),r.appendChild(e)}),r},"drawText"),j=l(t=>{let r,s,n;return u==="BT"?(s=l((e,a)=>e<=a,"comparisonFunc"),n=1/0):(s=l((e,a)=>e>=a,"comparisonFunc"),n=0),t.forEach(e=>{const a=u==="TB"||u=="BT"?w.get(e)?.y:w.get(e)?.x;a!==void 0&&s(a,n)&&(r=e,n=a)}),r},"findClosestParent"),Hr=l(t=>{let r="",s=1/0;return t.forEach(n=>{const e=w.get(n).y;e<=s&&(r=n,s=e)}),r||void 0},"findClosestParentBT"),_r=l((t,r,s)=>{let n=s,e=s;const a=[];t.forEach(d=>{const o=r.get(d);if(!o)throw new Error(`Commit not found for key ${d}`);o.parents.length?(n=Fr(o),e=Math.max(n,e)):a.push(o),zr(o,n)}),n=e,a.forEach(d=>{Dr(d,n,s)}),t.forEach(d=>{const o=r.get(d);if(o?.parents.length){const f=Hr(o.parents);n=w.get(f).y-k,n<=e&&(e=n);const h=b.get(o.branch).pos,$=n-L;w.set(o.id,{x:h,y:$})}})},"setParallelBTPos"),Pr=l(t=>{const r=j(t.parents.filter(n=>n!==null));if(!r)throw new Error(`Closest parent not found for commit ${t.id}`);const s=w.get(r)?.y;if(s===void 0)throw new Error(`Closest parent position not found for commit ${t.id}`);return s},"findClosestParentPos"),Fr=l(t=>Pr(t)+k,"calculateCommitPosition"),zr=l((t,r)=>{const s=b.get(t.branch);if(!s)throw new Error(`Branch not found for commit ${t.id}`);const n=s.pos,e=r+L;return w.set(t.id,{x:n,y:e}),{x:n,y:e}},"setCommitPosition"),Dr=l((t,r,s)=>{const n=b.get(t.branch);if(!n)throw new Error(`Branch not found for commit ${t.id}`);const e=r+s,a=n.pos;w.set(t.id,{x:a,y:e})},"setRootPosition"),Nr=l((t,r,s,n,e,a)=>{if(a===x.HIGHLIGHT)t.append("rect").attr("x",s.x-10).attr("y",s.y-10).attr("width",20).attr("height",20).attr("class",`commit ${r.id} commit-highlight${e%M} ${n}-outer`),t.append("rect").attr("x",s.x-6).attr("y",s.y-6).attr("width",12).attr("height",12).attr("class",`commit ${r.id} commit${e%M} ${n}-inner`);else if(a===x.CHERRY_PICK)t.append("circle").attr("cx",s.x).attr("cy",s.y).attr("r",10).attr("class",`commit ${r.id} ${n}`),t.append("circle").attr("cx",s.x-3).attr("cy",s.y+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${r.id} ${n}`),t.append("circle").attr("cx",s.x+3).attr("cy",s.y+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${r.id} ${n}`),t.append("line").attr("x1",s.x+3).attr("y1",s.y+1).attr("x2",s.x).attr("y2",s.y-5).attr("stroke","#fff").attr("class",`commit ${r.id} ${n}`),t.append("line").attr("x1",s.x-3).attr("y1",s.y+1).attr("x2",s.x).attr("y2",s.y-5).attr("stroke","#fff").attr("class",`commit ${r.id} ${n}`);else{const d=t.append("circle");if(d.attr("cx",s.x),d.attr("cy",s.y),d.attr("r",r.type===x.MERGE?9:10),d.attr("class",`commit ${r.id} commit${e%M}`),a===x.MERGE){const o=t.append("circle");o.attr("cx",s.x),o.attr("cy",s.y),o.attr("r",6),o.attr("class",`commit ${n} ${r.id} commit${e%M}`)}a===x.REVERSE&&t.append("path").attr("d",`M ${s.x-5},${s.y-5}L${s.x+5},${s.y+5}M${s.x-5},${s.y+5}L${s.x+5},${s.y-5}`).attr("class",`commit ${n} ${r.id} commit${e%M}`)}},"drawCommitBullet"),Sr=l((t,r,s,n)=>{if(r.type!==x.CHERRY_PICK&&(r.customId&&r.type===x.MERGE||r.type!==x.MERGE)&&v?.showCommitLabel){const e=t.append("g"),a=e.insert("rect").attr("class","commit-label-bkg"),d=e.append("text").attr("x",n).attr("y",s.y+25).attr("class","commit-label").text(r.id),o=d.node()?.getBBox();if(o&&(a.attr("x",s.posWithOffset-o.width/2-T).attr("y",s.y+13.5).attr("width",o.width+2*T).attr("height",o.height+2*T),u==="TB"||u==="BT"?(a.attr("x",s.x-(o.width+4*E+5)).attr("y",s.y-12),d.attr("x",s.x-(o.width+4*E)).attr("y",s.y+o.height-12)):d.attr("x",s.posWithOffset-o.width/2),v.rotateCommitLabel))if(u==="TB"||u==="BT")d.attr("transform","rotate(-45, "+s.x+", "+s.y+")"),a.attr("transform","rotate(-45, "+s.x+", "+s.y+")");else{const f=-7.5-(o.width+10)/25*9.5,h=10+o.width/25*8.5;e.attr("transform","translate("+f+", "+h+") rotate(-45, "+n+", "+s.y+")")}}},"drawCommitLabel"),Wr=l((t,r,s,n)=>{if(r.tags.length>0){let e=0,a=0,d=0;const o=[];for(const f of r.tags.reverse()){const h=t.insert("polygon"),$=t.append("circle"),g=t.append("text").attr("y",s.y-16-e).attr("class","tag-label").text(f),i=g.node()?.getBBox();if(!i)throw new Error("Tag bbox not found");a=Math.max(a,i.width),d=Math.max(d,i.height),g.attr("x",s.posWithOffset-i.width/2),o.push({tag:g,hole:$,rect:h,yOffset:e}),e+=20}for(const{tag:f,hole:h,rect:$,yOffset:g}of o){const i=d/2,y=s.y-19.2-g;if($.attr("class","tag-label-bkg").attr("points",`
      ${n-a/2-E/2},${y+T}  
      ${n-a/2-E/2},${y-T}
      ${s.posWithOffset-a/2-E},${y-i-T}
      ${s.posWithOffset+a/2+E},${y-i-T}
      ${s.posWithOffset+a/2+E},${y+i+T}
      ${s.posWithOffset-a/2-E},${y+i+T}`),h.attr("cy",y).attr("cx",n-a/2+E/2).attr("r",1.5).attr("class","tag-hole"),u==="TB"||u==="BT"){const p=n+g;$.attr("class","tag-label-bkg").attr("points",`
        ${s.x},${p+2}
        ${s.x},${p-2}
        ${s.x+L},${p-i-2}
        ${s.x+L+a+4},${p-i-2}
        ${s.x+L+a+4},${p+i+2}
        ${s.x+L},${p+i+2}`).attr("transform","translate(12,12) rotate(45, "+s.x+","+n+")"),h.attr("cx",s.x+E/2).attr("cy",p).attr("transform","translate(12,12) rotate(45, "+s.x+","+n+")"),f.attr("x",s.x+5).attr("y",p+3).attr("transform","translate(14,14) rotate(45, "+s.x+","+n+")")}}}},"drawCommitTags"),jr=l(t=>{switch(t.customType??t.type){case x.NORMAL:return"commit-normal";case x.REVERSE:return"commit-reverse";case x.HIGHLIGHT:return"commit-highlight";case x.MERGE:return"commit-merge";case x.CHERRY_PICK:return"commit-cherry-pick";default:return"commit-normal"}},"getCommitClassType"),Yr=l((t,r,s,n)=>{const e={x:0,y:0};if(t.parents.length>0){const a=j(t.parents);if(a){const d=n.get(a)??e;return r==="TB"?d.y+k:r==="BT"?(n.get(t.id)??e).y-k:d.x+k}}else return r==="TB"?O:r==="BT"?(n.get(t.id)??e).y-k:0;return 0},"calculatePosition"),Kr=l((t,r,s)=>{const n=u==="BT"&&s?r:r+L,e=u==="TB"||u==="BT"?n:b.get(t.branch)?.pos,a=u==="TB"||u==="BT"?b.get(t.branch)?.pos:n;if(a===void 0||e===void 0)throw new Error(`Position were undefined for commit ${t.id}`);return{x:a,y:e,posWithOffset:n}},"getCommitPosition"),F=l((t,r,s)=>{if(!v)throw new Error("GitGraph config not found");const n=t.append("g").attr("class","commit-bullets"),e=t.append("g").attr("class","commit-labels");let a=u==="TB"||u==="BT"?O:0;const d=[...r.keys()],o=v?.parallelCommits??!1,f=l(($,g)=>{const i=r.get($)?.seq,y=r.get(g)?.seq;return i!==void 0&&y!==void 0?i-y:0},"sortKeys");let h=d.sort(f);u==="BT"&&(o&&_r(h,r,a),h=h.reverse()),h.forEach($=>{const g=r.get($);if(!g)throw new Error(`Commit not found for key ${$}`);o&&(a=Yr(g,u,a,w));const i=Kr(g,a,o);if(s){const y=jr(g),p=g.customType??g.type,H=b.get(g.branch)?.index??0;Nr(n,g,i,y,H,p),Sr(e,g,i,a),Wr(e,g,i,a)}u==="TB"||u==="BT"?w.set(g.id,{x:i.x,y:i.posWithOffset}):w.set(g.id,{x:i.posWithOffset,y:i.y}),a=u==="BT"&&o?a+k:a+k+L,a>B&&(B=a)})},"drawCommits"),Ur=l((t,r,s,n,e)=>{const d=(u==="TB"||u==="BT"?s.x<n.x:s.y<n.y)?r.branch:t.branch,o=l(h=>h.branch===d,"isOnBranchToGetCurve"),f=l(h=>h.seq>t.seq&&h.seq<r.seq,"isBetweenCommits");return[...e.values()].some(h=>f(h)&&o(h))},"shouldRerouteArrow"),G=l((t,r,s=0)=>{const n=t+Math.abs(t-r)/2;if(s>5)return n;if(q.every(d=>Math.abs(d-n)>=10))return q.push(n),n;const a=Math.abs(t-r);return G(t,r-a/5,s+1)},"findLane"),Vr=l((t,r,s,n)=>{const e=w.get(r.id),a=w.get(s.id);if(e===void 0||a===void 0)throw new Error(`Commit positions not found for commits ${r.id} and ${s.id}`);const d=Ur(r,s,e,a,n);let o="",f="",h=0,$=0,g=b.get(s.branch)?.index;s.type===x.MERGE&&r.id!==s.parents[0]&&(g=b.get(r.branch)?.index);let i;if(d){o="A 10 10, 0, 0, 0,",f="A 10 10, 0, 0, 1,",h=10,$=10;const y=e.y<a.y?G(e.y,a.y):G(a.y,e.y),p=e.x<a.x?G(e.x,a.x):G(a.x,e.x);u==="TB"?e.x<a.x?i=`M ${e.x} ${e.y} L ${p-h} ${e.y} ${f} ${p} ${e.y+$} L ${p} ${a.y-h} ${o} ${p+$} ${a.y} L ${a.x} ${a.y}`:(g=b.get(r.branch)?.index,i=`M ${e.x} ${e.y} L ${p+h} ${e.y} ${o} ${p} ${e.y+$} L ${p} ${a.y-h} ${f} ${p-$} ${a.y} L ${a.x} ${a.y}`):u==="BT"?e.x<a.x?i=`M ${e.x} ${e.y} L ${p-h} ${e.y} ${o} ${p} ${e.y-$} L ${p} ${a.y+h} ${f} ${p+$} ${a.y} L ${a.x} ${a.y}`:(g=b.get(r.branch)?.index,i=`M ${e.x} ${e.y} L ${p+h} ${e.y} ${f} ${p} ${e.y-$} L ${p} ${a.y+h} ${o} ${p-$} ${a.y} L ${a.x} ${a.y}`):e.y<a.y?i=`M ${e.x} ${e.y} L ${e.x} ${y-h} ${o} ${e.x+$} ${y} L ${a.x-h} ${y} ${f} ${a.x} ${y+$} L ${a.x} ${a.y}`:(g=b.get(r.branch)?.index,i=`M ${e.x} ${e.y} L ${e.x} ${y+h} ${f} ${e.x+$} ${y} L ${a.x-h} ${y} ${o} ${a.x} ${y-$} L ${a.x} ${a.y}`)}else o="A 20 20, 0, 0, 0,",f="A 20 20, 0, 0, 1,",h=20,$=20,u==="TB"?(e.x<a.x&&(s.type===x.MERGE&&r.id!==s.parents[0]?i=`M ${e.x} ${e.y} L ${e.x} ${a.y-h} ${o} ${e.x+$} ${a.y} L ${a.x} ${a.y}`:i=`M ${e.x} ${e.y} L ${a.x-h} ${e.y} ${f} ${a.x} ${e.y+$} L ${a.x} ${a.y}`),e.x>a.x&&(o="A 20 20, 0, 0, 0,",f="A 20 20, 0, 0, 1,",h=20,$=20,s.type===x.MERGE&&r.id!==s.parents[0]?i=`M ${e.x} ${e.y} L ${e.x} ${a.y-h} ${f} ${e.x-$} ${a.y} L ${a.x} ${a.y}`:i=`M ${e.x} ${e.y} L ${a.x+h} ${e.y} ${o} ${a.x} ${e.y+$} L ${a.x} ${a.y}`),e.x===a.x&&(i=`M ${e.x} ${e.y} L ${a.x} ${a.y}`)):u==="BT"?(e.x<a.x&&(s.type===x.MERGE&&r.id!==s.parents[0]?i=`M ${e.x} ${e.y} L ${e.x} ${a.y+h} ${f} ${e.x+$} ${a.y} L ${a.x} ${a.y}`:i=`M ${e.x} ${e.y} L ${a.x-h} ${e.y} ${o} ${a.x} ${e.y-$} L ${a.x} ${a.y}`),e.x>a.x&&(o="A 20 20, 0, 0, 0,",f="A 20 20, 0, 0, 1,",h=20,$=20,s.type===x.MERGE&&r.id!==s.parents[0]?i=`M ${e.x} ${e.y} L ${e.x} ${a.y+h} ${o} ${e.x-$} ${a.y} L ${a.x} ${a.y}`:i=`M ${e.x} ${e.y} L ${a.x-h} ${e.y} ${o} ${a.x} ${e.y-$} L ${a.x} ${a.y}`),e.x===a.x&&(i=`M ${e.x} ${e.y} L ${a.x} ${a.y}`)):(e.y<a.y&&(s.type===x.MERGE&&r.id!==s.parents[0]?i=`M ${e.x} ${e.y} L ${a.x-h} ${e.y} ${f} ${a.x} ${e.y+$} L ${a.x} ${a.y}`:i=`M ${e.x} ${e.y} L ${e.x} ${a.y-h} ${o} ${e.x+$} ${a.y} L ${a.x} ${a.y}`),e.y>a.y&&(s.type===x.MERGE&&r.id!==s.parents[0]?i=`M ${e.x} ${e.y} L ${a.x-h} ${e.y} ${o} ${a.x} ${e.y-$} L ${a.x} ${a.y}`:i=`M ${e.x} ${e.y} L ${e.x} ${a.y+h} ${f} ${e.x+$} ${a.y} L ${a.x} ${a.y}`),e.y===a.y&&(i=`M ${e.x} ${e.y} L ${a.x} ${a.y}`));if(i===void 0)throw new Error("Line definition not found");t.append("path").attr("d",i).attr("class","arrow arrow"+g%M)},"drawArrow"),Xr=l((t,r)=>{const s=t.append("g").attr("class","commit-arrows");[...r.keys()].forEach(n=>{const e=r.get(n);e.parents&&e.parents.length>0&&e.parents.forEach(a=>{Vr(s,r.get(a),e,r)})})},"drawArrows"),Jr=l((t,r)=>{const s=t.append("g");r.forEach((n,e)=>{const a=e%M,d=b.get(n.name)?.pos;if(d===void 0)throw new Error(`Position not found for branch ${n.name}`);const o=s.append("line");o.attr("x1",0),o.attr("y1",d),o.attr("x2",B),o.attr("y2",d),o.attr("class","branch branch"+a),u==="TB"?(o.attr("y1",O),o.attr("x1",d),o.attr("y2",B),o.attr("x2",d)):u==="BT"&&(o.attr("y1",B),o.attr("x1",d),o.attr("y2",O),o.attr("x2",d)),q.push(d);const f=n.name,h=W(f),$=s.insert("rect"),i=s.insert("g").attr("class","branchLabel").insert("g").attr("class","label branch-label"+a);i.node().appendChild(h);const y=h.getBBox();$.attr("class","branchLabelBkg label"+a).attr("rx",4).attr("ry",4).attr("x",-y.width-4-(v?.rotateCommitLabel===!0?30:0)).attr("y",-y.height/2+8).attr("width",y.width+18).attr("height",y.height+4),i.attr("transform","translate("+(-y.width-14-(v?.rotateCommitLabel===!0?30:0))+", "+(d-y.height/2-1)+")"),u==="TB"?($.attr("x",d-y.width/2-10).attr("y",0),i.attr("transform","translate("+(d-y.width/2-5)+", 0)")):u==="BT"?($.attr("x",d-y.width/2-10).attr("y",B),i.attr("transform","translate("+(d-y.width/2-5)+", "+B+")")):$.attr("transform","translate(-19, "+(d-y.height/2)+")")})},"drawBranches"),Qr=l(function(t,r,s,n,e){return b.set(t,{pos:r,index:s}),r+=50+(e?40:0)+(u==="TB"||u==="BT"?n.width/2:0),r},"setBranchPosition"),Zr=l(function(t,r,s,n){if(Ar(),m.debug("in gitgraph renderer",t+`
`,"id:",r,s),!v)throw new Error("GitGraph config not found");const e=v.rotateCommitLabel??!1,a=n.db;R=a.getCommits();const d=a.getBranchesAsObjArray();u=a.getDirection();const o=dr(`[id="${r}"]`);let f=0;d.forEach((h,$)=>{const g=W(h.name),i=o.append("g"),y=i.insert("g").attr("class","branchLabel"),p=y.insert("g").attr("class","label branch-label");p.node()?.appendChild(g);const H=g.getBBox();f=Qr(h.name,f,$,H,e),p.remove(),y.remove(),i.remove()}),F(o,R,!1),v.showBranches&&Jr(o,d),Xr(o,R),F(o,R,!0),er.insertTitle(o,"gitTitleText",v.titleTopMargin??0,a.getDiagramTitle()),tr(void 0,o,v.diagramPadding,v.useMaxWidth)},"draw"),re={draw:Zr},ee=l(t=>`
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[0,1,2,3,4,5,6,7].map(r=>`
        .branch-label${r} { fill: ${t["gitBranchLabel"+r]}; }
        .commit${r} { stroke: ${t["git"+r]}; fill: ${t["git"+r]}; }
        .commit-highlight${r} { stroke: ${t["gitInv"+r]}; fill: ${t["gitInv"+r]}; }
        .label${r}  { fill: ${t["git"+r]}; }
        .arrow${r} { stroke: ${t["git"+r]}; }
        `).join(`
`)}

  .branch {
    stroke-width: 1;
    stroke: ${t.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelColor};}
  .commit-label-bkg { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${t.tagLabelFontSize}; fill: ${t.tagLabelColor};}
  .tag-label-bkg { fill: ${t.tagLabelBackground}; stroke: ${t.tagLabelBorder}; }
  .tag-hole { fill: ${t.textColor}; }

  .commit-merge {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }
  .commit-reverse {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }
`,"getStyles"),te=ee,fe={parser:Or,db:S,renderer:re,styles:te};export{fe as diagram};
