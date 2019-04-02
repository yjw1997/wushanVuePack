<template>
  <ItemBlock
    title="进入园区人车统计"
    height="200px"
  >
    <PeopleAndCarAna></PeopleAndCarAna>
  </ItemBlock>
</template>
<script>
import ItemBlock from '@/components/DataShowPage/ItemBlock'
import PeopleAndCarAna from '@/components/DataShowPage/block/PeopleAndCarAna'
export default {
  name: 'InAndOut',
  data() {
    return {
      typeIndex: 0
    }
  },
  components: {
    ItemBlock,
    PeopleAndCarAna
  },
  methods: {},
  mounted() {}
}
</script>
<style lang="less" scoped>
</style>


