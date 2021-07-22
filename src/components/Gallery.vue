<template>
  <div class="gallery px-2 py-2 grid grid-cols-3">
    <div
      class="gallery-panel flex flex-col items-center justify-center grow hover:cursor-pointer"
      v-for="(photo, index) in photos"
      :key="index"
    >
      <!-- <router-link :to="`/photo/${photo.id}`"> -->
      <img
        :src="photo.image[0]"
        class="w-3/4 h-3/4 cover"
        @click="showSlider(index)"
      />
      <!-- </router-link> -->
      <p>{{ photo.name }}</p>
      <p>{{ photo.provincia }}</p>
    </div>
    <!-- Modal window -->
    <div
      class="modal-window"
      v-if="selectedIndexToShowAsSlider != -1"
      @click="hideSlider()"
    >
      <div
        class="w-screen h-screen fixed inset-0 bg-black bg-opacity-20 justify-center items-center z-50 p-10"
      >
        <Slider :images="photos[selectedIndexToShowAsSlider].image" />
        <!-- Props with the photo.id & index of the photo ? -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Slider from "@/components/Slider.vue";
// import photos from "@/photos.json";
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

import { Photos } from "../photos";

export default Vue.extend({
  // methods: {
  //   showSlider(index) {},
  // },
  components: { Slider },
  name: "Gallery",
  data() {
    return {
      showPhoto: false,
      selectedIndexToShowAsSlider: -1,
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
  methods: {
    showSlider(index) {
      this.selectedIndexToShowAsSlider = index;
    },
    hideSlider() {
      this.selectedIndexToShowAsSlider = -1;
    },
  },
});
</script>

<style scoped>
.grow {
  transition: all 0.2s ease-in-out;
}

.grow:hover {
  transform: scale(1.1);
}
</style>
