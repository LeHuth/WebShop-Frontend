<template>
<div class="d-flex justify-space-between">
  <div STYLE="outline: black 4px solid; width: fit-content; outline-offset: -4px" class="px-6 py-8" id="review-menu">
    <CustomButton height="64" width="225" text="WRITE REVIEW"/>
    <div class="mt-8">
      <v-row class="mb-4" no-gutters>
        <span>4.5</span>
      </v-row>
      <v-row class="flex-nowrap mb-1" no-gutters>
        <span class="mr-2">5</span><v-progress-linear :height="16" model-value="70"/>
      </v-row>
      <v-row class="flex-nowrap mb-1" no-gutters>
        <span class="mr-2">4</span><v-progress-linear :height="16" model-value="15"/>
      </v-row>
      <v-row class="flex-nowrap mb-1" no-gutters>
        <span class="mr-2">3</span><v-progress-linear :height="16" model-value="5"/>
      </v-row>
      <v-row class="flex-nowrap mb-1" no-gutters>
        <span class="mr-2">2</span><v-progress-linear :height="16" model-value="0"/>
      </v-row>
      <v-row class="flex-nowrap mb-1" no-gutters>
        <span class="mr-2">1</span><v-progress-linear :height="16" model-value="10"/>
      </v-row>
      <div class="d-flex flex-column mt-8">
        <CustomButton class="mb-4" height="32" width="225" text="RECENT"/>
        <CustomButton class="mb-4" height="32" width="225" text="HELPFUL"/>
        <CustomButton class="mb-4" height="32" width="225" text="BEST RATING"/>
        <CustomButton height="32" width="225" text="WORST RATING"/>
      </div>

    </div>

  </div>
  <div>
    <v-row no-gutters v-for="review in reviews">
      <Review :title="review.title" :text="review.text" :username="review.member.username" :image="review.member.memberImage"/>
    </v-row>
  </div>
</div>
</template>

<script setup>
defineProps(['reviews'])
</script>

<style scoped>
:deep(.v-progress-linear__background){
  opacity: 0 !important;
}
#review-menu span{
  width: 11px;
}
</style>