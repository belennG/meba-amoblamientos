<template>
  <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" class="h-full w-full" />
      </div>
    </transition-group>
    <a
      class="prev cursor-pointer absolute w-auto font-bold rounded-lg hover:bg-opacity-90 top-1/3 left-0"
      @click="prev"
      href="#"
      >&#10094; Previous</a
    >
    <a
      class="next cursor-pointer absolute w-auto font-bold rounded-lg hover:bg-opacity-90 top-1/3 right-0"
      @click="next"
      href="#"
      >&#10095; Next</a
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MEBA2 from "@/assets/inicio-slider/MEBA4.jpeg";
import MEBA4 from "@/assets/inicio-slider/MEBA4.jpeg";
import MEBA5 from "@/assets/inicio-slider/MEBA4.jpeg";
import MEBA9 from "@/assets/inicio-slider/MEBA4.jpeg";
import MEBA13 from "@/assets/inicio-slider/MEBA4.jpeg";
import MEBA14 from "@/assets/inicio-slider/MEBA4.jpeg";
import MEBA15 from "@/assets/inicio-slider/MEBA4.jpeg";
import MEBA16 from "@/assets/inicio-slider/MEBA4.jpeg";

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
