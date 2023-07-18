<script setup>
import testimonialBG from "@images/illustrations/testimonial.png"
import user1 from "@images/users/user-1.png"
import user2 from "@images/users/user-2.png"
import user3 from "@images/users/user-3.png"

const sectionTitle = "Meet Client Satisfaction <br />by using product";
const sectionDescription = "The rise of mobile devices transforms the way we consume.Elevant channels such as Facebook."

const testimonials = [
    {
        name: "Zoltan Nemeth",
        designation: "CEO of Pixer Lab",
        avatar: user1,
        title: "User friendly & Customizable",
        message: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
        interval: 10000,
        active: "active"
    },
    {
        name: "Jhon Doe",
        designation: "Web Developer",
        avatar: user2,
        title: "User friendly & Customizable",
        message: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
        interval: 2000,
        active: ""
    },
    {
        name: "Viezh Robert",

        designation: "UI/UX Designer",
        avatar: user3,
        title: "User friendly & Customizable",
        message: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
        interval: null,
        active: ""
    }
]


</script>

<template>
    <div>
        <section class="py-8" id="testimonial">
            <div class="container-lg">
                <div class="row flex-center">
                    <div class="col-sm-10 col-md-5 col-lg-5 order-md-0 text-center text-md-start">
                        <img class="img-fluid mb-4" :src="testimonialBG" alt="" />
                    </div>
                    <div class="col-sm-10 col-md-6 col-lg-6 text-center text-md-start offset-md-1">
                        <h6 class="fw-bold fs-4 display-3 lh-sm" v-html="sectionTitle"></h6>
                        <p class="my-4 pe-xl-5">{{ sectionDescription }}</p>
                        <div class="carousel slide" id="carouselExampleDark" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div v-for="(item, index) in testimonials" :key="index" class="carousel-item"
                                    :class="item.active" :data-bs-interval="`${item.interval}`">
                                    <div class="row h-100">
                                        <div class="col-12">
                                            <span>
                                                <svg class="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width="16"
                                                    height="16" fill="#FFCC00" viewBox="0 0 16 16">
                                                    <path
                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                    </path>
                                                </svg>
                                                <svg class="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width="16"
                                                    height="16" fill="#FFCC00" viewBox="0 0 16 16">
                                                    <path
                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                    </path>
                                                </svg>
                                                <svg class="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width="16"
                                                    height="16" fill="#FFCC00" viewBox="0 0 16 16">
                                                    <path
                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                    </path>
                                                </svg>
                                                <svg class="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width="16"
                                                    height="16" fill="#FFCC00" viewBox="0 0 16 16">
                                                    <path
                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                    </path>
                                                </svg>
                                                <svg class="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width="16"
                                                    height="16" fill="#FFCC00" viewBox="0 0 16 16">
                                                    <path
                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                    </path>
                                                </svg>
                                            </span>
                                            <h5 class="my-4 fw-bold lh-sm">{{ item.title }}</h5>
                                            <p class="mb-0 text-center text-md-start">{{ item.message }}</p>
                                        </div>
                                        <div class="col-xl-6 pt-4 d-flex d-sm-block flex-center">
                                            <div class="d-flex align-items-md-center">
                                                <img class="img-fluid me-4 me-md-3 me-lg-4"
                                                    :src="item.avatar" width="100" alt="" />
                                                <div class="w-lg-50 my-3">
                                                    <h5 class="mb-0 fw-bold">{{ item.name }}</h5>
                                                    <p class="fw-normal mb-0">{{ item.designation }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="position-relative mt-sm-n5">
                                <a class="carousel-control-prev carousel-icon z-index-2" href="#carouselExampleDark"
                                    role="button" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </a>
                                <a class="carousel-control-next carousel-icon z-index-2" href="#carouselExampleDark"
                                    role="button" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
