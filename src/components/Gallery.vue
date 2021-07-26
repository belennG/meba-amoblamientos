<template>
  <div class="gallery px-2 py-2 grid grid-cols-3 space-x-1 lg:py-12">
    <div
      class="gallery-panel flex flex-col items-center grow hover:cursor-pointer space-y-2"
      v-for="(photo, index) in photos"
      :key="index"
    >
      <img
        :src="photo.image[0]"
        class="w-28 h-28 md:w-52 md:h-52 lg:w-80 lg:h-80 cover"
        @click="showSlider(index)"
      />
      <span class="description">
        <p class="text-xs md:text-2xl text-center">{{ photo.name }}</p>
        <p class="text-xs text-center md:text-2xl mb-2 lg:mb-5">
          {{ photo.provincia }}
        </p>
      </span>
    </div>
    <!-- Modal window -->
    <div
      class="modal-window"
      v-if="selectedIndexToShowAsSlider != -1"
      @click="hideSlider()"
    >
      <div
        class="w-screen h-screen fixed inset-0 bg-black bg-opacity-80 justify-center items-center z-50 p-10"
      >
        <Slider :images="photos[selectedIndexToShowAsSlider].image" />
        <!-- Props with the photo.id & index of the photo ? -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Slider from "@/components/Slider.vue";
import { Photos } from "../photos";

export default Vue.extend({
  components: { Slider },
  name: "Gallery",
  data() {
    return {
      showPhoto: false,
      selectedIndexToShowAsSlider: -1,
      photos: Photos,
    };
  },
  methods: {
    showSlider(index) {
      this.selectedIndexToShowAsSlider = index;
    },
    hideSlider() {
      this.selectedIndexToShowAsSlider = -1;
    },
  },
});
</script>

<style scoped>
.grow {
  transition: all 0.2s ease-in-out;
}

.grow:hover {
  transform: scale(1.1);
}
</style>
