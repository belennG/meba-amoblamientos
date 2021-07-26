<template>
  <div>
    <div style="height: calc(100vh - 104px)">
      <h1
        class="z-20 absolute top-1/3 left-6 text-gray-300 text-shadow"
        style="font-size:4vw"
      >
        Amoblamientos de Farmacia
      </h1>
      <Slider :images="imagesAsData" style="opacity: 0.6"></Slider>
    </div>
    <div
      id=""
      class="h-auto w-auto lg:h-screen lg:w-screen bg-middle-red px-12 py-12 text-isabelline grid grid-cols-1"
    >
      <h1 class=" text-5xl md:text-7xl text-center pb-6 lg:pt-6">
        ESTAMOS EN TODO EL PAÍS
      </h1>

      <p
        id="paragraph"
        class="text-lg text-justify md:text-2xl font-metropolis"
      >
        Somos líderes en diseño y construcción de mobiliario para tu negocio -ya
        sea farmacia, consultorio, dietética, veterinaria, pet-shop,
        laboratorio. Su satisfación es lo más importante. Atención
        personalizada, trabajamos las 24 hs, los 365 días para Usted.
      </p>

      <div
        id="icons"
        class="icons text-isabelline space-x-3 flex flex-wrap items-center  w-auto h-auto space-y-4"
      >
        <ul class="space-y-4 mt-6 lg:mt-0 mx-auto">
          <li>
            <div class="pet-shops flex h-auto items-center space-x-4">
              <i class="fas fa-paw fa-3x"></i>
              <p class="text-md md:text-2xl">Pet Shops</p>
            </div>
          </li>
          <li>
            <div class="farmacias flex h-auto items-center space-x-3">
              <i class="fas fa-clinic-medical fa-3x"></i>
              <p class="text-md md:text-2xl">Farmacias</p>
            </div>
          </li>
          <li>
            <div
              class="consultorios-medicos flex h-auto items-center space-x-5"
            >
              <i class="fas fa-user-md fa-3x"></i>
              <p class="text-md md:text-2xl">Consultorios médicos</p>
            </div>
          </li>
          <li>
            <div class="laboratorios flex h-auto items-center space-x-5">
              <i class="fas fa-stethoscope fa-3x"></i>
              <p class="text-md md:text-2xl">Laboratorios</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div
      id="render"
      class="md:h-auto lg:h-screen w-screen bg-green-sheen text-isabelline px-4 py-16 md:px-10 md:py-16 lg:py-6 grid grid-cols-1"
    >
      <div
        class="render-fotos-izq md:flex md:h-auto md:w-auto md:items-center justify-center md:space-x-12"
      >
        <img
          :src="render[0]"
          alt=""
          class="md:w-80 md:h-60 lg:w-100 lg:h-80 mb-2 md:mb-0 ml-2 grow hidden md:block"
        />
        <img
          :src="render[1]"
          alt=""
          class="md:w-80 md:h-60 lg:w-100 lg:h-80 ml-2 grow"
        />
      </div>
      <div class="title">
        <h1 class=" text-md md:text-2xl mx-2 text-center px-5 py-6">
          Querés ver como quedará tu farmacia antes de tenerla? Render incluido
          en todos los presupuestos!
        </h1>
      </div>
      <div
        class="render-fotos-der md:flex md:h-auto md:w-auto md:items-center md:justify-center md:space-x-12"
      >
        <img
          :src="render[2]"
          alt=""
          class=" md:w-80 md:h-60 lg:w-100 lg:h-80 mb-2 ml-2 grow"
        />
        <img
          :src="render[3]"
          alt=""
          class="md:w-80 md:h-60 lg:w-100 lg:h-80 mb-2 ml-2 grow hidden md:block"
        />
      </div>
    </div>
    <div
      id="gallery"
      class="px-4 w-screen bg-isabelline text-hunter-green py-16"
    >
      <Gallery />
      <router-link :to="{ name: 'NuestrosProyectos' }">
        <h1 class="text-2xl lg:text-5xl text-center underline">Ver más</h1>
      </router-link>
    </div>
    <div
      class=" h-auto w-auto lg:h-screen lg:w-screen bg-darkolive-green px-2 py-16"
    >
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
