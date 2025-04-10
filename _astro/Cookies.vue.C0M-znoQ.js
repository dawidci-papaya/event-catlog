import{d as g,F as B,J as U,c as V,aA as A,e as h,o as p,M as S,K as F,w as u,f as d,q as x,E as b,u as f,T as O,aG as q,s as z,ax as L,aH as R,L as T,a2 as Z,aI as G,b as M,x as H,z as J,Z as P,ay as N}from"./_OpenAPI.P2waDejs.js";import{r as W}from"./EmptyState.vue.D3BAsX05.js";import{m as Q,g as X}from"./SidebarButton.vue.D_7n_R83.js";import{h as Y,b as y,_ as ee,a as ae}from"./CommandActionInput.vue.CsB7werI.js";import{u as oe}from"./ViewLayout.vue.DJ9YM5L4.js";import{x as le}from"./ViewLayoutContent.vue.CZ0bKc7g.js";import{_ as se}from"./ViewLayoutSection.vue.C7uYvVUG.js";import{q as te}from"./Form.vue.BrmX77Lr.js";import"./jsx-runtime.B8R7zBj2.js";import"./index.GM20xmA1.js";import"./_commonjsHelpers.D6-XlEtG.js";import"./preload-helper.CLcXU_4U.js";import"./index.z6vorqh-.js";import"./floating-ui.dom.DfmbYluP.js";/* empty css                       */import"./ScalarAsciiArt.vue.BGwck1qd.js";import"./ScalarHotkey.vue.BFHJnENi.js";import"./DeleteSidebarListElement.vue.BfTc6Ub1.js";const ie=g({__name:"CookieForm",setup(C){const{activeCookieId:m}=B(),{cookies:v,cookieMutators:k}=U(),a=[{label:"Name",key:"name",placeholder:"session_id"},{label:"Value",key:"value",placeholder:"my-cookie-session-id"},{label:"Domain",key:"domain",placeholder:"example.com"}],r=V(()=>v[m.value]||A.parse({name:"",value:"",domain:"",path:""})),_=(i,e)=>{k.edit(m.value,i,e)};return(i,e)=>(p(),h(te,{data:r.value,onUpdate:_,options:a},null,8,["data"]))}}),ue={class:"flex h-8 items-start gap-2 text-sm"},ne={class:"flex h-8 items-start gap-2 text-sm"},de={class:"flex h-8 items-start gap-2 text-sm"},me=g({__name:"CookieModal",props:{state:{}},emits:["cancel","submit"],setup(C,{emit:m}){const v=C,k=m,a=S({name:"",value:"",domain:""}),{toast:r}=q(),_=()=>{if(!a.value.name||!a.value.value){r("Please fill in all fields before adding a cookie.","error");return}k("submit",a.value),v.state.hide()};return F(()=>v.state.open,i=>{i&&(a.value={name:"",value:"",domain:""})}),(i,e)=>(p(),h(f(O),{size:"xs",state:i.state,title:"Add Cookie"},{default:u(()=>[d(Y,{disabled:!a.value.name||!a.value.value,onCancel:e[3]||(e[3]=n=>k("cancel")),onSubmit:_},{submit:u(()=>e[7]||(e[7]=[b("Add Cookie")])),default:u(()=>[x("div",ue,[e[4]||(e[4]=b(" Name: ")),d(y,{modelValue:a.value.name,"onUpdate:modelValue":e[0]||(e[0]=n=>a.value.name=n),autofocus:"",class:"!p-0",placeholder:"session_id"},null,8,["modelValue"])]),x("div",ne,[e[5]||(e[5]=b(" Value: ")),d(y,{modelValue:a.value.value,"onUpdate:modelValue":e[1]||(e[1]=n=>a.value.value=n),autofocus:"",class:"!p-0",placeholder:"my-cookie-session-id"},null,8,["modelValue"])]),x("div",de,[e[6]||(e[6]=b(" Domain: ")),d(y,{modelValue:a.value.domain,"onUpdate:modelValue":e[2]||(e[2]=n=>a.value.domain=n),autofocus:"",class:"!p-0",placeholder:"example.com"},null,8,["modelValue"])])]),_:1},8,["disabled"])]),_:1},8,["state"]))}}),re=z(me,[["__scopeId","data-v-694018d6"]]),ce={class:"flex-1"},pe={class:"relative mb-[.5px] last:mb-0"},De=g({__name:"Cookies",setup(C){const{cookies:m,cookieMutators:v,events:k,workspaceMutators:a}=U(),{activeWorkspace:r,activeCookieId:_}=B(),i=L(),e=R(),n=T(),D=s=>{var l,o;const t=A.parse({name:s.name,value:s.value,domain:s.domain,path:"/"});v.add(t),a.edit((l=r.value)==null?void 0:l.uid,"cookies",[...((o=r.value)==null?void 0:o.cookies)??[],t.uid]),i.push({name:"cookies",params:{cookies:t.uid}})},E=s=>{var l,o;v.delete(s),a.edit((l=r.value)==null?void 0:l.uid,"cookies",[...(((o=r.value)==null?void 0:o.cookies)??[]).filter(c=>c!==s)]);const t=Object.values(m).filter(c=>c.uid!==s);if(t.length>0){const c=t[t.length-1];c&&i.push(c.uid)}else i.push({name:"cookies",params:{[N.Cookies]:"default"}})},w=()=>{n.show()},$=s=>{s!=null&&s.createNew&&e.name==="cookies"&&w()},j=(s,l)=>{var o;const t={name:"cookies",params:{workspace:((o=r.value)==null?void 0:o.uid)??"default",cookies:l}};if(s.metaKey){const c=i.resolve(t).href;window.open(c,"_blank");return}i.push(t)};Z(()=>k.hotKeys.on($)),G(()=>k.hotKeys.off($));const I=V(()=>m[_.value]),K=V(()=>Object.keys(m).length>0&&I.value);return(s,l)=>(p(),h(oe,null,{default:u(()=>[d(f(Q),{title:"Cookies"},{content:u(()=>[x("div",ce,[d(ee,null,{default:u(()=>[(p(!0),M(H,null,J(Object.values(f(m)),o=>(p(),M("li",{key:o.uid,class:"gap-1/2 flex flex-col"},[x("div",pe,[(p(),h(ae,{key:o.uid,class:"text-xs",isDeletable:"",to:{name:"cookies",params:{[f(N).Cookies]:o.uid}},type:"cookies",variable:{name:o.name,uid:o.uid},warningMessage:"Are you sure you want to delete this cookie?",onClick:P(t=>j(t,o.uid),["prevent"]),onDelete:t=>E(o.uid)},null,8,["to","variable","onClick","onDelete"]))])]))),128))]),_:1})])]),button:u(()=>[d(X,{click:w,hotkey:"N"},{title:u(()=>l[1]||(l[1]=[b(" Add Cookie ")])),_:1})]),_:1}),d(le,{class:"flex-1"},{default:u(()=>[K.value?(p(),h(se,{key:0,class:"*:border-b-0"},{title:u(()=>l[2]||(l[2]=[b("Edit Cookie")])),default:u(()=>[d(ie)]),_:1})):(p(),h(W,{key:1}))]),_:1}),d(re,{state:f(n),onCancel:l[0]||(l[0]=o=>f(n).hide()),onSubmit:D},null,8,["state"])]),_:1}))}});export{De as default};
