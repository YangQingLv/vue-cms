// 入口文件
import Vue from 'vue'

// 1. 导入 vue-router 路由 包 
import VueRouter from 'vue-router'
// 2. 手动安装路由
Vue.use(VueRouter)
  
// 按需导入 Mint-UI 中的组件
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

// 导入App 跟组件
import App from './App'

// 导入自己的 router.js 路由模块
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: c => c(app),
  router,
  components: { App },
  template: '<App/>'
})
