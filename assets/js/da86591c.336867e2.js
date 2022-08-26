"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[59343],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=a,d=m["".concat(p,".").concat(h)]||m[h]||c[h]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82735:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:1,title:"Overview",keywords:["Apache shenyu"],description:"This is an asynchronous, high-performance, cross-language, responsive API gateway.",aliases:"/shenyu/docs/Home"},o="What is the Apache ShenYu?",s={unversionedId:"index",id:"version-2.4.3/index",isDocsHomePage:!1,title:"Overview",description:"This is an asynchronous, high-performance, cross-language, responsive API gateway.",source:"@site/versioned_docs/version-2.4.3/index.md",sourceDirName:".",slug:"/index",permalink:"/docs/2.4.3/index",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.3/index.md",version:"2.4.3",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview",keywords:["Apache shenyu"],description:"This is an asynchronous, high-performance, cross-language, responsive API gateway.",aliases:"/shenyu/docs/Home"},sidebar:"version-2.4.3/tutorialSidebar",next:{title:"Apache ShenYu Admin Database Design",permalink:"/docs/2.4.3/design/database-design"}},p=[],l={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-the-apache-shenyu"},"What is the Apache ShenYu?"),(0,a.kt)("p",null,"This is an asynchronous, high-performance, cross-language, responsive API gateway."),(0,a.kt)("h1",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support various languages (http protocol), support Dubbo, Spring Cloud, gRPC, Motan, Sofa, Tars and other protocols."),(0,a.kt)("li",{parentName:"ul"},"Plugin design idea, plugin hot swap, easy to expand."),(0,a.kt)("li",{parentName:"ul"},"Flexible flow filtering to meet various flow control."),(0,a.kt)("li",{parentName:"ul"},"Built-in rich plugin support, authentication, limiting, fuse, firewall, etc."),(0,a.kt)("li",{parentName:"ul"},"Dynamic flow configuration, high performance."),(0,a.kt)("li",{parentName:"ul"},"Support cluster deployment, A/B Test, blue-green release.")),(0,a.kt)("h1",{id:"architecture-diagram"},"Architecture Diagram"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(28749).Z})),(0,a.kt)("h1",{id:"mind-maps"},"Mind maps"),(0,a.kt)("p",null," ",(0,a.kt)("img",{src:n(20460).Z})),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"modules"},"Modules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"shenyu-admin : plugins and other configuration information management background")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"shenyu-bootstrap : with the startup project, users can refer to")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"shenyu-client : user fast access with Spring MVC, Dubbo, Spring Cloud.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"shenyu-common : framework common class")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"shenyu-disruptor : based on disruptor Enclosure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"shenyu-register-center : rpc type register for shenyu-client")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"shenyu-dist : build project")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"shenyu-metrics : metrics impl by prometheus.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"shenyu-plugin : ShenYu provider plugin collection.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"shenyu-spi : ShenYu spi define.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"shenyu-spring-boot-starter : support for the spring boot starter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"shenyu-sync-data-center : provider ZooKeeper, HTTP, WebSocket, Nacos to sync data")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"shenyu-examples : the RPC examples project")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"shenyu-web : core processing packages including plugins, request routing and forwarding, and so on"))),(0,a.kt)("h1",{id:"about"},"About"),(0,a.kt)("p",null,"Apache ShenYu has been used widely in more and more systems in many companies, and it's simple and convenient to integrate Services/APIs with the high performance and flexibility."),(0,a.kt)("p",null,"In double eleven online shopping carnival of China, ShenYu clusters successfully supported a large volume of internet business."))}u.isMDXComponent=!0},28749:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/shenyu-architecture-3d-2b673fe8dfd0ef6a14223ffd00bfe824.png"},20460:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/shenyu-xmind-486e25e42246521a188a4fb8f20ebf6c.png"}}]);