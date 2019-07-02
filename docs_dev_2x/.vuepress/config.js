module.exports = {
  base: '/docs_2x/',
  title: 'Cubbles Documentation',
  dest: 'docs_2x',
  themeConfig: {
    logo: '/cubblesLogo.png',
    nav: [
      { text: 'About Cubbles', link: 'http://cubbles.github.io/' },
      { text: 'Docs for RTE 3x', link: 'http://cubbles.github.io/docs' },
    ],
    sidebar: [
      '/',
      {
        title: 'User guide',
        children: [
          '/user-guide/',
          {
            title: 'Terms and concepts',
            children: [
              '/user-guide/terms-and-concepts/webpackage',
              '/user-guide/terms-and-concepts/artifacts',
              '/user-guide/terms-and-concepts/user-roles',
              '/user-guide/terms-and-concepts/base',
            ]
          },
          {
            title: 'Runtime Extension (RTE)',
            children: [
              '/user-guide/rte/',
              '/user-guide/rte/rte-integration',
            ]
          },
          {
            title: 'The Cubbles TAG API',
            children: [
              '/user-guide/cubbles-tag-api/',
              '/user-guide/cubbles-tag-api/dependency-api',                    
            ]
          }
        ]
      },
      {
        title: 'Developer guide',
        children: [
          {
            title: 'First steps',
            children: [
              '/developer-guide/first-steps/generate-a-project',
              '/developer-guide/first-steps/create-a-webpackage',
              '/developer-guide/first-steps/create-elementary',
              {
                title: 'Create a compound component',
                children: [
                  '/developer-guide/first-steps/create-compound/',
                  '/developer-guide/first-steps/create-compound/compound-init',
                ]
              }
            ]
          },
          {
            title: 'Coder devtools - CDT',
            children: [
              '/developer-guide/coder-devtools-cdt/create-artifacts',
              '/developer-guide/coder-devtools-cdt/upload-a-webpackage',
              '/developer-guide/coder-devtools-cdt/generate-readme-file',
              '/developer-guide/coder-devtools-cdt/rename-artifact',
              '/developer-guide/coder-devtools-cdt/config-proxy',
              '/developer-guide/coder-devtools-cdt/validate-manifest',
              '/developer-guide/coder-devtools-cdt/change-active-webpackage',
              '/developer-guide/coder-devtools-cdt/bulk-upload',
              '/developer-guide/coder-devtools-cdt/release-webpackage',
              '/developer-guide/coder-devtools-cdt/update-rte',
              '/developer-guide/coder-devtools-cdt/prepare-release',
              '/developer-guide/coder-devtools-cdt/update-to-next-version',
              '/developer-guide/coder-devtools-cdt/generate-art-wct-scaffold',
              '/developer-guide/coder-devtools-cdt/testing-components',
              '/developer-guide/coder-devtools-cdt/validate-sources',
              '/developer-guide/coder-devtools-cdt/create-webpackage-demo',
              {
                title: 'For Contributors',
                children: [
                  '/developer-guide/coder-devtools-cdt/contributors/release-model-v-checklist',
                ]
              }
            ]
          },
          '/developer-guide/cif-processing/',
          {
            title: 'The Cubbles Javascript API',
            children: [
              '/developer-guide/cubbles-js-api/',
              '/developer-guide/cubbles-js-api/outside-interaction',                    
              '/developer-guide/cubbles-js-api/dynamic-connections',                    
              '/developer-guide/cubbles-js-api/inside-interaction',                    
            ]
          },
          '/developer-guide/rte-init-render/',
          {
            title: 'The Cubbles IFrame API',
            children: [
              '/developer-guide/cubbles-iframe-api/',
              '/developer-guide/cubbles-iframe-api/cubbles-iframe-resizer',
            ]
          },
          '/developer-guide/mutation-based-start-event/',
          {
            title: 'FAQs',
            children: [
              '/developer-guide/faqs/manual-conflict-resolution',
              '/developer-guide/faqs/dynamic-component-instance',
              '/developer-guide/faqs/render-html-code-of-input-slot',
              '/developer-guide/faqs/replace-dep',
              '/developer-guide/faqs/synch-dataflow',
              '/developer-guide/faqs/non-serializable-slot-value',
              '/developer-guide/faqs/include-resource-manually',
            ]
          } 
        ]
      },
    ],
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon-16x16.png' }]
  ],
}