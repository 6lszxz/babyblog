import { defineStore } from "pinia";
import { ref } from "vue";
import Cookies from "js-cookie";
import { useRouter } from "vue-router";

export const useUserAccountStore = defineStore('userAccount',()=>{
    const isLoggedCookie = Cookies.get('isLogged');
    const idCookie = Cookies.get('id');
    const isLogged = isLoggedCookie ? ref(true) : ref(false);
    const id = idCookie ? ref(idCookie) : ref(undefined);
    const router = useRouter();

    function login(idInput){
        if(isLogged.value === false){
            isLogged.value = true;
            id.value = idInput;
        }else{
            throw(new Error('用户已登录'));
        }
    }
    function logout(){
        if(isLogged.value === true){
            isLogged.value = false;
            id.value = undefined;
            Cookies.remove('isLogged');
            Cookies.remove('id');
            alert('退出成功！');
            router.push('/');
        }else{
            throw(new Error('请先登录'));
        }
    } 

    return{
        isLogged,
        id,
        login,
        logout
    }
})