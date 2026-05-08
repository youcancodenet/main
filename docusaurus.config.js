// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'You Can Code',
  tagline: "Don't go extinct. Learn code skills.",
  favicon: 'img/favicon.ico',

  url: 'https://youcancode.net',
  baseUrl: '/',

  organizationName: 'youcancodenet',
  projectName: 'main',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/youcancodenet/main/tree/main/',
        },
        blog: {
          showReadingTime: true,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {                              // ✅ properly nested inside themeConfig
      title: 'You Can Code',
      logo: {
        alt: 'You Can Code Logo',
        src: 'img/logo.svg',
      },
      items: [                             // ✅ items inside navbar, not floating
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorials',
        },
        {
          href: 'https://www.stickermule.com/youcancode?sortType=NEWEST',
          label: 'Store',
          position: 'left',
        },
        {
          href: 'https://discord.gg/KwfnCyp9T',
          position: 'right',
          className: 'header-discord-link',
          'aria-label': 'Discord server',
        },
        {
          href: 'https://github.com/youcancodenet/main',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },                                     // ✅ navbar closed before footer
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorials',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/youcancodenet/main',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/KwfnCyp9T',
            },
          ],
        },
        {
          title: 'Information',
          items: [
            {
              label: 'Contact Us ✉️',
              href: 'hardpress.dev@proton.me',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} You Can Code.<br> Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
