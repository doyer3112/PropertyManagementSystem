// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import VueSwiper from 'vue-awesome-swiper'
import lodash from 'lodash'
import axios from 'axios'
// import Sidentify from './components/page/identify'
import 'swiper/dist/css/swiper.css'

require('./mock.js')
Vue.prototype._ = lodash
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(VueSwiper)
Vue.use(ElementUI)
router.beforeEach((to, from, next) => {
  if (lodash.isUndefined(window.localStorage.user) && to.path !== '/login' && to.path !== '/register') {
    return next({ path: '/login' })
  }
  next()
})
// Vue.use(Sidentify)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
