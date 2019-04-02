<template>
  <ItemBlock
    height="405px"
    title="实时能耗统计"
  >
    <div class="senergy-consumption-top">
      <div class="senergy-consumption-top-left">
        <i class="iconfont iconfeiyongguizeziliao"></i>
        <span>费用统计</span>
      </div>
      <!-- <div class="senergy-consumption-top-chart1">
        <vue-echarts :model="optionWater"></vue-echarts>
      </div>
      <div class="senergy-consumption-top-chart1">
        <vue-echarts :model="optionElect"></vue-echarts>
      </div> -->
      <div
        class="water-circle"
        style="color:#FF8A5E;"
      >
        <i class="iconfont iconicon-test2">
        </i>
        <span>
          721
        </span>
        <span>用水量(吨)</span>
      </div>
      <div class="water-circle">
        <i class="iconfont iconicon-test2">
        </i>
        <span>
          721
        </span>
        <span>用水量(吨)</span>
      </div>

    </div>
    <SavePower></SavePower>
  </ItemBlock>
</template>
<script>
import ItemBlock from '@/components/DataShowPage/ItemBlock'
import EchartSwitch from '@/components/DataShowPage/EchartSwitch'
import SavePower from '@/components/DataShowPage/block/SavePower'
export default {
  name: 'RealTimeEnergy',
  data() {
    return {
      typeIndex: 0,
      select: true
    }
  },
  components: {
    ItemBlock,
    EchartSwitch,
    SavePower
  },
  methods: {},
  mounted() {}
}
</script>
<style lang="less" scoped>
.senergy-consumption-top {
  height: 125px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .senergy-consumption-top-left {
    width: 85px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #00dfef;
    & > i {
      font-size: 49px;
    }
    & > span {
      display: block;
      font-size: 15px;
    }
  }
  .senergy-consumption-top-chart1 {
    width: calc((100% - 85px) / 2);
    height: 100%;
  }
  .water-circle {
    position: relative;
    width: 140px;
    height: 124px;
    color: #00dfef;
    .iconicon-test2:nth-of-type(1) {
      font-size: 140px;
    }
    & > span:nth-of-type(1) {
      font-size: 27px !important;
      position: absolute;
      width: 70px;
      top: 69px;
      left: 37px;
    }
    & > span:nth-of-type(2) {
      font-size: 14px !important;
      position: absolute;
      top: 96px;
      left: 41px;
    }
  }
}
</style>


