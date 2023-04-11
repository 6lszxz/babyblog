import { defineStore } from "pinia";
import { ref } from "vue";
import Cookies from "js-cookie";
import { useRouter } from "vue-router";

export const useUserAccountStore = defineStore('userAccount',()=>{
    const isLoggedCookie = Cookies.get('isLogged');
    const emailCookie = Cookies.get('email');
    const isLogged = isLoggedCookie ? ref(true) : ref(false);
    const email = emailCookie ? ref(emailCookie) : ref(undefined);
    const router = useRouter();

    function login(emailInput){
        if(isLogged.value === false){
            isLogged.value = true;
            email.value = emailInput;
        }else{
            throw(new Error('用户已登录'));
        }
    }
    function logout(){
        if(isLogged.value === true){
            isLogged.value = false;
            email.value = undefined;
            Cookies.remove('isLogged');
            Cookies.remove('email');
            alert('退出成功！');
            router.push('/');
        }else{
            throw(new Error('请先登录'));
        }
    } 

    return{
        isLogged,
        email,
        login,
        logout
    }
})