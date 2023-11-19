<script setup>
import agn_ser_1 from "@images/services/5/services-1.png";
import agn_ser_2 from "@images/services/5/services-2.png";
import agn_ser_3 from "@images/services/5/services-3.png";

const service_data = [
  {
    id: 1,
    delay: "130",
    img: agn_ser_1,
    title: "Strategy & Research.",
    subtitle:
      "Our design services starts and ends best in class experience.",
  },
  {
    id: 2,
    delay: "150",
    img: agn_ser_2,
    title: "UI/UX Analysis",
    subtitle:
      "Our design services starts and ends best in class experience.",
  },
  {
    id: 3,
    delay: "170",
    img: agn_ser_3,
    title: "Search Optimization",
    subtitle:
      "Our design services starts and ends best in class experience.",
  },
];
</script>

<template>
  <section id="service" class="services__area grey-bg-8 pt-110 pb-130 p-relative z-index-1">
    <div class="services__shape">
      <img class="services__shape-4" src="@images/services/5/shape/services-shape-1.png" alt="shape" />
      <img class="services__shape-5" src="@images/services/5/shape/services-shape-2.png" alt="shape" />
      <img class="services__shape-6" src="@images/services/5/shape/services-shape-3.png" alt="shape" />
      <img class="services__shape-7" src="@images/services/5/shape/services-shape-4.png" alt="shape" />
      <img class="services__shape-8" src="@images/services/5/shape/services-shape-5.png" alt="shape" />
      <img class="services__shape-9" src="@images/services/5/shape/services-shape-6.png" alt="shape" />
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-8 col-xl-8 col-lg-10">
          <div class="services__section-title-5" data-sal="slide-up" data-sal-delay="150" data-sal-duration="1000">
            <div class="section__title-wrapper-5 mb-70 text-center">
              <span class="section__title-pre-5">What We Create</span>
              <h3 class="section__title-5">
                We provide wide range of digital services
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="item in service_data" :key="item.id" class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
          <div class="services__item-5 mb-30 white-bg wow fadeInUp" data-sal="slide-up" data-sal-delay="item.delay"
            data-sal-duration="1000">
            <div class="services__item-5-inner text-center transition-3 white-bg">
              <div class="services__content-5">
                <h3 class="services__title-5">{{ item.title }}
                </h3>
                <p>{{ item.subtitle }}</p>
              </div>
              <div class="services__thumb-5">
                <img :src="item.img" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  