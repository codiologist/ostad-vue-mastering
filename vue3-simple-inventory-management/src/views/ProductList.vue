<script setup>
import { ref, onBeforeMount } from 'vue';
import axios from 'axios';

import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';


const allProducts = ref([]);
const isLoading = ref(false);

const headers = [

    { text: "Image", value: "image", sortable: true },
    { text: "Name", value: "title" },
    { text: "Unit Price ($)", value: "price", sortable: true },
    { text: "Rating", value: "rating.rate", sortable: true },
    { text: "Actions", value: "actions" },
];



onBeforeMount(() => {
    const getAllProducts = async () => {
        isLoading.value = true
        try {
            let url = "https://fakestoreapi.com/products"
            let response = await axios.get(url)
            console.log(response);
            allProducts.value = response.data
            isLoading.value = false

        } catch (error) {
            console.log(error.message);
        }
    };

    getAllProducts();
});



</script>

<template>
    <div>
        <Vue3EasyDataTable :headers="headers" :items="allProducts" :rows-per-page="10" show-index alternating border-cell
            buttons-pagination>
            <template #item-image="{ image }">
                <div class="text-center">
                    <img class="h-7 mx-auto" :src="image" alt="">
                </div>
            </template>
            <template #item-actions="allProducts">
                <RouterLink  :to="{ name: 'product-details', params: { id: allProducts.id } }"
                    class="flex items-center justify-center mx-auto bg-yellow-400 hover:bg-yellow-400 focus:bg-yellow-400 text-black rounded-sm text-xs font-semibold ">
                    <i class="mr-1 text-md text-black mdi mdi-link"></i>
                    View
                </RouterLink>
            </template>
        </Vue3EasyDataTable>
    </div>
</template>

<style lang="scss" scoped></style>