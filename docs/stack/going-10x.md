---
title: The 10x Engineer
description: A checklist that turns tools, models, and methodology into a real productivity multiplier.
---

# The 10x Engineer

Agentic coding doesn't make you 10x by typing faster. It multiplies you by changing **what
you spend your attention on** — from writing every line to directing, verifying, and
deciding. This page distills the whole handbook into the habits that actually compound.

## The Mindset Shift

The multiplier comes from a role change, not a speed boost:

- **3x** — You use AI for autocomplete and snippets. Helpful, but you still drive every line.
- **10x** — You **delegate whole tasks**: plan, let the agent implement and verify, review the
  diff. You operate as a reviewer and architect.
- **20x** — You **run work in parallel** and trust your verification: multiple tasks in
  flight, each gated by tests and review, with sharp instructions and strong project context.

The jump isn't more tools — it's trusting a disciplined loop enough to let go of the keyboard.

## The Checklist

Work through these; each links to the chapter that goes deep.

**Set up for leverage**
- [ ] Right tool for how you work — [tools compared](/stack/tools)
- [ ] Right model for the task, not reflexively the biggest — [choosing a model](/stack/models)
- [ ] A tight, high-signal [`CLAUDE.md`](/reference/claude-md) so you never re-explain your stack

**Direct, don't dictate**
- [ ] [Specific prompts](/guides/prompting): scope, constraints, examples, and the *why*
- [ ] [Plan before building](/guides/planning) on anything non-trivial; review the plan, not 400 lines of code
- [ ] Break work into small, [reviewable slices](/guides/planning)

**Trust the loop**
- [ ] Give the agent an [objective signal](/guides/verification) — tests, types, a build
- [ ] Insist it runs the check and fixes failures itself; "should pass" ≠ "passes"
- [ ] Prefer [TDD](/workflows/tdd) where a test can define "done"

**Review like it matters**
- [ ] Read the [diff, not the description](/workflows/code-review)
- [ ] Focus your attention on intent, design, and risk — the agent handles the mechanics
- [ ] Watch scope: catch the "helpful" changes you didn't ask for

**Keep it lean**
- [ ] One task per session; [`/clear` and `/compact`](/guides/context-management) to fight drift
- [ ] Pull in just enough context, not the whole repo
- [ ] Spend model budget where thinking is the bottleneck — [model choice & cost](/stack/models)

## The Compounding Effect

None of these habits is dramatic on its own. The multiplier is that they **stack**: a good
plan makes verification cheap; verification makes review fast; lean context makes the model
sharp; sharp output makes delegation safe; safe delegation lets you run more in parallel.

That loop — direct, verify, review, repeat — is the whole game. Get it tight on one task,
then run it on many.
