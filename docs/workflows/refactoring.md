---
title: Large Refactors
description: Move safely through big, mechanical changes without breaking everything at once.
---

Large refactors are where agents shine and where they cause the most damage. The mechanical
reach that lets an agent rename a symbol across 200 files is the same reach that lets it
break 200 files. The trick is structure: never change everything at once, and always keep a
green signal.

## Establish a Safety Net First

Before touching anything, make sure you can tell when something breaks:

```markdown
"Before refactoring, run the full test suite and typecheck so we have a known-green
baseline. Report the results."
```

If coverage is thin around the area you're changing, add characterization tests *first* —
tests that pin down current behavior. Now the refactor has something to protect.

## Change in Reviewable Slices

Resist the one-shot mega-diff. Break the refactor into steps that each keep the build green:

```markdown
Refactor: replace the ad-hoc `db.query()` calls with the new Repository layer.

1. Introduce the Repository interface + one implementation (no callers changed yet)
2. Migrate module A to use it; keep tests green
3. Migrate module B; keep tests green
4. ...
5. Remove the old db.query() path once nothing references it
```

Each slice is a commit you can review and, if needed, revert in isolation.

## Prefer Mechanical, Verifiable Moves

Agents are most reliable on transformations with a clear invariant: "behavior is identical,
only structure changed." Say so explicitly:

```markdown
"This is a pure refactor — no behavior changes. If a test needs to change to pass,
stop and tell me instead of changing it."
```

That last sentence is the guardrail: a changed test during a "pure refactor" is a signal
that behavior shifted, not something to paper over.

## Keep the Loop Tight

Run the suite after every slice, not just at the end. A refactor that breaks at slice 7 is
easy to locate when slices 1–6 were green; a single 15-file diff that fails is a debugging
session. This is the [verification loop](/guides/verification) applied at scale.

## Know When to Stop and Re-plan

If a slice balloons — "this rename touches config, and config touches startup, and…" — that's
the codebase telling you the [plan](/guides/planning) needs adjusting. Stop, re-scope, and
continue. Don't let the agent bulldoze through a growing blast radius.
