<script setup>
import { ref } from 'vue';
import uploadAvatar from './uploadAvatar.vue';
import {useUserAccountStore} from '../stores/userAccount'
import { useUserInformationStore } from '../stores/userInformation';
import axios from 'axios';

const userAccountStore = useUserAccountStore();
const userInformationStore = useUserInformationStore();

const uploadAvaterIsOn = ref(false);
const isEditing = ref(false);
const userInformationInput = ref({
    id: userAccountStore.id,
    username: '',
    birthday: '',
    avatar: '',
    profileText: '',
})

function updateInformation(){
    userInformationStore.updateInformation(userInformationInput.value)
    .then((val)=>{
        isEditing.value = !isEditing.value;
        alert(val);
    })
}

userInformationStore.getUserInformationById(userAccountStore.id).then((val)=>{
    const url = `server/files/avatars/${val.avatar}`;
    userInformationInput.value = val;
    userInformationInput.value.avatar = url;
})
</script>

<template>
基本信息
    <div>
        <button v-if="!isEditing" @click="isEditing = !isEditing">编辑</button>
        <div v-else>
            <button @click="updateInformation">保存</button>
            <button @click="isEditing = !isEditing">取消</button>
        </div>
        <ul>
        <li>
            <h3 >头像</h3>
            <img :src="userInformationInput.avatar" 
            @click="uploadAvaterIsOn = !uploadAvaterIsOn"  id="avatar"/>
        </li>
        <li>
            <h3>用户名</h3>
            <div v-if="!isEditing">{{ userInformationInput.username }}</div>
            <input v-model="userInformationInput.username" v-else/>
        </li>
        <li>
            <h3>用户id</h3>
            <div>{{ userInformationInput.id }}</div>
        </li>
        <li>
            <h3>注册邮箱</h3>
            <div>{{  }}</div>
        </li>
        <li>
            <h3>出生日期</h3>
            <div v-if="!isEditing" >{{ userInformationInput.birthday }}</div>
            <div v-else>
                <el-date-picker v-model="userInformationInput.birthday"
                value-format="YYYY-MM-DD">
                </el-date-picker>
            </div>
        </li>
        <li>
            <h3>签名</h3>
            <div v-if="!isEditing">{{  userInformationInput.profileText }}</div>
            <div v-else><input v-model="userInformationInput.profileText"></div>
        </li>
    </ul>
    </div>
</template>

<style scoped>
#avatar{
    height: 200px;
    width: 200px;
}
</style>