<script setup>
import Logo from "@images/logo.svg";
import NavItems from './NavItems.vue';

const props = defineProps({
  isOffCanvasOpen: {
    type: Boolean,
  }
});

const emit = defineEmits(['closeOffcanvas']);
const closeOffcanvas = () => {
  emit('closeOffcanvas');
};
</script>
  

<template>
  <div :class="`offcanvas__area offcanvas__area-5 ${isOffCanvasOpen ? 'offcanvas-opened' : ''}`">
    <div class="offcanvas__wrapper offcanvas__wrapper-5">
      <div class="offcanvas__shape">
        <img :src="Logo" alt="logo">
      </div>
      <div class="offcanvas__close">
        <button @click="closeOffcanvas" class="offcanvas__close-btn offcanvas__close-btn-5 offcanvas-close-btn">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <div class="offcanvas__content">
        <div class="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
          <div class="offcanvas__logo logo">
            <RouterLink to="/">
              <img :src="Logo" alt="logo">
            </RouterLink>
          </div>
        </div>
        <div class="mobile-menu fix mb-40 menu-counter mean-container d-lg-none">
          <div class="mean-bar">
            <!-- MobileMenus start -->
            <nav class="mean-nav">
              <NavItems @toggleMobileNav="closeOffcanvas"/>
            </nav>
            <!-- MobileMenus end -->
          </div>
        </div>
        <div class="offcanvas__social-5 mb-20">
          <h3 class="offcanvas__social-title-5">Follow :</h3>
          <!-- <social /> -->
        </div>
      </div>
    </div>
  </div>
  <!-- body overlay start -->
  <div @click="closeOffcanvas" :class="`body-overlay ${isOffCanvasOpen ? 'opened' : ''}`"></div>
  <!-- body overlay end -->
</template>
  
