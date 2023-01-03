import {useCookie, useRouter} from "#app";
import {selfQuery, verifyTokenMutation} from "~/graphql/api";
export default defineNuxtRouteMiddleware( async (from, to) => {
    const tokenCookie = useCookie('apollo:default.token')
    const isLoggedIn = useCookie('isLoggedIn')
    const forwardURL = useCookie('forwardUrl')

    // @ts-ignore
    if(!isLoggedIn.value){
        isLoggedIn.value = false
    }

    console.log('no global middleware')
    if(tokenCookie.value){
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
                cookie.value = data.value.self.id
            }
        } catch (e){

        }
        //get self info (userid) and set in cookies
        // @ts-ignore
        isLoggedIn.value = true
        return
    }


})