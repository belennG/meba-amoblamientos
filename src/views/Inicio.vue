<template>
  <div>
    <Slider />
    <div id="" class="h-screen w-screen bg-red-400"></div>
    <div
      id="render"
      class="h-screen w-screen bg-yellow-400 px-10 py-10 grid grid-cols-2"
    >
      <h1 class="text-4xl">
        Querés ver como quedará tu farmacia antes de tenerla? Render incluido en
        todos los presupuestos
      </h1>
      <div class="render-fotos">
        <img :src="Render1" alt="" class="w-100 h-80 mb-2" />
        <img :src="Render2" alt="" class="w-100 h-80" />
      </div>
    </div>
    <div id="testimonials" class="h-screen w-screen bg-green-400">
      <Testimonials />
    </div>
    <div id="convenios" class="h-screen w-screen bg-pink-400"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Slider from "@/components/Slider.vue";
import Testimonials from "@/components/Testimonials.vue";
import Render1 from "@/assets/render/Render1.jpeg";
import Render2 from "@/assets/render/Render2.jpeg";

export default Vue.extend({
  data() {
    return {
      Render1: Render1,
      Render2: Render2,
    };
  },
  components: {
    Slider,
    Testimonials,
  },
});
</script>

<style scoped></style>
