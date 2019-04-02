_Tools.addStorageEventListener(function () {

    return{
        handleFirstMenuClick:function (param) {
            LeftMenu.changeSelect(param)
            PanelUtil.showPanel(param)
            _Tools.triggerStorageEvent("firstMenuSelectChange",{menuName:param,menuConfig:ConfigUtil.getConfig("SECOND_LEVEL_MENU_CONFIG")[param]},EnumUtil.MessageType.broadcast);

        },
        handleSecondMenuClick:function (param) {
            PanelUtil.showSecondLevelPanel(param.menuId)
        }
    }

})