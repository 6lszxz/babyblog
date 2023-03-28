<script setup>

import axios from 'axios'
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter();

let usernameInput = ref('');
let passwordInput = ref('');

function register(){
    axios.post('/server/register',{
        username: usernameInput.value,
        password: passwordInput.value
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
    注册
    <div>
        用户名
        <input v-model="usernameInput"/>
        密码
        <input v-model="passwordInput"/>
        <button @click="register">注册</button>
    </div>
</template>