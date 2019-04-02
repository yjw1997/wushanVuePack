<template>
  <div id="save-power-container">
    <div class="save-power-block">
      <div class="save-power-block-left-div">
        <i class="iconfont iconzongshuiliang-copy"></i>
        <span>1689</span>
        <span>本月总水量</span>
        <span>(立方)</span>
      </div>
      <div class="save-power-block-right-div">
        <div class="save-power-block-right-top">
          <div>
            <span>本月</span>
            <span>上月</span>
          </div>
          <div>
            <div>
              <span style="background-color: #00dfef;width:60%;"></span>
            </div>
            <div>
              <span style="background-color: #FF8A5E;width:20%;"></span>
            </div>
          </div>
          <div>
            <span>500立方</span>
            <span style="color: #FF8A5E;">300立方</span>
          </div>
        </div>
        <div class="save-power-block-right-bottom">
          <span>15.8%</span>
          <span>环比上涨</span>
        </div>
      </div>
    </div>
    <div class="save-power-block">
      <div class="save-power-block-left-div">
        <i
          class="iconfont iconzongdianliang-copy"
          style="color: #FF8A5E;"
        ></i>
        <span style="color: #FF8A5E;">1689</span>
        <span style="color: #FF8A5E;">本月总电量</span>
        <span style="color: #FF8A5E;">(度)</span>
      </div>
      <div class="save-power-block-right-div">
        <div class="save-power-block-right-top">
          <div>
            <span>本月</span>
            <span>上月</span>
          </div>
          <div>
            <div>
              <span style="background-color: #00dfef;width:80%;"></span>
            </div>
            <div>
              <span style="background-color: #FF8A5E;width:50%;"></span>
            </div>
          </div>
          <div>
            <span>500立方</span>
            <span style="color: #FF8A5E;">300立方</span>
          </div>
        </div>
        <div class="save-power-block-right-bottom">
          <span>15.8%</span>
          <span>环比上涨</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SavePower',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    select: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: '190px'
    },
    marginTop: {
      type: String,
      default: '0px'
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="less">
#save-power-container {
  height: 260px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .save-power-block {
    height: calc(50% - 5px);
    padding-bottom: 4px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #002f56;
    margin-bottom: 15px;
    &:last-child {
      border-bottom: none;
    }
    .save-power-block-left-div {
      width: 90px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      & > i {
        font-size: 27px;
        color: #00dfef;
      }
      & > span:nth-child(2) {
        font-size: 28px;
        color: #00dfef;
      }
      & > span:nth-child(3) {
        font-size: 10px;
        color: #00dfef;
      }
      & > span:nth-child(4) {
        font-size: 10px;
        color: #00dfef;
      }
    }
    .save-power-block-right-div {
      height: 100%;
      width: 315px;
      .save-power-block-right-top {
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > div {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }
        & > div:nth-child(1) {
          width: 25px;
          height: 100%;
          color: #00dfef;
          border-right: 1px solid #00dfef;
        }
        & > div:nth-child(2) {
          width: calc(100% - 70px);
          height: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          & > div {
            width: 100%;
            height: 50%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            & > span {
              display: block;
              background-color: #00dfef;
              height: 14px;
              width: 60%;
            }
          }
        }
        & > div:nth-child(3) {
          width: 45px;
          height: 100%;
          font-size: 10px;
          color: #00dfef;
        }
      }
      .save-power-block-right-bottom {
        width: 100%;
        height: calc(100% - 70px);
        display: flex;
        justify-content: flex-end;
        align-items: center;
        & > span:nth-child(1) {
          font-size: 20px;
          color: #00cbdb;
          margin-right: 5px;
        }
        & > span:nth-child(2) {
          font-size: 10px;
          color: #00cbdb;
        }
      }
    }
  }
}
</style>
