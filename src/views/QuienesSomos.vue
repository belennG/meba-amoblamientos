<template>
  <div>
    <NavBar />
    <h1>Quienes Somos</h1>
    <Testimonials />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from "@/components/NavBar.vue";
import Testimonials from "@/components/Testimonials.vue";

export default Vue.extend({
  components: {
    NavBar,
    Testimonials,
  },
});
</script>

<style scoped></style>
