// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "TwelveCat's Wiki",   // 站点名称
  tagline: '据说这是站点描述',  // 站点描述
  url: 'https://github.com/Twelvecat/Wiki_Docusaurus', // GitHub 页面的 URL
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico', // 站点的图标
  organizationName: 'Twelvecat', // Usually your GitHub org/user name.
  projectName: 'Wiki_Docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Twelvecat/Wiki_Docusaurus',
        },
        blog: {
          showReadingTime: true,
          path: "./blog",
          routeBasePath: "/",           // 这里将 blog/ 设置为首页
          // Please change this to your repo.
          editUrl:
            'https://github.com/Twelvecat/Wiki_Docusaurus',
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
      // 导航栏配置
      navbar: {
        title: "TwelveCat's Wiki",
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            to: '/',
            label: 'Blog',
            position: 'right'
          },

          {
            to: 'docs/',
            activeBasePath: 'docs',
            label: 'Docs',
            position: 'right',
          },

          {
            href: 'https://github.com/Twelvecat/Wiki_Docusaurus',
            label: '本站源码',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'start',
                to: 'docs/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
    }),
};

module.exports = config;
