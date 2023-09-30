import { createRouter, createWebHistory } from 'vue-router'
import { getCurrentUser } from '../firebase/init'

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
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Profile.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/todo-list',
      name: 'todo-list',
      component: () => import('../views/todo/TodoList.vue'),
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
    return '/profile';
  }
})

export default router
