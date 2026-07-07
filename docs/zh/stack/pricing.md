---
title: 订阅与价格
description: AI 编码工具订阅计划、模型 API 定价、云平台方案横向对比——附官方链接核实最新价格。数据截至 2026 年 7 月。
---

# 订阅与价格

这是一份帮你做对比的快照——**不是权威来源**。价格随时变化，以下每项数字都附有官方链接。
请以此为起点，在做决策前核实当前价格。

::: danger 快照——用前核实
以下数据均为 **2026 年 7 月** 快照。AI 价格变动频繁。**在使用前务必通过链接核实官方当前价格。**
:::

## 编码工具订阅

主流 [AI 编码工具](/zh/stack/tools)的收费方式：

| 工具 | 免费额度 | 个人付费 | 团队 / 企业 | 计费模式 | 官方定价 |
|---|---|---|---|---|---|
| [GitHub Copilot](https://github.com/features/copilot) | 有 | $10–$39/月 | $19–$39/用户/月 | Credits 制（2026.6 起） | [方案](https://github.com/features/copilot/plans) |
| [Cursor](https://cursor.com) | 有 | $20–$200/月 | $40/用户/月 | 按席位 | [定价](https://cursor.com/pricing) |
| [Windsurf](https://codeium.com/windsurf) | 有 | $20–$200/月 | $40/用户/月 | 按席位 | [定价](https://codeium.com/pricing) |
| [Claude Code](https://claude.ai/code) | — | $100/月（Max） | 企业合同 | 按用量 / 订阅 | [定价](https://claude.com/pricing) |
| [AWS Q Developer](https://aws.amazon.com/q/developer/) | 50 次/月 | $19/用户/月 | $19/用户/月 | 按席位 | [定价](https://aws.amazon.com/q/developer/pricing/) |
| [Gemini Code Assist](https://cloud.google.com/gemini/docs/codeassist/overview) | 无（2026.6 后取消） | $19/月 Standard | $45/用户 Enterprise | 按席位 | [定价](https://cloud.google.com/gemini/docs/codeassist/pricing) |
| [Qoder CN](https://lingma.aliyun.com) | 有 | Credits 制 | Credits + VPC 方案 | 按席位 / Credits | [定价](https://lingma.aliyun.com/lingma/pricing) |
| OpenCode / Aider / Cline | 完全免费 | 仅 BYOK | 仅 BYOK | 只付模型 API | — |

## 模型 API 定价

每 **100 万 tokens**，输入 / 输出，标准按需计费：

| 模型 | 输入 | 输出 | 备注 |
|---|---|---|---|
| **Claude Fable 5** | $10 | $50 | 顶级 |
| **Claude Opus 4.8** | $5 | $25 | 高能力 |
| **Claude Sonnet 4.6** | $3 | $15 | 均衡首选 |
| **Claude Haiku 4.5** | $1 | $5 | 快速 / 便宜 |
| **GPT-5.5** | $5 | $30 | 前沿 |
| **GPT-5.4** | $2.50 | $15 | 主力档 |
| **GPT-5.4 mini** | $0.75 | $4.50 | 生产性价比 |
| **Gemini 3.1 Pro** | $2 | $12 | ~2M 上下文 |
| **Gemini 3 Flash** | $0.50 | $3 | 快速默认 |
| **Gemini 3.1 Flash-Lite** | $0.10 | $0.40 | 预算档 |
| **DeepSeek V4 Pro** | $1.74 | $3.48 | 开源权重 |
| **DeepSeek V4 Flash** | $0.14 | $0.28 | 最便宜的强模型 |
| **Kimi K2.6** | ~$0.60 | ~$2.50 | 开源权重；价格因托管方而异 |
| **Zhipu GLM-5** | $0.60 | $1.92 | 开源权重 |

数据来源：[Claude](https://platform.claude.com/docs/en/about-claude/pricing) ·
[OpenAI](https://platform.openai.com/docs/pricing) ·
[Gemini](https://ai.google.dev/gemini-api/docs/pricing) ·
[DeepSeek](https://api-docs.deepseek.com/quick_start/pricing) ·
[Kimi](https://platform.moonshot.ai/) ·
[GLM](https://z.ai/)

## 云平台模型订阅

这些平台让你在同一计费关系下使用多个模型——适合已在其生态内或希望灵活切换提供商的团队。

| 平台 | 覆盖模型 | 代表定价 | 亮点 | 官方页面 |
|---|---|---|---|---|
| [AWS Bedrock](https://aws.amazon.com/bedrock/) | Claude / Llama / Nova / Mistral | Sonnet 4.6: $3/$15 per 1M；**Flex tier 半价** | Provisioned 节省 15–40%（需锁定 1–6 个月）；批量推理半价 | [定价](https://aws.amazon.com/bedrock/pricing/) |
| [Google Vertex AI](https://cloud.google.com/vertex-ai) | Gemini 全系 | Gemini 3.1 Pro: $2/$12 per 1M | 缓存折扣；2M token 上下文 | [定价](https://cloud.google.com/vertex-ai/pricing) |
| [阿里云百炼](https://bailian.aliyun.com) | 通义系列 + 第三方 | 按输入长度分级计费；批量折扣 | 国内合规；与 Qoder CN 打通 | [定价](https://help.aliyun.com/zh/model-studio/model-pricing) |
| [火山方舟 Coding Plan](https://www.volcengine.com/product/ark) | 豆包 / DeepSeek / Kimi / GLM（6 款） | Lite ¥10/月 · Pro ¥50/月（前两月活动价） | 模型自由切换；兼容 Claude Code、Cursor 等 30+ 工具 | [定价](https://www.volcengine.com/docs/82379/1544106) |

::: tip 火山方舟 Coding Plan——国内开发者高性价比之选
一次订阅覆盖豆包、DeepSeek、Kimi、GLM。通过 API 与 Claude Code、Cursor 等主流工具直接对接。
Lite 套餐前两个月低至 ¥10/月。
:::

## BYOK：你实际支付多少

如果使用自带 key 的工具（OpenCode、Aider、Cline），唯一成本是模型 API。典型开发者用量：

| 使用强度 | 估算月费 |
|---|---|
| 轻度（每天几小时，中级模型） | $5–$15 |
| 中度（日常主力，Sonnet 级别） | $15–$50 |
| 重度（全天 agentic，顶级模型） | $50–$200+ |

对机械性任务从顶级模型切换到 DeepSeek Flash，账单可降低 10–20 倍。

## 如何降低成本

- **Prompt 缓存** —— 大多数厂商对重复上下文提供约 90% 折扣，适用于大型系统提示或文档。
- **批量 API** —— 异步工作（生成测试、写文档、批量重构）在 OpenAI 和 Anthropic 约半价。
- **AWS Bedrock Flex** —— Claude 按需价格半价，无锁定期，已在 AWS 上的团队可直接使用。
- **模型分层** —— 规划用顶级模型，编码用中级，补全用快速/廉价模型。详见[成本与效率](/zh/stack/cost)。
- **开源权重** —— DeepSeek 和 Kimi 自托管：基础设施成本之外无 token 费。

如无把握：先用免费层，测量一周真实用量，再决定 API 计费还是更高套餐更划算。
