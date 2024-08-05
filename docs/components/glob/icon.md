# icon 图标组件

用于项目内组件的展示,基本支持所有图标库

支持按需加载,只打包所用到的图标

icon 组件位于 [/@/components/Icon](https://code.webtax.com.cn/webtax_income_tax/webtax_taxaudit_admin/src/components/Icon)内

::: tip

icon 的值可以在[Iconify](https://iconify.design) 上面查询

:::

## 使用

```vue
<template>
  <Icon icon="gg:loadbar-doc"></Icon>
</template>

<script>
  import { defineComponent } from 'vue';
  import { Icon } from '/@/components/Icon';
  export default defineComponent({
    components: { Icon },
  });
</script>
```

## Props

| 属性   | 类型     | 默认值 | 说明     |
| ------ | -------- | ------ | -------- |
| icon   | `string` | -      | 图标名   |
| color  | `string` | -      | 图标颜色 |
| size   | `number` | 16     | 图标大小 |
| prefix | `string` | -      | 图标前缀 |
