import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Basket from '../views/Basket.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/cart',
    name: 'Basket',
    component: Basket
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'Everything',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
