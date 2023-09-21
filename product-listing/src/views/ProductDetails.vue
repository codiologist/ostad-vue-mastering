<script setup >
import { onBeforeMount, ref } from 'vue';
import axios from 'axios';
import { useRoute } from "vue-router";

// import Overlay from '../components/Overlay.vue';
const productDetails = ref([]);
const isLoading = ref(false);
const route = useRoute();

import BannerImage from "@/assets/images/hero-image-04.jpg"







onBeforeMount(() => {
    const getProductDetails = async () => {
        isLoading.value = true
        try {
            let url = `https://fakestoreapi.com/products/${route.params.id}`
            let response = await axios.get(url)
            console.log(response);
            productDetails.value = response.data
            isLoading.value = false

        } catch (error) {
            console.log(error.message);
        }
    };

    getProductDetails();
});




</script>

<template>
    <div>
        {{ route.params.id }}
        <div class="container mx-auto">



            <div class="-mx-5 flex flex-col justify-between pt-16 pb-24 lg:flex-row">
                <div class="flex flex-col-reverse justify-between px-5 sm:flex-row-reverse lg:w-1/2 lg:flex-row">

                    <div class="relative w-full pb-5 sm:pb-0">
                        <div
                            class="aspect-w-1 aspect-h-1 relative flex items-center justify-center rounded border border-grey bg-v-pink">
                            <img class="object-cover" alt="product image" :src="productDetails.image">
                        </div>
                    </div>
                </div>

                <div class="px-5 pt-8 lg:w-1/2 lg:pt-0">
                    <div class="mb-8 border-b border-grey-dark">
                        <div class="flex items-center">
                            <h2 class="font-butler text-3xl">
                                {{ productDetails.title }}
                            </h2>
                        </div>
                        <div class="flex items-center pt-3">
                            <span class="font-hk text-2xl text-secondary">${{ productDetails.price }}</span>
                        </div>
                        <div class="flex items-center pt-3 pb-8">
                            <div class="flex items-center">
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                            </div>
                            <span class="ml-2 font-hk text-sm text-secondary">({{ productDetails.rating.rate }})</span>
                        </div>
                    </div>
                    <div class="flex pb-5">
                        <p class="font-hk text-secondary">Availability:</p>
                        <p class="font-hkbold pl-3 text-v-green">
                            In Stock
                        </p>
                    </div>
                    <div class="mb-3">
                        <p class="font-hk text-secondary capitalize">
                        <span class="pr-2">Categories:</span> {{ productDetails.category }}
                    </p>
                    </div>
                    
                    <p class="pb-5 font-hk text-secondary">
                        {{ productDetails.description }}
                    </p>


                    <div class="group flex pb-8">
                        <button class="px-4 py-2 font-semibold text-sm bg-[#F35627] text-white rounded-full shadow-sm mr-4 md:mr-6">Add to cart</button>
                        <button class="px-4 py-2 font-semibold text-sm bg-[#F35627] text-white rounded-full shadow-sm">BUY NOW</button>
                    </div>
                </div>
            </div>



        </div>
    </div>
</template>

<style lang="scss" scoped></style>