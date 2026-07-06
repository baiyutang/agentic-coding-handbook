---
title: Models Compared
description: How the major model families differ — strengths, context, and where each fits for coding.
---

# Models Compared

[Choosing a Model](/stack/models) covered the durable principle — match the tier to the task.
This page maps the **landscape** across providers so you know what you're choosing between.
For current prices and plans, see [Plans & Pricing](/stack/pricing).

::: warning Fast-moving
Model lineups change every few weeks. The **positioning** below is durable; specific version
names and numbers are a snapshot (mid-2026) — verify against each provider's docs.
:::

## The Providers at a Glance

| Provider | Open weights? | Standout strength | Notable for agentic coding |
|---|---|---|---|
| **Anthropic — Claude** | No | Coding, instruction-following, long autonomous runs | Powers Claude Code; the agentic-coding benchmark to beat |
| **OpenAI — GPT / o-series** | No | Breadth of ecosystem, strong reasoning | Widest tooling support; deep reasoning models (o-series) |
| **Google — Gemini** | No | Huge context (up to ~2M tokens), multimodal | Best for very large codebases and mixed media; generous free tier |
| **DeepSeek** | Yes | Cost-to-performance | Very cheap; OpenAI/Anthropic-compatible API; big context |
| **Moonshot — Kimi** | Yes | Long-horizon coding | Open weights that rival closed models on coding; own CLI |
| **Zhipu — GLM** | Yes | Long autonomous agent runs | Project-level engineering at low cost; open weights |

## Capability Benchmarks

The most-cited **capability baseline for coding** is **SWE-bench Verified** — the share of
real GitHub issues a model resolves autonomously. Higher is better. A public snapshot
(mid-2026):

| Model | Weights | SWE-bench Verified |
|---|---|---|
| **Claude Fable 5** | Closed | ~95.0% * |
| **OpenAI GPT-5.5** | Closed | ~88.7% |
| **Claude Opus 4.8** | Closed | ~88.6% |
| **Claude Opus 4.7** | Closed | ~82.0% |
| **DeepSeek V4 Pro** | Open | ~80.6% |
| **Kimi K2.6** | Open | ~80.2% |
| **Gemini 3.5 Flash** | Closed | ~78.8% |

\* Claude Fable 5 tops the list but was suspended under a June 2026 export-control directive —
listed for reference. On the harder **SWE-bench Pro**, GLM-5.2 leads open-weight models
(~62%); Pro scores run lower across the board and aren't comparable to Verified.

::: warning Read benchmarks with caution
Scores vary by evaluation harness and shift with every model version — treat these as a rough
baseline, not gospel. A benchmark measures one dimension; your real choice also depends on
[cost](/stack/pricing), speed, context size, and reliability on *your* tasks.
:::

**Sources:**
[SWE-bench (official)](https://www.swebench.com/) ·
[llm-stats leaderboard](https://llm-stats.com/benchmarks/swe-bench-verified) ·
[BenchLM](https://benchlm.ai/benchmarks/sweVerified) ·
[Vals AI](https://www.vals.ai/benchmarks/swebench) ·
[SWE-bench Pro (Morph)](https://www.morphllm.com/swe-bench-pro). Figures as of mid-2026;
verify current numbers on the leaderboards.

## Western Frontier Labs

**Anthropic (Claude)** — Widely regarded as the strongest family for **coding and agentic
workflows**: careful instruction-following, reliable tool use, and stamina over long,
multi-step tasks. The lineup tiers from a top model down through a balanced default to a fast,
cheap tier (see [choosing a model](/stack/models)). It's what [Claude Code](/reference/claude-code)
runs on, and the reference point most coding tools benchmark against.

**OpenAI (GPT + o-series)** — The broadest ecosystem and the widest range of models, from
frontier general models to dedicated **reasoning** models (the o-series) tuned for hard,
multi-step problems. If you want the most third-party integrations and a model for nearly any
budget or task, GPT is the safe generalist.

**Google (Gemini)** — The **context and multimodal** leader: context windows up to roughly two
million tokens let it hold very large codebases or long documents at once, and it handles
images/video natively. The consumer free tier is unusually generous. Reach for Gemini when
raw context size or mixed media is the constraint.

## Open-Weight Challengers

A wave of strong **open-weight** models — mostly from Chinese labs — now rivals closed frontier
models on coding while costing a fraction as much. They're also self-hostable and typically
expose OpenAI/Anthropic-compatible APIs, so tools can adopt them with little friction.

**DeepSeek** — The value benchmark. Its models deliver strong coding and reasoning at some of
the lowest prices anywhere, with thinking/non-thinking modes and large context. A drop-in
choice when cost matters and you want compatibility with existing tooling.

**Moonshot (Kimi)** — Its open models target **long-horizon coding**, UI generation, and
multi-agent orchestration, and have traded blows with top closed models on coding benchmarks.
Moonshot also ships its own CLI ([Kimi Code](/stack/tools)), making it a full stack, not just a model.

**Zhipu (GLM)** — Positioned for **project-level software engineering** and long autonomous
runs (hours of continuous work on one task), at low cost. Another strong open-weight option
for agentic coding where you want capability without frontier prices.

## How to Actually Choose

- **Best coding + agentic reliability, cost secondary** → Claude (top or balanced tier)
- **Deepest reasoning on hard problems** → OpenAI o-series, or a top Claude/GPT tier
- **Enormous context or multimodal** → Gemini
- **Lowest cost, still strong** → DeepSeek, Kimi, or GLM (open weights)
- **Self-hosting / data stays in-house** → an open-weight model (DeepSeek / Kimi / GLM)

You're not locked in. Most [tools](/stack/tools) let you switch providers, and many teams use a
frontier model for planning and a cheap open-weight model for mechanical execution — the same
[strong-for-thinking, fast-for-typing principle](/stack/models) applied across vendors.

## Sources

Figures and lineups as of mid-2026, from provider documentation:
[Claude](https://platform.claude.com/docs/en/about-claude/models/overview) ·
[OpenAI](https://platform.openai.com/docs/models) ·
[Gemini](https://ai.google.dev/gemini-api/docs/models) ·
[DeepSeek](https://api-docs.deepseek.com/quick_start/pricing) ·
[Kimi](https://platform.moonshot.ai/) ·
[GLM / Z.ai](https://z.ai/). Always verify current details against these.
