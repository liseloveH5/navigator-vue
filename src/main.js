// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


// 引用第三方UI框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);



// 引用过滤器
import * as filters from '@/services/filter'
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})


// 绑定全局对象Util
import Util from '@/services/Util.js'
window.util = new Util();



// 引用自己全局组建 components
import * as components from '@/components'
for (let plugin in components) {
  let currentPlugin = components[plugin];
  Vue.component(currentPlugin.name, currentPlugin)
}




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
