<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav id="navbar"
        class="pt-5 lg:py-5 px-2 md:px-4 xl:px-6 2xl:px-4 bg-gray-200 text-white text-sm xl:fixed top-0 left-0 right-0 transition-all duration-400 z-10">
        <div class="relative xl:flex items-center justify-between xl:space-x-12 flex-wrap text-center ">
          <RouterLink  to="/" class="text-4xl lg:text-2xl font-semibold">
            <img class="w-[150px]" src="/logo-elyssi.svg" alt="">
          </RouterLink>
          <!-- nav links -->
          <ul
            class="nav-links flex flex-wrap lg:items-center justify-evenly lg:justify-center space-x-5 lg:space-x-10 xl:space-x-6 2xl:space-x-10 lg:h-auto mt-5 lg:mt-0">
            <li class="mb-5 lg:mb-0">
              <RouterLink to="/" class="text-[#F35627] text-2xl font-semibold"> Home</RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>

  <RouterView />
</template>
