<script setup>
import axios from 'axios';
import {ref} from 'vue';
import { useUserAccountStore } from '../stores/userAccount';
import ArticlePreview from './ArticlePreview.vue';
import { useRouter } from 'vue-router';

const articleList = ref([]);
const userAccountStore = useUserAccountStore(); 
const router = useRouter();

function linkToArticleEditing(article){
    router.push(``)
}

axios.get(`/server/getArticleByAuthor/${userAccountStore.id}`)
.then((response)=>{
    articleList = response.data
})
.catch((err)=>{
    alert(err);
})

</script>

<template>
博客列表
<div v-for="article in articleList">
    <ArticlePreview>
        <template #title>
            {{ article.title }}
        </template>
        <template #content>
            {{ article.content.slice(0,20) }}
        </template>
    </ArticlePreview>

</div>
</template>

<style>
</style>