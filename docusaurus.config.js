// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');
const mermaid = require('mdx-mermaid');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: '我的学习笔记',
    tagline: '这是一个用 Docusaurus 生成的静态网站，用于存储和展示我的学习笔记。',
    url: 'https://bobo2334.github.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'bobo2334', // Usually your GitHub org/user name.
    projectName: 'bobo2334.github.io', // Usually your repo name.

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/bobo2334/bobo2334.github.io/edit/master/',
                    remarkPlugins: [math, mermaid],
                    rehypePlugins: [katex],
                },
                blog: {
                    showReadingTime: false,
                    editUrl: 'https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/',
                    remarkPlugins: [math, mermaid],
                    rehypePlugins: [katex],
                    blogSidebarTitle: '最近的文章',
                    truncateMarker: /<!--\s*(more)\s*-->/,
                    feedOptions: { type: ['rss', 'atom'] }
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    stylesheets: [
        {
            href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
            integrity: "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
            crossorigin: "anonymous",
        },
    ],

    i18n: {
        defaultLocale: 'zh-cn',
        locales: ['zh-cn'],
        localeConfigs: {
            'zh-cn': {
                label: '中文（中国）',
                direction: 'ltr',
            }
        },
    },

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: '我的学习笔记',
                logo: {
                    alt: 'Logo',
                    src: 'android-chrome-512x512.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'index',
                        position: 'left',
                        label: '笔记',
                    },
                    { to: '/blog/archive', label: '文章', position: 'left' },
                    {
                        href: 'https://github.com/bobo2334/bobo2334.github.io',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['powershell', 'java'],
            },
            colorMode: {
                respectPrefersColorScheme: true,
            },
            tableOfContents: {
                maxHeadingLevel: 5
            }
        }),
    plugins: [
        [
            '@docusaurus/plugin-pwa',
            {
                offlineModeActivationStrategies: [
                    'appInstalled',
                    'standalone',
                    'queryString',
                ],
            },
        ]
    ],
};

module.exports = config;
