<script setup>

import Sidebar from '../../layouts/Sidebar.vue';
import Header from '../../layouts/Header.vue';

import InputField from '../../components/todo/InputField.vue';
import TodoItem from '../../components/todo/TodoItem.vue';


</script>

<template>
    <div class="flex h-screen overflow-hidden">
        <Sidebar />

        <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Header />

            <main>
                <div class="mx-auto max-w-screen-2xl p-4 md:p-6 md:px-0 2xl:p-10">
                    <div class="mx-auto w-full md:w-10/12 xl:w-8/12">
                        <InputField />
                        <div class="mt-6">
                            <TodoItem />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>


<style>

.router-link-active.router-link-exact-active{
    background-color: #FACC15;
    color: #000;
}

</style>