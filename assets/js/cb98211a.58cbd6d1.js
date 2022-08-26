"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[22219],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,y=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},61482:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:7,title:"Cluster Deployment",keywords:["Gateway Cluster Enviroment","Cluster Enviroment"],description:"Cluster Delopyment"},i=void 0,p={unversionedId:"deployment/deployment-cluster",id:"version-2.5.0/deployment/deployment-cluster",isDocsHomePage:!1,title:"Cluster Deployment",description:"Cluster Delopyment",source:"@site/versioned_docs/version-2.5.0/deployment/deployment-cluster.md",sourceDirName:"deployment",slug:"/deployment/deployment-cluster",permalink:"/docs/deployment/deployment-cluster",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.0/deployment/deployment-cluster.md",version:"2.5.0",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Cluster Deployment",keywords:["Gateway Cluster Enviroment","Cluster Enviroment"],description:"Cluster Delopyment"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"Custom Deployment",permalink:"/docs/deployment/deployment-custom"},next:{title:"Quick start with Dubbo",permalink:"/docs/quick-start/quick-start-dubbo"}},l=[{value:"Enviromental Preparation",id:"enviromental-preparation",children:[]},{value:"Start Apache ShenYu Admin",id:"start-apache-shenyu-admin",children:[]},{value:"Start Apache ShenYu Boostrap",id:"start-apache-shenyu-boostrap",children:[]},{value:"Start Nginx",id:"start-nginx",children:[]}],s={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Before you read this document, you need to complete some preparations before deploying Shenyu according to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/deployment/deployment-before"},"Deployment Prerequisites document"),".")),(0,a.kt)("p",null,"This aritcle introduces how to delopy the ",(0,a.kt)("inlineCode",{parentName:"p"},"Shenyu")," gateway in cluster enviroment."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In this part, you can see  ",(0,a.kt)("a",{parentName:"p",href:"/docs/deployment/deployment-package"},"ShenYu Binary Packages Deployment")," before deploying.")),(0,a.kt)("h3",{id:"enviromental-preparation"},"Enviromental Preparation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Two or more Gateway Boostrap servers, these servers must install JDK1.8+."),(0,a.kt)("li",{parentName:"ul"},"A server for Gateway Admin, this server must install mysql/pgsql/h2 and JDK1.8+."),(0,a.kt)("li",{parentName:"ul"},"A server for nginx.")),(0,a.kt)("h3",{id:"start-apache-shenyu-admin"},"Start Apache ShenYu Admin"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"download and unzip ",(0,a.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/incubator/shenyu/2.4.3/apache-shenyu-incubating-2.4.3-admin-bin.tar.gz"},"apache-shenyu-incubating-${current.version}-admin-bin.tar.gz")," in your Gateway Admin server.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"config your database, go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/conf")," directory, and  modify ",(0,a.kt)("inlineCode",{parentName:"p"},"spring.profiles.active")," of the configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yaml")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pg")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"h2"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"config your way of synchronization, go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/conf")," directory, and modify ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu.sync")," of configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yaml")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"websocket"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"http"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"zookeeper"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"consul")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"nacos"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"start Apache ShenYu Admin in ",(0,a.kt)("inlineCode",{parentName:"p"},"bin")," directory."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> windows: start.bat \n\n> linux: ./start.sh \n")),(0,a.kt)("h3",{id:"start-apache-shenyu-boostrap"},"Start Apache ShenYu Boostrap"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"download and unzip ",(0,a.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/incubator/shenyu/2.4.3/apache-shenyu-incubating-2.4.3-bootstrap-bin.tar.gz"},"apache-shenyu-incubating-${current.version}-bootstrap-bin.tar.gz")," in your Gateway Boostrap server.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"config your synchronization, go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/conf")," directory, and modify ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu.sync")," of configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yaml")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"websocket"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"http"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"zookeeper"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"consul")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"nacos"),", this configuaration must remain the same of ",(0,a.kt)("inlineCode",{parentName:"p"},"ShenyYu Admin"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"repeat above-mentioned operations in each ",(0,a.kt)("inlineCode",{parentName:"p"},"ShenYu Bootstrap")," server.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"start Apache ShenYu Bootstrap in ",(0,a.kt)("inlineCode",{parentName:"p"},"bin")," directory."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> windwos : start.bat \n\n> linux : ./start.sh \n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"After completing these operations, you will deploy ",(0,a.kt)("inlineCode",{parentName:"p"},"ShenYu Boostrap")," Cluster."),(0,a.kt)("p",{parentName:"blockquote"},"For example. you will deploy ",(0,a.kt)("inlineCode",{parentName:"p"},"ShenYu Bootstrap")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"10.1.1.1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"10.1.1.2")," and deploy nginx in ",(0,a.kt)("inlineCode",{parentName:"p"},"10.1.1.3"),".")),(0,a.kt)("h3",{id:"start-nginx"},"Start Nginx"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"download and install ",(0,a.kt)("inlineCode",{parentName:"p"},"nginx"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"modify ",(0,a.kt)("inlineCode",{parentName:"p"},"upstream")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," of configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"nginx.conf"),"."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"upstream shenyu_gateway_cluster {\n  ip_hash;\n  server 10.1.1.1:9195 max_fails=3 fail_timeout=10s weight=50;\n  server 10.1.1.2:9195 max_fails=3 fail_timeout=10s weight=50;\n}\n\nserver {\n  listen 9195;\n  location / {\n        proxy_pass http://shenyu_gateway_cluster;\n        proxy_set_header HOST $host;\n        proxy_read_timeout 10s;\n        proxy_connect_timeout 10s;\n  }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"start nginx.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> windows: ./nginx.exe\n\n> linux: /usr/local/nginx/sbin/nginx \n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"verify nginx, looking at your ",(0,a.kt)("inlineCode",{parentName:"li"},"ShenYu Bootstrap")," log or ",(0,a.kt)("inlineCode",{parentName:"li"},"Nginx")," log, Where will the verification request go.")))}u.isMDXComponent=!0}}]);