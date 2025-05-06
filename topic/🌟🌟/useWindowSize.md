# useWindowSize Hook

`useWindowSize` 是一个用于获取当前浏览器窗口尺寸信息的 Hook，它可以帮助你实时监听窗口大小变化，并在组件中方便地使用这些信息。

## 使用示例

### React 示例
```tsx
import useWindowSize from './useWindowSize';

function ResponsiveComponent() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h1>当前窗口尺寸</h1>
      <p>宽度: {width}px</p>
      <p>高度: {height}px</p>
    </div>
  );
}
```

### Vue 示例
```vue
<template>
  <div>
    <h1>当前窗口尺寸</h1>
    <p>宽度: {{ width }}px</p>
    <p>高度: {{ height }}px</p>
  </div>
</template>

<script setup>
const { width, height } = useWindowSize();
</script>
```

## 功能特点

1. 实时监听窗口大小变化
2. 返回窗口的宽度和高度
3. TypeScript 支持，提供类型安全
