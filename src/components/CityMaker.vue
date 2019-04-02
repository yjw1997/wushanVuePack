<template>
  <div style="height: 100%;width: 100%;">
    <object id="__g" type="application/x-cm-3d8" style="width: 100%;height: 100%;"></object>
    <!--<iframe src="http://localhost:8080/#/DataShowIndex" frameborder="0" width="100%" height="100%"></iframe>-->
  </div>

</template>

<script>
import {CityMaker7} from "../js/CityMaker7";
import ConfigUtil from "../js/ConfigUtil";
import LeftMenu from "../js/leftMenu";
import HeaderPanel from "../js/headerPanel";
import PanelUtil from "@/js/PanelUtil";
import _Tools from "@/js/tools.js";
import MenuEventListen from "@/Events/MenuEventListen.js";

export default {
  name: "CityMaker",
  data() {
    return {
      src:""
    };
  },
  mounted() {
    var that = this
    //初始化全局参数
    window.mainHost = window.location.protocol+"//"+window.location.host;
    window._scale = LeftMenu.detectZoom() / 100;
    MenuEventListen();

    CityMaker7.initAxControl();
    //先清空localstorage,防止污染
    localStorage.clear();
    window.ClientWidth = document.body.clientWidth; //网页宽度
    window.ClientHeight = document.body.clientHeight; //网页高度
    // //显示面板
    // debugger;
    ConfigUtil.init();

    // //创建左侧一级菜单栏
    LeftMenu.init();
    // //初始化头部面板
    HeaderPanel.init();
    window.onresize = function (event) {
      window.ClientWidth = document.body.clientWidth; //网页宽度
      window.ClientHeight = document.body.clientHeight; //网页高度
      // PanelUtil.showPanel();
    };


  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.CityMaker {
  background-color: darkorange;
}
</style>
