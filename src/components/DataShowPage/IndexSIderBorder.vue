<template>
  <div v-cloak class="index-sider-border">
    <i class="iconfont iconiconfontadd"></i>
    <div></div>
    <div></div>
    <div></div>
    <i class="iconfont iconiconfontadd"></i>
  </div>
</template>

<script>
export default {
  name: "IndexSiderBorder",
  data(){
    return{
      
    }
  }
};
</script>

<style lang="less" scoped>
.index-sider-border {
  width: 60px;
  height: 100%;
  background-color: #020919;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 2;
}
.index-sider-border :nth-child(1) {
  margin-top: 80px;
}
.index-sider-border :nth-child(2) {
  width: 1px;
  height: 85px;
  border-left: 2px solid #003054;
}
.index-sider-border :nth-child(3) {
  width: 1px;
  height: calc(100% - 80px - 85 * 2px - 30px);
  border-left: 2px dashed #003054;
  margin: 5px 0;
}
.index-sider-border :nth-child(4) {
  width: 1px;
  height: 85px;
  border-left: 2px solid #003054;
}
.index-sider-border :nth-child(5) {
  margin-bottom: 30px;
}
.index-sider-border i {
  color: #02acb4;
}

[v-cloak] {
  display: none !important;
}
</style>
