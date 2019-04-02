var HTTP_URL = (function () {
  // var _BASE_URL = 'https://www.easy-mock.com/mock/5c3fe29f9416723e316f5f04/ws_cm8' // 乌山在线
  // var _BASE_URL = 'http://47.98.117.235:7300/mock/5b99c13d95ec583a5d254f49/wushan' // 基础url _乌山原版

  var _BASE_URL = 'http://192.168.2.249:7300/mock/5c403ebfd8685fad3432ee6a/wushannew_copy' // 基础url _乌山原版
  // var _BASE_URL = 'http://192.168.2.249:7300/mock/5bc4401e0626f227bcbb4d53/wushan_copy' // 基础url
  return {
    MENUS: _BASE_URL + '/menus/',
    MENUS_MAIN_FRAME: _BASE_URL + '/menus/jsconfig/', // 获取主页左侧菜单以及其他配置
    MENUS_MAIN_FRAME_COPY: _BASE_URL + '/menus/jsconfig_copy_1550646284005/', // 获取主页左侧菜单以及其他配置
    MENUS_MAIN_LOCAL: '/static/json/config/main.json', // 获取主页左侧菜单以及其他配置
    MENU_DETAIL: _BASE_URL + '/menus/details/', // 二级菜单对应的撒点数组
    POINT_INFO: _BASE_URL + '/point_info/', // 获取点位的弹窗信息
    COMMON_WINDOW_CONFIG: _BASE_URL + '/config/window_type_param/', // 通用接口,获取弹窗窗口配置
    MENU_DETAIL_LY: _BASE_URL + '/ly/', // 楼宇信息

    // ******************************这里是[消防部分]分割线***************************************
    XF_TODAY_ALARM_COUNT: _BASE_URL + '/xf/today_alarm_count', // 今日报警统计
    XF_SENSOR_SPREAD: _BASE_URL + '/xf/sensor_spread',  // 智能传感器分布
    XF_INSPECT_COUNT: _BASE_URL + '/xf/inspect_count', // 获取巡检统计数的
    XF_COMMON_DEVICE_LIST: _BASE_URL + '/common/deviceList', // 获取传感器数据列表的接口
    XF_DEVICE_DATA_LIST: _BASE_URL + '/xf/deviceDataList', // 智慧消防的传感器数据接口
    XF_ALARM_TREND: _BASE_URL + '/xf/alarm_trend', // 智慧消防报警趋势
    XF_FIREDRILL_DATA: _BASE_URL + '/xf/fireDrillData', // 消防演练的点位数据

    AF_TERRAINVIDEO_POINT_DATA: _BASE_URL + '/getTerrainVideo',
    AF_ALL_TERRAINVIDEO_POINT_DATA: _BASE_URL + '/getTerrainVideo/all',

    YJLD_EmergencyEvents: _BASE_URL + '/EmergencyEvents',  // 应急联动的紧急事件
    YJLD_COMMON_STAFF: _BASE_URL + '/common/staff', //

    WY_YJLD_TROUBLESHOOTING_PATH: _BASE_URL + '/wy/troubleshooting/path',  // 智慧物业的应急联动的异常排查路线数据

  }
})()
export default HTTP_URL;
