<script setup >
import loginBG from '@images/login-bg.png'

import { ref, computed } from 'vue';
import router from '../router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/init.js';


const startValidation = ref(false);

const email = ref("")
const password = ref("")
const errorMessage = ref(null);

// 👉 Login function
const login = () => {
    startValidation.value = true;
    if (isValidEmail.value == true && isStrongPassword.value == true) {
        signInWithEmailAndPassword(auth, email.value, password.value).then((response) => {

            router.push('/profile')
        }).catch((error) => {
            if (error) {
                errorMessage.value = "Invalid username or password"
            }

        })
    }
};

// 👉 Custom Validation
const isValidEmail = computed(() => {
    return startValidation.value
        ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
        : null;
});

const isStrongPassword = computed(() => {
    return startValidation.value
        ? password.value.length > 6
        : null;
});

</script>

<template>
    <div class="w-screen h-screen bg-gray-900 flex items-center justify-center ">
        <div class="bg-gray-100 text-gray-500 shadow-xl w-full overflow-hidden">
            <div class="md:flex w-full">
                <div class="hidden h-screen  md:flex items-center w-5/6 bg-indigo-500 py-0 px-0">
                    <img :src="loginBG" alt="">
                </div>
                <div class="w-full h-screen flex items-center md:w-4/6 xl:w-2/6  px-5  xl:px-10 2xl:px-20">
                    <div class="w-full">
                        <div class="text-center mb-10">
                            <h1 class="font-bold text-4xl text-indigo-600">LOGIN</h1>
                            <p class="mt-3 text-base font-semibold">Enter your credential to login</p>
                        </div>
                        <div
                            class="bg-indigo-100 border-solid border border-indigo-600 py-2 text-indigo-700 rounded-md text-center mb-10">
                            <h4 class="font-medium">Test Login Credentials</h4>
                            <p class="text-[13px] font-semibold">Email: firoj@gmail.com / Pass: *Abcd123$</p>
                        </div>

                        <!-- 👉 Login Form -->
                        <form @submit.prevent="login">
                            <div>
                                <div class="flex -mx-3 ">
                                    <div class="w-full px-3 mb-5">
                                        <label for="" class="text-base font-semibold px-1 text-indigo-600">Email <sup class="text-red-500 -top-0 text-base">*</sup></label>
                                        <div class="flex mt-1">
                                            <div
                                                class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                <i class="mdi mdi-email-outline text-gray-400 text-2xl"></i>
                                            </div>
                                            <input v-model="email" type="email" @keypress="req = false"
                                                class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                placeholder="name@mail.com">
                                        </div>
                                        <p v-if="startValidation && email == '' && !isValidEmail"
                                            class="mt-1 ml-1 text-red-500 text-sm font-semibold">Email is required.</p>
                                        <p v-else-if="startValidation && email != '' && !isValidEmail"
                                            class="mt-1 ml-1 text-red-500 text-sm font-semibold">
                                            Email should be in a valid format.
                                        </p>
                                    </div>
                                </div>

                                <div class="flex -mx-3">
                                    <div class="w-full px-3" :class="errorMessage !== null ? 'mb-8' : 'mb-12'">
                                        <label for="" class="text-base font-semibold px-1 text-indigo-600">Password <sup class="text-red-500 -top-0 text-base">*</sup></label>
                                        <div class="flex mt-1">
                                            <div
                                                class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                <i class="mdi mdi-lock-outline text-gray-400 text-2xl"></i>
                                            </div>
                                            <input v-model="password" type="password"
                                                class="w-full -ml-10  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                placeholder="************">

                                        </div>
                                        <p v-if="startValidation && password == '' && !isValidEmail"
                                            class="mt-1 ml-1 text-red-500 text-sm font-semibold">Password is required.</p>

                                        <div class="flex items-center mt-3">
                                            <i class="mdi mdi-information-outline text-indigo-400 text-2xl"></i>
                                            <p class="text-xs text-gray-500 font-semibold ml-2">
                                                Minimum six characters, at least one uppercase letter, one lowercase letter,
                                                one number and one special character.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div v-if="errorMessage !== null" class="flex items-center justify-center text-center mb-5">
                                    <span class="bg-red-600 text-white px-4 py-1 rounded-md">
                                        <i class="mdi mdi-alert-circle-outline text-white text-lg"></i>
                                        {{ errorMessage }}
                                    </span>
                                </div>
                                <div class="flex -mx-3">
                                    <div class="w-full px-3 mb-5">
                                        <button
                                            class="flex items-center justify-center w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 text-lg font-semibold">
                                            Login <i class="mdi mdi-login text-white text-2xl ml-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <!-- / End Login Form -->

                        <div class="mt-6 text-center">
                            <h5 class="text-base font-medium">
                                Don't have an account yet?
                                <RouterLink class="font-bold text-indigo-600" to="/signup">Signup</RouterLink>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>