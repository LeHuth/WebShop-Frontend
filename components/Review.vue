<template>
<div>
<v-card class="rounded-0 border-solid border-lg px-6 py-8"
        width="900"
  style="border-color:#000 !important;"
  variant="outlined">
<v-row no-gutters>
  <v-col cols="1" style="height: 64px">
    <img style="width: 64px; height: 64px; outline: black solid 4px;" :src="image[0].image" alt="da">
  </v-col>
  <v-col>
    <div style="height: 64px" class="pl-1 d-flex flex-column justify-space-between">
      <h3 style="line-height: 0.8">{{username}}</h3>
      <h1 style="line-height: 0.7">{{title}}</h1>
    </div>
  </v-col>
  <v-col>
    <div style="height: 64px" class="d-flex flex-column justify-space-between">
      <h3 class="text-right" style="line-height: 0.8">{{date.split('-')[2]}}/{{date.split('-')[1]}}/{{date.split('-')[0]}}</h3>
      <!--<h1 class="text-right" style="line-height: 0.7">{{rating}}</h1>-->
      <v-rating size="34" class="justify-end" readonly :model-value="rating"/>
    </div>
  </v-col>
</v-row>
  <v-row class="mt-8" no-gutters>
    <v-col class="d-flex flex-column align-center justify-space-between pr-2" cols="1">

      <CustomButton width="32" height="32" text="U"/>
      <CustomButton width="32" height="32" text="D"/>

    </v-col>
    <v-col class="pl-1">
      <p>
        {{text}}

      </p>
    </v-col>
  </v-row>
  <CustomButton width="32" height="16" text="delete" class="delete-button" @click="deleteContent"/>
</v-card>
</div>
</template>

<script setup lang="ts">

const props = defineProps(['username','image','text','title', 'rating', 'created'])
const date = props.created.split('T')[0]

function deleteContent(){
  console.log('written by ai')
}
</script>
<style scoped>
:deep(.v-btn){
  min-width: 0;
  padding: 0 8px;
}

:deep(.v-rating .v-btn__content) {
  font-size: 24px;
}

.delete-button {
  position: absolute;
  right: 16px;
  bottom: 16px;
}
</style>