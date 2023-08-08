<script setup >
import { reactive, onBeforeMount } from 'vue'
import router from '../router';
import { signOut } from "firebase/auth";
import { auth } from '../firebase/init.js';

import avatar from '@images/avatar.png';

const data = reactive({
  username: '',
  email: '',
})

const logout = async () => {
  await signOut(auth)
  router.push('/')
}

onBeforeMount(() => {
  if (auth.currentUser) {
    data.username = auth.currentUser.displayName
    data.email = auth.currentUser.email
  }
});

</script>

<template>
  <div class="flex flex-col justify-center items-center h-[100vh] bg-purple-800 p-2">
    <h2 class="mb-6 font-bold uppercase text-white text-3xl lg:text-5xl ">Welcome To Profile</h2>
    <div
      class="relative flex flex-col items-center rounded-lg w-full lg:w-[600px] mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
      <div class="relative flex h-56 w-full justify-center rounded-xl bg-cover">
        <img src="https://img.freepik.com/premium-photo/red-blue-wave-with-dark-background_889227-20577.jpg?w=1380"
          class="absolute flex h-56 w-full justify-center rounded-xl bg-cover">
        <div
          class="absolute -bottom-20 flex h-[160px] w-[160px] items-center justify-center rounded-full border-[4px] border-white bg-white dark:!border-navy-700">
          <img class="h-full w-full rounded-full"
            :src="avatar"
            alt="" />
        </div>
      </div>
      <div class="w-full mt-20 flex flex-col items-center">
        <h4 v-if="data.username" class="text-3xl font-bold capitalize text-indigo-700 dark:text-white mb-3">
          {{ data.username }}
        </h4>
        <div class="flex items-center bg-indigo-100 px-4 rounded-full">
          <i class="mdi mdi-email-outline text-indigo-600 text-2xl"></i>
          <p class="ml-2 text-lg font-medium text-indigo-600"> {{ data.email }}</p>
        </div>
        <button @click="logout"
          class="flex items-center justify-center  w-1/3 mt-6 max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 text-lg font-semibold">
          Logout <i class="mdi mdi-logout text-white text-2xl ml-1"></i>
        </button>
      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped></style>