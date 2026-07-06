---
title: Tools
description: Design tools that agents can use effectively to interact with your codebase.
---

Agents are only as capable as the tools they have access to. Well-designed tools make the difference between an agent that's useful and one that's frustrating.

## What Makes a Good Tool

A good agent tool is:

- **Single-purpose** — Does one thing well
- **Well-documented** — Clear description of inputs, outputs, and side effects
- **Idempotent when possible** — Running it twice shouldn't break things
- **Validated** — Checks inputs before acting
- **Observable** — Returns clear feedback about what happened

## Common Tool Categories

### File System Tools

Agents need to read, write, and search your codebase. Provide:

- **Read** with pagination for large files
- **Write** with diff preview before applying
- **Grep/Find** with regex and glob support
- **Edit** with exact string matching (not line numbers)

### Shell Tools

Agents run commands to install dependencies, run tests, and build. Key considerations:

- **Sandbox** destructive commands (`rm -rf`, `git reset --hard`)
- **Timeout** long-running commands
- **Stream output** so the agent can react to progress
- **Capture exit codes** for error handling

### Git Tools

Safe, read-first Git operations:

- `git status`, `git diff`, `git log` — Read before writing
- `git add`, `git commit` — With meaningful messages
- Never force-push or rewrite shared history without explicit approval

## Tool Design Principles

### 1. Prefer Exact Over Fuzzy

```typescript
// Good: exact string match — fails loudly if wrong
edit({ file: "src/foo.ts", old_string: "const x = 1", new_string: "const x = 2" })

// Bad: line numbers — fragile, shifts with any change
edit({ file: "src/foo.ts", line: 42, new_string: "const x = 2" })
```

### 2. Return Actionable Results

```
❌ "Edit failed"
✅ "Edit failed: old_string not found in src/foo.ts. The file may have changed
    since you last read it. Re-read the file and try again."
```

### 3. Validate Early

Check preconditions before doing work:

```typescript
function deleteFile(path: string) {
  if (!exists(path)) return { error: `File not found: ${path}` }
  if (isOutsideProject(path)) return { error: "Cannot delete files outside project" }
  if (isGitTracked(path) && !hasBackup(path)) return { error: "Commit or stash changes first" }
  // ... proceed
}
```

## Testing Your Tools

Before relying on a tool in production, test it with:

1. **Happy path** — Does it work with valid inputs?
2. **Edge cases** — Empty files, large files, special characters
3. **Error cases** — Missing files, invalid inputs, permission errors
4. **Idempotency** — Running it twice gives the same result (or a clear "already done" message)
