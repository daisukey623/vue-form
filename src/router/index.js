import { createRouter, createWebHistory } from 'vue-router'
import Basic from '../views/Basic.vue'
// import content from '../views/content.vue'

const routes = [
  {
    path: '/',
    name: 'Basic',
    component: Basic
  },
  {
    path: '/Questionnaire',
    name: 'Questionnaire',
    component: () => import(/* webpackChunkName: "about" */ '../views/Questionnaire.vue')
  },
  {
    path: '/Content',
    name: 'Content',
    component: () => import(/* webpackChunkName: "about" */ '../views/Content.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
