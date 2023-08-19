<script setup>
import ParentComponent from './components/ParentComponent.vue';
</script>

<template>
  <ParentComponent />
</template>

<style lang="css">
body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    color 0.5s,
    background-color 0.5s;
  line-height: 1.6;
}
</style>