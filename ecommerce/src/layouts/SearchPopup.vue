<script setup>

import { ref, provide } from 'vue';
import { useProductStore } from '../stores/ProductStore'


const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['hideModal']);

const searchItemInput = ref('');
const productStore = useProductStore()


const hideModal = () => {
  emit('hideModal');
};


const handleSearch = (value) => {
  productStore.searchProduct(value)
  hideModal()
  console.log(value);
};

</script>


<template>
  <div :class="`search__popup ${show ? 'search-opened' : ''}`">
    <!-- {{ products }} -->
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="search__wrapper">
            <div class="search__top d-flex justify-content-between align-items-center">
              <div class="search__logo">
                <!-- <nuxt-link href="/">
                  <img src="~/assets/img/logo/logo.svg" alt="logo" />
                </nuxt-link> -->
              </div>
              <div class="search__close">
                <button @click="hideModal" type="button" class="search__close-btn search-close-btn">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="search__form">
              <div class="search__input">
                <input v-model="searchItemInput" class="search-input-field" type="text"
                  placeholder="Type here to search..." />
                <span class="search-focus-border"></span>
                <button type="button" @click.prevent="handleSearch(searchItemInput)">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentColor" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
