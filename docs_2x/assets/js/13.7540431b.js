(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{190:function(e,t,n){e.exports=n.p+"assets/img/component_test_folder.169259e9.png"},264:function(e,t,n){"use strict";n.r(t);var a=n(0),o=Object(a.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"generate-a-test-environment-for-a-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate-a-test-environment-for-a-component","aria-hidden":"true"}},[e._v("#")]),e._v(" Generate a test environment for a component")]),e._v(" "),a("p",[e._v("The CDT offers the "),a("code",[e._v("_generateArtifactWctScaffold")]),e._v(" task to generate unit tests for your Cubbles components, which is based on "),a("a",{attrs:{href:"https://www.npmjs.com/package/web-component-tester/v/4.2.2",target:"_blank",rel:"noopener noreferrer"}},[e._v("web-component-tester v. 4.2.2"),a("OutboundLink")],1),e._v(". You can test your cubbles components using "),a("a",{attrs:{href:"https://mochajs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mocha"),a("OutboundLink")],1),e._v(" as test framework and "),a("a",{attrs:{href:"https://www.chaijs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chai"),a("OutboundLink")],1),e._v(" for assertions.")]),e._v(" "),a("h2",{attrs:{id:"purpose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purpose","aria-hidden":"true"}},[e._v("#")]),e._v(" Purpose")]),e._v(" "),a("p",[e._v("To show how to generate a test environment for your Cubbles components using the "),a("code",[e._v("_generateArtifactWctScaffold")]),e._v(" and how to test them.")]),e._v(" "),a("h2",{attrs:{id:"steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#steps","aria-hidden":"true"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),a("p",[e._v("First, you should run the task within the CDT folder (normally it is called "),a("em",[e._v("devtools")]),e._v(") as follows:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("grunt _generateArtifactWctScaffold\n")])])]),a("p",[e._v("Then, a list of the components of the "),a("router-link",{attrs:{to:"/developer-guide/coder-devtools-cdt/change-active-webpackage.html"}},[e._v("current active webpackage")]),e._v(" will be displayed. You should choose the component to be tested typing its index. In the example below, we have chosen to generate a test environment for the second component of the list:")],1),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("? Please choose the artifact\n  1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" elem-one\n  2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" compound-two\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Move up and down to reveal "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("more")]),e._v(" choices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  Answer: 2\n")])])]),a("h2",{attrs:{id:"outcome"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outcome","aria-hidden":"true"}},[e._v("#")]),e._v(" Outcome")]),e._v(" "),a("p",[e._v("A folder called "),a("em",[e._v("test")]),e._v(" will be generated in the folder of the selected component.")]),e._v(" "),a("p",[a("img",{attrs:{src:n(190),alt:"Component test generated folder"}})]),e._v(" "),a("p",[e._v("The folder will contain the following files:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("index.html")]),e._v(": the index webpage to run the tests in a browser.")]),e._v(" "),a("li",[a("strong",[e._v("[artifactId]-test.html")]),e._v(": a webpage containing the component to be tested and importing the required scripts.")]),e._v(" "),a("li",[a("strong",[e._v("[artifactId[-test.js")]),e._v(": script to write the unit tests of your component.")]),e._v(" "),a("li",[a("strong",[e._v("grunt-wct-test-config.js")]),e._v(", "),a("strong",[e._v("mocha-config.js")]),e._v(" and "),a("strong",[e._v("wct.conf.js")]),e._v(": configuration files for the test environment of the component.")])]),e._v(" "),a("p",[e._v("After generating the files, you will get a message similar to the one presented below:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("info: finished generation files in: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/my-first-project/webpackages/my-second-webpackage/compound-two/test\n")])])]),a("h2",{attrs:{id:"the-npm-module-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-npm-module-version","aria-hidden":"true"}},[e._v("#")]),e._v(" The npm module version")]),e._v(" "),a("p",[e._v("You can use an npm module that serves the same purposes called "),a("a",{attrs:{href:"https://www.npmjs.com/package/cubx-wct-scaffolder",target:"_blank",rel:"noopener noreferrer"}},[e._v("cubx-wct-scaffolder"),a("OutboundLink")],1),e._v(". The module can be used from the command line or in a node script.")]),e._v(" "),a("h2",{attrs:{id:"further-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-details","aria-hidden":"true"}},[e._v("#")]),e._v(" Further details")]),e._v(" "),a("p",[e._v("To know how to write unit tests for you components check "),a("router-link",{attrs:{to:"/developer-guide/coder-devtools-cdt/testing-components.html"}},[e._v("this tutorial")]),e._v(".")],1)])},[],!1,null,null,null);t.default=o.exports}}]);