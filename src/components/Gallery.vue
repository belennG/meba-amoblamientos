<template>
  <div class="gallery px-2 py-2 grid grid-cols-3">
    <div
      class="gallery-panel flex flex-col items-center justify-center grow hover:cursor-pointer"
      v-for="(photo, index) in photos"
      :key="index"
    >
      <!-- <router-link :to="`/photo/${photo.id}`"> -->
      <img
        :src="photo.image[0]"
        class="w-3/4 h-3/4 cover"
        @click="showSlider(index)"
      />
      <!-- </router-link> -->
      <p>{{ photo.name }}</p>
      <p>{{ photo.provincia }}</p>
    </div>
    <!-- Modal window -->
    <div
      class="modal-window"
      v-if="selectedIndexToShowAsSlider != -1"
      @click="hideSlider()"
    >
      <div
        class="w-screen h-screen fixed inset-0 bg-black bg-opacity-20 justify-center items-center z-50 p-10"
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
