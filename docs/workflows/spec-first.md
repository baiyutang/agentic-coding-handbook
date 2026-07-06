---
title: Spec-First Development
description: Write a short, structured spec before the agent writes code — tell it what, not how.
---

# Spec-First Development

The fastest way to get the wrong thing built quickly is to skip the spec. A short, structured
spec up front turns a vague request into an unambiguous target — and gives the agent (and you)
a shared definition of "done." It's the natural companion to [planning](/guides/planning):
the spec says *what*, the plan says *how*.

## Tell the Agent What, Not How

The goal of a spec is to pin down **intent and boundaries** while leaving implementation to
the agent (and to the plan it proposes). You're the product owner; the agent is the engineer.

## The Intent Spec Template

Four blocks, kept short. Drop this into a file (e.g. `SPEC.md`) or straight into the prompt:

```markdown
## Goal
One or two sentences: what should be true when this is done, and why it matters.

## Acceptance Criteria
- Concrete, checkable statements. Ideally each maps to a test.
- "A logged-out user visiting /dashboard is redirected to /login."
- "Submitting the form with an invalid email shows an inline error."

## Constraints
- Use the existing Button component; don't add dependencies.
- Follow the pattern in src/api/users/.
- Must work on mobile widths down to 320px.

## Non-Goals
- Not handling SSO in this pass.
- Not touching the billing flow.
```

**Acceptance Criteria** are the heart of it — the more they read like tests, the more the agent
can [verify its own work](/guides/verification). **Non-Goals** are the most underrated block:
they stop the agent from "helpfully" expanding scope.

## The Flow

```markdown
1. Write the Intent Spec (Goal / Acceptance Criteria / Constraints / Non-Goals)
2. Ask the agent to restate it and flag ambiguities or missing cases — resolve them
3. Ask for a plan against the spec (see /guides/planning); review it
4. Implement, verifying each acceptance criterion
5. Check the result against the spec, not your memory of what you wanted
```

Step 2 is where spec-first earns its keep: a good agent will surface the questions you didn't
think to answer, before a line of code is written.

## Keep Specs Small and Disposable

A spec is a tool for alignment, not a contract to defend. For a small feature it's a few lines;
for a large one, [decompose](/guides/planning) into several small specs, each independently
verifiable. If reality contradicts the spec mid-build, update the spec and move on — a stale
spec is worse than none.

::: tip
Turn a spec into a starting prompt with the [create-a-spec recipe](/reference/prompt-recipes).
:::
