<template>
  <div class='tab-header-component'>
  <span class='tab-span' v-for="(tab, index) in tabs" :class='tabSelectItem==tab?"selected-span":""'
        @click='handleClick(tab)'>{{tab}}
  </span>
  </div>
</template>

<script>
  export default {
    name: "tab-header",
    props: {
      tabs: {
        type: Array,
        default: function () {
          return [
            "数据概览",
            "部件数据",
            "进出查询"
          ]
        }
      }
    },
    data() {
      return {
        tabSelectItem:''
      };
    },
    mounted() {
      this.tabSelectItem  = this.tabs[0]
    },
    methods: {
      handleClick:function (tab) {
        this.tabSelectItem = tab
        this.$emit("change",tab)
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tab-header-component{
    height: 46px;
    width: calc(100% - 2px);
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-right: 1px solid #192320;
  }
  .tab-header-component .tab-span{
    border-right: 1px solid #192320;
    border-bottom: 1px solid #192320;
    height: 100%;
    line-height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: auto;
    color: #DDEBFF;
    font-size: 14px;
    cursor: pointer;
  }

  .tab-header-component>div:last-of-type {
    border-right: none;
  }
  .selected-span{
    background-color: #1F2825;
    color: #00DFEF!important;
  }
</style>
