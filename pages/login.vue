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

<script>
export default {
  name: "login",
  data: () => ({
    pw: "M1kT3/sP1",
    username:"user",
  }),

  methods: {
    async login(){
      const test = gql`
        mutation tokenAuth($username: String!, $password: String!){
          tokenAuth(username: $username, password: $password){
            payload
            token
          }
        }`

      const variables = {
        username: this.username,
        password: this.pw
      }


      const {mutate: login} = useMutation(test, {variables})
      const { data } = await login(variables)
      console.log(data)
      //set token in store
      if(data.tokenAuth.token){
        this.$router.push('/profile/')

      }
    }
  }
}
</script>

<style scoped>
p{
}
:deep(.v-field__input){
  padding-top: 0 !important;
  font-size: 24px;
}


</style>