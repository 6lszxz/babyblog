<script setup>

import axios from 'axios'
import {ref} from 'vue'
import {useRouter} from 'vue-router'

import {useUserAccountStore} from '../stores/userAccount'

const router = useRouter();
const userAccountStore = useUserAccountStore();

const usernameInput = ref('');
const passwordInput = ref('');

function login(){
    const username = usernameInput.value;
    const password = passwordInput.value;
    axios.post('/server/login',{
        username: username,
        password: password
    })
    .then((response)=>{
        userAccountStore.login(usernameInput.value);
        alert(response.data);
        router.push('/');
    })
    .catch((err)=>{
        if(err.response){
            alert(`登录失败，${err.response.data}`);
        }else{
            alert(`登录失败，本地错误${err}`);
        }
    })
}

</script>

<template>
    <div class="informationInput">
        <h1>登录</h1>
        <h2>用户名</h2>
        <input v-model="usernameInput"/>
        <h2>密码</h2>
        <input v-model="passwordInput"/>
        <button @click="login">登录</button>
    </div>
</template>

<style>
</style>