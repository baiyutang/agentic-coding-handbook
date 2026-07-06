---
title: Spec-First 开发
description: 在 agent 写代码之前，先写一份简短、结构化的 spec —— 告诉它「要什么」，而非「怎么做」。
---

# Spec-First 开发

快速把错的东西做出来，最快的办法就是跳过 spec。开头一份简短、结构化的 spec，能把模糊的需求变成明确的目标 —— 也给 agent（和你）一个共享的"完成"定义。它是[规划](/zh/guides/planning)的天然搭档：spec 说*要什么*，plan 说*怎么做*。

## 告诉 agent「要什么」，而非「怎么做」

spec 的目的是钉住**意图和边界**，而把实现留给 agent（以及它提出的规划）。你是产品负责人，agent 是工程师。

## Intent Spec 模板

四个板块，保持简短。放进一个文件（如 `SPEC.md`）或直接放进提示：

```markdown
## Goal（目标）
一两句话：完成后什么会成立，以及为什么重要。

## Acceptance Criteria（验收标准）
- 具体、可检验的陈述。最好每条都能映射到一个测试。
- "未登录用户访问 /dashboard 会被重定向到 /login。"
- "用无效邮箱提交表单会显示行内错误。"

## Constraints（约束）
- 使用现有 Button 组件；不加依赖。
- 参照 src/api/users/ 的模式。
- 移动端宽度低至 320px 也要正常。

## Non-Goals（非目标）
- 本轮不处理 SSO。
- 不碰计费流程。
```

**验收标准**是核心 —— 越读起来像测试，agent 就越能[自证其工作](/zh/guides/verification)。**非目标**是最被低估的一块：它阻止 agent"顺手"扩大范围。

## 流程

```markdown
1. 写 Intent Spec（Goal / Acceptance Criteria / Constraints / Non-Goals）
2. 让 agent 复述它、并标出模糊点或遗漏的情况 —— 逐一澄清
3. 让它针对 spec 给出规划（见 /zh/guides/planning）；审查
4. 实现，逐条验证验收标准
5. 拿结果对照 spec 检查，而不是对照你记忆里想要的东西
```

第 2 步是 spec-first 真正见效的地方：好的 agent 会在一行代码写出来之前，抛出那些你没想到要回答的问题。

## 让 spec 保持小而可丢弃

spec 是对齐的工具，不是要死守的合同。小功能就几行；大功能就[拆解](/zh/guides/planning)成几个小 spec，每个都可独立验证。如果构建途中现实与 spec 矛盾，更新 spec 再继续 —— 一份过时的 spec 比没有还糟。

::: tip 提示
用 [create-a-spec 配方](/zh/reference/prompt-recipes)把 spec 变成起手提示。
:::
