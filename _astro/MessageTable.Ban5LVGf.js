import{j as e}from"./jsx-runtime.B8R7zBj2.js";import{g as J}from"./MessageTableColumns.CPq4URvR.js";import{a as K}from"./url-builder.CA2d8hgU.js";import{r as i}from"./index.GM20xmA1.js";import"./createLucideIcon.UmlluPcl.js";import"./ServerIcon.DGKp2rnz.js";import"./_commonjsHelpers.D6-XlEtG.js";const O=i.memo(({message:t,showChannels:p,collection:m})=>{const{color:y,Icon:u}=J(t.type),r=K(`/docs/${m}/${t.id}/${t.version}`);let o=m.slice(0,-1);o=o==="querie"?"query":o;const b=t.channels||[];return e.jsxs("tr",{className:"group hover:bg-gray-100",children:[e.jsxs("td",{className:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 relative",children:[e.jsx("a",{href:r,className:"absolute inset-0 z-10","aria-label":`View details for ${t.name}`}),e.jsxs("div",{className:"flex items-center gap-2 relative",children:[e.jsx(u,{className:`h-5 w-5 text-${y}-500`}),e.jsx("span",{className:"group-hover:text-blue-600 break-all",children:t.name})]})]}),e.jsxs("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500 relative",children:[e.jsx("a",{href:r,className:"absolute inset-0 z-10","aria-hidden":"true"}),e.jsxs("span",{children:["v",t.version]})]}),e.jsxs("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500 relative",children:[e.jsx("a",{href:r,className:"absolute inset-0 z-10","aria-hidden":"true"}),e.jsx("span",{children:o})]}),e.jsxs("td",{className:"px-3 py-4 text-sm text-gray-500 relative",children:[e.jsx("a",{href:r,className:"absolute inset-0 z-10","aria-hidden":"true"}),e.jsx("span",{className:"line-clamp-2 break-words",children:t.summary||"-"})]}),p&&e.jsxs("td",{className:"px-3 py-4 text-sm text-gray-500 relative",children:[e.jsx("a",{href:r,className:"absolute inset-0 z-10","aria-hidden":"true"}),e.jsx("div",{className:"flex flex-wrap gap-1",children:b.length>0?b.map((j,w)=>e.jsx("span",{className:"inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10",children:j.id},`${j.id}-${w}`)):"-"})]})]})}),W=i.memo(({type:t,label:p,typeFilter:m,setTypeFilter:y,setCurrentPage:u,count:r})=>e.jsxs("button",{onClick:()=>{y(m===t?null:t),u(1)},className:`px-3 py-1 rounded-md text-sm font-medium ${m===t?"bg-black text-white border border-gray-200 hover:bg-gray-900":"bg-white text-black border border-gray-200 hover:bg-gray-100"}`,children:[p," (",r,")"]})),le=t=>{const{receives:p,sends:m,collection:y="services",limit:u,showChannels:r=!1,format:o="all"}=t,[b,j]=i.useState(""),[w,B]=i.useState(""),[E,A]=i.useState(1),[I,Q]=i.useState(1),[V,F]=i.useState(null),[U,D]=i.useState(null),g=u||5,G=o==="receives"||o==="all",H=o==="sends"||o==="all",T=i.useCallback((M,n,c)=>{let d=M;if(c&&(d=d.filter(l=>{const a=l.collection.slice(0,-1);return(a==="querie"?"query":a)===c})),n){const l=n.toLowerCase();d=d.filter(a=>{const x=a.collection.slice(0,-1),S=x==="querie"?"query":x;return a.name.toLowerCase().includes(l)||a.summary?.toLowerCase().includes(l)||S.toLowerCase().includes(l)})}return d},[]),C=(M,n,c,d,l,a,x,S)=>{const h=i.useMemo(()=>T(n,c,x),[n,c,x,T]),f=Math.ceil(h.length/g),v=(l-1)*g,$=i.useMemo(()=>h.slice(v,v+g),[h,v,g]),R=i.useMemo(()=>{const s=new Map;return n.forEach(N=>{const q=N.collection.slice(0,-1),L=q==="querie"?"query":q;s.set(L,(s.get(L)||0)+1)}),s},[n]),k=i.useMemo(()=>Array.from(new Set(n.map(s=>{const N=s.collection.slice(0,-1);return N==="querie"?"query":N}))),[n]),z=i.useMemo(()=>[{type:"event",label:"Events"},{type:"query",label:"Queries"},{type:"command",label:"Commands"}].filter(s=>k.includes(s.type)).map(s=>({...s,count:R.get(s.type)||0})),[k,R]);return e.jsxs("div",{className:"flow-root bg-white border-gray-200 border  p-4 pb-2 rounded-lg text-gray-900",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-semibold",children:[M," (",c||x?`${h.length}/${n.length}`:n.length,")"]}),e.jsx("span",{className:"text-sm text-gray-700",children:"Quickly find the message you need by searching for the name, type, or summary."}),z.length>0&&e.jsx("div",{className:"flex gap-2 pb-2",children:z.map(s=>e.jsx(W,{type:s.type,label:s.label,count:s.count,typeFilter:x,setTypeFilter:S,setCurrentPage:a},s.type))}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",children:e.jsx("svg",{className:"h-5 w-5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{fillRule:"evenodd",d:"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z",clipRule:"evenodd"})})}),e.jsx("input",{type:"text",value:c,onChange:s=>{d(s.target.value),a(1)},placeholder:"Search by name, type, or summary...",className:"block w-full rounded-md border-0 py-1.5 pl-10 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"}),c&&e.jsx("button",{onClick:()=>{d(""),a(1)},className:"absolute inset-y-0 right-0 flex items-center pr-3","aria-label":"Clear search",children:e.jsx("svg",{className:"h-5 w-5 text-gray-400 hover:text-gray-500",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})})})]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsx("div",{className:"inline-block min-w-full py-2 align-middle",children:e.jsx("div",{className:"max-w-full overflow-hidden",children:e.jsxs("table",{className:"min-w-full table-fixed divide-y divide-gray-300  rounded-sm bg-white ",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:`${r?"w-1/4":"w-1/3"} py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6`,children:"Name"}),e.jsx("th",{scope:"col",className:"w-[100px] px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Version"}),e.jsx("th",{scope:"col",className:"w-[100px] py-3.5 pl-3.5 pr-3 text-left text-sm font-semibold text-gray-900",children:"Type"}),e.jsx("th",{scope:"col",className:`${r?"w-1/3":"w-1/2"} px-3 py-3.5 text-left text-sm font-semibold text-gray-900`,children:"Summary"}),r&&e.jsx("th",{scope:"col",className:"w-1/4 px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Channels"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200",children:$.length>0?$.map(s=>e.jsx(O,{message:s,showChannels:r,collection:s.collection},s.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:r?5:4,className:"text-center py-4 text-sm text-gray-500",children:"No messages found"})})})]})})})}),f>1&&e.jsxs("div",{className:"flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 -mt-2",children:[e.jsxs("div",{className:"flex flex-1 justify-between sm:hidden",children:[e.jsx("button",{onClick:()=>a(l-1),disabled:l===1,className:`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium ${l===1?"text-gray-300":"text-gray-700 hover:bg-gray-50"}`,children:"Previous"}),e.jsx("button",{onClick:()=>a(l+1),disabled:l===f,className:`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium ${l===f?"text-gray-300":"text-gray-700 hover:bg-gray-50"}`,children:"Next"})]}),e.jsxs("div",{className:"hidden sm:flex sm:flex-1 sm:items-center sm:justify-between",children:[e.jsx("div",{children:e.jsxs("p",{className:"text-sm text-gray-700",children:["Showing ",e.jsx("span",{className:"font-medium",children:v+1})," to"," ",e.jsx("span",{className:"font-medium",children:Math.min(v+g,h.length)})," of"," ",e.jsx("span",{className:"font-medium",children:h.length})," results"]})}),e.jsx("div",{children:e.jsxs("nav",{className:"isolate inline-flex -space-x-px rounded-md shadow-sm","aria-label":"Pagination",children:[e.jsxs("button",{onClick:()=>a(l-1),disabled:l===1,className:`relative inline-flex items-center rounded-l-md px-2 py-2 ${l===1?"text-gray-300":"text-gray-400 hover:bg-gray-50"} ring-1 ring-inset ring-gray-300`,children:[e.jsx("span",{className:"sr-only",children:"Previous"}),e.jsx("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{fillRule:"evenodd",d:"M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z",clipRule:"evenodd"})})]}),e.jsxs("button",{onClick:()=>a(l+1),disabled:l===f,className:`relative inline-flex items-center rounded-r-md px-2 py-2 ${l===f?"text-gray-300":"text-gray-400 hover:bg-gray-50"} ring-1 ring-inset ring-gray-300`,children:[e.jsx("span",{className:"sr-only",children:"Next"}),e.jsx("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{fillRule:"evenodd",d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",clipRule:"evenodd"})})]})]})})]})]})]})};return e.jsxs("div",{className:"mx-auto not-prose py-4  space-y-4  my-4",children:[e.jsxs("h2",{className:"text-2xl font-semibold",children:["Messages for this ",y.slice(0,-1)]}),e.jsxs("div",{children:[H&&e.jsx("div",{children:C("Sends messages",m||[],w,B,I,Q,U,D)}),G&&e.jsx("div",{className:o==="all"?"pt-4":"",children:C("Receives messages",p||[],b,j,E,A,V,F)})]})]})};export{le as default};
