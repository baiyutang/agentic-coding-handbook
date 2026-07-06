---
title: Verification Loops
description: Make the agent prove its own work with tests, types, and runtime checks.
---

The superpower of agentic coding isn't that the agent writes code — it's that the agent can
*check its own code and fix it* without you in the loop. But only if you give it a way to
verify. An agent with no feedback signal is just guessing confidently.

## Give the Agent a Way to Be Wrong

Before asking for a change, make sure there's an objective signal the agent can read:

- **Tests** — `npm test`, `pytest`, `go test`
- **Type checks** — `tsc --noEmit`, `mypy`
- **Linters** — `eslint`, `ruff`
- **A build** — does it compile?
- **The app running** — does the page load, does the endpoint return 200?

Then tell it to use them:

```markdown
"Implement the change, then run `npm test` and `npm run typecheck`. Fix anything that
fails and don't stop until both pass."
```

## The Verification Loop

A healthy agentic loop closes on a real signal:

1. **Implement** the change
2. **Run** the check (test / type / build)
3. **Read** the actual output — not a guess about it
4. **Fix** and repeat until green

The failure mode to watch for: an agent that *says* "this should now pass" without running
anything. Insist on the run. "Should pass" is not "passes."

## Tests Are the Best Signal

Types and linters catch shape errors; tests catch behavior errors. Where you can, prefer a
failing test as the specification — it tells the agent exactly what "done" means and lets it
iterate unattended. This is the core idea behind [TDD](/workflows/tdd).

```markdown
"Here's a failing test in cart.test.ts describing the discount rule. Make it pass
without changing the test."
```

## Don't Trust, Verify — Yourself Too

The agent's verification doesn't replace yours; it front-loads it. When the agent reports
green, you still review the diff. But now you're reviewing code that already compiles, passes
tests, and typechecks — so your attention goes to *design and intent*, not mechanical bugs.

## When There's No Signal

Some work has no automated check — a visual tweak, a copy change. Make the loop explicit
anyway: ask the agent to describe what to look at, then you look. And consider whether the
gap is worth closing — a single snapshot or smoke test often pays for itself immediately.
