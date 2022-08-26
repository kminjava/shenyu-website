"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[10872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24943:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={title:"\u591a\u8bed\u8a00Http\u5ba2\u6237\u7aef",keywords:["\u5ba2\u6237\u7aef"],description:"\u591a\u8bed\u8a00http\u5ba2\u6237\u7aef"},l=void 0,a={unversionedId:"developer/developer-shenyu-client",id:"version-2.4.3/developer/developer-shenyu-client",isDocsHomePage:!1,title:"\u591a\u8bed\u8a00Http\u5ba2\u6237\u7aef",description:"\u591a\u8bed\u8a00http\u5ba2\u6237\u7aef",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/developer/developer-shenyu-client.md",sourceDirName:"developer",slug:"/developer/developer-shenyu-client",permalink:"/zh/docs/2.4.3/developer/developer-shenyu-client",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/developer/developer-shenyu-client.md",version:"2.4.3",frontMatter:{title:"\u591a\u8bed\u8a00Http\u5ba2\u6237\u7aef",keywords:["\u5ba2\u6237\u7aef"],description:"\u591a\u8bed\u8a00http\u5ba2\u6237\u7aef"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49sign\u63d2\u4ef6\u68c0\u9a8c\u7b97\u6cd5",permalink:"/zh/docs/2.4.3/developer/custom-sign-algorithm"},next:{title:"\u6587\u4ef6\u4e0a\u4f20\u4e0b\u8f7d",permalink:"/zh/docs/2.4.3/developer/file-and-image"}},p=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u81ea\u5b9a\u4e49\u5f00\u53d1",id:"\u81ea\u5b9a\u4e49\u5f00\u53d1",children:[]}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u672c\u6587\u4e3b\u8981\u8bb2\u89e3\u5176\u4ed6\u8bed\u8a00\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"http"),"\u670d\u52a1\u5982\u4f55\u63a5\u5165\u7f51\u5173\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u4f55\u81ea\u5b9a\u4e49\u5f00\u53d1",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-http-client"),"\u3002")),(0,i.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u5f00\u53d1"},"\u81ea\u5b9a\u4e49\u5f00\u53d1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u65b9\u5f0f\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"POST")),(0,i.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u8def\u5f84\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"http://shenyu-admin/shenyu-client/springmvc-register")," \uff0c  \u5176\u4e2d ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," \u8868\u793a\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"admin")," \u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"ip + port")," \u3002")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u53c2\u6570\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"Apache ShenYu"),"\u7f51\u5173\u9ed8\u8ba4\u7684\u9700\u8981\u53c2\u6570\uff0c\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"li"},"body"),"\u91cc\u9762\u4f20\u5165\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"json"),"\u7c7b\u578b\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "appName": "xxx", //\u5e94\u7528\u540d\u79f0 \u5fc5\u586b\n    "context": "/xxx", //\u8bf7\u6c42\u524d\u7f00 \u5fc5\u586b\n    "path": "xxx", //\u8def\u5f84\u9700\u8981\u552f\u4e00 \u5fc5\u586b\n    "pathDesc": "xxx", //\u8def\u5f84\u63cf\u8ff0\n    "rpcType": "http", //rpc\u7c7b\u578b  \u5fc5\u586b\n    "host": "xxx", //\u670d\u52a1host \u5fc5\u586b\n    "port": xxx, //\u670d\u52a1\u7aef\u53e3 \u5fc5\u586b\n    "ruleName": "xxx", //\u53ef\u4ee5\u540cpath\u4e00\u6837  \u5fc5\u586b\n    "enabled": "true", //\u662f\u5426\u5f00\u542f\n    "registerMetaData": "true" //\u662f\u5426\u9700\u8981\u6ce8\u518c\u5143\u6570\u636e\n}\n')))}u.isMDXComponent=!0}}]);