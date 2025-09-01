// .vitepress/config.ts
import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";
import { withPwa } from "@vite-pwa/vitepress";

// https://vitepress.dev/reference/site-config
const vitePressOptions = {
  title: "Copy in the Wild",
  description: "Let's go to Japan!",
  head: [
    ["meta", { name: "theme-color", content: "#ffffff" }],
    ["link", { rel: "icon", href: "/favicon.ico", type: "image/x-icon" }],
    ["link", { rel: "mask-icon", href: "/favicon.ico", color: "#ffffff" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "ux copy, email copy, ahandsel, GitHub, VitePress",
      },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: "/pwa-192x192.png", sizes: "192x192" },
    ],
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      message:
        'Found it helpful? <a href="https://ko-fi.com/ahandsel" target="_blank">Consider buying me coffee ☕</a>',
      // showWithSidebar: true, // https://github.com/vuejs/vitepress/pull/4532
    },
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home  ✍️", link: "/" },
      { text: "Tokyo-Geek  🗼", link: "https://ahandsel.github.io/tokyo-geek/" },
      { text: "Tokyo Hiker  🥾", link: "https://ahandsel.github.io/Tokyo_Hiker/" },
      { text: "Feeling lucky? 🎲", link: "/donate" },
    ],

    sidebar: [
      {
        text: "Was this helpful?",
        items: [
          {
            text: "Want to gift me a cup of coffee ☕",
            link: "https://ko-fi.com/ahandsel",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/ahandsel/copy-in-the-wild" },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-coffee"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/></svg>`,
        },
        link: "https://ko-fi.com/ahandsel",
      },
    ],
    editLink: {
      pattern: "https://github.com/ahandsel/copy-in-the-wild/edit/main/:path",
      text: "Edit this page on GitHub",
    },
  },
  base: "/copy-in-the-wild/",
  sitemap: {
    hostname: "https://ahandsel.github.io/copy-in-the-wild/",
  },
  ignoreDeadLinks: true,

  // PWA options handled by @vite-pwa/vitepress
  pwa: {
    strategies: "generateSW",
    mode: "development",
    registerType: "autoUpdate",
    injectRegister: "script-defer",
    includeAssets: ["favicon.ico", "pwa-192x192.png"],
    manifest: {
      name: "Copy in the Wild",
      short_name: "copy-in-the-wild",
      theme_color: "#ffffff",
      start_url: "/copy-in-the-wild/",
      display: "standalone",
      background_color: "#ffffff",
      icons: [], // will be generated
    },
    // Ensure a preset is provided for the assets generator
    pwaAssets: {
      // config: true,
      preset: "minimal-2023",
      image: "public/cat-icon-profile.png",
    },
    workbox: {
      globPatterns: ["**/*.{css,js,html,svg,png,ico,txt,woff2}"],
    },
    experimental: {
      includeAllowlist: true,
    },
    devOptions: {
      enabled: false,
      suppressWarnings: true,
      navigateFallback: "/",
    },
  },

  vite: {
    optimizeDeps: {
      exclude: [
        "@nolebase/vitepress-plugin-enhanced-readabilities/client",
        "vitepress",
        "@nolebase/ui",
      ],
    },
    ssr: {
      noExternal: [
        "@nolebase/vitepress-plugin-enhanced-readabilities",
        "@nolebase/ui",
      ],
    },
  },
};

const vitePressSidebarOptions = [
  // VitePress Sidebar's options here...
  // https://vitepress-sidebar.cdget.com/guide/options
  {
    basePath: null,
    capitalizeEachWords: false,
    capitalizeFirst: false,
    collapsed: true,
    collapseDepth: 1,
    debugPrint: false,
    documentRootPath: "/",
    excludeByFolderDepth: null,
    excludeByGlobPattern: ["README.md"],
    excludeFilesByFrontmatterFieldName: null,
    folderLinkNotIncludesFileName: false,
    followSymLinks: false,
    frontmatterOrderDefaultValue: 10,
    frontmatterTitleFieldName: "title",
    hyphenToSpace: false,
    includeDotFiles: false,
    includeEmptyFolder: false,
    includeFolderIndexFile: true,
    includeRootIndexFile: false,
    keepMarkdownSyntaxFromTitle: false,
    manualSortFileNameByPriority: [],
    prefixSeparator: ".",
    removePrefixAfterOrdering: false,
    resolvePath: "/",
    rootGroupCollapsed: null,
    rootGroupLink: null,
    // rootGroupText: "Table of Contents",
    scanStartPath: null,
    sortFolderTo: "top",
    sortMenusByFileDatePrefix: false,
    sortMenusByFrontmatterDate: false,
    sortMenusByFrontmatterOrder: true,
    sortMenusByName: false,
    sortMenusOrderByDescending: false,
    sortMenusOrderNumericallyFromLink: false,
    sortMenusOrderNumericallyFromTitle: false,
    underscoreToSpace: false,
    useFolderLinkFromIndexFile: true,
    useFolderLinkFromSameNameSubFile: false,
    useFolderTitleFromIndexFile: true,
    useTitleFromFileHeading: false,
    useTitleFromFrontmatter: true,
  }
];

// export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));
// export default defineConfig(
//   withPwa(withSidebar(vitePressOptions, vitePressSidebarOptions))
// export default withPwa(
//   defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions))
// );
export default withPwa(
  defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions))
);