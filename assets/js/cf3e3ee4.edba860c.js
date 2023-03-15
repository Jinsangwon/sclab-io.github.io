"use strict";(self.webpackChunksclab_docs=self.webpackChunksclab_docs||[]).push([[1091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"API Action - Server",tags:["REST API","Action"]},o=void 0,c={unversionedId:"api/rest-api/api-action-server",id:"api/rest-api/api-action-server",title:"API Action - Server",description:"API Action - Server is designed to enable users connected to a specific situation, such as an emergency, to collectively view a changed screen in an external service.",source:"@site/docs/api/rest-api/api-action-server.md",sourceDirName:"api/rest-api",slug:"/api/rest-api/api-action-server",permalink:"/docs/api/rest-api/api-action-server",draft:!1,editUrl:"https://github.com/sclab-io/sclab-io.github.io/tree/main/docs/api/rest-api/api-action-server.md",tags:[{label:"REST API",permalink:"/docs/tags/rest-api"},{label:"Action",permalink:"/docs/tags/action"}],version:"current",frontMatter:{title:"API Action - Server",tags:["REST API","Action"]},sidebar:"api",previous:{title:"Authentication",permalink:"/docs/api/rest-api/authentication"},next:{title:"Accounts Management",permalink:"/docs/api/rest-api/accounts-management"}},l={},p=[{value:"Run Action",id:"run-action",level:2},{value:"HTTP Request",id:"http-request",level:3},{value:"URL Parameters",id:"url-parameters",level:3}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"API Action - Server")," is designed to enable users connected to a specific situation, such as an emergency, to collectively view a changed screen in an external service.\nPlease note that actions only work after publishing, and endpoints without registered actions will not function properly."),(0,a.kt)("h2",{id:"run-action"},"Run Action"),(0,a.kt)("p",null,"This endpoint runs a single API action.\nOnce the endpoint has successfully received a response, every user browsing your published site will be affected by this action."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl "https://app.sclab.io/api/1/<ID>" \\\n  -H "Authorization: APITokenHere"\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The above command returns JSON structured like this:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "result": "ok"\n}\n')),(0,a.kt)("h3",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET https://app.sclab.io/api/1/<ID>")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You must replace ",(0,a.kt)("inlineCode",{parentName:"p"},"ID")," your api end point like this ",(0,a.kt)("a",{parentName:"p",href:"https://app.sclab.io/api/1/sW47bBZjYyWGjcfaF"},"https://app.sclab.io/api/1/sW47bBZjYyWGjcfaF"))),(0,a.kt)("h3",{id:"url-parameters"},"URL Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ID"),(0,a.kt)("td",{parentName:"tr",align:null},"API Action ID from SCLAB Studio")))))}d.isMDXComponent=!0}}]);