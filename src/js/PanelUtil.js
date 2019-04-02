/**
 *  一级面板初始化
 * @constructor
 */
import {CityMaker7} from "@/js/CityMaker7.js";
import _Tools from "@/js/tools.js"
import ConfigUtil from "@/js/ConfigUtil.js"
import LeftMenu from "@/js/leftMenu.js"

var PanelUtil = (function () {

  let lastPanelArr = []
  let leftPanelHide = true
  let rightPanelHide = true;
  let eventPanelHide = true;
  let bottomMenuHide = true
  return {
    // showPanel: function (menuName) {
    //     if (!menuName) {
    //         menuName = LeftMenu.getCurSelectMenuName()
    //     }
    //     this.hidePanel();
    //     if(menuName=="home"){
    //       CityMaker7.createHtmlWindow(_Tools.getWindowPositionObj({
    //         "url": "/#/DataShowIndex",
    //         "round": 0,
    //         "winId": 111,
    //         "referX": "left",
    //         "referY": "top",
    //         "referOffsetX": 0,
    //         "referOffsetY": 0,
    //         "sizeX": ClientWidth,
    //         "sizeY": ClientHeight
    //       }))
    //       return
    //     }
    //     let tempMenuConfig = ConfigUtil.getConfig("FIRST_LEVEL_MENU_PANEL")[menuName];//一级菜单的面板配置数组
    //     let tempMenuConfigPanels = tempMenuConfig && tempMenuConfig["panels"];//一级菜单的面板配置数组
    //     tempMenuConfigPanels && tempMenuConfigPanels.map(function (item) {
    //         lastPanelArr.push(CityMaker7.createHtmlWindow(_Tools.getWindowPositionObj(item)));
    //     })
    // },
    showPanel: function (menuName) {
      if (!menuName) {
        menuName = LeftMenu.getCurSelectMenuName()
      }
      // let tempMenuConfig = ConfigUtil.getConfig("FIRST_LEVEL_MENU_PANEL")[menuName];//一级菜单的面板配置数组
      // let tempMenuConfigPanels = tempMenuConfig && tempMenuConfig["panels"];//一级菜单的面板配置数组
      //todo 如果左侧菜单已经存在,则不创建,直接显示即可

      if (leftPanelHide) {
        CityMaker7.createHtmlWindow(_Tools.getWindowPositionObj({
          "url": "/static/LeftPanel.html",
          "winId": 50,
          "round": 10,
          "referX": "left",
          "referY": "top",
          "referOffsetX": 70,
          "referOffsetY": 128,
          "sizeX": 380,
          "sizeY": 880,
          "transparence": 240
        }))
        leftPanelHide = !leftPanelHide;
      }
      if (rightPanelHide) {
        CityMaker7.createHtmlWindow(_Tools.getWindowPositionObj({
          "url": "/static/RightPanel.html",
          "winId": 60,
          "round": 10,
          "referX": "right",
          "referY": "top",
          "referOffsetX": 21,
          "referOffsetY": 128,
          "sizeX": 400,
          "sizeY": 600,
          "transparence": 240
        }))
        rightPanelHide = !rightPanelHide;
      }
      if (eventPanelHide) {
        CityMaker7.createHtmlWindow(_Tools.getWindowPositionObj({
          "url": "/#/CommonPage/EventDetail",
          "winId": 80,
          "round": 10,
          "referX": "middle",
          "referY": "bottom",
          "referOffsetX": 0,
          "referOffsetY": 57,
          "sizeX": 930,
          "sizeY": 250,
          "transparence": 230
        }))
        eventPanelHide = !eventPanelHide;
      }
      if (bottomMenuHide) {
        CityMaker7.createHtmlWindow(_Tools.getWindowPositionObj({
          "url": "/#/CommonPage/BottomMenu",
          "winId": 70,
          "round": 10,
          "referX": "middle",
          "referY": "bottom",
          "referOffsetX": 0,
          "referOffsetY": 0,
          "sizeX": 1010,
          "sizeY": 45,
          "transparence": 240
        }))
        bottomMenuHide = !bottomMenuHide;
      }


    },
    hidePanel: function () {
      let lth = lastPanelArr.length;
      for (let i = 0; i < lth; i++) {
        let tempObj = lastPanelArr.pop()
        tempObj.showWindow = false;
        __g.htmlWindow2.setWindowParam(tempObj);
      }
    },
    showSecondLevelPanel: function (secondMenuId) {
      this.hideSecondPanel();
      let tempMenuConfig = ConfigUtil.getConfig("SECOND_LEVEL_MENU_CONFIG")[LeftMenu.getCurSelectMenuName()];//一级菜单的面板配置数组
      let tempMenuConfigPanels = tempMenuConfig && tempMenuConfig["menus"];//一级菜单的面板配置数组
      tempMenuConfigPanels && tempMenuConfigPanels.map(function (item) {
        if (item.menuId === secondMenuId) {
          item["panels"].map(function (panel) {
            lastPanelArr.push(CityMaker7.createHtmlWindow(_Tools.getWindowPositionObj(panel)));
          })

        }

      })
    },
    hideSecondPanel: function () {
      for (let i = 0; i < lastPanelArr.length; i++) {
        let tempPanelObj = lastPanelArr[i];
        if (tempPanelObj && tempPanelObj.filePath !== "http://localhost:57668//asset/htmlWindowPages/bottomMenuWindow.html") {
          tempPanelObj.showWindow = false;
          __g.htmlWindow2.setWindowParam(tempPanelObj);
          lastPanelArr.splice(i, 1);
          i--
        }

      }
    },
    hidePanelById: function (winId) {
      __g.htmlWindow2.hideWindow(winId);

    }

  }
})();
export default PanelUtil;
