<script setup>
import Header from './lauouts/Header.vue';
import Footer from './lauouts/Footer.vue';
import AppIntro from './components/AppIntro.vue';
import TrusterdPartners from './components/TrusterdPartners.vue';
import AwesomeFeatures from './components/AwesomeFeatures.vue';
import SmartFeatures from './components/SmartFeatures.vue';
import About from './components/About.vue';
import Pricing from './components/pricing.vue';
import Testimonial from './components/Testimonial.vue';
import FAQ from './components/FAQ.vue';
import CTA from './components/CTA.vue';
import ChooseFeatures from './components/ChooseFeatures.vue';
import UltimateFeatures from './components/UltimateFeatures.vue';

</script>

<template>
  <main class="main" id="top">
    <Header />
    <AppIntro />
    <TrusterdPartners />
    <AwesomeFeatures />
    <SmartFeatures />
    <About />
    <ChooseFeatures/>
    <UltimateFeatures/>
    <Pricing />
    <Testimonial />
    <FAQ />
    <CTA/>
    <Footer />
  </main>
</template>


