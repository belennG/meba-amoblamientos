<template>
  <div class="h-screen w-screen bg-yellow-400 px-10 py-6">
    <h1>Quienes Somos</h1>
    <div class="h-20 w-20">
      <Slider v-bind:images="[images]" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Slider from "@/components/Slider.vue";
import quienesSomos1 from "@/assets/quienes-somos/quienesSomos1.jpeg";
import quienesSomos2 from "@/assets/quienes-somos/quienesSomos2.jpeg";
import quienesSomos3 from "@/assets/quienes-somos/quienesSomos3.jpeg";

export default Vue.extend({
  data() {
    return {
      images: [quienesSomos1, quienesSomos2, quienesSomos3],
    };
  },
  components: {
    Slider,
  },
});
</script>

<style scoped></style>
