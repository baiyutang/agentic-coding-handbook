---
title: Setup
description: Install and configure the tools for agentic coding.
---

This guide walks you through setting up a productive agentic coding environment.

## Prerequisites

- **Node.js 18+** — Required for the Claude Code CLI
- **Git** — Version control (the agent works with your repos)
- **A code editor** — VS Code with the Claude Code extension recommended

## Install Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

## Authenticate

Start Claude Code and follow the login prompt:

```bash
claude
```

On first run it opens your browser to link your Anthropic account. You can sign in with a
Claude subscription (Pro/Max) or an Anthropic Console account with API billing. To switch
accounts later, use the `/login` command inside a session.

## Verify Installation

```bash
claude --version
```

Should print the current version number.

## Project Setup

For any project you want to use agentic coding with:

1. Make sure it's a Git repository (`git init` if not)
2. Add a `CLAUDE.md` file at the root with project context
3. Start with `claude` in your project directory

## Next Steps

Now that your environment is ready, head to the [Guides](/guides/) section to learn effective prompting and tool usage patterns.
