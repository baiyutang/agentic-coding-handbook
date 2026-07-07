---
title: Plans & Pricing
description: AI coding tool subscriptions, model API pricing, and cloud platform plans compared — with official links to verify current costs. Snapshot as of July 2026.
---

# Plans & Pricing

A snapshot to help you compare — **not a source of truth**. Prices change constantly; every
figure below links to an official page. Treat this as a starting map, then confirm current
numbers before you commit.

::: danger Snapshot — verify before relying
All figures are **as of July 2026**. AI pricing moves fast. **Always check the linked official
pages for current prices.**
:::

## Coding Tool Subscriptions

How the major [AI coding tools](/stack/tools) charge:

| Tool | Free Tier | Individual | Team / Enterprise | Billing | Official Pricing |
|---|---|---|---|---|---|
| [GitHub Copilot](https://github.com/features/copilot) | Yes | $10–$39/mo | $19–$39/user/mo | Credits (since Jun 2026) | [Plans](https://github.com/features/copilot/plans) |
| [Cursor](https://cursor.com) | Yes | $20–$200/mo | $40/user/mo | Per seat | [Pricing](https://cursor.com/pricing) |
| [Windsurf](https://codeium.com/windsurf) | Yes | $20–$200/mo | $40/user/mo | Per seat | [Pricing](https://codeium.com/pricing) |
| [Claude Code](https://claude.ai/code) | — | $100/mo (Max) | Enterprise contract | Usage / subscription | [Pricing](https://claude.com/pricing) |
| [AWS Q Developer](https://aws.amazon.com/q/developer/) | 50 req/mo | $19/user/mo | $19/user/mo | Per seat | [Pricing](https://aws.amazon.com/q/developer/pricing/) |
| [Gemini Code Assist](https://cloud.google.com/gemini/docs/codeassist/overview) | None (ended Jun 2026) | $19/mo Standard | $45/user Enterprise | Per seat | [Pricing](https://cloud.google.com/gemini/docs/codeassist/pricing) |
| [Qoder](https://lingma.aliyun.com) | Yes | Credits-based | Credits + VPC plans | Per seat / Credits | [Pricing](https://lingma.aliyun.com/lingma/pricing) |
| OpenCode / Aider / Cline | Fully free | BYOK | BYOK | Pay your model API | — |

## Model API Pricing

Per **1 million tokens**, input / output, standard on-demand tier:

| Model | Input | Output | Notes |
|---|---|---|---|
| **Claude Fable 5** | $10 | $50 | Top tier |
| **Claude Opus 4.8** | $5 | $25 | High capability |
| **Claude Sonnet 4.6** | $3 | $15 | Balanced workhorse |
| **Claude Haiku 4.5** | $1 | $5 | Fast / cheap |
| **GPT-5.5** | $5 | $30 | Frontier |
| **GPT-5.4** | $2.50 | $15 | Mainstream |
| **GPT-5.4 mini** | $0.75 | $4.50 | Production value |
| **Gemini 3.1 Pro** | $2 | $12 | ~2M context |
| **Gemini 3 Flash** | $0.50 | $3 | Fast default |
| **Gemini 3.1 Flash-Lite** | $0.10 | $0.40 | Budget |
| **DeepSeek V4 Pro** | $1.74 | $3.48 | Open weights |
| **DeepSeek V4 Flash** | $0.14 | $0.28 | Cheapest strong model |
| **Kimi K2.6** | ~$0.60 | ~$2.50 | Open weights; host-dependent |
| **Zhipu GLM-5** | $0.60 | $1.92 | Open weights |

Sources: [Claude](https://platform.claude.com/docs/en/about-claude/pricing) ·
[OpenAI](https://platform.openai.com/docs/pricing) ·
[Gemini](https://ai.google.dev/gemini-api/docs/pricing) ·
[DeepSeek](https://api-docs.deepseek.com/quick_start/pricing) ·
[Kimi](https://platform.moonshot.ai/) ·
[GLM](https://z.ai/)

## Cloud Platform Model Subscriptions

These platforms give you access to multiple models under one billing relationship — useful when
you're already in their ecosystem or want flexibility across providers.

| Platform | Models | Sample Pricing | Standout | Official Page |
|---|---|---|---|---|
| [AWS Bedrock](https://aws.amazon.com/bedrock/) | Claude / Llama / Nova / Mistral | Sonnet 4.6: $3/$15 per 1M; **Flex tier: 50% off** | Provisioned saves 15–40% (1–6 mo commitment); batch at 50% off | [Pricing](https://aws.amazon.com/bedrock/pricing/) |
| [Google Vertex AI](https://cloud.google.com/vertex-ai) | Gemini full lineup | Gemini 3.1 Pro: $2/$12 per 1M | Context caching discounts; 2M token window | [Pricing](https://cloud.google.com/vertex-ai/pricing) |
| [阿里云百炼](https://bailian.aliyun.com) | Qwen series + third-party | Tiered by input length; batch discounts | CN-region compliance; integrates with Qoder | [Pricing](https://help.aliyun.com/zh/model-studio/model-pricing) |
| [火山方舟 Coding Plan](https://www.volcengine.com/product/ark) | Doubao / DeepSeek / Kimi / GLM (6 models) | Lite ¥10/mo · Pro ¥50/mo (first 2 months) | Switch models freely; works with Claude Code, Cursor, 30+ tools | [Pricing](https://www.volcengine.com/docs/82379/1544106) |

::: tip 火山方舟 Coding Plan — cost-effective option for CN developers
One subscription covers Doubao, DeepSeek, Kimi, and GLM. Connects via API to Claude Code,
Cursor, and 30+ other tools. Lite starts at ¥10/month for the first two months.
:::

## BYOK: What You Actually Pay

If you use a bring-your-own-key tool (OpenCode, Aider, Cline), your only cost is the model
API. Typical developer usage:

| Usage pattern | Estimated monthly cost |
|---|---|
| Light (a few hours/day, mid-tier model) | $5–$15 |
| Moderate (daily driver, Sonnet-tier) | $15–$50 |
| Heavy (all-day agentic, top model) | $50–$200+ |

Switching from a top model to DeepSeek Flash for mechanical tasks can cut bills by 10–20×.

## How to Cut Costs

- **Prompt caching** — most providers cache repeated context at ~90% off. Use it for large
  system prompts or docs.
- **Batch APIs** — async workloads (test generation, doc writing, bulk refactors) run at ~50%
  off on OpenAI and Anthropic.
- **AWS Bedrock Flex** — 50% off on-demand for Claude, no commitment. Good if you're on AWS.
- **Model tiering** — use top models for planning, mid-tier for coding, fast/cheap for
  completions. See [Model Choice & Cost](/stack/models).
- **Open weights** — DeepSeek and Kimi self-hosted: no per-token bill after infra cost.

When in doubt: start on a free tier, measure one week of real usage, then decide whether API
billing or a higher plan is cheaper for your pattern.
