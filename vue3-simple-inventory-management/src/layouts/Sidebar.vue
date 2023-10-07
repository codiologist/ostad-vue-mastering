<script setup>
import { RouterLink} from 'vue-router'

import firebaseLogo from '@images/firebase-logo.svg';
</script>

<template>
    <div>
        <aside
            class="z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-[#1C2434] duration-300 ease-linear dark:bg-boxdark lg:static">
            <!-- SIDEBAR HEADER -->
            <div class=" flex items-center p-6 pb-0">
                <img class="w-10 mr-4" :src="firebaseLogo" alt="Firebase Logo" />
                <h1 class="text-white text-xl uppercase font-bold">Inventory management</h1>
            </div>
            <!-- SIDEBAR HEADER -->

            <div class="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                <!-- Sidebar Menu -->
                <nav class="mt-5 py-4 px-4 pl-0 lg:mt-9 lg:px-6">
                    <!-- Menu Group -->
                    <div>
                        <h3 class="mb-4  text-sm font-medium text-white">MENU</h3>

                        <ul class="mb-6 flex flex-col gap-1.5">
                            <!-- Menu Item Settings -->
                            <li>
                                <RouterLink to="/dashboard" class="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:text-black hover:bg-yellow-400">
                                    <i class="text-xl mdi mdi-view-dashboard-outline"></i>
                                    Dashboard
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/product-list" class="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:text-black hover:bg-yellow-400">
                                    <i class="text-xl mdi mdi-format-list-bulleted"></i>
                                    Product List
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/profile" class="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:text-black hover:bg-yellow-400">
                                    <i class="text-xl mdi mdi-account-circle"></i>
                                    Profile
                                </RouterLink>
                            </li>
                            <!-- Menu Item Settings -->
                        </ul>
                    </div>
                </nav>
                <!-- Sidebar Menu -->
            </div>
        </aside>
    </div>
</template>

<style lang="scss" scoped></style>






