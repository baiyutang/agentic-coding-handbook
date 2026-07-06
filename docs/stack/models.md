---
title: Choosing a Model
description: Match the model to the task — strong models for reasoning, fast models for volume.
---

# Choosing a Model

Most agentic tools let you pick which model runs. The instinct to "always use the biggest
model" is expensive and often slower for no benefit. The skill is matching the model to the
job. This page uses Claude's tiers as a running example; for a **cross-provider comparison
with benchmark data**, see [Models Compared](/stack/models-compared).

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

::: tip
Model choice is also a [cost](/stack/cost) lever. The fast tier on high-volume work can cut
spend dramatically with no loss in quality — see the next page.
:::
