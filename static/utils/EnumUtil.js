
var EnumUtil= {
    //localstorage储存的消息类型,
    MessageType : {
        queue:"queue", //消费类型,消费即销毁
        broadcast:"broadcast", //广播模式,按ttl时间进行销毁,
        static:"static" //应该有个静态类,用于存储数据,永不销毁
    },
    EventsEnum:{
        type:{
            anfang:"1",//安防应急事件
            xiaofang:"2",//消防应急
            others:"0",//其他应急事件
        },
        status:{
            processing:"1",//正在处理
            untreated:"2",//未处理事件,
            processed:"3",//已处理事件
        }
    }
}