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
// 配置vue-resource的请求根域名
Vue.http.options.root = 'http://www.lovegf.cn:8899/'

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器(时间)    
//          过滤器名                      传入的时间
Vue.filter('dateFormat',function (dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') {  
  // 直接调用表示获取当前时间
  return moment(dateStr).format(pattern)
})

// 全局设置 post 时候表单数据的格式组织形式    X-HTTP-Method-Override
Vue.http.options.emulateHTTP = true;

// 按需导入 Mint-UI 中的组件
import { Header, Swipe, SwipeItem , Button} from 'mint-ui';

// 注册组件
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

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
