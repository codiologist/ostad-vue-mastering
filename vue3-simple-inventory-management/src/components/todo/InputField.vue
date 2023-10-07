<script setup>
import { ref, onMounted } from "vue";
import { useTodoListStore } from "../../stores/TodoStore";

const todo = ref("");
const todoStore = useTodoListStore();
const input = ref("input");

function addItemAndClear(item) {
  if (item.length === 0) {
    return;
  }
  // invokes function in the store:
  todoStore.addTodo(item);
  todo.value = "";
}

onMounted(() => {
  input.value.focus();
});
</script>


<template>
  <div class="relative flex w-full items-stretch mb-3">
    <form @submit.prevent="addItemAndClear(todo)" class="w-full flex">
      <input
      ref="input"        
        v-model="todo"
        type="text"
        placeholder="Create a new task..."
        class="
          px-3
          py-5
          rounded-sm
          placeholder-slate-500
          text-slate-600
          relative
          bg-whit
          rounded-l
          text-sm
          border-2
          border-slate-400
          shadow
          outline-none
          w-full
          pl-5
          pr-28
        "
      />
      <button type="button" :disabled="todo== ''" @click.prevent="addItemAndClear(todo)"
       class="w-[180px] rounded-r-md bg-[#1C2434] text-white font-bold px-6" :class="todo == ''  ?  'btn-disabled' : ''">
       <i class="text-md text-white mdi mdi-plus"></i>
       Add Task
      </button>
    </form>
  </div>
</template>