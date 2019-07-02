(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{187:function(e,t,o){e.exports=o.p+"assets/img/component_test_folder.169259e9.png"},275:function(e,t,o){"use strict";o.r(t);var n=o(0),a=Object(n.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"generate-a-test-environment-for-a-component"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#generate-a-test-environment-for-a-component","aria-hidden":"true"}},[e._v("#")]),e._v(" Generate a test environment for a component")]),e._v(" "),n("p",[e._v("The "),n("router-link",{attrs:{to:"/coder-devtools-cdt/"}},[e._v("CDT")]),e._v(" offers the "),n("code",[e._v("_generateArtifactWctScaffold")]),e._v(" task to generate unit tests for your Cubbles components, which is based on "),n("a",{attrs:{href:"https://www.npmjs.com/package/web-component-tester/v/4.2.2",target:"_blank",rel:"noopener noreferrer"}},[e._v("web-component-tester v. 4.2.2"),n("OutboundLink")],1),e._v(". You can test your cubbles components using "),n("a",{attrs:{href:"https://mochajs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mocha"),n("OutboundLink")],1),e._v(" as test framework and "),n("a",{attrs:{href:"https://www.chaijs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chai"),n("OutboundLink")],1),e._v(" for assertions.")],1),e._v(" "),n("h2",{attrs:{id:"purpose"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#purpose","aria-hidden":"true"}},[e._v("#")]),e._v(" Purpose")]),e._v(" "),n("p",[e._v("To show how to generate a test environment for your Cubbles components using the "),n("code",[e._v("_generateArtifactWctScaffold")]),e._v(" and how to test them.")]),e._v(" "),n("h2",{attrs:{id:"steps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#steps","aria-hidden":"true"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),n("p",[e._v("First, you should run the task within the CDT folder (normally it is called "),n("em",[e._v("devtools")]),e._v(") as follows:")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("grunt _generateArtifactWctScaffold\n")])])]),n("p",[e._v("Then, a list of the components of the "),n("router-link",{attrs:{to:"/coder-devtools-cdt/user-guide/change-active-webpackage.html"}},[e._v("current active webpackage")]),e._v(" will be displayed. You should choose the component to be tested typing its index. In the example below, we have chosen to generate a test environment for the second component of the list:")],1),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("? Please choose the artifact\n  1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" elem-one\n  2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" compound-two\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Move up and down to reveal "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("more")]),e._v(" choices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  Answer: 2\n")])])]),n("h2",{attrs:{id:"outcome"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#outcome","aria-hidden":"true"}},[e._v("#")]),e._v(" Outcome")]),e._v(" "),n("p",[e._v("A folder called "),n("em",[e._v("test")]),e._v(" will be generated in the folder of the selected component.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(187),alt:"Component test generated folder"}})]),e._v(" "),n("p",[e._v("The folder will contain the following files:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("index.html")]),e._v(": the index webpage to run the tests in a browser.")]),e._v(" "),n("li",[n("strong",[e._v("[artifactId]-test.html")]),e._v(": a webpage containing the component to be tested and importing the required scripts.")]),e._v(" "),n("li",[n("strong",[e._v("[artifactId[-test.js")]),e._v(": script to write the unit tests of your component.")]),e._v(" "),n("li",[n("strong",[e._v("grunt-wct-test-config.js")]),e._v(", "),n("strong",[e._v("mocha-config.js")]),e._v(" and "),n("strong",[e._v("wct.conf.js")]),e._v(": configuration files for the test environment of the component.")])]),e._v(" "),n("p",[e._v("After generating the files, you will get a message similar to the one presented below:")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("info: finished generation files in: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/my-first-project/webpackages/my-second-webpackage/compound-two/test\n")])])]),n("h2",{attrs:{id:"the-npm-module-version"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-npm-module-version","aria-hidden":"true"}},[e._v("#")]),e._v(" The npm module version")]),e._v(" "),n("p",[e._v("You can use an npm module that serves the same purposes called "),n("a",{attrs:{href:"https://www.npmjs.com/package/cubx-wct-scaffolder",target:"_blank",rel:"noopener noreferrer"}},[e._v("cubx-wct-scaffolder"),n("OutboundLink")],1),e._v(". The module can be used from the command line or in a node script.")]),e._v(" "),n("h2",{attrs:{id:"further-details"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#further-details","aria-hidden":"true"}},[e._v("#")]),e._v(" Further details")]),e._v(" "),n("p",[e._v("To know how to write unit tests for you components check "),n("router-link",{attrs:{to:"/coder-devtools-cdt/user-guide/testing-components.html"}},[e._v("this tutorial")]),e._v(".")],1)])},[],!1,null,null,null);t.default=a.exports}}]);