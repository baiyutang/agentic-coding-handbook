---
title: CLAUDE.md
description: Structure and patterns for the project context file Claude Code reads every session.
---

`CLAUDE.md` is a Markdown file at your project root that Claude Code loads at the start of
every session. It's how you give the agent durable context — the things it should know on
*every* task without you repeating them. Think of it as the onboarding doc you'd hand a new
teammate.

## What Belongs In It

Facts that are true across tasks and change rarely:

```markdown
# Acme Web App

## Stack
- Next.js 15 (App Router), TypeScript, Tailwind, Prisma, PostgreSQL

## Conventions
- kebab-case filenames, PascalCase components
- Co-locate tests with source as `*.test.ts`, run with Vitest
- Server code never imports from `src/client/`

## Commands
- `npm run dev` — start the dev server
- `npm test` — run the test suite
- `npm run typecheck` — tsc --noEmit

## Boundaries
- Never edit files in `src/generated/` — they're built from the schema
- Don't add dependencies without asking
```

## What to Leave Out

- **Task-specific detail** — that goes in the prompt, not here
- **Long prose** — the file is loaded every session; keep it scannable
- **Secrets** — it's committed to the repo
- **Anything the agent can trivially discover** — you don't need to list every file

## Keep It Short and High-Signal

Every line competes for attention. A tight 30-line file that states conventions and commands
beats a 300-line essay the agent skims. If a rule keeps getting violated, make it more
prominent — not longer.

## Scope It With Nested Files

You can place additional `CLAUDE.md` files in subdirectories. The agent reads the ones
relevant to the files it's working on, so a `src/payments/CLAUDE.md` can hold rules that only
apply to that module without cluttering the root file.

## Personal vs. Shared

Commit the shared `CLAUDE.md` so the whole team benefits. For personal preferences that
shouldn't be in the repo, use `CLAUDE.local.md` (add it to `.gitignore`).

## Treat It as Living Documentation

When you find yourself correcting the agent on the same thing twice, that's a `CLAUDE.md`
entry waiting to be written. The file gets better every time the agent gets something wrong.
