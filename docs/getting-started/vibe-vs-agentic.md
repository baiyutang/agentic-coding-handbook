---
title: Vibe vs Agentic Coding
description: Two modes of building with AI — when to vibe, when to go agentic, and how to tell.
---

# Vibe vs Agentic Coding

Not all AI coding is the same. Two modes have emerged, and picking the wrong one is a common
source of pain. The point isn't that one is better — it's that **each fits a different stage
of a project's maturity**.

## The Two Modes

**Vibe coding** — You describe what you want in natural language and accept what comes back,
iterating by feel. You don't read every line; you judge by whether it *works*. Fast, fluid,
great for exploration.

**Agentic coding** — You give the agent your codebase, tools, and constraints, and it plans,
implements, tests, and iterates — but you stay in the loop: reviewing plans, reading diffs,
and gating on tests. Slower to start, far more reliable at scale.

| | Vibe coding | Agentic coding |
|---|---|---|
| **You optimize for** | Speed of exploration | Reliability at scale |
| **You review** | The result ("does it work?") | The plan and the diff |
| **Best for** | Prototypes, demos, throwaway scripts | Anything real people depend on |
| **Failure mode** | Ships fragile, unreviewed code | Slower on trivial one-offs |

## A Rule of Thumb

> If it breaks and someone calls you, use **agentic coding**.

Prototype for a hackathon, a personal script, a quick spike to learn an API? Vibe away.
A payment flow, an auth system, anything with real users or real data? Go agentic — plan,
verify, and review the diff.

::: warning A cautionary tale
Vibe-coded products have shipped to real users with secrets hard-coded in the client and no
authentication — and been compromised within days. The mode that got it built fast was the
wrong mode for something people would actually attack. When it matters, the discipline in
[Security](/guides/security) and [verification](/guides/verification) is not optional.
:::

## Signals It's Time to Go Agentic

Watch for these — they mean you've outgrown vibe coding on this project:

- You change one thing and something **unrelated** breaks
- You're not sure **what** the AI actually changed
- You can't confidently explain how a feature works anymore
- The code is going somewhere **real** — users, money, or data are involved
- You need it to still work next month, maintained by someone else

When two or three of these show up, switch modes: slow down, [write a spec](/workflows/spec-first),
[plan](/guides/planning), and put [verification](/guides/verification) in place. The rest of
this handbook is about doing agentic coding well.
