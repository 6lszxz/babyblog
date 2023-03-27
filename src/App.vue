<script setup>

import {useRouter, useRoute} from 'vue-router'

const router = useRouter();
const route =useRoute();

function routerTo(to){
    console.log(to);
    router.push(to);
}

</script>

<template>
    <button to= "/" @click="routerTo(to)">主页</button>
    <button to ="/register" @click="routerTo(to)">注册</button>
    <router-view></router-view>
</template>

<style scoped>
</style>
