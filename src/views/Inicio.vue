<template>
  <div>
    <div style="height: calc(100vh - 104px); margin-top: 80px;">
      <h1
        class="z-20 absolute top-1/3 left-6 text-hunter-green"
        style="font-size:4vw"
      >
        Amoblamientos de Farmacia
      </h1>
      <Slider :images="imagesAsData"></Slider>
    </div>
    <div
      id="intro title"
      class="h-screen w-screen bg-middle-red px-10 py-10 text-isabelline title relative"
    >
      <div class="h1wrapper w-1/2 absolute top-1/4">
        <h1 class=" text-7xl ml-6 grid-in-header text-left">
          ESTAMOS EN TODO EL PAÍS
        </h1>
      </div>
      <div class="paragraph-wrapper w-1/2 absolute top-1/4 right-0">
        <p
          id="paragraph"
          class=" mr-20 ml-20 text-2xl font-metropolis grid-in-main paragraph text-right text-justify"
        >
          Somos líderes en diseño y construcción de mobiliario para tu negocio
          -ya sea farmacia, consultorio, dietética, veterinaria, pet-shop,
          laboratorio. Su satisfación es lo más importante. Atención
          personalizada, trabajamos las 24 hs, los 365 días para Usted.
        </p>
      </div>
      <div
        id="icons"
        class="icons text-isabelline space-x-3 grid-in-footer flex flex-wrap absolute bottom-1/3 left-72 mt-14"
      >
        <i class="fas fa-paw fa-3x"></i>
        <p class="text-2xl">Pet Shops</p>
        <i class="fas fa-clinic-medical fa-3x"></i>
        <p class="text-2xl">Farmacias</p>
        <i class="fas fa-user-md fa-3x"></i>
        <p class="text-2xl">Consultorios médicos</p>
        <i class="fas fa-stethoscope fa-3x"></i>
        <p class="text-2xl">Laboratorios</p>
      </div>
    </div>
    <div
      id="render"
      class="h-auto w-screen bg-green-sheen text-isabelline px-10 py-6 grid grid-cols-3"
    >
      <div class="render-fotos-izq">
        <img :src="render.Render1" alt="" class="w-100 h-80 mb-2 ml-2 grow" />
        <img :src="render.Render2" alt="" class="w-100 h-80 ml-2 grow" />
      </div>
      <div class="title">
        <h1 class="text-3xl mx-2 flex h-screen items-center px-5 ">
          Querés ver como quedará tu farmacia antes de tenerla? Render incluido
          en todos los presupuestos!
        </h1>
      </div>
      <div class="render-fotos-der">
        <img :src="render.Render3" alt="" class="w-100 h-80 mb-2 ml-2 grow" />
        <img :src="render.Render4" alt="" class="w-100 h-80 mb-2 ml-2 grow" />
      </div>
    </div>
    <div
      id="gallery"
      class="px-4 py-4 w-screen bg-isabelline text-hunter-green"
    >
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
      <router-link :to="{ name: 'NuestrosProyectos' }">
        <h1 class="text-5xl text-center">Ver más</h1>
      </router-link>
    </div>
    <div class="h-screen w-screen bg-darkolive-green px-8 py-8">
      <Convenios />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Render, MEBA } from "../photos";

import Slider from "@/components/Slider.vue";
import Convenios from "@/components/Convenios.vue";
// import Farmacia from "@/components/Farmacia.vue";

import Gallery from "@/components/Gallery.vue";

export default Vue.extend({
  data() {
    return {
      width: "700px",
      height: "1400px",
      imagesAsData: MEBA,
      render: Render,

      displayFarmacia: false,
    };
  },
  components: {
    Slider,
    Convenios,
    // Farmacia,
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

/* #inicio {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas:
    "title paragraph paragraph"
    "icons icons icons";
  grid-template-rows: 33% 33% 33%;
  grid-template-columns: 33% 33% 33%;
} */

.height {
  height: calc(100vh - 30px);
}

#render {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 2fr, 1fr, 2fr;
}
</style>
