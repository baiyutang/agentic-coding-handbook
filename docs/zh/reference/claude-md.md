---
title: CLAUDE.md
description: Claude Code 每次会话都会读取的项目上下文文件的结构与模式。
---

`CLAUDE.md` 是放在项目根目录的一个 Markdown 文件，Claude Code 会在每次会话开始时加载它。你用它给 agent 提供持久上下文 —— 那些它在_每个_任务里都该知道、又不必你反复重复的东西。把它想成你交给新同事的入职文档。

## 应该写什么

跨任务成立、且很少变化的事实：

```markdown
# Acme Web App

## 技术栈
- Next.js 15（App Router）、TypeScript、Tailwind、Prisma、PostgreSQL

## 约定
- 文件名 kebab-case，组件 PascalCase
- 测试与源码同目录，命名为 `*.test.ts`，用 Vitest 运行
- 服务端代码绝不 import `src/client/` 里的东西

## 命令
- `npm run dev` —— 启动开发服务器
- `npm test` —— 运行测试套件
- `npm run typecheck` —— tsc --noEmit

## 边界
- 绝不编辑 `src/generated/` 里的文件 —— 它们由 schema 生成
- 未经询问不要添加依赖
```

## 不该写什么

- **任务专属的细节** —— 那属于提示，不属于这里
- **长篇大论** —— 这文件每次会话都会加载，保持可快速扫读
- **密钥** —— 它会被提交进仓库
- **agent 一查便知的东西** —— 你不需要列出每一个文件

## 保持简短、高信号

每一行都在争夺注意力。一份紧凑的 30 行文件，写清约定和命令，胜过一篇被 agent 略读的 300 行长文。如果某条规则反复被违反，就把它写得更醒目 —— 而不是更长。

## 用嵌套文件来限定范围

你可以在子目录里放额外的 `CLAUDE.md`。agent 会读取与其正在处理的文件相关的那些，因此 `src/payments/CLAUDE.md` 可以只放适用于该模块的规则，而不必让根文件变得臃肿。

## 个人 vs. 共享

把共享的 `CLAUDE.md` 提交进仓库，让整个团队受益。对于不该进仓库的个人偏好，用 `CLAUDE.local.md`（并加进 `.gitignore`）。

## 把它当作活文档

当你发现自己就同一件事纠正 agent 两次时，那就是一条等着被写下的 `CLAUDE.md` 条目。每一次 agent 出错，这个文件都会变得更好。
