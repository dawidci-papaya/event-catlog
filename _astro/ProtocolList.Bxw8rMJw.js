import{j as e}from"./jsx-runtime.B8R7zBj2.js";import{P as o}from"./index.pYvTRwOG.js";/* empty css                       */import{F as c}from"./ChevronDownIcon.BcxYRYn6.js";import{j as i,C as x,R as d}from"./disclosure.DzMnRH65.js";import"./index.GM20xmA1.js";import"./_commonjsHelpers.D6-XlEtG.js";const p=Object.keys(o).reduce((l,a)=>{const t=a;return l[a.toLowerCase()]=o[t],l},{}),h=l=>{const a=p[l];return a?t=>e.jsx("span",{...t,dangerouslySetInnerHTML:{__html:a}}):null},k=({title:l,pills:a,emptyMessage:t,color:m="gray",...u})=>e.jsx("div",{children:e.jsx("div",{className:"mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5",children:e.jsxs(i,{as:"div",className:"pb-8",defaultOpen:a.length<=10,children:[e.jsxs(x,{className:"group flex w-full items-center justify-start space-x-4",children:[e.jsxs("span",{className:"text-sm text-black group-data-[hover]:text-black/80 capitalize",children:[" ",l," "]}),e.jsx(c,{className:"size-5 ml-2 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180"})]}),e.jsx(d,{className:"mt-2 text-sm/5 text-black/50",children:e.jsxs("ul",{role:"list",className:"space-y-2",children:[a.map(s=>{const n=s.href??"#",r=s.icon?h(s.icon):null;return e.jsx("li",{className:" has-tooltip rounded-md text-gray-600 group px-1 w-full hover:bg-gradient-to-l hover:from-purple-500 hover:to-purple-700 hover:text-white hover:font-normal  ",children:e.jsxs("a",{className:"leading-3",href:n,children:[e.jsxs("span",{className:"space-x-2 flex items-center",children:[r&&e.jsx(r,{className:"h-4 w-4"}),e.jsxs("span",{className:"font-light text-sm truncate",children:[s.label," ",s.tag&&e.jsxs(e.Fragment,{children:["(",s.tag,")"]})]}),s.label.length>24&&e.jsxs("span",{className:"tooltip rounded relative shadow-lg p-1 font-normal text-xs bg-white  text-black ml-[30px] mt-12",children:[s.label," (",s.tag,")"]})]}),s.description&&e.jsx("span",{className:"text-[9px] block ml-6 mt-1 leading-0",children:s.description})]})},s.href)}),a.length===0&&t&&e.jsx("li",{className:"inline mr-2 leading-tight text-xs",children:e.jsx("span",{className:"text-gray-400",children:t})})]})})]})})});export{k as default};
