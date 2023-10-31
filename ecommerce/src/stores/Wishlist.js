import { reactive } from 'vue'
import { authStore } from '../stores/AuthStore'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const wishlist = reactive({
    items: [],
    isWishListed(product) {
        return this.items.includes(product.id)
    },
    async fetchWishlist() {
        const apiUrl = `${API_BASE_URL}/wishlist`
        const token = authStore.getUserToken()
        if(!token){
            return
        }
        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }

            })

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const wishlistData = await response.json();
            this.items = wishlistData.wishlist
        } catch (error) {
            console.error('Error fetching wishlist:', error);
        }
    },
    async toggleWishlist(product) {
        let apiUrl = `${API_BASE_URL}/wishlist`
        let method = 'POST'
        let payload = {
            product_id: product.id
        }
        const token = authStore.getUserToken()

        if (!this.isWishListed(product)) {
            //add item to wishlist
            this.items.push(product.id)
        } else {
            //remove item from wishlist
            this.items = this.items.filter(id => id != product.id)
            apiUrl = `${API_BASE_URL}/wishlist/${product.id}` //DELETE
            method = 'DELETE'
            payload = {}
        }

        try {
            const response = await fetch(apiUrl, {
                method: method,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // const data = await response.json();
            // console.log('Product ID saved to wishlist:', data);
        } catch (error) {
            console.log(error);
        }

    },
    
    toggleIconClass(product) {
        if (this.isWishListed(product)) {
            return 'fa-solid fa-heart'
        } else {
            return 'fa-regular fa-heart'
        }
    },
    clearItems(){
        console.log('clearing items')
        this.items = []
    }


})

export { wishlist }