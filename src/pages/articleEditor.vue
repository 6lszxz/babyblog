<script setup>
import {ref} from 'vue'
import { Article } from '../classes/article';
import { useUserAccountStore } from '../stores/userAccount';
import { Editor} from '@bytemd/vue-next';
import gfm from '@bytemd/plugin-gfm'
import axios from 'axios'
import {useRouter} from 'vue-router'

import 'bytemd/dist/index.css'

const userAccountStore = useUserAccountStore();
const articleInEditing = ref(new Article('', userAccountStore.email,''));
// 插件，让其支持GFM语法
const plugins =[gfm(),];

const router = useRouter()

function updateRendering(value){
    articleInEditing.value.content = value;
}

function addArticle(){
    if(articleInEditing.value.title.length===0){
        alert('请输入标题');
        return;
    }
    if(articleInEditing.value.content.length===0){
        alert('请输入正文');
        return;
    }
    articleInEditing.value.content = articleInEditing.value.content.replaceAll('"','\"');
    articleInEditing.value.title = articleInEditing.value.title.replaceAll('"','\"');
    axios.post('/server/addArticle',articleInEditing.value)
    .then((response)=>{
        alert(response.data);
        router.push('/')
    })
    .catch((err)=>{
        alert(`发布文章失败，${err.response.data}`);
    })
}

if(!userAccountStore.isLogged){
    alert('您还没有登录，请先登录');
    router.push('/login');
}

</script>

<template>
    <input id="titleInput" v-model="articleInEditing.title"/>
    <!-- 由于没有支持v-model， 所以需要手动实现v-model-->
    <Editor :value = "articleInEditing.content" 
    :plugins="plugins" @change="updateRendering" locate="zh"/>
    <button @click="addArticle">发布</button>
</template>

<style>
.bytemd {
    height: calc(100vh - 100px);
}
</style>