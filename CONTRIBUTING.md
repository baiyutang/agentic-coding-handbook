# Contributing / 贡献指南

Thanks for helping improve the **Agentic Coding Handbook**! Contributions of all sizes are
welcome — from fixing a typo to adding a whole page.

感谢帮助改进这本手册！欢迎任何大小的贡献 —— 从改一个错别字到新增一整页。

---

## Ways to Contribute / 参与方式

- **Feedback / 反馈** — Open an issue via the **Feedback** link in the site nav (or the
  [issue templates](../../issues/new/choose)). No fork needed. 通过站点导航里的"反馈"链接开
  issue 即可，无需 fork。
- **Small edits / 小改动** — Click **"Edit this page on GitHub"** at the bottom of any page.
  GitHub will fork the repo for you; edit in the browser and open a pull request. 点任意页面
  底部的"在 GitHub 上编辑此页"，GitHub 会自动帮你 fork，在浏览器里改完发 PR。
- **Larger changes / 较大改动** — Fork, clone, branch, and open a PR (see below). Fork、
  clone、建分支、发 PR（见下）。

## The Pull Request Flow / PR 流程

1. **Fork** this repository to your account. 把本仓库 fork 到你的账号。
2. **Clone** your fork and create a branch: 克隆你的 fork 并建分支：
   ```bash
   git clone https://github.com/<you>/agentic-coding-handbook.git
   cd agentic-coding-handbook
   git checkout -b my-change
   ```
3. **Make your change** and preview locally (see below). 修改并本地预览。
4. **Commit and push** to your fork. 提交并推送到你的 fork。
5. **Open a pull request** against `main`. The maintainer reviews and merges; merges to `main`
   deploy automatically. 向 `main` 发 PR，维护者审查合并；合并到 `main` 会自动部署。

## Local Setup / 本地运行

This site is built with [VitePress](https://vitepress.dev) and uses **pnpm**.
本站基于 VitePress，使用 pnpm。

```bash
pnpm install     # install dependencies / 安装依赖
pnpm dev         # local preview at http://localhost:5173 / 本地预览
pnpm build       # production build (must pass) / 生产构建（须通过）
```

Please make sure `pnpm build` passes before opening a PR — it checks for dead links.
发 PR 前请确保 `pnpm build` 通过 —— 它会检查死链。

## Conventions / 约定

- **Content lives in `docs/`.** English pages are at the root (e.g. `docs/guides/`), Chinese
  under `docs/zh/`. 内容在 `docs/` 下：英文在根，中文在 `docs/zh/`。
- **Keep both languages in sync.** If you add or change an English page, mirror it in `zh/`
  (and vice versa). 中英文保持同步：改了英文页，也在 `zh/` 同步一份。
- **Internal links** have no trailing slash for leaf pages (`/guides/prompting`) and a
  trailing slash for section indexes (`/guides/`). 内部链接：叶子页不带尾斜杠，章节首页带。
- **Prefer durable guidance** over fast-changing trivia; put volatile details (prices, model
  versions) behind "as of" notes and official links. 优先写经得起时间的内容；易变细节标注
  日期并附官方链接。
- **Front-matter**: every page needs `title` and `description`. 每页需要 `title` 和
  `description` 前置元数据。

## Questions? / 有疑问？

Open an issue with the **Feedback** template — happy to help.
用"反馈"模板开个 issue 即可，乐意帮忙。
