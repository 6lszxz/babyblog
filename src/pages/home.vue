<script setup>

import { ref } from 'vue';
import ArticlePreview from '../components/ArticlePreview.vue';

let mainText= ref(0);
setTimeout(()=>{
    mainText.value = 1;
},1000)

let blogTitles = [1,2,3,4,5,6,7,8,9]
</script>

<template>
    <header>
        <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125" />
        <div v-for="blogTitle in blogTitles">
            <ArticlePreview>{{ blogTitle }}</ArticlePreview>
        </div>
        <div class="wrapper">
        </div>
    </header>
    <main>
    </main>
</template>

<style scoped>
</style>
