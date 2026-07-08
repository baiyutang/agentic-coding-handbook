---
title: 工具决策地图
description: 场景驱动的 AI 编码工具选型指南——按任务类型、团队约束或模型偏好选择，附完整的工具×模型兼容矩阵。
---

# 工具决策地图

不确定哪款 AI 编码工具适合你？三个入口——选最匹配你当前问题的那个。

→ 完整工具介绍：[AI 编码工具对比](/zh/stack/tools)
→ 模型详情：[模型对比](/zh/stack/models-compared)
→ 定价：[订阅与价格](/zh/stack/pricing)

## 入口 A：按任务类型

| 我想要…… | 选这个 | 理由 |
|---|---|---|
| 开发大型功能 / 跨文件重构 | CLI Agent —— [Claude Code](https://claude.ai/code)、[OpenCode](https://opencode.ai) | 完整仓库上下文，高自主性，可脚本化 |
| 日常编码 + 智能行内补全 | AI 原生 IDE —— [Cursor](https://cursor.com)、[Windsurf](https://codeium.com/windsurf) | 编辑循环紧凑，可视化 diff |
| 不换编辑器，只加 AI | 插件 —— [Copilot](https://github.com/features/copilot)、[Cline](https://github.com/cline/cline) | 零切换成本；支持 VS Code、JetBrains、Neovim |
| 分配工单，让 AI 自主解决 | 自主平台 —— [OpenHands](https://github.com/All-Hands-AI/OpenHands)、[Goose](https://github.com/block/goose) | 完全自主处理 issue |
| 手机发指令 / 移动端审查进度 | [Claude Code Remote Control](https://code.claude.com/docs/en/remote-control) + Claude App · [Cosyra](https://cosyra.com) | Agent 在本机或云容器里持续运行，手机只是控制窗口 |
| 国内合规 / 数据驻留项目 | 云厂商 —— [Qoder](https://lingma.aliyun.com)（国内版）、[CodeBuddy](https://www.codebuddy.ai) | 国内合规，数据留在境内 |

## 入口 B：按约束条件

| 我的情况 | 推荐路径 |
|---|---|
| 个人开发者，预算 < $20/月 | [OpenCode](https://opencode.ai)（免费）+ [DeepSeek Flash](https://api-docs.deepseek.com)（$0.14/1M）BYOK |
| 小团队，不想管 API key | [Cursor](https://cursor.com) / [Windsurf](https://codeium.com/windsurf) / [Copilot](https://github.com/features/copilot) 订阅 |
| 企业级——需要 SSO、审计日志、合规 | [AWS Q Developer](https://aws.amazon.com/q/developer/) / [Gemini Code Assist Enterprise](https://cloud.google.com/gemini/docs/codeassist/overview) |
| 数据必须不出自有服务器 | [Tabby](https://tabby.tabbyml.com)（自托管）+ 本地模型（Ollama） |
| 想同时用多个模型，在国内 | [火山方舟 Coding Plan](https://www.volcengine.com/product/ark) —— 6 款模型，¥10/月起 |
| 已深度在 AWS 上 | [AWS Bedrock](https://aws.amazon.com/bedrock/)（模型）+ [Q Developer](https://aws.amazon.com/q/developer/)（IDE 层） |
| 已在 GCP 上 | [Vertex AI](https://cloud.google.com/vertex-ai)（模型）+ [Gemini Code Assist](https://cloud.google.com/gemini/docs/codeassist/overview) |
| 有固定工作机，想用手机发指令 | [Claude Code Remote Control](https://code.claude.com/docs/en/remote-control) —— session 留在本机，手机是窗口；[Nimbalyst](https://nimbalyst.com) 提供更丰富的移动端 UI |
| 没有固定机器，纯移动办公 | [Cosyra](https://cosyra.com) —— 开一个持久云容器，预装 Claude Code / OpenCode / Codex CLI |

## 入口 C：按模型偏好

| 我偏好…… | 推荐工具 |
|---|---|
| Claude | [Claude Code](https://claude.ai/code)（原生）或 [OpenCode](https://opencode.ai) / [Cursor](https://cursor.com) + Anthropic key |
| OpenAI / GPT | [Cursor](https://cursor.com)、[Copilot](https://github.com/features/copilot) 或 [Codex CLI](https://github.com/openai/codex) |
| Gemini | [Gemini Code Assist](https://cloud.google.com/gemini/docs/codeassist/overview) 或 [Cursor](https://cursor.com) + Gemini |
| 开源 / 本地模型 | [Cline](https://github.com/cline/cline) / [Continue.dev](https://continue.dev) / [Aider](https://aider.chat) + [Ollama](https://ollama.com) |
| DeepSeek（成本优先） | 任意 BYOK 工具 + [DeepSeek API](https://api-docs.deepseek.com) |
| 国内模型（豆包 / Kimi / GLM） | [火山方舟 Coding Plan](https://www.volcengine.com/product/ark) 或直接 BYOK 对应 API |

## 工具 × 模型兼容矩阵

✅ = 原生支持 · ⚙️ = 通过 API / 插件 · — = 不支持

| 工具 | Claude | GPT / OpenAI | Gemini | DeepSeek | Kimi | 本地（Ollama） |
|---|---|---|---|---|---|---|
| [Claude Code](https://claude.ai/code) | ✅ 原生 | — | — | — | — | — |
| [OpenCode](https://opencode.ai) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Aider](https://aider.chat) | ✅ | ✅ | ✅ | ✅ | ⚙️ | ✅ |
| [Codex CLI](https://github.com/openai/codex) | — | ✅ 原生 | — | ⚙️ | — | — |
| [Cursor](https://cursor.com) | ✅ | ✅ | ✅ | ✅ | — | — |
| [Windsurf](https://codeium.com/windsurf) | ✅ | ✅ | ✅ | ✅ | — | — |
| [GitHub Copilot](https://github.com/features/copilot) | ✅ | ✅ | ✅ | — | — | — |
| [Cline](https://github.com/cline/cline) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Continue.dev](https://continue.dev) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Kilo Code](https://kilocode.ai) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [AWS Q Developer](https://aws.amazon.com/q/developer/) | — | — | — | — | — | — |
| [Gemini Code Assist](https://cloud.google.com/gemini/docs/codeassist/overview) | — | — | ✅ 原生 | — | — | — |
| [CodeBuddy](https://www.codebuddy.ai) | — | — | — | ✅ | — | 混元 |
| [Qoder](https://lingma.aliyun.com) | — | — | — | — | — | 通义 |
| [OpenHands](https://github.com/All-Hands-AI/OpenHands) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

## 经典组合推荐

**① 独立全栈开发者**
Claude Code（复杂任务）+ GitHub Copilot（日常补全）+ DeepSeek Flash via OpenCode（批量 / 机械性工作）

**② 企业团队，深度在 AWS**
Q Developer（IDE + 审计）+ AWS Bedrock Claude（API）+ OpenHands（自主处理 issue）

**③ 国内团队，成本优先**
火山方舟 Coding Plan（豆包 / DeepSeek / Kimi，¥10/月）+ Cursor 或 Claude Code 作为 IDE 层

**④ 开源，最大灵活性**
OpenCode（终端）+ Cline（VS Code）+ Ollama（本地模型）—— 零订阅费用
