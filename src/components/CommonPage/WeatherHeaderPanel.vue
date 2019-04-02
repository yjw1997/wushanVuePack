<template>
  <div id="weather-component">
        <span id="getDate">
        {{theDateStr}}
        </span>
    <span id="getWeather">
            &emsp;  天气阴: 30ºC
        </span>
    <span id="getAQI">
            &emsp;AQI等级：优
        </span>

  </div>
</template>

<script>

  export default {
    name: "weather-component",
    data() {
      return {
        theDateStr:""
      };
    },
    methods: {
      showDT () {
        var days = new Array("日", "一", "二", "三", "四", "五", "六");
        var currentDT = new Date();
        var y, m, date, day, hs, ms, ss, theDateStr;
        y = currentDT.getFullYear(); //四位整数表示的年份
        m = currentDT.getMonth(); //月
        date = currentDT.getDate(); //日
        day = currentDT.getDay(); //星期

        hs = currentDT.getHours(); //时
        if (hs < 10) {
          hs = "0" + hs;
        }
        ms = currentDT.getMinutes(); //分
        if (ms < 10) {
          ms = "0" + ms;
        }
        ss = currentDT.getSeconds(); //秒
        if (ss < 10) {
          ss = "0" + ss;
        }
        theDateStr = y + "年" + m + "月" + date + "日    星期" + days[day] + "    " + hs + ":" + ms + ":" + ss;
        this.theDateStr=theDateStr;

      }


    },
    components: {},
    watch: {},
    mounted() {
      this.showDT()
      setInterval(() => {
        this.showDT();
      }, 1000);
    }
  };
</script>

<style scoped>
  #weather-component {
    color: white;
    font-size: 12px;
    background-color: #304B4F;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;


  }
  #getDate {
    vertical-align: central;
    text-align: center;
    color: white;
    margin-left: 10px;
  }


</style>
