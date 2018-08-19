import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/pages/index.vue')
    //   redirect: '/firstpage',
    //   children: [{
    //     path: '/firstpage',
    //     name: 'firstpage',
    //     component: () => import('@/page/home/firstpage'),
    }
  ]
})
