import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // 默认地址
    {
      path:'/',
      redirect:'/main'
    },
    // 主页
    {
      path: '/main',
      component: r => require.ensure([], () => r(require('../views/index.vue')),'main'),
    },
    // 列表页
    {
      path: '/list',
      component: r => require.ensure([], () => r(require('../views/list/index.vue')),'main'),
    },
    // 表单页
    {
      path: '/form',
      component: r => require.ensure([], () => r(require('../views/form/index.vue')),'main'),
    },
    // 普通页
    {
      path: '/common',
      component: r => require.ensure([], () => r(require('../views/common/index.vue')),'main'),
    },
    // 404
    {
      path: '/404',
      component: r => require.ensure([], () => r(require('../views/404/index.vue')),'main'),
    },



  ]
})
