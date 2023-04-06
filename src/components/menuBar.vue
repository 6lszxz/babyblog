<script setup>
import {useRouter, useRoute} from 'vue-router'
import { useUserAccountStore } from '../stores/userAccount';

const router = useRouter();
const route = useRoute();

const userAccountStore =  useUserAccountStore();

function routerTo(event){
    const button = event.target;
    router.push(button.dataset.to);
}
</script>

<template>
    <div id="menu">
        <button data-to = "/" @click="routerTo">主页</button>
        <button data-to = "/login" @click="routerTo" 
        v-if="!userAccountStore.isLogged">登录</button>
        <button data-to ="/register" @click="routerTo" 
        v-if="!userAccountStore.isLogged">注册</button>
        <button data-to="/articleEditor" @click="routerTo" >创作中心</button>
        <button v-if="userAccountStore.isLogged" 
        @click="userAccountStore.logout">退出登录</button>
    </div>
</template>

<style scoped>

#menu{
    height: 10vh;
    width: 99vw;
}

button{
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 1vh;
    height: 8vh;
    width: 10vw;
}

</style>