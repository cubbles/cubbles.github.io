# Table of contents

* [Cubbles documentation](README.md)
* [First steps](first-steps/README.md)
  * [Generate a project](first-steps/generate-a-project.md)
  * [Create a webpackage](first-steps/create-a-webpackage.md)
  * [Create an elementary component](first-steps/create-elementary.md)
  * [Create a compound component](first-steps/create-compound/README.md)
    * [Compound slot initialization](first-steps/create-compound/compound-init.md)
* [Runtime extension - RTE](runtime-extension-rte/README.md)
  * [User guide](runtime-extension-rte/user-guide/README.md)
    * [RTE Integration](runtime-extension-rte/user-guide/rte-integration.md)
    * [The Cubbles TAG API](runtime-extension-rte/user-guide/cubbles-tag-api/README.md)
      * [The Cubbles Dependency API](runtime-extension-rte/user-guide/cubbles-tag-api/dependency-api.md)
    * [The Cubbles Javascript API](./runtime-extension-rte/user-guide/cubbles-js-api/README.md)
      * [Interacting with Cubbles from the outside](./runtime-extension-rte/user-guide/cubbles-js-api/outside-interaction.md)
      * [Adding dynamic connections](./runtime-extension-rte/user-guide/cubbles-js-api/dynamic-connections.md)
      * [Interacting with Elementary Cubbles from the inside](./runtime-extension-rte/user-guide/cubbles-js-api/inside-interaction.md)
    * [The RTE Processing](./runtime-extension-rte/user-guide/rte-processing/README.md)
      * [RTE initialization and rendering timeline](./runtime-extension-rte/user-guide/rte-processing/rte-init-render.md)
    * [The Cubbles IFrame API](runtime-extension-rte/user-guide/cubbles-iframe-api/README.md)
      * [The Cubbles IFrame Resizer API](runtime-extension-rte/user-guide/cubbles-iframe-api/cubbles-iframe-resizer.md)
    * [The Cubbles mutation based start event API](./runtime-extension-rte/user-guide/mutation-based-start-event/README.md)
    * [FAQs](./runtime-extension-rte/user-guide/faqs/README.md)
      * [How to manually resolve dependency conflicts?](./runtime-extension-rte/user-guide/faqs/manual-conflict-resolution.md)
      * [How to create a component instance dynamically?](./runtime-extension-rte/user-guide/faqs/dynamic-component-instance.md)
      * [How to render HTML Markup coming from input slot?](./runtime-extension-rte/user-guide/faqs/render-html-code-of-input-slot.md)
      * [How to replace a dependency when declaring a component instance?](./runtime-extension-rte/user-guide/faqs/replace-dep.md)
      * [How to synchronize multiple dataflows between component instances?](./runtime-extension-rte/user-guide/faqs/synch-dataflow.md)
      * [How to handle the copyValue flag for non serializable instances?](./runtime-extension-rte/user-guide/faqs/non-serializable-slot-value.md)
  * [Contributor guide](runtime-extension-rte/contributor-guide/README.md)
    * [CIF processing](./runtime-extension-rte/contributor-guide/cif-processing.md)
* [Developing with the vanilla boilerplate](./developing-vanilla-boilerplate/README.md)
  * [Creating a new project](./developing-vanilla-boilerplate/creating-project.md)
  * [Developing elementaries using the vanilla boilerplate](./developing-vanilla-boilerplate/developing-elementaries.md)
  * [Developing compounds using the vanilla boilerplate](./developing-vanilla-boilerplate/developing-compounds.md)
  * [Using the vanilla boilerplate scripts](./developing-vanilla-boilerplate/available-scripts.md)
* [Coder devtools - CDT](coder-devtools-cdt/README.md)
  * [User guide](coder-devtools-cdt/user-guide/README.md)
    * [Create Cubbles artifacts](coder-devtools-cdt/user-guide/create-artifacts.md)
    * [Upload a Webpackage](coder-devtools-cdt/user-guide/upload-a-webpackage.md)
    * [Generate a README file](coder-devtools-cdt/user-guide/generate-readme-file.md)
    * [Rename an artifact](coder-devtools-cdt/user-guide/rename-artifact.md)
    * [Configure network proxy](coder-devtools-cdt/user-guide/config-proxy.md)
    * [Validate the manifest.webpackage file](coder-devtools-cdt/user-guide/validate-manifest.md)
    * [Change active webpackage](coder-devtools-cdt/user-guide/change-active-webpackage.md)
    * [Bulk upload of webpackages](coder-devtools-cdt/user-guide/bulk-upload.md)
    * [Release a webpackage](coder-devtools-cdt/user-guide/release-webpackage.md)
    * [Update the RTE version of a webpackage](coder-devtools-cdt/user-guide/update-rte.md)
    * [Prepare a webpackage to be released](coder-devtools-cdt/user-guide/prepare-release.md)
    * [Update webpackage to the next development version](coder-devtools-cdt/user-guide/update-to-next-version.md)
    * [Generate a test environment for a component](coder-devtools-cdt/user-guide/generate-art-wct-scaffold.md)
    * [Testing Cubbles components](coder-devtools-cdt/user-guide/testing-components.md)
    * [Validate sources](coder-devtools-cdt/user-guide/validate-sources.md)
    * [Create a demo webpackage](coder-devtools-cdt/user-guide/create-webpackage-demo.md)
  * [Contributor guide](coder-devtools-cdt/contributor-guide/README.md)
    * [Checklist for releasing a new webpackage.modelVersion](coder-devtools-cdt/contributor-guide/release-model-v-checklist.md)
* [Terms and concepts](terms-and-concepts/README.md)
  * [Webpackage](terms-and-concepts/webpackage.md)
  * [Artifacts](terms-and-concepts/artifacts.md)
  * [User roles](terms-and-concepts/user-roles.md)
  * [Base](terms-and-concepts/base.md)