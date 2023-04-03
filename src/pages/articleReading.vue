<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router';
import { Viewer } from 'bytemd';
import { nextTick, ref } from 'vue';

const route = useRoute();

let article =ref({
    title: '默认文章',
    id: '0000000000000000',
    author: '0',
    createTime: 0,
    content: '文章内容',
    likes: 0,
})

axios.get(`/server/getArticle/${route.params.id}`)
.then((response)=>{
    article.value = response.data
    nextTick();
})
.catch((err)=>{
    alert(err);
})

</script>

<template>
    <Viewer :value ="article.content" />
</template>