<script setup>
const props = defineProps({
    productItem: {
        type: Object
    }
});

</script>



<template>
    <tr>
        <td class="product-thumbnail">
            <RouterLink :to="`/product-details/${productItem?.id}`">
                <img :src="productItem?.image" alt="cart img" />
            </RouterLink>
        </td>
        <td class="product-name">
            <RouterLink :to="`/product-details/${productItem?.id}`">{{ productItem?.title }}</RouterLink>
        </td>
        <td class="product-price"><span class="amount">৳ {{ productItem?.price }}</span></td>
        <td class="product-remove">
            <button type="button" @click.stop="cart.addItem(productItem)">Add To Cart</button>
        </td>
    </tr>
</template>
  

  