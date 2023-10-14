import { ref, reactive } from 'vue';
import router from '../router/index';
import { defineStore } from 'pinia';



const authStore = defineStore('auth', () => {
    const isAuthenticated = ref();
    const userData = reactive({});

    if (JSON.parse(localStorage.getItem('userData')))
    userData.value = JSON.parse(localStorage.getItem('userData'));

    if (JSON.parse(localStorage.getItem('userData')))
        Object.assign('userData', JSON.parse(localStorage.getItem('userData')));

    function login(credentials) {
        fetch('https://user-mangement-production.up.railway.app/v1/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: credentials.username,
                password: credentials.password,
            })
        })
            .then(response => response.json())
            .then(async (response) => {
                isAuthenticated.value = true;
                userData.value = response;
                // await getProfileData();
                localStorage.setItem('isAuthenticated', isAuthenticated.value);
                localStorage.setItem('userData', JSON.stringify(userData.value));
                localStorage.setItem('token', JSON.stringify(response.token));

                router.push('/profile');
            });
    }

    function logout() {
        isAuthenticated.value = false;
        Object.assign('userData', {});
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('token');
        localStorage.removeItem('userData');

        router.push('/login');
    }

    // async function getProfileData() {
    //     await fetch(`https://dummyjson.com/auth/users/${authenticatedUser.value.id}`, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': `Bearer ${authenticatedUser.value.token}`,
    //             'Content-Type': 'application/json'
    //         },
    //     })
    //         .then(response => response.json())
    //         .then(response => {
    //             localStorage.setItem('userData', JSON.stringify(response));
    //             Object.assign(userData, response);
    //         });
    // }

    return { isAuthenticated, login, logout, userData };

});

export default authStore;