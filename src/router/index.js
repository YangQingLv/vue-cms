import Vue from 'vue'
import Router from 'vue-router'

import homeComponent from '../pages/home/'
import memberComponent from '../pages/member/'
import shopcarComponent from '../pages/shopcar/'
import searchComponent from '../pages/search/'
import newsListComponent from '../pages/home/newsList/'
import newsInfoComponent from '../pages/home/newsInfo/'
import photosListComponent from "../pages/home/photosList/"
import goodsListComponent from "../pages/home/goodsList/"

Vue.use(Router)

export default new Router({
  routes: [ // 配置路由规则
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: homeComponent
    },
    {
      path: '/member',
      component: memberComponent
    },
    {
      path: '/shopcar',
      component: shopcarComponent
    },
    {
      path: '/search',
      component: searchComponent
    },
    {
      path: '/home/newsList',
      component: newsListComponent
    },
    {
      path: '/home/newsInfo/:id',
      component: newsInfoComponent
    },
    {
      path: '/home/photosList',
      component: photosListComponent
    },
    {
      path: '/home/goodsList/:id',
      component: goodsListComponent
    }
  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类, 默认的类叫做  router-link-active
})
