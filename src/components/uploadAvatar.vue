<script setup>
import axios from 'axios'


function upload(event){
    const file = event.target.files[0];

}

</script>

<template>
    <div>
        上传头像
        <img>
        <input type="file" @change="upload"/>
    </div>

</template>

<style scoped>
</style>

