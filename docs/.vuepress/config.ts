import { defineUserConfig } from 'vuepress-vite'
import type { DefaultThemeOptions } from 'vuepress-vite'

export default defineUserConfig<DefaultThemeOptions>({
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
  plugins: [
    "@vuepress/plugin-search",
    ["@vuepress/pwa", { skipWaiting: true }]
    // "@vuepress/plugin-shiki",
  ],
  extendsMarkdown: (md) => {
    md.use(require('markdown-it-footnote'))
      .use(require('markdown-it-task-lists'))
      .use(require('markdown-it-pangu'))
      .use(require('markdown-it-plantuml'))
  }
})
