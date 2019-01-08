import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/index'
import city from '@/pages/city/city'
import detail from '@/pages/detail/detail'
//提前加载
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
      // component: ()=> import ('@/pages/home/index')//按需加载,适合大型.js文件
    },
    {
    	path: '/city',
    	name: 'city',
      component: city
    	// component: ()=> import ('@/pages/city/city')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
      // component: ()=> import ('@/pages/detail/detail')
    },
  ],
  scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
}
})
