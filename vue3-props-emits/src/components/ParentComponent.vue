<script setup >
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

const message = ref("🖐 Hello Vue Developers.")
const receivedMessage = ref("");


function handleMessageEmitted(message) {
    receivedMessage.value = message;
}

</script>

<template>
    <div >
        <h1 class="mb-8 text-center text-2xl leading-9 font-semibold">
            <span
                class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block px-8 py-1">
                <span class="relative text-white">Parent Component</span>
            </span>
        </h1>
        <div class="text-center border-2 border-cyan-500 px-8 py-6">
            <div v-if="receivedMessage">
                <h4 class=" font-bold text-2xl bg-cyan-100  px-8 py-2 rounded-full">{{receivedMessage}}</h4>
                <p class="mt-6 text-sm text-red-500 font-bold">
                    * Sometimes same message is shown because of generated same random index. It's not a bug.
                </p>
            </div>
            <div v-else>
                <h4> <p class="font-medium mb-2">Press <span class="font-bold text-pink-600">"Generate Random Message"</span> button from <span class="font-bold text-red-500">Child Component</span></p></h4>
            </div>
        </div>

        <ChildComponent :message="message" @messageEmitted="handleMessageEmitted" />
    </div>
</template>
