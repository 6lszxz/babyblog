<script setup>

import axios from 'axios'
import {ref} from 'vue'
import {useRouter} from 'vue-router'

import {useUserAccountStore} from '../stores/userAccount'

const router = useRouter();
const userAccountStore = useUserAccountStore();

const emailInput = ref('');
const passwordInput = ref('');
const captchaInput = ref('');
const captcha = ref({});

function login(){
    const email = emailInput.value;
    const password = passwordInput.value;
    const captcha = captchaInput.value;
    axios.post('/server/login',{
        email: email,
        password: password,
        captcha: captcha,
    })
    .then((response)=>{
        userAccountStore.login(emailInput.value);
        alert(response.data);
        router.push('/');
    })
    .catch((err)=>{
        getCaptcha();
        if(err.response){
            alert(`登录失败，${err.response.data}`);
        }else{
            alert(`登录失败，本地错误${err}`);
        }
    })
}

function getCaptcha(){
    axios.get('/server/getCaptcha')
    .then((response)=>{
        captcha.value = response.data;
    })
}

getCaptcha();
// 在最开始需要获取一个验证码

</script>

<template>
    <div class="informationInput">
        <h1>登录</h1>
        <h2>邮箱</h2>
        <input v-model="emailInput"/>
        <h2>密码</h2>
        <input v-model="passwordInput"/>
        <h2>验证码</h2>
        <input v-model="captchaInput"/>
        <div v-html="captcha" @click="getCaptcha" id="captcha"></div>
        <button @click="login">登录</button>
    </div>
</template>

<style>
</style>