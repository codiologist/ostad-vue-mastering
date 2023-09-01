<script setup>
import { ref, watch, inject } from 'vue';
import { useRoute } from "vue-router";
import axios from 'axios';
import PostCard from '../../components/PostCard.vue';
import Overlay from '../../components/Overlay.vue';


const route = useRoute();
const allPost = ref([])
const postCategoryName = ref("")
const isLoading = ref(false)

const postCategories = inject("postCategories");

postCategories.value.filter((item) => {
  if (item.id == route.params.id) {
    postCategoryName.value = item.name
  }
});

const getAllPost = async (id) => {
  isLoading.value= true
  allPost.value = []
  try {
    let url = `https://basic-blog.teamrabbil.com/api/post-list/${id}`
    let response = await axios.get(url)
    allPost.value = response.data
    isLoading.value= false
  } catch (error) {
    console.log(error.message);
  }
};

getAllPost(route.params.id)

watch(() => route.params.id, () => {
  getAllPost(route.params.id)
  postCategories.value.filter((item) => {
    if (item.id == route.params.id) {
      postCategoryName.value = item.name
    }
  });
});
</script>

<template>
  <div>
    <Overlay v-if="isLoading" />
    <div class="container mx-auto  pt-12 lg:pt-32">
      <h2 class="text-center mb-8">
        <span
          class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-700 relative inline-block px-6 pt-3 pb-1">
          <span class="relative text-white text-4xl">{{ postCategoryName }}</span>
        </span>
      </h2>
      <div class="flex flex-wrap justify-center md:pb-4">
        <template v-for="post in allPost" :key="post.id">
          <PostCard :post="post" />
        </template>
      </div>
    </div>
  </div>
</template>

<style></style>