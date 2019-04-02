export const skybox = {};
skybox.change = function (type) {
  let pathObj = skybox.format(type);
  skybox.switchSkyBox(pathObj)
}
/**
 * 格式化天空盒数据
 * @param type  路径的中间引导   组成：http://127.0.0.1:8080/static/images/skybox/01/BK.jpg
 * @returns {{backImg: string, bottomImg: string, frontImg: string, leftImg: string, rightImg: string, topImg: string}}
 */
skybox.format = function (type = '01') {
  let skyboxPath = resourcesUrl + "/static/images/cw/skybox/";
  return {
    backImg: skyboxPath + type + "/BK.jpg",
    bottomImg: skyboxPath + type + "/DN.jpg",
    frontImg: skyboxPath + type + "/FR.jpg",
    leftImg: skyboxPath + type + "/LF.jpg",
    rightImg: skyboxPath + type + "/RT.jpg",
    topImg: skyboxPath + type + "/UP.jpg"
  }
}

/**
 * 设置和却换天空盒
 * @param skyboxPath
 */
skybox.switchSkyBox = function (skyboxPath) {
  // 设置天空盒
  let skyboxObj = __g.objectManager.getSkyBox(0);
  skyboxObj.setImagePath(gviSkyboxImageIndex.gviSkyboxImageBack, skyboxPath.backImg);
  skyboxObj.setImagePath(gviSkyboxImageIndex.gviSkyboxImageBottom, skyboxPath.bottomImg);
  skyboxObj.setImagePath(gviSkyboxImageIndex.gviSkyboxImageFront, skyboxPath.frontImg);
  skyboxObj.setImagePath(gviSkyboxImageIndex.gviSkyboxImageLeft, skyboxPath.leftImg);
  skyboxObj.setImagePath(gviSkyboxImageIndex.gviSkyboxImageRight, skyboxPath.rightImg);
  skyboxObj.setImagePath(gviSkyboxImageIndex.gviSkyboxImageTop, skyboxPath.topImg);
}
