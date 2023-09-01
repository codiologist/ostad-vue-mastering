<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from "vue-router";
import axios from 'axios';
import moment from 'moment';
import "moment/dist/locale/bn-bd"

import Overlay from '../../components/Overlay.vue';
import { IconArrowNarrowLeft } from '@tabler/icons-vue';


const route = useRoute();
const router = useRouter();
const postID = route.params.id
let postDetails = ref({})
const isLoading = ref(false)

const getPostDetails = async () => {
    isLoading.value = true
    postDetails.value = {}
    try {
        let url = `https://basic-blog.teamrabbil.com/api/post-details/${postID}`
        let response = await axios.get(url)
        postDetails.value = response.data.postDetails
        isLoading.value = false
    } catch (error) {
        console.log(error.message);
    }
};

getPostDetails()

</script>

<template>
    <div>
        <Overlay v-if="isLoading" />

        <template v-if="!isLoading">
            <div v-if="postDetails != null">
                <div class="w-full lg:w-8/12 mx-auto p-4 lg:p-0 mt-0 lg:mt-20 mb-8">
                    <div class="mt-5 lg:mt-28 mb-6 text-center lg:text-left">
                        <button
                            class="inline-flex items-center bg-indigo-500 hover:bg-indigo-700 shadow-md shadow-indigo-700 text-white text-base font-semibold px-8 py-2 pl-3 bg-darkBlue rounded-full"
                            @click="router.go(-1)">
                            <IconArrowNarrowLeft class="inline-block mr-2" /> ফিরে যাই
                        </button>
                    </div>
                    <div class="mb-0 lg:mb-12">
                        <img class="w-full mx-auto shadow-2xl rounded-none lg:rounded-xl" :src="postDetails.img" :alt="postDetails.title">
                    </div>

                    <div class="lg:m-8 p-6 lg:p-8 lg:-mt-28 border drop-shadow-2xl bg-white lg:rounded-xl relative">
                        <p class="mb-4 text-xs lg:text-[18px] text-indigo-800 font-semibold inline-block">
                            পোস্টটি করা হয়েছে: {{ moment(postDetails.created_at).locale('bn-bd').format('LLLL') }}
                        </p>
                        <h2 class="my-4 text-xl lg:text-4xl text-indigo-700 font-bold">{{ postDetails.title }}</h2>
                        <p class="text-justify">{{ postDetails.content }}</p>
                    </div>
                </div>
            </div>
            <div v-else class="w-screen h-screen overflow-hidden flex items-center justify-center">
                <div
                    class="lg:w-8/12 mx-auto border shadow-2xl shadow-indigo-700/25 border-indigo-500 rounded-xl mt-32 mb-8">
                    <div class="text-center p-12">
                        <h2 class="text-6xl mb-4">🥺</h2>
                        <h2 class="text-4xl text-indigo-700 font-extrabold"> দুঃখিত পোস্টের তথ্য পাওয়া যায়নি </h2>
                        <button
                            class="inline-flex items-center bg-indigo-500 hover:bg-indigo-700 text-white text-base font-semibold px-8 py-2 pl-5 bg-darkBlue rounded-full mt-6"
                            @click="router.go(-1)">
                            <IconArrowNarrowLeft class="inline-block mr-2" /> ফিরে যাই
                        </button>
                    </div>
                </div>
            </div>
        </template>

    </div>
</template>

<style lang="scss" scoped></style>