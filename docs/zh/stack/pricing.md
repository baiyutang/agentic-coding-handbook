---
title: 订阅与价格
description: 模型 API 价格与订阅套餐的带日期快照 —— 请以官方链接为准。
---

# 订阅与价格

一份帮你对比的快照 —— **不是权威来源**。价格和套餐一直在变、且因地区而异；下面每个数字都链到官方页面。把它当作起点地图，投入前请核对最新数字。

::: danger 快照 —— 依赖前请核对
下面所有数字均为**截至 2026 年 7 月**，采自各厂商文档。AI 定价变化很快。**请务必查看所链官方页面获取当前价格。**
:::

## 模型 API 价格

每 **100 万 token**，输入 / 输出，标准档（截至 2026-07）：

| 模型 | 输入 | 输出 | 备注 |
|---|---|---|---|
| **Claude Fable 5** | $10 | $50 | 顶层 |
| **Claude Opus 4.8** | $5 | $25 | 高能力 |
| **Claude Sonnet 5** | $2 → $3 | $10 → $15 | 优惠价至 2026-08-31 |
| **Claude Haiku 4.5** | $1 | $5 | 快 / 便宜 |
| **OpenAI GPT-5.5** | $5 | $30 | 前沿 |
| **OpenAI GPT-5.4** | $2.50 | $15 | 主流 |
| **OpenAI GPT-5.4 mini** | $0.75 | $4.50 | 生产性价比 |
| **OpenAI o4-mini** | $1.10 | $4.40 | 性价比推理 |
| **Gemini 3.1 Pro** | $2 | $12 | 超 200K 上下文更高；约 2M 上下文 |
| **Gemini 3 Flash** | $0.50 | $3 | 快速默认 |
| **Gemini 3.1 Flash-Lite** | $0.25 | $1.50 | 预算档 |
| **DeepSeek V4 Pro** | $1.74 | $3.48 | 开源权重 |
| **DeepSeek V4 Flash** | $0.14 | $0.28 | 最便宜之一 |
| **Kimi K2.6** | ~$0.60 | ~$2.50 | 开源权重；随托管方而异 |
| **Zhipu GLM-5** | $0.60 | $1.92 | 开源权重 |

来源：
[Claude](https://platform.claude.com/docs/en/about-claude/pricing) ·
[OpenAI](https://platform.openai.com/docs/pricing) ·
[Gemini](https://ai.google.dev/gemini-api/docs/pricing) ·
[DeepSeek](https://api-docs.deepseek.com/quick_start/pricing) ·
[Kimi](https://platform.moonshot.ai/) ·
[GLM](https://z.ai/)。

::: tip 实际账单比标价低
多数厂商提供上表没体现的大幅折扣：**提示/前缀缓存**（重复上下文常打约一折）、**批处理 API**（异步任务约五折）、**免费额度**（如 DeepSeek 的注册赠额、Gemini 的免费 Flash）。如何真正花更少，见[成本与效率](/zh/stack/cost)。
:::

## 消费端订阅

用于对话/助手（与 API 计费不同）：

| 套餐 | 每月价格 | 备注 |
|---|---|---|
| **Google AI Plus** | $7.99 | Gemini 入门 |
| **Google AI Pro** | $19.99 | Gemini Pro 权限 |
| **Google AI Ultra** | $99.99 起 | 最高额度 |
| **ChatGPT**（Free / Plus / Pro） | 见官方 | [openai.com/chatgpt/pricing](https://openai.com/chatgpt/pricing/) |
| **Claude**（Free / Pro / Max） | 见官方 | [claude.com/pricing](https://claude.com/pricing) |

Gemini 数字来自 [gemini.google/subscriptions](https://gemini.google/subscriptions/)。ChatGPT 和 Claude 的消费端档位变动频繁，我们选择给链接而非引用具体数字 —— 请查官方页面。

## 编码工具套餐

各[工具](/zh/stack/tools)如何计费（具体请以各站为准）：

| 工具 | 模型 | 如何计费 |
|---|---|---|
| **Claude Code** | Anthropic | 含在 Claude Pro/Max 中，或按量 API |
| **Cursor** | 多厂商 | 免费档 + 付费 Pro/Business —— [cursor.com/pricing](https://cursor.com/pricing) |
| **GitHub Copilot** | 多厂商 | 免费档 + Pro/Business/Enterprise —— [github.com/features/copilot/plans](https://github.com/features/copilot/plans) |
| **Windsurf** | 多厂商 | 免费档 + 付费 —— [windsurf.com/pricing](https://windsurf.com/pricing) |
| **Qoder** | "最新模型" | 免费两周 Pro 试用，之后按额度套餐 —— [qoder.com](https://qoder.com) |
| **Trae** | 多厂商 | 见 [trae.ai](https://www.trae.ai) |
| **Kimi Code** | Moonshot Kimi | 按量 API + 订阅档 —— [platform.moonshot.ai](https://platform.moonshot.ai/) |
| **Aider** | 自带 key | 免费开源；你付自己模型的 API |
| **Cline** | 自带 key | 免费开源扩展；你付自己模型的 API |

## 怎么读这张表

- **API 计费**随用量增长 —— 最适合自动化、CI 和团队；模型选择是直接的成本杠杆（见[成本与效率](/zh/stack/cost)）。
- **订阅**固定且可预测 —— 最适合稳定的个人使用。
- **开源权重模型**（DeepSeek、Kimi、GLM）可自托管，用你运行的基础设施换掉按 token 的账单。
- **自带 key 的工具**（Aider、Cline）本身免费 —— 你只付模型的钱。

拿不准时，先从免费档或订阅开始，测一周你的真实用量，再决定 API 计费还是更高档套餐对你的模式更省。
