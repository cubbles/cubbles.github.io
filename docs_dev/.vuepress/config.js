module.exports = {
  base: '/docs/',
  title: 'Cubbles Documentation',
  dest: 'docs',
  themeConfig: {
    logo: '/cubblesLogo.png',
    nav: [
      { text: 'About Cubbles', link: 'http://cubbles.github.io/' },
      { text: 'Docs for RTE 2x', link: 'http://cubbles.github.io/docs_2x/' },
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
            title: 'Using the vanilla boilerplate',
            children: [
              '/developer-guide/vanilla-boilerplate/',
              '/developer-guide/vanilla-boilerplate/creating-project',
              {
                title: 'Developing Elementaries',
                children: [
                  '/developer-guide/vanilla-boilerplate/developing-elementaries/',
                  '/developer-guide/vanilla-boilerplate/developing-elementaries/elementary-sample',                  
                ]
              },
              {
                title: 'Developing Compounds',
                children: [
                  '/developer-guide/vanilla-boilerplate/developing-compounds/',
                  '/developer-guide/vanilla-boilerplate/developing-compounds/compound-init',
                  '/developer-guide/vanilla-boilerplate/developing-compounds/compound-sample',                  
                ]
              },
              '/developer-guide/vanilla-boilerplate/adding-docs',
              '/developer-guide/vanilla-boilerplate/available-scripts',
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