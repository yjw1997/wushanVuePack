<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less" >
html,
body,
#app {
  height: 100%;
  font-family: "微软雅黑","Microsoft Yahei","Hiragino Sans GB",tahoma,arial,"宋体";
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
