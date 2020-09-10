import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'KcsBtnList',
    component: () => import('~/kcs-btn-list/src/kcs-btn-list.vue')
  }, {
    path: '/KcsBtnList',
    name: 'KcsBtnList',
    component: () => import('~/kcs-btn-list/src/kcs-btn-list.vue')
  }, {
    path: '/KcsCommonPage',
    name: 'KcsCommonPage',
    component: () => import('@/src/common-page.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
