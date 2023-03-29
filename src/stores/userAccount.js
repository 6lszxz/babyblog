import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserAccountStore = defineStore('userAccount',()=>{
    const isLogged = ref(false);
    const username = ref(undefined);

    function login(usernameInput){
        if(isLogged.value === false){
            isLogged.value = true;
            username.value = usernameInput;
        }else{
            throw(new Error('用户已登录'));
        }
    }
    function logout(){
        if(isLogged.value === true){
            isLogged.value = false;
            username.value = undefined;
        }else{
            throw(new Error('请先登录'));
        }
    } 
})