<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const article = ref({
    title: '默认文章',
    id: '0000000000000000',
    author: '0',
    createTime: 0,
    content: '文章内容',
    likes: 0,
});
const router = useRouter()

axios.get('/server/getRandomArticle')
.then((response)=>{
    article.value = response.data;
})

function linkToArticle(){
    router.push(`/article/${article.value.id}`)
}

</script>

<template>
    <div @click="linkToArticle">
        {{ article.title }}
        {{ article.content }}
        
    </div>
</template>

<style>
</style>