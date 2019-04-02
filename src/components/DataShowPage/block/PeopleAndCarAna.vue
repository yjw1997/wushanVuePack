<template>
  <div id="people-car-ana">
    <div class="people-car-ana-1">
      <div class="people-car-door">
        <i class="iconfont iconmenchuangmenchuangwujinanzhuang"></i>
        <span>一号门</span>
      </div>
      <div class="people-car-in-people">
        <i class="iconfont iconrenyuan"></i>
        <div>
          <span>{{OneIn.toFixed(0)}}</span>
          <span>进园人数</span>
        </div>
      </div>
      <div class="people-car-in-people">
        <i class="iconfont iconqiche"></i>
        <div style="color:#93F27C;">
          <span>{{OneOut.toFixed(0)}}</span>
          <span>进园车辆</span>
        </div>
      </div>
    </div>
    <div class="people-car-ana-2">
      <div class="people-car-door">
        <i class="iconfont iconmenchuangmenchuangwujinanzhuang" style="color:#00DFEF;"></i>
        <span style="color:#00DFEF;">二号门</span>
      </div>
      <div class="people-car-in-people">
        <i class="iconfont iconrenyuan"></i>
        <div style="color:#B2C967;">
          <span>{{TwoIn.toFixed(0)}}</span>
          <span>进园人数</span>
        </div>
      </div>
      <div class="people-car-in-people">
        <i class="iconfont iconqiche"></i>
        <div style="color:#F6A76A;">
          <span>{{TwoOut.toFixed(0)}}</span>
          <span>进园车辆</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemBlock",
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
      OneIn: 0,
      OneOut: 0,
      TwoIn: 0,
      TwoOut: 0
    };
  },
  methods: {},
  mounted: function() {
    setInterval(() => {
      let t = this.OneIn + Math.ceil(Math.random() * 10);
      let t2 = this.OneOut + Math.ceil(Math.random() * 10);
      let t3 = this.TwoIn + Math.ceil(Math.random() * 10);
      let t4 = this.TwoOut + Math.ceil(Math.random() * 10);
      TweenLite.to(this.$data, 1, {
        OneIn: t,
        OneOut: t2,
        TwoIn: t3,
        TwoOut: t4
      });
    }, 2000);
  }
};
</script>

<style scoped lang="less">
#people-car-ana {
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  padding: 20px;
  .people-car-ana-1 {
    height: 55px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #002f56;
    padding-bottom: 20px;
    margin-bottom: 20px;
    .people-car-door {
      height: 100%;
      width: 125px;
      background-color: #1d1a27;
      border: 1px solid #f6a76a;
      border-radius: 2px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      & > i {
        color: #f6a76a;
        font-size: 41px;
        width: 15px;
      }
      & > span {
        color: #f6a76a;
        font-size: 18px;
      }
    }
    .people-car-in-people {
      height: 100%;
      width: 125px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      & > i {
        color: #00dfef;
        font-size: 44px;
        width: 39px;
      }
      & > div {
        height: 100%;
        width: 60px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        color: #00dfef;
        & > span {
          display: block;
          text-align: left;
          width: 100%;
          &:nth-child(1) {
            font-size: 24px;
          }
          &:nth-child(2) {
            font-size: 15px;
          }
        }
      }
    }
  }
  .people-car-ana-2 {
    height: 55px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    .people-car-door {
      height: 100%;
      width: 125px;
      background-color: #042036;
      border: 1px solid #00dfef;
      border-radius: 2px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      & > i {
        color: #f6a76a;
        font-size: 41px;
        width: 15px;
      }
      & > span {
        color: #f6a76a;
        font-size: 18px;
      }
    }
    .people-car-in-people {
      height: 100%;
      width: 125px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      & > i {
        color: #00dfef;
        font-size: 44px;
        width: 39px;
      }
      & > div {
        height: 100%;
        width: 60px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        color: #00dfef;
        & > span {
          display: block;
          text-align: left;
          width: 100%;
          &:nth-child(1) {
            font-size: 24px;
          }
          &:nth-child(2) {
            font-size: 15px;
          }
        }
      }
    }
  }
}
</style>
