<template>
  <v-card class="rounded-0 border-solid border-lg pa-0 tile"
          style="border-color:#000 !important;" width="384" variant="flat">
    <v-row class="px-6 pt-4 justify-space-between" no-gutters>
      <span class="text-uppercase">{{product.category.name}}</span>
      <span>{{product.gender}}</span>
    </v-row>
    <div style="height: 384px">
      <img style="height: 100%; width: 100%" :src="product.productImage[0].image" alt="imgae"/>
    </div>
    <div class="px-6">
      <v-row no-gutters class="justify-space-between mb-2">
          <span class="font-weight-medium text-uppercase">
            {{product.manufacturer.name}}
          </span>
        <span>
            ${{product.price}}
          </span>
      </v-row>
      <v-row no-gutters class="justify-space-between mb-4">
        <h2>
          {{ product.name }}
        </h2>
        <h2>
          {{ product.rating }}
        </h2>
      </v-row>
      <v-row no-gutters class="mb-4">
        <span>1 COLOR - 14 SIZES</span>
      </v-row>
    </div>
  </v-card>
</template>

<script setup>
defineProps(['product'])
</script>

<style scoped>
.tile{
  box-shadow: 4px 4px 0px 0px rgba(0,0,0,1) !important;
  transition-property: box-shadow, transform;
  transition-duration: 0.5s;
  transition-delay: 0.1s;
}
.tile:hover{
  box-shadow: 8px 8px 0px 0px rgba(0,0,0,1) !important;
  transform: translate(-4px, -4px);
}


</style>