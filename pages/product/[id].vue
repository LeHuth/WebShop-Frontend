<template>
  <div v-if="data" class="d-flex flex-column">
    <div class="d-flex justify-space-between">
      <div id="imageblock">
        <img style="outline: black 4px solid; width: 544px;" :src="data.productDetail.productImage[0].image" alt="activeProductImage">
        <v-row class="justify-space-between mt-2" no-gutters>
            <div v-for="imageobj in data.productDetail.productImage">
              <img style="outline: black 4px solid; width: 64px" :src="imageobj.image" alt="passiveProductImage">
            </div>
        </v-row>
        <v-row style="max-width: 544px" class="justify-space-between flex-nowrap mt-8" no-gutters>
          <CustomButton width="224" height="64" text="WISHLIST"/>
          <input v-model="value" class="text-center mx-4" style="outline: black 4px solid; width: 64px; height: 64px">
          <CustomButton width="224" height="64" text="ADD TO CART"/>
        </v-row>
      </div>
      <div style="outline: black 4px solid; width: 544px;" class="px-6 py-8" id="productdetailblock">
        <v-row class="justify-space-between" no-gutters>
          <h3 class="text-uppercase">{{data.productDetail.manufacturer.name}}</h3>
          <h3>--rating--</h3>
        </v-row>
        <v-row class="justify-space-between" no-gutters>
          <h1 class="text-uppercase">{{data.productDetail.name}}</h1>
          <h1>${{data.productDetail.price}}</h1>
        </v-row>
        <div class="mt-8">
          <p>{{data.productDetail.shortDescription}}</p>
        </div>
        <v-row no-gutters>
          <h2 class="text-green" v-if="data.productDetail.stock > 0">IN STOCK</h2>
          <h2 v-else>OUT OF STOCK</h2>
        </v-row>
      </div>
    </div>
    <v-row class="justify-space-between mt-16 mb-8" no-gutters>
      <CustomButton @click="selectSection(0)" height="64" width="405" text="REVIEW"/>
      <CustomButton @click="selectSection(1)" height="64" width="405" text="TECHNICAL DETAILS"/>
      <CustomButton @click="selectSection(2)" height="64" width="405" text="DESCRIPTION"/>
    </v-row>
    <ReviewSection :reviews="data.productDetail.productReview"/>
  </div>
</template>

<script setup>
const route = useRoute()
import {productDetailQuery} from "~/graphql/api";
const value = ref(3)
const section = ref(0)

function selectSection(value){
  section.value = value
}
const {data} = useAsyncQuery(productDetailQuery,{'productid': route.params.id})
</script>

<style scoped>
input, :deep(.v-btn__content){
  font: normal normal 24px/24px Inter;
}

:deep(.v-btn){
  box-shadow: 4px 4px 0px 0px rgba(0,0,0,1) !important;
}
:deep(.v-btn.active){
  transform: translate(4px, 4px);
  box-shadow: 0px 0px 0px 0px rgba(0,0,0,1);
}
</style>