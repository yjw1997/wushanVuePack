<template>
    <div class="selection-bar">
        <div class="title">菜单</div>
        <div class="select-box scroll-hide" >
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
        },
    };
</script>
<style lang="less" scoped>
.selection-bar{
  height: 100%;
  width: 50px;
  background-color: darkorange;
  position: relative;
  display: block;
  z-index: 999;
  .select-box{
    height: 0;
    overflow: auto;
    transition: all .2s ease-in-out;
    width: 50px;
    &>div{
      height: 30px;
      width: 50px;
      cursor: pointer;
      background-color: darkgoldenrod;
      &:hover{
        background-color: goldenrod;
      }
    }
  }
  .title{
    cursor: pointer;
    height: 100%;
    width: 50px;
    margin: 0 auto;
    text-align: center;
  }
  .title:hover+.select-box,.select-box:hover{
    display: block;
    height: 90px;
    position: absolute;
    top: 20px;
  }
}
</style>
