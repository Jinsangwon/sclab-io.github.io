"use strict";(self.webpackChunksclab_docs=self.webpackChunksclab_docs||[]).push([[1053],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Authentication",tags:["API","Auth","authorization"]},i=void 0,c={unversionedId:"api/rest-api/authentication",id:"api/rest-api/authentication",title:"Authentication",description:"SCLAB uses API JWT to allow access to the API. You can register a new SCLAB API key at our SCLAB Studio.",source:"@site/docs/api/rest-api/authentication.md",sourceDirName:"api/rest-api",slug:"/api/rest-api/authentication",permalink:"/docs/api/rest-api/authentication",draft:!1,editUrl:"https://github.com/sclab-io/sclab-io.github.io/tree/main/docs/api/rest-api/authentication.md",tags:[{label:"API",permalink:"/docs/tags/api"},{label:"Auth",permalink:"/docs/tags/auth"},{label:"authorization",permalink:"/docs/tags/authorization"}],version:"current",frontMatter:{title:"Authentication",tags:["API","Auth","authorization"]},sidebar:"api",previous:{title:"REST API",permalink:"/docs/category/rest-api"},next:{title:"API Action - Server",permalink:"/docs/api/rest-api/api-action-server"}},s={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"SCLAB uses API JWT to allow access to the API. You can register a new SCLAB API key at our ",(0,a.kt)("a",{parentName:"p",href:"https://app.sclab.io"},"SCLAB Studio"),"."),(0,a.kt)("p",null,"SCLAB expects for the API token to be included in all API requests to the server in a header that looks like the following:"),(0,a.kt)("p",null,"Authorization: APITokenHere"),(0,a.kt)("p",null,"And also you can use query string or JSON key and value for POST request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# authorization header \ncurl "api_endpoint_here" \\\n  -H "Authorization: APITokenHere"\n\n# query string for without header\ncurl "api_endpoint_here?token=APITokenHere"\n\n# json body for POST\ncurl "api_endpoint_here" \\\n  -H "Content-Type: application/json" \\\n  -X POST \\\n  -d "{\\"token\\": \\"APITokenHere\\"}"\n')),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Remember to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"APITokenHere")," with your personal API token and ensure that you do not share it publicly.\nPlease regenerate your API key if you have lost it or it has been compromised.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"API Screenshot",src:n(425).Z,width:"1438",height:"920"})))}d.isMDXComponent=!0},425:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/token_screen_shot-bf0e43be7906ef0f34e30816d9a4b4af.png"}}]);