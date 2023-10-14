import { createRouter, createWebHistory } from 'vue-router'
import Topbar from '../layouts/Topbar.vue'
import Sidebar from '../layouts/Sidebar.vue'

import  authStore from '../stores/authStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/Login.vue'),
    },
    {
      path: '/',
      name: 'dashboard',
      components: {
        default: () => import('../views/Dashboard.vue'),
        Sidebar,
        Topbar
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      components: {
        default: () => import('../views/user/Profile.vue'),
        Sidebar,
        Topbar
      },
      meta: {
        requiresAuth: true
      }
    },

  ]
})

router.beforeEach((to, from, next) => {
  const auth = authStore()
  // console.log(auth.isAuthenticated);
  auth.isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));
  if (to.meta.requiresAuth && auth.isAuthenticated != true) {
    next('/login')
  } else {
    next()
  }
})

export default router
