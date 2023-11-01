
<script setup>
import BillingDetails from "./BillingDetails.vue";
import OrderArea from "./OrderArea.vue";
</script>

<template>
  <section class="checkout-area mt-70 pb-85">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="checkbox-form">
            <h3 class="tw-mb-10">Billing Details</h3>
            <billing-details />
          </div>
        </div>
        <div class="col-lg-6">
          <!-- order area start -->
          
          <div class="checkbox-form">
            <h3 class="tw-mb-10">Order  Details</h3>
            <order-area />
          </div>
          <!-- order area end -->
        </div>
      </div>
    </div>
  </section>
</template>

