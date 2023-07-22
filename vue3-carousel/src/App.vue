<script setup>

// 👉 Imports
import { ref, onMounted } from "vue";

import
slide1 from "@images/slide-1.jpg"
import slide2 from "@images/slide-2.jpg"
import slide3 from "@images/slide-3.jpg"
import slide4 from "@images/slide-4.jpg"
import slide5 from "@images/slide-5.jpg"
import slide6 from "@images/slide-6.jpg"
import slide7 from "@images/slide-7.jpg"
import slide8 from "@images/slide-8.jpg"

// 👉 Variables
const slides = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8
];

const currentSlideIndex = ref(0);

// 👉 Slider Functions
const animate = (element, animation, onAnimationEnd) => {
  const plainClassList = Array.prototype.slice.call(element.classList);
  const animationsToRemove = plainClassList.filter((className) =>
    className.includes("animate__")
  );

  element.classList.remove("hidden", ...animationsToRemove);
  element.classList.add("animate__animated", animation);

  if (onAnimationEnd) {
    element.addEventListener("animationend", onAnimationEnd, { once: true });
  }
};
const getNextSlideIndex = () => {
  if (currentSlideIndex.value + 1 < slides.length) {
    return currentSlideIndex.value + 1;
  }
  return 0;
};
const getPreviousSlideIndex = () => {
  if (currentSlideIndex.value > 0) {
    return currentSlideIndex.value - 1;
  }

  return slides.length - 1;
};
const onNext = () => {
  const element = document.querySelector(
    `[data-index="${currentSlideIndex.value}"]`
  );
  animate(element, "animate__fadeOutLeft", () => {
    element.classList.add("hidden");
  });

  const nextSlideIndex = getNextSlideIndex();

  const nextElement = document.querySelector(
    `[data-index="${nextSlideIndex}"]`
  );
  animate(nextElement, "animate__fadeInRight");

  currentSlideIndex.value = nextSlideIndex;
};
const onPrevious = () => {
  const element = document.querySelector(
    `[data-index="${currentSlideIndex.value}"]`
  );
  animate(element, "animate__fadeOutRight", () => {
    element.classList.add("hidden");
  });

  const previousSlideIndex = getPreviousSlideIndex();

  const previousElement = document.querySelector(
    `[data-index="${previousSlideIndex}"]`
  );
  animate(previousElement, "animate__fadeInLeft");
  currentSlideIndex.value = previousSlideIndex;
};


onMounted(() => {
  slides.forEach((_, index) => {
    if (index !== currentSlideIndex.value) {
      const element = document.querySelector(`[data-index="${index}"`);
      element.classList.add("hidden");
    }
  });
});
</script>

<template>
  <div>
    <div class="relative slider-content h-screen overflow-hidden">
      <div ref="sliderRef" v-for="(slide, index) in slides" :key="index" :data-index="index" class="absolute">
        <img class="w-screen" :src="slide" />
      </div>
    </div>
    <div class="w-full flex justify-between absolute top-[12%] md:top-1/4 lg:top-1/3 xl:top-1/2 z-10">
      <button class="p-1 ml-5 bg-purple-600 rounded-full font-bold text-white" v-on:click="onPrevious()">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="44" height="44"
          viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 6l-6 6l6 6" />
        </svg>
      </button>
      <button class="p-1 mr-5 bg-purple-600 rounded-full font-bold text-white" v-on:click="onNext()">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="44" height="44"
          viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>
      </button>
    </div>
  </div>
</template>
