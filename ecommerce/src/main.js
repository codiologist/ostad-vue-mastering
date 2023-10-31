import 'bootstrap/scss/bootstrap.scss'
import './assets/css/tailwind.css'
import './assets/scss/main.scss'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from "axios";

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use({
    install(app) {
      app.config.globalProperties.$api = axios.create({
        baseURL: process.env.VUE_APP_TUNNEL_BASE_API,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
        },
      });
    },
  });
app.mount('#app')
