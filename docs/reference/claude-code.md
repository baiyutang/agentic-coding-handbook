---
title: Claude Code
description: CLI reference for Claude Code — commands, configuration, hooks, and MCP servers.
---

Claude Code is Anthropic's official CLI for agentic coding. It runs in your terminal, has full access to your file system, and can use any tool you configure.

## Installation

```bash
npm install -g @anthropic-ai/claude-code
```

## Core Commands

| Command | Description |
|---------|-------------|
| `claude` | Start an interactive session in the current directory |
| `claude "prompt"` | Run a single prompt and exit |
| `claude --model opus` | Use a specific model |
| `claude --resume` | Resume the last session |
| `claude config` | Open settings |

## Project Configuration: CLAUDE.md

Place a `CLAUDE.md` file at your project root. Claude Code reads this on every session start. Use it for:

```markdown
# Project Name

## Stack
- Next.js 15, TypeScript, Tailwind, Prisma

## Conventions
- Use kebab-case for files, PascalCase for components
- Tests use Vitest, co-located with source files

## Commands
- `npm run dev` — Start dev server
- `npm test` — Run all tests
```

## Hooks

Configure hooks in `.claude/settings.json` to run scripts on lifecycle events (for
example, formatting a file every time the agent writes or edits it). Each matcher holds a
list of hooks; a `command` hook receives the event payload as JSON on **stdin**:

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "jq -r '.tool_input.file_path' | xargs npx prettier --write"
          }
        ]
      }
    ]
  }
}
```

## MCP Servers

Claude Code can connect to MCP (Model Context Protocol) servers for extended capabilities:

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"]
    }
  }
}
```

You can also add servers from the CLI with `claude mcp add`. Run `claude mcp list` to see
what's connected.

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Ctrl+C` | Cancel current generation |
| `Ctrl+D` | Exit session |
| `Ctrl+R` | Search history |
| `Ctrl+L` | Clear screen |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `ANTHROPIC_API_KEY` | API key for Anthropic (when using API billing) |
| `ANTHROPIC_MODEL` | Default model override |
| `CLAUDE_CODE_MAX_OUTPUT_TOKENS` | Max output tokens per response |
