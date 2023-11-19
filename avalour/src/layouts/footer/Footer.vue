<template>
    <footer>
        <div :class="`footer__area footer__style-${style_2 ? 'blue' : 'green'} include-bg bg-luminosity`"
            :data-bg-color="`footer-bg-${style_2 ? 'blue' : 'green-dark'}`"
            :style="{ backgroundImage: `url(${bg_shape})` }">
            <div class="footer__top footer__top-7">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-4 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div class="footer__widget footer__widget-7 mb-50 footer-col-7-1">
                                <div class="footer__logo">
                                    <RouterLink to="/">
                                        <img src="@images/logo-footer.svg" alt="footer__logo" />
                                    </RouterLink>
                                </div>

                                <div class="footer__widget-content">
                                    <div class="footer__info">
                                        <p>
                                            The home and elements needed to create beautiful products.
                                        </p>

                                        <div class="footer__contact">
                                            <div class="footer__contact-call">
                                                <span>
                                                    <a>
                                                        <i class="fa-solid fa-phone"></i> +88-018 7659 4444
                                                    </a>
                                                </span>
                                            </div>
                                            <div class="footer__contact-mail">
                                                <span>
                                                    <a href="mailto:support@harry.com">
                                                        support@discoverfiroj.com
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="footer__social">
                                            <Social />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div class="footer__widget footer__widget-7 mb-50 footer-col-7-2">
                                <h3 class="footer__widget-title-7">Quick Link</h3>

                                <div class="footer__widget-content">
                                    <ul>
                                        <li>
                                            <a href="#home" v-smooth-scroll >
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#features" v-smooth-scroll >
                                                Features
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#about" v-smooth-scroll >
                                                About
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#service" v-smooth-scroll >
                                                Service
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#faq" v-smooth-scroll >
                                                Faq
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#testimonials" v-smooth-scroll >
                                                Testimonials
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#contact" v-smooth-scroll >
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-3 col-md-6 col-sm-6">
                            <div class="footer__widget footer__widget-7 mb-50 footer-col-7-4">
                                <h3 class="footer__widget-title-7">Newsletter</h3>

                                <div class="footer__widget-content">
                                    <div class="footer__subscribe-7">
                                        <p>
                                            Subscribe our newsletter to get the latest news & updates.
                                        </p>
                                        <form @submit.prevent="handleSubmit">
                                            <div class="footer__subscribe-input-7">
                                                <input v-model="formVal" type="email" placeholder="email@example.com..." />
                                                <button type="submit">
                                                    <i class="fa-regular fa-arrow-up-right"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer__bottom-7">
                <div class="container">
                    <div class="footer__bottom-inner-7">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="footer__copyright-7 text-sm-center">
                                    <p>
                                        © {{ new Date().getFullYear() }} All Rights Reserved.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
  
<script>
//   import Social from '~~/components/social/Social.vue';
import bg_shape from '@images/footer/footer-shape-3.png';
import Social from '../../components/Social.vue';

export default {
    components: { Social },
    props: {
        style_2: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            bg_shape,
            open: false,
            formVal: '',
        }
    },
    methods: {
        handleToggle() {
            this.open = !this.open
        },
        handleSubmit() {
            console.log(this.formVal)
            this.formVal = ''
        }
    }
};
</script>
  
  Social