<script setup>
const title = "Trusted by companies like"
import companyLogo1 from "@images/partner-logo/company-1.png"
import companyLogo2 from "@images/partner-logo/company-2.png"
import companyLogo3 from "@images/partner-logo/company-3.png"
import companyLogo4 from "@images/partner-logo/company-4.png"
import companyLogo5 from "@images/partner-logo/company-5.png"

const companyLogos = [
    {
        id: 1,
        logo: companyLogo1
    },
    {
        id: 2,
        logo: companyLogo2
    },
    {
        id: 3,
        logo: companyLogo3
    },
    {
        id: 4,
        logo: companyLogo4
    },
    {
        id: 5,
        logo: companyLogo5
    },
]

</script>

<template>
    <div>
        <section class="py-7">

            <div class="container">
                <div class="row">
                    <div class="col-12 mx-auto align-items-center text-center">
                        <p class="mb-4">{{ title }}</p>
                    </div>
                </div>
                <div class="row align-items-center justify-content-center justify-content-lg-around">
                    <div v-for="(item, index) in companyLogos" :key="index"
                        class="col-6 col-sm-4 col-md-4 col-lg-2 px-md-0 mb-5 mb-lg-0 text-center">
                        <img class="img-fluid" :src="item.logo" width="90" alt="Icon" />
                    </div>
                </div>
            </div>
            <!-- end of .container-->

    </section>
</div></template>

<style lang="scss" scoped></style>