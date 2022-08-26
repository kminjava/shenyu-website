"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[73676],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),u=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return i.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return t?i.createElement(g,a(a({ref:n},s),{},{components:t})):i.createElement(g,a({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var u=2;u<l;u++)a[u]=t[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3339:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=t(87462),r=(t(67294),t(3905));const l={title:"Sentinel Plugin",keywords:["Sentinel"],description:"sentinel plugin"},a=void 0,o={unversionedId:"plugin-center/fault-tolerance/sentinel-plugin",id:"version-2.5.0/plugin-center/fault-tolerance/sentinel-plugin",isDocsHomePage:!1,title:"Sentinel Plugin",description:"sentinel plugin",source:"@site/versioned_docs/version-2.5.0/plugin-center/fault-tolerance/sentinel-plugin.md",sourceDirName:"plugin-center/fault-tolerance",slug:"/plugin-center/fault-tolerance/sentinel-plugin",permalink:"/zh/docs/plugin-center/fault-tolerance/sentinel-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.0/plugin-center/fault-tolerance/sentinel-plugin.md",version:"2.5.0",frontMatter:{title:"Sentinel Plugin",keywords:["Sentinel"],description:"sentinel plugin"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"Resilience4j Plugin",permalink:"/zh/docs/plugin-center/fault-tolerance/resilience4j-plugin"},next:{title:"CryptorRequest plugin",permalink:"/zh/docs/plugin-center/security/cryptor-request-plugin"}},p=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Add sentinel plugin dependency",id:"add-sentinel-plugin-dependency",children:[]},{value:"Sentinel Config",id:"sentinel-config",children:[]}],u={toc:p};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Sentinel")," is one of the options that supports flow control and circuit breaking."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Sentinel")," supports flow control and circuit breaking functions for gateway.")),(0,r.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,r.kt)("p",null,"Select a mode to start shenyu-admin. For details, see  deployment. For example, with ",(0,r.kt)("a",{parentName:"p",href:"../../deployment/deployment-local"},"Local Deployment")," starts the ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," background management system."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In BasicConfig --\x3e Plugin --\x3e sentinel, set to enable."),(0,r.kt)("li",{parentName:"ul"},"If the user don't use, please disable the plugin in the background.")),(0,r.kt)("img",{src:"/img/shenyu/plugin/sentinel/sentinel_open_en.png",width:"80%",height:"80%"}),(0,r.kt)("h2",{id:"add-sentinel-plugin-dependency"},"Add sentinel plugin dependency"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"sentinel")," dependency in the ",(0,r.kt)("inlineCode",{parentName:"li"},"pom.xml")," file of the gateway.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu sentinel plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-sentinel</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        \x3c!-- apache shenyu sentinel plugin end--\x3e\n")),(0,r.kt)("h2",{id:"sentinel-config"},"Sentinel Config"),(0,r.kt)("p",null,"For more information on selectors and rules configuration, see ",(0,r.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," , only some of the fields are covered here."),(0,r.kt)("h4",{id:"selector-config"},"Selector Config"),(0,r.kt)("p",null,"It is used to filter traffic for the first time and does not require ",(0,r.kt)("inlineCode",{parentName:"p"},"handle")," fields."),(0,r.kt)("img",{src:"/img/shenyu/plugin/sentinel/selector_en.png",width:"80%",height:"80%"}),(0,r.kt)("h4",{id:"rule-config"},"Rule Config"),(0,r.kt)("p",null,"For the final filtering of traffic, there is a rule handler logic."),(0,r.kt)("img",{src:"/img/shenyu/plugin/sentinel/rule_en.png",width:"80%",height:"80%"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"sentinel handler details:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"degradeRuleCount"),": threshold.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"degradeRuleEnable (1 or 0)"),": whether enable circuit breaking function of ",(0,r.kt)("inlineCode",{parentName:"p"},"sentinel"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"degradeRuleGrade"),": circuit breaker strategy, support RT of seconds level/ Error Ratio of seconds level/ Error Count of minutes level strategy.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"degradeRuleMinRequestAmount"),": circuit breaker min request amount.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"degradeRuleSlowRatioThreshold"),": slow ratio threshold of degrading.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"getDegradeRuleStatIntervals"),": status intervals of degrade.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"degradeRuleTimeWindow"),": time of degrading(unit: second).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"flowRuleControlBehavior"),": effect(reject directly/ queue/ slow start up), it do not support flow control by invocation relation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"flowRuleCount"),":  sentinel flow control count.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"flowRuleEnable (1 or 0)"),": whether enable sentinel flow control function.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"flowRuleGrade"),": type of current limit threshold(QPS or Thread Count)\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"fallbackUri"),": degraded uri after circuit breaking."))))))}s.isMDXComponent=!0}}]);