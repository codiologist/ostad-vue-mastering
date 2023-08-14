<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue';
import "//unpkg.com/flickity@2/dist/flickity.pkgd.min.js"

const historicalPlaces = ref([
    {
        id: 1,
        title: "Paharpur Buddhist Monastery",
        description: "Paharpur Buddhist Monastery in Paharpur, Badalgachhi Upazila, Naogaon District, Bangladesh is among the best known Buddhist viharas in the Indian Subcontinent and is one of the most important archaeological sites in the country. It is also one of the earliest sites of Bengal, where a significant amount of Hindu statues were found. It was designated as a UNESCO World Heritage Site in 1985. It dates from a similar time period to the nearby Halud Vihara and to the Sitakot Vihara in Nawabganj Upazila of Dinajpur District.",
        imageURL: "https://beautifulbangladesh.gov.bd/storage/backend/images/upload/slide/somapura-m-slide_1-2020-07-04-5f00089082ded.jpg"
    },
    {
        id: 2,
        title: 'Sixty Dome Mosque',
        description: 'The Sixty Dome Mosque (more commonly known as Shait Gambuj Mosque or Saith Gunbad Masjid), is a mosque in Bangladesh. It is part of the Mosque City of Bagerhat, a UNESCO World Heritage Site. It is the largest mosque in Bangladesh from the sultanate period (1204-1576). It was built during the Bengal Sultanate by Ulugh Khan Jahan, the governor of the Sundarbans. It has been described as "one of the most impressive Muslim monuments in the whole of the Indian subcontinent".',
        imageURL: 'https://beautifulbangladesh.gov.bd/storage/backend/images/upload/slide/shat-gombu-slide_1-2020-05-12-5eba635b42c6a.jpg'
    },
    {
        id: 3,
        title: 'Ramu',
        description: 'Ramu is known for monasteries, temples, and various Buddhist statues and images. The most important sightseeing attraction of the place is a beautiful Buddhist Temple near Bakkhali on the Tiger canal. Various Buddhist relics and Burmese handicrafts are available here. The Rangkut Bonasram Buddha Bihar is the oldest temple in the area and is said to have been set up in 338 BC. The 100-feet golden-colored reclining statue of Lord Buddha, located at the Vimukti Bibeshan Bhabna Kendra Temple is considered to be the world’s third-largest Buddha statue. Two other attractions of the place are coconut garden and rubber garden. The coconut garden with one million trees over 200 acres is one of the largest coconut gardens in South Asia.',
        imageURL: 'https://beautifulbangladesh.gov.bd/storage/backend/images/upload/slide/ramu-slide_1-2020-06-16-5ee839792aac5.jpg',
    }
])

const newItem = ref(
    {
        title: '',
        description: '',
        imageURL: '',
    }
)

let carousel = null
const carouselConfig = {
    autoPlay: true,
    contain: true,
    lazyLoad: true,
    adaptiveHeight: true,
    imagesLoaded: true
}


function addNewitem() {

    historicalPlaces.value.push({ id: historicalPlaces.value.length + 1, ...newItem.value })
    localStorage.setItem(
        "historical_places",
        JSON.stringify(historicalPlaces.value)
    )
    carousel.destroy()
    nextTick(function () {
        carousel = new Flickity('#carousel', carouselConfig)
    })
}


if (localStorage.getItem("historical_places") === null) {
    localStorage.setItem(
        "historical_places",
        JSON.stringify(historicalPlaces.value)
    );
} else {
    let newHistoricalPlace = JSON.parse(localStorage.getItem("historical_places"));
    historicalPlaces.value = newHistoricalPlace
}


onMounted(() => {
    carousel = new Flickity('#carousel', carouselConfig)
});

onBeforeUnmount(() => {
    carousel.destroy()
    localStorage.removeItem('historical_places')
    window.alert("Removed localstorage data and destroyed the carousel.")
});

</script>


<template>
    <div class="flex flex-col items-center">
        <div class="container mx-auto">
            <h2 class="mb-3 xl:mb-8 text-center text-2xl xl:text-4xl text-indigo-500 font-bold uppercase">
                Historical Places in Bangladesh
            </h2>
            <div class=" flex flex-wrap items-center">
                <div class="overflow-hidden w-full xl:w-4/6">
                    <div id="carousel" class="w-full mb-6">
                        <template v-for="place in historicalPlaces" :key="place.id">
                            <div class="slide-item w-full xl:w-[860px] 2xl:w-[1024px]">
                                <div :style="`background-image:url(${place.imageURL})`"
                                    class="w-full h-[200px] xl:w-[860px] xl:h-[400px] 2xl:w-[1024px] 2xl:h-[400px] bg-cover bg-center bg-no-repeat">
                                </div>
                                <div class=" bg-black/80 p-5 text-white min-h-[420px] xl:min-h-[200px]">
                                    <h3 class="text-2xl font-semibold mb-4">{{ place.title }}</h3>
                                    <p class="text-sm">{{ place.description }}</p>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
                <div class="w-full xl:w-2/6 ">
                    <div class="bg-gray-100 border border-gray-400 rounded-md shadow-xl p-4 xl:p-8 m-4 xl:mt-0">
                        <h2 class="mb-6 text-center capitalize text-indigo-700 font-bold text-xl px-4  xl:px-0">Add your favourite
                            historical place
                        </h2>

                        <div class="flex -mx-3 ">
                            <div class="w-full px-3 mb-3">
                                <div class="flex mt-1">
                                    <div
                                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <i class="mdi mdi-format-title text-gray-400 text-2xl"></i>
                                    </div>
                                    <input v-model="newItem.title" type="text"
                                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                        placeholder="Place Title">
                                </div>
                            </div>
                        </div>
                        <div class="flex -mx-3 ">
                            <div class="w-full px-3 mb-5">
                                <div class="flex mt-1">
                                    <div
                                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <i class="mdi mdi-link-variant text-gray-400 text-2xl"></i>
                                    </div>
                                    <input v-model="newItem.imageURL" type="text"
                                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                        placeholder="Place Image URL">
                                </div>
                            </div>
                        </div>
                        <div class="flex -mx-3 ">
                            <div class="w-full px-3 mb-5">
                                <div class="flex mt-1">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex justify-center mt-1">
                                        <i class="mdi mdi-pencil text-gray-400 text-2xl"></i>
                                    </div>
                                    <textarea v-model="newItem.description"
                                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 min-h-[200px]"
                                        placeholder="Place Description"></textarea>

                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <button @click="addNewitem()"
                                class="mt-5 w-[150px] bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                                Add Place
                            </button>
                        </div>

                    </div>
                    <div class="text-center mb-4">
                        <p class="text-sm text-red-600 font-bold">* All images and contents are teaken from <a
                                class="text-blue-500" href="https://beautifulbangladesh.gov.bd/"
                                target="_blank">beautifulbangladesh.gov.bd</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style>
@import "//unpkg.com/flickity@2/dist/flickity.min.css";

.flickity-viewport {
    transition: height 0.2s;
}

@media only screen and (max-width: 599px) {
    .flickity-prev-next-button{
        top: 18% !important;
    }
}

</style>