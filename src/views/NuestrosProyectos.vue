<template>
  <div class="gallery-wrapper height-full relative top-10 px-4 py-4">
    <h1>Nuestros Proyectos</h1>
    <div class="">
      <Gallery />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Gallery from "@/components/Gallery.vue";

import Firmat from "@/assets/farmacias/Thumbnails/Firmat.jpeg";
import GralPico from "@/assets/farmacias/Thumbnails/GralPico.jpeg";
import Irma from "@/assets/farmacias/Thumbnails/Irma.jpeg";
import MorenaJorge from "@/assets/farmacias/Thumbnails/MorenaJorge.jpeg";
import Rivadavia from "@/assets/farmacias/Thumbnails/Rivadavia.jpeg";
import Schneider from "@/assets/farmacias/Thumbnails/Schneider.jpeg";

import Firmat1 from "@/assets/farmacias/Firmat/Firmat1.jpeg";
import Firmat2 from "@/assets/farmacias/Firmat/Firmat2.jpeg";
import Firmat3 from "@/assets/farmacias/Firmat/Firmat3.jpeg";
import Firmat4 from "@/assets/farmacias/Firmat/Firmat4.jpeg";
import Firmat5 from "@/assets/farmacias/Firmat/Firmat5.jpeg";

import GralPico1 from "@/assets/farmacias/gralPico/GralPico1.jpeg";
import GralPico2 from "@/assets/farmacias/gralPico/GralPico2.jpeg";
import GralPico3 from "@/assets/farmacias/gralPico/GralPico3.jpeg";
import GralPico4 from "@/assets/farmacias/gralPico/GralPico4.jpeg";

import Irma1 from "@/assets/farmacias/Irma/Irma1.jpeg";
import Irma2 from "@/assets/farmacias/Irma/Irma2.jpeg";
import Irma3 from "@/assets/farmacias/Irma/Irma3.jpeg";

import MorenaJorge1 from "@/assets/farmacias/MorenaJorge/MorenaJorge1.jpeg";
import MorenaJorge2 from "@/assets/farmacias/MorenaJorge/MorenaJorge2.jpeg";
import MorenaJorge3 from "@/assets/farmacias/MorenaJorge/MorenaJorge3.jpeg";
import MorenaJorge4 from "@/assets/farmacias/MorenaJorge/MorenaJorge4.jpeg";

import Rivadavia1 from "@/assets/farmacias/Rivadavia/Rivadavia1.jpeg";
import Rivadavia2 from "@/assets/farmacias/Rivadavia/Rivadavia2.jpeg";
import Rivadavia3 from "@/assets/farmacias/Rivadavia/Rivadavia3.jpeg";
import Rivadavia4 from "@/assets/farmacias/Rivadavia/Rivadavia4.jpeg";
import Rivadavia5 from "@/assets/farmacias/Rivadavia/Rivadavia5.jpeg";

import Schneider1 from "@/assets/farmacias/Schneider/Schneider1.jpeg";
import Schneider2 from "@/assets/farmacias/Schneider/Schneider2.jpeg";
import Schneider3 from "@/assets/farmacias/Schneider/Schneider3.jpeg";
import Schneider4 from "@/assets/farmacias/Schneider/Schneider4.jpeg";
import Schneider5 from "@/assets/farmacias/Schneider/Schneider5.jpeg";

export default Vue.extend({
  data() {
    return {
      photos: [
        {
          id: 0,
          name: "Farmacia Firmat",
          provincia: "Provincia de Santa Fe",
          image: [Firmat, Firmat1, Firmat2, Firmat3, Firmat4, Firmat5],
        },
        {
          id: 1,
          name: "General Pico",
          provincia: "Provincia de La Pampa",
          image: [GralPico, GralPico1, GralPico2, GralPico3, GralPico4],
        },
        {
          id: 2,
          name: "Farmacia Irma",
          provincia: "Provincia de ",
          image: [Irma, Irma1, Irma2, Irma3],
        },
        {
          id: 3,
          name: "Farmacia Morena Jorge",
          provincia: "Provincia de ",
          image: [
            MorenaJorge,
            MorenaJorge1,
            MorenaJorge2,
            MorenaJorge3,
            MorenaJorge4,
          ],
        },
        {
          id: 4,
          name: "Farmacia Rivadavia",
          provincia: "Provincia de",
          image: [
            Rivadavia,
            Rivadavia1,
            Rivadavia2,
            Rivadavia3,
            Rivadavia4,
            Rivadavia5,
          ],
        },
        {
          id: 5,
          name: "Farmacia Schneider",
          provincia: "Provincia de Corrientes",
          image: [
            Schneider,
            Schneider1,
            Schneider2,
            Schneider3,
            Schneider4,
            Schneider5,
          ],
        },
      ],
    };
  },
  components: {
    Gallery,
  },
});
</script>

<style scoped>
.height {
  height: calc(100vh - 104px);
}
</style>
