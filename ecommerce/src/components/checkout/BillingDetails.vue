<script setup>
import { authStore } from '../../stores/authStore';
const auth = authStore

const credentials = ref({
  username: '',
  email: '',
  password: '',
  address: '',
});

</script>

<template>
  <div class="row">
    <div class="col-md-12">
      <div class="checkout-form-list">
        <label> Name <span class="required">*</span></label>
        <input type="text" placeholder="Name" />
      </div>
    </div>
    <div class="col-md-12">
      <div class="checkout-form-list">
        <label>Email <span class="required">*</span></label>
        <input type="email" placeholder="name@example.com" />
      </div>
    </div>
    <div class="col-md-12">
      <div class="checkout-form-list">
        <label>Address <span class="required">*</span></label>
        <input type="text" placeholder="Write your full address here..." />
      </div>
    </div>
    <div class="col-md-12">
      <div class="checkout-form-list">
        <label>Password <span class="required">*</span></label>
        <input type="password" placeholder="******" />
      </div>
    </div>
  </div>
</template>

