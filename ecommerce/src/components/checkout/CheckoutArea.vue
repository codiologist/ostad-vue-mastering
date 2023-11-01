
<script setup>
import BillingDetails from "./BillingDetails.vue";
import OrderArea from "./OrderArea.vue";
</script>

<template>
  <section class="checkout-area pb-85">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="checkbox-form">
            <h3>Billing Details</h3>
            <billing-details />
          </div>
        </div>
        <div class="col-lg-6">
          <!-- order area start -->
          <order-area />
          <!-- order area end -->
        </div>
      </div>
    </div>
  </section>
</template>

