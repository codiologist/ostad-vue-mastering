<script setup>
import { ref, reactive, provide, onBeforeMount, onUpdated, onBeforeUpdate, computed, watch } from 'vue'
import { useProductStore } from '../../stores/ProductStore'

import NiceSelect from '../select/NiceSelect.vue';
import SingleListProduct from './SingleListProduct.vue';
import SingleProduct from './SingleProduct.vue';
import ShopSidebar from './ShopSidebar.vue';
import LoaderPluse from '../loader/LoaderPulse.vue';
import { Bootstrap5Pagination } from 'laravel-vue-pagination';


const props = defineProps({
  right_side: {
    type: Boolean,
    default: false,
  }
})


const productStore = useProductStore()
const activeTab = ref({value: 'all', text: 'All'})
const product_items = ref([])
const isLoading = ref(false)



onBeforeMount(() => {
  isLoading.value = true;
  productStore.getProducts(1)
  setTimeout(() => {
    product_items.value = productStore.productsList.data
    isLoading.value = false;
  }, 1000);
});

onBeforeUpdate(() => {
  if (productStore.searchedProductsList.length > 0) {
    product_items.value = productStore.searchedProductsList
  }
})

const handleTabProduct = (value) => {
  activeTab.value = value;
  console.log(value);
  if (value.value === "all") {
    product_items.value = productStore.productsList.data
    // searched_product_items.value = productStore.productsList.data
  }

  if (value.value == "best") {
    let filtered_product_items = productStore.productsList.data.filter(
      (item) => {
        if(item.best_selling == "1"){
          return item
        }
      }
    );    
    product_items.value = filtered_product_items
  }

  if (value.value == "latest") {
     let filtered_product_items = productStore.productsList.data.filter(
      (item) => {
        if(item.latest == "1"){
          return item
        }
      }
    );    
    product_items.value = filtered_product_items
  }
}


const clearSearch = () =>{
  productStore.searchedProductsList = []
  product_items.value = productStore.productsList.data
}



const getResults = async (page = 1) => {
  await productStore.getProducts(page);
  product_items.value = productStore.productsList.data
};


</script>


<template>
  <section class="shop__area pb-60">
    <div class="container">
      <div class="shop__top mb-50">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-5">
            <div class="shop__result">
              <p>Showing {{ productStore.productsList.to }} –  {{ productStore.productsList.total }} results</p>
            </div>
          </div>
          <div class="col-lg-6 col-md-7">
            <div class="shop__sort d-flex flex-wrap justify-content-md-end align-items-center">
              <div class="shop__sort-item">
                <div class="shop__sort-tab tp-tab">
                  <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                      <button class="nav-link active" id="nav-grid-tab" data-bs-toggle="tab" data-bs-target="#nav-grid"
                        type="button" role="tab" aria-controls="nav-grid" aria-selected="true">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M19.65 6.868V2.782C19.65 1.513 19.074 1 17.643 1H14.007C12.576 1 12 1.513 12 2.782V6.859C12 8.137 12.576 8.641 14.007 8.641H17.643C19.074 8.65 19.65 8.137 19.65 6.868Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M19.65 17.643V14.007C19.65 12.576 19.074 12 17.643 12H14.007C12.576 12 12 12.576 12 14.007V17.643C12 19.074 12.576 19.65 14.007 19.65H17.643C19.074 19.65 19.65 19.074 19.65 17.643Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M8.65 6.868V2.782C8.65 1.513 8.074 1 6.643 1H3.007C1.576 1 1 1.513 1 2.782V6.859C1 8.137 1.576 8.641 3.007 8.641H6.643C8.074 8.65 8.65 8.137 8.65 6.868Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M8.65 17.643V14.007C8.65 12.576 8.074 12 6.643 12H3.007C1.576 12 1 12.576 1 14.007V17.643C1 19.074 1.576 19.65 3.007 19.65H6.643C8.074 19.65 8.65 19.074 8.65 17.643Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </button>
                      <button class="nav-link" id="nav-list-tab" data-bs-toggle="tab" data-bs-target="#nav-list"
                        type="button" role="tab" aria-controls="nav-list" aria-selected="false">
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1H19" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path d="M1 8H19" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path d="M1 15H19" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
              <div class="shop__sort-item">
                <div class="shop__sort-select">
                  <nice-select :options="[
                    { value: 'all', text: 'All' },
                    { value: 'latest', text: 'Sort by latest' },
                    { value: 'best', text: 'Sort by best selling' }
                  ]" :default-current="0" name="Sort by latest" @onChange="handleTabProduct" />
                </div>
              </div>
              <div v-if="productStore.searchedProductsList != 0" class="tw-ml-6">
                <button class="tp-btn-7" @click="clearSearch()">Clear Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shop__main">
        <div class="row">
          <!-- <div v-if="!right_side" class="col-lg-3"> -->

            <!-- {{ filteredcheckedItems }} -->
            <!-- {{ ckb }} -->
            <!-- sidebar start -->
            <!-- <shop-sidebar /> -->
            <!-- sidebar end -->
          <!-- </div> -->

          <div :class="`col-lg-12 ${right_side ? '' : 'order-first order-lg-last'}`">
            <div class="shop__tab-content mb-40">
              <div class="tab-content" id="shop_tab_content">
                <div class="tab-pane fade show active" id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab">
                  <!-- shop grid -->
                  <template v-if="productStore.searchedProductsList.length == 0">
                    <LoaderPluse v-if="isLoading" class="show-loader" />
                    <div class="row">
                      <div v-for="(item, i) in product_items" :key="i" class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                        <single-product :item="item" />
                      </div>
                    </div>
                  </template>
                  <template v-if="productStore.searchedProductsList.length != 0">
                    <LoaderPluse v-if="isLoading" class="show-loader" />
                    <div class="row">
                      <div v-for="(item, i) in productStore.searchedProductsList" :key="i"
                        class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                        <single-product :item="item" />
                      </div>
                    </div>
                  </template>
                </div>
                <div class="tab-pane fade" id="nav-list" role="tabpanel" aria-labelledby="nav-list-tab">
                  <!-- shop list -->
                  <div class="product__list-wrapper mb-30">
                    <div class="row">
                      <div v-for="(item, i) in product_items" :key="i" class="col-lg-12 col-md-6">
                        <single-list-product :item="item" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- pagination -->
              <div class="row">
                <div class="col-xxl-12">
                  <!-- <shop-pagination /> -->
                  <div v-if="activeTab.value == 'all'" class="tp-pagination tp-pagination-style-2">
                    <Bootstrap5Pagination :data="productStore.productsList" @pagination-change-page="getResults">
                      <template #prev-nav>
                        <span>
                          <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.17749 10.105L1.62499 5.55248L6.17749 0.999981" stroke="currentColor"
                              stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.3767 5.55249L1.75421 5.55249" stroke="currentColor" stroke-width="1.5"
                              stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                          Prev
                        </span>
                      </template>
                      <template #next-nav>
                        <span>
                          Next
                          <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.82422 1L14.3767 5.5525L9.82422 10.105" stroke="currentColor" stroke-width="1.5"
                              stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1.625 5.55249H14.2475" stroke="currentColor" stroke-width="1.5"
                              stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </span>
                      </template>
                    </Bootstrap5Pagination>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="right_side" class="col-lg-3">
            <!-- sidebar start -->
            <shop-sidebar :right_side="right_side" />
            <!-- sidebar end -->
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
