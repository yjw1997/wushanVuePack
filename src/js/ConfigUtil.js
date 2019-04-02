import HTTP_URL from "@/js/http_url.js"
import Ajax from "@/js/httpUtil.js"
var ConfigUtil = (function () {
  let configObj = null

  return {
    init: function () {
      Ajax.get(HTTP_URL.MENUS_MAIN_LOCAL, function (res) {
        configObj = res.data
      }, function () {}, false)
    },
    getConfig: function (key) {
      if (configObj && key)return configObj[key]
      if (configObj && !key) return configObj
    }
  }
})()
export default ConfigUtil

