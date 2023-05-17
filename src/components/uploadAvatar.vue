<script setup>
import axios from 'axios'

import {useUserAccountStore} from '../stores/userAccount'

const userAccountStore = useUserAccountStore();

function upload(event){
    const file = event.target.files[0];
    console.log(file);
    axios.post('/server/uploadAvatar',{
        avatar: file,
        id: userAccountStore.id,
    },{
        headers: {'Content-Type':'multipart/form-data'}
    })
    .then((response)=>{
        alert('上传头像成功');
    })
    .catch((err)=>{
        alert(`上传头像失败，${err}`);
    })
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