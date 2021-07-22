<template>
  <div id="app">
    <ContactInfo />
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

import ContactInfo from "@/components/ContactInfo.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    NavBar,
    ContactInfo,
    Footer,
  },
};
</script>

<style>
/* body {
  font-family: "Metropolis" !important;
} */

@font-face {
  font-family: "Metropolis";
  src: local("Metropolis"),
    url(./fonts/metropolis/Webfonts/WOFF2/Metropolis-Regular.woff2)
      format("woff2");
}
</style>
