<script setup>

import {useRouter, useRoute} from 'vue-router'

const router = useRouter();
const route =useRoute();

function routerTo(event){
    const button = event.target;
    router.push(button.dataset.to);
}

</script>

<template>
    <button data-to = "/" @click="routerTo">主页</button>
    <button data-to = "/login" @click="routerTo">登录</button>
    <button data-to ="/register" @click="routerTo">注册</button>
    <router-view></router-view>
</template>

<style scoped>
</style>
