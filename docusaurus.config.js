// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "TwelveCat's Wiki",
  tagline: "^_^",
  url: 'https://wiki.twelvecat.cn/',
  // url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.


  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarCollapsible: true, //默认折叠
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          routeBasePath: "/",
          editUrl: 'https://github.com/twelvecat/Wiki_Docusaurus/edit/master/',
        },
        blog: {
          blogSidebarCount: 10,
          postsPerPage: 10,
          showReadingTime: false,
          path: 'blog',
          blogSidebarTitle: 'Recent',
          // Please change this to your repo.
          editUrl:
            'https://github.com/twelvecat/Wiki_Docusaurus/edit/master/',
            
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        //defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      //搜索框
      algolia: {
        // The application ID provided by Algolia
        appId: 'XXMM3559UU',
  
        // Public API key: it is safe to commit it
        apiKey: '446da979f11003b87220afb0ccb10108',
  
        indexName: 'twelvecat',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
      //公告栏
      // announcementBar: {
      //   id: 'announcement-bar',
      //   content:
      //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: true,
      // },
      navbar: {
        title: "TwelveCat's Wiki",
        hideOnScroll: true,
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'doc',
            docId: 'Home',
            position: 'right',
            label: 'Wiki',
          },

          {
            to: '/blog', 
            label: 'Blog', 
            position: 'right'
          },

          {
            href: 'https://github.com/Twelvecat/Wiki_Docusaurus',
            label: '本站源码',
            position: 'right',
          },
        ],
      },
      hideableSidebar: false,
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
};

module.exports = config;
