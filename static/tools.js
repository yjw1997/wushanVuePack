var EnumUtil = {
  //localstorage储存的消息类型,
  MessageType: {
    queue: "queue", //消费类型,消费即销毁
    broadcast: "broadcast", //广播模式,按ttl时间进行销毁,
    static: "static" //应该有个静态类,用于存储数据,永不销毁
  },
  EventsEnum: {
    type: {
      anfang: "1",//安防应急事件
      xiaofang: "2",//消防应急
      others: "0",//其他应急事件
    },
    status: {
      processing: "1",//正在处理
      untreated: "2",//未处理事件,
      processed: "3",//已处理事件
    }
  }
}
var _Tools = {
  /**
   * 获取location.search之后的参数
   * @param name 入参的key
   * @returns {string}
   */
  getQueryString: function (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) {
      return unescape(r[2])
    }
    return ""
  },
  addSecondsToTime: function (second) {
    let tempDate = new Date();
    tempDate.setSeconds(tempDate.getSeconds() + second);
    return tempDate;
  },
  /**
   * 定期监测localstorage里有没有残留的消息没有销毁
   * todo//需要将监测的间隔和ttl的时间弄成可配置的
   */
  checkStorageEvent: function () {
    setInterval(function () {
      let actionItem = window.localStorage.getItem("action");
      let actionArr = JSON.parse(actionItem === "" || actionItem == null ? '[]' : actionItem);
      for (let i = 0; i < actionArr.length; i++) {
        let item = actionArr[i];
        if (item.mesType === EnumUtil.MessageType.broadcast && new Date(Date.parse(item.ttl)) < new Date()) {
          actionArr.splice(i, 1);
          i--;
          window.localStorage.setItem('action', JSON.stringify(actionArr))
        }
      }
    }, 1000)
  },
  /**
   * 触发事件的方法
   * @param actionName 触发的事件名
   * @param param 需要传递的参数
   * @param mesType 消息类型,有枚举类
   */
  triggerStorageEvent: function (actionName, param, mesType) {
    console.log("trigger function name :", actionName)
    let __window = null;
    if (external && external.parentWindow) {
      __window = external.parentWindow
    } else {
      __window = window
    }
    let actionItem = __window.localStorage.getItem("action");
    let actionArr = JSON.parse(actionItem === "" || actionItem == null ? '[]' : actionItem);
    for (let i = 0; i < actionArr.length; i++) {
      let item = actionArr[i];
      if (actionName === item.actionName) {
        actionArr.splice(i, 1, {
          actionName: actionName,
          param: param,
          mesType: mesType ? mesType : EnumUtil.MessageType.queue,
          ttl: this.addSecondsToTime(10)
        })
        __window.localStorage.setItem('action', JSON.stringify(actionArr))
        return
      }
    }
    actionArr.push({
      actionName: actionName,
      param: param,
      mesType: mesType ? mesType : EnumUtil.MessageType.queue,
      ttl: this.addSecondsToTime(10)
    })//默认消息模式为队列模式,消费一个出栈一个,还有一种广播模式,消费完不销毁,可以设置ttl
    __window.localStorage.setItem('action', JSON.stringify(actionArr))
  },
  /**
   *  添加storage的事件的方法
   * @param funcBody 方法体,例:function(){
   *     //此处编写子界面监听到事件的默认处理的逻辑
   *     return{
   *         //此处编写命中的对应事件名的方法
   *         actionName:function(param){
   *
   *         }
   *     }
   * }
   * @param htmlName 做日志的标识,是哪个界面监听到事件
   */
  addStorageEventListener: function (funcBody) {
    let __window = null;
    if (external && external.parentWindow) {
      __window = external.parentWindow
    } else {
      __window = window
    }
    //防止当界面未加载完的时候有触发的指令没有响应到,添加事件的时候先做一层过滤检查
    let actionItem = __window.localStorage.getItem("action");
    let action = JSON.parse(actionItem === "" || actionItem == null ? '[]' : actionItem);

    for (let index = 0; index < action.length; index++) {
      let item = action[index];
      let actionName = item.actionName;
      let param = item.param;
      let mesType = item.mesType;
      if (!funcBody) return;
      let obj = eval(funcBody).call(this)[actionName];
      if (obj) {
        eval(obj).call(this, param);
        if (mesType === EnumUtil.MessageType.queue) {
          action.splice(index, 1);
          index--;
          __window.localStorage.setItem('action', JSON.stringify(action))
        }
      }
    }


    __window.addEventListener("storage", function (event) {
      console.log("[" + document.title + "] 界面监听到了localStorage!");
      let key = event.key;
      if (key === 'action') {
        let newActions = JSON.parse(event.newValue === "" || event.newValue == null ? '[]' : event.newValue);

        for (let index = 0; index < newActions.length; index++) {
          let item = newActions[index];
          let actionName = item.actionName;
          let param = item.param;
          let mesType = item.mesType;
          if (!funcBody) return;
          let obj = eval(funcBody).call(this)[actionName];
          if (obj) {
            eval(obj).call(this, param);
            console.log("[" + document.title + "]界面监听到了 [" + actionName + "] 事件");
            console.log(event.newValue)
            if (mesType === EnumUtil.MessageType.queue) {
              newActions.splice(index, 1);
              index--;
              __window.localStorage.setItem('action', JSON.stringify(newActions))
            }
          }
        }

      }
    });
  },
  /**
   * 确定窗口的大致位置,计算出在不同分辨率下的窗口位置的偏移值
   * @param configObj
   */
  getWindowPositionObj: function (paramConfigObj) {
    let configObj = {};
    Object.assign(configObj, paramConfigObj);
    // debugger
    let clientWidth = document.body.clientWidth * _scale;//网页宽度
    let clientHeight = document.body.clientHeight * _scale;//网页高度
    /**
     * 窗口的长和宽
     */
    let sizeX = configObj["sizeX"] * _scale;
    let sizeY = configObj["sizeY"] * _scale;
    /**
     * 窗口位置的参考坐标系
     */
    let referX = configObj["referX"];//左右位置,值有left和right,middle
    let referY = configObj["referY"];//上下位置,值有top和bottom,middle


    let referOffsetX = configObj["referOffsetX"] * _scale;//左右位置的偏移量
    let referOffsetY = configObj["referOffsetY"] * _scale;//上下位置的偏移量

    let offsetX = configObj["offsetX"];
    let offsetY = configObj["offsetY"];

    if (referX === "left") {
      offsetX = referOffsetX;
    } else if (referX === "right") {
      offsetX = clientWidth - referOffsetX - sizeX;
    } else if (referX === "middle") {
      offsetX = (clientWidth - sizeX) / 2
    }

    if (referY === "top") {
      offsetY = referOffsetY;
    } else if (referY === "bottom") {
      offsetY = clientHeight - referOffsetY - sizeY;
    } else if (referY === "middle") {
      offsetY = (clientHeight - sizeY) / 2
    }
    configObj.offsetX = offsetX;
    configObj.offsetY = offsetY;
    configObj.sizeX = sizeX;
    configObj.sizeY = sizeY;
    return configObj;

  },
  listenItem: function (funcBody) {
    let __window = null;
    if (external && external.parentWindow) {
      __window = external.parentWindow
    } else {
      __window = window
    }
    for (var funcName in funcBody) {
      if (funcBody.hasOwnProperty(funcName)) {
        let param = __window.localStorage.getItem(funcName);
        funcBody[funcName].call(this, JSON.parse(param));
      }

    }

    __window.addEventListener("storage", function (event) {
      var key = event.key;
      if (funcBody[key]) {
        funcBody[key].call(this, JSON.parse(event.newValue));
      }

    });
  },
  setItem: function (actionName, param) {
    let __window = null;
    if (external && external.parentWindow) {
      __window = external.parentWindow
    } else {
      __window = window
    }

    __window.localStorage.setItem(actionName, JSON.stringify(param))
  },

};


