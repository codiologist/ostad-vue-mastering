<script lang="ts" setup>

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
                                        <nuxt-link href="/shop">
                                            Continue Shopping <i class="fal fa-reply"></i>
                                        </nuxt-link>
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
                                        <single-cart-item :img="cart_img_1" title="Level Bolt Smart Lock" price="130.00" />
                                    </tbody>
                                </table>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="tp-wishlist-btn mt-50">
                                        <nuxt-link href="/cart" class="tp-btn tp-btn-black">Go to Cart</nuxt-link>
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
