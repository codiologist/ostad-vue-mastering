import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '../router';

import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';
import { auth } from '../firebase/init';


const startValidation = ref(false);
const errorMessage = ref(null);
const isRegistered = ref(false);
const userCredentials = ref({});
const userData = ref({});


export const useAuthStore = defineStore('auth', () => {

    // 👉 Login function
    const login = (credentials) => {
        userCredentials.value = credentials
        startValidation.value = true;
        if (isValidEmail.value == true && isStrongPassword.value == true) {
            signInWithEmailAndPassword(auth, credentials.email, credentials.password).then((response) => {
                userData.value = {
                    userId: response.user.uid,
                    name: response.user.displayName,
                    email: response.user.email
                };
                // userData.value.userID = response.user.uid
                // userData.value.name = response.user.displayName
                // userData.value.email = response.user.email
                console.log('userData', userData);
                localStorage.setItem(
                    "accessToken",
                    JSON.stringify(response.user.accessToken)
                );
                router.push('/profile')
            }).catch((error) => {
                if (error) {
                    errorMessage.value = "Invalid username or password"
                }

            })
        }
    };

    // 👉 Sign Up Function
    const signUp = (credentials) => {
        userCredentials.value = credentials
        startValidation.value = true;
        if (isValidEmail.value == true && isStrongPassword.value == true &&
            isPasswordConfirmed.value == true) {
            createUserWithEmailAndPassword(auth, credentials.email, credentials.password).then((credential) => {
                updateProfile(auth.currentUser, {
                    displayName: credentials.username,
                })
                isRegistered.value = true
                setTimeout(() => {
                    router.push('/')
                    isRegistered.value = false
                }, 3500);
                startValidation.value = false;
            }).catch((error) => {
                if (error) {
                    errorMessage.value = "This email already teaken"
                }
            })
        }
    };

    // 👉 Sign Out Function
    const logout = async () => {
        await signOut(auth)
        localStorage.removeItem("accessToken");
        // userData.value ={}
        router.push('/')
    };


    // 👉 Custom Validation

    const isValidName = computed(() => {
        return startValidation.value
            ? userCredentials.value.username > 5
            : null;
    });

    const isValidEmail = computed(() => {
        return startValidation.value
            ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userCredentials.value.email)
            : null;
    });


    const isStrongPassword = computed(() => {
        return startValidation.value
            ? /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(
                userCredentials.value.password
            )
            : null;
    });

    const isPasswordConfirmed = computed(() => {
        return startValidation.value ? userCredentials.value.password == userCredentials.value.confirmPassword : null;
    });






    return { login, signUp, logout, isValidName, isValidEmail, isStrongPassword, isPasswordConfirmed, startValidation, errorMessage, isRegistered, userData }


},
    // {
    //     persist: true,
    // }
)

