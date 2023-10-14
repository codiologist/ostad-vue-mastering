<script setup>
import { useAuthStore } from '../stores/authStore.js';
const authStore = useAuthStore
</script>

<template>
    <div>
        <header class="sticky top-0 z-999 flex w-full bg-white drop-shadow-1">
            <div class="relative flex flex-grow items-center justify-end py-4 px-4 shadow-2 md:px-6 2xl:px-11 z-999">
                <button class="w-[150px]  bg-yellow-400 hover:bg-yellow-400 focus:bg-yellow-400 text-black rounded-sm px-3 py-2 text-lg font-semibold drop-shadow-xl " @click="authStore.logout">Logout</button>
            </div>
        </header>
    </div>
</template>
