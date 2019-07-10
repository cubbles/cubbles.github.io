(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{191:function(a,e,t){a.exports=t.p+"assets/img/wp_upload_config.9b18492c.png"},192:function(a,e,t){a.exports=t.p+"assets/img/image.3f44949a.png"},256:function(a,e,t){"use strict";t.r(e);var s=t(0),r=Object(s.a)({},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"upload-a-webpackage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upload-a-webpackage","aria-hidden":"true"}},[a._v("#")]),a._v(" Upload a Webpackage")]),a._v(" "),s("h2",{attrs:{id:"basics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basics","aria-hidden":"true"}},[a._v("#")]),a._v(" Basics")]),a._v(" "),s("p",[a._v("As a coder, you can develop and test your webpackage(s) locally using the CDT (Coder DevTools). If you want to provide it for a larger audience, you should upload it. That is, to transfer all files of a webpackage folder into a selected store of a "),s("router-link",{attrs:{to:"/user-guide/terms-and-concepts/base.html"}},[a._v("Cubbles Base")]),a._v(" instance.")],1),a._v(" "),s("h2",{attrs:{id:"upload-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upload-configuration","aria-hidden":"true"}},[a._v("#")]),a._v(" Upload Configuration")]),a._v(" "),s("p",[a._v("Details for the upload of a webpackage are set using the  "),s("code",[a._v("uploadConfigs")]),a._v(" Object in the "),s("em",[a._v(".webpackage")]),a._v(" file within the root folder of each webpackage.")]),a._v(" "),s("p",[s("img",{attrs:{src:t(191),alt:".webpackage config file location"}})]),a._v(" "),s("h3",{attrs:{id:"initial-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initial-setup","aria-hidden":"true"}},[a._v("#")]),a._v(" Initial setup")]),a._v(" "),s("p",[a._v("Initially, the .webpackage file doesn't contain any configuration.\nJust run "),s("code",[a._v("+webpackage-upload")]),a._v(" the grunt task:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("grunt +webpackage-upload\n")])])]),s("p",[a._v('Now you see the .webpackage file containing an "uploadConfigs" object with 2 example configurations. Just rename/adapt them to your needs. You can define as many configurations as you like. The configuration object has the following properties:')]),a._v(" "),s("ol",[s("li",[s("code",[a._v("url [mandatory, string/url]")]),a._v(": This is the url of the Cubbles Base where the webpackage will be uploaded to.")]),a._v(" "),s("li",[s("code",[a._v("proxy [optional, string/url]")]),a._v(": If your connection to the Cubbles Base is routed over a proxy server, use this attribute to provide the proxy url.")]),a._v(" "),s("li",[s("code",[a._v("dryRun [optional, boolean]")]),a._v(": This option allows you to run the task, without actually uploading anything. It's perfect to check your store permissions or your "),s("code",[a._v(".cubblesignore")]),a._v(" configuration.")]),a._v(" "),s("li",[s("code",[a._v("debug [optional, boolean]")]),a._v(': Set the debug option to "true" to print more details.')])]),a._v(" "),s("p",[a._v("Some real examples of that file are available at "),s("a",{attrs:{href:"https://github.com/iCubbles/chart-library/blob/master/webpackages/com.incowia.lib.chart-library/.webpackage",target:"_blank",rel:"noopener noreferrer"}},[a._v("com.incowia.lib.chart-library"),s("OutboundLink")],1),a._v("\nand "),s("a",{attrs:{href:"https://github.com/iCubbles/cubx-maps/blob/develop/webpackages/cubx-maps/.webpackage",target:"_blank",rel:"noopener noreferrer"}},[a._v("cubx-maps"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("After running the "),s("code",[a._v("+webpackage-upload")]),a._v(" again, you will be able to select one of the defined configurations as follows:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("grunt +webpackage-upload\nCurrently mapped Webpackage: currency-viewer "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("@see "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\\webpackages\\.workspace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n \nRunning "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"+webpackage-upload"')]),a._v(" task\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" Reading available configs from "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'..\\webpackages\\currency-viewer\\.webpackage'")]),a._v("\n? Please "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("type")]),a._v(" the index of your choice to SELECT A CONFIG or to CANCEL the upload:\n  1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" dryRun: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"url"')]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://cubbles.world/sandbox"')]),a._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"proxy"')]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"dryRun"')]),a._v(":true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" release: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"url"')]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://cubbles.world/sandbox"')]),a._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"proxy"')]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" CANCEL\n  Answer: 1\n")])])]),s("h3",{attrs:{id:"ignore-files-from-upload-cubblesignore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ignore-files-from-upload-cubblesignore","aria-hidden":"true"}},[a._v("#")]),a._v(" Ignore files from upload (.cubblesignore)")]),a._v(" "),s("p",[a._v("The "),s("code",[a._v(".cubblesignore")]),a._v(" file allows you to prevent individually defined files and folders from upload. Internally we use the "),s("a",{attrs:{href:"https://www.npmjs.com/package/glob",target:"_blank",rel:"noopener noreferrer"}},[a._v("glob package"),s("OutboundLink")],1),a._v(" - so just read the "),s("a",{attrs:{href:"https://www.npmjs.com/package/glob#glob-primer",target:"_blank",rel:"noopener noreferrer"}},[a._v("glob-primer"),s("OutboundLink")],1),a._v(" for supported patterns.")]),a._v(" "),s("h2",{attrs:{id:"required-permissions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#required-permissions","aria-hidden":"true"}},[a._v("#")]),a._v(" Required Permissions")]),a._v(" "),s("p",[a._v("Uploading a webpackage into a server-side store requires your account to have appropriate permissions.")]),a._v(" "),s("p",[a._v("You can easily check your current permissions for 1..n stores via curl:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -s -X POST -H "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Content-type: application/json"')]),a._v(" https://cubbles.world/_api/authenticate -d "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{"user":"{username}","password":"{password}","stores":["sandbox","shared"]}\'')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"access_token"')]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiMyIsImdyb3VwcyI6WyJiZGUtdGVzdC5kZXZlbG9wZXJzIiwiY29yZS5kZXZlbG9wZXJzIiwiaW5jb3dpYS5kZXZlbG9wZXJzIiwib2Rpbi5kZXZlbG9wZXJzIiwicGNwLXNhbmRib3guZGV2ZWxvcGVycyIsInNhbmRib3guZGV2ZWxvcGVycyJdLCJwZXJtaXNzaW9ucyI6eyJzYW5kYm94Ijp7InVwbG9hZCI6dHJ1ZX19LCJpYXQiOjE0ODgxNzk2NDYsImV4cCI6MTQ4ODE4MzI0Nn0.hg1a7CvY02h3JBF8f8ZL9_mS_J3w-o6eo83nXvHHR1M"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("The response contains an access token. Just use "),s("a",{attrs:{href:"https://jwt.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("JWT"),s("OutboundLink")],1),a._v(" to decode it and look at the permissions property to see for which of the passed stores you have rights for, as presented below:")]),a._v(" "),s("p",[s("img",{attrs:{src:t(192),alt:"JWT decoding app"}})]),a._v(" "),s("h2",{attrs:{id:"perform-an-upload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#perform-an-upload","aria-hidden":"true"}},[a._v("#")]),a._v(" Perform an Upload")]),a._v(" "),s("p",[a._v("To perform an upload, you should:")]),a._v(" "),s("ol",[s("li",[a._v("run the grunt task +webpackage-upload")]),a._v(" "),s("li",[a._v("choose the configuration to be used")]),a._v(" "),s("li",[a._v("provide provide your credentials")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("grunt +webpackage-upload\nCurrently mapped Webpackage: currency-viewer "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("@see "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\\webpackages\\.workspace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n \nRunning "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"+webpackage-upload"')]),a._v(" task\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" Reading available configs from "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'..\\webpackages\\currency-viewer\\.webpackage'")]),a._v("\n? Please "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("type")]),a._v(" the index of your choice to SELECT A CONFIG or to CANCEL the upload: 1\nStarting upload "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n? username: ega\n? password: *************\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" Success:\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ok"')]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(":")]),a._v(" true,\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"id"')]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"my-first-webpackage@0.1.0-SNAPSHOT"')]),a._v(",\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"baseContext"')]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v("     "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"uploadInfos"')]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v("       "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"target"')]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"cubbles.world/sandbox"')]),a._v(",\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v("       "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"date"')]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"2018-09-05T19:52:24.077Z"')]),a._v(",\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v("       "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"user"')]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"8"')]),a._v(",\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v("       "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"client"')]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"cubx-webpackage-uploader-3.3.5"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\nDone, without errors.\n")])])]),s("p",[a._v("Then your webpackage is released and all components are ready to be used.\nUse the "),s("em",[a._v("artifact search")]),a._v(' of the store you uploaded into to see each artifact of your webpackage listed. Gor instance, the url for the "sandbox" store is:  '),s("a",{attrs:{href:"https://cubbles.world/sandbox/cubx.core.artifactsearch@1.6.1/artifactsearch/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://cubbles.world/sandbox/cubx.core.artifactsearch@1.6.1/artifactsearch/index.html"),s("OutboundLink")],1),a._v(". Cubbles stores looks as presented below:")]),a._v(" "),s("p",[s("img",{attrs:{src:t(69),alt:"Cubbles stores UI"}})])])},[],!1,null,null,null);e.default=r.exports},69:function(a,e,t){a.exports=t.p+"assets/img/cubbles_base.71aca59c.png"}}]);