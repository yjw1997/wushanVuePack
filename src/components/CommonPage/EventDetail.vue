<template>
  <div id="EventListShow" >
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
import EnumUtil from "@/js/EnumUtil"
import _Tools from "../../js/tools";
  export default {
    name: "event-detail-component",
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

      };
    },
    methods: {
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
      }

    },
    components: {
    },
    watch:{
      tabSelectItem: function(val) {
        this.currentShowList.untreated = []
        this.currentShowList.processing = []
        this.currentShowList.processed = []
        this.eventDataDetail[val].list.map(function(item) {
          if (EnumUtil.EventsEnum.status.untreated === item.status)
            this.currentShowList.untreated.push(item)
          if (EnumUtil.EventsEnum.status.processing === item.status)
            this.currentShowList.processing.push(item)
          if (EnumUtil.EventsEnum.status.processed === item.status)
            this.currentShowList.processed.push(item)
        }.bind(this))
      }
    },
    mounted: function () {
      var that = this;
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
      _Tools.addStorageEventListener(function () {
        return{
          handleFirstMenuChange:function (param) {
              console.log("底部事件列表的参数:",param)
          }
        }
      })
    }
  };
</script>

<style  scoped>
  #EventListShow {
    width: 927px;
    height: 247px;
    background-color: #253332;
    border: 1px solid #192320;
    border-radius: 5px;
  }
  #EventListShow ul {
    margin: 0;
    padding: 0;
  }
  #EventListShow .event-tab-header {
    width: 100%;
    height: 38px;
    border-bottom: 1px solid #192320;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  #EventListShow .event-tab-header  > span {
    font-size: 14px;
    cursor: pointer;
    opacity: 0.9;
    display: block;
    height: 37px;
    width: 160px;
    border-right: 1px solid #192320;
    line-height: 37px;
    text-align: center;
  }
  #EventListShow .event-tab-header  > span:hover {
    opacity: 1;
  }
  #EventListShow .event-tab-header  > span:nth-child(1) {
    color: #00dfef;
  }
  #EventListShow .event-tab-header  > span:nth-child(2) {
    color: #ff8a5d;
  }
  #EventListShow .event-tab-header  > span:nth-child(3) {
    color: #efa400;
  }
  #EventListShow .event-tab-header  > span:nth-child(4) {
    color: #6dc141;
  }
  #EventListShow .event-tab-header  > span.selected-span {
    background-color: #212B29;

  }
  #EventListShow .event-tab-containers {
    height: calc(100% - 40px);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #EventListShow .event-tab-containers .event-list-block {
    width: calc(100% / 3 - 5px - 20px);
    height: calc(100% - 30px - 10px);
    padding: 5px 10px;
  }
  #EventListShow .event-tab-containers .event-list-block .event-block-title {
    color: white;
    height: 20px;
    width: 100%;
    display: flex;
    text-align: left;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
  }
  #EventListShow .event-tab-containers .event-list-block .event-block-title  > span:nth-child(1) {
    background-color: white;
    width: 3px;
    display: block;
    height: 13px;
    margin-right: 5px;
  }
  #EventListShow .event-tab-containers .event-list-block .event-block-content {
    height: calc(100% - 20px);
    width: 100%;
    margin-top: 5px;
  }
  #EventListShow .event-tab-containers .event-list-block .event-block-content .event-line-div {
    height: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 14px;
    color: white;
    cursor: pointer;
  }
  #EventListShow .event-tab-containers .event-list-block .event-block-content .event-line-div:hover {
    transition: all 0.2s ease-in-out;
    color: #6dc141 !important;
  }
  #EventListShow .event-tab-containers .event-list-block .event-block-content .event-line-div .event-line-1 {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 3px 0;
  }
  #EventListShow .event-tab-containers .event-list-block .event-block-content .event-line-div .event-line-1  > i {
    color: #ff8a5d;
  }
  #EventListShow .event-tab-containers .event-list-block .event-block-content .event-line-div .event-line-1  > span {
    width: calc(100% - 15px);
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    overflow: hidden;
    font-size: 12px;
  }
  #EventListShow .event-tab-containers .event-list-block .event-block-content .event-line-div .event-line-2 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3px 0;
  }
  #EventListShow .event-tab-containers .event-list-block .event-block-content .event-line-div .event-line-2  > span {
    font-size: 10px;
  }



</style>
