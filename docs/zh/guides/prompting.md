---
title: Prompting
description: 写出能让 AI 编码 agent 稳定产出高质量结果的提示。
---

好的 prompting，是一个原地打转的 agent 和一个稳定交付的 agent 之间的差别。以下是行之有效的模式。

## 明确界定范围

```markdown
❌ "加个登录认证"
✅ "在登录页加上邮箱/密码认证，用 bcrypt 做哈希、JWT 做会话。
   创建一个 POST /api/auth/login 接口和一个 LoginForm 组件，
   并为两者写测试。"
```

第一个提示留给理解的空间太大，第二个给了 agent 明确的目标。

## 给出约束

有了边界，agent 表现更好：

```markdown
- 用现有的 Button 组件，不要新建
- 路由结构参照 src/api/users/ 里的模式
- 打包体积控制在 5KB 以内 —— 不要引入新依赖
- 使用 TypeScript，strict 模式
```

## 展示，而不只是描述

引用现有代码作为示例：

```markdown
参照 src/components/UserProfile.tsx 里 UserProfile 组件的同款模式 ——
相同的文件结构、相同的测试风格、相同的错误处理方式。
```

## "为什么"很重要

说清目标，而不只是任务：

```markdown
✅ "我们需要给评论列表加乐观更新，让 UI 感觉即时响应。
   用和 LikeButton 一样的模式（见 src/components/LikeButton.tsx）。
   如果服务端拒绝，则优雅回滚并在行内显示错误。"
```

## 分层迭代

对复杂功能，分几轮构建：

1. **第 1 轮：** "先用静态数据搭出基础组件 —— 把布局做对就行"
2. **第 2 轮：** "接上 API 调用和加载态"
3. **第 3 轮：** "加上错误处理和边界情况"
4. **第 4 轮：** "加上动画和打磨细节"

每一轮都是独立的提示。这能让 agent 保持专注，也让每次改动都可审查。
