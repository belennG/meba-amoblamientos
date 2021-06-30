<template>
  <div>
    <ContactInfo />
    <NavBar />
    <Slider />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ContactInfo from "@/components/ContactInfo.vue";
import NavBar from "@/components/NavBar.vue";
import Slider from "@/components/Slider.vue";

export default Vue.extend({
  components: {
    ContactInfo,
    NavBar,
    Slider,
  },
});
</script>

<style scoped></style>
