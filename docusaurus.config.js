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
    favicon: 'favicon.ico',
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
        {
            href: "/apple-touch-icon.png",
            rel: "apple-touch-icon",
            sizes: "180x180"
        },
        {
            href: "/favicon-32x32.png",
            rel: "icon",
            sizes: "32x32",
            type: "image/png"
        },
        {
            href: "/favicon-16x16.png",
            rel: "icon",
            sizes: "16x16",
            type: "image/png"
        },
        {
            href: "/manifest.json",
            rel: "manifest",
        },
        {
            href: "/safari-pinned-tab.svg",
            rel: "mask-icon",
            color: "#5bbad5",
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
            metadatas: [
                { name: 'msapplication-TileColor', contnet: '#da532c' },
                { name: 'theme-color', contnet: '#25c2a0' },
            ],

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
        ],
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                language: ["en", "zh"],
                hashed: true,
                highlightSearchTermsOnTargetPage: true,
                translations: {
                    "search_placeholder": "搜索",
                    "see_all_results": "查看所有结果",
                    "no_results": "什么也没有搜索到",
                    "search_results_for": "\"{{ keyword }}\"的搜索结果",
                    "search_the_documentation": "Search the documentation",
                    "count_documents_found": "{{ count }} 条搜索结果",
                    "count_documents_found_plural": "{{ count }} 条搜索结果",
                    "no_documents_were_found": "什么也没有搜索到"
                }
            }
        ]
    ],
};

module.exports = config;
