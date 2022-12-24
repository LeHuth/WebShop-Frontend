<template>
  <v-app>
    <v-main class="justify-center">
      <v-container class="px-0">
        <slot/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>
:deep(.v-container) {
    max-width: 1280px !important;
}
</style>