---
title: Contributing
description: How to suggest changes, fix errors, or add content to this handbook.
---

# Contributing

This handbook is open source and improves through community contributions. You don't need any
special permissions — anyone with a GitHub account can help. Here's how.

## Three Ways to Help

### 1. Send feedback (easiest)

Spotted something wrong or confusing? Use the **Feedback** link in the top navigation to open
an issue. No fork, no code — just tell us what's up. A short, structured form captures the page,
the type of issue, and the details.

### 2. Edit a page in your browser

Every page has an **"Edit this page on GitHub"** link at the bottom. Click it and:

1. GitHub offers to **fork** the repository (a copy under your account) — accept it.
2. Edit the Markdown right in the browser.
3. Click **Propose changes**, then **Create pull request**.

That's it — no local setup needed. Perfect for typos, corrections, and small wording fixes.

### 3. Make a larger change locally

For new pages or multi-file changes, work locally:

```bash
# 1. Fork this repo on GitHub, then:
git clone https://github.com/<you>/agentic-coding-handbook.git
cd agentic-coding-handbook
git checkout -b my-change

# 2. Install and preview
pnpm install
pnpm dev            # http://localhost:5173

# 3. Build must pass (checks dead links)
pnpm build

# 4. Commit, push to your fork, then open a pull request
```

## What Happens to Your Pull Request

The maintainer reviews your PR — you might get comments or a request to tweak something. Once
merged into `main`, the site **redeploys automatically**. Your change is live.

## A Few Conventions

- **Bilingual.** English pages live at the root of `docs/`; Chinese under `docs/zh/`. If you
  change one language, mirror it in the other.
- **Durable over trendy.** Prefer guidance that stays true; put volatile facts (prices, model
  versions) behind "as of" notes with official links.
- **Front-matter.** Every page needs a `title` and `description`.
- **Links.** Leaf pages have no trailing slash (`/guides/prompting`); section indexes do
  (`/guides/`).

See the full [`CONTRIBUTING.md`](https://github.com/baiyutang/agentic-coding-handbook/blob/main/CONTRIBUTING.md)
in the repo for details.

::: tip
Not sure where a change belongs, or whether an idea fits? Open a [feedback issue](https://github.com/baiyutang/agentic-coding-handbook/issues/new/choose)
first and ask — that's always welcome.
:::
