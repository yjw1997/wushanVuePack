<template>
  <div id="itemblock" :style="{width:width,height:height,marginTop:marginTop}">
    <div class="header">
      <span class="header-title">{{title}}</span>
      <slot name="selectType"></slot>
      <div v-show="select" class="select-bar">
        <span :class="{'item-selected' :currentSelect=='day'}" @click="handleItemSelect('day')">日</span>
        <span :class="{'item-selected' :currentSelect=='week'}" @click="handleItemSelect('week')">周</span>
        <span
          :class="{'item-selected' :currentSelect=='month'}"
          @click="handleItemSelect('month')"
        >月</span>
        <span :class="{'item-selected' :currentSelect=='year'}" @click="handleItemSelect('year')">年</span>
      </div>
    </div>
    <div class="itemBlock-content">
      <slot></slot>
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
      currentSelect: "month"
    };
  },
  methods: {
    handleItemSelect: function(param) {
      this.currentSelect = param;
    }
  }
};
</script>

<style scoped lang="less">
#itemblock {
  .header {
    height: 20px;
    width: 100%;
    background-color: rgba(0, 29, 129, 0.8);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-title {
      color: #00abd7;
      text-indent: 10px;
      font-size: 14px;
      text-align: center;
      line-height: 20px;
    }
    .select-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        display: block;
        width: 20px;
        height: 20px;
        color: #00dceb;
        font-size: 14px;
        cursor: pointer;
        &:hover {
          color: white;
        }
      }
      .item-selected {
        background-color: #00dff0;
        color: black !important;
      }
    }
  }
  .itemBlock-content {
    height: calc(100% - 20px);
    width: 100%;
  }
}
</style>
