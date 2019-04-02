<template>
  <div id="toolbar-header-panel-component" class="nav_title">
    <ul>
      <!--<li class="title" style="background:none;"><a href="#"><img src="../images/imageButton/banner/turn_left.png" style="width:35px;height:35px"/></a></li>-->
      <!--<li><a href="#"><img src="../images/imageButton/banner/tb_search.png" style="width:36px;height:36px"/></a></li>-->
      <li><a @click="doTool('selector')"><img src="@/assets/images/imageButton/banner/tb_selector.png"
                                               style="width:35px;height:35px;padding:2px;"/></a></li>
      <!-- 框选 -->
      <li><a @click="doTool('RegionSelect')"><img src="@/assets/images/imageButton/banner/tb_region_select.png"
                                                   style="width:26px;height:26px;padding:7px;"/></a></li>
      <li><a @click="doTool('move')"><img src="@/assets/images/imageButton/banner/tb_move.png"
                                           style="width:35px;height:35px;padding:2px;"/></a></li>
      <li><a @click="doTool('location')"><img src="@/assets/images/imageButton/banner/tb_flag.png"
                                               style="width:35px;height:35px;padding:2px;"/></a></li>
      <li><a title="全屏" @click="doTool('fullscreen')"><img src="@/assets/images/imageButton/banner/tb_boundary.png"
                                                            style="width:35px;height:35px;padding:2px;"/></a></li>
      <li><a @click="doTool('AerialDistance')"><img src="@/assets/images/imageButton/banner/tb_ruler.png"
                                                     style="width:23px;height:23px;padding:9px;"/></a></li>
      <li><a @click="doTool('walk')"><img src="@/assets/images/imageButton/banner/tb_eraser.png"
                                           style="width:38px;height:38px;padding:0px;"/></a></li>
      <!-- 管网挖掘 -->
      <li><a @click="doTool('PipeAnalyze')"><img src="@/assets/images/imageButton/banner/tb_pipe.png"
                                                  style="width:30px;height:30px;padding:5px;"/></a></li>
      <li><a @click="doTool('sunlightAnalysis')"><img src="@/assets/images/imageButton/banner/tb_sun.png"
                                                       style="width:22px;height:22px;padding:9px;"/></a></li>
      <li><a @click="doTool('sightlineAnalysis')"><img src="@/assets/images/imageButton/banner/tsfx.png"
                                                        style="width:22px;height:22px;padding:9px;"/></a></li>
      <!-- 二三维地图切换 -->
      <li><a @click="doTool('MapSwitch')"><img src="@/assets/images/imageButton/banner/map_switcn.png"
                                                style="width:25px;height:25px;padding:9px;"/></a></li>
      <li><a @click="doTool('reset')"><img
        src="@/assets/images/imageButton/banner/reset_loaction.png" style="width:22px;height:22px;padding:9px;"/></a>
      </li>
      <li style="background:none;"><a @click="doTool('fly')"><img
        src="@/assets/images/imageButton/banner/fly.png" style="width:30px;height:30px;padding:7px;"/></a>
      </li>
      <!--<li class="title" style="background:none;"><a href="#"><img src="../images/imageButton/banner/turn_right.png" style="width:35px;height:35px"/></a></li>-->
    </ul>
  </div>
</template>

<script>

  export default {
    name: "weather-component",
    data() {
      return {};
    },
    methods: {
      /**
       *  处理工具条事件
       * @param name
       */
      doTool: function (name) {
        external.parentWindow.getToolsByName(name);
      }

    },
    components: {},
    watch: {},
    mounted: function () {

    }
  };
</script>

<style scoped>
  div.nav_title {
    position: relative;
    float: none;
    width: 505px;
    text-align: right;
    height: 40px;
    line-height: 100%;
    margin: 0;
    background-color: #304B4F;
  }

  div.nav_title > ul {
    position: relative;
    height: 100%;
    margin: 0;
    margin-top: 0px;
    padding: 0;
    list-style: none;
    white-space: nowrap;
    overflow: hidden;
    margin: 0px;
    font-size: 0;
  }

  div.nav_title > ul > li {
    position: relative;
    width: 39px;
    height: 40px;
    margin: 0;
    top: 0px;
    display: inline-block;
    /*background: url("@//asset//images/imageButton/banner/bar_BtLine.png") right center no-repeat;*/
  }

  div.nav_title > ul > li > ul {
    display: none;
  }

  div.nav_title > ul > li > a {
    display: block;
    height: 35px;
    width: 35px;
    position: relative;
    left: 0px;
    top: 0px;
    cursor: default;
    text-decoration: none;
  }

  div.nav_title > ul > li > a > img {
    height: 100%;
    display: block;
    margin: auto;
    position: relative;
    top: 0px;
  }

  div.nav_title > ul > li > a :hover {
    height: 100%;
    display: block;
    margin: auto;
    position: relative;
    top: 0px;
    background-color: rgba(100, 151, 177, 0.7);
    cursor: pointer;
  }

  div.nav_title > ul > li.title > a :hover {
    height: 100%;
    display: block;
    margin: auto;
    position: relative;
    top: 0px;
    background-color: rgba(1, 31, 75, 0);
    cursor: pointer;
  }

  .title {
    position: relative;
    width: 35px;
    height: 35px;
    margin: 0;
    top: 0px;
    display: inline-block;
    background: none;
  }


</style>
