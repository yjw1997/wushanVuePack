<template>
  <div class='count-num-component'>
    <img src='@/assets/images/background/count-num.png' alt=''>
    <span>{{num}}</span><span>({{unit}})</span>
  </div>
</template>

<script>
  export default {
    name: "block-title",
    props: {
      num: {
        type: String,
        default: "100"
      },
      unit: {
        type: String,
        default: "次"
      }
    },
    data() {
      return {};
    },
    mounted() {

    },
    methods: {}
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .count-num-component{
    height:139px;
    width: 288px;
    font-size: 20px;
    color: white;
    position: relative;
  }
  .count-num-component>span:nth-of-type(1){
    display: block;
    width: 65px;
    height: 35px;
    position: absolute;
    top: 44px;
    left: 111px;
    font-size: 35px;
    text-align: center;
  }
  .count-num-component>span:nth-of-type(2){
    position: absolute;
    display: block;
    width: 40px;
    height: 17px;
    top: 80px;
    left: 123px;
    font-size: 14px;
    text-align: center;
  }
</style>
