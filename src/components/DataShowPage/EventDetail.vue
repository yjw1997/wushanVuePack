<template>
  <div class="event-detail-component">
    <PanelHeader title="应急联动" @closeSelf="handleClose()"></PanelHeader>
    <div class="event-detail-left-container">
      <p class="event-detail-title">一号岗疑似人群密集超过10人</p>
      <div class="video-container">
        <video  width="50%;" height="50%;" preload="auto" autoplay="autoplay" muted>
          <source src="@/assets/video/20180907m1.mp4" type="video/mp4"/>

        </video>
        <video  width="50%;" height="50%;" preload="auto" autoplay="autoplay" muted >
          <source src="@/assets/video/20180907m2.mp4" type="video/mp4"/>
        </video>
        <video  width="50%;" height="50%;" preload="auto" autoplay="autoplay" muted>
          <source src="@/assets/video/20180907m3.mp4" type="video/mp4"/>
        </video>
        <video width="50%;" height="50%;" preload="auto" autoplay="autoplay" muted>
          <source src="@/assets/video/20180907.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>
    <div class="event-detail-right-container">
      <div class="monitorAlarmTabContainer">
        <span v-bind:class="{ active: tabCur=='应急预案' }" @click="tabCur='应急预案'">应急预案</span>
        <span v-bind:class="{ active: tabCur=='资源联动' }" @click="tabCur='资源联动'">资源联动</span>
        <span v-bind:class="{ active: tabCur=='人员联动' }" @click="tabCur='人员联动'">人员联动</span>
        <span v-bind:class="{ active: tabCur=='处室联动' }" @click="tabCur='处室联动'">处室联动</span>
        <span v-bind:class="{ active: tabCur=='联动管理' }" @click="tabCur='联动管理'">联动管理</span>
        <span v-bind:class="{ active: tabCur=='联动评估' }" @click="tabCur='联动评估'">联动评估</span>
      </div>
      <div class="monitorAlarmViceContainer">
        <!-- 模块一: 应急预案 -->
        <div class="monitorAlarmVice" v-show="tabCur=='应急预案'">

          <div class="monitorViceWindow  scroll-hide">
            <div class="box">
              <div class="boxTitle">
                <div class="titleLi border-right"><img src="../../assets/images/penple.png" width="100%" height="100%" class="icon">处长电话：17630242299</div>
                <div class="titleLi border-right"><img src="../../assets/images/penple.png" width="100%" height="100%" class="icon">副处长电话：17630242299</div>
                <div class="titleLi"><img src="../../assets/images/penple.png" width="100%" height="100%" class="icon">负责人电话：17630242299</div>
              </div>
            </div>
            <!-- <img src="@/assets/images/yjld.png" width="100%" height="100%"/> -->
          </div>
        </div>
        <!-- 模块二: 资源联动 -->
        <div class="monitorAlarmVice" v-show="tabCur=='资源联动'">

          <div class="monitorViceWindow  scroll-hide">
            <div class="box">
                <img src="../../assets/images/p2.png" width="100%" height="100%"/>
            </div>

          </div>
        </div>
        <!-- 模块三: 人员联动 -->
        <div class="monitorAlarmVice" v-show="tabCur=='人员联动'">

          <div class="monitorViceWindow  scroll-hide">
            <div class="box">
                <div class="p15">
                  <div class="tl title"> 门岗排班信息</div>
                  <div class="aritile">
                    <div class="fl left">一号岗</div>
                    <div class="sjx fl"></div>
                    <div class="fl right" style="width:65%">
                      <div style="padding-left: 20px;">当前值班人员</div>
                    <div class="pel">李某某--13788888888</div><div class="pel">李某某--13788888888</div>
                    </div>
                    <div class="box-3"></div>
                  </div>
                  <div class="aritile">
                    <div class="fl left">二号岗</div>
                    <div class="sjx fl"></div>
                    <div class="fl right" style="width:65%">
                      <div style="padding-left: 20px;">当前值班人员</div>
                    <div class="pel">李某某--13788888888</div><div class="pel">李某某--13788888888</div>
                     <div class="pel">李某某--13788888888</div>
                    </div>
                    <div class="box-3"></div>
                  </div>
                  <div class="aritile">
                    <div class="fl left">三号岗</div>
                    <div class="sjx fl"></div>
                    <div class="fl right" style="width:65%">
                      <div style="padding-left: 20px;">当前值班人员</div>
                      <div class="pel">李某某--13788888888</div><div class="pel">李某某--13788888888</div>
                      <!-- <div class="pel">李某某--13788888888</div><div class="pel">李某某--13788888888</div>
                      <div class="pel">李某某--13788888888</div><div class="pel">李某某--13788888888</div> -->
                    </div>
                    <div class="box-3"></div>
                  </div>
                  <div class="aritile">
                    <div class="fl left">三号岗</div>
                    <div class="sjx fl"></div>
                    <div class="fl right" style="width:65%">
                      <div style="padding-left: 20px;">当前值班人员</div>
                      <div class="pel">李某某--13788888888</div><div class="pel">李某某--13788888888</div>
                      <!-- <div class="pel">李某某--13788888888</div><div class="pel">李某某--13788888888</div>
                      <div class="pel">李某某--13788888888</div><div class="pel">李某某--13788888888</div> -->
                    </div>
                    <div class="box-3"></div>
                  </div>
                  <div class="aritile">
                    <div class="fl left">三号岗</div>
                    <div class="sjx fl"></div>
                    <div class="fl right" style="width:65%">
                      <div style="padding-left: 20px;">当前值班人员</div>
                      <div class="pel">李某某--13788888888</div><div class="pel">李某某--13788888888</div>
                      <!-- <div class="pel">李某某--13788888888</div><div class="pel">李某某--13788888888</div>
                      <div class="pel">李某某--13788888888</div><div class="pel">李某某--13788888888</div> -->
                    </div>
                    <div class="box-3"></div>
                  </div>
                  <div class="aritile">
                    <div class="fl left">三号岗</div>
                    <div class="sjx fl"></div>
                    <div class="fl right" style="width:65%">
                      <div style="padding-left: 20px;">当前值班人员</div>
                      <div class="pel">李某某--13788888888</div><div class="pel">李某某--13788888888</div>
                      <!-- <div class="pel">李某某--13788888888</div><div class="pel">李某某--13788888888</div>
                      <div class="pel">李某某--13788888888</div><div class="pel">李某某--13788888888</div> -->
                    </div>
                    <div class="box-3"></div>
                  </div>
                </div>

            </div>

          </div>
        </div>
        <!-- 模块四: 处室联动 -->
        <div class="monitorAlarmVice" v-show="tabCur=='处室联动'">
          <div class="monitorViceWindow  scroll-hide">
            <div class="box">
                <div class="p15">
                  <div class="tl title"> 处室联动</div>
                  <div class="aritile">
                    <div class="fl left">保卫处</div>
                    <div class="sjx fl"></div>
                    <div class="fl right"  style="width:65%">
                      <div style="padding-left: 20px;">当前值班人员</div>
                    <div class="pel">李某某--13788888888</div><div class="pel">李某某--13788888888</div>
                    </div>
                    <div class="box-3"></div>
                  </div>
                  <div class="aritile">
                    <div class="fl left">物业处</div>
                    <div class="sjx fl"></div>
                    <div class="fl right"  style="width:65%">
                      <div style="padding-left: 20px;">当前值班人员</div>
                    <div class="pel">李某某--13788888888</div><div class="pel">李某某--13788888888</div>
                    </div>
                    <div class="box-3"></div>
                  </div>
                  <div class="aritile">
                    <div class="fl left">消防处</div>
                    <div class="sjx fl"></div>
                    <div class="fl right" style="width:65%">
                      <div style="padding-left: 20px;">当前值班人员</div>
                    <div class="pel">李某某--13788888888</div><div class="pel">李某某--13788888888</div>
                    <div class="pel">李某某--13788888888</div><div class="pel">李某某--13788888888</div>
                    <div class="pel">李某某--13788888888</div><div class="pel">李某某--13788888888</div>
                    </div>
                    <div class="box-3"></div>
                  </div>
                </div>

            </div>

          </div>
        </div>
        <!-- 模块五: 联动管理 -->
        <div class="monitorAlarmVice" v-show="tabCur=='联动管理'">

          <div class="monitorViceWindow  scroll-hide">
            <div class="box">
                <div class="p15">
                  <div class="tl title"> 联动管理</div>
                  <div class="aritile">
                   <span class="w50 fl">声量非彼给保卫处四圈（移动终端处理）</span>
                   <span class="w50 fr">2018-06-30 11:30:56</span>
                   <div class="box-3"></div>
                  </div>
                  <div class="aritile">
                   <span class="w50 fl">声量非彼给保卫处四圈（移动终端处理）</span>
                   <span class="w50 fr">2018-06-30 11:30:56</span>
                   <div class="box-3"></div>
                  </div>
                  <div class="aritile">
                   <span class="w50 fl">声量非彼给保卫处四圈（移动终端处理）</span>
                   <span class="w50 fr">2018-06-30 11:30:56</span>
                   <div class="box-3"></div>
                  </div>
                  <div class="aritile">
                   <span class="w50 fl">声量非彼给保卫处四圈（移动终端处理）</span>
                   <span class="w50 fr">2018-06-30 11:30:56</span>
                   <div class="box-3"></div>
                  </div>
                  <div class="aritile">
                   <span class="w50 fl">声量非彼给保卫处四圈（移动终端处理）</span>
                   <span class="w50 fr">2018-06-30 11:30:56</span>
                   <div class="box-3"></div>
                  </div>
                  <div class="aritile">
                   <span class="w50 fl">声量非彼给保卫处四圈（移动终端处理）</span>
                   <span class="w50 fr">2018-06-30 11:30:56</span>
                   <div class="box-3"></div>
                  </div>
                </div>

            </div>

          </div>
        </div>
        <!-- 模块6: 联动评估 -->
        <div class="monitorAlarmVice" v-show="tabCur=='联动评估'">
          <div class="monitorViceWindow  scroll-hide">
            <div class="box" style="height:577px">
                <div class="p15">
                  <img src="../../assets/images/p6.png" width="100%" height="100%"/>
                </div>
            </div>
            <el-button type="primary" style="width: 745px">事件已处理完成，确认提交评估报告</el-button>
          </div>
        </div>
        <!-- 模块6: 底部操作 -->
        <div class="event-form-div" v-show="tabCur!='联动评估'">
          <div class="event-form-title">
            <i class="el-icon-date"></i>
            <span>事件分拨</span>
          </div>
          <div class="event-form-detail">
            <div>
              <span>事件编号:</span>
              <span>ZNSB0630001</span>
            </div>
            <div>
              <i></i>
              <span>动态人员异常识别</span>
              <span>|</span>
              <i></i>
              <span>一号岗附近</span>
            </div>
          </div>
          <div class="event-form">
            <el-form :inline="true" ref="form" :model="form" label-width="80px" size="mini">
              <el-col :span="12">
                <el-form-item label="处理人:">
                  <el-select v-model="form.deviceType" placeholder="相关人员">
                    <el-option label="综合保卫处处长沈梁" value="shanghai"></el-option>
                    <el-option label="综合保卫处处长沈梁2" value="shanghai"></el-option>
                    <el-option label="综合保卫处处长沈梁3" value="shanghai"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="反馈时间:">
                  <el-date-picker
                    type="datetime"
                    placeholder="选择日期时间">
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="事件原因:">
                  <el-select v-model="form.deviceType" placeholder="相关人员">
                    <el-option label="疑似人员密集" value="shanghai"></el-option>
                    <el-option label="疑似人员密集" value="shanghai2"></el-option>
                    <el-option label="疑似人员密集" value="shanghai3"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="疑似原因:">
                  <el-select v-model="form.deviceType" placeholder="相关人员" style="width: 220px">
                    <el-option label="人群密集超过10人" value="shanghai"></el-option>
                    <el-option label="人群密集超过10人" value="shanghai"></el-option>
                    <el-option label="人群密集超过10人" value="shanghai"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col >
                <el-form-item>
                  <el-button type="warning" style="width: 745px">查询</el-button>
                </el-form-item>
              </el-col>

            </el-form>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import PanelHeader from "@/components/item/PanelHeaderBar";

  export default {
    name: "event-detail-component",
    data() {
      return {
        tabCur: "应急预案",
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

      };
    },
    methods: {
      handleClose: function () {
        this.$root.$emit("eventDetailClose")
      }
    },
    components: {
      PanelHeader
    },
    mounted: function () {


    }
  };
</script>

<style lang="less" scoped>
  .event-detail-component {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    height: 810px;
    width: 1500px;
    z-index: 5;
    background-color: #020919;
    opacity: 1;
    color: white;
    .event-detail-left-container {
      width: 675px;
      height: 745px;
      float: left;
      margin: 10px;
      .event-detail-title {
        width: 100%;
        font-size: 20px;
        color: white;
        text-align: start;
      }
      .video-container {
        height: 660px;
        width: 100%;
        & > video {
          float: left;
        }
      }
    }
    .event-detail-right-container {
      width: 785px;
      height: 745px;
      float: right;
      margin: 10px;

    }
    .event-form-div {
      margin-top: 10px;

      .event-form-title {
        width: 100%;
        height: 35px;
        color: white;
        font-size: 20px;
        display: flex;
        justify-content: flex-start;
      }
      .event-form-detail {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 45px;
        border-bottom: 2px solid #202A29;
        & > div {
          height: 100%;

        }
        & > div:nth-of-type(1) {
          color: white;
          font-size: 18px;
        }
        & > div:nth-of-type(2) {
          color: white;
          font-size: 18px;
        }
      }
      .event-form{
       height: 200px;
      }
    }

  }

  .monitorAlarmTabContainer {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: flex-start;
  }

  .monitorAlarmTabContainer span {
    font-size: 18px;
    height: 56px;
    flex: auto;
    border-top: 5px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    color: white;
  }

  .monitorAlarmTabContainer span + span::before {
    display: inline-block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.15);
  }

  .monitorAlarmTabContainer span:hover {
    border-top: 5px solid rgb(252, 226, 139);
    background-color: rgba(10, 177, 175, 0.4);
  }

  .monitorAlarmTabContainer span.active {
    border-top: 5px solid rgb(252, 226, 139);
    background-color: rgba(10, 177, 175, 0.4);
  }

  /* 分状态容器 */
  .monitorAlarmViceContainer {
    font-family: "SimSun";
    width: 100%;
    height: calc(100% - 70px);
    overflow: hidden;
  }

  .monitorAlarmViceContainer > div {
    width: 100%;
    /*height: 100%;*/
  }

  .monitorViceWindow {
    padding: 10px 10px;
    overflow-y: scroll;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid #313936;
    color: #fff;
    font-size: 18px;
    .box{
      width: 100%;
      height: 446px;
      border:2px solid #27302D;
      overflow-x: hidden;
      overflow-y: scroll;
      .boxTitle{
        border-bottom: 1px solid #1F2827;
        vertical-align: middle;
        .titleLi{
          display: inline-block;
          padding: 0px 7px;
          margin: 10px 0;
          vertical-align: middle;
          .icon{
            width: 25px;
            height: 25px;
            float: left;
            display: inline-block;
            padding-right:6px;
          }
        }
      }
    }
    .box::-webkit-scrollbar {
        display: none;
    }
  }
  .p15{padding: 15px 30px}
  .border-right{border-right:solid 1px #575757 ;}
  .tl{text-align: left;}
  .fl{float: left;}
  .title{font-size: 22px;}
  .box-3{clear: both;}
  .w50{font-size: 15px;font-weight: normal;}
  .aritile{
    background-color: #284C4B;
    padding: 13px 25px;
    clear: both;
    // height: 40px;
    margin: 20px 0px;
    .left{
      line-height: 38px;
      padding-right:10px ;


    }
    .sjx{
      width: 0;
      height: 0;
      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;
      border-right: 12px solid white;
      margin: 9px 0px;
    }
    .right{
      font-size: 15px;
      padding-left:20px;
      border-left: 1px solid white;

      .tl();
      .pel{
        display: inline-block;
        padding: 10px 20px;
      }
    }
  }

  // .monitorViceWindow > div {
  //   height: 100%;

  // }

  .monitorViceWindow > div > h4 {
    height: 30px;
    display: flex;
    align-items: flex-start;
    padding-left: 5px;
    font-size: 14px;
    font-weight: bold;
  }

  .monitorAlarmVice-form {
    width: 100%;
  }

  .monitorAlarmVice-form .baseInfo {
    font-family: "SimSun";
  }

  .monitorAlarmVice-form .inputGroup {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .monitorAlarmVice-form .inputGroup > label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 26px;
    font-size: 14px;
  }

  .monitorAlarmVice-form .inputGroup > label:nth-child(3),
  .monitorAlarmVice-form .inputGroup > label:nth-child(4) {
    margin-top: 5px;
  }

  .monitorAlarmVice-form .inputGroup input {
    border: 1px solid #73c2c6;
    border-radius: 6px;
    background: black;
    width: 280px;
    height: 26px;
    padding-left: 5px;
    color: #2ff4fd;
  }

  .monitorAlarmVice-form .inputGroup > label:nth-child(1) div {
    display: flex;
    justify-content: space-between;
  }

  .monitorAlarmVice-form .inputGroup > label:nth-child(1) select {
    border: 1px solid #73c2c6;
    border-radius: 6px;
    background: black;
    height: 26px;
    padding-left: 5px;
    color: #2ff4fd;
  }

  .monitorAlarmVice-form .inputGroup > label:nth-child(1) select option {
    background-color: #999;
    border: 1px solid #2ff4fd;
  }

  .eventAllocationBtn {
    display: flex;
    margin: 0 auto;
    width: 212px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    font-size: 14px;
    font-family: "Microsoft YaHei";
    justify-content: center;
    align-items: center;
    background-color: rgb(47, 244, 253);
    border: 1px solid rgb(115, 194, 198);
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }

  .eventAllocationBtn:hover {
    background-color: rgb(47, 244, 253);
  }

  /* input样式兼容 */
  .monitorAlarmVice-form .inputGroup input::-webkit-input-placeholder { /* WebKit browsers */
    color: #2ff4fd;
  }

  .monitorAlarmVice-form .inputGroup input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #2ff4fd;
  }

  .monitorAlarmVice-form .inputGroup input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #2ff4fd;
  }

  .monitorAlarmVice-form .inputGroup input:-ms-input-placeholder { /* Internet Explorer 10+ */
    color: #2ff4fd;
  }

  /* 1. 应急预案 end */


</style>
