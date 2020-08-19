import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'BtnList',
    component: () => import('~/btn-list/src/btn-list.vue')
  }, {
    path: '/btn-list',
    name: 'BtnList',
    component: () => import('~/btn-list/src/btn-list.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
