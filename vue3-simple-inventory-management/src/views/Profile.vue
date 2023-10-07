<script setup>

import { auth } from '../firebase/init.js';

import avatar from '@images/avatar.png';

</script>


<template>
  <main>
        <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
          <div class="flex flex-col justify-center items-center p-2">
            <h2 class="mb-6 font-bold uppercase  text-3xl lg:text-4xl ">Welcome To Profile</h2>
            <div
              class="relative flex flex-col items-center rounded-lg w-full lg:w-[600px] mx-auto p-4 bg-[#1C2434] shadow-3xl shadow-shadow-500 border border-gray-100 drop-shadow-lg">
              <div class="relative flex h-56 w-full justify-center rounded-xl bg-cover">
                <img
                  src="https://img.freepik.com/premium-photo/red-blue-wave-with-dark-background_889227-20577.jpg?w=1380"
                  class="absolute flex h-56 w-full justify-center rounded-xl bg-cover">
                <div
                  class="absolute -bottom-20 flex h-[160px] w-[160px] items-center justify-center rounded-full border-[4px] border-white bg-white dark:!border-navy-700">
                  <img class="h-full w-full rounded-full" :src="avatar" alt="User Avatar" />
                </div>
              </div>
              <div class="w-full mt-26 flex flex-col items-center">
                <!-- v-if="userData.name" -->
                <h4  class="text-3xl font-bold capitalize text-yellow-400 mb-3">
                  {{auth.currentUser.displayName}}  
                </h4>
                <div class="flex items-center text-white px-4 rounded-md">
                  <i class="mdi mdi-email-outline  text-2xl"></i>
                  <p class="ml-2 text-lg tracking-[.5px]"> {{auth.currentUser.email}} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
</template>
