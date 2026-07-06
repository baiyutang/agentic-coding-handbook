---
title: Hooks & MCP
description: Automate lifecycle events with hooks and extend the agent with MCP servers.
---

Two mechanisms let you shape what Claude Code can do: **hooks** run your own commands on
lifecycle events, and **MCP servers** give the agent new tools. Together they turn a generic
agent into one tuned to your project.

## Hooks

Hooks are shell commands Claude Code runs automatically when specific events fire. Configure
them in `.claude/settings.json`. The most common use is enforcing invariants — formatting,
linting, or blocking edits to protected paths — without relying on the agent to remember.

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

Key points:

- Each **event** (e.g. `PreToolUse`, `PostToolUse`, `Stop`) maps to a list of matchers.
- The `matcher` selects which tools trigger the hook (a regex over tool names).
- A `command` hook receives the event payload as **JSON on stdin** — parse it (e.g. with
  `jq`) to get fields like the file path.
- A `PreToolUse` hook can **block** an action by exiting non-zero, which is how you guard
  protected files or dangerous commands.

Because hooks are deterministic code, they're the right tool when "the agent should always do
X" — formatting on every write, running a check before every commit. Don't rely on prompting
for things a hook can guarantee.

## MCP Servers

The Model Context Protocol (MCP) is an open standard for giving agents tools and data. An MCP
server exposes capabilities — query a database, call an API, search issues — that the agent
can invoke like any built-in tool.

Add servers in your settings:

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_TOKEN": "${GITHUB_TOKEN}" }
    }
  }
}
```

Or from the CLI:

```bash
claude mcp add github -- npx -y @modelcontextprotocol/server-github
claude mcp list
```

### When to Reach for MCP

- The agent needs **live data** it can't get from the filesystem (tickets, logs, metrics)
- You want it to **act on external systems** (open a PR, query production read-replicas)
- A capability is **reused across projects** — package it once as a server

Good MCP tools follow the same rules as any [agent tool](/guides/tools): single-purpose,
well-described, validated, and returning actionable results. A vague or chatty server hurts
more than it helps, because every tool description competes for the agent's attention.
