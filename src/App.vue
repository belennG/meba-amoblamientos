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
body {
  font-family: rubik;
}
</style>
