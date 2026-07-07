---
name: tool-decision-map
description: 全面升级 stack/ 版块，新增工具决策地图、补全开源/云厂商工具、三维模型对比、云平台订阅方案
metadata:
  type: project
---

# 设计文档：跨工具横向决策地图 & Stack 版块全面升级

**日期：** 2026-07-07  
**状态：** 待实施

## 背景与目标

现有 `stack/` 版块存在三个核心缺口：
1. `tools.md` 缺少开源工具（OpenCode、Cline 等）和云厂商工具（AWS Q Developer、Qoder CN 等）
2. `models-compared.md` 只按厂商分块叙述，缺少能力/场景/价格的横向对比
3. `pricing.md` 缺少云平台订阅方案（AWS Bedrock、火山方舟等）

目标：将 `stack/` 升级为完整的开发者选型体系，新增场景驱动的决策地图页作为统一入口。

## 交付范围

| 文件 | 操作 | 说明 |
|---|---|---|
| `docs/stack/tools.md` | 重写 | 扩充至 5 大类 ~18 个工具，附官网链接 |
| `docs/stack/models-compared.md` | 重写 | 三张横向对比表（能力/价格/场景） |
| `docs/stack/pricing.md` | 重写 | 补工具订阅汇总表 + 云平台模型订阅 |
| `docs/stack/tool-decision-map.md` | 新建 | 问题树 + 工具×模型兼容矩阵 |
| `docs/zh/stack/` 对应文件 | 同步 | 以上四个文件的中文镜像 |
| `docs/.vitepress/config.mts` | 更新 | sidebar 加入新页，调整顺序 |

## 详细设计

### 1. `stack/tools.md` — 工具全景

**结构：**
1. 引言：工具选择原则（方法论 > 工具，但工具设天花板）
2. 五大分类详解（每类含简介 + 代表工具 + 适合谁）
3. Quick Comparison 大表（~18 行）：工具 / 类别 / 授权 / 默认模型 / 定价 / 突出特点 / 官网链接
4. How to Choose 表（扩展）：场景 → 推荐类别
5. 组合使用建议

**五大类工具：**

| 类别 | 工具（附官网链接） |
|---|---|
| CLI Agent | [Claude Code](https://claude.ai/code) · [OpenCode](https://opencode.ai) · [Aider](https://aider.chat) · [Codex CLI](https://github.com/openai/codex) · [Kimi Code](https://kimi.moonshot.cn) |
| AI-native IDE | [Cursor](https://cursor.com) · [Windsurf](https://codeium.com/windsurf) · [Trae](https://trae.ai) |
| Editor Extension | [GitHub Copilot](https://github.com/features/copilot) · [Cline](https://github.com/cline/cline) · [Continue.dev](https://continue.dev) · [Kilo Code](https://kilocode.ai) |
| 云厂商工具 | [AWS Q Developer](https://aws.amazon.com/q/developer/) · [Gemini Code Assist](https://cloud.google.com/gemini/docs/codeassist/overview) · [Qoder CN](https://lingma.aliyun.com) · [ArkClaw/火山方舟](https://www.volcengine.com/product/ark) |
| 自主 Agent 平台 | [OpenHands](https://github.com/All-Hands-AI/OpenHands) · [Goose](https://github.com/block/goose) · [Qoder](https://qoder.ai) |

**Quick Comparison 表关键字段：**
- 工具名（链接官网）
- 类别
- 授权（闭源/开源 + License）
- 默认/支持模型
- 定价（免费 / 订阅 / BYOK）
- 突出特点（一句话）

**How to Choose 扩展维度：**
- 需要国产/信创合规 → 云厂商工具
- 预算极低/开源优先 → OpenCode/Aider + 开源模型 BYOK
- 不换编辑器 → Extension（Copilot/Cline）
- 超大 codebase 自主运行 → OpenHands / Qoder

### 2. `stack/models-compared.md` — 三维模型对比

**结构：**
1. 说明：模型选型三个维度（能力基线、价格、场景适配）
2. 表 1：能力基线（SWE-bench Verified + 上下文窗口 + 开源/闭源）
3. 表 2：价格快照（输入/输出 per 1M tokens，截至 2026 年中）
4. 表 3：场景适配建议（任务类型 → 推荐模型层级）
5. 如何组合使用（规划用强模型，执行用快模型）
6. 所有数据来源链接（页面底部）

**表 1 数据（能力基线）：**

| 模型 | SWE-bench Verified | 上下文窗口 | 开源 | 文档链接 |
|---|---|---|---|---|
| Claude Fable 5 | ~95% | 1M | 否 | 链接 |
| GPT-5.5 | ~88.7% | 128K | 否 | 链接 |
| Claude Opus 4.8 | ~88.6% | 1M | 否 | 链接 |
| Gemini 3.1 Pro | — | 2M | 否 | 链接 |
| DeepSeek V4 | ~80.6% | 128K | 是 | 链接 |
| Kimi K2.6 | ~80.2% | 128K | 是 | 链接 |
| Gemini 2.5 Flash | — | 1M | 否 | 链接 |
| Claude Sonnet 4.6 | — | 1M | 否 | 链接 |

**表 2 数据（价格快照）：**

| 模型 | 输入/1M tokens | 输出/1M tokens | 备注 |
|---|---|---|---|
| DeepSeek V4 Flash | $0.14 | $0.28 | 最便宜高能力 |
| Gemini 2.5 Flash | $0.15 | $0.60 | Google 快速层 |
| Gemini 3.1 Pro | $2 | $12 | 超大 context |
| Claude Sonnet 4.6 | $3 | $15 | 均衡首选 |
| Claude Opus 4.8 | $5 | $25 | 顶级代码能力 |
| GPT-5.5 | $5 | $30 | 顶级推理 |

**表 3（场景适配）：**

| 场景 | 推荐模型层 | 核心理由 |
|---|---|---|
| 复杂 agentic 多步任务 | Opus 4.8 / GPT-5.5 | 可靠性、长任务稳定性 |
| 日常功能开发 | Sonnet 4.6 / GPT-5.4 | 性价比最优 |
| 高频补全/机械操作 | Flash / Haiku / DeepSeek Flash | 速度 + 极低成本 |
| 超大 codebase（>500K tokens） | Gemini 3.1 Pro | 2M token 上下文 |
| 数据不出境/自托管 | DeepSeek / Kimi / GLM | 开源可私有部署 |
| 预算极低 | DeepSeek V4 Flash | $0.14/1M 输入 |

### 3. `stack/pricing.md` — 订阅与云平台方案

**结构：**
1. 工具订阅汇总表（所有主流工具，含免费额度 + 各档位）
2. 云平台模型订阅（AWS Bedrock / Google Vertex AI / 阿里云百炼 / 火山方舟）
3. BYOK 工具的实际 API 成本估算
4. 降低成本的策略（批量推理、缓存、Flex tier、模型分层）
5. 全部官方定价链接

**工具订阅汇总表：**

| 工具 | 免费额度 | 个人付费 | 团队/企业 | 计费模式 | 官方价格页 |
|---|---|---|---|---|---|
| GitHub Copilot | 有 | $10–$39/月 | $19–$39/user | Credits (2026.6 起) | 链接 |
| Cursor | 有 | $20–$200/月 | $40/user | 按席位 | 链接 |
| Windsurf | 有 | $20–$200/月 | $40/user | 按席位 | 链接 |
| Claude Code | — | $100/月 Max | 企业合同 | 按用量/订阅 | 链接 |
| AWS Q Developer | 50次/月 | $19/user | $19/user | 按席位 | 链接 |
| Gemini Code Assist | 无(2026.6后) | $19/月 Standard | $45/user Enterprise | 按席位 | 链接 |
| Qoder CN（通义灵码） | 有 | 订阅制 | Credits 机制 | 按席位 | 链接 |
| OpenCode / Aider / Cline | 完全免费 | BYOK | BYOK | 只付模型 API | — |

**云平台模型订阅表：**

| 平台 | 覆盖模型 | 代表定价 | 特色 | 官方链接 |
|---|---|---|---|---|
| AWS Bedrock | Claude / Llama / Nova 全系 | Sonnet 4.6: $3/$15/1M；Flex tier 半价 | Provisioned 节省 15-40%（需锁定 1-6 月） | 链接 |
| Google Vertex AI | Gemini 全系 | Gemini 3.1 Pro: $2/$12/1M | 缓存折扣，超大 context | 链接 |
| 阿里云百炼 | 通义系列 + 第三方 | 分级计费，批量折扣 | 国内合规，与 Qoder CN 打通 | 链接 |
| 火山方舟 Coding Plan | Doubao / DeepSeek / Kimi / GLM（6款） | Lite ¥10/月起，Pro ¥50/月起（首两月）| 兼容 Claude Code/Cursor 等主流工具 | 链接 |

### 4. `stack/tool-decision-map.md` — 场景决策地图（新建）

**结构：**
1. 如何使用这张地图（说明）
2. 入口 A：按任务类型
3. 入口 B：按团队/预算约束
4. 入口 C：按模型偏好
5. 工具 × 模型兼容矩阵表
6. 常见组合推荐（3-4 个经典工作流）
7. 相关页面链接

**决策问题树（核心内容）：**

```
入口 A：任务类型
├── 大型功能 / 跨文件重构 → CLI Agent（Claude Code / OpenCode）
├── 日常编码 + 智能补全 → AI IDE（Cursor / Windsurf）
├── 不换编辑器，只加 AI → Extension（Copilot / Cline）
├── 完全自主运行，处理 Issue → 自主 Agent（OpenHands / Qoder）
└── 国内合规 / 信创项目 → 云厂商工具（Qoder CN / ArkClaw）

入口 B：约束条件
├── 个人开发者，预算 <$20/月 → OpenCode BYOK + DeepSeek Flash
├── 小团队，不想管 key → Cursor / Windsurf / Copilot 订阅
├── 企业，需要 SSO/审计 → Q Developer / Gemini Code Assist Enterprise
├── 数据不出境 → Tabby 自托管 + 本地开源模型
└── 需要同时用多个模型，国内 → 火山方舟 Coding Plan

入口 C：模型偏好
├── 偏好 Claude → Claude Code 直接订阅 or OpenCode (Anthropic key)
├── 偏好开源模型 → Cline / Continue + Ollama
├── 偏好 Google 生态 → Gemini Code Assist / Cursor + Gemini
└── 国内模型（低成本） → 火山方舟 Coding Plan（Doubao/DeepSeek/Kimi）
```

**工具 × 模型兼容矩阵（关键新内容）：**

| 工具 | Claude | GPT | Gemini | DeepSeek | Kimi | 本地模型 |
|---|---|---|---|---|---|---|
| Claude Code | ✅ 原生 | — | — | — | — | — |
| OpenCode | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ Ollama |
| Cursor | ✅ | ✅ | ✅ | ✅ | — | — |
| Windsurf | ✅ | ✅ | ✅ | ✅ | — | — |
| Cline | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ Ollama |
| Continue.dev | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ Ollama |
| GitHub Copilot | ✅ | ✅ | ✅ | — | — | — |
| AWS Q Developer | — | — | — | — | — | — |
| 火山方舟 ArkClaw | — | — | — | ✅ | ✅ | Doubao/GLM |

### 5. Config 更新

`config.mts` sidebar `stack` section 调整顺序：
```
stack/tool-decision-map   ← 新增，放在 tools 之后
stack/tools
stack/models-compared
stack/pricing
stack/models
stack/cost
stack/going-10x
```

## 内容原则

- 每个工具/模型/平台条目都附官方链接（官网或官方定价页）
- 数据来源集中放在各页底部的 `## 数据来源` 节
- 定价数据注明截止日期（2026 年中），提醒用户核实
- 中文页与英文页同步交付

## 未涵盖范围

- IDE/工具使用教程（属于 guides/ 范围）
- 具体工具的配置方法（属于 reference/ 范围）
- 模型 fine-tuning 选项
