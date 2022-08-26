"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[65764],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||i;return n?r.createElement(m,p(p({ref:t},u),{},{components:n})):r.createElement(m,p({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var l=2;l<i;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59381:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"Http Proxy",keywords:["Http"],description:"Integrate Http with shenyu gateway"},p=void 0,o={unversionedId:"user-guide/http-proxy",id:"version-2.5.0/user-guide/http-proxy",isDocsHomePage:!1,title:"Http Proxy",description:"Integrate Http with shenyu gateway",source:"@site/versioned_docs/version-2.5.0/user-guide/http-proxy.md",sourceDirName:"user-guide",slug:"/user-guide/http-proxy",permalink:"/docs/user-guide/http-proxy",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.0/user-guide/http-proxy.md",version:"2.5.0",frontMatter:{title:"Http Proxy",keywords:["Http"],description:"Integrate Http with shenyu gateway"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"gRPC Proxy",permalink:"/docs/user-guide/grpc-proxy"},next:{title:"Motan Proxy",permalink:"/docs/user-guide/motan-proxy"}},s=[{value:"Add divide plugin in gateway",id:"add-divide-plugin-in-gateway",children:[]},{value:"Http request access gateway (for springMvc)",id:"http-request-access-gateway-for-springmvc",children:[]},{value:"Http request access gateway(other framework)",id:"http-request-access-gatewayother-framework",children:[]},{value:"User request",id:"user-request",children:[]}],l={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document is intended to help the ",(0,a.kt)("inlineCode",{parentName:"p"},"Http")," service access the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"Divide")," plugin to handle ",(0,a.kt)("inlineCode",{parentName:"p"},"Http")," requests."),(0,a.kt)("p",null,"Before the connection, start ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," correctly, start ",(0,a.kt)("inlineCode",{parentName:"p"},"Divide")," plugin, and add related dependencies on the gateway and ",(0,a.kt)("inlineCode",{parentName:"p"},"Http")," application client. Refer to the previous ",(0,a.kt)("a",{parentName:"p",href:"../quick-start/quick-start-http"},"Quick start with Http")," ."),(0,a.kt)("p",null,"For details about client access configuration, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/user-guide/property-config/register-center-access"},"Application Client Access Config")," ."),(0,a.kt)("p",null,"For details about data synchronization configurations, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/user-guide/property-config/use-data-sync"},"Data Synchronization Config")," ."),(0,a.kt)("h2",{id:"add-divide-plugin-in-gateway"},"Add divide plugin in gateway"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add the following dependencies to the gateway's ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," file:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-plugin-divide</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-plugin-httpclient</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n")))),(0,a.kt)("h2",{id:"http-request-access-gateway-for-springmvc"},"Http request access gateway (for springMvc)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SpringBoot  "),(0,a.kt)("p",{parentName:"li"},"Please refer this\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/v2.4.0/shenyu-examples/shenyu-examples-http"},"shenyu-examples-http")),(0,a.kt)("p",{parentName:"li"},"Add the following dependencies to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," file in your ",(0,a.kt)("inlineCode",{parentName:"p"},"Http")," service:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-client-springmvc</artifactId>\n        <version>${shenyu.version}</version>\n    </dependency>\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SpringMvc"),(0,a.kt)("p",{parentName:"li"},"Please refer this\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/master/shenyu-examples/shenyu-examples-springmvc"},"shenyu-examples-springmvc")),(0,a.kt)("p",{parentName:"li"},"Add the following dependencies to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," file in your ",(0,a.kt)("inlineCode",{parentName:"p"},"Http")," service:  "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-client-springmvc</artifactId>\n        <version>${shenyu.version}</version>\n    </dependency>\n")),(0,a.kt)("p",{parentName:"li"},"Add the following to the ",(0,a.kt)("inlineCode",{parentName:"p"},"XML")," file defined by your ",(0,a.kt)("inlineCode",{parentName:"p"},"bean")," :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'   <bean id="springMvcClientBeanPostProcessor" class="org.apache.shenyu.client.springmvc.init.SpringMvcClientBeanPostProcessor">\n       <constructor-arg ref="clientPropertiesConfig"/>\n       <constructor-arg ref="clientRegisterRepository"/>\n   </bean>\n       \n   \x3c!-- Config register center according to your register type--\x3e\n   <bean id="shenyuRegisterCenterConfig" class="org.apache.shenyu.register.common.config.ShenyuRegisterCenterConfig">\n       <property name="registerType" value="http"/>\n       <property name="serverLists" value="http://localhost:9095"/>\n   </bean>\n\n   \x3c!-- Client properties config --\x3e\n   <bean id="clientPropertiesConfig"\n         class="org.apache.shenyu.register.common.config.ShenyuClientConfig.ClientPropertiesConfig">\n     <property name="props">\n         <map>\n             <entry key="contextPath" value="/your contextPath"/>\n             <entry key="appName" value="your appName"/>\n             <entry key="port" value="your port"/>\n             <entry key="isFull" value="false"/>\n         </map>\n     </property>\n   </bean>\n\n   \x3c!-- Config register repository according to your register type --\x3e\n   <bean id="clientRegisterRepository" class="org.apache.shenyu.register.client.http.HttpClientRegisterRepository">\n       <constructor-arg ref="shenyuRegisterCenterConfig"/>\n   </bean>\n   \n   <bean id="shenyuClientShutdownHook" class="org.apache.shenyu.client.core.shutdown.ShenyuClientShutdownHook">\n       <constructor-arg ref="shenyuRegisterCenterConfig"/>\n       <constructor-arg ref="clientRegisterRepository"/>\n   </bean>\n   \n   <bean id="contextRegisterListener" class="org.apache.shenyu.client.springmvc.init.ContextRegisterListener">\n       <constructor-arg ref="clientPropertiesConfig"/>\n   </bean>\n')),(0,a.kt)("p",{parentName:"li"},"Add this annotation ",(0,a.kt)("inlineCode",{parentName:"p"},"@ShenyuSpringMvcClient")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"controller")," interface."),(0,a.kt)("p",{parentName:"li"},"You can apply the annotation to class-level in a controller. The name of the ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," variable is prefix and ",(0,a.kt)("inlineCode",{parentName:"p"},"/**")," will apply proxy for entire interfaces."))),(0,a.kt)("p",null,"Example(1)"),(0,a.kt)("p",null,"The following indicates that ",(0,a.kt)("inlineCode",{parentName:"p"},"/test/payment"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/test/findByUserId")," will be proxy by the gateway."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'  @RestController\n  @RequestMapping("/test")\n  @ShenyuSpringMvcClient(path = "/test/**")\n  public class HttpTestController {\n\n      @PostMapping("/payment")\n      public UserDTO post(@RequestBody final UserDTO userDTO) {\n          return userDTO;\n      }\n\n      @GetMapping("/findByUserId")\n      public UserDTO findByUserId(@RequestParam("userId") final String userId) {\n          UserDTO userDTO = new UserDTO();\n          userDTO.setUserId(userId);\n          userDTO.setUserName("hello world");\n          return userDTO;\n      }\n   }\n')),(0,a.kt)("p",null,"Example(2)"),(0,a.kt)("p",null,"The following indicates that ",(0,a.kt)("inlineCode",{parentName:"p"},"/order/save")," is proxied by the gateway, while ",(0,a.kt)("inlineCode",{parentName:"p"},"/order/findById")," is not."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'  @RestController\n  @RequestMapping("/order")\n  @ShenyuSpringMvcClient(path = "/order")\n  public class OrderController {\n\n      @PostMapping("/save")\n      @ShenyuSpringMvcClient(path = "/save")\n      public OrderDTO save(@RequestBody final OrderDTO orderDTO) {\n          orderDTO.setName("hello world save order");\n          return orderDTO;\n      }\n\n      @GetMapping("/findById")\n      public OrderDTO findById(@RequestParam("id") final String id) {\n          OrderDTO orderDTO = new OrderDTO();\n          orderDTO.setId(id);\n          orderDTO.setName("hello world findById");\n          return orderDTO;\n      }\n  }\n')),(0,a.kt)("p",null,"example (3)\uff1aThis is a simplified way to use it, just need a simple annotation to register to the gateway using metadata.\nSpecial note: currently only supports ",(0,a.kt)("inlineCode",{parentName:"p"},"@RequestMapping, @GetMapping, @PostMapping, @DeleteMapping, @PutMapping")," annotations, and only valid for the first path in ",(0,a.kt)("inlineCode",{parentName:"p"},"@XXXMapping")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'  @RestController\n  @RequestMapping("new/feature")\n  public class NewFeatureController {\n  \n    /**\n     * no support gateway access api.\n     *\n     * @return result\n     */\n    @RequestMapping("/gateway/not")\n    public EntityResult noSupportGateway() {\n      return new EntityResult(200, "no support gateway access");\n    }\n  \n    /**\n     * Do not use shenyu annotation path. used request mapping path.\n     *\n     * @return result\n     */\n    @RequestMapping("/requst/mapping/path")\n    @ShenyuSpringCloudClient\n    public EntityResult requestMappingUrl() {\n      return new EntityResult(200, "Do not use shenyu annotation path. used request mapping path");\n    }\n  \n    /**\n     * Do not use shenyu annotation path. used post mapping path.\n     *\n     * @return result\n     */\n    @PostMapping("/post/mapping/path")\n    @ShenyuSpringCloudClient\n    public EntityResult postMappingUrl() {\n      return new EntityResult(200, "Do not use shenyu annotation path. used post mapping path");\n    }\n  \n    /**\n     * Do not use shenyu annotation path. used post mapping path.\n     *\n     * @return result\n     */\n    @GetMapping("/get/mapping/path")\n    @ShenyuSpringCloudClient\n    public EntityResult getMappingUrl() {\n      return new EntityResult(200, "Do not use shenyu annotation path. used get mapping path");\n    }\n  }\n\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start your project, your service interface is connected to the gateway, go to the ",(0,a.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," management system plugin list ",(0,a.kt)("inlineCode",{parentName:"li"},"->")," HTTP process ",(0,a.kt)("inlineCode",{parentName:"li"},"->")," Divide, see automatically created selectors and rules.")),(0,a.kt)("h2",{id:"http-request-access-gatewayother-framework"},"Http request access gateway(other framework)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First, find ",(0,a.kt)("inlineCode",{parentName:"li"},"divide")," plugin in ",(0,a.kt)("inlineCode",{parentName:"li"},"shenyu-admin"),", add selector, and rules, and filter traffic matching."),(0,a.kt)("li",{parentName:"ul"},"If you don't know how to configure, please refer to ",(0,a.kt)("a",{parentName:"li",href:"../user-guide/admin-usage/selector-and-rule"},"Selector Detailed Explanation"),"."),(0,a.kt)("li",{parentName:"ul"},"You can also develop your customized http-client\uff0crefer to ",(0,a.kt)("a",{parentName:"li",href:"../developer/developer-shenyu-client"},"multi-language Http client development"),"\u3002")),(0,a.kt)("h2",{id:"user-request"},"User request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Send the request as before, only two points need to notice.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Firstly, the domain name that requested before in your service, now need to replace with gateway's domain name.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Secondly, ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," Gateway needs a route prefix which comes from ",(0,a.kt)("inlineCode",{parentName:"p"},"contextPath"),", it configured during the integration with gateway, you can change it freely in ",(0,a.kt)("inlineCode",{parentName:"p"},"divide")," plugin of ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),", if you are familiar with it."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"for example, if you have an ",(0,a.kt)("inlineCode",{parentName:"p"},"order")," service, and it has an interface, the request url: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/test/save"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Now need to change to:  ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:9195/order/test/save"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We can see ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:9195")," is your gateway's ",(0,a.kt)("inlineCode",{parentName:"p"},"ip")," port\uff0cdefault port number is ",(0,a.kt)("inlineCode",{parentName:"p"},"9195")," \uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"/order")," is your ",(0,a.kt)("inlineCode",{parentName:"p"},"contextPath")," which you configured with gateway.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Other parameters doesn't change in request method."))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Then you can visit, very easy and simple.")))}u.isMDXComponent=!0}}]);