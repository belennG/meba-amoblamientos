<template>
  <div>
    <Slider />
    <Testimonials />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Slider from "@/components/Slider.vue";
import Testimonials from "@/components/Testimonials.vue";

export default Vue.extend({
  components: {
    Slider,
    Testimonials,
  },
});
</script>

<style scoped></style>
