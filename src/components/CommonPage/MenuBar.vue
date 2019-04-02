<template>
  <div class="menubar-container" id="menuBar">
    <!--<i class="iconfont iconqianjin"></i>-->
    <!-- <i class="iconfont iconshouye"></i>
    <i class="iconfont iconanfangguanli"></i>
    <i class="iconfont iconxiaofangshuan1"></i>
    <i class="iconfont iconcanyinguanli"></i>
    <i class="iconfont iconweixiushijian-copy"></i>
    <i class="iconfont iconrencheguiji"></i>
    <i class="iconfont iconzichanguanli"></i>
    <i class="iconfont iconjienengguanli"></i>-->
    <!-- <i class="iconfont iconloudong"></i> -->
    <svg
      class="svg"
      :class="{'selected':currentIndex=='home'}"
      aria-hidden="true"
      @click="handleClick('home')"
    >
      <use xlink:href="#iconshouye"></use>
    </svg>
    <svg
      class="svg"
      :class="{'selected':currentIndex=='security'}"
      aria-hidden="true"
      @click="handleClick('security')"
    >
      <use xlink:href="#iconanfangguanli"></use>
    </svg>
    <svg
      class="svg"
      :class="{'selected':currentIndex=='fire'}"
      aria-hidden="true"
      @click="handleClick('fire')"
    >
      <use xlink:href="#iconxiaofangshuan1"></use>
    </svg>
    <svg
      class="svg"
      :class="{'selected':currentIndex=='catering'}"
      aria-hidden="true"
      @click="handleClick('catering')"
    >
      <use xlink:href="#iconcanyinguanli"></use>
    </svg>
    <svg
      class="svg"
      :class="{'selected':currentIndex=='maintain'}"
      aria-hidden="true"
      @click="handleClick('maintain')"
    >
      <use xlink:href="#iconweixiushijian1"></use>
    </svg>
    <svg
      class="svg"
      :class="{'selected':currentIndex=='vehicle'}"
      aria-hidden="true"
      @click="handleClick('vehicle')"
    >
      <use xlink:href="#iconcheliangguanli"></use>
    </svg>
    <svg
      class="svg"
      :class="{'selected':currentIndex=='property'}"
      aria-hidden="true"
      @click="handleClick('property')"
    >
      <use xlink:href="#iconzichanguanli"></use>
    </svg>
    <svg
      class="svg"
      :class="{'selected':currentIndex=='energy'}"
      aria-hidden="true"
      @click="handleClick('energy')"
    >
      <use xlink:href="#iconjienengguanli"></use>
    </svg>
    <svg
      class="svg"
      :class="{'selected':currentIndex=='building'}"
      aria-hidden="true"
      @click="handleClick('building')"
    >
      <use xlink:href="#iconlou"></use>
    </svg>
  </div>
</template>

<script >
  // import _Tools from "@/js/tools"

  export default {
    name: "MenuBar",
    data() {
      return {
        currentIndex: "security"
      };
    },
    mounted() {
      var that = this
      // _Tools.triggerStorageEvent("handleFirstMenuChange", "security","broadcast")
      // _Tools.addStorageEventListener(function (param) {
      //   return {
      //     changeMenuBarSelected: function (param) {
      //       that.currentIndex = param
      //     }
      //   }
      // })

    },
    methods: {
      handleClick: function (index) {
        this.currentIndex = index;
        let __window = null;
        if (external && external.parentWindow) {
          __window = external.parentWindow
        } else {
          __window = window
        }
        // _Tools.handleStorageAction("handleFirstMenuChange1", index)
        __window.localStorage.setItem('handleFirstMenuChange1', JSON.stringify({"index":index}))

      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menubar-container {
    background-color: #23342b;
    width: 55px;
    height: 485px;
    /*border: 1px solid black;*/
    /*border-radius: 100px 100px 100px 100px;*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .svg {
    height: 20px;
    width: 20px;
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 5px;
    border: 1px dashed #253332;
  }

  .svg:hover {
    cursor: pointer;
    background-color: #123f42;
    opacity: 0.8;
    border: 1px solid #00dfef;
  }

  .svg.selected {
    background-color: #123f42;
    opacity: 1;
  }
</style>
