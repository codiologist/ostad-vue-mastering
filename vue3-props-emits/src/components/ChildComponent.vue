<script setup>
const props = defineProps(['message']);
const emit = defineEmits(['messageEmitted']);
</script>

<template>
    <div class="mt-32 text-center">
        <h1 class="mb-8  text-2xl leading-9 font-semibold ">
            <span
                class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-500 relative inline-block px-8 py-1">
                <span class="relative text-white ">Child Component</span>
            </span>
        </h1>
        <div class="text-center border-2 border-cyan-500 px-8 py-6">
            <div class="">
                <p class="font-semibold mb-2">Below message is from <span class="font-bold text-pink-600">Parent Component</span> through props.</p>
                <h4 class=" font-bold text-2xl bg-cyan-100 px-8 py-2 rounded-full inline-block">{{ message }}</h4>
            </div>
            <div class="mt-4">
                <button type="text" class="mt-5 border-2 shadow-lg hover:shadow-xl border-pink-700 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md"
                    @click="$emit('messageEmitted', 'Vue 3 is awesome! 👌')">Show Message</button>
            </div>
        </div>
    </div>
</template>

