<script setup >
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div>
    <div
      class="group box-border overflow-hidden flex rounded-md border border-gray-200 ltr:pr-0 rtl:pl-0 flex-col items-center"
      role="button" :title="product.title">
      <div class="mt-3 mb-3 md:mb-3.5 pb-0 text-center">
        <img alt="" :src="product.image" decoding="async" data-nimg="intrinsic"
          class="bg-gray-300 w-full max-h-[120px] mx-auto object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform group-hover:scale-105">
      </div>
      <div class="w-full overflow-hidden p-2 ltr:pl-0 rtl:pr-0 bg-gray-100">
        <h2 class="truncate mb-1 font-bold md:mb-1.5 text-base ">
          {{ product.title }}
        </h2>
        <div class="font-semibold text-sm  mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3
           text-heading">
          <span class="inline-block false">${{ product.price }}</span>
        </div>
        <div class="mt-4 mb-4">
          <RouterLink class="px-4 py-2 font-semibold text-sm bg-[#F35627] text-white rounded-full shadow-sm" :to="{name: 'product-details', params: {id: product.id}}">View Details</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>