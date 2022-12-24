<template>
  <v-card class="rounded-0 border-solid border-lg pa-0 tile"
          style="border-color:#000 !important;" width="384" variant="flat">
    <v-row class="px-6 pt-4 justify-space-between" no-gutters>
      <span>CLIMBING SHOE</span>
      <span>MALE</span>
    </v-row>
    <div style="height: 384px">
      <img style="height: 100%; width: 100%" src="~/assets/images/306125004_b_otaki_la_sportiva_1.jpg" alt="imgae"/>
    </div>
    <div class="px-6">
      <v-row no-gutters class="justify-space-between mb-2">
          <span class="font-weight-medium">
            LA SPORTIVA
          </span>
        <span>
            $159,95
          </span>
      </v-row>
      <v-row no-gutters class="justify-space-between mb-4">
        <h2>
          OTAKI
        </h2>
        <h2>
          5
        </h2>
      </v-row>
      <v-row no-gutters class="mb-4">
        <span>1 COLOR - 14 SIZES</span>
      </v-row>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Tile"
}
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