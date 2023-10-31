<script setup>
import { cart } from "../../stores/Cart"
const props = defineProps({
    productItem: {
        type: Object
    }
});

function handleIncrement() {
    props.productItem.quantity = props.productItem.quantity + 1
}
function handleDecrement() {
    if (props.productItem.quantity > 1) {
        props.productItem.quantity = props.productItem.quantity - 1
    }
}
</script>



<template>
    <tr>
        <td class="product-thumbnail">
            <RouterLink :to="`/product-details/${productItem.product?.id}`">
                <img :src="productItem.product?.image" alt="cart img" />
            </RouterLink>
        </td>
        <td class="product-name">
            <RouterLink :to="`/product-details/${productItem.product?.id}`">{{ productItem.product?.title }}</RouterLink>
        </td>
        <td class="product-price"><span class="amount">৳ {{ productItem.product.price }}</span></td>
        <td class="product-quantity">
            <div class="tp-product-quantity mt-10 mb-10">
                <span class="tp-cart-minus" @click="handleDecrement">
                    <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </span>
                <input class="tp-cart-input" type="text" v-model="productItem.quantity" />
                <span class="tp-cart-plus" @click="handleIncrement">
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.21924 7H13.3836" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M7.30176 13V1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </span>
            </div>
        </td>
        <td class="product-subtotal"><span class="amount">৳ {{ productItem.product.price * productItem.quantity }} </span></td>
        <td class="product-remove">
            <button @click="cart.removeItem(productItem.product)"><i class="fa fa-times"></i></button>
        </td>
    </tr>
</template>
  

  