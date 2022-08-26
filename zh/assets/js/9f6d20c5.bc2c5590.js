"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[59942],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=i,g=c["".concat(o,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(g,l(l({ref:t},d),{},{components:a})):n.createElement(g,l({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},11858:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:1,title:"Admin Database Design",keywords:["db"],description:"ShenYu Admin Database Design"},l=void 0,s={unversionedId:"design/database-design",id:"version-2.5.0/design/database-design",isDocsHomePage:!1,title:"Admin Database Design",description:"ShenYu Admin Database Design",source:"@site/versioned_docs/version-2.5.0/design/database-design.md",sourceDirName:"design",slug:"/design/database-design",permalink:"/zh/docs/design/database-design",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.0/design/database-design.md",version:"2.5.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Admin Database Design",keywords:["db"],description:"ShenYu Admin Database Design"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"Overview",permalink:"/zh/docs/index"},next:{title:"Data Sync Design",permalink:"/zh/docs/design/data-sync"}},o=[{value:"Plugin, Selector And Rule",id:"plugin-selector-and-rule",children:[]},{value:"Resource Permission",id:"resource-permission",children:[]},{value:"Data Permissin",id:"data-permissin",children:[]},{value:"Meta Data",id:"meta-data",children:[]},{value:"Dictionary Management",id:"dictionary-management",children:[]}],p={toc:o};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apache Shenyu Admin is the management system of the gateway, which can manage all plugins, selectors and rules visually, set users, roles and resources."),(0,i.kt)("h2",{id:"plugin-selector-and-rule"},"Plugin, Selector And Rule"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Plugin: ShenYu uses the plugin design idea to realize the hot plug of the plugin, which is easy to expand. Built-in rich plugins, including RPC proxy, circuit breaker and current limiting, authority and certification, monitoring, and more.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Selector: Each plugin can set multiple selectors to carry out preliminary filtering of traffic.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rule: Multiple rules can be set per selector for more fine-grained control of flow.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The Database Table UML Diagram:"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(60867).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Detailed design:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"One plugin corresponds to multiple selectors,one selector corresponds to multiple rules.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"One selector corresponds to multiple match conditions,one rule corresponds to multiple match conditions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Each rule handles differently in corresponding plugin according to field handler,field handler is a kind of data of JSON string type.You can view detail during the use of shenyu-admin."))))),(0,i.kt)("h2",{id:"resource-permission"},"Resource Permission"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The resource are the menus and buttons in the shenyu-admin console.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Resource Permission use database to store user name,role,resource data and relationship. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The Resource Permission Table UML Diagram:\n",(0,i.kt)("img",{src:a(19257).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Detailed design:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"one user corresponds to multiple role,one role corresponds to multiple resources.")))),(0,i.kt)("h2",{id:"data-permissin"},"Data Permissin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Data Permission use database to store the relationship between users, selectors and rules.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The Data Permission Table UML Diagram:\n",(0,i.kt)("img",{alt:"data perission uml",src:a(27899).Z})))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Detailed design:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The most important table is ",(0,i.kt)("inlineCode",{parentName:"li"},"data_permission"),", where a user corresponds to multiple data permissions."),(0,i.kt)("li",{parentName:"ul"},"The field ",(0,i.kt)("inlineCode",{parentName:"li"},"data_type")," distinguishes between different types of data, which corresponds to the following: 0 -> selector, 1 -> rule."),(0,i.kt)("li",{parentName:"ul"},"The field ",(0,i.kt)("inlineCode",{parentName:"li"},"data_id")," holds the primary key id of the corresponding type.")))),(0,i.kt)("h2",{id:"meta-data"},"Meta Data"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Metadata is used for generic invoke by gateway."),(0,i.kt)("li",{parentName:"ul"},"For each interface method, there is one piece of metadata."),(0,i.kt)("li",{parentName:"ul"},"The Database Table UML Diagram:")),(0,i.kt)("img",{src:"/img/shenyu/db/mata_data_table.png",width:"30%",height:"30%"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Detailed design\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"path"),": When the gateway is requested, a piece of data will be matched according to ",(0,i.kt)("inlineCode",{parentName:"p"},"path"),", and then the subsequent process will be carried out.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"rpc_ext"),": Used to hold extended information for the RPC proxy.\u3002"))))),(0,i.kt)("h2",{id:"dictionary-management"},"Dictionary Management"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dictionary management is used to maintain and manage public data dictionaries."),(0,i.kt)("li",{parentName:"ul"},"The Database Table UML Diagram:")),(0,i.kt)("img",{src:"/img/shenyu/db/shenyu_dict.png",width:"30%",height:"30%"}))}d.isMDXComponent=!0},27899:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data_permission-f382375f134eeb359e481ee2cd43482d.png"},60867:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/shenyu-db-0847449c4fb817f83e61abad7125ae4a.png"},19257:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/shenyu-permission-db-90c870eefea0da663079cdf6638c7ce7.png"}}]);