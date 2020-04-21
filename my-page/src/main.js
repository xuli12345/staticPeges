// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "@/assets/css/style.css"
import "@/assets/css/common.css"
import VueAwesomeSwiper from 'vue-awesome-swiper'



// require styles
import 'swiper/dist/css/swiper.css'

 Vue.use(VueAwesomeSwiper)
 import "@/assets/fonts/iconfont.css"
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
