<template>
  <div class="gallery-wrapper height relative px-4 py-4">
    <h1>Nuestros Proyectos</h1>
    <div class="">
      <Gallery />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Gallery from "@/components/Gallery.vue";
import { Photos } from "../photos";

export default Vue.extend({
  data() {
    return {
      photos: Photos,
    };
  },
  components: {
    Gallery,
  },
});
</script>

<style scoped>
.height {
  height: calc(100vh - 104px);
}
</style>
