<script setup >
import { ref, onMounted, onBeforeMount } from 'vue'
import { useProductStore } from '../../stores/ProductStore'
import SingleProduct from "./SingleProduct.vue";

const productStore = useProductStore()

const tabs = ref(["Best Selling", "Latest Products"])
const activeTab = ref("Best Selling")
const product_items = ref([])

onBeforeMount(() => {
  productStore.getProducts(1)
  console.log(productStore.productsList.data);
  setTimeout(() => {
    product_items.value = productStore.productsList.data.filter(
      (item) => item.best_selling
    );
  }, 1000);
});




function handleTabProduct(value) {
  activeTab.value = value;
  if (value === "Best Selling") {
    product_items.value = productStore.productsList.data.filter(
      (item) => item.best_selling
    );
  }
  if (value === "Latest Products") {
    product_items.value = productStore.productsList.data.filter(
      (item) => item.latest
    );
  }
}

</script>

<template>
  <section class="product__popular-area pt-60 pb-20">
    <pre>
      <!-- {{ productStore.productsList }} -->
      <!-- {{ product_items }} -->
    </pre>
    <div class="container">
      <div class="row align-items-end">
        <div class="col-xl-6 col-lg-6 col-md-6">
          <div class="section__title-wrapper-13 mb-35">
            <h3 class="section__title-13">Popular Products</h3>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6">
          <div class="product__tab tp-tab mb-35">
            <ul class="nav nav-tabs justify-content-md-end" id="productTab" role="tablist">
              <li v-for="(tab, i) in tabs" :key="i" class="nav-item" @click="handleTabProduct(tab)">
                <button :class="`nav-link ${activeTab === tab ? 'active' : ''}`" id="top-tab" type="button">
                  {{ tab }}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="product__tab-wrapper">
        <div class="row">
          <div v-for="(item, i) in product_items" :key="i" class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <SingleProduct :item="item" />
          </div>
          <!-- <template v-if="activeTab != 'All'">
            <div v-for="(item, i) in product_items" :key="i" class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <SingleProduct :item="item" />
            </div>
          </template>
          <template v-if="activeTab == 'All'">
            <div v-for="(item, i) in productStore.productsList" :key="i" class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <SingleProduct :item="item" />
            </div>
          </template> -->
        </div>
      </div>
    </div>
  </section>
</template>


