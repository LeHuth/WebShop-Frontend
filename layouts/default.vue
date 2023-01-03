<template>
  <v-app>
    <v-main class="justify-center">
      <v-container class="pa-0">
        <NavHeader/>
        <slot/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavHeader from "~/components/NavHeader.vue";

export default {
  name: "default",
  components: {NavHeader}
}
</script>

<style scoped>
:deep(.v-container) {
    max-width: 1280px !important;
}
</style>