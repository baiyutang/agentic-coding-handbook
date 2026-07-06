---
title: 贡献指南
description: 如何为这本手册提建议、纠错或新增内容。
---

# 贡献指南

这本手册是开源的，靠社区贡献不断变好。你不需要任何特殊权限 —— **任何有 GitHub 账号的人**都能参与。下面是方法。

## 三种参与方式

### 1. 提反馈（最简单）

发现了错误或看不懂的地方？用顶部导航里的 **"反馈"** 链接开一个 issue。不用 fork、不用写代码 —— 告诉我们就行。一个简短的结构化表单会记录页面、问题类型和详情。

### 2. 在浏览器里编辑某一页

每页底部都有 **"在 GitHub 上编辑此页"** 链接。点它，然后：

1. GitHub 会提示帮你 **fork** 仓库（在你账号下复制一份）—— 接受即可。
2. 直接在浏览器里改 Markdown。
3. 点 **Propose changes**，再点 **Create pull request**。

就这样 —— 无需本地环境。改错别字、纠错、调措辞最合适。

### 3. 在本地做较大改动

新增页面或多文件改动，走本地流程：

```bash
# 1. 先在 GitHub 上 fork 本仓库，然后：
git clone https://github.com/<你>/agentic-coding-handbook.git
cd agentic-coding-handbook
git checkout -b my-change

# 2. 安装并预览
pnpm install
pnpm dev            # http://localhost:5173

# 3. 构建须通过（会检查死链）
pnpm build

# 4. 提交、推送到你的 fork，再发 pull request
```

## 你的 PR 会经历什么

维护者会审查你的 PR —— 你可能会收到评论或修改建议。一旦合并进 `main`，站点会**自动重新部署**，你的改动就上线了。

## 几条约定

- **双语。** 英文页在 `docs/` 根；中文在 `docs/zh/`。改了一种语言，请在另一种同步。
- **稳定优于时髦。** 优先写经得起时间的内容；易变事实（价格、模型版本）标注日期并附官方链接。
- **前置元数据。** 每页需要 `title` 和 `description`。
- **链接。** 叶子页不带尾斜杠（`/zh/guides/prompting`）；章节首页带（`/zh/guides/`）。

完整细节见仓库里的 [`CONTRIBUTING.md`](https://github.com/baiyutang/agentic-coding-handbook/blob/main/CONTRIBUTING.md)。

::: tip 提示
不确定改动该放哪、或某个想法合不合适？先开一个[反馈 issue](https://github.com/baiyutang/agentic-coding-handbook/issues/new/choose) 问一下 —— 随时欢迎。
:::
