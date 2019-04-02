<template>
  <div
    id="EventListShow"
    :style="{marginTop:marginTop}"
  >
    <div class="event-tab-header">
      <span
        :class='tabSelectItem=="all"?"selected-span":""'
        @click='tabSelectItem="all"'
      >
        <i class="iconfont iconshijianliebiao"></i>
        <span>应急事件（{{eventDataDetail.all.length}}）</span>
      </span>
      <span
        :class='tabSelectItem=="anfang"?"selected-span":""'
        @click='tabSelectItem="anfang"'
      >
        <i class="iconfont iconhetongshijian"></i>
        <span>安防应急（{{eventDataDetail.anfang.length}}）</span>
      </span>
      <span
        :class='tabSelectItem=="xiaofang"?"selected-span":""'
        @click='tabSelectItem="xiaofang"'
      >
        <i class="iconfont iconweixiushijian-copy"></i>
        <span>消防应急（{{eventDataDetail.xiaofang.length}}）</span>
      </span>
      <span
        :class='tabSelectItem=="others"?"selected-span":""'
        @click='tabSelectItem="others"'
      >
        <i class="iconfont iconkuanxiangtixing-copy"></i>
        <span>其他应急（{{eventDataDetail.others.length}}）</span>
      </span>
    </div>
    <div class="event-tab-containers">
      <div class="event-list-block">
        <span class="event-block-title">
          <span></span>
          <span>未处理事件</span>
        </span>
        <div
          class="event-block-content scroll-hide"
          id="scroll-message"
        >
          <ul>
            <li
              class="event-line-div"
              v-for="(item,index) in currentShowList.untreated"
              :key="index"
              @click="handleClick(item.id)"
            >
              <div class="event-line-1">
                <i class="iconfont icondongtairenyuanjianguan"></i>
                <span>{{item.id}}:{{item.title}}</span>
              </div>
              <div class="event-line-2">
                <span>上报人:{{item.reportPerson}}</span>
                <span>时间:{{item.reportTime}}</span>
              </div>
            </li>

          </ul>
        </div>
      </div>
      <div class="event-list-block">
        <span class="event-block-title">
          <span></span>
          <span>正处理事件</span>
        </span>
        <div
          class="event-block-content scroll-hide"
          id="scroll-message2"
        >
          <ul>
            <li
              class="event-line-div"
              v-for="(item,index) in currentShowList.processing"
              :key="index"
            >
              <div class="event-line-1">
                <i
                  class="iconfont iconweixiushijian"
                  style="color:#EFA400;"
                ></i>
                <span>{{item.id}}:{{item.title}}</span>
              </div>
              <div class="event-line-2">
                <span>上报人:{{item.reportPerson}}</span>
                <span>时间:{{item.reportTime}}</span>
              </div>
            </li>

          </ul>
        </div>
      </div>
      <div class="event-list-block">
        <span class="event-block-title">
          <span></span>
          <span>已处理事件</span>
        </span>
        <div
          class="event-block-content scroll-hide"
          id="scroll-message3"
        >
          <ul>
            <li
              class="event-line-div"
              v-for="(item,index) in currentShowList.processed"
              :key="index"
            >
              <div class="event-line-1">
                <i
                  class="iconfont iconkuanxiangtixing"
                  style="color:#6DC141;"
                ></i>
                <span>{{item.id}}:{{item.title}}</span>
              </div>
              <div class="event-line-2">
                <span>上报人:{{item.reportPerson}}</span>
                <span>时间:{{item.reportTime}}</span>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventListShow',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    select: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: '240px'
    },
    marginTop: {
      type: String,
      default: '0px'
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  data() {
    return {
      tabSelectItem: '',
      sourceEventData: [],
      eventDataDetail: {
        all: {
          length: 0,
          list: []
        },
        anfang: {
          length: 0,
          list: []
        },
        xiaofang: {
          length: 0,
          list: []
        },
        others: {
          length: 0,
          list: []
        }
      },
      currentShowList: {
        untreated: [],
        processing: [],
        processed: []
      }
    }
  },
  methods: {
    setScroll: function(eleId) {
      setTimeout(function() {
        var table = document.getElementById(eleId)
        var timer = null
        table.scrollTop = 0
        table.innerHTML += table.innerHTML
        function play() {
          clearInterval(timer)
          timer = setInterval(function() {
            table.scrollTop++
            if (table.scrollTop >= table.scrollHeight / 2) {
              table.scrollTop = 0
            }
          }, 100)
        }
        setTimeout(play, 500)
        table.onmouseover = function() {
          clearInterval(timer)
        }
        table.onmouseout = play
      }, 0)
    },
    setScroll2: function(eleId) {
      var table = document.getElementById(eleId)
      var timer = null
      table.scrollTop = 0
      function play() {
        clearInterval(timer)
        timer = setInterval(function() {
          table.scrollTop++
          //当滚动的高度大于等于div的高度减去视窗的高度时候,视为滚动到底部
          if (table.scrollTop >= table.scrollHeight - table.clientHeight) {
            table.scrollTop = 0
          }
        }, 100)
      }
      setTimeout(play, 500)
      table.onmouseover = function() {
        clearInterval(timer)
      }
      table.onmouseout = play
    },
    handleClick:function (id) {
      this.$root.$emit("eventClick",id)
    }
  },
  watch: {
    tabSelectItem: function(val) {
      this.currentShowList.untreated = []
      this.currentShowList.processing = []
      this.currentShowList.processed = []
      this.eventDataDetail[val].list.map(item => {
        if (_$eventEnums.status.untreated === item.status)
          this.currentShowList.untreated.push(item)
        if (_$eventEnums.status.processing === item.status)
          this.currentShowList.processing.push(item)
        if (_$eventEnums.status.processed === item.status)
          this.currentShowList.processed.push(item)
      })
    }
  },
  mounted: function() {
    this.setScroll2('scroll-message')
    this.setScroll2('scroll-message2')
    this.setScroll2('scroll-message3')
    $https.get('/static/json/api/event.json').then(resp => {
      this.sourceEventData = resp.data.data
      this.eventDataDetail.all.length = this.sourceEventData.length
      this.eventDataDetail.all.list = this.sourceEventData
      this.sourceEventData.map((item, index) => {
        if (item.type === _$eventEnums.type.anfang) {
          this.eventDataDetail.anfang.length++
          this.eventDataDetail.anfang.list.push(item)
        }
        if (item.type === _$eventEnums.type.xiaofang) {
          this.eventDataDetail.xiaofang.length++
          this.eventDataDetail.xiaofang.list.push(item)
        }
        if (item.type === _$eventEnums.type.others) {
          this.eventDataDetail.others.length++
          this.eventDataDetail.others.list.push(item)
        }
        this.tabSelectItem = 'all'
      })
    })
  }
}
</script>

<style scoped lang="less">
#EventListShow {
  width: 100%;
  height: 100%;
  & ul {
    margin: 0;
    padding: 0;
  }
  .event-tab-header {
    width: 100%;
    height: 38px;
    border-bottom: 2px solid #002f56;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & > span {
      font-size: 14px;
      cursor: pointer;
      opacity: 0.9;
      &:hover {
        opacity: 1;
      }
    }
    & > span:nth-child(1) {
      color: #00dfef;
    }
    & > span:nth-child(2) {
      color: #ff8a5d;
    }
    & > span:nth-child(3) {
      color: #efa400;
    }
    & > span:nth-child(4) {
      color: #6dc141;
    }
    & > span.selected-span {
      border: 1px solid #00dfef;
      background-color: #123f42;
      border-radius: 5px;
      padding: 3px;
    }
  }
  .event-tab-containers {
    height: calc(100% - 40px);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .event-list-block {
      width: calc(100% / 3 - 5px - 20px);
      height: calc(100% - 30px - 10px);
      background-color: rgba(2, 9, 25, 0.8);
      padding: 5px 10px;
      .event-block-title {
        color: #00dfef;
        height: 20px;
        width: 100%;
        display: flex;
        text-align: left;
        justify-content: flex-start;
        align-items: center;
        font-size: 14px;
        & > span:nth-child(1) {
          background-color: #00dfef;
          width: 3px;
          display: block;
          height: 13px;
          margin-right: 5px;
        }
      }
      .event-block-content {
        height: calc(100% - 30px);
        width: 100%;
        margin-top: 5px;
        .event-line-div {
          height: 40px;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          margin-bottom: 14px;
          color: #00dfef;
          &:hover {
            transition: all 0.2s ease-in-out;
            color: #6dc141 !important;
          }
          cursor: pointer;
          &:last-child {
            // margin-bottom: 0px;
          }
          .event-line-1 {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: 3px 0;
            & > i {
              color: #ff8a5d;
            }
            & > span {
              width: calc(100% - 15px);
              display: block;
              white-space: nowrap;
              text-overflow: ellipsis;
              -o-text-overflow: ellipsis;
              overflow: hidden;
              font-size: 12px;
            }
          }
          .event-line-2 {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 3px 0;
            & > span {
              font-size: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
