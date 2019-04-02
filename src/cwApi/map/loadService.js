export const loadService = {};
let loadedDataSource = {};//已经加载过的数据资源

let fcGroup = {}
let flGroup = {}
loadService.loadFDB = function (config) {
  //连接数据源
  let ds = openDataSource(config);
  if (ds) {
    let datasets = getFeatureDatasetNames(ds,config["dataSets"]);
    for (let fdsName of datasets) {
      //打开数据集
      var dataset = ds.openFeatureDataset(fdsName.dataSetName);
      var fcs = getFeatureClassList(dataset, fdsName.fcs)
      for (var fcInfo of fcs) {
        var fc = dataset.openFeatureClass(fcInfo.fcName);
        createFeatureLayer(fcInfo.name,fc,fcInfo.geoName)
      }
    }

  }

};


/**
 * 连接数据源
 * @param database
 */
function openDataSource(config) {
    let database = config["database"];
    let ds = loadedDataSource[database];
    if (ds) {
      return ds;
    }
    let c = __g.new_ConnectionInfo;
    c.connectionType = gviConnectionType[config.connectionType];
    c.database = database || "";
    c.server = config.server || "";
    c.port = config.port || 0;
    c.password = config.password || "";
    try {
      ds = __g.dataSourceFactory.openDataSource(c);
      console.log("连接数据源成功", database)
      //利用服务作为key来判断该资源是否打开了
      loadedDataSource[database] = ds;
    } catch (e) {
      console.error("连接数据源失败", e);
    } finally {
      return ds;
    }
}
function getFeatureDatasetNames(ds,dataSets) {
  if(!dataSets){
    var fdsNames = ds.getFeatureDatasetNames();
    dataSets = fdsNames.map(dataSetName=>({dataSetName}))
  }
  return dataSets;
}

/**
 * 获得FeatureClass的数据集合,判断是否根据配置项来解析
 */
function getFeatureClassList(dataset, fcs) {
  if (!fcs) {
    var fcNames = dataset.getNamesByType(gviDataSetType.gviDataSetFeatureClassTable);
    fcs = fcNames.map(item => ({"fcName": item, "name": item, "visible": true, "geoName": "Geometry"}));
  }
  return fcs;
}

/**
 * 创建指定风格的可视化矢量图层
 */
function createFeatureLayer(name,fc,geoName, textRender, geoRender) {
  //如果需要更改渲染效果，可以在这里处理
  flGroup[name] = __g.objectManager.createFeatureLayer(fc, geoName, textRender, geoRender, __rootId);
  fcGroup[name] = fc;
}
