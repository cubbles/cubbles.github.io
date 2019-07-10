(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{195:function(t,e,a){t.exports=a.p+"assets/img/compound-with-vanilla-boilerplate.00f9a74f.png"},245:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"developing-compounds"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#developing-compounds","aria-hidden":"true"}},[t._v("#")]),t._v(" Developing compounds")]),t._v(" "),s("p",[t._v("The easiest way to develop Cubbles compounds is to modify the base sample contained in the vanilla boilerplate. In this section, we will give you some recommendations to help you with that process. Below, we present an overview of the development process of a compound:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(195),alt:"Developing a compound with the vanilla boilerplate"}})]),t._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),s("p",[t._v("To start developing Cubbles compounds using the vanilla boilerplate, this should be cloned locally and all its dependencies should be installed (See "),s("a",{attrs:{href:"../creating-project"}},[t._v("this guide")]),t._v(" for more information).")]),t._v(" "),s("h2",{attrs:{id:"development-considerations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#development-considerations","aria-hidden":"true"}},[t._v("#")]),t._v(" Development considerations")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("vanilla boilerplate")]),t._v(" includes a boilerplate for a compound component called "),s("code",[t._v("compound1")]),t._v(". A compound component has a manifest definition and optionally a view. You should rename its container folder according to your needs. The name of the folder will be used to set the "),s("code",[t._v("artifactId")]),t._v(" of your compound in the dist version of the final manifest.")]),t._v(" "),s("p",[t._v("Additionally, you should edit the following files according to your needs:")]),t._v(" "),s("h3",{attrs:{id:"the-manifest-compound-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-manifest-compound-js","aria-hidden":"true"}},[t._v("#")]),t._v(" The "),s("strong",[t._v("MANIFEST.compound.js")])]),t._v(" "),s("p",[t._v("It contains only the "),s("router-link",{attrs:{to:"/user-guide/terms-and-concepts/artifacts.html#artifact-definition"}},[t._v("manifest definition")]),t._v(" of the compound. As you may notice, it is a javascript script; thus, you have more freedom to play with the definition, but after building, it should be JSON and "),s("a",{attrs:{href:"http://cubbles.github.io/cubx-webpackage-document-api/schema-explorer.html?schemaPath=https://raw.githubusercontent.com/cubbles/coder-toolset/develop/packages/webpackage-document-api/lib/jsonSchema/manifestWebpackage-10.1.0.schema.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cubbles manifest"),s("OutboundLink")],1),t._v(" valid.")],1),t._v(" "),s("p",[t._v("The following are the valid properties of an elementary manifest definition:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"artifactId"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set automatically during building process")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"resources"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"members"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"connections"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"slots"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inits"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dependencies"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"runnables"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dependencyExcludes"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A description"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("Check "),s("a",{attrs:{href:"http://cubbles.github.io/cubx-webpackage-document-api/schema-explorer.html?schemaPath=https://raw.githubusercontent.com/cubbles/coder-toolset/develop/packages/webpackage-document-api/lib/jsonSchema/manifestWebpackage-10.1.0.schema.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("this"),s("OutboundLink")],1),t._v(" to know the type and structure of values that each property can take.")])]),t._v(" "),s("h4",{attrs:{id:"about-the-artifactid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#about-the-artifactid","aria-hidden":"true"}},[t._v("#")]),t._v(" About the artifactId")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("artifactId")]),t._v(" of your compound is set automatically during the building process. By default it has the following format: "),s("code",[t._v("[webpackageId]-[artifactId]")]),t._v(". The "),s("code",[t._v("webpackageId")]),t._v(" will be determined from the "),s("code",[t._v("name")]),t._v(" property of the "),s("code",[t._v("package.json")]),t._v(" file. And the "),s("code",[t._v("artifactId")]),t._v(" will be based on the name of the folder that contains the component.")]),t._v(" "),s("p",[t._v("For instance, the artifactId of the "),s("code",[t._v("compound1")]),t._v(" compound contained in "),s("code",[t._v("vanilla boilerplate")]),t._v(" will be "),s("code",[t._v("cubbles-vanilla-boilerplate-compound1")]),t._v(", since the "),s("code",[t._v("name")]),t._v(" property of the "),s("code",[t._v("package.json file")]),t._v(" is "),s("em",[t._v("@cubbles/vanilla boilerplate")]),t._v(" and the container folder is called "),s("em",[t._v("compound1")]),t._v(". Note that the special characters (i.e., @ and /) of the name property were removed since "),s("code",[t._v("artifactIds")]),t._v(" should be valid HTML elements names.")]),t._v(" "),s("h3",{attrs:{id:"the-element-html-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-element-html-file","aria-hidden":"true"}},[t._v("#")]),t._v(" The "),s("strong",[t._v("element.html")]),t._v(" file")]),t._v(" "),s("p",[t._v("It contains the view of the compound. You can remove the sample code except for "),s("code",[t._v("<template>")]),t._v(" tag, inside you should add the html code of your elementary. Also, have into account that the "),s("code",[t._v('id="<%= elementName %>"')]),t._v(" attribute of that tag will be replaced with the "),s("code",[t._v("artifactId")]),t._v(" defined in the "),s("code",[t._v("MANIFEST.compound.js")]),t._v(". If you remove this attribute your elementary will not work properly. Similarly, if you hard code the id attribute and then change the artifactId in the manifest, you will have to update this manually or the elementary will not work. So, after edition your "),s("code",[t._v("element.html")]),t._v(" file may look as follows:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("<%= elementName %>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ... Your own code goes here\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Members --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("member-artifact-id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("member-id-ref")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("memberId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("member-artifact-id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"the-element-js-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-element-js-file","aria-hidden":"true"}},[t._v("#")]),t._v(" The "),s("strong",[t._v("element.js")]),t._v(" file")]),t._v(" "),s("p",[t._v("Remember that compound components don't have logic, they behave according to the members they contain. Thus, this script will serve, for example, to import styles or implement some auxiliary function. Accordingly, this file is optional and you can remove if desired.")]),t._v(" "),s("p",[t._v("Note that imports are managed by "),s("a",{attrs:{href:"https://webpack.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack"),s("OutboundLink")],1),t._v(" when building a distribution version of the webpackage. "),s("a",{attrs:{href:"https://www.npmjs.com/package/preprocess-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("preprocess-loader"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://webpack.js.org/loaders/babel-loader/",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel-loader"),s("OutboundLink")],1),t._v(" is used to load javascript files. Meanwhile, "),s("a",{attrs:{href:"https://webpack.js.org/loaders/style-loader/",target:"_blank",rel:"noopener noreferrer"}},[t._v("style-loader"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://webpack.js.org/loaders/css-loader/",target:"_blank",rel:"noopener noreferrer"}},[t._v("css-loader"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://webpack.js.org/loaders/postcss-loader/",target:"_blank",rel:"noopener noreferrer"}},[t._v("postcss-loader"),s("OutboundLink")],1),t._v(" are used to load styles.")]),t._v(" "),s("h3",{attrs:{id:"the-element-sss-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-element-sss-file","aria-hidden":"true"}},[t._v("#")]),t._v(" The "),s("strong",[t._v("element.sss")]),t._v(" file")]),t._v(" "),s("p",[t._v("It contains the style of the sample elementary using "),s("a",{attrs:{href:"https://github.com/postcss/sugarss",target:"_blank",rel:"noopener noreferrer"}},[t._v("sugarss"),s("OutboundLink")],1),t._v(". It could also be a CSS style sheet. As you may have noticed, in this sample elementary, this style was imported in the "),s("code",[t._v("element.js")]),t._v(" file.")]),t._v(" "),s("h3",{attrs:{id:"the-showroom-html-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-showroom-html-file","aria-hidden":"true"}},[t._v("#")]),t._v(" The "),s("strong",[t._v("SHOWROOM.html")]),t._v(" file")]),t._v(" "),s("p",[t._v("After building your webpackage, the dist version of this file will have a working demo of your compound. You don't need to add any code to make to work unless you want to improve it.")]),t._v(" "),s("h2",{attrs:{id:"testing-your-compound"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing-your-compound","aria-hidden":"true"}},[t._v("#")]),t._v(" Testing your compound")]),t._v(" "),s("p",[t._v("While developing your compound, you can run the "),s("code",[t._v("npm run build")]),t._v(" command to build a developing dist version of your webpackage. Then, you should run the "),s("code",[t._v("npm run start")]),t._v(" command to start a local web server and be able to run "),s("code",[t._v("SHOWROOM.html")]),t._v(" file to watch your component working.")]),t._v(" "),s("p",[t._v("For more information about those and other commands, check "),s("a",{attrs:{href:"../available-scripts"}},[t._v("this guide")]),t._v(".")])])},[],!1,null,null,null);e.default=n.exports}}]);