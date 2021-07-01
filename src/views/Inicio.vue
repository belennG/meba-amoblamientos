<template>
  <div>
    <ContactInfo />
    <NavBar />
    <Slider />
    <Testimonials />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ContactInfo from "@/components/ContactInfo.vue";
import NavBar from "@/components/NavBar.vue";
import Slider from "@/components/Slider.vue";
import Testimonials from "@/components/Testimonials.vue";

export default Vue.extend({
  components: {
    ContactInfo,
    NavBar,
    Slider,
    Testimonials,
  },
});
</script>

<style scoped></style>
