"use strict";(self.webpackChunksclab_docs=self.webpackChunksclab_docs||[]).push([[5791],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7127:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={title:"Introduction",tags:["API"]},i=void 0,c={unversionedId:"api/intro",id:"api/intro",title:"Introduction",description:"Welcome to the SCLAB API.",source:"@site/docs/api/intro.md",sourceDirName:"api",slug:"/api/intro",permalink:"/docs/api/intro",draft:!1,editUrl:"https://github.com/sclab-io/sclab-io.github.io/tree/main/docs/api/intro.md",tags:[{label:"API",permalink:"/docs/tags/api"}],version:"current",frontMatter:{title:"Introduction",tags:["API"]},sidebar:"api",next:{title:"Iframe",permalink:"/docs/category/iframe"}},s={},l=[{value:"Iframe",id:"iframe",level:2},{value:"REST API",id:"rest-api",level:2},{value:"sclabjs",id:"sclabjs",level:2}],u={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to the SCLAB API.\nWith our API, you can easily integrate event data from your server into a SCLAB dashboard and streamline the login process by linking member information.\nYou can also send action signals from your custom iframe to the SCLAB dashboard and create your own charts effortlessly."),(0,o.kt)("h2",{id:"iframe"},"Iframe"),(0,o.kt)("p",null,"By using Iframes, you can embed pages created in SCLAB Studio into your web page, and vice versa, you can also embed your web page into the layout of SCLAB Studio. Depending on the situation, you can make better use of Iframe APIs."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you embed an SCLAB page on your site: You can integrate the membership system."),(0,o.kt)("li",{parentName:"ul"},"If you embed your web page as an Iframe in the SCLAB layout: You can send action signals to SCLAB using API actions, and you can also create charts directly by receiving data from SCLAB.")),(0,o.kt)("h2",{id:"rest-api"},"REST API"),(0,o.kt)("p",null,"By using REST API, you can change the dashboard of SCLAB when an event occurs on your server, and prevent double login by integrating member information."),(0,o.kt)("h2",{id:"sclabjs"},"sclabjs"),(0,o.kt)("p",null,"When you use SCLAB into your HTML using iframe, you can use sclabjs for login and logout. sclabjs using module system. For this reason you need use module compiler like typescript, babel."))}m.isMDXComponent=!0}}]);