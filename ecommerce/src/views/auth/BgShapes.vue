<script setup>
import laptop from '@images/login/laptop.png';
import man from '@images/login/man.png';
import shape_1 from '@images/login/shape-1.png';
import shape_2 from '@images/login/shape-2.png';
import shape_3 from '@images/login/shape-3.png';
import shape_4 from '@images/login/shape-4.png';
</script>



<template>
  <div class="login__shape">
    <img
      class="login__shape-1"
      :src="laptop"
      alt="login__shape"
    />
    <img class="login__shape-2" :src="man" alt="man img" />
    <img
      class="login__shape-3"
      :src="shape_1"
      alt="login__shape"
    />
    <img
      class="login__shape-4"
      :src="shape_2"
      alt="login__shape"
    />
    <img
      class="login__shape-5"
      :src="shape_3"
      alt="login__shape"
    />
    <img
      class="login__shape-6"
      :src="shape_4"
      alt="login__shape"
    />
  </div>
</template>

