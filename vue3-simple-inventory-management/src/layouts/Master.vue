<script setup>
import { RouterView } from 'vue-router';
</script>


<template>
    <div class="flex h-screen overflow-hidden">
        <router-view name="Sidebar"></router-view>
        <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <router-view name="Topbar" />
            <main>
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>
