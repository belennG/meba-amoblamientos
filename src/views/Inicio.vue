<template>
  <div>
    <Slider />
    <div id="intro" class="h-screen w-screen bg-red-400 flex px-10 py-10">
      <h1 class="flex items-center justify-center text-7xl ml-6">
        ESTAMOS EN TODO EL PAÍS
      </h1>
      <p class="flex items-center justify-center mr-20 ml-20 text-2xl">
        Somos líderes en diseño y construcción de mobiliario para tu negocio -ya
        sea farmacia, consultorio, dietética, veterinaria, pet-shop,
        laboratorio. Su satisfación es lo más importante. Trabajamos las 24 hs,
        los 365 días para Usted.
      </p>
    </div>
    <div
      id="render"
      class="h-screen w-screen bg-yellow-400 px-10 py-6 grid grid-cols-3"
    >
      <div class="render-fotos-izq">
        <img :src="Render1" alt="" class="w-100 h-80 mb-2 ml-2 grow" />
        <img :src="Render2" alt="" class="w-100 h-80 ml-2 grow" />
      </div>
      <h1 class="text-3xl mx-2 flex h-screen items-center px-5">
        Querés ver como quedará tu farmacia antes de tenerla? Render incluido en
        todos los presupuestos!
      </h1>
      <div class="render-fotos-der">
        <img :src="Render3" alt="" class="w-100 h-80 mb-2 ml-2 grow" />
        <img :src="Render4" alt="" class="w-100 h-80 mb-2 ml-2 grow" />
      </div>
    </div>
    <div id="testimonials" class="h-screen w-screen bg-green-400">
      <Testimonials />
    </div>
    <div class="h-screen w-screen bg-pink-400 px-8 py-8">
      <Convenios />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Slider from "@/components/Slider.vue";
import Testimonials from "@/components/Testimonials.vue";
import Render1 from "@/assets/render/Render1.jpeg";
import Render2 from "@/assets/render/Render2.jpeg";
import Render3 from "@/assets/render/Render3.jpeg";
import Render4 from "@/assets/render/Render4.jpeg";
import Footer from "@/components/Footer.vue";

import Convenios from "@/components/Convenios.vue";

export default Vue.extend({
  data() {
    return {
      Render1: Render1,
      Render2: Render2,
      Render3: Render3,
      Render4: Render4,
    };
  },
  components: {
    Slider,
    Testimonials,
    Convenios,
    Footer,
  },
});
</script>

<style scoped>
.grow {
  transition: all 0.2s ease-in-out;
}

.grow:hover {
  transform: scale(1.2);
}
</style>
