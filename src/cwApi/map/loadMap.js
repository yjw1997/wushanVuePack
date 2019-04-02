import {skybox} from "@/cwApi/skybox/skybox";

export const loadMap = {};
loadMap.init = (__g) => {
  window.__g = __g;
  // 初始化RenderControl控件
  if (!initAxControl()) {
    //失败
    return false;
  }
  // 获取根节点ID，也可直接用字符串"11111111-1111-1111-1111-111111111111"
  window.__rootId = __g.objectManager.getProjectTree().rootID;
  //设置天空盒
  skybox.change();
  //设置全局变量
  setGlobalParams();
};

/**
 * 设置全局变量
 */
function setGlobalParams()
{
  cwConfig.vector3 = __g.new_Vector3;
  cwConfig.eulerAngle = __g.new_EulerAngle;
  cwConfig.point3D = __g.geometryFactory.createGeometry(gviGeometryType.gviGeometryPoint, gviVertexAttribute.gviVertexAttributeZ);
}

/**
 * 初始化RenderControl控件
 * @returns {boolean}
 */
function initAxControl() {
  //定义用户数据的接口，用于获取或设置用户数据
  var ps = __g.new_PropertySet;
  //RenderSystem 渲染系统类型。取值为：OpenGL、D3D
  ps.setProperty("RenderSystem", "OpenGL");
  //初始化三维窗口。
  // 参数1：渲染系统的地形类型，是否是平面。默认值为true，设false就是地球
  //参数2：设置初始化配置参数
  var bInit = __g.initialize(true, ps);
  if (!bInit) {
    alert("三维控件初始化失败!");
    return false;
  } else {
    return true;
  }
}
