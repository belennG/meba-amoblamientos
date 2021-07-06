<template>
  <div>
    <!-- <div v-for="(farmacia, index) in fotosGralPico" :key="index">
      <img :src="fotosGralPico[index]" alt="" />
      <p></p>
    </div> -->
    <div class="h-96 w-96 z-10">
      <img :src="fotosGralPico[0]" alt="farmacia-gral-pico" />
      <p>Gral Pico, Provincia de Buenos Aires</p>
    </div>
    <div class="z-40 h-screen w-screen bg-red-300">
      <Slider />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import GralPico1 from "@/assets/farmacias/gralPico/GralPico1.jpeg";
import GralPico2 from "@/assets/farmacias/gralPico/GralPico2.jpeg";
import GralPico3 from "@/assets/farmacias/gralPico/GralPico3.jpeg";
import GralPico4 from "@/assets/farmacias/gralPico/GralPico4.jpeg";
import Slider from "@/components/Slider.vue";

export default Vue.extend({
  data() {
    return {
      fotosGralPico: [GralPico1, GralPico2, GralPico3, GralPico4],
    };
  },
  components: {
    Slider,
  },
});
</script>

<style scoped></style>
