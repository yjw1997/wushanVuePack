

var cmConfig = {
  // 数据服务
   ENV_DATA_SERVER :'192.168.1.123',
   ENV_DATA_SERVER_PORT :'8080',
  z: 43.79, // 每个地方的海拔高度不一样，所以写成配置项
  // 证书相关路径
  // license: {
  //     protocal: "http",
  //     host: "pinshan.cityworks.ascs.tech",
  //     port: ":80",
  //     licenseHost: "",
  //     path: LINE_URL + "/asset/lic/lic.lic",
  // },
  license: {
    protocal: 'http',
    host: 'pinshan.cityworks.ascs.tech',
    port: ':80',
    licenseHost: '',
    path: 'C:\\lic\\lic.lic'
  },
  // 天空盒资源
  skyboxnode: {
    BaseUrl: 'http://127.0.0.1/sky_img/',
    BackImage: '04_BK.jpg',
    BottomImage: '04_DN.jpg',
    FrontImage: '04_FR.jpg',
    LeftImage: '04_LF.jpg',
    RightImage: '04_RT.jpg',
    TopImage: '04_UP.jpg',
    BottomImage1: '00_DN_01.jpg'
  },
  // 最佳视角
  // bestView: {
  //     height: "1929.7024570901985",
  //     hAngle: "62.68574957697121",
  //     vAngle: "-27.219238536587348",
  //     x: "86784.34444368776",
  //     y: "29164.250984708302"
  // },
  bestView: {
    height: '204.04909284801224',
    hAngle: '-16.804074516224546',
    vAngle: '-38.834763862457514',
    x: '429093.4079257952',
    y: '2885380.1486459197'
  },
  viewRange: {
    minX: 413067,
    maxX: 456672,
    minY: 2872891,
    maxY: 2893846
  },
  exportImg: {
    rootDir: 'c:\\inetpub\\wwwroot\\',
    appDir: 'cwImages\\',
    url: 'http://127.0.0.1/'
  },
  eagleEye: {
    eyeWidth: 279,
    eyeHeight: 256,
    mapUrl: '/asset/images/map/map.png',
    arrowUrl: '/asset/images/map/move.png',
    viewRange: {}
  },
  mapBaseConfig: {
    host: this.ENV_CM_SERVER,
    port: this.ENV_CM_SERVER_PORT,
    maxVisibleDistance: 3000,
    minVisibleDistance: 15,
    minVisiblePixels: 20,
    service: {
      'citymaker': 'FUZHOU_201709161347_FDB',
      'citymakerTed': 'fuzhou_201711290925_ted',
      'cityMakerPipeLine': ''
    },
    type: 'citymaker'
  },
  sliderLayer: {
    names: ['地形', '福州精细模型地面与道路植被', '福州精细模型地面与道路交通', '福州精细模型地面与道路场地', '场地模型仓山场地', '交通模型仓山交通'] // 头部滑动条控制的图层
  },
  fadeHoleLayer: {
    // 挖洞图层
    names: ['地形', '福州精细模型地面与道路植被', '福州精细模型地面与道路交通', '福州精细模型地面与道路场地', '场地模型仓山场地', '交通模型仓山交通',
      '市政府场地', '福州精细模型场地其他',
      '铁通管线', '雨水管点', '军用通讯管点', '讯通管点', '温泉管点', '天然气管线', '电信管点', '移动管线', '给水管线', '石油管点', '联通管线', '石油管线',
      '污水管线', '讯通管线', '天然气管点', '温泉管线', '电信管线', '铁通管点', '交通信号管线', '移动管点', '路灯管线', '给水管点', '网通管线', '路灯管点',
      '联通管点', '雨水管线', '污水管点', '军用通讯管线', '交通信号管点', '网通管点']
  },
  // 三维画线方法
  drawLine: {
    // 三维内线条颜色,以字符串形式写入，例如："#FFFF00"
    colorArray: []
  },
  measurePip: {
    x: 426679.4982680534,
    y: 2881218.7575802603,
    z: 19.984258542157235,
    tilt: -21.487741999801511,
    heading: 64.972104994492867,
    flyTime: 3,
    flyMode: 1
  },
  tedService: {
    'name': '0412',
    'aliceName': '地形',
    'dataSet': '0412',
    'featureClassName': '0403',
    'geoName': 'Geometry',
    'visible': true,
    'password': '',
    'host': 'arcgis.cityworks.cn',
    'port': '8040',
    'type': 'citymakerTed',
    'service': 'fz_201804162238_ted',
    //    "service": "yijin_201807121108_ted",
    'ConnectionType': 'gviConnectionCms7Http',
    'opacity': 1,
    'demAvailable': true
  },
  layerServiceGroup: [
    //    {

    //    "dataSet": "建筑精简",
    //    "service": projectUrl + "\\asset\\data\\pssw\\building.FDB",
    //    "geoName": "Geometry",
    //    "visible": true,
    //    "password": "",
    //    "ConnectionType": "gviConnectionFireBird2x",
    //    "host": "arcgis.cityworks.cn",
    //    "port": "8040",
    //    //"name": ["building", "dimian", "tree", "xiaofangche", "公告牌", "其他设施", "变电箱", "摄像头", "消防栓", "灭火器", "电灯", "红绿灯", "蓄水池"],
    //    //"aliceName": ["建筑", "地面", "树木", "消防车", "公告牌", "其他设施", "变电箱", "摄像头", "消防栓", "灭火器", "电灯", "红绿灯", "蓄水池"],
    //    "name": ["building", "dimian", "tree"],
    //    "aliceName": ["建筑", "地面", "树木"],
    //    "maxVisibleDistance": 3000,
    //    "minVisibleDistance": 15,
    //    "minVisiblePixels": 20,
    // }

    //    ,
    // {

    //    "dataSet": "仓山三维样例数据",
    //    "service": "fz_201803291617_part1",
    //    "geoName": "Geometry",
    //    "visible": true,
    //    "password": "",
    //    "ConnectionType": "gviConnectionFireBird2x",
    //    "host": "arcgis.cityworks.cn",
    //    "port": "8040",
    //    //"name": ["building", "dimian", "tree", "xiaofangche", "公告牌", "其他设施", "变电箱", "摄像头", "消防栓", "灭火器", "电灯", "红绿灯", "蓄水池"],
    //    //"aliceName": ["建筑", "地面", "树木", "消防车", "公告牌", "其他设施", "变电箱", "摄像头", "消防栓", "灭火器", "电灯", "红绿灯", "蓄水池"],
    //    "name": ["building", "dimian", "tree"],
    //    "aliceName": ["建筑", "地面", "树木"],
    //    "maxVisibleDistance": 3000,
    //    "minVisibleDistance": 15,
    //    "minVisiblePixels": 20,
    // }, {

    //    "dataSet": "三维模型数据",
    //    "service": "fz_201803291617_part2",
    //    "geoName": "Geometry",
    //    "visible": true,
    //    "password": "",
    //    "ConnectionType": "gviConnectionFireBird2x",
    //    "host": "arcgis.cityworks.cn",
    //    "port": "8040",
    //    //"name": ["building", "dimian", "tree", "xiaofangche", "公告牌", "其他设施", "变电箱", "摄像头", "消防栓", "灭火器", "电灯", "红绿灯", "蓄水池"],
    //    //"aliceName": ["建筑", "地面", "树木", "消防车", "公告牌", "其他设施", "变电箱", "摄像头", "消防栓", "灭火器", "电灯", "红绿灯", "蓄水池"],
    //    "name": ["building", "dimian", "tree"],
    //    "aliceName": ["建筑", "地面", "树木"],
    //    "maxVisibleDistance": 3000,
    //    "minVisibleDistance": 15,
    //    "minVisiblePixels": 20,
    // }, {

    //    "dataSet": "三维精细模型",
    //    "service": "fz_201803291617_part3",
    //    "geoName": "Geometry",
    //    "visible": true,
    //    "password": "",
    //    "ConnectionType": "gviConnectionFireBird2x",
    //    "host": "arcgis.cityworks.cn",
    //    "port": "8040",
    //    //"name": ["building", "dimian", "tree", "xiaofangche", "公告牌", "其他设施", "变电箱", "摄像头", "消防栓", "灭火器", "电灯", "红绿灯", "蓄水池"],
    //    //"aliceName": ["建筑", "地面", "树木", "消防车", "公告牌", "其他设施", "变电箱", "摄像头", "消防栓", "灭火器", "电灯", "红绿灯", "蓄水池"],
    //    "name": ["building", "dimian", "tree"],
    //    "aliceName": ["建筑", "地面", "树木"],
    //    "maxVisibleDistance": 3000,
    //    "minVisibleDistance": 15,
    //    "minVisiblePixels": 20,
    // },
    // {
    //   'dataSet': '三维精细模型',
    //   'service': 'fz_201803291617_fuzhou',
    //   'geoName': 'Geometry',
    //   'visible': true,
    //   'password': '',
    //   'ConnectionType': 'gviConnectionCms7Http',
    //   'host': '11.23.254.232',
    //   'port': '8040',
    //   // "name": ["building", "dimian", "tree", "xiaofangche", "公告牌", "其他设施", "变电箱", "摄像头", "消防栓", "灭火器", "电灯", "红绿灯", "蓄水池"],
    //   // "aliceName": ["建筑", "地面", "树木", "消防车", "公告牌", "其他设施", "变电箱", "摄像头", "消防栓", "灭火器", "电灯", "红绿灯", "蓄水池"],
    //   'name': ['building', 'dimian', 'tree'],
    //   'aliceName': ['建筑', '地面', '树木'],
    //   'maxVisibleDistance': 3000,
    //   'minVisibleDistance': 15,
    //   'minVisiblePixels': 20
    // }, {
    //   'dataSet': '三维精细模型',
    //   'service': 'fz_201803291617_cangshan',
    //   'geoName': 'Geometry',
    //   'visible': true,
    //   'password': '',
    //   'ConnectionType': 'gviConnectionCms7Http',
    //   'host': '11.23.254.232',
    //   'port': '8040',
    //   // "name": ["building", "dimian", "tree", "xiaofangche", "公告牌", "其他设施", "变电箱", "摄像头", "消防栓", "灭火器", "电灯", "红绿灯", "蓄水池"],
    //   // "aliceName": ["建筑", "地面", "树木", "消防车", "公告牌", "其他设施", "变电箱", "摄像头", "消防栓", "灭火器", "电灯", "红绿灯", "蓄水池"],
    //   'name': ['building', 'dimian', 'tree'],
    //   'aliceName': ['建筑', '地面', '树木'],
    //   'maxVisibleDistance': 3000,
    //   'minVisibleDistance': 15,
    //   'minVisiblePixels': 20
    // },
    {
      'dataSet': '乌山精模',
      'service': 'wushan_201804141824_jingmo',
      'geoName': 'Geometry',
      'visible': true,
      'password': '',
      'ConnectionType': 'gviConnectionCms7Http',
      'host': 'arcgis.cityworks.cn',
      'port': '8040',
      // "name": ["building", "dimian", "tree", "xiaofangche", "公告牌", "其他设施", "变电箱", "摄像头", "消防栓", "灭火器", "电灯", "红绿灯", "蓄水池"],
      // "aliceName": ["建筑", "地面", "树木", "消防车", "公告牌", "其他设施", "变电箱", "摄像头", "消防栓", "灭火器", "电灯", "红绿灯", "蓄水池"],
      'name': ['building', 'dimian', 'tree'],
      'aliceName': ['建筑', '地面', '树木'],
      'maxVisibleDistance': 3000,
      'minVisibleDistance': 15,
      'minVisiblePixels': 20
    }
    // ,

    // {
    //    "dataSet": "DataSet_GEO_Actuality",
    //    "service": projectUrl + "\\asset\\data\\pssw\\PIPE.FDB",
    //    "geoName": "Geometry",
    //    "visible": true,
    //    "password": "",
    //    "name": ["FC_0_1d8a5b014c2083700d390000", "FC_0_783a5b014c2083700d300000", "FC_0_e06e5b014c2083700d360000", "FC_0_e4555b014c2083700d330000"],
    //    "aliceName": ["雨水管点", "污水管线", "雨水管线", "污水管点"],
    //    "ConnectionType": "gviConnectionFireBird2x",
    //    "host": "arcgis.cityworks.cn",
    //    "port": "8040",
    //    "maxVisibleDistance": 1000
    //    ,
    //    "minVisibleDistance": 0.1
    //    ,
    //    "minVisiblePixels": 0.1
    // }, {
    //    "dataSet": "qita",
    //    "service": projectUrl + "\\asset\\data\\pssw\\PIPE.FDB",
    //    "geoName": "Geometry",
    //    "visible": true,
    //    "password": "",
    //    "name": ["污水管线", "雨水管线"],
    //    "aliceName": ["污水SHP", "雨水SHP"],
    //    "GeoSymbol": "/asset/xml/gx.xml",
    //    "ConnectionType": "gviConnectionFireBird2x",
    //    "host": "arcgis.cityworks.cn",
    //    "port": "8040",
    //    "maxVisibleDistance": 1000
    //    ,
    //    "minVisibleDistance": 0.1
    //    ,
    //    "minVisiblePixels": 0.1
    // }

  ],
  BIMLayerGroup: [
    // {
    //   'service': 'wushan_20180910_1haodamen',
    //   'geoName': 'Geometry',
    //   'visible': false,
    //   'password': '',
    //   'name': ['Architecture', 'Other', 'Structure', 'MEP'],
    //   'aliceName': ['SZH-办公楼B-综合_rvt_Architecture', 'SZH-办公楼B-综合_rvt_Other', 'SZH-办公楼B-综合_rvt_Structure', 'SZH-办公楼B-综合_rvt_MEP'],
    //   'ConnectionType': 'gviConnectionCms7Http',
    //   'host': 'arcgis.cityworks.cn',
    //   'port': '8040',
    //   'maxVisibleDistance': 5000,
    //   'minVisibleDistance': 0.1,
    //   'minVisiblePixels': 0.1
    // }, {
    //   'service': 'wushan_20180910_2haodamen',
    //   'geoName': 'Geometry',
    //   'visible': false,
    //   'password': '',
    //   'name': ['Architecture', 'Other', 'Structure', 'MEP'],
    //   'aliceName': ['SZH-办公楼B-综合_rvt_Architecture', 'SZH-办公楼B-综合_rvt_Other', 'SZH-办公楼B-综合_rvt_Structure', 'SZH-办公楼B-综合_rvt_MEP'],
    //   'ConnectionType': 'gviConnectionCms7Http',
    //   'host': 'arcgis.cityworks.cn',
    //   'port': '8040',
    //   'maxVisibleDistance': 5000,
    //   'minVisibleDistance': 0.1,
    //   'minVisiblePixels': 0.1
    // }, {
    //   'service': 'wushan_20180910_10haolou',
    //   'geoName': 'Geometry',
    //   'visible': false,
    //   'password': '',
    //   'name': ['Architecture', 'Other', 'Structure', 'MEP'],
    //   'aliceName': ['SZH-办公楼B-综合_rvt_Architecture', 'SZH-办公楼B-综合_rvt_Other', 'SZH-办公楼B-综合_rvt_Structure', 'SZH-办公楼B-综合_rvt_MEP'],
    //   'ConnectionType': 'gviConnectionCms7Http',
    //   'host': 'arcgis.cityworks.cn',
    //   'port': '8040',
    //   'maxVisibleDistance': 5000,
    //   'minVisibleDistance': 0.1,
    //   'minVisiblePixels': 0.1
    // }, {
    //   'service': 'wushan_20180910_gumiao',
    //   'geoName': 'Geometry',
    //   'visible': false,
    //   'password': '',
    //   'name': ['Architecture', 'Other', 'Structure', 'MEP'],
    //   'aliceName': ['SZH-办公楼B-综合_rvt_Architecture', 'SZH-办公楼B-综合_rvt_Other', 'SZH-办公楼B-综合_rvt_Structure', 'SZH-办公楼B-综合_rvt_MEP'],
    //   'ConnectionType': 'gviConnectionCms7Http',
    //   'host': 'arcgis.cityworks.cn',
    //   'port': '8040',
    //   'maxVisibleDistance': 5000,
    //   'minVisibleDistance': 0.1,
    //   'minVisiblePixels': 0.1
    // }, {
    //   'service': 'wushan_20180910_guting',
    //   'geoName': 'Geometry',
    //   'visible': false,
    //   'password': '',
    //   'name': ['Architecture', 'Other', 'Structure', 'MEP'],
    //   'aliceName': ['SZH-办公楼B-综合_rvt_Architecture', 'SZH-办公楼B-综合_rvt_Other', 'SZH-办公楼B-综合_rvt_Structure', 'SZH-办公楼B-综合_rvt_MEP'],
    //   'ConnectionType': 'gviConnectionCms7Http',
    //   'host': 'arcgis.cityworks.cn',
    //   'port': '8040',
    //   'maxVisibleDistance': 5000,
    //   'minVisibleDistance': 0.1,
    //   'minVisiblePixels': 0.1
    // }, {
    //   'service': 'wushan_20180910_houmenfang',
    //   'geoName': 'Geometry',
    //   'visible': false,
    //   'password': '',
    //   'name': ['Architecture', 'Other', 'Structure', 'MEP'],
    //   'aliceName': ['SZH-办公楼B-综合_rvt_Architecture', 'SZH-办公楼B-综合_rvt_Other', 'SZH-办公楼B-综合_rvt_Structure', 'SZH-办公楼B-综合_rvt_MEP'],
    //   'ConnectionType': 'gviConnectionCms7Http',
    //   'host': 'arcgis.cityworks.cn',
    //   'port': '8040',
    //   'maxVisibleDistance': 5000,
    //   'minVisibleDistance': 0.1,
    //   'minVisiblePixels': 0.1
    // }, {
    //   'service': 'wushan_20180910_houshanxiaolou',
    //   'geoName': 'Geometry',
    //   'visible': false,
    //   'password': '',
    //   'name': ['Architecture', 'Other', 'Structure', 'MEP'],
    //   'aliceName': ['SZH-办公楼B-综合_rvt_Architecture', 'SZH-办公楼B-综合_rvt_Other', 'SZH-办公楼B-综合_rvt_Structure', 'SZH-办公楼B-综合_rvt_MEP'],
    //   'ConnectionType': 'gviConnectionCms7Http',
    //   'host': 'arcgis.cityworks.cn',
    //   'port': '8040',
    //   'maxVisibleDistance': 5000,
    //   'minVisibleDistance': 0.1,
    //   'minVisiblePixels': 0.1
    // }
  ],
  lastLayerGroup: [
    {
      'service': 'wushan_20180910_1haodamen',
      'geoName': 'Geometry',
      'visible': false,
      'password': '',
      'name': ['Architecture', 'Other', 'Structure', 'MEP'],
      'aliceName': ['SZH-办公楼B-综合_rvt_Architecture', 'SZH-办公楼B-综合_rvt_Other', 'SZH-办公楼B-综合_rvt_Structure', 'SZH-办公楼B-综合_rvt_MEP'],
      'ConnectionType': 'gviConnectionCms7Http',
      'host': 'arcgis.cityworks.cn',
      'port': '8040',
      'maxVisibleDistance': 5000,
      'minVisibleDistance': 0.1,
      'minVisiblePixels': 0.1
    }, {
      'service': 'wushan_20180910_2haodamen',
      'geoName': 'Geometry',
      'visible': false,
      'password': '',
      'name': ['Architecture', 'Other', 'Structure', 'MEP'],
      'aliceName': ['SZH-办公楼B-综合_rvt_Architecture', 'SZH-办公楼B-综合_rvt_Other', 'SZH-办公楼B-综合_rvt_Structure', 'SZH-办公楼B-综合_rvt_MEP'],
      'ConnectionType': 'gviConnectionCms7Http',
      'host': 'arcgis.cityworks.cn',
      'port': '8040',
      'maxVisibleDistance': 5000,
      'minVisibleDistance': 0.1,
      'minVisiblePixels': 0.1
    }, {
      'service': 'wushan_20180910_10haolou',
      'geoName': 'Geometry',
      'visible': false,
      'password': '',
      'name': ['Architecture', 'Other', 'Structure', 'MEP'],
      'aliceName': ['SZH-办公楼B-综合_rvt_Architecture', 'SZH-办公楼B-综合_rvt_Other', 'SZH-办公楼B-综合_rvt_Structure', 'SZH-办公楼B-综合_rvt_MEP'],
      'ConnectionType': 'gviConnectionCms7Http',
      'host': 'arcgis.cityworks.cn',
      'port': '8040',
      'maxVisibleDistance': 5000,
      'minVisibleDistance': 0.1,
      'minVisiblePixels': 0.1
    }, {
      'service': 'wushan_20180910_gumiao',
      'geoName': 'Geometry',
      'visible': false,
      'password': '',
      'name': ['Architecture', 'Other', 'Structure', 'MEP'],
      'aliceName': ['SZH-办公楼B-综合_rvt_Architecture', 'SZH-办公楼B-综合_rvt_Other', 'SZH-办公楼B-综合_rvt_Structure', 'SZH-办公楼B-综合_rvt_MEP'],
      'ConnectionType': 'gviConnectionCms7Http',
      'host': 'arcgis.cityworks.cn',
      'port': '8040',
      'maxVisibleDistance': 5000,
      'minVisibleDistance': 0.1,
      'minVisiblePixels': 0.1
    }, {
      'service': 'wushan_20180910_guting',
      'geoName': 'Geometry',
      'visible': false,
      'password': '',
      'name': ['Architecture', 'Other', 'Structure', 'MEP'],
      'aliceName': ['SZH-办公楼B-综合_rvt_Architecture', 'SZH-办公楼B-综合_rvt_Other', 'SZH-办公楼B-综合_rvt_Structure', 'SZH-办公楼B-综合_rvt_MEP'],
      'ConnectionType': 'gviConnectionCms7Http',
      'host': 'arcgis.cityworks.cn',
      'port': '8040',
      'maxVisibleDistance': 5000,
      'minVisibleDistance': 0.1,
      'minVisiblePixels': 0.1
    }, {
      'service': 'wushan_20180910_houmenfang',
      'geoName': 'Geometry',
      'visible': false,
      'password': '',
      'name': ['Architecture', 'Other', 'Structure', 'MEP'],
      'aliceName': ['SZH-办公楼B-综合_rvt_Architecture', 'SZH-办公楼B-综合_rvt_Other', 'SZH-办公楼B-综合_rvt_Structure', 'SZH-办公楼B-综合_rvt_MEP'],
      'ConnectionType': 'gviConnectionCms7Http',
      'host': 'arcgis.cityworks.cn',
      'port': '8040',
      'maxVisibleDistance': 5000,
      'minVisibleDistance': 0.1,
      'minVisiblePixels': 0.1
    }, {
      'service': 'wushan_20180910_houshanxiaolou',
      'geoName': 'Geometry',
      'visible': false,
      'password': '',
      'name': ['Architecture', 'Other', 'Structure', 'MEP'],
      'aliceName': ['SZH-办公楼B-综合_rvt_Architecture', 'SZH-办公楼B-综合_rvt_Other', 'SZH-办公楼B-综合_rvt_Structure', 'SZH-办公楼B-综合_rvt_MEP'],
      'ConnectionType': 'gviConnectionCms7Http',
      'host': 'arcgis.cityworks.cn',
      'port': '8040',
      'maxVisibleDistance': 5000,
      'minVisibleDistance': 0.1,
      'minVisiblePixels': 0.1
    }
  ]
}
export default cmConfig;
