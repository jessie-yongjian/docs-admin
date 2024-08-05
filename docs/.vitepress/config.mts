import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs-admin/',
  lang: 'zh-CN',
  title: "webtax-docs-admin",
  description: "前端后台开发文档",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // },
      {
        text: '全局组件',
        items: [
          { 
            text: 'Button', 
            link: '/components/glob/button', 
            collapsed: true,
          },
          { 
            text: 'Icon', 
            link: '/components/glob/icon', 
            collapsed: true,
          },
          { 
            text: 'SvgIcon', 
            link: '/components/glob/svgIcon', 
            collapsed: false,
          },
        ]
      },
      {
        text: '常用组件',
        items: [
          { 
            text: 'Basic', 
            link: '/components/basic', 
            collapsed: true,
          },
          { 
            text: 'Page', 
            link: '/components/page', 
            collapsed: true,
          },
          { 
            text: 'Authority', 
            link: '/components/auth', 
            collapsed: true,
          },
          { 
            text: 'Form', 
            link: '/components/form', 
            collapsed: true,
          },
          { 
            text: 'Table', 
            link: '/components/table', 
            collapsed: true,
          },
          { 
            text: 'PopConfirmButton', 
            link: '/components/popConfirmButton', 
            collapsed: true,
          },
          { 
            text: 'CollapseContainer', 
            link: '/components/CollapseContainer', 
            collapsed: true,
          },
          { 
            text: 'ScrollContainer', 
            link: '/components/ScrollContainer', 
            collapsed: true,
          },
          { 
            text: 'LazyContainer', 
            link: '/components/LazyContainer', 
            collapsed: true,
          },
          { 
            text: 'ClickOutSide', 
            link: '/components/click-out-side', 
            collapsed: true,
          },
          { 
            text: 'CountTo', 
            link: '/components/count-to', 
            collapsed: true,
          },
          { 
            text: 'Description', 
            link: '/components/desc', 
            collapsed: true,
          },
          { 
            text: 'Drawer', 
            link: '/components/drawer', 
            collapsed: true,
          },
          { 
            text: 'Modal', 
            link: '/components/modal', 
            collapsed: true,
          },
          { 
            text: 'Upload', 
            link: '/components/upload', 
            collapsed: true,
          },
          { 
            text: 'Tree', 
            link: '/components/tree', 
            collapsed: true,
          },
          { 
            text: 'Excel', 
            link: '/components/excel', 
            collapsed: true,
          },
          { 
            text: 'QrCode', 
            link: '/components/qrcode', 
            collapsed: true,
          },
          { 
            text: 'Markdown', 
            link: '/components/markdown', 
            collapsed: true,
          },
          { 
            text: 'Loading', 
            link: '/components/loading', 
            collapsed: true,
          },
          { 
            text: 'Tinymce', 
            link: '/components/tinymce', 
            collapsed: true,
          },
          { 
            text: 'StrengthMeter', 
            link: '/components/strengthMeter', 
            collapsed: true,
          },
          { 
            text: 'Verify', 
            link: '/components/verify', 
            collapsed: true,
          },
          { 
            text: 'Transition', 
            link: '/components/transition', 
            collapsed: true,
          },
          { 
            text: 'VirtualScroll', 
            link: '/components/virtual-scroll', 
            collapsed: true,
          },

        ],
      },
      {
        text: '函数式组件',
        items: [
          { 
            text: 'ContextMenu', 
            link: '/components/functional/context-menu', 
            collapsed: true,
          },
          { 
            text: 'Loading', 
            link: '/components/functional/loading', 
            collapsed: true,
          },
          { 
            text: 'Preview', 
            link: '/components/functional/preview', 
            collapsed: true,
          },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

