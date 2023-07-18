<script setup >
import mobile from "@images/illustrations/mobile.png"
import bgImage from "@images/illustrations/hero-bg.png"
import arrowRight from "@images/illustrations/arrow-right.png"

</script>

<template>
    <div>
        <section class="py-0" id="home">
            <div class="bg-holder" style="background-position: bottom;background-size:cover;"
                :style="{ 'background-image': 'url(' + bgImage + ')' }">
            </div>

            <div class="container position-relative">
                <div class="row align-items-center py-8">
                    <div class="col-md-5 col-lg-6 order-md-1 text-center text-md-end">
                        <img class="img-fluid" :src="mobile" width="350" alt="" />
                    </div>
                    <div class="col-md-7 col-lg-6 text-center text-md-start">
                        <span
                            class="badge bg-light rounded-pill text-dark align-items-center d-flex flex-row-reverse justify-content-end mx-auto mx-md-0 ps-0 w-75 w-sm-50 w-md-75 w-xl-50 mb-3">#1
                            Editiors Choice App of 2020<img class="img-fluid float-start me-3" :src="arrowRight" alt="" />
                        </span>
                        <h1 class="mb-4 display-3 fw-bold lh-sm">
                            Best app for your <br class="d-block d-lg-none d-xl-block" />modern lifestyle
                        </h1>
                        <p class="mt-3 mb-4 fs-1">
                            Increase productivity with a simple to-do app. app for <br class="d-none d-lg-block" />managing
                            your personal budgets.
                        </p>
                        <a class="btn btn-lg btn-primary rounded-pill hover-top" href="#" role="button">Try for free</a>
                        <a class="btn btn-link ps-md-4" href="#" role="button"> Watch demo video</a>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<style lang="scss" scoped></style>