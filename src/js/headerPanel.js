import _Tools from "@/js/tools.js"
import ConfigUtil from "@/js/ConfigUtil.js"
import {CityMaker7} from "@/js/CityMaker7.js"

/**
 *  首页顶部初始化方法
 * @constructor
 */
var HeaderPanel = (function () {
  let obj = [];
  return {
    init: function () {
      let tempConfig = ConfigUtil.getConfig("HEADER_BUTTON_PANEL").value;
      let leftHeaderPanel = tempConfig["leftHeaderPanel"];
      CityMaker7.createHtmlWindow(_Tools.getWindowPositionObj(leftHeaderPanel));//创建天气悬浮窗

      let headerImageButton = tempConfig["headerImageButton"];
      let nor_topBar_Image = mainHost + headerImageButton.imageUrl;
      let nor_topBar_width = headerImageButton.width;
      let nor_topBar_height = headerImageButton.height;
      let topBarPanelInfo = {
        LeftOffset: 0,
        TopOffset: 0,
        RightOffset: ClientWidth * _scale,
        BottomOffset: nor_topBar_height * _scale,
        NormalImage: nor_topBar_Image,
        PushedImage: nor_topBar_Image,
        HoverImage: nor_topBar_Image,
        DisabledImage: nor_topBar_Image,
        ToolTipText: "",
        Name: "header"
      };
      CityMaker7.createUiImageButton(topBarPanelInfo);//创建工具条面板

      let rightHeaderPanel = tempConfig["rightHeaderPanel"];
      CityMaker7.createHtmlWindow(_Tools.getWindowPositionObj(rightHeaderPanel));//创建地图工具条悬浮窗
    },
  }
})();
export default HeaderPanel;
