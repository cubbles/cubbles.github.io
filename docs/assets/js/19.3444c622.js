(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{192:function(t,e,a){t.exports=a.p+"assets/img/elementary-with-vanilla-boilerplate.cfdec282.png"},267:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"developing-elementaries-using-the-vanilla-boilerplate"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#developing-elementaries-using-the-vanilla-boilerplate","aria-hidden":"true"}},[t._v("#")]),t._v(" Developing elementaries using the vanilla boilerplate")]),t._v(" "),n("p",[t._v("The easiest way to develop Cubbles elementaries is to modify the base sample contained in the vanilla boilerplate. In this section, we will give some recommendations to help you with that process. Below, we present an overview of the development process of a compound:")]),t._v(" "),n("p",[n("img",{attrs:{src:a(192),alt:"Developing a elementary with the vanilla boilerplate"}})]),t._v(" "),n("h2",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),n("p",[t._v("To start developing Cubbles elementaries using the vanilla boilerplate, this should be cloned locally and all dependencies should be installed (See "),n("router-link",{attrs:{to:"/developing-vanilla-boilerplate/creating-project.html"}},[t._v("this guide")]),t._v(" for more information).")],1),t._v(" "),n("h2",{attrs:{id:"development-considerations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#development-considerations","aria-hidden":"true"}},[t._v("#")]),t._v(" Development considerations")]),t._v(" "),n("p",[t._v("The "),n("code",[t._v("vanilla boilerplate")]),t._v(" includes a boilerplate for an elementary component called "),n("code",[t._v("elem1")]),t._v(". An elementary component has a manifest definition, a logic, and a view. You should rename this folder according to your needs. The name of the folder will be used to set the "),n("code",[t._v("artifactId")]),t._v(" of your elementary in the built version of the final manifest.")]),t._v(" "),n("p",[t._v("Additionally, you should edit the following files according to your needs:")]),t._v(" "),n("h3",{attrs:{id:"the-manifest-elementary-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-manifest-elementary-js","aria-hidden":"true"}},[t._v("#")]),t._v(" The "),n("strong",[t._v("MANIFEST.elementary.js")])]),t._v(" "),n("p",[t._v("It contains only the "),n("router-link",{attrs:{to:"/terms-and-concepts/artifacts.html#artifact-definition"}},[t._v("manifest definition")]),t._v(" of the elementary. As you may notice, it is a javascript script; thus, you have more freedom to play with the definition, but after building, it should be JSON and "),n("a",{attrs:{href:"http://cubbles.github.io/cubx-webpackage-document-api/schema-explorer.html?schemaPath=https://raw.githubusercontent.com/cubbles/coder-toolset/develop/packages/webpackage-document-api/lib/jsonSchema/manifestWebpackage-10.1.0.schema.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cubbles manifest"),n("OutboundLink")],1),t._v(" valid.")],1),t._v(" "),n("p",[t._v("The following are the valid properties of an elementary manifest definition:")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"artifactId"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set automatically during building process")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"resources"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"slots"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dependencies"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"runnables"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dependencyExcludes"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A description"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("blockquote",[n("p",[t._v("Check "),n("a",{attrs:{href:"http://cubbles.github.io/cubx-webpackage-document-api/schema-explorer.html?schemaPath=https://raw.githubusercontent.com/cubbles/coder-toolset/develop/packages/webpackage-document-api/lib/jsonSchema/manifestWebpackage-10.1.0.schema.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("this"),n("OutboundLink")],1),t._v(" to know the type and structure of values that each property can take.")])]),t._v(" "),n("h4",{attrs:{id:"about-the-artifactid"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#about-the-artifactid","aria-hidden":"true"}},[t._v("#")]),t._v(" About the artifactId")]),t._v(" "),n("p",[t._v("The "),n("code",[t._v("artifactId")]),t._v(" of your elementary is set automatically during the building process. By default it has the following format: "),n("code",[t._v("[webpackageId]-[artifactId]")]),t._v(". The "),n("code",[t._v("webpackageId")]),t._v(" will be determined from the "),n("code",[t._v("name")]),t._v(" property of the "),n("code",[t._v("package.json")]),t._v(" file. And the "),n("code",[t._v("artifactId")]),t._v(" will be based on the name of the folder that contains the component.")]),t._v(" "),n("p",[t._v("For instance, the artifactId of the "),n("code",[t._v("elem1")]),t._v(" elementary contained in "),n("code",[t._v("vanilla boilerplate")]),t._v(" will be "),n("code",[t._v("cubbles-vanilla-boilerplate-elem1")]),t._v(", since the "),n("code",[t._v("name")]),t._v(" property of the "),n("code",[t._v("package.json file")]),t._v(" is "),n("em",[t._v("@cubbles/vanilla-boilerplate")]),t._v(" and the container folder is called "),n("em",[t._v("elem1")]),t._v(". Note that the special characters (i.e., @ and /) of the name property were removed since "),n("code",[t._v("artifactIds")]),t._v(" should be valid HTML elements names.")]),t._v(" "),n("h3",{attrs:{id:"the-element-html-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-element-html-file","aria-hidden":"true"}},[t._v("#")]),t._v(" The "),n("strong",[t._v("element.html")]),t._v(" file")]),t._v(" "),n("p",[t._v("It contains the view of the elementary. You should remove the sample code except for "),n("code",[t._v("<template>")]),t._v(" tag, here you should add the html code of your elementary. Also, have into account that the "),n("code",[t._v('id="<%= elementName %>"')]),t._v(" attribute of that tag will be replaced with the "),n("code",[t._v("artifactId")]),t._v(" defined in the "),n("code",[t._v("MANIFEST.elementary.js")]),t._v(". If you remove this attribute your elementary will not work properly. Similarly, if you hard code the id attribute and then change the artifactId in the manifest, you will have to update this manually or the elementary will not work. So, after edition your "),n("code",[t._v("element.html")]),t._v(" file may look as follows:")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("<%= elementName %>"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ... Your own code goes here\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("h3",{attrs:{id:"the-element-js-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-element-js-file","aria-hidden":"true"}},[t._v("#")]),t._v(" The "),n("strong",[t._v("element.js")]),t._v(" file")]),t._v(" "),n("p",[t._v("This file contains the logic of the sample elementary. To define the behavior of an elementary you should use the "),n("router-link",{attrs:{to:"/runtime-extension-rte/user-guide/cubbles-js-api/inside-interaction.html#the-cubxcomponent-object"}},[t._v("CubxComponent")]),t._v(". The most important step is to define the "),n("code",[t._v("is")]),t._v(" property of this object using the "),n("code",[t._v("artifactId")]),t._v(" of the elementary, which is defined automatically during the building process. Then, if you want/need, you can define the life cycle associated methods of an elementary. Also, you may want to add listeners for changes in the slot values and implement additional methods to control the behavior of your elementary.")],1),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// imports")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("CubxComponent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    is"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/* @echo elementName */'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Life cycle methods")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("created")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("ready")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("connected")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("disconnected")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("contextReady")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Slot changes listeners")]),t._v("\n    model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SlotId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Changed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Additional code")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("yorOwnMethod")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("Since the "),n("code",[t._v("vanilla boilerplate")]),t._v(" uses "),n("a",{attrs:{href:"https://webpack.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack"),n("OutboundLink")],1),t._v(" to build a distribution version of the webpackage and uses "),n("a",{attrs:{href:"https://www.npmjs.com/package/preprocess-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("preprocess-loader"),n("OutboundLink")],1),t._v(" and "),n("a",{attrs:{href:"https://webpack.js.org/loaders/babel-loader/",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel-loader"),n("OutboundLink")],1),t._v(" to load javascript files, you can import other scripts and style files, which are loaded with "),n("a",{attrs:{href:"https://webpack.js.org/loaders/style-loader/",target:"_blank",rel:"noopener noreferrer"}},[t._v("style-loader"),n("OutboundLink")],1),t._v(", "),n("a",{attrs:{href:"https://webpack.js.org/loaders/css-loader/",target:"_blank",rel:"noopener noreferrer"}},[t._v("css-loader"),n("OutboundLink")],1),t._v(" and "),n("a",{attrs:{href:"https://webpack.js.org/loaders/postcss-loader/",target:"_blank",rel:"noopener noreferrer"}},[t._v("postcss-loader"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("h3",{attrs:{id:"the-element-sss-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-element-sss-file","aria-hidden":"true"}},[t._v("#")]),t._v(" The "),n("strong",[t._v("element.sss")]),t._v(" file")]),t._v(" "),n("p",[t._v("It contains the style of the sample elementary using "),n("a",{attrs:{href:"https://github.com/postcss/sugarss",target:"_blank",rel:"noopener noreferrer"}},[t._v("sugarss"),n("OutboundLink")],1),t._v(". It could also be a CSS style sheet. As you may have noticed, in this sample elementary, this style was imported in the "),n("code",[t._v("element.js")]),t._v(" file.")]),t._v(" "),n("h3",{attrs:{id:"the-showroom-html-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-showroom-html-file","aria-hidden":"true"}},[t._v("#")]),t._v(" The "),n("strong",[t._v("SHOWROOM.html")]),t._v(" file")]),t._v(" "),n("p",[t._v("After building your webpackage, the dist version of this file will have a working demo of your elementary. You don't need to add any code to make to work unless you want to improve it.")]),t._v(" "),n("h2",{attrs:{id:"testing-your-elementary"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#testing-your-elementary","aria-hidden":"true"}},[t._v("#")]),t._v(" Testing your elementary")]),t._v(" "),n("p",[t._v("While developing your compound, you can run the "),n("code",[t._v("npm run build")]),t._v(" command to build a developing dist version of your webpackage. Then, you should run the "),n("code",[t._v("npm run start")]),t._v(" command to start a local web server and be able to run "),n("code",[t._v("SHOWROOM.html")]),t._v(" file to watch your component working.")]),t._v(" "),n("p",[t._v("For more information about those and other commands, check "),n("router-link",{attrs:{to:"/developing-vanilla-boilerplate/available-scripts.html"}},[t._v("this guide")]),t._v(".")],1)])},[],!1,null,null,null);e.default=s.exports}}]);