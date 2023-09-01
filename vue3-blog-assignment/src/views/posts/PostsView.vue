<script setup>
import { ref } from 'vue';
import axios from 'axios';
import PostCard from '../../components/PostCard.vue';
import Overlay from '../../components/Overlay.vue';


const allLatestPosts = ref([])
const isLoading = ref(false)



const getLatestPost = async () => {
  isLoading.value= true
  try {
    let url = "https://basic-blog.teamrabbil.com/api/post-newest"
    let response = await axios.get(url)
    allLatestPosts.value = response.data
    isLoading.value= false

  } catch (error) {
    console.log(error.message);
  }
};

getLatestPost()

</script>

<template>
  <div>
    <Overlay v-if="isLoading"/>
    <div class="container mx-auto pt-12 lg:pt-32">
      <h2 class="text-center mb-8">
        <span
          class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-700 relative inline-block px-6 pt-3 pb-1">
          <span class="relative text-white text-4xl">সাপ্রতিক পোস্ট</span>
        </span>
      </h2>
      <div class="flex flex-wrap justify-center md:pb-4">
        <template v-for="post in allLatestPosts" :key="post.id">
          <PostCard :post="post" />
        </template>
      </div>
    </div>

  </div>
</template>
