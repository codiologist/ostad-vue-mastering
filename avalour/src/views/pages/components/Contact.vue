 
<script setup>
import ContactForm from "./ContactForm.vue";
</script>

<template>
    <section id="contact" class="cta__area green-light-bg-4 p-relative z-index-1  pb-60">
        <div class="cta__shape">
            <img class="cta__shape-17" src="@images/cta/7/cta-shape-1.png" alt="cta__shape" />
            <img class="cta__shape-18" src="@images/cta/7/cta-shape-2.png" alt="cta__shape" />
            <img class="cta__shape-19" src="@images/cta/7/cta-shape-3.png" alt="cta__shape" />
            <img class="cta__shape-20" src="@images/cta/7/cta-shape-4.png" alt="cta__shape" />
        </div>
        <section class="tp-section-area p-relative z-index-1 tp-section-spacing">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-8">
                        <div class="tp-section-wrapper-2 text-center">
                            <span class="tp-section-subtitle-2 subtitle-mb-9">CONTACT US</span>
                            <h3 class="tp-section-title-2 font-70">
                                Get in touch with us for more information
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- contact form two area start -->
        <section class="contact__form-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="contact__form-2 contact__style-2 contact__translate">
                            <h3 class="contact__form-2-title">Send a message</h3>
                            <!-- form start -->
                            <ContactForm />
                            <!-- form end -->
                            <p class="ajax-response"></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- contact form two area end -->
    </section>
</template>

  