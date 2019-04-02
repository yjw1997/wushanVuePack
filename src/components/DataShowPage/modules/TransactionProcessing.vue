<template>
  <ItemBlock
    title="业务处理量统计"
    height="230px"
  >
    <!--<EchartSwitch-->
      <!--slot="selectType"-->
      <!--@selectChange="(val)=>typeIndex=val"-->
    <!--&gt;</EchartSwitch>-->
    <Selection slot="selectType"></Selection>
    <echarts-police-statistic :typeIndex='typeIndex'></echarts-police-statistic>
  </ItemBlock>
</template>
<script>
import ItemBlock from '@/components/DataShowPage/ItemBlock'
import EchartSwitch from '@/components/DataShowPage/EchartSwitch'
import Selection from '@/components/DataShowPage/Selection'
import echartsPoliceStatistic from '@/components/DataShowPage/echarts/line/echartsPoliceStatistic'
export default {
  name: 'TransactionProcessing',
  data() {
    return {
      typeIndex: 0
    }
  },
  components: {
    ItemBlock,
    EchartSwitch,
    echartsPoliceStatistic,
    Selection
  },
  methods: {},
  mounted() {}
}
</script>
<style lang="less" scoped>
</style>


