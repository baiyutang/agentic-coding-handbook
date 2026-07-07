# Agentic Coding Handbook — Project Guide

## Overview

Bilingual (EN + 简体中文) documentation site built with VitePress. Covers agentic coding practices, model/tool selection, workflows, and reference material for engineers.

- **Live site:** https://aicode.gokr.io
- **Vercel fallback:** https://agentic-coding-handbook.vercel.app
- **GitHub:** https://github.com/baiyutang/agentic-coding-handbook

## Tech Stack

- **Framework:** VitePress 1.x
- **Package manager:** pnpm (v11+)
- **Hosting:** Vercel — auto-deploys on push to `main`
- **Analytics:** Vercel Analytics (`@vercel/analytics`, injected via `enhanceApp`)
- **Domain:** `aicode.gokr.io` via Porkbun DNS → CNAME `cname.vercel-dns.com`

## Project Structure

```
docs/
  index.md                   # EN homepage (VitePress home layout)
  getting-started/           # EN section pages
  stack/
  guides/
  workflows/
  reference/
  zh/                        # Chinese mirror — same structure under /zh/
  .vitepress/
    config.mts               # Main config: i18n, sidebar, SEO, sitemap
    theme/
      index.ts               # Custom theme: VersionFooter + analytics inject
      VersionFooter.vue      # Footer with version + commit hash
      custom.css             # Brand colors (violet)
```

## i18n

- English: root locale (`/`), files in `docs/`
- Chinese: `zh` locale (`/zh/`), files in `docs/zh/`
- Every EN page must have a matching ZH page and vice versa

## Key Config Notes

- `pnpm-workspace.yaml` has `allowBuilds: { esbuild: true }` — required for pnpm v11, do not remove
- `sitemap.hostname` is set to `https://aicode.gokr.io` in `config.mts`
- `transformPageData` generates per-page OG/Twitter meta automatically — no need to add head tags manually in frontmatter
- Task lists (`- [ ]`) require `markdown-it-task-lists` plugin — already wired in config

## Frontmatter Requirements

Every page needs:
```yaml
---
title: Page Title
description: One sentence, 120–160 chars, includes relevant keywords.
---
```

## Commands

```bash
pnpm install     # install deps
pnpm dev         # dev server at http://localhost:5173
pnpm build       # production build (also validates dead links + generates sitemap)
pnpm preview     # preview prod build
```

## Deployment

Push to `main` → Vercel auto-deploys. No manual steps needed.
Build command: `pnpm build` / Output: `docs/.vitepress/dist`

## Branding / SEO Notes

- Brand name stays **"Agentic Coding Handbook"** (developer-facing terminology)
- SEO covers broader terms: "AI coding", "AI-assisted development", "AI 编程" via keywords meta and descriptions
- High-value pages to keep descriptions sharp: `stack/tools`, `stack/models-compared`, `getting-started/what-is-agentic-coding`

## License

CC BY 4.0 — free to share and adapt, including commercially, with attribution.
