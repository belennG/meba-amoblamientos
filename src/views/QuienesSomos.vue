<template>
  <div
    class="py-40  bg-almond text-blueish-text-color relative"
    id="quienes-somos"
  >
    <h1 class="text-6xl title mb-6 mx-4">Quienes Somos</h1>
    <div class="grid grid-cols-3">
      <div
        class="slider-wrapper slider col-span-3 lg:col-span-2"
        style="min-height: 50vh"
      >
        <Slider :images="quienesSomos" />
      </div>
      <div
        class="quienes-somos-texto col-span-3 lg:col-span-1 text-justify text-2xl mb-4 mx-2"
      >
        <h2 class="">
          Somos una empresa familiar con mas de quince años de trayectoria
          ayudandote a crear el sueño de tu farmacia perfecta. Desarrollamos
          proyectos integrales, poniendo pasión por nuestro trabajo. Partimos de
          un sueño. El suyo. Aplicamos tecnología en todos los procesos para
          hacerlo realidad. Sabemos del esfuerzo y el compromiso de cada uno de
          nuestros clientes. Admiramos su dedicación y valoramos su confianza.
          Brindamos soluciones. Esa es nuestra esencia. Estamos para vos.
        </h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Slider from "@/components/Slider.vue";
import { quienesSomos } from "../photos";

export default Vue.extend({
  data() {
    return {
      height: "100px",
      width: "100px",
      quienesSomos: quienesSomos,
    };
  },
  components: {
    Slider,
  },
});
</script>

<style scoped>
.height {
  height: calc(100vh - 104px);
}

/* #quienes-somos {
  display: grid;
  grid-template-areas:
    "title title title title"
    "slider slider paragraph paragraph"
    "slider slider paragraph paragraph"
    "slider slider paragraph paragraph"
    "slider slider paragraph paragraph";
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 1/2fr, 1fr 1fr 1fr 1fr;
} */
</style>
