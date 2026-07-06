---
title: Multi-Agent & Parallel Work
description: Run more than one agent at once — orchestration, parallelism, and long-running work.
---

# Multi-Agent & Parallel Work

The jump from good to exceptional productivity often isn't a better single session — it's
**running several in parallel**. Anthropic's 2026 trends work highlights the shift from single
agents to coordinated teams and from minute-long tasks to agents that work for hours. This page
is about doing that without creating chaos.

## Why Parallelize

One agent works through a task sequentially in one context window. Multiple agents, each with
their own context, can attack independent pieces at once — and each stays sharper because its
context is scoped to just its slice. The [10x → 20x jump](/stack/going-10x) is largely this:
several verified tasks in flight instead of one.

## Two Patterns

### 1. Parallel independent tasks

The simplest and most reliable: split work into pieces that **don't touch the same files**, and
run an agent on each.

- Feature A in one session, unrelated bugfix B in another
- One agent writes tests while another writes docs
- Each lands as its own branch and its own [review](/workflows/code-review)

The rule that keeps this sane: **parallelize along seams with no shared state.** Two agents
editing the same module concurrently is a merge conflict waiting to happen.

### 2. Orchestrator + specialists

For a bigger task, one "orchestrator" decomposes the work and hands scoped subtasks to
specialized agents (architecture, implementation, testing, review), then integrates the
results. Some tools support this directly via subagents; you can also do it manually by
running a planning session, then spawning focused sessions per step.

- **Strength:** parallel reasoning across separate context windows; each specialist stays focused
- **Cost:** you now coordinate several outputs and must integrate them cleanly

## What You Need to Make It Work

Parallelism raises the stakes on the fundamentals — so lean on them harder:

- **Clean seams** — [decompose](/guides/planning) so pieces are genuinely independent
- **Version control discipline** — a branch per agent; integrate deliberately, not by luck
- **Strong verification** — you can't watch every session, so each must be gated by
  [tests](/guides/verification) before it merges
- **A way to track state** — know what each session is doing and where it is

## Long-Running Agents

Agents increasingly work for long stretches — planning, iterating, recovering from failures
across many steps. To delegate a long task safely:

- Give it a crisp [spec](/workflows/spec-first) and a plan you've reviewed
- Define **checkpoints** where it pauses for your judgment on consequential decisions
- Make sure it has an objective signal (tests, build) to self-correct against unattended

## Don't Over-Reach

Parallelism has overhead: more branches, more integration, more to review. For a single small
task, one focused session still wins. Reach for multiple agents when the work **genuinely
splits** into independent pieces — not to look busy. Coordination you don't need is just cost.
