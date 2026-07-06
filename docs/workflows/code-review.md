---
title: Code Review
description: Use an agent as a first-pass reviewer, and review the agent's own output well.
---

Review runs in two directions in agentic coding: the agent can review code (yours or its
own), and you review what the agent produces. Both get better with a little structure.

## Reviewing the Agent's Output

The agent's [verification loop](/guides/verification) handles mechanical correctness —
compiles, passes tests, typechecks. That frees your review to focus on what machines miss:

- **Intent** — does this solve the actual problem, or a lookalike?
- **Design** — is this the right abstraction, or will it fight the next change?
- **Scope** — did it also "helpfully" change things you didn't ask for?
- **Security & data** — auth checks, input validation, secrets, PII handling
- **Deletion & risk** — anything removed or overwritten that shouldn't be?

Review the **diff**, not the description. Agents summarize optimistically; the diff is
ground truth.

## Keep Diffs Reviewable

Small, focused changes are reviewable; sprawling ones hide bugs. If a change is too big to
review confidently, that's a [planning](/guides/planning) problem — ask the agent to split
it. One logical change per commit keeps review honest.

## Using an Agent as a Reviewer

An agent makes an excellent first-pass reviewer that never gets tired or skims:

```markdown
"Review the staged diff for bugs, missing error handling, and security issues. For each
finding, cite the file and line and explain the risk. Don't rewrite anything yet."
```

Asking it *not* to fix immediately keeps you in control — you decide which findings are
real before any code changes. Treat the output as a checklist, not a verdict; agents flag
false positives and miss context you hold in your head.

## Review Your Own PRs With Fresh Eyes

Before you open a PR, have the agent explain the change back to you:

```markdown
"Summarize what this branch changes and why, as if writing the PR description. Flag
anything that looks unintended."
```

If its summary doesn't match your intent, the code probably doesn't either — and you've
caught it before a human reviewer has to.
