<template>
  <ItemBlock
    marginTop="10px"
    width="420px"
    height="100%"
    title="公务用车统计图"
    style="z-index:3;"
  >
    <EchartSwitch
      slot="selectType"
      @selectChange="(val)=>typeIndex=val"
    ></EchartSwitch>
    <echartsEnergyConsumption :typeIndex="typeIndex"></echartsEnergyConsumption>
  </ItemBlock>
</template>
<script>
import ItemBlock from '@/components/DataShowPage/ItemBlock'
import EchartSwitch from '@/components/DataShowPage/EchartSwitch'
import echartsEnergyConsumption from '@/components/DataShowPage/echarts/line/echartsEnergyConsumption'
export default {
  name: 'OfficeSpaceCount',
  data() {
    return {
      typeIndex: 0
    }
  },
  components: {
    ItemBlock,
    echartsEnergyConsumption,
    EchartSwitch
  },
  methods: {},
  mounted() {}
}
</script>
<style lang="less" scoped>
</style>


