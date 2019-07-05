# An elementary example

## Purpose

To demonstrate how to create an elementary component using the vanilla boilerplate. To aim that, we will tke into account the considerations presented [here](./README).

## Prerequisites

* A Cubbles Project was [generated](../creating-project) using the _my-currency_ as package name.

> Note that we assume that you are using the [vanilla-boilerplate](https://github.com/cubblesmasters/vanilla), which uses webpack to build the artifacts. Since each type of artifact has its own webpack subconfig; in this tutorial, we assume that the root webpack configuration is the same as in the mentioned boilerplate.

## Interface of the my-currency-converter elementary

We will create an elementary component called _my-currency-converter_. It is a component that uses [The Free Currency Converter API](https://free.currencyconverterapi.com) to get current and historical foreign exchange rates. This component will have the following interface \(input slots on the left and output slots on the right\):

![my-currency-converter interface](../../../assets/images/elementary_interface_bp.png)

## The required files of my-currency-converter

To create an elementary component on top of the vanilla boilerplate, you can use the sample folders and edit their content according to your needs. Or, you could create it from scratch. At the end of this tutorial you will end up with the following:

* A folder called _converter_ containing the files of the elementary. The name of this folder will be used as suffix for the artifactId of this elementary. Thus, the artifactId of this component would be _my-currency-converter_
* A file containing the **manifest definition** of the elementary. It has to be called _MANIFEST.elementary.js_
* A file containing the **view** of the elementary. In this case. We will call it _element.html_
* A file containing the **logic** of the elementary. In this case. We will call it _element.js_
* A file containing the **style** of the elementary. In this case. We will call it _element.sss_
* A file containing a **demo** for the elementary. We will call it _SHOWROOM.html_. You don't need to edit this file for the demo to work properly
* A file containing the **config for webpack** to build elementaries. We will call it _webpack.subconfig.js_. You don't need to edit this file for the elementary to build and work properly
* A file containing the **docs** for the elementary. We will call it _DOCS.html_. (Not included by default in the boilerplate)

The image below presents the structure of the project containing the elementary:

![my-currency-converter folder structure](../../../assets/images/elementary_folder_bp.png)

## The manifest definition of my-currency-converter

You can use javascript to define the manifest of your elementary, however you must assure that at the end it should be a valid Cubbles elementary definition (See [this](../../../user-guide/terms-and-concepts/artifacts.md#artifact-definition) for more info). As mentioned above, the manifest should be defined in the _MANIFEST.elementary.js_ file, which should be located in the root folder of the elementary.

The following code defines the description, resources, runnables and dependencies of `my-currency-converter`. It is important to include the _element.html_ file as resource, otherwise the elementary would not be available. Similarly, for an elementary to work the _cubxcomponent_ dependency is a must to process it and make it work.

The runnables are files that can be "run" from a [Cubbles base](../../../user-guide/), in this case the demo and the docs files.

```javascript
const assert = require("assert");

module.exports = webpackageName => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    description: "Elementary that uses an API to Convert currencies",
    slots: [],
    resources: ["element.html"],
    runnables: [
      {
        name: "SHOWROOM",
        path: "/SHOWROOM.html"
      },
      {
        name: "DOCS",
        path: "/DOCS.html"
      }
    ],
    dependencies: [
      { webpackageId: "cubx.core.rte@3.0.0", artifactId: "cubxcomponent" }
    ]
  };
};

```

### Slot Definitions

Now, we should add the slots that we presented in the interface above. We need three input slots \(foreignCurrency, date, and base\) and two output slots \(conversion and conversionArray\) for the component. Those are defined in the slots array of the manifest definition of the component as follows:

```javascript
  // ...
  return {
    // ...
    slots: [
      {
        slotId: "base",
        description: "Code of the currency to be converted",
        type: "string",
        direction: ["input"],
        value: "EUR"
      },
      {
        slotId: "foreignCurrency",
        description: "Code of the target currency for the conversion",
        type: "string",
        direction: ["input"],
        value: "USD"
      },
      {
        slotId: "date",
        description: "Date to be used for the conversion",
        type: "string",
        direction: ["input"]
      },
      {
        slotId: "conversion",
        description: "Result of the conversion",
        type: "number",
        direction: ["output"]
      },
      {
        slotId: "conversionArray",
        description: "Result of the conversion as an array of the form [ [ \"baseCurrency\", 1 ], [ \"foreignCurrency\", ... ] ]; e.g., [ [ \"EUR\", 1 ], [ \"USD\", 1.121693 ] ]",
        type: "array",
        direction: ["output"]
      }
    ],
    // ...
  };
};
```

### Changing the View of the Elementary \(element.html File\)

Now, we need to change the template of the component to define its view. We need three input fields to provide the needed data for the conversion, a button to trigger the conversion and an output text to show the result. The following HTML code meets these requirements.

```html
<template id="<%= elementName %>">
    <!-- <%= elementName %> -->
    <div>
        <div>
            <label>Base:</label>
        </div>
        <div>
            <input type="text" id="base">
        </div>
        <div>
            <label>Foreign Currency:</label>
        </div>
        <div>
            <input type="text" id="foreign">
        </div>
        <div>
            <label>Date:</label>
        </div>
        <div>
            <input type="date" id="date">
        </div>
        <div>
            <input type="button" value="Convert" id="convertBtn" disabled>
        </div>
    </div>
    <h2>Result</h2>
    <div id="result"></div>
</template>
```

> Note that the HTML code for your component should be located inside the `<template>` tag. Also, we are using a _templateParameter_ called `elementName`. This parameter will be set a building time by webpack using the [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/). This, will assure that the artifactId is always correct, even if we change the name of the package or of the folder containing the elementary.

To see the effects of this code, you can start the project by running the following command from project root folder:

```bash
npm run build && npm run start:watch
```

Navigate to [http://localhost:4000/my-currency/my-currency-converter/SHOWROOM.html](http://localhost:4000/my-currency/my-currency-converter/SHOWROOM.html). You should see a webpage like the one presented below:

![currency-converter demo](../../../assets/images/demo_elementary_bp.png)

> Note that the component doesn't do anything because it has no associated behavior.

### Change the Logic of the Elementary \(element.js File\)

The `element.js` file handles the behavior of the component when a slot value is changed. We should modify the implementation to make a request when a user provides the input data and clicks on the `Convert` button. The following code enables that behavior.

```javascript
(function() {
  "use strict";

  CubxComponent({
    is: "/* @echo elementName */",

    /**
     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.
     */
    contextReady: function() {
      this.$.base.setAttribute("value", this.getBase());
      this.$.foreign.setAttribute("value", this.getForeignCurrency());
      let today = new Date();
      this.setDate(today.toISOString().substr(0, 10));
      this.$.date.setAttribute("value", this.getDate());
      this.$.date.setAttribute("max", this.getDate());
      today.setMonth(today.getMonth() - 12);
      this.$.date.setAttribute("min", today.toISOString().substr(0, 10));

      this.sendQuery();

      this.$.convertBtn.addEventListener(
        "click",
        function() {
          this.getFormValuesAndSendQuery();
        }.bind(this)
      );
      this.$.convertBtn.removeAttribute("disabled");
    },

    /**
     * Observe the 'base' slot to update the view of this component and then
     * send the request to the fixer-io api
     * @param {string} newValue - new value of the slot
     */
    modelBaseChanged: function(newValue) {
      // update the view
      this.$.base.setAttribute("value", newValue);
    },
    /**
     * Observe the 'date' slot to update the view of this component and then
     * send the request to the fixer-io api
     * @param {string} newValue - new value of the slot ('yyyy-mm-dd' format)
     */
    modelDateChanged: function(newValue) {
      // update the view
      this.$.date.setAttribute("value", newValue);
    },
    /**
     * Observe the slot 'foreignCurrency' to update the view of this component
     * and then send the request to the fixer-io api.
     * @param {string} newValue - new value of the slot
     */
    modelForeignCurrencyChanged: function(newValue) {
      // update the view
      this.$.foreign.setAttribute("value", newValue);
    },
    /**
     * Observe the slot 'conversion' to update the view of this component
     * @param {string} newValue - new value of the slot
     */
    modelConversionChanged: function(newValue) {
      // update the view
      this.$.result.innerHTML =
        "1 " +
        this.getBase() +
        " -> " +
        "<b>" +
        newValue +
        "</b> " +
        this.getForeignCurrency() +
        " on " +
        this.getDate();
    },
    /**
     * Update the Component-Model and then send the request
     * to the fixer-io api.
     * @param event
     */
    getFormValuesAndSendQuery: function() {
      // Update the Cubbles component model slots the setters
      this.setBase(this.$.base.value);
      this.setDate(this.$.date.value);
      this.setForeignCurrency(this.$.foreign.value);

      this.sendQuery();
    },

    /**
     * Send the request a to the fixer-io api.
     */
    sendQuery: function() {
      // Makes sure all slots are defined
      if (this.getBase() && this.getForeignCurrency()) {
        var conversionKey = this.getBase() + "_" + this.getForeignCurrency();
        var queryDate = this.getDate();
        var baseUrl = "https://free.currconv.com/api/v7/convert";
        var apiKey = "0e3c4468ef8daf09c2eb";
        var queryUrl = `${baseUrl}?q=${conversionKey}&date=${queryDate}&compact=y&apiKey=${apiKey}`;
        var self = this;

        function processRespond(data) {
          // Update the Cubbles component model slots using the setters
          var converted = data[conversionKey]["val"][queryDate];
          self.setConversion(converted);
          self.setConversionArray([
            [self.getBase(), 1],
            [self.getForeignCurrency(), converted]
          ]);
        }

        this.makeRequest(queryUrl, processRespond);
      }
    },

    /**
     * Make the ajax request
     */
    makeRequest: function(queryUrl, processRespond) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var data = JSON.parse(xhttp.responseText);
          processRespond(data);
        }
      };
      xhttp.open("GET", queryUrl, true);
      xhttp.send();
    }
  });
})();
```

> Note that the this property ise set by `/* @echo elementName */`, which would be handled by webpack using the [preprocess-loader](https://www.npmjs.com/package/preprocess-loader).

### Change the style of elementary \(element.sss File\)

 WIP WIP

> For this tutorial we won't modify the style of our component. However, you can add CSS definitions in the file currency-converter.css.

Now if you check the generated demo and click on the `Convert` button, you will see something as follows:


You can also check the results at the [online demo](https://cubbles.world/sandbox/my-first-webpackage@0.1.0-SNAPSHOT/currency-converter/demo/index.html).

## Adding documentation

To show an example on how the webpack configuration can be modified according to your needs. We will add a documentation page to the elementary  using a component called `cubx-webpackage-viewer`. To aim that, we just need to provide the following input slots:

* **manifestUrl**: path of the manifest containing the definition of the component. This path should be according to the final folder structure of the _dist_ folder. It our case it would be `../manifest.webpackage`.
* **componentArtifactId**: artifactId of the elementary. Remember that it is composed by the "name" defined in the _package.json_ file and the name folder containing the elementary. In our case, it would be `my-currency-converter`

We will add a _DOCS.html_ file to the root folder of the elementary. This file will contain the following code:

```html
<!--
    This is the generated documentation for your artifact
-->

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>&lt;<%= elementName %>&gt; generated documentation</title>
    <script src="../../cubx.core.rte@3.0.0/webcomponents/custom-elements-es5-adapter.js"></script>
    <script src="../../cubx.core.rte@3.0.0/webcomponents/webcomponents-lite.js"></script>
    <script src="../../cubx.core.rte@3.0.0/crc-loader/js/main.js" data-crcinit-loadcif="true"></script>

</head>

<body>
    <div class="container">
        <div class="row">
            <h1>&lt;<%= elementName %>&gt; generated documentation</h1>
        </div>
        <div cubx-core-crc class="row">
            <cubx-component-docs-viewer cubx-webpackage-id="com.incowia.cubx-webpackage-viewer@2.0.0">
                <cubx-core-init style="display:none">
                    <cubx-core-slot-init slot="manifestUrl">"../manifest.webpackage"</cubx-core-slot-init>
                    <cubx-core-slot-init slot="componentArtifactId">"<%= elementName %>"</cubx-core-slot-init>
                </cubx-core-init>
            </cubx-component-docs-viewer>
        </div>
    </div>
</body>

</html>
```

Note that we are using a template parameter called `<%= elementName %>`. This would allow us to always have the correct artifactId (e.g. if we change the name of the package or o the containing folder). Fot this to work correctly, we should indicate webpack to process this file. To aim that, you should a new entry to the `plugins` property in the `config` object in the _webpack.subconfig.js_ file. You should indicate webpack to process the _DOCS.html_ file using the [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) with a templateParameter called `elementName` as follows:

```javascript
//...
const config = {
  //...
  module: {
    //...
    plugins: [
      //..
      new HtmlWebpackPlugin({
        template: 'DOCS.html',
        filename: 'DOCS.html',
        // manage placeholders
        templateParameters: {
            elementName: `${elementName}`
          }
      }),
    ]
};
module.exports = config;
```

> Note that you should be familiar with [webpack](https://webpack.js.org/) to be able to modify this kind of configuration

Now, if you run your project (i.e. running the `npm run start` command) and navigate to [http://localhost:4000/my-currency/my-currency-converter/DOCS.html](http://localhost:4000/my-currency/my-currency-converter/DOCS.html), you should see something similar to:

![currency-converter generated docs](../../../assets/images/docs_elementary_bp.png)

## The final result

![currency-converter working demo](../../../assets/images/fixer_final.png)

### Online demo

You can also check the results at the [online demo](https://cubbles.world/sandbox/my-currency@1.0.0-SNAPSHOT/my-currency-converter/SHOWROOM.html).
