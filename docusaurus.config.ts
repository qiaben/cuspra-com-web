import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Cuspra',
  tagline: 'The dental practice management system, reimagined.',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://cuspra.com',
  baseUrl: '/',

  organizationName: 'qiaben',
  projectName: 'cuspra-com-web',

  onBrokenLinks: 'warn',

  headTags: [
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Cuspra',
        url: 'https://cuspra.com',
        description:
          'Cuspra is a modern, cloud-native dental practice management system covering scheduling, charting, imaging, billing, and patient communications.',
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Cuspra',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description:
          'Cloud-native dental practice management system. Scheduling, clinical charting, imaging, billing, and patient communications in one platform.',
      }),
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/cuspra-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Cuspra',
      logo: {
        alt: 'Cuspra',
        src: 'img/logo-navbar.png',
      },
      items: [
        { to: '/platform', label: 'Platform', position: 'left' },
        { to: '/clinical', label: 'Clinical', position: 'left' },
        { to: '/practice', label: 'Practice', position: 'left' },
        { to: '/patients', label: 'Patients', position: 'left' },
        { to: '/company', label: 'Company', position: 'left' },
        {
          to: '/contact',
          label: 'Request access',
          position: 'right',
          className: 'navbar-cta',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Platform',
          items: [
            { label: 'Overview', to: '/platform' },
            { label: 'Clinical', to: '/clinical' },
            { label: 'Practice', to: '/practice' },
            { label: 'Patients', to: '/patients' },
          ],
        },
        {
          title: 'Company',
          items: [
            { label: 'About', to: '/company' },
            { label: 'Contact', to: '/contact' },
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'Privacy', to: '/privacy' },
            { label: 'Terms', to: '/terms' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Qiaben LLC. Cuspra is a product of Qiaben.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
