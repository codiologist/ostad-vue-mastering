<script setup>
import { onBeforeMount } from "vue";
import { order } from "../../stores/Order";

onBeforeMount(() => {
    order.fetchOrders();
});

// function toggleProducts(orderId) {
//     const order_item = order.orders.find((o) => o.id === orderId);
//     if (order_item) {
//         order_item.showProducts = !order_item.showProducts;
//     }
// }
</script>

<template>
    <div>
        <section class="accordion__area faq__style-3 pt-110 pb-105">
            <div class="container">
                <div class="row">
                    <div class="col-xxl-12">
                        <div class="tp-section-wrapper-3 mb-65 text-center">
                            <h3 class="tp-section-title-3">Order Summary</h3>
                        </div>
                    </div>
                </div>
                <div v-if="order.orders.length != 0" class="row">
                    <div class="col-xl-12">
                        <div class="faq__tab-content tp-accordion">
                            <div class="accordion" id="general_accordion_p">
                                <div class="accordion-item" v-for="s_order in order.orders" :key="s_order.id">
                                    <h2 class="accordion-header" :id="`${s_order.id}_p`">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            :data-bs-target="`#collapse${s_order.id}_p`" aria-expanded="true"
                                            :aria-controls="`collapse${s_order.id}_p`">
                                            Order ID : {{ s_order.id }}
                                        </button>
                                    </h2>
                                    <div :id="`collapse${s_order.id}_p`" class="accordion-collapse collapse show"
                                        :aria-labelledby="`${s_order.id}_p`" data-bs-parent="#general_accordion_p">
                                        <div class="accordion-body">
                                            <div v-for="product in s_order.products" :key="product.id">
                                                <div class="tw-mb-6">
                                                    <p>Product Name: {{ product.title }}</p>
                                                    <p>Price:  {{ product.price }}</p>
                                                    <p>Quantity: {{ product.quantity }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <h2 class="text-center tw-text-rose-700">No Orders Found</h2>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped></style>
