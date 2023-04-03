import { defineStore } from "pinia";
import { ref } from "vue";
import Cookies from "js-cookie";
import { useRouter } from "vue-router";

export const useUserAccountStore = defineStore('userAccount',()=>{
    const isLoggedCookie = Cookies.get('isLogged');
    const usernameCookie = Cookies.get('username');
    const isLogged = isLoggedCookie ? ref(true) : ref(false);
    const username = usernameCookie ? ref(usernameCookie) : ref(undefined);
    const router = useRouter();

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
            Cookies.remove('isLogged');
            Cookies.remove('username');
            alert('退出成功！');
            router.push('/');
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