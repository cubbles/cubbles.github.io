(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{275:function(e,t,a){"use strict";a.r(t);var o=a(0),r=Object(o.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"update-the-rte-version-of-a-webpackage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-the-rte-version-of-a-webpackage","aria-hidden":"true"}},[e._v("#")]),e._v(" Update the RTE version of a webpackage")]),e._v(" "),a("p",[e._v("Sometimes you may be interested in updating the used RTE version of a webpackage. That is, to refactor the demo, docs and manifest files. The "),a("router-link",{attrs:{to:"/coder-devtools-cdt/"}},[e._v("CDT")]),e._v(" offers the "),a("code",[e._v("_webpackage-updateRte")]),e._v(" task to perform that process automatically.")],1),e._v(" "),a("h2",{attrs:{id:"purpose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purpose","aria-hidden":"true"}},[e._v("#")]),e._v(" Purpose")]),e._v(" "),a("p",[e._v("To describe how to update the RTE used by the components of a webpackage using the  "),a("code",[e._v("_webpackage-updateRte")]),e._v(" task.")]),e._v(" "),a("h2",{attrs:{id:"steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#steps","aria-hidden":"true"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),a("p",[e._v("First, you should run the task within the CDT folder (normally it is called "),a("em",[e._v("devtools")]),e._v(") as follows:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("grunt  _webpackage-updateRte\n")])])]),a("p",[e._v("Second, you should type the version to be used. It should have the proper format; i.e., a one, two or three dot-separated digits, with a "),a("em",[e._v("-SNAPSHOT")]),e._v(" suffix for developing versions: For example, 2.4, 3.0.0 or 3.0.0-SNAPSHOT")]),e._v(" "),a("h2",{attrs:{id:"outcome"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outcome","aria-hidden":"true"}},[e._v("#")]),e._v(" Outcome")]),e._v(" "),a("p",[e._v("The dependencies and runnables of each artifact in the manifest.webpackage file will be refactored to use the new RTE version.")]),e._v(" "),a("blockquote",[a("p",[e._v("Note that if you choose to update the RTE to 3.0.0 or above, the runnables will be fixed. However, you would have to fix the resources of all elementary components in the webpackage to meet RTE@3.x requirements.")])]),e._v(" "),a("h2",{attrs:{id:"the-npm-module-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-npm-module-version","aria-hidden":"true"}},[e._v("#")]),e._v(" The npm module version")]),e._v(" "),a("p",[e._v("You can use an npm module that serves the same purposes called "),a("a",{attrs:{href:"https://www.npmjs.com/package/cubx-webpackage-rte-update",target:"_blank",rel:"noopener noreferrer"}},[e._v("cubx-webpackage-rte-update"),a("OutboundLink")],1),e._v(". The module can be used from the command line or in a node script.")])])},[],!1,null,null,null);t.default=r.exports}}]);