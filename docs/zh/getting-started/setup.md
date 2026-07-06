---
title: 环境配置
description: 安装并配置 agentic coding 所需的工具。
---

本指南带你搭建一个高效的 agentic coding 环境。

## 前置条件

- **Node.js 18+** —— Claude Code CLI 所需
- **Git** —— 版本控制（agent 会直接操作你的仓库）
- **代码编辑器** —— 推荐搭配 Claude Code 扩展的 VS Code

## 安装 Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

## 认证

启动 Claude Code 并按提示登录：

```bash
claude
```

首次运行会打开浏览器，关联你的 Anthropic 账号。你可以用 Claude 订阅（Pro/Max）登录，也可以用带 API 计费的 Anthropic Console 账号。之后想切换账号，在会话中使用 `/login` 命令。

## 验证安装

```bash
claude --version
```

应当打印出当前版本号。

## 项目接入

对任何想使用 agentic coding 的项目：

1. 确认它是一个 Git 仓库（不是的话执行 `git init`）
2. 在根目录添加 `CLAUDE.md`，写入项目背景
3. 在项目目录下运行 `claude` 开始

## 下一步

环境就绪后，前往[指南](/zh/guides/)章节，学习高效的 prompting 与工具使用模式。
