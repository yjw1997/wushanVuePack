<template>
  <div id="DataShowIndex" class="scroll-hide">

    <menu-bar ></menu-bar>
    <IndexSiderBorder style="z-index:4;"></IndexSiderBorder>
    <div class="index-middle">
      <div style="height:calc(100% - 5px);width:100%;position:absolute;left:0;top:0; z-index:2;">
        <iframe
          data-v-18c906d8
          src="http://192.168.10.6/arcgis/#/"
          frameborder="0"
          width="100%"
          height="100%"
          id="mapframe"
        ></iframe>
      </div>
      <div class="shadow-top-div"></div>
      <div class="shadow-bottom-div"></div>
      <div class="shadow-left-div"></div>
      <div class="shadow-right-div"></div>
      <IndexHeader></IndexHeader>
      <MainContentBlock style="z-index: 3;height:650px;float:left;">
        <SafeDays></SafeDays>
        <TransactionProcessing></TransactionProcessing>
        <InAndOut></InAndOut>
      </MainContentBlock>

      <MainContentBlock style=" height:650px;float:right;">
        <ImportantDataCount></ImportantDataCount>
        <RealTimeEnergy></RealTimeEnergy>
      </MainContentBlock>
      <div class="index-content-bottom">
        <OfficeSpaceCount></OfficeSpaceCount>
        <RealTimeEvent ></RealTimeEvent>
        <OfficialVehicle></OfficialVehicle>
      </div>
    </div>
    <IndexSiderBorder style="z-index:4;"></IndexSiderBorder>

    <EventDetail v-show="eventVisible"></EventDetail>
    <div style="width: 100%;height: 100%;position: absolute;top: 0;left: 0;background-color:black;z-index: 4;opacity: 0.6;" v-show="eventVisible">

    </div>


  </div>
</template>

<script>
  import IndexSiderBorder from "@/components/DataShowPage/IndexSiderBorder";
  import IndexHeader from "@/components/DataShowPage/IndexHeader";
  import MainContentBlock from "@/components/DataShowPage/MainContentBlock";
  import menuBar from "@/components/DataShowPage/MenuBar";
  import SafeDays from "@/components/DataShowPage/modules/SafeDays";
  import TransactionProcessing from "@/components/DataShowPage/modules/TransactionProcessing";
  import InAndOut from "@/components/DataShowPage/modules/InAndOut";
  import ImportantDataCount from "@/components/DataShowPage/modules/ImportantDataCount";
  import RealTimeEnergy from "@/components/DataShowPage/modules/RealTimeEnergy";
  import OfficeSpaceCount from "@/components/DataShowPage/modules/OfficeSpaceCount";
  import RealTimeEvent from "@/components/DataShowPage/modules/RealTimeEvent";
  import OfficialVehicle from "@/components/DataShowPage/modules/OfficialVehicle";
  import EventDetail from "@/components/DataShowPage/EventDetail";
  export default {
    name: "App",
    data() {
      return {
        eventVisible:false
      };
    },
    components: {
      IndexSiderBorder,
      IndexHeader,
      MainContentBlock,
      menuBar,
      SafeDays,
      TransactionProcessing,
      InAndOut,
      ImportantDataCount,
      RealTimeEnergy,
      OfficeSpaceCount,
      RealTimeEvent,
      OfficialVehicle,
      EventDetail
    },
    methods: {
      getTransform: function() {
        let availHeight = document.documentElement.clientHeight;
        let availWidth = document.documentElement.clientWidth;
        let documHeight = document.body.clientHeight;
        let documWidth = document.body.clientWidth;
        let xScale = availWidth / documWidth;
        let yScale = availHeight / documHeight;
        document
          .getElementsByTagName("body")[0]
          .setAttribute(
            "style",
            "transform: scale(" + xScale + ", " + yScale + ")"
          );
        return {
          xScale,
          yScale
        };
      }
    },
    mounted() {
      let that = this;
      window.onresize = function(event) {
        that.getTransform();
      };
      this.getTransform();
      this.$root.$on("eventClick",function (id) {
        that.eventVisible =true
      })
      this.$root.$on("eventDetailClose",function (id) {
        that.eventVisible =false
      })
      return;
      var M = Math,
        PI = M.PI,
        TWOPI = PI * 2,
        HALFPI = PI / 2,
        canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d"),
        width = (canvas.width = 350),
        height = (canvas.height = 350),
        cx = width / 2,
        cy = height / 2,
        count = 40,
        sizeBase = 0.1,
        sizeDiv = 5,
        tick = 0;

      ctx.translate(cx, cy);
      (function loop() {
        requestAnimationFrame(loop);
        ctx.clearRect(-width / 2, -height / 2, width, height);
        ctx.fillStyle = "#fff";
        var angle = tick / 8,
          radius = -50 + M.sin(tick / 15) * 100,
          size;

        for (var i = 0; i < count; i++) {
          angle += PI / 64;
          radius += i / 30;
          size = sizeBase + i / sizeDiv;

          ctx.beginPath();
          ctx.arc(
            M.cos(angle) * radius,
            M.sin(angle) * radius,
            size,
            0,
            TWOPI,
            false
          );
          ctx.fillStyle = "hsl(200, 70%, 50%)";
          ctx.fill();

          ctx.beginPath();
          ctx.arc(
            M.cos(angle) * -radius,
            M.sin(angle) * -radius,
            size,
            0,
            TWOPI,
            false
          );
          ctx.fillStyle = "hsl(320, 70%, 50%)";
          ctx.fill();

          ctx.beginPath();
          ctx.arc(
            M.cos(angle + HALFPI) * radius,
            M.sin(angle + HALFPI) * radius,
            size,
            0,
            TWOPI,
            false
          );
          ctx.fillStyle = "hsl(60, 70%, 50%)";
          ctx.fill();

          ctx.beginPath();
          ctx.arc(
            M.cos(angle + HALFPI) * -radius,
            M.sin(angle + HALFPI) * -radius,
            size,
            0,
            TWOPI
          );
          ctx.fillStyle = "hsl(0, 0%, 100%)";
          ctx.fill();
        }

        tick++;
      })();
      canvas.className = "vueCanvas";
      document.body.appendChild(canvas);
    }
  };
</script>

<style lang="less">
  @import url("../assets/style/common.less");
  html {
    width: 100%;
    height: 100%;
    overflow-x: hidden !important;
    overflow-y: hidden !important;
  }
  body {
    padding: 0;
    margin: 0;
    width: 1920px;
    height: 1080px;
    font-size: 12px;
    font-family: "Microsoft YaHei";
    background-color: @main-bgc;
    transform-origin: left top 0px;
    background-size: 100% 100%;
  }

  #DataShowIndex {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .index-middle {
    width: calc(100% - 60 * 2px);
    height: 100%;
    position: relative;
    .index-content-top {
      margin-top: 10px;
      height: 650px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #00849a;
      padding-bottom: 8px;
      z-index: 1;
      background-color: rgba(2, 9, 25, 0.7);
    }
    .index-content-bottom {
      height: 315px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 1px solid #00849a;
      z-index: 2;
      background-color: rgba(2, 9, 25, 0);
    }
    .shadow-top-div {
      height: 80px;
      width: 100%;
      position: absolute;
      top: 0;
      z-index: 2;
      background: linear-gradient(
        to bottom,
        #020919,
        rgba(2, 9, 25, 0.9),
        rgba(2, 9, 25, 0)
      );
    }
    .shadow-bottom-div {
      height: 335px;
      width: 100%;
      position: absolute;
      bottom: 0;
      z-index: 2;
      background: linear-gradient(
        to top,
        #020919,
        rgba(2, 9, 25, 0.9),
        rgba(2, 9, 25, 0.9),
        rgba(2, 9, 25, 0.9),
        rgba(2, 9, 25, 0.9),
        rgba(2, 9, 25, 0.8),
        rgba(2, 9, 25, 0)
      );
    }
    .shadow-left-div {
      height: 100%;
      width: 420px;
      position: absolute;
      left: 0;
      z-index: 2;
      background: linear-gradient(
        to right,
        #020919,
        rgba(2, 9, 25, 0.9),
        rgba(2, 9, 25, 0.9),
        rgba(2, 9, 25, 0.9),
        rgba(2, 9, 25, 0.9),
        rgba(2, 9, 25, 0.8),
        rgba(2, 9, 25, 0.7),
        rgba(2, 9, 25, 0)
      );
    }
    .shadow-right-div {
      height: 100%;
      width: 420px;
      position: absolute;
      right: 0;
      z-index: 2;
      background: linear-gradient(
        to left,
        #020919,
        rgba(2, 9, 25, 0.9),
        rgba(2, 9, 25, 0.9),
        rgba(2, 9, 25, 0.9),
        rgba(2, 9, 25, 0.9),
        rgba(2, 9, 25, 0.8),
        rgba(2, 9, 25, 0)
      );
    }
  }

  .vueCanvas {
    left: 750px;
    margin: auto;
    position: absolute;
    top: 320px;
    z-index: 3;
  }
</style>

