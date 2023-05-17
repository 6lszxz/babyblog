<script setup>
import axios from 'axios';
import { nextTick, ref } from 'vue';
import {useRouter } from 'vue-router';
import ArticlePreview from '../components/ArticlePreview.vue';

const articles =ref([]);
const router = useRouter();

for(let i=0;i<5;i++){
    await axios.get('/server/getRandomArticle')
    .then((response)=>{
        articles.value.push(response.data);
    })
};

function linkToArticle(article){
    router.push(`/article/${article.id}`)
}

</script>

<template>
    <ecButton></ecButton>
    <div v-for="article in articles">
        <ArticlePreview @click="linkToArticle(article)">
            <template #title>
                {{ article.title }}
            </template>
            <template #content>
                {{ article.content.slice(0,20) }}
            </template>
        </ArticlePreview>
    </div>
</template>

<style scoped>
</style>
