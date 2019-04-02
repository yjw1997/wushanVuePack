<template>
  <div id="DevShowWindow">
    <!--<h3>urlPath : {{urlPath}}</h3>-->
    <!--<h3>routerPath : {{routerPath}}</h3>-->
    <!--<h3>routerPath : {{routerPath2}}</h3>-->
    <!--<h3>src : {{$route.query.src}}</h3>-->
    <!--<iframe-->
    <!--v-if="$route.query.src"-->
    <!--:src="$route.query.src"-->
    <!--frameborder="0"-->
    <!--width="900px"-->
    <!--height="500px"-->
    <!--&gt;</iframe>-->
    <iframe :src="urlPath" id="demoIframe"></iframe>
    <!--<iframe id="demoIframe" :src="'//elemefe.github.io/mint-ui/#'" frameborder="0" width="300px" height="300px"></iframe>-->
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        msg: "",
        urlPath: this.getUrlPath() //iframe src 路径
      };
    },
    props: ["routerPath", 'routerPath2'], // 路由地址
    watch: {
      routerPath: function (val) {
        // 监听routerPath变化，改变src路径
        this.urlPath = this.getUrlPath() + "?time=" + new Date().getTime()
        console.log("刷新下");
      },
      routerPath2: function (val) {
        // 监听routerPath变化，改变src路径
        this.urlPath = this.getUrlPath() + "?time=" + new Date().getTime()
        console.log("刷新下");
      }
    },
    methods: {
      getUrlPath: function () {
        //获取 iframe src 路径
        let url = window.location.href;
        url = url.replace("devPage/", "");
        return url;
      }
    }
  };
</script>
<style scoped>
  #DevShowWindow {
    height: 100%;
  }

  #demoIframe {
    border: 2px solid black;
    border-radius: 1px;
    width: calc(100% - 24px);
    height: calc(100% - 24px);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    transition: .3s;
    padding: 10px;
  }
</style>

