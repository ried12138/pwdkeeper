import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import SuccessView from '../views/SuccessView.vue' // 确认路径正确

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/success',
    name: 'Success',
    component: SuccessView // 确认路径正确
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router