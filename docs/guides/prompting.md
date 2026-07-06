---
title: Prompting
description: Write prompts that produce reliable, high-quality results from AI coding agents.
---

Good prompting is the difference between an agent that flails and one that delivers. Here are the patterns that work.

## Be Specific About Scope

```markdown
❌ "Add authentication"
✅ "Add email/password authentication to the login page using bcrypt for hashing
   and JWT for sessions. Create a POST /api/auth/login endpoint and a LoginForm
   component. Write tests for both."
```

The first prompt leaves too much to interpretation. The second gives the agent a clear target.

## Provide Constraints

Agents work better with boundaries:

```markdown
- Use the existing Button component, don't create a new one
- Follow the pattern in src/api/users/ for the route structure
- Keep the bundle under 5KB — avoid adding new dependencies
- Use TypeScript, strict mode
```

## Show, Don't Just Tell

Reference existing code as examples:

```markdown
Follow the same pattern as the UserProfile component in
src/components/UserProfile.tsx — same file structure, same test style,
same error handling approach.
```

## The "Why" Matters

Explain the goal, not just the task:

```markdown
✅ "We need optimistic updates on the comment list so the UI feels instant.
   Use the same pattern as the LikeButton (see src/components/LikeButton.tsx).
   If the server rejects, roll back gracefully and show the error inline."
```

## Iterate in Layers

For complex features, build in passes:

1. **Pass 1:** "Create the basic component with static data — just get the layout right"
2. **Pass 2:** "Wire up the API call and loading states"
3. **Pass 3:** "Add error handling and edge cases"
4. **Pass 4:** "Add animations and polish"

Each pass is a separate prompt. This keeps the agent focused and each change reviewable.
