import {useCookie, useRouter} from "#app";
import {selfQuery, verifyTokenMutation} from "~/graphql/api";
import {useAuthStore} from "~/stores/auth";
export default defineNuxtRouteMiddleware( async (from, to) => {
    const tokenCookie = useCookie('apollo:default.token')
    const isLoggedIn = useCookie('isLoggedIn')
    const forwardURL = useCookie('forwardUrl')

    // @ts-ignore
    if(!isLoggedIn.value){
        isLoggedIn.value = false
        forwardURL.value = '/'
    } else {

    }

    console.log('no global middleware')
    if(tokenCookie.value){
        const authStore = useAuthStore()
        //verifyToken
        let variables = {
            token: tokenCookie.value
        }
        const {mutate: verify} = useMutation(verifyTokenMutation, {variables})
        try{
            // @ts-ignore
            console.log("TRY VERIFY")
            const {data} = await verify(variables)
            console.log(data.verifyToken.success)
            if(data.verifyToken.success){
                console.log('query')
                const {data} = await useAsyncQuery(selfQuery)
                console.log(data.value.self)
                const cookie = useCookie('userid')
                // @ts-ignore
                cookie.value = data.value.self.id
                // @ts-ignore
                authStore.user.id = data.value.self.id
                authStore.user.reviews = data.value.self.reviewOwner
                authStore.user.image = data.value.self.memberImage
            }
        } catch (e){
        }
        //get self info (userid) and set in cookies
        authStore.isLoggedIn = true
        // @ts-ignore
        isLoggedIn.value = true
        return
    }


})