"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[67884],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(t),m=i,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||r;return t?a.createElement(g,l(l({ref:n},s),{},{components:t})):a.createElement(g,l({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=c;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:i,l[1]=u;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},63561:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>u,toc:()=>o});var a=t(87462),i=(t(67294),t(3905));const r={title:"Custom Plugin",keywords:["Custom Plugin"],description:"plugins"},l=void 0,u={unversionedId:"developer/custom-plugin",id:"version-2.5.0/developer/custom-plugin",isDocsHomePage:!1,title:"Custom Plugin",description:"plugins",source:"@site/versioned_docs/version-2.5.0/developer/custom-plugin.md",sourceDirName:"developer",slug:"/developer/custom-plugin",permalink:"/zh/docs/developer/custom-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.0/developer/custom-plugin.md",version:"2.5.0",frontMatter:{title:"Custom Plugin",keywords:["Custom Plugin"],description:"plugins"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"Fetching Correct IP Address And Host",permalink:"/zh/docs/developer/custom-parsing-ip-and-host"},next:{title:"Custom Response",permalink:"/zh/docs/developer/custom-result"}},o=[{value:"Description",id:"description",children:[]},{value:"Single Responsibility Plugins",id:"single-responsibility-plugins",children:[]},{value:"Matching Traffic Processing Plugin",id:"matching-traffic-processing-plugin",children:[]},{value:"Subscribe your plugin data and do customized jobs",id:"subscribe-your-plugin-data-and-do-customized-jobs",children:[]},{value:"Dynamic loading",id:"dynamic-loading",children:[]}],p={toc:o};function s(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Plugins are core executors of ",(0,i.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," gateway. Every plugin handles matched requests when enabled."),(0,i.kt)("li",{parentName:"ul"},"There are two kinds of plugins in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," gateway.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The first type is a chain with single responsibility, and can not custom filtering of traffic."),(0,i.kt)("li",{parentName:"ul"},"The other one can do its own chain of responsibility for matched traffic."))),(0,i.kt)("li",{parentName:"ul"},"You could reference from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-shenyu/tree/v2.4.0/shenyu-plugin"},"shenyu-plugin")," module and develop plugins by yourself. Please fire pull requests of your wonderful plugins without hesitate.")),(0,i.kt)("h2",{id:"single-responsibility-plugins"},"Single Responsibility Plugins"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add following dependency:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-plugin-api</artifactId>\n    <version>${project.version}</version>\n</dependency>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Declare a new class named ",(0,i.kt)("inlineCode",{parentName:"li"},"MyShenyuPlugin")," and implements ",(0,i.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.api.ShenyuPlugin"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public interface ShenyuPlugin {\n\n    /**\n     * Process the Web request and (optionally) delegate to the next\n     * {@code WebFilter} through the given {@link ShenyuPluginChain}.\n     *\n     * @param exchange the current server exchange\n     * @param chain    provides a way to delegate to the next filter\n     * @return {@code Mono<Void>} to indicate when request processing is complete\n     */\n    Mono<Void> execute(ServerWebExchange exchange, ShenyuPluginChain chain);\n\n    /**\n     * return plugin order .\n     * This attribute To determine the plugin execution order in the same type plugin.\n     *\n     * @return int order\n     */\n    int getOrder();\n\n    /**\n     * acquire plugin name.\n     * this is plugin name define you must offer the right name.\n     * if you impl AbstractShenyuPlugin this attribute not use.\n     *\n     * @return plugin name.\n     */\n    default String named() {\n        return "";\n    }\n\n    /**\n     * plugin is execute.\n     * if return true this plugin can not execute.\n     *\n     * @param exchange the current server exchange\n     * @return default false.\n     */\n    default Boolean skip(ServerWebExchange exchange) {\n        return false;\n    }\n}\n\n')),(0,i.kt)("p",null,"Detailed instruction of interface methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"execute()")," core method, you can do any task here freely."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getOrder()")," get the order of current plugin."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"named()")," acquire the name of specific plugin that uses the ",(0,i.kt)("inlineCode",{parentName:"li"},"Camel Case"),", eg: ",(0,i.kt)("inlineCode",{parentName:"li"},"dubbo"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"springCloud")," ."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"skip()")," determines whether this plugin should be skipped under certain conditions."),(0,i.kt)("li",{parentName:"ul"},"Register plugin in ",(0,i.kt)("inlineCode",{parentName:"li"},"Spring")," as a ",(0,i.kt)("inlineCode",{parentName:"li"},"Bean"),", or simply apply ",(0,i.kt)("inlineCode",{parentName:"li"},"@Component")," in implementation class.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    @Bean\n    public ShenyuPlugin myShenyuPlugin() {\n        return new MyShenyuPlugin();\n    }\n")),(0,i.kt)("h2",{id:"matching-traffic-processing-plugin"},"Matching Traffic Processing Plugin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Introduce the following dependency:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"}," <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-plugin-base</artifactId>\n        <version>${project.version}</version>\n  </dependency>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add a new class ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomPlugin"),", inherit from ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.base.AbstractShenyuPlugin"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"examples down below:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * This is your custom plugin.\n * He is running in after before plugin, implement your own functionality.\n * extends AbstractShenyuPlugin so you must user shenyu-admin And add related plug-in development.\n *\n * @author xiaoyu(Myth)\n */\npublic class CustomPlugin extends AbstractShenyuPlugin {\n\n    /**\n     * return plugin order .\n     * The same plugin he executes in the same order.\n     *\n     * @return int\n     */\n    @Override\n    public int getOrder() {\n        return 0;\n    }\n\n    /**\n     * acquire plugin name.\n     * return you custom plugin name.\n     * It must be the same name as the plug-in you added in the admin background.\n     *\n     * @return plugin name.\n     */\n    @Override\n    public String named() {\n        return "shenYu";\n    }\n\n    /**\n     * plugin is execute.\n     * Do I need to skip.\n     * if you need skip return true.\n     *\n     * @param exchange the current server exchange\n     * @return default false.\n     */\n    @Override\n    public Boolean skip(final ServerWebExchange exchange) {\n        return false;\n    }\n\n    /**\n     * this is Template Method child has Implement your own logic.\n     *\n     * @param exchange exchange the current server exchange\n     * @param chain    chain the current chain\n     * @param selector selector\n     * @param rule     rule\n     * @return {@code Mono<Void>} to indicate when request handling is complete\n     */\n    @Override\n    protected abstract Mono<Void> doExecute(ServerWebExchange exchange, ShenyuPluginChain chain, SelectorData selector, RuleData rule) {\n        LOGGER.debug(".......... function plugin start..............");\n        /*\n         * Processing after your selector matches the rule.\n         * rule.getHandle() is you Customize the json string to be processed.\n         * for this example.\n         * Convert your custom json string pass to an entity class.\n         */\n        final String ruleHandle = rule.getHandle();\n\n        final Test test = GsonUtils.getInstance().fromJson(ruleHandle, Test.class);\n\n        /*\n         * Then do your own business processing.\n         * The last execution  chain.execute(exchange).\n         * Let it continue on the chain until the end.\n         */\n        System.out.println(test.toString());\n        return chain.execute(exchange);\n    }\n}\n\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Detailed explanation:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Plugins will match the selector rule for customized plugins inherit from this abstract class.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Firstly define a new plugin in ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"  \u2013> BasicConfig \u2013> Plugin, please mind that your plugin name should match the ",(0,i.kt)("inlineCode",{parentName:"p"},"named()")," method overridden in your class.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Re-login  ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),", the plugin you added now showing on plugin-list page, you can choose selectors for matching.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"There is a field named ",(0,i.kt)("inlineCode",{parentName:"p"},"handler")," in rules, it is customized json string to be processed. You can process data after acquiring a ruleHandle (",(0,i.kt)("inlineCode",{parentName:"p"},"final String ruleHandle = rule.getHandle();"),") in ",(0,i.kt)("inlineCode",{parentName:"p"},"doExecute()")," method.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Register plugin in ",(0,i.kt)("inlineCode",{parentName:"p"},"Spring")," as a ",(0,i.kt)("inlineCode",{parentName:"p"},"Bean"),", or simply apply ",(0,i.kt)("inlineCode",{parentName:"p"},"@Component")," in implementation class."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    @Bean\n    public ShenyuPlugin customPlugin() {\n        return new CustomPlugin();\n    }\n")),(0,i.kt)("h2",{id:"subscribe-your-plugin-data-and-do-customized-jobs"},"Subscribe your plugin data and do customized jobs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Declare a new class named ",(0,i.kt)("inlineCode",{parentName:"li"},"PluginDataHandler")," and implements ",(0,i.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.handler.PluginDataHandler"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface PluginDataHandler {\n\n    /**\n     * Handler plugin.\n     *\n     * @param pluginData the plugin data\n     */\n    default void handlerPlugin(PluginData pluginData) {\n    }\n\n    /**\n     * Remove plugin.\n     *\n     * @param pluginData the plugin data\n     */\n    default void removePlugin(PluginData pluginData) {\n    }\n\n    /**\n     * Handler selector.\n     *\n     * @param selectorData the selector data\n     */\n    default void handlerSelector(SelectorData selectorData) {\n    }\n\n    /**\n     * Remove selector.\n     *\n     * @param selectorData the selector data\n     */\n    default void removeSelector(SelectorData selectorData) {\n    }\n\n    /**\n     * Handler rule.\n     *\n     * @param ruleData the rule data\n     */\n    default void handlerRule(RuleData ruleData) {\n    }\n\n    /**\n     * Remove rule.\n     *\n     * @param ruleData the rule data\n     */\n    default void removeRule(RuleData ruleData) {\n    }\n\n    /**\n     * Plugin named string.\n     *\n     * @return the string\n     */\n    String pluginNamed();\n\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ensure ",(0,i.kt)("inlineCode",{parentName:"li"},"pluginNamed()")," is same as the plugin name you defined."),(0,i.kt)("li",{parentName:"ul"},"Register defined class as a ",(0,i.kt)("inlineCode",{parentName:"li"},"Spring Bean"),", or simply apply ",(0,i.kt)("inlineCode",{parentName:"li"},"@Component")," in implementation class.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic PluginDataHandler pluginDataHandler() {\n  return new PluginDataHandler();\n}\n")),(0,i.kt)("h2",{id:"dynamic-loading"},"Dynamic loading"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When using this feature, the above extensions ",(0,i.kt)("inlineCode",{parentName:"p"},"ShenyuPlugin"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginDataHandler"),", do not need to be ",(0,i.kt)("inlineCode",{parentName:"p"},"spring bean"),". You just need to build the jar package of the extension project.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Config in Yaml\uff1a"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  extPlugin:\n    path:  //Load the extension plugin jar package path\n    enabled: true //Whether to turn on \n    threads: 1  //Number of loading plug-in threads\n    scheduleTime: 300  //Cycle time (in seconds)\n    scheduleDelay: 30 //How long the shenyu gateway is delayed to load after it starts (in seconds)\n")),(0,i.kt)("h4",{id:"plugin-loading-path-details"},"Plugin loading path details"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This path is for the directory where the extended plugin jar package is stored\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Used ",(0,i.kt)("inlineCode",{parentName:"p"},"-Dplugin-ext=xxxx"),", Also used ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu.extPlugin.path")," in yaml\uff0cIf neither is configured, the ",(0,i.kt)("inlineCode",{parentName:"p"},"ext-lib")," directory in the apache shenyu gateway boot path will be loaded by default.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Priority \uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"-Dplugin-ext=xxxx")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu.extPlugin.path")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"ext-lib(default)")))))}s.isMDXComponent=!0}}]);