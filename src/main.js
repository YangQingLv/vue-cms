// 入口文件
import Vue from 'vue'

// 1. 导入 vue-router 路由 包 
import VueRouter from 'vue-router'
// 2. 手动安装路由
Vue.use(VueRouter)
  
// 导入自己的router.js 路由模块
import router from './router/'

// 导入 vue-resource 
import vueResource from 'vue-resource'
// 安装 vue-resource 
Vue.use(vueResource)

// 按需导入 Mint-UI 中的组件
import { Header, Swipe, SwipeItem } from 'mint-ui';

// 注册组件
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入mui的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'


// 导入App 跟组件
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: c => c(app),
  router,
  components: { App },
  template: '<App/>'
})
