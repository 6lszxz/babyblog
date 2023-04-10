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
    <div @click="linkToArticle" id="informationShow">
        <h2>
            {{ article.title }}
        </h2>
        <div>
            {{ article.content }}
        </div>
    </div>
</template>

<style scoped>
#informationShow{
    display: flex;
    flex-direction: column;
    width: 40vw;
    height: 15vh;
    box-shadow: 2px 2px 5px gray;
    border-radius: 5px;
    background-color: #f9f7f0;;
}

#informationShow:hover{
    cursor: pointer;
}
</style>