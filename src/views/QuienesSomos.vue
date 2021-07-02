<template>
  <div>
    <h1>Quienes Somos</h1>
    <Testimonials />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Testimonials from "@/components/Testimonials.vue";

export default Vue.extend({
  components: {
    Testimonials,
  },
});
</script>

<style scoped></style>
