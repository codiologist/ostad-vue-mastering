<script setup>
import { ref, reactive, onBeforeMount, computed, watch } from 'vue';
import router from '../../router/index';
const formData = reactive({});

onBeforeMount(() => {
    Object.assign(formData, JSON.parse(localStorage.getItem("userData")));
    age.value = formData.age;
    birthDate.value = formData.date_of_birth;
});

const age = ref(0);
const eligibilityStatus = ref('');
const eligibilityStatusShow = ref(false);
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


watch(calculatedBirthDate, (newValue) => {
    birthDate.value = newValue;
}, { immediate: true });

watch(calculatedAge, (newValue) => {
    age.value = newValue;
}, { immediate: true });

watch(age, (newAge) => {
    if (newAge >= 18){
        eligibilityStatusShow.value = true 
    }
    eligibilityStatus.value = newAge >= 18 ? 'Eligible for voting' : 'Not eligible for voting';
}, { immediate: true });

function updateProfile() {
    formData.age = age;
    formData.date_of_birth = birthDate;
    localStorage.setItem('userData', JSON.stringify(formData));
    router.go();
}

</script>

<template>
    <div>
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
                            <input type="text" v-model="formData.firstName"
                                class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" />
                        </div>
                        <div>
                            <label class="mb-3 block font-medium text-sm text-black dark:text-white">
                                Last Name
                            </label>
                            <input type="text" v-model="formData.lastName"
                                class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" />
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-4  md:grid-cols-2">
                        <div>
                            <label class="mb-3 block font-medium text-sm text-black dark:text-white">
                                Date of Birth
                            </label>
                            <input type="date" v-model="birthDate"
                                class="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input" />
                        </div>
                        <div class="relative">
                            <label class="mb-3 block font-medium text-sm text-black dark:text-white">
                                Age
                            </label>
                            <input type="text" v-model="age"
                                class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary dark:disabled:bg-black" />
                            <div class="absolute bottom-4 right-2">
                                <span  v-if="eligibilityStatusShow" class="py-1 px-2 rounded text-white text-base font-medium capitalize"
                                    :class="eligibilityStatus == 'Eligible for voting' ? 'bg-green-500' : 'bg-red-500'">
                                    {{ eligibilityStatus }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label class="mb-3 block font-medium text-sm text-black dark:text-white">
                            Profile Image URL
                        </label>
                        <input type="text" v-model="formData.avatar"
                            class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary dark:disabled:bg-black" />
                    </div>
                    <div>
                        <label class="mb-3 block font-medium text-sm text-black dark:text-white">
                            About
                        </label>
                        <textarea rows="7" v-model="formData.bio"
                            class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></textarea>
                    </div>
                    <div class="text-center">
                        <button @click.prevent="updateProfile()"
                            class="w-[150px]  bg-yellow-400 hover:bg-yellow-400 focus:bg-yellow-400 text-black rounded-sm px-3 py-2 text-lg font-semibold drop-shadow-xl">Update</button>

                    </div>
                    <p class=" mt-2 text-center text-rose-600 font-semibold text-sm">*Note: After updating formdata profile
                        card will be changed.</p>
                </div>
            </div>
        </div>
    </div>
</template>
