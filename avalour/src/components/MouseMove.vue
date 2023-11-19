
<script setup>
import { onMounted } from "vue";
import mouseMove from "./helper/mouseMoveAnimation";

const props = defineProps({
  cls: {
    type: String,
    default: "",
  },
  imgSrc: {
    type: String,
    default: "",
  },
  dataDepth: {
    type: String,
    default: "",
  },
});

onMounted(() => {
  mouseMove();
});


</script>


<template>
  <span class="tp_mousemove">
    <img :class="cls" :data-depth="dataDepth" :src="imgSrc" alt="img" />
  </span>
</template>
