import { reactive } from 'vue';
import { authStore } from '../stores/AuthStore';

// Make sure you have a VITE_API_BASE_URL in your environment.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

import { useToast } from 'vue-toastification';
const toast = useToast();

const wishlist = reactive({
  items: [],

  isWishListed(product) {
    if (product && product.id) {
      return this.items.includes(product.id);
    }
    return false; // Return false or handle the error case accordingly
  },

  async fetchWishlist() {
    const apiUrl = `${API_BASE_URL}/wishlist`;
    const token = authStore.getUserToken();
    if (!token) {
      return;
    }
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const wishlistData = await response.json();
      this.items = wishlistData.wishlist;
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    }
  },
  async toggleWishlist(product) {
    let apiUrl = `${API_BASE_URL}/wishlist`;
    let method = 'POST';
    let payload = {
      product_id: product.id,
    };
    const token = authStore.getUserToken();

    if (!this.isWishListed(product)) {
      // Add item to wishlist
      if (authStore.isAuthenticated) {
        this.items.push(product.id);
        toast.success('Product added to Wishlist !');
      } else {
        toast.info('Please login to add product in Wishlist !');
        return; // Exit early to prevent the API call when not authenticated.
      }
    } else {
      // Remove item from wishlist
      this.items = this.items.filter((id) => id !== product.id);
      apiUrl = `${API_BASE_URL}/wishlist/${product.id}`; // DELETE
      method = 'DELETE';
      payload = {};
      toast.success('Product removed from Wishlist !');
    }

    try {
      const response = await fetch(apiUrl, {
        method: method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle the response as needed
    } catch (error) {
      console.error(error);
    }
  },

  toggleIconClass(product) {
    if (this.isWishListed(product)) {
      return 'fa-solid fa-heart';
    } else {
      return 'fa-regular fa-heart';
    }
  },

  clearItems() {
    console.log('clearing items');
    this.items = [];
  },
});

export { wishlist };
