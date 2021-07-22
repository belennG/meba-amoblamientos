<template>
  <div class="z-40">
    <!-- Start Desktop Navbar -->
    <nav
      id="navbar"
      :class="{ scrolled: !view.atTopOfPage }"
      class="fixed bg-isabelline border-b justify-between p-5 m-auto animated flex w-auto md:w-full h-20 z-40"
    >
      <router-link
        :to="{ name: 'Inicio' }"
        class="navbar flex items-center w-30"
      >
        <img
          src="@/assets/MEBAlogo.jpeg"
          alt="meba-logo"
          class="h-16 w-16 pl-2"
        />
        <h1 class="text-hunter-green font-bold font-metropolis">
          Amoblamientos MEBA
        </h1>
      </router-link>
      <div
        class="flex justify-end items-center space-x-4 text-black font-bold "
        id="navbar-links"
      >
        <div
          class="w-20 h-16 hover:text-gray-700 hover:underline text-black router-link-container "
        >
          <router-link
            :to="{ name: 'Inicio' }"
            class="text-sm md:text-base top-12 font-metropolis text-hunter-green"
            >INICIO</router-link
          >
        </div>
        <div
          class="w-16 h-16 hover:text-gray-700 hover:underline text-black flex router-link-container"
        >
          <router-link
            :to="{ name: 'QuienesSomos' }"
            class=" text-sm md:text-base text-hunter-green"
            >QUIENES SOMOS</router-link
          >
        </div>
        <div
          class="w-24 h-16 hover:text-gray-700 hover:underline text-black router-link-container "
        >
          <router-link
            :to="{ name: 'NuestrosProyectos' }"
            class=" font-semibold text-sm md:text-base text-hunter-green"
            >NUESTROS PROYECTOS</router-link
          >
        </div>
        <div
          class="w-24 h-16 hover:text-gray-700 hover:underline text-black router-link-container"
        >
          <router-link
            :to="{ name: 'Contacto' }"
            class=" font-semibold text-sm md:text-base text-hunter-green"
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
        class="mobile-navbar w-40 z-40 absolute bg-yellow-400 top-0 right-1 px-1 py-1"
        style="margin-top:90px"
        v-if="mobileNavOpen"
      >
        <router-link
          :to="{ name: 'Inicio' }"
          class="text-indigo-600 font-semibold block hover:bg-yellow-50"
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
      view: {
        atTopOfPage: true,
      },
      mobileNavOpen: false,
      openMenu: false,
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.view.atTopOfPage) this.view.atTopOfPage = false;
      } else {
        // user is at top of page
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true;
      }
    },
  },
});
</script>

<style scoped>
/* nav {
  z-index: 10;
} */

nav.scrolled {
  @apply shadow-2xl;
  border-bottom: 0px;
  top: 0;
}

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

.router-link-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
