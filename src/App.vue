<template>
  <div id="app">
    <ContactInfo />
    <NavBar />
    <router-view />
    <!-- footer? -->
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ContactInfo from "@/components/ContactInfo.vue";
export default {
  name: "App",
  components: {
    NavBar,
    ContactInfo,
  },
};
</script>

<style></style>
