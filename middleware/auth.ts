import { useAuthStore } from '@/stores/auth'
export default defineNuxtRouteMiddleware((to, from) => {
    const store = useAuthStore()

    if(!store.isLoggedIn) {
        navigateTo('/login/')
    }


})