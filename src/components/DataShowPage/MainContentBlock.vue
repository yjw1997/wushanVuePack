<template>
  <div id="container" :style="{width: width}">
    <div class="corner corner-left-top"></div>
    <div class="corner corner-right-top"></div>
    <div class="corner corner-left-bottom"></div>
    <div class="corner corner-right-bottom"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MainContentBlock",
  props: {
    width: {
      type: String,
      default: "420px"
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
#container {
  height: 100%;
  position: relative;
  border-top: 1px solid #00879f;
  border-bottom: 1px solid #00879f;
  z-index: 2;
  display: inline-block;
  .corner {
    height: 3px;
    width: 35px;
    background-color: #00879f;
  }
  .corner-left-top {
    position: absolute;
    top: 0;
    left: 0;
  }
  .corner-right-top {
    position: absolute;
    top: 0;
    right: 0;
  }
  .corner-left-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .corner-right-bottom {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
