<script setup>
import featureBG from "@images/illustrations/ultimate-feature.png"
import IconAppDevelopment from "@images/illustrations/app.png"
import IconAward from "@images/illustrations/time-award.png"
import IconCloudStorage from "@images/illustrations/cloud.png"
import IconCustomization from "@images/illustrations/customization.png"
import IconPlanning from "@images/illustrations/ux.png"
import IconCustomerSupport from "@images/illustrations/support.png"

const sectionTitle = "Ultimate features<br />that we built"
const sectionDescription = "The rise of mobile devices transforms the way we consume information entirely."

const features = [
{
        id: 1,
        icon: IconAppDevelopment,
        title: "App Development",
        description: "Get your blood tests delivered at home collect a sample from the  news your blood tests",
        textColor: "danger",

    },
    {
        id: 5,
        icon: IconPlanning,
        title: "UX Planning",
        description: "Get your blood tests delivered at home collect a sample from the  news your blood tests",
        textColor: "primary",

    },
    {
        id: 3,
        icon: IconCloudStorage,
        title: "Cloud Storage",
        description: "Get your blood tests delivered at home collect a sample from the  news your blood tests",
        textColor: "success",

    },
    {
        id: 6,
        icon: IconCustomerSupport,
        title: "Customer Support",
        description: "Get your blood tests delivered at home collect a sample from the  news your blood tests",
        textColor: "success",

    },
];
</script>

<template>
    <section class="py-6">

        <div class="container">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-5 order-md-1 text-center text-md-start">
                        <img class="img-fluid mb-4" :src="featureBG" alt="" />
                    </div>
                    <div class="col-md-6 text-center text-md-start">
                        <h6 class="fw-bold fs-4 display-3 lh-sm" v-html="sectionTitle"></h6>
                        <p class="my-4 pe-xl-5">{{ sectionDescription }}</p>
                        <div class="row">
                            <div v-for="feature in features" :key="feature.id" class="col-md-6">
                                <div class="mb-4">
                                    <div class="py-4">
                                        <img class="img-fluid" :src="feature.icon" width="90" alt="" />
                                    </div>
                                    <h5 class="fw-bold text-undefined">{{ feature.title }}</h5>
                                    <p class="mt-2 mb-0">{{ feature.description }}</p>
                                </div>
                            </div>
                        </div>
                        <a class="btn btn-lg btn-primary rounded-pill hover-top" href="#" role="button">See all</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
