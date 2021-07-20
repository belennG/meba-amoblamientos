<template>
  <div class="py-14">
    <router-link
      :to="{ name: 'Contacto' }"
      class=" md:text-base hover:underline"
      ><h1
        class="font-semibold text-5xl text-center text-almond align-baseline mb-20"
      >
        Consulte por convenios en su provincia
      </h1></router-link
    >

    <div id="convenios" class="router-link-container inset-x-4">
      <div
        class="border-2 w-72 h-80 mx-2 my-2 py-4 bg-isabelline rounded-lg"
        v-for="(convenio, index) in convenios"
        :key="index"
      >
        <h1
          class="flex items-center justify-center text-xl text-blueish-text-color"
        >
          {{ convenio.name }}
        </h1>
        <div class="flex items-center justify-center h-72">
          <img
            :src="convenio.image"
            :alt="convenio.name"
            class="w-52 h-52 rounded-3xl"
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
.router-link-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .height {
  height: calc(100vh - 30px);
} */
</style>
