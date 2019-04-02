<template>
  <div ref="echarts" :style="{width:width,height:height}"></div>
</template>

<script>
  import * as echarts from 'echarts'

  export default {
    name: "vue-echarts",
    data(){
      return {
        charts: null
      }
    },
    props: {
      model: {
        type: Object,
      },
      width: {
        type: String,
        required: false,
        default: '100%'
      },
      height: {
        type: String,
        required: false,
        default: '100%'
      }
    },
    methods: {
      setOption(data) {
        if (!this.charts) {
          this.charts = echarts.init(this.$refs.echarts);
        }
        if (data) this.charts.setOption(data);
      }

    },
    mounted() {
      this.setOption(this.model);
    },
    watch: {
      model: function (newV) {
        this.setOption(newV)
      }
    }
  }
</script>
