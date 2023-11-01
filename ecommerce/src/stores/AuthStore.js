import { ref, reactive } from 'vue'
import router from '../router/index'
import {cart} from './Cart'
import {wishlist} from './Wishlist'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const authStore = reactive({
    isAuthenticated: localStorage.getItem('auth') == 1,
    user: JSON.parse(localStorage.getItem('user')),
    authenticate(username, password) {
        fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: username, password })
        }).then(res => res.json())
            .then(res => {
                if (res.error == 0) {
                    authStore.isAuthenticated = true
                    authStore.user = res
                    localStorage.setItem('auth', 1)
                    localStorage.setItem('user', JSON.stringify(res))
                    router.push('/')
                }
            })
    },


    register(credentials) {
        fetch(`${API_BASE_URL}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: credentials.username,
                email: credentials.email,
                password: credentials.password,
            })
        })
            .then(response => response.json())
            .then(async (response) => {
                authStore.isAuthenticated.value = true;
                authStore.user = response;
                localStorage.setItem('auth', 1)
                localStorage.setItem('user', JSON.stringify(response))
                router.push('/')
            });
    },



    logout() {
        authStore.isAuthenticated = false
        authStore.user = {}
        localStorage.setItem('auth', 0)
        localStorage.setItem('user', '{}')
        cart.items ={}
        // cart.totalPrice = 0
        cart.saveCartInLocalStorage()
        wishlist.items = []
        router.push('/login')
    },
    getUserToken() {
        if (authStore.user && authStore.user.token) {
            return authStore.user.token;
        } else {
            return null; // or handle the case when the user or token is not available
        }
    }
    
})

export { authStore }