<template>
  <div class="h-screen w-screen z-40">
    <Slider />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Slider from "@/components/Slider.vue";

export default Vue.extend({
  components: {
    Slider,
  },
  data() {
    return {
      showButtons: true,
    };
  },
});
</script>

<style scoped></style>
