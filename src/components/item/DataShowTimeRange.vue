<template>
  <div class="data-show-time-range" :style="{color:color}">
    <span>{{num}}</span>
    <span>{{comment}}</span>
  </div>
</template>

<script>
  export default {
    name: "block-title",
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
  .data-show-time-range{
    width: 135px;
    height: 55px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .data-show-time-range>span:nth-child(1){
    float: left;
    display: block;
    margin-top: 2px;
    font-size: 24px;
  }
  .data-show-time-range>span:nth-child(2){
    float: left;
    display: block;
    margin-top: 2px;
    color: white;
    font-size: 14px;
  }

</style>
