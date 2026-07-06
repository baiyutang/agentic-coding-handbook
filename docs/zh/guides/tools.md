---
title: 工具设计
description: 设计 agent 能高效使用、用来操作代码库的工具。
---

agent 的能力上限，取决于它能用到的工具。设计良好的工具，是"有用的 agent"和"让人抓狂的 agent"之间的分水岭。

## 什么是好工具

一个好的 agent 工具应当是：

- **单一职责** —— 把一件事做好
- **文档清晰** —— 明确说明输入、输出和副作用
- **尽可能幂等** —— 跑两次不应把事情搞坏
- **有校验** —— 动手前先检查输入
- **可观测** —— 返回清晰的反馈，说明发生了什么

## 常见工具类别

### 文件系统工具

agent 需要读写和搜索你的代码库。应提供：

- **Read** —— 对大文件支持分页
- **Write** —— 应用前带 diff 预览
- **Grep/Find** —— 支持正则和 glob
- **Edit** —— 精确字符串匹配（而非行号）

### Shell 工具

agent 会运行命令来装依赖、跑测试、做构建。关键考量：

- **沙箱化**破坏性命令（`rm -rf`、`git reset --hard`）
- 对长时间运行的命令设置**超时**
- **流式输出**，让 agent 能对进度作出反应
- **捕获退出码**，用于错误处理

### Git 工具

安全、读优先的 Git 操作：

- `git status`、`git diff`、`git log` —— 先读再写
- `git add`、`git commit` —— 带有意义的提交信息
- 未经明确批准，绝不 force-push 或改写共享历史

## 工具设计原则

### 1. 精确优于模糊

```typescript
// 好：精确字符串匹配 —— 不对就大声失败
edit({ file: "src/foo.ts", old_string: "const x = 1", new_string: "const x = 2" })

// 差：行号 —— 脆弱，任何改动都会错位
edit({ file: "src/foo.ts", line: 42, new_string: "const x = 2" })
```

### 2. 返回可据以行动的结果

```
❌ "编辑失败"
✅ "编辑失败：在 src/foo.ts 中未找到 old_string。文件可能在你上次读取后发生了变化。
    请重新读取该文件后再试。"
```

### 3. 尽早校验

在动手之前检查前置条件：

```typescript
function deleteFile(path: string) {
  if (!exists(path)) return { error: `文件不存在：${path}` }
  if (isOutsideProject(path)) return { error: "不能删除项目之外的文件" }
  if (isGitTracked(path) && !hasBackup(path)) return { error: "请先提交或暂存改动" }
  // ... 继续执行
}
```

## 测试你的工具

在生产中依赖某个工具之前，用以下场景测试它：

1. **正常路径** —— 输入有效时能正常工作吗？
2. **边界情况** —— 空文件、大文件、特殊字符
3. **错误情况** —— 文件缺失、输入非法、权限错误
4. **幂等性** —— 跑两次得到相同结果（或一条清晰的"已完成"提示）
