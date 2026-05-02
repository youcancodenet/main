// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'You Can Code', // Updated here
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  url: 'https://youcancode.net',
  baseUrl: '/',

  organizationName: 'youcancodenet',
  projectName: 'main',

  // ... (keep other settings the same)

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'You Can Code', // Updated here for the navigation bar
        logo: {
          alt: 'You Can Code Logo',
          src: 'img/logo.svg',
        },
        // ... (rest of navbar items)
      },
      footer: {
        // ... (keep other footer settings)
        copyright: `Copyright © ${new Date().getFullYear()} You Can Code. Built with Docusaurus.`,
      },
    }),
};

export default config;