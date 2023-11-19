<script setup>
import { reactive } from "vue"

const props = defineProps({
  style_2: {
    type: Boolean,
    default: false,
  },
})

let formValue = reactive({
  name: "",
  email: "",
  phone: "",
  company: "",
  msg: "",
})

function handleSubmit() {
  console.log(formValue.value);
  formValue = {};
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="row">
      <div class="col-md-6">
        <div class="contact__input-2">
          <input name="name" v-model="formValue.name" type="text" placeholder="Enter your name" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="contact__input-2">
          <input name="email" v-model="formValue.email" type="email" placeholder="Enter your email" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="contact__input-2">
          <input name="phone" v-model="formValue.phone" type="text" placeholder="Mobile no" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="contact__input-2">
          <input name="company" v-model="formValue.company" type="text" placeholder="Company" />
        </div>
      </div>
      <div class="col-md-12">
        <div class="contact__input-2">
          <textarea name="message" v-model="formValue.msg" placeholder="Your message"></textarea>
        </div>
      </div>
      <div class="col-md-12">
        <div class="contact__agree d-flex align-items-start mb-25">
          <input class="e-check-input" type="checkbox" id="e-agree" />
          <label class="e-check-label" for="e-agree">
            I am bound by the terms of the Service I accept Privacy
            Policy.
          </label>
        </div>
      </div>
      <div class="col-md-12">
        <div class="contact__btn-2">
          <button type="submit" class="tp-btn-5">Send Message</button>
        </div>
      </div>
    </div>
  </form>
</template>
