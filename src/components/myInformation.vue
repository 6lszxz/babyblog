<script setup>
import { ref } from 'vue';

import uploadAvatar from './uploadAvatar.vue';

const uploadAvaterIsOn = ref(false);
</script>

<template>
基本信息
    <ul>
        <li>
            <h3 @click="uploadAvaterIsOn = !uploadAvaterIsOn">头像</h3>
            <img>
        </li>
        <li>
            <h3>用户名</h3>
            <div>{{  }}</div>
        </li>
        <li>
            <h3>用户id</h3>
        </li>
        <li>
            <h3>注册邮箱</h3>
        </li>
        <li>
            <h3>出生日期</h3>
            <div></div>
        </li>
        <li>
            <h3>签名</h3>
            <div></div>
        </li>
    </ul>
    <uploadAvatar v-if="uploadAvaterIsOn"></uploadAvatar>
</template>

<style scoped>
</style>