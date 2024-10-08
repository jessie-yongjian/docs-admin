# Upload 上传组件

用于项目文件上传

## 使用

```vue
<template>
  <div class="p-4">
    <BasicUpload :maxSize="20" :maxNumber="10" @change="handleChange" :api="uploadApi" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicUpload } from '/@/components/Upload';
  import { uploadApi } from '/@/api/sys/upload';

  export default defineComponent({
    components: { BasicUpload },
    setup() {
      return {
        uploadApi,
        handleChange: (list: string[]) => {
          createMessage.info(`已上传文件${JSON.stringify(list)}`);
        },
      };
    },
  });
</script>
```

## 文件上传接口配置

.env.development 和.env.production 配置开发和生产的文件上传地址

```bash
# .env.development

VITE_PROXY=[["/upload","http://localhost:3001/upload"]]

# 如果没有跨域问题，则直接使用真实上传地址
VITE_GLOB_UPLOAD_URL=/upload

# .env.production
VITE_GLOB_UPLOAD_URL=/upload

```

## Props

| 属性              | 类型       | 默认值   | 可选值 | 说明                                     |
| ----------------- | ---------- | -------- | ------ | ---------------------------------------- |
| showPreviewNumber | `boolean`  | true     | -      | 是否显示预览数量                         |
| emptyHidePreview  | `boolean`  | false    | -      | 没有上传文件时是否隐藏预览               |
| helpText          | `string`   | -        | -      | 帮助文本                                 |
| maxSize           | `number`   | 2        | -      | 单个文件最大体积，单位 M                 |
| maxNumber         | `number`   | Infinity | -      | 最大上传数量，Infinity 则不限制          |
| accept            | `string[]` | -        | -      | 限制上传格式 `['.doc,','.docx','.xlsx']` |
| multiple          | `boolean`  | -        | -      | 开启多文件上传                           |
| uploadParams      | `any`      | -        | -      | 上传携带的参数                           |
| api               | `Fn`       | -        | -      | 上传接口，为上面配置的接口               |
