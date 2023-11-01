import {reactive, computed} from 'vue'
import {order} from './Order'


import { useToast } from 'vue-toastification';
const toast = useToast();

const cart = reactive({
    items:{},
    totalCartItems:computed(()=>{
        let total = 0
        for(let id in cart.items){
            total += cart.items[id].quantity
        }
        return total
    }),
    totalPrice:computed(()=>{
        let total = 0
        for(let id in cart.items){
            total += cart.items[id].quantity * cart.items[id].product.price
        }
        return parseFloat(total.toFixed(2))
    }),
    addItem(product){
        if(this.items[product.id]){
            this.items[product.id].quantity++
        }else{
            const clonedProduct= {...product}
            delete(clonedProduct.description)
            this.items[product.id] = {
                quantity: 1,
                product: clonedProduct
            }
        }
        cart.saveCartInLocalStorage()
        toast.success('Product added to Cart !');
    },
    removeItem(product){
        if(this.items[product.id]){
            this.items[product.id].quantity--
            if(this.items[product.id].quantity==0){
                delete this.items[product.id]
            }
        }
        cart.saveCartInLocalStorage()
        toast.success('Product removed !');
    },
    emptyCart(){
        this.items = {}
        cart.saveCartInLocalStorage()
        toast.success('Cart cleared !');
    },
    saveCartInLocalStorage(){
        localStorage.setItem('cart', JSON.stringify(this.items))
        localStorage.setItem('totalPrice', this.totalPrice)
    },
    getCartFromLocalStorage(){
        this.items = JSON.parse(localStorage.getItem('cart')) || {}
    },
    checkout(){
        order.placeOrder(this.totalPrice, this.items)
        toast.success('Order placed !');
    }
})
cart.getCartFromLocalStorage();
export {cart}