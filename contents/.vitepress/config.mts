// .vitepress/config.ts
import { defineConfig } from 'vitepress';
import { withSidebar } from 'vitepress-sidebar';

// Deployed under a sub-path on GitHub Pages, so public-asset URLs in `head`
// must include this base - VitePress does not prepend it automatically.
const base = '/copy-in-the-wild/';

// https://vitepress.dev/reference/site-config
const vitePressOptions = {
  title: 'Copy in the Wild',
  description: "A collection of real-world examples of UX copy, email copy, and other product writing from popular apps and websites. Curated by @ahandsel.",
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: `${base}favicon.ico`, type: 'image/x-icon' }],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: `${base}favicon.svg`,
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `${base}favicon-16x16.png`,
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `${base}favicon-32x32.png`,
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: `${base}apple-touch-icon.png`,
      },
    ],
    ['link', { rel: 'manifest', href: `${base}site.webmanifest` }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'ux copy, email copy, ahandsel, GitHub, VitePress',
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      message:
        'Found it helpful? <a href="https://ko-fi.com/ahandsel" target="_blank">Consider buying me coffee ☕</a>',
      // showWithSidebar: true, // https://github.com/vuejs/vitepress/pull/4532
    },

    search: {
      provider: 'local',
      options: {
        async _render(src, env, md) {
          // First pass: render to populate env.frontmatter and other metadata
          await md.renderAsync(src, env);

          // Use empty object as fallback if frontmatter is undefined
          const fm = env.frontmatter ?? {};

          // Honor per-page opt out: `search: false` in frontmatter
          if (fm.search === false) {
            return '';
          }

          let rewritten = src;

          // Replace headings like "# {{ $frontmatter.title }}" with a concrete title
          if (typeof fm.title === 'string' && fm.title.trim().length > 0) {
            // Replace H1 that is exactly an interpolation of frontmatter.title
            rewritten = rewritten.replace(
              /^#\s*\{\{\s*\$frontmatter\.title\s*\}\}\s*$/m,
              `# ${fm.title}`,
            );

            // Drop any other heading levels that interpolate frontmatter.title
            rewritten = rewritten.replace(
              /^#{2,6}\s*\{\{\s*\$frontmatter\.title\s*\}\}\s*$/gm,
              '',
            );
          }

          // Strip any remaining $frontmatter interpolations from indexable text
          rewritten = rewritten.replace(/\{\{\s*\$frontmatter\.[^}]*\}\}/g, '');

          // Final render used for indexing
          return await md.renderAsync(rewritten, env);
        },
      },
    }, // end of search options
    nav: [
      { text: 'Home  ✍️', link: '/' },
      {
        text: 'Tokyo-Geek  🗼',
        link: 'https://ahandsel.github.io/tokyo-geek/',
      },
      {
        text: 'Tokyo Hiker  🥾',
        link: 'https://ahandsel.github.io/tokyo-hiker/',
      },
      { text: 'Feeling lucky? 🎲', link: '/donate' },
    ],

    sidebar: [
      {
        text: 'Was this helpful?',
        items: [
          {
            text: 'Want to gift me a cup of coffee ☕',
            link: 'https://ko-fi.com/ahandsel',
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ahandsel/copy-in-the-wild' },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-coffee"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/></svg>`,
        },
        link: 'https://ko-fi.com/ahandsel',
      },
    ],
    editLink: {
      pattern: 'https://github.com/ahandsel/copy-in-the-wild/edit/main/:path',
      text: 'Edit this page on GitHub',
    },
  },
  base: '/copy-in-the-wild/',
  // Content pages live in contents/ but are served at the site root, keeping
  // public URLs (/, /donate, /account-deletion, ...) stable after the move.
  rewrites: (id) =>
    id.startsWith('contents/') ? id.slice('contents/'.length) : id,
  sitemap: {
    hostname: 'https://ahandsel.github.io/copy-in-the-wild/',
  },
  ignoreDeadLinks: true,

  vite: {
    optimizeDeps: {
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        'vitepress',
        '@nolebase/ui',
      ],
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/ui',
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
    documentRootPath: 'contents/',
    excludeByFolderDepth: null,
    excludeByGlobPattern: ['README.md', '**/snippets/**'],
    excludeFilesByFrontmatterFieldName: null,
    folderLinkNotIncludesFileName: false,
    followSymLinks: false,
    frontmatterOrderDefaultValue: 10,
    frontmatterTitleFieldName: 'title',
    hyphenToSpace: false,
    includeDotFiles: false,
    includeEmptyFolder: false,
    includeFolderIndexFile: true,
    includeRootIndexFile: false,
    keepMarkdownSyntaxFromTitle: false,
    manualSortFileNameByPriority: [],
    prefixSeparator: '.',
    removePrefixAfterOrdering: false,
    resolvePath: '',
    rootGroupCollapsed: null,
    rootGroupLink: null,
    // rootGroupText: "Table of Contents",
    scanStartPath: null,
    sortFolderTo: 'top',
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
  },
];

export default defineConfig(
  withSidebar(vitePressOptions, vitePressSidebarOptions),
);
