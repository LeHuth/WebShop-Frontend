<template>
  <div>
    <v-card class="rounded-0 border-solid border-lg px-6 py-8 mb-4"
            width="900"
            style="border-color:#000 !important;"
            variant="outlined">
      <v-row no-gutters>
        <v-col cols="1" style="height: 64px">
          <img style="width: 64px; height: 64px; outline: black solid 4px; outline-offset: -4px" src="~/assets/images/fat-panda.jpg" alt="da">
        </v-col>
        <v-col>
          <div style="height: 64px" class="pl-1 d-flex flex-column justify-space-between">
            <h3 style="line-height: 0.8">{{username}}</h3>
            <v-text-field v-model="title" placeholder="TITLE" class="rounded-0 review-title" style="height: 68px" hide-details/>
          </div>
        </v-col>
        <v-col>
          <div style="height: 64px" class="d-flex flex-column justify-space-between">
            <h3 class="text-right" style="line-height: 0.8">{{date.getDate()}}/{{date.getMonth()+1}}/{{date.getFullYear()}}</h3>
            <!--<h1 class="text-right" style="line-height: 0.7">{{rating}}</h1>-->
            <v-rating size="34" class="justify-end" v-model="whatever"/>
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-8" no-gutters>
        <v-col class="d-flex flex-column align-center justify-space-between pr-2" cols="1">


        </v-col>
        <v-col class="pl-1">
          <v-textarea v-model="text" no-resize/>
        </v-col>
      </v-row>
      <v-row class="justify-end" no-gutters>
        <CustomButton height="64" width="128" text="SUBMIT" @click="submitReview" class="mr-8"/>
        <CustomButton height="64" width="128" text="CANCEL"/>
      </v-row>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import {createReviewMutation, productReviewQuery} from "~/graphql/api";
const emit = defineEmits(['reloadReviews'])
const route = useRoute()
const props = defineProps(['username', 'image'])
const whatever = ref(1)
const title = ref('')
const text = ref('')
const date = new Date()
function changeRating(newValue: number){
  console.log(newValue)
  whatever.value ++
}
async function submitReview() {
  let variables = {'pId': route.params.id, 'title': title.value, 'text': text.value, 'rating': whatever.value}
  const {mutate: create} = useMutation(createReviewMutation, {variables})

  try {
    const {data} = await create(variables)
    alert('created review')
    emit('reloadReviews')


  } catch (e) {
    console.log(e)
  }
}

</script>

<style scoped>
:deep(.v-btn){
  min-width: 0;
  padding: 0 8px;
}

:deep(.v-field__outline){
  --v-field-border-width: 4px;
  --v-field-border-opacity: 1;
}

:deep(.v-input){
  flex:unset;
}

:deep(.v-field){
  border-radius: 0px;
}

:deep(.review-title .v-input__control){
  height: 64px;
}
</style>