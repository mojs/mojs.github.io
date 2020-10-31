module.exports = {
  // plugins: [
  //   require('./style')
  // ],
  title: 'mo.js',
  description: 'The official website for mojs',
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest"}],
    ['link', { rel: "mask-icon", href: "/assets/favicons/safari-pinned-tab.svg", color: "#3a0839"}],
    ['link', { rel: "shortcut icon", href: "/assets/favicons/favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
    ['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
  ],

  themeConfig: {
    logo: '/assets/img/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tutorials', link: '/tutorials/' },
      { text: 'Api', link: '/api/' },
      { text: 'Tools', link: '/tools/' },
      // {
      //   text: 'Example dropdown list',
      //   items: [
      //     { text: 'Tutorials', link: '/tutorials/' },
      //     { text: 'Api', link: '/api/' },
      //   ]
      // },
      { text: 'Github', link: 'https://github.com/mojs' },
    ],
    sidebar: [
      {
        title: 'Tutorials',
        children: [
          '/tutorials/',
          '/tutorials/getting-started.md',
          '/tutorials/shape-swirl/',
          '/tutorials/burst/',
          '/tutorials/usage-with-react.md',
        ]
      },
      {
        title: 'Tools',
        children: [
          '/tools/',
          '/tools/player/',
          '/tools/curve-editor/',
          '/tools/timeline-editor/',
        ]
      },
      {
        title: 'API',
        sidebarDepth: 2,
        collapsable: true,
        children: [
          '/api/',
          {
            title: 'Modules',
            collapsable: false,
            children: [
              '/api/html/',
              '/api/shape/',
              '/api/shape-swirl/',
              '/api/burst/',
            ]
          },
          {
            title: 'Tweens',
            collapsable: false,
            children: [
              '/api/tweens/tween.md',
              '/api/tweens/timeline.md',
            ]
          },
          {
            title: 'Utils',
            collapsable: false,
            children: [
              '/api/utils/stagger.md',
            ]
          },
          {
            title: 'Easing',
            collapsable: false,
            children: [
              '/api/easing/base-functions.md',
              '/api/easing/bezier-curves.md',
              '/api/easing/path-easing.md',
              '/api/easing/approximate.md',
            ]
          },
          {
            title: 'Syntax',
            collapsable: false,
            children: [
              '/api/syntax/stagger.md',
              '/api/syntax/rand.md',
              '/api/syntax/property-maps.md',
              '/api/syntax/units.md',
            ]
          },
        ]
      },
    ]
    // displayAllHeaders: true, // Default: false
    // sidebar: 'auto',

  }

}
