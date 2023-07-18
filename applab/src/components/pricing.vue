<script setup>
import { ref } from 'vue'


const isYearly = ref(true)
const input = ref(null)

function checkInput() {
    if (!input.checked) {
        isYearly.value = !isYearly.value
    }
}

checkInput()
</script>

<template>
    <div>
        <section class="py-8" id="pricing">

            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xxl-5 text-center mb-3">
                        <h6 class="fw-bold fs-4 display-3 lh-sm mb-3">Get awesome features, without extra charges</h6>
                        <p class="mb-4">The rise of mobile devices transforms the way we consume information entirely and
                            the world's most elevant channels such as Facebook.</p>
                    </div>
                </div>
                <div class="row flex-center">
                    <div class="col-12 mb-3">
                        <div class="d-flex justify-content-center">
                            <label class="form-check-label me-2" for="priceSwithcer">Monthly</label>
                            <div class="form-check form-switch">
                                <input ref="input" class="form-check-input" id="priceSwithcer" type="checkbox"
                                    @click="checkInput" />
                                <label class="form-check-label align-top" for="priceSwithcer">Yearly</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-lg mb-4 border-0">
                            <div class="card-header border-bottom-0 pt-7 pb-5">
                                <div class="d-flex justify-content-center">
                                    <h1 v-if="isYearly" class="fw-bold">$0</h1>
                                    <h1 v-else class="fw-bold">$0</h1>
                                    <span v-if="isYearly" class="d-flex align-items-center">/yearly</span>
                                    <span v-else class="d-flex align-items-center">/month</span>
                                </div>
                                <h5 class="fw-bold text-center">Business Class</h5>
                                <span class="text-700 text-center d-block">For small teams or office</span>
                            </div>
                            <div class="card-body mx-auto">
                                <ul class="list-unstyled mb-4">
                                    <li class="text-700 py-2 text-secondary">Darg &amp; Drop Builder</li>
                                    <li class="text-700 py-2 text-secondary">1,000's of Templates</li>
                                    <li class="text-700 py-2 text-secondary">Blog Support Tools</li>
                                    <li class="text-700 py-2 text-secondary">eCommerce Store </li>
                                </ul>
                                <a class="btn btn-lg btn-primary rounded-pill mb-3" href="#">Start free trial</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-lg mb-4">
                            <div class="card-header border-bottom-0 pt-7 pb-5">
                                <div class="d-flex justify-content-center">
                                    <h1 v-if="isYearly" class="fw-bold">$1188</h1>
                                    <h1 v-else class="fw-bold">$99</h1>
                                    <span v-if="isYearly" class="d-flex align-items-center">/yearly</span>
                                    <span v-else class="d-flex align-items-center">/month</span>
                                </div>
                                <h5 class="fw-bold text-center">Pro Master</h5>
                                <span class="text-700 text-center d-block">For small teams or office</span>
                            </div>
                            <div class="card-body mx-auto">
                                <ul class="list-unstyled mb-4">
                                    <li class="text-700 py-2 text-secondary">Darg &amp; Drop Builder</li>
                                    <li class="text-700 py-2 text-secondary">5,000's of Templates</li>
                                    <li class="text-700 py-2 text-secondary">Blog Support Tools</li>
                                    <li class="text-700 py-2 text-secondary">eCommerce Store </li>
                                </ul>
                                <div class="d-flex flex-column"> <a class="btn btn-lg btn-primary rounded-pill mb-3"
                                        href="#">Start free trial</a><a href="#">Or Start 14 days trail</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end of .container-->

        </section>
    </div>
</template>

<style lang="scss" scoped></style>