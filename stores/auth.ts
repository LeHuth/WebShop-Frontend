import {defineStore} from "pinia";
import {useFetch} from "#app";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isLoggedIn:false,
        token:null,
        isAdmin: false,
        isStaff: false,
        user:{
            username: "",
        }
    }),
    actions: {
        isAuthenticated(){
            useFetch('localhost:8000/graphql',{method: "GET", body:})
        }
    }
})