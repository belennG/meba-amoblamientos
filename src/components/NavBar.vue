<template>
  <div class="z-40">
    <!-- Start Desktop Navbar -->
    <nav
      id="navbar"
      :class="{ scrolled: !view.atTopOfPage }"
      class="fixed bg-isabelline md:border-b md:md:justify-between md:p-5 md:m-auto md:animated md:flex md:w-full md:h-20 md:z-40 hidden md:visible md:justify-between"
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
        <h1
          class="text-hunter-green font-bold font-metropolis invisible md:visible"
        >
          Amoblamientos MEBA
        </h1>
      </router-link>
      <div
        class="flex md:items-center md:space-x-4 text-hunter-green font-bold invisible md:visible"
        id="navbar-links"
      >
        <div
          class="w-20 h-16 hover:text-gray-700 hover:underline router-link-container "
        >
          <router-link
            :to="{ name: 'Inicio' }"
            class="text-sm md:text-base top-12 font-metropolis "
            >INICIO</router-link
          >
        </div>
        <div
          class="w-16 h-16 hover:text-gray-700 hover:underline  flex router-link-container"
        >
          <router-link
            :to="{ name: 'QuienesSomos' }"
            class=" text-sm md:text-base "
            >QUIENES SOMOS</router-link
          >
        </div>
        <div
          class="w-24 h-16 hover:text-gray-700 hover:underline  router-link-container "
        >
          <router-link
            :to="{ name: 'NuestrosProyectos' }"
            class=" font-semibold text-sm md:text-base "
            >NUESTROS PROYECTOS</router-link
          >
        </div>
        <div
          class="w-24 h-16 hover:text-gray-700 hover:underline  router-link-container"
        >
          <router-link
            :to="{ name: 'Contacto' }"
            class=" font-semibold text-sm md:text-base "
            >CONTACTO</router-link
          >
        </div>
      </div>
    </nav>
    <!-- End desktop navbar -->
    <!-- Start mobile navbar -->
    <nav
      id="navbar-mobile"
      class="visible bg-isabelline md:invisible z-40 w-screen flex relative"
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
        <h1
          class="text-hunter-green font-bold font-metropolis visible md:invisible"
        >
          Amoblamientos MEBA
        </h1>
      </router-link>
      <button
        @click="mobileNavOpen = true"
        v-if="!mobileNavOpen"
        id="display-menu"
        class="absolute right-2 top-4"
      >
        <i class="fas fa-bars fa-2x text-hunter-green"></i>
      </button>
      <button @click="mobileNavOpen = false" v-else>
        <i class="fas fa-times fa-2x top-4 right-2 absolute"></i>
      </button>
      <transition name="fade">
        <div
          class="mobile-navbar w-full z-40 absolute bg-isabelline top-0 right-0 px-1 py-1 mt-16"
          v-if="mobileNavOpen"
        >
          <router-link
            :to="{ name: 'Inicio' }"
            class="text-hunter-green font-semibold block hover:bg-hunter-green hover:text-isabelline text-center"
            >INICIO</router-link
          >
          <router-link
            :to="{ name: 'QuienesSomos' }"
            class="text-hunter-green text-center font-semibold block hover:bg-hunter-green hover:text-isabelline"
            >QUIENES SOMOS</router-link
          >
          <router-link
            :to="{ name: 'NuestrosProyectos' }"
            class="text-hunter-green text-center font-semibold  block hover:bg-hunter-green hover:text-isabelline"
            >NUESTROS PROYECTOS</router-link
          >
          <router-link
            :to="{ name: 'Contacto' }"
            class="text-hunter-green text-center font-semibold  block hover:bg-hunter-green hover:text-isabelline"
            >CONTACTO</router-link
          >
        </div>
      </transition>
    </nav>
    <!-- End mobile navbar -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  watch: {
    $route() {
      this.mobileNavOpen = false;
    },
  },
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
</style>
