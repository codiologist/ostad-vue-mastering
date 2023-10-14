<script setup >
// import loginBG from '@images/login-bg.png'

import { reactive } from 'vue';
import { useAuthStore } from '../../stores/AuthStore';

const authStore = useAuthStore

const credentials = reactive({
    username: '',
    password: ''
});

</script>

<template>
    <div class="w-screen h-screen bg-gray-900 flex items-center justify-center ">
        <div class="bg-gray-100 text-gray-500 shadow-xl w-full overflow-hidden">
            <div class="md:flex w-full">
                <div class="hidden h-screen  md:flex items-center w-5/6 bg-indigo-500 py-0 px-0">
                    <!-- <img :src="loginBG" alt=""> -->
                </div>
                <div class="w-full h-screen flex items-center md:w-4/6 xl:w-2/6  px-5  xl:px-10 2xl:px-20">
                    <div class="w-full">
                        <div class="text-center mb-10">
                            <h1 class="font-bold text-4xl text-indigo-600">LOGIN</h1>
                            <p class="mt-3 text-base font-semibold">Enter your credential to login</p>
                        </div>
                        <div
                            class="bg-indigo-100 border-solid border border-indigo-600 py-2 text-indigo-700 rounded-md text-center mb-10">
                            <h4 class="font-medium">Demo Login Credentials</h4>
                            <p class="text-[13px] font-semibold">Email: firoj@gmail.com  / Pass: Fiorj123</p>
                        </div>

                        <!-- 👉 Login Form -->
                        <form @submit.prevent="authStore.login(credentials)">
                            <div>
                                <div class="flex -mx-3 ">
                                    <div class="w-full px-3 mb-5">
                                        <label for="" class="text-base font-semibold px-1 text-indigo-600">Email <sup
                                                class="text-red-500 -top-0 text-base">*</sup></label>
                                        <div class="flex mt-1">
                                            <div
                                                class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                <i
                                                    class="material-symbols-outlined text-gray-400 text-2xl">account_circle</i>
                                            </div>
                                            <input v-model="credentials.username" type="text"
                                                class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                placeholder="Username">
                                        </div>
                                    </div>
                                </div>

                                <div class="flex -mx-3">
                                    <div class="w-full px-3" :class="authStore.errorMessage !== null ? 'mb-8' : 'mb-12'">
                                        <label for="" class="text-base font-semibold px-1 text-indigo-600">Password <sup
                                                class="text-red-500 -top-0 text-base">*</sup></label>
                                        <div class="flex mt-1">
                                            <div
                                                class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                <i class=" mdi-lock-outline text-gray-400 text-2xl"></i>
                                                <i class="material-symbols-outlined text-gray-400 text-2xl">lock</i>
                                            </div>
                                            <input v-model="credentials.password" type="password"
                                                class="w-full -ml-10  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                placeholder="************">

                                        </div>
                                    </div>
                                </div>
                                <div v-if="authStore.errorMessage"
                                    class="flex items-center justify-center mb-5 bg-red-600 text-white px-4 py-1 pr-5 rounded-md">
                                    <i class="material-symbols-outlined text-white text-2xl mr-2">error</i>
                                    <span>
                                        {{ authStore.errorMessage }}
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


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>