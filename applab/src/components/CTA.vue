<script setup>
import googlePlayIcon from "@images/illustrations/google-play.png"
import appStoreIcon from "@images/illustrations/app-store.png"
import ctaBG from "@images/illustrations/cta.png"

const sectionTitle = "Download our App now"
const sectionDescription = "The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook."

</script>

<template>
    <section class="py-6">
        <hr />
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-5 col-lg-7 order-md-1 text-center text-md-start z-index-2 cta-image">
                    <img class="img-fluid mb-4 mb-md-0" :src="ctaBG" width="850" alt="" />
                </div>
                <div class="col-md-7 col-lg-5 text-center text-md-start">
                    <h1 class="display-3 fw-bold lh-sm">{{ sectionTitle }}</h1>
                    <p class="my-4">
                        {{ sectionDescription }}
                    </p>
                    <div class="d-flex justify-content-center d-md-inline-block">
                        <a class="pe-2 pe-sm-3 pe-md-4" href="https://play.google.com/store/games" target="_blank">
                            <img :src="googlePlayIcon" width="160" alt="" />
                        </a>
                        <a href="https://www.apple.com/app-store/" target="_blank">
                            <img :src="appStoreIcon" width="160" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
