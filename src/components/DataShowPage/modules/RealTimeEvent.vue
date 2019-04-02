<template>
  <ItemBlock
    marginTop="10px"
    width="calc(100% - 420*2px - 15*2px)"
    title="实时事件列表"
    :class="isMax?'blockIsMax':'blockIsMin'"
  >
    <i
      class="iconfont selectType-icon"
      :class="isMax?'iconiconset0282':'iconiconset0281'"
      @click="isMax=!isMax"
      slot="selectType"
    ></i>
    <EventListShow></EventListShow>
  </ItemBlock>
</template>
<script>
import ItemBlock from '@/components/DataShowPage/ItemBlock'
import EventListShow from '@/components/DataShowPage/EventListShow'
export default {
  name: 'OfficeSpaceCount',
  data() {
    return {
      typeIndex: 0,
      isMax: false
    }
  },
  components: {
    ItemBlock,
    EventListShow
  },
  methods: {},
  mounted() {}
}
</script>
<style lang="less" scoped>
.blockIsMin {
  z-index: 3 !important;
  position: absolute;
  top: 734px !important;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 295px !important;
  transition: all 0.5s ease-in;
}
.blockIsMax {
  z-index: 3;
  transition: all 0.5s ease-out;
  position: absolute !important;
  height: 965px !important;
  top: 83px !important;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background: linear-gradient(to top, #020919, rgba(2, 9, 25, 0.8));
}
.selectType-icon {
  color: #00abd7;
  opacity: 1;
  cursor: pointer;
  &:hover {
    color: white;
  }
}
</style>


