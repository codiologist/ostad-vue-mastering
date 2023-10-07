import { createRouter, createWebHistory } from 'vue-router'
import { getCurrentUser } from '../firebase/init'
import Topbar from '../layouts/Topbar.vue'
import Sidebar from '../layouts/Sidebar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/authentication/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/authentication/SignUpView.vue')
    },
    {
      path: '/dashboard',
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
        default: () => import('../views/Profile.vue'),
        Sidebar,
        Topbar
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/product-list',
      name: 'product-list',
      components: {
        default: () => import('../views/ProductList.vue'),
        Sidebar,
        Topbar
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/product-details/:id',
      name: 'product-details',
      components: {
        default: () => import('../views/ProductDetails.vue'),
        Sidebar,
        Topbar
      },
      meta: {
        requiresAuth: true
      }
    }
  ]
})


router.beforeEach(async (to) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !await getCurrentUser()) {
    return '/';
  }

  if (!requiresAuth && await getCurrentUser()) {
    return '/dashboard';
  }
})

export default router
