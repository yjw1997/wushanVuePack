<template>
  <div id="bottom_menu">
        <span class="menu-span" v-for="(menu, index) in menus" :key="index" @click="handleClick(menu,$event)">
            <i class="iconfont icondianzixungeng-copy"></i>
            <span>{{menu.name}}</span>
        </span>
  </div>
</template>

<script>
  export default {
    name: "bottom_menu",
    data() {
      return {
        sourceDataMenu: {},
        menus: [{
          "menuId": 41,
          "name": "视频监控"
        },
          {
            "menuId": 42,
            "name": "周界防区"
          },
          {
            "menuId": 47,
            "name": "电子巡更"
          },
          {
            "menuId": 45,
            "name": "智能车位"

          },
          {
            "menuId": 43,
            "name": "出入口"
          },
          {
            "menuId": 44,
            "name": "人车轨迹"
          },
          {
            "menuId": 46,
            "name": "动态人员管控"
          },
        ],
      };
    },
    mounted: function () {
      var that = this;
      $https.get("/static/json/config/secondMenu.json").then(resp => {
        this.sourceDataMenu = resp.data.data
        console.log(this.sourceDataMenu["fire"].menus)
      })


      _Tools.listenItem(
        {
          handleFirstMenuChange1:function(param) {
            console.log("旧的",JSON.stringify(param))
            that.menus = that.sourceDataMenu[param.index].menus
          },
          function2:function (param) {

          },
          function3:function (param) {

          }
        })




    },
    methods: {
      handleClick: function (index) {
        _Tools.triggerStorageEvent("handleSecondMenuClick", menu)
      },
      getData: function (param) {
        this.menus = this.sourceDataMenu[param].menus
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul,
  li,
  a {
    padding: 0;
    margin: 0;
  }

  #bottom_menu {
    height: 40px;
    width: 1005px;
    background-color: #253332;
    overflow: hidden;
    /*height: calc(100% - 4px);*/
    /*width: calc(100% - 4px);*/
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 2px solid #192320;
    border-radius: 5px;
  }

  .menu-span {
    border-right: 1px solid #192320;
    height: 100%;
    line-height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: auto;
    color: #DDEBFF;
    font-size: 14px;
    cursor: pointer;

  }

  .menu-span:last-of-type {
    border-right: none;
  }

  .menu-span:hover {
    color: darkcyan;
  }

  .menu-span > i {

  }

  .menu-span > span {
    margin-left: 10px;
  }

</style>
