<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import RadioBtn from './RadioButton.vue'
import FilterBtn from './FilterButton.vue'

import { useTodoListStore } from '../../stores/TodoStore'

const todoStore = useTodoListStore()

const state = reactive({ status: 'all' })

const filteredTasks = computed(() => {
    return state.status === 'all'
        ? todoStore.todoList
        : todoStore.todoList.filter((todoList) => todoList.status == state.status)
})

const inputRef = ref();
onMounted(() => {
    todoStore.getTodos()
});

</script>

<template>
    <div class="py-3 px-3 flex justify-between rounded-lg shadow-lg bg-[#1C2434]">
        <h3 class="p-2 text-base w-[200px] text-white">
            <span v-if="state.status == 'all'">Total Task</span>
            <span v-if="state.status == false">Active Task</span>
            <span v-if="state.status == true">Completed Task</span>
            : {{ filteredTasks.length }}
        </h3>
        <div class="lg:inline sm:hidden ">
            <FilterBtn :class="state.status == 'all' ? 'bg-yellow-400 text-{#1C2434} font-semibold' : 'bg-white'"
                title="All" @filter="state.status = 'all'" />
            <FilterBtn class="mx-2"
                :class="state.status == false ? 'bg-yellow-400 text-{#1C2434} font-semibold' : 'bg-white'" title="Active"
                @filter="state.status = false" />

            <FilterBtn :class="state.status == true ? 'bg-yellow-400 text-{#1C2434} font-semibold' : 'bg-white'"
                title="Completed" @filter="state.status = true" />
        </div>


    </div>
    <div class="justify-center max-h-100% mt-6">
        <div class="block rounded-lg shadow-lg bg-white w-full text-start">
            <div v-if="filteredTasks.length != 0">
                <div class="relative rounded py-3 px-6 border-b border-gray-300 flex flex-row items-center  bg-slate-800 text-white"
                    :class="{ completed: todo.status }" v-for="todo in filteredTasks" :key="todo.id">
                    <RadioBtn class="m-2" :todoItem="todo" @click.stop="todoStore.toggleCompleted(todo.id)" />
                    <span class="p-2">{{ todo.title }}</span>
                    <div class="absolute top-4.5 left-7">
                        <input ref="inputRef" :id="`task-${todo.id}`" v-model="todo.status" type="checkbox" hidden
                            :checked="todo.completed"
                            class="h-6 w-6 rounded-full border-gray-200 bg-yellow-400 focus:ring-0 focus:ring-offset-0 focus:outline-0 shadow-lg mr-2" />
                    </div>

                    <div class="absolute right-4 cursor-pointer" @click="todoStore.deleteTodo(todo.id)">
                        <i class="text-3xl text-rose-500 mdi mdi-delete-outline"></i>
                    </div>
                </div>
            </div>
            <div v-else class="p-6 text-center">
                <h1 class="text-2xl font-bold capitalize text-red-600">No todos availabel !!!</h1>
            </div>
        </div>
    </div>
</template>
<style scoped>
.completed {
    text-decoration: line-through;
    text-decoration-thickness: 2px;
    color: #FACC15;
}
</style>
