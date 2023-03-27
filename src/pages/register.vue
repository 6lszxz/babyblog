<script setup>

import axios from 'axios'
import {ref} from 'vue'

let usernameInput = ref('');
let passwordInput = ref('');

function register(){
    axios.post('/server/register',{
        username: usernameInput.value,
        password: passwordInput.value
    })
    .then((response)=>{
        console.log(response);
    })
    .catch((err)=>{
        console.log(err);
    })
}

</script>

<template>
    注册
    <div>
        用户名
        <input v-model="usernameInput"/>
        密码
        <input v-model="passwordInput"/>
        <button @click="register">注册</button>
    </div>
</template>