import cmConfig from "@/js/cmConfig.js"
import {cm7Enum} from "@/js/cm7Enum.js";
export const CityMaker7={}
window.fcGroup = {}; // 要素类集合
window.flGroup = {}; // 图层集合


//二维初始点位信息
var PLANE_POINT = {
  xmin: 12718049.557392336,
  ymin: 2588900.6201938847,
  xmax: 12751177.440880037,
  ymax: 2606009.097377529
}

//二维地图定位信息
var PLANE_MAP = {
  //当前点位信息
  xmin: PLANE_POINT.xmin,
  ymin: PLANE_POINT.ymin,
  xmax: PLANE_POINT.xmax,
  ymax: PLANE_POINT.ymax,
  ivXmin: 12568407.89,
  ivYmin: 2551000.75,
  ivXmax: 12601600.47,
  ivYmax: 2567700.56
}

//三维地图加载
CityMaker7.initAxControl=function () {

    // 获取dom
    window.__g = document.getElementById('__g')
    // 初始化地图

    let ps =__g.new_PropertySet
    ps.setProperty('RenderSystem', 'OpenGL')
    let bInit = __g.initialize(true, ps)
    if (!bInit) {
        if (confirm('未检测到插件，是否下载？')) {
            alert('请安装CityMaker系列软件！')
        }
        return
    }
    __g.camera.flyTime = 2;
  initControlEvents(__g)
  skyBox_init(__g);
  add3dData();
  gotoHomeView(cmConfig.bestView); // 定位到初始位置
}

/**
 * 设置天空盒图片
 * 图片路径在配置文件中
 */
function skyBox_init(__g) {
  try {
    if (cmConfig.skyboxnode) {
      let skyboxnode = cmConfig.skyboxnode;
      let skyboxObj = __g.objectManager.getSkyBox(0);

      let baseUrl = mainHost + '/static/images/setSkyNode/';
      skyboxObj.setImagePath(cm7Enum.gviSkyboxImageIndex.gviSkyboxImageBack, baseUrl + skyboxnode.BackImage);
      skyboxObj.setImagePath(cm7Enum.gviSkyboxImageIndex.gviSkyboxImageBottom, baseUrl + skyboxnode.BottomImage);
      skyboxObj.setImagePath(cm7Enum.gviSkyboxImageIndex.gviSkyboxImageFront, baseUrl + skyboxnode.FrontImage);
      skyboxObj.setImagePath(cm7Enum.gviSkyboxImageIndex.gviSkyboxImageLeft, baseUrl + skyboxnode.LeftImage);
      skyboxObj.setImagePath(cm7Enum.gviSkyboxImageIndex.gviSkyboxImageRight, baseUrl + skyboxnode.RightImage);
      skyboxObj.setImagePath(cm7Enum.gviSkyboxImageIndex.gviSkyboxImageTop, baseUrl + skyboxnode.TopImage);
    }
  } catch (ex) {
    console.log(ex)
  }
}

function add3dData() {
  let num = 0;
  for (let i = 0; i < cmConfig.layerServiceGroup.length; i++) {

    let mapInfo = cmConfig.layerServiceGroup[i];
    let ds = null, ci = null, fc = null, fl = null;
    ci = __g.new_ConnectionInfo;
    ci.connectionType = cm7Enum.gviConnectionType.gviConnectionCms7Http;
    ci.database = mapInfo.service;
    ci.server = mapInfo.host;
    ci.port = mapInfo.port;

    ds = __g.dataSourceFactory.openDataSource(ci);
    let fdsNames = ds.getFeatureDatasetNames();
    for (let k = 0; k < fdsNames.length; k++) {
      let fds = ds.openFeatureDataset(fdsNames[k]);
      let fcNames = fds.getNamesByType(cm7Enum.gviDataSetType.gviDataSetFeatureClassTable);
      for (let j = 0; j < fcNames.length; j++) {
        num++;
        fc = fds.openFeatureClass(fcNames[j]);
        fl = makeFeatureLayer(fc, mapInfo)
      }
    }
  }
  let terrianInfo = cmConfig.tedService;
  loadTerrain(terrianInfo);

  for (let i = 0; i < cmConfig.BIMLayerGroup.length; i++) {
    let maoInfo = cmConfig.BIMLayerGroup[i];
    let ds = null, ci = null, fc = null, fl = null;
    ci = __g.new_ConnectionInfo;
    ci.connectionType = GetEnumValue1(cm7Enum.gviConnectionType, maoInfo.ConnectionType);
    ci.database = maoInfo.service;
    ci.server = maoInfo.host;
    ci.port = maoInfo.port;
    if (maoInfo.password !== '') {
      ci.password = maoInfo.password
    }

    ds = __g.dataSourceFactory.openDataSource(ci);
    let fdsNames = ds.getFeatureDatasetNames();
    for (let k = 0; k < fdsNames.length; k++) {
      let fds = ds.openFeatureDataset(fdsNames[k]);
      let fcNames = fds.getNamesByType(cm7Enum.gviDataSetType.gviDataSetFeatureClassTable);
      for (let j = 0; j < fcNames.length; j++) {
        fc = fds.openFeatureClass(fcNames[j]);
        fcGroup[fds.alias + fcNames[j]] = fc;
        fl = makeFeatureLayer(fc, maoInfo);
        flGroup[fds.alias + fcNames[j]] = fl;
        CityMakerLayerInfo.push(fdsNames[k] + fcNames[j])
      }
    }
  }

}

/**
 * 图层可视化
 * @param {any} fc
 * @param {any} mapInfo
 */
function makeFeatureLayer(fc, mapInfo) {
  let fl = null;
  let textRender = null;
  let geoRender = null;
  let geoName = mapInfo.geoName;
  if (fc === null) {
    throw new Error('Feature class is null!')
  }

  fl = __g.objectManager.createFeatureLayer(fc, geoName, textRender, geoRender, '');
  if (fl) {

    fl.maxVisibleDistance = mapInfo.maxVisibleDistance;
    fl.minVisibleDistance = mapInfo.minVisibleDistance;
    fl.minVisiblePixels = mapInfo.minVisiblePixels;

  }
  if (!mapInfo.visible) {
    __g.projectTree.setVisibility(fl.guid, mapInfo.visible)
  }

  return fl
}

/**
 * 功能：加载地形
 */
function loadTerrain(mapInfo) {
  var terrainUrl = mapInfo.service + ':' + mapInfo.dataSet + '@' + mapInfo.host + ':' + mapInfo.port
  //var terrainUrl = mapInfo.service
  if (__g.terrain.registerTerrain(terrainUrl, mapInfo.password)) {
    __g.terrain.demAvailable = mapInfo.demAvailable
    __g.terrain.opacity = mapInfo.opacity
    let __datasetCRS = __g.crsFactory.createFromWKT(__g.terrain.crsWKT)

    if (mapInfo.visible) {
      __g.terrain.visibleMask = cm7Enum.gviViewportMask.gviViewAllNormalView
    } else {
      __g.terrain.visibleMask = cm7Enum.gviViewportMask.gviViewNone
    }
  }
}
/**
 * 设置相机视角到指定视角
 * @param view 默认为配置项中写好的最佳视角，也可以自己传入
 */
function gotoHomeView(view) {
  setCameraCpx(view.x, view.y, view.height, view.hAngle, view.vAngle, 0, 0)
  //恢复二维地图定位点
  PLANE_MAP.xmin = PLANE_POINT.xmin;
  PLANE_MAP.ymin = PLANE_POINT.ymin;
  PLANE_MAP.xmax = PLANE_POINT.xmax;
  PLANE_MAP.ymax = PLANE_POINT.ymax;

}


/**
 * 设置相机位置
 * @param x X坐标
 * @param y Y坐标
 * @param z Z坐标
 * @param heading 水平角
 * @param tilt 俯仰角
 * @param roll 倾斜角
 * @param flag 决定位置和转向参数值是否修改为新值(默认值为0)，取0时参数均修改为新值
 */
function setCameraCpx(x, y, z, heading, tilt, roll, flag) {
  var v = null, e = null
  v = __g.new_Vector3
  e = __g.new_EulerAngle
  v.x = x
  v.y = y
  v.z = z
  e.heading = heading
  e.tilt = tilt
  e.roll = roll
  __g.camera.flyTime = 2
  __g.camera.setCamera(v, e, flag)
}

/************************************************************************/
/* 类型定义
/************************************************************************/
var ____events = {}

function initControlEvents(control) {
  if (typeof (onFrame) == "function") ____events["onFrame"] = onFrame;
  if (typeof (onLButtonDown) == "function") ____events["onLButtonDown"] = onLButtonDown;
  if (typeof (onLButtonUp) == "function") ____events["onLButtonUp"] = onLButtonUp;
  if (typeof (onLButtonDblClk) == "function") ____events["onLButtonDblClk"] = onLButtonDblClk;
  if (typeof (onMButtonDown) == "function") ____events["onMButtonDown"] = onMButtonDown;
  if (typeof (onMButtonUp) == "function") ____events["onMButtonUp"] = onMButtonUp;
  if (typeof (onMButtonDblClk) == "function") ____events["onMButtonDblClk"] = onMButtonDblClk;
  if (typeof (onRButtonDown) == "function") ____events["onRButtonDown"] = onRButtonDown;
  if (typeof (onRButtonUp) == "function") ____events["onRButtonUp"] = onRButtonUp;
  if (typeof (onRButtonDblClk) == "function") ____events["onRButtonDblClk"] = onRButtonDblClk;
  if (typeof (onMouseMove) == "function") ____events["onMouseMove"] = onMouseMove;
  if (typeof (onMouseHover) == "function") ____events["onMouseHover"] = onMouseHover;
  if (typeof (onMouseWheel) == "function") ____events["onMouseWheel"] = onMouseWheel;
  if (typeof (onMouseClick) == "function") ____events["onMouseClick"] = onMouseClick;
  if (typeof (onKeyDown) == "function") ____events["onKeyDown"] = onKeyDown;
  if (typeof (onKeyUp) == "function") ____events["onKeyUp"] = onKeyUp;
  if (typeof (onMouseClickSelect) == "function") ____events["onMouseClickSelect"] = onMouseClickSelect;
  if (typeof (onMouseDragSelect) == "function") ____events["onMouseDragSelect"] = onMouseDragSelect;
  if (typeof (onPictureExportBegin) == "function") ____events["onPictureExportBegin"] = onPictureExportBegin;
  if (typeof (onPictureExporting) == "function") ____events["onPictureExporting"] = onPictureExporting;
  if (typeof (onPictureExportEnd) == "function") ____events["onPictureExportEnd"] = onPictureExportEnd;
  if (typeof (onCameraFlyFinished) == "function") ____events["onCameraFlyFinished"] = onCameraFlyFinished;
  if (typeof (onCameraTourWaypointChanged) == "function") ____events["onCameraTourWaypointChanged"] = onCameraTourWaypointChanged;
  if (typeof (onVideoExportBegin) == "function") ____events["onVideoExportBegin"] = onVideoExportBegin;
  if (typeof (onVideoExporting) == "function") ____events["onVideoExporting"] = onVideoExporting;
  if (typeof (onVideoExportEnd) == "function") ____events["onVideoExportEnd"] = onVideoExportEnd;
  if (typeof (onDataSourceDisconnected) == "function") ____events["onDataSourceDisconnected"] = onDataSourceDisconnected;
  if (typeof (onObjectEditing) == "function") ____events["onObjectEditing"] = onObjectEditing;
  if (typeof (onObjectEditFinish) == "function") ____events["onObjectEditFinish"] = onObjectEditFinish;
  if (typeof (onTransformHelperBegin) == "function") ____events["onTransformHelperBegin"] = onTransformHelperBegin;
  if (typeof (onTransformHelperEnd) == "function") ____events["onTransformHelperEnd"] = onTransformHelperEnd;
  if (typeof (onTransformHelperMoving) == "function") ____events["onTransformHelperMoving"] = onTransformHelperMoving;
  if (typeof (onTransformHelperRotating) == "function") ____events["onTransformHelperRotating"] = onTransformHelperRotating;
  if (typeof (onTransformHelperScaling) == "function") ____events["onTransformHelperScaling"] = onTransformHelperScaling;
  if (typeof (onTransformHelperBoxScaling) == "function") ____events["onTransformHelperBoxScaling"] = onTransformHelperBoxScaling;
  if (typeof (onFeaturesMoving) == "function") ____events["onFeaturesMoving"] = onFeaturesMoving;
  if (typeof (onCameraUndoRedoStatusChanged) == "function") ____events["onCameraUndoRedoStatusChanged"] = onCameraUndoRedoStatusChanged;
  if (typeof (onResPacking) == "function") ____events["onResPacking"] = onResPacking;
  if (typeof (onBeforePresentationItemActivation) == "function") ____events["onBeforePresentationItemActivation"] = onBeforePresentationItemActivation;
  if (typeof (onPresentationFlyToReachedDestination) == "function") ____events["onPresentationFlyToReachedDestination"] = onPresentationFlyToReachedDestination
  if (typeof (onPresentationStatusChanged) == "function") ____events["onPresentationStatusChanged"] = onPresentationStatusChanged;
  if (typeof (onUIWindowEvent) == "function") ____events["onUIWindowEvent"] = onUIWindowEvent;
  if (typeof (onProjectChanged) == "function") ____events["onProjectChanged"] = onProjectChanged;
  if (typeof (onFullScreenChanged) == "function") ____events["onFullScreenChanged"] = onFullScreenChanged;
  control.callback = ____events;
}


function onUIWindowEvent(args, type) {
  console.log(args)
  if (args.uiWindow == null)
    return
  let name = args.uiWindow.name
  if (type == cm7Enum.gviUIEventType.gviUIMouseClick) {
    if (args.uiWindow.type == cm7Enum.gviUIWindowType.gviUIImageButton) {
        console.log(name)
    }
  }
}
// function onKeyDown(Flags,Char ){
//
//   console.log("onKeyDown",Char)
//   return true
// }
function onKeyUp(Flags,Char ){
  console.log("onKeyUp",Char)
  if(Char=='122'){
    // __g.fullscreen = !__g.fullscreen
    // 判断各种浏览器，找到正确的方法
    var element=document.documentElement
    var requestMethod = element.requestFullScreen || //W3C
      element.webkitRequestFullScreen || //FireFox
      element.mozRequestFullScreen || //Chrome等
      element.msRequestFullScreen; //IE11
    if (requestMethod) {
      requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { //for Internet Explorer
      var wscript = new ActiveXObject("WScript.Shell");
      if (wscript !== null) {
        wscript.SendKeys("{F11}");
      }
    }
    return true
  }

}
function onFullScreenChanged(args,type){
  console.log("onFullScreenChanged",args)
  console.log("onFullScreenChanged",type)
}


/**
 * 创建HtmlWindow
 * @param windowInfo 悬浮窗参数信息
 */
CityMaker7.createHtmlWindow=(windowInfo)=>{
  var wp = __g.htmlWindow2.createWindowParam()
  wp.filePath = mainHost + windowInfo.url
  wp.sizeX = windowInfo.sizeX
  wp.sizeY = windowInfo.sizeY
  wp.offsetY = windowInfo.offsetY
  wp.offsetX = windowInfo.offsetX
  wp.hastitle = false
  wp.position = cm7Enum.gviHTMLWindowPosition.gviWinPosUserDefined
  if (windowInfo.round != null && windowInfo.round != '') {
    wp.round = windowInfo.round
  }
  if (windowInfo.hideOnClick != null) {
    wp.hideOnClick = windowInfo.hideOnClick
  } else {
    wp.hideOnClick = false
  }
  wp.winId = windowInfo.winId
  wp.minButtonVisible = false
  wp.closeButtonEnabled = false
  if (windowInfo.transparence != null && windowInfo.transparence != '') {
    wp.transparence = windowInfo.transparence
  } else {
    wp.transparence = 255
  }
  if (windowInfo.IsVisible != null) {
    wp.showWindow = windowInfo.IsVisible
  }
  wp.isPopupWindow = 0
  wp.resizable = false
  // wp.animation = "fadein"
  // wp.animationTime = 255
  // __g.interactMode = cm7Enum.gviInteractMode.gviInteractNormal
  if (windowInfo.rgnTemplateFile != null && windowInfo.rgnTemplateFile != '') {
    wp.rgnTemplateFile = windowInfo.rgnTemplateFile
    wp.rgnTransparentColor = 0
    console.log('windowInfo:', windowInfo.rgnTemplateFile)
    console.log('wp:', wp.rgnTemplateFile)
  }

  __g.useInProcHTMLWindow = true
  __g.htmlWindow2.setWindowParam(wp)
  return wp
}

/**
 * 创建HtmlWindow
 * @param windowInfo 悬浮窗参数信息
 */
CityMaker7.createUiImageButton= (imageButtonInfo)=>{
  let rect = __g.new_UIRect
  let uiLeft = __g.new_UIDim
  let uiTop = __g.new_UIDim
  let uiRight = __g.new_UIDim
  let uiB = __g.new_UIDim
  let manager = __g.uiWindowManager
  let rootWindow = manager.uiRootWindow
  uiLeft.init(0, imageButtonInfo.LeftOffset)
  uiTop.init(0, imageButtonInfo.TopOffset)
  uiRight.init(0, imageButtonInfo.RightOffset)
  uiB.init(0, imageButtonInfo.BottomOffset)
  rect.init(uiLeft, uiTop, uiRight, uiB)
  let button1 = manager.createImageButton()
  rootWindow.addChild(button1)
  button1.setArea(rect)
  button1.name = imageButtonInfo.Name
  button1.isVisible = true

  button1.normalImage = imageButtonInfo.NormalImage
  button1.disabledImage = imageButtonInfo.NormalImage
  if (imageButtonInfo.HoverImage != null && imageButtonInfo.HoverImage != '') {
    button1.hoverImage = imageButtonInfo.HoverImage
  }
  if (imageButtonInfo.PushedImage != null && imageButtonInfo.PushedImage != '') {
    button1.pushedImage = imageButtonInfo.PushedImage
  }
  if (imageButtonInfo.Text != null && imageButtonInfo.Text != '') {
    button1.text = imageButtonInfo.Text
  }
  button1.subscribeEvent(cm7Enum.gviUIEventType.gviUIMouseClick)
  button1.toolTipText = imageButtonInfo.ToolTipText
  return button1
}

