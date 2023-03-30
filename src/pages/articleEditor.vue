<script setup>
import {ref} from 'vue'
import { Article } from '../classes/article';
import { useUserAccountStore } from '../stores/userAccount';
import { Editor} from '@bytemd/vue-next';
import gfm from '@bytemd/plugin-gfm'

import 'bytemd/dist/index.css'

const userAccountStore = useUserAccountStore();
const articleInEditing = ref(new Article('', userAccountStore.username,''));
// 插件，让其支持GFM语法
const plugins =[gfm(),];

function updateRendering(value){
    articleInEditing.value.content = value;
    console.log(articleInEditing.value);
}

</script>

<template>
    <input id="titleInput" v-model="articleInEditing.title"/>
    <!-- 由于没有支持v-model， 所以需要手动实现v-model-->
    <Editor :value = "articleInEditing.content" 
    :plugins="plugins" @change="updateRendering" locate="zh"/>
    <button>发布</button>
</template>

<style scoped>

</style>