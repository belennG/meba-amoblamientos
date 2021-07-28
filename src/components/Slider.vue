<template>
  <div class="h-full relative">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i" class="absolute h-full w-full">
        <img
          :src="currentImg"
          id="main-image"
          class="object-cover h-full w-full "
        />
      </div>
    </transition-group>
    <div class="buttons" v-if="showButtons">
      <button
        class="prev cursor-pointer relative font-bold rounded-lg hover:bg-opacity-90 top-28 md:top-104 xl:top-64 left-0 h-30 w-30  text-black"
        @click="prev"
        href="#"
      >
        <i class="fas fa-chevron-left fa-4x"></i>
      </button>
      <button
        class="next cursor-pointer absolute font-bold rounded-lg hover:bg-opacity-90 top-28 md:top-104 xl:top-64 right-0 h-30 w-30 text-black"
        @click="next"
        href="#"
      >
        <i class="fas fa-chevron-right fa-4x"></i>
      </button>
      <!-- <button class="absolute right-2 top-1" @click="hideSlider()">
        <i class="fas fa-times fa-2x"></i>
      </button> -->
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Slider",
  props: {
    images: {
      type: Array,
      required: true,
    },
    showButtons: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {
      timer: null,
      currentIndex: 2,
      imagesAsData: this.images,
      showButtonsData: false,
      selectedIndexToShowAsSlider: 0,
    };
  },
  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 50000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    },
    hideSlider() {
      this.selectedIndexToShowAsSlider = -1;
    },
  },

  computed: {
    currentImg: function() {
      return this.imagesAsData[
        Math.abs(this.currentIndex) % this.imagesAsData.length
      ];
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
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: auto;
  opacity: 0;
}
</style>
