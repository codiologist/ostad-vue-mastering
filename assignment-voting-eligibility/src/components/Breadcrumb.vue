<script setup>
import router from '../router/index'
import { RouterLink } from 'vue-router';

const props = defineProps({
  pageTitle: {
    type: String
  }
});


</script>

<template>
  <div>
    <div class="p-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 class="text-title-md2 font-bold text-black dark:text-white">
        {{pageTitle}}
      </h2>

      <!-- <nav>
        <ol class="flex items-center gap-2">
          <li><RouterLink to="/"></RouterLink>{{  }}</li>
          <li><a class="font-medium" href="">Dashboard /</a></li>
          <li class="text-primary">Profile</li>
        </ol>
      </nav> -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>