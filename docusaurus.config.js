// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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
};

module.exports = config;
