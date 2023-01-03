import {defineStore} from "pinia";
import {useFetch} from "#app";
import {verifyTokenMutation} from "~/graphql/api";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isLoggedIn:false,
        forwardURL: '',
        token:null,
        refreshToken: null,
        isAdmin: false,
        isStaff: false,
        user:{
            username: "",
            image: '',
            id: ''
        }
    }),
    actions: {
        logToken(){
            console.log(this.token)
        },
        verifyToken(){
            const {mutate: verify} = useMutation(verifyTokenMutation, {})
        },
        setForwardURL(url:string){
            this.forwardURL = url
        },
        getIdFromCookies(){
            const cookie = useCookie('userid')
            this.user.id = cookie.value
        }

    },

    getters:{}
})