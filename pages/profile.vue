<template>
  <div v-if="data" class="d-flex justify-center align-start pa-16" style="height: 100vh; gap: 64px">
    <v-card
        width="256"
        class="rounded-0 border-solid border-lg"
        style="border-color:#000 !important;"
        variant="outlined"
    >
      <div class="pa-0">
        <img style="width: 100%; height: 256px; outline: black solid 4px" :src="data.self.memberImage[0].image" alt="imgae"/>
      </div>
      <v-card-title class="px-6 pt-8 pb-2 text-center">
        <h2>{{ data.self.username }}</h2>
      </v-card-title>
    <v-card-actions class="px-6 py-6 flex-column align-center justify-space-between" style="gap: 16px">
      <CustomButton width="100%" height="32" @click="change(0)" :class="selected === 0 ? 'active' : ''" text="REVIEWS"/>
      <CustomButton width="100%" height="32" @click="change(1)" :class="selected === 1 ? 'active' : ''" text="ORDERS"/>
      <CustomButton width="100%" height="32" @click="logout" :class="selected === 2 ? 'active' : ''" text="WISHLIST"/>
      <CustomButton width="100%" height="32" @click="test" :class="selected === 3 ? 'active' : ''" text="SETTINGS"/>
    </v-card-actions>
    </v-card>
    <div v-for="review in data.self.reviewOwner">
      <Review :username="data.self.username" :text="review.text" :title="review.title" :rating="review.rating" :image="data.self.memberImage"/>
    </div>

  </div>
</template>

<script setup>
import CustomButton from "~/components/CustomButton.vue";
import Review from "~/components/Review.vue";
import {selfQuery} from "~/graphql/api";

definePageMeta({
  middleware: ["auth"]
})
const { getToken } = useApollo()
const token = getToken()
console.log(token)
const { data } = await useAsyncQuery(selfQuery);
const selected = ref(0)

function change (value) {
  selected.value = value
}

</script>

<style scoped>
:deep(.v-btn){
  box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
}
:deep(.v-btn.active){
  transform: translate(4px, 4px);
  box-shadow: 0px 0px 0px 0px rgba(0,0,0,1);
}
</style>