<template>
  <div style="height: 100vh" class="d-flex justify-center align-center">
    <v-card
        width="384"
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

        <p class="mb-1">E-MAIL</p>
        <v-text-field
            height="64"
            hide-details
            v-model="email"
            type="email"
            class="rounded-0 border-solid border-lg mb-4"
            style="border-color:#000 !important;"
            variant="plain"
        />

        <p class="mb-1">PASSWORD</p>
        <v-text-field
            height="64"
            hide-details
            v-model="password"
            type="password"
            class="rounded-0 border-solid border-lg mb-4"
            style="border-color:#000 !important;"
            variant="plain"
        />
        <p class="mb-1">CONFIRM PASSWORD</p>
        <v-text-field
            height="64"
            hide-details
            type="password"
            class="rounded-0 border-solid border-lg"
            style="border-color:#000 !important;"
            variant="plain"
        />
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn @click="signup" style="border-color:#000 !important;" class="rounded-0 border-solid border-lg" height="64" width="128" variant="outlined">LOGIN</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import {registerMutation} from "~/graphql/api";
import {useAuthStore} from "~/stores/auth";

export default {
  name: "signup",
  data: () => ({
    username: "",
    email: "",
    password: "",
  }),
  methods: {
    signup(){
      let variables = {
        username: this.username,
        email: this.email,
        password: this.password,
      }

      const {mutate: signup} = useMutation(registerMutation, {variables})
      const {data} = signup(variables)

      if(data?.register?.success){
        const store = useAuthStore()
        store.token = data.register.token
        store.refreshToken = data.register.refreshToken
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

:deep(.v-btn){
  box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
}
:deep(.v-btn:active){
  transform: translate(4px, 4px);
  box-shadow: 0px 0px 0px 0px rgba(0,0,0,1);
}
</style>