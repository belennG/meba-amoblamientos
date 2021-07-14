<template>
  <div>
    <div class="h-screen w-screen">
      <h1 class="z-40 absolute top-1/3 text-6xl text-white">
        Amoblamientos de Farmacia
      </h1>
      <Slider :images="imagesAsData"></Slider>
    </div>
    <div id="intro" class="h-auto w-screen bg-red-400 flex px-10 py-10">
      <h1 class="flex items-center justify-center text-7xl ml-6">
        ESTAMOS EN TODO EL PAÍS
      </h1>
      <p class="flex items-center justify-center mr-20 ml-20 text-2xl">
        Somos líderes en diseño y construcción de mobiliario para tu negocio -ya
        sea farmacia, consultorio, dietética, veterinaria, pet-shop,
        laboratorio. Su satisfación es lo más importante. Atención
        personalizada, trabajamos las 24 hs, los 365 días para Usted.
      </p>
    </div>
    <div
      id="render"
      class="h-auto w-screen bg-yellow-400 px-10 py-6 grid grid-cols-3"
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
      <!-- <Testimonials /> -->
      <!-- Why doesnt it take the height screen? -->
      <!-- <Farmacia
        :farmaciaImage="fotosFirmat[0]"
        :farmaciaUbicacion="'Firmat, Provincia de Santa Fe'"
        @click="displayFarmacia"
      />
      <FarmaciaGallery></FarmaciaGallery>
      <Farmacia
        :farmaciaImage="fotosGralPico[0]"
        :farmaciaUbicacion="'General Pico, Provincia de Buenos Aires'"
      />
      <Farmacia
        :farmaciaImage="fotosIrma[0]"
        :farmaciaUbicacion="'Provincia de Santa Fe'"
      />
      <Farmacia
        :farmaciaImage="fotosMorenaJorge[0]"
        :farmaciaUbicacion="'General Pico, Provincia de Buenos Aires'"
      />
      <Farmacia
        :farmaciaImage="fotosRivadavia[0]"
        :farmaciaUbicacion="'Provincia de Cordoba'"
      />
      <Farmacia
        :farmaciaImage="fotosSchneider[0]"
        :farmaciaUbicacion="'Farmacia Schneider, Provincia de Corrientes'"
      /> -->
      <Gallery />
    </div>
    <div class="h-screen w-screen bg-pink-400 px-8 py-8">
      <Convenios />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Render1 from "@/assets/render/Render1.jpeg";
import Render2 from "@/assets/render/Render2.jpeg";
import Render3 from "@/assets/render/Render3.jpeg";
import Render4 from "@/assets/render/Render4.jpeg";
import MEBA2 from "@/assets/inicio-slider/MEBA2.jpeg";
import MEBA4 from "@/assets/inicio-slider/MEBA4.jpeg";
import MEBA5 from "@/assets/inicio-slider/MEBA5.jpeg";
import MEBA9 from "@/assets/inicio-slider/MEBA9.jpeg";
import MEBA13 from "@/assets/inicio-slider/MEBA13.jpeg";
import MEBA14 from "@/assets/inicio-slider/MEBA14.jpeg";
import MEBA15 from "@/assets/inicio-slider/MEBA15.jpeg";
import MEBA16 from "@/assets/inicio-slider/MEBA16.jpeg";
import GralPico1 from "@/assets/farmacias/gralPico/GralPico1.jpeg";
import GralPico2 from "@/assets/farmacias/gralPico/GralPico2.jpeg";
import GralPico3 from "@/assets/farmacias/gralPico/GralPico3.jpeg";
import GralPico4 from "@/assets/farmacias/gralPico/GralPico4.jpeg";

import Firmat1 from "@/assets/farmacias/Firmat/Firmat1.jpeg";
import Firmat2 from "@/assets/farmacias/Firmat/Firmat2.jpeg";
import Firmat3 from "@/assets/farmacias/Firmat/Firmat3.jpeg";
import Firmat4 from "@/assets/farmacias/Firmat/Firmat4.jpeg";
import Firmat5 from "@/assets/farmacias/Firmat/Firmat5.jpeg";

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

import Slider from "@/components/Slider.vue";
// import Testimonials from "@/components/Testimonials.vue";
import Convenios from "@/components/Convenios.vue";
// import Farmacia from "@/components/Farmacia.vue";
// import FarmaciaGallery from "@/components/FarmaciaGallery.vue";
import Gallery from "@/components/Gallery.vue";

export default Vue.extend({
  data() {
    return {
      imagesAsData: [
        MEBA2,
        MEBA4,
        MEBA5,
        MEBA9,
        MEBA13,
        MEBA14,
        MEBA15,
        MEBA16,
      ],
      Render1: Render1,
      Render2: Render2,
      Render3: Render3,
      Render4: Render4,
      fotosGralPico: [GralPico1, GralPico2, GralPico3, GralPico4],
      fotosFirmat: [Firmat1, Firmat2, Firmat3, Firmat4, Firmat5],
      fotosIrma: [Irma1, Irma2, Irma3],
      fotosMorenaJorge: [
        MorenaJorge1,
        MorenaJorge2,
        MorenaJorge3,
        MorenaJorge4,
      ],
      fotosRivadavia: [
        Rivadavia1,
        Rivadavia2,
        Rivadavia3,
        Rivadavia4,
        Rivadavia5,
      ],
      fotosSchneider: [
        Schneider1,
        Schneider2,
        Schneider3,
        Schneider4,
        Schneider5,
      ],
      displayFarmacia: false,
    };
  },
  components: {
    Slider,
    // Testimonials,
    Convenios,
    // Farmacia,
    // FarmaciaGallery,
    Gallery,
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
