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
    登录
    <div>
        用户名
        <input v-model="usernameInput"/>
        密码
        <input v-model="passwordInput"/>
        <button @click="login">登录</button>
    </div>
</template>