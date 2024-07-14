"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[151],{4952:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(6070),s=t(5710);const r={sidebar_position:3,sidebar_label:"delay"},l="delay",a={id:"API/delay",title:"delay",description:"Description",source:"@site/docs/API/delay.md",sourceDirName:"API",slug:"/API/delay",permalink:"/utils-demo-package/docs/API/delay",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"delay"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/utils-demo-package/docs/intro"},next:{title:"find",permalink:"/utils-demo-package/docs/API/find"}},o={},d=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"delay",children:"delay"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Creates a delay (timeout) that can be used to delay execution within asynchronous functions."}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ms: number"}),": The number of milliseconds to delay."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Promise<void>"}),": A promise that resolves after the specified delay."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { utils } from 'utils-ts-package';\n\nasync function delayedHello() {\n    await utils.delay(1000);\n    console.log(\"Hello after 1 second\");\n}\n\n\ndelayedHello();\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},5710:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var i=t(758);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);