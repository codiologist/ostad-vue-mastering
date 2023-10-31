<script setup>
import { ref, onBeforeMount, computed } from 'vue'
import { RouterLink } from 'vue-router';
import { wishlist } from '../../stores/Wishlist'
import { useProductStore } from '../../stores/ProductStore'

import SingleWishListtem from './SingleWishListtem.vue';

const productStore = useProductStore()

const wiisListItemsID = ref([])
const products = ref([])
const wishlistItems = ref([])

onBeforeMount(() => {
    wishlist.fetchWishlist()
    productStore.getProducts()
    setTimeout(() => {
        wiisListItemsID.value = wishlist.items
        products.value = productStore.productsList.data
    }, 1000);

});

const ComputedWishList = computed(() => {
    return products.value.filter((product) => {
        return wiisListItemsID.value.includes(product.id)
        // return product
    })
})


console.log();





</script>

<template>
    <div>
        <section class="breadcrumb__area grey-bg p-relative include-bg pt-100 pb-100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xxl-8 col-xl-8 col-lg-10">
                        <div class="breadcrumb__content text-center p-relative z-index-1">
                            <h3 class="breadcrumb__title">My Wishlist</h3>
                            <div class="breadcrumb__list">
                                <span><a href="#">Home</a></span>
                                <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
                                <span>Wishlist</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="cart-area pt-100 pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <form action="#">
                            <div class="table-content table-responsive">
                                <div class="tp-continue-shopping">
                                    <p>
                                        <RouterLink to="/products">
                                            Continue Shopping <i class="fal fa-reply"></i>
                                        </RouterLink>
                                    </p>
                                </div>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th class="product-thumbnail">Images</th>
                                            <th class="cart-product-name">Product</th>
                                            <th class="product-price">Unit Price</th>
                                            <th class="product-remove">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <template v-for="product in ComputedWishList" :key="product.id">
                                            <!-- {{ product }} -->
                                            <SingleWishListtem  :productItem="product"/>
                                        </template>
                                    </tbody>
                                </table>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="tw-flex">
                                        <div class="tp-wishlist-btn mt-50 mr-20">
                                            <RouterLink to="/cart" class="tp-btn tp-btn-black">Go to Cart</RouterLink>
                                        </div>
                                        <div class="tp-wishlist-btn mt-50">
                                            <!-- <button type="button" @click="wishlist.clearItems()" class="tp-btn tp-btn-pink">Remove</button> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
