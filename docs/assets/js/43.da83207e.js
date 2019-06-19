(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{258:function(e,t,a){"use strict";a.r(t);var o=a(0),r=Object(o.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"release-a-webpackage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release-a-webpackage","aria-hidden":"true"}},[e._v("#")]),e._v(" Release a webpackage")]),e._v(" "),a("p",[e._v("When releasing a webpackage to need to:")]),e._v(" "),a("ol",[a("li",[e._v("Check if all dependencies are not under development")]),e._v(" "),a("li",[e._v("Update the current version to a fixed version; i.e., without the "),a("code",[e._v("-SNAPSHOT")]),e._v(" suffix")]),e._v(" "),a("li",[e._v("Upload the webpackage to a store")]),e._v(" "),a("li",[e._v("Update the current version to a valid next development version, since no changes can be uploaded to fixed versions")])]),e._v(" "),a("p",[e._v("The "),a("router-link",{attrs:{to:"/coder-devtools-cdt/"}},[e._v("CDT")]),e._v(" offers you the  "),a("code",[e._v("+webpackage-release")]),e._v(" task to release a webpackage. Actually, this task uses three other tasks to perform each step:")],1),e._v(" "),a("ol",[a("li",[e._v("The "),a("router-link",{attrs:{to:"/coder-devtools-cdt/user-guide/prepare-release.html"}},[a("code",[e._v("_webpackage-prepareRelease")])]),e._v(" task to perform "),a("strong",[e._v("steps 1. and 2.")])],1),e._v(" "),a("li",[e._v("The "),a("router-link",{attrs:{to:"/coder-devtools-cdt/user-guide/upload-a-webpackage.html"}},[a("code",[e._v("+webpackage-upload")])]),e._v(" task to perform "),a("strong",[e._v("step 3")]),e._v(".")],1),e._v(" "),a("li",[e._v("The "),a("router-link",{attrs:{to:"/coder-devtools-cdt/user-guide/update-to-next-version.html"}},[a("code",[e._v("_webpackage-updateToNextVersion")])]),e._v(" to perform "),a("strong",[e._v("step 4")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#steps","aria-hidden":"true"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),a("p",[e._v("You should run the task within the CDT folder (normally it is called "),a("em",[e._v("devtools")]),e._v(") as follows:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("grunt  +webpackage-release\n")])])]),a("p",[e._v("Then, each task will be run in the order presented above.")]),e._v(" "),a("blockquote",[a("p",[e._v("Click on the links provided above for each subtask to see further details about each step.")])]),e._v(" "),a("h2",{attrs:{id:"outcome"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outcome","aria-hidden":"true"}},[e._v("#")]),e._v(" Outcome")]),e._v(" "),a("p",[e._v("Your webpackage will be uploaded to a store with a fixed version and the "),a("code",[e._v("manifest.webpackage")]),e._v(" file will end up with the correct next development version.")])])},[],!1,null,null,null);t.default=r.exports}}]);