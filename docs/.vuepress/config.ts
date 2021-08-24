import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: '我的学习笔记',
  description: 'Just playing around',
  head: [],
  plugins: [
    "@vuepress/plugin-search",
    // "@vuepress/plugin-shiki",
  ],
  extendsMarkdown: (md) => {
    md.use(require('markdown-it-footnote'))
      .use(require('markdown-it-task-lists'))
      .use(require('markdown-it-pangu'))
      .use(require('markdown-it-plantuml'))
  }
})
