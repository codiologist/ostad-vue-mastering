<script setup>
import { ref } from 'vue'

const navRef = ref(null);
const emit = defineEmits(['toggleMobileNav']);
</script>

<template>
    <ul ref="navRef" class="text-center">
        <li>
            <a href="#home" v-smooth-scroll @click="$emit('toggleMobileNav')">
                Home
            </a>
        </li>
        <li>
            <a href="#features" v-smooth-scroll @click="$emit('toggleMobileNav')">
                Features
            </a>
        </li>
        <li>
            <a href="#about" v-smooth-scroll @click="$emit('toggleMobileNav')">
                About
            </a>
        </li>
        <li>
            <a href="#service" v-smooth-scroll @click="$emit('toggleMobileNav')">
                Service
            </a>
        </li>
        <li>
            <a href="#faq" v-smooth-scroll @click="$emit('toggleMobileNav')">
                Faq
            </a>
        </li>
        <li>
            <a href="#testimonials" v-smooth-scroll @click="$emit('toggleMobileNav')">
                Testimonials
            </a>
        </li>
        <li>
            <a href="#contact" v-smooth-scroll @click="$emit('toggleMobileNav')">
                Contact
            </a>
        </li>
    </ul>
</template>
