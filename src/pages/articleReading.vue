<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router';
import { Viewer } from '@bytemd/vue-next';
import { nextTick, ref } from 'vue';
import {DateTime} from 'luxon'

import 'bytemd/dist/index.css'

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
    article.value = response.data;
    nextTick();
})
.catch((err)=>{
    alert(err);
})


</script>

<template>
    <h1>{{ article.title }}</h1>
    <div>
        作者：{{ article.author }}
    </div>
    <Viewer :value ="article.content" />
    <div>
        创建于{{ DateTime.fromMillis(Number(article.createTime)).toLocaleString(DateTime.DATE_MED)}}
    </div>
</template>