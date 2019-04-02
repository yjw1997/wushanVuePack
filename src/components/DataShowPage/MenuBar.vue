<template>
  <div
    class="menubar-container"
    :class="isShow?'show-menubar':'hide-menubar'"
    @mousemove="isShow=true"
    @mouseleave="isShow=false"
  >
    <i class="iconfont iconqianjin"></i>
    <svg class="svg" aria-hidden="true" @click="handleClick('home')">
      <use xlink:href="#iconshouye"></use>
    </svg>
    <svg class="svg" aria-hidden="true" @click="handleClick('security')">
      <use xlink:href="#iconanfangguanli"></use>
    </svg>
    <svg class="svg" aria-hidden="true">
      <use xlink:href="#iconxiaofangshuan1"></use>
    </svg>
    <svg class="svg" aria-hidden="true">
      <use xlink:href="#iconcanyinguanli"></use>
    </svg>
    <svg class="svg" aria-hidden="true">
      <use xlink:href="#iconweixiushijian1"></use>
    </svg>
    <svg class="svg" aria-hidden="true">
      <use xlink:href="#iconcheliangguanli"></use>
    </svg>
    <svg class="svg" aria-hidden="true">
      <use xlink:href="#iconzichanguanli"></use>
    </svg>
    <svg class="svg" aria-hidden="true">
      <use xlink:href="#iconjienengguanli"></use>
    </svg>
    <svg class="svg" aria-hidden="true">
      <use xlink:href="#iconlou"></use>
    </svg>
  </div>
</template>

<script>
  import _Tools from "@/js/tools.js";
export default {
  name: "MenuBar",
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    handleClick:function (param) {
      // this.$router.push({ path: '/CityMaker' })
      _Tools.triggerStorageEvent("closeHtmlWindow",111)
      _Tools.triggerStorageEvent("changeMenuBarSelected",param)
      _Tools.triggerStorageEvent("handleDataShowIndexClose",param)
      // _Tools.triggerStorageEvent("handleFirstMenuClick",param)
      // 对象


    }
  },
  mounted: function() {}
};
</script>

<style lang="less" scoped>
.menubar-container {
  background-color: rgba(20, 21, 21, 0.5);
  width: 55px;
  height: 485px;
  position: absolute;
  top: 80px;
  z-index: 5;
  border: 1px solid black;
  border-radius: 100px 100px 100px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > i {
    height: 45px;
    width: 45px;
    font-size: 26px;
    color: #00dfef;
    line-height: 45px;
    &:hover {
      cursor: pointer;
      background-color: #00dfef;
      color: white;
      border-radius: 5px;
    }
  }
  & > i:nth-child(1) {
    border-bottom: 2px solid #1f2825;
    height: 30px;
    font-size: 15px;
    line-height: 30px;
    margin-bottom: 15px;
  }
}
.show-menubar {
  left: 0;
  transition: all 0.1s ease-in-out;
}
.hide-menubar {
  left: -54px;
  transition: all 0.1s ease-in-out;
}
svg {
  height: 26px;
  width: 25px;
  padding: 10px;
  &:hover {
    cursor: pointer;
    background-color: #123f42;
    border-radius: 5px;
  }
}
</style>
