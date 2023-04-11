<script setup>

import axios from 'axios'
import { getChildNodes } from 'parse5/lib/tree-adapters/default';
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter();

const emailInput = ref('');
const usernameInput = ref('');
const passwordInput = ref('');
const captchaInput = ref('');
const captcha = ref({});


function register(){
    const email = emailInput.value
    const username = usernameInput.value;
    const password = passwordInput.value;
    const captcha = captchaInput.value;
    if(username.length>=20){
        alert('用户名太长啦');
        return;
    }
    axios.post('/server/register',{
        email:email,
        username: username,
        password: password,
        captcha:captcha
    })
    .then((response)=>{
        alert(response.data);
        router.push('/');
    })
    .catch((err)=>{
        getCaptcha();
        // 注册失败时就要刷新验证码
        if(err.response){
            alert(`注册失败，${err.response.data}`);
        }else{
            alert(`注册失败，本地错误${err}`);
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
        <h1>注册</h1>
        <h2>邮箱</h2>
        <input v-model="emailInput"/>
        <h2>用户名</h2>
        <input v-model="usernameInput"/>
        <h2>密码</h2>
        <input v-model="passwordInput"/>
        <h2>验证码</h2>
        <input v-model="captchaInput"/>
        <div v-html="captcha" @click="getCaptcha"></div>
        <button @click="register">注册</button>
    </div>
</template>

<style>
</style>