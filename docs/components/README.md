# 介绍

该项目的组件大部分没有进行全局注册。采用了哪里使用哪里注册的方式,如下

```vue
<template>
  <ConfigProvider>
    <router-view />
  </ConfigProvider>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { ConfigProvider } from 'ant-design-vue';
  export default defineComponent({
    name: 'App',
    components: { ConfigProvider },
    setup() {
      return {};
    },
  });
</script>
```

**注册了部分使用频率较高的组件为全局组件**

目前项目全局注册的全局组件有两个地方。

1. ant-design-vue 组件库部分全局注册

代码地址：[/@/components/registerGlobComp.ts](https://code.webtax.com.cn/webtax_income_tax/webtax_taxaudit_admin/src/setup/ant-design-vue/index.ts)

```ts
// Load on demand

import type { App } from 'vue';

import {
  // need
  Form,
  Input,
  Row,
  Col,
  Spin,
} from 'ant-design-vue';

import './spin';

export function setupAntd(app: App<Element>) {
  // need
  // Here are the components required before registering and logging in
  app.use(Form).use(Input).use(Row).use(Col).use(Spin);
}
```

2. 自定义组件全局注册

该文件登录后在加载，所有首页没必要用的的全局组件可以注册在这里

代码地址：[/@/components/registerGlobComp.ts](https://code.webtax.com.cn/webtax_income_tax/webtax_taxaudit_admin/src/components/registerGlobComp.ts)

```ts
import Icon from './Icon/index';
import { BasicHelp, BasicTitle } from './Basic';
import Button from './Button/index.vue';
import { App } from 'vue';

const compList = [Icon, BasicHelp, BasicTitle, Button];
export function registerGlobComp(app: App<Element>) {
  compList.forEach((comp: any) => {
    app.component(comp.name, comp);
  });
}
```
