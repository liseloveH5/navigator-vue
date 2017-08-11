import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    //默认地址
    {
      path:'/',
      redirect:'/demo'
    },
    {
      path: '/demo',
      component: r => require.ensure([], () => r(require('../views/demo/navigator/index.vue')),'curtain'),
    },



  ]
})
