"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[31130],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,k=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12668:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={title:"2.4.0",sidebar_position:4,keywords:["release-notes"],description:"release-notes"},i="2.4.0",o={unversionedId:"2.4.0-release",id:"2.4.0-release",isDocsHomePage:!1,title:"2.4.0",description:"release-notes",source:"@site/i18n/zh/docusaurus-plugin-content-docs-event/current/2.4.0-release.md",sourceDirName:".",slug:"/2.4.0-release",permalink:"/zh/event/2.4.0-release",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs-event/current/2.4.0-release.md",version:"current",lastUpdatedBy:"gouzixing",lastUpdatedAt:1659622837,formattedLastUpdatedAt:"2022/8/4",sidebarPosition:4,frontMatter:{title:"2.4.0",sidebar_position:4,keywords:["release-notes"],description:"release-notes"}},u=[{value:"\u65b0\u529f\u80fd",id:"\u65b0\u529f\u80fd",children:[]},{value:"API \u66f4\u6539",id:"api-\u66f4\u6539",children:[]},{value:"\u589e\u5f3a",id:"\u589e\u5f3a",children:[]},{value:"\u91cd\u6784",id:"\u91cd\u6784",children:[]},{value:"\u9519\u8bef\u4fee\u590d",id:"\u9519\u8bef\u4fee\u590d",children:[]}],p={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"240"},"2.4.0"),(0,a.kt)("h2",{id:"\u65b0\u529f\u80fd"},"\u65b0\u529f\u80fd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u8bfb\u53d6 resource/directory \u8def\u5f84\u5e95\u4e0b\u7684 init_script \u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6309\u7c7b\u522b\u663e\u793a\u63d2\u4ef6\u83dc\u5355\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 admin \u6a21\u5757\u6267\u884c\u4e0d\u540c\u8def\u5f84 sql \u811a\u672c\u3002"),(0,a.kt)("li",{parentName:"ul"},"ipUtils \u6dfb\u52a0\u53c2\u6570\u9009\u62e9\u7f51\u7edc ip \u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 parameter-mapping \u6620\u5c04\u63d2\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 Consul \u4f5c\u4e3a shenyu-register-center \u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 Etcd \u4f5c\u4e3a shenyu-sync-data-center \u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 sentinel \u81ea\u5b9a\u4e49\u56de\u9000\u5904\u7406\u7a0b\u5e8f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 response \u63d2\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 JWT \u63d2\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 Request \u63d2\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 Motan \u63d2\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 Logging \u63d2\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 Modify-response \u63d2\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 Oauth2 \u63d2\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u83dc\u5355\u8d44\u6e90\u6743\u9650\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u6570\u636e\u6743\u9650\u3002")),(0,a.kt)("h2",{id:"api-\u66f4\u6539"},"API \u66f4\u6539"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06\u9879\u76ee\u540d\u79f0\u4ece soul \u66f4\u6539\u4e3a shenyu \u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u7ec4 id \u4ece org.dromara \u66f4\u6539\u4e3a org.apache.shenyu \u3002")),(0,a.kt)("h2",{id:"\u589e\u5f3a"},"\u589e\u5f3a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"H2 \u652f\u6301\u5728 Mysql \u6a21\u578b\u4e2d\u4f7f\u7528 insert ingore \u3002"),(0,a.kt)("li",{parentName:"ul"},"\u589e\u5f3a Dubbo \u63d2\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"GRPC \u63d2\u4ef6\u4f18\u5316\u3002")),(0,a.kt)("h2",{id:"\u91cd\u6784"},"\u91cd\u6784"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u91cd\u6784 Dubbo 2.7.3 \u4ee5\u4e0b\u4e0d\u652f\u6301\u5f02\u6b65\u8c03\u7528\u7684\u4ee3\u7801\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7528 Predicate \u66ff\u6362\u8fd0\u7b97\u7b26\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7ec6\u5316\u5224\u65ad conditions \u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 SPI \u91cd\u6784 PredicateJudge \u6a21\u5757\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u91cd\u6784\u5ba2\u6237\u7aef\u6ce8\u518c\u4ee3\u7801\u3002")),(0,a.kt)("h2",{id:"\u9519\u8bef\u4fee\u590d"},"\u9519\u8bef\u4fee\u590d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d JwtUtil.getUserId \u65b9\u6cd5\u9519\u8bef\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d shenyu-spring-boot-starter \u9519\u8bef\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7f16\u7801\u540e\u7684 urlPath \u5c06\u5728 WebClientPlugin \u4e2d\u91cd\u65b0\u7f16\u7801\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u66ff\u6362\u98ce\u9669\u5bc6\u7801\u7b97\u6cd5 \u201cAES/ECB/NoPadding\u201d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d ReadTimeoutHandler \u5728 PooledConnectionProvider \u4e2d\u4f1a\u610f\u5916\u5bfc\u81f4 ReadTimeoutException \u7684\u9519\u8bef\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d 2.4.8 \u7248\u672c\u7684 spring boot \u542f\u52a8 shenyu \u65f6\u4f1a\u629b\u51fa ClassNotFoundException \u9519\u8bef\u3002")))}s.isMDXComponent=!0}}]);