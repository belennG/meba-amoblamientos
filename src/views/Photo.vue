<template>
  <div>
    <Photo />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Photo from "@/components/Photo.vue";

export default Vue.extend({
  components: {
    Photo,
  },
});
</script>

<style scoped></style>
