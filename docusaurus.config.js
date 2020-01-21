module.exports = {
  title: 'Publication 000: Design Rules',
  tagline: 'An opinionated set of rules regarding design practices',
  url: 'https://designpoints.leoji.codes',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'theleoji',
  projectName: 'design-points',
  themeConfig: {
    navbar: {
      title: 'Design Rules',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg'
      },
      links: [
        { to: 'docs/introduction', label: 'Rules', position: 'left' },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/theleoji/design-points',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/theleoji/design-points'
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/theleoji'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Leo Ji. Built with Docusaurus.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/theleoji/design-points/edit/master/website/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
