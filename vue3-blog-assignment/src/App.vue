<script setup>
import { ref, provide } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios';
import { IconHome } from '@tabler/icons-vue';
import Footer from './components/Footer.vue';


const categories = ref([])

const getcategories = async () => {
  try {
    let url = "https://basic-blog.teamrabbil.com/api/post-categories"
    let response = await axios.get(url)
    categories.value = response.data

  } catch (error) {
    console.log(error.message);
  }
}

getcategories();

provide("postCategories", categories);




</script>

<template>
  <div class="wrapper">
  <header>
      <nav id="navbar"
        class="py-5 px-2 md:px-4 xl:px-6 2xl:px-4 bg-indigo-500 text-white text-sm xl:fixed top-0 left-0 right-0 transition-all duration-400 z-10">
        <div class="relative xl:flex items-center justify-between xl:space-x-12 flex-wrap">
          <RouterLink  to="/" class="text-2xl font-semibold">ব্লগ ডেইলি</RouterLink>
          <!-- nav links -->
          <ul
            class="nav-links flex lg:items-center justify-center lg:space-x-10 xl:space-x-6 2xl:space-x-10 lg:h-auto">
            <li>
              <RouterLink to="/"> <IconHome class="inline-block" size="20" /> হোম</RouterLink>
            </li>
            <li v-for="category in categories" :key="category.id">
              <RouterLink :to="{ name: 'post-categories', params: { id: category.id } }">{{ category.name }}</RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    
    <div class="min-h-[865px]">
      <RouterView />

    </div>
    <Footer/>
  </div>
</template>

<style >
.nav-links li a{
  position: relative;
  font-size: 16px;
}

.nav-links li a::before{
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 100%;
  height: 2px;
  content: "";
  background-color: #6366F1;
  transition: all 0.2s ease-in;
}

.nav-links li a:hover::before{
  background-color: #fff;
}


.router-link-active::before{
  background-color: #fff !important;
}
</style>

