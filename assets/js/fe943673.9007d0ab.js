"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[97879],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=r,g=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},49288:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Motan Plugin",keywords:["motan-plugin"],description:"motan-plugin"},o=void 0,l={unversionedId:"plugin-center/proxy/motan-plugin",id:"version-2.4.3/plugin-center/proxy/motan-plugin",isDocsHomePage:!1,title:"Motan Plugin",description:"motan-plugin",source:"@site/versioned_docs/version-2.4.3/plugin-center/proxy/motan-plugin.md",sourceDirName:"plugin-center/proxy",slug:"/plugin-center/proxy/motan-plugin",permalink:"/docs/2.4.3/plugin-center/proxy/motan-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.3/plugin-center/proxy/motan-plugin.md",version:"2.4.3",frontMatter:{title:"Motan Plugin",keywords:["motan-plugin"],description:"motan-plugin"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"gRPC Plugin",permalink:"/docs/2.4.3/plugin-center/proxy/grpc-plugin"},next:{title:"Mqtt Plugin",permalink:"/docs/2.4.3/plugin-center/proxy/mqtt-plugin"}},p=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Detail",id:"plugin-detail",children:[]},{value:"Metadata",id:"metadata",children:[]}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The motan plugin is a plugin that converts the Http protocol into the motan protocol.")),(0,r.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add related dependencies and enable plugin, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"../../quick-start/quick-start-motan"},"Quick start with Motan")," .")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Motan")," client access, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"../../user-guide/motan-proxy"},"Motan Proxy")," ."))),(0,r.kt)("h2",{id:"plugin-detail"},"Plugin Detail"),(0,r.kt)("p",null,"After the client accesses the ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway, it will automatically register the selector and rule information."),(0,r.kt)("p",null,"You can see it in PluginList -> rpc proxy -> motan. For details about the selector and rule configuration, see ",(0,r.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," ."),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("p",null,"Each ",(0,r.kt)("inlineCode",{parentName:"p"},"motan")," interface method, will correspond to a metadata, when the ",(0,r.kt)("inlineCode",{parentName:"p"},"motan")," application client access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway, will be automatically registered, can be viewed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," background management system of the BasicConfig --\x3e Metadata management."),(0,r.kt)("img",{src:"/img/shenyu/plugin/motan/metadata_en.png",width:"60%",height:"50%"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"AppName: specifies the name of the application to which the metadata belongs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MethodName: the name of the method to call.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Path: http request path.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PathDescribe: the description of the path is easy to view.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ParamsType: the parameters are separated by commas (,) in the order of interface parameter types.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RpcExpand: description of each interface in a ",(0,r.kt)("inlineCode",{parentName:"p"},"motan")," service. For example, here is the interface information for the ",(0,r.kt)("inlineCode",{parentName:"p"},"motan")," service:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "methodInfo": [\n    {\n      "methodName": "hello",\n      "params": [\n        {\n          "left": "java.lang.String",\n          "right": "name"\n        }\n      ]\n    }\n  ],\n  "group": "motan-shenyu-rpc"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface: The fully qualified class name of the ",(0,r.kt)("inlineCode",{parentName:"p"},"motan")," interface.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RpcType\uff1achoose ",(0,r.kt)("inlineCode",{parentName:"p"},"motan"),"."))))}u.isMDXComponent=!0}}]);