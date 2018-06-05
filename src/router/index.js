import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: resolve => require(['../pages/login.vue'], resolve)
    }
  ]
})
