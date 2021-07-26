<template>
  <div class="gallery-wrapper px-4 py-24 lg:py-8">
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
