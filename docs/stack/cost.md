---
title: Cost & Efficiency
description: Understand what you're paying for and how to get more out of every token.
---

# Cost & Efficiency

Agentic tools bill in different ways — a flat subscription, per-token API usage, or a hybrid.
Either way, the same habits that control cost also make the agent **faster and more
accurate**, because they all come down to one thing: keeping the context lean.

## What You're Actually Paying For

With token-based pricing, cost scales with **how much context is processed each turn**. Every
message re-processes the conversation so far. That means:

- A long, cluttered session costs more **per turn** than a short, focused one — even for the
  same question.
- Dumping an entire codebase into context is expensive *and* dilutes the signal.
- Cost and quality usually move together: leaner context is cheaper **and** sharper.

## Levers That Cut Cost (and Improve Results)

- **Right-size the model.** Use the [fast tier](/stack/models) for mechanical, high-volume
  work; save the top tier for reasoning. This is the biggest single lever.
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
