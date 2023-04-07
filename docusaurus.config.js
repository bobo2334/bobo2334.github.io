// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const math = require("remark-math");
const katex = require("rehype-katex");
const mermaid = import("mdx-mermaid");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "笔记本",
  url: "https://iuok.me",
  baseUrl: "/",
  favicon: "favicon.ico",

  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  onDuplicateRoutes: "throw",

  tagline: "这个名字直接而明了，可以让用户一眼就知道网站的用途。",

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },

      metadata: [
        { name: "msapplication-TileColor", contnet: "#da532c" },
        { name: "theme-color", contnet: "#ffffff" },
      ],

      navbar: {
        title: "笔记本",
        logo: {
          alt: "Logo",
          src: "android-chrome-192x192.png",
        },
        items: [
          { to: "/docs/c/", label: "笔记", position: "left" },
          {
            to: "/blog/archive/",
            label: "文章",
            position: "left",
          },
          { to: "/blog/tags/", label: "文章标签", position: "left" },
          {
            href: "https://github.com/bobo2334/bobo2334.github.io",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        copyright: `Copyleft (ɔ) ${new Date().getFullYear()} iuok.me. Built with Docusaurus.`,
      },
      prism: {
        theme: require("prism-react-renderer/themes/github"),
        darkTheme: require("prism-react-renderer/themes/dracula"),
        additionalLanguages: [

        ],
      },
      tableOfContents: {
        maxHeadingLevel: 5,
      },
    }),

  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math, mermaid],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/bobo2334/bobo2334.github.io/edit/master/",
          remarkPlugins: [math, mermaid],
          rehypePlugins: [katex],
          truncateMarker: /#.+\n/,
          feedOptions: { type: ["rss", "atom"] },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      integrity:
        "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
    {
      href: "/apple-touch-icon.png",
      rel: "apple-touch-icon",
      sizes: "180x180",
    },
    {
      href: "/favicon-32x32.png",
      rel: "icon",
      sizes: "32x32",
      type: "image/png",
    },
    {
      href: "/favicon-16x16.png",
      rel: "icon",
      sizes: "16x16",
      type: "image/png",
    },
    {
      href: "/site.webmanifest",
      rel: "manifest",
    },
    {
      href: "/safari-pinned-tab.svg",
      rel: "mask-icon",
      color: "#5bbad5",
    },
  ],

};

module.exports = config;
