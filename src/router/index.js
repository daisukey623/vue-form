import Vue from 'vue'
import VueRouter from 'vue-router'
import step01 from '../views/step01.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/step01',
    name: 'step01',
    component: step01
  },
  {
    path: '/step02',
    name: 'step02',
    component: () => import(/* webpackChunkName: "about" */ '../views/step02.vue')
  },
  {
    path: '/step03',
    name: 'step03',
    component: () => import(/* webpackChunkName: "about" */ '../views/step03.vue')
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: () => import(/* webpackChunkName: "about" */ '../views/confirmation.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
