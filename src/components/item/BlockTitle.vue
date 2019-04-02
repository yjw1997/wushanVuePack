<template>
 <span class="block-title">
    <span></span>
   <span>{{title}}</span>
 </span>
</template>

<script >
  export default {
    name: "block-title",
    props:{
      title: {
        type: String,
        default: "标题"
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
  .block-title{
    color: white;
    height: 35px;
    width: calc(100% - 16px);
    display: flex;
    text-align: left;
    justify-content: flex-start;
    align-items: center;
    font-size: 16px;
    margin-left: 16px;
  }
  .block-title  > span:nth-child(1) {
    background-color: white;
    width: 3px;
    display: block;
    height: 13px;
    margin-right: 7px;
  }
</style>
