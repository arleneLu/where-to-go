// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store/index"
import '../static/css/reset.css'
import '../static/css/border.css'
import '../static/css/font/iconfont.css'
import vueAwesomeSwiper from "vue-awesome-swiper"
import fastClick from "fastclick"



Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(vueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
