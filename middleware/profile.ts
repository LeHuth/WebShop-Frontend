import {useAuthStore} from "~/stores/auth";
import {useAuth} from "~/composables/useAuth";
import {useForwardUrl} from "~/composables/useForwardUrl";
export default defineNuxtRouteMiddleware((from, to) => {
    const isLoggedIn = useAuth()
    const forwardURL = useForwardUrl()
    if(isLoggedIn.value){
        console.log('is logged in')
        return true
    } else{
        //authStore.setForwardURL('/profile/')
        forwardURL.value = '/profile/'
        console.log(forwardURL.value)
        return navigateTo('/login/')
    }
})