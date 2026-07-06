---
title: Prompt Recipes
description: Copy-paste prompt templates for common agentic coding tasks.
---

# Prompt Recipes

Reusable starting points for the tasks you do most. Copy one, fill in the brackets, and adjust.
Each encodes a practice from the [Guides](/guides/) — the goal is to make the good pattern the
easy default. These are starting points, not magic words; edit freely.

## Create a Spec

```markdown
I want to build: [one-line description].

Draft an Intent Spec with these sections, then ask me any clarifying questions before we plan:
- **Goal** — what's true when this is done, and why it matters
- **Acceptance Criteria** — concrete, checkable statements (each mappable to a test)
- **Constraints** — patterns to follow, things not to change, limits to respect
- **Non-Goals** — what's explicitly out of scope for this pass
```

## Create an Implementation Plan

```markdown
Before writing any code, produce a plan for [task]:
- The files you'll change and roughly what each change is
- The order of steps, dependencies first
- How you'll verify each step (which test or check)
- Any assumptions or unknowns you need me to confirm

Wait for my go-ahead before implementing.
```

## Implement Against a Spec

```markdown
Implement the change to satisfy [SPEC.md / the criteria above].
- Follow the plan we agreed on
- After each step, run `[test command]` and `[typecheck command]`
- Fix anything that fails; don't stop until both are green
- Don't change scope beyond the spec — flag anything that tempts you to
```

## Write a Failing Test First (TDD)

```markdown
Write a failing test that specifies: [behavior, with concrete inputs and expected outputs].
Confirm it fails for the right reason. Then implement only the source needed to pass it —
do not edit the test. Run the suite and iterate until green.
```

## Debug a Failure

```markdown
Here's a failing test and the stack trace: [paste].
Before changing any code, explain the root cause and cite the specific lines responsible.
Then propose a fix, apply it, and run the full suite to confirm nothing else regressed.
Don't change the test.
```

## Review a Diff

```markdown
Review the staged diff for bugs, missing error handling, and security issues
(auth, input validation, secrets, injection).
For each finding, cite the file and line and explain the risk. Don't rewrite anything yet —
give me the list first.
```

## Safe Refactor

```markdown
This is a pure refactor of [target] — no behavior changes.
Do it in small slices that each keep the build green; run the suite after each.
If a test needs to change to pass, stop and tell me instead of changing it.
```

## Explain This Codebase

```markdown
I'm new to this codebase. Give me a map: the main modules and what each does, how data flows
through [feature], and where I'd start to change [X]. Point to the key files by path.
```

## Harden for Production

```markdown
Review [feature] for production-readiness: auth and access control, input validation, secret
handling, error handling, and edge cases. List concrete gaps with file/line and a suggested
fix for each. Don't apply changes yet.
```

::: tip
Keep your own recipes that work well in your project's [`CLAUDE.md`](/reference/claude-md) or a
team snippet file — the best prompt library is the one tuned to your codebase.
:::
