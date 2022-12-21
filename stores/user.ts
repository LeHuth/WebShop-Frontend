import {defineStore} from "pinia";

export const useUserStore = defineStore('user', {
    state: ()=>({
        id: "",
        username: "",
        email: "",
        reviews: [],
        wishlist: [],
        orders: [],
    })
})

