import { useAuthStore } from '@/stores/auth'
import {refreshToken, verifyTokenMutation} from "~/graphql/api";
import {useApollo} from "#imports";
import {useCookie} from "#app";
import {tr} from "vuetify/locale";
export default defineNuxtRouteMiddleware(async (to, from) => {

    const tokenCookie = useCookie('apollo:default.token')
    console.log(tokenCookie)
    let variables = {
        token: tokenCookie
    }
    const {mutate: verify} = useMutation(verifyTokenMutation, {variables})


    try{
        // @ts-ignore
        const {data} = await verify(variables)
        console.log(data.verifyToken)
    } catch (e){
        let rToken = useCookie('refresh-token')
        console.log(rToken.value)
        let variables = {
            refreshToken: rToken.value
        }
        const {mutate: refresh} = useMutation(refreshToken, {variables})
        try{
            // @ts-ignore
            const {data} = await refresh(variables)
            let tokenCookie = useCookie('apollo:default.token')
            // @ts-ignore
            console.log(data)
            // @ts-ignore
            tokenCookie.value = data.refreshToken.token
            // @ts-ignore
            rToken.value = data.refreshToken.refreshToken
            console.log(tokenCookie.value)
        }catch (e){
            console.error("Error while refreshing")
        }
    }
    navigateTo(to)

    // @ts-ignore






})