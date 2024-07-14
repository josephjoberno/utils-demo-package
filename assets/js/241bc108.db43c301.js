"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[908],{1997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(6070),s=n(5710);const i={},o="groupBy",a={id:"API/groupBy",title:"groupBy",description:"Description",source:"@site/docs/API/groupBy.md",sourceDirName:"API",slug:"/API/groupBy",permalink:"/utils-demo-package/docs/API/groupBy",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"findById",permalink:"/utils-demo-package/docs/API/findById"},next:{title:"isEmpty",permalink:"/utils-demo-package/docs/API/isEmpty"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"groupby",children:"groupBy"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Groups the elements of an array based on the specified key."}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"array: T[]"}),": The array to group."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"key: keyof T"}),": The key on which to group the array elements."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"{ [key: string]: T[] }"}),": An object with keys representing the grouped property values and values being arrays of elements that correspond to each key."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'import { utils } from \'utils-ts-package\';\n\nconst items = [{ id: 1, type: "fruit", name: "Apple" }, { id: 2, type: "vegetable", name: "Carrot" }];\nconst groupedByType = utils.groupBy(items, \'type\');\nconsole.log(groupedByType);\n// Output: { fruit: [{ id: 1, name: "Apple" }], vegetable: [{ id: 2, name: "Carrot" }] }\n'})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},5710:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(758);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);