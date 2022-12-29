<template>
<div class="d-flex justify-space-between">
  <div STYLE="outline: black 4px solid; width: fit-content; outline-offset: -4px" class="px-6 py-8" id="review-menu">
    <CustomButton height="64" width="225" text="WRITE REVIEW"/>
    <div class="mt-8">
      <v-row class="mb-4" no-gutters>
        <p>{{ avg }} AVERAGE</p>
      </v-row>
      <v-row class="flex-nowrap mb-1" no-gutters>
        <span class="mr-2">5</span><v-progress-linear :height="16" :model-value="five/reviews.length*100"/>
      </v-row>
      <v-row class="flex-nowrap mb-1" no-gutters>
        <span class="mr-2">4</span><v-progress-linear :height="16" :model-value="four/reviews.length*100"/>
      </v-row>
      <v-row class="flex-nowrap mb-1" no-gutters>
        <span class="mr-2">3</span><v-progress-linear :height="16" :model-value="three/reviews.length*100"/>
      </v-row>
      <v-row class="flex-nowrap mb-1" no-gutters>
        <span class="mr-2">2</span><v-progress-linear :height="16" :model-value="two/reviews.length*100"/>
      </v-row>
      <v-row class="flex-nowrap mb-1" no-gutters>
        <span class="mr-2">1</span><v-progress-linear :height="16" :model-value="one/reviews.length*100"/>
      </v-row>
      <div class="d-flex flex-column mt-8">
        <CustomButton  class="mb-4" height="64" width="225" text="RECENT"/>
        <CustomButton  class="mb-4" height="64" width="225" text="HELPFUL"/>
        <CustomButton @click="sortReviews2" class="mb-4" height="64" width="225" text="BEST RATING"/>
        <CustomButton @click="sortReviews1" height="64" width="225" text="WORST RATING"/>
      </div>

    </div>

  </div>
  <div>
    <WriteReview @reloadReviews="refetchReviews" image=""/>
    <v-row class="mb-4" no-gutters v-for="review in test">

      <Transition name="slide-fade" mode="out-in">

        <Review :key="rerender" :title="review.title" :text="review.text" :created="review.created" :username="review.member.username" :image="review.member.memberImage" :rating="review.rating"/>
      </Transition>

    </v-row>
  </div>
</div>
</template>

<script setup lang="ts">
import {productReviewQuery} from "~/graphql/api";
const route = useRoute()
const props = defineProps(['reviews'])
const test = ref(props.reviews)
const avg = ref(0)
const five = ref(0)
const four = ref(0)
const three = ref(0)
const two = ref(0)
const one = ref(0)
const rerender = ref(0)
function sortReviews1(){
  test.value.sort((a: number, b: number) => a.rating-b.rating)
  console.log('sorted1')
  //rerender.value ++
}
function sortReviews2(){
  test.value.sort((a: number, b: number) => b.rating-a.rating)
  console.log('sorted2')
  //rerender.value --
}
// todo: calculate this in the backend
function getAvg(){
  console.log(props.reviews.length)
props.reviews.forEach((elem: object) => {
  console.log(avg.value + elem.rating)
  avg.value += Number(elem.rating)
  if (elem.rating < 2){
    one.value++
  } else if(elem.rating < 3){
    two.value++
  } else if(elem.rating < 4){
    three.value++
  } else if(elem.rating < 5){
    four.value++
  } else {five.value++}

})
  avg.value = Number(avg.value) / Number(props.reviews.length)
}
async function refetchReviews() {
  const reviews = await useAsyncQuery(productReviewQuery, {'productid': route.params.id})
  console.log(reviews.data._rawValue.productReviews)
  test.value = reviews.data._rawValue.productReviews
  props.reviews.value = reviews.data._rawValue.productReviews
}
getAvg()
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