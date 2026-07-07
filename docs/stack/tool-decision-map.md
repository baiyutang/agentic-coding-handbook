---
title: Tool Decision Map
description: Scenario-driven guide to choosing the right AI coding tool — pick by task type, team constraints, or model preference, with a full tool-model compatibility matrix.
---

# Tool Decision Map

Not sure which AI coding tool fits your situation? Three entry points — pick the one that
matches your current question.

→ Full tool descriptions: [AI Coding Tools Compared](/stack/tools)
→ Model details: [Models Compared](/stack/models-compared)
→ Pricing: [Plans & Pricing](/stack/pricing)

## Entry A: By Task Type

| I want to… | Reach for | Why |
|---|---|---|
| Build a large feature / cross-file refactor | CLI Agent — [Claude Code](https://claude.ai/code), [OpenCode](https://opencode.ai) | Full repo context, high autonomy, scriptable |
| Code daily with smart inline completions | AI-native IDE — [Cursor](https://cursor.com), [Windsurf](https://codeium.com/windsurf) | Tight edit loop, visual diffs |
| Add AI without changing my editor | Extension — [Copilot](https://github.com/features/copilot), [Cline](https://github.com/cline/cline) | Zero switching cost; VS Code, JetBrains, Neovim |
| Assign a ticket and let AI resolve it | Autonomous — [OpenHands](https://github.com/All-Hands-AI/OpenHands), [Qoder](https://qoder.ai) | Fully autonomous issue resolution |
| CN-region / data-residency projects | Cloud vendor — [Qoder CN](https://lingma.aliyun.com), [ArkClaw](https://www.volcengine.com/product/ark) | Domestic compliance, CN-region data |

## Entry B: By Constraints

| My situation | Recommended path |
|---|---|
| Individual dev, budget < $20/mo | [OpenCode](https://opencode.ai) (free) + [DeepSeek Flash](https://api-docs.deepseek.com) ($0.14/1M) BYOK |
| Small team, don't want to manage API keys | [Cursor](https://cursor.com) / [Windsurf](https://codeium.com/windsurf) / [Copilot](https://github.com/features/copilot) subscription |
| Enterprise — SSO, audit logs, compliance | [AWS Q Developer](https://aws.amazon.com/q/developer/) / [Gemini Code Assist Enterprise](https://cloud.google.com/gemini/docs/codeassist/overview) |
| Data must never leave our servers | [Tabby](https://tabby.tabbyml.com) (self-hosted) + local model via Ollama |
| Use multiple models, based in CN | [火山方舟 Coding Plan](https://www.volcengine.com/product/ark) — 6 models, ¥10/mo intro |
| Already deeply on AWS | [AWS Bedrock](https://aws.amazon.com/bedrock/) (models) + [Q Developer](https://aws.amazon.com/q/developer/) (IDE layer) |
| Already on GCP | [Vertex AI](https://cloud.google.com/vertex-ai) (models) + [Gemini Code Assist](https://cloud.google.com/gemini/docs/codeassist/overview) |

## Entry C: By Model Preference

| I prefer… | Recommended tool |
|---|---|
| Claude | [Claude Code](https://claude.ai/code) (native) or [OpenCode](https://opencode.ai) / [Cursor](https://cursor.com) with Anthropic key |
| OpenAI / GPT | [Cursor](https://cursor.com), [Copilot](https://github.com/features/copilot), or [Codex CLI](https://github.com/openai/codex) |
| Gemini | [Gemini Code Assist](https://cloud.google.com/gemini/docs/codeassist/overview) or [Cursor](https://cursor.com) + Gemini |
| Open-source / local models | [Cline](https://github.com/cline/cline) / [Continue.dev](https://continue.dev) / [Aider](https://aider.chat) + [Ollama](https://ollama.com) |
| DeepSeek (cost-first) | Any BYOK tool + [DeepSeek API](https://api-docs.deepseek.com) |
| CN models (Doubao / Kimi / GLM) | [火山方舟 Coding Plan](https://www.volcengine.com/product/ark) or BYOK with respective APIs |

## Tool × Model Compatibility Matrix

✅ = supported · ⚙️ = via API/plugin · — = not supported

| Tool | Claude | GPT / OpenAI | Gemini | DeepSeek | Kimi | Local (Ollama) |
|---|---|---|---|---|---|---|
| [Claude Code](https://claude.ai/code) | ✅ native | — | — | — | — | — |
| [OpenCode](https://opencode.ai) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Aider](https://aider.chat) | ✅ | ✅ | ✅ | ✅ | ⚙️ | ✅ |
| [Codex CLI](https://github.com/openai/codex) | — | ✅ native | — | ⚙️ | — | — |
| [Cursor](https://cursor.com) | ✅ | ✅ | ✅ | ✅ | — | — |
| [Windsurf](https://codeium.com/windsurf) | ✅ | ✅ | ✅ | ✅ | — | — |
| [GitHub Copilot](https://github.com/features/copilot) | ✅ | ✅ | ✅ | — | — | — |
| [Cline](https://github.com/cline/cline) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Continue.dev](https://continue.dev) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Kilo Code](https://kilocode.ai) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [AWS Q Developer](https://aws.amazon.com/q/developer/) | — | — | — | — | — | — |
| [Gemini Code Assist](https://cloud.google.com/gemini/docs/codeassist/overview) | — | — | ✅ native | — | — | — |
| [Qoder CN](https://lingma.aliyun.com) | — | — | — | — | — | Qwen |
| [ArkClaw](https://www.volcengine.com/product/ark) | — | — | — | ✅ | ✅ | Doubao / GLM |
| [OpenHands](https://github.com/All-Hands-AI/OpenHands) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

## Classic Combinations

**① Solo developer, full-stack feature work**
Claude Code (complex tasks) + GitHub Copilot (daily completions) + DeepSeek Flash via
OpenCode (bulk/mechanical work)

**② Enterprise team on AWS**
Q Developer (IDE + audit) + AWS Bedrock Claude (API) + OpenHands (autonomous issue resolution)

**③ CN team, cost-first**
火山方舟 Coding Plan (Doubao/DeepSeek/Kimi at ¥10/mo) + Cursor or Claude Code as the IDE
layer

**④ Open-source, maximum flexibility**
OpenCode (terminal) + Cline (VS Code) + Ollama (local models) — zero subscription costs
