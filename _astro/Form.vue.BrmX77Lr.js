import{d as y,F as b,l as V,e as s,o,p as d,w as t,b as p,r as x,t as m,q as n,k as g,u as a,v as _,x as F,z as h,A as w,B,f as k,C,D as z}from"./_OpenAPI.P2waDejs.js";import{_ as N}from"./ViewLayoutSection.vue.C7uYvVUG.js";const U={key:0},$={class:"custom-scroll flex flex-1 flex-col gap-1.5"},D=["for"],E={class:"bg-b-2 flex-center border-l px-2"},A=y({__name:"Form",props:{title:{},options:{},data:{},onUpdate:{type:Function}},setup(S){const{activeEnvVariables:u,activeEnvironment:f,activeWorkspace:r}=b(),i=V();return(e,q)=>(o(),s(N,null,d({default:t(()=>[n("div",$,[Object.keys(e.data).length>0&&a(r)?(o(),s(_,{key:0,columns:[""]},{default:t(()=>[(o(!0),p(F,null,h(e.options,(l,c)=>(o(),s(w,{key:c,class:B({"border-t":c===0})},{default:t(()=>[k(C,{id:a(i),envVariables:a(u),environment:a(f),modelValue:e.data[l.key]??"",placeholder:l.placeholder,workspace:a(r),"onUpdate:modelValue":v=>e.onUpdate(l.key,v)},d({default:t(()=>[n("label",{for:a(i)},m(l.label),9,D)]),_:2},[l.key==="description"?{name:"icon",fn:t(()=>[n("div",E,[k(a(z),{icon:"Markdown",size:"lg"})])]),key:"0"}:void 0]),1032,["id","envVariables","environment","modelValue","placeholder","workspace","onUpdate:modelValue"])]),_:2},1032,["class"]))),128))]),_:1})):g("",!0)])]),_:2},[e.title||e.$slots.title?{name:"title",fn:t(()=>[e.title?(o(),p("span",U,m(e.title),1)):x(e.$slots,"title",{key:1})]),key:"0"}:void 0]),1024))}});export{A as q};
