<script setup>
import { ref, inject } from 'vue';
import { RouterLink } from 'vue-router'
import moment from 'moment';
import "moment/dist/locale/bn-bd"
import { IconArrowNarrowRight } from '@tabler/icons-vue';
import { IconCalendarEvent, IconStack } from '@tabler/icons-vue';

const props = defineProps({
    post: {
        type: Object,
        required: true
    }
});

const postCategoryName = ref("")

const postCategories = inject("postCategories");

postCategories.value.filter((item) => {
    if (item.id == props.post.category_id) {
        postCategoryName.value = item.name
    }
});


</script>

<template>
    <div class="xl:w-1/4 md:w-1/2 p-5 md:py-[22px] 2xl:px-5">
        <!-- article -->
        <div class="bg-white flex flex-col rounded-md shadow-xl overflow-hidden h-full">
            <div>
                <img class="w-full" :src="post.img" :alt="post.title">
            </div>
            <div class=" px-6 py-4 pb-8 flex-1 flex flex-col justify-between">
                <div>
                    <div class="flex flex-wrap items-center justify-between mb-4 -mx-3 ">
                        <RouterLink :to="{ name: 'post-categories', params: { id: post.category_id } }" class="text-sm font-semibold mb-2 rounded-2xl bg-indigo-100 leading-0 px-4 pt-1 pl-2 text-indigo-700 border border-indigo-700">
                            <IconStack size="20" class="inline-block"/>
                            {{ postCategoryName }}
                        </RouterLink>
                        <div>
                            <p class="text-sm font-semibold mb-2 rounded-2xl bg-purple-100 leading-0 px-4 pt-1 pl-3 text-purple-700 border border-purple-700">
                                <IconCalendarEvent size="15" class="inline-block"/>
                                {{ moment(post.created_at).locale('bn-bd').format('LL') }}
                            </p>
                        </div>
                    </div>
                    <RouterLink :to="{ name: 'post-details', params: { id: post.id } }"  class=" inline-block text-lg text-indigo-600 font-bold mb-2 ">
                        {{post.title }}
                        </RouterLink>
                    <p class="text-[#121127]/60 text-[1rem] leading-[160%] mb-6">{{ post.short }}</p>
                </div>
                <div class="text-center">
                    <RouterLink :to="{ name: 'post-details', params: { id: post.id } }"
                        class="inline-flex items-center bg-indigo-500 hover:bg-indigo-700 shadow-md shadow-indigo-700 text-white text-base font-semibold px-8 py-2 pb-1 pr-4 bg-darkBlue rounded-full transition-all">
                        বিস্তারিত
                        <IconArrowNarrowRight size="20" class="inline-block ml-1"/>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>
