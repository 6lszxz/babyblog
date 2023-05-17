import axios from "axios";
import { defineStore } from "pinia";

export const useUserInformationStore = defineStore('userInformation',()=>{
    function getUserInformationById(id){
        return new Promise((resolve, reject)=>{
            axios.get(`/server/getInformation/${id}`)
            .then((response)=>{
                resolve(response.data);
            })
        })
    }
    function updateInformation(information){
        return new Promise((resolve, reject)=>{
            axios.post('/server/updateInformation',information)
            .then((response)=>{
                resolve(response.data);
            })
            .catch((err)=>{
                reject(err);
            })
        })
    }
    return{
        getUserInformationById,
        updateInformation
    }
})