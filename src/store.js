import { defineStore } from "pinia";

export const useStore = defineStore('store',()=>{
    const isLogged = ref(false);
    const username = ref(undefined);
})