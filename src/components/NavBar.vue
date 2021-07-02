<template>
  <div>
    <!-- Start Desktop Navbar -->
    <nav id="navbar" class="border-2 flex w-full bg-blue-300 justify-between">
      <router-link
        :to="{ name: 'Inicio' }"
        class="navbar flex items-center w-30"
      >
        <img src="@/assets/MEBAlogo.jpeg" alt="meba-logo" class="h-16 w-16" />
        <h1 class="text-blue-800 font-bold">Amoblamientos MEBA</h1>
      </router-link>
      <div
        class="flex justify-end items-center space-x-4 text-blue-800 font-bold"
        id="navbar-links"
      >
        <div
          class="w-20 h-16 pt-5 hover:bg-indigo-600 hover:text-white text-indigo-600"
        >
          <router-link
            :to="{ name: 'Inicio' }"
            class="font-semibold  text-sm md:text-base top-12"
            >INICIO</router-link
          >
        </div>
        <div
          class="w-24 h-16 hover:bg-indigo-600 hover:text-white text-indigo-600 flex items-center"
        >
          <router-link
            :to="{ name: 'QuienesSomos' }"
            class="font-semibold text-sm md:text-base mx"
            >QUIENES SOMOS</router-link
          >
        </div>
        <div
          class="w-24 h-16 pt-2 hover:bg-indigo-600 hover:text-white text-indigo-600"
        >
          <router-link
            :to="{ name: 'NuestrosProyectos' }"
            class=" font-semibold text-sm md:text-base"
            >NUESTROS PROYECTOS</router-link
          >
        </div>
        <div
          class="w-24 h-16 pt-5 hover:bg-indigo-600 hover:text-white text-indigo-600"
        >
          <router-link
            :to="{ name: 'Contacto' }"
            class=" font-semibold text-sm md:text-base"
            >CONTACTO</router-link
          >
        </div>
      </div>
    </nav>
    <!-- End desktop navbar -->
    <!-- Start mobile navbar -->
    <nav id="navbar-mobile" class="sm:hidden z-40">
      <button
        @click="mobileNavOpen = true"
        v-if="!mobileNavOpen"
        id="display-menu"
        class="absolute right-3 top-10"
      >
        <i class="fas fa-bars fa-2x"></i>
      </button>
      <button @click="mobileNavOpen = false" v-else>
        <i class="fas fa-times fa-2x top-10 right-4 absolute"></i>
      </button>
      <div
        class="mobile-navbar w-40 z-40 relative bg-yellow-400 top-0 right-1"
        v-if="mobileNavOpen"
      >
        <router-link
          :to="{ name: 'Inicio' }"
          class="text-indigo-600 font-semibold block"
          >INICIO</router-link
        >
        <router-link
          :to="{ name: 'QuienesSomos' }"
          class="text-indigo-600 font-semibold block"
          >QUIENES SOMOS</router-link
        >
        <router-link
          :to="{ name: 'NuestrosProyectos' }"
          class="text-indigo-600 font-semibold  block"
          >NUESTROS PROYECTOS</router-link
        >
        <router-link
          :to="{ name: 'Contacto' }"
          class="text-indigo-600 font-semibold  block"
          >CONTACTO</router-link
        >
      </div>
    </nav>
    <!-- End mobile navbar -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      mobileNavOpen: false,
      openMenu: false,
    };
  },
});
</script>

<style scoped>
@media (max-width: 641px) {
  #navbar-links {
    display: none;
  }
}

@media (min-width: 840) {
  * router-link {
    font-size: 0.875rem;
  }
}
</style>
