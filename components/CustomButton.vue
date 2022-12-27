<template>
  <v-btn style="outline: black solid 4px; outline-offset: -4px" class="rounded-0 ma-0 c-btn" :height="height" :width="width" variant="flat">
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