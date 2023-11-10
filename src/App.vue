<template>
  <div id="app">
    <!-- 默认按钮 -->
    <yi-button>默认按钮</yi-button>
    <!-- 带类型的按钮 -->
    <yi-button type="primary">主要按钮</yi-button>
    <yi-button type="warning">警告按钮</yi-button>
    <yi-button type="danger">危险按钮</yi-button>
    <yi-button type="success">成功按钮</yi-button>
    <yi-button type="info">信息按钮</yi-button>
    <hr />
    <!-- 带图标的按钮 -->
    <yi-button type="primary" icon="icon-edit">设置</yi-button>
    <hr />
    <yi-button type="primary" loading>加载中的按钮，不可点击</yi-button>
    <yi-button type="success" @click="handleClick">绑定了点击事件的按钮</yi-button>
    <hr />
    <yi-button-group>
      <yi-button icon="icon-left-circle" type="primary">上一页</yi-button>
      <yi-button icon="icon-right-circle" type="primary" icon-position="right">下一页</yi-button>
    </yi-button-group>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    handleClick(e) {
      console.log(e);
    },
  },
};
</script>
