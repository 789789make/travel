// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'style/iconfont.css'
import 'style/reset.css'
import 'style/border.css'


Vue.config.productionTip = false
fastClick.attach(document.body);//快速点击，移动端click有300ms延迟

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
