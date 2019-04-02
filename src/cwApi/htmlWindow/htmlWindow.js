export const htmlWindow = {};
//这里采用复用原则，如果弹窗对象
var htmlWindowQueue = [];//弹窗的队列
var showHtmlWindowMap = [];//已经显示的弹窗的映射
var wp = null;
let eventFlag = false;
function showHtmlWindowEnd(winId) {
  console.log("弹窗加载完毕",winId);
  htmlWindowQueue.shift()
  if (htmlWindowQueue.length != 0) {
    showHtmlWindowFn(htmlWindowQueue.shift());
  }
}

/**
 * 显示弹窗
 * @param winId
 * @param component
 * @param position
 * @param width
 * @param height
 * @param offsetY
 * @param round
 * @param transparence
 * @param filePath
 */
htmlWindow.showHtmlWindow = function (winId, component, position, width, height,offsetX, offsetY, round, transparence, filePath) {
  if (!eventFlag) {
    cwEventBus.bus.$on(cwEventBus.SHOW_HTML_WINDOW_END, showHtmlWindowEnd);
    eventFlag = true;
  }
  let obj = null;
  if (typeof winId == "object") {
    obj = winId;
  } else {
    obj = {winId, component, position, width, height,offsetX, offsetY, round, transparence, filePath}
  }
  let showHtmlWindowItem = showHtmlWindowMap[obj.winId];
  if (showHtmlWindowItem) {
    console.error("弹窗已经存在了，参数为:", showHtmlWindowItem)
    return
  }
  showHtmlWindowMap[obj.winId] = obj;
  if (htmlWindowQueue.length == 0) {
    showHtmlWindowFn(obj);
  }
  htmlWindowQueue.push(obj);
}
function createWindowParam(obj) {
  if (!wp) {
    wp = __g.htmlWindow.createWindowParam();
  }
  wp.winId = obj.winId || 1;
  wp.filePath = obj.filePath || resourcesUrl + "/static/html/htmlWindow.html";
  wp.sizeX = obj.width || __g.getRenderParam(gviRenderControlParameters.gviRenderParam3DWindowWidth)
  wp.sizeY = obj.height || __g.getRenderParam(gviRenderControlParameters.gviRenderParam3DWindowHeight);
  wp.hastitle = false;
  wp.position = obj.position || 0;
  wp.offsetX = obj.offsetX || 0;
  wp.offsetY = obj.offsetY || 0;
  wp.round = obj.round || 5;
  wp.hideOnClick = false;
  wp.minButtonVisible = false;
  wp.closeButtonEnabled = false;
  wp.transparence = obj.transparence || 200;
  wp.isPopupWindow = false;
  wp.resizable = false;
  wp.showWindow = true;
  return wp;
}
function showHtmlWindowFn(obj) {
  cwConfig.windowComponent = obj.component;
  cwConfig.winId = obj.winId;
  let wp = createWindowParam(obj);
  __g.htmlWindow.setWindowParam(wp);
}
/**
 * 关闭html弹窗
 * @param winId
 */
htmlWindow.closeHtmlWindow = function (winId) {
  __g.htmlWindow.hideWindow(winId);
  showHtmlWindowMap[winId] = null;
}


/**********************下面代码暂时封装*****************************************/

/**
 * 显示带小尾巴的页面窗口 ----- x,y,z尾巴指向的位置
 * @param winId
 * @param x
 * @param y
 * @param z
 * @param component
 * @param position
 * @param width
 * @param height
 * @param offsetY
 * @param round
 * @param transparence
 * @param filePath
 * @constructor
 */
htmlWindow.ShowPopupWindowEx = function (winId, x, y, z, component, position, width, height, offsetX,offsetY, round, transparence, filePath) {
  var obj = null;
  if (typeof winId == "object") {
    obj = winId;
  } else {
    obj = {winId, position, width, height,offsetX, offsetY, round, transparence, filePath}
  }
  cwConfig.windowComponent = deepClone(component);
  cwConfig.winId = winId;
  let wp = createWindowParam(obj);
  cwConfig.point3D.setCoords(x, y, z, 0, 0);
  __g.htmlWindow.showPopupWindowEx(cwConfig.point3D, wp, true);
}


/**
 * 删除带有小尾巴的弹窗
 * @param winId
 */
htmlWindow.close = function (winId) {
  __g.htmlWindow.deletePopupWindow(winId);
}

