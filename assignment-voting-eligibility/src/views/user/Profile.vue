<script setup>
import { ref, computed } from 'vue';
import Breadcrumb from '../../components/Breadcrumb.vue';
import { useAuthStore } from '@/stores/authStore';
import profileCardBG from '@images/cover-01.png'

import moment from 'moment'


const authStore = useAuthStore

const today = new Date()

const userData = ref([])

const firstName = ref('')
const lastName = ref('')
const age = ref('')
const dob = ref('')
const avatar_url = ref('')
const bio = ref('')

const eligibilityStatus = ref('');
const birthDate = ref('');

const calculatedBirthDate = computed(() => {
  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - age.value;
  return `${birthYear}-01-01`;
});

const calculatedAge = computed(() => {
  const birthYear = new Date(birthDate.value).getFullYear();
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
});



async function getUserProfile() {
  try {
    const response = await fetch(`https://user-mangement-production.up.railway.app/v1/user/profile`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${authStore.user.token}`
      }
    });

    if (response.ok) {
      const res = await response.json();
      userData.value = res;
    } else {
      // Handle error here, e.g., throw an exception or log the error.
      console.error('Failed to fetch user profile:', response.status, response.statusText);
    }
  } catch (error) {
    // Handle any exceptions that might occur during the fetch.
    console.error('An error occurred:', error);
  }
}
getUserProfile()




const update = async () => {
  try {
    const response = await fetch(`https://user-mangement-production.up.railway.app/v1/user/profile`, {
      method: 'PATCH', /* or PATCH */
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${authStore.user.token}`
      },
      body: JSON.stringify({
        firstName: firstName.value.length == ' ' ? authStore.user.firstName : firstName.value,
        lastName: lastName.value.length == ' ' ? authStore.user.lastName : lastName.value,
        age: age.value.length == ' ' ? authStore.user.age : age.value,
        date_of_birth: dob.value.length == ' ' ? authStore.user.date_of_birth : dob.value,
        avatar: avatar_url.value.length == ' ' ? authStore.user.avatar : avatar_url.value,
        bio: bio.value.length == ' ' ? authStore.user.bio : bio.value,
      })
    });

    if (response.ok) {
      const data = await response.json();
      userData.value.firstName = data.firstName;
      userData.value.lastName = data.lastName;
      userData.value.age = data.age;
      getUserProfile()
    } else {
      // Handle the case where the request was not successful
      console.error('Request failed with status:', response.status);
    }
  } catch (error) {
    // Handle any network errors or exceptions
    console.error('An error occurred:', error);
  }
};

const computedAge = computed(() => {
  return Number(moment(today.value).format('y')) - userData.value[0].age;
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
                  <img class="bg-[#FFCA28] w-[150px]  h-[150px] rounded-full" :src="userData[0]?.avatar" alt="profile" />
                </div>
              </div>
              <div class="mt-6">
                <h3 class="mb-1.5 text-2xl font-medium text-black dark:text-white">
                  {{ userData[0]?.firstName }} {{ userData[0]?.lastName }}
                </h3>
                <p class="font-medium">Birth Year : {{computedAge}}</p>
                <div class="mx-auto max-w-180">
                  <h4 class="font-medium text-black dark:text-white">
                    About Me
                  </h4>
                  <p class="mt-4.5 font-medium text-sm">
                    {{ userData[0]?.bio }}
                  </p>
                </div>

              </div>
            </div>
          </div>
          <!-- ====== Profile Section End -->

          <!-- ====== Profile Edit Section Start -->

          <div>
            <div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div class="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 class="font-bold text-black text-2xl">
                  Update User Info
                </h3>
              </div>
              <div class="flex flex-col gap-5.5 p-6.5">
                <div class="grid grid-cols-1 gap-4  md:grid-cols-2">
                  <div>
                    <label class="mb-3 block font-medium text-sm text-black dark:text-white">
                      First Name
                    </label>
                    <input type="text" v-model="firstName"
                      class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" />
                  </div>
                  <div>
                    <label class="mb-3 block font-medium text-sm text-black dark:text-white">
                      Last Name
                    </label>
                    <input type="text" v-model="lastName"
                      class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" />
                  </div>
                </div>

                <div>
                  <label class="mb-3 block font-medium text-sm text-black dark:text-white">
                    Date of Birth
                  </label>
                  <input type="text" v-model="dob"
                    class="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input" />
                </div>

                <div>
                  <label class="mb-3 block font-medium text-sm text-black dark:text-white">
                    Age
                  </label>
                  <input type="text" v-model="age"
                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary dark:disabled:bg-black" />
                </div>

                <div>
                  <label class="mb-3 block font-medium text-sm text-black dark:text-white">
                    Profile Image URL
                  </label>
                  <input type="text" v-model="avatar_url"
                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary dark:disabled:bg-black" />
                </div>
                <div>
                  <label class="mb-3 block font-medium text-sm text-black dark:text-white">
                    About
                  </label>
                  <textarea rows="6" v-model="bio"
                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></textarea>
                </div>
                <div class="text-center">
                  <button @click="update"
                    class="w-[150px]  bg-yellow-400 hover:bg-yellow-400 focus:bg-yellow-400 text-black rounded-sm px-3 py-2 text-lg font-semibold drop-shadow-xl">Update</button>
                </div>
              </div>
            </div>
          </div>
          <pre>
            {{ userData }}
          </pre>
          <!-- ====== Profile Edit Section Start -->


        </div>
      </div>
    </main>
  </div>
</template>
