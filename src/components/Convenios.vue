<template>
  <div class="lg:py-14 py-2">
    <router-link
      :to="{ name: 'Contacto' }"
      class=" md:text-base hover:underline"
      ><h1
        class="font-semibold text-lg md:text-4xl lg:text-5xl text-center text-almond align-baseline mb-5 md:mb-10 lg:mb-20"
      >
        Consulte por convenios en su provincia
      </h1></router-link
    >

    <div
      id="convenios"
      class="w-auto grid grid-cols-2 xl:px-32 md:flex md:flex-row mx-auto"
    >
      <div
        class="border-2 w-32 h-34 my-1 py-1 px-1 md:w-56 md:h-56 lg:w-72 lg:h-80 md:mx-2 md:my-2 md:py-8 bg-isabelline rounded-lg col-span-1 mx-auto"
        v-for="(convenio, index) in convenios"
        :key="index"
      >
        <h1
          class="flex items-center justify-center text-xs md:text-base xl:text-xl text-blueish-text-color text-center"
        >
          {{ convenio.name }}
        </h1>
        <div class="flex items-center justify-center h-20 md:h-40 lg:h-60">
          <img
            :src="convenio.image"
            :alt="convenio.name"
            class="w-16 h-16 md:w-32 md:h-32 lg:w-52 lg:h-52 rounded-3xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import colegioBsAs from "@/assets/colegioBsAs.png";
import colegioCordoba from "@/assets/colegioCordoba.jpeg";
import colegioMisiones from "@/assets/colegioMisiones.jpeg";
import colegioSanLuis from "@/assets/colegioSanLuis.png";

export default Vue.extend({
  data() {
    return {
      convenios: [
        { name: "Provincia de Misiones", image: colegioMisiones },
        { name: "Provincia de Buenos Aires", image: colegioBsAs },
        { name: "Provincia de San Luis", image: colegioSanLuis },
        { name: "Provincia de Córdoba", image: colegioCordoba },
      ],
    };
  },
});
</script>

<style scoped>

</style>
