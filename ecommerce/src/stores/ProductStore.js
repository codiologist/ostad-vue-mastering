import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

let productsList = ref([])
let searchedProductsList = ref([])
let paginateData = ref({
  current_page: 0,
  from: 0,
  last_page: 0,
  first_page_url: '',
  last_page_url: '',
  prev_page_url: '',
  next_page_url: '',
  per_page: '',
  links: [],
  to: 0,
  total: 0,
})

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useProductStore = defineStore('products', () => {
  productsList.value = []
  paginateData.value = {}

  const getProducts = async (page) => {
    // isLoading.value = true
    try {
      let url = `${API_BASE_URL}/products?page=${page}`
      let response = await axios.get(url)


      paginateData.value.current_page = response.data.current_page;
      paginateData.value.from = response.data.from;
      paginateData.value.last_page = response.data.last_page;
      paginateData.value.first_page_url = response.data.first_page_url;
      paginateData.value.last_page_url = response.data.last_page_url;
      paginateData.value.prev_page_url = response.data.prev_page_url;
      paginateData.value.next_page_url = response.data.next_page
      paginateData.value.per_page = response.data.per_page;
      paginateData.value.links = response.data.links;
      paginateData.value.to = response.data.to;
      paginateData.value.total = response.data.total;

      productsList.value = response.data


      // console.log(productsList.value.data );
      //   isLoading.value = false

    } catch (error) {
      console.log(error.message);
    }
  };

  const searchProduct = async (input) => {
    searchedProductsList.value = []
    fetch(`${API_BASE_URL}/products/search?name=${input}`)
      .then(response => response.json())
      .then(async (response) => {
        searchedProductsList.value = response.data;
      });
  }

  return { getProducts, searchProduct, productsList, searchedProductsList, paginateData }

})
