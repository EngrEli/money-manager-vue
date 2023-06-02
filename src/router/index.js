import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/accounts',
    name: 'Accounts',
    component: () => import('../views/AccountsView.vue')
  },
  {
    path: '/transactions/:id',
    name: 'TransactionDetails',
    component: () => import('../views/TransactionDetails.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
