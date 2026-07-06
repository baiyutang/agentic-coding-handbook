---
title: Plans & Pricing
description: A dated snapshot of model API prices and subscription plans — verify against official links.
---

# Plans & Pricing

A snapshot to help you compare — **not a source of truth**. Prices and plans change constantly
and vary by region; every figure below links to an official page. Treat this as a starting
map, then confirm current numbers before you commit.

::: danger Snapshot — verify before relying
All figures below are **as of July 2026** and gathered from provider documentation. AI pricing
moves fast. **Always check the linked official pages for current prices.**
:::

## Model API Pricing

Per **1 million tokens**, input / output, standard tier (as of July 2026):

| Model | Input | Output | Notes |
|---|---|---|---|
| **Claude Fable 5** | $10 | $50 | Top tier |
| **Claude Opus 4.8** | $5 | $25 | High capability |
| **Claude Sonnet 5** | $2 → $3 | $10 → $15 | Intro price through Aug 31 2026 |
| **Claude Haiku 4.5** | $1 | $5 | Fast / cheap |
| **OpenAI GPT-5.5** | $5 | $30 | Frontier |
| **OpenAI GPT-5.4** | $2.50 | $15 | Mainstream |
| **OpenAI GPT-5.4 mini** | $0.75 | $4.50 | Production value |
| **OpenAI o4-mini** | $1.10 | $4.40 | Cost-effective reasoning |
| **Gemini 3.1 Pro** | $2 | $12 | +higher above 200K context; ~2M ctx |
| **Gemini 3 Flash** | $0.50 | $3 | Fast default |
| **Gemini 3.1 Flash-Lite** | $0.25 | $1.50 | Budget |
| **DeepSeek V4 Pro** | $1.74 | $3.48 | Open weights |
| **DeepSeek V4 Flash** | $0.14 | $0.28 | Among the cheapest |
| **Kimi K2.6** | ~$0.60 | ~$2.50 | Open weights; varies by host |
| **Zhipu GLM-5** | $0.60 | $1.92 | Open weights |

Sources:
[Claude](https://platform.claude.com/docs/en/about-claude/pricing) ·
[OpenAI](https://platform.openai.com/docs/pricing) ·
[Gemini](https://ai.google.dev/gemini-api/docs/pricing) ·
[DeepSeek](https://api-docs.deepseek.com/quick_start/pricing) ·
[Kimi](https://platform.moonshot.ai/) ·
[GLM](https://z.ai/).

::: tip Real bills are lower than the sticker
Most providers offer big discounts that the table above doesn't show: **prompt/prefix caching**
(often ~90% off repeated context), **batch APIs** (~50% off async work), and **free tiers**
(e.g. DeepSeek's signup credits, Gemini's free Flash access). See [Cost & Efficiency](/stack/cost)
for how to actually spend less.
:::

## Consumer Subscriptions

For chat/assistant use (not the same as API billing):

| Plan | Price / mo | Notes |
|---|---|---|
| **Google AI Plus** | $7.99 | Entry Gemini plan |
| **Google AI Pro** | $19.99 | Gemini Pro access |
| **Google AI Ultra** | from $99.99 | Highest quota |
| **ChatGPT** (Free / Plus / Pro) | see official | [openai.com/chatgpt/pricing](https://openai.com/chatgpt/pricing/) |
| **Claude** (Free / Pro / Max) | see official | [claude.com/pricing](https://claude.com/pricing) |

Gemini figures from [gemini.google/subscriptions](https://gemini.google/subscriptions/). ChatGPT
and Claude consumer tiers change often enough that we link rather than quote — check the
official pages.

## Coding Tool Plans

How the [tools](/stack/tools) charge (verify current details on each site):

| Tool | Model | How it's billed |
|---|---|---|
| **Claude Code** | Anthropic | Included with Claude Pro/Max, or pay-as-you-go API |
| **Cursor** | Multi-provider | Free tier + paid Pro/Business — [cursor.com/pricing](https://cursor.com/pricing) |
| **GitHub Copilot** | Multi-provider | Free tier + Pro/Business/Enterprise — [github.com/features/copilot/plans](https://github.com/features/copilot/plans) |
| **Windsurf** | Multi-provider | Free tier + paid — [windsurf.com/pricing](https://windsurf.com/pricing) |
| **Qoder** | "Latest models" | Free 2-week Pro trial, then credit-based plans — [qoder.com](https://qoder.com) |
| **Trae** | Multi-provider | See [trae.ai](https://www.trae.ai) |
| **Kimi Code** | Moonshot Kimi | Pay-per-token API + subscription tier — [platform.moonshot.ai](https://platform.moonshot.ai/) |
| **Aider** | Bring-your-own | Free & open-source; you pay your model's API |
| **Cline** | Bring-your-own | Free & open-source extension; you pay your model's API |

## How to Read This

- **API pricing** scales with usage — best for automation, CI, and teams; model choice is a
  direct cost lever (see [Cost & Efficiency](/stack/cost)).
- **Subscriptions** are flat and predictable — best for steady individual use.
- **Open-weight models** (DeepSeek, Kimi, GLM) can be self-hosted, trading a per-token bill for
  infrastructure you run.
- **Bring-your-own-key tools** (Aider, Cline) are free themselves — you only pay the model.

When in doubt, start on a free tier or subscription, measure your real usage for a week, then
decide whether API billing or a higher plan is cheaper for your pattern.
