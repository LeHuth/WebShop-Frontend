import {useAuthStore} from "~/stores/auth";
export default defineNuxtRouteMiddleware((from, to) => {
    const authStore = useAuthStore()
    const forwardURL = useCookie('forwardUrl')
    if(authStore.isLoggedIn){
        console.log('is logged in')
        return true
    } else{
        //authStore.setForwardURL('/profile/')
        forwardURL.value = '/profile/'
        console.log(forwardURL.value)
        return navigateTo('/login/')
    }
})