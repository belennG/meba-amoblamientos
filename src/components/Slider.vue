<template>
  <div class="h-screen">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i" class="relative">
        <img :src="currentImg" class="w-screen" id="main-image" />
      </div>
    </transition-group>
    <button
      class="prev cursor-pointer absolute font-bold rounded-lg hover:bg-opacity-90 top-2/4 left-0 h-30 w-30 hover:bg-gray-600"
      @click="prev"
      href="#"
    >
      <i class="fas fa-chevron-left fa-7x"></i>
    </button>
    <button
      class="next cursor-pointer absolute font-bold rounded-lg hover:bg-opacity-90 top-2/4 right-0 h-30 w-30 hover:bg-gray-600"
      @click="next"
      href="#"
    >
      <i class="fas fa-chevron-right fa-7x"></i>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MEBA2 from "@/assets/inicio-slider/MEBA2.jpeg";
import MEBA4 from "@/assets/inicio-slider/MEBA4.jpeg";
import MEBA5 from "@/assets/inicio-slider/MEBA5.jpeg";
import MEBA9 from "@/assets/inicio-slider/MEBA9.jpeg";
import MEBA13 from "@/assets/inicio-slider/MEBA13.jpeg";
import MEBA14 from "@/assets/inicio-slider/MEBA14.jpeg";
import MEBA15 from "@/assets/inicio-slider/MEBA15.jpeg";
import MEBA16 from "@/assets/inicio-slider/MEBA16.jpeg";

export default Vue.extend({
  name: "Slider",
  data() {
    return {
      images: [MEBA2, MEBA4, MEBA5, MEBA9, MEBA13, MEBA14, MEBA15, MEBA16],
      timer: null,
      currentIndex: 0,
    };
  },
  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
});
</script>

<style>
#main-image {
  height: calc(100vh - 88px);
  width: calc(100vw - 120px);
  margin-left: 52px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}
</style>
