<script setup>
import { ref, onBeforeMount, watch } from 'vue';
import moment from 'moment';

import Breadcrumb from '../../components/Breadcrumb.vue';
import EditProfile from './EditProfile.vue';
import authStore from '@/stores/authStore';

import profileCardBG from '@images/cover-01.png'




const auth = authStore();


onBeforeMount(() => {
  auth.userData = JSON.parse(localStorage.getItem("userData"));
});



</script>

<template>
  <div>
    <main>
      <Breadcrumb page-title="Profile" />

      <div class="mx-auto max-w-screen-2xl p-2 md:p-2 2xl:p-2">

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">

          <!-- ====== Profile Section Start -->
          <div
            class="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div class="relative z-20 h-35 md:h-65">
              <img :src="profileCardBG" alt="profile cover"
                class="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center" />
            </div>
            <div class="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
              <div
                class="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
                <div class="relative drop-shadow-2 ">
                  <img class="bg-[#FFCA28] w-[150px]  h-[150px] rounded-full" :src="auth.userData.avatar" alt="profile" />
                </div>
              </div>
              <div class="my-4">
                  <span class="py-1 px-2 rounded text-white text-base font-medium capitalize" :class=" auth.userData.age >= 18 ?  'bg-green-500': 'bg-red-500'">{{ auth.userData.age >= 18 ? 'Eligible for voting' : 'Not eligible for voting' }}</span>
                </div>
              <div class="mt-6">
                <h3 class="mb-1.5 text-2xl font-medium text-black dark:text-white">
                  {{ auth.userData.firstName }} {{ auth.userData.lastName }}
                </h3>
                <p class="font-medium">Birth Year : {{ moment(auth.userData.date_of_birth).format('y') }}</p>
                <p class="font-medium">Age : {{ auth.userData.age }}</p>
                <div class="mt-6 mx-auto max-w-180">
                  <h4 class="font-medium text-black dark:text-white">
                    About
                  </h4>
                  <p class="font-medium text-sm">
                    {{ auth.userData.bio }}
                  </p>
                </div>

              </div>
            </div>
          </div>
          <!-- ====== Profile Section End -->

          <!-- ====== Profile Edit Section Start -->
          <EditProfile/>
          <!-- ====== Profile Edit Section Start -->
        </div>
      </div>
    </main>
  </div>
</template>
