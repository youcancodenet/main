// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'You Can Code',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Updated to your custom domain
  url: 'https://youcancode.net',
  
  // Set to '/' for custom root domains
  baseUrl: '/',

  // GitHub pages deployment config.
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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/youcancodenet/main/tree/main/',
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      // Manual toggle configuration
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false, // Disables system mode detection
      },
      navbar: {
        title: 'You Can Code',
        logo: {
          alt: 'You Can Code Logo',
          src: 'img/logo.svg', // Reverted to default placeholder as requested
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
 //         {to: '/blog', label: 'Blog', position: 'left'},
          // Social Icons positioned to the right
          {
            href: '',
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
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
 /*             {
                label: 'Blog',
                to: '/blog',
              },*/
              {
                label: 'GitHub',
                href: 'https://github.com/youcancodenet/main',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} You Can Code. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
