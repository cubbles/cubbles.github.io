(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{206:function(t,e,a){t.exports=a.p+"assets/img/compound_dataflow.88a91414.png"},207:function(t,e,a){t.exports=a.p+"assets/img/compound_folder_struct.cf682fa0.png"},208:function(t,e,a){t.exports=a.p+"assets/img/compound_demo.84e22ebc.png"},231:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"create-a-compound-component"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-a-compound-component","aria-hidden":"true"}},[t._v("#")]),t._v(" Create a compound component")]),t._v(" "),n("h2",{attrs:{id:"purpose"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#purpose","aria-hidden":"true"}},[t._v("#")]),t._v(" Purpose")]),t._v(" "),n("p",[t._v("To demonstrate how to create a compound component using the "),n("router-link",{attrs:{to:"/coder-devtools-cdt/"}},[t._v("Coder DevTools")]),t._v(".")],1),t._v(" "),n("h2",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),n("p",[t._v("The "),n("router-link",{attrs:{to:"/first-steps/create-elementary.html"}},[n("code",[t._v("currency-converter")])]),t._v(" elementary component should be created already.")],1),t._v(" "),n("h2",{attrs:{id:"creating-the-currency-viewer-compound-component"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-currency-viewer-compound-component","aria-hidden":"true"}},[t._v("#")]),t._v(" Creating the currency-viewer Compound Component")]),t._v(" "),n("p",[t._v("We will create a compound component called "),n("code",[t._v("currency-viewer")]),t._v(". This compound will use a chart to display the conversion calculated by the "),n("router-link",{attrs:{to:"/first-steps/create-elementary.html"}},[n("code",[t._v("currency-converter")])]),t._v(" elementary.")],1),t._v(" "),n("h3",{attrs:{id:"members-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#members-description","aria-hidden":"true"}},[t._v("#")]),t._v(" Members description")]),t._v(" "),n("p",[t._v("The "),n("code",[t._v("currency-viewer")]),t._v(" comprises the following members:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[t._v("Member Id")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("Artifact Id")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("Webpackage Id")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("currencyConverter")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Component to calculate conversions between two currencies at a certain date.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("currency-converter")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v('"this"')])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("chart")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Component to visualise the currency conversion data from the "),n("code",[t._v("currencyCoverter")]),t._v(" component using a bar chart.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("bar-chart")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("com.incowia.lib.chart-library@1.0.0")])])])]),t._v(" "),n("h3",{attrs:{id:"dataflow-of-the-compound"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dataflow-of-the-compound","aria-hidden":"true"}},[t._v("#")]),t._v(" Dataflow of the compound")]),t._v(" "),n("p",[t._v("The dataflow of this compound is shown below:")]),t._v(" "),n("p",[n("img",{attrs:{src:a(206),alt:"`currency-viewer` dataflow"}})]),t._v(" "),n("h3",{attrs:{id:"creation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creation","aria-hidden":"true"}},[t._v("#")]),t._v(" Creation")]),t._v(" "),n("p",[t._v("Our compound component will be created within the same webpackage where you created your "),n("code",[t._v("currency-converter")]),t._v(" elementary.")]),t._v(" "),n("p",[t._v("First, run the following Grunt task from DevTools in the bash (Make sure you are located in your devtools folder):")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("grunt +webpackage-createCompound\n")])])]),n("p",[t._v("Second, you should provide a name and, if you want, a description for the component. In our case, it should be as follows:")]),t._v(" "),n("ul",[n("li",[t._v("Name: "),n("em",[t._v("currency-viewer")]),t._v(".")]),t._v(" "),n("li",[t._v("Description: Component to display currency differences in a bar-chart.")])]),t._v(" "),n("p",[t._v("If everything is okay, you will get the following message in the bash:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("Done, without errors.\n")])])]),n("p",[t._v("The manifest file is modified automatically to include the new compound component. Also, a folder with the name you specified for the component is created. The folder contains a simple structure as follows.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(207),alt:"`currency-viewer` generated folder"}})]),t._v(" "),n("h3",{attrs:{id:"extending-the-currency-converter-component"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#extending-the-currency-converter-component","aria-hidden":"true"}},[t._v("#")]),t._v(" Extending the "),n("router-link",{attrs:{to:"/first-steps/create-elementary.html"}},[n("code",[t._v("currency-converter")])]),t._v(" component")],1),t._v(" "),n("p",[t._v("We will use a bar chart to display the conversion calculated by the "),n("code",[t._v("currency-converter")]),t._v(". To aim that we will use an elementary component called "),n("code",[t._v("bar-chart")]),t._v(". That component has an input slot indicating the data to be displayed as an array. Thus, we need a new output slot for the "),n("code",[t._v("currency-converter")]),t._v(". The new slot will be called "),n("code",[t._v("conversionArray")]),t._v(" and should produce an array as follows:")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"baseCurrencyName"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" baseCurrencyValue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"targetCurrencyName"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" targetCurrencyValue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// For instance: [["EUR", 1], ["USD", 1.162149]]')]),t._v("\n")])])]),n("p",[t._v("To aim that, we need to add a new slot definition to the "),n("code",[t._v("currency-converter")]),t._v(" elementary in the "),n("code",[t._v("manifest.webpackage")]),t._v(" file:")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"elementaryComponents"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"artifactId"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"currency-converter"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"slots"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"slotId"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"conversionArray"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"array"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"direction"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n              "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"output"')]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n")])])]),n("p",[t._v("Then, we need to set the value of the "),n("code",[t._v("conversionArray")]),t._v(" slot when the conversion is calculated. In the "),n("em",[t._v("currency-converter.js")]),t._v(" locate the "),n("code",[t._v("sendQuery")]),t._v(" function and specifically the following code:")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("sendQuery")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Update the Cubbles component model slots using the setters")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" converted "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("conversionKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'val'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("queryDate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setConversion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("converted"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n")])])]),n("p",[t._v("Below that code, you should add the following line to set the value of our new slot:")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setConversionArray")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBase")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getForeignCurrency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" converted"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("Now we can continue developing our compound component.")]),t._v(" "),n("h3",{attrs:{id:"specify-the-compound-configuration-in-the-manifest-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#specify-the-compound-configuration-in-the-manifest-file","aria-hidden":"true"}},[t._v("#")]),t._v(" Specify the Compound configuration in the Manifest File")]),t._v(" "),n("p",[t._v("We should modify the "),n("code",[t._v("manifest.webpackage")]),t._v(" file again to set up the compound component. To support a compound you have to specify the member components and the connections between their slots. As you can see in the dataflow picture above, our compound has two members, the "),n("code",[t._v("currency-converter")]),t._v(" and the "),n("code",[t._v("bar-chart")]),t._v(" component. The compound has a connection identified as "),n("em",[t._v("data-connection")]),t._v(".")]),t._v(" "),n("h4",{attrs:{id:"the-dependencies-section"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-dependencies-section","aria-hidden":"true"}},[t._v("#")]),t._v(" The dependencies section")]),t._v(" "),n("p",[t._v("To have the resources of the members available, we need to define two dependencies to be loaded at runtime:")]),t._v(" "),n("p",[n("strong",[t._v("currency-converter")])]),t._v(" "),n("ol",[n("li",[t._v("webpackageId: it is not necessary since the currency-converter implementation is within the same webpackage.")]),t._v(" "),n("li",[t._v("artifactId: currency-converter.")])]),t._v(" "),n("p",[n("strong",[t._v("bar-chart")])]),t._v(" "),n("ol",[n("li",[t._v("webpackageId: "),n("code",[t._v("com.incowia.lib.chart-library@01.0.0")]),t._v(", as the "),n("code",[t._v("bar-chart")]),t._v(" artifact resides within another webpackage. Thus, we should specify the name and version of this webpackage.")]),t._v(" "),n("li",[t._v("artifactId: bar-chart.")])]),t._v(" "),n("blockquote",[n("p",[t._v("Note that the "),n("code",[t._v("com.incowia.lib.chart-library@01.0.0")]),t._v("is already available in the "),n("a",{attrs:{href:"https://cubbles.world/shared/cubx.core.artifactsearch@1.6.1/artifactsearch/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("shared"),n("OutboundLink")],1),t._v(" store of the Cubbles platform.")])]),t._v(" "),n("p",[t._v("The "),n("em",[t._v("dependencies")]),t._v(" property of the "),n("code",[t._v("currency-viewer")]),t._v(" should look as follows:")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"compoundComponents"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"artifactId"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"currency-viewer"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dependencies"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"artifactId"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"currency-converter"')]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpackageId"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.incowia.lib.chart-library@1.0.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"artifactId"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar-chart"')]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n")])])]),n("h4",{attrs:{id:"the-slots-section"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-slots-section","aria-hidden":"true"}},[t._v("#")]),t._v(" The slots section")]),t._v(" "),n("p",[t._v("Since our compound doesn't expose any member-slots, just remove the pre-generated slots definition.")]),t._v(" "),n("h4",{attrs:{id:"the-members-section"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-members-section","aria-hidden":"true"}},[t._v("#")]),t._v(" The members section")]),t._v(" "),n("p",[t._v("Now, we need to add the members that belong to our compound as follows:")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"compoundComponents"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"artifactId"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"currency-viewer"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"members"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"memberId"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"currencyConverter"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"artifactId"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"currency-converter"')]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"memberId"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chart"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"artifactId"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar-chart"')]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n")])])]),n("blockquote",[n("p",[t._v("Note that both members were included as dependencies. Otherwise, the compound component wouldn't be able to identify them.")])]),t._v(" "),n("p",[t._v("By default, each member will be rendered as a direct child node of the compound in the order in which each member was defined above. However, if you want to render the compound members in a particular way or add other HTML elements, you can provide a custom HTML template. The following is an example of a template for the currency-viewer component. To aim that, you should edit the "),n("code",[t._v("currency-viewer-template.html")]),t._v(" file. Add the following code to your template:")]),t._v(" "),n("div",{staticClass:"language-markup extra-class"},[n("pre",{pre:!0,attrs:{class:"language-markup"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("currency-viewer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("My Currency Viewer"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("currency-converter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("member-id-ref")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("currencyConverter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("currency-converter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bar-chart")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("member-id-ref")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("chart"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("bar-chart")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("Be sure that the id attribute of the template is equal to the "),n("em",[t._v("artifactId")]),t._v(" of the compound component. The member components are added as HTML tags whose "),n("em",[t._v("member-id-ref")]),t._v(" attribute is equal to its "),n("em",[t._v("memberId")]),t._v(" in the "),n("em",[t._v("manifest.webpackage")]),t._v(".")]),t._v(" "),n("p",[t._v("Moreover, to make the template available, you should add it as a resource in the compound component in the "),n("em",[t._v("manifest.webpackage")]),t._v(" file as follows.")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"compoundComponents"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"artifactId"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"currency-viewer"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"resources"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"css/currency-viewer.css"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"currency-viewer-template.html"')]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n")])])]),n("blockquote",[n("p",[t._v("Note that you can modify the "),n("em",[t._v("css/currency-viewer.css")]),t._v(" file (automatically generated) to style your component.")])]),t._v(" "),n("h4",{attrs:{id:"the-connections-section"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-connections-section","aria-hidden":"true"}},[t._v("#")]),t._v(" The connections section")]),t._v(" "),n("p",[t._v("A connection defines the data to be transferred between 2 slots each from one member. To set up a connection you need to edit the "),n("em",[t._v("connections")]),t._v(" array of the compound component in the "),n("em",[t._v("manifest.webpackage")]),t._v(". Add the following code to your manifest to include the "),n("code",[t._v("data-connection")]),t._v(" connection to the "),n("code",[t._v("currency-viewer-compound")]),t._v(":")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"compoundComponents"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"artifactId"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"currency-viewer"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"connections"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"connectionId"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data-connection"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"source"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"memberIdRef"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"currencyConverter"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"slot"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"conversionArray"')]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"destination"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"memberIdRef"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chart"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"slot"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dataColumns"')]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n")])])]),n("h4",{attrs:{id:"the-inits-section"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-inits-section","aria-hidden":"true"}},[t._v("#")]),t._v(" The inits section")]),t._v(" "),n("p",[t._v("The "),n("em",[t._v("inits")]),t._v(" property of a compound allows setting an initial value to the slots of the compound component being defined, or to the slots of its members. To read more about compound components initialisation check "),n("router-link",{attrs:{to:"/first-steps/create-compound/compound-init.html"}},[t._v("this")]),t._v(".")],1),t._v(" "),n("p",[t._v("We won't initialise any slot for the purpose of this tutorial.")]),t._v(" "),n("h2",{attrs:{id:"check-your-first-compound-component"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#check-your-first-compound-component","aria-hidden":"true"}},[t._v("#")]),t._v(" Check your first Compound Component")]),t._v(" "),n("p",[t._v("Now you can check the generated demo of the component performing the following steps:")]),t._v(" "),n("ul",[n("li",[t._v("Start the embedded webserver using the "),n("code",[t._v("+startWebserver")]),t._v(" grunt task available in the "),n("router-link",{attrs:{to:"/coder-devtools-cdt/"}},[t._v("DevTools")]),t._v(".")],1),t._v(" "),n("li",[t._v("Your default browser will start.")]),t._v(" "),n("li",[t._v("Navigate to: "),n("a",{attrs:{href:"http://localhost:8282/%5Bwebpackage-name%5D/currency-viewer/demo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8282/[webpackage-name]/currency-viewer/demo/"),n("OutboundLink")],1)])]),t._v(" "),n("blockquote",[n("p",[t._v("Note that [webpackage-name] should be replaced by the name of your current webpackage.")])]),t._v(" "),n("p",[t._v("It should look as follows:")]),t._v(" "),n("p",[n("img",{attrs:{src:a(208),alt:"`currency-viewer` generated demo"}})]),t._v(" "),n("p",[t._v("You can also check the results at the "),n("a",{attrs:{href:"https://cubbles.world/sandbox/my-first-webpackage@0.1.0-SNAPSHOT/currency-viewer/demo/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("online demo"),n("OutboundLink")],1),t._v(".")])])},[],!1,null,null,null);e.default=s.exports}}]);