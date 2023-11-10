<template>
  <svg class yi-icon aria-hidden="true">
    <use :xlink:href="`#${icon}`" />
    <!-- 加上图标库里复制的名字 -->
  </svg>
</template>
<script>
import "./../styles/icon";
export default {
  name: "yi-icon", // 定义组件名
  props: {
    icon: {
      type: String,
      require: true, // 设置必传
    },
  },
};
</script>
<style>
.yi-icon {
  width: 30px;
  height: 30px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
