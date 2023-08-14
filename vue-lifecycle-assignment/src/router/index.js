import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'carousel',
      component: () => import('../views/Carousel.vue')
    },
    {
      path: '/pie-chart',
      name: 'pie-chart',
      component: () => import('../views/PieChart.vue')
    }
  ]
})

export default router
