<template>
  <div class="d-flex justify-space-between" style="outline: black solid 4px; outline-offset: -4px; height: 64px">
    <h2 @click="$router.push('/')" style="cursor: pointer" class="align-self-center pl-4">
      WEBSHOP
    </h2>
    <div @click="$router.push('/profile/')" v-if="data" style="height: 64px; cursor: pointer">
        <img style="outline: black solid 4px; outline-offset: -4px;" :src="data.self.memberImage[0].image" width="64" height="64" />
    </div>
    <CustomButton v-else height="64" width="128" text="LOGIN"/>
  </div>
</template>

<script setup lang="ts">
import {selfQuery} from "~/graphql/api";

const {data} = await useAsyncQuery(selfQuery)
</script>

<style scoped>

</style>