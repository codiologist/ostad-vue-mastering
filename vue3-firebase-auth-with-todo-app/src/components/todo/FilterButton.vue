<script setup>
import { defineEmits } from 'vue';
const props = defineProps(['title']);
const emit = defineEmits(['filter']);
</script>

<template>
  <button type="button" class="text-sm font-medium py-2 px-4 rounded" @click.prevent="$emit('filter')">
    <slot></slot>
    {{ props.title }}
  </button>
</template>
