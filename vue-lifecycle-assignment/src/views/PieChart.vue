<script setup >

import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import PickColors from 'vue-pick-colors'

// variables
const newData = ref({
    seriseValue: '',
    label: '',
    sliceBGColor: '#00cedf'
})
const chartRef = ref();
const colorPickerRef = ref();
let chart = null
const dataset = [338.3, 67.5, 64.6, 1425.8,]
const data = {
    labels: [
        'United States',
        'United Kingdom',
        'France',
        'China',
    ],
    datasets: [{
        label: "Population (millions)",
        data: dataset,
        backgroundColor: [
            'rgb(171,186,373)',
            'rgb(224, 64, 251)',
            'rgb(54, 162, 235)',
            'rgb(244,67,54)',
        ],
        hoverOffset: 4
    }]
};

const config = {
    type: 'pie',
    data: data,
    options: {
        plugins: {
            legend: {
                position: "bottom",
                display: true,
                labels: {
                    padding: 20,
                    boxWidth: 20,
                    font: {
                        size: 16,
                        weight: '500'
                    }
                }
            }

        }
    }
};

// Chart Initialization
onMounted(() => {
    chart = new Chart(chartRef.value.id, config)
})

// Update the chart as per form data
function updateChart() {
    dataset.push(newData.value.seriseValue)
    chart.data.labels.push(newData.value.label)
    chart.data.datasets[0].backgroundColor.push(newData.value.sliceBGColor)
    chart.data.datasets[0].data = dataset
    localStorage.setItem(
        "new_chart_dataset",
        JSON.stringify(dataset)
    )
    localStorage.setItem(
        "new_chart_data",
        JSON.stringify(data)
    )

    chart.update()

    newData.value.label = ''
    newData.value.seriseValue = ''
}

// Setting and updating localStorage data
if (localStorage.getItem("new_chart_dataset") === null && localStorage.getItem("new_chart_data") === null) {
    localStorage.setItem(
        "new_chart_dataset",
        JSON.stringify(dataset)
    );
    localStorage.setItem(
        "new_chart_data",
        JSON.stringify(data)
    )
} else {
    let newChartDataset = JSON.parse(localStorage.getItem("new_chart_dataset"));
    let newChartData = JSON.parse(localStorage.getItem("new_chart_data"));
    data.labels = newChartData.labels
    data.datasets[0].data = newChartDataset
    data.datasets[0].backgroundColor = newChartData.datasets[0].backgroundColor

}

// Removing localStorage data and destroying chart
onBeforeUnmount(() => {
    chart.destroy()
    localStorage.removeItem('new_chart_dataset')
    localStorage.removeItem('new_chart_data')
    window.alert("Removed localstorage data and destroyed the chart.")
});
</script>

<template>
    <div class="flex flex-col items-center">
        <div class="container mx-auto">
            <div class=" flex flex-wrap items-center">
                <div class="overflow-hidden w-full xl:w-4/6">
                    <h2 class="mb-3 xl:mb-8 text-center text-3xl xl:text-4xl text-indigo-500 font-bold uppercase">Population Chart</h2>

                    <div class="w-[350px] h-[400px] xl:w-[500px] xl:h-[500px] mx-auto">
                        <canvas ref="chartRef" id="chart"></canvas>
                    </div>
                </div>
                <div class="w-full xl:w-2/6 ">
                    <div class="bg-gray-100 border border-gray-400 rounded-md shadow-2xl p-8 m-8 mt-10">
                        <h2 class="mb-12 text-center capitalize text-indigo-700 font-bold text-xl">Add country population
                        </h2>
                        <div class="flex -mx-3 ">
                            <div class="w-full px-3 mb-6">
                                <label for="" class="text-base font-semibold px-1 text-gray-600">Country Name</label>
                                <div class="flex mt-1">
                                    <div
                                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <i class="mdi mdi-earth text-gray-400 text-2xl"></i>
                                    </div>
                                    <input v-model="newData.label" type="text"
                                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                        placeholder="Type Country Name">
                                </div>
                            </div>
                        </div>
                        <div class="flex -mx-3 ">
                            <div class="w-full px-3 mb-6">
                                <label for="" class="text-base font-semibold px-1 text-gray-600">Population</label>
                                <div class="flex mt-1">
                                    <div
                                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <i class="mdi mdi-account-group text-gray-400 text-2xl"></i>
                                    </div>
                                    <input v-model="newData.seriseValue" type="number" maxlength="5"
                                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                        placeholder="Type Population ( i.e. 171.31 )">
                                </div>
                            </div>
                        </div>
                        <div class="flex -mx-3 ">
                            <div class="w-full px-3 mb-3">
                                <label for="" class="text-base font-semibold px-1 text-gray-600">Pick Slice Background Color
                                </label>
                                <div class=" mt-1">
                                    <div ref="colorPickerRef">
                                        <PickColors v-model:value="newData.sliceBGColor" :size="50" theme="dark"
                                            format="rgb" show-alpha />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="text-center">
                            <button @click="updateChart()"
                                class="mt-5 w-[100px] bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
