<template>
  <div class="index-header">
    <div class="index-header-left">
      <img src="@/assets/images/logo.png">
      <span>数字乌山</span>
      <div class="part-mark"></div>
      <span>福州市机关事务管理局</span>
    </div>
    <div class="index-header-right">
      <div class="index-header-right-time">
        <span>{{currentTime}}</span>
        <span>{{currentdate}}</span>
      </div>
      <div class="part-mark"></div>
      <div class="index-header-right-weather">
        <i class="iconfont iconleizhenyu1-copy"></i>
        <i class="iconfont iconwendu"></i>
        <span>26℃</span>
      </div>
      <div class="part-mark"></div>
      <div class="index-header-right-wind">
        <span>东北风</span>
        <span>2 级</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexHeader",
  data() {
    return {
      currentTime: "00:00:00",
      currentdate: ""
    };
  },
  methods: {
    getNowFormatDate: function() {
      let date = new Date();
      let seperator1 = "-";
      let seperator2 = ":";
      let month = date.getMonth() + 1;
      let strDate = date.getDate();

      let Minutes = date.getMinutes();

      let Seconds = date.getSeconds();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      if (Minutes >= 0 && Minutes <= 9) {
        Minutes = "0" + Minutes;
      }

      if (Seconds >= 0 && Seconds <= 9) {
        Seconds = "0" + Seconds;
      }
      let currentdate = date.getFullYear() + "/" + month + "/" + strDate;
      this.currentdate = currentdate;
      this.currentTime =
        date.getHours() + seperator2 + Minutes + seperator2 + Seconds;
    }
  },
  mounted: function() {
    setInterval(() => {
      this.getNowFormatDate();
    }, 1000);
  }
};
</script>

<style lang="less" scoped>
.index-header {
  background-color: #020919;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #002f56;
  position: relative;
  z-index: 2;
  background: linear-gradient(to bottom, #020919, rgba(2, 9, 25, 0));
  background: linear-gradient(to right, #020919, rgba(2, 9, 25, 0), #020919);
}
.part-mark {
  background: linear-gradient(to bottom, #070b17, #3d4f77, #070b17);
  width: 2px;
  height: 50px;
}
.index-header-left {
  width: 390px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.index-header-left > img {
  height: 50px;
  width: 40px;
}
.index-header-left > span {
  font-size: 22px;
  color: #b2c6f0;
  white-space: nowrap;
}
.index-header-right {
  width: 400px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #b2c6f0;
}
.index-header-right-time {
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.index-header-right-time > span {
  display: block;
  text-align: right;
  width: 100%;
}
.index-header-right-time span:nth-child(1) {
  font-size: 24px;
}
.index-header-right-time span:nth-child(2) {
  font-size: 13px;
}
.index-header-right-weather {
  width: 165px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.index-header-right-weather > i:nth-child(1) {
  font-size: 45px !important;
}
.index-header-right-weather > i:nth-child(2) {
  font-size: 35px !important;
}
.index-header-right-weather:nth-child(3) {
  font-size: 30px !important;
}
.index-header-right-wind {
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.index-header-right-wind > span {
  text-align: left;
  display: block;
  font-size: 16px;
  width: 100%;
}
</style>
