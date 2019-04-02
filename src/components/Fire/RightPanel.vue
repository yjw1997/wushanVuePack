<template>
  <div id="rightPanel">
    <panel-header-bar title="数据概览"></panel-header-bar>
    <TabHeader @change="handleTabChange" :tabs="tabs"></TabHeader>
    <div class="tab-content-div" v-show="currentTab=='数据概览'">
      <div class="overview-block-1">
        <DataShowWithIcon icon-class="icontingchechang" comment="总车位/空闲车位"></DataShowWithIcon>
        <DataShowTimeRange num="08:45~17:00" color="#FF8755" comment="高峰时段"></DataShowTimeRange>
      </div>
      <block-title title="传感器数据"></block-title>
      <div class="overview-block-2">
        <el-table
          :data="sensorTableData"
          size="mini"
          height="340px"
        >
          <el-table-column
            prop="typeName"
            label="传感器"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="num"
            label="数量"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="alarm"
            label="报警"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="percent"
            label="比上月"
            align="center"
          >
          </el-table-column>
        </el-table>
      </div>

    </div>
    <div class="tab-content-div" v-show="currentTab=='部件数据'">
      <el-form ref="form" :model="form" label-width="80px" size="mini">
        <el-form-item label="归属区域:">
          <el-checkbox-group v-model="form.searchTypeCheck">
            <el-checkbox label="全部"></el-checkbox>
            <el-checkbox label="室内"></el-checkbox>
            <el-checkbox label="室外"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="设备类型:">
          <el-select v-model="form.deviceType" placeholder="全部">
            <el-option label="设备1" value="shanghai"></el-option>
            <el-option label="设备2" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="归属防区:">
          <el-select v-model="form.deviceType" placeholder="全部">
            <el-option label="设备1" value="shanghai"></el-option>
            <el-option label="设备2" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="设备位置:">
          <el-select v-model="form.deviceType" placeholder="全部">
            <el-option label="设备1" value="shanghai"></el-option>
            <el-option label="设备2" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="warning" style="width: 70%">查询</el-button>
        </el-form-item>
      </el-form>
      <block-title title="数据列表"></block-title>
      <el-table
        :data="sensorTableData"
        size="mini"
        height="190px"
      >
        <el-table-column
          prop="typeName"
          label="设备类型"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="num"
          label="归属防区"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="alarm"
          label="设备编号"
          align="center"
        >
        </el-table-column>
      </el-table>
    </div>
    <div class="tab-content-div" v-show="currentTab=='进出入查询'">
      <el-form ref="form" :model="form" label-width="80px" size="mini">
        <el-form-item label="查询类型:">
          <el-checkbox-group v-model="form.searchTypeCheck">
            <el-checkbox label="全部"></el-checkbox>
            <el-checkbox label="人员"></el-checkbox>
            <el-checkbox label="车辆"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="门岗类型:">
          <el-checkbox-group v-model="form.doorTypeCheck">
            <el-checkbox label="全部"></el-checkbox>
            <el-checkbox label="一号"></el-checkbox>
            <el-checkbox label="二号"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="设备类型:">
          <el-select v-model="form.deviceType" placeholder="所有设备">
            <el-option label="设备1" value="shanghai"></el-option>
            <el-option label="设备2" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="开始时间:">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                            style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="截止时间:">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                            style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-button type="warning" style="width: 70%">查询</el-button>
        </el-form-item>
      </el-form>
      <block-title title="数据列表"></block-title>
      <el-table
        :data="sensorTableData"
        size="mini"
        height="150px"
      >
        <el-table-column
          prop="typeName"
          label="进出名称"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="num"
          label="门岗类型"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="alarm"
          label="开始时间"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="percent"
          label="结束时间"
          align="center"
        >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import PanelHeaderBar from "@/components/item/PanelHeaderBar"
  import BlockTitle from "@/components/item/BlockTitle"
  import CountNumber from "@/components/item/CountNumber"
  import DataShowWithIcon from "@/components/item/DataShowWithIcon"
  import DataShowNoIcon from "@/components/item/DataShowNoIcon"
  import TabHeader from "@/components/item/TabHeader";
  import DataShowTimeRange from "@/components/item/DataShowTimeRange";
export default {
  name: "CityMaker",
  data() {
    return {
      form: {
        searchTypeCheck: [],
        doorTypeCheck: [],
        deviceType: "",
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      tabs: ['数据概览', '部件数据', '进出入查询'],
      currentTab: "数据概览",
      sensorTableData: [
        {
          typeName: "视频监控",
          num: 54,
          alarm: 0,
          percent: "1%"
        },
        {
          typeName: "周界防区",
          num: 65,
          alarm: 2,
          percent: "1%"
        },
        {
          typeName: "巡更点",
          num: 45,
          alarm: 0,
          percent: "3%"
        },
        {
          typeName: "停车位",
          num: 21,
          alarm: 8,
          percent: "5%"
        }
      ]
    };
  },
  methods:{
    handleTabChange: function (param) {
      this.currentTab = param
    }
  },
  mounted() {},
  components:{
    TabHeader,
    PanelHeaderBar,
    BlockTitle,
    CountNumber,
    DataShowWithIcon,
    DataShowNoIcon,
    DataShowTimeRange
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #rightPanel {
    background-color: #253332;
    width: 400px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .tab-content-div {
    flex: auto;
    width: calc(100% - 10px);
    padding: 5px;
  }

  .overview-block-1 {
    height: 55px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .overview-block-2 {
    padding: 15px;
    width: calc(100% - 30px);
  }

  .line {
    text-align: center;
    color: white;
  }
  .tab-content-div{
  }
</style>
