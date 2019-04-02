<template>
  <div class="data-show-no-icon" :style="{color:color}">
    <i class='iconfont'></i>
    <span><span>{{num}}</span></span>
    <span>{{comment}}</span>
  </div>
</template>

<script>
  export default {
    name: 'data-show-no-icon',
    props: {
      color: {
        type: String,
        default: "#FF8755"
      },
      num: {
        type: String,
        default: "220"
      },
      comment: {
        type: String,
        default: "标题(单位)"
      },
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

  .data-show-no-icon{
    width: 90px;
    height: 55px;
  }

  .data-show-no-icon>span:nth-child(2){
    float: left;
    display: block;
    margin-top: 2px;
    width: 100%;
  }
  .data-show-no-icon>span:nth-child(2)>span:nth-of-type(1){
    font-size: 33px;

  }
  .data-show-no-icon>span:nth-child(3){
    font-size: 14px;
    float: right;
    display: block;
    margin-top: 4px;
    width: 100%;
    color: white;
  }
</style>
