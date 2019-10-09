import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'app',
      redirect: { name: 'wantedNav' }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('modules/home')
    },
    {
      path: '/wanted',
      name: 'wanted',
      component: () => import('modules/wanted/index'),
      redirect: { name: 'wantedNav' },
      children: [
        {
          path: 'nav',
          name: 'wantedNav',
          component: () => import('modules/wanted/nav')
        },
        {
          path: ':id',
          name: 'wantedDefault',
          component: () => import('modules/wanted/default')
        }
      ]
    }
  ]
})

export default router
