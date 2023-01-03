<template>
<div style="height: 100vh" class="d-flex justify-center align-center">
  <v-card
      width="384"
      height="320"
      class="rounded-0 border-solid border-lg"
      style="border-color:#000 !important;"
      variant="outlined"
  >
    <v-card-text class="px-6 py-8">
      <p class="mb-1">USERNAME</p>
      <v-text-field
          height="64"
          hide-details
          v-model="username"
          class="rounded-0 border-solid border-lg mb-4"
          style="border-color:#000 !important;"
          variant="plain"
      />

      <p class="mb-1">PASSWORD</p>
      <v-text-field
          height="64"
          hide-details
          v-model="pw"
          type="password"
          class="rounded-0 border-solid border-lg"
          style="border-color:#000 !important;"
          variant="plain"
      />
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-btn @click="login" style="border-color:#000 !important;" class="rounded-0 border-solid border-lg" height="64" width="128" variant="outlined">LOGIN</v-btn>
    </v-card-actions>
  </v-card>
</div>
</template>

<script setup lang="ts">
import {loginMutation} from "~/graphql/api";
import {useCookie, useRouter} from "#app";
import {useAuthStore} from "~/stores/auth";

definePageMeta({
      name: 'login'
    })
//const smthing = useState('forwardURL')
const forwardURL = useCookie('forwardUrl')
const isLoggedIn = useCookie('isLoggedIn')
const router = useRouter()
//console.log('check LOGIN: ',isLoggedIn.value)
//console.log('check forwardUrl: ',forwardURL.value)

const pw = ref('admin')
const username = ref('admin')

async function login () {
  const variables = {
    username: username.value,
    password: pw.value
  }
  const {mutate: login} = useMutation(loginMutation, {variables})
  const { data } = await login(variables)

  if(data.login.token){
    const store = useAuthStore()
    console.log(forwardURL.value)
    const cookie = useCookie('refresh-token')
    cookie.value = data.login.refreshToken
    const { onLogin } = useApollo()


    await onLogin(data.login.token)
    await router.push(forwardURL.value)

  }
}

/*
export default {

  name: "login",
  data: () => ({
    pw: "admin",
    username:"admin",
  }),
  computed: {
    ...mapState(useAuthStore, ['auth'])
  },
  methods: {
    async login(){

      const variables = {
        username: this.username,
        password: this.pw
      }
      const {mutate: login} = useMutation(loginMutation, {variables})

      const { data } = await login(variables)
      console.log(data)
      //set token in store

      if(data.login.token){
        const store = useAuthStore()
        const forwardURL = useState('forwardURL')
        console.log(forwardURL.value)
        store.refreshToken = data.login.refreshToken
        const cookie = useCookie('refresh-token')
        cookie.value = data.login.refreshToken
        store.token = data.login.token
        store.isLoggedIn = true
        store.logToken()
        const { onLogin } = useApollo()


        onLogin(data.login.token)
        this.$router.push(forwardURL.value)

      }
    }
  }
}*/
</script>

<style scoped>
p{
}
:deep(.v-field__input){
  padding-top: 0 !important;
  font-size: 24px;
}


</style>