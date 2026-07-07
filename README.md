# Agentic Coding Handbook

A practical, bilingual (English + 中文) handbook for building software with AI agents —
from first principles to production workflows.

一本面向实践的中英双语手册，讲如何用 AI agent 构建软件 —— 从第一性原理到生产级工作流。

**🌐 Live site:** https://aicode.gokr.io

---

## About

Agentic coding is a shift from prompting for snippets to delegating whole features to an agent
that plans, implements, tests, and iterates — with you directing and reviewing. This handbook
focuses on **durable practices and mental models**, not tool trivia that changes every release,
and keeps the fast-moving details (models, prices) behind dated notes and official links.

It's for developers who already write code and want to work effectively *with* AI agents. No
prior AI-tool experience required.

Agentic coding 是一种范式转变：从"让 AI 补片段"转向"把整个功能交给 agent"去规划、实现、
测试、迭代，而你负责指挥与审查。本手册聚焦**经得起时间的实践与心智模型**，把易变细节
（模型、价格）放在带日期的说明和官方链接后面。适合已经会写代码、想高效地"与" AI 协作的开发者。

## What's Inside

- **Getting Started** — what agentic coding is, vibe vs agentic, setup
- **Choosing Your Stack** — AI coding tools, model selection, cross-provider model comparison
  (with SWE-bench data), plans & pricing, cost, the 10x checklist
- **Guides** — prompting, context management, planning, verification, security, tool design
- **Workflows** — spec-first, spec-driven development (SDD), TDD, debugging, code review,
  refactoring, multi-agent
- **Reference** — Claude Code, CLAUDE.md, hooks & MCP, prompt recipes, further reading

Every page is available in English and 简体中文 (`/zh/`).

## Local Development

Built with [VitePress](https://vitepress.dev); package manager **pnpm**.

```bash
pnpm install     # install dependencies / 安装依赖
pnpm dev         # local preview at http://localhost:5173 / 本地预览
pnpm build       # production build (checks dead links) / 生产构建（检查死链）
```

Content lives in `docs/`: English at the root, Chinese under `docs/zh/`.
内容在 `docs/` 下：英文在根，中文在 `docs/zh/`。

## Contributing

Contributions of all sizes are welcome. The quickest paths:

- **Feedback** — use the *Feedback* link in the site nav to open an issue (no fork needed).
- **Small edits** — click *"Edit this page on GitHub"* at the bottom of any page.
- **Larger changes** — fork, branch, and open a pull request.

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for the full guide.

## Tech Stack

- [VitePress](https://vitepress.dev) — static docs site
- **pnpm** — package manager
- [Vercel](https://vercel.com) — hosting & continuous deployment (auto-deploys on push to `main`)

## License

© 2026 baiyutang. This work is licensed under a
[Creative Commons Attribution 4.0 International License (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).

You are free to **share** and **adapt** the material for **any purpose, even commercially** —
as long as you give **appropriate credit**, provide a link to the license, and indicate if
changes were made. See [`LICENSE`](LICENSE) for the full terms.

本作品采用[知识共享 署名 4.0 国际许可协议（CC BY 4.0）](https://creativecommons.org/licenses/by/4.0/deed.zh)。
你可以自由地**分享**和**演绎**本材料，**用于任何目的，包括商业用途** —— 只要**署名**、
附上许可链接、并注明是否有修改。完整条款见 [`LICENSE`](LICENSE)。

---

Made with ❤️ for developers leveling up with AI agents.
