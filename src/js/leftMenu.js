/**
 *  左侧一级菜单的方法类
 * @constructor
 */
import {CityMaker7} from "@/js/CityMaker7.js";
import _Tools from "@/js/tools.js"
import ConfigUtil from "@/js/ConfigUtil.js"

var LeftMenu = (function () {
  let curSelectMenuName = ''
  return {
    /**
     * 初始化左侧imageButton的方法
     */
    init: function () {
      let tempLeftValue = ConfigUtil.getConfig('LEFT_MENU_PANEL')
      CityMaker7.createHtmlWindow(_Tools.getWindowPositionObj(tempLeftValue))
    },
    /**
     * 改变选中按钮状态的方法
     * @param clickName 当前点击得按键名
     */
    changeSelect: function (clickName) {
      curSelectMenuName = clickName
    },
    getCurSelectMenuName: function () {
      return curSelectMenuName
    },
    detectZoom: function () {
      var ratio = 0,
        screen = window.screen,
        ua = navigator.userAgent.toLowerCase()

      if (window.devicePixelRatio !== undefined) {
        ratio = window.devicePixelRatio
      }
      else if (~ua.indexOf('msie')) {
        if (screen.deviceXDPI && screen.logicalXDPI) {
          ratio = screen.deviceXDPI / screen.logicalXDPI
        }
      }
      else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
        ratio = window.outerWidth / window.innerWidth
      }

      if (ratio) {
        ratio = Math.round(ratio * 100)
      }

      return ratio
    }
  }
})()
export default LeftMenu
