<script setup>

import IconAppDevelopment from "@images/illustrations/app.png"
import IconAward from "@images/illustrations/time-award.png"
import IconCloudStorage from "@images/illustrations/cloud.png"
import IconCustomization from "@images/illustrations/customization.png"
import IconPlanning from "@images/illustrations/ux.png"
import IconCustomerSupport from "@images/illustrations/support.png"

const sectionTitle = "Why you should choose <br />our app "
const sectionDescription = "The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook."

const features = [
    {
        id: 1,
        icon: IconAppDevelopment,
        title: "App Development",
        description: "Get your blood tests delivered at home collect a sample from the  news your blood tests",
        textColor: "danger",

    },
    {
        id: 2,
        icon: IconAward ,
        title: "10 Times Award",
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
        id: 4,
        icon: IconCustomization,
        title: "Customization",
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
                <div class="row justify-content-center mb-6">
                    <div class="col-lg-6 text-center mx-auto mb-3 mb-md-5 mt-4">
                        <h6 class="fw-bold fs-4 display-3 lh-sm" v-html="sectionTitle"></h6>
                        <p class="mb-0">{{ sectionDescription }}</p>
                    </div>
                </div>
                <div class="row">
                    <div v-for="feature in features" :key="feature.id" class="col-md-4 mb-6">
                        <div class="text-center px-lg-3">
                            <img class="img-fluid mb-3" :src="feature.icon" width="90" alt="" />
                            <h5 class="fw-bold">{{feature.title}}</h5>
                            <p class="mb-md-0">{{ feature.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end of .container-->
        </section>
</template>

<style lang="scss" scoped></style>