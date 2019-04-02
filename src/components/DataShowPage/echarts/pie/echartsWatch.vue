<template>
  <vue-echarts :model="option"></vue-echarts>
</template>

<script>
//园区警情统计
import vueEcharts from "../baseEcharts/vueEcharts";
export default {
  name: "echartWatch",
  components: { vueEcharts },
  data() {
    return {
      option: {
        tooltip: {
          formatter: "已安全运行<br/>{c}{b}"
        },
        toolbox: {
          feature: {}
        },
        series: [
          {
            name: "转速",
            type: "gauge",
            center: ["50%", "90%"], // 默认全局居中
            radius: "160%",
            min: 0,
            max: 365,
            startAngle: 180,
            endAngle: 0,
            splitNumber: 5,
            axisLabel: {
              // 坐标轴小标记
              textStyle: {
                // 属性lineStyle控制线条样式
                fontWeight: "bolder",
                color: "#fff",
                shadowColor: "#fff", //默认透明
                shadowBlur: 10
              }
            },
            axisLine: {
              // 坐标轴线
              lineStyle: {
                color: [[0.4, "#EB6100"], [0.82, "#0AB1AF"], [1, "#2FF4FD"]],
                width: 3,
                shadowColor: "#fff", //默认透明
                shadowBlur: 10
              }
            },
            axisTick: {
              // 坐标轴小标记
              length: 1, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto",
                shadowColor: "#fff", //默认透明
                shadowBlur: 10
              }
            },
            splitLine: {
              // 分隔线
              length: 1, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                width: 3,
                color: "#fff",
                shadowColor: "#fff", //默认透明
                shadowBlur: 10
              }
            },
            pointer: {
              shadowColor: "#fff", //默认透明
              shadowBlur: 5,
              width: 3
            },
            title: {
              offsetCenter: [0, "-15%"], // x, y，单位px
              textStyle: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: "#00DFEF",
                fontSize: 18,
                fontWeight: "bolder",
                color: "#fff",
                shadowColor: "#fff", //默认透明
                shadowBlur: 10
              }
            },
            detail: {
              formatter: "{value}",
              offsetCenter: ["0%", -60], // x, y，单位px
              textStyle: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: "#00DFEF",
                fontSize: 49
              }
            },
            data: [{ value: 265, name: "天" }]
          }
        ]
      }
    };
  }
};
</script>

<style scoped lang="less">
.echart-watch {
  width: 100%;
  height: 100%;
}
</style>
