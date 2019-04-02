<template>
  <vue-echarts :model='currentOption'></vue-echarts>
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
          color: ['#05bfcc', '#326bd2', '#b1c967'],
          tooltip: {
            trigger: 'item',
            formatter: '{b}\n{c}㎡  {d}%'
          },
          legend: {
            bottom: 20,
            data: ['空闲', '办公占用', '设备占用', '公用'],
            textStyle: {
              color: 'auto',
              fontSize: 12
            }
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['40%', '60%'],
              center: ['50%', '40%'],
              label: {
                normal: {
                  formatter: '{b|{b}}\n{c|{c}} ㎡  {d|{d}}%',
                  rich: {
                    b: {
                      fontSize: 12,
                      lineHeight: 14,
                      align: 'left'
                    },
                    c: {
                      fontSize: 12,
                      lineHeight: 14,
                      align: 'left'
                    },
                    d: {
                      fontSize: 12,
                      lineHeight: 14,
                      align: 'left'
                    }
                  }
                }
              },
              data: [
                { value: 335, name: '空闲' },
                { value: 310, name: '办公占用' },
                { value: 234, name: '设备占用' },
                { value: 120, name: '公用' }
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        },
        {
          color: ['#05bfcc', '#326bd2', '#b1c967'],
          tooltip: {
            trigger: 'item',
            formatter: '{b}:{c}㎡ {d}%'
          },
          legend: {
            bottom: 20,
            data: ['空闲', '办公占用', '设备占用', '公用'],
            textStyle: {
              color: 'auto',
              fontSize: 12
            }
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '60%',
              center: ['50%', '40%'],
              label: {
                normal: {
                  formatter: '{b|{b}}\n{c|{c}}㎡ {d|{d}}%',
                  rich: {
                    b: {
                      fontSize: 12,
                      lineHeight: 14,
                      align: 'left'
                    },
                    c: {
                      fontSize: 12,
                      lineHeight: 14,
                      align: 'left'
                    },
                    d: {
                      fontSize: 12,
                      lineHeight: 14,
                      align: 'left'
                    }
                  }
                }
              },
              data: [
                { value: 33, name: '空闲' },
                { value: 310, name: '办公占用' },
                { value: 234, name: '设备占用' },
                { value: 120, name: '公用' }
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
      ]
    }
  },
  mounted() {
    this.currentOption = this.options[0]
  },
  watch: {
    typeIndex: function(val, oldval) {
      this.currentOption = this.options[val]
    }
  }
}
</script>

<style scoped lang="less">
.echarts-police-statistic {
  width: 100%;
  height: 100%;
}
</style>
