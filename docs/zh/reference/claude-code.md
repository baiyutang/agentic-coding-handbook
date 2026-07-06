---
title: Claude Code
description: Claude Code 的 CLI 参考 —— 命令、配置、键盘快捷键与环境变量。
---

Claude Code 是 Anthropic 官方的 agentic coding CLI。它运行在你的终端里，拥有对文件系统的完整访问权，并能使用你配置的任何工具。

## 安装

```bash
npm install -g @anthropic-ai/claude-code
```

## 核心命令

| 命令 | 说明 |
|------|------|
| `claude` | 在当前目录启动交互式会话 |
| `claude "prompt"` | 运行单条提示后退出 |
| `claude --model opus` | 使用指定模型 |
| `claude --resume` | 恢复上一次会话 |
| `claude config` | 打开设置 |

## 项目配置：CLAUDE.md

在项目根目录放一个 `CLAUDE.md` 文件。Claude Code 会在每次会话开始时读取它。可用于：

```markdown
# 项目名称

## 技术栈
- Next.js 15、TypeScript、Tailwind、Prisma

## 约定
- 文件用 kebab-case，组件用 PascalCase
- 测试用 Vitest，与源码同目录

## 命令
- `npm run dev` —— 启动开发服务器
- `npm test` —— 运行所有测试
```

详见 [CLAUDE.md](/zh/reference/claude-md)。

## Hooks

在 `.claude/settings.json` 中配置 hooks，以在生命周期事件上运行脚本。`command` 类型的 hook 会通过 **stdin** 接收事件负载（JSON）：

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

更多内容见 [Hooks 与 MCP](/zh/reference/hooks-and-mcp)。

## MCP 服务器

Claude Code 可以连接 MCP（Model Context Protocol）服务器以获得扩展能力：

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

你也可以用 CLI 添加：`claude mcp add`。运行 `claude mcp list` 查看已连接的服务器。

## 键盘快捷键

| 按键 | 动作 |
|------|------|
| `Ctrl+C` | 取消当前生成 |
| `Ctrl+D` | 退出会话 |
| `Ctrl+R` | 搜索历史 |
| `Ctrl+L` | 清屏 |

## 环境变量

| 变量 | 说明 |
|------|------|
| `ANTHROPIC_API_KEY` | Anthropic 的 API key（使用 API 计费时） |
| `ANTHROPIC_MODEL` | 默认模型覆盖 |
| `CLAUDE_CODE_MAX_OUTPUT_TOKENS` | 每次响应的最大输出 token 数 |
