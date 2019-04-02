<template>
  <div class="echartSwitch-container">
    <div
      v-for="(item,index) in typeArr"
      :key="index"
    >
      <span
        :class="{'item-selected' :currentSelect==item}"
        @click="handleItemSelect(item,index)"
      >{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EchartSwitch',
  props: {
    typeArr: {
      type: Array,
      default: function() {
        return ['折线', '柱状']
      }
    }
  },
  data() {
    return {
      currentSelect: ''
    }
  },
  methods: {
    handleItemSelect: function(selectItme, index) {
      this.currentSelect = selectItme
      this.$emit('selectChange', index)
    }
  },
  mounted() {
    this.currentSelect = this.typeArr[0]
  }
}
</script>
<style lang="less" scoped>
.echartSwitch-container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    display: block;
    width: 40px;
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
</style>
