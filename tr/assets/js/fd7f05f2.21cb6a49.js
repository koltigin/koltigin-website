"use strict";(self.webpackChunkkoltigin_website=self.webpackChunkkoltigin_website||[]).push([[427],{8925:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var o=s(5893),i=s(1151);const r={sidebar_position:1},t="Dok\xfcman S\xfcr\xfcmlerini Y\xf6netin",d={id:"tutorial-extras/manage-docs-versions",title:"Dok\xfcman S\xfcr\xfcmlerini Y\xf6netin",description:"Docusaurus can manage multiple versions of your docs.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/tutorial-extras/manage-docs-versions.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/manage-docs-versions",permalink:"/koltigin-website/tr/docs/tutorial-extras/manage-docs-versions",draft:!1,unlisted:!1,editUrl:"https://github.com/koltigin/koltigin-website/tree/main/docs/tutorial-extras/manage-docs-versions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Extras",permalink:"/koltigin-website/tr/docs/category/tutorial---extras"},next:{title:"Sitenizin \xc7evirisini Yap\u0131n",permalink:"/koltigin-website/tr/docs/tutorial-extras/translate-your-site"}},a={},c=[{value:"Create a docs version",id:"create-a-docs-version",level:2},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",level:2},{value:"Update an existing version",id:"update-an-existing-version",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"dok\xfcman-s\xfcr\xfcmlerini-y\xf6netin",children:"Dok\xfcman S\xfcr\xfcmlerini Y\xf6netin"}),"\n",(0,o.jsx)(n.p,{children:"Docusaurus can manage multiple versions of your docs."}),"\n",(0,o.jsx)(n.h2,{id:"create-a-docs-version",children:"Create a docs version"}),"\n",(0,o.jsx)(n.p,{children:"Release a version 1.0 of your project:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm run docusaurus docs:version 1.0\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"docs"})," folder is copied into ",(0,o.jsx)(n.code,{children:"versioned_docs/version-1.0"})," and ",(0,o.jsx)(n.code,{children:"versions.json"})," is created."]}),"\n",(0,o.jsx)(n.p,{children:"Your docs now have 2 versions:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"1.0"})," at ",(0,o.jsx)(n.code,{children:"http://localhost:3000/docs/"})," for the version 1.0 docs"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"current"})," at ",(0,o.jsx)(n.code,{children:"http://localhost:3000/docs/next/"})," for the ",(0,o.jsx)(n.strong,{children:"upcoming, unreleased docs"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"add-a-version-dropdown",children:"Add a Version Dropdown"}),"\n",(0,o.jsx)(n.p,{children:"To navigate seamlessly across versions, add a version dropdown."}),"\n",(0,o.jsxs)(n.p,{children:["Modify the ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"The docs version dropdown appears in your navbar:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Docs Version Dropdown",src:s(8944).Z+"",width:"370",height:"302"})}),"\n",(0,o.jsx)(n.h2,{id:"update-an-existing-version",children:"Update an existing version"}),"\n",(0,o.jsx)(n.p,{children:"It is possible to edit versioned docs in their respective folder:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"versioned_docs/version-1.0/hello.md"})," updates ",(0,o.jsx)(n.code,{children:"http://localhost:3000/docs/hello"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"docs/hello.md"})," updates ",(0,o.jsx)(n.code,{children:"http://localhost:3000/docs/next/hello"})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8944:(e,n,s)=>{s.d(n,{Z:()=>o});const o=s.p+"assets/images/docsVersionDropdown-35e13cbe46c9923327f30a76a90bff3b.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>t});var o=s(7294);const i={},r=o.createContext(i);function t(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);