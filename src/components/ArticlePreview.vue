<script setup>
import { ref } from 'vue';

defineProps(['mainText']);

let like = ref(0);
function likeUp(){
    like.value++
}
</script>

<template>
    <div>
        <slot/>
        {{ mainText }}
        <button @click="likeUp">点赞数：{{ like }}</button>
    </div>
</template>

<style>
</style>