<template>
  <div class="mx-auto">
    <div class="testimonials grid grid-cols-3  w-8/12 h-80 z-10">
      <div
        class="bg-blue-500 z-10"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <img :src="Britney" alt="" class="w-32 h-32 rounded-full mx-auto" />
      </div>
      <div
        class="container-extended h-60 w-8/12 overflow-hidden z-40"
        v-if="hover"
      >
        <img :src="Britney" alt="" class="w-32 h-32 rounded-full mx-auto" />
        <span v-if="hover" class="w-8/12">Really cool furniture!</span>
      </div>

      <!-- v-for iterando sobre el blueprint de coso basico y q se expande -->
      <div class="bg-yellow-500" v-if="hover">2</div>
      <div class="bg-red-500">3</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Britney from "@/assets/britney.jpg";

export default Vue.extend({
  data() {
    return {
      Britney: Britney,
      hover: false,
    };
  },
});
</script>

<style scoped></style>
