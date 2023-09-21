import { createRouter, createWebHistory } from 'vue-router' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'producs',
      component: () => import('../views/ProductList.vue')
    },
    {
      path: '/product-details/:id',
      name: 'product-details',
      component: () => import('../views/ProductDetails.vue')
    }
 
  ]
})

export default router
