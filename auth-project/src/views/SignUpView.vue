<script setup>
import { ref, reactive, computed } from 'vue';
import router from '../router';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/init.js';

import signupBG from '@images/signup-bg.png'
import successBG from '@images/success-bg.png'

const startValidation = ref(false);
const refgistered = ref(false);

const data = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
});

// Sign Up Function
const signUp = () => {
  startValidation.value = true;
  if (isValidEmail.value == true && isStrongPassword.value == true &&
    isPasswordConfirmed.value == true) {
    createUserWithEmailAndPassword(auth, data.email, data.password).then((credential) => {
      updateProfile(auth.currentUser, {
        displayName: data.username,
      })
      console.log(credential.user);
      refgistered.value = true
      setTimeout(() => {
        router.push('/')
        refgistered.value = false
      }, 3000);
      startValidation.value = false;
    }).catch((err) => { console.log(err.message); })
  }
};

// Custom Validation
const isValidName = computed(() => {
  return startValidation.value
    ? data.username > 5
    : null;
});

const isValidEmail = computed(() => {
  return startValidation.value
    ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)
    : null;
});

const isStrongPassword = computed(() => {
  return startValidation.value
    ? /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(
      data.password
    )
    : null;
});

const isPasswordConfirmed = computed(() => {
  return startValidation.value ? data.password == data.confirmPassword : null;
});


</script>

<template>
  <div class="w-screen h-screen bg-gray-900 flex items-center justify-center ">
    <div class="bg-gray-100 text-gray-500 shadow-xl w-full overflow-hidden">
      <div class="md:flex items-center w-full">
        <div class="hidden h-screen md:flex items-center w-5/6 py-0 px-0" :class="refgistered ? 'bg-indigo-100' : 'bg-indigo-600'">
          <img v-if="!refgistered" :src="signupBG" alt="background">
          <img v-if="refgistered" :src="successBG" alt="background">
        </div>
        <div class="w-full h-screen flex items-center md:w-4/6 xl:w-2/6 px-5 xl:px-10 2xl:px-20">
          <!-- 👉  Success Message -->
          <div v-if="refgistered" class="w-full text-center">
            <div>
              <h1 class="font-bold text-4xl text-indigo-600 mb-4">Congratulations</h1>
              <h4 class="font-bold text-xl text-gray-600 mb-2">You are registered successfully.</h4>
              <p class="text-red-600">Redirecting to profile...</p>
            </div>
          </div>

          <div v-if="!refgistered" class="w-full">
            <div class="text-center mb-10">
              <h1 class="font-bold text-4xl text-indigo-600">SIGN UP</h1>
              <p class="mt-3 text-base font-semibold">Enter your information to register</p>
            </div>
            <!-- 👉  Signup Form -->
            <form @submit.prevent="signUp">
              <div>
                <div class="flex -mx-3 ">
                  <div class="w-full px-3 mb-5">
                    <label for="" class="text-base font-semibold px-1 text-indigo-600">Name</label>
                    <div class="flex mt-2">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-account-outline text-gray-400 text-2xl"></i>
                      </div>
                      <input v-model="data.username" type="text"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Your Name">
                    </div>
                    <p v-if="startValidation && data.username == '' && !isValidName"
                      class="mt-1 ml-1 text-red-500 text-sm font-semibold">Name field is required.</p>
                  </div>
                </div>
                <div class="flex -mx-3 ">
                  <div class="w-full px-3 mb-5">
                    <label for="" class="text-base font-semibold px-1 text-indigo-600">Email</label>
                    <div class="flex mt-2">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-email-outline text-gray-400 text-2xl"></i>
                      </div>
                      <input v-model="data.email" type="email"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="name@mail.com">
                    </div>
                    <p v-if="startValidation && data.email == '' && !isValidEmail"
                      class="mt-1 ml-1 text-red-500 text-sm font-semibold">Type valid email</p>
                    <p v-else-if="startValidation && data.email != '' && !isValidEmail"
                      class="mt-1 ml-1 text-red-500 text-sm font-semibold">
                      Email should in valid format.
                    </p>
                  </div>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <label for="" class="text-base font-semibold px-1 text-indigo-600">Password</label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-lock-outline text-gray-400 text-2xl"></i>
                      </div>
                      <input v-model="data.password" type="password"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************">
                    </div>
                    <p v-if="startValidation && data.password == '' && !isValidEmail"
                      class="mt-1 ml-1 text-red-500 text-sm font-semibold">Password length must be atleast 6 characters.
                    </p>
                    <p v-if="startValidation && data.password != '' && !isStrongPassword"
                      class="mt-1 ml-1 text-red-500 text-sm font-semibold">Minimum six characters, at least one uppercase
                      letter, one lowercase letter, one number and one special character.</p>
                  </div>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-12">
                    <label for="" class="text-base font-semibold px-1 text-indigo-600">Confirm Password</label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-lock-outline text-gray-400 text-2xl"></i>
                      </div>
                      <input v-model="data.confirmPassword" type="password"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************">
                    </div>
                    <p v-if="startValidation && data.confirmPassword != data.password"
                      class="text-red-500 text-sm font-semibold">Password not matched.</p>
                  </div>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <button
                      class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">REGISTER
                      NOW</button>
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



