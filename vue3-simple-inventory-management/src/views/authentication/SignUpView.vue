<script setup>
import signupBG from '@images/signup-bg.png'
import successBG from '@images/success-bg.png'

import { reactive } from 'vue';
import { RouterLink } from 'vue-router'

import { useAuthStore } from '../../stores/AuthStore';
const authStore = useAuthStore()

const credentials = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
});

</script>

<template>
  <div class="w-screen h-screen bg-gray-900 flex items-center justify-center ">
    <div class="bg-gray-100 text-gray-500 shadow-xl w-full overflow-hidden">
      <div class="md:flex items-center w-full">
        <div class="hidden h-screen md:flex items-center w-5/6 py-0 px-0"
          :class="authStore.isRegistered ? 'bg-indigo-100' : 'bg-indigo-600'">
          <img v-if="!authStore.isRegistered" :src="signupBG" alt="background">
          <img v-if="authStore.isRegistered" :src="successBG" alt="background">
        </div>
        <div class="w-full h-screen flex items-center md:w-4/6 xl:w-2/6 px-5 xl:px-10 2xl:px-20">
          <!-- 👉  Success Message  -->
          <div v-if="authStore.isRegistered" class="w-full text-center">
            <div>
              <h1 class="font-bold text-4xl text-indigo-600 mb-4">Congratulations</h1>
              <h4 class="font-bold text-xl text-gray-600 mb-2">You are registered successfully.</h4>
              <p class="font-bold text-red-600">Redirecting to profile...</p>
            </div>
          </div>

          <div v-if="!authStore.isRegistered" class="w-full">
            <div class="text-center mb-10">
              <h1 class="font-bold text-4xl text-indigo-600">SIGN UP</h1>
              <p class="mt-3 text-base font-semibold">Enter your information to register</p>
            </div>
            <!-- 👉  Signup Form -->
            <form @submit.prevent=" authStore.signUp(credentials)">
              <div>
                <div class="flex -mx-3 ">
                  <div class="w-full px-3 mb-5">
                    <label for="" class="text-base font-semibold px-1 text-indigo-600">Name <sup class="text-red-500 -top-0 text-base">*</sup></label>
                    <div class="flex mt-1">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-account-outline text-gray-400 text-2xl"></i>
                      </div>
                      <input v-model="credentials.username" type="text"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Your Name">
                    </div>
                    <p v-if="authStore.startValidation && credentials.username == '' && !authStore.isValidName"
                      class="mt-1 ml-1 text-red-500 text-sm font-semibold">Name field is required.</p>
                  </div>
                </div>
                <div class="flex -mx-3 ">
                  <div class="w-full px-3 mb-5">
                    <label for="" class="text-base font-semibold px-1 text-indigo-600">Email <sup class="text-red-500 -top-0 text-base">*</sup></label>
                    <div class="flex mt-2">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-email-outline text-gray-400 text-2xl"></i>
                      </div>
                      <input v-model="credentials.email" type="email"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="name@mail.com">
                    </div>
                    <p v-if="authStore.startValidation && credentials.email == '' && !authStore.isValidEmail"
                      class="mt-1 ml-1 text-red-500 text-sm font-semibold">Type valid email</p>
                    <p v-else-if="authStore.startValidation && credentials.email != '' && !authStore.isValidEmail"
                      class="mt-1 ml-1 text-red-500 text-sm font-semibold">
                      Email should in valid format.
                    </p>
                  </div>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <label for="" class="text-base font-semibold px-1 text-indigo-600">Password <sup class="text-red-500 -top-0 text-base">*</sup></label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-lock-outline text-gray-400 text-2xl"></i>
                      </div>
                      <input v-model="credentials.password" type="password"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************">
                    </div>
                    <p v-if="authStore.startValidation && credentials.password == '' && !authStore.isValidEmail"
                      class="mt-1 ml-1 text-red-500 text-sm font-semibold">Password length must be atleast 6 characters.
                    </p>
                    <p v-if="authStore.startValidation && credentials.password != '' && !authStore.isStrongPassword"
                      class="mt-1 ml-1 text-red-500 text-sm font-semibold">Minimum six characters, at least one uppercase
                      letter, one lowercase letter, one number and one special character.</p>
                  </div>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-12">
                    <label for="" class="text-base font-semibold px-1 text-indigo-600">Confirm Password <sup class="text-red-500 -top-0 text-base">*</sup></label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-lock-outline text-gray-400 text-2xl"></i>
                      </div>
                      <input v-model="credentials.confirmPassword" type="password"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************">
                    </div>
                    <p v-if="authStore.startValidation && credentials.confirmPassword != credentials.password"
                      class="text-red-500 text-sm font-semibold">Password not matched.</p>
                  </div>
                </div>
                <div v-if="authStore.errorMessage !== null" class="flex items-center justify-center text-center mb-5">
                  <span class="bg-red-600 text-white px-4 py-1 rounded-md">
                    <i class="mdi mdi-alert-circle-outline text-white text-lg"></i>
                    {{ authStore.errorMessage }}
                  </span>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <button
                      class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                      REGISTERNOW
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <!-- / End Signup Form -->

            <div class="mt-6 text-center">
              <h5 class="text-base font-medium">
                Have an account go to
                <RouterLink class="font-bold text-indigo-600" to="/">Login</RouterLink>
              </h5>
            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>



