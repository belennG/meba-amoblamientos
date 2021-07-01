<template>
  <div style="">
    <img :src="BG1" alt="" class="h-screen w-screen opacity-40" />
    <h1>Envíenos su consulta</h1>
    <p>
      Estamos para responder todas sus dudas. Complete el formulario y
      contestaremos a la brevedad.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BG1 from "@/assets/background-image/MEBAbackground0.jpeg";

export default Vue.extend({
  data() {
    return {
      BG1: BG1,
    };
  },
});
</script>

<style scoped></style>
