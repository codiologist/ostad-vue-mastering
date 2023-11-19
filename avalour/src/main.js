import 'bootstrap/scss/bootstrap.scss'
import 'swiper/css/bundle'
import 'vue3-carousel/dist/carousel.css'
import './assets/scss/main.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueSmoothScroll from 'vue3-smooth-scroll'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueSmoothScroll, {
    duration: 400,
    // updateHistory: false,
    offset: -150
  })

app.mount('#app')
