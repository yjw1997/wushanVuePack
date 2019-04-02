import _Tools from "@/js/tools";
import {CityMaker7} from "@/js/CityMaker7";
import ConfigUtil from "@/js/ConfigUtil";
import LeftMenu from "@/js/leftMenu";
import PanelUtil from "@/js/PanelUtil";

export default function(){
  _Tools.addStorageEventListener(function (param) {

    return{
      handleFirstMenuClick:function (param) {
        if(param=='home'){
          // that.$router.push({path:"/DataShowIndex"})
          CityMaker7.createHtmlWindow(_Tools.getWindowPositionObj({
            "url": "/#/DataShowIndex",
            "round": 0,
            "winId": 111,
            "referX": "left",
            "referY": "top",
            "referOffsetX": 0,
            "referOffsetY": 0,
            "sizeX": ClientWidth,
            "sizeY": ClientHeight
          }))
          LeftMenu.changeSelect(param)
        }else{
          LeftMenu.changeSelect(param)
          PanelUtil.showPanel(param)
          _Tools.triggerStorageEvent("firstMenuSelectChange",{menuName:param,menuConfig:ConfigUtil.getConfig("SECOND_LEVEL_MENU_CONFIG")[param]},EnumUtil.MessageType.broadcast);
          console.log(LeftMenu.getCurSelectMenuName())
        }

      },
      handleSecondMenuClick:function (param) {
        // PanelUtil.showSecondLevelPanel(param.menuId)
      },
      closeHtmlWindow:function (param) {
        __g.htmlWindow2.hideWindow(param);
      },
      handleDataShowIndexClose:function (param) {

        setTimeout(function () {
          LeftMenu.changeSelect(param)
          PanelUtil.showPanel(param)
          _Tools.triggerStorageEvent("firstMenuSelectChange",{menuName:param,menuConfig:ConfigUtil.getConfig("SECOND_LEVEL_MENU_CONFIG")[param]},EnumUtil.MessageType.broadcast);
          console.log(LeftMenu.getCurSelectMenuName())
        },500)
      },
      handleFirstMenuChange:function (param) {
        LeftMenu.changeSelect(param)
        PanelUtil.showPanel(param)

      }
    }
  })
}

