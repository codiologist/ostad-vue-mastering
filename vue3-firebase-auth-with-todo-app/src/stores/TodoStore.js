import { ref } from 'vue'
import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase/init';


let todoList = ref([])
const todosCollectionRef = collection(db, 'todos');

export const useTodoListStore = defineStore('todoList', () => {
    todoList.value = []
    const getTodos = async () => {
        onSnapshot(todosCollectionRef, (querySnapshot) => {
            let newTodoList = []
            querySnapshot.forEach((doc) => {
                let todo = {
                    id: doc.id,
                    title: doc.data().title,
                    status: doc.data().status
                }
                newTodoList.push(todo)
            });
            todoList.value = newTodoList
        });
    }


    const addTodo = async (todo) => {
        await addDoc(todosCollectionRef, { title: todo, status: false });
    }

    const updateTodo = async (id, status) => {
        await updateDoc(doc(todosCollectionRef, id), {
            status: status
        });
    }

    const deleteTodo = async (todoID) => {
        await deleteDoc(doc(todosCollectionRef, todoID));
    }

    const toggleCompleted = (idToFind) => {
        const todo = todoList.value.find((todo) => todo.id === idToFind);
        if (todo) {
            todo.status = !todo.status;
        }

        updateTodo(todo.id, todo.status)
    }

    // const deleteCompleted = (isCompleted) => {
    //     const todo = todoList.value.find((todo) => todo.status === isCompleted);
    //     deleteTodo(todo.id, isCompleted)

    // }

    return { getTodos, addTodo, updateTodo, deleteTodo, toggleCompleted, todoList }

},
    {
        persist: true,
    })