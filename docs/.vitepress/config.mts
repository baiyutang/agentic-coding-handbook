import { defineConfig } from 'vitepress'
import taskLists from 'markdown-it-task-lists'
import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const pkg = JSON.parse(
  readFileSync(fileURLToPath(new URL('../../package.json', import.meta.url)), 'utf-8'),
)

let commit = ''
try {
  commit = execSync('git rev-parse --short HEAD', { stdio: ['ignore', 'pipe', 'ignore'] })
    .toString()
    .trim()
} catch {
  commit = ''
}

const version = `v${pkg.version}${commit ? ` (${commit})` : ''}`
const year = new Date().getFullYear()

const enSidebar = [
  {
    text: 'Getting Started',
    items: [
      { text: 'Overview', link: '/getting-started/' },
      { text: 'What is Agentic Coding?', link: '/getting-started/what-is-agentic-coding' },
      { text: 'Vibe vs Agentic Coding', link: '/getting-started/vibe-vs-agentic' },
      { text: 'Setup', link: '/getting-started/setup' },
    ],
  },
  {
    text: 'Choosing Your Stack',
    items: [
      { text: 'Overview', link: '/stack/' },
      { text: 'AI Coding Tools Compared', link: '/stack/tools' },
      { text: 'Tool Decision Map', link: '/stack/tool-decision-map' },
      { text: 'Models Compared', link: '/stack/models-compared' },
      { text: 'Choosing a Model', link: '/stack/models' },
      { text: 'Plans & Pricing', link: '/stack/pricing' },
      { text: 'Cost & Efficiency', link: '/stack/cost' },
      { text: 'The 10x Engineer', link: '/stack/going-10x' },
    ],
  },
  {
    text: 'Guides',
    items: [
      { text: 'Overview', link: '/guides/' },
      { text: 'Prompting', link: '/guides/prompting' },
      { text: 'Context Management', link: '/guides/context-management' },
      { text: 'Planning & Decomposition', link: '/guides/planning' },
      { text: 'Verification Loops', link: '/guides/verification' },
      { text: 'Security', link: '/guides/security' },
      { text: 'Tools', link: '/guides/tools' },
    ],
  },
  {
    text: 'Workflows',
    items: [
      { text: 'Overview', link: '/workflows/' },
      { text: 'Spec-First Development', link: '/workflows/spec-first' },
      { text: 'Spec-Driven Development', link: '/workflows/spec-driven-development' },
      { text: 'Test-Driven Development', link: '/workflows/tdd' },
      { text: 'Debugging', link: '/workflows/debugging' },
      { text: 'Code Review', link: '/workflows/code-review' },
      { text: 'Large Refactors', link: '/workflows/refactoring' },
      { text: 'Multi-Agent & Parallel Work', link: '/workflows/multi-agent' },
    ],
  },
  {
    text: 'Reference',
    items: [
      { text: 'Overview', link: '/reference/' },
      { text: 'Claude Code', link: '/reference/claude-code' },
      { text: 'CLAUDE.md', link: '/reference/claude-md' },
      { text: 'Hooks & MCP', link: '/reference/hooks-and-mcp' },
      { text: 'Prompt Recipes', link: '/reference/prompt-recipes' },
      { text: 'Further Reading', link: '/reference/further-reading' },
      { text: 'Contributing', link: '/reference/contributing' },
    ],
  },
]

const zhSidebar = [
  {
    text: '入门',
    items: [
      { text: '概览', link: '/zh/getting-started/' },
      { text: '什么是 Agentic Coding？', link: '/zh/getting-started/what-is-agentic-coding' },
      { text: 'Vibe vs Agentic Coding', link: '/zh/getting-started/vibe-vs-agentic' },
      { text: '环境配置', link: '/zh/getting-started/setup' },
    ],
  },
  {
    text: '选型',
    items: [
      { text: '概览', link: '/zh/stack/' },
      { text: 'AI 编码工具对比', link: '/zh/stack/tools' },
      { text: '工具决策地图', link: '/zh/stack/tool-decision-map' },
      { text: '模型对比', link: '/zh/stack/models-compared' },
      { text: '模型选择', link: '/zh/stack/models' },
      { text: '订阅与价格', link: '/zh/stack/pricing' },
      { text: '成本与效率', link: '/zh/stack/cost' },
      { text: '迈向 10x 工程师', link: '/zh/stack/going-10x' },
    ],
  },
  {
    text: '指南',
    items: [
      { text: '概览', link: '/zh/guides/' },
      { text: 'Prompting', link: '/zh/guides/prompting' },
      { text: '上下文管理', link: '/zh/guides/context-management' },
      { text: '规划与拆解', link: '/zh/guides/planning' },
      { text: '验证循环', link: '/zh/guides/verification' },
      { text: '安全', link: '/zh/guides/security' },
      { text: '工具设计', link: '/zh/guides/tools' },
    ],
  },
  {
    text: '工作流',
    items: [
      { text: '概览', link: '/zh/workflows/' },
      { text: 'Spec-First 开发', link: '/zh/workflows/spec-first' },
      { text: 'Spec-Driven 开发（SDD）', link: '/zh/workflows/spec-driven-development' },
      { text: '测试驱动开发', link: '/zh/workflows/tdd' },
      { text: '调试', link: '/zh/workflows/debugging' },
      { text: '代码审查', link: '/zh/workflows/code-review' },
      { text: '大重构', link: '/zh/workflows/refactoring' },
      { text: '多 agent 与并行', link: '/zh/workflows/multi-agent' },
    ],
  },
  {
    text: '参考',
    items: [
      { text: '概览', link: '/zh/reference/' },
      { text: 'Claude Code', link: '/zh/reference/claude-code' },
      { text: 'CLAUDE.md', link: '/zh/reference/claude-md' },
      { text: 'Hooks 与 MCP', link: '/zh/reference/hooks-and-mcp' },
      { text: 'Prompt 配方库', link: '/zh/reference/prompt-recipes' },
      { text: '延伸阅读', link: '/zh/reference/further-reading' },
      { text: '贡献指南', link: '/zh/reference/contributing' },
    ],
  },
]

const siteUrl = 'https://aicode.gokr.io'
const siteTitle = 'Agentic Coding Handbook'
const siteDesc = 'A practical guide to agentic coding and AI-assisted software development — models, tools, workflows, and prompting patterns for engineers.'

export default defineConfig({
  title: siteTitle,
  description: siteDesc,
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: false,

  sitemap: { hostname: siteUrl },

  head: [
    ['meta', { name: 'keywords', content: 'agentic coding, AI coding, AI-assisted development, Claude Code, LLM coding, AI programming, software engineering, prompt engineering, 智能编程, AI 编程, agentic development' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: siteTitle }],
    ['meta', { property: 'og:url', content: siteUrl }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:site', content: '@baiyutang' }],
    ['link', { rel: 'canonical', href: siteUrl }],
  ],

  transformPageData(pageData) {
    const title = pageData.title ? `${pageData.title} | ${siteTitle}` : siteTitle
    const desc = pageData.description || siteDesc
    const url = `${siteUrl}/${pageData.relativePath.replace(/\.md$/, '').replace(/index$/, '')}`
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: desc }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: desc }],
    )
  },

  markdown: {
    config: (md) => {
      md.use(taskLists, { enabled: false, label: true })
    },
  },

  themeConfig: {
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/baiyutang/agentic-coding-handbook' },
    ],
    // Consumed by the site-wide VersionFooter (layout-bottom slot).
    versionLine: `© ${year} Agentic Coding Handbook · ${version}`,
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Getting Started', link: '/getting-started/' },
          { text: 'Choosing Your Stack', link: '/stack/' },
          { text: 'Guides', link: '/guides/' },
          { text: 'Workflows', link: '/workflows/' },
          { text: 'Reference', link: '/reference/' },
          { text: 'Feedback', link: 'https://github.com/baiyutang/agentic-coding-handbook/issues/new/choose' },
        ],
        sidebar: enSidebar,
        lastUpdatedText: 'Last updated',
        editLink: {
          pattern: 'https://github.com/baiyutang/agentic-coding-handbook/edit/main/docs/:path',
          text: 'Edit this page on GitHub',
        },
        docFooter: { prev: 'Previous', next: 'Next' },
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-Hans',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '入门', link: '/zh/getting-started/' },
          { text: '选型', link: '/zh/stack/' },
          { text: '指南', link: '/zh/guides/' },
          { text: '工作流', link: '/zh/workflows/' },
          { text: '参考', link: '/zh/reference/' },
          { text: '反馈', link: 'https://github.com/baiyutang/agentic-coding-handbook/issues/new/choose' },
        ],
        sidebar: zhSidebar,
        lastUpdatedText: '最后更新',
        outline: { label: '本页目录' },
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        editLink: {
          pattern: 'https://github.com/baiyutang/agentic-coding-handbook/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页',
        },
        docFooter: { prev: '上一页', next: '下一页' },
      },
    },
  },
})
