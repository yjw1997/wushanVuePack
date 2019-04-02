<template>
  <ItemBlock
    marginTop="10px"
    width="420px"
    height="100%"
    title="办公用房统计"
    style="z-index:3;"
  >
    <EchartSwitch
      slot="selectType"
      @selectChange="(val)=>typeIndex=val"
      :typeArr="['饼图1','饼图2']"
    ></EchartSwitch>
    <echarts-building-area :typeIndex='typeIndex'></echarts-building-area>
  </ItemBlock>
</template>
<script>
import ItemBlock from '@/components/DataShowPage/ItemBlock'
import EchartSwitch from '@/components/DataShowPage/EchartSwitch'
import echartsBuildingArea from '@/components/DataShowPage/echarts/pie/echartsBuildingArea'
export default {
  name: 'OfficeSpaceCount',
  data() {
    return {
      typeIndex: 0
    }
  },
  components: {
    ItemBlock,
    EchartSwitch,
    echartsBuildingArea
  },
  methods: {},
  mounted() {}
}
</script>
<style lang="less" scoped>
</style>


