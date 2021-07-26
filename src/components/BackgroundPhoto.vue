<template>
  <div style="" class="relative min-h-screen min-hw-screen bg-repeat-y ">
    <img
      :src="BG1"
      alt=""
      class="opacity-40 absolute inset-0 object-cover z-0 h-screen w-screen bg-repeat-y"
    />
    <div class="z-80 absolute w-full h-auto">
      <slot></slot>
    </div>
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
