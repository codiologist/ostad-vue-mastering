<script setup>
import ctaBG from "@images/illustrations/call-to-action.png"

const sectionTitle = "Designed &amp; built by<br />the latest code<br /> integration"
const description = "The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook."
const btnText = "Learn more"

</script>

<template>
    <div>
        <section class="py-8">

            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-5 order-md-0 text-center text-md-start">
                        <img class="img-fluid mb-4" :src="ctaBG" width="550" alt="" />
                    </div>
                    <div class="col-md-6 text-center text-md-start offset-md-1">
                        <h6 class="fw-bold fs-4 display-3 lh-sm" v-html="sectionTitle"></h6>
                        <p class="my-4 pe-xl-5">{{ description }}</p>
                        <a class="btn btn-lg btn-primary rounded-pill hover-top" href="#" role="button">{{ btnText }}</a>
                    </div>
                </div>
            </div>
            <!-- end of .container-->

        </section>

    </div>
</template>

<style lang="scss" scoped></style>