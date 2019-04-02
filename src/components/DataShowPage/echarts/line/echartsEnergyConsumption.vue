<template>
  <div class="echarts-senergy-consumption">
    <vue-echarts :model="currentOption"></vue-echarts>
  </div>
</template>

<script>
//实时能耗统计
import vueEcharts from '../baseEcharts/vueEcharts'
export default {
  name: 'echartsPoliceStatistic',
  components: { vueEcharts },
  props: {
    typeIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentOption: {},
      options: [
        {
          color: ['#ff8a5e'],

          tooltip: {
            trigger: 'axis'
          },
          legend: {
            type: 'plain',
            right: 0,
            top: 20,
            bottom: 20,
            data: ['趋势'],
            textStyle: {
              color: '#00DFEF'
            }
          },
          grid: {
            left: '3%',
            right: '1%',
            bottom: '3%',
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
                color: '#00DFEF',
                type: 'dotted'
              }
            }
          },
          series: [
            {
              name: '趋势',
              type: 'line',
              data: [
                220,
                182,
                191,
                234,
                290,
                330,
                310,
                220,
                182,
                191,
                234,
                290
              ],
              areaStyle: {
                opacity: 0.1
              }
            }
          ]
        },
        {
          color: ['#ff8a5e'],

          tooltip: {
            trigger: 'axis'
          },
          legend: {
            type: 'plain',
            right: 0,
            top: 20,
            bottom: 20,
            data: ['趋势'],
            textStyle: {
              color: '#00DFEF'
            }
          },
          grid: {
            left: '2%',
            right: '5%',
            bottom: '3%',
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
                color: '#00DFEF',
                type: 'dotted'
              }
            }
          },
          series: [
            {
              name: '趋势',
              type: 'bar',
              data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90],
              areaStyle: {
                opacity: 0.1
              }
            }
          ]
        }
      ]
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
.echarts-senergy-consumption {
  width: 100%;
  height: 100%;
}
</style>
