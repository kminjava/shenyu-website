"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[9390],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,d=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(d,r(r({ref:t},h),{},{components:n})):a.createElement(d,r({ref:t},h))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},46814:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const i={id:"contributor-guide",title:"Contributor Guide",sidebar_position:3,description:"Apache ShenYu Contributor's Guide",categories:"Apache ShenYu",tags:["Contributor"]},r=void 0,s={unversionedId:"contributor-guide",id:"contributor-guide",isDocsHomePage:!1,title:"Contributor Guide",description:"Apache ShenYu Contributor's Guide",source:"@site/community/3-contributor.md",sourceDirName:".",slug:"/contributor-guide",permalink:"/community/contributor-guide",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/community/3-contributor.md",version:"current",lastUpdatedBy:"midnight2104",lastUpdatedAt:1660139936,formattedLastUpdatedAt:"8/10/2022",sidebarPosition:3,frontMatter:{id:"contributor-guide",title:"Contributor Guide",sidebar_position:3,description:"Apache ShenYu Contributor's Guide",categories:"Apache ShenYu",tags:["Contributor"]},sidebar:"community",previous:{title:"Issue And Pull Request",permalink:"/community/issue-pr"},next:{title:"Sign ICLA Guide",permalink:"/community/icla"}},l=[{value:"Kinds of Contributions",id:"kinds-of-contributions",children:[]},{value:"Join the Discussion",id:"join-the-discussion",children:[]},{value:"Target Repository",id:"target-repository",children:[]},{value:"Getting Apache ShenYu up and running",id:"getting-apache-shenyu-up-and-running",children:[]},{value:"Find tasks",id:"find-tasks",children:[]},{value:"Submit Pull Request for the first time",id:"submit-pull-request-for-the-first-time",children:[]},{value:"Subsequent Pull Request submission",id:"subsequent-pull-request-submission",children:[]},{value:"Wait for the code to be merged",id:"wait-for-the-code-to-be-merged",children:[]},{value:"After the code is merged",id:"after-the-code-is-merged",children:[]},{value:"How to become a Committer?",id:"how-to-become-a-committer",children:[]}],u={toc:l};function h(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We welcome every contributor to join us!"),(0,o.kt)("h3",{id:"kinds-of-contributions"},"Kinds of Contributions"),(0,o.kt)("p",null,"In the Apache ShenYu community, there are many ways to contribute:"),(0,o.kt)("p",null,"Code: Can help the community complete some tasks, write new features or fix some bugs;"),(0,o.kt)("p",null,"Test: Can come to participate in the writing of test code, including unit testing, integration testing, e2e testing;"),(0,o.kt)("p",null,"Docs: Can write or Documentation improved to help users better understand and use Apache ShenYu;"),(0,o.kt)("p",null,"Blog: You can write articles about Apache ShenYu to help the community better promote;"),(0,o.kt)("p",null,"Discussion: You can participate in the discussion of new features of Apache ShenYu and integrate your ideas with Apache ShenYu;"),(0,o.kt)("p",null,"Preach: Can help publicize or promote the Apache ShenYu community, speak in meetup or summit;"),(0,o.kt)("p",null,"Suggestion: You can also make some suggestions to the project or community to promote the healthy development of the community;"),(0,o.kt)("p",null,". . ."),(0,o.kt)("p",null,"Even minor corrections to typos, or corrections to 404 links, are very welcome :)"),(0,o.kt)("h3",{id:"join-the-discussion"},"Join the Discussion"),(0,o.kt)("p",null,"We believe: ",(0,o.kt)("a",{parentName:"p",href:"https://www.apache.org/theapacheway/index.html"},"Community Over Code"),"."),(0,o.kt)("p",null,"Participating in discussions is the first step in contributing, please subscribe to our mailing list first and participate in ongoing discussions on the mailing list!"),(0,o.kt)("p",null,"The steps to subscribe to emails are simple:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Send an email to ",(0,o.kt)("a",{parentName:"li",href:"mailto:dev-subscribe@shenyu.apache.org"},"dev-subscribe@shenyu.apache.org"),";"),(0,o.kt)("li",{parentName:"ol"},"After sending successfully, you will receive a reply from ",(0,o.kt)("a",{parentName:"li",href:"mailto:dev-help@shenyu.apache.org"},"dev-help@shenyu.apache.org"),", please reply to this email according to the instructions of the email to confirm the subscription ;"),(0,o.kt)("li",{parentName:"ol"},"After replying to confirm, you will receive a welcome email indicating that you have successfully subscribed to the email.")),(0,o.kt)("p",null,"After the subscription is successful, you can participate in the discussion at ",(0,o.kt)("a",{parentName:"p",href:"mailto:dev@shenyu.apache.org"},"dev@shenyu.apache.org"),". You can also click on ",(0,o.kt)("a",{parentName:"p",href:"https://lists.apache.org/list.html?dev@shenyu.apache.org"},"Public Archives")," to see historical emails."),(0,o.kt)("p",null,"During the discussion, please be polite and suggest reading ",(0,o.kt)("a",{parentName:"p",href:"https://www.apache.org/foundation/policies/conduct.html"},"Code of Conduct")," of ASF."),(0,o.kt)("p",null,"If you feel that there are too many emails, disturbing you, or you are no longer interested. Please send mail to ",(0,o.kt)("inlineCode",{parentName:"p"},"dev-unsubscribe@shenyu.apache.org"),". Unsubscribe from the mailing list.(The title and content are arbitrary, and the system will automatically process them.)"),(0,o.kt)("h3",{id:"target-repository"},"Target Repository"),(0,o.kt)("p",null,"Apache ShenYu is generally developed collaboratively on GitHub. Currently, there are the following repositories:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"REPOSITORY"),(0,o.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/shenyu"},"apache/shenyu")),(0,o.kt)("td",{parentName:"tr",align:null},"Main Repository")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/shenyu-dashboard"},"apache/shenyu-dashboard")),(0,o.kt)("td",{parentName:"tr",align:null},"Front-end Code of shenyu-admin")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/shenyu-website"},"apache/shenyu-website")),(0,o.kt)("td",{parentName:"tr",align:null},"Official Website and Documents")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/shenyu-helm-chart"},"apache/shenyu-helm-chart")),(0,o.kt)("td",{parentName:"tr",align:null},"Helm Chart for Apache ShenYu")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/shenyu-nginx"},"apache/shenyu-nginx")),(0,o.kt)("td",{parentName:"tr",align:null},"Code to integrate with nginx")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/shenyu-client-python"},"apache/shenyu-client-python")),(0,o.kt)("td",{parentName:"tr",align:null},"Python SDK")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/shenyu-client-dotnet"},"apache/shenyu-client-dotnet")),(0,o.kt)("td",{parentName:"tr",align:null},".Net SDK")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/shenyu-client-golang"},"apache/shenyu-client-golang")),(0,o.kt)("td",{parentName:"tr",align:null},"Golang SDK")))),(0,o.kt)("h3",{id:"getting-apache-shenyu-up-and-running"},"Getting Apache ShenYu up and running"),(0,o.kt)("p",null,"To get Apache ShenYu code running on your development tools, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/deployment/deployment-local"},"Local Deployment")," or ",(0,o.kt)("a",{parentName:"p",href:"/blog/Start-SourceCode-Analysis-Start-Demo"},"Apache ShenYu Startup Example"),", and able to debug with breakpoints."),(0,o.kt)("p",null,"After running, you can read the ",(0,o.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/blog"},"source code analysis article")," included in our official website to have a deeper understanding of Apache ShenYu."),(0,o.kt)("h3",{id:"find-tasks"},"Find tasks"),(0,o.kt)("p",null,"Find the issue you are interested in! On our GitHub repo and mailing list, we often publish some issues with the label ",(0,o.kt)("inlineCode",{parentName:"p"},"good first issue")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"status: volunteer wanted"),". These issues welcome the help of contributors. Among them, good first issues tend to have low thresholds and are suitable for novices. You can click the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22%2C%22status%3A+volunteer+wanted%22"},"link")," to check out these issues."),(0,o.kt)("p",null,"Of course, if you have a good idea, you can also propose it directly on the mailing list(",(0,o.kt)("a",{parentName:"p",href:"mailto:dev@shenyu.apache.org"},"dev@shenyu.apache.org"),"), and after a thorough discussion, you can start to act."),(0,o.kt)("p",null,"At the same time, you can also participate in the writing of our ",(0,o.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/blog"},"blog")," and submit them to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu-website/tree/main/blog"},"the blog module")," of the Apache ShenYu official website through Pull Request."),(0,o.kt)("p",null,"If you are a student, you are also very welcome to apply for the topic of Apache ShenYu in open source internship activities such as GSoC. You can click the ",(0,o.kt)("a",{parentName:"p",href:"https://community.apache.org/gsoc.html"},"link")," to view the Apache Software Foundation Introduction to GSoC. You can also check Apache ShenYu's previous or ongoing GSoC issues through this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/issues?q=is%3Aopen+is%3Aissue+label%3Agsoc"},"link"),"!"),(0,o.kt)("h3",{id:"submit-pull-request-for-the-first-time"},"Submit Pull Request for the first time"),(0,o.kt)("p",null,"If you are submitting a Pr for the first time, first you need to Fork the target repository. (If it has been forked, then no fork is required)"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"fork",src:n(90129).Z})),(0,o.kt)("p",null,"Then download the code locally ",(0,o.kt)("strong",{parentName:"p"},"with git command"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:${YOUR_USERNAME}/${TARGET_REPO}.git #Recommended\n# You can also git clone https://github.com/${YOUR_USERNAME}/${TARGET_REPO}.git\n")),(0,o.kt)("p",null,"After the download is complete, please refer to the getting started guide or README file of the target repository to initialize the project. In Windows environment, if the file name is too long when cloning the source code, please refer to ",(0,o.kt)("a",{parentName:"p",href:"./faq"},"FAQ"),"."),(0,o.kt)("p",null,"Then, you can refer to the following command to submit the code:"),(0,o.kt)("p",null,"Switch to a new branch for development"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout -b a-dev-branch\n")),(0,o.kt)("p",null,"submit commit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git add <modified file/path> #add followed by the modified files or path\ngit commit -m 'necessary instructions'\n")),(0,o.kt)("p",null,"push to the remote repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git push origin a-dev-branch\n")),(0,o.kt)("p",null,"Then you can initiate a new PR (Pull Request) on GitHub."),(0,o.kt)("p",null,"Please note that the title of the PR needs to conform to our ",(0,o.kt)("a",{parentName:"p",href:"/community/issue-pr"},"spec"),", and write the necessary description in the PR to facilitate code review by Committers and other contributors."),(0,o.kt)("h3",{id:"subsequent-pull-request-submission"},"Subsequent Pull Request submission"),(0,o.kt)("h4",{id:"update-master-branch-code"},"Update master branch code"),(0,o.kt)("p",null,"First, switch to the master branch"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout master #May also be the main branch\n")),(0,o.kt)("p",null,"Bind the upstream warehouse (you only need to bind it once), here is the main warehouse of shenyu as an example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git remote add upstream https://github.com/apache/shenyu.git\n")),(0,o.kt)("p",null,"Pull remote code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git pull upstream master\n")),(0,o.kt)("h4",{id:"new-development-branch-for-developing"},"New development branch for developing"),(0,o.kt)("p",null,"Then create a new development branch for development, submission and push. The process is the same as submitting Pull Request for the first time."),(0,o.kt)("p",null,"In order to prevent the confusion of the master branch, it is recommended that the master branch be used to maintain synchronization with the upstream, and not develop and submit code on the master branch."),(0,o.kt)("h3",{id:"wait-for-the-code-to-be-merged"},"Wait for the code to be merged"),(0,o.kt)("p",null,"After submitting the PR, the Committer or the community's friends will review the code you submitted (Code Review), and will propose some modification suggestions or conduct some discussions. Please pay attention to your PR in time."),(0,o.kt)("p",null,"If subsequent changes are required, there is no need to initiate a new PR. After submitting a commit on the original branch and pushing it to the remote repository, the PR will be automatically updated."),(0,o.kt)("p",null,"In addition, our project has a relatively standardized and strict CI inspection process. After submitting PR, CI will be triggered. Please pay attention to whether it passes the CI inspection."),(0,o.kt)("p",null,"Finally, the Committers can merge the PR into the master branch."),(0,o.kt)("h3",{id:"after-the-code-is-merged"},"After the code is merged"),(0,o.kt)("p",null,"After the code has been merged, you can delete the development branch on both the local and remote repositories:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git branch -d a-dev-branch\ngit push origin --delete a-dev-branch\n")),(0,o.kt)("p",null,"On the master/main branch, you can do the following to sync the upstream repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git remote add upstream https://github.com/apache/shenyu.git #Bind the remote warehouse, if it has been executed, it does not need to be executed again\ngit checkout master # or main\ngit pull upstream master\n")),(0,o.kt)("h3",{id:"how-to-become-a-committer"},"How to become a Committer?"),(0,o.kt)("p",null,"With the above steps, you are a contributor to Apache ShenYu. Repeat the previous steps to stay active in the community, keep at it and you can become a ",(0,o.kt)("a",{parentName:"p",href:"/community/committer/"},"Committer"),"!"),(0,o.kt)("p",null,"In order to keep abreast of the development of Apache ShenYu, you can follow the mailing list, or you can participate in the biweekly meeting of the community (meeting invitation link will be sent on the mailing list)."))}h.isMDXComponent=!0},90129:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fork-d5bea44a59363214f1d720eb04e13512.png"}}]);