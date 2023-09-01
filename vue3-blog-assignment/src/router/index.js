import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/posts/PostsView.vue"),
    },
    {
      path: '/post-details/:id',
      name: 'post-details',
      component: () => import("../views/posts/[id].vue"),
    },
    {
      path: '/post-categories/:id',
      name: 'post-categories',
      component: () => import("../views/post-categories/[id].vue"),
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFound.vue')},
  ]
})

export default router
