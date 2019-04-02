<template>
  <div id="leftPanel" >
    <panel-header-bar title="消防管理"></panel-header-bar>
    <div class="div-1">
      <block-title title="今日报警"></block-title>
      <count-number></count-number>
      <div class="line1">
        <DataShowWithIcon icon-class="iconrenyuan" color="#FF8755" :first-num=1132 :second-num=870 comment="进园/出园人数(人)"></DataShowWithIcon>
        <data-show-no-icon num='470' color="#FF8755" comment="访客人数(人)"></data-show-no-icon>
      </div>
      <div class="line1">
        <DataShowWithIcon icon-class="iconqiche" color="#00DFEF" :first-num=670 :second-num=760 comment="进园/出园车辆(辆)"></DataShowWithIcon>
        <data-show-no-icon num="790" color="#00DFEF" comment="访客车辆(辆)"></data-show-no-icon>
      </div>
    </div>
    <div class="div-2">
      <block-title title="园区人车流量统计"></block-title>
      <!--<bar-echarts class="car-people-flow"></bar-echarts>-->
    </div>
    <div class="div-3">
      <block-title title="智能传感器分布"></block-title>
      <!--<pie-echarts class="sensor-spread"></pie-echarts>-->
    </div>
  </div>
</template>

<script>
  import PanelHeaderBar from "@/components/item/PanelHeaderBar"
  import BlockTitle from "@/components/item/BlockTitle"
  import CountNumber from "@/components/item/CountNumber"
  import DataShowWithIcon from "@/components/item/DataShowWithIcon"
  import DataShowNoIcon from "@/components/item/DataShowNoIcon"
export default {
  name: 'leftPanel',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    PanelHeaderBar,
    BlockTitle,
    CountNumber,
    DataShowWithIcon,
    DataShowNoIcon,
  },
  mounted() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #leftPanel{
    background-color: #253332;
    width: 380px;
    height: 880px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .div-1{
    height: 365px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .div-2{
    height: 224px;
    width: 100%;
  }
  .div-2 .car-people-flow{
    height: calc(100% - 20px);
    width: calc(100% - 10px);
  }
  .div-3{
    height: 224px;
    width: 100%;
  }
  .div-3 .sensor-spread{
    height: calc(100% - 20px);
    width: calc(100% - 10px);
  }
  .line1{
    height: 60px;
    width: 310px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
  }
</style>
