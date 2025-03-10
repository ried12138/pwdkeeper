import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SuccessView from '../views/SuccessView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/success',
    name: 'Success',
    component: SuccessView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router