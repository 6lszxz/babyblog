<script setup>
import {ref} from 'vue'
import { Article } from '../classes/article';
import { useUserAccountStore } from '../stores/userAccount';

import { Editor, rootCtx, defaultValueCtx } from "@milkdown/core";
import { nord } from "@milkdown/theme-nord";
import { Milkdown, useEditor } from "@milkdown/vue";
import { commonmark } from "@milkdown/preset-commonmark";
import {MilkdownProvider} from '@milkdown/vue'


const userAccountStore = useUserAccountStore();
const articleInEditing = ref(new Article('', userAccountStore.username,''));

useEditor((root) => {
    return Editor.make()
        .config(nord)
        .config((ctx) => {
            ctx.set(rootCtx, root)
            ctx.set(defaultValueCtx, articleInEditing.value.content)
        })
        .use(commonmark)
})

</script>

<template>
    <input id="titleInput"/>
    <MilkdownProvider>
        <Milkdown/>
    </MilkdownProvider>
    <button>发布</button>
</template>