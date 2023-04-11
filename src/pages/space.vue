<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()

</script>

<template>
    <h1>个人中心</h1>
    <router-view></router-view>
</template>

<style scoped>
h1{
    margin-top: 0;
}

</style>