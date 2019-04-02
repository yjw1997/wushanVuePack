export const camera = {};
/**
 * 设置相机位置-----不考虑坐标系----允许传入JSON对象， 例如：{x:0,y:0,z:0,heading:0,tilt:0,roll:0,flag:0}
 * @param x X坐标
 * @param y Y坐标
 * @param z Z坐标
 * @param heading 水平角
 * @param tilt 俯仰角
 * @param roll 倾斜角
 * @param flyTime 飞行时间
 * @param flag 决定位置和转向参数值是否修改为新值(默认值为0)，取0时参数均修改为新值
 */
camera.setCamera = function (x, y, z, heading = 0, tilt = 0, roll = 0, flyTime = 2, flag = gviSetCameraFlags.gviSetCameraNoFlags) {
  if(typeof x == "object"){
    let obj = x;
    x = obj.x;
    y = obj.y;
    z = obj.z;
    heading = obj.heading || heading;
    tilt = obj.tilt || tilt;
    roll = obj.roll || roll;
    flyTime = obj.flyTime || flyTime;
    flag = obj.flag || flag;
  }
  let v3 = cwConfig.vector3;
  let ea = cwConfig.eulerAngle;
  v3.set(x,y,z)
  ea.set( heading,tilt,roll)
  __g.camera.flyTime = flyTime;
  __g.camera.setCamera(v3, ea, flag);
};
/**
 * 设置相机位置-----考虑坐标系
 * @param point 三维的点位对象
 * @param heading 水平角
 * @param tilt 俯仰角
 * @param roll 倾斜角
 * @param flyTime 飞行时间
 * @param flag 决定位置和转向参数值是否修改为新值(默认值为0)，取0时参数均修改为新值
 */
camera.setCamera2 = function (point, heading = 0, tilt = 0, roll = 0, flyTime = 2, flag = gviSetCameraFlags.gviSetCameraNoFlags) {
  let ea = cwConfig.eulerAngle;
  ea.set( heading,tilt,roll)
  __g.camera.flyTime = flyTime;
  __g.camera.setCamera2(point, ea, flag);
}

/**
 *飞到指定位置 --不考虑坐标系--- 可以设置距离指定位置的距离
 * @param x X坐标
 * @param y Y坐标
 * @param z Z坐标
 * @param distance 距离指定点的距离
 * @param heading 水平角
 * @param tilt 俯仰角
 * @param roll 倾斜角
 * @param flyTime 飞行时间
 */
camera.lookAt = function (x, y, z,distance, heading = 0, tilt = 0, roll = 0, flyTime = 2) {
  if(typeof x == "object"){
    let obj = x;
    x = obj.x;
    y = obj.y;
    z = obj.z;
    distance = obj.distance;
    heading = obj.heading || heading;
    tilt = obj.tilt || tilt;
    roll = obj.roll || roll;
    flyTime = obj.flyTime || flyTime;
  }
  let v3 = cwConfig.vector3;
  let ea = cwConfig.eulerAngle;
  v3.set(x,y,z)
  ea.set( heading,tilt,roll)
  __g.camera.flyTime = flyTime;
  __g.camera.lookAt(v3, distance, ea);
}

/**
 *飞到指定位置 --考虑坐标系--- 可以设置距离指定位置的距离
 * @param point 三维的点位对象
 * @param distance 距离指定点的距离
 * @param heading 水平角
 * @param tilt 俯仰角
 * @param roll 倾斜角
 * @param flyTime 飞行时间
 */
camera.lookAt2 = function (point,distance, heading = 0, tilt = 0, roll = 0, flyTime = 2) {
  let ea = cwConfig.eulerAngle;
  ea.set( heading,tilt,roll)
  __g.camera.flyTime = flyTime;
  __g.camera.lookAt2(point, distance, ea);
}
