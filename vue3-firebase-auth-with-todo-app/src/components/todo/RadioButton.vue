
<script setup>
const props = defineProps(["todoItem"]);
</script>


<template>
  <button
    v-if="todoItem.status"
    type="button"
    class="
      h-5
      w-5
     bg-green-500
     hover:bg-green-700
      rounded-full
      text-white
      shadow-md
    "
  >
    <i class="text-lg font-extrabold leading-3 mdi  mdi-check"></i>
  </button>
  <button
    v-else
    type="button"
    class="
      text-xs
      leading-tight
      h-5
      w-5
      border-[2px]
      hover:border-2 hover:border-yellow-400
      rounded-full
      uppercase
      shadow-md
    "
  />

  
</template>