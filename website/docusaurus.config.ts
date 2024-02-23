import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'YYPlore',
  tagline: '我的数字花园',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://yuanyp8.github.io',

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yuanyp8', // Usually your GitHub org/user name.
  projectName: 'yuanyp8.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/yuanyp8/yuanyp8.github.io/tree/master/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: {
          showReadingTime: true,
          blogTitle: " ❤NOTES",
          blogSidebarTitle: "文章列表",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/yuanyp8/yuanyp8.github.io/tree/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  // 这里为是增加live-block
  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig: {
    metadata: [
      {
        name: "keywords",
        content: "wiki, blog, c, c++, docker, python, linux, golang, kubernetes",
      },
    ],
    // Replace with your project's social card
    image: 'img/logo.png',
    navbar: {
      title: 'YYPlore',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
        // 可以调整为黑夜模式
        // srcDark: 'img/docusaurus_keytar.svg',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'doc',
          // sidebarId: 'docsSidebar',
          docId: 'intro',
          position: 'left',
          label: '🖐Docs',
        },
        // 右侧github导航栏
        {
          href: 'https://github.com/yuanyp8/yuanyp8.github.io',
          label: 'GitHub',
          position: 'right',
        },
        // 左侧博客导航栏
        {to: '/blog', label: '❤随笔', position: 'left'},
        // {to: '/work', label: '📗Work', position: 'left'},
        // {to: '/life', label: '🚴Life', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'eBpf专栏',
              to: '/docs/category/ebpf专栏',
            },
            {
              label: 'HTTP庖丁解牛',
              to: '/docs/category/HTTP庖丁解牛',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/yuanyp8',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: '随笔',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} YYPlore Project, Stay Hungry Stay Foolish.`,
    },
    prism: {
      // 这里能控制代码块的颜色, theme为白色主题下的代码块
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // 目录层级
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    // 上方横条
    announcementBar: {
      id: 'announcementBar-3',
      content:
          '🚀 持续更新中··· <b><a target="_blank" rel="noopener noreferrer" href="https://github.com/yuanyp8/yuanyp8.github.io/tree/master/"> 如果你觉得还不错,就给一个⭐️吧~🥳</a> ',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: true, // Defaults to `true`.
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
