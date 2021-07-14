<template>
  <div class="h-screen w-screen bg-yellow-400 px-10 py-10">
    <h1 class="text-6xl">Quienes Somos</h1>
    <div class="">
      <Slider :images="imagesAsData" width="600px" heigth="600px"></Slider>
      <div
        class="quienes-somos-texto w-1/3 h-1/3 absolute right-0 mx-24 my-24 text-2xl"
      >
        <h2>
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
      imagesAsData: [quienesSomos1, quienesSomos2, quienesSomos3],
    };
  },
  components: {
    Slider,
  },
});
</script>

<style scoped></style>
