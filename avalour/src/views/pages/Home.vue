<script setup>
import { onMounted } from 'vue';
import sal from 'sal.js'
import Header from '@/layouts/header/Header.vue';
import Footer from '@/layouts/footer/Footer.vue';
import CreativeHero from './components/CreativeHero.vue';
import Features from './components/Features.vue';
import About from './components/About.vue';
import Service from './components/Service.vue';
import Faq from './components/Faq.vue';
import Testimonials from './components/Testimonials.vue';
import Contact from './components/Contact.vue';
import BackToTop from '@/components/BackToTop.vue';

onMounted(() => {
  sal({
    threshold: 0.1,
    once: true
  });
});
</script>

<template>
  <div>
    <Header />
    <main>
      <CreativeHero/>
      <Features/>
      <About/>
      <Service/>
      <Faq/>
      <div class="tp-separator"></div>
      <Testimonials/>
      <Contact/>
    </main>
    <Footer/>
    <BackToTop/>
  </div>
</template>
