<script setup>
import { RouterLink, RouterView  } from 'vue-router';
</script>

<template>
  <div> 
    <nav class="w-full xl:w-1/3 mx-auto flex flex-wrap items-center justify-evenly text-center mt-4 xl:my-6 2xl:my-12">
      <RouterLink to="/" class="w-[200px] block max-w-xs mx-auto mb-4 bg-indigo-400 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-md drop-shadow-2xl px-3 py-2 text-lg font-semibold">Task 1</RouterLink>
      <RouterLink to="/pie-chart" class="w-[200px] block max-w-xs mx-auto mb-4 bg-indigo-400 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-md drop-shadow-2xl px-3 py-2 text-lg font-semibold">Task 2</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
.router-link-active{
  background-color: #4338CA ;
}
</style>
