const { config } = require("vuepress-theme-hope");

module.exports = config(
    {
        lang: 'zh-CN',
        title: '我的学习笔记',
        description: 'Just playing around',
        head: [
            ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
            ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
            ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
            ['link', { rel: 'manifest', href: '/site.webmanifest' }],
            ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
            ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
            ['meta', { name: 'theme-color', content: '#ffffff' }],
        ],
        markdown: {
            plugins: [
                'markdown-it-pangu',
            ]
        },
        plugins: [
            ['@vuepress/search', {
                searchMaxSuggestions: 10
            }],
        ],
        themeConfig: {
            author: 'Who Knows',
            hostname: 'https://bobo2334.github.io/',
            // blog: false,
            mdEnhance: {
                footnote: true,
                tasklist: true,
                tex: true,
                mermaid: true
            },
            git: {
                timezone: 'Asia/Shanghai'
            },
            smoothScroll: 0
        }
    }
)
