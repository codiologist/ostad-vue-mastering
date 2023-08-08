<script setup >
import { reactive} from 'vue'
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase/init.js';
const emit = defineEmits(["loggedIn"]);

const data = reactive({
    email: '',
    password: '',
});

const login = () => {
    signInWithEmailAndPassword(auth, data.email, data.password).then((credential) => {
        emit('loggedIn')
        console.log(credential.user);
    })
        
}

</script>

<template>
    <form @submit.prevent="login">
        <h2>Log in</h2>
        <input type="email" placeholder="Email" required v-model="data.email">
        <input type="password" placeholder="Password" required v-model="data.password">
        <button>Log in</button>
    </form>
</template>

<style lang="scss" scoped></style>