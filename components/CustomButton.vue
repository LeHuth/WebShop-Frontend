<template>
  <v-btn style="border-color:#000 !important;" class="rounded-0 border-solid border-lg ma-0" :height="height" :width="width" variant="outlined">
    {{ text }}</v-btn>
</template>

<script>
export default {
  name: "CustomButton",
  props: ['width','height','text']
}
</script>

<style scoped>

</style>