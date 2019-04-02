<template>
  <div class='panel-header-bar-container'>
    <span>{{title}}</span>
    <img class='samaclose' src='@/assets/images/imageButton/banner/close.png' alt='' @click='handleClick(1)'>
  </div>

</template>

<script>
  export default {
    name: "block-title",
    props: {
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
    methods: {
      handleClick: function (winId) {
        this.$emit("closeSelf")
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .panel-header-bar-container {
    height: 44px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    color: white;
    border-bottom: 2px solid #192320;
  }

  .panel-header-bar-container > span:nth-child(1) {
    margin-left: 17px;
    color: #DBECF5;
  }

  .panel-header-bar-container > img {
    margin-right: 11px;
    height: 14px;
    width: 14px;
    cursor: pointer;
  }

  .samaclose:hover {
    transform: rotate(180deg);
    -ms-transform: rotate(180deg); /* IE 9 */
    -moz-transform: rotate(180deg); /* Firefox */
    -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
    -o-transform: rotate(180deg);
  }

  .samaclose {
    transition: all .5s;
    -moz-transition: all .5s; /* Firefox 4 */
    -webkit-transition: all .5s; /* Safari 和 Chrome */
    -o-transition: all .5s;
  }

</style>
