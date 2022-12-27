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
        <CustomButton  class="mb-4" height="32" width="225" text="RECENT"/>
        <CustomButton  class="mb-4" height="32" width="225" text="HELPFUL"/>
        <CustomButton @click="sortReviews2" class="mb-4" height="32" width="225" text="BEST RATING"/>
        <CustomButton @click="sortReviews1" height="32" width="225" text="WORST RATING"/>
      </div>

    </div>

  </div>
  <div>
    <v-row class="mb-4" no-gutters v-for="review in reviews">
      <Transition name="slide-fade" mode="out-in">
        <Review :key="rerender" :title="review.title" :text="review.text" :username="review.member.username" :image="review.member.memberImage" :rating="review.rating"/>
      </Transition>

    </v-row>
  </div>
</div>
</template>

<script setup lang="ts">
const props = defineProps(['reviews'])
const test: Array<Object> = ref(props.reviews)
const rerender = ref(0)
function compare( a: { rating: number; }, b: { rating: number; } ) {
  if ( a.rating < b.rating ){
    return -1;
  }
  if ( a.rating > b.rating ){
    return 1;
  }
  return 0;
}
function compare2( a: { rating: number; }, b: { rating: number; } ) {
  if ( a.rating > b.rating ){
    return -1;
  }
  if ( a.rating < b.rating ){
    return 1;
  }
  return 0;
}
function sortReviews1(){
  props.reviews.sort(compare)
  rerender.value ++
}

function sortReviews2(){
  props.reviews.sort(compare2)
  rerender.value --
}
</script>


<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .2s ease-in;
}
.slide-fade-leave-active {
  transition: all .2s ease-out;
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
:deep(.v-progress-linear__background){
  opacity: 0 !important;
}
#review-menu span{
  width: 11px;
}
</style>