import {defineStore} from "pinia";
import {useFetch} from "#app";
import {verifyTokenMutation} from "~/graphql/api";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isLoggedIn:true,
        token:null,
        refreshToken: null,
        isAdmin: false,
        isStaff: false,
        user:{
            username: "",
        }
    }),
    actions: {
        logToken(){
            console.log(this.token)
        },
        verifyToken(){
            const {mutate: verify} = useMutation(verifyTokenMutation, {})
        }

    },

    getters:{}
})