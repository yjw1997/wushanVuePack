<template>
  <div id="sensor-alarm-container">
    <div class="sensor-alarm-left-div">
      <span>{{alarmCount.toFixed(0)}}</span>
      <span>报警总数</span>
      <i class="iconfont iconzuoyebaojing"></i>
    </div>
    <div class="sensor-alarm-right-div">
      <div>
        <div>
          <div>一号门</div>
          <div>正常</div>
        </div>
        <div>
          <div style="color:#FF8A5D;">二号门</div>
          <div style="color:#FF8A5D;">异常</div>
        </div>
      </div>
      <div>
        <div>
          <div>园区周界</div>
          <div>正常</div>
        </div>
        <div>
          <div>后山消防</div>
          <div>正常</div>
        </div>
      </div>
      <div>
        <div>
          <div style="color:#FF8A5D;">园区供电</div>
          <div style="color:#FF8A5D;">异常</div>
        </div>
        <div>
          <div>园区供水</div>
          <div>正常</div>
        </div>
      </div>
      <div>
        <div>
          <div>餐饮服务</div>
          <div>正常</div>
        </div>
        <div>
          <div>当前人流量</div>
          <div>201人</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax } from "gsap";
export default {
  name: "SensorAlarmAna",
  props: {
    title: {
      type: String,
      default: "标题"
    },
    select: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: "190px"
    },
    marginTop: {
      type: String,
      default: "0px"
    },
    width: {
      type: String,
      default: "100%"
    }
  },
  data() {
    return {
      alarmCount: 0
    };
  },
  methods: {},
  mounted: function() {
    setInterval(() => {
      let t = this.alarmCount + Math.ceil(Math.random() * 10);
      TweenLite.to(this.$data, 1, {
        alarmCount: t
      });
    }, 5000);
  }
};
</script>

<style scoped lang="less">
#sensor-alarm-container {
  width: calc(100%);
  height: calc(100% - 40px);
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .sensor-alarm-left-div {
    width: 90px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 1px solid #002f56;
    & > span:nth-child(1) {
      font-size: 32px;
      color: #00dfef;
    }
    & > span:nth-child(2) {
      font-size: 12px;
      color: #00dfef;
    }
    & > i {
      font-size: 43px;
      color: #00dfef;
    }

    align-items: center;
  }
  .sensor-alarm-right-div {
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    & > div {
      width: 100%;
      height: 35px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > div {
        width: calc(100% / 2 - 5px);
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > div:nth-child(1) {
          width: 90px;
          height: 100%;
          background-color: rgba(6, 43, 58, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          color: #00dfef;
          font-size: 18px;
        }
        & > div:nth-child(2) {
          width: 45px;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #00dfef;
          font-size: 10px;
        }
      }
    }
  }
}
</style>
