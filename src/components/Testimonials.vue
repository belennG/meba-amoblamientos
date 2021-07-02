<template>
  <div class="mx-auto">
    <div class="testimonials grid grid-cols-4 gap-1 border-2 w-8/12 h-60">
      <div
        class="bg-blue-500"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <img :src="Britney" alt="" class="w-32 h-32 rounded-full mx-auto" />
        <span v-if="hover" class="w-8/12">Really cool furniture!</span>
      </div>
      <div class="bg-yellow-500">2</div>
      <div class="bg-red-500">3</div>
      <div class="bg-green-500">4</div>
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
