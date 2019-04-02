<template>
  <div class="DevEntry">
    <el-col :span="4" style="height: 100%;overflow: auto;" >
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-submenu index="1">
          <template slot="title" >
            <span>通用界面组件</span>
          </template>
            <el-menu-item index="/devPage/CommonPage/MenuBar">导航条</el-menu-item>
            <el-menu-item index="/devPage/CommonPage/EventDetail">事件面板</el-menu-item>
            <el-menu-item index="/devPage/CommonPage/WeatherHeaderPanel">头部左侧天气</el-menu-item>
            <el-menu-item index="/devPage/CommonPage/ToolBarHeaderPanel">头部右侧工具</el-menu-item>
            <el-menu-item index="/devPage/CommonPage/BottomMenu">底部菜单</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <span>安防模块</span>
          </template>
          <el-submenu index="2-1">
            <template slot="title">
              <span>安防-主页</span>
            </template>
            <el-menu-item index="/devPage/Security/LeftPanel">安防主页左侧</el-menu-item>
            <el-menu-item index="/devPage/Security/RightPanel">安防主页右侧</el-menu-item>
          </el-submenu>
          <el-submenu index="2-2">
            <template slot="title">
              <span>安防-视频监控</span>
            </template>
            <el-menu-item index="/devPage/MenuBar">视频监控左侧</el-menu-item>
            <el-menu-item index="/devPage/MenuBar">视频监控右侧</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <span>消防模块</span>
          </template>
          <el-submenu index="3-1">
            <template slot="title">
              <span>消防主页</span>
            </template>
            <el-menu-item index="/devPage/Fire/LeftPanel">消防主页左侧</el-menu-item>
            <el-menu-item index="/devPage/Fire/RightPanel">消防主页右侧</el-menu-item>
          </el-submenu>
          <el-submenu index="3-2">
            <template slot="title">
              <span>消防-子模块1</span>
            </template>
            <el-menu-item index="/devPage/MenuBar">消防子模块1左侧</el-menu-item>
            <el-menu-item index="/devPage/MenuBar">消防子模块1右侧</el-menu-item>
          </el-submenu>
        </el-submenu>

      </el-menu>
    </el-col>
    <el-col :span="20" style="height: 100%">
      <router-view/>
    </el-col>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "DevEntry",
  data() {
    return {};
  },
  mounted() {
    // $https
    //   .get(
    //     'https://www.easy-mock.com/mock/5c85fd3984f979343a5f72c5/example/mock'
    //   )
    //   .then(res => {
    //     alert(JSON.stringify(res))
    //   })
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.DevEntry{
  height: 100%;
  background-color: #545C64;
}
.el-menu{
  border-right: none!important;
}
</style>
