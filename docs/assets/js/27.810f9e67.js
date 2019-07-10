(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{229:function(e,t,r){"use strict";r.r(t);var n=r(0),s=Object(n.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"what-do-i-have-to-do-to-load-the-optimized-resources-of-the-component"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-do-i-have-to-do-to-load-the-optimized-resources-of-the-component","aria-hidden":"true"}},[e._v("#")]),e._v(" What do I have to do to load the optimized resources of the component?")]),e._v(" "),r("p",[e._v("If we want not load the resources automatically, becouse for example we want optimize the loading time.\nThe following steps are to do:")]),e._v(" "),r("ol",[r("li",[e._v("Download (and optimize) all resources.")]),e._v(" "),r("li",[e._v("Turn off resource injection in RTE.")]),e._v(" "),r("li",[e._v('Add the resources manually (after recived "crcBeforeResourceInjection" event).')]),e._v(" "),r("li",[e._v('Fire event "crcDepMgrReady".')])]),e._v(" "),r("h2",{attrs:{id:"download-and-optimize-all-resources"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#download-and-optimize-all-resources","aria-hidden":"true"}},[e._v("#")]),e._v(" Download (and optimize) all resources")]),e._v(" "),r("p",[e._v("If you not want calculate and download all dependencies manually,"),r("br"),e._v("\nyou can use the "),r("code",[e._v("cubx-resource-resolver")]),e._v(" npm module for download and put together the single recources.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("const ResourceResolver = require('cubx-resource-resolver');\nlet resourceResolver = new ResourceResolver(mode);\nlet rootDependencies = [\n  {webpackageId: 'cubx.core.rte@2.5.2', artifactId: 'cif'},\n  {webpackageId: 'lodash-3.10.1@1.1.0', artifactId: 'lodash'}\n  // etc ...\n];\nlet outputDir = 'cubbles-resources';\nlet baseUrl = 'https://cubbles.world/sandbox';\n\nlet promise = resourceResolver.resolve(rootDependencies, outputDir, baseUrl, rootDependencyExcludes)\n")])])]),r("p",[e._v("This calculate all nessecary dependencies outgoing from rootDependencies, download the resources of the dependencies and create the four joined resource files in the output dircetory:")]),e._v(" "),r("ul",[r("li",[e._v("html-import-scripts.js (jointed scripts from html-import resources, referenced by html-imports.html)")]),e._v(" "),r("li",[e._v("html-imports.html (jointed html-import resources)")]),e._v(" "),r("li",[e._v("scripts.js (jointed script resources)")]),e._v(" "),r("li",[e._v("styles.css (jointed css resources)")])]),e._v(" "),r("h2",{attrs:{id:"turn-off-resource-injection-in-rte"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#turn-off-resource-injection-in-rte","aria-hidden":"true"}},[e._v("#")]),e._v(" Turn off resource injection in RTE")]),e._v(" "),r("p",[e._v("Configure "),r("code",[e._v("disableResourceInjection")]),e._v(", so that the RTE not inject resources automatically.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("window.cubx = {\n    CRCInit: {\n      disableResourceInjection: true,\n      ...\n    }\n}\n      \n")])])]),r("h2",{attrs:{id:"add-the-resources-manually-after-recived-crcbeforeresourceinjection-event"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#add-the-resources-manually-after-recived-crcbeforeresourceinjection-event","aria-hidden":"true"}},[e._v("#")]),e._v(' Add the resources manually (after recived "crcBeforeResourceInjection" event)')]),e._v(" "),r("p",[e._v("Register an event handler for the event "),r("code",[e._v("crcBeforeResourceInjection")]),e._v(". If the event recived, load all the resources manually.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("document.addEventListener('crcBeforeResourceInjection', function (evt) {\n        // add scripts\n        var element = document.createElement('script');\n        element.setAttribute('src', '/cubbles-resources/scripts.js');\n        element.async = false;\n        document.head.appendChild(element);\n        // add styles\n        element = document.createElement('link');\n        element.setAttribute('rel', 'stylesheet');\n        element.setAttribute('href', '/cubbles-resources/styles.css');\n        document.head.appendChild(element);\n\n        // add templates\n        element = document.createElement('link');\n        element.setAttribute('rel', 'import');\n        element.setAttribute('href', '/cubbles-resources/html-imports.html');\n        document.head.appendChild(element);\n        // fire \"crcDepMgrReady\" event, so that CRC can continue the remaining tasks \n        window.cubx.CRC.fireDepMgrReadyEvent();\n      });\n")])])]),r("h2",{attrs:{id:"fire-event-crcdepmgrready"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fire-event-crcdepmgrready","aria-hidden":"true"}},[e._v("#")]),e._v(' Fire event "crcDepMgrReady"')]),e._v(" "),r("p",[e._v('After loading all resources, fire the "crcDepMgrReady" event oder use the method "cubx.CRC#fireDepMgrReadyEvent".')]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("window.cubx.CRC.fireDepMgrReadyEvent();\n")])])])])},[],!1,null,null,null);t.default=s.exports}}]);