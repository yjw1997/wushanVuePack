import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/dev',
    name: 'DevEntry',
    component: resolve => require(['@/components/DevEntry'], resolve),
    children: [
      {
      path: '/devPage/:routerPath',
      component: resolve => require(['@/components/DevShowWindow'], resolve),
      props: true
    } ,
      {
      path: '/devPage/:routerPath/:routerPath2',
      component: resolve => require(['@/components/DevShowWindow'], resolve),
      props: true
    }
    ]
  },
    {
      path: '/CityMaker',
      name: 'CityMaker',
      component: resolve => require(['@/components/CityMaker'], resolve)
    },
    {
      path: '/DataShowIndex',
      name: 'DataShowIndex',
      component: resolve => require(['@/components/DataShowIndex'], resolve)
    },
    {
      path: '/CommonPage/MenuBar',
      name: '/CommonPage/MenuBar',
      component: resolve => require(['@/components/CommonPage/MenuBar'], resolve)
    },
    {
      path: '/CommonPage/LeftPanel',
      name: '/CommonPage/LeftPanel',
      component: resolve => require(['@/components/CommonPage/LeftPanel'], resolve)
    },
    {
      path: '/CommonPage/WeatherHeaderPanel',
      name: '/CommonPage/WeatherHeaderPanel',
      component: resolve => require(['@/components/CommonPage/WeatherHeaderPanel'], resolve)
    },
    {
      path: '/CommonPage/ToolBarHeaderPanel',
      name: '/CommonPage/ToolBarHeaderPanel',
      component: resolve => require(['@/components/CommonPage/ToolBarHeaderPanel'], resolve)
    },
    {
      path: '/CommonPage/EventDetail',
      name: 'EventDetail',
      component: resolve => require(['@/components/CommonPage/EventDetail'], resolve)
    },
    {
      path: '/CommonPage/BottomMenu',
      name: 'BottomMenu',
      component: resolve => require(['@/components/CommonPage/BottomMenu'], resolve)
    },
    {
      path: '/Security/LeftPanel',
      name: '/Security/LeftPanel',
      component: resolve => require(['@/components/Security/LeftPanel'], resolve)
    },
    {
      path: '/Security/RightPanel',
      name: '/Security/RightPanel',
      component: resolve => require(['@/components/Security/RightPanel'], resolve)
    },
    {
      path: '/Fire/LeftPanel',
      name: '/Fire/LeftPanel',
      component: resolve => require(['@/components/Fire/LeftPanel'], resolve)
    },
    {
      path: '/Fire/RightPanel',
      name: '/Fire/RightPanel',
      component: resolve => require(['@/components/Fire/RightPanel'], resolve)
    }
  ]
})
