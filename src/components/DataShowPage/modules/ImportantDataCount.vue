<template>
  <ItemBlock
    marginTop="10px"
    height="220px"
    title="重要数据统计"
    :select="select"
  >
    <SensorAlarmAna></SensorAlarmAna>
  </ItemBlock>
</template>
<script>
import ItemBlock from '@/components/DataShowPage/ItemBlock'
import SensorAlarmAna from '@/components/DataShowPage/block/SensorAlarmAna'
export default {
  name: 'ImportantDataCount',
  data() {
    return {
      typeIndex: 0,
      select: true
    }
  },
  components: {
    ItemBlock,
    SensorAlarmAna
  },
  methods: {},
  mounted() {}
}
</script>
<style lang="less" scoped>
</style>


