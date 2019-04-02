<template>
  <div class="data-show-icon" :style="{color:color}">
    <i class='iconfont' :class='iconClass'></i>
    <span><span>{{firstNum}}/</span><span>{{secondNum}}</span></span>
    <span>{{comment}}</span>
  </div>
</template>

<script>
  export default {
    name: "block-title",
    props: {
      iconClass: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#FF8755"
      },
      firstNum: {
        type: Number,
        default: 110
      },
      secondNum: {
        type: Number,
        default: 220
      },
      comment: {
        type: String,
        default: "标题1/标题2(单位)"
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
  .data-show-icon{
    width: 180px;
    height: 55px;
  }
  .data-show-icon>i:nth-child(1){
    font-size: 40px;
    height: 100%;
    width: 40px;
    float: left;
    margin-top: 10px;
    display: block;
  }
  .data-show-icon>i:nth-child(1)::before{
    height: 100%;
    width: 40px;
  }
  .data-show-icon>span:nth-child(2){

    float: left;
    display: block;
    margin-top: 2px;
    width: 136px;
  }
  .data-show-icon>span:nth-child(2)>span:nth-of-type(1){
    font-size: 33px;

  }
  .data-show-icon>span:nth-child(2)>span:nth-of-type(2){
    font-size: 25px;

  }
  .data-show-icon>span:nth-child(3){
    font-size: 14px;
    float: right;
    display: block;
    margin-top: 4px;
    width: 136px;
    color: white;
  }
</style>
