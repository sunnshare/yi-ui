# Button 组件

常用的操作按钮。

## 基础用法

基础的按钮用法。

<demo-block>
::: slot source
<button-button1></button-button1>
:::

使用 type 属性来定义 Button 的样式。

::: slot highlight

```html
<div>
  <yi-button>默认按钮</yi-button>
  <yi-button type="primary">主要按钮</yi-button>
  <yi-button type="success">成功按钮</yi-button>
  <yi-button type="info">信息按钮</yi-button>
  <yi-button type="warning">警告按钮</yi-button>
  <yi-button type="danger">危险按钮</yi-button>
</div>
```

:::
</demo-block>
