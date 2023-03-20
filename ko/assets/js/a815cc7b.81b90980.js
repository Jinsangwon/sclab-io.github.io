"use strict";(self.webpackChunksclab_docs=self.webpackChunksclab_docs||[]).push([[8273],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"Introduction",tags:["API"]},i=void 0,c={unversionedId:"api/intro",id:"api/intro",title:"Introduction",description:"Welcome to the SCLAB API.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api/01-intro.md",sourceDirName:"api",slug:"/api/intro",permalink:"/ko/docs/api/intro",draft:!1,editUrl:"https://github.com/sclab-io/sclab-io.github.io/tree/main/i18n/ko/docusaurus-plugin-content-docs/current/api/01-intro.md",tags:[{label:"API",permalink:"/ko/docs/tags/api"}],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",tags:["API"]},sidebar:"api",next:{title:"API Action - Client",permalink:"/ko/docs/api/Iframe/api-action-client"}},s={},l=[{value:"Iframe",id:"iframe",level:2},{value:"REST API",id:"rest-api",level:2},{value:"sclabjs",id:"sclabjs",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to the SCLAB API.\nWith our API, you can easily integrate event data from your server into a SCLAB dashboard and streamline the login process by linking member information.\nYou can also send action signals from your custom iframe to the SCLAB dashboard and create your own charts effortlessly."),(0,o.kt)("h2",{id:"iframe"},"Iframe"),(0,o.kt)("p",null,"By using Iframes, you can embed pages created in SCLAB Studio into your web page, and vice versa, you can also embed your web page into the layout of SCLAB Studio. Depending on the situation, you can make better use of Iframe APIs."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you embed an SCLAB page on your site: You can integrate the membership system."),(0,o.kt)("li",{parentName:"ul"},"If you embed your web page as an Iframe in the SCLAB layout: You can send action signals to SCLAB using API actions, and you can also create charts directly by receiving data from SCLAB.")),(0,o.kt)("h2",{id:"rest-api"},"REST API"),(0,o.kt)("p",null,"By using REST API, you can change the dashboard of SCLAB when an event occurs on your server, and prevent double login by integrating member information."),(0,o.kt)("h2",{id:"sclabjs"},"sclabjs"),(0,o.kt)("p",null,"When you use SCLAB into your HTML using iframe, you can use sclabjs for login and logout. sclabjs using module system. For this reason you need use module compiler like typescript, babel."))}d.isMDXComponent=!0}}]);