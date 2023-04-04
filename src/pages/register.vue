<script setup>

import axios from 'axios'
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter();

const usernameInput = ref('');
const passwordInput = ref('');

function register(){
    const username = usernameInput.value;
    const password = passwordInput.value;
    if(username>=20){
        alert('用户名太长啦');
        return;
    }
    axios.post('/server/register',{
        username: username,
        password: password
    })
    .then((response)=>{
        alert(response.data);
        router.push('/');
    })
    .catch((err)=>{
        if(err.response){
            alert(`注册失败，${err.response.data}`);
        }else{
            alert(`注册失败，本地错误${err}`);
        }
        
    })
}

</script>

<template>
    <div class="informationInput">
        <h1>注册</h1>
        <h2>用户名</h2>
        <input v-model="usernameInput"/>
        <h2>密码</h2>
        <input v-model="passwordInput"/>
        <button @click="register">注册</button>
    </div>
</template>

<style>
.informationInput{
    display: flex;
    flex-direction: column;
}
.informationInput *{
    width: 20vw;
}
</style>