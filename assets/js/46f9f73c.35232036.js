"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[905],{5080:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=t(6070),s=t(5710);const r={},d="find",o={id:"API/find",title:"find",description:"Description",source:"@site/docs/API/find.md",sourceDirName:"API",slug:"/API/find",permalink:"/utils-demo-package/docs/API/find",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"delay",permalink:"/utils-demo-package/docs/API/delay"},next:{title:"findById",permalink:"/utils-demo-package/docs/API/findById"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"find",children:"find"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["Finds an element in an array that satisfies a provided testing function. If no elements satisfy the testing function, ",(0,i.jsx)(n.code,{children:"undefined"})," is returned."]}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"array: T[]"}),": The array to search through."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"predicate: (item: T) => boolean"}),": The function used to test each element."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"T | undefined"}),": Returns the first element that satisfies the predicate, or ",(0,i.jsx)(n.code,{children:"undefined"})," if no element satisfies it."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'import { utils } from \'utils-ts-package\';\n\nconst items = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];\nconst found = utils.find(items, item => item.name === "Bob");\nconsole.log(found); // Output: { id: 2, name: "Bob" }\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},5710:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var i=t(758);const s={},r=i.createContext(s);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);