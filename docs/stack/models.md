---
title: Model Choice & Cost
description: Match the right model tier to the task, keep context lean, and spend where it buys real leverage — a practical guide to getting the most from AI coding tools.
---

# Model Choice & Cost

Most agentic tools let you pick which model runs. The instinct to "always use the biggest
model" is expensive and often slower with no benefit. The real skill is matching the model
to the job — and understanding what that choice costs.

For a **cross-provider comparison with benchmark data**, see [Models Compared](/stack/models-compared).

::: tip Looking for the head-to-head?
[Models Compared](/stack/models-compared) ranks Claude, GPT, Gemini, DeepSeek, Kimi, and GLM
on public SWE-bench coding scores, with source links.
:::

## The Tiers

Model families generally come in tiers that trade **capability** against **speed and cost**.
Using Claude as the example:

| Tier | Character | Reach for it when… |
|---|---|---|
| **Opus** | Most capable; deepest reasoning | Hard debugging, architecture, tricky refactors, ambiguous requirements |
| **Sonnet** | Balanced; strong default | Most day-to-day coding, feature work, code review |
| **Haiku** | Fastest, cheapest | High-volume, mechanical, or well-specified tasks; quick edits; tight loops |

The same shape holds across providers — a frontier tier, a balanced tier, and a fast tier.
The names and version numbers change often; the **tiering principle doesn't**.

## The Core Principle

> Use the strongest model where **thinking** is the bottleneck. Drop to a faster model where
> **typing** is the bottleneck.

- **Reasoning-bound work** — planning a feature, diagnosing a subtle bug, designing an
  abstraction, working from vague requirements → **top tier**. The quality of the plan
  determines everything downstream; it's worth the spend.
- **Mechanical work** — applying a well-defined change across many files, formatting,
  boilerplate, simple test scaffolding → **fast tier**. A stronger model rarely does it
  better, just slower and pricier.

## Switch Models Mid-Task

You don't commit to one model for a whole session. A common high-leverage pattern:

1. **Plan** with a top-tier model (get the approach right)
2. **Execute** the mechanical steps with a faster model
3. **Escalate** back to the strong model only when something gets stuck

In Claude Code you switch with the `/model` command in a session, or `--model` at launch.

## Don't Over-Optimize

If you're unsure, the **balanced tier is the right default** for coding — it handles the
large majority of tasks well. Reach up to the top tier when you hit real difficulty, and
down to the fast tier when the work is clearly mechanical. Micro-managing model choice on
every prompt isn't worth the attention; save the deliberate choice for the extremes.

## What You're Actually Paying For

With token-based pricing, cost scales with **how much context is processed each turn**. Every
message re-processes the conversation so far. That means:

- A long, cluttered session costs more **per turn** than a short, focused one — even for the
  same question.
- Dumping an entire codebase into context is expensive *and* dilutes the signal.
- Cost and quality usually move together: leaner context is cheaper **and** sharper.

## Levers That Cut Cost (and Improve Results)

- **Right-size the model.** The tier choice above is the biggest single lever — fast tier on
  mechanical, high-volume work can cut spend 10–20× with no quality loss.
- **Keep sessions focused.** One task per session; `/clear` between unrelated tasks and
  `/compact` when a session gets long. See [context management](/guides/context-management).
- **Pull in just enough.** Point the agent at the specific files it needs instead of the
  whole repo.
- **Invest in CLAUDE.md.** Durable facts in [CLAUDE.md](/reference/claude-md) mean you don't
  re-explain your stack every session.
- **Plan first.** A [reviewed plan](/guides/planning) avoids expensive wrong turns — redoing
  400 lines costs far more than a 30-second re-plan.

## When Premium Spend Pays Off

Cost-cutting isn't the goal; **return on attention** is. Spending more is worth it when:

- The task is reasoning-heavy and getting it right the first time saves hours
- You're planning or debugging something subtle — a better plan compounds downstream
- The alternative is *your* time, which is almost always the most expensive resource

The framing to keep: an hour of engineer time dwarfs the cost of even heavy model usage.
Optimize the agent's spend where it's wasteful, not where it's buying you real leverage.

## Subscription vs. API

- **Subscription (flat rate)** — predictable cost, good for steady individual use; you stop
  thinking about per-token spend.
- **API (pay-as-you-go)** — scales with usage, better for automation, CI, and teams; makes
  model choice a direct cost lever.

Pick based on how variable your usage is. Check each tool's current plans — this is exactly
the kind of detail that changes often.
