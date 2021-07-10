<template>
  <div class="h-64 w-96 z-10 grow cursor-pointer border  py-2 my-4">
    <img :src="farmaciaImage" alt="" />
    <p>{{ farmaciaUbicacion }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    farmaciaImage: {
      type: String,
    },
    farmaciaUbicacion: {
      type: String,
    },
  },
});
</script>

<style scoped>
.grow {
  transition: all 0.2s ease-in-out;
}

.grow:hover {
  transform: scale(1.1);
}
</style>
