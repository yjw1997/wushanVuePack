<template>
  <ItemBlock
    marginTop="10px"
    height="200px"
    title="园区安全运行天数"
  >
    <!-- <echartWatch></echartWatch> -->
    <div class="safeDays-container">
      <img
        src="@/assets/images/safeDays.png"
        alt=""
      >
      <span>256</span>
      <span>天</span>
    </div>

  </ItemBlock>
</template>
<script>
import ItemBlock from '@/components/DataShowPage/ItemBlock'
export default {
  name: 'SafeDays',
  data() {
    return {}
  },
  components: {
    ItemBlock,
  },
  methods: {},
  mounted() {}
}
</script>
<style lang="less" scoped>
.safeDays-container {
  height: 100%;
  width: 100%;
  position: relative;
  & > img {
    width: 100%;
    margin-top: 15px;
  }
  & > span:nth-child(2) {
    color: #00dfef;
    position: absolute;
    font-size: 60px;
    display: block;
    width: 100px;
    top: 58px;
    left: 160px;
  }
  & > span:nth-child(3) {
    color: #00dfef;
    position: absolute;
    display: block;
    width: 100px;
    top: 129px;
    left: 160px;
    font-size: 22px;
    font-weight: bold;
  }
}
</style>


