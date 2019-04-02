<template>
  <div class="echarts-police-statistic">
    <vue-echarts :model="currentOption"></vue-echarts>
  </div>
</template>

<script>
//园区警情统计
import vueEcharts from '../baseEcharts/vueEcharts'
export default {
  name: 'echartsPoliceStatistic',
  props: {
    typeIndex: {
      type: Number,
      default: 0
    }
  },
  components: { vueEcharts },
  data() {
    return {
      currentOption: {},
      options: [
        {
          color: ['#00dff0', '#ff8a5e'],

          tooltip: {
            trigger: 'axis'
          },
          legend: {
            textStyle: {
              color: '#00DFEF'
            },
            right: 10,
            top: 10,
            bottom: 20,
            data: ['安全保障', '后勤服务']
          },
          grid: {
            left: '0%',
            right: '2%',
            bottom: '4%',
            containLabel: true
          },

          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [
              '一月',
              '二月',
              '三月',
              '四月',
              '五月',
              '六月',
              '七月',
              '八月',
              '九月',
              '十月',
              '十一月',
              '十二月'
            ],
            axisLine: {
              lineStyle: {
                color: '#00DFEF'
              }
            },
            axisTick: {
              lineStyle: {
                color: '#00DFEF'
              }
            },
            axisLabel: {
              fontSize: 10,
              interval: 0
            }
          },
          yAxis: {
            type: 'value',
            offset: -5,
            nameTextStyle: {
              color: '#00DFEF'
            },
            name: '单位',
            nameLocation: 'end',
            axisLine: {
              show: false,
              lineStyle: {
                color: '#00DFEF'
              }
            },
            axisTick: {
              lineStyle: {
                color: '#00DFEF'
              }
            },
            splitLine: {
              lineStyle: {
                color: '#007487',
                type: 'dotted'
              }
            }
          },
          series: [
            {
              name: '安全保障',
              type: 'line',
              data: [12, 13, 10, 14, 9, 23, 21, 12, 13, 10, 14, 9]
            },
            {
              name: '后勤服务',
              type: 'line',
              data: [22, 12, 11, 24, 20, 30, 30, 22, 12, 19, 24, 29]
            }
          ]
        },
        {
          color: ['#00dff0', '#ff8a5e'],

          tooltip: {
            trigger: 'axis'
          },
          legend: {
            textStyle: {
              color: '#00DFEF'
            },
            right: 10,
            top: 10,
            data: ['安全保障', '后勤服务']
          },
          grid: {
            left: '2%',
            right: '5%',
            bottom: '4%',
            containLabel: true
          },

          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [
              '一月',
              '二月',
              '三月',
              '四月',
              '五月',
              '六月',
              '七月',
              '八月',
              '九月',
              '十月',
              '十一月',
              '十二月'
            ],
            axisLine: {
              lineStyle: {
                color: '#00DFEF'
              }
            },
            axisTick: {
              lineStyle: {
                color: '#00DFEF'
              }
            },
            axisLabel: {
              fontSize: 10,
              interval: 0
            }
          },
          yAxis: {
            type: 'value',
            offset: 10,
            nameTextStyle: {
              color: '#00DFEF'
            },
            name: '单位',
            nameLocation: 'end',
            axisLine: {
              show: false,
              lineStyle: {
                color: '#00DFEF'
              }
            },
            axisTick: {
              lineStyle: {
                color: '#00DFEF'
              }
            },
            splitLine: {
              lineStyle: {
                color: '#007487',
                type: 'dotted'
              }
            }
          },
          series: [
            {
              name: '安全保障',
              type: 'bar',
              data: [12, 13, 10, 14, 9, 23, 21, 12, 13, 10, 14, 9]
            },
            {
              name: '后勤服务',
              type: 'bar',
              data: [22, 12, 11, 24, 20, 30, 30, 22, 12, 19, 24, 29]
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleChange: function(val) {
      this.currentOption = this.options[val]
    }
  },
  watch: {
    typeIndex: function(val, oldval) {
      this.currentOption = this.options[val]
    }
  },
  mounted() {
    this.currentOption = this.options[0]
  }
}
</script>

<style scoped lang="less">
.echarts-police-statistic {
  width: 100%;
  height: 100%;
  & > button {
    height: 20px;
    width: 100px;
  }
  & > div {
    height: calc(100% - 20px);
    width: 100%;
  }
}
</style>
