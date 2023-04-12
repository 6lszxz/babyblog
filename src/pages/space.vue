<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useUserAccountStore } from '../stores/userAccount';

const route = useRoute();
const router = useRouter();

const userAccountStore = useUserAccountStore();
if(route.params.id === userAccountStore.id){
    router.push()
}

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