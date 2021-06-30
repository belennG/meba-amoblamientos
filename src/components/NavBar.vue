<template>
  <div class="border-2 flex w-full bg-blue-300">
    <span class="navbar flex items-center w-30">
      <img src="@/assets/MEBAlogo.jpeg" alt="meba-logo" class="h-20 w-20" />
      <h1 class="text-blue-800 font-bold">Amoblamientos MEBA</h1>
    </span>
    <span
      class="flex flex-shrink justify-end items-center space-x-2 text-blue-800 font-bold pl-96 "
    >
      <router-link
        :to="{ name: 'Inicio' }"
        class="text-indigo-600 font-semibold hover:underline"
        >INICIO</router-link
      >
      <router-link
        :to="{ name: 'QuienesSomos' }"
        class="text-indigo-600 font-semibold hover:underline"
        >QUIENES SOMOS</router-link
      >
      <router-link
        :to="{ name: 'NuestrosProyectos' }"
        class="text-indigo-600 font-semibold hover:underline"
        >NUESTROS PROYECTOS</router-link
      >
      <router-link
        :to="{ name: 'Contacto' }"
        class="text-indigo-600 font-semibold hover:underline"
        >CONTACTO</router-link
      >
    </span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped></style>
