import { ref, reactive } from 'vue'
// import { useRouter } from 'vue-router'
// const router = useRouter()
import router from '../router/index'
const useAuthStore = reactive({
    errorMessage: '',
    isAuthenticated: localStorage.getItem('auth') == 1,
    user: JSON.parse(localStorage.getItem('userData')) || null,
    async login(credentials) {
        try {
            const response = await fetch('https://user-mangement-production.up.railway.app/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: credentials.username, password: credentials.password })
            });
    
            const res = await response.json();
    
            console.log(res);
    
            if (res.message) {
                this.errorMessage = res.message;
            }
    
            if (res.token) {
                localStorage.setItem('auth', 1);
                localStorage.setItem('token', JSON.stringify(res.token));
                useAuthStore.isAuthenticated = true;
                localStorage.setItem('userData', JSON.stringify(res));
                useAuthStore.user = res;
                router.push('/profile');
            }
        } catch (error) {
            // Handle any errors that may occur during the fetch or JSON parsing.
            console.error(error);
        }
    },
    logout() {
        localStorage.setItem('auth', false)
        localStorage.removeItem('token')
        useAuthStore.isAuthenticated = false
        useAuthStore.user = null
        localStorage.setItem('user', null)
        router.push('/login' )
    }
})

export { useAuthStore }