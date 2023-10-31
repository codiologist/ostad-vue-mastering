import 'bootstrap/scss/bootstrap.scss'
import './assets/css/tailwind.css'
import './assets/scss/main.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from "axios";

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

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

const options = {
  // You can set your default options here
};

app.use(Toast, options);
app.mount('#app')
