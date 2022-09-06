"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[78593],{3905:(e,n,t)=>{t.d(n,{Zo:()=>h,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),o=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},h=function(e){var n=o(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),c=o(t),m=r,d=c["".concat(p,".").concat(m)]||c[m]||u[m]||s;return t?a.createElement(d,l(l({ref:n},h),{},{components:t})):a.createElement(d,l({ref:n},h))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var o=2;o<s;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},69528:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const s={title:"Release Guide",sidebar_position:8,description:"Apache ShenYu Release Guide",cover:"/img/architecture/shenyu-framework.png"},l=void 0,i={unversionedId:"release-guide",id:"release-guide",isDocsHomePage:!1,title:"Release Guide",description:"Apache ShenYu Release Guide",source:"@site/community/8-release-guide.md",sourceDirName:".",slug:"/release-guide",permalink:"/community/release-guide",editUrl:"https://github.com/apache/shenyu-website/edit/main/community/8-release-guide.md",version:"current",lastUpdatedBy:"lahmxu",lastUpdatedAt:1662469013,formattedLastUpdatedAt:"9/6/2022",sidebarPosition:8,frontMatter:{title:"Release Guide",sidebar_position:8,description:"Apache ShenYu Release Guide",cover:"/img/architecture/shenyu-framework.png"},sidebar:"community",previous:{title:"Voting in a new PMC member",permalink:"/community/vote-pmc"},next:{title:"User Registration",permalink:"/community/user-registration"}},p=[{value:"Update release notes",id:"update-release-notes",children:[]},{value:"Create GPG KEY",id:"create-gpg-key",children:[]},{value:"Publish to Maven staging repo",id:"publish-to-maven-staging-repo",children:[]},{value:"Publish to SVN dev repository",id:"publish-to-svn-dev-repository",children:[]},{value:"Check Release",id:"check-release",children:[]},{value:"Voting Process",id:"voting-process",children:[{value:"ShenYu community vote",id:"shenyu-community-vote",children:[]}]},{value:"Finish publishing",id:"finish-publishing",children:[]},{value:"Release Announcement",id:"release-announcement",children:[]},{value:"Reissue (not required)",id:"reissue-not-required",children:[]}],o={toc:p};function h(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"update-release-notes"},"Update release notes"),(0,r.kt)("p",null,"Update ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/blob/master/RELEASE-NOTES.md"},"RELEASE-NOTES")," in the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"## ${PUBLISH.VERSION}\n\n### New Features\n\n1. xxx\n1. xxx\n...\n\n### API Changes\n\n1. xxx\n1. xxx\n...\n\n### Enhancement\n\n1. xxx\n1. xxx\n...\n\n### Refactor\n\n1. xxx\n1. xxx\n...\n\n### Bug Fix\n\n1. xxx\n1. xxx\n...\n")),(0,r.kt)("h2",{id:"create-gpg-key"},"Create GPG KEY"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Each release manager only creates a GPG KEY for the first release, which can be reused for subsequent releases.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Create KEY")),(0,r.kt)("p",null,"Install ",(0,r.kt)("a",{parentName:"p",href:"https://www.gnupg.org/download/index.html"},"GnuPG"),"."),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://www.gnupg.org/documentation/manuals/gnupg/OpenPGP-Key-Management.html#OpenPGP-Key-Management"},"OpenPGP KEY Management")," ","[1]"," instructions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --full-gen-key\n")),(0,r.kt)("p",null,"Steps (the following are from console output)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'gpg (GnuPG) 2.2.4; Copyright (C) 2017 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n  (1) RSA and RSA (default)\n  (2) DSA and Elgamal\n  (3) DSA (sign only)\n  (4) RSA (sign only)\nYour selection? 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n        0 = key does not expire\n     <n>  = key expires in n days\n     <n>w = key expires in n weeks\n     <n>m = key expires in n months\n     <n>y = key expires in n years\nKey is valid for? (0) \nKey does not expire at all\nIs this correct? (y/N) y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: \uff08Set username\uff09\nEmail address: \uff08Set email address\uff09\nComment: \uff08Fill in the comments\uff09\nYou selected this USER-ID:\n   "username (comments) <email>"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O\nYou need a Passphrase to protect your secret key. \uff08Set password\uff09\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Verify KEY")),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://www.gnupg.org/documentation/manuals/gnupg/Operational-GPG-Commands.html#Operational-GPG-Commands"},"Operational GPG Commands")," ","[2]"," instructions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --list-keys\n")),(0,r.kt)("p",null,"Output\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pub   rsa4096 2019-03-11 [SC]\n      095E0D21BC28CFC7A8B8076DF7DF28D237A8048C\nuid           username (comments) <email>\nsub   rsa4096 2019-03-11 [E]\n")),(0,r.kt)("p",null,"Public key is ",(0,r.kt)("inlineCode",{parentName:"p"},"095E0D21BC28CFC7A8B8076DF7DF28D237A8048C"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Upload public key")),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://www.gnupg.org/documentation/manuals/gnupg/Dirmngr-Options.html#Dirmngr-Options"},"Dirmngr Options")," ","[3]"," instructions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --send-key 095E0D21BC28CFC7A8B8076DF7DF28D237A8048C\n")),(0,r.kt)("h2",{id:"publish-to-maven-staging-repo"},"Publish to Maven staging repo"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Set settings.xml")),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://infra.apache.org/publishing-maven-artifacts.html"},"publishing maven artifacts")," ","[4]"," instructions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Publish with a new branch")),(0,r.kt)("p",null,"Download and install ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"Git"),"."),(0,r.kt)("p",null,"Create and switch to ",(0,r.kt)("inlineCode",{parentName:"p"},"${PUBLISH.VERSION}-release"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/apache/shenyu.git ~/shenyu\ncd ~/shenyu/\ngit checkout -b ${PUBLISH.VERSION}-release\ngit push origin ${PUBLISH.VERSION}-release\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Dry Run")),(0,r.kt)("p",null,"Download and install ",(0,r.kt)("a",{parentName:"p",href:"https://maven.apache.org/download.cgi"},"Maven"),"."),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://infra.apache.org/publishing-maven-artifacts.html"},"publishing maven artifacts")," ","[4]"," instructions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'mvn release:prepare -Prelease -Darguments="-DskipTests" -DautoVersionSubmodules=true -DdryRun=true -Dusername=(GitHub ID)\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. Prepare")),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://infra.apache.org/publishing-maven-artifacts.html"},"publishing maven artifacts")," ","[4]"," instructions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mvn release:clean\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'mvn release:prepare -Prelease -Darguments="-DskipTests" -DautoVersionSubmodules=true -DpushChanges=false -Dusername=(GitHub ID)\n')),(0,r.kt)("p",null,"Submit the code with updated version number and new tags."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git push origin ${PUBLISH.VERSION}-release\ngit push origin --tags\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5. Perform")),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://infra.apache.org/publishing-maven-artifacts.html"},"publishing maven artifacts")," ","[4]"," instructions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'mvn release:perform -Prelease -Darguments="-DskipTests" -DautoVersionSubmodules=true -Dusername=(GitHub ID)\n')),(0,r.kt)("p",null,"At this point, the distribution is published to ",(0,r.kt)("a",{parentName:"p",href:"https://repository.apache.org/#stagingRepositories"},"stagingRepositories"),". Find the published version, ${STAGING.RELEASE}, and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Close"),"."),(0,r.kt)("h2",{id:"publish-to-svn-dev-repository"},"Publish to SVN dev repository"),(0,r.kt)("p",null,"Install ",(0,r.kt)("a",{parentName:"p",href:"https://tortoisesvn.net/downloads.html"},"SVN"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Update KEYS file")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the release manager has not yet appended his or her public key to the KEYS file, do the following. Otherwise, skip this step.")),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://infra.apache.org/release-signing.html#signing-basics"},"signing basics")," ","[5]"," instructions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'mkdir -p ~/keys/release/\ncd ~/keys/release/\nsvn --username=${LDAP ID} co https://dist.apache.org/repos/dist/release/shenyu\ncd ~/keys/release/shenyu\ngpg -a --export ${GPG username} >> KEYS\nsvn --username=${LDAP ID} commit -m "append to KEYS"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Adding source code packages and binary packages")),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://infra.apache.org/release-publishing.html#uploading"},"Uploading packages")," ","[6]"," instructions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ~/svn_release/dev/\ncd ~/svn_release/dev/\nsvn --username=${LDAP ID} co https://dist.apache.org/repos/dist/dev/shenyu\nmkdir -p ~/svn_release/dev/shenyu/${PUBLISH.VERSION}\ncd ~/svn_release/dev/shenyu/${PUBLISH.VERSION}\ncp -f ~/shenyu/shenyu-dist/shenyu-src-dist/target/*.zip ~/svn_release/dev/shenyu/${PUBLISH.VERSION}\ncp -f ~/shenyu/shenyu-dist/shenyu-src-dist/target/*.zip.asc ~/svn_release/dev/shenyu/${PUBLISH.VERSION}\ncp -f ~/shenyu/shenyu-dist/shenyu-bootstrap-dist/target/*.tar.gz ~/svn_release/dev/shenyu/${PUBLISH.VERSION}\ncp -f ~/shenyu/shenyu-dist/shenyu-bootstrap-dist/target/*.tar.gz.asc ~/svn_release/dev/shenyu/${PUBLISH.VERSION}\ncp -f ~/shenyu/shenyu-dist/shenyu-admin-dist/target/*.tar.gz ~/svn_release/dev/shenyu/${PUBLISH.VERSION}\ncp -f ~/shenyu/shenyu-dist/shenyu-admin-dist/target/*.tar.gz.asc ~/svn_release/dev/shenyu/${PUBLISH.VERSION}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Adding hashes")),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://infra.apache.org/release-distribution#sigs-and-sums"},"Requirements for cryptographic signatures and checksums")," ","[7]"," instructions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"shasum -a 512 apache-shenyu-${PUBLISH.VERSION}-src.zip > apache-shenyu-${PUBLISH.VERSION}-src.zip.sha512\nshasum -b -a 512 apache-shenyu-${PUBLISH.VERSION}-bootstrap-bin.tar.gz > apache-shenyu-${PUBLISH.VERSION}-bootstrap-bin.tar.gz.sha512\nshasum -b -a 512 apache-shenyu-${PUBLISH.VERSION}-admin-bin.tar.gz > apache-shenyu-${PUBLISH.VERSION}-admin-bin.tar.gz.sha512\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. Submit the new release")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cd ~/svn_release/dev/shenyu\nsvn add ${PUBLISH.VERSION}/\nsvn --username=${LDAP ID} commit -m "release ${PUBLISH.VERSION}"\n')),(0,r.kt)("h2",{id:"check-release"},"Check Release"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Verify sha512 checksum")),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://www.apache.org/info/verification.html#CheckingHashes"},"Checking Hashes")," ","[8]"," instructions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"shasum -c apache-shenyu-${PUBLISH.VERSION}-src.zip.sha512\nshasum -c apache-shenyu-${PUBLISH.VERSION}-bootstrap-bin.tar.gz.sha512\nshasum -c apache-shenyu-${PUBLISH.VERSION}-admin-bin.tar.gz.sha512\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Verifying GPG Signatures")),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://www.apache.org/info/verification.html#CheckingSignatures"},"Checking Signatures")," ","[9]"," instructions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://downloads.apache.org/shenyu/KEYS >> KEYS\ngpg --import KEYS\ncd ~/svn_release/dev/shenyu/${PUBLISH.VERSION}\ngpg --verify apache-shenyu-${PUBLISH.VERSION}-src.zip.asc apache-shenyu-${PUBLISH.VERSION}-src.zip\ngpg --verify apache-shenyu-${PUBLISH.VERSION}-bootstrap-bin.tar.gz.asc apache-shenyu-${PUBLISH.VERSION}-bootstrap-bin.tar.gz\ngpg --verify apache-shenyu-${PUBLISH.VERSION}-admin-bin.tar.gz.asc apache-shenyu-${PUBLISH.VERSION}-admin-bin.tar.gz\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Ensure that SVN is consistent with GitHub source code")),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist"},"Incubator Release Checklist")," ","[10]"," instructions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'wget https://github.com/apache/shenyu/archive/v${PUBLISH.VERSION}.zip\nunzip v${PUBLISH.VERSION}.zip\nunzip apache-shenyu-${PUBLISH.VERSION}-src.zip\ndiff -r -x "shenyu-dashboard" -x "shenyu-examples" -x "shenyu-integrated-test" -x "static" apache-shenyu-${PUBLISH.VERSION}-src shenyu-${PUBLISH.VERSION}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. Check the source code package")),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist"},"Incubator Release Checklist")," ","[10]"," instructions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LICENSE")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"NOTICE")," files exist"),(0,r.kt)("li",{parentName:"ul"},"The year in the ",(0,r.kt)("inlineCode",{parentName:"li"},"NOTICE")," file is correct"),(0,r.kt)("li",{parentName:"ul"},"All files have ASF licenses at the beginning"),(0,r.kt)("li",{parentName:"ul"},"There are no ",(0,r.kt)("inlineCode",{parentName:"li"},"LICENSE")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"NOTICE")," that do not depend on the software"),(0,r.kt)("li",{parentName:"ul"},"There are no binaries that do not meet expectations"),(0,r.kt)("li",{parentName:"ul"},"Compilation passes (. /mvnw install) (JAVA 8 is currently supported)"),(0,r.kt)("li",{parentName:"ul"},"If there are third-party code dependencies.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"License compatibility for third-party code dependencies"),(0,r.kt)("li",{parentName:"ul"},"All licenses of third-party code dependencies are named in the ",(0,r.kt)("inlineCode",{parentName:"li"},"LICENSE")," file"),(0,r.kt)("li",{parentName:"ul"},"The full version of the third-party code dependency license is in the ",(0,r.kt)("inlineCode",{parentName:"li"},"license")," directory"),(0,r.kt)("li",{parentName:"ul"},"If the dependency is an Apache license and there are ",(0,r.kt)("inlineCode",{parentName:"li"},"NOTICE")," files, then these ",(0,r.kt)("inlineCode",{parentName:"li"},"NOTICE")," files need to be added to the project's ",(0,r.kt)("inlineCode",{parentName:"li"},"NOTICE")," file")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5. Check the binary package")),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://infra.apache.org/licensing-howto.html#binary"},"Binary distributions")," ","[11]"," instructions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LICENSE")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"NOTICE")," files exist"),(0,r.kt)("li",{parentName:"ul"},"The year in the ",(0,r.kt)("inlineCode",{parentName:"li"},"NOTICE")," file is correct"),(0,r.kt)("li",{parentName:"ul"},"All text files start with an ASF license"),(0,r.kt)("li",{parentName:"ul"},"No ",(0,r.kt)("inlineCode",{parentName:"li"},"LICENSE")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"NOTICE")," for undependent software"),(0,r.kt)("li",{parentName:"ul"},"If third-party code dependencies exist.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Third-party code dependent licenses are compatible"),(0,r.kt)("li",{parentName:"ul"},"All licenses of third-party code dependencies are named in the ",(0,r.kt)("inlineCode",{parentName:"li"},"LICENSE")," file"),(0,r.kt)("li",{parentName:"ul"},"The full version of the third-party code dependency license is in the ",(0,r.kt)("inlineCode",{parentName:"li"},"LICENSE")," directory"),(0,r.kt)("li",{parentName:"ul"},"If the dependency is an Apache license and there are ",(0,r.kt)("inlineCode",{parentName:"li"},"NOTICE")," files, then these ",(0,r.kt)("inlineCode",{parentName:"li"},"NOTICE")," files need to be added to the project's ",(0,r.kt)("inlineCode",{parentName:"li"},"NOTICE")," file")))),(0,r.kt)("h2",{id:"voting-process"},"Voting Process"),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://www.apache.org/legal/release-policy.html#release-approval"},"RELEASE APPROVAL")," ","[12]",", ",(0,r.kt)("a",{parentName:"p",href:"https://incubator.apache.org/policy/incubation.html#Releases"},"Releases")," ","[13]",", ",(0,r.kt)("a",{parentName:"p",href:"https://www.apache.org/foundation/voting.html"},"voting")," ","[14]"," instructions."),(0,r.kt)("h3",{id:"shenyu-community-vote"},"ShenYu community vote"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Voting lasts for at least 72 hours and receives 3 ",(0,r.kt)("inlineCode",{parentName:"strong"},"+1 binding")," votes")),(0,r.kt)("p",null,"To:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dev@shenyu.apache.org\n")),(0,r.kt)("p",null,"Title:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[VOTE] Release Apache ShenYu ${PUBLISH.VERSION}\n")),(0,r.kt)("p",null,"Content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Hello ShenYu Community,\n\nThis is a call for vote to release Apache ShenYu version ${PUBLISH.VERSION}\n\nRelease notes:\nhttps://github.com/apache/shenyu/blob/master/RELEASE-NOTES.md\n\nThe release candidates:\nhttps://dist.apache.org/repos/dist/dev/shenyu/${PUBLISH.VERSION}/\n\nMaven 2 staging repository:\nhttps://repository.apache.org/content/repositories/${STAGING.RELEASE}/org/apache/shenyu/\n\nGit tag for the release:\nhttps://github.com/apache/shenyu/tree/v${PUBLISH.VERSION}/\n\nRelease Commit ID:\nhttps://github.com/apache/shenyu/commit/xxxxxxxxxxxxxxxxxxxxxxx\n\nKeys to verify the Release Candidate:\nhttps://downloads.apache.org/shenyu/KEYS\n\nLook at here for how to verify this release candidate:\nhttps://shenyu.apache.org/community/release-guide/#check-release\n\nThe vote will be open for at least 72 hours or until necessary number of votes are reached.\n\nPlease vote accordingly:\n\n[ ] +1 approve \n\n[ ] +0 no opinion\n \n[ ] -1 disapprove with the reason\n\nChecklist for reference:\n\n[ ] Download links are valid.\n\n[ ] Checksums and PGP signatures are valid.\n\n[ ] Source code distributions have correct names matching the current release.\n\n[ ] LICENSE and NOTICE files are correct for each ShenYu repo.\n\n[ ] All files have license headers if necessary.\n\n[ ] No compiled archives bundled in source archive.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Announcement of voting results")),(0,r.kt)("p",null,"To:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dev@shenyu.apache.org\n")),(0,r.kt)("p",null,"Title:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[RESULT][VOTE] Release Apache ShenYu ${PUBLISH.VERSION}\n")),(0,r.kt)("p",null,"Content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"We\u2019ve received 3 +1 binding votes and 2 +1 non-binding votes:\n\n+1, xxx (binding)\n+1, xxx (binding)\n+1, xxx (binding)\n+1, xxx (non-binding)\n+1, xxx (non-binding)\n\nVote thread:\nhttps://lists.apache.org/thread/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n\nThanks everyone for taking the time to verify and vote for the release!\n")),(0,r.kt)("h2",{id:"finish-publishing"},"Finish publishing"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Finish SVN release")),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://infra.apache.org/release-publishing.html#uploading"},"Uploading packages")," ","[6]"," instructions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'svn mv https://dist.apache.org/repos/dist/dev/shenyu/${PUBLISH.VERSION} https://dist.apache.org/repos/dist/release/shenyu/ -m "transfer packages for ${PUBLISH.VERSION}"\nsvn delete https://dist.apache.org/repos/dist/release/shenyu/${PREVIOUS.RELEASE.VERSION}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Finish Maven release")),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://infra.apache.org/publishing-maven-artifacts.html"},"publishing maven artifacts")," ","[4]"," instructions."),(0,r.kt)("p",null,"Back to ",(0,r.kt)("a",{parentName:"p",href:"https://repository.apache.org/#stagingRepositories"},"stagingRepositories"),", find ${STAGING.RELEASE} and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Release"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Finish GitHub release")),(0,r.kt)("p",null,"Edit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/releases"},"Releases")," ",(0,r.kt)("inlineCode",{parentName:"p"},"${PUBLISH.VERSION}")," and click release."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. Finish Docker release")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: After clicking publish in Github, the Docker image will be automatically created in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/blob/master/.github/workflows/docker-publish.yml"},"Workflow")," (docker-publish-dockerhub).\nWe just need to pay attention to whether the workflow is successfully executed. If it is successful, skip the following Docker release steps; if the execution is unsuccessful, you need to manually execute the following commands.")),(0,r.kt)("p",null,"Install ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker"),"."),(0,r.kt)("p",null,"The Docker version needs to be greater than or equal to 19.03, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"experimental")," parameter in the docker configuration file is changed to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout v${PUBLISH.VERSION}\ncd ~/shenyu/shenyu-dist/\nmvn clean package -Prelease\n\ndocker buildx create --name shenyu\ndocker buildx use shenyu\ndocker login\n\ndocker buildx build \\ \n  -t apache/shenyu-admin:latest \\ \n  -t apache/shenyu-admin:${PUBLISH.VERSION} \\ \n  --build-arg APP_NAME=apache-shenyu-${PUBLISH.VERSION}-admin-bin \\ \n  --platform=linux/arm64,linux/amd64 \\ \n  -f ./shenyu-admin-dist/Dockerfile --push\n\ndocker buildx build \\ \n  -t apache/shenyu-bootstrap:latest \\ \n  -t apache/shenyu-bootstrap:${PUBLISH.VERSION} \\ \n  --build-arg APP_NAME=apache-shenyu-${PUBLISH.VERSION}-bootstrap-bin \\ \n  --platform=linux/arm64,linux/amd64 \\ \n  -f ./shenyu-bootstrap-dist/Dockerfile --push\n  \n")),(0,r.kt)("p",null,"Login Docker Hub to verify ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/shenyu-bootstrap/"},"shenyu-bootstrap")," and ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/shenyu-admin/"},"shenyu-admin")," exist."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5. Finish GitHub updating")),(0,r.kt)("p",null,"Fork a copy of the code from GitHub and run the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout master\ngit merge origin/${PUBLISH.VERSION}-release\ngit pull\ngit push origin master\n")),(0,r.kt)("p",null,"The above changes require the creation of a pull request. After the pr merged, execute the following command in the original repository."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git push --delete origin ${PUBLISH.VERSION}-release\ngit branch -d ${PUBLISH.VERSION}-release\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6. Update download page")),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://infra.apache.org/release-download-pages.html"},"Release Download Pages for Projects")," ","[15]",", ",(0,r.kt)("a",{parentName:"p",href:"https://infra.apache.org/release-publishing.html#normal"},"Normal distribution on the Apache downloads site")," ","[16]"," instructions."),(0,r.kt)("p",null,"After the Apache mirror links take effect (at least one hour), update the download page for:\n",(0,r.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/download/"},"English version")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/zh/download/"},"Chinese version")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Project download links should use ",(0,r.kt)("a",{parentName:"p",href:"https://www.apache.org/dyn/closer.lua"},"https://www.apache.org/dyn/closer.lua")," instead of closer.cgi or mirrors.cgi"),(0,r.kt)("p",{parentName:"blockquote"},"Note: Download links for GPG signature files and hash-check files must use this prefix: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://downloads.apache.org/shenyu/"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"7. Update documentation")),(0,r.kt)("p",null,"Archive the ",(0,r.kt)("inlineCode",{parentName:"p"},"${PUBLISH.VERSION}")," version of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu-website"},"document")," and update the ",(0,r.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/versions/"},"version page"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"8. Update event page")),(0,r.kt)("p",null,"Add new release ",(0,r.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/event/$%7BPUBLISH.VERSION%7D-release"},"event"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"9. Update news page")),(0,r.kt)("p",null,"Add new release ",(0,r.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/zh/news"},"news"),"."),(0,r.kt)("h2",{id:"release-announcement"},"Release Announcement"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: ",(0,r.kt)("inlineCode",{parentName:"p"},"announce@apache.org")," address requires the email to be sent in plain text format. If you are using Gmail, you can check ",(0,r.kt)("inlineCode",{parentName:"p"},"Plain Text Mode")," in the edit screen.")),(0,r.kt)("p",null,"To:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dev@shenyu.apache.org\nannounce@apache.org\n")),(0,r.kt)("p",null,"Title:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[ANNOUNCE] Apache ShenYu ${PUBLISH.VERSION} available\n")),(0,r.kt)("p",null,"Content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Hi,\n\nApache ShenYu Team is glad to announce the new release of Apache ShenYu ${PUBLISH.VERSION}.\n\nApache ShenYu is an asynchronous, high-performance, cross-language, responsive API gateway.\nSupport various languages (http protocol), support Dubbo, Spring-Cloud, Grpc, Motan, Sofa, Tars and other protocols.\nPlugin design idea, plugin hot swap, easy to expand.\nFlexible flow filtering to meet various flow control.\nBuilt-in rich plugin support, authentication, limiting, fuse, firewall, etc.\nDynamic flow configuration, high performance.\nSupport cluster deployment, A/B Test, blue-green release.\n\nDownload Links: https://shenyu.apache.org/download/\n\nRelease Notes: https://github.com/apache/shenyu/blob/master/RELEASE-NOTES.md\n\nWebsite: https://shenyu.apache.org/\n\nShenYu Resources:\n- Issue: https://github.com/apache/shenyu/issues\n- Mailing list: dev@shenyu.apache.org\n- Documents: https://shenyu.apache.org/docs/index/\n\n\n- Apache ShenYu Team\n\n")),(0,r.kt)("h2",{id:"reissue-not-required"},"Reissue (not required)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: You only need to republish if the vote did not pass.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Cancellation of voting email template")),(0,r.kt)("p",null,"To:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dev@shenyu.apache.org\n")),(0,r.kt)("p",null,"Title:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[CANCEL][VOTE] Release Apache ShenYu ${PUBLISH.VERSION}\n")),(0,r.kt)("p",null,"Content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Hi,\n\nI'm cancelling this vote because of xxxxxx issues. I'll fix them and start the round ${n} vote process.\nThe detail of the modifications are as follows:\n\n1. xxxxxx\n2. xxxxxx\n\nThanks a lot for all your help.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Clean stagingRepositories")),(0,r.kt)("p",null,"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://repository.apache.org/#stagingRepositories"},"https://repository.apache.org/#stagingRepositories"),", After logging in with your Apache LDAP account, select the previous ",(0,r.kt)("inlineCode",{parentName:"p"},"Close")," version and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Drop"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3\u3002Deleting GitHub branches and tags")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git push origin --delete ${PUBLISH.VERSION}-release\ngit branch -D ${PUBLISH.VERSION}-release\ngit push origin --delete tag v${PUBLISH.VERSION}\ngit tag -d v${PUBLISH.VERSION}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. Deleting SVN content to be published")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'svn delete https://dist.apache.org/repos/dist/dev/shenyu/${PUBLISH.VERSION} -m "delete ${PUBLISH.VERSION}"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5. Update email title")),(0,r.kt)("p",null,"After completing the above steps, you can start the re-posting operation. The next poll email title needs to have the ",(0,r.kt)("inlineCode",{parentName:"p"},"[ROUND ${n}]")," suffix added. For example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[VOTE] Release Apache ShenYu ${PUBLISH.VERSION} [ROUND 2]\n")),(0,r.kt)("p",null,"Voting result and announcement emails do not need to be suffixed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The content refers to")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[1]"," ",(0,r.kt)("a",{parentName:"li",href:"https://www.gnupg.org/documentation/manuals/gnupg/OpenPGP-Key-Management.html#OpenPGP-Key-Management"},"https://www.gnupg.org/documentation/manuals/gnupg/OpenPGP-Key-Management.html#OpenPGP-Key-Management")),(0,r.kt)("li",{parentName:"ul"},"[2]"," ",(0,r.kt)("a",{parentName:"li",href:"https://www.gnupg.org/documentation/manuals/gnupg/Operational-GPG-Commands.html#Operational-GPG-Commands"},"https://www.gnupg.org/documentation/manuals/gnupg/Operational-GPG-Commands.html#Operational-GPG-Commands")),(0,r.kt)("li",{parentName:"ul"},"[3]"," ",(0,r.kt)("a",{parentName:"li",href:"https://www.gnupg.org/documentation/manuals/gnupg/Dirmngr-Options.html#Dirmngr-Options"},"https://www.gnupg.org/documentation/manuals/gnupg/Dirmngr-Options.html#Dirmngr-Options")),(0,r.kt)("li",{parentName:"ul"},"[4]"," ",(0,r.kt)("a",{parentName:"li",href:"https://infra.apache.org/publishing-maven-artifacts.html"},"https://infra.apache.org/publishing-maven-artifacts.html")),(0,r.kt)("li",{parentName:"ul"},"[5]"," ",(0,r.kt)("a",{parentName:"li",href:"https://infra.apache.org/release-signing.html#signing-basics"},"https://infra.apache.org/release-signing.html#signing-basics")),(0,r.kt)("li",{parentName:"ul"},"[6]"," ",(0,r.kt)("a",{parentName:"li",href:"https://infra.apache.org/release-publishing.html#uploading"},"https://infra.apache.org/release-publishing.html#uploading")),(0,r.kt)("li",{parentName:"ul"},"[7]"," ",(0,r.kt)("a",{parentName:"li",href:"https://infra.apache.org/release-distribution#sigs-and-sums"},"https://infra.apache.org/release-distribution#sigs-and-sums")),(0,r.kt)("li",{parentName:"ul"},"[8]"," ",(0,r.kt)("a",{parentName:"li",href:"https://www.apache.org/info/verification.html#CheckingHashes"},"https://www.apache.org/info/verification.html#CheckingHashes")),(0,r.kt)("li",{parentName:"ul"},"[9]"," ",(0,r.kt)("a",{parentName:"li",href:"https://www.apache.org/info/verification.html#CheckingSignatures"},"https://www.apache.org/info/verification.html#CheckingSignatures")),(0,r.kt)("li",{parentName:"ul"},"[10]"," ",(0,r.kt)("a",{parentName:"li",href:"https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist"},"https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist")),(0,r.kt)("li",{parentName:"ul"},"[11]"," ",(0,r.kt)("a",{parentName:"li",href:"https://infra.apache.org/licensing-howto.html#binary"},"https://infra.apache.org/licensing-howto.html#binary")),(0,r.kt)("li",{parentName:"ul"},"[12]"," ",(0,r.kt)("a",{parentName:"li",href:"https://www.apache.org/legal/release-policy.html#release-approval"},"https://www.apache.org/legal/release-policy.html#release-approval")),(0,r.kt)("li",{parentName:"ul"},"[13]"," ",(0,r.kt)("a",{parentName:"li",href:"https://incubator.apache.org/policy/incubation.html#Releases"},"https://incubator.apache.org/policy/incubation.html#Releases")),(0,r.kt)("li",{parentName:"ul"},"[14]"," ",(0,r.kt)("a",{parentName:"li",href:"https://www.apache.org/foundation/voting.html"},"https://www.apache.org/foundation/voting.html")),(0,r.kt)("li",{parentName:"ul"},"[15]"," ",(0,r.kt)("a",{parentName:"li",href:"https://infra.apache.org/release-download-pages.html"},"https://infra.apache.org/release-download-pages.html")),(0,r.kt)("li",{parentName:"ul"},"[16]"," ",(0,r.kt)("a",{parentName:"li",href:"https://infra.apache.org/release-publishing.html#normal"},"https://infra.apache.org/release-publishing.html#normal"))))}h.isMDXComponent=!0}}]);