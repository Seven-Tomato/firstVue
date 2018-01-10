import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/home'
import '@/assets/css/reset'
import '@/assets/css/font/iconfont'
Vue.config.productionTip = false
let vm = new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: {
    App
  }
})
Vue.use({
  vm
})
