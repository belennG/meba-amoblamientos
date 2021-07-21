<template>
  <div
    class="height pt-40 w-full h-auto bg-almond text-blueish-text-color relative"
    id="quienes-somos"
  >
    <!-- <h1 class="text-6xl title fixed top-1/6">Quienes Somos</h1> -->
    <div class="w-2/3 absolute left-0">
      <div class="slider-wrapper slider" style="height:100px width:100px">
        <Slider :images="imagesAsData" />
      </div>
    </div>
    <div
      class="quienes-somos-texto absolute right-0 text-justify text-2xl float-right"
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
