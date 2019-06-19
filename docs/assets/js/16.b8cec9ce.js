(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{188:function(e,t,a){e.exports=a.p+"assets/img/readme_file.da6ab555.png"},278:function(e,t,a){"use strict";a.r(t);var o=a(0),s=Object(o.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"generate-a-readme-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#generate-a-readme-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Generate a README file")]),e._v(" "),o("p",[e._v("When you have developed a webpackage, it may be useful to include a README file indicating the artifacts it contains and an example describing how to use one of the components it contains. The "),o("router-link",{attrs:{to:"/coder-devtools-cdt/"}},[e._v("CDT")]),e._v(" provides you with a task to generate a README file for your package automatically. The task is called "),o("code",[e._v("+webpackage-generateReadmeFile")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"purpose"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#purpose","aria-hidden":"true"}},[e._v("#")]),e._v(" Purpose")]),e._v(" "),o("p",[e._v("To generate a README file for the current webpackage (which can be set in the "),o("code",[e._v("project/webpackages/.workspace")]),e._v(" file). The file should present:")]),e._v(" "),o("ul",[o("li",[e._v("A list of artifacts of a webpackage")]),e._v(" "),o("li",[e._v("A demo code indicating how to use a component of that webpackage")]),e._v(" "),o("li",[e._v("A demo code indicating how to initialise that component")])]),e._v(" "),o("p",[e._v("The expected output is a file similar to the one presented this "),o("a",{attrs:{href:"https://github.com/iCubbles/my-first-project/blob/master/webpackages/my-first-webpackage/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("README.md file"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"use-case"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#use-case","aria-hidden":"true"}},[e._v("#")]),e._v(" Use case")]),e._v(" "),o("p",[e._v("In this tutorial, we will generate a README file for the webpackage we created in the "),o("router-link",{attrs:{to:"/first-steps/create-a-webpackage.html"}},[e._v("Create a webpackage")]),e._v(" tutorial to describe each step. However, the process is the same for all webpackages.")],1),e._v(" "),o("h2",{attrs:{id:"steps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#steps","aria-hidden":"true"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),o("p",[e._v("To generate the README file, you should run the task following task:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("grunt +webpackage-generateReadmeFile\n")])])]),o("p",[e._v('Then, you will be asked to provide a description for your webpackage. For our case it will be "Webpackage to demonstrate the use of Cubbles components".')]),e._v(" "),o("p",[e._v('After that, you should provide the name of the base where the webpackage is or will be hosted. In our case, it is "sandbox".')]),e._v(" "),o("p",[e._v('Then, you should indicate whether you want to include a demo code using a component. If you don\'t want to generate a demo, type "n"; otherwise, type "Y". In the negative case, the process wil finish. We will type "Y" to generate the code.')]),e._v(" "),o("p",[e._v("Now, a list with the components of the current webpackage will be displayed. You should choose the one to be used to generate the demo code. In our case, we will choose the "),o("code",[e._v("currency-converter")]),e._v(" component.")]),e._v(" "),o("p",[e._v('Then, if the chosen component has input slots, you should indicate whether you want to include a demo code to show how to init your component in the HTML code. As previously, you should type "Y" or "n". In our case, we type "Y".')]),e._v(" "),o("p",[e._v("After that, a list with the available slots will be displayed. You should choose the one to be used to init the demo component. In our case, we will choose the "),o("code",[e._v("base")]),e._v(" slot.")]),e._v(" "),o("p",[e._v('Finally, you should provide the value for that slot. In this case, it will be "EUR".')]),e._v(" "),o("p",[e._v("The whole process is illustrated below:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('$ grunt +webpackage-generateReadmeFile\nCurrently mapped Webpackage: my-first-webpackage (@see ../webpackages/.workspace)\n\nRunning "+webpackage-generateReadmeFile" task\n? Provide a short description of the webpackage Webpackage to demonstrate the use of Cubbles components\n? Provide the name of the base or store where the webpackage will be available sandbox\n? Would you like to include a demo using one component? Yes\n? Provide the artifactId of the component to be use as demo. currency-converter\n? Would you like to include a demo on how to initialise the component? Yes\n? Select the name of the slot to be used to initialise the demo component. base\n? Provide the value of the slot to be used to initialise the demo component. "EUR"\n\nDone, without errors.\n')])])]),o("p",[e._v("A "),o("strong",[e._v("README.md")]),e._v(" file will be generated in the folder of the current webpackage.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(188),alt:"Webpackage folder containing the generated README file"}})]),e._v(" "),o("h2",{attrs:{id:"the-npm-module-version"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-npm-module-version","aria-hidden":"true"}},[e._v("#")]),e._v(" The npm module version")]),e._v(" "),o("p",[e._v("You can use an npm module that serves the same purposes called "),o("a",{attrs:{href:"https://www.npmjs.com/package/cubx-generate-webpackage-readme-file",target:"_blank",rel:"noopener noreferrer"}},[e._v("cubx-generate-webpackage-readme-file"),o("OutboundLink")],1),e._v(". The module can be used from the command line or in a node script.")])])},[],!1,null,null,null);t.default=s.exports}}]);