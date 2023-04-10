<script setup>
import {useRouter, useRoute} from 'vue-router'
import { useUserAccountStore } from '../stores/userAccount';
import { ref } from 'vue';
import { computed } from '@vue/reactivity';

const router = useRouter();
const route = useRoute();

const userAccountStore =  useUserAccountStore();

const currentPage=ref('/');

function routerTo(path){
    router.push(path);
    currentPage.value = path;
}

const buttonClass = computed(()=>{
    return function(id){
        if(id === currentPage.value){
            return 'active';
        }else{
            return '';
        }
    }
})

</script>

<template>
    <ul id="menu">
        <li @click="routerTo('/')" 
        :class="buttonClass('/')">主页</li>

        <li @click="routerTo('/login')" 
        v-if="!userAccountStore.isLogged" 
        :class="buttonClass('/login')">登录</li>

        <li @click="routerTo('/register')" 
        v-if="!userAccountStore.isLogged" 
        :class="buttonClass('/register')">注册</li>

        <li @click="routerTo('/articleEditor')"
        :class="buttonClass('/articleEditor')">创作中心</li>
    

        <li v-if="userAccountStore.isLogged" 
        @click="userAccountStore.logout">退出登录</li>
    </ul>
</template>

<style scoped>

#menu{
    height: 7vh;
    width: 100vw;
    background-color: #B0DAFF;
    display: flex;
    margin: 0;
    padding: 0;
}

li{
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 1vh;
    height: 5vh;
    width: 10vw;
}

li:hover{
    background-color: aqua;
    cursor: pointer;
}

.active{
    background-color: chartreuse;
}

</style>