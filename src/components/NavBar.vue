<template>
  <div class="border-2 flex w-full bg-blue-300">
    <span class="navbar flex items-center w-30">
      <img src="@/assets/MEBAlogo.jpeg" alt="meba-logo" class="h-20 w-20" />
      <h1 class="text-blue-800 font-bold">Amoblamientos MEBA</h1>
    </span>
    <span
      class="flex justify-end items-center space-x-2 text-blue-800 font-bold pl-96 "
    >
      <button class="hover:bg-blue-800 hover:text-blue-300 border-r-2">
        INICIO
      </button>
      <button>QUIENES SOMOS</button>
      <button>NUESTROS PROYECTOS</button>
      <button>CONTACTO</button>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped></style>
