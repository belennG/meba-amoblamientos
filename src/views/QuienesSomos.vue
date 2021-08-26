<template>
  <div
    class="pt-12 xl:pt-10 md:pt-28 lg:pt-32 pb-5 md:pb-0 md:py-8  bg-almond text-blueish-text-color grid grid-cols-1"
    id="quienes-somos"
  >
    <h1 class=" text-4xl md:text-6xl mb-5 md:mb-10 text-center underline">
      Quienes Somos
    </h1>
    <div
      class="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-1 lg:flex px-2 md:px-4"
    >
      <div
        class="w-full h-full lg:w-1/2 lg:h-2/3 md:h-16 md:pb-6 col-span-3"
        style="min-height: 50vh"
      >
        <Slider :images="imagesAsData" />
      </div>
      <div
        class="md:col-span-1 lg:col-span-2 lg:w-1/2 text-justify text-base md:text-2xl px-4 py-4 md:pb-8"
      >
        <h2 class="text-center">
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
import quienesSomos1 from "@/assets/quienes-somos/quienesSomos1.jpeg";
import quienesSomos2 from "@/assets/quienes-somos/quienesSomos2.jpeg";
import quienesSomos3 from "@/assets/quienes-somos/quienesSomos3.jpeg";

export default Vue.extend({
  data() {
    return {
      height: "100px",
      width: "100px",
      imagesAsData: [quienesSomos1, quienesSomos2, quienesSomos3],
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

</style>
