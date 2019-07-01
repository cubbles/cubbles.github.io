(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{197:function(t,a,s){t.exports=s.p+"assets/img/iframe-resize.eb26da0b.png"},251:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"the-cubbles-iframe-resizer-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-cubbles-iframe-resizer-api","aria-hidden":"true"}},[t._v("#")]),t._v(" The Cubbles IFrame Resizer API")]),t._v(" "),e("h2",{attrs:{id:"purpose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#purpose","aria-hidden":"true"}},[t._v("#")]),t._v(" Purpose")]),t._v(" "),e("p",[t._v("Cubbles supports the integration of any component into a webpage using the html "),e("strong",[t._v("iframe")]),t._v(" element (See "),e("router-link",{attrs:{to:"/runtime-extension-rte/user-guide/cubbles-iframe-api/"}},[t._v("The Cubbles IFrame API")]),t._v("). However, the iframe will not bet automatically resized to adjust its content, and you may not always be sure of the final size of the iframe.")],1),t._v(" "),e("p",[t._v("In that case, you can use the "),e("code",[t._v("iframe-resizer")]),t._v(" utility to enable the Cubbles "),e("code",[t._v("iframe")]),t._v(" to resize according to its content. The following sections show how to use the "),e("code",[t._v("iframe-resizer")]),t._v(" utility to automatically resize a Cubbles iframe.")]),t._v(" "),e("h2",{attrs:{id:"use"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use","aria-hidden":"true"}},[t._v("#")]),t._v(" Use")]),t._v(" "),e("p",[t._v("If you want the Cubbles "),e("code",[t._v("iframe")]),t._v(" to be resized automatically according to its content size; you can use the "),e("code",[t._v("iframe-resizer")]),t._v(" utility. Let's suppose you want to use a Cubbles "),e("code",[t._v("iframe")]),t._v(" to display the "),e("em",[t._v("cubx-maps-demo")]),t._v(" from the "),e("em",[t._v("cubx-maps@1.0.0-SNAPSHOT")]),t._v(", you should include an "),e("em",[t._v("iframe")]),t._v(" html element as follows (See "),e("router-link",{attrs:{to:"/runtime-extension-rte/user-guide/cubbles-iframe-api/"}},[t._v("The Cubbles IFrame API")]),t._v("):")],1),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n...\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("iframe")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myIframe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cubbles.world/sandbox/cubx.core.rte@3.0.0-SNAPSHOT/iframe/index.html?webpackage-id=my-first-webpackage@0.1.0-SNAPSHOT"),e("span",{pre:!0,attrs:{class:"token entity",title:"&"}},[t._v("&amp;")]),t._v("artifact-id=currency-viewer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("iframe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h3",{attrs:{id:"including-the-iframe-resizer-utility"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#including-the-iframe-resizer-utility","aria-hidden":"true"}},[t._v("#")]),t._v(" Including the iframe-resizer utility")]),t._v(" "),e("p",[t._v("Now you need to include the utility as a script within the head of your html page. By the moment it is available at "),e("a",{attrs:{href:"https://cubbles.world/core/cubx.core.rte@3.0.0-SNAPSHOT/iframe-resizer/resize.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cubbles.world/core/cubx.core.rte@3.0.0-SNAPSHOT/iframe-resizer/resize.js"),e("OutboundLink")],1),t._v(". Your code should now look as follows:")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cubbles.world/sandbox/cubx.core.rte@3.0.0-SNAPSHOT/iframe-resizer/resize.js"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}}),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("iframe")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myIframe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cubbles.world/sandbox/cubx.core.rte@3.0.0-SNAPSHOT/iframe/index.html?webpackage-id=my-first-webpackage@0.1.0-SNAPSHOT"),e("span",{pre:!0,attrs:{class:"token entity",title:"&"}},[t._v("&amp;")]),t._v("artifact-id=currency-viewer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("iframe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h3",{attrs:{id:"setting-the-iframe-id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-the-iframe-id","aria-hidden":"true"}},[t._v("#")]),t._v(" Setting the iframe id")]),t._v(" "),e("p",[t._v("Finally you should:")]),t._v(" "),e("ol",[e("li",[t._v("make sure the "),e("em",[t._v("id")]),t._v(" attribute of your iframe is set and")]),t._v(" "),e("li",[t._v("pass it to the Cubbles iframe using "),e("code",[t._v("iframe-id")]),t._v(" parameter in the src url:")])]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cubbles.world/sandbox/cubx.core.rte@3.0.0-SNAPSHOT/iframe-resizer/resize.js"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}}),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("iframe")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myIframe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cubbles.world/sandbox/cubx.core.rte@3.0.0-SNAPSHOT/iframe/index.html?iframe-id=myIframe"),e("span",{pre:!0,attrs:{class:"token entity",title:"&"}},[t._v("&amp;")]),t._v("webpackage-id=my-first-webpackage@0.1.0-SNAPSHOT"),e("span",{pre:!0,attrs:{class:"token entity",title:"&"}},[t._v("&amp;")]),t._v("artifact-id=currency-viewer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("iframe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("Remember that the "),e("em",[t._v("id")]),t._v(" of the iframe should be the same as the "),e("em",[t._v("iframe-id")]),t._v(" value passed as a parameter, otherwise the resizing wouldn't work.")])]),t._v(" "),e("h2",{attrs:{id:"result"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#result","aria-hidden":"true"}},[t._v("#")]),t._v(" Result")]),t._v(" "),e("p",[t._v("The "),e("em",[t._v("width")]),t._v(" of the iframe will be set to 100%. The "),e("em",[t._v("height")]),t._v(" will be set according to the body content of the iframe whenever it changes as shown below.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(197),alt:"RTE iframe Resizer Demo"}})]),t._v(" "),e("p",[t._v("Check "),e("a",{attrs:{href:"https://cubbles.world/sandbox/my-first-webpackage@0.1.0-SNAPSHOT/rte-iframe-demo/resizer.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("this demo"),e("OutboundLink")],1),t._v(" to see the result running online.")])])},[],!1,null,null,null);a.default=n.exports}}]);