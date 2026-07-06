---
title: Hooks 与 MCP
description: 用 hooks 自动化生命周期事件，用 MCP 服务器扩展 agent。
---

有两种机制可以塑造 Claude Code 的能力：**hooks** 在生命周期事件上运行你自己的命令，**MCP 服务器**则给 agent 提供新工具。两者结合，能把一个通用 agent 调校成贴合你项目的专用 agent。

## Hooks

Hooks 是 Claude Code 在特定事件触发时自动运行的 shell 命令，在 `.claude/settings.json` 中配置。最常见的用途是强制执行不变量 —— 格式化、lint、或阻止对受保护路径的编辑 —— 而不必指望 agent 记得。

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

要点：

- 每个**事件**（如 `PreToolUse`、`PostToolUse`、`Stop`）对应一组 matcher。
- `matcher` 选择哪些工具会触发该 hook（对工具名的正则匹配）。
- `command` 类型的 hook 通过 **stdin 接收 JSON 事件负载** —— 用 `jq` 之类解析它，取出文件路径等字段。
- `PreToolUse` 类型的 hook 可以通过非零退出来**阻止**某个动作，这正是你守护受保护文件或危险命令的方式。

因为 hooks 是确定性的代码，所以当"agent 应当总是做 X"时，它才是对的工具 —— 每次写入都格式化、每次提交前都跑检查。对于 hook 能保证的事，别依赖 prompting。

## MCP 服务器

Model Context Protocol（MCP）是一个为 agent 提供工具与数据的开放标准。一个 MCP 服务器暴露若干能力 —— 查询数据库、调用 API、搜索 issue —— agent 可以像调用内置工具一样调用它们。

在设置中添加服务器：

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

或用 CLI：

```bash
claude mcp add github -- npx -y @modelcontextprotocol/server-github
claude mcp list
```

### 何时该用 MCP

- agent 需要文件系统里拿不到的**实时数据**（工单、日志、指标）
- 你想让它**操作外部系统**（开 PR、查询生产只读副本）
- 某项能力**跨项目复用** —— 打包成服务器写一次就够

好的 MCP 工具遵循和任何 [agent 工具](/zh/guides/tools)一样的规则：单一职责、描述清晰、有校验、返回可据以行动的结果。一个含糊或啰嗦的服务器害处大于好处，因为每一条工具描述都在争夺 agent 的注意力。
