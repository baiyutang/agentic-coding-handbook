---
title: Spec-Driven Development
description: Make the spec the source of truth — and the frameworks (Spec Kit, OpenSpec, Superpowers) that formalize it.
---

# Spec-Driven Development

[Spec-first](/workflows/spec-first) is the lightweight habit: jot a short spec before coding.
**Spec-Driven Development (SDD)** takes that idea all the way — the spec becomes the *primary,
durable artifact*, and code, tests, and docs are treated as outputs regenerated from it by you,
an agent, or both. A growing set of open frameworks formalize this, and they're worth knowing.

## The Core Idea

The shared conviction across SDD tools: **decide what you're building, and why, before any
code exists.** If you don't, the codebase silently becomes the spec — and an agent with lots
of autonomy will happily build the wrong thing very quickly. SDD makes intent explicit,
reviewable, and reusable.

## SDD vs TDD

They operate at different layers and compose well — SDD isn't a replacement for [TDD](/workflows/tdd).

| | TDD | SDD |
|---|---|---|
| **Primary artifact** | A failing test | The spec |
| **Layer** | Unit / interface | Feature / architecture |
| **Scope** | Behavior of a function | Requirements, constraints, non-functionals |
| **Loop** | Red → green → refactor | Spec → plan → generate → verify |
| **Who it's for** | The developer, tight loop | Human + agent alignment |

In practice: use **SDD to decide what to build**, then **TDD to build it correctly**. The spec
sets acceptance criteria; tests make each one executable.

## The Frameworks Worth Knowing

**GitHub Spec Kit** — an open toolkit that puts specs at the center of AI-assisted development.
You describe what to build, refine it through **structured phases**, then let your agent
implement. Works with many agents (CLI and IDE). Good when you want a defined, phase-based
process. ([github/spec-kit](https://github.com/github/spec-kit))

**OpenSpec** — a **lightweight** SDD layer where each change gets its own folder — a proposal,
specs, design, and task checklist — with **no rigid phase gates**; you can update any artifact
anytime. Works across 30+ tools (Claude Code, Cursor, Copilot…). Good when you want structure
without heavy ceremony. ([Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec))

**Superpowers** — a fuller **methodology delivered as composable skills** for coding agents. Its
stated values: test-driven, systematic over ad-hoc, complexity reduction, and evidence over
claims. It wires up a whole workflow — brainstorming, planning into small tasks,
subagent-driven execution, TDD, and code review — and the skills activate automatically when
relevant. Good when you want an opinionated, end-to-end process. ([obra/superpowers](https://github.com/obra/superpowers))

## How to Actually Use Them

1. **Start a change with a spec/proposal**, not a prompt to write code.
2. **Let the agent restate it and ask questions** — resolve ambiguity before implementation.
3. **Generate a plan** from the spec, review it, then implement against it with [verification](/guides/verification).
4. **Keep the spec as living documentation** — update it when reality shifts; archive it when done.

## When It Feels Too Verbose (and It Will)

The honest downside: these frameworks can be **heavy**. Running a full brainstorm → spec →
plan → subagent → review cycle for a one-line fix is exhausting and slow. The fix isn't to
abandon them — it's to **match the ceremony to the stakes**:

- **Scale process to the task.** Big, high-stakes, long-lived, or team work → full SDD. A typo
  fix or a throwaway script → skip it and just do the change.
- **Invoke selectively.** You don't have to run every phase. Skip brainstorming when the task
  is already well-specified; go straight to a plan.
- **Keep specs short and high-signal.** A tight one-screen spec beats a ten-page document the
  agent (and you) will skim. Prune generated boilerplate.
- **Don't let it pad simple work.** If a framework insists on ceremony a change doesn't need,
  that's a signal to drop to plain [spec-first](/workflows/spec-first) or [prompting](/guides/prompting).
- **Archive, don't accumulate.** Completed specs are reference, not clutter — move them out of
  the active path so the signal stays high.

The value of SDD is the **discipline it forces on ambiguous, consequential work**. The cost is
ceremony. Pay it where it buys you safety and alignment; skip it where it's just overhead.
