<template>
  <div style="height: 100vh; row-gap: 32px" class="d-flex flex-wrap justify-space-around align-center">
    <div v-for="p in data.products">
      <Tile :product="p"/>
    </div>
  </div>
</template>

<style scoped>
span {
  line-height: 0.75;
}

h2{
  line-height: 0.7;
}
</style>
<script setup lang="ts">
import Tile from "~/components/Tile.vue";
import {allProductsQuery} from "~/graphql/api";

const { data } = await useAsyncQuery(allProductsQuery)
</script>