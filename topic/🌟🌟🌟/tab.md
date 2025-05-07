# 🎯 Tab 标签页组件设计与实现

## 📝 题目描述
请使用 React 或 Vue 实现一个通用的 Tab 标签页组件，支持以下功能：
<img src="../../public/tab.png" alt="tab" style="width: 50%;">

## ✅ 基础要求
- 支持多个标签页切换显示内容
- 默认激活第一个标签页
- 支持通过 props 传入标签页标题和内容
- 支持点击标签页切换内容

## 💡 加分项
- 支持通过 slot 或 render 函数自定义内容区域
- 支持受控模式（通过外部控制激活标签页）
- 支持禁用某个标签页
- 支持标签关闭功能（点击关闭按钮移除该页签）

## 🧪 要求
- 请确保组件具有良好的可读性和可维护性
- 代码结构清晰，必要时进行模块拆分
- 适当添加注释说明你的设计思路

## 📦 示例数据

### React
```tsx
import React from 'react';
import { Tabs } from './Tabs'; // 假设你保存为 Tabs.tsx

const App = () => {
  const tabList = [
    { title: '首页', content: "这是首页内容" },
    { title: '关于', content: "关于我们页面", closable: true },
    { title: '禁用', content: "你看不到我", disabled: true },
    { title: '联系', content: "联系信息", closable: true },
  ];

  const handleClose = (index: number) => {
    console.log('关闭了标签页:', index);
  };

  return (
    <div style={{ width: 600, margin: '0 auto' }}>
      <h2>Tab 组件示例</h2>
      <Tabs tabs={tabList} defaultIndex={1} onClose={handleClose} />
    </div>
  );
};

export default App;

```

### Vue
```tsx  
<template>
  <Tabs :tabs="tabList" :defaultIndex="1" @close="handleClose">
    <!-- 可选插槽：你也可以自定义内容渲染 -->
    <template #default="{ content }">
      <div style="border: 1px dashed gray; padding: 10px;">
        自定义内容：{{ content }}
      </div>
    </template>
  </Tabs>
</template>

<script setup>
import Tabs from './Tabs.vue' // 假设你保存为 Tabs.vue

const tabList = [
  { title: '首页', content: '这是首页内容' },
  { title: '关于我们', content: '这里是关于信息', closable: true },
  { title: '禁用页签', content: '你不应该看到我', disabled: true },
  { title: '联系', content: '联系信息在这里', closable: true },
]

function handleClose(index) {
  console.log('关闭了标签页 index:', index)
}
</script>

```