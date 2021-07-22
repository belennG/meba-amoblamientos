<template>
  <div class="h-full relative">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i" class="absolute h-full w-full">
        <img
          :src="currentImg"
          id="main-image"
          class="object-cover h-full w-full"
        />
      </div>
    </transition-group>
    <div class="buttons" v-if="showButtons">
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
    width: {
      type: String,
      // required: true,
    },
    heigth: {
      type: String,
      // required: true,
    },
  },
  data() {
    return {
      timer: null,
      currentIndex: 2,
      imagesAsData: this.images,
      showButtons: false,
    };
  },
  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 40000);
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
      return this.imagesAsData[
        Math.abs(this.currentIndex) % this.imagesAsData.length
      ];
    },
  },
});
</script>

<style>
/* #main-image {
  height: calc(100vh - 88px);
  width: calc(100vw - 120px);
  margin-left: 52px;
} */

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  /* position: absolute; */
  /* width: auto; */
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: auto;
  opacity: 0;
}
</style>
