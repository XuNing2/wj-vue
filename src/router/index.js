import Vue from 'vue'
import Router from 'vue-router'
import Wrong from '@/components/Wrong'
// 导入刚才编写的组件
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Wrong',
      name: 'Wrong',
      component: Wrong
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'AppIndex',
      component: AppIndex
    }
  ]
})
