---
title: Context Management
description: Keep an agent focused and accurate as sessions grow long.
---

An agent is only as good as the context in its window. Too little and it guesses; too much
and it loses the thread. Managing that context is one of the highest-leverage skills in
agentic coding.

## Why Context Degrades

As a session grows, three things happen:

- **Signal gets diluted.** The important instruction from 40 messages ago competes with
  noise from every tool call since.
- **Stale facts linger.** A file the agent read early may have changed; it may still reason
  from the old version.
- **Cost and latency climb.** Every turn re-processes the whole window.

## Start Fresh for New Tasks

The single most effective habit: **one task, one session.** When you finish a feature and
move to an unrelated one, clear the context rather than piling on.

```markdown
✅ Finish the auth feature → /clear → start the billing feature
❌ Keep one 3-hour session spanning six unrelated tasks
```

In Claude Code, `/clear` resets the conversation while keeping your project setup
(`CLAUDE.md`, settings). Use `/compact` when you want to keep going but shed accumulated
noise — it summarizes the history so far and continues.

## Put Durable Facts in CLAUDE.md

Anything the agent needs on *every* task belongs in `CLAUDE.md`, not in a chat message you
have to repeat: stack, conventions, key commands, architectural boundaries. This keeps your
prompts short and survives `/clear`. See [CLAUDE.md](/reference/claude-md) for structure.

## Pull In Just Enough

When a task needs specific context, point the agent at it precisely instead of dumping
everything:

```markdown
✅ "Read src/payments/stripe.ts and the Payment type in src/types.ts, then add refund support."
❌ "Here's my whole codebase, add refund support."
```

Naming the files gets the right context in with minimal noise — and teaches the agent where
to look next time.

## Watch for Drift

Signs the context has gone stale:

- The agent references a function or file that no longer exists
- It re-suggests a change you already rejected
- Its answers get vaguer or start contradicting earlier ones

When you see drift, `/compact` or `/clear` and re-anchor with a crisp restatement of the
current goal.
