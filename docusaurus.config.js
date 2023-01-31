// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

function defineSection(section, options = {}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      path: `docs/${section}`,
      routeBasePath: section,
      id: section,
      sidebarPath: require.resolve('./sidebars.js'),
      breadcrumbs: false,
      editUrl: 'https://github.com/evmos/community/tree/main/',
      ...options,
    }),
  ];
}

const SECTIONS = [
  defineSection('welcome-to-evmos'),
  defineSection('get-involved'),
  defineSection('learn'),
  defineSection('meet-the-team'),
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Evmos Community',
  tagline: 'Let us collaborate on Evmos Community',
  url: 'https://community.evmos.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'evmos', // Usually your GitHub org/user name.
  projectName: 'community', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/home',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    ...SECTIONS,
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Evmos Community',
        logo: {
          alt: 'Evmos Logo',
          src: 'img/evmos.svg',
        },
        items: [
          {
            position: 'left',
            label: 'Welcome to Evmos',
            to: '/welcome-to-evmos/introduction',
          },
          {
            position: 'left',
            label: 'Get Involved',
            to: '/get-involved/community-call',
          },
          {
            position: 'left',
            label: 'Learn',
            to: '/learn/keplr',
          },
          {
            position: 'left',
            label: 'Meet the Team',
            to: '/meet-the-team/core-team',
          },
        ],
      },
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: 'YOUR_APP_ID',
  
      //   // Public API key: it is safe to commit it
      //   apiKey: 'YOUR_SEARCH_API_KEY',
  
      //   indexName: 'YOUR_INDEX_NAME',
  
      //   // Optional: see doc section below
      //   contextualSearch: true,
  
      //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //   externalUrlRegex: 'external\\.com|domain\\.com',
  
      //   // Optional: Algolia search parameters
      //   searchParameters: {},
  
      //   // Optional: path for search page that enabled by default (`false` to disable it)
      //   searchPagePath: 'search',
  
      //   //... other Algolia params
      // },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Academy',
            items: [
              {
                label: 'Explore Further',
                to: 'https://academy.evmos.org',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/EvmosOrg',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/evmos',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/EvmosOrg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://medium.com/evmos',
              },
              {
                label: 'Evmos GitHub',
                href: 'https://github.com/evmos',
              },
            ],
          },
        ],
        copyright: `Built with ❤️ by the Evmos Core Development Team. © ${new Date().getFullYear()} All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
