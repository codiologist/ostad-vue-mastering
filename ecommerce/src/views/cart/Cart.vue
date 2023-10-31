<script setup>

import { cart } from "../../stores/Cart"
import SingleCartItem from "./SingleCartItem.vue";

</script>

<template>
    <div>
        <section class="breadcrumb__area grey-bg p-relative include-bg pt-100 pb-100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xxl-8 col-xl-8 col-lg-10">
                        <div class="breadcrumb__content text-center p-relative z-index-1">
                            <h3 class="breadcrumb__title">My Cart</h3>
                            <div class="breadcrumb__list">
                                <span><a href="#">Home</a></span>
                                <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
                                <span>Cart</span>
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
                        <div class="table-content table-responsive">
                            <div class="tp-continue-shopping">
                                <p>
                                    <RouterLink to="/products">
                                        Continue Shopping
                                        <i class="fal fa-reply"></i>
                                    </RouterLink>
                                </p>
                            </div>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="product-thumbnail">Images</th>
                                        <th class="cart-product-name">Product</th>
                                        <th class="product-price">Unit Price</th>
                                        <th class="product-quantity">Quantity</th>
                                        <th class="product-subtotal">Total</th>
                                        <th class="product-remove">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="(product, index) in cart.items" :key="index">
                                        <!-- {{ product }} -->
                                        <SingleCartItem :productItem="product" />
                                    </template>
                                </tbody>
                            </table>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="coupon-all">
                                    <div class="coupon2">
                                        <button @click="cart.saveCartInLocalStorage()" class="tp-btn-1 tp-btn-black"
                                            name="update_cart" type="submit">
                                            Update cart
                                        </button>
                                        <button @click="cart.emptyCart()" class="tp-btn-7 ml-20" name="update_cart"
                                            type="submit">
                                            Clear Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-end">
                            <div class="col-md-5 mr-auto">
                                <div class="cart-page-total">
                                    <h2>Cart totals</h2>
                                    <ul class="mb-20">
                                        <li>Total <span> ৳ {{ cart.totalPrice }}</span></li>
                                    </ul>
                                    <button @click="cart.checkout()"
                                        class="tw-ml-5 tw-bg-green-500 tw-hover:bg-green-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded">
                                        Place Order
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>

    </div>
</template>
