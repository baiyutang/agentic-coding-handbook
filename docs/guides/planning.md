---
title: Planning & Decomposition
description: Break large work into reviewable, verifiable steps an agent can execute reliably.
---

Agents are strong at execution but can lose the plot on large, open-ended tasks. A good plan
turns a vague request into a sequence of small, verifiable steps — which is exactly what
agents handle best.

## Plan Before You Build

For anything beyond a trivial change, ask for a plan *first* and review it before any code is
written:

```markdown
"Before writing code, outline your approach: which files you'll change, in what order,
and how you'll verify each step. Wait for my go-ahead."
```

Reviewing a plan is cheap. Reviewing 400 lines of wrong code is not. Many agents (Claude Code
included) have a dedicated plan mode that researches and proposes without touching files.

## What a Good Plan Contains

- **The files that will change**, and roughly what each change is
- **An order** — dependencies first, so each step builds on solid ground
- **A verification step per unit** — a test to run, a type check, a manual check
- **Explicit unknowns** — "I'm not sure how sessions are stored; I'll check `auth/` first"

If a plan is missing verification steps, that's a red flag — send it back.

## Decompose Along Natural Seams

Split work where the pieces are independently reviewable and testable:

```markdown
Feature: "User can export their data as CSV"

1. Add the `exportUserData(userId)` service + unit tests   (pure logic, easy to verify)
2. Add the GET /api/export endpoint + integration test     (wiring)
3. Add the "Export" button and download flow in the UI     (presentation)
```

Each step is a separate commit and a separate review. If step 2 is wrong, you haven't
entangled it with the UI work.

## Keep Steps Small Enough to Verify

A step is the right size when you can look at its diff and *know* whether it's correct in a
minute or two. If you can't, it's too big — ask the agent to split it further.

## Re-plan When Reality Changes

Plans are cheap and disposable. If the agent discovers midway that the data model is
different than assumed, stop and re-plan rather than letting it improvise through a bad
assumption. A thirty-second re-plan beats debugging a wrong direction for an hour.
