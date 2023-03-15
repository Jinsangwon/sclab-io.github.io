"use strict";(self.webpackChunksclab_docs=self.webpackChunksclab_docs||[]).push([[9422],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),o=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=o(a),c=r,k=m["".concat(i,".").concat(c)]||m[c]||d[c]||l;return a?n.createElement(k,p(p({ref:t},u),{},{components:a})):n.createElement(k,p({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:r,p[1]=s;for(var o=2;o<l;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8086:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={title:"Accounts Management",tags:["REST API","Action"]},p=void 0,s={unversionedId:"api/rest-api/accounts-management",id:"api/rest-api/accounts-management",title:"Accounts Management",description:"Get user information",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api/rest-api/accounts-management.md",sourceDirName:"api/rest-api",slug:"/api/rest-api/accounts-management",permalink:"/ko/docs/api/rest-api/accounts-management",draft:!1,editUrl:"https://github.com/sclab-io/sclab-io.github.io/tree/main/i18n/ko/docusaurus-plugin-content-docs/current/api/rest-api/accounts-management.md",tags:[{label:"REST API",permalink:"/ko/docs/tags/rest-api"},{label:"Action",permalink:"/ko/docs/tags/action"}],version:"current",frontMatter:{title:"Accounts Management",tags:["REST API","Action"]},sidebar:"api",previous:{title:"API Action - Server",permalink:"/ko/docs/api/rest-api/api-action-server"},next:{title:"Errors",permalink:"/ko/docs/api/rest-api/errors"}},i={},o=[{value:"Get user information",id:"get-user-information",level:2},{value:"HTTP Request",id:"http-request",level:3},{value:"JSON Parameters",id:"json-parameters",level:3},{value:"Create new account",id:"create-new-account",level:2},{value:"HTTP Request",id:"http-request-1",level:3},{value:"JSON Parameters",id:"json-parameters-1",level:3},{value:"Update account profile",id:"update-account-profile",level:2},{value:"HTTP Request",id:"http-request-2",level:3},{value:"JSON Parameters",id:"json-parameters-2",level:3},{value:"Delete user from site",id:"delete-user-from-site",level:2},{value:"HTTP Request",id:"http-request-3",level:3},{value:"JSON Parameters",id:"json-parameters-3",level:3}],u={toc:o},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-user-information"},"Get user information"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl "https://app.sclab.io/api/1/user/get?_userId=jJpp2WfD7yp7y2cEk" \\\n  -H "Authorization: APITokenHere" \\\n  -H "Content-Type: application/json"\n\nor\n  \ncurl "https://app.sclab.io/api/1/user/get?email=test@sclab.io" \\\n  -H "Authorization: APITokenHere" \\\n  -H "Content-Type: application/json"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The above command returns JSON structured like this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "result": {\n    "_userId": "jJpp2WfD7yp7y2cEk",\n    "email": "test@sclab.io",\n    "name": "tester",\n    "phone": "01012341234",\n    "address": "seoul"\n  }\n}\n')),(0,r.kt)("p",null,"This endpoint get user information."),(0,r.kt)("h3",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET https://app.sclab.io/api/1/user/get")),(0,r.kt)("h3",{id:"json-parameters"},"JSON Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_userId"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"User id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Email")))),(0,r.kt)("h2",{id:"create-new-account"},"Create new account"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl "https://app.sclab.io/api/1/user/create" \\\n  -X POST \\\n  -H "Authorization: APITokenHere" \\\n  -H "Content-Type: application/json" \\\n  -d "{\\"email\\": \\"email@address.com\\", \\"password\\": \\"password string\\", \\"name\\": \\"user name\\"}"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The above command returns JSON structured like this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "result": {\n    "_userId": "aspfokgwegoepwk",\n    "status": "user created"\n  }\n}\n')),(0,r.kt)("p",null,"This endpoint creates new site user account."),(0,r.kt)("h3",{id:"http-request-1"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST https://app.sclab.io/api/1/user/create")),(0,r.kt)("h3",{id:"json-parameters-1"},"JSON Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"User email address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"User password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"User's name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"phone"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"User phone number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"User address")))),(0,r.kt)("h2",{id:"update-account-profile"},"Update account profile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl "https://app.sclab.io/api/1/user/update" \\\n  -X POST \\\n  -H "Authorization: APITokenHere" \\\n  -H "Content-Type: application/json" \\\n  -d "{\\"name\\": \\"user name\\"}"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The above command returns JSON structured like this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "result": {\n    "status": "user updated"\n  }\n}\n')),(0,r.kt)("p",null,"This endpoint update site user account profile ","[name, phone, address]","."),(0,r.kt)("h3",{id:"http-request-2"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST https://app.sclab.io/api/1/user/create")),(0,r.kt)("h3",{id:"json-parameters-2"},"JSON Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_userId"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"User id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"User's name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"phone"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"User phone number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"User address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"User's password")))),(0,r.kt)("h2",{id:"delete-user-from-site"},"Delete user from site"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl "https://app.sclab.io/api/1/user/delete" \\\n  -X DELETE \\\n  -H "Authorization: APITokenHere" \\\n  -H "Content-Type: application/json" \\\n  -d "{\\"_userId\\": \\"user id\\"}"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The above command returns JSON structured like this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "result": {\n    "status": "user removed"\n  }\n}\n')),(0,r.kt)("p",null,"This endpoint remove user from your site, but user account is not removed."),(0,r.kt)("h3",{id:"http-request-3"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DELETE https://app.sclab.io/api/1/user/delete")),(0,r.kt)("h3",{id:"json-parameters-3"},"JSON Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_userId"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"User id")))))}d.isMDXComponent=!0}}]);