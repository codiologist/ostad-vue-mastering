<script setup>
import { onBeforeMount, ref } from 'vue';
import axios from 'axios';

// import Overlay from '../components/Overlay.vue';
import ProductBanner from '../components/ProductBanner.vue';
import ProductCard from '../components/ProductCard.vue';
const allProducts = ref([]);
const isLoading = ref(false);







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
    <ProductBanner />

    <div class="container mx-auto">
      <div class="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
        <div
          class="mb-12 md:mb-14 xl:mb-16 border border-gray-300 rounded-md pt-5 md:pt-6 lg:pt-7 pb-5 lg:pb-7 px-4 md:px-5 lg:px-7">
          <div class="flex justify-between items-center flex-wrap mb-5 md:mb-6">
            <div class="flex items-center justify-between -mt-2 mb-0">
              <h3 class="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading">Flash Sale</h3>
            </div>
          </div>
          <div
            class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-4 lg:gap-y-5 xl:gap-y-6 2xl:gap-y-8">
            <template v-for="product in allProducts" :key="product.id">
              <ProductCard :product="product" />
            </template>
          </div>
        </div>
      </div>


























    </div>

  </div>
</template>
