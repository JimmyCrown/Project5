import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import CardDetails from '@/views/CardDetails.vue'
import LoginPage from '@/views/LoginPage.vue'
import SettingsPage from '@/views/SettingsPage.vue'

  

const routes = [
  { path: '/Project5/', name: 'Home', component: HomePage },
  { path: '/Project5,other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
  { path: '/Project5/employees/:id', name: 'CardDetails', component: CardDetails },
  { path: '/Project5/login', name: 'LoginPage', component: LoginPage },
  { path: '/Project5/settings', name: 'SettingsPage'},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router