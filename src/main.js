import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import zhUI from './components/base/index'
import './components/base/index.scss'
import './assets/theme/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(zhUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
