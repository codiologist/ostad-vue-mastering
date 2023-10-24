import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/product/index.vue')
    }, 
    {
      path: '/product-details/:id',
      name: 'product-details',
      component: () => import('../views/product/product-details/[id].vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/cart/Cart.vue')
    }, 
    {
      path: '/wishlist',
      name: 'wishlist',
      component: () => import('../views/wishlist/WishList.vue')
    },    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/checkout/Checkout.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
