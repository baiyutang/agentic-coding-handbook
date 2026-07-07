---
title: 模型对比
description: Claude vs GPT vs Gemini vs DeepSeek vs Kimi —— 从能力基准、每百万 token 定价、最佳适用场景三个维度横向对比主流 AI 编码模型。
---

# 模型对比

选择模型有三个维度，它们并不总是同向移动：**能力**（能解决问题吗？）、**价格**（每 token 多少钱？）、**场景适配**（这个任务适合它吗？）。本页从三个维度全面呈现。

::: warning 快速变化的快照
模型阵容每隔几周就会更新。以下数据是 **2026 年中** 的快照——在做决策前，请务必通过链接核实官方最新信息。
:::

## 维度一：能力基线

最常被引用的编码基准是 **SWE-bench Verified**——模型自主解决真实 GitHub issue 的比例，越高越好。

| 模型 | SWE-bench Verified | 上下文窗口 | 开源权重 | 文档 |
|---|---|---|---|---|
| **Claude Fable 5** | ~95% | 1M tokens | 否 | [Anthropic](https://platform.claude.com/docs/en/about-claude/models/overview) |
| **GPT-5.5** | ~88.7% | 128K tokens | 否 | [OpenAI](https://platform.openai.com/docs/models) |
| **Claude Opus 4.8** | ~88.6% | 1M tokens | 否 | [Anthropic](https://platform.claude.com/docs/en/about-claude/models/overview) |
| **Gemini 3.1 Pro** | — | **2M tokens** | 否 | [Google](https://ai.google.dev/gemini-api/docs/models) |
| **DeepSeek V4** | ~80.6% | 128K tokens | **是** | [DeepSeek](https://api-docs.deepseek.com) |
| **Kimi K2.6** | ~80.2% | 128K tokens | **是** | [Moonshot](https://platform.moonshot.ai) |
| **Gemini 2.5 Flash** | — | 1M tokens | 否 | [Google](https://ai.google.dev/gemini-api/docs/models) |
| **Claude Sonnet 4.6** | — | 1M tokens | 否 | [Anthropic](https://platform.claude.com/docs/en/about-claude/models/overview) |
| **Claude Haiku 4.5** | — | 200K tokens | 否 | [Anthropic](https://platform.claude.com/docs/en/about-claude/models/overview) |
| **DeepSeek V4 Flash** | — | 128K tokens | **是** | [DeepSeek](https://api-docs.deepseek.com) |

::: warning 谨慎解读 benchmark
分数因评估工具和模型版本而异。将这些数据视为粗略基线——真实选择还需考虑成本、速度以及在*你的具体任务*上的可靠性。
:::

**数据来源：** [SWE-bench 官网](https://www.swebench.com/) ·
[llm-stats 榜单](https://llm-stats.com/benchmarks/swe-bench-verified) ·
[Morph SWE-bench Pro](https://www.morphllm.com/swe-bench-pro) ·
[Artificial Analysis](https://artificialanalysis.ai/models)

## 维度二：价格快照

每 **100 万 tokens**，输入 / 输出，标准按需计费（2026 年中）：

| 模型 | 输入 / 1M | 输出 / 1M | 备注 |
|---|---|---|---|
| **Gemini 3.1 Flash-Lite** | $0.10 | $0.40 | 预算档 |
| **DeepSeek V4 Flash** | $0.14 | $0.28 | 最便宜的强能力模型 |
| **Gemini 2.5 Flash** | $0.15 | $0.60 | Google 快速层 |
| **Kimi K2.6** | ~$0.60 | ~$2.50 | 开源权重；价格因托管方而异 |
| **DeepSeek V4 Pro** | $1.74 | $3.48 | 开源权重，高能力 |
| **Gemini 3.1 Pro** | $2 | $12 | 超大 context |
| **GPT-5.4** | $2.50 | $15 | OpenAI 主力档 |
| **Claude Sonnet 4.6** | $3 | $15 | 均衡首选 |
| **Claude Opus 4.8** | $5 | $25 | 顶级编码能力 |
| **GPT-5.5** | $5 | $30 | 前沿推理 |

::: tip 标价 vs 实际账单
大多数厂商提供标价之外的大幅折扣：**prompt 缓存**（重复上下文约省 90%）、**批量 API**（异步任务约省 50%）、**Flex 计费**（如 AWS Bedrock Flex 半价）。云平台订阅方案见[订阅与价格](/zh/stack/pricing)。
:::

数据来源：[Claude](https://platform.claude.com/docs/en/about-claude/pricing) ·
[OpenAI](https://platform.openai.com/docs/pricing) ·
[Gemini](https://ai.google.dev/gemini-api/docs/pricing) ·
[DeepSeek](https://api-docs.deepseek.com/quick_start/pricing) ·
[Kimi](https://platform.moonshot.ai/) ·
[BenchLM](https://benchlm.ai/llm-pricing)

## 维度三：场景适配

将任务与合适的模型层级匹配——并非每个任务都需要最强或最贵的模型。

| 场景 | 推荐层级 | 理由 |
|---|---|---|
| 复杂 agentic 任务，长时间自主运行 | Claude Opus 4.8 / GPT-5.5 | 多步骤的可靠性与稳定性 |
| 日常功能开发 | Claude Sonnet 4.6 / GPT-5.4 | 最佳能力价格比 |
| 高频补全、机械性任务 | Gemini Flash / Claude Haiku / DeepSeek Flash | 速度 + 极低成本 |
| 超大代码库（>500K tokens） | Gemini 3.1 Pro | 2M token 上下文窗口 |
| 自托管 / 数据不出境 | DeepSeek V4 / Kimi K2.6 / GLM-5 | 开源权重，可私有部署 |
| 预算优先，仍需高能力 | DeepSeek V4 Flash | $0.14/1M 输入——最便宜的强模型 |
| 复杂算法问题的深度推理 | OpenAI o 系列 / Claude Opus | 内置思维链 |

## 如何组合使用

最有效的方案是在工作的不同阶段使用不同的模型层级：

- **规划与架构** → 顶级模型（Opus 4.8、GPT-5.5）：一次做对，整体更省
- **编码与迭代** → 中级模型（Sonnet 4.6、GPT-5.4）：速度够、能力够
- **批量 / 机械性工作** → 快速模型（Haiku、Flash、DeepSeek Flash）：补全、生成测试、样板代码

大多数[工具](/zh/stack/tools)支持按任务或对话切换模型。

## 数据来源

数据截至 2026 年中，请核实：
[Anthropic 模型](https://platform.claude.com/docs/en/about-claude/models/overview) ·
[OpenAI 模型](https://platform.openai.com/docs/models) ·
[Gemini 模型](https://ai.google.dev/gemini-api/docs/models) ·
[DeepSeek API](https://api-docs.deepseek.com/quick_start/pricing) ·
[Moonshot Kimi](https://platform.moonshot.ai/) ·
[Artificial Analysis](https://artificialanalysis.ai/models) ·
[SWE-bench](https://www.swebench.com/)
