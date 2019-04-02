<template>
  <div id="CommonLeftPanel">
      <!--<iframe src="http://localhost:8080/#/Security/LeftPanel" frameborder="0" width="100%" height="100%;"></iframe>-->
  </div>
</template>
<script>
  import _Tools from "@/js/tools"
  function appenIframeTo(src) {
    document.getElementById('CommonLeftPanel').innerHTML =
      ' <iframe class="leftPanel-iframe" src="' + src + '" ' +
      ' width="100%"' +
      'height = "100%" id="myIframe"></iframe >'

  }
  export default {
    data: function () {
      return {
        msg: [],
        mainHost:""

      };
    },
    props: [],
    watch: {},
    methods: {
      getUrlPath: function () {
        //获取 iframe src 路径
        let url = window.location.href;
        url = url.replace("devPage/", "");
        return url;
      }
    },
    mounted() {
      this.mainHost = window.location.protocol+"//"+window.location.host;
      var that = this
      _Tools.addStorageEventListener(function () {
        return {
          handleFirstMenuChange: function (param) {

            // that.msg=[]
            // console.log("commonLeftPanel监听到:", param)
            // let tempMsg = that.mainHost+"/#/"+param+"/LeftPanel"
            // that.msg = [tempMsg]

          }
        }
      })
      appenIframeTo("http://localhost:8080/#/Security/LeftPanel")
    }
  };
</script>
<style scoped>
  #CommonLeftPanel {
    height: 100%;
  }


</style>

