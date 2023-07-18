
<script setup>
import featureBG from "@images/illustrations/feature-bg.png"
import IconPrformance from "@images/illustrations/fast-performance.png"
import Iconprototype from "@images/illustrations/prototype.png"
import IconVector from "@images/illustrations/vector.png"

const sectionTitle = "Awesome apps features"
const sectionDescription = "Increase productivity with a simple to-do app. app for managing your personal budgets."

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
    <section class="py-5" id="features">
        <div class="container-lg">
            <div class="row align-items-center">
                <div class="col-md-5 col-lg-6 order-md-0 text-center text-md-start">
                    <img class="img-fluid" :src="featureBG" width="550" alt="Background" />
                </div>
                <div class="col-md-7 col-lg-6 px-sm-5 px-md-0">
                    <h6 class="fw-bold fs-4 display-3 lh-sm">{{ sectionTitle }}</h6>
                    <p class="my-4">{{ sectionDescription }}</p>
                    <div v-for="feature in features" :key="feature.id" class="d-flex align-items-center mb-5">
                        <div>
                            <img class="img-fluid" :src="feature.icon" width="90" alt="Icon" />
                        </div>
                        <div class="px-4">
                            <h5 class="fw-bold" :class="`text-${feature.textColor}`">{{ feature.title }}</h5>
                            <p>{{ feature.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>