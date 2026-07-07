---
title: Models Compared
description: Claude vs GPT vs Gemini vs DeepSeek vs Kimi — a three-dimensional comparison of AI coding models by capability benchmark, pricing per million tokens, and best-fit use case.
---

# Models Compared

Choosing a model has three dimensions that don't always move together: **capability** (can it
solve the problem?), **price** (what does it cost per token?), and **scenario fit** (is it the
right tool for this task?).

::: warning Fast-moving snapshot
Model lineups change every few weeks. Data below is a snapshot from **mid-2026** — always
verify against the linked official sources.
:::

## Dimension 1: Capability Baseline

The most-cited coding benchmark is **SWE-bench Verified** — the share of real GitHub issues a
model resolves autonomously. Higher is better.

| Model | SWE-bench Verified | Context Window | Open Weights | Docs |
|---|---|---|---|---|
| **Claude Fable 5** | ~95% | 1M tokens | No | [Anthropic](https://platform.claude.com/docs/en/about-claude/models/overview) |
| **GPT-5.5** | ~88.7% | 128K tokens | No | [OpenAI](https://platform.openai.com/docs/models) |
| **Claude Opus 4.8** | ~88.6% | 1M tokens | No | [Anthropic](https://platform.claude.com/docs/en/about-claude/models/overview) |
| **Gemini 3.1 Pro** | — | **2M tokens** | No | [Google](https://ai.google.dev/gemini-api/docs/models) |
| **DeepSeek V4** | ~80.6% | 128K tokens | **Yes** | [DeepSeek](https://api-docs.deepseek.com) |
| **Kimi K2.6** | ~80.2% | 128K tokens | **Yes** | [Moonshot](https://platform.moonshot.ai) |
| **Gemini 2.5 Flash** | — | 1M tokens | No | [Google](https://ai.google.dev/gemini-api/docs/models) |
| **Claude Sonnet 4.6** | — | 1M tokens | No | [Anthropic](https://platform.claude.com/docs/en/about-claude/models/overview) |
| **Claude Haiku 4.5** | — | 200K tokens | No | [Anthropic](https://platform.claude.com/docs/en/about-claude/models/overview) |
| **DeepSeek V4 Flash** | — | 128K tokens | **Yes** | [DeepSeek](https://api-docs.deepseek.com) |

::: warning Read benchmarks with caution
Scores vary by evaluation harness and shift with every release. Treat these as a rough
baseline — your real choice also depends on cost, speed, and reliability on *your* tasks.
:::

**Sources:** [SWE-bench official](https://www.swebench.com/) ·
[llm-stats leaderboard](https://llm-stats.com/benchmarks/swe-bench-verified) ·
[Morph SWE-bench Pro](https://www.morphllm.com/swe-bench-pro) ·
[Artificial Analysis](https://artificialanalysis.ai/models)

## Dimension 2: Pricing Snapshot

Per **1 million tokens**, input / output, standard on-demand (mid-2026):

| Model | Input / 1M | Output / 1M | Notes |
|---|---|---|---|
| **Gemini 3.1 Flash-Lite** | $0.10 | $0.40 | Budget |
| **DeepSeek V4 Flash** | $0.14 | $0.28 | Cheapest strong model |
| **Gemini 2.5 Flash** | $0.15 | $0.60 | Google fast tier |
| **Kimi K2.6** | ~$0.60 | ~$2.50 | Open weights; price varies by host |
| **DeepSeek V4 Pro** | $1.74 | $3.48 | Open weights, high capability |
| **Gemini 3.1 Pro** | $2 | $12 | Large context premium |
| **GPT-5.4** | $2.50 | $15 | OpenAI mainstream |
| **Claude Sonnet 4.6** | $3 | $15 | Balanced workhorse |
| **Claude Opus 4.8** | $5 | $25 | Top coding capability |
| **GPT-5.5** | $5 | $30 | Frontier reasoning |

::: tip Sticker price vs real bill
Most providers offer large discounts not shown above: **prompt caching** (~90% off repeated
context), **batch APIs** (~50% off async work), and **Flex tiers** (e.g. AWS Bedrock Flex at
50% off on-demand). See [Plans & Pricing](/stack/pricing) for cloud platform options.
:::

Sources: [Claude](https://platform.claude.com/docs/en/about-claude/pricing) ·
[OpenAI](https://platform.openai.com/docs/pricing) ·
[Gemini](https://ai.google.dev/gemini-api/docs/pricing) ·
[DeepSeek](https://api-docs.deepseek.com/quick_start/pricing) ·
[Kimi](https://platform.moonshot.ai/) ·
[BenchLM](https://benchlm.ai/llm-pricing)

## Dimension 3: Scenario Fit

Match the task to the right model tier — not every task needs the strongest or most expensive
model.

| Scenario | Recommended tier | Why |
|---|---|---|
| Complex agentic tasks, long autonomous runs | Claude Opus 4.8 / GPT-5.5 | Reliability over many steps |
| Everyday feature development | Claude Sonnet 4.6 / GPT-5.4 | Best capability-to-cost ratio |
| High-volume completions, mechanical tasks | Gemini Flash / Claude Haiku / DeepSeek Flash | Speed + minimal cost |
| Very large codebases (>500K tokens) | Gemini 3.1 Pro | 2M token context window |
| Self-hosting / data must not leave premises | DeepSeek V4 / Kimi K2.6 / GLM-5 | Open weights, self-deployable |
| Budget-first, still capable | DeepSeek V4 Flash | $0.14/1M input — cheapest strong option |
| Deep reasoning on hard algorithmic problems | OpenAI o-series / Claude Opus | Built-in chain-of-thought |

## How to Combine Models

The most effective setups use different tiers for different stages of work:

- **Planning and architecture** → top model (Opus 4.8, GPT-5.5): gets it right the first time,
  cheaper overall
- **Coding and iteration** → mid model (Sonnet 4.6, GPT-5.4): fast enough, capable enough
- **Bulk / mechanical work** → fast model (Haiku, Flash, DeepSeek Flash): completions, test
  generation, boilerplate

Most [tools](/stack/tools) support switching models per task or conversation.

## Sources

Data as of mid-2026. Always verify:
[Anthropic models](https://platform.claude.com/docs/en/about-claude/models/overview) ·
[OpenAI models](https://platform.openai.com/docs/models) ·
[Gemini models](https://ai.google.dev/gemini-api/docs/models) ·
[DeepSeek API](https://api-docs.deepseek.com/quick_start/pricing) ·
[Moonshot Kimi](https://platform.moonshot.ai/) ·
[Artificial Analysis](https://artificialanalysis.ai/models) ·
[SWE-bench](https://www.swebench.com/)
