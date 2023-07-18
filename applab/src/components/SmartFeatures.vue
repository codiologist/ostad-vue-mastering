<script setup>

const sectionTitle = "Smart jackpots that you may love this anytime & anywhere"
const sectionDescription = "The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook."

import IconPrformance from "@images/illustrations/fast-performance.png"
import Iconprototype from "@images/illustrations/prototype.png"
import IconVector from "@images/illustrations/vector.png"

const features = [
    {
        id: 1,
        icon: IconPrformance,
        title: "Fast performance",
        description: "Get your blood tests delivered at home collect a sample from the  news your blood tests",
        textColor: "danger",

    },
    {
        id: 2,
        icon: Iconprototype,
        title: "Prototyping",
        description: "Get your blood tests delivered at home collect a sample from the  news your blood tests",
        textColor: "primary",

    },
    {
        id: 3,
        icon: IconVector,
        title: "Vector Editing",
        description: "Get your blood tests delivered at home collect a sample from the  news your blood tests",
        textColor: "success",

    },
];
</script>

<template>
    <section class="py-5">
        <div class="container">
            <div class="row align-items-center mb-6">
                <div class="col-md-5 col-lg-4 offset-lg-1">
                    <h1 class="fw-bold lh-base">{{ sectionTitle }}</h1>
                </div>
                <div class="col-md-6 col-lg-5 offset-lg-1 border-start py-5 ps-5">
                    <p class="mb-0">{{ sectionDescription }}</p>
                </div>
            </div>
            <div class="row">
                <div v-for="feature in features" :key="feature.id" class="col-md-4 col-lg-3 offset-lg-1 mb-4">
                    <div class="py-4">
                        <img class="img-fluid" :src="feature.icon" width="90" alt="Icon" />
                    </div>
                    <h5 class="fw-bold" :class="`text-${feature.textColor}`">{{ feature.title }}</h5>
                    <p class="mt-2 mb-0">{{ feature.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
