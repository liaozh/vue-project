import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/user/info'
    },
    {
      path: '/',
      component: resolve => require(['../pages/Home.vue'], resolve),
      meta: { title: '管理系统框架' },
      children: [
        {
          path: '/user',
          redirect: '/user/info'
        },
        {
          path: '/user/info',
          component: resolve => require(['../pages/User/UserInfo.vue'], resolve),
          meta: { title: '用户信息' }
        },
        {
          path: '/user/test',
          component: resolve => require(['../pages/User/UserTest.vue'], resolve),
          meta: { title: '用户测试' }
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../pages/Login.vue'], resolve)
    },
    {
      path: '/404',
      component: resolve => require(['../pages/404.vue'], resolve)
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
