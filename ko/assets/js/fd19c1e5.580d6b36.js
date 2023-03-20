"use strict";(self.webpackChunksclab_docs=self.webpackChunksclab_docs||[]).push([[9190],{3905:(e,l,n)=>{n.d(l,{Zo:()=>p,kt:()=>b});var t=n(7294);function a(e,l,n){return l in e?Object.defineProperty(e,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[l]=n,e}function i(e,l){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);l&&(t=t.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?i(Object(n),!0).forEach((function(l){a(e,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))}))}return e}function r(e,l){if(null==e)return{};var n,t,a=function(e,l){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],l.indexOf(n)>=0||(a[n]=e[n]);return a}(e,l);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),s=function(e){var l=t.useContext(c),n=l;return e&&(n="function"==typeof e?e(l):o(o({},l),e)),n},p=function(e){var l=s(e.components);return t.createElement(c.Provider,{value:l},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var l=e.children;return t.createElement(t.Fragment,{},l)}},d=t.forwardRef((function(e,l){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,b=u["".concat(c,".").concat(d)]||u[d]||k[d]||i;return n?t.createElement(b,o(o({ref:l},p),{},{components:n})):t.createElement(b,o({ref:l},p))}));function b(e,l){var n=arguments,a=l&&l.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var r={};for(var c in l)hasOwnProperty.call(l,c)&&(r[c]=l[c]);r.originalType=e,r[u]="string"==typeof e?e:a,o[1]=r;for(var s=2;s<i;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1630:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var t=n(7462),a=(n(7294),n(3905));const i={title:"sclabjs",tags:["npm","iframe","sclab login"]},o=void 0,r={unversionedId:"api/sclabjs",id:"api/sclabjs",title:"sclabjs",description:"When you use SCLAB into your HTML using iframe, you can use sclabjs for login and logout.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api/sclabjs.md",sourceDirName:"api",slug:"/api/sclabjs",permalink:"/ko/docs/api/sclabjs",draft:!1,editUrl:"https://github.com/sclab-io/sclab-io.github.io/tree/main/i18n/ko/docusaurus-plugin-content-docs/current/api/sclabjs.md",tags:[{label:"npm",permalink:"/ko/docs/tags/npm"},{label:"iframe",permalink:"/ko/docs/tags/iframe"},{label:"sclab login",permalink:"/ko/docs/tags/sclab-login"}],version:"current",frontMatter:{title:"sclabjs",tags:["npm","iframe","sclab login"]},sidebar:"api",previous:{title:"Errors",permalink:"/ko/docs/api/rest-api/errors"}},c={},s=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Client APIs",id:"client-apis",level:2},{value:"init(siteURL, apiToken?, callback?)",id:"initsiteurl-apitoken-callback",level:3},{value:"siteURL",id:"siteurl",level:4},{value:"callback",id:"callback",level:4},{value:"login(email, password, callback)",id:"loginemail-password-callback",level:3},{value:"email",id:"email",level:4},{value:"password",id:"password",level:4},{value:"callback",id:"callback-1",level:4},{value:"loginWithToken(loginToken, callback)",id:"loginwithtokenlogintoken-callback",level:3},{value:"loginToken",id:"logintoken",level:4},{value:"callback",id:"callback-2",level:4},{value:"logout(callback)",id:"logoutcallback",level:3},{value:"callback",id:"callback-3",level:4},{value:"kill()",id:"kill",level:3}],p={toc:s},u="wrapper";function k(e){let{components:l,...n}=e;return(0,a.kt)(u,(0,t.Z)({},p,n,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When you use SCLAB into your HTML using iframe, you can use sclabjs for login and logout.\nsclabjs using module system.\nFor this reason you need use module compiler like typescript, babel."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install sclabjs\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Sclab } from 'sclabjs';\n\n// client side\nSclab.init(\"https://userSiteCode.sclab.io\", ()=>{\n  // ready\n\n  // login\n  Sclab.login('abc@sclab.io', '1234', (result: boolean)=>{\n    if(result){\n      // move to user page\n    }else{\n      // login error\n    }\n  });\n});\n")),(0,a.kt)("h2",{id:"client-apis"},"Client APIs"),(0,a.kt)("h3",{id:"initsiteurl-apitoken-callback"},"init(siteURL, apiToken?, callback?)"),(0,a.kt)("h4",{id:"siteurl"},"siteURL"),(0,a.kt)("p",null,"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Published site url of your SITE."),(0,a.kt)("h4",{id:"callback"},"callback"),(0,a.kt)("p",null,"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"function")),(0,a.kt)("p",null,"callback function when sclabjs ready to use"),(0,a.kt)("h3",{id:"loginemail-password-callback"},"login(email, password, callback)"),(0,a.kt)("h4",{id:"email"},"email"),(0,a.kt)("p",null,"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"email address"),(0,a.kt)("h4",{id:"password"},"password"),(0,a.kt)("p",null,"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"user password"),(0,a.kt)("h4",{id:"callback-1"},"callback"),(0,a.kt)("p",null,"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"function")),(0,a.kt)("p",null,"callback function when login complete"),(0,a.kt)("h3",{id:"loginwithtokenlogintoken-callback"},"loginWithToken(loginToken, callback)"),(0,a.kt)("h4",{id:"logintoken"},"loginToken"),(0,a.kt)("p",null,"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"loginToken from REST API"),(0,a.kt)("h4",{id:"callback-2"},"callback"),(0,a.kt)("p",null,"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"function")),(0,a.kt)("p",null,"callback function when login complete"),(0,a.kt)("h3",{id:"logoutcallback"},"logout(callback)"),(0,a.kt)("h4",{id:"callback-3"},"callback"),(0,a.kt)("p",null,"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"function")),(0,a.kt)("p",null,"callback function when logout complete"),(0,a.kt)("h3",{id:"kill"},"kill()"),(0,a.kt)("p",null,"clear Sclab"))}k.isMDXComponent=!0}}]);