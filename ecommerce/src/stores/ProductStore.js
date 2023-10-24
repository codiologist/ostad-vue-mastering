import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

let productsList = ref([])

export const useProductStore = defineStore('products', () => {
    productsList.value = []

    const getProducts = async () => {
        // isLoading.value = true
        try {
          let url = `http://localhost:8000/api/products`
          let response = await axios.get(url)
          console.log(response);
          productsList.value = response.data.data
        //   isLoading.value = false
    
        } catch (error) {
          console.log(error.message);
        }
      };
    
    return { getProducts, productsList }

})