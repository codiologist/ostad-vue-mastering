
<script setup>
import { onBeforeMount, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import sal from 'sal.js'
// import ProductModal from '../common/modals/ProductModal.vue';
import { cart } from '../../stores/Cart'
import { authStore } from '../../stores/AuthStore'
import { useProductStore } from '../../stores/ProductStore'
import { wishlist } from '../../stores/Wishlist'


import { useToast } from 'vue-toastification';
const toast = useToast();

const props = defineProps({
  item: {},
});
const productStore = useProductStore()

onBeforeMount(() => {
  productStore.getProducts(1)
  wishlist.fetchWishlist()
})

onMounted(() => {
  sal({
    threshold: 0.1,
    once: true
  });
});

const handleAuth = () => {
  toast.info('Please login to add product in Wishlist !');
}

</script>

<template>
  <div class="product__item p-relative transition-3 mb-50" data-sal="slide-up" data-sal-delay="130"
    data-sal-duration="1000">
    <div class="product__thumb w-img p-relative fix">
      <RouterLink :to="`/product-details/${item.id}`">
        <img :src="item.image" alt="product-details img">
      </RouterLink>

      <div v-if="item.badge" class="product__badge d-flex flex-column flex-wrap">
        <span :class="`product__badge-item ${item.badge === 'new' ? 'has-new' : ''}`">
          {{ item.badge }}
        </span>
      </div>

      <div class="product__action d-flex flex-column flex-wrap">
        <button v-if="authStore.isAuthenticated" @click="wishlist.toggleWishlist(item)" class="product-action-btn">
          <i class="tw-text-[20px]" :class="wishlist.toggleIconClass(item)"></i>
          <span class="product-action-tooltip">Add To Wishlist</span>
        </button>
        <button v-else @click="handleAuth()" class="product-action-btn">
          <i class="fa-regular fa-heart tw-text-[20px]"></i>
          <span class="product-action-tooltip">Add To Wishlist</span>
        </button>
      </div>
      <div class="product__add transition-3">
        <button @click="cart.addItem(item)" class="product-add-cart-btn w-100">
          Add to Cart
        </button>
      </div>
    </div>
    <div class="product__content">
      <div class="product__rating d-flex">
        <span v-for="(count, index) in Number(item.rating)" :key="index">
          <i class="icon_star"></i>
        </span>
      </div>
      <h3 class="product__title">
        <RouterLink :to="`/product-details/${item.id}`">{{ item.title }}</RouterLink>
      </h3>
      <div class="product__price">
        <span class="product__ammount">৳ {{ item.price }}</span>
      </div>
    </div>
  </div>

  <!-- product modal start -->
  <!-- <product-modal :item="item" :modal_id="`productModal-${item.id}`" /> -->
  <!-- product modal end -->
</template>



