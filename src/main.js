// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import https from './https/https'
import tools from './js/tools'
import router from './router'
import promise from 'es6-promise'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "./assets/style/element-custom.css"
import eventEnum from './js/eventEnums'
import EnumUtil from './js/EnumUtil'

import gojs from 'gojs'
Vue.prototype.go = gojs
window._$eventEnums = eventEnum;
promise.polyfill()
Vue.config.productionTip = false
window.$https = https
window._Tools = tools
window.EnumUtil = EnumUtil
Vue.use(ElementUI)
if (module.hot) {
  module.hot.accept()
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
  App},
  template: '<App/>'
})
