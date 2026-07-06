---
title: Debugging
description: Drive an agent to find and fix the root cause — without spiraling into fix-break loops.
---

# Debugging

Agents are strong debuggers when pointed at a **reproducible failure** and told to find the
root cause. They're dangerous debuggers when told "just make the error go away" — that's how
you get a patch that hides the symptom or a spiral of fixes that each break something else.

## Start With a Reproduction

The best thing you can hand an agent is a way to trigger the bug on demand:

- A failing test that captures it (ideal — it doubles as the fix's [verification](/guides/verification))
- The exact command and input that reproduces it
- The real error output — stack trace, logs — not your paraphrase of it

```markdown
"Here's a failing test that reproduces the bug, plus the stack trace. Find the root cause,
explain it, then fix it. Don't change the test."
```

## Insist on Diagnosis Before Fix

The failure mode to prevent: the agent guesses a fix, it doesn't work, it guesses again. Make
it diagnose first.

```markdown
"Before changing any code: explain what's actually happening and why, and cite the specific
lines responsible. Then propose the fix."
```

A stated root cause you can sanity-check beats a silent patch every time. If the explanation
doesn't hold up, you've caught a wrong fix before it landed.

## Watch for the Fix-Break Loop

A classic agent trap: it fixes A, which breaks B; it fixes B, which breaks A; repeat. Signs
you're in it:

- The same files get edited back and forth
- Test X goes green as test Y goes red, then they swap
- Each "fix" is a local patch, not a change to the underlying cause

When you see this, **stop and zoom out**. The loop almost always means the real problem is one
level up — a wrong assumption, a bad abstraction, two requirements in genuine conflict.

```markdown
"Stop patching. These two fixes keep undoing each other. Step back: what shared assumption or
design decision makes both fail at once? Fix that, not the symptoms."
```

## Bound the Blast Radius

- Fix the root cause in the smallest change that addresses it — resist "while I'm here" edits
- Run the **full** suite after the fix, not just the one test — confirm nothing else regressed
- Keep the reproduction test in the codebase so the bug can't quietly return

## When the Agent Is Stuck

If two or three attempts don't converge, it's usually missing context, not ability. Give it
more signal — relevant logs, the surrounding module, how the data actually flows — or
[escalate to a stronger model](/stack/models) for the diagnosis. Then let a faster model apply
the fix once the cause is clear.
