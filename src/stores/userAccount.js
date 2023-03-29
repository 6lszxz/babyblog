import { defineStore } from "pinia";
import { ref } from "vue";
import Cookies from "js-cookie";

export const useUserAccountStore = defineStore('userAccount',()=>{
    const isLoggedCookie = Cookies.get('isLogged');
    const usernameCookie = Cookies.get('username');
    const isLogged = isLoggedCookie ? isLoggedCookie : ref(false);
    const username = usernameCookie ? usernameCookie : ref(undefined);

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

    return{
        isLogged,
        username,
        login,
        logout
    }
})