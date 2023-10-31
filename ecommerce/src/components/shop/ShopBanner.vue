<script setup>
import BG from '@images/banner/banner-1.jpg';
</script>

<template>
  <section class="banner__area">
    <div class="container">
      <div class="banner__inner include-BG"
      :style="{ backgroundImage: `url(${BG})` }">
        <div class="row">
          <div class="col-xl-5 col-lg-6 col-md-8">
            <div class="banner__content">
              <span>Apple iPhone 12 Pro</span>
              <h3 class="banner__title">
                <RouterLink to="/products">The wait is on: iphon 12 max pro</RouterLink>
              </h3>
              <p>Last call for up to <span>32%</span> off! </p>

              <div class="banner__btn">
                <RouterLink to="/products" class="tp-btn">
                  Buy Now
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M7 1L13 7L7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
