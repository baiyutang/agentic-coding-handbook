---
title: 模型对比
description: 主流模型家族有何不同 —— 强项、上下文，以及各自在编码里的位置。
---

# 模型对比

[模型选择](/zh/stack/models)讲的是经得起时间的原则 —— 让层级匹配任务。这一页画出跨厂商的**格局**，让你知道自己在哪些选项之间做取舍。当前价格和套餐见[订阅与价格](/zh/stack/pricing)。

::: warning 快速变化
模型产品线每隔几周就变。下面的**定位**是稳定的；具体版本名和数字是快照（2026 年中）—— 请以各厂商文档为准。
:::

## 各厂商速览

| 厂商 | 开源权重？ | 突出强项 | 对 agentic coding 的意义 |
|---|---|---|---|
| **Anthropic — Claude** | 否 | 编码、指令遵循、长时自主 | 驱动 Claude Code；agentic coding 的标杆 |
| **OpenAI — GPT / o 系列** | 否 | 生态广、推理强 | 工具支持最广；有专门推理模型（o 系列） |
| **Google — Gemini** | 否 | 超大上下文（约 2M）、多模态 | 超大代码库和混合媒体最佳；免费额度慷慨 |
| **DeepSeek** | 是 | 性价比 | 极便宜；OpenAI/Anthropic 兼容 API；大上下文 |
| **Moonshot — Kimi** | 是 | 长时程编码 | 开源权重却在编码上比肩闭源；自带 CLI |
| **Zhipu — GLM** | 是 | 长时自主 agent | 低成本的项目级工程；开源权重 |

## 能力基准

编码上最常被引用的**能力基数**是 **SWE-bench Verified** —— 模型自主解决真实 GitHub issue 的比例，越高越好。一份公开快照（2026 年中）：

| 模型 | 权重 | SWE-bench Verified |
|---|---|---|
| **Claude Fable 5** | 闭源 | ~95.0% * |
| **OpenAI GPT-5.5** | 闭源 | ~88.7% |
| **Claude Opus 4.8** | 闭源 | ~88.6% |
| **Claude Opus 4.7** | 闭源 | ~82.0% |
| **DeepSeek V4 Pro** | 开源 | ~80.6% |
| **Kimi K2.6** | 开源 | ~80.2% |
| **Gemini 3.5 Flash** | 闭源 | ~78.8% |

\* Claude Fable 5 居榜首，但在 2026 年 6 月的一项出口管制指令下被暂停 —— 仅作参考列出。在更难的 **SWE-bench Pro** 上，GLM-5.2 是开源权重模型第一（~62%）；Pro 分数整体更低，且不能与 Verified 直接比较。

::: warning 谨慎看待基准
分数因评测框架而异、并随每个模型版本变动 —— 把它们当粗略基数，而非圣旨。基准只衡量一个维度；你的真实选择还取决于[成本](/zh/stack/pricing)、速度、上下文大小，以及在*你自己*任务上的可靠性。
:::

**来源：**
[SWE-bench（官方）](https://www.swebench.com/) ·
[llm-stats 榜单](https://llm-stats.com/benchmarks/swe-bench-verified) ·
[BenchLM](https://benchlm.ai/benchmarks/sweVerified) ·
[Vals AI](https://www.vals.ai/benchmarks/swebench) ·
[SWE-bench Pro（Morph）](https://www.morphllm.com/swe-bench-pro)。数字为 2026 年中；请在榜单上核对最新值。

## 西方前沿实验室

**Anthropic（Claude）** —— 被广泛认为是**编码与 agentic 工作流**最强的家族：细致的指令遵循、可靠的工具使用，以及在长的多步任务上的耐力。产品线从顶层模型往下，到均衡默认，再到快而便宜的层级（见[模型选择](/zh/stack/models)）。它是 [Claude Code](/zh/reference/claude-code) 的运行基座，也是多数编码工具对标的参照。

**OpenAI（GPT + o 系列）** —— 生态最广、型号最全，从前沿通用模型到专门的**推理**模型（o 系列，为艰难的多步问题调优）。如果你想要最多的第三方集成、以及适配几乎任何预算或任务的模型，GPT 是稳妥的多面手。

**Google（Gemini）** —— **上下文与多模态**的领先者：约两百万 token 的上下文窗口让它能一次装下很大的代码库或长文档，且原生处理图像/视频。消费端免费额度异常慷慨。当上下文体量或混合媒体成为约束时，选 Gemini。

## 开源权重的挑战者

一批强力的**开源权重**模型 —— 多来自中国实验室 —— 如今在编码上比肩闭源前沿，成本却只有零头。它们还可自托管，且通常暴露 OpenAI/Anthropic 兼容 API，工具接入几乎无摩擦。

**DeepSeek** —— 性价比标杆。以业界最低的价格之一提供强编码与推理，带思考/非思考模式和大上下文。当成本重要、又想兼容现有工具链时的即插选择。

**Moonshot（Kimi）** —— 其开源模型瞄准**长时程编码**、UI 生成和多 agent 编排，并在编码基准上与顶级闭源模型互有胜负。Moonshot 还出了自己的 CLI（[Kimi Code](/zh/stack/tools)），是一整套栈，而非只有模型。

**Zhipu（GLM）** —— 定位于**项目级软件工程**和长时自主运行（对单个任务连续工作数小时），且成本低。又一个用于 agentic coding 的强力开源权重选项，让你不用付前沿价也能拿到能力。

## 到底怎么选

- **编码 + agentic 可靠性最佳，成本次要** → Claude（顶层或均衡层）
- **对难题的最深推理** → OpenAI o 系列，或 Claude/GPT 的顶层
- **超大上下文或多模态** → Gemini
- **成本最低、仍然强** → DeepSeek、Kimi 或 GLM（开源权重）
- **自托管 / 数据留在自家** → 一个开源权重模型（DeepSeek / Kimi / GLM）

你并未被锁定。多数[工具](/zh/stack/tools)都允许切换厂商，很多团队用前沿模型做规划、用便宜的开源权重模型做机械执行 —— 就是把[强模型用于思考、快模型用于打字的原则](/zh/stack/models)跨厂商地用起来。

## 来源

数字与产品线为 2026 年中，来自各厂商文档：
[Claude](https://platform.claude.com/docs/en/about-claude/models/overview) ·
[OpenAI](https://platform.openai.com/docs/models) ·
[Gemini](https://ai.google.dev/gemini-api/docs/models) ·
[DeepSeek](https://api-docs.deepseek.com/quick_start/pricing) ·
[Kimi](https://platform.moonshot.ai/) ·
[GLM / Z.ai](https://z.ai/)。请以这些为准核对最新信息。
