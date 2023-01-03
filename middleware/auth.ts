import {useCookie, useRouter} from "#app";

export default defineNuxtRouteMiddleware( async (to, from) => {
    const isLoggedIn = useCookie('isLoggedIn')
    const forwardURL = useCookie('forwardUrl')
    console.log('auth middleware')
    if(!['login'].includes(to.name)){
        if(isLoggedIn.value){
            return
        } else{
            forwardURL.value = to.path
            return navigateTo('/login/')
        }
    }
    /*
    const router = useRouter()
    // get token
    // | true -> verify
    //      | verify success -> get self info -> fill store.user
    // | false -> store.auth.isLoggedIn = false
    //      | to == profile -> redirectTo('/login') && store.auth.forwardURL == 'profile'
    if(to.fullPath == '/login/'){
        return true
    }
    const tokenCookie = useCookie('apollo:default.token')

    console.log('#########################################')
    //console.log(to)
    //console.log(from)
    if(tokenCookie.value){
        console.log('lolol')
    } else {
        console.log('NO TOKEN')
        const auth = useAuthStore()
        if(to.fullPath == '/profile/'){

            await auth.setForwardURL(to.fullPath)
            console.log('forwardurl: ', auth.forwardURL)
            //return navigateTo('/login/')
        }
        if (auth.forwardURL == to.fullPath) {
            router.push('/login/')
        }

    }
    console.log(tokenCookie)
    let variables = {
        token: tokenCookie
    }
    const {mutate: verify} = useMutation(verifyTokenMutation, {variables})


    try{
        // @ts-ignore
        console.log("TRY VERIFY")
        const {data} = await verify(variables)
        //console.log(data.verifyToken)
    } catch (e){
        let rToken = useCookie('refresh-token')
        //console.log(rToken.value)
        let variables = {
            refreshToken: rToken.value
        }
        const {mutate: refresh} = useMutation(refreshToken, {variables})
        try{
            // @ts-ignore
            const {data} = await refresh(variables)
            let tokenCookie = useCookie('apollo:default.token')
            // @ts-ignore
            //console.log(data)
            // @ts-ignore
            tokenCookie.value = data.refreshToken.token
            // @ts-ignore
            rToken.value = data.refreshToken.refreshToken
            //console.log(tokenCookie.value)
        }catch (e){
            console.error("Error while refreshing")
        }
    }
    //navigateTo('/login/')

    // @ts-ignore
*/





})