---
title: Test-Driven Development
description: Turn a specification into a failing test, then let the agent make it pass.
---

Test-driven development and agentic coding are a natural fit. A test is an unambiguous,
executable specification — exactly the kind of target an agent can iterate against without
you refereeing every step. If you adopt one workflow from this handbook, make it this one.

## Why TDD Works So Well With Agents

- **The test defines "done"** — no guessing about requirements
- **The agent gets an objective signal** — red or green, no ambiguity
- **It can iterate unattended** — run, read failure, fix, repeat until green
- **It constrains scope** — the agent changes production code, not the test

## The Loop

```markdown
1. Write (or ask for) a failing test that describes the behavior you want
2. Confirm it fails for the right reason
3. Ask the agent to make it pass — without modifying the test
4. Review the diff once it's green
5. Refactor with the test as a safety net
```

## Writing the Test First

Be concrete about behavior, not implementation:

```markdown
✅ "Write a failing test: applyDiscount(100, '10PERCENT') returns 90, and an unknown
   code returns the original price unchanged. Then implement applyDiscount to pass it."
```

Then, critically:

```markdown
"Make the test pass by changing only the implementation. Do not edit the test file.
Run the suite and iterate until it's green."
```

The "don't edit the test" instruction matters — otherwise an agent that's stuck may
"fix" the failure by weakening the assertion.

## Guard Against Gaming

Two failure modes to watch for:

- **Weakening the test** — deleting an assertion or changing the expected value. Pin the
  test as read-only in your instruction and check the diff touches only source.
- **Overfitting** — hard-coding the one input the test uses. Add a second case, or ask for
  a property that must hold generally.

## Let the Test Drive Refactors

Once green, refactoring is safe: the agent can restructure freely and the suite tells it the
moment behavior changes.

```markdown
"The tests pass. Now extract the pricing rules into a lookup table and simplify
applyDiscount. Keep the suite green the whole way."
```

This is [verification](/guides/verification) at its best — the agent both changes and
checks, and you review a diff that's already proven correct.
